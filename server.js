'use strict';

const WebSocket = require('ws');
const express = require('express');
const path = require('path');
const https = require('https');
const fs    = require('fs');

// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const HTTP_PORT   = process.env.PORT    || 3000;
// WS_PORT removed — WebSocket shares the HTTP server (Railway single-port)
const MAP_RADIUS  = 500;
const TICK_MS     = 95;
const TARGET_PORTIONS = 15000;

// ─────────────────────────────────────────────
// HELPER: BINARY CODEC
// ─────────────────────────────────────────────

/** Encode float ±10000 into 3 bytes (big-endian). */
function packFloat(value) {
  const norm = (value / 10000 + 1) * 8388608;
  const n = Math.max(0, Math.min(16777215, Math.round(norm)));
  return [(n >> 16) & 0xFF, (n >> 8) & 0xFF, n & 0xFF];
}

/** Decode 3-byte packed float. */
function unpackFloat(b0, b1, b2) {
  const n = ((b0 & 0xFF) << 16) | ((b1 & 0xFF) << 8) | (b2 & 0xFF);
  return ((n & 0xFFFFFF) / 8388608 - 1) * 10000;
}

/** Variable-length encode an integer. */
function encodeVLE(n) {
  if (n < 128)     return [n];
  if (n < 16384)   return [128 | (n >> 7), n & 127];
  if (n < 2097152) return [128 | (n >> 14), 128 | ((n >> 7) & 127), n & 127];
  return [128 | (n >> 21), 128 | ((n >> 14) & 127), 128 | ((n >> 7) & 127), n & 127];
}

/** Encode (x,y) coordinate pair into a u32 portion-ID. */
function encodePortionId(x, y, mapRadius) {
  const scale = mapRadius * 1.02;
  const xe = Math.round((x / scale + 1) * 32768) & 0xFFFF;
  const ye = Math.round((y / scale + 1) * 32768) & 0xFFFF;
  return ((ye << 16) | xe) >>> 0;           // unsigned 32-bit
}

/** Decode portion-ID back to (x,y). */
function decodePortionId(id, mapRadius) {
  const scale = mapRadius * 1.02;
  const xe = id & 0xFFFF;
  const ye = (id >>> 16) & 0xFFFF;
  return { x: (xe / 32768 - 1) * scale, y: (ye / 32768 - 1) * scale };
}

// ─────────────────────────────────────────────
// MINIMAP CIRCLE MARGIN
// ─────────────────────────────────────────────
const CIRCLE_MARGIN = [
  34,29,26,24,22,20,18,17,15,14,13,12,11,10,9,8,8,7,6,6,
  5,5,4,4,3,3,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,3,3,
  4,4,5,5,6,6,7,8,8,9,10,11,12,13,14,15,17,18,20,22,24,26,29,34
];

// ─────────────────────────────────────────────
// WORM CLASS
// ─────────────────────────────────────────────
class Worm {
  constructor(id, x, y) {
    this.id        = id;
    this.alive     = true;
    this.sprinting = false;
    this.angle     = Math.random() * Math.PI * 2;
    this.targetAngle = this.angle;

    this.segments  = new Float32Array(400); // max 200 segs * 2 coords
    this.segCount  = 3;

    this.segments[0] = x;       this.segments[1] = y;
    this.segments[2] = x - 0.5; this.segments[3] = y;
    this.segments[4] = x - 1.0; this.segments[5] = y;

    this.rawWeight = 0.26;
    this.score     = 13;
    this.ib        = 0;
    this.radius    = 0;
    this.updateSize();

    this.nickname  = '';
    this.skinId    = 32;
    this.eyesId    = 0;
    this.mouthId   = 0;
    this.glassesId = 0;
    this.hatId     = 0;
    this.teamId    = 0;

    // abilities: { [abilityType]: { active, charge, timeLeft } }
    this.abilities = {};

    // for delta tracking: was it just spawned this tick?
    this.isNew     = true;
    this.needFullUpdate = true;
    this.weightDirty = true;
  }

  updateSize() {
    const e = this.rawWeight > 4000
      ? Math.atan((this.rawWeight - 4000) / 7000) * 7000 + 4000
      : this.rawWeight;
    const o = Math.sqrt(4 * Math.pow(5 * e, 0.707106781186548) + 25);
    const oldSeg = Math.floor(this.segCount);
    const newSeg = Math.max(3, Math.min(200, Math.floor(5 * (o - 5) + 1)));

    this.ib     = 0.025 * (5 + 0.9 * o);
    this.radius = this.ib;

    this.segCount = newSeg;
    // Extend tail segments if growing
    if (oldSeg > 0 && oldSeg < newSeg) {
      for (let i = oldSeg; i < newSeg; i++) {
        this.segments[2 * i]     = this.segments[2 * (oldSeg - 1)];
        this.segments[2 * i + 1] = this.segments[2 * (oldSeg - 1) + 1];
      }
    }
  }

  get headX() { return this.segments[0]; }
  get headY() { return this.segments[1]; }
}

// ─────────────────────────────────────────────
// PORTION CLASS
// ─────────────────────────────────────────────
class Portion {
  constructor(id, x, y, size, skinType, teamId = 0) {
    this.id       = id;
    this.x        = x;
    this.y        = y;
    this.size     = size;
    this.skinType = skinType;
    this.teamId   = teamId;
    this.alive    = true;
    this.isNew    = true;
    this.spawnTime= Date.now();
  }
}

// ─────────────────────────────────────────────
// PHYSICS
// ─────────────────────────────────────────────
function updateChain(worm, newHX, newHY) {
  const segs     = worm.segments;
  const segCount = worm.segCount;
  const ib       = worm.ib;

  const h = Math.hypot(segs[0] - newHX, segs[1] - newHY);
  if (h === 0) return;

  segs[0] = newHX;
  segs[1] = newHY;

  const l = ib / (ib + h);
  const p = 1 - 2 * l;

  let prevX = segs[0], prevY = segs[1];

  for (let u = 1; u < segCount - 1; u++) {
    const sx = segs[2 * u];
    segs[2 * u]     = segs[2 * u - 2] * p + (sx + prevX) * l;
    prevX            = sx;
    const sy = segs[2 * u + 1];
    segs[2 * u + 1] = segs[2 * u - 1] * p + (sy + prevY) * l;
    prevY            = sy;
  }

  // Last segment
  const vi     = worm.segCount - Math.floor(worm.segCount);
  const lLast  = vi > 0 ? (vi * ib) / (vi * ib + h) : l;
  const pLast  = 1 - 2 * lLast;
  const lastIdx = segCount - 1;
  segs[2 * lastIdx]     = segs[2 * (lastIdx - 1)] * pLast + (segs[2 * lastIdx]     + prevX) * lLast;
  segs[2 * lastIdx + 1] = segs[2 * (lastIdx - 1) + 1] * pLast + (segs[2 * lastIdx + 1] + prevY) * lLast;
}

function updateWormPosition(worm, deltaMs) {
  const BASE_SPEED   = 4.0;
  const SPRINT_SPEED = 8.0;
  const MIN_SCORE_TO_SPRINT = 13; // score awal spawn — tidak boleh sprint di score ini

  const velocityAb = worm.abilities[0];
  const hasVelocity = velocityAb && velocityAb.active;

  // Blokir sprint kalau score masih sama dengan score awal (12.5)
  const canSprint = worm.score > MIN_SCORE_TO_SPRINT;

  // Speed ability only affects sprinting, not normal movement
  const speed = (worm.sprinting && canSprint)
    ? SPRINT_SPEED * (hasVelocity ? 1.125 : 1.0)
    : BASE_SPEED;
  const dist       = speed * (deltaMs / 1000);

  if (worm.sprinting && canSprint) {
    const prev = worm.rawWeight;
    worm.rawWeight = Math.max(0.25, worm.rawWeight - dist * 0.1);
    worm.score     = 50 * worm.rawWeight;
    if (Math.abs(worm.rawWeight - prev) > 0.001) {
      worm.updateSize();
      worm.weightDirty = true;
    }
  }

  // Smooth turning: clamp per-tick turn (matches worm.ts smoothAngle logic)
  // maxTurn = 0.15 rad/tick (≈ 4.5 rad/sec at ~30 tps, TICK_MS=95)
  const maxTurn = 0.65;
  let diff = worm.targetAngle - worm.angle;
  // Normalize to [-PI, PI] for shortest path rotation
  while (diff >  Math.PI) diff -= Math.PI * 2;
  while (diff < -Math.PI) diff += Math.PI * 2;
  diff = Math.max(-maxTurn, Math.min(maxTurn, diff));
  worm.angle += diff;

  const newHX = worm.segments[0] + Math.cos(worm.angle) * dist;
  const newHY = worm.segments[1] + Math.sin(worm.angle) * dist;
  updateChain(worm, newHX, newHY);
}

function checkBoundary(worm) {
  return Math.hypot(worm.segments[0], worm.segments[1]) > MAP_RADIUS;
}

function checkWormCollision(attacker, target) {
  if (!attacker.alive || !target.alive) return { hit: false };
  const hx = attacker.segments[0];
  const hy = attacker.segments[1];
  const ar = attacker.ib;

  // Head-on head collision
  const thx = target.segments[0];
  const thy = target.segments[1];
  if (Math.hypot(hx - thx, hy - thy) < ar + target.ib) {
    return { hit: true, isHeadshot: true };
  }

  // Head vs body
  for (let i = 1; i < target.segCount; i++) {
    const bx   = target.segments[2 * i];
    const by   = target.segments[2 * i + 1];
    const dist = Math.hypot(hx - bx, hy - by);
    if (dist < ar + target.ib * 0.5) {
      return { hit: true, isHeadshot: false };
    }
  }
  return { hit: false };
}

function checkPortionEating(worm, portions) {
  const hx         = worm.segments[0];
  const hy         = worm.segments[1];
  // Semakin besar cacing (ib besar), radius makan dikurangi agar tidak terlalu lebar
  const eatRadius  = worm.ib * 3;
  const magnetAb   = worm.abilities[2];
  const magRadius  = (magnetAb && magnetAb.active) ? eatRadius * 1 : eatRadius;

  const eaten = [];
  for (const [id, p] of portions) {
    if (!p.alive) continue;
    if (Math.hypot(hx - p.x, hy - p.y) < magRadius) {
      eaten.push(p);
    }
  }
  return eaten;
}

function eatPortion(worm, portion) {
  let mul = 0;
  if (worm.abilities[3] && worm.abilities[3].active) mul += 2;
  if (worm.abilities[4] && worm.abilities[4].active) mul += 5;
  if (worm.abilities[5] && worm.abilities[5].active) mul += 10;
  if (mul === 0) mul = 1;

  worm.rawWeight += portion.size * 0.1 * mul;
  worm.score      = 50 * worm.rawWeight;
  worm.updateSize();
  worm.weightDirty = true;

  if (portion.skinType === 87) {
    // Energy: instantly add random score 50-200 (also multiplied)
    const bonus = (50 + Math.floor(Math.random() * 151)) * mul;
    worm.score     += bonus;
    worm.rawWeight  = worm.score / 50;
    worm.updateSize();
    worm.weightDirty = true;
  } else if (portion.skinType >= 81 && portion.skinType <= 88) {
    activateAbility(worm, portion.skinType);
  }
}

function activateAbility(worm, skinType) {
  const typeMap = { 81:0, 82:1, 83:2, 84:3, 85:4, 86:5, 87:6, 88:6 };
  const durations = { 
  0: 40000, // Speed tetap 10 detik
  1: 40000, // Flex tetap 15 detik
  2: 40000, // Magnet diubah ke 30 detik
  3: 120000, // x2 tetap 15 detik
  4: 40000, // x5 tetap 10 detik
  5: 20000, // x10 diubah ke 15 detik
  6: 40000  // zoom tetap 12 detik
};
  const type = typeMap[skinType];
  if (type === undefined) return;
  const totalTime = durations[type] || 10000;
  // FIX: store totalTime so the charge% (0-100) decrement is correct regardless of duration
  worm.abilities[type] = { active: true, charge: 100, timeLeft: totalTime, totalTime };
}

// ─────────────────────────────────────────────
// SPAWN PORTIONS
// ─────────────────────────────────────────────
let gPortionSeq = 0;

function spawnPortions(room, maxAttempts = 200) {
  const needed = TARGET_PORTIONS - room.portions.size;
  if (needed <= 0) return;

  let spawned = 0;
  let attempts = 0;

  // ── Prioritas 1: respawn di sekitar area yang baru dikosongkan ──
  // Ambil spots dari queue, spawn beberapa portion di radius kecil sekitar tiap spot
  // Optimasi: batasi jumlah spots yang diproses per call
  const maxSpotsPerCall = Math.min(50, room.recentEatenSpots.length);
  
  for (let s = 0; s < maxSpotsPerCall && spawned < needed && attempts < maxAttempts; s++) {
    if (room.recentEatenSpots.length === 0) break;
    attempts++;
    const spot = room.recentEatenSpots.shift();
    // Scatter dalam radius 30 unit di sekitar spot yang dikosongkan
    const scatter = 30;
    const jx = spot.x + (Math.random() - 0.5) * scatter;
    const jy = spot.y + (Math.random() - 0.5) * scatter;
    // Pastikan masih dalam batas map
    if (Math.hypot(jx, jy) >= MAP_RADIUS * 0.98) continue;
    const id = encodePortionId(jx, jy, MAP_RADIUS);
    if (room.portions.has(id)) continue;
    const roll = Math.random();
    const skinType = roll < 0.65 ? Math.floor(Math.random() * 32) : 81 + Math.floor(Math.random() * 8);
    const size = 0.5 + Math.random() * 2.0;
    const p = new Portion(id, jx, jy, size, skinType);
    room.portions.set(id, p);
    room.newPortionsThisTick.push(p);
    spawned++;
  }

  // ── Prioritas 2: isi sisa kekurangan secara random di seluruh map ──
  while (room.portions.size < TARGET_PORTIONS && attempts < maxAttempts && spawned < needed) {
    attempts++;
    const angle = Math.random() * Math.PI * 2;
    const r     = Math.sqrt(Math.random()) * MAP_RADIUS * 0.95;
    const x     = r * Math.cos(angle);
    const y     = r * Math.sin(angle);
    const roll  = Math.random();
    const skinType = roll < 0.65 ? Math.floor(Math.random() * 32) : 81 + Math.floor(Math.random() * 8);
    const size  = 0.5 + Math.random() * 2.0;
    const jx = x + (Math.random() - 0.5) * 0.5;
    const jy = y + (Math.random() - 0.5) * 0.5;
    const id = encodePortionId(jx, jy, MAP_RADIUS);
    if (!room.portions.has(id)) {
      const p = new Portion(id, jx, jy, size, skinType);
      room.portions.set(id, p);
      room.newPortionsThisTick.push(p);
      spawned++;
    }
  }
}

function convertWormToFood(worm, room) {
  const foodSize = Math.max(0.5, worm.rawWeight / Math.max(1, worm.segCount) * 2);
  for (let i = 0; i < worm.segCount; i++) {
    const x  = worm.segments[2 * i] + (Math.random() - 0.5) * 2;
    const y  = worm.segments[2 * i + 1] + (Math.random() - 0.5) * 2;
    const sk = Math.floor(Math.random() * 32);
    const id = encodePortionId(x, y, MAP_RADIUS);
    if (!room.portions.has(id)) {
      const p = new Portion(id, x, y, foodSize, sk);
      room.portions.set(id, p);
      room.newPortionsThisTick.push(p);
    }
  }
}

// ─────────────────────────────────────────────
// PACKET BUILDERS
// ─────────────────────────────────────────────

function buildGameParams(wormId, gameMode, mapRadius) {
  const buf = Buffer.alloc(16);
  const dv  = new DataView(buf.buffer);
  buf[0] = 0;
  buf[1] = gameMode;
  dv.setUint16(2, wormId, false);    // BE
  dv.setFloat32(4, mapRadius, false);
  dv.setFloat32(8, 4000.0, false);
  dv.setFloat32(12, 7000.0, false);
  return buf;
}

function buildGameOver() {
  return Buffer.from([5]);
}

function buildWormKilledMsg(victimId, isHeadshot) {
  const buf = Buffer.alloc(4);
  buf[0] = 6;
  buf[1] = (victimId >> 8) & 0xFF;
  buf[2] = victimId & 0xFF;
  buf[3] = isHeadshot ? 1 : 0;
  return buf;
}

function buildScoreboard(onlineCount, myRank, top10Worms, gameMode, teams) {
  const teamData  = (gameMode === 16) ? teams : [];
  const teamBytes = gameMode === 16 ? 1 + teamData.length * 5 : 0;
  const buf       = Buffer.alloc(5 + 1 + top10Worms.length * 6 + teamBytes);
  const dv        = new DataView(buf.buffer);
  let   off       = 0;

  buf[off++] = 3;
  dv.setUint16(off, onlineCount, false); off += 2;
  dv.setUint16(off, myRank || 500, false); off += 2;

  buf[off++] = top10Worms.length;
  for (const w of top10Worms) {
    dv.setUint16(off, w.id, false); off += 2;
    dv.setFloat32(off, w.score, false); off += 4;   // FIX: send score (50*rawWeight), not rawWeight
  }

  if (gameMode === 16) {
    buf[off++] = teamData.length;
    for (const t of teamData) {
      buf[off++] = t.id;
      dv.setFloat32(off, t.score, false); off += 4;
    }
  }
  return buf.slice(0, off);
}

function buildMinimap(worms, mapRadius) {
  const pixels = new Uint8Array(80 * 80);
  
  // Optimasi: Gambar dengan interval segmen untuk performa lebih baik
  for (const w of worms) {
    if (!w.alive) continue;
    
    // Untuk cacing kecil (< 10 segmen), gambar semua segmen
    // Untuk cacing besar, skip beberapa segmen untuk performa
    const segmentStep = w.segCount > 20 ? 2 : 1; // Skip alternate segments untuk cacing besar
    const minimapRadius = Math.max(1, Math.min(2, Math.round(w.ib / 15))); // Kurangi radius max ke 2
    
    for (let i = 0; i < w.segCount; i += segmentStep) {
      const segX = w.segments[2 * i];
      const segY = w.segments[2 * i + 1];
      
      // Konversi koordinat world ke minimap (80x80)
      const mx = Math.round(((segX / mapRadius) + 1) * 0.5 * 79);
      const my = Math.round(((segY / mapRadius) + 1) * 0.5 * 79);
      const cx = Math.max(0, Math.min(79, mx));
      const cy = Math.max(0, Math.min(79, my));
      
      // Set pixel untuk segmen ini
      pixels[cy * 80 + cx] = 1;
      
      // Gambar radius yang lebih kecil untuk performa
      if (minimapRadius > 1) {
        for (let dy = -minimapRadius; dy <= minimapRadius; dy++) {
          for (let dx = -minimapRadius; dx <= minimapRadius; dx++) {
            // Gambar lingkaran, bukan kotak
            if (dx * dx + dy * dy <= minimapRadius * minimapRadius) {
              const px = cx + dx;
              const py = cy + dy;
              if (px >= 0 && px < 80 && py >= 0 && py < 80) {
                pixels[py * 80 + px] = 1;
              }
            }
          }
        }
      }
    }
  }

  const bitmap = [];
  let bitBuf = 0, bitCnt = 0;
  for (let row = 0; row < 80; row++) {
    const start = CIRCLE_MARGIN[row];
    const end   = 80 - CIRCLE_MARGIN[row];
    for (let col = start; col < end; col++) {
      const bit = pixels[row * 80 + col];
      bitBuf |= (bit << bitCnt);
      bitCnt++;
      if (bitCnt === 8) {
        bitmap.push(bitBuf & 0xFF);
        bitBuf = 0; bitCnt = 0;
      }
    }
  }
  if (bitCnt > 0) bitmap.push(bitBuf & 0xFF);

  const buf = Buffer.alloc(629);
  buf[0] = 2;
  for (let i = 0; i < Math.min(628, bitmap.length); i++) buf[1 + i] = bitmap[i];
  return buf;
}

/** Build one full-worm-update chunk (no type byte, used inside buildGameState). */
function buildFullWormChunk(w, gameMode) {
  const segs     = w.segCount;
  const segBytes = segs * 6;
  const vleSegs  = encodeVLE(segs);
  const baseSz   = 2 + 4 + vleSegs.length + segBytes;  // wormId(2) + rawWeight(4) + VLE + segs
  const buf      = Buffer.alloc(baseSz);
  const dv       = new DataView(buf.buffer);
  let   off      = 0;

  dv.setUint16(off, w.id, false); off += 2;
  dv.setFloat32(off, w.rawWeight, false); off += 4;
  for (const b of vleSegs) buf[off++] = b;

  for (let i = 0; i < segs; i++) {
    const [x0, x1, x2] = packFloat(w.segments[2 * i]);
    const [y0, y1, y2] = packFloat(w.segments[2 * i + 1]);
    buf[off++] = x0; buf[off++] = x1; buf[off++] = x2;
    buf[off++] = y0; buf[off++] = y1; buf[off++] = y2;
  }
  return buf.slice(0, off);
}

/** Build one compact-worm-update chunk. */
function buildCompactWormChunk(w) {
  const abilities = Object.entries(w.abilities)
    .filter(([, ab]) => ab.active)
    .map(([type, ab]) => [+type, Math.min(100, Math.max(0, Math.round(100 - ab.charge)))]); // invert: 0=just got, 100=about to expire (triggers blink)

  const canSprint = w.score > 13;
  let flags = 0;
  if (w.sprinting && canSprint) flags |= 1;
  const incWeight = true;
  if (incWeight)       flags |= 2;

  const vleAb  = encodeVLE(abilities.length);
  const sz     = 2 + 1 + (incWeight ? 4 : 0) + 6 + vleAb.length + abilities.length * 2;
  const buf    = Buffer.alloc(sz);
  const dv     = new DataView(buf.buffer);
  let   off    = 0;

  dv.setUint16(off, w.id, false); off += 2;
  buf[off++] = flags;
  if (incWeight) { dv.setFloat32(off, w.rawWeight, false); off += 4; }

  const [hx0, hx1, hx2] = packFloat(w.segments[0]);
  const [hy0, hy1, hy2] = packFloat(w.segments[1]);
  buf[off++] = hx0; buf[off++] = hx1; buf[off++] = hx2;
  buf[off++] = hy0; buf[off++] = hy1; buf[off++] = hy2;

  for (const b of vleAb) buf[off++] = b;
  for (const [type, charge] of abilities) { buf[off++] = type; buf[off++] = charge; }
  return buf.slice(0, off);
}

/** Build player-state block (appended at end of MSG_GAME_STATE). */
function buildPlayerStateChunk(pw) {
  const abilities = Object.entries(pw.abilities)
    .filter(([, ab]) => ab.active)
    .map(([type, ab]) => [+type, Math.min(100, Math.max(0, Math.round(100 - ab.charge)))]); // invert: 0=just got, 100=about to expire (triggers blink)

  const canSprint = pw.score > 13;
  let flags = 0;
  if (pw.sprinting && canSprint) flags |= 1;
  const incWt  = true; if (incWt) flags |= 2;

  const vleAb  = encodeVLE(abilities.length);
  const sz     = 1 + (incWt ? 4 : 0) + 6 + vleAb.length + abilities.length * 2;
  const buf    = Buffer.alloc(sz);
  const dv     = new DataView(buf.buffer);
  let   off    = 0;

  buf[off++] = flags;
  if (incWt) { dv.setFloat32(off, pw.rawWeight, false); off += 4; }

  const [hx0, hx1, hx2] = packFloat(pw.segments[0]);
  const [hy0, hy1, hy2] = packFloat(pw.segments[1]);
  buf[off++] = hx0; buf[off++] = hx1; buf[off++] = hx2;
  buf[off++] = hy0; buf[off++] = hy1; buf[off++] = hy2;

  for (const b of vleAb) buf[off++] = b;
  for (const [type, charge] of abilities) { buf[off++] = type; buf[off++] = charge; }
  return buf.slice(0, off);
}

/** Encode a new-worm announcement block (used inside new-worms list). */
function buildNewWormBlock(w, gameMode) {
  const nick     = w.nickname.slice(0, 32);
  const nickLen  = nick.length;
  const baseSz   = 2 + (gameMode === 16 ? 1 : 0) + 10 + 1 + nickLen * 2;
  const buf      = Buffer.alloc(baseSz);
  const dv       = new DataView(buf.buffer);
  let   off      = 0;

  dv.setUint16(off, w.id, false); off += 2;
  if (gameMode === 16) buf[off++] = w.teamId;
  dv.setUint16(off, w.skinId,    false); off += 2;
  dv.setUint16(off, w.eyesId,    false); off += 2;
  dv.setUint16(off, w.mouthId,   false); off += 2;
  dv.setUint16(off, w.glassesId, false); off += 2;
  dv.setUint16(off, w.hatId,     false); off += 2;
  buf[off++] = nickLen;
  for (let i = 0; i < nickLen; i++) {
    dv.setUint16(off, nick.charCodeAt(i), false); off += 2;
  }
  return buf.slice(0, off);
}

/**
 * Build a complete MSG_GAME_STATE (type 1) packet.
 *
 * @param {object} opts
 */
function buildGameState({
  serverTime,
  gameMode,
  newPortions        = [],   // Portion[]
  vanishedPortions   = [],   // portionId[]
  portionEatenByWorm = [],   // {portionId, wormId}[]
  newWorms           = [],   // Worm[] (announced for first time)
  fadingWorms        = [],   // wormId[]
  fullWormUpdates    = [],   // Worm[] (full body)
  deadOtherWorms     = [],   // wormId[]
  compactWorms       = [],   // Worm[] (head-only update)
  playerWorm,                // Worm (the receiving player)
}) {
  const parts = [];

  // Header: type(1) + serverTime u16 BE
  const hdr = Buffer.alloc(3);
  hdr[0] = 1;
  hdr[1] = (serverTime >> 8) & 0xFF;
  hdr[2] = serverTime & 0xFF;
  parts.push(hdr);

  // ── NEW PORTIONS ──────────────────────────────
  parts.push(Buffer.from(encodeVLE(newPortions.length)));
  for (const p of newPortions) {
    const extra = gameMode === 16 ? 1 : 0;
    const pb    = Buffer.alloc(4 + extra + 3 + 1);
    const dv    = new DataView(pb.buffer);
    dv.setUint32(0, p.id, false);          // u32 BE
    let o = 4;
    if (gameMode === 16) pb[o++] = p.teamId;
    const [f0, f1, f2] = packFloat(p.size);
    pb[o++] = f0; pb[o++] = f1; pb[o++] = f2;
    pb[o++] = p.skinType;
    parts.push(pb.slice(0, o));
  }

  // ── VANISHED PORTIONS ─────────────────────────
  parts.push(Buffer.from(encodeVLE(vanishedPortions.length)));
  for (const id of vanishedPortions) {
    const b = Buffer.alloc(4);
    new DataView(b.buffer).setUint32(0, id, false);
    parts.push(b);
  }

  // ── PORTIONS EATEN BY WORM ────────────────────
  parts.push(Buffer.from(encodeVLE(portionEatenByWorm.length)));
  for (const e of portionEatenByWorm) {
    const b = Buffer.alloc(6);
    const dv = new DataView(b.buffer);
    dv.setUint32(0, e.portionId, false);
    dv.setUint16(4, e.wormId,    false);
    parts.push(b);
  }

  // ── NEW WORMS ─────────────────────────────────
  parts.push(Buffer.from(encodeVLE(newWorms.length)));
  for (const w of newWorms) {
    parts.push(buildNewWormBlock(w, gameMode));
  }

  // ── FADING WORMS ──────────────────────────────
  parts.push(Buffer.from(encodeVLE(fadingWorms.length)));
  for (const id of fadingWorms) {
    const b = Buffer.alloc(2);
    new DataView(b.buffer).setUint16(0, id, false);
    parts.push(b);
  }

  // ── FULL WORM UPDATES ─────────────────────────
  parts.push(Buffer.from(encodeVLE(fullWormUpdates.length)));
  for (const w of fullWormUpdates) {
    parts.push(buildFullWormChunk(w, gameMode));
  }

  // ── DEAD OTHER WORMS ──────────────────────────
  parts.push(Buffer.from(encodeVLE(deadOtherWorms.length)));
  for (const id of deadOtherWorms) {
    const b = Buffer.alloc(2);
    new DataView(b.buffer).setUint16(0, id, false);
    parts.push(b);
  }

  // ── COMPACT WORM UPDATES ──────────────────────
  parts.push(Buffer.from(encodeVLE(compactWorms.length)));
  for (const w of compactWorms) {
    parts.push(buildCompactWormChunk(w));
  }

  // ── PLAYER STATE (always present) ────────────
  if (playerWorm && playerWorm.alive) {
    parts.push(buildPlayerStateChunk(playerWorm));
  } else {
    // Minimal player state: flags=0, no weight, 0 coords (0,0 packed), 0 abilities
    const def = Buffer.alloc(1 + 4 + 6 + 1);
    let o = 0;
    def[o++] = 2; // hasWeightUpdate flag
    new DataView(def.buffer).setFloat32(o, 0.25, false); o += 4;
    const [zx0,zx1,zx2] = packFloat(0);
    const [zy0,zy1,zy2] = packFloat(0);
    def[o++]=zx0;def[o++]=zx1;def[o++]=zx2;
    def[o++]=zy0;def[o++]=zy1;def[o++]=zy2;
    def[o++] = 0; // VLE 0 abilities
    parts.push(def.slice(0, o));
  }

  return Buffer.concat(parts);
}

// ─────────────────────────────────────────────
// GAME ROOM
// ─────────────────────────────────────────────
class GameRoom {
  constructor(id, gameMode = 0) {
    this.id       = id;
    this.gameMode = gameMode;
    this.mapRadius= MAP_RADIUS;

    this.worms    = new Map();   // wormId → Worm
    this.portions = new Map();   // portionId → Portion
    this.players  = new Map();   // wormId → WebSocket
    this.playerVisiblePortions = new Map(); // wormId → Set<portionId> (portions yg sudah dikirim ke player)

    this.nextWormId = 1;
    this.serverTime = 0;

    // Per-tick accumulator lists
    this.newPortionsThisTick      = [];
    this.vanishedPortionsThisTick = [];
    this.eatenPortionsThisTick    = [];   // {portionId, wormId}
    this.newWormsThisTick         = [];
    this.deadWormsThisTick        = [];   // wormId[]
    this.fadingWormsThisTick      = [];   // wormId[]

    // Queue koordinat area yang baru dikosongkan (makanan dimakan) — untuk respawn terarah
    this.recentEatenSpots         = [];   // {x, y}[]

    // Initial portion fill – use a high attempt limit so the map starts fully populated
    this.portions = new Map();
    this.newPortionsThisTick = [];
    spawnPortions(this, TARGET_PORTIONS * 2);

    this.tickInterval  = setInterval(() => this.tick(),               TICK_MS);
    this.scoreInterval = setInterval(() => this.sendScoreboards(),    3000); // Kurangi dari 2s ke 3s
    this.mapInterval   = setInterval(() => this.sendMinimaps(),       2000); // Kurangi dari 1s ke 2s
    // spawnPortions dipanggil di dalam tick() agar newPortionsThisTick tidak di-reset
    // sebelum sempat dikirim ke client (race condition dengan setInterval terpisah)

    // Spawn 20 bot dengan nama unik
    setTimeout(() => {
      console.log('[BOT] Spawning 20 bots...');
      for (const botName of BOT_NAMES) {
        this.spawnBot(botName);
      }
    }, 2000); // Delay 2 detik agar server siap
  }

  allocWormId() {
    // Wrap around to avoid u16 overflow; skip 0
    let id = this.nextWormId;
    this.nextWormId = (this.nextWormId % 65534) + 1;
    return id;
  }

  tick() {
    this.serverTime = (this.serverTime + TICK_MS) & 0xFFFF;

    // Clear tick-accumulator lists
    this.newPortionsThisTick      = [];
    this.vanishedPortionsThisTick = [];
    this.eatenPortionsThisTick    = [];
    this.newWormsThisTick         = [];
    this.deadWormsThisTick        = [];
    this.fadingWormsThisTick      = [];

    // ── 1. Update abilities & positions ──
    for (const worm of this.worms.values()) {
      if (!worm.alive) continue;

      // Update bot AI jika ini bot
      const botAI = botAIs.get(worm.id);
      if (botAI) {
        botAI.update();
      }

      // Tick abilities
      for (const ab of Object.values(worm.abilities)) {
        if (!ab.active) continue;
        ab.timeLeft -= TICK_MS;
        ab.charge    = Math.max(0, Math.round(ab.timeLeft / (ab.totalTime || 10000) * 100));
        if (ab.timeLeft <= 0) { ab.active = false; ab.charge = 0; }
      }

      updateWormPosition(worm, TICK_MS);

      // Boundary
      if (checkBoundary(worm)) {
        this.killWorm(worm, null, false);
        continue;
      }

      // Eat portions
      const eaten = checkPortionEating(worm, this.portions);
      for (const p of eaten) {
        p.alive = false;
        this.portions.delete(p.id);
        this.eatenPortionsThisTick.push({ portionId: p.id, wormId: worm.id });
        // Simpan lokasi untuk respawn terarah (dengan limit untuk performa)
        if (this.recentEatenSpots.length < 200) { // Batasi max 200 spots
          this.recentEatenSpots.push({ x: p.x, y: p.y });
        }
        eatPortion(worm, p);
      }
    }

    // ── 2. Worm vs worm collision ──
    const alive = [...this.worms.values()].filter(w => w.alive);
    for (let i = 0; i < alive.length; i++) {
      const A = alive[i];
      if (!A.alive) continue;
      for (let j = 0; j < alive.length; j++) {
        if (i === j) continue;
        const B = alive[j];
        if (!B.alive) continue;
        const result = checkWormCollision(A, B);
        if (result.hit) {
          // Headshot: smaller dies; equal → both die
          if (result.isHeadshot) {
            if (A.rawWeight <= B.rawWeight) this.killWorm(A, B, true);
            if (B.rawWeight <= A.rawWeight) this.killWorm(B, A, true);
          } else {
            // A's head hit B's body → A dies
            this.killWorm(A, B, false);
          }
          // Broadcast kill notification
          const msg = buildWormKilledMsg(A.id, result.isHeadshot);
          this.broadcast(msg);
          break;
        }
      }
    }

    // ── 3. Collect new worms from this tick ──
    for (const worm of this.worms.values()) {
      if (worm.isNew) {
        this.newWormsThisTick.push(worm);
        worm.isNew = false;
      }
    }

    // ── 3b. Respawn portions (di dalam tick agar newPortionsThisTick ikut terkirim) ──
    // Jalankan tiap ~10 tick (~950ms) agar tidak berat tiap tick (dikurangi dari 5 tick)
    if (this.serverTime % (TICK_MS * 10) < TICK_MS) {
      spawnPortions(this, 1000); // Kurangi dari 2000 ke 1000 per batch
    }

    // ── 4. Send per-player state ──
    const aliveWorms = [...this.worms.values()].filter(w => w.alive);
    for (const [wormId, ws] of this.players) {
      if (ws.readyState !== WebSocket.OPEN) continue;
      const playerWorm = this.worms.get(wormId);
      if (!playerWorm || !playerWorm.alive) continue;

      const others = aliveWorms.filter(w => w.id !== wormId);

      // First tick: send all worms as full update + new portions
      // Subsequent ticks: compact updates only
      const isFirstTick = playerWorm.needFullUpdate;

      // isFirstTick: kirim fullWormUpdates (body lengkap) untuk semua cacing termasuk diri sendiri
      // agar client bisa initialize segmen dengan benar dan tidak glitch/invisible.
      // newWormsThisTick (selain diri sendiri) juga diumumkan supaya client tahu nama/skin mereka.
      // Tick normal: cukup compact update karena client sudah tahu posisi awal.
      const newWormsForPlayer = isFirstTick
        ? this.newWormsThisTick.filter(w => w.id !== wormId)
        : this.newWormsThisTick;

      // Untuk existing player (bukan isFirstTick): worm baru yang join di tick ini
      // harus dikirim sebagai fullWormUpdates (bukan compact) karena client belum
      // punya data segmen mereka sama sekali. Cacing lain yang sudah ada cukup compact.
      const newWormIds = new Set(newWormsForPlayer.map(w => w.id));
      const compactOthers  = isFirstTick ? [] : others.filter(w => !newWormIds.has(w.id));
      const fullOthers     = isFirstTick ? [...others, playerWorm] : newWormsForPlayer;

      // ── Food Vision Radius: tetap 15 unit untuk semua score ──
      const hx = playerWorm.headX;
      const hy = playerWorm.headY;
      const vr = 20;

      if (!this.playerVisiblePortions.has(wormId)) {
        this.playerVisiblePortions.set(wormId, new Set());
      }
      const visSet = this.playerVisiblePortions.get(wormId);

      // Portions yang sekarang dalam jangkauan (persegi panjang)
      const nowInRadius = new Set();
      for (const [pid, p] of this.portions) {
        if (Math.abs(hx - p.x) <= vr && Math.abs(hy - p.y) <= vr) {
          nowInRadius.add(pid);
        }
      }

      // Portions baru masuk radius (belum pernah dikirim / baru masuk)
      const portionsToSend = [];
      for (const pid of nowInRadius) {
        if (!visSet.has(pid)) {
          portionsToSend.push(this.portions.get(pid));
          visSet.add(pid);
        }
      }

      // Portions keluar radius: kirim sebagai vanished khusus player ini
      const extraVanished = [];
      for (const pid of visSet) {
        if (!nowInRadius.has(pid) && this.portions.has(pid)) {
          extraVanished.push(pid);
          visSet.delete(pid);
        }
      }

      // Bersihkan visSet dari portions yg sudah dimakan (tidak ada di map)
      for (const pid of [...visSet]) {
        if (!this.portions.has(pid)) {
          visSet.delete(pid);
        }
      }

      // Gabungkan vanished global (dimakan) + keluar radius (khusus player ini)
      const combinedVanished = [...this.vanishedPortionsThisTick, ...extraVanished];

      const msg = buildGameState({
        serverTime:         this.serverTime,
        gameMode:           this.gameMode,
        newPortions:        portionsToSend,
        vanishedPortions:   combinedVanished,
        portionEatenByWorm: this.eatenPortionsThisTick,
        newWorms:           newWormsForPlayer,
        fadingWorms:        this.fadingWormsThisTick,
        fullWormUpdates:    fullOthers,
        deadOtherWorms:     this.deadWormsThisTick,
        compactWorms:       compactOthers,
        playerWorm,
      });

      try { ws.send(msg); } catch (e) { /* ignore */ }

      if (isFirstTick) {
        playerWorm.needFullUpdate = false;
      }
    }
  }

  killWorm(worm, killer, isHeadshot) {
    if (!worm.alive) return;
    worm.alive = false;

    // Hapus bot AI jika ini bot
    if (botAIs.has(worm.id)) {
      botAIs.delete(worm.id);
    }

    // Send game-over to the player
    const ws = this.players.get(worm.id);
    if (ws && ws.readyState === WebSocket.OPEN) {
      try { ws.send(buildGameOver()); } catch (_) {}
    }

    // Convert body to food
    convertWormToFood(worm, this);
    this.deadWormsThisTick.push(worm.id);

    // Cleanup
    this.worms.delete(worm.id);
    this.players.delete(worm.id);
    this.playerVisiblePortions.delete(worm.id);

    // Respawn bot jika ini bot
    if (!ws) { // Tidak ada websocket = ini bot
      setTimeout(() => {
        if (this.worms.size < 30) { // Respawn hanya jika belum terlalu penuh
          this.spawnBot(worm.nickname);
        }
      }, 3000); // Respawn setelah 3 detik
    }
  }

  spawnBot(botName) {
    const angle  = Math.random() * Math.PI * 2;
    const r      = Math.sqrt(Math.random()) * MAP_RADIUS * 0.8;
    const x      = r * Math.cos(angle);
    const y      = r * Math.sin(angle);

    const wormId = this.allocWormId();
    const worm = new Worm(wormId, x, y);
    
    // Tentukan apakah ini bot pintar
    const isSmart = SMART_BOTS.has(botName);
    
    worm.nickname = botName;
// Bot pintar menggunakan skin yang lebih menarik
    const PILIHAN_SKIN_BOT = [32, 33, 34, 35, 9200, 9201];
    // AMBIL SKIN SECARA ACAK DARI DAFTAR DI ATAS:
    worm.skinId = PILIHAN_SKIN_BOT[Math.floor(Math.random() * PILIHAN_SKIN_BOT.length)];

    worm.eyesId = Math.floor(Math.random() * 5);
    worm.mouthId = Math.floor(Math.random() * 5);
    worm.glassesId = isSmart ? Math.floor(Math.random() * 3) : 0;
    worm.hatId = isSmart ? Math.floor(Math.random() * 3) : 0;
    worm.isNew = true;
    worm.needFullUpdate = true;

    this.worms.set(wormId, worm);
    
    // Buat AI untuk bot ini
    const botAI = new BotAI(worm, this, isSmart);
    botAIs.set(wormId, botAI);

    console.log(`[BOT] ${botName} spawned (worm#${wormId})${isSmart ? ' [SMART]' : ''}`);
    return worm;
  }

  spawnPlayer(ws, wormId, nickname, skinId, eyesId, mouthId, glassesId, hatId) {
    const angle  = Math.random() * Math.PI * 2;
    const r      = Math.sqrt(Math.random()) * MAP_RADIUS * 0.8;
    const x      = r * Math.cos(angle);
    const y      = r * Math.sin(angle);

    const worm        = new Worm(wormId, x, y);
    worm.nickname     = nickname.slice(0, 32);
    worm.skinId       = skinId;
    worm.eyesId       = eyesId;
    worm.mouthId      = mouthId;
    worm.glassesId    = glassesId;
    worm.hatId        = hatId;
    worm.isNew        = true;
    worm.needFullUpdate = true;

    this.worms.set(wormId, worm);
    this.players.set(wormId, ws);

    // worm.isNew = true — tick loop (step 3 & 4) yang akan mengumumkan ke
    // existing players via newWormsThisTick + fullWormUpdates, dengan
    // playerWorm yang benar per-player sehingga player state chunk tidak korup.
    // JANGAN kirim announcement manual di sini karena buildGameState selalu
    // menyisipkan player state chunk di akhir — jika playerWorm: null,
    // chunk tersebut berisi (0,0) dan rawWeight=0.25 yang akan menimpa
    // posisi/weight cacing existing player → glitch.

    // Send params + initial state to new player
    ws.send(buildGameParams(wormId, this.gameMode, this.mapRadius));

    // Build initial full state:
    //   - All portions visible
    //   - Other worms announced via newWorms + initialized via fullWormUpdates
    //   - Player's OWN worm MUST also be in fullWormUpdates so client calls Zf(segCount, coords)
    //     which populates Se[] (segment positions). Without this, yi=0 and worm is invisible.
    const others = [...this.worms.values()].filter(w => w.alive && w.id !== wormId);

    // Init playerVisiblePortions, radius tetap 15 unit
    const initVr = 20;
    const initVisSet = new Set();
    const initPortions = [];
    const ihx = worm.headX;
    const ihy = worm.headY;
    for (const [pid, p] of this.portions) {
      if (Math.abs(ihx - p.x) <= initVr && Math.abs(ihy - p.y) <= initVr) {
        initPortions.push(p);
        initVisSet.add(pid);
      }
    }
    this.playerVisiblePortions.set(wormId, initVisSet);

    const initMsg = buildGameState({
      serverTime:  this.serverTime,
      gameMode:    this.gameMode,
      newPortions: initPortions,
      vanishedPortions:   [],
      portionEatenByWorm: [],
      newWorms:    [worm, ...others],  // SELF harus dimasukkan juga agar client apply skin/nama ke cacing sendiri via n.L.Uf(e)
      fadingWorms: [],
      fullWormUpdates: [...others, worm], // include SELF to init Se[] via Zf
      deadOtherWorms: [],
      compactWorms: [],
      playerWorm: worm,
    });
    ws.send(initMsg);
    // needFullUpdate tetap true — akan di-reset oleh tick loop setelah kirim
    // fullWormUpdates ke player ini pada tick pertama mereka.

    return worm;
  }

  sendScoreboards() {
    const sorted  = [...this.worms.values()]
      .filter(w => w.alive)
      .sort((a, b) => b.rawWeight - a.rawWeight);
    const top10   = sorted.slice(0, 10);
    const online  = this.players.size;

    for (const [wormId, ws] of this.players) {
      if (ws.readyState !== WebSocket.OPEN) continue;
      const rank = sorted.findIndex(w => w.id === wormId) + 1;
      try { ws.send(buildScoreboard(online, rank || 500, top10, this.gameMode, [])); } catch (_) {}
    }
  }

  sendMinimaps() {
    const alive = [...this.worms.values()].filter(w => w.alive);
    const mm    = buildMinimap(alive, this.mapRadius);
    this.broadcast(mm);
  }

  broadcast(buf) {
    for (const ws of this.players.values()) {
      if (ws.readyState === WebSocket.OPEN) {
        try { ws.send(buf); } catch (_) {}
      }
    }
  }
}

// ─────────────────────────────────────────────
// BOT AI LOGIC
// ─────────────────────────────────────────────

// Daftar nama bot yang unik tanpa angka
const BOT_NAMES = [
  'RemakeByBoruto',  'RemakeByBoruto', 'RemakeByBoruto', 'RemakeByBoruto', 'RemakeByBoruto', 'RemakeByBoruto', 'RemakeByBoruto', 'RemakeByBoruto', 'RemakeByBoruto', 'RemakeByBoruto',
];

// Bot yang pintar dan jago (menggunakan AI yang lebih agresif)
const SMART_BOTS = new Set(['Viper', 'Hunter', 'Predator', 'Dragon', 'Phoenix']);

class BotAI {
  constructor(worm, room, isSmart = false) {
    this.worm = worm;
    this.room = room;
    this.isSmart = false;
    this.targetAngle = worm.angle;
    this.sprintMode = false;
    this.lastThinkTime = Date.now();
    this.thinkInterval = isSmart ? 150 : 300; // Kurangi frequency: smart 150ms, normal 300ms
  }

  update() {
    const now = Date.now();
    if (now - this.lastThinkTime < this.thinkInterval) return;
    this.lastThinkTime = now;

    if (!this.worm.alive) return;

    const worm = this.worm;
    const hx = worm.headX;
    const hy = worm.headY;

    // ── 1. Cari makanan terdekat (optimasi: kurangi search radius) ──
    let closestFood = null;
    let closestFoodDist = Infinity;
    const searchRadius = this.isSmart ? 120 : 80; // Kurangi radius pencarian

    for (const [id, p] of this.room.portions) {
      if (!p.alive) continue;
      const dist = Math.hypot(hx - p.x, hy - p.y);
      if (dist < searchRadius && dist < closestFoodDist) {
        closestFood = p;
        closestFoodDist = dist;
      }
    }

    // ── 2. Deteksi bahaya (cacing lain yang lebih besar) ──
    let danger = null;
    let minDangerDist = Infinity;
    const dangerRadius = this.isSmart ? 80 : 50; // Kurangi radius deteksi

    for (const other of this.room.worms.values()) {
      if (!other.alive || other.id === worm.id) continue;
      const dist = Math.hypot(hx - other.headX, hy - other.headY);
      if (dist < dangerRadius) {
        // Cek apakah cacing lain lebih besar
        if (other.rawWeight > worm.rawWeight * 1.2) {
          if (dist < minDangerDist) {
            danger = other;
            minDangerDist = dist;
          }
        }
      }
    }

    // ── 3. Cari target untuk diserang (cacing lebih kecil) ──
    let target = null;
    let targetDist = Infinity;
    const attackRadius = this.isSmart ? 100 : 0; // Normal bot tidak menyerang

    if (this.isSmart) { // Hanya bot pintar yang agresif menyerang
      for (const other of this.room.worms.values()) {
        if (!other.alive || other.id === worm.id) continue;
        const dist = Math.hypot(hx - other.headX, hy - other.headY);
        if (dist < attackRadius && other.rawWeight < worm.rawWeight * 0.8) {
          if (dist < targetDist) {
            target = other;
            targetDist = dist;
          }
        }
      }
    }

    // ── 4. Hindari batas map ──
    const distFromCenter = Math.hypot(hx, hy);
    const shouldAvoidBorder = distFromCenter > MAP_RADIUS * 0.85;

    // ── 5. Logika keputusan ──
    let targetX, targetY;

    if (shouldAvoidBorder) {
      // Kembali ke tengah
      targetX = -hx * 0.5;
      targetY = -hy * 0.5;
      this.sprintMode = false;
    } else if (danger && minDangerDist < (this.isSmart ? 40 : 25)) {
      // Kabur dari bahaya
      targetX = hx + (hx - danger.headX) * 2;
      targetY = hy + (hy - danger.headY) * 2;
      this.sprintMode = true; // Sprint saat kabur
    } else if (target && this.isSmart) {
      // Bot pintar: serang cacing kecil dengan strategi potong jalan
      const predictX = target.headX + Math.cos(target.angle) * 20;
      const predictY = target.headY + Math.sin(target.angle) * 20;
      targetX = predictX;
      targetY = predictY;
      this.sprintMode = worm.score > 50; // Sprint saat menyerang kalau sudah cukup besar
    } else if (closestFood) {
      // Kejar makanan
      targetX = closestFood.x;
      targetY = closestFood.y;
      this.sprintMode = false;
    } else {
      // Jelajah random
      if (!this.randomTarget || Math.random() < 0.03) { // Kurangi frequency random target
        const randAngle = Math.random() * Math.PI * 2;
        const randDist = Math.random() * MAP_RADIUS * 0.6;
        this.randomTarget = {
          x: Math.cos(randAngle) * randDist,
          y: Math.sin(randAngle) * randDist
        };
      }
      targetX = this.randomTarget.x;
      targetY = this.randomTarget.y;
      this.sprintMode = false;
    }

    // ── 6. Update angle dan sprint ──
    this.targetAngle = Math.atan2(targetY - hy, targetX - hx);
    worm.targetAngle = this.targetAngle;
    worm.sprinting = this.sprintMode && worm.score > 13;
  }
}

// ─────────────────────────────────────────────
// HTTP SERVER
// ─────────────────────────────────────────────
const app             = express();

// Izinkan popup Google OAuth berkomunikasi balik ke halaman utama
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
  next();
});
const pendingSessions = new Map();   // wuid → session object
const userDataStore   = new Map();   // wuid → userData
const botAIs          = new Map();   // wormId → BotAI
const googleAccounts  = new Map();   // googleId → userData persisten
const GOOGLE_CLIENT_ID = '26622840068-cmsigj7qbenu2sgmk8a6edc9ordg18ie.apps.googleusercontent.com';

// Verifikasi Google ID token tanpa library eksternal
function verifyGoogleToken(idToken) {
  return new Promise((resolve, reject) => {
    const url = 'https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(idToken);
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const payload = JSON.parse(data);
          if (payload.error) return reject(new Error(payload.error));
          if (payload.aud !== GOOGLE_CLIENT_ID) return reject(new Error('aud mismatch'));
          resolve(payload);
        } catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

// ─────────────────────────────────────────────
// PERSISTENCE (simpan data user ke file JSON)
// ─────────────────────────────────────────────
const DATA_FILE = path.join(__dirname, 'userdata.json');

function loadPersistedData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      const obj = JSON.parse(raw);
      // Load google accounts
      if (obj.googleAccounts) {
        for (const [k, v] of Object.entries(obj.googleAccounts)) {
          googleAccounts.set(k, v);
        }
      }
      console.log('[persist] loaded', googleAccounts.size, 'google accounts');
    }
  } catch(e) {
    console.error('[persist] load error:', e.message);
  }
}

function savePersistedData() {
  try {
    const obj = {
      googleAccounts: Object.fromEntries(googleAccounts),
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(obj, null, 2));
  } catch(e) {
    console.error('[persist] save error:', e.message);
  }
}

function makeUserData(wuid, session = {}) {
  return {
    userId:           wuid,
    username:         session.nickname || 'Guest',
    nickname:         session.nickname || 'Worm',
    avatarUrl:        '/images/guest-avatar-xmas2020.png',
    isBuyer:          true,
    isConsentGiven:   true,
    coins:            9999999,
    level:            1,
    expOnLevel:       0,
    expToNext:        50,
    skinId:           session.skinId    || 32,
    eyesId:           session.eyesId   || 0,
    mouthId:          session.mouthId  || 0,
    glassesId:        session.glassesId|| 0,
    hatId:            session.hatId    || 0,
    highScore:        0,
    bestSurvivalTimeSec: 0,
    kills:            0,
    headShots:        0,
    sessionsPlayed:   0,
    totalPlayTimeSec: 0,
    regDate:          { year: 2024, month: 1, day: 1 },
    propertyList:     [],
  };
}

const CLIENT_DIR = path.join(__dirname, 'client_files');

// Static assets from client_files
app.use('/assets', express.static(path.join(CLIENT_DIR, 'assets')));
app.use('/images', express.static(path.join(CLIENT_DIR, 'images')));
app.use('/css',    express.static(path.join(CLIENT_DIR, 'css')));
app.use('/fonts',  express.static(path.join(CLIENT_DIR, 'fonts')));
app.use('/i18n',   express.static(path.join(CLIENT_DIR, 'i18n')));
app.use('/js',     express.static(path.join(CLIENT_DIR, 'js')));
app.use('/pub/assets', express.static(path.join(CLIENT_DIR, 'pub/assets')));

app.get('/auth/google/callback', (req, res) => {
  // Halaman ini menerima redirect dari Google OAuth popup
  // id_token ada di URL fragment (#), jadi cukup return halaman kosong
  // yang langsung close — popup polling di client akan baca fragment
  res.send('<html><body><script>window.opener && window.opener.postMessage && window.opener.postMessage("oauth_done","*"); window.close();</script></body></html>');
});

app.get('/', (req, res) => res.sendFile(path.join(CLIENT_DIR, 'index.html')));

// API: /pub/wuid/:wuid/start
app.get('/pub/wuid/:wuid/start', (req, res) => {
  const { wuid } = req.params;
  const { gameMode = 'ARENA', nickname = 'Guest',
          skinId = 32, eyesId = 0, mouthId = 0, glassesId = 0, hatId = 0 } = req.query;

  const session = {
    wuid, gameMode, nickname,
    skinId: +skinId, eyesId: +eyesId, mouthId: +mouthId,
    glassesId: +glassesId, hatId: +hatId,
  };
  pendingSessions.set(wuid, session);
  userDataStore.set(wuid, makeUserData(wuid, session));

  // Detect if client is behind a proxy (often the case in cloud)
  const host = req.headers['x-forwarded-host'] || req.hostname;
  const proto = req.headers['x-forwarded-proto'] === 'https' ? 'wss' : 'ws';
  const wsUrl = `${proto}://${host}`;
  res.json({ server_url: wsUrl });
});

app.get('/pub/wuid/:wuid/getUserData', (req, res) => {
  const ud = userDataStore.get(req.params.wuid) || makeUserData(req.params.wuid);
  res.json({ user_data: ud });
});

app.get('/pub/wuid/:wuid/login', async (req, res) => {
  const { wuid } = req.params;

  // Login sebagai Google: wuid = "gg_{id_token}"
  if (wuid.startsWith('gg_')) {
    const idToken = wuid.slice(3);
    try {
      const payload = await verifyGoogleToken(idToken);
      const googleId = payload.sub;  // Google user ID unik
      // Ambil atau buat user data berdasarkan Google ID
      let ud = googleAccounts.get(googleId);
      if (!ud) {
        ud = makeUserData('gg_' + googleId, {
          nickname: payload.name || payload.email.split('@')[0],
        });
        ud.avatarUrl = payload.picture || ud.avatarUrl;
        ud.username  = payload.name   || ud.username;
        googleAccounts.set(googleId, ud);
        savePersistedData();
      }
      userDataStore.set(wuid, ud);
      return res.json({ user_data: ud });
    } catch(e) {
      console.error('[login:google] token invalid:', e.message);
      return res.json({});
    }
  }

  // Login guest atau tipe lain
  const ud = userDataStore.get(wuid) || makeUserData(wuid);
  res.json({ user_data: ud });
});

app.get('/pub/leaders', (_req, res) => {
  res.json({ byLevel: [], byHighScore: [], byKillsAndHeadShots: [] });
});

app.get('/pub/wuid/:wuid/buyProperty', (req, res) => {
  const { wuid } = req.params;
  const { id, type } = req.query;

  // Ambil user data yang ada
  let ud = userDataStore.get(wuid);
  if (!ud) ud = makeUserData(wuid);

  // Cek sudah punya belum
  const alreadyOwned = ud.propertyList.some(p => p.id == id && p.type === type);
  if (alreadyOwned) return res.json({ code: 1200 }); // sudah punya, anggap sukses

  // Tambah ke propertyList (coins tidak dikurangi karena kita kasih unlimited)
  ud.propertyList.push({ id: Number(id), type });
  userDataStore.set(wuid, ud);

  // Jika akun Google, persist ke file
  if (wuid.startsWith('gg_')) {
    // cari google account berdasarkan userId
    for (const [googleId, gUd] of googleAccounts) {
      if (gUd === ud || gUd.userId === ud.userId) {
        googleAccounts.set(googleId, ud);
        savePersistedData();
        break;
      }
    }
  }

  res.json({ code: 1200 });
});

app.get('/pub/wuid/:wuid/consent/change', (_req, res) => {
  res.json({ ok: true });
});

loadPersistedData();
const httpServer = app.listen(HTTP_PORT, () => {
  console.log(`[HTTP] Listening on http://0.0.0.0:${HTTP_PORT}`);
});

// ─────────────────────────────────────────────
// WEBSOCKET SERVER
// ─────────────────────────────────────────────
const wss      = new WebSocket.Server({ server: httpServer });
const gameRoom = new GameRoom('main', 0);

console.log(`[WS]   Attached to HTTP server on port ${HTTP_PORT}`);

wss.on('connection', (ws) => {
  let wormId      = null;
  let handshaked  = false;

  ws.on('message', (rawData) => {
    const buf = Buffer.isBuffer(rawData)
      ? rawData
      : Buffer.from(rawData instanceof ArrayBuffer ? rawData : rawData);

    if (!handshaked) {
      // ── HANDSHAKE ──────────────────────────────
      if (buf.length < 4) { ws.close(1002, 'bad handshake length'); return; }

      const dv      = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
      const magic   = buf[0] & 0xFF;      // read unsigned
      const version = dv.getInt16(1, false); // BE

      if (magic !== 129) {
        ws.close(1002, `bad magic: ${magic}`);
        return;
      }
      if (version !== 2700) {
        ws.close(1002, `bad version: ${version}`);
        return;
      }

      const type = dv.getInt8(3);
      let nickname  = 'Guest';
      let skinId    = 32, eyesId = 0, mouthId = 0, glassesId = 0, hatId = 0;

      if (type === 0) {
        // Guest handshake: baca skinId + nickname dari byte paket
        skinId       = dv.getInt16(4, false);
        const nickLen= Math.min(32, buf[6]);
        nickname = '';
        for (let i = 0; i < nickLen; i++) {
          nickname += String.fromCharCode(dv.getUint16(7 + i * 2, false));
        }
        // Cari session yang cocok di pendingSessions berdasarkan nickname+skinId
        // (server menyimpan session saat /start dipanggil sebelum WS dibuka)
        // Untuk guest, wuid selalu "guest" — cari session dengan key "guest" dulu,
        // lalu fallback ke scan seluruh pendingSessions jika nickname+skinId cocok.
        const guestSession = pendingSessions.get('guest');
        if (guestSession &&
            guestSession.nickname === nickname &&
            guestSession.skinId  === skinId) {
          eyesId    = guestSession.eyesId    || 0;
          mouthId   = guestSession.mouthId   || 0;
          glassesId = guestSession.glassesId || 0;
          hatId     = guestSession.hatId     || 0;
          pendingSessions.delete('guest');
        } else {
          // Fallback: scan semua session yang pending, cari yang nickname+skinId cocok
          for (const [key, sess] of pendingSessions) {
            if (sess.nickname === nickname && sess.skinId === skinId) {
              eyesId    = sess.eyesId    || 0;
              mouthId   = sess.mouthId   || 0;
              glassesId = sess.glassesId || 0;
              hatId     = sess.hatId     || 0;
              pendingSessions.delete(key);
              break;
            }
          }
        }
      } else if (type === 1) {
        // Logged-user handshake
        const wuidLen = Math.min(2048, dv.getInt16(4, false));
        let wuid = '';
        for (let i = 0; i < wuidLen; i++) {
          wuid += String.fromCharCode(dv.getUint16(6 + i * 2, false));
        }
        const session = pendingSessions.get(wuid);
        if (session) {
          nickname  = session.nickname  || 'Player';
          skinId    = session.skinId    || 32;
          eyesId    = session.eyesId    || 0;
          mouthId   = session.mouthId   || 0;
          glassesId = session.glassesId || 0;
          hatId     = session.hatId     || 0;
          pendingSessions.delete(wuid);  // hapus session setelah dipakai
        }
      } else {
        ws.close(1002, `unknown handshake type: ${type}`);
        return;
      }

      handshaked = true;
      wormId     = gameRoom.allocWormId();

      console.log(`[CONN] worm#${wormId} "${nickname}" joined`);
      gameRoom.spawnPlayer(ws, wormId, nickname, skinId, eyesId, mouthId, glassesId, hatId);

    } else {
      // ── DIRECTION UPDATE ────────────────────────
      if (buf.length === 1) {
        const dirByte    = buf[0] & 0xFF;
        const boost      = (dirByte & 128) !== 0;
        const angleEnc   = dirByte & 127;
        const angle      = (angleEnc / 128) * Math.PI * 2;

        const worm = gameRoom.worms.get(wormId);
        if (worm && worm.alive) {
          worm.targetAngle = angle;
          worm.sprinting = boost;
        }
      }
      // Ignore other messages
    }
  });

  ws.on('close', (code, reason) => {
    if (wormId !== null) {
      const worm = gameRoom.worms.get(wormId);
      if (worm && worm.alive) {
        convertWormToFood(worm, gameRoom);
        worm.alive = false;
        gameRoom.deadWormsThisTick.push(wormId);
      }
      gameRoom.worms.delete(wormId);
      gameRoom.players.delete(wormId);
      gameRoom.playerVisiblePortions.delete(wormId);
      console.log(`[DISC] worm#${wormId} disconnected`);
    }
  });

  ws.on('error', (err) => {
    console.error(`[ERR] worm#${wormId}: ${err.message}`);
  });
});

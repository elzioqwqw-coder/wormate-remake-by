"use strict";
var _typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        },
  GoogleAuth;
(!(function () {
  try {
    console.log(
      (function (t, i) {
        for (var e = 0; e < i.length; e += 2) t = t.replaceAll(i[e], i[e + 1]);
        return t;
      })(
        "N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN",
        [
          "W",
          "hhhh",
          "Q",
          "ssss",
          "M",
          "mmm",
          "Y",
          "yyy",
          "H",
          "hh",
          "S",
          "ss",
          "6",
          "      ",
          "3",
          "   ",
          "2",
          "  ",
          "N",
          "\n",
        ],
      ),
    );
  } catch (t) {}
})(),
  window.addEventListener("load", function () {
    function isBrowserCompatible() {
      return (
        (function (t, i, e) {
          function o(t, i) {
            return (void 0 === t ? "undefined" : _typeof(t)) === i;
          }
          function n() {
            return "function" != typeof i.createElement
              ? i.createElement(arguments[0])
              : u
                ? i.createElementNS.call(
                    i,
                    "http://www.w3.org/2000/svg",
                    arguments[0],
                  )
                : i.createElement.apply(i, arguments);
          }
          var s = [],
            r = [],
            a = {
              _version: "3.3.1",
              _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0,
              },
              _q: [],
              on: function (t, i) {
                var e = this;
                setTimeout(function () {
                  i(e[t]);
                }, 0);
              },
              addTest: function (t, i, e) {
                r.push({
                  name: t,
                  fn: i,
                  options: e,
                });
              },
              addAsyncTest: function (t) {
                r.push({
                  name: null,
                  fn: t,
                });
              },
            },
            h = function () {};
          ((h.prototype = a), (h = new h()));
          var l = !1;
          try {
            l = "WebSocket" in t && 2 === t.WebSocket.CLOSING;
          } catch (t) {}
          h.addTest("websockets", l);
          var p = i.documentElement,
            u = "svg" === p.nodeName.toLowerCase();
          (h.addTest("canvas", function () {
            var t = n("canvas");
            return !(!t.getContext || !t.getContext("2d"));
          }),
            h.addTest("canvastext", function () {
              return (
                !1 !== h.canvas &&
                "function" == typeof n("canvas").getContext("2d").fillText
              );
            }),
            (function () {
              var t, i, e, n, a, l, p;
              for (var u in r)
                if (r.hasOwnProperty(u)) {
                  if (
                    ((t = []),
                    (i = r[u]),
                    i.name &&
                      (t.push(i.name.toLowerCase()),
                      i.options &&
                        i.options.aliases &&
                        i.options.aliases.length))
                  )
                    for (e = 0; e < i.options.aliases.length; e++)
                      t.push(i.options.aliases[e].toLowerCase());
                  for (
                    n = o(i.fn, "function") ? i.fn() : i.fn, a = 0;
                    a < t.length;
                    a++
                  )
                    ((l = t[a]),
                      (p = l.split(".")),
                      1 === p.length
                        ? (h[p[0]] = n)
                        : (!h[p[0]] ||
                            h[p[0]] instanceof Boolean ||
                            (h[p[0]] = new Boolean(h[p[0]])),
                          (h[p[0]][p[1]] = n)),
                      s.push((n ? "" : "no-") + p.join("-")));
                }
            })(),
            (function (t) {
              var i = p.className,
                e = h._config.classPrefix || "";
              if ((u && (i = i.baseVal), h._config.enableJSClass)) {
                var o = new RegExp("(^|\\s)" + e + "no-js(\\s|$)");
                i = i.replace(o, "$1" + e + "js$2");
              }
              h._config.enableClasses &&
                ((i += " " + e + t.join(" " + e)),
                u ? (p.className.baseVal = i) : (p.className = i));
            })(s),
            delete a.addTest,
            delete a.addAsyncTest);
          for (var c = 0; c < h._q.length; c++) h._q[c]();
          t.Modernizr = h;
        })(window, document),
        Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext
      );
    }
    if (
      ((document.getElementById("game-wrap").style.display = "block"),
      !isBrowserCompatible())
    )
      return void (document.getElementById("error-view").style.display =
        "block");
    (Raven.config(
      atob(
        "aHR0cHM6Ly8yNTgzODZlNWM2MjU0MWI1YmIwMGY0OWFiY2IwMjM5ZkBzZW50cnkuaW8vMTI3MzEzMg==",
      ),
      {
        release: window.runtimeHash,
      },
    ).install(),
      Raven.context(function () {
        !(function () {
          function getApp() {
            return _anApp;
          }
          function i18n(t) {
            return window.I18N_MESSAGES[t];
          }
          function i18nCustomBundle(t) {
            return t[LANG] ? t[LANG] : t.en ? t.en : t.x;
          }
          function timeSecsToIntervalText(t) {
            var i = (Math.floor(t) % 60).toString(),
              e = (Math.floor(t / 60) % 60).toString(),
              o = (Math.floor(t / 3600) % 24).toString(),
              n = Math.floor(t / 86400).toString(),
              s = i18n("util.time.days"),
              r = i18n("util.time.hours"),
              a = i18n("util.time.min"),
              h = i18n("util.time.sec");
            return n > 0
              ? n +
                  " " +
                  s +
                  " " +
                  o +
                  " " +
                  r +
                  " " +
                  e +
                  " " +
                  a +
                  " " +
                  i +
                  " " +
                  h
              : o > 0
                ? o + " " + r + " " + e + " " + a + " " + i + " " + h
                : e > 0
                  ? e + " " + a + " " + i + " " + h
                  : i + " " + h;
          }
          function loadScript(t, i, e) {
            var o = document.createElement("script"),
              n = !0;
            (i && (o.id = i),
              (o.async = "async"),
              (o.type = "text/javascript"),
              (o.src = t),
              e &&
                (o.onload = o.onreadystatechange =
                  function () {
                    n = !1;
                    try {
                      e();
                    } catch (t) {
                      console.log(t);
                    }
                    o.onload = o.onreadystatechange = null;
                  }),
              (
                document.head || document.getElementsByTagName("head")[0]
              ).appendChild(o));
          }
          function extend(t, i) {
            var e = i;
            return (
              (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              e
            );
          }
          function normDir(t) {
            return ((t %= _2PI), t < 0 ? t + _2PI : t);
          }
          function minmax(t, i, e) {
            return e > i
              ? i
              : e < t
                ? t
                : Number.isFinite(e)
                  ? e
                  : 0.5 * (t + i);
          }
          function timeDeltaIncrement(t, i, e, o) {
            return i > t ? Math.min(i, t + e * o) : Math.max(i, t - e * o);
          }
          function arraycopy(t, i, e, o) {
            var n = e,
              s = i,
              r = i + o;
            if (null == t) throw new TypeError("this is null or not defined");
            var a = t.length >>> 0,
              h = n >> 0,
              l = h < 0 ? Math.max(a + h, 0) : Math.min(h, a),
              p = s >> 0,
              u = p < 0 ? Math.max(a + p, 0) : Math.min(p, a),
              c = void 0 === r ? a : r >> 0,
              f = c < 0 ? Math.max(a + c, 0) : Math.min(c, a),
              d = Math.min(f - u, a - l),
              g = 1;
            for (
              u < l && l < u + d && ((g = -1), (u += d - 1), (l += d - 1));
              d > 0;
            )
              (u in t ? (t[l] = t[u]) : delete t[l], (u += g), (l += g), d--);
            return t;
          }
          function init2DContext(t) {
            var i = t.getContext("2d");
            return (
              (i.pathCircle = function (t, e, o) {
                (i.beginPath(), i.arc(t, e, o, 0, _2PI), i.closePath());
              }),
              (i.pathSector = function (t, e, o, n, s, r) {
                (i.beginPath(), i.arc(t, e, o, n, s, r), i.closePath());
              }),
              (i.drawRegionTransformed = function (t, e, o, n, s, r) {
                (i.save(),
                  i.translate(n, s),
                  i.rotate(r),
                  i.drawRegion(t, e, o, 0, 0),
                  i.restore());
              }),
              (i.drawRegion = function (t, i, e, o, n) {}),
              i
            );
          }
          function pixijs_removeFromParent(t) {
            null != t.parent && t.parent.removeChild(t);
          }
          function randStr() {
            return Math.random().toString(36).substring(2, 15);
          }
          function convertHSLtoRGB(t, i, e) {
            var o = (1 - Math.abs(2 * e - 1)) * i,
              n = o * (1 - Math.abs(((t / 60) % 2) - 1)),
              s = e - o / 2;
            return 0 <= t && t < 60
              ? [s + o, s + n, s + 0]
              : 60 <= t && t < 120
                ? [s + n, s + o, s + 0]
                : 120 <= t && t < 180
                  ? [s + 0, s + o, s + n]
                  : 180 <= t && t < 240
                    ? [s + 0, s + n, s + o]
                    : 240 <= t && t < 300
                      ? [s + n, s + 0, s + o]
                      : [s + o, s + 0, s + n];
          }
          function ADINPLAY_PREROLL_PLAYER() {
            var t = null,
              i = {};
            return (
              (i.a = function (i) {
                null == t &&
                  "undefined" != typeof aipPlayer &&
                  (t = new aipPlayer({
                    AD_WIDTH: 960,
                    AD_HEIGHT: 540,
                    AD_FULLSCREEN: !0,
                    PREROLL_ELEM: function () {
                      return document.getElementById("1eaom01c3pxu9wd3");
                    },
                    AIP_COMPLETE: function () {
                      (i(), $("#1eaom01c3pxu9wd3").hide());
                      try {
                        ga(
                          "send",
                          "event",
                          "preroll",
                          window.runtimeHash + "_complete",
                        );
                      } catch (t) {}
                    },
                  }));
              }),
              (i.b = function () {
                if (t) {
                  try {
                    ga(
                      "send",
                      "event",
                      "preroll",
                      window.runtimeHash + "_request",
                    );
                  } catch (t) {}
                  ($("#1eaom01c3pxu9wd3").show(), t.startPreRoll());
                }
              }),
              i
            );
          }
          function ADINPLAY_BANNER(t, i) {
            var e = $("#" + t),
              o = i,
              n = {},
              s = !1;
            return (
              (n.a = function () {
                if (
                  !s &&
                  (e.empty(),
                  e.append("<div id='" + o + "'></div>"),
                  "undefined" != typeof aipDisplayTag)
                ) {
                  try {
                    ga(
                      "send",
                      "event",
                      "banner",
                      window.runtimeHash + "_display",
                    );
                  } catch (t) {}
                  (aipDisplayTag.display(o), (s = !0));
                }
              }),
              (n.c = function () {
                if ("undefined" != typeof aipDisplayTag) {
                  try {
                    ga(
                      "send",
                      "event",
                      "banner",
                      window.runtimeHash + "_refresh",
                    );
                  } catch (t) {}
                  aipDisplayTag.refresh(o);
                }
              }),
              n
            );
          }
          function Application() {
            function t(t) {
              var i = t + 37 * Math.floor(65535 * Math.random());
              setCookie(Cookies.PREROLL_SHOW_COUNT, i, 30);
            }
            function i() {
              return parseInt(getCookie(Cookies.PREROLL_SHOW_COUNT)) % 37;
            }
            return (function () {
              var e = i();
              (console.log("init1 pSC: " + e),
                (e >= 0 && e < env.d) ||
                  ((e = Math.max(0, env.d - 2)),
                  console.log("init2 pSC: " + e)));
              var o = {};
              ((_anApp = o),
                (o.e = env),
                (o.f = !1),
                (o.g = Date.now()),
                (o.i = 0),
                (o.j = 0),
                (o.k = null),
                (o.l = LOCALE),
                (o.m = LANG),
                (o.n = null),
                (o.o = new ResourceManager()),
                (o.p = new AudioManager()),
                (o.q = new ScenesManager()),
                (o.r = new PropertyManager()),
                (o.s = new UserManager()),
                (o.t = new AssetsJsonManager()));
              try {
                navigator &&
                  navigator.geolocation &&
                  navigator.geolocation.getCurrentPosition(
                    function (t) {
                      o.k = t;
                    },
                    function (t) {},
                  );
              } catch (t) {}
              return (
                (o.u = function () {
                  ((o.n = new Engine()),
                    (o.n.v = new MessageProcessor(o.n)),
                    o.a());
                }),
                (o.a = function () {
                  try {
                    ga("send", "event", "app", window.runtimeHash + "_init");
                  } catch (t) {}
                  ((o.n.z = function () {
                    o.n.A();
                  }),
                    (o.n.B = function () {
                      var t = o.q.D.C();
                      try {
                        ga(
                          "send",
                          "event",
                          "game",
                          window.runtimeHash + "_start",
                          t,
                        );
                      } catch (t) {}
                      (o.p.F(AudioManager.AudioState.G), o.q.H(o.q.G.I()));
                    }),
                    (o.n.A = function () {
                      try {
                        ga(
                          "send",
                          "event",
                          "game",
                          window.runtimeHash + "_end",
                        );
                      } catch (t) {}
                      ($("body").height() >= 430 && o.e.J.c(),
                        (function () {
                          var t = Math.floor(o.n.L.K),
                            i = o.n.M;
                          o.s.N()
                            ? o.s.O(function () {
                                o.P(t, i);
                              })
                            : o.P(t, i);
                        })());
                    }),
                    (o.n.Q = function (t) {
                      t(o.q.G.R(), o.q.G.S());
                    }),
                    o.s.T(function () {
                      if (
                        (o.t.U &&
                          (o.p.F(AudioManager.AudioState.D), o.q.H(o.q.D)),
                        o.s.N())
                      )
                        try {
                          var t = o.s.V();
                          ga("set", "userId", t);
                        } catch (t) {}
                      o.W() && o.s.N() && !o.s.X()
                        ? (o.Y(!1, !1),
                          o.q.$.Z(new ConsentAcceptanceToasterViewController()))
                        : o._(!0);
                    }),
                    o.t.aa(function () {
                      (o.p.F(AudioManager.AudioState.D), o.q.H(o.q.D));
                    }),
                    o.o.a(function () {
                      (o.p.a(),
                        o.q.a(),
                        o.r.a(),
                        o.t.a(),
                        o.s.a(),
                        o.n.a(),
                        o.W() && !o.X()
                          ? o.q.$.Z(
                              new ConsentAcceptanceToasterViewController(),
                            )
                          : o._(!0));
                    }));
                }),
                (o.ba = function (t) {
                  if (o.s.N()) {
                    var i = o.s.ca();
                    $.get(
                      GATEWAY_HOST +
                        "/pub/wuid/" +
                        i +
                        "/consent/change?value=" +
                        encodeURI(t),
                      function (t) {},
                    );
                  }
                }),
                (o.da = function (t) {
                  var i = o.s.ca(),
                    e = o.q.D.C(),
                    n = o.q.D.ea(),
                    s = o.r.fa("SKIN"),
                    r = o.r.fa("EYES"),
                    a = o.r.fa("MOUTH"),
                    h = o.r.fa("GLASSES"),
                    l = o.r.fa("HAT");
                  $.get(
                    GATEWAY_HOST +
                      "/pub/wuid/" +
                      i +
                      "/start?gameMode=" +
                      encodeURI(e) +
                      "&nickname=" +
                      encodeURI(n) +
                      "&skinId=" +
                      encodeURI(s) +
                      "&eyesId=" +
                      encodeURI(r) +
                      "&mouthId=" +
                      encodeURI(a) +
                      "&glassesId=" +
                      encodeURI(h) +
                      "&hatId=" +
                      encodeURI(l),
                    function (i) {
                      var e = i.server_url;
                      try {
                        console.log(
                          "s.u.: " +
                            e.substring(e.indexOf("/") + 2, e.indexOf(".")),
                        );
                      } catch (t) {}
                      t(e);
                    },
                  );
                }),
                (o.ga = function () {
                  (e++, console.log("start pSC: " + e), t(e), o.la());
                }),
                (o.la = function () {
                  if (o.n.ma()) {
                    (o.q.H(o.q.na), o.p.F(AudioManager.AudioState.na));
                    var t = o.q.D.C();
                    (setCookie(Cookies.GAME_MODE, t, 30),
                      console.log("save gm: " + t));
                    var i = o.q.pa.oa();
                    if (
                      (setCookie(Cookies.SHOW_PLAYER_NAMES, i, 30),
                      console.log("save sPN: " + i),
                      o.s.N())
                    )
                      o.da(function (t) {
                        o.n.qa(t, o.s.ca());
                      });
                    else {
                      var e = o.q.D.ea();
                      setCookie(Cookies.GUEST_NICKNAME, e, 30);
                      var n = o.r.fa("SKIN");
                      (setCookie(Cookies.GUEST_SKIN, n, 30),
                        o.da(function (t) {
                          o.n.ra(t, e, n);
                        }));
                    }
                  }
                }),
                (o.P = function (t, i) {
                  var e = o.q.D.ea();
                  (o.q.G.sa(t, i, e),
                    o.p.F(AudioManager.AudioState.ta),
                    o.q.H(o.q.G.ua()));
                }),
                (o.va = function () {
                  return o.wa()
                    ? parseInt(getCookie(Cookies.GUEST_SKIN))
                    : o.r.xa();
                }),
                (o.ya = function (t) {
                  setCookie(Cookies.SHARED_WITH_FRIENDS, !!t, 1800);
                }),
                (o.wa = function () {
                  return "true" === getCookie(Cookies.SHARED_WITH_FRIENDS);
                }),
                (o._ = function (i) {
                  if (i != o.f) {
                    o.f = i;
                    var n = n || {};
                    ((n.consented = i),
                      (n.gdprConsent = i),
                      o.e.za.a(),
                      o.e.J.a(),
                      o.e.ka.a(function () {
                        (t((e = 0)), o.la());
                      }));
                  }
                }),
                (o.Y = function (t, i) {
                  (setCookie(Cookies.CONSENT_STATE, t ? "true" : "false"),
                    i && o.ba(t),
                    o._(t));
                }),
                (o.X = function () {
                  switch (getCookie(Cookies.CONSENT_STATE)) {
                    case "true":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (o.W = function () {
                  return !0;
                }),
                (o.Aa = function () {
                  ((o.i = Date.now()),
                    (o.j = Math.min(1e3, o.i - o.g)),
                    o.n.Ba(o.i, o.j),
                    o.q.Aa(o.i, o.j),
                    (o.g = o.i));
                }),
                (o.Ca = function () {
                  o.q.Ca();
                }),
                o
              );
            })();
          }
          function Engine() {
            var t = {
                Da: 0,
                Ea: 1,
                Fa: 2,
                Ga: 3,
              },
              i = {};
            return (
              (i.Ha = 30),
              (i.Ia = new Float32Array(100)),
              (i.Ja = t.Da),
              (i.Ka = null),
              (i.La = 300),
              (i.B = function () {}),
              (i.A = function () {}),
              (i.Q = function () {}),
              (i.z = function () {}),
              (i.Ma = new GameParams()),
              (i.v = null),
              (i.L = null),
              (i.Na = {}),
              (i.Oa = {}),
              (i.Pa = 12.5),
              (i.Qa = 40),
              (i.Ra = 1),
              (i.Sa = -1),
              (i.Ta = 1),
              (i.Ua = 1),
              (i.Va = -1),
              (i.Wa = -1),
              (i.Xa = 1),
              (i.Ya = 1),
              (i.Za = -1),
              (i.M = 500),
              (i.$a = 500),
              (i.Ma._a = 500),
              (i.L = new Worm(i.Ma)),
              (i.a = function () {
                (i.L.ab(getApp().q.G.bb),
                  setInterval(function () {
                    i.Q(function (t, e) {
                      i.cb(t, e);
                    });
                  }, 100));
              }),
              (i.db = function (t, e, o, n) {
                ((i.Sa = t), (i.Ta = e), (i.Ua = o), (i.Va = n), i.eb());
              }),
              (i.fb = function (t) {
                ((i.Ra = t), i.eb());
              }),
              (i.eb = function () {
                ((i.Wa = i.Sa - i.Ra),
                  (i.Xa = i.Ta + i.Ra),
                  (i.Ya = i.Ua - i.Ra),
                  (i.Za = i.Va + i.Ra));
              }),
              (i.Ba = function (e, o) {
                (i.v.gb(),
                  null == i.Ka ||
                    (i.Ja != t.Fa && i.Ja != t.Ga) ||
                    (i.hb(e, o), i.Ja == t.Fa && (i.Qa = 4 + i.Pa * i.L.ib)));
                for (
                  var n = 1e3 / Math.max(1, o), s = 0, r = 0;
                  r < i.Ia.length - 1;
                  r++
                )
                  ((s += i.Ia[r]), (i.Ia[r] = i.Ia[r + 1]));
                ((i.Ia[i.Ia.length - 1] = n), (i.Ha = (s + n) / i.Ia.length));
              }),
              (i.jb = function (t, e) {
                return t > i.Wa && t < i.Xa && e > i.Ya && e < i.Za;
              }),
              (i.hb = function (t, e) {
                (i.L.kb(t, e), i.L.lb(t, e, i.jb));
                var o = 0;
                for (var n in i.Oa) {
                  var s = i.Oa[n];
                  (s.kb(t, e),
                    s.mb && (s.lb(t, e, i.jb), s.ib > o && (o = s.ib)),
                    s.nb ||
                      (!(s.ob < 0.005) && s.mb) ||
                      (s.pb(), delete i.Oa[s.rb.qb]));
                }
                i.fb(3 * o);
                for (var r in i.Na) {
                  var a = i.Na[r];
                  (a.kb(t, e),
                    a.lb(t, e, i.jb),
                    a.sb &&
                      (a.ob < 0.005 || !i.jb(a.tb, a.ub)) &&
                      (a.pb(), delete i.Na[a.rb.qb]));
                }
              }),
              (i.vb = function () {
                i.Ja == t.Ea && ((i.Ja = t.Fa), i.B());
              }),
              (i.wb = function () {
                if (i.Ja == t.Ea || i.Ja == t.Fa) {
                  i.Ja = t.Ga;
                  i.L.nb = false;
                  i.Qa = 4;
                  var e = i.Ka;
                  (setTimeout(function () {
                    (i.Ja == t.Ga && (i.Ja = t.Da),
                      null != e && e == i.Ka && (i.Ka.close(), (i.Ka = null)));
                  }, 5e3),
                    i.A());
                }
              }),
              (i.ma = function () {
                return (
                  (i.Ja == t.Da || i.Ja == t.Ga) &&
                  ((i.Ja = t.Ea),
                  i.v.xb(),
                  (i.Na = {}),
                  (i.Oa = {}),
                  i.L.yb(),
                  null != i.Ka && (i.Ka.close(), (i.Ka = null)),
                  !0)
                );
              }),
              (i.zb = function () {
                ((i.Ka = null), i.v.xb(), i.Ja != t.Ga && i.z(), (i.Ja = t.Da));
              }),
              (i.qa = function (t, e) {
                i.Ab(t, function () {
                  var t = Math.min(2048, e.length),
                    o = new ArrayBuffer(6 + 2 * t),
                    n = new DataView(o),
                    s = 0;
                  (n.setInt8(s, 129),
                    (s += 1),
                    n.setInt16(s, 2700),
                    (s += 2),
                    n.setInt8(s, 1),
                    (s += 1),
                    n.setInt16(s, t),
                    (s += 2));
                  for (var r = 0; r < t; r++)
                    (n.setInt16(s, e.charCodeAt(r)), (s += 2));
                  i.Bb(o);
                });
              }),
              (i.ra = function (t, e, o) {
                i.Ab(t, function () {
                  var t = Math.min(32, e.length),
                    n = new ArrayBuffer(7 + 2 * t),
                    s = new DataView(n),
                    r = 0;
                  (s.setInt8(r, 129),
                    (r += 1),
                    s.setInt16(r, 2700),
                    (r += 2),
                    s.setInt8(r, 0),
                    (r += 1),
                    s.setInt16(r, o),
                    (r += 2),
                    s.setInt8(r, t),
                    r++);
                  for (var a = 0; a < t; a++)
                    (s.setInt16(r, e.charCodeAt(a)), (r += 2));
                  i.Bb(n);
                });
              }),
              (i.Bb = function (t) {
                try {
                  null != i.Ka &&
                    i.Ka.readyState == WebSocket.OPEN &&
                    i.Ka.send(t);
                } catch (t) {
                  (console.log("Socket send error: " + t), i.zb());
                }
              }),
              (i.cb = function (t, e) {
                var o = e ? 128 : 0,
                  n = ((normDir(t) / _2PI) * 128) & 127,
                  s = 255 & (o | n);
                if (i.La != s) {
                  var r = new ArrayBuffer(1);
                  (new DataView(r).setInt8(0, s), i.Bb(r), (i.La = s));
                }
              }),
              (i.Ab = function (t, e) {
                var o = (i.Ka = new WebSocket(t));
                window._wmWS = o;
                ((o.binaryType = "arraybuffer"),
                  (o.onopen = function () {
                    i.Ka == o && (console.log("Socket opened"), e());
                  }),
                  (o.onclose = function () {
                    if (window._wmWS === o) window._wmWS = null;
                    i.Ka == o && (console.log("Socket closed"), i.zb());
                  }),
                  (o.onerror = function (t) {
                    i.Ka == o && (console.log("Socket error"), i.zb());
                  }),
                  (o.onmessage = function (t) {
                    i.Ka == o && i.v.Cb(t.data);
                  }));
              }),
              i
            );
          }
          var GUEST_AVATAR_URL = "/images/guest-avatar-xmas2020.png",
            LINE_LOGO_URL = "/images/linelogo-xmas2020.png",
            isIOS =
              /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
            GATEWAY_HOST = `//${window.location.host}`,
            LANG = window.I18N_LANG;
          LANG || (LANG = "en");
          var LOCALE = void 0;
          switch (LANG) {
            case "uk":
              LOCALE = "uk_UA";
              break;
            case "de":
              LOCALE = "de_DE";
              break;
            case "fr":
              LOCALE = "fr_FR";
              break;
            case "ru":
              LOCALE = "ru_RU";
              break;
            case "es":
              LOCALE = "es_ES";
              break;
            default:
              LOCALE = "en_US";
          }
          moment.locale(LOCALE);
          var SHOW_FPS = !1,
            _anApp = void 0,
            POGL = (function () {
              var p = {
                  Db: eval(atob("UElYSQ==")),
                },
                bm = p.Db[atob("QkxFTkRfTU9ERVM=")],
                wm = p.Db[atob("V1JBUF9NT0RFUw==")];
              return {
                Eb: p.Db[atob("Q29udGFpbmVy")],
                Fb: p.Db[atob("QmFzZVRleHR1cmU=")],
                Gb: p.Db[atob("VGV4dHVyZQ==")],
                Hb: p.Db[atob("UmVuZGVyZXI=")],
                Ib: p.Db[atob("R3JhcGhpY3M=")],
                Jb: p.Db[atob("U2hhZGVy")],
                Kb: p.Db[atob("UmVjdGFuZ2xl")],
                Lb: p.Db[atob("U3ByaXRl")],
                Mb: p.Db[atob("VGV4dA==")],
                Nb: p.Db[atob("R2VvbWV0cnk=")],
                Ob: p.Db[atob("TWVzaA==")],
                Pb: {
                  Qb: bm[atob("QURE")],
                },
                Rb: {
                  Sb: wm[atob("UkVQRUFU")],
                },
              };
            })(),
            _2PI = 2 * Math.PI;
          !(function () {
            var t = "Z2V0",
              i = "=",
              e = t + "SW50",
              o = t + "RmxvYXQ",
              n = [
                atob(e + "OA=="),
                atob(e + "MTY" + i),
                atob(e + "MzI" + i),
                atob(o + "zMg=="),
                atob(o + "2NA=="),
              ];
            ((DataView.prototype.Tb = function (t) {
              return this[n[0]](t);
            }),
              (DataView.prototype.Ub = function (t) {
                return this[n[1]](t);
              }),
              (DataView.prototype.Vb = function (t) {
                return this[n[2]](t);
              }),
              (DataView.prototype.Wb = function (t) {
                return this[n[3]](t);
              }),
              (DataView.prototype.Xb = function (t) {
                return this[n[4]](t);
              }));
          })();
          var Ability = (function () {
              function t(t) {
                ((this.Yb = t), (this.Zb = !1), (this.$b = 1));
              }
              return (
                (t.VELOCITY_TYPE = 0),
                (t.FLEXIBLE_TYPE = 1),
                (t.MAGNETIC_TYPE = 2),
                (t.ZOOM_TYPE = 6),
                (t.X2_TYPE = 3),
                (t.X5_TYPE = 4),
                (t.X10_TYPE = 5),
                t
              );
            })(),
            AssetsJsonManager = (function () {
              function t() {
                ((this._b = []),
                  (this.U = !1),
                  (this.ac = null),
                  (this.bc = {}),
                  (this.cc = {
                    dc: null,
                    ec: null,
                  }),
                  (this.fc = {}),
                  (this.gc = {
                    dc: null,
                  }),
                  (this.hc = {}),
                  (this.ic = {
                    jc: "#FFFFFF",
                    dc: [],
                    ec: [],
                  }),
                  (this.kc = {}),
                  (this.lc = {
                    mc: {},
                    nc: this.ic,
                    oc: this.cc,
                  }),
                  (this.pc = {}),
                  (this.qc = {
                    dc: [],
                  }),
                  (this.rc = {}),
                  (this.sc = {
                    dc: [],
                  }),
                  (this.tc = {}),
                  (this.uc = {
                    dc: [],
                  }),
                  (this.vc = {}),
                  (this.wc = {
                    dc: [],
                  }));
              }
              function i(t, i) {
                for (var e in t) t.hasOwnProperty(e) && i(e, t[e]);
              }
              function e(t, i) {
                for (var e = {}, o = 0; o < t.length; o++) {
                  var n = t[o];
                  e[n.name] = POGL.Fb.from(n.src);
                }
                i(e);
              }
              return (
                (t.prototype.a = function () {
                  this.xc();
                }),
                (t.prototype.xc = function () {
                  var t = this;
                  ((this.ac = null),
                    (this.U = !1),
                    $.get(
                      "//" +
                        window.location.host +
                        "/pub/assets/assets.json",
                      function (i) {
                        ((t.ac = i), t.yc());
                      },
                    ));
                }),
                (t.prototype.aa = function (t) {
                  (this._b.push(t), this.U && t());
                }),
                (t.prototype.zc = function (t) {
                  var i = this.hc[t];
                  return i || this.ic;
                }),
                (t.prototype.Ac = function (t) {
                  var i = this.kc[t];
                  return i || this.lc;
                }),
                (t.prototype.Bc = function (t) {
                  var i = this.pc[t];
                  return i || this.qc;
                }),
                (t.prototype.Cc = function (t) {
                  var i = this.rc[t];
                  return i || this.sc;
                }),
                (t.prototype.Dc = function (t) {
                  var i = this.tc[t];
                  return i || this.uc;
                }),
                (t.prototype.Ec = function (t) {
                  var i = this.vc[t];
                  return i || this.wc;
                }),
                (t.prototype.Fc = function (t) {
                  var i = this.bc[t];
                  return i || this.cc;
                }),
                (t.prototype.Gc = function (t) {
                  var i = this.fc[t];
                  return i || this.gc;
                }),
                (t.prototype.Hc = function () {
                  for (var t = 0; t < this._b.length; t++) this._b[t]();
                }),
                (t.prototype.yc = function () {
                  var t = [];
                  i(this.ac.textureDict, function (i, e) {
                    t.push({
                      name: i,
                      src: GATEWAY_HOST + e.url,
                    });
                  });
                  var o = this;
                  e(t, function (t) {
                    o.Ic(t);
                  });
                }),
                (t.prototype.Ic = function (t) {
                  var e = this,
                    o = this.ac,
                    n = {};
                  i(o.colorDict, function (t, i) {
                    n[t] = i;
                  });
                  var s = {};
                  i(o.regionDict, function (i, e) {
                    s[i] = new Region(
                      t[e.texture],
                      e.x,
                      e.y,
                      e.w,
                      e.h,
                      e.px,
                      e.py,
                      e.pw,
                      e.ph,
                    );
                  });
                  for (var r = 0; r < o.skinArrayDict.length; r++) {
                    var a = o.skinArrayDict[r];
                    e.hc[a.id] = {
                      jc: "#" + n[a.prime],
                      dc: a.base.map(function (t) {
                        return s[t];
                      }),
                      ec: a.glow.map(function (t) {
                        return s[t];
                      }),
                    };
                  }
                  var h = o.skinUnknown;
                  ((e.ic = {
                    jc: "#" + n[h.prime],
                    dc: h.base.map(function (t) {
                      return s[t];
                    }),
                    ec: h.glow.map(function (t) {
                      return s[t];
                    }),
                  }),
                    i(o.teamDict, function (t, i) {
                      ((t = parseInt(t)),
                        (e.kc[t] = {
                          mc: i.name,
                          nc: {
                            jc: "#" + n[i.skin.prime],
                            ec: i.skin.glow.map(function (t) {
                              return s[t];
                            }),
                          },
                          oc: {
                            ec: s[i.portion.glow],
                          },
                        }));
                    }),
                    i(o.eyesDict, function (t, i) {
                      ((t = parseInt(t)),
                        (e.pc[t] = {
                          dc: i.base.map(function (t) {
                            return s[t.region];
                          }),
                        }));
                    }),
                    i(o.mouthDict, function (t, i) {
                      ((t = parseInt(t)),
                        (e.rc[t] = {
                          dc: i.base.map(function (t) {
                            return s[t.region];
                          }),
                        }));
                    }),
                    i(o.glassesDict, function (t, i) {
                      ((t = parseInt(t)),
                        (e.tc[t] = {
                          dc: i.base.map(function (t) {
                            return s[t.region];
                          }),
                        }));
                    }),
                    i(o.hatDict, function (t, i) {
                      ((t = parseInt(t)),
                        (e.vc[t] = {
                          dc: i.base.map(function (t) {
                            return s[t.region];
                          }),
                        }));
                    }),
                    i(o.portionDict, function (t, i) {
                      ((t = parseInt(t)),
                        (e.bc[t] = {
                          dc: s[i.base],
                          ec: s[i.glow],
                        }));
                    }));
                  var l = o.portionUnknown;
                  ((e.cc = {
                    dc: s[l.base],
                    ec: s[l.glow],
                  }),
                    i(o.abilityDict, function (t, i) {
                      ((t = parseInt(t)),
                        (e.fc[t] = {
                          dc: s[i.base],
                        }));
                    }));
                  var p = o.abilityUnknown;
                  ((e.gc = {
                    dc: s[p.base],
                  }),
                    (this.U = !0),
                    this.Hc());
                }),
                t
              );
            })(),
            AudioManager = (function () {
              function t() {
                ((this.Jc = AudioManager.AudioState.na),
                  (this.Kc = !1),
                  (this.Lc = !1),
                  (this.Mc = null),
                  (this.Nc = null));
              }
              ((t.prototype.a = function () {}),
                (t.prototype.Oc = function (t) {
                  this.Lc = t;
                }),
                (t.prototype.F = function (t) {
                  ((this.Jc = t), this.Pc());
                }),
                (t.prototype.Qc = function (t) {
                  ((this.Kc = t), this.Pc());
                }),
                (t.prototype.Pc = function () {}),
                (t.prototype.Rc = function (t, i) {
                  if (!getApp().t.U) return null;
                  var e = t[i];
                  return null == e || 0 == e.length
                    ? null
                    : e[Math.floor(Math.random() * e.length)].cloneNode();
                }),
                (t.prototype.Sc = function (t, i, e) {
                  if (this.Lc && !(e <= 0)) {
                    var o = this.Rc(t, i);
                    null != o && ((o.volume = Math.min(1, e)), o.play());
                  }
                }),
                (t.prototype.Tc = function (t, i) {
                  this.Jc.Uc && this.Sc(app.o.Vc, t, i);
                }),
                (t.prototype.Wc = function (t, i) {
                  this.Jc.Xc && this.Sc(app.o.Yc, t, i);
                }),
                (t.prototype.Zc = function () {}),
                (t.prototype.$c = function () {}),
                (t.prototype._c = function () {}),
                (t.prototype.ad = function () {}),
                (t.prototype.bd = function () {}),
                (t.prototype.cd = function () {}),
                (t.prototype.dd = function (t, i, e) {}),
                (t.prototype.ed = function (t) {}),
                (t.prototype.fd = function (t) {}),
                (t.prototype.gd = function (t) {}),
                (t.prototype.hd = function (t) {}),
                (t.prototype.jd = function (t) {}),
                (t.prototype.kd = function (t) {}),
                (t.prototype.ld = function (t) {}),
                (t.prototype.md = function (t) {}),
                (t.prototype.nd = function (t) {}),
                (t.prototype.od = function (t) {}),
                (t.prototype.pd = function (t) {}),
                (t.prototype.qd = function (t) {}),
                (t.prototype.rd = function (t) {}),
                (t.prototype.sd = function (t) {}),
                (t.prototype.td = function (t, i) {}),
                (t.prototype.ud = function (t) {}),
                (t.prototype.vd = function (t, i, e) {}));
              var i =
                ((function () {
                  function t(t) {
                    ((this.wd = new i(t, 0.5)),
                      (this.wd.xd.loop = !0),
                      (this.yd = !1));
                  }
                  ((t.prototype.zd = function (t) {
                    t ? this.b() : this.Ad();
                  }),
                    (t.prototype.b = function () {
                      this.yd ||
                        ((this.yd = !0),
                        (this.wd.Bd = 0),
                        this.wd.Cd(1500, 100));
                    }),
                    (t.prototype.Ad = function () {
                      this.yd && ((this.yd = !1), this.wd.Dd(1500, 100));
                    }));
                })(),
                (function () {
                  function t(t) {
                    ((this.Ed = t.map(function (t) {
                      return new i(t, 0.4);
                    })),
                      e(this.Ed, 0, this.Ed.length),
                      (this.Fd = null),
                      (this.Gd = 0),
                      (this.yd = !1),
                      (this.Hd = 1e4));
                  }
                  function e(t, i, e) {
                    for (var o = e - 1; o > i; o--) {
                      var n = i + Math.floor(Math.random() * (o - i + 1)),
                        s = t[o];
                      ((t[o] = t[n]), (t[n] = s));
                    }
                  }
                  ((t.prototype.zd = function (t) {
                    t ? this.b() : this.Ad();
                  }),
                    (t.prototype.b = function () {
                      this.yd || ((this.yd = !0), this.Id(1500));
                    }),
                    (t.prototype.Ad = function () {
                      this.yd &&
                        ((this.yd = !1),
                        null != this.Fd && this.Fd.Dd(800, 50));
                    }),
                    (t.prototype.Id = function (t) {
                      if (this.yd) {
                        (null == this.Fd && (this.Fd = this.Jd()),
                          this.Fd.xd.currentTime + this.Hd / 1e3 >
                            this.Fd.xd.duration &&
                            ((this.Fd = this.Jd()),
                            (this.Fd.xd.currentTime = 0)),
                          console.log(
                            "Current track '" +
                              this.Fd.xd.src +
                              "', change in (ms) " +
                              (1e3 *
                                (this.Fd.xd.duration - this.Fd.xd.currentTime) -
                                this.Hd),
                          ),
                          (this.Fd.Bd = 0),
                          this.Fd.Cd(t, 100));
                        var i =
                            1e3 *
                              (this.Fd.xd.duration - this.Fd.xd.currentTime) -
                            this.Hd,
                          e = this,
                          o = setTimeout(function () {
                            e.yd &&
                              o == e.Gd &&
                              (e.Fd.Dd(e.Hd, 100),
                              (e.Fd = e.Jd()),
                              (e.Fd.xd.currentTime = 0),
                              e.Id(e.Hd));
                          }, i);
                        this.Gd = o;
                      }
                    }),
                    (t.prototype.Jd = function () {
                      var t = this.Ed[0],
                        i = Math.max(1, this.Ed.length / 2);
                      return (
                        e(this.Ed, i, this.Ed.length),
                        this.Ed.push(this.Ed.shift()),
                        t
                      );
                    }));
                })(),
                (function () {
                  function t(t, i) {
                    ((this.xd = t),
                      (this.Kd = i),
                      (this.Bd = 0),
                      (t.volume = 0),
                      (this.Ld = 0),
                      (this.Md = !1));
                  }
                  return (
                    (t.prototype.Cd = function (t, i) {
                      (console.log("fade IN " + this.xd.src),
                        this.Nd(!0, t, i));
                    }),
                    (t.prototype.Dd = function (t, i) {
                      (console.log("fade OUT " + this.xd.src),
                        this.Nd(!1, t, i));
                    }),
                    (t.prototype.Nd = function (t, i, e) {
                      this.Md && clearInterval(this.Ld);
                      var o = this,
                        n = 1 / (i / e),
                        s = setInterval(function () {
                          if (o.Md && s != o.Ld) return void clearInterval(s);
                          t
                            ? ((o.Bd = Math.min(1, o.Bd + n)),
                              (o.xd.volume = o.Bd * o.Kd),
                              o.Bd >= 1 && ((o.Md = !1), clearInterval(s)))
                            : ((o.Bd = Math.max(0, o.Bd - n)),
                              (o.xd.volume = o.Bd * o.Kd),
                              o.Bd <= 0 &&
                                (o.xd.pause(), (o.Md = !1), clearInterval(s)));
                        }, e);
                      ((this.Md = !0), (this.Ld = s), this.xd.play());
                    }),
                    t
                  );
                })());
              return (
                (t.AudioState = {
                  na: {
                    Od: !1,
                    Pd: !1,
                    Xc: !0,
                    Uc: !1,
                  },
                  D: {
                    Od: !1,
                    Pd: !0,
                    Xc: !0,
                    Uc: !1,
                  },
                  G: {
                    Od: !0,
                    Pd: !1,
                    Xc: !1,
                    Uc: !0,
                  },
                  ta: {
                    Od: !1,
                    Pd: !1,
                    Xc: !0,
                    Uc: !1,
                  },
                  ja: {
                    Od: !1,
                    Pd: !1,
                    Xc: !1,
                    Uc: !1,
                  },
                }),
                t
              );
            })(),
            BackgroundView = (function () {
              function t(t) {
                ((this.Qd = t),
                  (this.Rd = t.get()[0]),
                  (this.Sd = init2DContext(this.Rd)),
                  this.Ca());
              }
              var i = [
                {
                  Td: _2PI * Math.random(),
                  Ud: 0.1 + 0.4 * Math.random(),
                  Vd: 1,
                  Wd: 2,
                  Xd: 0,
                },
                {
                  Td: _2PI * Math.random(),
                  Ud: 0.1 + 0.4 * Math.random(),
                  Vd: 1.5,
                  Wd: 1.5,
                  Xd: 1,
                },
                {
                  Td: _2PI * Math.random(),
                  Ud: 0.1 + 0.4 * Math.random(),
                  Vd: 2,
                  Wd: 1,
                  Xd: 2,
                },
                {
                  Td: _2PI * Math.random(),
                  Ud: 0.1 + 0.4 * Math.random(),
                  Vd: 3,
                  Wd: 2,
                  Xd: 3,
                },
                {
                  Td: _2PI * Math.random(),
                  Ud: 0.1 + 0.4 * Math.random(),
                  Vd: 2.5,
                  Wd: 2.5,
                  Xd: 4,
                },
                {
                  Td: _2PI * Math.random(),
                  Ud: 0.1 + 0.4 * Math.random(),
                  Vd: 2,
                  Wd: 3,
                  Xd: 5,
                },
                {
                  Td: _2PI * Math.random(),
                  Ud: 0.1 + 0.4 * Math.random(),
                  Vd: 5,
                  Wd: 4,
                  Xd: 6,
                },
                {
                  Td: _2PI * Math.random(),
                  Ud: 0.1 + 0.4 * Math.random(),
                  Vd: 4.5,
                  Wd: 4.5,
                  Xd: 7,
                },
                {
                  Td: _2PI * Math.random(),
                  Ud: 0.1 + 0.4 * Math.random(),
                  Vd: 4,
                  Wd: 5,
                  Xd: 8,
                },
              ];
              return (
                (t.prototype.Ca = function () {
                  var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
                  ((this.Rd.width = t * this.Qd.width() * 0.25),
                    (this.Rd.height = t * this.Qd.height() * 0.25));
                }),
                (t.prototype.Aa = function (t) {
                  var e = this.Rd.width,
                    o = this.Rd.height;
                  (this.Sd.setTransform(1, 0, 0, 1, 0, 0),
                    (this.Sd.fillStyle = "#000000"),
                    this.Sd.fillRect(0, 0, e, o));
                  var n = getApp();
                  if (n.o.Yd) {
                    this.Sd.save();
                    for (
                      var s = 0.8 * Math.max(e, o), r = 0;
                      r < i.length;
                      r++
                    ) {
                      this.Sd.globalCompositeOperation = "normal";
                      var a = i[r],
                        h = Math.cos(a.Vd * (8e-5 * t) + a.Td),
                        l = Math.sin(a.Wd * (8e-5 * t));
                      ((this.Sd.globalAlpha =
                        0.2 + 0.2 * Math.cos(a.Td + a.Ud * (0.001 * t))),
                        this.Sd.drawImage(
                          n.o.Yd[a.Xd],
                          0.5 * e + 0.4 * h * e - 0.5 * s,
                          0.5 * o + 0.2 * l * o - 0.5 * s,
                          s,
                          s,
                        ));
                    }
                    this.Sd.restore();
                  }
                }),
                t
              );
            })(),
            Cookies = (function () {
              function t() {}
              return (
                (t.CONSENT_STATE = "consent_state_2"),
                (t.ALREADY_RATED = "alreadyRated"),
                (t.SHOW_PLAYER_NAMES = "showPlayerNames"),
                (t.MUSIC_ENABLED = "musicEnabled"),
                (t.SFX_ENABLED = "sfxEnabled"),
                (t.ACCOUNT_TYPE = "account_type"),
                (t.CONTROL_MODE = "control_mode"),
                (t.GAME_MODE = "gameMode"),
                (t.GAMES_PLAYED_COUNTER = "gamesPlayedCounter"),
                (t.GUEST_NICKNAME = "nickname"),
                (t.GUEST_SKIN = "skin"),
                (t.PREROLL_SHOW_COUNT = "prerollCount"),
                (t.SHARED_WITH_FRIENDS = "shared"),
                t
              );
            })(),
            EEAMap = (function () {
              function t(t, i, e) {
                for (var o = !1, n = e.length, s = 0, r = n - 1; s < n; r = s++)
                  e[s][1] > i != e[r][1] > i &&
                    t <
                      ((e[r][0] - e[s][0]) * (i - e[s][1])) /
                        (e[r][1] - e[s][1]) +
                        e[s][0] &&
                    (o = !o);
                return o;
              }
              var i = [
                [-28.06744, 64.95936],
                [-10.59082, 72.91964],
                [14.11773, 81.39558],
                [36.51855, 81.51827],
                [32.82715, 71.01696],
                [31.64063, 69.41897],
                [29.41419, 68.43628],
                [30.64379, 67.47302],
                [29.88281, 66.76592],
                [30.73975, 65.50385],
                [30.73975, 64.47279],
                [31.48682, 63.49957],
                [32.18994, 62.83509],
                [28.47726, 60.25122],
                [28.76221, 59.26588],
                [28.03711, 58.60833],
                [28.38867, 57.53942],
                [28.83955, 56.2377],
                [31.24512, 55.87531],
                [31.61865, 55.34164],
                [31.92627, 54.3037],
                [33.50497, 53.26758],
                [32.73926, 52.85586],
                [32.23389, 52.4694],
                [34.05762, 52.44262],
                [34.98047, 51.79503],
                [35.99121, 50.88917],
                [36.67236, 50.38751],
                [37.74902, 50.51343],
                [40.78125, 49.62495],
                [40.47363, 47.70976],
                [38.62799, 46.92028],
                [37.53193, 46.55915],
                [36.72182, 44.46428],
                [39.68218, 43.19733],
                [40.1521, 43.74422],
                [43.52783, 43.03678],
                [45.30762, 42.73087],
                [46.99951, 41.98399],
                [47.26318, 40.73061],
                [44.20009, 40.86309],
                [45.35156, 39.57182],
                [45.43945, 36.73888],
                [35.64789, 35.26481],
                [33.13477, 33.65121],
                [21.47977, 33.92486],
                [12.16268, 34.32477],
                [11.82301, 37.34239],
                [6.09112, 38.28597],
                [-1.96037, 35.62069],
                [-4.82156, 35.60443],
                [-7.6498, 35.26589],
                [-16.45237, 37.44851],
                [-28.06744, 64.95936],
              ];
              return {
                Zd: function (e, o) {
                  return t(o, e, i);
                },
              };
            })(),
            FloatingStringManager = (function () {
              function t(t) {
                var e = void 0;
                e =
                  t > 0
                    ? "+" + Math.floor(t)
                    : t < 0
                      ? "-" + Math.floor(t)
                      : "0";
                var n = Math.min(1.5, 0.5 + t / 600),
                  s = void 0;
                if (t < 1) s = "0xFFFFFF";
                else if (t < 30) {
                  var r = (t - 1) / 29;
                  s = i(
                    1 * (1 - r) + 0.96 * r,
                    1 * (1 - r) + 0.82 * r,
                    1 * (1 - r) + 0 * r,
                  );
                } else if (t < 300) {
                  var a = (t - 30) / 270;
                  s = i(
                    0.96 * (1 - a) + 0.93 * a,
                    0.82 * (1 - a) + 0.34 * a,
                    0 * (1 - a) + 0.25 * a,
                  );
                } else if (t < 700) {
                  var h = (t - 300) / 400;
                  s = i(
                    0.93 * (1 - h) + 0.98 * h,
                    0.34 * (1 - h) + 0 * h,
                    0.25 * (1 - h) + 0.98 * h,
                  );
                } else s = i(0.98, 0, 0.98);
                var l = Math.random(),
                  p = 1 + 0.5 * Math.random();
                return new o(e, s, !0, 0.5, n, l, p);
              }
              function i(t, i, e) {
                return (
                  (((255 * t) & 255) << 16) +
                  (((255 * i) & 255) << 8) +
                  ((255 * e) & 255)
                );
              }
              var e = extend(POGL.Eb, function () {
                (POGL.Eb.call(this), (this.$d = []), (this._d = 0));
              });
              ((e.prototype.ae = function (i) {
                if (((this._d += i), this._d >= 1)) {
                  var e = Math.floor(this._d);
                  this._d -= e;
                  var o = t(e);
                  (this.addChild(o), this.$d.push(o));
                }
              }),
                (e.prototype.be = function (t, i) {
                  for (
                    var e = getApp().q.G.bb,
                      o = e.ce.width / e.ce.resolution,
                      n = e.ce.height / e.ce.resolution,
                      s = 0;
                    s < this.$d.length;
                  ) {
                    var r = this.$d[s];
                    ((r.de = r.de + (i / 2e3) * r.ee),
                      (r.fe = r.fe + (i / 2e3) * r.ge),
                      (r.alpha = 0.5 * Math.sin(Math.PI * r.fe)),
                      r.scale.set(r.de),
                      (r.position.x = o * (0.25 + 0.5 * r.he)),
                      (r.position.y = r.ie
                        ? n * (1 - 0.5 * (1 + r.fe))
                        : n * (1 - 0.5 * (0 + r.fe))),
                      r.fe > 1 &&
                        (pixijs_removeFromParent(r), this.$d.splice(s, 1), s--),
                      s++);
                  }
                }));
              var o = (function () {
                return extend(POGL.Mb, function (t, i, e, o, n, s, r) {
                  (POGL.Mb.call(this, t, {
                    fill: i,
                    fontFamily: "PTSans",
                    fontSize: 36,
                  }),
                    this.anchor.set(0.5),
                    (this.ie = e),
                    (this.de = o),
                    (this.ee = n),
                    (this.he = s),
                    (this.fe = 0),
                    (this.ge = r));
                });
              })();
              return e;
            })(),
            GameMode = {
              je: 0,
              ke: 16,
            },
            GameParams = (function () {
              function t() {
                ((this.le = GameMode.je),
                  (this.me = 0),
                  (this._a = 500),
                  (this.ne = 4e3),
                  (this.oe = 7e3));
              }
              return (
                (t.TEAM_DEFAULT = 0),
                (t.prototype.pe = function () {
                  return 1.02 * this._a;
                }),
                t
              );
            })(),
            GameView = (function () {
              function t(t) {
                ((this.qe = t),
                  (this.re = t.get()[0]),
                  (this.ce = new POGL.Hb({
                    view: this.re,
                    backgroundColor: 0,
                    antialias: !0,
                  })),
                  (this.se = new POGL.Eb()),
                  (this.se.sortableChildren = !0),
                  (this.te = Math.floor(360 * Math.random())),
                  (this.ue = 0),
                  (this.ve = 0),
                  (this.we = 15),
                  (this.xe = 0.5),
                  (this.ye = 0),
                  (this.ze = new WMGameBackgroundSprite()),
                  (this.Ae = new POGL.Ib()),
                  (this.Be = new POGL.Eb()),
                  (this.Ce = new POGL.Eb()),
                  (this.Ce.sortableChildren = !0),
                  (this.De = new POGL.Eb()),
                  (this.De.sortableChildren = !0),
                  (this.Ee = new POGL.Eb()),
                  (this.Ee.sortableChildren = !0),
                  (this.Fe = new POGL.Eb()),
                  (this.Ge = new i()),
                  (this.He = new e()),
                  (this.Ie = new o()),
                  (this.Je = new FloatingStringManager()),
                  (this.Ke = new POGL.Lb()),
                  this.a());
              }
              ((t.prototype.a = function () {
                ((this.ce.backgroundColor = 0),
                  (this.ze.Le.zIndex = 10),
                  this.se.addChild(this.ze.Le),
                  (this.Ae.zIndex = 20),
                  this.se.addChild(this.Ae),
                  (this.Be.zIndex = 5e3),
                  this.se.addChild(this.Be),
                  (this.Ce.zIndex = 5100),
                  this.se.addChild(this.Ce),
                  (this.De.zIndex = 1e4),
                  this.se.addChild(this.De),
                  (this.Ke.texture = getApp().o.Me),
                  this.Ke.anchor.set(0.5),
                  (this.Ke.zIndex = 1),
                  this.Ee.addChild(this.Ke),
                  (this.Fe.alpha = 0.6),
                  (this.Fe.zIndex = 2),
                  this.Ee.addChild(this.Fe),
                  (this.Je.zIndex = 3),
                  this.Ee.addChild(this.Je),
                  (this.Ge.alpha = 0.8),
                  (this.Ge.zIndex = 4),
                  this.Ee.addChild(this.Ge),
                  (this.He.zIndex = 5),
                  this.Ee.addChild(this.He),
                  (this.Ie.zIndex = 6),
                  this.Ee.addChild(this.Ie));
                var t = this,
                  i = getApp();
                (setInterval(function () {
                  i.n.L.nb && i.p.rd(t.ve);
                }, 1200),
                  setInterval(function () {
                    if (i.n.L.nb) {
                      var t = i.n.L.Ne[Ability.MAGNETIC_TYPE];
                      null != t && t.Zb && i.p.sd(1);
                    }
                  }, 1e3),
                  this.Ca());
              }),
                (t.prototype.Ca = function () {
                  var t = window.devicePixelRatio ? window.devicePixelRatio : 1,
                    i = this.qe.width(),
                    e = this.qe.height();
                  (this.ce.resize(i, e),
                    (this.ce.resolution = t),
                    (this.re.width = t * i),
                    (this.re.height = t * e),
                    (this.xe = Math.min(
                      Math.min(i, e),
                      0.625 * Math.max(i, e),
                    )),
                    (this.Ke.position.x = i / 2),
                    (this.Ke.position.y = e / 2),
                    (this.Ke.width = i),
                    (this.Ke.height = e),
                    (this.Ge.position.x = 60),
                    (this.Ge.position.y = 60),
                    (this.He.position.x = 110),
                    (this.He.position.y = 10),
                    (this.Ie.position.x = i - 225),
                    (this.Ie.position.y = 1));
                }),
                (t.prototype.be = function (t, i) {
                  var e = getApp();
                  ((this.we = 15),
                    this.Be.removeChildren(),
                    this.Ce.removeChildren(),
                    this.De.removeChildren(),
                    this.Fe.removeChildren(),
                    this.ze.Oe(t.le == GameMode.je ? e.o.Pe : e.o.Qe));
                  var o = this.Ae;
                  (o.clear(),
                    o.lineStyle(0.2, 16711680, 0.3),
                    o.drawCircle(0, 0, t._a),
                    o.endFill(),
                    (this.Ie.Re = i),
                    (this.Fe.visible = i));
                }),
                (t.prototype.Aa = function (t, i) {
                  if (!(this.ce.width <= 5)) {
                    var e = getApp(),
                      o = e.n.L,
                      n = this.ce.width / this.ce.resolution,
                      s = this.ce.height / this.ce.resolution;
                    this.we = timeDeltaIncrement(this.we, e.n.Qa, i, 0.002);
                    if (window._wmZoomOverride != null) { this.we = window._wmZoomOverride; }
                    var r = this.xe / this.we,
                      a = e.n.L.Ne[Ability.ZOOM_TYPE],
                      h = null != a && a.Zb;
                    ((this.ye = minmax(
                      0,
                      1,
                      this.ye + (i / 1e3) * (0.1 * (h ? 1 : 0) - this.ye),
                    )),
                      (this.Ke.alpha = this.ye),
                      (this.te = this.te + 0.01 * i),
                      this.te > 360 && (this.te = this.te % 360),
                      (this.ue = Math.sin((t / 1200) * 2 * Math.PI)));
                    var l = o.Se[0],
                      p = o.Se[1],
                      u = Math.hypot(l, p),
                      c = n / r / 2,
                      f = s / r / 2;
                    (e.n.db(l - 1.3 * c, l + 1.3 * c, p - 1.3 * f, p + 1.3 * f),
                      this.ze.be(l, p, 2 * c, 2 * f));
                    var d = e.n.Ma._a;
                    if (
                      ((this.se.scale.x = r),
                      (this.se.scale.y = r),
                      (this.se.position.x = n / 2 - l * r),
                      (this.se.position.y = s / 2 - p * r),
                      u > d - 10)
                    ) {
                      this.ve = minmax(0, 1, 1 + (u - d) / 10);
                      var g =
                          Math.cos((this.te * _2PI) / 360) * (1 - this.ve) +
                          1 * this.ve,
                        w = Math.sin((this.te * _2PI) / 360) * (1 - this.ve),
                        v = (((Math.atan2(w, g) + _2PI) % _2PI) * 360) / _2PI,
                        m = this.ve * (0.5 + 0.5 * this.ue),
                        b = convertHSLtoRGB(
                          Math.floor(v),
                          1,
                          0.75 - 0.25 * this.ve,
                        );
                      this.ze.Te(b[0], b[1], b[2], 0.1 + 0.2 * m);
                    } else {
                      this.ve = 0;
                      var y = convertHSLtoRGB(Math.floor(this.te), 1, 0.75);
                      this.ze.Te(y[0], y[1], y[2], 0.1);
                    }
                    for (var C = 0; C < this.Fe.children.length; C++) {
                      var k = this.Fe.children[C];
                      ((k.position.x = n / 2 - (l - k.Ue.x) * r),
                        (k.position.y = s / 2 - (p - k.Ue.y) * r));
                    }
                    ((this.Ge.Ve.position.x = (l / d) * this.Ge.We),
                      (this.Ge.Ve.position.y = (p / d) * this.Ge.We),
                      this.He.Ba(t),
                      this.Je.be(t, i),
                      this.ce.render(this.se, null, !0),
                      this.ce.render(this.Ee, null, !1));
                  }
                }),
                (t.prototype.Xe = function (t, i) {
                  ((i.$e.Ze.Ye().zIndex =
                    ((t + 2147483648) / 4294967296) * 5e3),
                    this.Be.addChild(i.$e._e.Ye()),
                    this.Ce.addChild(i.$e.Ze.Ye()));
                }),
                (t.prototype.af = function (t, i, e) {
                  ((i.bf.zIndex = t == getApp().n.Ma.me
                    ? 1
                    : 10 + ((t + 32768) / 65536) * 5e3),
                    this.De.addChild(i.bf),
                    t != getApp().n.Ma.me && this.Fe.addChild(e));
                }));
              var i = (function () {
                  return extend(POGL.Eb, function () {
                    (POGL.Eb.call(this),
                      (this.We = 40),
                      (this.cf = new POGL.Lb()),
                      this.cf.anchor.set(0.5),
                      (this.Ve = new POGL.Ib()));
                    var t = new POGL.Ib();
                    (t.beginFill("black", 0.4),
                      t.drawCircle(0, 0, this.We),
                      t.endFill(),
                      t.lineStyle(2, 16225317),
                      t.drawCircle(0, 0, this.We),
                      t.moveTo(0, -this.We),
                      t.lineTo(0, +this.We),
                      t.moveTo(-this.We, 0),
                      t.lineTo(+this.We, 0),
                      t.endFill(),
                      (this.cf.alpha = 0.5),
                      (this.Ve.zIndex = 2),
                      (this.Ve.alpha = 0.9),
                      this.Ve.beginFill(16225317),
                      this.Ve.drawCircle(0, 0, 0.06 * this.We),
                      this.Ve.endFill(),
                      this.Ve.lineStyle(1, "black"),
                      this.Ve.drawCircle(0, 0, 0.06 * this.We),
                      this.Ve.endFill(),
                      this.addChild(t),
                      this.addChild(this.cf),
                      this.addChild(this.Ve));
                  });
                })(),
                e = (function () {
                  var t = extend(POGL.Eb, function () {
                    (POGL.Eb.call(this), (this.df = {}));
                  });
                  ((t.prototype.Ba = function (t) {
                    var i = 0.5 + 0.5 * Math.cos(_2PI * (t / 1e3 / 1.6));
                    for (var e in this.df) {
                      var o = this.df[e],
                        n = o.ef;
                      o.alpha = 1 - n + n * i;
                    }
                  }),
                    (t.prototype.be = function (t) {
                      for (var e in this.df)
                        (null != t[e] && t[e].Zb) ||
                          (pixijs_removeFromParent(this.df[e]),
                          delete this.df[e]);
                      var o = 0;
                      for (var n in t) {
                        var s = t[n];
                        if (s.Zb) {
                          var r = this.df[n];
                          if (!r) {
                            var a = getApp().t.Gc(s.Yb).dc;
                            ((r = new i()),
                              (r.texture = a.ff),
                              (r.width = 40),
                              (r.height = 40),
                              (this.df[n] = r),
                              this.addChild(r));
                          }
                          ((r.ef = s.$b), (r.position.x = o), (o += 40));
                        }
                      }
                    }));
                  var i = (function () {
                    return extend(POGL.Lb, function () {
                      (POGL.Lb.call(this), (this.ef = 0));
                    });
                  })();
                  return t;
                })(),
                o = (function () {
                  var t = extend(POGL.Eb, function () {
                    (POGL.Eb.call(this),
                      (this.Re = !0),
                      (this.gf = 12),
                      (this.hf = 9),
                      (this.$d = []));
                    for (var t = 0; t < 14; t++) this.if();
                  });
                  ((t.prototype.be = function (t) {
                    var i = getApp(),
                      e = i.n.Ma.le == GameMode.ke,
                      o = 0,
                      n = 0;
                    (n >= this.$d.length && this.if(),
                      this.$d[n].jf(1, "white"),
                      this.$d[n].kf(
                        "",
                        i18n("index.game.leader.top10"),
                        "(" + i.n.$a + " online)",
                      ),
                      (this.$d[n].position.y = o),
                      (o += this.gf),
                      (n += 1),
                      t.lf.length > 0 && (o += this.hf));
                    for (var s = 0; s < t.lf.length; s++) {
                      var r = t.lf[s],
                        a = i.t.Ac(r.mf);
                      (n >= this.$d.length && this.if(),
                        this.$d[n].jf(0.8, a.nc.jc),
                        this.$d[n].kf(
                          "" + (s + 1),
                          i18nCustomBundle(a.mc),
                          "" + Math.floor(r.K),
                        ),
                        (this.$d[n].position.y = o),
                        (o += this.gf),
                        (n += 1));
                    }
                    t.nf.length > 0 && (o += this.hf);
                    for (var h = 0; h < t.nf.length; h++) {
                      var l = t.nf[h],
                        p = i.n.Ma.me == l.pf,
                        u = void 0,
                        c = void 0;
                      if (p) ((u = "white"), (c = i.n.L.rb.mc));
                      else {
                        var f = i.n.Oa[l.pf];
                        null != f
                          ? ((u = e
                              ? i.t.Ac(f.rb.qf).nc.jc
                              : i.t.zc(f.rb.rf).jc),
                            (c = this.Re ? f.rb.mc : "---"))
                          : ((u = "gray"), (c = "?"));
                      }
                      (p && (o += this.hf),
                        n >= this.$d.length && this.if(),
                        this.$d[n].jf(p ? 1 : 0.8, u),
                        this.$d[n].kf("" + (h + 1), c, "" + Math.floor(l.K)),
                        (this.$d[n].position.y = o),
                        (o += this.gf),
                        (n += 1),
                        p && (o += this.hf));
                    }
                    for (
                      i.n.M > t.nf.length &&
                      ((o += this.hf),
                      n >= this.$d.length && this.if(),
                      this.$d[n].jf(1, "white"),
                      this.$d[n].kf(
                        "" + i.n.M,
                        i.n.L.rb.mc,
                        "" + Math.floor(i.n.L.K),
                      ),
                      (this.$d[n].position.y = o),
                      (o += this.gf),
                      (n += 1),
                      (o += this.hf));
                      this.$d.length > n;
                    )
                      pixijs_removeFromParent(this.$d.pop());
                  }),
                    (t.prototype.if = function () {
                      var t = new i();
                      ((t.position.y = 0),
                        this.$d.length > 0 &&
                          (t.position.y =
                            this.$d[this.$d.length - 1].position.y + this.gf),
                        this.$d.push(t),
                        this.addChild(t));
                    }));
                  var i = (function () {
                    var t = extend(POGL.Eb, function () {
                      (POGL.Eb.call(this),
                        (this.sf = new POGL.Mb("", {
                          fontFamily: "PTSans",
                          fontSize: 12,
                          fill: "white",
                        })),
                        (this.sf.anchor.x = 1),
                        (this.sf.position.x = 30),
                        this.addChild(this.sf),
                        (this.tf = new POGL.Mb("", {
                          fontFamily: "PTSans",
                          fontSize: 12,
                          fill: "white",
                        })),
                        (this.tf.anchor.x = 0),
                        (this.tf.position.x = 35),
                        this.addChild(this.tf),
                        (this.uf = new POGL.Mb("", {
                          fontFamily: "PTSans",
                          fontSize: 12,
                          fill: "white",
                        })),
                        (this.uf.anchor.x = 1),
                        (this.uf.position.x = 220),
                        this.addChild(this.uf));
                    });
                    return (
                      (t.prototype.kf = function (t, i, e) {
                        ((this.sf.text = t), (this.uf.text = e));
                        var o = i;
                        for (this.tf.text = o; this.tf.width > 100; )
                          ((o = o.substring(0, o.length - 1)),
                            (this.tf.text = o + ".."));
                      }),
                      (t.prototype.jf = function (t, i) {
                        ((this.sf.alpha = t),
                          (this.sf.style.fill = i),
                          (this.tf.alpha = t),
                          (this.tf.style.fill = i),
                          (this.uf.alpha = t),
                          (this.uf.style.fill = i));
                      }),
                      t
                    );
                  })();
                  return t;
                })();
              return t;
            })(),
            MessageProcessor = (function () {
              function t(t) {
                ((this.n = t), (this.vf = []), (this.wf = 0));
              }
              ((t.prototype.Cb = function (t) {
                this.vf.push(new DataView(t));
              }),
                (t.prototype.xb = function () {
                  ((this.wf = 0), (this.vf = []));
                }),
                (t.prototype.gb = function () {
                  for (var t = 0; t < 10; t++) {
                    if (0 == this.vf.length) return;
                    var i = this.vf.shift();
                    try {
                      this.xf(i);
                    } catch (t) {
                      throw (console.log("DataReader error: " + t), t);
                    }
                  }
                }),
                (t.prototype.xf = function (t) {
                  switch (255 & t.Tb(0)) {
                    case 0:
                      return void this.yf(t, 1);
                    case 1:
                      return void this.zf(t, 1);
                    case 2:
                      return void this.Af(t, 1);
                    case 3:
                      return void this.Bf(t, 1);
                    case 4:
                      return void this.Cf(t, 1);
                    case 5:
                      return void this.Df(t, 1);
                    case 6:
                      return void this.Ef(t, 1);
                  }
                }),
                (t.prototype.yf = function (t, i) {
                  (console.log("sgp1"), (this.n.Ma.le = t.Tb(i)), (i += 1));
                  var e = t.Ub(i);
                  return (
                    (i += 2),
                    (this.n.Ma.me = e),
                    (this.n.L.rb.qb = e),
                    (this.n.Ma._a = t.Wb(i)),
                    (i += 4),
                    (this.n.Ma.ne = t.Wb(i)),
                    (i += 4),
                    (this.n.Ma.oe = t.Wb(i)),
                    (i += 4),
                    getApp().q.G.bb.be(this.n.Ma, getApp().q.pa.oa()),
                    console.log("sgp2"),
                    i
                  );
                }),
                (t.prototype.zf = function (t, i) {
                  var e = t.Ub(i);
                  i += 2;
                  var o = Date.now();
                  // wf = the time of the NEXT expected server tick.
                  // Previously this was Date.now() + serverTime (a uint16 ms counter),
                  // which grows to tens-of-thousands ms and causes the extrapolation
                  // loop in lb() to run hundreds of iterations when the counter wraps
                  // at ~65 seconds, producing the "speed lunge" bug.
                  // Correct value: one tick interval (95ms) from now.
                  this.wf = o + 95;
                  var n = void 0;
                  ((n = this.Ff(t, i)), (i += this.Gf(n)));
                  for (var s = 0; s < n; s++) i = this.Hf(t, i);
                  ((n = this.Ff(t, i)), (i += this.Gf(n)));
                  for (var r = 0; r < n; r++) i = this.If(t, i);
                  ((n = this.Ff(t, i)), (i += this.Gf(n)));
                  for (var a = 0; a < n; a++) i = this.Jf(t, i);
                  ((n = this.Ff(t, i)), (i += this.Gf(n)));
                  for (var h = 0; h < n; h++) i = this.Kf(t, i);
                  ((n = this.Ff(t, i)), (i += this.Gf(n)));
                  for (var l = 0; l < n; l++) i = this.Lf(t, i);
                  ((n = this.Ff(t, i)), (i += this.Gf(n)));
                  for (var p = 0; p < n; p++) i = this.Mf(t, i);
                  ((n = this.Ff(t, i)), (i += this.Gf(n)));
                  for (var u = 0; u < n; u++) i = this.Nf(t, i);
                  ((n = this.Ff(t, i)), (i += this.Gf(n)));
                  for (var c = 0; c < n; c++) i = this.Of(t, i);
                  return ((i = this.Pf(t, i)), this.n.vb(), i);
                }),
                (t.prototype.Kf = function (t, i) {
                  var e = new Worm.Config();
                  ((e.qb = t.Ub(i)),
                    (i += 2),
                    (e.qf =
                      this.n.Ma.le == GameMode.ke
                        ? t.Tb(i++)
                        : GameParams.TEAM_DEFAULT),
                    (e.rf = t.Ub(i)),
                    (i += 2),
                    (e.Qf = t.Ub(i)),
                    (i += 2),
                    (e.Rf = t.Ub(i)),
                    (i += 2),
                    (e.Sf = t.Ub(i)),
                    (i += 2),
                    (e.Tf = t.Ub(i)),
                    (i += 2));
                  var o = t.Tb(i);
                  i += 1;
                  for (var n = "", s = 0; s < o; s++)
                    ((n += String.fromCharCode(t.Ub(i))), (i += 2));
                  if (((e.mc = n), this.n.Ma.me == e.qb)) this.n.L.Uf(e);
                  else {
                    var r = this.n.Oa[e.qb];
                    null != r && r.pb();
                    var a = new Worm(this.n.Ma);
                    (a.ab(getApp().q.G.bb), (this.n.Oa[e.qb] = a), a.Uf(e));
                  }
                  return i;
                }),
                (t.prototype.Lf = function (t, i) {
                  var e = t.Ub(i);
                  i += 2;
                  var o = this.Vf(e);
                  if (void 0 !== o) {
                    var n = Math.max(
                      0,
                      1 -
                        Math.hypot(
                          this.n.L.Se[0] - o.Se[0],
                          this.n.L.Se[1] - o.Se[1],
                        ) /
                          (0.5 * this.n.Qa),
                    );
                    (getApp().p.pd(n), (o.nb = !1));
                  }
                  return i;
                }),
                (t.prototype.Of = function (t, i) {
                  var e = t.Ub(i);
                  i += 2;
                  var o = e == this.n.Ma.me ? null : this.n.Oa[e],
                    n = t.Tb(i);
                  i += 1;
                  var s = !!(1 & n);
                  if (!!(2 & n)) {
                    var r = t.Wb(i);
                    ((i += 4), o && o.Wf(r));
                  }
                  var a = this.Xf(t.Tb(i++), t.Tb(i++), t.Tb(i++)),
                    h = this.Xf(t.Tb(i++), t.Tb(i++), t.Tb(i++));
                  if (o) {
                    o.Yf(this.wf, a, h, s);
                    var l = Math.max(
                      0,
                      1 -
                        Math.hypot(
                          this.n.L.Se[0] - o.Se[0],
                          this.n.L.Se[1] - o.Se[1],
                        ) /
                          (0.5 * this.n.Qa),
                    );
                    getApp().p.vd(l, e, s);
                  }
                  var p = this.Ff(t, i);
                  if (((i += this.Gf(p)), o))
                    for (var u in o.Ne) {
                      var c = o.Ne[u];
                      c && (c.Zb = !1);
                    }
                  for (var f = 0; f < p; f++) {
                    var d = t.Tb(i);
                    i++;
                    var g = t.Tb(i);
                    if ((i++, o)) {
                      var w = o.Ne[d];
                      (w || (w = o.Ne[d] = new Ability(d)),
                        (w.Zb = !0),
                        (w.$b = Math.min(1, Math.max(0, g / 100))));
                    }
                  }
                  return i;
                }),
                (t.prototype.Pf = function (t, i) {
                  var e = this.n.L,
                    o = t.Tb(i);
                  i += 1;
                  var n = !!(1 & o),
                    s = !!(2 & o),
                    r = !!(4 & o);
                  if (s) {
                    var a = e.K;
                    (e.Wf(t.Wb(i)),
                      (i += 4),
                      (a = e.K - a),
                      a > 0 && getApp().q.G.bb.Je.ae(a));
                  }
                  (r && ((this.n.Pa = t.Wb(i)), (i += 4)),
                    e.Yf(
                      this.wf,
                      this.Xf(t.Tb(i++), t.Tb(i++), t.Tb(i++)),
                      this.Xf(t.Tb(i++), t.Tb(i++), t.Tb(i++)),
                      n,
                    ),
                    getApp().p.vd(0.5, this.n.Ma.me, n));
                  var h = this.Ff(t, i);
                  i += this.Gf(h);
                  for (var l in e.Ne) {
                    var p = e.Ne[l];
                    p && (p.Zb = !1);
                  }
                  for (var u = 0; u < h; u++) {
                    var c = t.Tb(i);
                    i++;
                    var f = t.Tb(i);
                    i++;
                    var d = e.Ne[c];
                    (d || ((d = new Ability(c)), (e.Ne[c] = d)),
                      (d.Zb = !0),
                      (d.$b = Math.min(1, Math.max(0, f / 100))));
                  }
                  getApp().q.G.bb.He.be(e.Ne);
                }),
                (t.prototype.Mf = function (t, i) {
                  var e = this,
                    o = t.Ub(i);
                  i += 2;
                  var n = this.Vf(o),
                    s = t.Wb(i);
                  i += 4;
                  var r = this.Ff(t, i);
                  if (((i += this.Gf(r)), n)) {
                    (n.Wf(s),
                      n.Zf(
                        this.wf,
                        function () {
                          return e.Xf(t.Tb(i++), t.Tb(i++), t.Tb(i++));
                        },
                        r,
                      ),
                      n.$f(!0));
                    var a = Math.max(
                      0,
                      1 -
                        Math.hypot(
                          this.n.L.Se[0] - n.Se[0],
                          this.n.L.Se[1] - n.Se[1],
                        ) /
                          (0.5 * this.n.Qa),
                    );
                    getApp().p.td(a, o);
                  } else i += 6 * r;
                  return i;
                }),
                (t.prototype.Nf = function (t, i) {
                  var e = t.Ub(i);
                  i += 2;
                  var o = this.n.Oa[e];
                  return (o && o.nb && o.$f(!1), getApp().p.ud(e), i);
                }),
                (t.prototype.Hf = function (t, i) {
                  var e = new Portion.Config();
                  ((e.qb = t.Vb(i)),
                    (i += 4),
                    (e.qf =
                      this.n.Ma.le == GameMode.ke
                        ? t.Tb(i++)
                        : GameParams.TEAM_DEFAULT),
                    (e._f = this.Xf(t.Tb(i++), t.Tb(i++), t.Tb(i++))),
                    (e.rf = t.Tb(i++)));
                  var o = this.n.Na[e.qb];
                  null != o && o.pb();
                  var n = new Portion(e, getApp().q.G.bb);
                  return (
                    n.ag(this.bg(e.qb), this.cg(e.qb), !0),
                    (this.n.Na[e.qb] = n),
                    i
                  );
                }),
                (t.prototype.If = function (t, i) {
                  var e = t.Vb(i);
                  i += 4;
                  var o = this.n.Na[e];
                  return (
                    o && ((o.dg = 0), (o.eg = 1.5 * o.eg), (o.sb = !0)),
                    i
                  );
                }),
                (t.prototype.Jf = function (t, i) {
                  var e = t.Vb(i);
                  i += 4;
                  var o = t.Ub(i);
                  i += 2;
                  var n = this.n.Na[e];
                  if (n) {
                    ((n.dg = 0), (n.eg = 0.1 * n.eg), (n.sb = !0));
                    var s = this.Vf(o);
                    if (s && s.mb) {
                      var r = s == this.n.L,
                        a = r
                          ? 1
                          : Math.max(
                              0,
                              1 -
                                Math.hypot(
                                  this.n.L.Se[0] - n.tb,
                                  this.n.L.Se[1] - n.ub,
                                ) /
                                  (0.5 * this.n.Qa),
                            );
                      (getApp().p.dd(a, r, n.rb.rf),
                        n.ag(s.Se[0], s.Se[1], !1));
                    }
                  }
                  return i;
                }));
              var i = [
                34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8,
                7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5,
                5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24,
                26, 29, 34,
              ];
              return (
                (t.prototype.Af = function (t) {
                  for (
                    var e = (getApp().o.fg.re, getApp().o.fg.gg),
                      o = e.getImageData(0, 0, 80, 80),
                      n = i[0],
                      s = 80 - n,
                      r = 0,
                      a = 0;
                    a < 628;
                    a++
                  )
                    for (var h = t.Tb(1 + a), l = 0; l < 8; l++) {
                      var p = 0 != ((h >> l) & 1),
                        u = 4 * (n + 80 * r);
                      (p
                        ? ((o.data[u] = 255),
                          (o.data[u + 1] = 255),
                          (o.data[u + 2] = 255),
                          (o.data[u + 3] = 255))
                        : (o.data[u + 3] = 0),
                        ++n >= s && ++r < 80 && ((n = i[r]), (s = 80 - n)));
                    }
                  e.putImageData(o, 0, 0);
                  var c = getApp().q.G.bb.Ge.cf;
                  ((c.texture = getApp().o.fg.ff), c.texture.update());
                }),
                (t.prototype.Cf = function (t, i) {
                  var e = t.Vb(i);
                  ((i += 4), console.log("Wormy Error: " + e));
                }),
                (t.prototype.Df = function (t, i) {
                  (console.log("g.o"), this.n.wb());
                }),
                (t.prototype.Ef = function (t, i) {
                  var e = t.Ub(i);
                  i += 2;
                  var o = 0 != t.Tb(i);
                  ((i += 1),
                    console.log(
                      "wormKilled, victim: " + e + " " + (o ? "HEADSHOT" : "-"),
                    ),
                    o && getApp().p.qd(1));
                }),
                (t.prototype.Bf = function (t, i) {
                  ((this.n.$a = t.Ub(i)),
                    (i += 2),
                    (this.n.M = t.Ub(i)),
                    (i += 2));
                  var e = new ScoreTableModel();
                  e.nf = [];
                  for (var o = t.Tb(i++), n = 0; n < o; n++) {
                    var s = t.Ub(i);
                    i += 2;
                    var r = t.Wb(i);
                    ((i += 4), e.nf.push(ScoreTableModel.hg(s, r)));
                  }
                  if (((e.lf = []), this.n.Ma.le == GameMode.ke))
                    for (var a = t.Tb(i++), h = 0; h < a; h++) {
                      var l = t.Tb(i);
                      i += 1;
                      var p = t.Wb(i);
                      ((i += 4), e.lf.push(ScoreTableModel.ig(l, p)));
                    }
                  getApp().q.G.bb.Ie.be(e);
                }),
                (t.prototype.Vf = function (t) {
                  return t == this.n.Ma.me ? this.n.L : this.n.Oa[t];
                }),
                (t.prototype.Xf = function (t, i, e) {
                  return (
                    1e4 *
                    ((16777215 &
                      ((255 & e) |
                        ((i << 8) & 65280) |
                        ((t << 16) & 16711680))) /
                      8388608 -
                      1)
                  );
                }),
                (t.prototype.bg = function (t) {
                  return ((65535 & t) / 32768 - 1) * this.n.Ma.pe();
                }),
                (t.prototype.cg = function (t) {
                  return (((t >> 16) & 65535) / 32768 - 1) * this.n.Ma.pe();
                }),
                (t.prototype.Ff = function (t, i) {
                  var e = t.Tb(i);
                  if (0 == (128 & e)) return e;
                  var o = t.Tb(i + 1);
                  if (0 == (128 & o)) return o | ((e << 7) & 16256);
                  var n = t.Tb(i + 2);
                  if (0 == (128 & n))
                    return n | ((o << 7) & 16256) | ((e << 14) & 2080768);
                  var s = t.Tb(i + 3);
                  return 0 == (128 & s)
                    ? s |
                        ((n << 7) & 16256) |
                        ((o << 14) & 2080768) |
                        ((e << 21) & 266338304)
                    : void 0;
                }),
                (t.prototype.Gf = function (t) {
                  return t < 128
                    ? 1
                    : t < 16384
                      ? 2
                      : t < 2097152
                        ? 3
                        : t < 268435456
                          ? 4
                          : void 0;
                }),
                t
              );
            })(),
            Optional = (function () {
              function t(t) {
                this.jg = t;
              }
              return (
                (t.kg = function () {
                  return new Optional(null);
                }),
                (t.lg = function (t) {
                  return new Optional(t);
                }),
                (t.prototype.mg = function () {
                  return this.jg;
                }),
                (t.prototype.ng = function () {
                  return null != this.jg;
                }),
                (t.prototype.og = function (t) {
                  null != this.jg && t(this.jg);
                }),
                t
              );
            })(),
            Portion = (function () {
              function t(t, i) {
                ((this.rb = t),
                  (this.pg = t.rf >= 80),
                  (this.tb = 0),
                  (this.ub = 0),
                  (this.qg = 0),
                  (this.rg = 0),
                  (this.eg = this.pg ? 1 : t._f),
                  (this.dg = 1),
                  (this.sb = !1),
                  (this.sg = 0),
                  (this.tg = 0),
                  (this.ob = 1),
                  (this.Td = 2 * Math.PI * Math.random()),
                  (this.ug = new PortionSpriteTree()),
                  this.ug.vg(
                    getApp().n.Ma.le,
                    this.rb.qf == GameParams.TEAM_DEFAULT
                      ? null
                      : getApp().t.Ac(this.rb.qf),
                    getApp().t.Fc(this.rb.rf),
                  ),
                  i.Xe(t.qb, this.ug));
              }
              return (
                (t.SkinType = {
                  VELOCITY: 81,
                  FLEXIBLE: 82,
                  MAGNETIC: 83,
                  X2: 84,
                  X5: 85,
                  X10: 86,
                  ENERGY: 87,
                  ZOOM: 88,
                  COIN: 90,
                }),
                (t.prototype.pb = function () {
                  (this.ug.$e._e.wg(), this.ug.$e.Ze.wg());
                }),
                (t.prototype.ag = function (t, i, e) {
                  ((this.tb = t),
                    (this.ub = i),
                    e && ((this.qg = t), (this.rg = i)));
                }),
                (t.prototype.kb = function (t, i) {
                  var e = Math.min(0.5, 1 * this.eg),
                    o = Math.min(2.5, 1.5 * this.eg);
                  ((this.sg = timeDeltaIncrement(this.sg, e, i, 0.0025)),
                    (this.tg = timeDeltaIncrement(this.tg, o, i, 0.0025)),
                    (this.ob = timeDeltaIncrement(
                      this.ob,
                      this.dg,
                      i,
                      0.0025,
                    )));
                }),
                (t.prototype.lb = function (t, i, e) {
                  ((this.qg = timeDeltaIncrement(this.qg, this.tb, i, 0.0025)),
                    (this.rg = timeDeltaIncrement(this.rg, this.ub, i, 0.0025)),
                    this.ug.be(this, t, i, e));
                }),
                (t.Config = (function () {
                  function t() {
                    ((this.qb = 0),
                      (this.qf = GameParams.TEAM_DEFAULT),
                      (this._f = 0),
                      (this.rf = 0));
                  }
                  return t;
                })()),
                t
              );
            })(),
            PortionSpriteTree = (function () {
              function t() {
                ((this.$e = new o(new WMSprite(), new WMSprite())),
                  (this.$e._e.xg.blendMode = POGL.Pb.Qb),
                  (this.$e._e.xg.zIndex = e),
                  (this.$e.Ze.xg.zIndex = i));
              }
              var i = 500,
                e = 100;
              ((t.prototype.vg = function (t, i, e) {
                var o = e.dc;
                null != o && this.$e.Ze.yg(o);
                var n = t == GameMode.ke && null != i ? i.oc.ec : e.ec;
                null != n && this.$e._e.yg(n);
              }),
                (t.prototype.be = function (t, i, e, o) {
                  if (!o(t.qg, t.rg)) return void this.$e.zg();
                  var n = t.tg * (1 + 0.3 * Math.cos(t.Td + i / 200));
                  t.pg
                    ? this.$e.Ag(
                        t.qg,
                        t.rg,
                        2 * t.sg,
                        1 * t.ob,
                        1.2 * n,
                        0.8 * t.ob,
                      )
                    : this.$e.Ag(
                        t.qg,
                        t.rg,
                        2 * t.sg,
                        1 * t.ob,
                        2 * n,
                        0.3 * t.ob,
                      );
                }));
              var o = (function () {
                function t(t, i) {
                  ((this.Ze = t), (this._e = i));
                }
                return (
                  (t.prototype.Ag = function (t, i, e, o, n, s) {
                    (this.Ze.$f(!0),
                      this.Ze.Bg(t, i),
                      this.Ze.Cg(e),
                      this.Ze.Dg(o),
                      this._e.$f(!0),
                      this._e.Bg(t, i),
                      this._e.Cg(n),
                      this._e.Dg(s));
                  }),
                  (t.prototype.zg = function () {
                    (this.Ze.$f(!1), this._e.$f(!1));
                  }),
                  t
                );
              })();
              return t;
            })(),
            PropertyManager = (function () {
              function t() {
                ((this.Eg = 0),
                  (this.Fg = 0),
                  (this.Gg = 0),
                  (this.Hg = 0),
                  (this.Ig = 0),
                  (this.Jg = []));
              }
              function i(t, i) {
                var o = getApp().t.ac;
                if ("SKIN" === i) {
                  var n = e(o.skinArrayDict, t);
                  return n < 0 ? null : o.skinArrayDict[n];
                }
                switch (i) {
                  case "EYES":
                    return o.eyesDict[t];
                  case "MOUTH":
                    return o.mouthDict[t];
                  case "GLASSES":
                    return o.glassesDict[t];
                  case "HAT":
                    return o.hatDict[t];
                }
                return null;
              }
              function e(t, i) {
                for (var e = 0; e < t.length; e++) if (t[e].id == i) return e;
                return -1;
              }
              return (
                (t.prototype.a = function () {}),
                (t.prototype.fa = function (t) {
                  switch (t) {
                    case "SKIN":
                      return this.Eg;
                    case "EYES":
                      return this.Fg;
                    case "MOUTH":
                      return this.Gg;
                    case "GLASSES":
                      return this.Hg;
                    case "HAT":
                      return this.Ig;
                  }
                  return 0;
                }),
                (t.prototype.Kg = function (t) {
                  (this.Jg.push(t), this.Lg());
                }),
                (t.prototype.xa = function () {
                  for (
                    var t = getApp().t.ac, i = [], e = 0;
                    e < t.skinArrayDict.length;
                    e++
                  ) {
                    var o = t.skinArrayDict[e];
                    this.Mg(o.id, "SKIN") && i.push(o);
                  }
                  return 0 == i.length
                    ? 0
                    : i[parseInt(i.length * Math.random())].id;
                }),
                (t.prototype.Ng = function () {
                  if (getApp().t.U) {
                    var t = getApp().t.ac.skinArrayDict,
                      i = e(t, this.Eg);
                    if (!(i < 0)) {
                      for (var o = i + 1; o < t.length; o++)
                        if (this.Mg(t[o].id, "SKIN"))
                          return ((this.Eg = t[o].id), void this.Lg());
                      for (var n = 0; n < i; n++)
                        if (this.Mg(t[n].id, "SKIN"))
                          return ((this.Eg = t[n].id), void this.Lg());
                    }
                  }
                }),
                (t.prototype.Og = function () {
                  if (getApp().t.U) {
                    var t = getApp().t.ac.skinArrayDict,
                      i = e(t, this.Eg);
                    if (!(i < 0)) {
                      for (var o = i - 1; o >= 0; o--)
                        if (this.Mg(t[o].id, "SKIN"))
                          return ((this.Eg = t[o].id), void this.Lg());
                      for (var n = t.length - 1; n > i; n--)
                        if (this.Mg(t[n].id, "SKIN"))
                          return ((this.Eg = t[n].id), void this.Lg());
                    }
                  }
                }),
                (t.prototype.Pg = function (t, i) {
                  if (this.Mg(t, i))
                    switch (i) {
                      case "SKIN":
                        return void (
                          this.Eg != t && ((this.Eg = t), this.Lg())
                        );
                      case "EYES":
                        return void (
                          this.Fg != t && ((this.Fg = t), this.Lg())
                        );
                      case "MOUTH":
                        return void (
                          this.Gg != t && ((this.Gg = t), this.Lg())
                        );
                      case "GLASSES":
                        return void (
                          this.Hg != t && ((this.Hg = t), this.Lg())
                        );
                      case "HAT":
                        return void (
                          this.Ig != t && ((this.Ig = t), this.Lg())
                        );
                    }
                }),
                (t.prototype.Mg = function (t, e) {
                  var o = i(t, e);
                  return (
                    null != o &&
                    ((0 == o.price && !o.nonbuyable) || getApp().s.Qg(t, e))
                  );
                }),
                (t.prototype.Lg = function () {
                  for (var t = 0; t < this.Jg.length; t++) this.Jg[t]();
                }),
                t
              );
            })(),
            Region = (function () {
              function t(t, i, e, o, n, s, r, a, h) {
                ((this.ff = new POGL.Gb(t, new POGL.Kb(i, e, o, n))),
                  (this.Rg = i),
                  (this.Sg = e),
                  (this.Tg = o),
                  (this.Ug = n),
                  (this.Vg = s || (a || o) / 2),
                  (this.Wg = r || (h || n) / 2),
                  (this.Xg = a || o),
                  (this.Yg = h || n),
                  (this.Zg = 0.5 - (this.Vg - 0.5 * this.Xg) / this.Tg),
                  (this.$g = 0.5 - (this.Wg - 0.5 * this.Yg) / this.Ug),
                  (this._g = this.Tg / this.Xg),
                  (this.ah = this.Ug / this.Yg));
              }
              return t;
            })(),
            ResourceManager = (function () {
              function t() {
                ((this.Yd = []),
                  (this.Pe = new POGL.Gb(o)),
                  (this.Qe = new POGL.Gb(n)),
                  (this.Me = new POGL.Gb(s)),
                  (this.bh = new Region(
                    r,
                    158,
                    86,
                    67,
                    124,
                    148,
                    63.5,
                    128,
                    128,
                  )),
                  (this.ch = new Region(
                    r,
                    158,
                    4,
                    87,
                    74,
                    203,
                    63.5,
                    128,
                    128,
                  )),
                  (this.dh = new Region(
                    r,
                    4,
                    4,
                    146,
                    146,
                    63.5,
                    63.5,
                    128,
                    128,
                  )),
                  (this.fg = (function () {
                    var t = window.document.createElement("canvas");
                    return (
                      (t.width = 80),
                      (t.height = 80),
                      {
                        re: t,
                        gg: t.getContext("2d"),
                        ff: new POGL.Gb(POGL.Fb.from(t)),
                      }
                    );
                  })()),
                  (this.Yc = {}),
                  (this.Vc = {}),
                  (this.eh = []),
                  (this.fh = null));
              }
              function i(t, i, e, o) {
                var n = parseInt(o.substring(1, 3), 16),
                  s = parseInt(o.substring(3, 5), 16),
                  r = parseInt(o.substring(5, 7), 16),
                  a = window.document.createElement("canvas");
                ((a.width = i), (a.height = e));
                var h = a && a.getContext ? a.getContext("2d") : null;
                (h.clearRect(0, 0, i, e), h.drawImage(t, 0, 0, i, e));
                for (
                  var l = h.getImageData(0, 0, i, e), p = i * e, u = 0;
                  u < p;
                  u++
                )
                  ((l.data[4 * u] *= n / 256),
                    (l.data[4 * u + 1] *= s / 256),
                    (l.data[4 * u + 2] *= r / 256));
                return (h.putImageData(l, 0, 0), a);
              }
              function e(t, i) {
                for (
                  var e = t.length, o = new Array(t.length), n = 0;
                  n < t.length;
                  n++
                ) {
                  var s = (o[n] = new Image());
                  ((s.onload = function () {
                    0 == --e && i(o);
                  }),
                    (s.src = t[n]));
                }
              }
              var o = (function () {
                  var t = POGL.Fb.from("/images/bg-pattern-pow2-ARENA.png");
                  return ((t.wrapMode = POGL.Rb.Sb), t);
                })(),
                n = (function () {
                  var t = POGL.Fb.from("/images/bg-pattern-pow2-TEAM2.png");
                  return ((t.wrapMode = POGL.Rb.Sb), t);
                })(),
                s = POGL.Fb.from("/images/lens.png"),
                r = POGL.Fb.from("/images/wear-ability.png");
              return (
                (t.prototype.a = function (t) {
                  function o() {
                    0 == --s && t();
                  }
                  var n = this,
                    s = 5;
                  (e(
                    [
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABwUlEQVRIS73VB2sWQRDG8d/aoth7R7HEgt//k4hdUexGjSaR2OLKI3PhXmMB4RwYbt/b9+a/88zsbjOxtb/F773nP5tGnk++Dd5a63+K8VtA7z1Bt2Ib5mq8uYKt4Qs+4XPGrbVAN9gvAb33LdiBXeU7sR15H/uKj/iAlfLV1lrez9gGQO89q96NfTiA/diLQDIXy+oT/D0W8RbvsNxay9y6zQBq5XtwEEdxDEcKFGikikWa5Qr8Ci/wEm+wNM5kHVCaZ5WHcQKnyzM+hIDHgCW8xjM8Ls94IdkNNRkD8nEkOYmzOFfPUwUNIAWPpbABJNgTPMSDej5NZq21ZOkHoFoxBY0kCX4R8wUJIBlkflyDFDcZBJDgd3C3IJFsJS08ANJ+KWaCXcDl8vOVUebSVWndWFpytQqcFd/HrfJ7BV1sra0NgKwsqzyDS7iKKwjgeOk/7IGhQ7IXItPzAtzEDdzGo2SXjhoA0T/FjTxZ/bUCpA6RLcX/uaWzg9OqkSMSBXC9skhNFlKH/waYXKLJixyppmvT2gvTbbQCpMenOyoKkuN4msNu2D2THtcjyHQXzggy3ZU5vpEmu/Rnb9Z///UddRYCKBhTvLwAAAAASUVORK5CYII=",
                    ],
                    function (t) {
                      var e = t[0],
                        s = new Array(9);
                      ((s[0] = i(e, 8, 8, "#ff66aa")),
                        (s[1] = i(e, 8, 8, "#ff8888")),
                        (s[2] = i(e, 8, 8, "#ffaa66")),
                        (s[3] = i(e, 8, 8, "#aaff66")),
                        (s[4] = i(e, 8, 8, "#88ff88")),
                        (s[5] = i(e, 8, 8, "#66ffaa")),
                        (s[6] = i(e, 8, 8, "#66aaff")),
                        (s[7] = i(e, 8, 8, "#8888ff")),
                        (s[8] = i(e, 8, 8, "#aa66ff")),
                        (n.Yd = s),
                        o());
                    },
                  ),
                    (this.Yc = {}),
                    o(),
                    (this.Vc = {}),
                    o(),
                    o(),
                    (this.eh = []),
                    o(),
                    (this.fh = null));
                }),
                t
              );
            })(),
            ScenesManager = (function () {
              function t() {
                ((this.G = new GameViewController()),
                  (this.D = null),
                  (this.gh = null),
                  (this.hh = null),
                  (this.ih = null),
                  (this.jh = null),
                  (this.kh = null),
                  (this.pa = null),
                  (this.lh = null),
                  (this.mh = null),
                  (this.nh = null),
                  (this.$ = null),
                  (this.na = null),
                  (this.ia = null),
                  (this.oh = []),
                  (this.qh = null));
              }
              function i(t, i) {
                if (0 != i) {
                  var e = t[i];
                  (arraycopy(t, 0, 1, i), (t[0] = e));
                }
              }
              function e(t, i) {
                if (i != t.length + 1) {
                  var e = t[i];
                  (arraycopy(t, i + 1, i, t.length - i - 1),
                    (t[t.length - 1] = e));
                }
              }
              function o(t, i) {
                for (var e = 0; e < t.length; e++) if (t[e] == i) return e;
                return -1;
              }
              return (
                (t.prototype.a = function () {
                  ((this.oh = [
                    this.G,
                    (this.D = new MainMenuViewController()),
                    (this.gh = new WithdrawConsentViewController()),
                    (this.hh = new CoinsViewController()),
                    (this.ih = new LeadersViewController()),
                    (this.jh = new ProfileViewController()),
                    (this.kh = new LoginViewController()),
                    (this.pa = new SettingsViewController()),
                    (this.lh = new SkinsViewController()),
                    (this.mh = new StoreViewController()),
                    (this.nh = new WearViewController()),
                    (this.$ = new ToasterContainerViewController()),
                    (this.na = new LoadingViewController()),
                    (this.ia = new PrerollViewController()),
                  ]),
                    (this.qh = new BackgroundView(BaseViewController.rh)));
                }),
                (t.prototype.Aa = function (t, i) {
                  for (var e = this.oh.length - 1; e >= 0; e--)
                    this.oh[e].Aa(t, i);
                  this.oh[0] != this.G &&
                    this.oh[0] != this.ia &&
                    null != this.qh &&
                    this.qh.Aa(t, i);
                }),
                (t.prototype.Ca = function () {
                  for (var t = this.oh.length - 1; t >= 0; t--) this.oh[t].Ca();
                  null != this.qh && this.qh.Ca();
                }),
                (t.prototype.H = function (t) {
                  var e = o(this.oh, t);
                  if (!(e < 0)) {
                    (this.oh[0].sh(), i(this.oh, e), this.th());
                  }
                }),
                (t.prototype.uh = function () {
                  this.oh[0].sh();
                  do {
                    e(this.oh, 0);
                  } while (this.oh[0].Yb != ViewControllerType.vh);
                  this.th();
                }),
                (t.prototype.th = function () {
                  var t = this.oh[0];
                  (t.wh(), t.xh(), this.yh());
                }),
                (t.prototype.zh = function () {
                  return (
                    0 != this.oh.length &&
                    this.oh[0].Yb == ViewControllerType.vh &&
                    this.$.Ah()
                  );
                }),
                (t.prototype.yh = function () {
                  this.zh() && this.H(this.$);
                }),
                t
              );
            })(),
            ScoreTableModel = (function () {
              function t() {
                ((this.nf = []), (this.lf = []));
              }
              return (
                (t.hg = function (t, i) {
                  return {
                    pf: t,
                    K: i,
                  };
                }),
                (t.ig = function (t, i) {
                  return {
                    mf: t,
                    K: i,
                  };
                }),
                t
              );
            })(),
            UserManager = (function () {
              function t() {
                ((this.Bh = []),
                  (this.Ch = []),
                  (this.Dh = !1),
                  (this.Eh = "guest"),
                  (this.Fh = {}),
                  (this.Gh = null));
              }
              return (
                (t.prototype.a = function () {
                  var t = this;
                  getApp().t.aa(function () {
                    (t.Hh(), t.Ih());
                  });
                }),
                (t.prototype.V = function () {
                  return this.Dh ? this.Fh.userId : "";
                }),
                (t.prototype.Jh = function () {
                  return this.Dh ? this.Fh.username : "";
                }),
                (t.prototype.ea = function () {
                  return this.Dh ? this.Fh.nickname : "";
                }),
                (t.prototype.Kh = function () {
                  return this.Dh ? this.Fh.avatarUrl : GUEST_AVATAR_URL;
                }),
                (t.prototype.Lh = function () {
                  return this.Dh && this.Fh.isBuyer;
                }),
                (t.prototype.X = function () {
                  return this.Dh && this.Fh.isConsentGiven;
                }),
                (t.prototype.Mh = function () {
                  return this.Dh ? this.Fh.coins : 0;
                }),
                (t.prototype.Nh = function () {
                  return this.Dh ? this.Fh.level : 1;
                }),
                (t.prototype.Oh = function () {
                  return this.Dh ? this.Fh.expOnLevel : 0;
                }),
                (t.prototype.Ph = function () {
                  return this.Dh ? this.Fh.expToNext : 50;
                }),
                (t.prototype.Qh = function () {
                  return this.Dh ? this.Fh.skinId : 0;
                }),
                (t.prototype.Rh = function () {
                  return this.Dh ? this.Fh.eyesId : 0;
                }),
                (t.prototype.Sh = function () {
                  return this.Dh ? this.Fh.mouthId : 0;
                }),
                (t.prototype.Th = function () {
                  return this.Dh ? this.Fh.glassesId : 0;
                }),
                (t.prototype.Uh = function () {
                  return this.Dh ? this.Fh.hatId : 0;
                }),
                (t.prototype.Vh = function () {
                  return this.Dh ? this.Fh.highScore : 0;
                }),
                (t.prototype.Wh = function () {
                  return this.Dh ? this.Fh.bestSurvivalTimeSec : 0;
                }),
                (t.prototype.Xh = function () {
                  return this.Dh ? this.Fh.kills : 0;
                }),
                (t.prototype.Yh = function () {
                  return this.Dh ? this.Fh.headShots : 0;
                }),
                (t.prototype.Zh = function () {
                  return this.Dh ? this.Fh.sessionsPlayed : 0;
                }),
                (t.prototype.$h = function () {
                  return this.Dh ? this.Fh.totalPlayTimeSec : 0;
                }),
                (t.prototype._h = function () {
                  return this.Dh ? this.Fh.regDate : {};
                }),
                (t.prototype.T = function (t) {
                  this.Bh.push(t);
                }),
                (t.prototype.ai = function (t) {
                  this.Ch.push(t);
                }),
                (t.prototype.Qg = function (t, i) {
                  var e = this.Fh.propertyList;
                  if (!e) return !1;
                  for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    if (n.id == t && n.type === i) return !0;
                  }
                  return !1;
                }),
                (t.prototype.N = function () {
                  return this.Dh;
                }),
                (t.prototype.ca = function () {
                  return this.Eh;
                }),
                (t.prototype.O = function (t) {
                  var i = this;
                  this.Dh &&
                    this.bi(function (e) {
                      if (e) {
                        var o = i.Mh(),
                          n = i.Nh();
                        ((i.Fh = e), i.ci());
                        var s = i.Mh(),
                          r = i.Nh();
                        r > 1 &&
                          r != n &&
                          getApp().q.$.di(new LevelUpToasterViewController(r));
                        var a = s - o;
                        a >= 20 &&
                          getApp().q.$.di(new CoinsToasterViewController(a));
                      }
                      t && t();
                    });
                }),
                (t.prototype.bi = function (t) {
                  $.get(
                    GATEWAY_HOST + "/pub/wuid/" + this.Eh + "/getUserData",
                    function (i) {
                      t(i.user_data);
                    },
                  );
                }),
                (t.prototype.ei = function (t, i, e) {
                  var o = this;
                  $.get(
                    GATEWAY_HOST +
                      "/pub/wuid/" +
                      this.Eh +
                      "/buyProperty?id=" +
                      t +
                      "&type=" +
                      i,
                    function (t) {
                      1200 == t.code ? o.O(e) : e();
                    },
                  ).fail(function () {
                    e();
                  });
                }),
                (t.prototype.fi = function () {
                  var t = this;
                  if ((this.gi(), "undefined" == typeof FB))
                    return void this.hi();
                  FB.getLoginStatus(function (i) {
                    if ("connected" === i.status)
                      return void (i.authResponse && i.authResponse.accessToken
                        ? t.ii("facebook", "fb_" + i.authResponse.accessToken)
                        : t.hi());
                    FB.login(function (i) {
                      if (
                        "connected" === i.status &&
                        i.authResponse &&
                        i.authResponse.accessToken
                      )
                        return void t.ii(
                          "facebook",
                          "fb_" + i.authResponse.accessToken,
                        );
                      t.hi();
                    });
                  });
                }),
                (t.prototype.ji = function () {
                  var t = this;
                  if ((this.gi(), void 0 === GoogleAuth)) return void this.hi();
                  GoogleAuth.then(function (auth) {
                    if (auth.isSignedIn.get()) {
                      var i = auth.currentUser.get();
                      return void t.ii(
                        "google",
                        "gg_" + i.getAuthResponse().id_token,
                      );
                    }
                    (auth.currentUser.listen(function (i) {
                      i.isSignedIn()
                        ? t.ii("google", "gg_" + i.getAuthResponse().id_token)
                        : t.hi();
                    }),
                      auth.signIn());
                  });
                }),
                (t.prototype.ki = function () {
                  var t = this;
                  (this.gi(),
                    VK.Auth.getLoginStatus(function (i) {
                      if (i.session)
                        return void (i.session.sid
                          ? t.ii("vkontakte", "vk_" + i.session.sid)
                          : t.hi());
                      VK.Auth.login(function (i) {
                        if (i.session && i.session.sid)
                          return void t.ii("vkontakte", "vk_" + i.session.sid);
                        t.hi();
                      });
                    }));
                }),
                (t.prototype.gi = function () {
                  if ((console.log("iSI: " + this.Dh), this.Dh)) {
                    var t = this.Gh;
                    switch (
                      ((this.Dh = !1),
                      (this.Eh = "guest"),
                      (this.Fh = {}),
                      (this.Gh = null),
                      setCookie(Cookies.ACCOUNT_TYPE, "", 60),
                      t)
                    ) {
                      case "facebook":
                        return void this.li();
                      case "google":
                        return void this.mi();
                      case "vkontakte":
                        return void this.ni();
                    }
                    this.Hh();
                  }
                }),
                (t.prototype.Ih = function () {
                  console.log("rs");
                  var t = getCookie(Cookies.ACCOUNT_TYPE),
                    i = this;
                  "facebook" == t
                    ? (console.log("rs:fb"),
                      (function t() {
                        "undefined" != typeof FB ? i.fi() : setTimeout(t, 100);
                      })())
                    : "google" == t
                      ? (console.log("rs:gg"),
                        (function t() {
                          void 0 !== GoogleAuth ? i.ji() : setTimeout(t, 100);
                        })())
                      : (console.log("rs:lo"), this.gi());
                }),
                (t.prototype.Hh = function () {
                  for (var t = 0; t < this.Bh.length; t++) this.Bh[t]();
                  this.ci();
                }),
                (t.prototype.ci = function () {
                  for (var t = 0; t < this.Ch.length; t++) this.Ch[t]();
                }),
                (t.prototype.ii = function (t, i) {
                  var e = this;
                  $.get(
                    GATEWAY_HOST + "/pub/wuid/" + i + "/login",
                    function (o) {
                      o && o.user_data
                        ? ((e.Dh = !0),
                          (e.Eh = i),
                          (e.Fh = o.user_data),
                          (e.Gh = t),
                          setCookie(Cookies.ACCOUNT_TYPE, e.Gh, 60),
                          e.Hh())
                        : e.hi();
                    },
                  ).fail(function () {
                    e.hi();
                  });
                }),
                (t.prototype.hi = function () {
                  this.gi();
                }),
                (t.prototype.li = function () {
                  (console.log("lo:fb"), FB.logout(function () {}), this.Hh());
                }),
                (t.prototype.mi = function () {
                  (console.log("lo:gg"), GoogleAuth.then(function(auth){ auth.signOut(); }), this.Hh());
                }),
                (t.prototype.ni = function () {
                  (console.log("lo:vk"),
                    VK.Auth.logout(function () {}),
                    this.Hh());
                }),
                t
              );
            })(),
            WMGameBackgroundSprite = (function () {
              function t() {
                ((this.oi = {}),
                  (this.oi[s] = [1, 0.5, 0.25, 0.5]),
                  (this.oi[r] = POGL.Gb.WHITE),
                  (this.oi[a] = [0, 0]),
                  (this.oi[h] = [0, 0]));
                var t = POGL.Jb.from(u, c, this.oi);
                this.Le = new POGL.Ob(p, t);
              }
              var i = "a1_" + randStr(),
                e = "a2_" + randStr(),
                o = atob("dHJhbnNsYXRpb25NYXRyaXg="),
                n = atob("cHJvamVjdGlvbk1hdHJpeA=="),
                s = "u3_" + randStr(),
                r = "u4_" + randStr(),
                a = "u5_" + randStr(),
                h = "u6_" + randStr(),
                l = "v1_" + randStr(),
                p = new POGL.Nb()
                  .addAttribute(
                    i,
                    [
                      -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5,
                      -0.5, 0.5,
                    ],
                    2,
                  )
                  .addAttribute(
                    e,
                    [
                      -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5,
                      -0.5, 0.5,
                    ],
                    2,
                  ),
                u =
                  atob("cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg") +
                  i +
                  atob("O2F0dHJpYnV0ZSB2ZWMyIA==") +
                  e +
                  atob("O3VuaWZvcm0gbWF0MyA=") +
                  o +
                  atob("O3VuaWZvcm0gbWF0MyA=") +
                  n +
                  atob("O3ZhcnlpbmcgdmVjMiA=") +
                  l +
                  atob("O3ZvaWQgbWFpbigpew==") +
                  l +
                  atob("PQ==") +
                  e +
                  atob("O2dsX1Bvc2l0aW9uPXZlYzQoKA==") +
                  n +
                  atob("Kg==") +
                  o +
                  atob("KnZlYzMo") +
                  i +
                  atob("LDEuMCkpLnh5LDAuMCwxLjApO30="),
                c =
                  atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") +
                  l +
                  atob("O3VuaWZvcm0gdmVjNCA=") +
                  s +
                  atob("O3VuaWZvcm0gc2FtcGxlcjJEIA==") +
                  r +
                  atob("O3VuaWZvcm0gdmVjMiA=") +
                  a +
                  atob("O3VuaWZvcm0gdmVjMiA=") +
                  h +
                  atob("O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9") +
                  l +
                  atob("Kg==") +
                  a +
                  atob("Kw==") +
                  h +
                  atob("O3ZlYzQgdl9jb2xvcl9taXg9") +
                  s +
                  atob("O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") +
                  r +
                  atob(
                    "LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=",
                  );
              return (
                (t.prototype.Te = function (t, i, e, o) {
                  var n = this.oi[s];
                  ((n[0] = t), (n[1] = i), (n[2] = e), (n[3] = o));
                }),
                (t.prototype.Oe = function (t) {
                  this.oi[r] = t;
                }),
                (t.prototype.be = function (t, i, e, o) {
                  ((this.Le.position.x = t),
                    (this.Le.position.y = i),
                    (this.Le.scale.x = e),
                    (this.Le.scale.y = o));
                  var n = this.oi[a];
                  ((n[0] = 0.2520615384615385 * e),
                    (n[1] = 0.4357063736263738 * o));
                  var s = this.oi[h];
                  ((s[0] = 0.2520615384615385 * t),
                    (s[1] = 0.4357063736263738 * i));
                }),
                t
              );
            })(),
            WMSprite = (function () {
              function t() {
                ((this.xg = new POGL.Lb()), (this.pi = 0), (this.qi = 0));
              }
              return (
                (t.prototype.yg = function (t) {
                  ((this.xg.texture = t.ff),
                    this.xg.anchor.set(t.Zg, t.$g),
                    (this.pi = t._g),
                    (this.qi = t.ah));
                }),
                (t.prototype.Cg = function (t) {
                  ((this.xg.width = t * this.pi),
                    (this.xg.height = t * this.qi));
                }),
                (t.prototype.ri = function (t) {
                  this.xg.rotation = t;
                }),
                (t.prototype.Bg = function (t, i) {
                  this.xg.position.set(t, i);
                }),
                (t.prototype.$f = function (t) {
                  this.xg.visible = t;
                }),
                (t.prototype.si = function () {
                  return this.xg.visible;
                }),
                (t.prototype.Dg = function (t) {
                  this.xg.alpha = t;
                }),
                (t.prototype.Ye = function () {
                  return this.xg;
                }),
                (t.prototype.wg = function () {
                  pixijs_removeFromParent(this.xg);
                }),
                t
              );
            })(),
            Worm = (function () {
              function t(t) {
                ((this.Ma = t),
                  (this.rb = new Worm.Config()),
                  (this.mb = !1),
                  (this.nb = !0),
                  (this.ti = !1),
                  (this.ib = 0),
                  (this.vi = 0),
                  (this.ob = 1),
                  (this.wi = 0),
                  (this.K = 0),
                  (this.Ne = {}),
                  (this.xi = 0),
                  (this.yi = 0),
                  (this.zi = new Float32Array(2 * i)),
                  (this.Ai = new Float32Array(2 * i)),
                  (this.Se = new Float32Array(2 * i)),
                  (this.Bi = null),
                  (this.Ci = null),
                  (this.Di = null),
                  this.yb());
              }
              var i = 200;
              return (
                (t.prototype.pb = function () {
                  (null != this.Ci && pixijs_removeFromParent(this.Ci.bf),
                    null != this.Di && pixijs_removeFromParent(this.Di));
                }),
                (t.prototype.yb = function () {
                  (this.Wf(0.25),
                    (this.rb.mc = ""),
                    (this.nb = !0),
                    (this.Ne = {}),
                    this.$f(!1));
                }),
                (t.prototype.Uf = function (t) {
                  ((this.rb = t), this.Ei(this.mb));
                }),
                (t.prototype.$f = function (t) {
                  var i = this.mb;
                  ((this.mb = t), this.Ei(i));
                }),
                (t.prototype.Wf = function (t) {
                  this.K = 50 * t;
                  var e = t;
                  t > this.Ma.ne &&
                    (e =
                      Math.atan((t - this.Ma.ne) / this.Ma.oe) * this.Ma.oe +
                      this.Ma.ne);
                  var o = Math.sqrt(
                      4 * Math.pow(5 * e, 0.707106781186548) + 25,
                    ),
                    n = Math.min(i, Math.max(3, 5 * (o - 5) + 1)),
                    s = this.yi;
                  if (
                    ((this.ib = 0.025 * (5 + 0.9 * o)),
                    (this.yi = Math.floor(n)),
                    (this.vi = n - this.yi),
                    s > 0 && s < this.yi)
                  )
                    for (
                      var r = this.zi[2 * s - 2],
                        a = this.zi[2 * s - 1],
                        h = this.Ai[2 * s - 2],
                        l = this.Ai[2 * s - 1],
                        p = this.Se[2 * s - 2],
                        u = this.Se[2 * s - 1],
                        c = s;
                      c < this.yi;
                      c++
                    )
                      ((this.zi[2 * c] = r),
                        (this.zi[2 * c + 1] = a),
                        (this.Ai[2 * c] = h),
                        (this.Ai[2 * c + 1] = l),
                        (this.Se[2 * c] = p),
                        (this.Se[2 * c + 1] = u));
                }),
                (t.prototype.Zf = function (t, i, e) {
                  ((this.xi = t), (this.yi = e));
                  for (var o = 0; o < this.yi; o++)
                    ((this.Se[2 * o] = this.Ai[2 * o] = this.zi[2 * o] = i()),
                      (this.Se[2 * o + 1] =
                        this.Ai[2 * o + 1] =
                        this.zi[2 * o + 1] =
                          i()));
                }),
                (t.prototype.Yf = function (t, i, e, o) {
                  ((this.xi = t),
                    (this.ti = o),
                    this.Fi(i, e, this.yi, this.zi));
                  for (var n = 0; n < this.yi; n++)
                    ((this.Ai[2 * n] = this.zi[2 * n]),
                      (this.Ai[2 * n + 1] = this.zi[2 * n + 1]));
                }),
                (t.prototype.Fi = function (t, i, e, o) {
                  var n = o[0],
                    s = void 0,
                    r = o[1],
                    a = void 0,
                    h = Math.hypot(n - t, r - i);
                  if (h > 0) {
                    ((o[0] = t), (o[1] = i));
                    for (
                      var l = this.ib / (this.ib + h),
                        p = 1 - 2 * l,
                        u = 1,
                        c = e - 1;
                      u < c;
                      u++
                    )
                      ((s = o[2 * u]),
                        (o[2 * u] = o[2 * u - 2] * p + (s + n) * l),
                        (n = s),
                        (a = o[2 * u + 1]),
                        (o[2 * u + 1] = o[2 * u - 1] * p + (a + r) * l),
                        (r = a));
                    ((l = (this.vi * this.ib) / (this.vi * this.ib + h)),
                      (p = 1 - 2 * l),
                      (o[2 * e - 2] =
                        o[2 * e - 4] * p + (o[2 * e - 2] + n) * l),
                      (o[2 * e - 1] =
                        o[2 * e - 3] * p + (o[2 * e - 1] + r) * l));
                  }
                }),
                (t.prototype.ab = function (t) {
                  this.Bi = t;
                }),
                (t.prototype.kb = function (t, i) {
                  ((this.ob = timeDeltaIncrement(
                    this.ob,
                    this.nb
                      ? this.ti
                        ? 0.9 + 0.1 * Math.cos((t / 400) * Math.PI)
                        : 1
                      : 0,
                    i,
                    1 / 800,
                  )),
                    (this.wi = timeDeltaIncrement(
                      this.wi,
                      this.nb ? (this.ti ? 1 : 0) : 1,
                      i,
                      0.0025,
                    )),
                    null != this.Ci && (this.Ci.bf.alpha = this.ob),
                    null != this.Di && (this.Di.alpha = this.ob));
                }),
                (t.prototype.lb = function (t, i, e) {
                  if (this.nb && this.mb && this.xi > 0) {
                    // Cap extrapolation to 2 steps max per frame.
                    // If the server is late by more than 2 ticks (190ms), we
                    // skip ahead in time rather than running multiple prediction
                    // steps — preventing the visible "speed lunge" on lag spikes.
                    if (t > this.xi + 2 * 95) {
                      this.xi = t - 95;
                    }
                    for (; t > this.xi; ) {
                      this.xi += 95;
                      var o = this.Ai[0] - this.Ai[2],
                        n = this.Ai[1] - this.Ai[3],
                        s = Math.hypot(o, n),
                        r =
                          this.Ai[0] + ((o / s) * (this.ti ? 8 : 4) * 95) / 1e3,
                        a =
                          this.Ai[1] + ((n / s) * (this.ti ? 8 : 4) * 95) / 1e3;
                      this.Fi(r, a, this.yi, this.Ai);
                    }
                    for (
                      var h = Math.min(0.5, (1 * i) / (this.xi - t + i)), l = 0;
                      l < this.yi;
                      l++
                    )
                      ((this.Se[2 * l] +=
                        h * (this.Ai[2 * l] - this.Se[2 * l])),
                        (this.Se[2 * l + 1] +=
                          h * (this.Ai[2 * l + 1] - this.Se[2 * l + 1])));
                  }
                  this.Gi(t, i, e);
                }),
                (t.prototype.Gi = function (t, i, e) {
                  (null != this.Ci && this.Ci.Hi(this, t, i, e),
                    null != this.Di &&
                      ((this.Di.Ue.x = this.Se[0]),
                      (this.Di.Ue.y = this.Se[1] - 3 * this.ib)));
                }),
                (t.prototype.Ei = function (t) {
                  this.mb
                    ? t || this.Ii()
                    : (null != this.Ci && pixijs_removeFromParent(this.Ci.bf),
                      null != this.Di && pixijs_removeFromParent(this.Di));
                }),
                (t.prototype.Ii = function () {
                  var t = getApp();
                  (null == this.Ci
                    ? (this.Ci = new WormSpriteTree())
                    : pixijs_removeFromParent(this.Ci.bf),
                    this.Ci.vg(
                      t.n.Ma.le,
                      t.t.Ac(this.rb.qf),
                      t.t.zc(this.rb.rf),
                      t.t.Bc(this.rb.Qf),
                      t.t.Cc(this.rb.Rf),
                      t.t.Dc(this.rb.Sf),
                      t.t.Ec(this.rb.Tf),
                    ),
                    null == this.Di
                      ? ((this.Di = new WormLabelNode("")),
                        (this.Di.style.fontFamily = "PTSans"),
                        this.Di.anchor.set(0.5))
                      : pixijs_removeFromParent(this.Di),
                    (this.Di.style.fontSize = 14),
                    (this.Di.style.fill = t.t.zc(this.rb.rf).jc),
                    (this.Di.text = this.rb.mc),
                    this.Bi.af(this.rb.qb, this.Ci, this.Di));
                }),
                (t.Config = (function () {
                  function t() {
                    ((this.qb = 0),
                      (this.qf = GameParams.TEAM_DEFAULT),
                      (this.rf = 0),
                      (this.Qf = 0),
                      (this.Rf = 0),
                      (this.Sf = 0),
                      (this.Tf = 0),
                      (this.mc = ""));
                  }
                  return t;
                })()),
                t
              );
            })(),
            WormLabelNode = (function () {
              return extend(POGL.Mb, function (t, i, e) {
                (POGL.Mb.call(this, t, i, e),
                  (this.Ue = {
                    x: 0,
                    y: 0,
                  }));
              });
            })(),
            WormSpriteTree = (function () {
              function t() {
                ((this.bf = new POGL.Eb()),
                  (this.bf.sortableChildren = !0),
                  (this.Ji = new b()),
                  (this.Ji.zIndex = i * (2 * (e + 1) + 1 + 3)),
                  (this.Ki = 0),
                  (this.Li = new Array(e)),
                  (this.Li[0] = this.Mi(0, new WMSprite(), new WMSprite())));
                for (var t = 1; t < e; t++)
                  this.Li[t] = this.Mi(t, new WMSprite(), new WMSprite());
                ((this.Ni = 0), (this.Oi = 0), (this.Pi = 0));
              }
              var i = 0.001,
                e = 797,
                o = 0.1 * Math.PI,
                n = -0.06640625,
                s = 0.84375,
                r = 0.2578125,
                a = -0.03515625,
                h = -0.0625,
                l = 0.5625,
                p = 3 * n + s,
                u = r - 3 * n,
                c = n + a,
                f = 0.375,
                d = 0.75,
                g = h + h,
                w = 3 * a + r,
                v = s - 3 * a,
                m = a + n;
              ((t.prototype.Mi = function (t, o, n) {
                var s = new y(o, n);
                return (
                  (o.xg.zIndex = i * (2 * (e - t) + 1 + 3)),
                  (n.xg.zIndex = i * (2 * (e - t) - 2 + 3)),
                  s
                );
              }),
                (t.prototype.vg = function (t, i, e, o, n, s, r) {
                  var a = e.dc,
                    h = t == GameMode.ke ? i.nc.ec : e.ec;
                  if (a.length > 0 && h.length > 0)
                    for (var l = 0; l < this.Li.length; l++)
                      (this.Li[l].Ze.yg(a[l % a.length]),
                        this.Li[l]._e.yg(h[l % h.length]));
                  this.Ji.vg(o, n, s, r);
                }));
              var b = (function () {
                var t = extend(POGL.Eb, function () {
                  (POGL.Eb.call(this),
                    (this.sortableChildren = !0),
                    (this.Qi = []),
                    (this.Ri = []),
                    (this.Si = []),
                    (this.Ti = []),
                    (this.Ui = new POGL.Eb()),
                    (this.Vi = []));
                  for (var t = 0; t < 4; t++) {
                    var i = new WMSprite();
                    (i.yg(getApp().o.bh),
                      this.Ui.addChild(i.xg),
                      this.Vi.push(i));
                  }
                  ((this.Ui.zIndex = 0.0011),
                    this.addChild(this.Ui),
                    this.Wi(),
                    (this.Xi = new WMSprite()),
                    this.Xi.yg(getApp().o.ch),
                    (this.Xi.xg.zIndex = 0.001),
                    this.addChild(this.Xi.xg),
                    this.Yi());
                });
                return (
                  (t.prototype.vg = function (t, i, e, o) {
                    (this.Zi(0.002, this.Qi, t.dc),
                      this.Zi(0.003, this.Ri, i.dc),
                      this.Zi(0.004, this.Ti, o.dc),
                      this.Zi(0.005, this.Si, e.dc));
                  }),
                  (t.prototype.Zi = function (t, i, e) {
                    for (; e.length > i.length; ) {
                      var o = new WMSprite();
                      (i.push(o), this.addChild(o.Ye()));
                    }
                    for (; e.length < i.length; ) {
                      i.pop().wg();
                    }
                    for (var n = t, s = 0; s < e.length; s++) {
                      n += 1e-4;
                      var r = i[s];
                      (r.yg(e[s]), (r.xg.zIndex = n));
                    }
                  }),
                  (t.prototype.Ag = function (t, i, e, o) {
                    ((this.visible = !0),
                      this.position.set(t, i),
                      (this.rotation = o));
                    for (var n = 0; n < this.Qi.length; n++) this.Qi[n].Cg(e);
                    for (var s = 0; s < this.Ri.length; s++) this.Ri[s].Cg(e);
                    for (var r = 0; r < this.Si.length; r++) this.Si[r].Cg(e);
                    for (var a = 0; a < this.Ti.length; a++) this.Ti[a].Cg(e);
                  }),
                  (t.prototype.zg = function () {
                    this.visible = !1;
                  }),
                  (t.prototype.$i = function (t, i, e, o) {
                    this.Ui.visible = !0;
                    for (
                      var n = e / 1e3, s = 1 / this.Vi.length, r = 0;
                      r < this.Vi.length;
                      r++
                    ) {
                      var a = 1 - ((n + s * r) % 1);
                      ((this.Vi[r].xg.alpha = 1 - a),
                        this.Vi[r].Cg(i * (0.5 + 4.5 * a)));
                    }
                  }),
                  (t.prototype.Wi = function () {
                    this.Ui.visible = !1;
                  }),
                  (t.prototype._i = function (t, i, e, o) {
                    ((this.Xi.xg.visible = !0),
                      (this.Xi.xg.alpha = timeDeltaIncrement(
                        this.Xi.xg.alpha,
                        t.ti ? 0.9 : 0.2,
                        o,
                        0.0025,
                      )),
                      this.Xi.Cg(i));
                  }),
                  (t.prototype.Yi = function () {
                    this.Xi.xg.visible = !1;
                  }),
                  t
                );
              })();
              ((t.prototype.aj = function (t) {
                return this.Oi + this.Pi * Math.sin(t * o - this.Ni);
              }),
                (t.prototype.Hi = function (t, i, e, o) {
                  var b = 2 * t.ib,
                    C = t.Se,
                    k = t.yi,
                    A = 4 * k - 3,
                    M = A;
                  ((this.Ni = (i / 400) * Math.PI),
                    (this.Oi = 1.5 * b),
                    (this.Pi = 0.15 * b * t.wi));
                  var j = void 0,
                    V = void 0,
                    L = void 0,
                    B = void 0,
                    P = void 0,
                    I = void 0,
                    S = void 0,
                    T = void 0;
                  if (((V = C[0]), (I = C[1]), o(V, I))) {
                    ((L = C[2]), (S = C[3]), (B = C[4]), (T = C[5]));
                    var x = Math.atan2(T + 2 * I - 3 * S, B + 2 * V - 3 * L);
                    (this.Ji.Ag(V, I, b, x),
                      this.Li[0].Ag(V, I, b, this.aj(0), x),
                      this.Li[1].Ag(
                        p * V + u * L + c * B,
                        p * I + u * S + c * T,
                        b,
                        this.aj(1),
                        y.angleBetween(this.Li[0], this.Li[2]),
                      ),
                      this.Li[2].Ag(
                        f * V + d * L + g * B,
                        f * I + d * S + g * T,
                        b,
                        this.aj(2),
                        y.angleBetween(this.Li[1], this.Li[3]),
                      ),
                      this.Li[3].Ag(
                        w * V + v * L + m * B,
                        w * I + v * S + m * T,
                        b,
                        this.aj(3),
                        y.angleBetween(this.Li[2], this.Li[4]),
                      ));
                  } else
                    (this.Ji.zg(),
                      this.Li[0].zg(),
                      this.Li[1].zg(),
                      this.Li[2].zg(),
                      this.Li[3].zg());
                  for (var O = 4, E = 2, D = 2 * k - 4; E < D; E += 2)
                    ((V = C[E]),
                      (I = C[E + 1]),
                      o(V, I)
                        ? ((j = C[E - 2]),
                          (P = C[E - 1]),
                          (L = C[E + 2]),
                          (S = C[E + 3]),
                          (B = C[E + 4]),
                          (T = C[E + 5]),
                          this.Li[O].Ag(
                            V,
                            I,
                            b,
                            this.aj(O),
                            y.angleBetween(this.Li[O - 1], this.Li[O + 1]),
                          ),
                          O++,
                          this.Li[O].Ag(
                            n * j + s * V + r * L + a * B,
                            n * P + s * I + r * S + a * T,
                            b,
                            this.aj(O),
                            y.angleBetween(this.Li[O - 1], this.Li[O + 1]),
                          ),
                          O++,
                          this.Li[O].Ag(
                            h * j + l * V + l * L + h * B,
                            h * P + l * I + l * S + h * T,
                            b,
                            this.aj(O),
                            y.angleBetween(this.Li[O - 1], this.Li[O + 1]),
                          ),
                          O++,
                          this.Li[O].Ag(
                            a * j + r * V + s * L + n * B,
                            a * P + r * I + s * S + n * T,
                            b,
                            this.aj(O),
                            y.angleBetween(this.Li[O - 1], this.Li[O + 1]),
                          ),
                          O++)
                        : (this.Li[O].zg(),
                          O++,
                          this.Li[O].zg(),
                          O++,
                          this.Li[O].zg(),
                          O++,
                          this.Li[O].zg(),
                          O++));
                  for (
                    V = C[2 * k - 4],
                      I = C[2 * k - 3],
                      o(V, I)
                        ? ((j = C[2 * k - 6]),
                          (P = C[2 * k - 5]),
                          (L = C[2 * k - 2]),
                          (S = C[2 * k - 1]),
                          this.Li[A - 5].Ag(
                            V,
                            I,
                            b,
                            this.aj(A - 5),
                            y.angleBetween(this.Li[A - 6], this.Li[A - 4]),
                          ),
                          this.Li[A - 4].Ag(
                            m * j + v * V + w * L,
                            m * P + v * I + w * S,
                            b,
                            this.aj(A - 4),
                            y.angleBetween(this.Li[A - 5], this.Li[A - 3]),
                          ),
                          this.Li[A - 3].Ag(
                            g * j + d * V + f * L,
                            g * P + d * I + f * S,
                            b,
                            this.aj(A - 3),
                            y.angleBetween(this.Li[A - 4], this.Li[A - 2]),
                          ),
                          this.Li[A - 2].Ag(
                            c * j + u * V + p * L,
                            c * P + u * I + p * S,
                            b,
                            this.aj(A - 2),
                            y.angleBetween(this.Li[A - 3], this.Li[A - 1]),
                          ),
                          this.Li[A - 1].Ag(
                            L,
                            S,
                            b,
                            this.aj(A - 1),
                            y.angleBetween(this.Li[A - 2], this.Li[A - 1]),
                          ))
                        : (this.Li[A - 5].zg(),
                          this.Li[A - 4].zg(),
                          this.Li[A - 3].zg(),
                          this.Li[A - 2].zg(),
                          this.Li[A - 1].zg()),
                      0 == this.Ki && M > 0 && this.bf.addChild(this.Ji),
                      this.Ki > 0 && 0 == M && pixijs_removeFromParent(this.Ji);
                    this.Ki < M;
                  )
                    (this.bf.addChild(this.Li[this.Ki].Ze.Ye()),
                      this.bf.addChild(this.Li[this.Ki]._e.Ye()),
                      (this.Ki += 1));
                  for (; this.Ki > M; )
                    ((this.Ki -= 1),
                      this.Li[this.Ki]._e.wg(),
                      this.Li[this.Ki].Ze.wg());
                  var N = t.Ne[Ability.MAGNETIC_TYPE];
                  this.Li[0].si() && null != N && N.Zb
                    ? this.Ji.$i(t, b, i, e)
                    : this.Ji.Wi();
                  var _ = t.Ne[Ability.VELOCITY_TYPE];
                  this.Li[0].si() && null != _ && _.Zb
                    ? this.Ji._i(t, b, i, e)
                    : this.Ji.Yi();
                }));
              var y = (function () {
                function t(t, i) {
                  ((this.Ze = t),
                    this.Ze.$f(!1),
                    (this._e = i),
                    this._e.$f(!1));
                }
                return (
                  (t.prototype.Ag = function (t, i, e, o, n) {
                    (this.Ze.$f(!0),
                      this.Ze.Bg(t, i),
                      this.Ze.Cg(e),
                      this.Ze.ri(n),
                      this._e.$f(!0),
                      this._e.Bg(t, i),
                      this._e.Cg(o),
                      this._e.ri(n));
                  }),
                  (t.prototype.zg = function () {
                    (this.Ze.$f(!1), this._e.$f(!1));
                  }),
                  (t.prototype.si = function () {
                    return this.Ze.si();
                  }),
                  (t.angleBetween = function (t, i) {
                    return Math.atan2(
                      t.Ze.xg.position.y - i.Ze.xg.position.y,
                      t.Ze.xg.position.x - i.Ze.xg.position.x,
                    );
                  }),
                  t
                );
              })();
              return t;
            })(),
            WormView = (function () {
              function t(t) {
                ((this.qe = t),
                  (this.re = t.get()[0]),
                  (this.ce = new POGL.Hb({
                    view: this.re,
                    transparent: !0,
                  })),
                  (this.bj = new WormSpriteTree()),
                  this.bj.bf.addChild(this.bj.Ji),
                  (this.cj = 0),
                  (this.dj = 0),
                  (this._f = 1),
                  (this.Eg = 0),
                  (this.Fg = 0),
                  (this.Gg = 0),
                  (this.Hg = 0),
                  (this.Ig = 0),
                  (this.ej = !1),
                  (this.fj = !1),
                  (this.gj = !1),
                  (this.hj = !1),
                  (this.ij = !1),
                  (this.jj = !1),
                  (this.kj = !1),
                  (this.lj = !1),
                  (this.mj = !1),
                  (this.nj = !1),
                  this.Ca(),
                  this.kb());
              }
              return (
                (t.prototype.kb = function () {
                  var t = getApp();
                  this.bj.vg(
                    GameMode.je,
                    null,
                    t.t.zc(this.Eg),
                    t.t.Bc(this.Fg),
                    t.t.Cc(this.Gg),
                    t.t.Dc(this.Hg),
                    t.t.Ec(this.Ig),
                  );
                }),
                (t.prototype.oj = function (t, i, e) {
                  ((this.Eg = t), (this.ej = i), (this.jj = e), this.kb());
                }),
                (t.prototype.pj = function (t, i, e) {
                  ((this.Fg = t), (this.fj = i), (this.kj = e), this.kb());
                }),
                (t.prototype.qj = function (t, i, e) {
                  ((this.Gg = t), (this.gj = i), (this.lj = e), this.kb());
                }),
                (t.prototype.rj = function (t, i, e) {
                  ((this.Hg = t), (this.hj = i), (this.mj = e), this.kb());
                }),
                (t.prototype.sj = function (t, i, e) {
                  ((this.Ig = t), (this.ij = i), (this.nj = e), this.kb());
                }),
                (t.prototype.Ca = function () {
                  var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
                  ((this.cj = this.qe.width()),
                    (this.dj = this.qe.height()),
                    this.ce.resize(this.cj, this.dj),
                    (this.ce.resolution = t),
                    (this.re.width = t * this.cj),
                    (this.re.height = t * this.dj),
                    (this._f = this.dj / 4));
                  var i = minmax(
                    1,
                    this.bj.Li.length,
                    2 * Math.floor(this.cj / this._f) - 5,
                  );
                  if (this.bj.Ki != i) {
                    for (var e = i; e < this.bj.Li.length; e++)
                      this.bj.Li[e].zg();
                    for (; this.bj.Ki < i; )
                      (this.bj.bf.addChild(this.bj.Li[this.bj.Ki].Ze.Ye()),
                        this.bj.bf.addChild(this.bj.Li[this.bj.Ki]._e.Ye()),
                        (this.bj.Ki += 1));
                    for (; this.bj.Ki > i; )
                      ((this.bj.Ki -= 1),
                        this.bj.Li[this.bj.Ki]._e.wg(),
                        this.bj.Li[this.bj.Ki].Ze.wg());
                  }
                }),
                (t.prototype.Aa = function () {
                  if (getApp().t.U) {
                    for (
                      var t = Date.now(),
                        i = t / 200,
                        e = Math.sin(i),
                        o = this._f,
                        n = 1.5 * this._f,
                        s =
                          this.cj -
                          0.5 * (this.cj - 0.5 * o * (this.bj.Ki - 1)),
                        r = 0.5 * this.dj,
                        a = 0,
                        h = 0,
                        l = -1;
                      l < this.bj.Ki;
                      l++
                    ) {
                      var p = l,
                        u =
                          Math.cos(((1 * p) / 12) * Math.PI - i) *
                          (1 - Math.pow(16, (-1 * p) / 12));
                      if (l >= 0) {
                        var c = s + -0.5 * o * p,
                          f = r + 0.5 * o * u,
                          d = 2 * o,
                          g = 2 * n,
                          w = Math.atan2(h - u, p - a);
                        (0 == l && this.bj.Ji.Ag(c, f, d, w),
                          this.bj.Li[l].Ag(c, f, d, g, w));
                        var v = this.ej
                          ? this.jj
                            ? 0.4 + 0.2 * e
                            : 0.9 + 0.1 * e
                          : this.jj
                            ? 0.4
                            : 1;
                        (this.bj.Li[l].Ze.Dg(v), this.bj.Li[l]._e.Dg(v));
                      }
                      ((a = p), (h = u));
                    }
                    for (var m = 0; m < this.bj.Ji.Qi.length; m++)
                      this.bj.Ji.Qi[m].tj = this.fj
                        ? this.kj
                          ? 0.4 + 0.2 * e
                          : 0.9 + 0.1 * e
                        : this.kj
                          ? 0.4
                          : 1;
                    for (var b = 0; b < this.bj.Ji.Ri.length; b++)
                      this.bj.Ji.Ri[b].tj = this.gj
                        ? this.lj
                          ? 0.4 + 0.2 * e
                          : 0.9 + 0.1 * e
                        : this.lj
                          ? 0.4
                          : 1;
                    for (var y = 0; y < this.bj.Ji.Si.length; y++)
                      this.bj.Ji.Si[y].tj = this.hj
                        ? this.mj
                          ? 0.4 + 0.2 * e
                          : 0.9 + 0.1 * e
                        : this.mj
                          ? 0.4
                          : 1;
                    for (var C = 0; C < this.bj.Ji.Ti.length; C++)
                      this.bj.Ji.Ti[C].tj = this.ij
                        ? this.nj
                          ? 0.4 + 0.2 * e
                          : 0.9 + 0.1 * e
                        : this.nj
                          ? 0.4
                          : 1;
                    this.ce.render(this.bj.bf);
                  }
                }),
                t
              );
            })(),
            BaseViewController = (function () {
              function t(t) {
                this.Yb = t;
              }
              return (
                (t.uj = $("#game-view")),
                (t.vj = $("#results-view")),
                (t.wj = $("#main-menu-view")),
                (t.xj = $("#popup-view")),
                (t.yj = $("#toaster-view")),
                (t.zj = $("#loading-view")),
                (t.Aj = $("#stretch-box")),
                (t.rh = $("#background-canvas")),
                (t.Bj = $("#social-buttons")),
                (t.Cj = $("#markup-wrap")),
                (t.prototype.wh = function () {}),
                (t.prototype.xh = function () {}),
                (t.prototype.sh = function () {}),
                (t.prototype.Ca = function () {}),
                (t.prototype.Aa = function (t, i) {}),
                t
              );
            })(),
            GameViewController = (function () {
              function t(t, i, e, o, n, s) {
                var r =
                  '<div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 456 456" xml:space="preserve"><rect x="0" y="0" width="456" height="456" fill="#F7941D"/><path d="M118.1 138.7c10.9 27 24.8 52.4 43 75.2 2.4 3 5.5 5.7 8.7 7.9 4.7 3.2 9.1 2.1 11-3.3 2-5.6 3.9-17 4-23 0.3-15.4 0-25.6-0.9-41 -0.5-9.9-4.1-18.6-18.6-21.2 -4.5-0.8-4.9-4.5-2-8.2 6-7.7 14.4-8.9 23.4-9.4 14.7-0.8 29.5-0.1 44.2 0 6 0.1 12 0.5 17.9 1.8 7.7 1.7 11.8 7.1 13.1 14.6 0.7 3.9 1 7.9 0.9 11.8 -0.4 16.9-1.2 33.7-1.4 50.6 -0.1 6.6 0.4 13.4 1.8 19.8 2 9 8.1 11.2 14.3 4.7 7.9-8.2 14.9-17.5 21.5-26.9 11.9-17.1 20.8-35.9 28.5-55.3 4-10 7-12.2 17.8-12.2 20.2 0 40.4-0.1 60.7 0 3.6 0 7.3 0.4 10.7 1.4 5.5 1.8 7.7 6.2 6.4 11.9 -3 13.3-10.2 24.6-17.9 35.5 -12.4 17.5-25.3 34.5-38 51.8 -1.6 2.2-3 4.5-4.4 6.9 -4.7 8.6-4.4 13.4 2.5 20.5 11 11.3 22.8 22 33.4 33.6 7.7 8.5 14.9 17.7 21 27.4 7.8 12.2 3 23.8-11.5 25.8 -9.1 1.3-53.6 0-55.9 0 -12-0.1-22.5-4.2-30.9-12.3 -9.4-9.1-17.9-19-27-28.4 -2.7-2.8-5.6-5.6-8.7-8 -7.4-5.6-14.6-4.4-18.1 4.3 -2.9 7.4-5.5 27-5.6 28.7 -0.6 8.7-6.2 14.3-16 14.8 -28.2 1.5-55.6-1.6-81.1-15.3 -21.6-11.6-38.9-27.9-53.8-47 -23.7-30.3-42.5-63.6-59.6-97.9 -0.9-1.8-18.2-38.7-18.7-40.4 -1.5-5.8-0.1-11.4 4.8-13.3 3.1-1.2 60.2 0 61.2 0C108 125.4 114.2 129.2 118.1 138.7z" fill="#FFF"/></svg><span>' +
                  t +
                  "</span></div>";
                return "undefined" != typeof VK && void 0 !== VK.Share
                  ? VK.Share.button(
                      {
                        noparse: !0,
                        url: i,
                        title: o,
                        description: n,
                        image: s,
                      },
                      {
                        type: "custom",
                        text: r,
                      },
                    )
                  : $(r);
              }
              function i(t, i, e, o, n, s) {
                var r =
                    '<div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 456 456" xml:space="preserve"><rect x="0" y="0" width="456" height="456" fill="#F7941D"/><path d="M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z" fill="#fff"/></svg><span>' +
                    t +
                    "</span></div>",
                  a = $(r);
                return (
                  a.click(function () {
                    "undefined" != typeof FB &&
                      void 0 !== FB.ui &&
                      FB.ui(
                        {
                          method: "feed",
                          display: "popup",
                          link: i,
                          name: e,
                          caption: o,
                          description: n,
                          picture: s,
                        },
                        function () {},
                      );
                  }),
                  a
                );
              }
              var e = extend(BaseViewController, function () {
                BaseViewController.call(this, ViewControllerType.Dj);
                var t = this,
                  i = getApp(),
                  e = $("#final-caption"),
                  n = $("#final-continue");
                ((this.Ej = $("#congrats-bg")),
                  (this.Fj = $("#unl6wj4czdl84o9b")),
                  (this.Gj = $("#final-share-vk")),
                  (this.Hj = $("#final-share-fb")),
                  (this.Ij = $("#final-message")),
                  (this.Jj = $("#final-score")),
                  (this.Kj = $("#final-place")),
                  (this.Lj = $("#final-board")),
                  (this.Mj = $("#game-canvas")));
                var s = this.Mj.get()[0];
                (console.log("sSE=" + env.Nj),
                  this.Gj.toggle(env.Nj),
                  this.Hj.toggle(env.Nj),
                  e.text(i18n("index.game.result.title")),
                  n.text(i18n("index.game.result.continue")),
                  n.click(function () {
                    (i.p.Zc(),
                      i.e.za.c(),
                      i.p.F(AudioManager.AudioState.D),
                      i.q.H(i.q.D));
                  }),
                  $("html")
                    .keydown(function (i) {
                      32 == i.keyCode && (t.Oj = !0);
                    })
                    .keyup(function (i) {
                      32 == i.keyCode && (t.Oj = !1);
                    }),
                  s.addEventListener(
                    "touchmove",
                    function (i) {
                      (i = i || window.event) &&
                        ((i = i.touches[0]),
                        void 0 !== i.clientX
                          ? (t.Pj = Math.atan2(
                              i.clientY - 0.5 * s.offsetHeight,
                              i.clientX - 0.5 * s.offsetWidth,
                            ))
                          : (t.Pj = Math.atan2(
                              i.pageY - 0.5 * s.offsetHeight,
                              i.pageX - 0.5 * s.offsetWidth,
                            )));
                    },
                    !0,
                  ),
                  s.addEventListener(
                    "touchstart",
                    function (i) {
                      ((i = i || window.event) &&
                        (t.Oj = i.touches.length >= 2),
                        i.preventDefault());
                    },
                    !0,
                  ),
                  s.addEventListener(
                    "touchend",
                    function (i) {
                      (i = i || window.event) && (t.Oj = i.touches.length >= 2);
                    },
                    !0,
                  ),
                  s.addEventListener(
                    "mousemove",
                    function (i) {
                      (i = i || (window.event && void 0 !== i.clientX)) &&
                        (t.Pj = Math.atan2(
                          i.clientY - 0.5 * s.offsetHeight,
                          i.clientX - 0.5 * s.offsetWidth,
                        ));
                    },
                    !0,
                  ),
                  s.addEventListener(
                    "mousedown",
                    function (i) {
                      t.Oj = !0;
                    },
                    !0,
                  ),
                  s.addEventListener(
                    "mouseup",
                    function (i) {
                      t.Oj = !1;
                    },
                    !0,
                  ),
                  (this.bb = new GameView(this.Mj)),
                  (this.Ja = o.I),
                  (this.Pj = 0),
                  (this.Oj = !1));
              });
              ((e.prototype.wh = function () {
                this.Ja == o.I
                  ? (BaseViewController.uj.stop(),
                    BaseViewController.uj.fadeIn(500),
                    BaseViewController.vj.stop(),
                    BaseViewController.vj.fadeOut(1),
                    BaseViewController.wj.stop(),
                    BaseViewController.wj.fadeOut(50),
                    BaseViewController.xj.stop(),
                    BaseViewController.xj.fadeOut(50),
                    BaseViewController.yj.stop(),
                    BaseViewController.yj.fadeOut(50),
                    BaseViewController.zj.stop(),
                    BaseViewController.zj.fadeOut(50),
                    BaseViewController.Aj.stop(),
                    BaseViewController.Aj.fadeOut(1),
                    BaseViewController.rh.stop(),
                    BaseViewController.rh.fadeOut(50),
                    BaseViewController.Bj.stop(),
                    BaseViewController.Bj.fadeOut(50),
                    BaseViewController.Cj.stop(),
                    BaseViewController.Cj.fadeOut(50))
                  : (BaseViewController.uj.stop(),
                    BaseViewController.uj.fadeIn(500),
                    BaseViewController.vj.stop(),
                    BaseViewController.vj.fadeIn(500),
                    BaseViewController.wj.stop(),
                    BaseViewController.wj.fadeOut(50),
                    BaseViewController.xj.stop(),
                    BaseViewController.xj.fadeOut(50),
                    BaseViewController.yj.stop(),
                    BaseViewController.yj.fadeOut(50),
                    BaseViewController.zj.stop(),
                    BaseViewController.zj.fadeOut(50),
                    BaseViewController.Aj.stop(),
                    BaseViewController.Aj.fadeOut(1),
                    BaseViewController.rh.stop(),
                    BaseViewController.rh.fadeOut(50),
                    BaseViewController.Bj.stop(),
                    BaseViewController.Bj.fadeOut(50),
                    BaseViewController.Cj.stop(),
                    BaseViewController.Cj.fadeOut(50));
              }),
                (e.prototype.I = function () {
                  return ((this.Ja = o.I), this);
                }),
                (e.prototype.ua = function () {
                  console.log("re");
                  var t = this;
                  return (
                    t.Ej.hide(),
                    setTimeout(function () {
                      (console.log("fi_bg"), t.Ej.fadeIn(500));
                    }, 3e3),
                    t.Fj.hide(),
                    setTimeout(function () {
                      (console.log("fi_aw"), t.Fj.fadeIn(500));
                    }, 500),
                    (this.Ja = o.ua),
                    this
                  );
                }),
                (e.prototype.xh = function () {
                  ((this.Oj = !1),
                    this.bb.Ca(),
                    this.Ja == o.ua && getApp().p.bd());
                }),
                (e.prototype.Ca = function () {
                  this.bb.Ca();
                }),
                (e.prototype.Aa = function (t, i) {
                  this.bb.Aa(t, i);
                }),
                (e.prototype.sa = function (e, o, n) {
                  var s = void 0,
                    r = void 0,
                    a = void 0;
                  if (
                    (o >= 1 && o <= 10
                      ? ((s = i18n("index.game.result.place.i" + o)),
                        (r = i18n("index.game.result.placeInBoard")),
                        (a = i18n("index.game.social.shareResult.messGood")
                          .replace("{0}", n)
                          .replace("{1}", e)
                          .replace("{2}", s)))
                      : ((s = ""),
                        (r = i18n("index.game.result.tryHit")),
                        (a = i18n("index.game.social.shareResult.messNorm")
                          .replace("{0}", n)
                          .replace("{1}", e))),
                    this.Ij.html(i18n("index.game.result.your")),
                    this.Jj.html(e),
                    this.Kj.html(s),
                    this.Lj.html(r),
                    env.Nj)
                  ) {
                    var h = i18n("index.game.result.share");
                    i18n("index.game.social.shareResult.caption");
                    (this.Gj.empty().append(
                      t(
                        h,
                        "https://wormate.io",
                        "wormate.io",
                        a,
                        a,
                        "https://wormate.io/images/og-share-img-new.jpg",
                      ),
                    ),
                      this.Hj.empty().append(
                        i(
                          h,
                          "https://wormate.io",
                          "wormate.io",
                          a,
                          a,
                          "https://wormate.io/images/og-share-img-new.jpg",
                        ),
                      ));
                  }
                }),
                (e.prototype.R = function () {
                  return this.Pj;
                }),
                (e.prototype.S = function () {
                  return this.Oj;
                }));
              var o = {
                I: 0,
                ua: 1,
              };
              return e;
            })(),
            LoadingViewController = (function () {
              var t = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"],
                i = extend(BaseViewController, function () {
                  (BaseViewController.call(this, ViewControllerType.Dj),
                    (this.Qj = $("#loading-worm-a")),
                    (this.Rj = $("#loading-worm-b")),
                    (this.Sj = $("#loading-worm-c")));
                });
              return (
                (i.prototype.wh = function () {
                  (BaseViewController.uj.stop(),
                    BaseViewController.uj.fadeOut(50),
                    BaseViewController.vj.stop(),
                    BaseViewController.vj.fadeOut(50),
                    BaseViewController.wj.stop(),
                    BaseViewController.wj.fadeOut(50),
                    BaseViewController.xj.stop(),
                    BaseViewController.xj.fadeOut(50),
                    BaseViewController.yj.stop(),
                    BaseViewController.yj.fadeOut(50),
                    BaseViewController.zj.stop(),
                    BaseViewController.zj.fadeIn(500),
                    BaseViewController.Aj.stop(),
                    BaseViewController.Aj.fadeIn(1),
                    BaseViewController.rh.stop(),
                    BaseViewController.rh.fadeIn(500),
                    BaseViewController.Bj.stop(),
                    BaseViewController.Bj.fadeOut(50),
                    BaseViewController.Cj.stop(),
                    BaseViewController.Cj.fadeOut(50));
                }),
                (i.prototype.xh = function () {
                  this.Tj();
                }),
                (i.prototype.Tj = function () {
                  this.Qj.css("background-position", "100% 200%");
                  for (var i = 0; i < t.length; i++) {
                    var e = Math.floor(Math.random() * t.length),
                      o = t[i];
                    ((t[i] = t[e]), (t[e] = o));
                  }
                  (this.Qj.css("background-position", t[0]),
                    this.Rj.css("background-position", t[1]),
                    this.Sj.css("background-position", t[2]));
                }),
                i
              );
            })(),
            MainMenuViewController = (function () {
              var t = extend(BaseViewController, function () {
                BaseViewController.call(this, ViewControllerType.vh);
                var t = this,
                  i = getApp(),
                  e = $("#mm-skin-canv"),
                  o = $("#mm-skin-prev"),
                  n = $("#mm-skin-next");
                ((this.Uj = $("#mm-skin-over")),
                  (this.Vj = $("#mm-skin-over-button-list")),
                  (this.Wj = $("#mm-params-nickname")),
                  (this.Xj = $("#mm-params-game-mode")),
                  (this.Yj = $("#mm-action-buttons")));
                var s = $("#mm-action-play"),
                  r = $("#mm-action-guest"),
                  a = $("#mm-action-login"),
                  h = $("#mm-player-info"),
                  l = $("#mm-store"),
                  p = $("#mm-leaders"),
                  u = $("#mm-settings"),
                  c = $("#mm-coins-box");
                ((this.Zj = $("#mm-player-avatar")),
                  (this.$j = $("#mm-player-username")),
                  (this._j = $("#mm-coins-val")),
                  (this.ak = $("#mm-player-exp-bar")),
                  (this.bk = $("#mm-player-exp-val")),
                  (this.ck = $("#mm-player-level")),
                  (this.dk = new WormView(e)),
                  this.Xj.click(function () {
                    i.p.Zc();
                  }),
                  e.click(function () {
                    i.s.N() && (i.p.Zc(), i.q.H(i.q.lh));
                  }),
                  o.click(function () {
                    (i.p.Zc(), i.r.Og());
                  }),
                  n.click(function () {
                    (i.p.Zc(), i.r.Ng());
                  }),
                  this.Wj.keypress(function (t) {
                    13 == t.keyCode && i.ga();
                  }),
                  s.click(function () {
                    (i.p.Zc(), i.ga());
                  }),
                  r.click(function () {
                    (i.p.Zc(), i.ga());
                  }),
                  a.click(function () {
                    (i.p.Zc(), i.q.H(i.q.kh));
                  }),
                  u.click(function () {
                    (i.p.Zc(), i.q.H(i.q.pa));
                  }),
                  h.click(function () {
                    i.s.N() && (i.p.Zc(), i.q.H(i.q.jh));
                  }),
                  p.click(function () {
                    i.s.N() && (i.p.Zc(), i.q.H(i.q.ih));
                  }),
                  l.click(function () {
                    i.s.N() && (i.p.Zc(), i.q.H(i.q.mh));
                  }),
                  c.click(function () {
                    i.s.N() && (i.p.Zc(), i.q.H(i.q.hh));
                  }),
                  this.ek(),
                  this.fk());
                var f = getCookie(Cookies.GAME_MODE);
                ("ARENA" != f && "TEAM2" != f && (f = "ARENA"),
                  this.Xj.val(f),
                  console.log("Load GM: " + f),
                  i.s.T(function () {
                    i.q.D.gk();
                  }),
                  i.s.ai(function () {
                    i.s.N()
                      ? (i.r.Pg(i.s.Qh(), "SKIN"),
                        i.r.Pg(i.s.Rh(), "EYES"),
                        i.r.Pg(i.s.Sh(), "MOUTH"),
                        i.r.Pg(i.s.Th(), "GLASSES"),
                        i.r.Pg(i.s.Uh(), "HAT"))
                      : (i.r.Pg(i.va(), "SKIN"),
                        i.r.Pg(0, "EYES"),
                        i.r.Pg(0, "MOUTH"),
                        i.r.Pg(0, "GLASSES"),
                        i.r.Pg(0, "HAT"));
                  }),
                  i.s.ai(function () {
                    (s.toggle(i.s.N()),
                      a.toggle(!i.s.N()),
                      r.toggle(!i.s.N()),
                      p.toggle(i.s.N()),
                      l.toggle(i.s.N()),
                      c.toggle(i.s.N()),
                      i.s.N()
                        ? (t.Uj.hide(),
                          t.$j.html(i.s.Jh()),
                          t.Zj.attr("src", i.s.Kh()),
                          t._j.html(i.s.Mh()),
                          t.ak.width((100 * i.s.Oh()) / i.s.Ph() + "%"),
                          t.bk.html(i.s.Oh() + " / " + i.s.Ph()),
                          t.ck.html(i.s.Nh()),
                          t.Wj.val(i.s.ea()))
                        : (t.Uj.toggle(env.Nj && !i.wa()),
                          t.$j.html(t.$j.data("guest")),
                          t.Zj.attr("src", GUEST_AVATAR_URL),
                          t._j.html("10"),
                          t.ak.width("0"),
                          t.bk.html(""),
                          t.ck.html(1),
                          t.Wj.val(getCookie(Cookies.GUEST_NICKNAME))));
                  }),
                  i.r.Kg(function () {
                    (t.dk.oj(i.r.fa("SKIN"), !1, !1),
                      t.dk.pj(i.r.fa("EYES"), !1, !1),
                      t.dk.qj(i.r.fa("MOUTH"), !1, !1),
                      t.dk.rj(i.r.fa("GLASSES"), !1, !1),
                      t.dk.sj(i.r.fa("HAT"), !1, !1));
                  }));
              });
              return (
                (t.prototype.wh = function () {
                  (BaseViewController.uj.stop(),
                    BaseViewController.uj.fadeOut(50),
                    BaseViewController.vj.stop(),
                    BaseViewController.vj.fadeOut(50),
                    BaseViewController.wj.stop(),
                    BaseViewController.wj.fadeIn(500),
                    BaseViewController.xj.stop(),
                    BaseViewController.xj.fadeOut(50),
                    BaseViewController.yj.stop(),
                    BaseViewController.yj.fadeOut(50),
                    BaseViewController.zj.stop(),
                    BaseViewController.zj.fadeOut(50),
                    BaseViewController.Aj.stop(),
                    BaseViewController.Aj.fadeIn(1),
                    BaseViewController.rh.stop(),
                    BaseViewController.rh.fadeIn(500),
                    BaseViewController.Bj.stop(),
                    BaseViewController.Bj.fadeIn(500),
                    BaseViewController.Cj.stop(),
                    BaseViewController.Cj.fadeIn(500));
                }),
                (t.prototype.xh = function () {
                  getApp().p.$c();
                }),
                (t.prototype.Ca = function () {
                  this.dk.Ca();
                }),
                (t.prototype.Aa = function (t, i) {
                  this.dk.Aa();
                }),
                (t.prototype.ea = function () {
                  return this.Wj.val();
                }),
                (t.prototype.C = function () {
                  return this.Xj.val();
                }),
                (t.prototype.hk = function () {
                  this.Yj.hide();
                }),
                (t.prototype.gk = function () {
                  this.Yj.show();
                }),
                (t.prototype.ek = function () {
                  var t = $("#mm-advice-cont").children(),
                    i = 0;
                  setInterval(function () {
                    t.eq(i).fadeOut(500, function () {
                      (++i >= t.length && (i = 0),
                        t.eq(i).fadeIn(500).css("display", "inline-block"));
                    });
                  }, 3e3);
                }),
                (t.prototype.fk = function () {
                  function t() {
                    (e.ya(!0), i.Uj.hide());
                  }
                  var i = this,
                    e = getApp();
                }),
                t
              );
            })(),
            PrerollViewController = (function () {
              var t = extend(BaseViewController, function () {
                BaseViewController.call(this, ViewControllerType.Dj);
              });
              return (
                (t.prototype.wh = function () {
                  (BaseViewController.uj.stop(),
                    BaseViewController.uj.fadeOut(50),
                    BaseViewController.vj.stop(),
                    BaseViewController.vj.fadeOut(50),
                    BaseViewController.wj.stop(),
                    BaseViewController.wj.fadeOut(50),
                    BaseViewController.xj.stop(),
                    BaseViewController.xj.fadeOut(50),
                    BaseViewController.yj.stop(),
                    BaseViewController.yj.fadeOut(50),
                    BaseViewController.zj.stop(),
                    BaseViewController.zj.fadeOut(50),
                    BaseViewController.Aj.stop(),
                    BaseViewController.Aj.fadeOut(1),
                    BaseViewController.rh.stop(),
                    BaseViewController.rh.fadeOut(50),
                    BaseViewController.Bj.stop(),
                    BaseViewController.Bj.fadeOut(50),
                    BaseViewController.Cj.stop(),
                    BaseViewController.Cj.fadeOut(50));
                }),
                t
              );
            })(),
            ToasterContainerViewController = (function () {
              var t = $("#toaster-stack"),
                i = extend(BaseViewController, function () {
                  (BaseViewController.call(this, ViewControllerType.Dj),
                    (this.ik = []),
                    (this.jk = null));
                });
              return (
                (i.prototype.wh = function () {
                  (BaseViewController.uj.stop(),
                    BaseViewController.uj.fadeOut(50),
                    BaseViewController.vj.stop(),
                    BaseViewController.vj.fadeOut(50),
                    BaseViewController.wj.stop(),
                    BaseViewController.wj.fadeOut(50),
                    BaseViewController.xj.stop(),
                    BaseViewController.xj.fadeOut(50),
                    BaseViewController.yj.stop(),
                    BaseViewController.yj.fadeIn(500),
                    BaseViewController.zj.stop(),
                    BaseViewController.zj.fadeOut(50),
                    BaseViewController.Aj.stop(),
                    BaseViewController.Aj.fadeIn(1),
                    BaseViewController.rh.stop(),
                    BaseViewController.rh.fadeIn(500),
                    BaseViewController.Bj.stop(),
                    BaseViewController.Bj.fadeOut(50),
                    BaseViewController.Cj.stop(),
                    BaseViewController.Cj.fadeIn(500));
                }),
                (i.prototype.xh = function () {
                  this.kk();
                }),
                (i.prototype.Ah = function () {
                  return null != this.jk || this.ik.length > 0;
                }),
                (i.prototype.Z = function (t) {
                  (this.ik.unshift(t),
                    setTimeout(function () {
                      getApp().q.yh();
                    }, 0));
                }),
                (i.prototype.di = function (t) {
                  (this.ik.push(t),
                    setTimeout(function () {
                      getApp().q.yh();
                    }, 0));
                }),
                (i.prototype.kk = function () {
                  var i = this;
                  if (null == this.jk) {
                    if (0 == this.ik.length) return void getApp().q.uh();
                    var e = this.ik.shift();
                    this.jk = e;
                    var o = e.lk();
                    (o.hide(),
                      o.fadeIn(300),
                      t.append(o),
                      (e.mk = function () {
                        (o.fadeOut(300),
                          setTimeout(function () {
                            o.remove();
                          }, 300),
                          i.jk == e && (i.jk = null),
                          i.kk());
                      }),
                      e.xh());
                  }
                }),
                i
              );
            })(),
            ViewControllerType = {
              Dj: 0,
              vh: 1,
            },
            BasePopupViewController = (function () {
              var t = $("#popup-menu-label"),
                i = $("#popup-menu-coins-box"),
                e = $("#popup-menu-coins-val");
              ($("#popup-menu-back").click(function () {
                var t = getApp();
                (t.p.Zc(), t.q.uh());
              }),
                i.click(function () {
                  var t = getApp();
                  t.s.N() && (t.p.Zc(), t.q.H(t.q.hh));
                }));
              var o = extend(BaseViewController, function (t, i) {
                BaseViewController.call(this, ViewControllerType.vh);
                var o = getApp();
                ((this.mc = t),
                  (this.nk = i),
                  o.s.ai(function () {
                    o.s.N() ? e.html(o.s.Mh()) : e.html("0");
                  }));
              });
              return (
                (o.ok = $("#coins-view")),
                (o.pk = $("#leaders-view")),
                (o.qk = $("#profile-view")),
                (o.rk = $("#settings-view")),
                (o.sk = $("#login-view")),
                (o.tk = $("#skins-view")),
                (o.uk = $("#store-view")),
                (o.vk = $("#wear-view")),
                (o.wk = $("#withdraw-consent-view")),
                (o.xk = $("#please-wait-view")),
                (o.prototype.wh = function () {
                  (BaseViewController.uj.stop(),
                    BaseViewController.uj.fadeOut(200),
                    BaseViewController.vj.stop(),
                    BaseViewController.vj.fadeOut(200),
                    BaseViewController.wj.stop(),
                    BaseViewController.wj.fadeOut(200),
                    BaseViewController.xj.stop(),
                    BaseViewController.xj.fadeIn(200),
                    BaseViewController.yj.stop(),
                    BaseViewController.yj.fadeOut(200),
                    BaseViewController.zj.stop(),
                    BaseViewController.zj.fadeOut(200),
                    BaseViewController.Bj.stop(),
                    BaseViewController.Bj.fadeIn(200),
                    BaseViewController.Cj.stop(),
                    BaseViewController.Cj.fadeIn(200),
                    t.html(this.mc),
                    i.toggle(this.nk),
                    this.yk(),
                    this.zk());
                }),
                (o.prototype.zk = function () {}),
                (o.prototype.Ak = function () {
                  (BasePopupViewController.xk.stop(),
                    BasePopupViewController.xk.fadeIn(300));
                }),
                (o.prototype.yk = function () {
                  (BasePopupViewController.xk.stop(),
                    BasePopupViewController.xk.fadeOut(300));
                }),
                o
              );
            })(),
            CoinsViewController = (function () {
              var t = extend(BasePopupViewController, function () {
                BasePopupViewController.call(
                  this,
                  i18n("index.game.popup.menu.coins.tab"),
                  !0,
                );
                var t = this;
                ($("#store-buy-coins_125000").click(function () {
                  (app.p.Zc(), t.Bk("coins_125000"));
                }),
                  $("#store-buy-coins_50000").click(function () {
                    (app.p.Zc(), t.Bk("coins_50000"));
                  }),
                  $("#store-buy-coins_16000").click(function () {
                    (app.p.Zc(), t.Bk("coins_16000"));
                  }),
                  $("#store-buy-coins_7000").click(function () {
                    (app.p.Zc(), t.Bk("coins_7000"));
                  }),
                  $("#store-buy-coins_3250").click(function () {
                    (app.p.Zc(), t.Bk("coins_3250"));
                  }),
                  $("#store-buy-coins_1250").click(function () {
                    (app.p.Zc(), t.Bk("coins_1250"));
                  }));
              });
              return (
                (t.prototype.zk = function () {
                  (BasePopupViewController.ok.stop(),
                    BasePopupViewController.ok.fadeIn(200),
                    BasePopupViewController.pk.stop(),
                    BasePopupViewController.pk.fadeOut(50),
                    BasePopupViewController.qk.stop(),
                    BasePopupViewController.qk.fadeOut(50),
                    BasePopupViewController.sk.stop(),
                    BasePopupViewController.sk.fadeOut(50),
                    BasePopupViewController.rk.stop(),
                    BasePopupViewController.rk.fadeOut(50),
                    BasePopupViewController.tk.stop(),
                    BasePopupViewController.tk.fadeOut(50),
                    BasePopupViewController.uk.stop(),
                    BasePopupViewController.uk.fadeOut(50),
                    BasePopupViewController.vk.stop(),
                    BasePopupViewController.vk.fadeOut(50),
                    BasePopupViewController.wk.stop(),
                    BasePopupViewController.wk.fadeOut(50));
                }),
                (t.prototype.xh = function () {
                  getApp().p.$c();
                }),
                (t.prototype.Bk = function (t) {}),
                t
              );
            })(),
            LeadersViewController = (function () {
              var t = extend(BasePopupViewController, function () {
                (BasePopupViewController.call(
                  this,
                  i18n("index.game.popup.menu.leaders.tab"),
                  !0,
                ),
                  (this.Ck = $("#highscore-table")),
                  (this.Dk = $("#leaders-button-level")),
                  (this.Ek = $("#leaders-button-highscore")),
                  (this.Fk = $("#leaders-button-kills")),
                  (this.Gk = {}),
                  (this.Hk = {
                    Ik: {
                      Jk: this.Dk,
                      Kk: "byLevel",
                    },
                    Lk: {
                      Jk: this.Ek,
                      Kk: "byHighScore",
                    },
                    Mk: {
                      Jk: this.Fk,
                      Kk: "byKillsAndHeadShots",
                    },
                  }));
                var t = this;
                (this.Dk.click(function () {
                  (app.p.Zc(), t.Nk(t.Hk.Ik));
                }),
                  this.Ek.click(function () {
                    (app.p.Zc(), t.Nk(t.Hk.Lk));
                  }),
                  this.Fk.click(function () {
                    (app.p.Zc(), t.Nk(t.Hk.Mk));
                  }));
              });
              return (
                (t.prototype.zk = function () {
                  (BasePopupViewController.ok.stop(),
                    BasePopupViewController.ok.fadeOut(50),
                    BasePopupViewController.pk.stop(),
                    BasePopupViewController.pk.fadeIn(200),
                    BasePopupViewController.qk.stop(),
                    BasePopupViewController.qk.fadeOut(50),
                    BasePopupViewController.sk.stop(),
                    BasePopupViewController.sk.fadeOut(50),
                    BasePopupViewController.rk.stop(),
                    BasePopupViewController.rk.fadeOut(50),
                    BasePopupViewController.tk.stop(),
                    BasePopupViewController.tk.fadeOut(50),
                    BasePopupViewController.uk.stop(),
                    BasePopupViewController.uk.fadeOut(50),
                    BasePopupViewController.vk.stop(),
                    BasePopupViewController.vk.fadeOut(50),
                    BasePopupViewController.wk.stop(),
                    BasePopupViewController.wk.fadeOut(50));
                }),
                (t.prototype.xh = function () {
                  getApp().p.$c();
                  var t = this;
                  (this.Ak(),
                    $.get(GATEWAY_HOST + "/pub/leaders", function (i) {
                      ((t.Gk = i), t.Nk(null != t.Ok ? t.Ok : t.Hk.Ik), t.yk());
                    }).done(function () {
                      t.yk();
                    }));
                }),
                (t.prototype.Nk = function (t) {
                  this.Ok = t;
                  for (var i in this.Hk)
                    if (this.Hk.hasOwnProperty(i)) {
                      var e = this.Hk[i];
                      e.Jk.removeClass("pressed");
                    }
                  this.Ok.Jk.addClass("pressed");
                  for (
                    var o = this.Gk[this.Ok.Kk], n = "", s = 0;
                    s < o.length;
                    s++
                  ) {
                    var r = o[s];
                    n +=
                      '<div class="table-row"><span>' +
                      (s + 1) +
                      '</span><span><img src="' +
                      r.avatarUrl +
                      '"/></span><span>' +
                      r.username +
                      "</span><span>" +
                      r.level +
                      "</span><span>" +
                      r.highScore +
                      "</span><span>" +
                      r.headShots +
                      " / " +
                      r.kills +
                      "</span></div>";
                  }
                  (this.Ck.empty(), this.Ck.append(n));
                }),
                t
              );
            })(),
            LoginViewController = (function () {
              var t = extend(BasePopupViewController, function () {
                BasePopupViewController.call(
                  this,
                  i18n("index.game.popup.menu.login.tab"),
                  !1,
                );
                var t = getApp();
                ((this.Pk = $("#popup-login-gg")),
                  (this.Qk = $("#popup-login-fb")),
                  (this.Rk = $("#popup-login-vk")),
                  this.Pk.click(function () {
                    (t.p.Zc(), t.s.ji());
                  }),
                  this.Qk.click(function () {
                    (t.p.Zc(), t.s.fi());
                  }),
                  this.Rk.click(function () {
                    (t.p.Zc(), t.s.ki());
                  }));
              });
              return (
                (t.prototype.zk = function () {
                  (BasePopupViewController.ok.stop(),
                    BasePopupViewController.ok.fadeOut(50),
                    BasePopupViewController.pk.stop(),
                    BasePopupViewController.pk.fadeOut(50),
                    BasePopupViewController.qk.stop(),
                    BasePopupViewController.qk.fadeOut(50),
                    BasePopupViewController.sk.stop(),
                    BasePopupViewController.sk.fadeIn(200),
                    BasePopupViewController.rk.stop(),
                    BasePopupViewController.rk.fadeOut(50),
                    BasePopupViewController.tk.stop(),
                    BasePopupViewController.tk.fadeOut(50),
                    BasePopupViewController.uk.stop(),
                    BasePopupViewController.uk.fadeOut(50),
                    BasePopupViewController.vk.stop(),
                    BasePopupViewController.vk.fadeOut(50),
                    BasePopupViewController.wk.stop(),
                    BasePopupViewController.wk.fadeOut(50));
                }),
                (t.prototype.xh = function () {
                  getApp().p.$c();
                }),
                t
              );
            })(),
            ProfileViewController = (function () {
              var t = extend(BasePopupViewController, function () {
                (BasePopupViewController.call(
                  this,
                  i18n("index.game.popup.menu.profile.tab"),
                  !0,
                ),
                  (this.Sk = $("#profile-avatar")),
                  (this.Tk = $("#profile-username")),
                  (this.Uk = $("#profile-experience-bar")),
                  (this.Vk = $("#profile-experience-val")),
                  (this.Wk = $("#profile-level")),
                  (this.Xk = $("#profile-stat-highScore")),
                  (this.Yk = $("#profile-stat-bestSurvivalTime")),
                  (this.Zk = $("#profile-stat-kills")),
                  (this.$k = $("#profile-stat-headshots")),
                  (this._k = $("#profile-stat-gamesPlayed")),
                  (this.al = $("#profile-stat-totalTimeSpent")),
                  (this.bl = $("#profile-stat-registrationDate")));
              });
              return (
                (t.prototype.zk = function () {
                  (BasePopupViewController.ok.stop(),
                    BasePopupViewController.ok.fadeOut(50),
                    BasePopupViewController.pk.stop(),
                    BasePopupViewController.pk.fadeOut(50),
                    BasePopupViewController.qk.stop(),
                    BasePopupViewController.qk.fadeIn(200),
                    BasePopupViewController.sk.stop(),
                    BasePopupViewController.sk.fadeOut(50),
                    BasePopupViewController.rk.stop(),
                    BasePopupViewController.rk.fadeOut(50),
                    BasePopupViewController.tk.stop(),
                    BasePopupViewController.tk.fadeOut(50),
                    BasePopupViewController.uk.stop(),
                    BasePopupViewController.uk.fadeOut(50),
                    BasePopupViewController.vk.stop(),
                    BasePopupViewController.vk.fadeOut(50),
                    BasePopupViewController.wk.stop(),
                    BasePopupViewController.wk.fadeOut(50));
                }),
                (t.prototype.xh = function () {
                  var t = getApp();
                  t.p.$c();
                  var i = t.s._h(),
                    e = moment([i.year, i.month - 1, i.day]).format("LL");
                  (this.Tk.html(t.s.Jh()),
                    this.Sk.attr("src", t.s.Kh()),
                    this.Uk.width((100 * t.s.Oh()) / t.s.Ph() + "%"),
                    this.Vk.html(t.s.Oh() + " / " + t.s.Ph()),
                    this.Wk.html(t.s.Nh()),
                    this.Xk.html(t.s.Vh()),
                    this.Yk.html(timeSecsToIntervalText(t.s.Wh())),
                    this.Zk.html(t.s.Xh()),
                    this.$k.html(t.s.Yh()),
                    this._k.html(t.s.Zh()),
                    this.al.html(timeSecsToIntervalText(t.s.$h())),
                    this.bl.html(e));
                }),
                t
              );
            })(),
            SettingsViewController = (function () {
              var t = extend(BasePopupViewController, function () {
                BasePopupViewController.call(
                  this,
                  i18n("index.game.popup.menu.settings.tab"),
                  !1,
                );
                var t = this,
                  i = getApp();
                ((this.cl = $("#settings-music-enabled-switch")),
                  (this.dl = $("#settings-sfx-enabled-switch")),
                  (this.el = $("#settings-show-names-switch")),
                  (this.fl = $("#popup-logout")),
                  (this.gl = $("#popup-logout-container")),
                  (this.hl = $("#popup-withdraw-consent")),
                  (this.il = $("#popup-give-consent")),
                  this.il.hide(),
                  i.s.T(function () {
                    t.gl.toggle(i.s.N());
                  }),
                  this.cl.click(function () {
                    var e = !!t.cl.prop("checked");
                    (setCookie(Cookies.MUSIC_ENABLED, e, 30),
                      i.p.Qc(e),
                      i.p.Zc());
                  }),
                  this.dl.click(function () {
                    var e = !!t.dl.prop("checked");
                    (setCookie(Cookies.SFX_ENABLED, e, 30),
                      i.p.Oc(e),
                      i.p.Zc());
                  }),
                  this.el.click(function () {
                    i.p.Zc();
                  }),
                  this.fl.click(function () {
                    (i.p.Zc(), i.s.gi());
                  }),
                  this.hl.click(function () {
                    i.W() ? (i.p.Zc(), i.q.H(i.q.gh)) : i.p.cd();
                  }));
                var e = void 0;
                switch (getCookie(Cookies.MUSIC_ENABLED)) {
                  case "false":
                    e = !1;
                    break;
                  default:
                    e = !0;
                }
                (this.cl.prop("checked", e), i.p.Qc(e));
                var o = void 0;
                switch (getCookie(Cookies.SFX_ENABLED)) {
                  case "false":
                    o = !1;
                    break;
                  default:
                    o = !0;
                }
                (this.dl.prop("checked", o), i.p.Oc(o));
                var n = void 0;
                switch (getCookie(Cookies.SHOW_PLAYER_NAMES)) {
                  case "false":
                    n = !1;
                    break;
                  default:
                    n = !0;
                }
                (console.log("Load sPN: " + n), this.el.prop("checked", n));
              });
              return (
                (t.prototype.zk = function () {
                  (BasePopupViewController.ok.stop(),
                    BasePopupViewController.ok.fadeOut(50),
                    BasePopupViewController.pk.stop(),
                    BasePopupViewController.pk.fadeOut(50),
                    BasePopupViewController.qk.stop(),
                    BasePopupViewController.qk.fadeOut(50),
                    BasePopupViewController.sk.stop(),
                    BasePopupViewController.sk.fadeOut(50),
                    BasePopupViewController.rk.stop(),
                    BasePopupViewController.rk.fadeIn(200),
                    BasePopupViewController.tk.stop(),
                    BasePopupViewController.tk.fadeOut(50),
                    BasePopupViewController.uk.stop(),
                    BasePopupViewController.uk.fadeOut(50),
                    BasePopupViewController.vk.stop(),
                    BasePopupViewController.vk.fadeOut(50),
                    BasePopupViewController.wk.stop(),
                    BasePopupViewController.wk.fadeOut(50));
                }),
                (t.prototype.xh = function () {
                  var t = getApp();
                  (t.p.$c(), t.W() ? this.hl.show() : this.hl.hide());
                }),
                (t.prototype.oa = function () {
                  return this.el.prop("checked");
                }),
                t
              );
            })(),
            SkinsViewController = (function () {
              var t = extend(BasePopupViewController, function () {
                BasePopupViewController.call(
                  this,
                  i18n("index.game.popup.menu.skins.tab"),
                  !0,
                );
                var t = this,
                  e = getApp();
                ((this.jl = $("#store-view-canv")),
                  (this.kl = $("#store-locked-bar")),
                  (this.ll = $("#store-buy-button")),
                  (this.ml = $("#store-item-price")),
                  (this.nl = $("#store-groups")),
                  (this.ol = $("#store-view-prev")),
                  (this.pl = $("#store-view-next")),
                  (this.ql = null),
                  (this.rl = []),
                  (this.sl = {}),
                  (this.tl = new WormView(this.jl)),
                  this.ll.click(function () {
                    (e.p.Zc(), t.ul());
                  }),
                  this.ol.click(function () {
                    (e.p.Zc(), t.ql.vl());
                  }),
                  this.pl.click(function () {
                    (e.p.Zc(), t.ql.wl());
                  }),
                  e.t.aa(function () {
                    var o = e.t.ac;
                    if (null != o) {
                      t.rl = [];
                      for (var n = 0; n < o.skinGroupArrayDict.length; n++)
                        t.rl.push(new i(t, o.skinGroupArrayDict[n]));
                      t.sl = {};
                      for (var s = 0; s < o.skinArrayDict.length; s++) {
                        var r = o.skinArrayDict[s];
                        t.sl[r.id] = r;
                      }
                    }
                  }),
                  this.xl(!1),
                  e.r.Kg(function () {
                    t.xl(!1);
                  }));
              });
              ((t.prototype.zk = function () {
                (BasePopupViewController.ok.stop(),
                  BasePopupViewController.ok.fadeOut(50),
                  BasePopupViewController.pk.stop(),
                  BasePopupViewController.pk.fadeOut(50),
                  BasePopupViewController.qk.stop(),
                  BasePopupViewController.qk.fadeOut(50),
                  BasePopupViewController.sk.stop(),
                  BasePopupViewController.sk.fadeOut(50),
                  BasePopupViewController.rk.stop(),
                  BasePopupViewController.rk.fadeOut(50),
                  BasePopupViewController.tk.stop(),
                  BasePopupViewController.tk.fadeIn(200),
                  BasePopupViewController.uk.stop(),
                  BasePopupViewController.uk.fadeOut(50),
                  BasePopupViewController.vk.stop(),
                  BasePopupViewController.vk.fadeOut(50),
                  BasePopupViewController.wk.stop(),
                  BasePopupViewController.wk.fadeOut(50));
              }),
                (t.prototype.xh = function () {
                  (getApp().p.$c(), this.yl());
                }),
                (t.prototype.Ca = function () {
                  this.tl.Ca();
                }),
                (t.prototype.Aa = function (t, i) {
                  this.tl.Aa();
                }),
                (t.prototype.yl = function () {
                  var t = this,
                    i = this,
                    e = getApp();
                  this.nl.empty();
                  for (var o = 0; o < this.rl.length; o++)
                    !(function (o) {
                      var n = t.rl[o],
                        s = document.createElement("li");
                      t.nl.append(s);
                      var r = $(s);
                      (r.html(n.zl()),
                        r.click(function () {
                          (e.p.Zc(), i.Al(n));
                        }),
                        (n.Bl = r));
                    })(o);
                  if (this.rl.length > 0) {
                    for (var n = e.r.fa("SKIN"), o = 0; o < this.rl.length; o++)
                      for (
                        var s = this.rl[o], r = s.Cl.list, a = 0;
                        a < r.length;
                        a++
                      )
                        if (r[a] == n) return ((s.Dl = a), void this.Al(s));
                    this.Al(this.rl[0]);
                  }
                }),
                (t.prototype.Al = function (t) {
                  this.ql != t &&
                    ((this.ql = t),
                    this.nl.children().removeClass("pressed"),
                    this.ql.Bl && this.ql.Bl.addClass("pressed"),
                    this.xl(!0));
                }),
                (t.prototype.El = function () {
                  return null == this.ql ? Optional.kg() : this.ql.Fl();
                }),
                (t.prototype.ul = function () {
                  var t = this;
                  this.El().og(function (i) {
                    t.Gl(i);
                  });
                }),
                (t.prototype.Gl = function (t) {
                  var i = this,
                    e = getApp(),
                    o = this.sl[t].price;
                  if (!(e.s.Mh() < o)) {
                    this.Ak();
                    var n = e.r.fa("SKIN"),
                      s = e.r.fa("EYES"),
                      r = e.r.fa("MOUTH"),
                      a = e.r.fa("GLASSES"),
                      h = e.r.fa("HAT");
                    e.s.ei(t, "SKIN", function () {
                      (e.r.Pg(n, "SKIN"),
                        e.r.Pg(s, "EYES"),
                        e.r.Pg(r, "MOUTH"),
                        e.r.Pg(a, "GLASSES"),
                        e.r.Pg(h, "HAT"),
                        e.s.Qg(t, "SKIN") && e.r.Pg(t, "SKIN"),
                        i.yk());
                    });
                  }
                }),
                (t.prototype.xl = function (t) {
                  var i = getApp();
                  (this.tl.pj(i.r.fa("EYES"), !1, !1),
                    this.tl.qj(i.r.fa("MOUTH"), !1, !1),
                    this.tl.rj(i.r.fa("GLASSES"), !1, !1),
                    this.tl.sj(i.r.fa("HAT"), !1, !1));
                  var e = this.El();
                  if (e.ng()) {
                    var o = e.mg(),
                      n = this.sl[o],
                      s = !1;
                    (i.r.Mg(o, "SKIN")
                      ? (this.kl.hide(), this.ll.hide())
                      : null == n || 1 == n.nonbuyable
                        ? ((s = !0),
                          this.kl.show(),
                          this.ll.hide(),
                          null != n &&
                          n.nonbuyable &&
                          null != n.nonbuyableReason
                            ? this.kl.html(i18nCustomBundle(n.nonbuyableReason))
                            : this.kl.html(
                                i18n("index.game.popup.menu.store.locked"),
                              ))
                        : (this.kl.hide(),
                          this.ll.show(),
                          this.ml.html(null != n ? n.price : 0)),
                      this.tl.oj(o, !0, s),
                      t && i.r.Pg(o, "SKIN"));
                  }
                }));
              var i = (function () {
                function t(t, i) {
                  ((this.Hl = t), (this.Dl = 0), (this.Cl = i));
                }
                return (
                  (t.prototype.vl = function () {
                    (--this.Dl < 0 && (this.Dl = this.Cl.list.length - 1),
                      this.Hl.xl(!0));
                  }),
                  (t.prototype.wl = function () {
                    (++this.Dl >= this.Cl.list.length && (this.Dl = 0),
                      this.Hl.xl(!0));
                  }),
                  (t.prototype.zl = function () {
                    return i18nCustomBundle(this.Cl.name);
                  }),
                  (t.prototype.Fl = function () {
                    return this.Dl >= this.Cl.list.length
                      ? Optional.kg()
                      : Optional.lg(this.Cl.list[this.Dl]);
                  }),
                  t
                );
              })();
              return t;
            })(),
            StoreViewController = (function () {
              var t = extend(BasePopupViewController, function () {
                BasePopupViewController.call(
                  this,
                  i18n("index.game.popup.menu.store.tab"),
                  !0,
                );
                var t = getApp(),
                  i = $("#store-go-coins-button"),
                  e = $("#store-go-skins-button"),
                  o = $("#store-go-wear-button");
                (i.click(function () {
                  (t.p.Zc(), t.q.H(t.q.hh));
                }),
                  e.click(function () {
                    (t.p.Zc(), t.q.H(t.q.lh));
                  }),
                  o.click(function () {
                    (t.p.Zc(), t.q.H(t.q.nh));
                  }));
              });
              return (
                (t.prototype.zk = function () {
                  (BasePopupViewController.ok.stop(),
                    BasePopupViewController.ok.fadeOut(50),
                    BasePopupViewController.pk.stop(),
                    BasePopupViewController.pk.fadeOut(50),
                    BasePopupViewController.qk.stop(),
                    BasePopupViewController.qk.fadeOut(50),
                    BasePopupViewController.sk.stop(),
                    BasePopupViewController.sk.fadeOut(50),
                    BasePopupViewController.rk.stop(),
                    BasePopupViewController.rk.fadeOut(50),
                    BasePopupViewController.tk.stop(),
                    BasePopupViewController.tk.fadeOut(50),
                    BasePopupViewController.uk.stop(),
                    BasePopupViewController.uk.fadeIn(200),
                    BasePopupViewController.vk.stop(),
                    BasePopupViewController.vk.fadeOut(50),
                    BasePopupViewController.wk.stop(),
                    BasePopupViewController.wk.fadeOut(50));
                }),
                (t.prototype.xh = function () {
                  getApp().p.$c();
                }),
                t
              );
            })(),
            WearViewController = (function () {
              var t = extend(BasePopupViewController, function () {
                var t = this;
                BasePopupViewController.call(
                  this,
                  i18n("index.game.popup.menu.wear.tab"),
                  !0,
                );
                var e = getApp();
                ((this.Il = $("#wear-view-canv")),
                  (this.Jl = $("#wear-locked-bar")),
                  (this.Kl = $("#wear-buy-button")),
                  (this.Ll = $("#wear-item-price")),
                  (this.Ml = $("#wear-eyes-button")),
                  (this.Nl = $("#wear-mouths-button")),
                  (this.Ol = $("#wear-glasses-button")),
                  (this.Pl = $("#wear-hats-button")),
                  (this.Ql = $("#wear-tint-chooser")),
                  (this.Rl = $("#wear-view-prev")),
                  (this.Sl = $("#wear-view-next")));
                var o = this;
                ((this.Tl = []),
                  (this.Ul = new i(this, "EYES", this.Ml)),
                  (this.Vl = new i(this, "MOUTH", this.Nl)),
                  (this.Wl = new i(this, "GLASSES", this.Ol)),
                  (this.Xl = new i(this, "HAT", this.Pl)),
                  (this.Yl = null),
                  (this.Zl = null),
                  (this.$l = null),
                  (this._l = null),
                  (this.am = null),
                  (this.bm = null),
                  (this.cm = new WormView(this.Il)),
                  this.Kl.click(function () {
                    (e.p.Zc(), o.dm());
                  }),
                  this.Rl.click(function () {
                    (e.p.Zc(), o.Yl.em());
                  }),
                  this.Sl.click(function () {
                    (e.p.Zc(), o.Yl.fm());
                  }),
                  this.Ml.click(function () {
                    (e.p.Zc(), o.gm(t.Ul));
                  }),
                  this.Nl.click(function () {
                    (e.p.Zc(), o.gm(t.Vl));
                  }),
                  this.Ol.click(function () {
                    (e.p.Zc(), o.gm(t.Wl));
                  }),
                  this.Pl.click(function () {
                    (e.p.Zc(), o.gm(t.Xl));
                  }),
                  this.Tl.push(this.Ul),
                  this.Tl.push(this.Vl),
                  this.Tl.push(this.Wl),
                  this.Tl.push(this.Xl),
                  e.t.aa(function () {
                    var t = e.t.ac;
                    null != t &&
                      ((o.Zl = t.eyesDict),
                      (o.$l = t.mouthDict),
                      (o._l = t.glassesDict),
                      (o.am = t.hatDict),
                      (o.bm = t.colorDict),
                      o.Ul.hm(t.eyesVariantArray),
                      o.Ul.im(o.Zl),
                      o.Vl.hm(t.mouthVariantArray),
                      o.Vl.im(o.$l),
                      o.Wl.hm(t.glassesVariantArray),
                      o.Wl.im(o._l),
                      o.Xl.hm(t.hatVariantArray),
                      o.Xl.im(o.am));
                  }),
                  this.xl(!1),
                  e.r.Kg(function () {
                    o.xl(!1);
                  }));
              });
              ((t.prototype.zk = function () {
                (BasePopupViewController.ok.stop(),
                  BasePopupViewController.ok.fadeOut(50),
                  BasePopupViewController.pk.stop(),
                  BasePopupViewController.pk.fadeOut(50),
                  BasePopupViewController.qk.stop(),
                  BasePopupViewController.qk.fadeOut(50),
                  BasePopupViewController.sk.stop(),
                  BasePopupViewController.sk.fadeOut(50),
                  BasePopupViewController.rk.stop(),
                  BasePopupViewController.rk.fadeOut(50),
                  BasePopupViewController.tk.stop(),
                  BasePopupViewController.tk.fadeOut(50),
                  BasePopupViewController.uk.stop(),
                  BasePopupViewController.uk.fadeOut(50),
                  BasePopupViewController.vk.stop(),
                  BasePopupViewController.vk.fadeIn(200),
                  BasePopupViewController.wk.stop(),
                  BasePopupViewController.wk.fadeOut(50));
              }),
                (t.prototype.xh = function () {
                  (getApp().p.$c(),
                    this.gm(null != this.Yl ? this.Yl : this.Ul));
                }),
                (t.prototype.Ca = function () {
                  this.cm.Ca();
                }),
                (t.prototype.Aa = function (t, i) {
                  this.cm.Aa();
                }),
                (t.prototype.gm = function (t) {
                  this.Yl = t;
                  for (var i = 0; i < this.Tl.length; i++)
                    this.Tl[i].Jk.removeClass("pressed");
                  (this.Yl.Jk.addClass("pressed"), this.Yl.wh());
                }),
                (t.prototype.jm = function () {
                  return null == this.Yl
                    ? Optional.kg()
                    : Optional.lg({
                        qb: this.Yl.Fl(),
                        Yb: this.Yl.Yb,
                      });
                }),
                (t.prototype.dm = function () {
                  var t = this;
                  this.jm().og(function (i) {
                    t.ei(i.qb, i.Yb);
                  });
                }),
                (t.prototype.ei = function (t, i) {
                  var e = this,
                    o = getApp(),
                    n = void 0;
                  switch (i) {
                    case "EYES":
                      n = this.Zl[t].price;
                      break;
                    case "MOUTH":
                      n = this.$l[t].price;
                      break;
                    case "GLASSES":
                      n = this._l[t].price;
                      break;
                    case "HAT":
                      n = this.am[t].price;
                      break;
                    default:
                      return;
                  }
                  if (!(o.s.Mh() < n)) {
                    this.Ak();
                    var s = o.r.fa("SKIN"),
                      r = o.r.fa("EYES"),
                      a = o.r.fa("MOUTH"),
                      h = o.r.fa("GLASSES"),
                      l = o.r.fa("HAT");
                    o.s.ei(t, i, function () {
                      (o.r.Pg(s, "SKIN"),
                        o.r.Pg(r, "EYES"),
                        o.r.Pg(a, "MOUTH"),
                        o.r.Pg(h, "GLASSES"),
                        o.r.Pg(l, "HAT"),
                        o.s.Qg(t, i) && o.r.Pg(t, i),
                        e.yk());
                    });
                  }
                }),
                (t.prototype.km = function (t, i) {
                  switch (i) {
                    case "EYES":
                      return this.Zl[t];
                    case "MOUTH":
                      return this.$l[t];
                    case "GLASSES":
                      return this._l[t];
                    case "HAT":
                      return this.am[t];
                  }
                  return null;
                }),
                (t.prototype.xl = function (t) {
                  var i = getApp();
                  (this.cm.oj(i.r.fa("SKIN"), !1, !1),
                    this.cm.pj(i.r.fa("EYES"), !1, !1),
                    this.cm.qj(i.r.fa("MOUTH"), !1, !1),
                    this.cm.rj(i.r.fa("GLASSES"), !1, !1),
                    this.cm.sj(i.r.fa("HAT"), !1, !1));
                  var e = this.jm();
                  if (e.ng()) {
                    var o = e.mg(),
                      n = this.km(o.qb, o.Yb),
                      s = !1;
                    switch (
                      (i.r.Mg(o.qb, o.Yb)
                        ? (this.Jl.hide(), this.Kl.hide())
                        : null == n || 1 == n.nonbuyable
                          ? ((s = !0),
                            this.Jl.show(),
                            this.Kl.hide(),
                            null != n &&
                            n.nonbuyable &&
                            null != n.nonbuyableReason
                              ? this.Jl.html(
                                  i18nCustomBundle(n.nonbuyableReason),
                                )
                              : this.Jl.html(
                                  i18n("index.game.popup.menu.store.locked"),
                                ))
                          : (this.Jl.hide(),
                            this.Kl.show(),
                            this.Ll.html(null != n ? n.price : 0)),
                      o.Yb)
                    ) {
                      case "EYES":
                        this.cm.pj(o.qb, !0, s);
                        break;
                      case "MOUTH":
                        this.cm.qj(o.qb, !0, s);
                        break;
                      case "GLASSES":
                        this.cm.rj(o.qb, !0, s);
                        break;
                      case "HAT":
                        this.cm.sj(o.qb, !0, s);
                    }
                    t && i.r.Pg(o.qb, o.Yb);
                  }
                }));
              var i = (function () {
                function t(t, i, e) {
                  ((this.Hl = t),
                    (this.Yb = i),
                    (this.Jk = e),
                    (this.lm = {}),
                    (this.mm = [[]]),
                    (this.nm = -10),
                    (this.om = -10));
                }
                return (
                  (t.prototype.hm = function (t) {
                    this.mm = t;
                  }),
                  (t.prototype.im = function (t) {
                    this.lm = t;
                  }),
                  (t.prototype.wh = function () {
                    for (
                      var t = getApp(), i = t.r.fa(this.Yb), e = 0;
                      e < this.mm.length;
                      e++
                    )
                      for (var o = 0; o < this.mm[e].length; o++)
                        if (this.mm[e][o] == i)
                          return (this.pm(e), void this.qm(o));
                    (this.pm(0), this.qm(0));
                  }),
                  (t.prototype.em = function () {
                    var t = this.nm - 1;
                    (t < 0 && (t = this.mm.length - 1),
                      this.pm(t),
                      this.qm(this.om % this.mm[t].length));
                  }),
                  (t.prototype.fm = function () {
                    var t = this.nm + 1;
                    (t >= this.mm.length && (t = 0),
                      this.pm(t),
                      this.qm(this.om % this.mm[t].length));
                  }),
                  (t.prototype.pm = function (t) {
                    var i = this;
                    if (!(t < 0 || t >= this.mm.length)) {
                      ((this.nm = t), this.Hl.Ql.empty());
                      var e = this.mm[this.nm];
                      if (e.length > 1)
                        for (var o = 0; o < e.length; o++)
                          !(function (t) {
                            var o = e[t],
                              n = i.lm[o],
                              s = "#" + i.Hl.bm[n.prime],
                              r = $(
                                '<div style="border-color:' + s + '"></div>',
                              );
                            (r.click(function () {
                              (getApp().p.Zc(), i.qm(t));
                            }),
                              i.Hl.Ql.append(r));
                          })(o);
                    }
                  }),
                  (t.prototype.qm = function (t) {
                    if (!(t < 0 || t >= this.mm[this.nm].length)) {
                      ((this.om = t),
                        this.Hl.Ql.children().css(
                          "background-color",
                          "transparent",
                        ));
                      var i = this.Hl.Ql.children(
                        ":nth-child(" + (1 + t) + ")",
                      );
                      (i.css("background-color", i.css("border-color")),
                        this.Hl.xl(!0));
                    }
                  }),
                  (t.prototype.Fl = function () {
                    return this.mm[this.nm][this.om];
                  }),
                  t
                );
              })();
              return t;
            })(),
            WithdrawConsentViewController = (function () {
              var t = extend(BasePopupViewController, function () {
                BasePopupViewController.call(
                  this,
                  i18n("index.game.popup.menu.consent.tab"),
                  !1,
                );
                var t = $("#withdraw-consent-yes"),
                  i = $("#withdraw-consent-no");
                (t.click(function () {
                  (app.p.Zc(),
                    app.W()
                      ? (app.q.H(app.q.D),
                        app.Y(!1, !0),
                        app.q.$.Z(new ConsentAcceptanceToasterViewController()))
                      : app.q.uh());
                }),
                  i.click(function () {
                    (app.p.Zc(), app.q.uh());
                  }));
              });
              return (
                (t.prototype.zk = function () {
                  (BasePopupViewController.ok.stop(),
                    BasePopupViewController.ok.fadeOut(50),
                    BasePopupViewController.pk.stop(),
                    BasePopupViewController.pk.fadeOut(50),
                    BasePopupViewController.qk.stop(),
                    BasePopupViewController.qk.fadeOut(50),
                    BasePopupViewController.sk.stop(),
                    BasePopupViewController.sk.fadeOut(50),
                    BasePopupViewController.rk.stop(),
                    BasePopupViewController.rk.fadeOut(50),
                    BasePopupViewController.tk.stop(),
                    BasePopupViewController.tk.fadeOut(50),
                    BasePopupViewController.uk.stop(),
                    BasePopupViewController.uk.fadeOut(50),
                    BasePopupViewController.vk.stop(),
                    BasePopupViewController.vk.fadeOut(50),
                    BasePopupViewController.wk.stop(),
                    BasePopupViewController.wk.fadeIn(200));
                }),
                (t.prototype.xh = function () {
                  getApp().p.$c();
                }),
                t
              );
            })(),
            BaseToasterViewController = (function () {
              function t() {
                this.mk = function () {};
              }
              return (
                (t.prototype.lk = function () {}),
                (t.prototype.xh = function () {}),
                t
              );
            })(),
            CoinsToasterViewController = (function () {
              var t = extend(BaseToasterViewController, function (t) {
                BaseToasterViewController.call(this);
                var i =
                  Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
                this.rm = $(
                  '<div id="' +
                    i +
                    '" class="toaster toaster-coins">    <img class="toaster-coins-img" alt="Wormate Coin" src="/images/coin_320.png" />    <div class="toaster-coins-val">+' +
                    t +
                    '</div>    <div class="toaster-coins-close">' +
                    i18n("index.game.toaster.continue") +
                    "</div></div>",
                );
                var e = this;
                this.rm.find(".toaster-coins-close").click(function () {
                  (getApp().p.Zc(), e.mk());
                });
              });
              return (
                (t.prototype.lk = function () {
                  return this.rm;
                }),
                (t.prototype.xh = function () {
                  getApp().p.ad();
                }),
                t
              );
            })(),
            LevelUpToasterViewController = (function () {
              var t = extend(BaseToasterViewController, function (t) {
                BaseToasterViewController.call(this);
                var i =
                  Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
                this.rm = $(
                  '<div id="' +
                    i +
                    '" class="toaster toaster-levelup">    <img class="toaster-levelup-img" alt="Wormate Level Up Star" src="/images/level-star.svg" />    <div class="toaster-levelup-val">' +
                    t +
                    '</div>    <div class="toaster-levelup-text">' +
                    i18n("index.game.toaster.levelup") +
                    '</div>    <div class="toaster-levelup-close">' +
                    i18n("index.game.toaster.continue") +
                    "</div></div>",
                );
                var e = this;
                this.rm.find(".toaster-levelup-close").click(function () {
                  (app.p.Zc(), e.mk());
                });
              });
              return (
                (t.prototype.lk = function () {
                  return this.rm;
                }),
                (t.prototype.xh = function () {
                  app.p._c();
                }),
                t
              );
            })(),
            ConsentAcceptanceToasterViewController = (function () {
              var t = extend(BaseToasterViewController, function () {
                BaseToasterViewController.call(this);
                var t = this,
                  i = getApp(),
                  e = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
                ((this.rm = $(
                  '<div id="' +
                    e +
                    '" class="toaster toaster-consent-accepted">    <img class="toaster-consent-accepted-logo" src="' +
                    LINE_LOGO_URL +
                    '" alt="Wormate.io logo"/>    <div class="toaster-consent-accepted-container">        <span class="toaster-consent-accepted-text">' +
                    i18n("index.game.toaster.consent.text")
                      .replaceAll(" ", "&nbsp;")
                      .replaceAll("\n", "<br/>") +
                    '</span>        <a class="toaster-consent-accepted-link" href="/privacy-policy">' +
                    i18n("index.game.toaster.consent.link") +
                    '</a>    </div>    <div class="toaster-consent-close">' +
                    i18n("index.game.toaster.consent.iAccept") +
                    "</div></div>",
                )),
                  (this.sm = this.rm.find(".toaster-consent-close")),
                  this.sm.hide(),
                  this.sm.click(function () {
                    (i.p.Zc(), i.W() && i.Y(!0, !0), t.mk());
                  }));
              });
              return (
                (t.prototype.lk = function () {
                  return this.rm;
                }),
                (t.prototype.xh = function () {
                  var t = this,
                    i = getApp();
                  i.W() && !i.X()
                    ? (i.p.cd(),
                      setTimeout(function () {
                        t.sm.fadeIn(300);
                      }, 2e3))
                    : setTimeout(function () {
                        t.mk();
                      }, 0);
                }),
                t
              );
            })(),
            ENV_MAP = {};
          ((ENV_MAP.main = {
            za: ADINPLAY_BANNER(
              "aqnvgcpz05orkobh",
              atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA=="),
            ),
            J: ADINPLAY_BANNER(
              "ltmolilci1iurq1i",
              atob("d29ybWF0ZS1pb185NzB4MjUw"),
            ),
            ka: ADINPLAY_PREROLL_PLAYER(),
            d: 4,
            ha: !1,
            Nj: !1,
          }),
            (ENV_MAP.__dev__ = {
              za: ADINPLAY_BANNER(
                "aqnvgcpz05orkobh",
                atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA=="),
              ),
              J: ADINPLAY_BANNER(
                "ltmolilci1iurq1i",
                atob("d29ybWF0ZS1pb185NzB4MjUw"),
              ),
              ka: ADINPLAY_PREROLL_PLAYER(),
              d: 1,
              ha: !1,
              Nj: !1,
            }),
            (ENV_MAP.miniclip = {
              za: ADINPLAY_BANNER(
                "aqnvgcpz05orkobh",
                atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA=="),
              ),
              J: ADINPLAY_BANNER(
                "ltmolilci1iurq1i",
                atob("d29ybWF0ZS1pb185NzB4MjUw"),
              ),
              ka: ADINPLAY_PREROLL_PLAYER(),
              d: 4,
              ha: !1,
              Nj: !1,
            }));
          var env = ENV_MAP[window.ENV];
          (env || (env = ENV_MAP.main),
            $(function () {
              FastClick.attach(document.body);
            }),
            addEventListener("contextmenu", function (t) {
              return (t.preventDefault(), t.stopPropagation(), !1);
            }),
            (_anApp = Application()),
            _anApp.u());
          var loopFunc = function t() {
            (requestAnimationFrame(t), getApp().Aa());
          };
          loopFunc();
          var __resize = function () {
              var t = j_body.width(),
                i = j_body.height(),
                e = j_stretchBox.outerWidth(),
                o = j_stretchBox.outerHeight(),
                n = j_markupHeader.outerHeight(),
                s = j_markupFooter.outerHeight(),
                r = Math.min(1, Math.min((i - s - n) / o, t / e)),
                a = "translate(-50%, -50%) scale(" + r + ")";
              (j_stretchBox.css({
                "-webkit-transform": a,
                "-moz-transform": a,
                "-ms-transform": a,
                "-o-transform": a,
                transform: a,
              }),
                getApp().Ca(),
                window.scrollTo(0, 1));
            },
            j_body = $("body"),
            j_stretchBox = $("#stretch-box"),
            j_markupHeader = $("#markup-header"),
            j_markupFooter = $("#markup-footer");
          (__resize(), $(window).resize(__resize));
        })();
      }));
  }));

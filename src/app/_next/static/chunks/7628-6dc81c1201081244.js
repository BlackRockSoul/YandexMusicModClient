(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7628],
  {
    78507: function (e, t, r) {
      "use strict";
      r.d(t, {
        S1: function () {
          return u;
        },
        SG: function () {
          return l;
        },
        wE: function () {
          return c;
        },
      });
      var a,
        i = r(98639),
        s = {
          5663: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useIntersectionObserver =
                t.createIntersectionObserver =
                t.getElementNameByDataAttribute =
                t.isInViewportNow =
                t.defaultOptions =
                  void 0);
            let a = r(810),
              { innerWidth: i = 0, innerHeight: s = 0 } = window;
            function n(e) {
              let {
                top: t,
                right: r,
                bottom: a,
                left: n,
              } = e.getBoundingClientRect();
              return (
                ((t >= 0 && t <= s) || (a >= 0 && a <= s)) &&
                ((n >= 0 && n <= i) || (r >= 0 && r <= i))
              );
            }
            function o(e) {
              var t, r;
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "data-intersection-property-id";
              return null !==
                (r =
                  null == e
                    ? void 0
                    : null === (t = e.getAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, a)) && void 0 !== r
                ? r
                : e.attributes[0];
            }
            function c(e, t) {
              return new IntersectionObserver((t) => {
                t.forEach(e);
              }, t);
            }
            (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
              (t.isInViewportNow = n),
              (t.getElementNameByDataAttribute = o),
              (t.createIntersectionObserver = c),
              (t.useIntersectionObserver = function (e, r, i) {
                let [
                    { freezeOnceVisible: s, preflightCheck: l, ...u },
                    d = !1,
                  ] =
                    "boolean" == typeof r || void 0 === r
                      ? [t.defaultOptions, r]
                      : [{ ...t.defaultOptions, ...r }, i],
                  [h, f] = (0, a.useState)({}),
                  m = (0, a.useMemo)(
                    () =>
                      d
                        ? null
                        : c((e) => {
                            let t = o(e.target);
                            t &&
                              m &&
                              (e.isIntersecting
                                ? f((e) => ({
                                    ...e,
                                    [t]: { isIntersecting: !0 },
                                  }))
                                : f((e) => ({
                                    ...e,
                                    [t]: { isIntersecting: !1 },
                                  })),
                              s &&
                                m &&
                                e.isIntersecting &&
                                m.unobserve(e.target));
                          }, u),
                    [d],
                  );
                return (
                  (0, a.useLayoutEffect)(
                    () => (
                      m &&
                        !d &&
                        e.forEach((e) => {
                          if (e.current) {
                            let t = !1;
                            if (l && (t = n(e.current))) {
                              let t = o(e.current);
                              f((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                            }
                            t || m.observe(e.current);
                          }
                        }),
                      () => {
                        m && m.disconnect();
                      }
                    ),
                    [d, m],
                  ),
                  h
                );
              });
          },
          810: (e) => {
            e.exports = a || (a = r.t(i, 2));
          },
        },
        n = {},
        o = (function e(t) {
          var r = n[t];
          if (void 0 !== r) return r.exports;
          var a = (n[t] = { exports: {} });
          return s[t](a, a.exports, e), a.exports;
        })(5663);
      o.__esModule;
      var c = o.createIntersectionObserver;
      o.defaultOptions;
      var l = o.getElementNameByDataAttribute;
      o.isInViewportNow;
      var u = o.useIntersectionObserver;
    },
    39513: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return u;
        },
      });
      var a,
        i,
        s = r(98639),
        n = {
          5881: (e, t, r) => {
            function a() {
              for (var e, t, r = 0, a = ""; r < arguments.length; )
                (e = arguments[r++]) &&
                  (t = (function e(t) {
                    var r,
                      a,
                      i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (a = e(t[r])) && (i && (i += " "), (i += a));
                      else for (r in t) t[r] && (i && (i += " "), (i += r));
                    }
                    return i;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            r.r(t), r.d(t, { clsx: () => a, default: () => i });
            let i = a;
          },
          8635: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root: "cpeagBA1_PblpJn8Xgtv",
              root_withoutBorder: "qU2apWBO1yyEK0lZ3lPO",
              root_radius_xs: "MmZbSs387gu2qrJ1lDWd",
              root_radius_s: "mlcrraysn7mW6xrBXSBF",
              root_radius_m: "dgV08FKVLZKFsucuiryn",
              root_radius_l: "S97_5dtzhpxo_amtfYRg",
              root_radius_xl: "nNBJnDHRlyLTniWosJhk",
              root_radius_xxxl: "zIMibMuH7wcqUoW7KH1B",
              root_radius_round: "uwk3hfWzB2VT7kE13SQk",
              root_size: "IlG7b1K0AD7E7AMx6F5p",
              root_size_default: "C_QGmfTz6UFX93vfPt6Z",
              root_size_xxxs: "eQt33MLDiQ6DRSuLaYEp",
              root_size_xxs: "oR11LfCBVqMbUJiAgknd",
              root_size_xs: "j1jXIVckFgZECecFzZMe",
              root_size_s: "WtFdWDF44egSVM_YiMUX",
              root_size_m: "Y2uqxoU7xa_AZ8FUCVOW",
              root_size_l: "SGYcNjvjmMsXeEVGUV2Z",
              root_icon_left: "kc5CjvU5hT9KEj0iTt3C",
              root_icon_right: "et24Jf7pT_X9Fvc7TznR",
              root_primary: "fXlFz1qMkliFUWOkHo8T",
              root_primary_default: "_eTRQi5ADZCUvUKMZqJU",
              ripple: "spMT3NcRD9Yb0ntNaNct",
              root_primary_outline: "fCUSh2B0Ye9kEvceE8zc",
              root_primary_text: "qlPp6CSQQEMVZPqtqLiQ",
              root_primary_withHover: "KZF6_4K1p_Y_GMIAxaAn",
              root_primary_withHover_default: "rWukOKAJh5Ga7JuIp62L",
              root_primary_withHover_outline: "fdwWCJKgUqml5wNqrRcN",
              root_primary_withHover_text: "IgYbZLnYjW0nMahgpkus",
              root_secondary: "_T4p_w41oaq6L4sztSdw",
              root_secondary_default: "iJVAJMgccD4vj4E4o068",
              root_secondary_outline: "pnM3iSP9keZOELI2oohr",
              root_secondary_text: "UDMYhpDjiAFT3xUx268O",
              root_secondary_withHover: "qUbrkhZIOVrvM0roV1QF",
              root_secondary_withHover_default: "nHWc2sto1C6Gm0Dpw_l0",
              root_secondary_withHover_outline: "i5WuBm5mfG0mflk_1jH_",
              root_secondary_withHover_text: "HbaqudSqu7Q3mv3zMPGr",
              root_plus: "ixLRsIJ2FvXO2k04n_QY",
              root_plus_default: "yRHwHzEGfDgRXGzYJqw2",
              root_plus_outline: "e777irPFmyQFFrURLF_U",
              root_plus_text: "vRqDhvmt3gt8TFp45_Zw",
              root_plus_withHover: "TZif6q3I2RwBEYXwK_iA",
              root_plus_withHover_default: "k3DhvmzpnM_Fb9oFdE4q",
              root_plus_withHover_outline: "RiDWYwGIxqbrUPR699DM",
              root_plus_withHover_text: "hC_mMCzWjkTn2j9xZzGc",
              root_accent: "jqD2jMT6n7F0WKyqwMsn",
              root_accent_default: "bDp0r9MtoYECZ8ObMoCh",
              root_accent_outline: "rXNyGp8NBAw2MUjACZNj",
              root_accent_text: "hmV4ERaXWAJc4uPLZL30",
              root_accent_withHover: "uKuxXu1N4TP5cWaEK5Ke",
              root_accent_withHover_default: "t_hequUaUgAMhFuxizLb",
              root_accent_withHover_outline: "Oy9sPFTxNTo1_E29U4aF",
              root_accent_withHover_text: "LcKRSd3DLoh7k60Oqox8",
              block: "BbCxxIjBGupN28bq2lSP",
              iconContainer: "NfB1qSw6DnoSwTr9I5mE",
              iconContainer_block: "cM0M40YHieFFCTYRgOZa",
              flexIcon: "WsKeF73pWotx9W1tWdYY",
              icon: "J9wTKytjOWG73QMoN5WP",
              icon_position_left: "elJfazUBui03YWZgHCbW",
              icon_position_right: "RBoEbyJKP5rEtLsXM1ji",
              icon_withButtonSize: "cE17_kCWJgx8kzQEkeVr",
            };
          },
          6161: (e, t, r) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = r(810),
              i = Symbol.for("react.element"),
              s = Symbol.for("react.fragment"),
              n = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              c = { key: !0, ref: !0, __self: !0, __source: !0 };
            function l(e, t, r) {
              var a,
                s = {},
                l = null,
                u = null;
              for (a in (void 0 !== r && (l = "" + r),
              void 0 !== t.key && (l = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                n.call(t, a) && !c.hasOwnProperty(a) && (s[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === s[a] && (s[a] = t[a]);
              return {
                $$typeof: i,
                type: e,
                key: l,
                ref: u,
                props: s,
                _owner: o.current,
              };
            }
            (t.Fragment = s), (t.jsx = l), (t.jsxs = l);
          },
          9541: (e, t, r) => {
            e.exports = r(6161);
          },
          9440: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.AVAILABLE_SIZES = t.DEFAULT_SIZE = void 0),
              (t.DEFAULT_SIZE = 100),
              (t.AVAILABLE_SIZES = [30, 50, 80, 100, 200, 300, 400, 600, 800]);
            let r = (e) => "https://".concat(e.replace(/^(https*:\/\/)/, ""));
            t.createAvatarUrl = (e, t, a) => {
              let i;
              return (
                (i =
                  "orig" === t
                    ? "orig"
                    : a
                      ? "m".concat(t, "x").concat(t)
                      : "".concat(t, "x").concat(t)),
                r(e.replace("%%", i))
              );
            };
          },
          8796: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, r) {
                let a = null != r ? r : e.currentTarget,
                  i = document.createElement("span"),
                  s = Math.max(a.clientWidth, a.clientHeight),
                  n = s / 2,
                  o = a.getBoundingClientRect(),
                  c =
                    0 === e.clientX
                      ? Math.round(o.width / 2)
                      : e.clientX - o.left,
                  l =
                    0 === e.clientY
                      ? Math.round(o.height / 2)
                      : e.clientY - o.top;
                (i.style.width = "".concat(s, "px")),
                  (i.style.height = "".concat(s, "px")),
                  (i.style.left =
                    0 === e.clientX ? "0px" : "".concat(c - n, "px")),
                  (i.style.top = "".concat(l - n, "px")),
                  i.classList.add(t);
                let u = a.getElementsByClassName(t)[0];
                u && u.remove(), a.insertBefore(i, a.firstChild);
              });
          },
          8216: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.createRipple = void 0);
            var a = r(8796);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return a.createRipple;
              },
            });
            var i = r(9440);
            Object.defineProperty(t, "createAvatarUrl", {
              enumerable: !0,
              get: function () {
                return i.createAvatarUrl;
              },
            });
          },
          8119: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Button = void 0);
            let i = r(9541),
              s = r(810),
              n = r(5881),
              o = r(8216),
              c = a(r(8635)),
              l = (e) => {
                let {
                    forwardRef: t,
                    isBlock: r,
                    iconPosition: a = "left",
                    children: l,
                    className: u,
                    color: d = "secondary",
                    flexIcon: h,
                    icon: f,
                    role: m,
                    onClick: g,
                    radius: p = "m",
                    size: y,
                    type: v = "button",
                    variant: E = "default",
                    withRipple: P = !0,
                    withHover: _ = !0,
                    withBorder: x = !1,
                    disabled: S,
                    iconClassName: T,
                    iconContainerClassName: b,
                    ...C
                  } = e,
                  k = (0, s.useId)(),
                  w = !s.Children.toArray(l).filter(Boolean).length,
                  R = "left" === a,
                  A = null;
                if (f) {
                  var I, O;
                  A = (0, s.cloneElement)(f, {
                    className: (0, n.clsx)(
                      c.default.icon,
                      {
                        [c.default["icon_position_".concat(a)]]: a && !w,
                        [c.default.icon_withButtonSize]: !(null ===
                          (I = f.props) || void 0 === I
                          ? void 0
                          : I.size),
                      },
                      null === (O = f.props) || void 0 === O
                        ? void 0
                        : O.className,
                      T,
                    ),
                    key: k,
                  });
                }
                let L = (0, s.useCallback)(
                  (e) => {
                    P && (0, o.createRipple)(e, c.default.ripple),
                      null == g || g(e);
                  },
                  [g, P],
                );
                return (0, i.jsx)("button", {
                  ref: t,
                  className: (0, n.clsx)(
                    c.default.root,
                    c.default["root_".concat(d, "_").concat(E)],
                    c.default["root_radius_".concat(p)],
                    c.default.root_size,
                    {
                      [c.default["root_".concat(d, "_withHover_").concat(E)]]:
                        _ && !S,
                      [c.default["root_size_".concat(y)]]: y,
                      [c.default.root_withoutBorder]: !x,
                      [c.default.block]: r,
                      [c.default.flexIcon]: h,
                      [c.default.iconOnly]: w,
                      [c.default.root_icon_left]: f && !w && R,
                      [c.default.root_icon_right]: f && !w && !R,
                    },
                    u,
                  ),
                  type: v,
                  role: m,
                  onClick: L,
                  ...C,
                  disabled: S,
                  children: f
                    ? (0, i.jsxs)("span", {
                        className: (0, n.clsx)(
                          c.default.iconContainer,
                          { [c.default.iconContainer_block]: r },
                          b,
                        ),
                        children: [R && A, !w && l, !R && A],
                      })
                    : l,
                });
              };
            t.Button = (0, s.forwardRef)((e, t) =>
              (0, i.jsx)(l, { forwardRef: t, ...e }),
            );
          },
          810: (e) => {
            e.exports = i || (i = r.t(s, 2));
          },
        },
        o = {};
      function c(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var r = (o[e] = { exports: {} });
        return n[e].call(r.exports, r, r.exports, c), r.exports;
      }
      (c.d = (e, t) => {
        for (var r in t)
          c.o(t, r) &&
            !c.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (c.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var l = {};
      Object.defineProperty(l, "__esModule", { value: !0 }),
        (l.Button = void 0),
        (a = c(8119)),
        Object.defineProperty(l, "Button", {
          enumerable: !0,
          get: function () {
            return a.Button;
          },
        });
      var u = l.Button;
      l.__esModule;
    },
    28852: function (e, t, r) {
      "use strict";
      r.d(t, {
        J: function () {
          return u;
        },
      });
      var a,
        i,
        s = r(98639),
        n = {
          5881: (e, t, r) => {
            function a() {
              for (var e, t, r = 0, a = ""; r < arguments.length; )
                (e = arguments[r++]) &&
                  (t = (function e(t) {
                    var r,
                      a,
                      i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (a = e(t[r])) && (i && (i += " "), (i += a));
                      else for (r in t) t[r] && (i && (i += " "), (i += r));
                    }
                    return i;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            r.r(t), r.d(t, { clsx: () => a, default: () => i });
            let i = a;
          },
          5929: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root_size_xxxs: "Rkdd2vKC_3xa1eUdRdHP",
              root_size_xxs: "l3tE1hAMmBj2aoPPwU08",
              root_size_xs: "UwnL5AJBMMAp6NwMDdZk",
              root_size_s: "DzJFnuf7XgdkFh28JAsM",
              root_size_m: "o_v2ds2BaqtzAsRuCVjw",
              root_size_l: "YjRa1ZjM_lXFlrfS7jcu",
              root_size_xl: "Seq0GowcqQmiA9LdLP_g",
              root_size_xxl: "mfy69_BvBIamD0e22rCQ",
            };
          },
          6161: (e, t, r) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = r(810),
              i = Symbol.for("react.element"),
              s = Symbol.for("react.fragment"),
              n = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              c = { key: !0, ref: !0, __self: !0, __source: !0 };
            function l(e, t, r) {
              var a,
                s = {},
                l = null,
                u = null;
              for (a in (void 0 !== r && (l = "" + r),
              void 0 !== t.key && (l = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                n.call(t, a) && !c.hasOwnProperty(a) && (s[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === s[a] && (s[a] = t[a]);
              return {
                $$typeof: i,
                type: e,
                key: l,
                ref: u,
                props: s,
                _owner: o.current,
              };
            }
            (t.Fragment = s), (t.jsx = l), (t.jsxs = l);
          },
          9541: (e, t, r) => {
            e.exports = r(6161);
          },
          5695: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "add", xlinkHref: "#add" }),
              ]);
            });
          },
          9800: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "addToPlaylist",
                  xlinkHref: "#addToPlaylist",
                }),
              ]);
            });
          },
          2751: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "adult", xlinkHref: "#adult" }),
              ]);
            });
          },
          383: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "album", xlinkHref: "#album" }),
              ]);
            });
          },
          758: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "arrowDown",
                  xlinkHref: "#arrowDown",
                }),
              ]);
            });
          },
          9466: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "arrowLeft",
                  xlinkHref: "#arrowLeft",
                }),
              ]);
            });
          },
          9032: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "arrowRight",
                  xlinkHref: "#arrowRight",
                }),
              ]);
            });
          },
          7294: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "artist", xlinkHref: "#artist" }),
              ]);
            });
          },
          8409: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "attention",
                  xlinkHref: "#attention",
                }),
              ]);
            });
          },
          1261: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "bookmateBadge",
                  xlinkHref: "#bookmateBadge",
                }),
              ]);
            });
          },
          8557: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "bookmateLogo",
                  xlinkHref: "#bookmateLogo",
                }),
              ]);
            });
          },
          1478: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "bucket", xlinkHref: "#bucket" }),
              ]);
            });
          },
          849: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "cast", xlinkHref: "#cast" }),
              ]);
            });
          },
          3781: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "chain", xlinkHref: "#chain" }),
              ]);
            });
          },
          5951: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "chartDown",
                  xlinkHref: "#chartDown",
                }),
              ]);
            });
          },
          7203: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "chartNew",
                  xlinkHref: "#chartNew",
                }),
              ]);
            });
          },
          8688: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "chartSame",
                  xlinkHref: "#chartSame",
                }),
              ]);
            });
          },
          4653: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "chartUp",
                  xlinkHref: "#chartUp",
                }),
              ]);
            });
          },
          2966: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "check", xlinkHref: "#check" }),
              ]);
            });
          },
          5849: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "close", xlinkHref: "#close" }),
              ]);
            });
          },
          32: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "collapse",
                  xlinkHref: "#collapse",
                }),
              ]);
            });
          },
          5972: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "collections",
                  xlinkHref: "#collections",
                }),
              ]);
            });
          },
          6631: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "collections_selected",
                  xlinkHref: "#collections_selected",
                }),
              ]);
            });
          },
          2703: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "dislike",
                  xlinkHref: "#dislike",
                }),
              ]);
            });
          },
          3514: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "disliked",
                  xlinkHref: "#disliked",
                }),
              ]);
            });
          },
          957: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "donation",
                  xlinkHref: "#donation",
                }),
              ]);
            });
          },
          3342: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "dragDots",
                  xlinkHref: "#dragDots",
                }),
              ]);
            });
          },
          7431: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "explicit",
                  xlinkHref: "#explicit",
                }),
              ]);
            });
          },
          2900: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "filter", xlinkHref: "#filter" }),
              ]);
            });
          },
          7299: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "fullscreen",
                  xlinkHref: "#fullscreen",
                }),
              ]);
            });
          },
          2272: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "history",
                  xlinkHref: "#history",
                }),
              ]);
            });
          },
          533: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "home", xlinkHref: "#home" }),
              ]);
            });
          },
          8005: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "home_selected",
                  xlinkHref: "#home_selected",
                }),
              ]);
            });
          },
          3687: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "info", xlinkHref: "#info" }),
              ]);
            });
          },
          7261: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "kids", xlinkHref: "#kids" }),
              ]);
            });
          },
          5494: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "lightning",
                  xlinkHref: "#lightning",
                }),
              ]);
            });
          },
          6334: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "like", xlinkHref: "#like" }),
              ]);
            });
          },
          4973: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "likeVariant",
                  xlinkHref: "#likeVariant",
                }),
              ]);
            });
          },
          9165: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "liked", xlinkHref: "#liked" }),
              ]);
            });
          },
          1936: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "likedVariant",
                  xlinkHref: "#likedVariant",
                }),
              ]);
            });
          },
          5517: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "link", xlinkHref: "#link" }),
              ]);
            });
          },
          6685: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "lock", xlinkHref: "#lock" }),
              ]);
            });
          },
          8274: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "lyrics", xlinkHref: "#lyrics" }),
              ]);
            });
          },
          6094: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "menuArrow",
                  xlinkHref: "#menuArrow",
                }),
              ]);
            });
          },
          3974: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "more", xlinkHref: "#more" }),
              ]);
            });
          },
          4103: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "musicEn",
                  xlinkHref: "#musicEn",
                }),
              ]);
            });
          },
          2502: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "musicLogo",
                  xlinkHref: "#musicLogo",
                }),
              ]);
            });
          },
          9923: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "musicRu",
                  xlinkHref: "#musicRu",
                }),
              ]);
            });
          },
          9473: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "next", xlinkHref: "#next" }),
              ]);
            });
          },
          5985: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "non_music",
                  xlinkHref: "#non_music",
                }),
              ]);
            });
          },
          8749: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "note", xlinkHref: "#note" }),
              ]);
            });
          },
          4947: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "pause", xlinkHref: "#pause" }),
              ]);
            });
          },
          243: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "pauseVibe",
                  xlinkHref: "#pauseVibe",
                }),
              ]);
            });
          },
          1687: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "pause_filled",
                  xlinkHref: "#pause_filled",
                }),
              ]);
            });
          },
          2761: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "pencil", xlinkHref: "#pencil" }),
              ]);
            });
          },
          9817: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "pin", xlinkHref: "#pin" }),
              ]);
            });
          },
          6515: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "pin_filled",
                  xlinkHref: "#pin_filled",
                }),
              ]);
            });
          },
          7471: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "play", xlinkHref: "#play" }),
              ]);
            });
          },
          6684: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "playVibe",
                  xlinkHref: "#playVibe",
                }),
              ]);
            });
          },
          9319: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "play_filled",
                  xlinkHref: "#play_filled",
                }),
              ]);
            });
          },
          8602: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "playlist",
                  xlinkHref: "#playlist",
                }),
              ]);
            });
          },
          8861: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "plus", xlinkHref: "#plus" }),
              ]);
            });
          },
          1179: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "plusOutlined",
                  xlinkHref: "#plusOutlined",
                }),
              ]);
            });
          },
          6532: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "podcasts",
                  xlinkHref: "#podcasts",
                }),
              ]);
            });
          },
          7918: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "previous",
                  xlinkHref: "#previous",
                }),
              ]);
            });
          },
          1739: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "queue", xlinkHref: "#queue" }),
              ]);
            });
          },
          7692: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "repeat", xlinkHref: "#repeat" }),
              ]);
            });
          },
          7881: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "repeat_one",
                  xlinkHref: "#repeat_one",
                }),
              ]);
            });
          },
          2339: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "reset", xlinkHref: "#reset" }),
              ]);
            });
          },
          7954: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "search", xlinkHref: "#search" }),
              ]);
            });
          },
          6178: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "search_selected",
                  xlinkHref: "#search_selected",
                }),
              ]);
            });
          },
          200: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "settings",
                  xlinkHref: "#settings",
                }),
              ]);
            });
          },
          9109: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "share", xlinkHref: "#share" }),
              ]);
            });
          },
          4521: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "shuffle",
                  xlinkHref: "#shuffle",
                }),
              ]);
            });
          },
          3013: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "speed_1_25x",
                  xlinkHref: "#speed_1_25x",
                }),
              ]);
            });
          },
          1937: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "speed_1_5x",
                  xlinkHref: "#speed_1_5x",
                }),
              ]);
            });
          },
          4576: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "speed_1_75x",
                  xlinkHref: "#speed_1_75x",
                }),
              ]);
            });
          },
          7163: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "speed_1x",
                  xlinkHref: "#speed_1x",
                }),
              ]);
            });
          },
          4717: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "speed_2x",
                  xlinkHref: "#speed_2x",
                }),
              ]);
            });
          },
          9298: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "syncLyrics",
                  xlinkHref: "#syncLyrics",
                }),
              ]);
            });
          },
          6539: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "trailer",
                  xlinkHref: "#trailer",
                }),
              ]);
            });
          },
          6029: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "unavailable",
                  xlinkHref: "#unavailable",
                }),
              ]);
            });
          },
          3314: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "uncollapse",
                  xlinkHref: "#uncollapse",
                }),
              ]);
            });
          },
          5312: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "unpin", xlinkHref: "#unpin" }),
              ]);
            });
          },
          3993: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "users", xlinkHref: "#users" }),
              ]);
            });
          },
          5730: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "vibe", xlinkHref: "#vibe" }),
              ]);
            });
          },
          631: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", { key: "volume", xlinkHref: "#volume" }),
              ]);
            });
          },
          4689: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "volumeOff",
                  xlinkHref: "#volumeOff",
                }),
              ]);
            });
          },
          9348: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "yandexEn",
                  xlinkHref: "#yandexEn",
                }),
              ]);
            });
          },
          1677: (e, t, r) => {
            var a = r(810);
            e.exports = a.forwardRef(function (e, t) {
              return a.createElement("svg", Object.assign({}, e, { ref: t }), [
                a.createElement("use", {
                  key: "yandexRu",
                  xlinkHref: "#yandexRu",
                }),
              ]);
            });
          },
          5189: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Icon = t.IconComponent = void 0);
            let i = r(9541),
              s = r(810),
              n = r(5881),
              o = r(5151),
              c = r(4905),
              l = a(r(5929));
            (t.IconComponent = (e) => {
              let {
                  "aria-label": t,
                  className: r,
                  focusable: a = !1,
                  variant: s,
                  size: u,
                  forwardRef: d,
                  ...h
                } = e,
                f = o.iconsCollection[s];
              return (0, i.jsx)(f, {
                className: (0, n.clsx)(
                  l.default.root,
                  r,
                  l.default["root_size_".concat(u)],
                ),
                focusable: a,
                "aria-label": t,
                ...h,
                "aria-hidden": !t,
                ref: d,
                style: { ...(h.style || {}), padding: c.paddings[s] },
              });
            }),
              (t.Icon = (0, s.forwardRef)((e, r) =>
                (0, i.jsx)(t.IconComponent, { forwardRef: r, ...e }),
              ));
          },
          5151: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.iconsCollection = void 0);
            let i = a(r(5695)),
              s = a(r(9800)),
              n = a(r(2751)),
              o = a(r(383)),
              c = a(r(758)),
              l = a(r(9466)),
              u = a(r(9032)),
              d = a(r(7294)),
              h = a(r(8409)),
              f = a(r(1261)),
              m = a(r(8557)),
              g = a(r(1478)),
              p = a(r(849)),
              y = a(r(3781)),
              v = a(r(5951)),
              E = a(r(7203)),
              P = a(r(8688)),
              _ = a(r(4653)),
              x = a(r(2966)),
              S = a(r(5849)),
              T = a(r(32)),
              b = a(r(6631)),
              C = a(r(5972)),
              k = a(r(2703)),
              w = a(r(3514)),
              R = a(r(3342)),
              A = a(r(957)),
              I = a(r(7431)),
              O = a(r(2900)),
              L = a(r(7299)),
              N = a(r(3687)),
              U = a(r(2272)),
              D = a(r(8005)),
              F = a(r(533)),
              H = a(r(7261)),
              M = a(r(5494)),
              j = a(r(6334)),
              W = a(r(9165)),
              B = a(r(1936)),
              q = a(r(4973)),
              V = a(r(5517)),
              Y = a(r(6685)),
              K = a(r(8274)),
              G = a(r(6094)),
              z = a(r(3974)),
              Q = a(r(2502)),
              X = a(r(4103)),
              Z = a(r(9923)),
              J = a(r(9473)),
              $ = a(r(5985)),
              ee = a(r(8749)),
              et = a(r(1687)),
              er = a(r(4947)),
              ea = a(r(243)),
              ei = a(r(2761)),
              es = a(r(6515)),
              en = a(r(9817)),
              eo = a(r(9319)),
              ec = a(r(7471)),
              el = a(r(8602)),
              eu = a(r(6684)),
              ed = a(r(8861)),
              eh = a(r(1179)),
              ef = a(r(6532)),
              em = a(r(7918)),
              eg = a(r(1739)),
              ep = a(r(7881)),
              ey = a(r(7692)),
              ev = a(r(2339)),
              eE = a(r(7954)),
              eP = a(r(6178)),
              e_ = a(r(200)),
              ex = a(r(9109)),
              eS = a(r(4521)),
              eT = a(r(7163)),
              eb = a(r(3013)),
              eC = a(r(1937)),
              ek = a(r(4576)),
              ew = a(r(4717)),
              eR = a(r(9298)),
              eA = a(r(6539)),
              eI = a(r(6029)),
              eO = a(r(3314)),
              eL = a(r(5312)),
              eN = a(r(3993)),
              eU = a(r(5730)),
              eD = a(r(631)),
              eF = a(r(4689)),
              eH = a(r(1677)),
              eM = a(r(9348));
            t.iconsCollection = {
              add: i.default,
              addToPlaylist: s.default,
              adult: n.default,
              album: o.default,
              arrowDown: c.default,
              arrowLeft: l.default,
              arrowRight: u.default,
              artist: d.default,
              attention: h.default,
              bookmateBadge: f.default,
              bookmateLogo: m.default,
              bucket: g.default,
              cast: p.default,
              chain: y.default,
              chartDown: v.default,
              chartNew: E.default,
              chartSame: P.default,
              chartUp: _.default,
              check: x.default,
              close: S.default,
              collapse: T.default,
              collections_selected: b.default,
              collections: C.default,
              dislike: k.default,
              disliked: w.default,
              dragDots: R.default,
              donation: A.default,
              explicit: I.default,
              filter: O.default,
              fullscreen: L.default,
              history: U.default,
              home_selected: D.default,
              home: F.default,
              info: N.default,
              kids: H.default,
              lightning: M.default,
              like: j.default,
              liked: W.default,
              likedVariant: B.default,
              likeVariant: q.default,
              link: V.default,
              lock: Y.default,
              lyrics: K.default,
              menuArrow: G.default,
              more: z.default,
              musicLogo: Q.default,
              musicEn: X.default,
              musicRu: Z.default,
              next: J.default,
              non_music: $.default,
              note: ee.default,
              pause_filled: et.default,
              pause: er.default,
              pauseVibe: ea.default,
              pencil: ei.default,
              pin_filled: es.default,
              pin: en.default,
              play_filled: eo.default,
              play: ec.default,
              playlist: el.default,
              playVibe: eu.default,
              plus: ed.default,
              plusOutlined: eh.default,
              podcasts: ef.default,
              previous: em.default,
              queue: eg.default,
              repeat_one: ep.default,
              repeat: ey.default,
              reset: ev.default,
              search: eE.default,
              search_selected: eP.default,
              settings: e_.default,
              share: ex.default,
              shuffle: eS.default,
              speed_1x: eT.default,
              speed_1_25x: eb.default,
              speed_1_5x: eC.default,
              speed_1_75x: ek.default,
              speed_2x: ew.default,
              syncLyrics: eR.default,
              trailer: eA.default,
              unavailable: eI.default,
              uncollapse: eO.default,
              unpin: eL.default,
              users: eN.default,
              vibe: eU.default,
              volume: eD.default,
              volumeOff: eF.default,
              yandexRu: eH.default,
              yandexEn: eM.default,
            };
          },
          4905: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.paddings = void 0),
              (t.paddings = {
                add: "var(--ym-icon-padding, 2px)",
                addToPlaylist: "var(--ym-icon-padding, 2px, 2px, 2px, 2px)",
                adult: "var(--ym-icon-padding)",
                album: "var(--ym-icon-padding, 1px)",
                arrowDown: "var(--ym-icon-padding, 8px 4px 5px)",
                arrowLeft: "var(--ym-icon-padding, 5px 8px 4px 6px)",
                arrowRight: "var(--ym-icon-padding, 5px 7px 4px 7px)",
                artist: "var(--ym-icon-padding, 1px 0)",
                attention: "var(--ym-icon-padding, 2px)",
                bookmateBadge: "var(--ym-icon-padding)",
                bookmateLogo: "var(--ym-icon-padding)",
                bucket: "var(--ym-icon-padding, 1px)",
                cast: "var(--ym-icon-padding, 3px 1px 2px 1px)",
                chain: "var(--ym-icon-padding, 2px)",
                chartDown: "var(--ym-icon-padding, 7px 4px 6px 4px)",
                chartNew: "var(--ym-icon-padding)",
                chartSame: "var(--ym-icon-padding, 8px 5px 9px 6px)",
                chartUp: "var(--ym-icon-padding, 6px 4px 6px 5px)",
                check: "var(--ym-icon-padding, 4px 0 4px 4px)",
                close: "var(--ym-icon-padding, 6px)",
                collapse: "var(--ym-icon-padding)",
                collections_selected: "var(--ym-icon-padding, 5px 4px 5px 5px)",
                collections: "var(--ym-icon-padding, 5px 4px 5px 5px)",
                dislike: "var(--ym-icon-padding, 2px 1px 3px 1px)",
                disliked: "var(--ym-icon-padding, 2px 1px 3px 1px)",
                dragDots: "var(--ym-icon-padding)",
                donation: "var(--ym-icon-padding, 0px 1px 0px 0px)",
                explicit: "var(--ym-icon-padding)",
                filter: "var(--ym-icon-padding, 6px 4px 6px 4px)",
                fullscreen: "var(--ym-icon-padding, 4px)",
                history: "var(--ym-icon-padding, 2px)",
                home_selected: "var(--ym-icon-padding, 4px 5px 5px 4px)",
                home: "var(--ym-icon-padding, 4px 5px 5px 4px)",
                info: "var(--ym-icon-padding)",
                kids: "var(--ym-icon-padding, 6px)",
                lightning: "var(--ym-icon-padding, 3px 6px 3px 6px)",
                like: "var(--ym-icon-padding, 3px 2px 3px 2px)",
                liked: "var(--ym-icon-padding, 2px 1px 2px 2px)",
                likedVariant: "var(--ym-icon-padding, 5px 6px 6px 0)",
                likeVariant: "var(--ym-icon-padding, 5px 6px 6px 0)",
                link: "var(--ym-icon-padding)",
                lock: "var(--ym-icon-padding, 2px)",
                lyrics: "var(--ym-icon-padding, 3px 2px)",
                menuArrow: "var(--ym-icon-padding, 5px 7px 4px 7px)",
                more: "var(--ym-icon-padding, 8px 2px 8px 1px)",
                musicLogo: "var(--ym-icon-padding, 0)",
                musicEn: "var(--ym-icon-padding, 0)",
                musicRu: "var(--ym-icon-padding, 0)",
                next: "var(--ym-icon-padding, 4px)",
                non_music: "var(--ym-icon-padding, 4px 5px 5px 4px)",
                note: "var(--ym-icon-padding, 4px 7px 2px 5px)",
                pause_filled: "var(--ym-icon-padding)",
                pause: "var(--ym-icon-padding, 4px 6px)",
                pauseVibe: "var(--ym-icon-padding, 2px 4px 4px 8px)",
                pencil: "var(--ym-icon-padding, 4px)",
                pin_filled: "var(--ym-icon-padding, 2px 3px)",
                pin: "var(--ym-icon-padding, 2px 3px)",
                play_filled: "var(--ym-icon-padding)",
                play: "var(--ym-icon-padding, 3px 2px 3px 7px)",
                playlist: "var(--ym-icon-padding, 2px)",
                playVibe: "var(--ym-icon-padding, 0px 0px 1px 7px)",
                plus: "var(--ym-icon-padding, 2px 2px 3px 3px)",
                plusOutlined: "var(--ym-icon-padding, 4px 4px 4px 5px)",
                podcasts: "var(--ym-icon-padding, 6px)",
                previous: "var(--ym-icon-padding, 4px)",
                queue: "var(--ym-icon-padding, 5px 3px)",
                repeat_one: "var(--ym-icon-padding, 3px 2px 3px 2px)",
                repeat: "var(--ym-icon-padding, 3px 2px 3px 2px)",
                reset: "var(--ym-icon-padding, 2px)",
                search: "var(--ym-icon-padding, 5px)",
                search_selected: "var(--ym-icon-padding, 5px)",
                settings: "var(--ym-icon-padding, 2px)",
                share: "var(--ym-icon-padding, 2px 1px 2px 1px)",
                shuffle: "var(--ym-icon-padding, 3px 1px 3px 2px)",
                speed_1x: "var(--ym-icon-padding)",
                speed_1_25x: "var(--ym-icon-padding)",
                speed_1_5x: "var(--ym-icon-padding)",
                speed_1_75x: "var(--ym-icon-padding)",
                speed_2x: "var(--ym-icon-padding)",
                syncLyrics: "var(--ym-icon-padding, 3px 2px 4px 2px)",
                trailer: "var(--ym-icon-padding, 2px 1px)",
                unavailable: "var(--ym-icon-padding, 2px)",
                uncollapse: "var(--ym-icon-padding)",
                unpin: "var(--ym-icon-padding, 2px 3px)",
                users: "var(--ym-icon-padding, 0)",
                vibe: "var(--ym-icon-padding, 1px 1px 2px 1px)",
                volume: "var(--ym-icon-padding, 4px 2px 3px 2px)",
                volumeOff: "var(--ym-icon-padding, 2.8px 2px 1.8px 2px)",
                yandexRu: "var(--ym-icon-padding)",
                yandexEn: "var(--ym-icon-padding)",
              });
          },
          810: (e) => {
            e.exports = i || (i = r.t(s, 2));
          },
        },
        o = {};
      function c(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var r = (o[e] = { exports: {} });
        return n[e].call(r.exports, r, r.exports, c), r.exports;
      }
      (c.d = (e, t) => {
        for (var r in t)
          c.o(t, r) &&
            !c.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (c.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var l = {};
      Object.defineProperty(l, "__esModule", { value: !0 }),
        (l.Icon = void 0),
        (a = c(5189)),
        Object.defineProperty(l, "Icon", {
          enumerable: !0,
          get: function () {
            return a.Icon;
          },
        });
      var u = l.Icon;
      l.__esModule;
    },
    69863: function (e, t, r) {
      "use strict";
      r.d(t, {
        P: function () {
          return d;
        },
        dismiss: function () {
          return h;
        },
        notification: function () {
          return f;
        },
      });
      var a,
        i,
        s,
        n = r(98639),
        o = {
          5881: (e, t, r) => {
            function a() {
              for (var e, t, r = 0, a = ""; r < arguments.length; )
                (e = arguments[r++]) &&
                  (t = (function e(t) {
                    var r,
                      a,
                      i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (a = e(t[r])) && (i && (i += " "), (i += a));
                      else for (r in t) t[r] && (i && (i += " "), (i += r));
                    }
                    return i;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            r.r(t), r.d(t, { clsx: () => a, default: () => i });
            let i = a;
          },
          7891: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root: "nc4M2_N9M5ElqO2JOOq7",
              important: "Brf6Ike_kAhLsPhNEEmk",
              body: "prAUKw3AUngspVHmnd5F",
              toast: "PeivVKR1FPSKq0eXZVTH",
            };
          },
          1718: (e, t, r) => {
            r.r(t);
          },
          6289: (e, t, r) => {
            var a = r(810),
              i = r(5881);
            function s(e) {
              return e && "object" == typeof e && "default" in e
                ? e
                : { default: e };
            }
            var n = s(a),
              o = s(i);
            let c = (e) => "number" == typeof e && !isNaN(e),
              l = (e) => "string" == typeof e,
              u = (e) => "function" == typeof e,
              d = (e) => (l(e) || u(e) ? e : null),
              h = (e) => a.isValidElement(e) || l(e) || u(e) || c(e);
            function f(e, t, r) {
              void 0 === r && (r = 300);
              let { scrollHeight: a, style: i } = e;
              requestAnimationFrame(() => {
                (i.minHeight = "initial"),
                  (i.height = a + "px"),
                  (i.transition = "all ".concat(r, "ms")),
                  requestAnimationFrame(() => {
                    (i.height = "0"),
                      (i.padding = "0"),
                      (i.margin = "0"),
                      setTimeout(t, r);
                  });
              });
            }
            function m(e) {
              let {
                enter: t,
                exit: r,
                appendPosition: i = !1,
                collapse: s = !0,
                collapseDuration: o = 300,
              } = e;
              return function (e) {
                let {
                    children: c,
                    position: l,
                    preventExitTransition: u,
                    done: d,
                    nodeRef: h,
                    isIn: m,
                  } = e,
                  g = i ? "".concat(t, "--").concat(l) : t,
                  p = i ? "".concat(r, "--").concat(l) : r,
                  y = a.useRef(0);
                return (
                  a.useLayoutEffect(() => {
                    let e = h.current,
                      t = g.split(" "),
                      r = (a) => {
                        a.target === h.current &&
                          (e.dispatchEvent(new Event("d")),
                          e.removeEventListener("animationend", r),
                          e.removeEventListener("animationcancel", r),
                          0 === y.current &&
                            "animationcancel" !== a.type &&
                            e.classList.remove(...t));
                      };
                    e.classList.add(...t),
                      e.addEventListener("animationend", r),
                      e.addEventListener("animationcancel", r);
                  }, []),
                  a.useEffect(() => {
                    let e = h.current,
                      t = () => {
                        e.removeEventListener("animationend", t),
                          s ? f(e, d, o) : d();
                      };
                    m ||
                      (u
                        ? t()
                        : ((y.current = 1),
                          (e.className += " ".concat(p)),
                          e.addEventListener("animationend", t)));
                  }, [m]),
                  n.default.createElement(n.default.Fragment, null, c)
                );
              };
            }
            function g(e, t) {
              return null != e
                ? {
                    content: e.content,
                    containerId: e.props.containerId,
                    id: e.props.toastId,
                    theme: e.props.theme,
                    type: e.props.type,
                    data: e.props.data || {},
                    isLoading: e.props.isLoading,
                    icon: e.props.icon,
                    status: t,
                  }
                : {};
            }
            let p = {
                list: new Map(),
                emitQueue: new Map(),
                on(e, t) {
                  return (
                    this.list.has(e) || this.list.set(e, []),
                    this.list.get(e).push(t),
                    this
                  );
                },
                off(e, t) {
                  if (t) {
                    let r = this.list.get(e).filter((e) => e !== t);
                    return this.list.set(e, r), this;
                  }
                  return this.list.delete(e), this;
                },
                cancelEmit(e) {
                  let t = this.emitQueue.get(e);
                  return (
                    t && (t.forEach(clearTimeout), this.emitQueue.delete(e)),
                    this
                  );
                },
                emit(e) {
                  this.list.has(e) &&
                    this.list.get(e).forEach((t) => {
                      let r = setTimeout(() => {
                        t(...[].slice.call(arguments, 1));
                      }, 0);
                      this.emitQueue.has(e) || this.emitQueue.set(e, []),
                        this.emitQueue.get(e).push(r);
                    });
                },
              },
              y = (e) => {
                let { theme: t, type: r, ...a } = e;
                return n.default.createElement("svg", {
                  viewBox: "0 0 24 24",
                  width: "100%",
                  height: "100%",
                  fill:
                    "colored" === t
                      ? "currentColor"
                      : "var(--toastify-icon-color-".concat(r, ")"),
                  ...a,
                });
              },
              v = {
                info: function (e) {
                  return n.default.createElement(
                    y,
                    { ...e },
                    n.default.createElement("path", {
                      d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
                    }),
                  );
                },
                warning: function (e) {
                  return n.default.createElement(
                    y,
                    { ...e },
                    n.default.createElement("path", {
                      d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
                    }),
                  );
                },
                success: function (e) {
                  return n.default.createElement(
                    y,
                    { ...e },
                    n.default.createElement("path", {
                      d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
                    }),
                  );
                },
                error: function (e) {
                  return n.default.createElement(
                    y,
                    { ...e },
                    n.default.createElement("path", {
                      d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
                    }),
                  );
                },
                spinner: function () {
                  return n.default.createElement("div", {
                    className: "Toastify__spinner",
                  });
                },
              };
            function E(e) {
              let [, t] = a.useReducer((e) => e + 1, 0),
                [r, i] = a.useState([]),
                s = a.useRef(null),
                n = a.useRef(new Map()).current,
                o = (e) => -1 !== r.indexOf(e),
                f = a.useRef({
                  toastKey: 1,
                  displayedToast: 0,
                  count: 0,
                  queue: [],
                  props: e,
                  containerId: null,
                  isToastActive: o,
                  getToast: (e) => n.get(e),
                }).current;
              function m(e) {
                let { containerId: t } = e,
                  { limit: r } = f.props;
                !r ||
                  (t && f.containerId !== t) ||
                  ((f.count -= f.queue.length), (f.queue = []));
              }
              function y(e) {
                i((t) => (null == e ? [] : t.filter((t) => t !== e)));
              }
              function E() {
                let {
                  toastContent: e,
                  toastProps: t,
                  staleId: r,
                } = f.queue.shift();
                _(e, t, r);
              }
              function P(e, r) {
                var i, o;
                let { delay: m, staleId: P, ...x } = r;
                if (
                  !h(e) ||
                  !s.current ||
                  (f.props.enableMultiContainer &&
                    x.containerId !== f.props.containerId) ||
                  (n.has(x.toastId) && null == x.updateId)
                )
                  return;
                let { toastId: S, updateId: T, data: b } = x,
                  { props: C } = f,
                  k = () => y(S),
                  w = null == T;
                w && f.count++;
                let R = {
                  ...C,
                  style: C.toastStyle,
                  key: f.toastKey++,
                  ...Object.fromEntries(
                    Object.entries(x).filter((e) => {
                      let [t, r] = e;
                      return null != r;
                    }),
                  ),
                  toastId: S,
                  updateId: T,
                  data: b,
                  closeToast: k,
                  isIn: !1,
                  className: d(x.className || C.toastClassName),
                  bodyClassName: d(x.bodyClassName || C.bodyClassName),
                  progressClassName: d(
                    x.progressClassName || C.progressClassName,
                  ),
                  autoClose:
                    !x.isLoading &&
                    ((i = x.autoClose),
                    (o = C.autoClose),
                    !1 === i || (c(i) && i > 0) ? i : o),
                  deleteToast() {
                    let e = g(n.get(S), "removed");
                    n.delete(S), p.emit(4, e);
                    let r = f.queue.length;
                    if (
                      ((f.count =
                        null == S ? f.count - f.displayedToast : f.count - 1),
                      f.count < 0 && (f.count = 0),
                      r > 0)
                    ) {
                      let e = null == S ? f.props.limit : 1;
                      if (1 === r || 1 === e) f.displayedToast++, E();
                      else {
                        let t = e > r ? r : e;
                        f.displayedToast = t;
                        for (let e = 0; e < t; e++) E();
                      }
                    } else t();
                  },
                };
                (R.iconOut = (function (e) {
                  let { theme: t, type: r, isLoading: i, icon: s } = e,
                    n = null,
                    o = { theme: t, type: r };
                  return (
                    !1 === s ||
                      (u(s)
                        ? (n = s(o))
                        : a.isValidElement(s)
                          ? (n = a.cloneElement(s, o))
                          : l(s) || c(s)
                            ? (n = s)
                            : i
                              ? (n = v.spinner())
                              : r in v && (n = v[r](o))),
                    n
                  );
                })(R)),
                  u(x.onOpen) && (R.onOpen = x.onOpen),
                  u(x.onClose) && (R.onClose = x.onClose),
                  (R.closeButton = C.closeButton),
                  !1 === x.closeButton || h(x.closeButton)
                    ? (R.closeButton = x.closeButton)
                    : !0 === x.closeButton &&
                      (R.closeButton = !h(C.closeButton) || C.closeButton);
                let A = e;
                a.isValidElement(e) && !l(e.type)
                  ? (A = a.cloneElement(e, {
                      closeToast: k,
                      toastProps: R,
                      data: b,
                    }))
                  : u(e) && (A = e({ closeToast: k, toastProps: R, data: b })),
                  C.limit && C.limit > 0 && f.count > C.limit && w
                    ? f.queue.push({
                        toastContent: A,
                        toastProps: R,
                        staleId: P,
                      })
                    : c(m)
                      ? setTimeout(() => {
                          _(A, R, P);
                        }, m)
                      : _(A, R, P);
              }
              function _(e, t, r) {
                let { toastId: a } = t;
                r && n.delete(r);
                let s = { content: e, props: t };
                n.set(a, s),
                  i((e) => [...e, a].filter((e) => e !== r)),
                  p.emit(
                    4,
                    g(s, null == s.props.updateId ? "added" : "updated"),
                  );
              }
              return (
                a.useEffect(
                  () => (
                    (f.containerId = e.containerId),
                    p
                      .cancelEmit(3)
                      .on(0, P)
                      .on(1, (e) => s.current && y(e))
                      .on(5, m)
                      .emit(2, f),
                    () => {
                      n.clear(), p.emit(3, f);
                    }
                  ),
                  [],
                ),
                a.useEffect(() => {
                  (f.props = e),
                    (f.isToastActive = o),
                    (f.displayedToast = r.length);
                }),
                {
                  getToastToRender: function (t) {
                    let r = new Map(),
                      a = Array.from(n.values());
                    return (
                      e.newestOnTop && a.reverse(),
                      a.forEach((e) => {
                        let { position: t } = e.props;
                        r.has(t) || r.set(t, []), r.get(t).push(e);
                      }),
                      Array.from(r, (e) => t(e[0], e[1]))
                    );
                  },
                  containerRef: s,
                  isToastActive: o,
                }
              );
            }
            function P(e) {
              return e.targetTouches && e.targetTouches.length >= 1
                ? e.targetTouches[0].clientX
                : e.clientX;
            }
            function _(e) {
              return e.targetTouches && e.targetTouches.length >= 1
                ? e.targetTouches[0].clientY
                : e.clientY;
            }
            function x(e) {
              let [t, r] = a.useState(!1),
                [i, s] = a.useState(!1),
                n = a.useRef(null),
                o = a.useRef({
                  start: 0,
                  x: 0,
                  y: 0,
                  delta: 0,
                  removalDistance: 0,
                  canCloseOnClick: !0,
                  canDrag: !1,
                  boundingRect: null,
                  didMove: !1,
                }).current,
                c = a.useRef(e),
                {
                  autoClose: l,
                  pauseOnHover: d,
                  closeToast: h,
                  onClick: f,
                  closeOnClick: m,
                } = e;
              function g(t) {
                if (e.draggable) {
                  "touchstart" === t.nativeEvent.type &&
                    t.nativeEvent.preventDefault(),
                    (o.didMove = !1),
                    document.addEventListener("mousemove", E),
                    document.addEventListener("mouseup", x),
                    document.addEventListener("touchmove", E),
                    document.addEventListener("touchend", x);
                  let r = n.current;
                  (o.canCloseOnClick = !0),
                    (o.canDrag = !0),
                    (o.boundingRect = r.getBoundingClientRect()),
                    (r.style.transition = ""),
                    (o.x = P(t.nativeEvent)),
                    (o.y = _(t.nativeEvent)),
                    "x" === e.draggableDirection
                      ? ((o.start = o.x),
                        (o.removalDistance =
                          r.offsetWidth * (e.draggablePercent / 100)))
                      : ((o.start = o.y),
                        (o.removalDistance =
                          r.offsetHeight *
                          (80 === e.draggablePercent
                            ? 1.5 * e.draggablePercent
                            : e.draggablePercent / 100)));
                }
              }
              function p(t) {
                if (o.boundingRect) {
                  let { top: r, bottom: a, left: i, right: s } = o.boundingRect;
                  "touchend" !== t.nativeEvent.type &&
                  e.pauseOnHover &&
                  o.x >= i &&
                  o.x <= s &&
                  o.y >= r &&
                  o.y <= a
                    ? v()
                    : y();
                }
              }
              function y() {
                r(!0);
              }
              function v() {
                r(!1);
              }
              function E(r) {
                let a = n.current;
                o.canDrag &&
                  a &&
                  ((o.didMove = !0),
                  t && v(),
                  (o.x = P(r)),
                  (o.y = _(r)),
                  (o.delta =
                    "x" === e.draggableDirection
                      ? o.x - o.start
                      : o.y - o.start),
                  o.start !== o.x && (o.canCloseOnClick = !1),
                  (a.style.transform = "translate"
                    .concat(e.draggableDirection, "(")
                    .concat(o.delta, "px)")),
                  (a.style.opacity =
                    "" + (1 - Math.abs(o.delta / o.removalDistance))));
              }
              function x() {
                document.removeEventListener("mousemove", E),
                  document.removeEventListener("mouseup", x),
                  document.removeEventListener("touchmove", E),
                  document.removeEventListener("touchend", x);
                let t = n.current;
                if (o.canDrag && o.didMove && t) {
                  if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance))
                    return s(!0), void e.closeToast();
                  (t.style.transition = "transform 0.2s, opacity 0.2s"),
                    (t.style.transform = "translate".concat(
                      e.draggableDirection,
                      "(0)",
                    )),
                    (t.style.opacity = "1");
                }
              }
              a.useEffect(() => {
                c.current = e;
              }),
                a.useEffect(
                  () => (
                    n.current &&
                      n.current.addEventListener("d", y, { once: !0 }),
                    u(e.onOpen) &&
                      e.onOpen(
                        a.isValidElement(e.children) && e.children.props,
                      ),
                    () => {
                      let e = c.current;
                      u(e.onClose) &&
                        e.onClose(
                          a.isValidElement(e.children) && e.children.props,
                        );
                    }
                  ),
                  [],
                ),
                a.useEffect(
                  () => (
                    e.pauseOnFocusLoss &&
                      (document.hasFocus() || v(),
                      window.addEventListener("focus", y),
                      window.addEventListener("blur", v)),
                    () => {
                      e.pauseOnFocusLoss &&
                        (window.removeEventListener("focus", y),
                        window.removeEventListener("blur", v));
                    }
                  ),
                  [e.pauseOnFocusLoss],
                );
              let S = {
                onMouseDown: g,
                onTouchStart: g,
                onMouseUp: p,
                onTouchEnd: p,
              };
              return (
                l && d && ((S.onMouseEnter = v), (S.onMouseLeave = y)),
                m &&
                  (S.onClick = (e) => {
                    f && f(e), o.canCloseOnClick && h();
                  }),
                {
                  playToast: y,
                  pauseToast: v,
                  isRunning: t,
                  preventExitTransition: i,
                  toastRef: n,
                  eventHandlers: S,
                }
              );
            }
            function S(e) {
              let { closeToast: t, theme: r, ariaLabel: a = "close" } = e;
              return n.default.createElement(
                "button",
                {
                  className:
                    "Toastify__close-button Toastify__close-button--".concat(r),
                  type: "button",
                  onClick: (e) => {
                    e.stopPropagation(), t(e);
                  },
                  "aria-label": a,
                },
                n.default.createElement(
                  "svg",
                  { "aria-hidden": "true", viewBox: "0 0 14 16" },
                  n.default.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                  }),
                ),
              );
            }
            function T(e) {
              let {
                  delay: t,
                  isRunning: r,
                  closeToast: a,
                  type: i = "default",
                  hide: s,
                  className: c,
                  style: l,
                  controlledProgress: d,
                  progress: h,
                  rtl: f,
                  isIn: m,
                  theme: g,
                } = e,
                p = s || (d && 0 === h),
                y = {
                  ...l,
                  animationDuration: "".concat(t, "ms"),
                  animationPlayState: r ? "running" : "paused",
                  opacity: p ? 0 : 1,
                };
              d && (y.transform = "scaleX(".concat(h, ")"));
              let v = o.default(
                  "Toastify__progress-bar",
                  d
                    ? "Toastify__progress-bar--controlled"
                    : "Toastify__progress-bar--animated",
                  "Toastify__progress-bar-theme--".concat(g),
                  "Toastify__progress-bar--".concat(i),
                  { "Toastify__progress-bar--rtl": f },
                ),
                E = u(c)
                  ? c({ rtl: f, type: i, defaultClassName: v })
                  : o.default(v, c);
              return n.default.createElement("div", {
                role: "progressbar",
                "aria-hidden": p ? "true" : "false",
                "aria-label": "notification timer",
                className: E,
                style: y,
                [d && h >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
                  d && h < 1
                    ? null
                    : () => {
                        m && a();
                      },
              });
            }
            let b = (e) => {
                let {
                    isRunning: t,
                    preventExitTransition: r,
                    toastRef: i,
                    eventHandlers: s,
                  } = x(e),
                  {
                    closeButton: c,
                    children: l,
                    autoClose: d,
                    onClick: h,
                    type: f,
                    hideProgressBar: m,
                    closeToast: g,
                    transition: p,
                    position: y,
                    className: v,
                    style: E,
                    bodyClassName: P,
                    bodyStyle: _,
                    progressClassName: b,
                    progressStyle: C,
                    updateId: k,
                    role: w,
                    progress: R,
                    rtl: A,
                    toastId: I,
                    deleteToast: O,
                    isIn: L,
                    isLoading: N,
                    iconOut: U,
                    closeOnClick: D,
                    theme: F,
                  } = e,
                  H = o.default(
                    "Toastify__toast",
                    "Toastify__toast-theme--".concat(F),
                    "Toastify__toast--".concat(f),
                    { "Toastify__toast--rtl": A },
                    { "Toastify__toast--close-on-click": D },
                  ),
                  M = u(v)
                    ? v({ rtl: A, position: y, type: f, defaultClassName: H })
                    : o.default(H, v),
                  j = !!R || !d,
                  W = { closeToast: g, type: f, theme: F },
                  B = null;
                return (
                  !1 === c ||
                    (B = u(c)
                      ? c(W)
                      : a.isValidElement(c)
                        ? a.cloneElement(c, W)
                        : S(W)),
                  n.default.createElement(
                    p,
                    {
                      isIn: L,
                      done: O,
                      position: y,
                      preventExitTransition: r,
                      nodeRef: i,
                    },
                    n.default.createElement(
                      "div",
                      {
                        id: I,
                        onClick: h,
                        className: M,
                        ...s,
                        style: E,
                        ref: i,
                      },
                      n.default.createElement(
                        "div",
                        {
                          ...(L && { role: w }),
                          className: u(P)
                            ? P({ type: f })
                            : o.default("Toastify__toast-body", P),
                          style: _,
                        },
                        null != U &&
                          n.default.createElement(
                            "div",
                            {
                              className: o.default("Toastify__toast-icon", {
                                "Toastify--animate-icon Toastify__zoom-enter":
                                  !N,
                              }),
                            },
                            U,
                          ),
                        n.default.createElement("div", null, l),
                      ),
                      B,
                      n.default.createElement(T, {
                        ...(k && !j ? { key: "pb-".concat(k) } : {}),
                        rtl: A,
                        theme: F,
                        delay: d,
                        isRunning: t,
                        isIn: L,
                        closeToast: g,
                        hide: m,
                        type: f,
                        style: C,
                        className: b,
                        controlledProgress: j,
                        progress: R || 0,
                      }),
                    ),
                  )
                );
              },
              C = function (e, t) {
                return (
                  void 0 === t && (t = !1),
                  {
                    enter: "Toastify--animate Toastify__".concat(e, "-enter"),
                    exit: "Toastify--animate Toastify__".concat(e, "-exit"),
                    appendPosition: t,
                  }
                );
              },
              k = m(C("bounce", !0)),
              w = m(C("slide", !0)),
              R = m(C("zoom")),
              A = m(C("flip")),
              I = a.forwardRef((e, t) => {
                let {
                    getToastToRender: r,
                    containerRef: i,
                    isToastActive: s,
                  } = E(e),
                  { className: c, style: l, rtl: h, containerId: f } = e;
                return (
                  a.useEffect(() => {
                    t && (t.current = i.current);
                  }, []),
                  n.default.createElement(
                    "div",
                    { ref: i, className: "Toastify", id: f },
                    r((e, t) => {
                      let r = t.length
                        ? { ...l }
                        : { ...l, pointerEvents: "none" };
                      return n.default.createElement(
                        "div",
                        {
                          className: (function (e) {
                            let t = o.default(
                              "Toastify__toast-container",
                              "Toastify__toast-container--".concat(e),
                              { "Toastify__toast-container--rtl": h },
                            );
                            return u(c)
                              ? c({ position: e, rtl: h, defaultClassName: t })
                              : o.default(t, d(c));
                          })(e),
                          style: r,
                          key: "container-".concat(e),
                        },
                        t.map((e, r) => {
                          let { content: a, props: i } = e;
                          return n.default.createElement(
                            b,
                            {
                              ...i,
                              isIn: s(i.toastId),
                              style: {
                                ...i.style,
                                "--nth": r + 1,
                                "--len": t.length,
                              },
                              key: "toast-".concat(i.key),
                            },
                            a,
                          );
                        }),
                      );
                    }),
                  )
                );
              });
            (I.displayName = "ToastContainer"),
              (I.defaultProps = {
                position: "top-right",
                transition: k,
                autoClose: 5e3,
                closeButton: S,
                pauseOnHover: !0,
                pauseOnFocusLoss: !0,
                closeOnClick: !0,
                draggable: !0,
                draggablePercent: 80,
                draggableDirection: "x",
                role: "alert",
                theme: "light",
              });
            let O,
              L = new Map(),
              N = [],
              U = 1;
            function D(e, t) {
              return (
                L.size > 0
                  ? p.emit(0, e, t)
                  : N.push({ content: e, options: t }),
                t.toastId
              );
            }
            function F(e, t) {
              return {
                ...t,
                type: (t && t.type) || e,
                toastId:
                  t && (l(t.toastId) || c(t.toastId)) ? t.toastId : "" + U++,
              };
            }
            function H(e) {
              return (t, r) => D(t, F(e, r));
            }
            function M(e, t) {
              return D(e, F("default", t));
            }
            (M.loading = (e, t) =>
              D(
                e,
                F("default", {
                  isLoading: !0,
                  autoClose: !1,
                  closeOnClick: !1,
                  closeButton: !1,
                  draggable: !1,
                  ...t,
                }),
              )),
              (M.promise = function (e, t, r) {
                let a,
                  { pending: i, error: s, success: n } = t;
                i &&
                  (a = l(i)
                    ? M.loading(i, r)
                    : M.loading(i.render, { ...r, ...i }));
                let o = {
                    isLoading: null,
                    autoClose: null,
                    closeOnClick: null,
                    closeButton: null,
                    draggable: null,
                  },
                  c = (e, t, i) => {
                    if (null == t) return void M.dismiss(a);
                    let s = { type: e, ...o, ...r, data: i },
                      n = l(t) ? { render: t } : t;
                    return (
                      a
                        ? M.update(a, { ...s, ...n })
                        : M(n.render, { ...s, ...n }),
                      i
                    );
                  },
                  d = u(e) ? e() : e;
                return (
                  d
                    .then((e) => c("success", n, e))
                    .catch((e) => c("error", s, e)),
                  d
                );
              }),
              (M.success = H("success")),
              (M.info = H("info")),
              (M.error = H("error")),
              (M.warning = H("warning")),
              (M.warn = M.warning),
              (M.dark = (e, t) => D(e, F("default", { theme: "dark", ...t }))),
              (M.dismiss = (e) => {
                L.size > 0
                  ? p.emit(1, e)
                  : (N = N.filter((t) => null != e && t.options.toastId !== e));
              }),
              (M.clearWaitingQueue = function (e) {
                return void 0 === e && (e = {}), p.emit(5, e);
              }),
              (M.isActive = (e) => {
                let t = !1;
                return (
                  L.forEach((r) => {
                    r.isToastActive && r.isToastActive(e) && (t = !0);
                  }),
                  t
                );
              }),
              (M.update = function (e, t) {
                void 0 === t && (t = {}),
                  setTimeout(() => {
                    let r = (function (e, t) {
                      let { containerId: r } = t,
                        a = L.get(r || O);
                      return a && a.getToast(e);
                    })(e, t);
                    if (r) {
                      let { props: a, content: i } = r,
                        s = {
                          delay: 100,
                          ...a,
                          ...t,
                          toastId: t.toastId || e,
                          updateId: "" + U++,
                        };
                      s.toastId !== e && (s.staleId = e);
                      let n = s.render || i;
                      delete s.render, D(n, s);
                    }
                  }, 0);
              }),
              (M.done = (e) => {
                M.update(e, { progress: 1 });
              }),
              (M.onChange = (e) => (
                p.on(4, e),
                () => {
                  p.off(4, e);
                }
              )),
              (M.POSITION = {
                TOP_LEFT: "top-left",
                TOP_RIGHT: "top-right",
                TOP_CENTER: "top-center",
                BOTTOM_LEFT: "bottom-left",
                BOTTOM_RIGHT: "bottom-right",
                BOTTOM_CENTER: "bottom-center",
              }),
              (M.TYPE = {
                INFO: "info",
                SUCCESS: "success",
                WARNING: "warning",
                ERROR: "error",
                DEFAULT: "default",
              }),
              p
                .on(2, (e) => {
                  (O = e.containerId || e),
                    L.set(O, e),
                    N.forEach((e) => {
                      p.emit(0, e.content, e.options);
                    }),
                    (N = []);
                })
                .on(3, (e) => {
                  L.delete(e.containerId || e),
                    0 === L.size && p.off(0).off(1).off(5);
                }),
              (t.Bounce = k),
              (t.Flip = A),
              (t.Icons = v),
              (t.Slide = w),
              (t.ToastContainer = I),
              (t.Zoom = R),
              (t.collapseToast = f),
              (t.cssTransition = m),
              (t.toast = M),
              (t.useToast = x),
              (t.useToastContainer = E);
          },
          6161: (e, t, r) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = r(810),
              i = Symbol.for("react.element"),
              s = Symbol.for("react.fragment"),
              n = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              c = { key: !0, ref: !0, __self: !0, __source: !0 };
            function l(e, t, r) {
              var a,
                s = {},
                l = null,
                u = null;
              for (a in (void 0 !== r && (l = "" + r),
              void 0 !== t.key && (l = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                n.call(t, a) && !c.hasOwnProperty(a) && (s[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === s[a] && (s[a] = t[a]);
              return {
                $$typeof: i,
                type: e,
                key: l,
                ref: u,
                props: s,
                _owner: o.current,
              };
            }
            (t.Fragment = s), (t.jsx = l), (t.jsxs = l);
          },
          9541: (e, t, r) => {
            e.exports = r(6161);
          },
          5463: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.notification = t.dismiss = void 0);
            let a = r(6289),
              i = [],
              s = {
                pauseOnFocusLoss: !1,
                autoClose: !1,
                closeButton: !1,
                hideProgressBar: !0,
                icon: !1,
                transition: a.Slide,
              };
            function n() {
              i.forEach((e) => {
                let { id: t, important: r } = e;
                r || a.toast.dismiss(t);
              }),
                (i = i.filter((e) => {
                  let { important: t } = e;
                  return t;
                }));
            }
            (t.dismiss = n),
              (t.notification = function (e) {
                let { message: t, options: r } = e;
                !(function (e, t) {
                  (null == t ? void 0 : t.single) && n();
                  let r = (0, a.toast)(e, t);
                  i.push({
                    id: r,
                    important: null == t ? void 0 : t.important,
                  });
                })(t, { ...s, ...r });
              });
          },
          473: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Notification = void 0);
            let i = r(9541),
              s = r(5881),
              n = r(6289);
            r(1718);
            let o = a(r(7891));
            t.Notification = (e) => {
              let {
                className: t,
                toastClassName: r,
                bodyClassName: a,
                ...c
              } = e;
              return (0, i.jsx)(n.ToastContainer, {
                className: (0, s.clsx)(o.default.root, o.default.important, t),
                toastClassName: (0, s.clsx)(
                  o.default.toast,
                  o.default.important,
                  r,
                ),
                bodyClassName: (0, s.clsx)(
                  o.default.body,
                  o.default.important,
                  a,
                ),
                ...c,
              });
            };
          },
          810: (e) => {
            e.exports = s || (s = r.t(n, 2));
          },
        },
        c = {};
      function l(e) {
        var t = c[e];
        if (void 0 !== t) return t.exports;
        var r = (c[e] = { exports: {} });
        return o[e].call(r.exports, r, r.exports, l), r.exports;
      }
      (l.d = (e, t) => {
        for (var r in t)
          l.o(t, r) &&
            !l.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (l.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var u = {};
      Object.defineProperty(u, "X$", { value: !0 }),
        (u.ZB = u.t6 = u.P_ = void 0),
        (a = l(473)),
        Object.defineProperty(u, "P_", {
          enumerable: !0,
          get: function () {
            return a.Notification;
          },
        }),
        (i = l(5463)),
        Object.defineProperty(u, "t6", {
          enumerable: !0,
          get: function () {
            return i.notification;
          },
        }),
        Object.defineProperty(u, "ZB", {
          enumerable: !0,
          get: function () {
            return i.dismiss;
          },
        });
      var d = u.P_;
      u.X$;
      var h = u.ZB,
        f = u.t6;
    },
    12404: function (e, t, r) {
      "use strict";
      r.d(t, {
        Paper: function () {
          return u;
        },
      });
      var a,
        i,
        s = r(98639),
        n = {
          5881: (e, t, r) => {
            function a() {
              for (var e, t, r = 0, a = ""; r < arguments.length; )
                (e = arguments[r++]) &&
                  (t = (function e(t) {
                    var r,
                      a,
                      i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (a = e(t[r])) && (i && (i += " "), (i += a));
                      else for (r in t) t[r] && (i && (i += " "), (i += r));
                    }
                    return i;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            r.r(t), r.d(t, { clsx: () => a, default: () => i });
            let i = a;
          },
          1451: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root: "qaIScXjx1qyXuaIHXQIo",
              root_radius_xs: "wdE2qVRIlWUesuBfzCis",
              root_radius_s: "_7gw1qGE6BeUAdSMbhRx",
              root_radius_m: "emVxQKB1wJc9FwuIBG8o",
              root_radius_l: "NFJAa_h_EAjwQVY7bU5J",
              root_radius_xl: "SRpgu5IgfEGM_VHllm_6",
              root_radius_round: "QIWoHHDozGGG5w2JYImt",
              root_withShadow: "gtfPudKIIbfkwmuOBzwI",
              root_variant_default: "ZcpulvHgF_wsgzB8Hye9",
              root_variant_outline: "kPFFrHHxF3SOjiETAE6Q",
            };
          },
          6161: (e, t, r) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = r(810),
              i = Symbol.for("react.element"),
              s = Symbol.for("react.fragment"),
              n = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              c = { key: !0, ref: !0, __self: !0, __source: !0 };
            function l(e, t, r) {
              var a,
                s = {},
                l = null,
                u = null;
              for (a in (void 0 !== r && (l = "" + r),
              void 0 !== t.key && (l = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                n.call(t, a) && !c.hasOwnProperty(a) && (s[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === s[a] && (s[a] = t[a]);
              return {
                $$typeof: i,
                type: e,
                key: l,
                ref: u,
                props: s,
                _owner: o.current,
              };
            }
            (t.Fragment = s), (t.jsx = l), (t.jsxs = l);
          },
          9541: (e, t, r) => {
            e.exports = r(6161);
          },
          4788: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Paper = void 0);
            let i = r(9541),
              s = r(5881),
              n = r(810),
              o = a(r(1451)),
              c = (e) => {
                let {
                  forwardRef: t,
                  radius: r = "m",
                  variant: a = "default",
                  children: n,
                  className: c,
                  withShadow: l,
                  style: u,
                  ...d
                } = e;
                return (0, i.jsx)("div", {
                  className: (0, s.clsx)(
                    o.default.root,
                    o.default["root_radius_".concat(r)],
                    o.default["root_variant_".concat(a)],
                    { [o.default.root_withShadow]: l },
                    c,
                  ),
                  style: u,
                  ref: t,
                  ...d,
                  children: n,
                });
              };
            t.Paper = (0, n.forwardRef)((e, t) =>
              (0, i.jsx)(c, { forwardRef: t, ...e }),
            );
          },
          810: (e) => {
            e.exports = i || (i = r.t(s, 2));
          },
        },
        o = {};
      function c(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var r = (o[e] = { exports: {} });
        return n[e].call(r.exports, r, r.exports, c), r.exports;
      }
      (c.d = (e, t) => {
        for (var r in t)
          c.o(t, r) &&
            !c.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (c.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var l = {};
      Object.defineProperty(l, "U", { value: !0 }),
        (l.X = void 0),
        (a = c(4788)),
        Object.defineProperty(l, "X", {
          enumerable: !0,
          get: function () {
            return a.Paper;
          },
        });
      var u = l.X;
      l.U;
    },
    2570: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Caption: function () {
            return d;
          },
          Heading: function () {
            return h;
          },
          __esModule: function () {
            return f;
          },
        });
      var a,
        i,
        s,
        n = r(98639),
        o = {
          5881: (e, t, r) => {
            function a() {
              for (var e, t, r = 0, a = ""; r < arguments.length; )
                (e = arguments[r++]) &&
                  (t = (function e(t) {
                    var r,
                      a,
                      i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (a = e(t[r])) && (i && (i += " "), (i += a));
                      else for (r in t) t[r] && (i && (i += " "), (i += r));
                    }
                    return i;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            r.r(t), r.d(t, { clsx: () => a, default: () => i });
            let i = a;
          },
          390: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root_controls_xxs: "tRaaBpDMg9Qu8v6gKjtn",
              root_entity_xxs: "M9zvtlcpLUVn6DKdcHhj",
              root_text_xxs: "ln0PYYwDmFnfYxCDJsFU",
              root_controls_xs: "n5AeWEsJC3_AYXcbK4Lt",
              root_entity_xs: "__hrMKGmNbw54T54IUyh",
              root_text_xs: "SehSa7OyRpC2nzYTVb2Q",
              root_controls_s: "_oBLf5gprWsKjCw4Ce58",
              root_entity_s: "mxSPe5xpZnie9gpIqacd",
              root_text_s: "Ai2iRN9elHpk_u5splD6",
              root_controls_m: "tk7ahHRDYXJMMB879KUA",
              root_entity_m: "Z_WIr2W8JU4MPQek3hgR",
              root_text_m: "g3qWNP6xl__7qxNmtrvd",
              root_controls_l: "grvxapJE3vGArOKDWf6n",
              root_entity_l: "Esj5A1UeSi4xV4tZ839D",
              root_text_l: "V3WU123oO65AxsprotU9",
              root_weight_normal: "ZYV27jeWd30QDXu4GhaH",
              root_weight_medium: "_3_Mxw7Si7j2g4kWjlpR",
              root_weight_bold: "Vi7Rd0SZWqD17F0872TB",
            };
          },
          8544: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root_size_xs: "qJJ288377iHlWN_RXeEE",
              root_size_s: "_sd8Q9d_Ttn0Ufe4ISWS",
              root_size_m: "Ctk8dbecq31Qh7isOJPQ",
              root_size_l: "M_Djh6ppIkCO3A2k_BTA",
              root_size_xl: "dtxlzGQMPAbM2MEndXWX",
              root_size_xxl: "IUb9XLplTAoZqne9rNUL",
              root_size_xxxl: "ZYZamUwql_rfFR4RpI2B",
              root_size_xxxxl: "ZBZyxow5njdq8z5dnRPY",
              root_weight_bold: "nSU6fV9y80WrZEfafvww",
              root_weight_black: "KBeGPPK4DinQzAP41Y_N",
            };
          },
          2524: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            let a = {
              root: "_MWOVuZRvUQdXKTMcOPx",
              root_clamp: "LezmJlldtbHWqU7l1950",
              root_clamp_oneline: "oyQL2RSmoNbNQf3Vc6YI",
              root_clamp_multiline: "jMyoZB5J9iZbzJmWOrF0",
            };
          },
          6161: (e, t, r) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = r(810),
              i = Symbol.for("react.element"),
              s = Symbol.for("react.fragment"),
              n = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              c = { key: !0, ref: !0, __self: !0, __source: !0 };
            function l(e, t, r) {
              var a,
                s = {},
                l = null,
                u = null;
              for (a in (void 0 !== r && (l = "" + r),
              void 0 !== t.key && (l = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                n.call(t, a) && !c.hasOwnProperty(a) && (s[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === s[a] && (s[a] = t[a]);
              return {
                $$typeof: i,
                type: e,
                key: l,
                ref: u,
                props: s,
                _owner: o.current,
              };
            }
            (t.Fragment = s), (t.jsx = l), (t.jsxs = l);
          },
          9541: (e, t, r) => {
            e.exports = r(6161);
          },
          7743: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Caption = t.CaptionComponent = void 0);
            let i = r(9541),
              s = r(5881),
              n = r(810),
              o = r(4721),
              c = a(r(390));
            function l(e) {
              let {
                forwardRef: t,
                variant: r,
                type: a = "text",
                size: n = "s",
                className: l,
                children: u,
                weight: d = "medium",
                ...h
              } = e;
              return (0, i.jsx)(o.Typography, {
                variant: r,
                ref: t,
                className: (0, s.clsx)(
                  c.default.root,
                  c.default["root_".concat(a, "_").concat(n)],
                  c.default["root_weight_".concat(d)],
                  l,
                ),
                ...h,
                children: u,
              });
            }
            (t.CaptionComponent = l),
              (t.Caption = (0, n.forwardRef)((e, t) =>
                (0, i.jsx)(l, { forwardRef: t, ...e }),
              ));
          },
          404: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.HeadingComponent = void 0);
            let i = r(9541),
              s = r(5881),
              n = r(810),
              o = r(4721),
              c = a(r(8544));
            (t.HeadingComponent = (e) => {
              let {
                forwardRef: t,
                variant: r,
                weight: a = "bold",
                size: n = "s",
                className: l,
                children: u,
                ...d
              } = e;
              return (0, i.jsx)(o.Typography, {
                variant: r,
                ref: t,
                className: (0, s.clsx)(
                  c.default.root,
                  c.default["root_size_".concat(n)],
                  c.default["root_weight_".concat(a)],
                  l,
                ),
                ...d,
                children: u,
              });
            }),
              (t.Heading = (0, n.forwardRef)((e, r) =>
                (0, i.jsx)(t.HeadingComponent, { forwardRef: r, ...e }),
              ));
          },
          4721: function (e, t, r) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Typography = t.TypographyComponent = void 0);
            let i = r(9541),
              s = r(5881),
              n = r(810),
              o = a(r(2524));
            function c(e) {
              let {
                  forwardRef: t,
                  style: r,
                  className: a,
                  children: n,
                  variant: c,
                  lineClamp: l,
                  ...u
                } = e,
                d = l && "string" == typeof n ? n : void 0;
              return (0, i.jsx)(c, {
                style: { ...r, WebkitLineClamp: l },
                ref: t,
                title: d,
                className: (0, s.clsx)(
                  o.default.root,
                  {
                    [o.default.root_clamp]: l && l > 0,
                    [o.default.root_clamp_oneline]: l && 1 === l,
                    [o.default.root_clamp_multiline]: l && l > 1,
                  },
                  a,
                ),
                ...u,
                children: n,
              });
            }
            (t.TypographyComponent = c),
              (t.Typography = (0, n.forwardRef)((e, t) =>
                (0, i.jsx)(c, { forwardRef: t, ...e }),
              ));
          },
          810: (e) => {
            e.exports = s || (s = r.t(n, 2));
          },
        },
        c = {};
      function l(e) {
        var t = c[e];
        if (void 0 !== t) return t.exports;
        var r = (c[e] = { exports: {} });
        return o[e].call(r.exports, r, r.exports, l), r.exports;
      }
      (l.d = (e, t) => {
        for (var r in t)
          l.o(t, r) &&
            !l.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (l.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var u = {};
      Object.defineProperty(u, "__esModule", { value: !0 }),
        (u.Heading = u.Caption = void 0),
        (a = l(7743)),
        Object.defineProperty(u, "Caption", {
          enumerable: !0,
          get: function () {
            return a.Caption;
          },
        }),
        (i = l(404)),
        Object.defineProperty(u, "Heading", {
          enumerable: !0,
          get: function () {
            return i.Heading;
          },
        });
      var d = u.Caption,
        h = u.Heading,
        f = u.__esModule;
    },
    87770: function (e, t, r) {
      "use strict";
      var a, i;
      r.d(t, {
        $: function () {
          return s;
        },
        R: function () {
          return a;
        },
      }),
        ((i = a || (a = {})).ALBUM = "album"),
        (i.PLAYLIST = "playlist"),
        (i.ARTIST = "artist"),
        (i.ARTIST_TRACKS = "artist_tracks"),
        (i.ARTIST_SIMILAR = "artist_similar"),
        (i.ARTIST_ALBUMS = "artist_albums"),
        (i.ARTIST_DISCOGRAPHY = "artist_discography"),
        (i.ARTIST_COMPILATIONS = "artist_compilations"),
        (i.ARTIST_CONCERTS = "artist_concerts_screen"),
        (i.CHART = "chart"),
        (i.HOME = "home"),
        (i.SEARCH = "search"),
        (i.SIDEBAR = "sidebar"),
        (i.OWN_COLLECTION = "own_collection"),
        (i.OWN_ALBUMS = "own_albums"),
        (i.OWN_DISLIKES = "own_dislikes"),
        (i.OWN_PODCASTS = "own_podcasts"),
        (i.OWN_ARTISTS = "own_artists"),
        (i.OWN_PLAYLISTS = "own_playlists"),
        (i.RADIO = "radio"),
        (i.GENRE = "genre"),
        (i.GENRE_ALBUMS = "genre_albums"),
        (i.GENRE_ARTISTS = "genre_artists"),
        (i.GENRE_PLAYLISTS = "genre_playlists"),
        (i.TAG = "tag"),
        (i.POST = "post"),
        (i.KINOPOISK = "kinopoisk"),
        (i.HISTORY = "history"),
        (i.FAMILIAR_YOU = "familiar_you"),
        (i.PODCAST = "podcast"),
        (i.NON_MUSIC = "non_music"),
        (i.LANDING = "landing"),
        (i.ENTITIES = "entities");
      let s = [
        "home",
        "landing",
        "artist",
        "artist_concerts_screen",
        "non_music",
      ];
    },
    8496: function (e, t, r) {
      "use strict";
      r.d(t, {
        useSendEventOnBlockLoaded: function () {
          return p;
        },
      });
      var a = r(98639),
        i = r(52122),
        s = r(33329),
        n = r(87770),
        o = r(44711),
        c = r(18638),
        l = r(82025),
        u = r(24932),
        d = r(87004),
        h = r(82124),
        f = r(98723),
        m = r(92994);
      let g = [n.R.HOME, n.R.LANDING, n.R.NON_MUSIC],
        p = () => {
          let e = (0, m.useAnalytics)(),
            t = (0, s.w)(),
            { hash: r } = (0, u.R)(),
            { pageId: y } = (0, d.useAnalyticsPage)(),
            {
              tabId: v,
              tabPos: E,
              isTabSelectedByDefault: P,
            } = (0, f.useAnalyticsTab)(),
            {
              blockId: _,
              blockType: x,
              blockPosX: S,
              blockPosY: T,
              objectsCount: b,
            } = (0, l.useAnalyticsBlock)(),
            { skeleton: C } = (0, h.useAnalyticsSkeleton)();
          return (0, a.useCallback)(() => {
            if (!e || !y || !n.$.includes(y) || !g.includes(y)) return;
            let a = {
              hash: r,
              pageId: (0, c.H)(y),
              tabId: v,
              tabPos: E,
              entityType: x,
              entityId: _,
              entityPosX: S,
              entityPosY: T,
              isTabSelectedByDefault: P,
              objectsCount: b,
            };
            C && (a.skeletonId = C);
            let s = (0, o.K)({ params: a, logger: t, context: p.name });
            s && (0, i.sj)(e.evgenInstance, s);
          }, [e, _, S, T, x, r, P, t, b, y, C, v, E]);
        };
    },
    11858: function (e, t, r) {
      "use strict";
      r.d(t, {
        useSendEventOnBlockNavigated: function () {
          return y;
        },
      });
      var a = r(98639),
        i = r(52122),
        s = r(33329),
        n = r(87770),
        o = r(44711),
        c = r(18638),
        l = r(82025),
        u = r(24932),
        d = r(85969),
        h = r(87004),
        f = r(82124),
        m = r(98723),
        g = r(92994);
      let p = [n.R.HOME, n.R.LANDING, n.R.NON_MUSIC],
        y = () => {
          let e = (0, g.useAnalytics)(),
            t = (0, s.w)(),
            { hash: r } = (0, u.R)(),
            { pageId: v } = (0, h.useAnalyticsPage)(),
            {
              tabId: E,
              tabPos: P,
              isTabSelectedByDefault: _,
            } = (0, m.useAnalyticsTab)(),
            {
              blockId: x,
              blockType: S,
              blockPosX: T,
              blockPosY: b,
            } = (0, l.useAnalyticsBlock)(),
            {
              objectId: C,
              objectPosX: k,
              objectPosY: w,
              objectType: R,
              objectsCount: A,
            } = (0, d.useAnalyticsObject)(),
            { skeleton: I } = (0, f.useAnalyticsSkeleton)();
          return (0, a.useCallback)(
            (a) => {
              let { to: s, objectId: l, objectType: u } = a;
              if (!e || !v || !n.$.includes(v) || !p.includes(v)) return;
              let d = (0, c.H)(v);
              if (!d) return;
              let h = {
                hash: r,
                pageId: d,
                tabId: E,
                tabPos: P,
                isTabSelectedByDefault: _,
                entityType: S,
                entityId: x,
                entityPosX: T,
                entityPosY: b,
                objectId: null != l ? l : C,
                objectType: null != u ? u : R,
                objectPosX: k,
                objectPosY: w,
                objectsCount: A,
                from: i.qU.MainScreen,
                to: s,
              };
              I && (h.skeletonId = I);
              let f = (0, o.K)({ params: h, logger: t, context: y.name });
              f && (0, i.mz)(e.evgenInstance, f);
            },
            [C, R, e, v, r, I, E, P, _, S, x, T, b, k, w, A, t],
          );
        };
    },
    90475: function (e, t, r) {
      "use strict";
      r.d(t, {
        p: function () {
          return y;
        },
      });
      var a = r(98639),
        i = r(52122),
        s = r(33329),
        n = r(87770),
        o = r(44711),
        c = r(18638),
        l = r(82025),
        u = r(24932),
        d = r(85969),
        h = r(87004),
        f = r(82124),
        m = r(98723),
        g = r(92994);
      let p = [n.R.HOME, n.R.LANDING, n.R.NON_MUSIC],
        y = () => {
          let e = (0, s.w)(),
            t = (0, g.useAnalytics)(),
            { hash: r } = (0, u.R)(),
            { pageId: v } = (0, h.useAnalyticsPage)(),
            {
              tabId: E,
              tabPos: P,
              isTabSelectedByDefault: _,
            } = (0, m.useAnalyticsTab)(),
            {
              blockType: x,
              blockId: S,
              blockPosX: T,
              blockPosY: b,
            } = (0, l.useAnalyticsBlock)(),
            {
              objectType: C,
              objectsCount: k,
              objectId: w,
              objectPosX: R,
              objectPosY: A,
            } = (0, d.useAnalyticsObject)(),
            { skeleton: I } = (0, f.useAnalyticsSkeleton)();
          return (0, a.useCallback)(
            (a, s) => {
              if (!t || !v || !n.$.includes(v) || !p.includes(v)) return;
              let l = (0, c.H)(v);
              if (!l) return;
              let u = {
                hash: r,
                pageId: l,
                tabId: E,
                tabPos: P,
                isTabSelectedByDefault: _,
                entityType: x,
                entityId: S,
                entityPosX: T,
                entityPosY: b,
                objectsCount: k,
                viewUuid: s,
                objectType: C,
                objectId: w,
                objectPosX: R,
                objectPosY: A,
              };
              I && (u.skeletonId = I);
              let d = (0, o.K)({ params: u, logger: e, context: y.name });
              d &&
                (a
                  ? (0, i.PB)(t.evgenInstance, d)
                  : (0, i.re)(t.evgenInstance, d));
            },
            [t, S, T, b, x, r, _, e, w, R, A, C, k, v, I, E, P],
          );
        };
    },
    97161: function (e, t, r) {
      "use strict";
      r.d(t, {
        useSendEventOnBlockStarted: function () {
          return y;
        },
      });
      var a = r(98639),
        i = r(52122),
        s = r(33329),
        n = r(87770),
        o = r(44711),
        c = r(18638),
        l = r(82025),
        u = r(24932),
        d = r(85969),
        h = r(87004),
        f = r(82124),
        m = r(98723),
        g = r(92994);
      let p = [n.R.HOME, n.R.LANDING, n.R.NON_MUSIC],
        y = () => {
          let e = (0, g.useAnalytics)(),
            t = (0, s.w)(),
            { hash: r } = (0, u.R)(),
            { pageId: v } = (0, h.useAnalyticsPage)(),
            {
              tabId: E,
              tabPos: P,
              isTabSelectedByDefault: _,
            } = (0, m.useAnalyticsTab)(),
            {
              blockId: x,
              blockType: S,
              blockPosX: T,
              blockPosY: b,
            } = (0, l.useAnalyticsBlock)(),
            {
              objectId: C,
              objectPosX: k,
              objectPosY: w,
              objectType: R,
              objectsCount: A,
            } = (0, d.useAnalyticsObject)(),
            { skeleton: I } = (0, f.useAnalyticsSkeleton)();
          return (0, a.useCallback)(
            (a) => {
              if (!e || !v || !n.$.includes(v) || !a || !p.includes(v)) return;
              let s = (0, c.H)(v);
              if (!s) return;
              let l = {
                hash: r,
                pageId: s,
                tabId: E,
                tabPos: P,
                isTabSelectedByDefault: _,
                entityType: S,
                entityId: x,
                entityPosX: T,
                entityPosY: b,
                objectId: C,
                objectType: R,
                objectPosX: k,
                objectPosY: w,
                objectsCount: A,
              };
              I && (l.skeletonId = I);
              let u = (0, o.K)({ params: l, logger: t, context: y.name });
              u && (0, i.yC)(e.evgenInstance, u);
            },
            [e, v, r, I, E, P, _, S, x, T, b, C, R, k, w, A, t],
          );
        };
    },
    91401: function (e, t, r) {
      "use strict";
      r.d(t, {
        useSendEventOnSlideShowed: function () {
          return l;
        },
      });
      var a = r(98639),
        i = r(52122),
        s = r(33329),
        n = r(44711),
        o = r(3230),
        c = r(92994);
      let l = (e) => {
        let t = (0, a.useRef)(),
          r = (0, c.useAnalytics)(),
          u = (0, s.w)(),
          {
            slideId: d,
            slidesCount: h,
            slidesType: f,
            slidePos: m,
            artistId: g,
            videoId: p,
          } = (0, o.v)();
        (0, a.useEffect)(() => {
          e && r
            ? (t.current = window.setTimeout(() => {
                let e = (0, n.K)({
                  params: {
                    slidesType: f,
                    slideId: d,
                    slidesCount: h,
                    slidePos: m,
                    artistId: null != g ? g : "null",
                    videoId: null != p ? p : "null",
                  },
                  logger: u,
                  context: l.name,
                });
                e && (0, i.Qb)(r.evgenInstance, e);
              }, 1e3))
            : window.clearTimeout(t.current);
        }, [e, r, d, h, m, g, p, f, u]);
      };
    },
    84661: function (e, t, r) {
      "use strict";
      r.d(t, {
        useSendEventOnSlidesLoaded: function () {
          return n;
        },
      });
      var a = r(98639),
        i = r(52122),
        s = r(92994);
      let n = (e) => {
        let { isLoaded: t, slidesType: r } = e,
          n = (0, s.useAnalytics)(),
          [o, c] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          t &&
            !o &&
            n &&
            ((0, i.wB)(n.evgenInstance, { slidesType: r }), c(!0));
        }, [n, t, o, r]);
      };
    },
    30446: function (e, t, r) {
      "use strict";
      r.d(t, {
        useSendEventOnSlidesOpened: function () {
          return n;
        },
      });
      var a = r(98639),
        i = r(52122),
        s = r(92994);
      let n = (e) => {
        let t = (0, s.useAnalytics)();
        (0, a.useEffect)(() => {
          t &&
            (0, i.rO)(null == t ? void 0 : t.evgenInstance, { slidesType: e });
        }, [t, e]);
      };
    },
    2231: function (e, t, r) {
      "use strict";
      r.d(t, {
        x: function () {
          return n;
        },
      });
      var a = r(98639),
        i = r(82025),
        s = r(87004);
      let n = (e) => {
        let t = null == e ? void 0 : e.pageId,
          r = null == e ? void 0 : e.blockId,
          { pageId: n } = (0, s.useAnalyticsPage)(),
          { blockIdForFrom: o } = (0, i.useAnalyticsBlock)();
        return (0, a.useMemo)(() => {
          let e = null != t ? t : n,
            a = null != r ? r : o,
            i = ["desktop"];
          return (
            e && i.push(e.toLowerCase()),
            a && i.push(a.toLowerCase()),
            i.push("default"),
            i.join("-")
          );
        }, [r, o, t, n]);
      };
    },
    44711: function (e, t, r) {
      "use strict";
      function a(e) {
        let { params: t, logger: r, context: a } = e,
          i = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
        return i.length > 0
          ? (r.error("Evgen parameters are not met", {
              parameters: i.join(", "),
              context: a,
            }),
            null)
          : t;
      }
      r.d(t, {
        K: function () {
          return a;
        },
      });
    },
    41701: function (e, t, r) {
      "use strict";
      r.d(t, {
        aU: function () {
          return s;
        },
        BE: function () {
          return n;
        },
        J: function () {
          return u;
        },
        tK: function () {
          return b.AnalyticsHashProvider;
        },
        e4: function () {
          return L.AnalyticsIntersectionObserverProvider;
        },
        nZ: function () {
          return w;
        },
        Rh: function () {
          return v.R;
        },
        Lh: function () {
          return h;
        },
        Yv: function () {
          return g;
        },
        zA: function () {
          return P;
        },
        hw: function () {
          return O;
        },
        $P: function () {
          return v.$;
        },
        KO: function () {
          return U.K;
        },
        qY: function () {
          return p.useAnalyticsBlock;
        },
        RQ: function () {
          return C.R;
        },
        Vf: function () {
          return N.useAnalyticsIntersectionObserver;
        },
        rK: function () {
          return D.useAnalyticsObject;
        },
        lV: function () {
          return f.useAnalyticsPage;
        },
        x5: function () {
          return y.x;
        },
        X0: function () {
          return T.useSendEventOnBlockLoaded;
        },
        zx: function () {
          return R.useSendEventOnBlockNavigated;
        },
        lA: function () {
          return A.useSendEventOnBlockStarted;
        },
        PK: function () {
          return S.useSendEventOnSlideShowed;
        },
        IO: function () {
          return x.useSendEventOnSlidesLoaded;
        },
        bX: function () {
          return _.useSendEventOnSlidesOpened;
        },
      });
      var a,
        i,
        s,
        n,
        o = r(9753),
        c = r(98639),
        l = r(91844);
      let u = (e) => {
        let {
            blockId: t,
            blockType: r,
            blockIdForFrom: a,
            blockPosX: i,
            blockPosY: s,
            objectsCount: n,
            children: u,
          } = e,
          d = (0, c.useMemo)(
            () => ({
              blockId: t,
              blockType: r,
              blockIdForFrom: a,
              blockPosX: i,
              blockPosY: s,
              objectsCount: n,
            }),
            [t, r, a, i, s, n],
          );
        return (0, o.jsx)(l.AnalyticsBlockContext.Provider, {
          value: d,
          children: u,
        });
      };
      var d = r(94326);
      let h = (e) => {
        let { pageId: t, children: r } = e,
          a = (0, c.useMemo)(() => ({ pageId: t }), [t]);
        return (0, o.jsx)(d.AnalyticsPageContext.Provider, {
          value: a,
          children: r,
        });
      };
      var f = r(87004),
        m = r(68721);
      let g = (e) => {
        let { skeleton: t, children: r } = e,
          a = (0, c.useMemo)(() => ({ skeleton: t }), [t]);
        return (0, o.jsx)(m.AnalyticsSkeletonContext.Provider, {
          value: a,
          children: r,
        });
      };
      r(82124);
      var p = r(82025),
        y = r(2231);
      ((a = s || (s = {})).TRACK = "track"),
        (a.ALBUM = "album"),
        (a.PLAYLIST = "playlist"),
        (a.ARTIST = "artist"),
        (a.RUP = "rup"),
        (a.MAIN = "main"),
        (a.RADIO = "radio"),
        (a.DISCOGRAPHY = "discography"),
        (a.CAROUSEL = "carousel"),
        (a.ALBUMS = "albums"),
        (a.COMPILATIONS = "compilations"),
        (a.PLAYLISTS = "playlists"),
        (a.ARTISTS = "artists"),
        (a.BLOCK = "block"),
        (a.DISCOVERY = "discovery"),
        (a.SIMILAR = "similar"),
        (a.SEARCH = "search"),
        (a.HISTORY = "history"),
        (a.DEFAULT = "default"),
        (a.PODCAST = "podcast"),
        (a.FILTERED = "filtered"),
        (a.SUGGESTED = "suggested");
      var v = r(87770),
        E = r(44490);
      let P = (e) => {
        let {
            children: t,
            slidesType: r,
            slideId: a,
            slidePos: i,
            slidesCount: s,
            artistId: n,
            videoId: l,
          } = e,
          u = (0, c.useMemo)(
            () => ({
              slidesType: r,
              slideId: a,
              slidePos: i,
              slidesCount: s,
              artistId: n,
              videoId: l,
            }),
            [n, a, i, s, r, l],
          );
        return (0, o.jsx)(E.AnalyticsSlideContext.Provider, {
          value: u,
          children: t,
        });
      };
      r(3230);
      var _ = r(30446),
        x = r(84661),
        S = r(91401),
        T = r(8496),
        b = r(34999),
        C = r(24932),
        k = r(96115);
      let w = (e) => {
        let {
            objectId: t,
            objectPosX: r,
            objectPosY: a,
            objectPos: i,
            objectType: s,
            objectsCount: n,
            children: l,
          } = e,
          u = (0, c.useMemo)(
            () => ({
              objectId: t,
              objectPosX: r,
              objectPosY: a,
              objectPos: i,
              objectType: s,
              objectsCount: n,
            }),
            [t, r, a, i, s, n],
          );
        return (0, o.jsx)(k.AnalyticsObjectContext.Provider, {
          value: u,
          children: l,
        });
      };
      var R = r(11858),
        A = r(97161),
        I = r(64035);
      let O = (e) => {
        let { tabId: t, tabPos: r, children: a, isTabSelectedByDefault: i } = e,
          s = (0, c.useMemo)(
            () => ({ tabId: t, tabPos: r, isTabSelectedByDefault: i }),
            [t, r, i],
          );
        return (0, o.jsx)(I.AnalyticsTabContext.Provider, {
          value: s,
          children: a,
        });
      };
      var L = r(19476),
        N = r(58554);
      r(90475);
      var U = r(44711),
        D = r(85969);
      ((i = n || (n = {}))[
        (i.RUP_MAIN_RADIO = ""
          .concat(s.RUP, "_")
          .concat(s.MAIN, "-")
          .concat(s.RADIO))
      ] = "RUP_MAIN_RADIO"),
        (i[
          (i.DISCOGRAPHY_CAROUSEL = ""
            .concat(s.DISCOGRAPHY, "_")
            .concat(s.CAROUSEL))
        ] = "DISCOGRAPHY_CAROUSEL"),
        (i[(i.ALBUMS_CAROUSEL = "".concat(s.ALBUMS, "_").concat(s.CAROUSEL))] =
          "ALBUMS_CAROUSEL"),
        (i[
          (i.COMPILATIONS_CAROUSEL = ""
            .concat(s.COMPILATIONS, "_")
            .concat(s.CAROUSEL))
        ] = "COMPILATIONS_CAROUSEL"),
        (i[
          (i.PLAYLISTS_CAROUSEL = ""
            .concat(s.PLAYLISTS, "_")
            .concat(s.CAROUSEL))
        ] = "PLAYLISTS_CAROUSEL"),
        (i[
          (i.ARTISTS_CAROUSEL = "".concat(s.ARTISTS, "_").concat(s.CAROUSEL))
        ] = "ARTISTS_CAROUSEL"),
        (i[(i.DISCOVERY_BLOCK = "".concat(s.DISCOVERY, "_").concat(s.BLOCK))] =
          "DISCOVERY_BLOCK"),
        (i[
          (i.PLAYLISTS_SIMILAR = "".concat(s.PLAYLISTS, "_").concat(s.SIMILAR))
        ] = "PLAYLISTS_SIMILAR"),
        (i[(i.SEARCH_HISTORY = "".concat(s.SEARCH, "_").concat(s.HISTORY))] =
          "SEARCH_HISTORY"),
        (i[
          (i.PLAYLISTS_SIMILAR_PLAYLIST = ""
            .concat(s.PLAYLISTS, "_")
            .concat(s.SIMILAR, "_")
            .concat(s.PLAYLIST))
        ] = "PLAYLISTS_SIMILAR_PLAYLIST");
    },
    18638: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return s;
        },
      });
      var a = r(52122),
        i = r(87770);
      let s = (e) => {
        let t = null;
        switch (e) {
          case i.R.HOME:
            t = a.Dm.MainScreen;
            break;
          case i.R.NON_MUSIC:
            t = a.Dm.NonmusicLandingScreen;
            break;
          case i.R.LANDING:
            t = a.Dm.DynamicScreen;
        }
        return t;
      };
    },
    91844: function (e, t, r) {
      "use strict";
      r.d(t, {
        AnalyticsBlockContext: function () {
          return a;
        },
      });
      let a = (0, r(98639).createContext)({
        blockId: void 0,
        blockType: void 0,
        blockIdForFrom: void 0,
        blockPosX: void 0,
        blockPosY: void 0,
        objectsCount: void 0,
      });
    },
    82025: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useAnalyticsBlock: function () {
            return s;
          },
        });
      var a = r(98639),
        i = r(91844);
      function s() {
        return (0, a.useContext)(i.AnalyticsBlockContext);
      }
    },
    47347: function (e, t, r) {
      "use strict";
      r.d(t, {
        AnalyticsHashContext: function () {
          return a;
        },
      });
      let a = (0, r(98639).createContext)({ hash: void 0 });
    },
    34999: function (e, t, r) {
      "use strict";
      r.d(t, {
        AnalyticsHashProvider: function () {
          return o;
        },
      });
      var a = r(9753),
        i = r(98639),
        s = r(3429),
        n = r(47347);
      let o = (e) => {
        let { children: t } = e,
          r = (0, i.useMemo)(() => ({ hash: (0, s.Z)() }), []);
        return (0, a.jsx)(n.AnalyticsHashContext.Provider, {
          value: r,
          children: t,
        });
      };
    },
    24932: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return s;
        },
      });
      var a = r(98639),
        i = r(47347);
      function s() {
        return (0, a.useContext)(i.AnalyticsHashContext);
      }
    },
    88861: function (e, t, r) {
      "use strict";
      r.d(t, {
        _: function () {
          return a;
        },
      });
      let a = (0, r(98639).createContext)({
        observeElement: () => {},
        unobserveElement: () => {},
      });
    },
    19476: function (e, t, r) {
      "use strict";
      r.d(t, {
        AnalyticsIntersectionObserverProvider: function () {
          return c;
        },
      });
      var a = r(9753),
        i = r(98639),
        s = r(3429),
        n = r(78507),
        o = r(88861);
      let c = (e) => {
        let { children: t } = e,
          r = (0, i.useRef)({}),
          c = (0, i.useRef)(
            (0, n.wE)(
              (e) => {
                let t = (0, n.SG)(e.target),
                  a = r.current[t];
                if (a) {
                  if (e.isIntersecting) {
                    let e = window.setTimeout(() => {
                      let e = String((0, s.Z)());
                      a.callback(!0, e), (a.showed = !0), (a.viewUuid = e);
                    }, 1e3);
                    a.timerId = e;
                  }
                  !e.isIntersecting &&
                    a.showed &&
                    (a.callback(!1, a.viewUuid),
                    (a.showed = !1),
                    (a.viewUuid = "")),
                    e.isIntersecting || window.clearTimeout(a.timerId);
                }
              },
              { threshold: 0.8 },
            ),
          ),
          l = (0, i.useCallback)((e) => {
            var t;
            !r.current[e.elementId] &&
              e.elementRef.current &&
              (null === (t = c.current) ||
                void 0 === t ||
                t.observe(e.elementRef.current),
              (r.current[e.elementId] = {
                showed: !1,
                viewUuid: "",
                callback: e.callback,
              }));
          }, []),
          u = (0, i.useCallback)((e) => {
            let t = r.current[e];
            t && (t.showed && t.callback(!1, t.viewUuid), delete r.current[e]);
          }, []);
        (0, i.useEffect)(
          () => () => {
            var e;
            return null === (e = c.current) || void 0 === e
              ? void 0
              : e.disconnect();
          },
          [],
        );
        let d = (0, i.useMemo)(
          () => ({ observeElement: l, unobserveElement: u }),
          [l, u],
        );
        return (0, a.jsx)(o._.Provider, { value: d, children: t });
      };
    },
    58554: function (e, t, r) {
      "use strict";
      r.d(t, {
        useAnalyticsIntersectionObserver: function () {
          return c;
        },
      });
      var a = r(98639),
        i = r(90475),
        s = r(82025),
        n = r(85969),
        o = r(88861);
      let c = function () {
        let { callback: e, singleEvent: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = (0, a.useRef)(null),
          c = (0, i.p)(),
          { blockId: l } = (0, s.useAnalyticsBlock)(),
          { objectId: u, objectType: d } = (0, n.useAnalyticsObject)(),
          h = "".concat(l, "_").concat(d, "_").concat(u),
          f = (0, a.useContext)(o._),
          m = (0, a.useCallback)(
            (r, a) => {
              e ? e(r) : c(r, a), t && f.unobserveElement(h);
            },
            [e, f, h, c, t],
          );
        return (
          (0, a.useEffect)(
            () => (
              f.observeElement({ elementRef: r, elementId: h, callback: m }),
              () => {
                f.unobserveElement(h);
              }
            ),
            [e, f, m, h, c],
          ),
          { ref: r, intersectionPropertyId: h }
        );
      };
    },
    96115: function (e, t, r) {
      "use strict";
      r.d(t, {
        AnalyticsObjectContext: function () {
          return a;
        },
      });
      let a = (0, r(98639).createContext)({
        objectType: void 0,
        objectId: void 0,
        objectPosX: void 0,
        objectPosY: void 0,
        objectPos: void 0,
        objectsCount: void 0,
      });
    },
    85969: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useAnalyticsObject: function () {
            return s;
          },
        });
      var a = r(98639),
        i = r(96115);
      function s() {
        return (0, a.useContext)(i.AnalyticsObjectContext);
      }
    },
    94326: function (e, t, r) {
      "use strict";
      r.d(t, {
        AnalyticsPageContext: function () {
          return a;
        },
      });
      let a = (0, r(98639).createContext)({ pageId: void 0 });
    },
    87004: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useAnalyticsPage: function () {
            return s;
          },
        });
      var a = r(98639),
        i = r(94326);
      function s() {
        return (0, a.useContext)(i.AnalyticsPageContext);
      }
    },
    68721: function (e, t, r) {
      "use strict";
      r.d(t, {
        AnalyticsSkeletonContext: function () {
          return a;
        },
      });
      let a = (0, r(98639).createContext)({ skeleton: void 0 });
    },
    82124: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useAnalyticsSkeleton: function () {
            return s;
          },
        });
      var a = r(98639),
        i = r(68721);
      function s() {
        return (0, a.useContext)(i.AnalyticsSkeletonContext);
      }
    },
    44490: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AnalyticsSlideContext: function () {
            return a;
          },
        });
      let a = (0, r(98639).createContext)({
        slidesType: void 0,
        slideId: void 0,
        slidesCount: void 0,
        slidePos: void 0,
      });
    },
    3230: function (e, t, r) {
      "use strict";
      r.d(t, {
        v: function () {
          return s;
        },
      });
      var a = r(98639),
        i = r(44490);
      let s = () => (0, a.useContext)(i.AnalyticsSlideContext);
    },
    64035: function (e, t, r) {
      "use strict";
      r.d(t, {
        AnalyticsTabContext: function () {
          return a;
        },
      });
      let a = (0, r(98639).createContext)({
        tabId: void 0,
        tabPos: void 0,
        isTabSelectedByDefault: void 0,
      });
    },
    98723: function (e, t, r) {
      "use strict";
      r.d(t, {
        useAnalyticsTab: function () {
          return s;
        },
      });
      var a = r(98639),
        i = r(64035);
      function s() {
        return (0, a.useContext)(i.AnalyticsTabContext);
      }
    },
    92994: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AnalyticsContext: function () {
            return i;
          },
          useAnalytics: function () {
            return s;
          },
        });
      var a = r(98639);
      let i = (0, a.createContext)(null);
      function s() {
        return (0, a.useContext)(i);
      }
    },
    91042: function (e, t, r) {
      "use strict";
      r.d(t, {
        useMetrika: function () {
          return o;
        },
      });
      var a = r(98639),
        i = r(33329);
      let s = null,
        n = [],
        o = () => {
          let e = (0, i.w)(),
            [t, r] = (0, a.useState)(null !== s),
            o = (0, a.useCallback)((e) => {
              n.forEach((t) => {
                t(e);
              }),
                (n = []);
            }, []),
            c = (0, a.useCallback)(
              (a) => {
                var i;
                if (
                  void 0 !==
                    (null === (i = window.Ya) || void 0 === i
                      ? void 0
                      : i.Metrika2) &&
                  !t
                )
                  try {
                    (s = new window.Ya.Metrika2({ ...a })), r(!0), o(s);
                  } catch (t) {
                    ("string" == typeof t || t instanceof Error) && e.error(t);
                  }
              },
              [t, e, o],
            ),
            l = (0, a.useCallback)((e) => {
              s
                ? s.hit(e)
                : n.push((t) => {
                    t.hit(e);
                  });
            }, []);
          return {
            isLoaded: t,
            init: c,
            count: (0, a.useCallback)(function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "counter";
              s
                ? s.params({ [t]: e })
                : n.push((r) => {
                    r.params({ [t]: e });
                  });
            }, []),
            hit: l,
          };
        };
    },
    79285: function (e, t, r) {
      "use strict";
      r.d(t, {
        AuthorizationChecker: function () {
          return l;
        },
      }),
        r(9753);
      var a = r(9544),
        i = r(74717),
        s = r(98639),
        n = r(20958),
        o = r(30410),
        c = r(55553);
      let l = (0, a.Pi)((e) => {
        var t, r;
        let { nonce: a } = e,
          l = (0, s.useContext)(i.ServerInsertedHTMLContext),
          u = (0, o.useContainer)(),
          {
            user: d,
            location: { pathname: h, searchParams: f, host: m, tld: g },
          } = (0, c.useStore)(),
          p = (0, s.useCallback)(
            (e) => {
              window.location.href = e;
            },
            [l, a],
          ),
          y = u.get(n.xi);
        y.setRedirectUrl({ pathname: h, searchParams: f, host: m, tld: g }),
          null === (r = y.setTokenOwnerLogin) ||
            void 0 === r ||
            r.call(
              y,
              null === (t = d.account) || void 0 === t ? void 0 : t.login,
            ),
          y.setRedirectHandler(p),
          y.check();
      });
    },
    38885: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return i;
        },
      });
      var a = r(8655);
      class i {
        setRedirectUrl(e) {
          let { pathname: t, host: r, searchParams: a, tld: i } = e;
          (this.host = null != r ? r : this.host),
            (this.tld = null != i ? i : this.tld),
            (this.searchParams = null != a ? a : this.searchParams),
            (this.pathname = null != t ? t : this.pathname);
        }
        setRedirectHandler(e) {
          this.redirect = e;
        }
        get passportLogin() {}
        constructor(e, t) {
          (0, a._)(this, "storage", void 0),
            (0, a._)(this, "config", void 0),
            (0, a._)(this, "pathname", void 0),
            (0, a._)(this, "searchParams", void 0),
            (0, a._)(this, "host", void 0),
            (0, a._)(this, "tld", void 0),
            (0, a._)(this, "redirect", void 0),
            (this.storage = e),
            (this.config = t),
            (this.pathname = ""),
            (this.searchParams = ""),
            (this.host = ""),
            (this.tld = ""),
            (this.redirect = () => {});
        }
      }
    },
    97445: function (e, t, r) {
      "use strict";
      r.d(t, {
        J: function () {
          return l;
        },
      });
      var a = r(8655),
        i = r(61185),
        s = r(51179),
        n = r(97230),
        o = r(49080),
        c = r(38885);
      class l extends c.z {
        check() {
          if (this.dataIsLoaded) {
            if (!this.passportLogin && this.token) {
              this.removeToken(), this.reloadPage();
              return;
            }
            if (!this.token && this.passportLogin && !this.isOAuthPage) {
              this.redirectToAuthorizationUrl();
              return;
            }
            if (
              this.passportLogin &&
              this.tokenOwnerLogin &&
              this.passportLogin !== this.tokenOwnerLogin
            ) {
              this.redirectToOAuthUrl();
              return;
            }
          }
        }
        get isOAuthPage() {
          return window.location.pathname.endsWith("/oauth");
        }
        get oauthUrl() {
          let {
              oauthCredentials: { host: e, clientId: t },
              passportCredentials: { origin: r },
            } = this.config,
            a = ""
              .concat(this.pathname)
              .concat(this.searchParams ? "?".concat(this.searchParams) : "");
          "/" === a.charAt(0) && (a = a.substring(1));
          let n = (0, i.z)(e, s.li.RU, o.M),
            c = new URL("".concat(n, "/authorize")),
            l = ""
              .concat(origin, "/oauth?redirectUri=")
              .concat(encodeURIComponent(a), "&language=")
              .concat(this.language);
          return (
            c.searchParams.append("response_type", "token"),
            c.searchParams.append("display", "popup"),
            c.searchParams.append("scope", "music:content"),
            c.searchParams.append("scope", "music:read"),
            c.searchParams.append("scope", "music:write"),
            c.searchParams.append("client_id", t),
            c.searchParams.append("redirect_uri", l),
            c.searchParams.append("state", this.oauthState),
            c.searchParams.append("origin", r),
            c.searchParams.append("language", this.language),
            c.toString()
          );
        }
        get authorizationUrl() {
          let {
              passportCredentials: { origin: e, host: t },
            } = this.config,
            r = (0, i.z)(t, s.li.RU, o.M),
            a = this.oauthUrl,
            n = new URL("".concat(r, "/auth"));
          return (
            n.searchParams.append("noreturn", "1"),
            n.searchParams.append("origin", e),
            n.searchParams.append("language", this.language),
            n.searchParams.append("retpath", String(a)),
            n.toString()
          );
        }
        reloadPage() {
          window.location.reload();
        }
        redirectToOAuthUrl() {
          this.oauthUrl && this.redirect(this.oauthUrl);
        }
        redirectToAuthorizationUrl() {
          this.authorizationUrl && this.redirect(this.authorizationUrl);
        }
        setTokenOwnerLogin(e) {
          this.tokenOwnerLogin = e;
        }
        setDataIsLoaded() {
          this.dataIsLoaded = !0;
        }
        setToken(e) {
          e.state === this.oauthState &&
            this.storage.set(n.B.Oauth, e.token, {
              expires: Math.floor(e.expiresIn / 86400),
            });
        }
        get token() {
          if (this.passportLogin) return this.storage.get(n.B.Oauth) || void 0;
        }
        removeToken() {
          this.storage.remove(n.B.Oauth);
        }
        updateOauthState() {
          let e = Math.round(1e11 * Math.random()).toString(16);
          this.storage.set(n.B.OauthState, e, { expires: 1 });
        }
        get oauthState() {
          return this.storage.get(n.B.OauthState) || "";
        }
        constructor(e, t, r) {
          super(e, t),
            (0, a._)(this, "language", void 0),
            (0, a._)(this, "dataIsLoaded", void 0),
            (0, a._)(this, "tokenOwnerLogin", void 0),
            (this.language = r),
            (this.dataIsLoaded = !1),
            this.oauthState || this.updateOauthState(),
            this.check();
        }
      }
    },
    20958: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ar: function () {
          return E;
        },
        Ci: function () {
          return h;
        },
        DR: function () {
          return i;
        },
        Dw: function () {
          return n;
        },
        EN: function () {
          return F;
        },
        Eu: function () {
          return c;
        },
        Hz: function () {
          return O;
        },
        OT: function () {
          return y;
        },
        O_: function () {
          return N;
        },
        P0: function () {
          return a;
        },
        Rt: function () {
          return T;
        },
        SL: function () {
          return D;
        },
        SR: function () {
          return k;
        },
        U5: function () {
          return f;
        },
        V0: function () {
          return m;
        },
        Ve: function () {
          return H;
        },
        X8: function () {
          return L;
        },
        Xt: function () {
          return g;
        },
        YR: function () {
          return l;
        },
        ZO: function () {
          return R;
        },
        c5: function () {
          return o;
        },
        cG: function () {
          return u;
        },
        ce: function () {
          return p;
        },
        dk: function () {
          return I;
        },
        g5: function () {
          return v;
        },
        jb: function () {
          return A;
        },
        lk: function () {
          return C;
        },
        n: function () {
          return _;
        },
        o: function () {
          return M;
        },
        pI: function () {
          return s;
        },
        q2: function () {
          return P;
        },
        qV: function () {
          return d;
        },
        qs: function () {
          return B;
        },
        sD: function () {
          return U;
        },
        uR: function () {
          return j;
        },
        vl: function () {
          return w;
        },
        w5: function () {
          return S;
        },
        xi: function () {
          return x;
        },
        yO: function () {
          return W;
        },
        zQ: function () {
          return b;
        },
      });
      let a = "Logger",
        i = "ModelActionsLogger",
        s = "HttpClient",
        n = "UgcUploadHttpClient",
        o = "AccountResource",
        c = "UsersResource",
        l = "LandingResource",
        u = "Landing3Resource",
        d = "AlbumResource",
        h = "SlidesResource",
        f = "Config",
        m = "Storage",
        g = "CookieStorage",
        p = "LocalStorage",
        y = "LibraryResource",
        v = "TracksResource",
        E = "SessionStorage",
        P = "TopResource",
        _ = "ArtistsResource",
        x = "Authorization",
        S = "RotorResource",
        T = "SearchResource",
        b = "SearchPlaylistResource",
        C = "PlaylistResource",
        k = "PlaylistsResource",
        w = "PinResource",
        R = "MetatagsResource",
        A = "TagResource",
        I = "FeedResource",
        O = "CONTAINER_USER_ID_TOKEN",
        L = "PinsResource",
        N = "MusicHistoryResource",
        U = "ChartResource",
        D = "CONTAINER_I18N_STORAGE",
        F = "DynamicPagesResource",
        H = "LyricViewsResource",
        M = "NonMusicResource",
        j = "DonationResource",
        W = "LoaderResource",
        B = "PrefixlessResource";
    },
    30410: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ContainerContext: function () {
            return s;
          },
          useContainer: function () {
            return n;
          },
        });
      var a = r(37810),
        i = r(98639);
      let s = (0, i.createContext)(null);
      function n() {
        let e = (0, i.useContext)(s);
        if (null === e)
          throw new a.y(
            "Container cannot be null, please add a context provider",
            { code: "E_CONTEXT_CONTAINER_NULL" },
          );
        return e;
      }
    },
    92225: function (e, t, r) {
      "use strict";
      r.d(t, {
        useShortMonth: function () {
          return i;
        },
      });
      var a = r(80542);
      let i = (e) => {
        let { formatMessage: t } = (0, a.Z)(),
          r = {
            0: t({ id: "calendar.january-short" }),
            1: t({ id: "calendar.february-short" }),
            2: t({ id: "calendar.march-short" }),
            3: t({ id: "calendar.april-short" }),
            4: t({ id: "calendar.may-short" }),
            5: t({ id: "calendar.june-short" }),
            6: t({ id: "calendar.july-short" }),
            7: t({ id: "calendar.august-short" }),
            8: t({ id: "calendar.september-short" }),
            9: t({ id: "calendar.october-short" }),
            10: t({ id: "calendar.november-short" }),
            11: t({ id: "calendar.december-short" }),
          };
        if (e) return r[new Date(e).getMonth()];
      };
    },
    5449: function (e, t, r) {
      "use strict";
      var a, i;
      r.d(t, {
        B: function () {
          return a;
        },
      }),
        ((i = a || (a = {})).WINDOW_MINIMIZE = "WINDOW_MINIMIZE"),
        (i.WINDOW_MAXIMIZE = "WINDOW_MAXIMIZE"),
        (i.WINDOW_CLOSE = "WINDOW_CLOSE"),
        (i.INSTALL_UPDATE = "INSTALL_UPDATE"),
        (i.UPDATE_AVAILABLE = "UPDATE_AVAILABLE"),
        (i.MOD_UPDATE_AVAILABLE = "MOD_UPDATE_AVAILABLE"),
        (i.APPLICATION_READY = "APPLICATION_READY"),
        (i.GET_PASSPORT_LOGIN = "GET_PASSPORT_LOGIN"),
        (i.RELEASE_NOTES_READY = "RELEASE_NOTES_READY"),
        (i.SHOW_RELEASE_NOTES = "SHOW_RELEASE_NOTES"),
        (i.REFRESH_APPLICATION_DATA = "REFRESH_APPLICATION_DATA"),
        (i.PLAYER_STATE = "PLAYER_STATE"),
        (i.PLAYER_ACTION = "PLAYER_ACTION"),
        (i.OPEN_DEEPLINK = "OPEN_DEEPLINK"),
        (i.FIRST_LAUNCH = "FIRST_LAUNCH"),
        (i.APPLICATION_THEME = "APPLICATION_THEME");
    },
    21920: function (e, t, r) {
      "use strict";
      r.d(t, {
        HistoryContext: function () {
          return i;
        },
        useHistory: function () {
          return s;
        },
      });
      var a = r(98639);
      let i = (0, a.createContext)({
        pushState: () => {},
        replaceState: () => {},
        forward: () => {},
        back: () => {},
        canForward: !1,
        canBack: !1,
        state: null,
      });
      function s() {
        return (0, a.useContext)(i);
      }
    },
    5979: function (e, t, r) {
      "use strict";
      r.d(t, {
        useI18nStorage: function () {
          return n;
        },
      });
      var a = r(98639),
        i = r(20958),
        s = r(30410);
      let n = () => {
        let e = (0, s.useContainer)().get(i.SL),
          t = e.getLanguage(),
          r = e.getDefaultLanguage(),
          n = e.getDictionary(),
          o = (0, a.useCallback)(
            (t) => {
              e.setLanguage(t);
            },
            [t],
          );
        return (0, a.useMemo)(
          () => ({
            dictionary: n,
            language: t,
            defaultLanguage: r,
            setLanguage: o,
          }),
          [t, o],
        );
      };
    },
    87628: function (e, t, r) {
      "use strict";
      r.d(t, {
        kF: function () {
          return ej.k;
        },
        SL: function () {
          return E;
        },
        aU: function () {
          return k.aU;
        },
        BE: function () {
          return k.BE;
        },
        J: function () {
          return k.J;
        },
        fC: function () {
          return b.AnalyticsContext;
        },
        tK: function () {
          return k.tK;
        },
        e4: function () {
          return k.e4;
        },
        nZ: function () {
          return k.nZ;
        },
        Rh: function () {
          return k.Rh;
        },
        Lh: function () {
          return k.Lh;
        },
        Yv: function () {
          return k.Yv;
        },
        zA: function () {
          return k.zA;
        },
        hw: function () {
          return k.hw;
        },
        xi: function () {
          return O.xi;
        },
        U5: function () {
          return O.U5;
        },
        Xt: function () {
          return O.Xt;
        },
        pI: function () {
          return O.pI;
        },
        uh: function () {
          return O.SL;
        },
        ce: function () {
          return O.ce;
        },
        P0: function () {
          return O.P0;
        },
        Ar: function () {
          return O.Ar;
        },
        V0: function () {
          return O.V0;
        },
        Hz: function () {
          return O.Hz;
        },
        Gr: function () {
          return P;
        },
        cU: function () {
          return _;
        },
        Xl: function () {
          return L.ContainerContext;
        },
        sH: function () {
          return ej.s;
        },
        Uv: function () {
          return m;
        },
        BO: function () {
          return J.B;
        },
        co: function () {
          return S;
        },
        Gq: function () {
          return x;
        },
        pe: function () {
          return g;
        },
        Tl: function () {
          return et.HistoryContext;
        },
        QQ: function () {
          return ee;
        },
        VY: function () {
          return ei.LayoutContext;
        },
        t8: function () {
          return er.t;
        },
        Gu: function () {
          return eH.G;
        },
        Xe: function () {
          return eO.MediaConfigControllerContext;
        },
        W$: function () {
          return ed.W;
        },
        wx: function () {
          return p;
        },
        t4: function () {
          return eM.t;
        },
        ji: function () {
          return eD.j;
        },
        ed: function () {
          return e6.SHORTCUTS_LIST;
        },
        $P: function () {
          return k.$P;
        },
        rL: function () {
          return tn;
        },
        B1: function () {
          return eR.SearchFeedbackContext;
        },
        yx: function () {
          return e$.y;
        },
        Dt: function () {
          return T;
        },
        cw: function () {
          return e5.ShortcutsContext;
        },
        OI: function () {
          return e8;
        },
        ft: function () {
          return e7;
        },
        yr: function () {
          return e2;
        },
        R8: function () {
          return eL.SonataContext;
        },
        IP: function () {
          return es.SplashScreenContext;
        },
        BU: function () {
          return w.B;
        },
        xf: function () {
          return D.StoreContext;
        },
        K8: function () {
          return F.M;
        },
        Q2: function () {
          return ts.Q;
        },
        Ni: function () {
          return tc.ThemeContext;
        },
        Lx: function () {
          return v;
        },
        kz: function () {
          return tu;
        },
        tN: function () {
          return eW;
        },
        GA: function () {
          return el;
        },
        YT: function () {
          return Y;
        },
        GL: function () {
          return K;
        },
        Sv: function () {
          return X;
        },
        L6: function () {
          return G;
        },
        z: function () {
          return N;
        },
        K7: function () {
          return eK;
        },
        gf: function () {
          return tt;
        },
        KO: function () {
          return k.KO;
        },
        XG: function () {
          return tm;
        },
        aM: function () {
          return ef;
        },
        ZO: function () {
          return V;
        },
        tE: function () {
          return ti;
        },
        u9: function () {
          return Q;
        },
        NK: function () {
          return td;
        },
        jP: function () {
          return ea;
        },
        Xf: function () {
          return em.X;
        },
        Sq: function () {
          return ep.S;
        },
        Q$: function () {
          return th.Q;
        },
        Us: function () {
          return tg;
        },
        SZ: function () {
          return q;
        },
        L: function () {
          return eG;
        },
        p$: function () {
          return eT;
        },
        bo: function () {
          return eg.b;
        },
        sE: function () {
          return tp;
        },
        oo: function () {
          return tf;
        },
        Z7: function () {
          return ev;
        },
        AG: function () {
          return eB;
        },
        rd: function () {
          return ew;
        },
        z$: function () {
          return b.useAnalytics;
        },
        qY: function () {
          return k.qY;
        },
        RQ: function () {
          return k.RQ;
        },
        Vf: function () {
          return k.Vf;
        },
        rK: function () {
          return k.rK;
        },
        lV: function () {
          return k.lV;
        },
        uK: function () {
          return L.useContainer;
        },
        x5: function () {
          return k.x5;
        },
        ZP: function () {
          return e4.useDisableShortcuts;
        },
        NM: function () {
          return tr;
        },
        k6: function () {
          return et.useHistory;
        },
        m5: function () {
          return eb;
        },
        ZS: function () {
          return ez.useI18nStorage;
        },
        $Y: function () {
          return ei.useLayout;
        },
        wL: function () {
          return en.w;
        },
        Sc: function () {
          return eO.useMediaConfigController;
        },
        sv: function () {
          return C.useMetrika;
        },
        dE: function () {
          return eo;
        },
        s0: function () {
          return eS;
        },
        RV: function () {
          return eE;
        },
        Sf: function () {
          return ty.useNonMusicSubscribeText;
        },
        d$: function () {
          return eh.d;
        },
        qm: function () {
          return eN.usePlayableContext;
        },
        bA: function () {
          return eF.usePlayableTrailerContext;
        },
        Qh: function () {
          return eU.usePlayableVibeContext;
        },
        oz: function () {
          return tl.usePreferredColorScheme;
        },
        YS: function () {
          return ey;
        },
        V$: function () {
          return eP;
        },
        NO: function () {
          return eu.useRumPage;
        },
        zB: function () {
          return B;
        },
        sA: function () {
          return eI;
        },
        hJ: function () {
          return ex;
        },
        X0: function () {
          return k.X0;
        },
        zx: function () {
          return k.zx;
        },
        lA: function () {
          return k.lA;
        },
        PK: function () {
          return k.PK;
        },
        IO: function () {
          return k.IO;
        },
        bX: function () {
          return k.bX;
        },
        qK: function () {
          return ek;
        },
        KR: function () {
          return Z.useShortMonth;
        },
        XU: function () {
          return e3.useShortcuts;
        },
        R$: function () {
          return eL.useSonata;
        },
        NN: function () {
          return es.useSplashScreen;
        },
        oR: function () {
          return D.useStore;
        },
        Fg: function () {
          return tc.useTheme;
        },
        yy: function () {
          return H;
        },
      });
      var a,
        i,
        s,
        n,
        o,
        c,
        l,
        u,
        d,
        h,
        f,
        m,
        g,
        p,
        y,
        v,
        E,
        P,
        _,
        x,
        S,
        T,
        b = r(92994),
        C = r(91042),
        k = r(41701),
        w = r(97230),
        R = r(98639);
      let A = (e) => {
          let t = Object.entries(e)
            .map((e) => {
              let [t, r] = e;
              return "".concat(t, "=").concat(encodeURIComponent(r));
            })
            .join("&");
          return t ? "?".concat(t) : "";
        },
        I = (e, t) => {
          {
            let r = e.replaceAll(/(\/:\w+)/g, "");
            return "".concat(r).concat(A(t));
          }
        };
      var O = r(20958),
        L = r(30410);
      function N(e, t) {
        let [r, a] = e.split("?"),
          i = null == r ? void 0 : r.split("/").filter((e) => "" !== e),
          s = {},
          n = t.split("/").filter((e) => "" !== e);
        if (
          (null == i ? void 0 : i.length) !== n.length ||
          (n[0] && !e.startsWith("/".concat(n[0])))
        )
          return s;
        for (let e = 0; e < n.length; e++) {
          let t = n[e],
            r = i && i[e];
          (null == t ? void 0 : t.startsWith(":")) &&
            r &&
            (s[t.substring(1)] = r);
        }
        return (
          a &&
            a.split("&").map((e) => {
              let [t, r] = e.split("=");
              t && void 0 !== r && (s[t] = r);
            }),
          s
        );
      }
      var U = r(61185),
        D = r(55553),
        F = r(49080);
      let H = (e) => {
        let { location: t } = (0, D.useStore)();
        return (0, U.z)(e, t.tld, F.M);
      };
      var M = r(8655);
      class j {
        register(e) {
          this.pages[e] = this.regexpFromPattern(e);
        }
        isUrlSupported(e) {
          return Object.values(this.pages).some((t) => t.test(e));
        }
        getPatternForUrl(e) {
          return Object.keys(this.pages).find((t) => {
            var r;
            return null === (r = this.pages[t]) || void 0 === r
              ? void 0
              : r.test(e);
          });
        }
        regexpFromPattern(e) {
          let t = e.replace(/\/:\w+/gi, "/[\\wа-яА-ЯёЁ %.,&-]+");
          return RegExp("^".concat(t, "/?(\\?.*)?$"), "i");
        }
        constructor() {
          (0, M._)(this, "pages", {});
        }
      }
      let W = new j();
      W.register("/"),
        W.register("/settings"),
        W.register("/album/:albumId"),
        W.register("/artist/:artistId"),
        W.register("/artist/:artistId/similar"),
        W.register("/artist/:artistId/tracks"),
        W.register("/artist/:artistId/discography"),
        W.register("/artist/:artistId/albums"),
        W.register("/artist/:artistId/compilations"),
        W.register("/artist/:artistId/concerts"),
        W.register("/artist/:artistId/familiar"),
        W.register("/chart"),
        W.register("/collection"),
        W.register("/collection/albums"),
        W.register("/collection/artists"),
        W.register("/collection/dislikes"),
        W.register("/collection/non-music"),
        W.register("/collection/non-music/liked"),
        W.register("/collection/playlists/created"),
        W.register("/collection/playlists/liked"),
        W.register("/collection/playlists"),
        W.register("/collection/shelf"),
        W.register("/collection/shelf/liked"),
        W.register("/collection/shelf/recently-played"),
        W.register("/mixes"),
        W.register("/mixes/:navigationId"),
        W.register("/genre/:metatagId"),
        W.register("/genre/:metatagId/albums"),
        W.register("/genre/:metatagId/artists"),
        W.register("/genre/:metatagId/playlists"),
        W.register("/playlists/:playlistUuid"),
        W.register("/post/:promoId"),
        W.register("/search"),
        W.register("/search/history"),
        W.register("/users/:userId/playlists/:kind"),
        W.register("/tag/:tagId"),
        W.register("/entities/:blockType/:blockId"),
        W.register("/music-history"),
        W.register("/non-music"),
        W.register("/landing/:skeleton"),
        W.register("/slides/artist/:artistId"),
        W.register("/slides/user");
      let B = (e, t) => {
          let r = H((0, L.useContainer)().get(O.U5).oldWebHost);
          return (0, R.useMemo)(() => {
            let a = !0,
              i = !0,
              s = e;
            try {
              new URL(e);
            } catch (e) {
              a = !1;
            }
            if (!a) {
              if (W.isUrlSupported(e)) {
                let t = W.getPatternForUrl(e);
                t
                  ? ((s = I(t, N(e, t))), (i = !1))
                  : (s = "https://".concat(r).concat(e));
              } else s = "https://".concat(r).concat(e);
            }
            let n = i || t ? "_blank" : "_self",
              o = i || t ? "noreferrer noopener" : "";
            return { href: s, isExternalLink: i || !!t, target: n, rel: o };
          }, [e, r, t]);
        },
        q = (e) => {
          if (!W.isUrlSupported(e)) return null;
          let t = W.getPatternForUrl(e);
          return t ? I(t, N(e, t)) : null;
        };
      async function V(e) {
        let {
          tld: t,
          env: a,
          forwardedForY: i,
          traceparent: s,
          tracestate: n,
          serverDetectedLang: o,
          changeLanguageToken: c,
        } = e;
        {
          let { createDesktopContainer: e } = await Promise.all([
            r.e(6977),
            r.e(6965),
            r.e(2505),
            r.e(5910),
            r.e(2301),
          ]).then(r.bind(r, 72301));
          return e({ tld: t, env: a });
        }
      }
      let Y = () => ({ year: "numeric", month: "long", day: "numeric" }),
        K = () => ({ day: "numeric" }),
        G = () => ({ year: "numeric" }),
        z = (e, t) =>
          e.getDate() === t.getDate() &&
          e.getMonth() === t.getMonth() &&
          e.getFullYear() === t.getFullYear();
      ((a = m || (m = {})).TODAY = "today"),
        (a.YESTERDAY = "yesterday"),
        (a.DATE = "date"),
        (a.DATE_WITH_YEAR = "date-with-year");
      let Q = (e) => {
          let t = new Date();
          if (z(t, e)) return "today";
          let r = new Date();
          return (r.setDate(r.getDate() - 1), z(r, e))
            ? "yesterday"
            : t.getFullYear() !== e.getFullYear()
              ? "date-with-year"
              : "date";
        },
        X = () => ({ timeStyle: "short" });
      var Z = r(92225),
        J = r(5449);
      class $ {
        isLocationNotEqual(e) {
          return this.data.href !== e;
        }
        toString() {
          return JSON.stringify(this.data);
        }
        constructor(e, t = null, r = null) {
          (0, M._)(this, "data", void 0),
            (0, M._)(this, "next", void 0),
            (0, M._)(this, "prev", void 0),
            (this.data = e),
            (this.next = t),
            (this.prev = r);
        }
      }
      class ee {
        replaceState(e) {
          let t = new $(e, null, null);
          this.current && (t = new $(e, this.current.next, this.current.prev)),
            (this.current = t),
            this.updateSessionStorage();
        }
        pushState(e) {
          let t = new $(e, null, null);
          this.current &&
            this.current.isLocationNotEqual(e.href) &&
            ((t = new $(e, null, this.current)), (this.current.next = t)),
            (this.current = t),
            this.updateSessionStorage();
        }
        get state() {
          return this.current;
        }
        get canForward() {
          var e;
          return !!(null === (e = this.current) || void 0 === e
            ? void 0
            : e.next);
        }
        get canBack() {
          var e;
          return !!(null === (e = this.current) || void 0 === e
            ? void 0
            : e.prev);
        }
        forward() {
          var e;
          if (!this.canForward) return;
          let t = null === (e = this.current) || void 0 === e ? void 0 : e.next;
          t && (this.current = t), this.updateSessionStorage();
        }
        back() {
          var e;
          if (!this.canBack) return;
          let t = null === (e = this.current) || void 0 === e ? void 0 : e.prev;
          t && (this.current = t), this.updateSessionStorage();
        }
        updateSessionStorage() {
          this.current &&
            this.sessionStorage.set(w.B.SessionHistoryState, this.current.data);
        }
        restoreHistory() {
          let e = this.sessionStorage.get(w.B.SessionHistoryState);
          e && this.replaceState(e);
        }
        constructor(e) {
          (0, M._)(this, "sessionStorage", void 0),
            (0, M._)(this, "current", void 0),
            (this.sessionStorage = e),
            (this.current = null),
            this.restoreHistory();
        }
      }
      var et = r(21920),
        er = r(71613);
      let ea = (e) => (e < er.A.Mobile ? er.t.Mobile : er.t.Desktop);
      var ei = r(85449),
        es = r(37869),
        en = r(33329);
      let eo = () => (0, L.useContainer)().get(O.DR);
      var ec = r(42288);
      let el = (e) =>
        (0, ec.pj)({
          nominative: e.nominative,
          genitive: e.genitive,
          dative: e.dative,
          accusative: e.accusative,
          instrumental: e.instrumental,
          prepositional: e.prepositional,
        });
      var eu = r(11408),
        ed = r(75025),
        eh = r(84544);
      function ef() {
        return window.BRANCH;
      }
      var em = r(35188),
        eg = r(37205),
        ep = r(65713);
      let ey = () => {
          let e = (0, L.useContainer)(),
            t = e.get(O.c5),
            r = e.get(O.Eu),
            a = e.get(O.YR),
            i = e.get(O.cG),
            s = e.get(O.qV),
            n = e.get(O.OT),
            o = e.get(O.g5),
            c = e.get(O.q2),
            l = e.get(O.n),
            u = e.get(O.Ci),
            d = e.get(O.w5),
            h = e.get(O.Rt),
            f = e.get(O.zQ),
            m = e.get(O.lk),
            g = e.get(O.SR),
            p = e.get(O.vl),
            y = e.get(O.ZO),
            v = e.get(O.jb),
            E = e.get(O.dk),
            P = e.get(O.X8),
            _ = e.get(O.O_),
            x = e.get(O.EN),
            S = e.get(O.sD),
            T = e.get(O.Ve),
            b = e.get(O.o);
          return {
            accountResource: t,
            usersResource: r,
            landingResource: a,
            landing3Resource: i,
            albumResource: s,
            libraryResource: n,
            tracksResource: o,
            topResource: c,
            artistsResource: l,
            slidesResource: u,
            rotorResource: d,
            searchResource: h,
            searchPlaylistResource: f,
            playlistResource: m,
            playlistsResource: g,
            pinResource: p,
            metatagsResource: y,
            tagResource: v,
            feedResource: E,
            pinsResource: P,
            musicHistoryResource: _,
            dynamicPagesResource: x,
            chartResource: S,
            lyricViewsResource: T,
            nonMusicResource: b,
            donationResource: e.get(O.uR),
            loaderResource: e.get(O.yO),
            prefixlessResource: e.get(O.qs),
          };
        },
        ev = (e) => e.features.nonMusic,
        eE = () => ev((0, L.useContainer)().get(O.U5));
      ((i = g || (g = {})).WebNext = "WebNext"),
        (i.WebNextAlbumDisableVersions = "WebNextAlbumDisableVersions"),
        (i.WebNextAlbumDisableTracks = "WebNextAlbumDisableTracks"),
        (i.WebNextAlbumDisableLatestGenreAlbums =
          "WebNextAlbumDisableLatestGenreAlbums"),
        (i.WebNextAlbumDisableOtherArtistAlbums =
          "WebNextAlbumDisableOtherArtistAlbums"),
        (i.WebNextArtistDisableLastReleases =
          "WebNextArtistDisableLastReleases"),
        (i.WebNextArtistDisablePopularTracks =
          "WebNextArtistDisablePopularTracks"),
        (i.WebNextArtistDisablePopularAlbums =
          "WebNextArtistDisablePopularAlbums"),
        (i.WebNextArtistDisableDiscography = "WebNextArtistDisableDiscography"),
        (i.WebNextArtistDisableCompilations =
          "WebNextArtistDisableCompilations"),
        (i.WebNextArtistDisablePlaylists = "WebNextArtistDisablePlaylists"),
        (i.WebNextArtistDisableSimilarArtists =
          "WebNextArtistDisableSimilarArtists"),
        (i.WebNextBlockFullscreen = "WebNextBlockFullscreen"),
        (i.WebNextDisableCollection = "WebNextDisableCollection"),
        (i.WebNextDisableCollectionArtists = "WebNextDisableCollectionArtists"),
        (i.WebNextDisableCollectionAlbums = "WebNextDisableCollectionAlbums"),
        (i.WebNextDisableCollectionCreatedPlaylists =
          "WebNextDisableCollectionCreatedPlaylists"),
        (i.WebNextDisableCollectionLikedPlaylists =
          "WebNextDisableCollectionLikedPlaylists"),
        (i.WebNextDisableLanding = "WebNextDisableLanding"),
        (i.WebNextDisableSkeletonTabs = "WebNextDisableSkeletonTabs"),
        (i.WebNextDisableSkeletonBlocks = "WebNextDisableSkeletonBlocks"),
        (i.WebNextDisableVibe = "WebNextDisableVibe"),
        (i.WebNextDisableVibeSettings = "WebNextDisableVibeSettings"),
        (i.WebNextDisableSearch = "WebNextDisableSearch"),
        (i.WebPresave = "WebPresave"),
        (i.WebNextDisableSendPlaysOnTrackStart =
          "WebNextDisableSendPlaysOnTrackStart"),
        (i.WebPlayAudioSendPrepare = "WebPlayAudioSendPrepare"),
        (i.WebNewBlockConcerts = "WebNewBlockConcerts"),
        (i.WebNewConcertsList = "WebNewConcertsList"),
        (i.WebNextPlaylistAddition = "WebNextPlaylistAddition"),
        (i.WebNextAgentArtist = "WebNextAgentArtist"),
        (i.WebNextLegalRejectArtist = "WebNextLegalRejectArtist"),
        (i.WebNextLegalRejectAlbum = "WebNextLegalRejectAlbum"),
        (i.WebNextLegalRejectTrack = "WebNextLegalRejectTrack"),
        (i.WebNextLegalUnsafeArtist = "WebNextLegalUnsafeArtist"),
        (i.WebNextLegalUnsafeAlbum = "WebNextLegalUnsafeAlbum"),
        (i.WebNextLegalUnsafeTrack = "WebNextLegalUnsafeTrack"),
        (i.WebNextPodcastPage = "WebNextPodcastPage"),
        (i.WebNextWaveNewFeedbacks = "WebNextWaveNewFeedbacks"),
        (i.WebNextPlaylistDnD = "WebNextPlaylistDnD"),
        (i.WebNextTrackAboutModal = "WebNextTrackAboutModal"),
        (i.WebNextSettingsPage = "WebNextSettingsPage"),
        (i.WebNextPassToProduct = "WebNextPassToProduct"),
        (i.WebNextFreemium = "WebNextFreemium"),
        (i.WebNextSwitchToStrmWithoutEncrypt =
          "WebNextSwitchToStrmWithoutEncrypt"),
        (i.WebNextCommunication = "WebNextCommunication"),
        (i.WebNextPodcastSearch = "WebNextPodcastSearch"),
        (i.WebNextEnableNewQuality = "WebNextEnableNewQuality"),
        (i.WebNextUniversalLandingPage = "WebNextUniversalLandingPage"),
        (i.WebNextNewExplicitApi = "WebNextNewExplicitApi"),
        (i.WebNextLanguageSwitcher = "WebNextLanguageSwitcher"),
        (i.WebNextSyncLyrics = "WebNextSyncLyrics"),
        (i.WebNextAlbumDonateChooserButton = "WebNextAlbumDonateChooserButton"),
        (i.WebNextEntityTrailer = "WebNextEntityTrailer"),
        (i.WebNextNDABadge = "WebNextNDABadge"),
        (i.WebNextArtistPick = "WebNextArtistPick"),
        (i.WebNextDeeplinksForDesktop = "WebNextDeeplinksForDesktop"),
        (i.WebNextBookSearch = "WebNextBookSearch"),
        (i.WebNextUGC = "WebNextUGC"),
        (i.WebNextEqualizer = "WebNextEqualizer");
      let eP = (e) => {
        let t = [],
          r = eE();
        return (
          e.checkExperiment(g.WebNextDisableSearch, "on") ||
            t.push({
              icon: "search",
              iconSelected: "search_selected",
              id: "search",
              path: "/search",
            }),
          t.push({
            icon: "home",
            iconSelected: "home_selected",
            id: "main",
            path: "/",
          }),
          r &&
            t.push({
              icon: "non_music",
              iconSelected: "non_music",
              id: "non_music",
              path: "/non-music",
            }),
          e.checkExperiment(g.WebNextDisableCollection, "on") ||
            t.push({
              icon: "collections",
              iconSelected: "collections_selected",
              id: "collection",
              path: "/collection",
            }),
          t
        );
      };
      var e_ = r(74717);
      let ex = () => {
          let e = (0, e_.usePathname)();
          return (0, R.useCallback)(
            (t) => ("/" === t ? t === e : e.startsWith(t)),
            [e],
          );
        },
        eS = (e, t) => {
          let r = (0, e_.useRouter)(),
            {
              href: a,
              isExternalLink: i,
              target: s,
              rel: n,
            } = B(null != e ? e : "", t);
          return (0, R.useCallback)(() => {
            e && (i ? window.open(a, s, n) : r.push(a));
          }, [a, i, n, r, s, e]);
        };
      ((s = p || (p = {})).TAB = "tab"),
        (s.ACTIVE_TAB = "activeTab"),
        (s.BLOCK = "block");
      let eT = (e) => {
          let t = e.split(":")[0];
          return (
            ((null == t ? void 0 : t.includes(".")) &&
              (null == t ? void 0 : t.split(".").pop())) ||
            ""
          );
        },
        eb = () =>
          (0, R.useCallback)((e) => {
            {
              let t = window.history.state;
              window.history.replaceState(t, "", e);
            }
          }, []);
      ((n = y || (y = {})).SOURCE = "utm_source"), (n.MEDIUM = "utm_medium");
      let eC = { utm_source: "desktop", utm_medium: "copy_link" },
        ek = (e) => {
          let t = H((0, L.useContainer)().get(O.U5).oldWebHost),
            r = new URL("https://".concat(t).concat(e));
          return (
            Object.keys(eC).forEach((e) => {
              let t = eC[e];
              t && r.searchParams.append(e, t);
            }),
            r
          );
        },
        ew = (e, t) => {
          let r = new URL(window.location.href),
            a = r.searchParams;
          return a.set(e, t), (r.search = a.toString()), r.toString();
        };
      var eR = r(29665),
        eA = r(51179);
      let eI = () => {
        let {
          sendSearchFeedback: e,
          id: t,
          type: r,
          blockPosition: a,
          position: i,
        } = (0, R.useContext)(eR.SearchFeedbackContext) || {};
        return void 0 === t || void 0 === r || void 0 === a || void 0 === i
          ? {}
          : {
              sendLikeSearchFeedback:
                null == e
                  ? void 0
                  : e.bind(null, {
                      feedbackType: eA.kx.LIKE,
                      id: t,
                      type: r,
                      blockPosition: a,
                      position: i,
                    }),
              sendNavigateSearchFeedback:
                null == e
                  ? void 0
                  : e.bind(null, {
                      feedbackType: eA.kx.NAVIGATE,
                      id: t,
                      type: r,
                      blockPosition: a,
                      position: i,
                    }),
              sendPlaySearchFeedback:
                null == e
                  ? void 0
                  : e.bind(null, {
                      feedbackType: eA.kx.PLAY,
                      id: t,
                      type: r,
                      blockPosition: a,
                      position: i,
                    }),
            };
      };
      var eO = r(82116),
        eL = r(13862),
        eN = r(17852),
        eU = r(56691),
        eD = r(46634),
        eF = r(55302),
        eH = r(7049),
        eM = r(330);
      ((o = v || (v = {})).PLAYLIST = "playlist"),
        (o.ALBUM = "album"),
        ((c = E || (E = {})).OK = "ok"),
        (c.ERROR = "error"),
        ((l = P || (P = {})).LIKED_ALBUMS = "liked"),
        (l.UPCOMING_ALBUMS = "upcoming"),
        ((u = _ || (_ = {})).CREATED = "created"),
        (u.LIKED = "liked"),
        ((d = x || (x = {})).REJECT = "REJECT"),
        (d.UNSAFE = "UNSAFE"),
        ((h = S || (S = {})).ALBUM = "album"),
        (h.PODCAST = "podcast"),
        (h.ARTIST = "artist"),
        (h.TRACK = "track");
      var ej = r(71869);
      let eW = (e) => {
        let t = e.filter((e) => !!e).join(" \xb7 ");
        return 0 === t.length ? null : t;
      };
      function eB(e) {
        let { items: t, mappedRawItems: r, page: a, pageSize: i } = e,
          s = a * i,
          n = 0;
        for (let e = s; e < s + i; e++) r[n] && (t[e] = r[n]), n++;
      }
      var eq = r(84053),
        eV = r.n(eq);
      let eY = "desktop-release-notes.",
        eK = (e) => {
          var t;
          return null !== (t = e.split(eY)[1]) && void 0 !== t ? t : "";
        },
        eG = (e) =>
          Object.keys(e)
            .filter((e) => e.startsWith(eY))
            .sort((e, t) => {
              var r, a;
              let i = null !== (r = eK(e)) && void 0 !== r ? r : "",
                s = null !== (a = eK(t)) && void 0 !== a ? a : "";
              return eV()(i, s);
            });
      var ez = r(5979),
        eQ = r(90454);
      ((f = T || (T = {})).KEY_P = "KeyP"),
        (f.KEY_F = "KeyF"),
        (f.KEY_D = "KeyD"),
        (f.KEY_L = "KeyL"),
        (f.KEY_J = "KeyJ"),
        (f.KEY_K = "KeyK"),
        (f.KEY_H = "KeyH"),
        (f.KEY_M = "KeyM"),
        (f.KEY_N = "KeyN"),
        (f.KEY_S = "KeyS"),
        (f.KEY_R = "KeyR"),
        (f.SPACE = "Space"),
        (f.ARROW_LEFT = "ArrowLeft"),
        (f.ARROW_RIGHT = "ArrowRight"),
        (f.ARROW_UP = "ArrowUp"),
        (f.ARROW_DOWN = "ArrowDown"),
        (f.COMMA = "Comma"),
        (f.PERIOD = "Period"),
        (f.MINUS = "Minus"),
        (f.EQUAL = "Equal"),
        (f.DIGIT_0 = "Digit0");
      let eX = (e) =>
          !!(
            e.hasAttribute("contenteditable") ||
            ("INPUT" === e.tagName && "range" !== e.getAttribute("type")) ||
            ["TEXTAREA", "SELECT", "OPTION"].includes(e.tagName)
          ),
        eZ = (e) => "INPUT" === e.tagName && "range" === e.getAttribute("type"),
        eJ = (e, t) => {
          if (!(e.target instanceof Element)) return !1;
          let r = e.target,
            a = t.code;
          return !!(
            eX(r) ||
            (eZ(r) &&
              (a === T.ARROW_LEFT ||
                a === T.ARROW_RIGHT ||
                a === T.ARROW_UP ||
                a === T.ARROW_DOWN))
          );
        };
      var e$ = r(25105);
      let e0 = {
        [e$.y.TOGGLE_PLAY]: {},
        [e$.y.TOGGLE_MUTE]: {},
        [e$.y.INCREASE_VOLUME]: { repeatable: !0 },
        [e$.y.DECREASE_VOLUME]: { repeatable: !0 },
        [e$.y.LIKE]: {},
        [e$.y.DISLIKE]: {},
        [e$.y.MOVE_FORWARD]: { repeatable: !0 },
        [e$.y.MOVE_BACKWARD]: { repeatable: !0 },
        [e$.y.SLIDE_FORWARD]: { repeatable: !0 },
        [e$.y.SLIDE_BACKWARD]: { repeatable: !0 },
        [e$.y.TOGGLE_REPEAT]: {},
        [e$.y.TOGGLE_SHUFFLE]: {},
      };
      class e1 {
        constructor(e) {
          (0, M._)(this, "code", void 0),
            (0, M._)(this, "ctrlKey", void 0),
            (0, M._)(this, "shiftKey", void 0),
            (0, M._)(this, "altKey", void 0),
            (0, M._)(this, "metaKey", void 0),
            (this.code = e.code),
            (this.altKey = !!e.altKey),
            (this.ctrlKey = !!e.ctrlKey),
            (this.shiftKey = !!e.shiftKey),
            (this.metaKey = !!e.metaKey);
        }
      }
      class e8 {
        addShortcutsListener(e, t) {
          let r = this.listeners[e];
          r && (r.handler = t);
        }
        removeShortcutsListener(e) {
          let t = this.listeners[e];
          t && delete t.handler;
        }
        disable(e) {
          this.setListenersDisabled(!0, e);
        }
        enable(e) {
          this.setListenersDisabled(!1, e);
        }
        setListenersDisabled(e, t) {
          if (t) {
            let r = this.listeners[t];
            r && (r.disabled = e);
            return;
          }
          Object.values(this.listeners).forEach((t) => {
            t.disabled = e;
          });
        }
        listen() {
          window.addEventListener("keydown", (e) => {
            var t, r;
            let { action: a, shortcut: i } =
              null !== (r = this.store[e.code]) && void 0 !== r ? r : {};
            if (!a || !i || !(0, eQ.Z)(i, new e1(e)) || eJ(e, i)) return;
            let s = this.listeners[a];
            s &&
              !s.disabled &&
              (s.repeatable || !e.repeat) &&
              (e.preventDefault(),
              null === (t = s.handler) || void 0 === t || t.call(s));
          });
        }
        constructor(e) {
          (0, M._)(this, "store", void 0),
            (0, M._)(this, "listeners", e0),
            (this.store = e.getFlatStore()),
            this.listen();
        }
      }
      let e9 = {
        [e$.y.TOGGLE_PLAY]: [new e1({ code: T.KEY_K })],
        [e$.y.TOGGLE_MUTE]: [new e1({ code: T.KEY_M })],
        [e$.y.INCREASE_VOLUME]: [new e1({ code: T.ARROW_UP })],
        [e$.y.DECREASE_VOLUME]: [new e1({ code: T.ARROW_DOWN })],
        [e$.y.LIKE]: [new e1({ code: T.KEY_F })],
        [e$.y.DISLIKE]: [new e1({ code: T.KEY_D })],
        [e$.y.MOVE_FORWARD]: [new e1({ code: T.KEY_N })],
        [e$.y.MOVE_BACKWARD]: [new e1({ code: T.KEY_P })],
        [e$.y.SLIDE_FORWARD]: [
          new e1({ code: T.ARROW_RIGHT }),
          new e1({ code: T.KEY_L }),
        ],
        [e$.y.SLIDE_BACKWARD]: [
          new e1({ code: T.ARROW_LEFT }),
          new e1({ code: T.KEY_J }),
        ],
        [e$.y.TOGGLE_REPEAT]: [new e1({ code: T.KEY_R })],
        [e$.y.TOGGLE_SHUFFLE]: [new e1({ code: T.KEY_S })],
      };
      class e2 {
        getFlatStore() {
          let e = {};
          for (let [t, r] of Object.entries(this.store))
            r.forEach((r) => {
              e[r.code] = { action: t, shortcut: r };
            });
          return e;
        }
        constructor() {
          (0, M._)(this, "store", e9);
        }
      }
      var e5 = r(90981),
        e3 = r(89949),
        e4 = r(89672),
        e6 = r(1843);
      let e7 = {
        [e$.y.TOGGLE_PLAY]: ["K"],
        [e$.y.TOGGLE_MUTE]: ["M"],
        [e$.y.INCREASE_VOLUME]: ["↑"],
        [e$.y.DECREASE_VOLUME]: ["↓"],
        [e$.y.LIKE]: ["F"],
        [e$.y.DISLIKE]: ["D"],
        [e$.y.MOVE_FORWARD]: ["N"],
        [e$.y.MOVE_BACKWARD]: ["P"],
        [e$.y.SLIDE_FORWARD]: ["→", "L"],
        [e$.y.SLIDE_BACKWARD]: ["←", "J"],
        [e$.y.TOGGLE_REPEAT]: ["R"],
        [e$.y.TOGGLE_SHUFFLE]: ["S"],
      };
      r(97445), r(79285);
      let te = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
        tt = (e, t) => {
          let r = te(e, 3600),
            a = te(e - 3600 * r, 60),
            i = e - 3600 * r - 60 * a,
            s = te(t || e, 3600) > 0,
            n = [a, i];
          return (
            s && n.unshift(r),
            n.map((e) => String(e).padStart(2, "0")).join(":")
          );
        },
        tr = () => {
          let { experiments: e, user: t } = (0, D.useStore)();
          return {
            isPassToProduct: !t.hasPlus && true,
            isFreemium: !t.hasPlus && !1,
          };
        },
        ta = /^data-[a-zA-Z0-9-_]+$/,
        ti = (e) =>
          Object.entries(e).reduce((e, t) => {
            let [r, a] = t;
            return ta.test(r) && "string" == typeof a && (e[r] = a), e;
          }, {});
      var ts = r(40119);
      let tn = "system",
        to = { [ts.Q.Dark]: "ym-dark-theme", [ts.Q.Light]: "ym-light-theme" };
      var tc = r(76100),
        tl = r(695);
      let tu = (e) => {
          e &&
            (document.body.classList.remove(...Object.values(to)),
            Object.values(ts.Q).includes(e) &&
              document.body.classList.add(to[e]));
        },
        td = (e, t) => {
          switch (e) {
            case ts.Q.Dark:
            case ts.Q.Light:
              return e;
            case tn:
              return t;
            default:
              return ts.Q.Dark;
          }
        };
      var th = r(86373);
      let tf = (e) => ({
          r: parseInt(e.slice(1, 3), 16),
          g: parseInt(e.slice(3, 5), 16),
          b: parseInt(e.slice(5, 7), 16),
        }),
        tm = (e) => {
          if (e) {
            let { r: t, g: r, b: a } = tf(e);
            return "rgba(".concat(t, ", ").concat(r, ", ").concat(a, ", 0.7)");
          }
        },
        tg = (e) => {
          var t, r;
          return "string" == typeof (null == e ? void 0 : e.average)
            ? null == e
              ? void 0
              : e.average
            : "object" == typeof (null == e ? void 0 : e.average) &&
                "string" ==
                  typeof (null == e
                    ? void 0
                    : null === (t = e.average) || void 0 === t
                      ? void 0
                      : t.color)
              ? null == e
                ? void 0
                : null === (r = e.average) || void 0 === r
                  ? void 0
                  : r.color
              : "";
        },
        tp = (e) => {
          let { r: t, g: r, b: a } = tf(e),
            i = Math.min((t /= 255), (r /= 255), (a /= 255)),
            s = Math.max(t, r, a),
            n = s - i,
            o = 0,
            c = 0,
            l = (i + s) / 2;
          return (
            (o = Math.round(
              60 *
                (o =
                  0 === n
                    ? 0
                    : s === t
                      ? ((r - a) / n) % 6
                      : s === r
                        ? (a - t) / n + 2
                        : (t - r) / n + 4),
            )) < 0 && (o += 360),
            0 !== n && (c = n / (1 - Math.abs(2 * l - 1))),
            {
              h: o,
              s: Number((100 * c).toFixed(1)),
              l: Number((100 * l).toFixed(1)),
            }
          );
        };
      var ty = r(54605);
    },
    71613: function (e, t, r) {
      "use strict";
      var a, i, s, n;
      r.d(t, {
        A: function () {
          return a;
        },
        t: function () {
          return i;
        },
      }),
        ((s = a || (a = {}))[(s.Mobile = 768)] = "Mobile"),
        (s[(s.Desktop = 1440)] = "Desktop"),
        ((n = i || (i = {})).Mobile = "Mobile"),
        (n.Desktop = "Desktop");
    },
    85449: function (e, t, r) {
      "use strict";
      r.d(t, {
        LayoutContext: function () {
          return i;
        },
        useLayout: function () {
          return s;
        },
      });
      var a = r(98639);
      let i = (0, a.createContext)({
          contentRef: null,
          setContentRef: () => {},
        }),
        s = () => (0, a.useContext)(i);
    },
    37869: function (e, t, r) {
      "use strict";
      r.d(t, {
        SplashScreenContext: function () {
          return i;
        },
        useSplashScreen: function () {
          return s;
        },
      });
      var a = r(98639);
      let i = (0, a.createContext)({ isVisible: !1 }),
        s = () => (0, a.useContext)(i);
    },
    33329: function (e, t, r) {
      "use strict";
      r.d(t, {
        w: function () {
          return s;
        },
      });
      var a = r(20958),
        i = r(30410);
      let s = () => (0, i.useContainer)().get(a.P0);
    },
    11408: function (e, t, r) {
      "use strict";
      r.d(t, {
        useRumPage: function () {
          return s;
        },
      });
      var a = r(74717),
        i = r(98639);
      let s = (e) => {
        let t = (0, a.usePathname)(),
          [r, s] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          window.Ya.Rum.spa.makeSpaSubPage(t),
            window.Ya.Rum.spa.startDataLoading(t);
        }),
          (0, i.useEffect)(() => {
            window.Ya.Rum.spa.getLastSpaSubPage(t) &&
              e &&
              !r &&
              (window.Ya.Rum.spa.finishDataLoading(t),
              window.Ya.Rum.spa.startDataRendering(t),
              s(!0));
          }, [e, r, t]);
      };
    },
    54605: function (e, t, r) {
      "use strict";
      r.d(t, {
        useNonMusicSubscribeText: function () {
          return s;
        },
      });
      var a = r(80542),
        i = r(51179);
      let s = (e, t) => {
        let { formatMessage: r } = (0, a.Z)();
        return e
          ? r(
              t === i.VZ.AUDIOBOOK
                ? { id: "non-music.shelf-unsubscribe" }
                : { id: "interface-actions.subscribed" },
            )
          : r(
              t === i.VZ.AUDIOBOOK
                ? { id: "non-music.shelf-subscribe" }
                : { id: "interface-actions.subscribe" },
            );
      };
    },
    75025: function (e, t, r) {
      "use strict";
      var a, i;
      r.d(t, {
        W: function () {
          return a;
        },
      }),
        ((i = a || (a = {})).INFO = "INFO"),
        (i.ERROR = "ERROR"),
        (i.APPLICATION_UPDATE = "APPLICATION_UPDATE"),
        (i.FULLSCREEN_INFO = "FULLSCREEN_INFO"),
        (i.FULLSCREEN_ERROR = "FULLSCREEN_ERROR");
    },
    84544: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return o;
        },
      });
      var a = r(98639),
        i = r(69863),
        s = r(75025);
      let n = {
          [s.W.INFO]: {
            autoClose: 2e3,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !1,
            single: !0,
          },
          [s.W.ERROR]: {
            autoClose: 2e3,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !1,
            single: !0,
          },
          [s.W.FULLSCREEN_INFO]: {
            autoClose: 2e3,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !1,
            single: !0,
          },
          [s.W.FULLSCREEN_ERROR]: {
            autoClose: 2e3,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !1,
            single: !0,
          },
          [s.W.APPLICATION_UPDATE]: {
            closeOnClick: !1,
            draggable: !1,
            single: !0,
            important: !0,
          },
        },
        o = () => ({
          notify: (0, a.useCallback)((e, t) => {
            let { containerId: r, ...a } = t;
            (0, i.notification)({
              message: e,
              options: { ...n[r], containerId: r, ...a },
            });
          }, []),
          dismiss: i.dismiss,
        });
    },
    35188: function (e, t, r) {
      "use strict";
      function a() {
        return window.PLATFORM;
      }
      r.d(t, {
        X: function () {
          return a;
        },
      });
    },
    65713: function (e, t, r) {
      "use strict";
      r.d(t, {
        S: function () {
          return s;
        },
      });
      var a = r(330),
        i = r(35188);
      function s() {
        let e = "";
        switch ((0, i.X)()) {
          case a.t.MACOS:
            e = "uz0zSpaYCLmgk6C7YLdo5F";
            break;
          case a.t.WINDOWS:
            e = "kzqU4XhfCaY6B6JTHODeq5";
        }
        return e;
      }
    },
    37205: function (e, t, r) {
      "use strict";
      function a() {
        return window.VERSION;
      }
      r.d(t, {
        b: function () {
          return a;
        },
      });
    },
    29665: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          SearchFeedbackContext: function () {
            return a;
          },
        });
      let a = (0, r(98639).createContext)(null);
    },
    90981: function (e, t, r) {
      "use strict";
      r.d(t, {
        ShortcutsContext: function () {
          return a;
        },
      });
      let a = (0, r(98639).createContext)(null);
    },
    1843: function (e, t, r) {
      "use strict";
      r.d(t, {
        SHORTCUTS_LIST: function () {
          return n;
        },
      });
      var a = r(9753),
        i = r(31014),
        s = r(25105);
      let n = [
        {
          formattedMessage: (0, a.jsx)(i.Z, { id: "shortcuts.play-pause" }),
          shortcutsAction: s.y.TOGGLE_PLAY,
        },
        {
          formattedMessage: (0, a.jsx)(i.Z, { id: "shortcuts.mute" }),
          shortcutsAction: s.y.TOGGLE_MUTE,
        },
        {
          formattedMessage: (0, a.jsx)(i.Z, { id: "shortcuts.skip-forward" }),
          shortcutsAction: s.y.SLIDE_FORWARD,
        },
        {
          formattedMessage: (0, a.jsx)(i.Z, { id: "shortcuts.rewind" }),
          shortcutsAction: s.y.SLIDE_BACKWARD,
        },
        {
          formattedMessage: (0, a.jsx)(i.Z, { id: "shortcuts.volume-up" }),
          shortcutsAction: s.y.INCREASE_VOLUME,
        },
        {
          formattedMessage: (0, a.jsx)(i.Z, { id: "shortcuts.volume-down" }),
          shortcutsAction: s.y.DECREASE_VOLUME,
        },
        {
          formattedMessage: (0, a.jsx)(i.Z, { id: "shortcuts.like" }),
          shortcutsAction: s.y.LIKE,
        },
        {
          formattedMessage: (0, a.jsx)(i.Z, { id: "shortcuts.unlike" }),
          shortcutsAction: s.y.DISLIKE,
        },
        {
          formattedMessage: (0, a.jsx)(i.Z, {
            id: "shortcuts.switch-repeat-mode",
          }),
          shortcutsAction: s.y.TOGGLE_REPEAT,
        },
        {
          formattedMessage: (0, a.jsx)(i.Z, {
            id: "shortcuts.switch-shuffle-mode",
          }),
          shortcutsAction: s.y.TOGGLE_SHUFFLE,
        },
        {
          formattedMessage: (0, a.jsx)(i.Z, { id: "shortcuts.next-track" }),
          shortcutsAction: s.y.MOVE_FORWARD,
        },
        {
          formattedMessage: (0, a.jsx)(i.Z, { id: "shortcuts.previous-track" }),
          shortcutsAction: s.y.MOVE_BACKWARD,
        },
      ];
    },
    25105: function (e, t, r) {
      "use strict";
      var a, i;
      r.d(t, {
        y: function () {
          return a;
        },
      }),
        ((i = a || (a = {})).TOGGLE_PLAY = "TOGGLE_PLAY"),
        (i.TOGGLE_MUTE = "TOGGLE_MUTE"),
        (i.INCREASE_VOLUME = "INCREASE_VOLUME"),
        (i.DECREASE_VOLUME = "DECREASE_VOLUME"),
        (i.LIKE = "LIKE"),
        (i.DISLIKE = "DISLIKE"),
        (i.MOVE_FORWARD = "MOVE_FORWARD"),
        (i.MOVE_BACKWARD = "MOVE_BACKWARD"),
        (i.SLIDE_FORWARD = "SLIDE_FORWARD"),
        (i.SLIDE_BACKWARD = "SLIDE_BACKWARD"),
        (i.TOGGLE_REPEAT = "TOGGLE_REPEAT"),
        (i.TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE");
    },
    89672: function (e, t, r) {
      "use strict";
      r.d(t, {
        useDisableShortcuts: function () {
          return s;
        },
      });
      var a = r(98639),
        i = r(89949);
      let s = (e) => {
        let t = (0, i.useShortcuts)();
        (0, a.useEffect)(
          () => (
            e ? null == t || t.disable() : null == t || t.enable(),
            () => {
              null == t || t.enable();
            }
          ),
        );
      };
    },
    89949: function (e, t, r) {
      "use strict";
      r.d(t, {
        useShortcuts: function () {
          return s;
        },
      });
      var a = r(98639),
        i = r(90981);
      let s = () => (0, a.useContext)(i.ShortcutsContext);
    },
    46634: function (e, t, r) {
      "use strict";
      var a;
      r.d(t, {
        j: function () {
          return a;
        },
      }),
        ((a || (a = {})).TRAILER = "TRAILER");
    },
    82116: function (e, t, r) {
      "use strict";
      r.d(t, {
        MediaConfigControllerContext: function () {
          return i;
        },
        useMediaConfigController: function () {
          return s;
        },
      });
      var a = r(98639);
      let i = (0, a.createContext)(null);
      function s() {
        return (0, a.useContext)(i);
      }
    },
    17852: function (e, t, r) {
      "use strict";
      r.d(t, {
        usePlayableContext: function () {
          return o;
        },
      });
      var a = r(98639),
        i = r(15419),
        s = r(55553),
        n = r(13862);
      let o = (e) => {
        var t, r;
        let { playContextParams: o, entityId: c } = e,
          l = (0, n.useSonata)(),
          { sonataState: u } = (0, s.useStore)(),
          d = !1,
          h = !1,
          { contextData: f } = o,
          {
            type: m,
            meta: { id: g },
          } = f,
          p = u.contextId === String(g) && m === u.contextType;
        return {
          isPlaying: (h =
            (d = c
              ? c ===
                (null === (r = u.entityMeta) || void 0 === r
                  ? void 0
                  : r.idWithContext)
              : p) && u.status === i.Xz.PLAYING),
          isCurrent: d,
          togglePlay: (0, a.useCallback)(() => {
            var e;
            let t =
              null === (e = u.entityMeta) || void 0 === e
                ? void 0
                : e.idWithContext;
            if (void 0 !== c && c === t) {
              null == l || l.togglePause();
              return;
            }
            null == l || l.playContext(o);
          }, [
            l,
            c,
            o,
            null === (t = u.entityMeta) || void 0 === t
              ? void 0
              : t.idWithContext,
          ]),
          restartPlay: (0, a.useCallback)(() => {
            null == l || l.setProgress(0);
          }, [l]),
        };
      };
    },
    55302: function (e, t, r) {
      "use strict";
      r.d(t, {
        usePlayableTrailerContext: function () {
          return c;
        },
      });
      var a = r(98639),
        i = r(15419),
        s = r(55553),
        n = r(46634),
        o = r(13862);
      let c = (e) => {
        var t, r;
        let { playContextParams: c, entityId: l } = e,
          u = (0, o.useSonata)(),
          {
            trailer: { state: d },
          } = (0, s.useStore)(),
          h = !1,
          f = !1,
          { contextData: m } = c,
          {
            type: g,
            meta: { id: p },
          } = m,
          y = d.contextId === String(p) && g === d.contextType;
        return {
          isPlaying: (f =
            (h = l
              ? l ===
                (null === (r = d.entityMeta) || void 0 === r
                  ? void 0
                  : r.idWithContext)
              : y) && d.status === i.Xz.PLAYING),
          isCurrent: h,
          togglePlay: (0, a.useCallback)(() => {
            var e;
            let t =
              null === (e = d.entityMeta) || void 0 === e
                ? void 0
                : e.idWithContext;
            if (void 0 !== l && l === t) {
              null == u || u.togglePause(n.j.TRAILER);
              return;
            }
            null == u || u.playContext(c, n.j.TRAILER);
          }, [
            null === (t = d.entityMeta) || void 0 === t
              ? void 0
              : t.idWithContext,
            l,
            u,
            c,
          ]),
          restartPlay: (0, a.useCallback)(() => {
            null == u || u.setProgress(0, n.j.TRAILER);
          }, [u]),
        };
      };
    },
    56691: function (e, t, r) {
      "use strict";
      r.d(t, {
        usePlayableVibeContext: function () {
          return y;
        },
      });
      var a = r(9753),
        i = r(98639),
        s = r(80542),
        n = r(84338),
        o = r(15419),
        c = r(78465),
        l = r(2231),
        u = r(75025),
        d = r(84544),
        h = r(55553),
        f = r(71869),
        m = r(90454);
      let g = (e, t) => (0, m.Z)((0, n.$k)(e), (0, n.$k)(t));
      var p = r(13862);
      let y = (e) => {
        var t, r, m;
        let { seeds: y = [f.s], pageIdForFrom: v, blockIdForFrom: E } = e,
          P = (0, l.x)({ pageId: v, blockId: E }),
          { formatMessage: _ } = (0, s.Z)(),
          x = (0, p.useSonata)(),
          { notify: S } = (0, d.d)(),
          { sonataState: T, vibe: b, fullscreenPlayer: C } = (0, h.useStore)(),
          [k, w] = (0, i.useState)(null),
          R = C.modal.isOpened ? u.W.FULLSCREEN_ERROR : u.W.ERROR;
        (0, i.useEffect)(() => {
          let e =
            null == x
              ? void 0
              : x.state.currentContext.onChange(() => {
                  (0, n.xA)(x.state.currentContext.value)
                    ? w(x.state.currentContext.value)
                    : w(null);
                });
          return () => {
            null == e || e();
          };
        }, [x]);
        let A = (0, i.useCallback)(
            async (e) => {
              try {
                await (null == x
                  ? void 0
                  : x.playContext({
                      contextData: {
                        type: n.Ak.Vibe,
                        meta: { id: (0, n.$k)(e) },
                        seeds: e,
                        from: P,
                        includeTracksInResponse: !0,
                      },
                      loadContextMeta: !0,
                    }));
              } catch (e) {
                S(
                  (0, a.jsx)(c.BaseNotificationError, {
                    error: _({ id: "vibe-errors.start-vibe" }),
                  }),
                  { containerId: R },
                );
              }
            },
            [x, P, _, S, R],
          ),
          I = (0, i.useCallback)(
            async (e) => {
              if (x && k)
                try {
                  await k.setSettings(
                    e,
                    x.state.playerState,
                    x.state.queueState,
                  );
                } catch (e) {
                  S(
                    (0, a.jsx)(c.BaseNotificationError, {
                      error: _({ id: "vibe-errors.apply-vibe-setting" }),
                    }),
                    { containerId: R },
                  );
                }
            },
            [_, S, x, k, R],
          ),
          O = (0, i.useCallback)(
            async (e) => {
              if (x)
                try {
                  await x.restartContext({ playAfterRestart: e });
                } catch (e) {
                  S(
                    (0, a.jsx)(c.BaseNotificationError, {
                      error: _({ id: "error-messages.something-went-wrong" }),
                    }),
                    { containerId: R },
                  );
                }
            },
            [_, S, x, R],
          ),
          L = !!k;
        (0, i.useEffect)(() => {
          var e, t;
          L &&
            (null == k
              ? void 0
              : null === (e = k.data.meta.session) || void 0 === e
                ? void 0
                : e.wave) &&
            b.setVibe(
              null == k
                ? void 0
                : null === (t = k.data.meta.session) || void 0 === t
                  ? void 0
                  : t.wave,
            );
        }, [
          L,
          null == k
            ? void 0
            : null === (t = k.data.meta.session) || void 0 === t
              ? void 0
              : t.wave,
          b,
        ]);
        let N =
            L &&
            g(
              null !==
                (m =
                  null === (r = b.meta) || void 0 === r ? void 0 : r.seeds) &&
                void 0 !== m
                ? m
                : [],
              y,
            ),
          U = N && T.status === o.Xz.PLAYING,
          D = N && T.status === o.Xz.PAUSED;
        return {
          isVibeContext: L,
          isPlaying: U,
          isPaused: D,
          isCurrent: N,
          togglePlay: (0, i.useCallback)(async () => {
            b.setIsLoading(!0), await A(y), b.setIsLoading(!1);
          }, [A, y, b]),
          applySetting: (0, i.useCallback)(
            async (e, t) => {
              var r;
              b.setIsLoading(!0);
              let a = [];
              (a =
                b.meta &&
                Array.isArray(
                  null === (r = b.meta) || void 0 === r ? void 0 : r.seeds,
                )
                  ? b.meta.seeds.includes(e)
                    ? b.meta.seeds.filter((t) => t !== e)
                    : t
                      ? [
                          e,
                          ...b.meta.seeds.filter((e) => e.includes("setting")),
                        ]
                      : [...b.meta.seeds, e]
                  : [e]),
                k ? (await I(a), await O(!0)) : await A(a),
                b.setIsLoading(!1);
            },
            [O, I, A, b, k],
          ),
          resetSettings: (0, i.useCallback)(async () => {
            b.setIsLoading(!0),
              k ? (await I([f.s]), await O(!0)) : await A([f.s]),
              b.setIsLoading(!1);
          }, [A, O, I, k, b]),
        };
      };
    },
    13862: function (e, t, r) {
      "use strict";
      r.d(t, {
        SonataContext: function () {
          return i;
        },
        useSonata: function () {
          return s;
        },
      });
      var a = r(98639);
      let i = (0, a.createContext)(null);
      function s() {
        return (0, a.useContext)(i);
      }
    },
    55553: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          StoreContext: function () {
            return s;
          },
          useStore: function () {
            return n;
          },
        });
      var a = r(37810),
        i = r(98639);
      let s = (0, i.createContext)(null);
      function n() {
        let e = (0, i.useContext)(s);
        if (null === e)
          throw new a.y("Store cannot be null, please add a context provider", {
            code: "E_CONTEXT_STORE_NULL",
          });
        return e;
      }
    },
    86373: function (e, t, r) {
      "use strict";
      r.d(t, {
        Q: function () {
          return s;
        },
        i: function () {
          return i;
        },
      });
      var a = r(40119);
      let i = () =>
          window.matchMedia("(prefers-color-scheme: ".concat(a.Q.Light, ")")),
        s = () => {
          let e = i();
          return (null == e ? void 0 : e.matches) ? a.Q.Light : a.Q.Dark;
        };
    },
    40119: function (e, t, r) {
      "use strict";
      var a, i;
      r.d(t, {
        Q: function () {
          return a;
        },
      }),
        ((i = a || (a = {})).Dark = "dark"),
        (i.Light = "light");
    },
    695: function (e, t, r) {
      "use strict";
      r.d(t, {
        usePreferredColorScheme: function () {
          return s;
        },
      });
      var a = r(98639),
        i = r(86373);
      let s = () => {
        let [e, t] = (0, a.useState)(i.Q),
          r = (0, a.useCallback)(() => {
            t((0, i.Q)());
          }, []);
        return (
          (0, a.useEffect)(() => {
            let e = (0, i.i)();
            return (
              null == e || e.addEventListener("change", r),
              () => {
                null == e || e.removeEventListener("change", r);
              }
            );
          }, [r]),
          e
        );
      };
    },
    76100: function (e, t, r) {
      "use strict";
      r.d(t, {
        ThemeContext: function () {
          return s;
        },
        useTheme: function () {
          return n;
        },
      });
      var a = r(98639),
        i = r(40119);
      let s = (0, a.createContext)({ theme: i.Q.Dark, setTheme: () => {} }),
        n = () => (0, a.useContext)(s);
    },
    7049: function (e, t, r) {
      "use strict";
      var a, i;
      r.d(t, {
        G: function () {
          return a;
        },
      }),
        ((i = a || (a = {})).IDLE = "IDLE"),
        (i.PENDING = "PENDING"),
        (i.RESOLVE = "RESOLVE"),
        (i.REJECT = "REJECT");
    },
    330: function (e, t, r) {
      "use strict";
      var a, i;
      r.d(t, {
        t: function () {
          return a;
        },
      }),
        ((i = a || (a = {})).MACOS = "darwin"),
        (i.WINDOWS = "win32"),
        (i.LINUX = "linux");
    },
    97230: function (e, t, r) {
      "use strict";
      r.d(t, {
        B: function () {
          return i;
        },
      });
      var a,
        i,
        s = r(95077);
      ((a = i || (i = {})).Theme = "theme"),
        (a.WebNextNavigation = "WebNextNavigation"),
        (a.AllowAnalyticsLogs = "AllowAnalyticsLogs"),
        (a.NavbarCollapsed = "navbarCollapsed"),
        (a.SessionHistoryState = "sessionHistoryState"),
        (a.SessionId = "Session_id"),
        (a.SessionId2 = "sessionid2"),
        (a.YmPlayerRepeatMode = "ymPlayerRepeatMode"),
        (a.YmPlayerVolume = "ymPlayerVolume"),
        (a.YmPlayerPrevVolume = "ymPlayerPrevVolume"),
        (a.YmPlayerShuffle = "ymPlayerShuffle"),
        (a.YmPlayerQuality = "ymPlayerQuality"),
        (a.YandexLogin = "yandex_login"),
        (a.Future = "future"),
        (a.Oauth = "oauth"),
        (a.OauthState = "oauthState"),
        (a.ArtistDonationButtonOnbordingShowed =
          "ArtistDonationButtonOnbordingShowed"),
        (a.DisallowDeeplinksRedirect = "DisallowDeeplinksRedirect"),
        (a[(a.SavedUserLanguage = s.L)] = "SavedUserLanguage"),
        (a.EnableChangingLanguage = "EnableChangingLanguage"),
        (a.ExEx = "ExEx"),
        (a.UseNewCorrespondenceBetweenQualityParams =
          "useNewCorrespondenceBetweenQualityParams");
    },
    49080: function (e, t, r) {
      "use strict";
      r.d(t, {
        M: function () {
          return a;
        },
      });
      let a = "{tld}";
    },
    71869: function (e, t, r) {
      "use strict";
      r.d(t, {
        k: function () {
          return i;
        },
        s: function () {
          return a;
        },
      });
      let a = "user:onyourwave",
        i = ["activity"];
    },
    72488: function (e, t, r) {
      "use strict";
      r.d(t, {
        BaseNotification: function () {
          return h;
        },
      });
      var a = r(9753),
        i = r(60836),
        s = r(98639),
        n = r(80542),
        o = r(39513),
        c = r(28852),
        l = r(12404),
        u = r(75553),
        d = r.n(u);
      let h = (e) => {
        let {
            message: t,
            closeToast: r,
            cover: u,
            coverRadius: h = "s",
            className: f,
          } = e,
          { formatMessage: m } = (0, n.Z)();
        return (0, a.jsxs)(l.Paper, {
          radius: "l",
          className: (0, i.W)(d().root, f),
          children: [
            (0, a.jsxs)("div", {
              className: (0, i.W)(d().message, {
                [d().message_withCover]: (0, s.isValidElement)(u),
              }),
              children: [
                (0, s.isValidElement)(u) &&
                  (0, a.jsx)(l.Paper, {
                    className: d().cover,
                    radius: h,
                    children: u,
                  }),
                t,
              ],
            }),
            r &&
              (0, a.jsx)("div", {
                className: d().controls,
                children: (0, a.jsx)(o.z, {
                  variant: "text",
                  color: "secondary",
                  withRipple: !1,
                  onClick: r,
                  className: d().button,
                  "aria-label": m({ id: "interface-actions.close" }),
                  icon: (0, a.jsx)(c.J, {
                    className: d().icon,
                    size: "xs",
                    variant: "close",
                  }),
                }),
              }),
          ],
        });
      };
    },
    78465: function (e, t, r) {
      "use strict";
      r.d(t, {
        BaseNotificationError: function () {
          return u;
        },
      });
      var a = r(9753),
        i = r(60836),
        s = r(98639),
        n = r(2570),
        o = r(72488),
        c = r(50677),
        l = r.n(c);
      let u = (e) => {
        let { error: t, closeToast: r, className: c } = e,
          u = (0, s.useMemo)(
            () =>
              (0, a.jsx)(n.Caption, {
                className: l().message,
                variant: "div",
                type: "controls",
                size: "m",
                children: t,
              }),
            [t],
          );
        return (0, a.jsx)(o.BaseNotification, {
          className: (0, i.W)(l().root, c),
          message: u,
          closeToast: r,
        });
      };
    },
    75553: function (e) {
      e.exports = {
        root: "BaseNotification_root__FwcCd",
        message: "BaseNotification_message__hjf_Z",
        message_withCover: "BaseNotification_message_withCover__AoMQT",
        cover: "BaseNotification_cover__vpBEb",
        controls: "BaseNotification_controls__wl3PO",
        icon: "BaseNotification_icon__WfvV3",
        button: "BaseNotification_button__Ovwwo",
      };
    },
    50677: function (e) {
      e.exports = {
        root: "BaseNotificationError_root__FfGUZ",
        message: "BaseNotificationError_message___W_xy",
      };
    },
    52122: function (e, t, r) {
      "use strict";
      function a(e, t, r) {
        let a = (function (e) {
          let {
              callback: t,
              maxSendingItemsPerRequest: r,
              requestsSendingDelay: a,
            } = e,
            i = [];
          return (
            !(function e() {
              i.length > 0 && t(i.splice(0, r)), window.setTimeout(e, a);
            })(),
            {
              add(e) {
                i.push(e);
              },
            }
          );
        })({
          callback: (t) => {
            e(t);
          },
          requestsSendingDelay: 1e3,
          maxSendingItemsPerRequest: 21,
        });
        return {
          trackEvent(e, i) {
            r && t.log(e, i), a.add({ [e]: i });
          },
        };
      }
      r.d(t, {
        qU: function () {
          return Y;
        },
        OB: function () {
          return V;
        },
        Ks: function () {
          return Z;
        },
        Dm: function () {
          return K;
        },
        CS: function () {
          return Q;
        },
        yx: function () {
          return et;
        },
        A7: function () {
          return el;
        },
        Mn: function () {
          return ed;
        },
        b5: function () {
          return eu;
        },
        f7: function () {
          return eo;
        },
        is: function () {
          return ec;
        },
        F5: function () {
          return en;
        },
        HQ: function () {
          return a;
        },
        hz: function () {
          return s;
        },
        y_: function () {
          return o;
        },
        re: function () {
          return em;
        },
        sj: function () {
          return eh;
        },
        mz: function () {
          return eg;
        },
        PB: function () {
          return ef;
        },
        yC: function () {
          return ep;
        },
        wB: function () {
          return ei;
        },
        rO: function () {
          return ea;
        },
        Qb: function () {
          return es;
        },
      });
      class i {
        makeParams() {
          return {};
        }
      }
      function s() {
        let e = new i();
        return { getGlobalParams: () => e };
      }
      class n {
        makeParams() {
          return {};
        }
      }
      function o() {
        let e = new n();
        return { getPlatformParams: () => e };
      }
      var c,
        l,
        u,
        d,
        h,
        f,
        m,
        g,
        p,
        y,
        v,
        E,
        P,
        _,
        x,
        S,
        T,
        b,
        C,
        k,
        w,
        R,
        A,
        I,
        O,
        L,
        N,
        U,
        D,
        F,
        H,
        M,
        j,
        W,
        B,
        q,
        V,
        Y,
        K,
        G,
        z,
        Q,
        X,
        Z,
        J,
        $,
        ee = r(8655);
      class et {
        get evgenInstance() {
          return this.evgen;
        }
        sendEvent(e, t) {
          this.evgen.trackEvent(e, t);
        }
        constructor(e, t, r) {
          (0, ee._)(this, "evgen", void 0),
            (this.evgen = {
              trackEvent: (a, i) => {
                let s = {
                  ...i,
                  ...t.getGlobalParams(),
                  ...r.getPlatformParams(),
                };
                e.trackEvent(a, s);
              },
            });
        }
      }
      function er(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return { event: { version: e }, interfaces: t };
      }
      function ea(e, t) {
        let r = er(1),
          a = { ...t, _meta: r };
        e.trackEvent("Slides.Opened", a);
      }
      function ei(e, t) {
        let r = er(1),
          a = { ...t, _meta: r };
        e.trackEvent("Slides.Loaded", a);
      }
      function es(e, t) {
        let r = er(1),
          a = { ...t, _meta: r };
        e.trackEvent("Slides.Showed", a);
      }
      function en(e, t) {
        let { objectsCount: r = 1, objectPosX: a = 1, objectPosY: i = 1 } = t,
          s = er(2, {
            from40Properties: { version: 1 },
            uIScreenProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            domainObjectProperties: { version: 1 },
            domainObjectPosition2D: { version: 1 },
            uIContainerObjects: { version: 1 },
          }),
          n = {
            ...t,
            objectsCount: r,
            objectPosX: a,
            objectPosY: i,
            pageId: "artist_screen",
            pageType: "object",
            entityType: "carousel",
            entityId: "concerts",
            objectsType: "concert",
            _meta: s,
          };
        e.trackEvent("Artist.Concerts.Showed", n);
      }
      function eo(e, t) {
        let { objectsCount: r = 1, objectPosX: a = 1, objectPosY: i = 1 } = t,
          s = er(2, {
            from40Properties: { version: 1 },
            uIScreenProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            uIEntityNavigated: { version: 1 },
            domainObjectProperties: { version: 1 },
            domainObjectPosition2D: { version: 1 },
            uIContainerObjects: { version: 1 },
          }),
          n = {
            ...t,
            objectsCount: r,
            objectPosX: a,
            objectPosY: i,
            pageId: "artist_screen",
            pageType: "object",
            entityType: "carousel",
            entityId: "concerts",
            objectsType: "concert",
            from: "artist_screen",
            _meta: s,
          };
        e.trackEvent("Artist.Concerts.Navigated", n);
      }
      function ec(e, t) {
        let r = er(1, {
            from40Properties: { version: 1 },
            uIScreenProperties: { version: 1 },
            uIScreenOpened: { version: 1 },
          }),
          a = {
            ...t,
            pageId: "artist_concerts_screen",
            pageType: "listing",
            _meta: r,
          };
        e.trackEvent("ArtistConcerts.Opened", a);
      }
      function el(e, t) {
        let r = er(1, {
            from40Properties: { version: 1 },
            uIScreenProperties: { version: 1 },
            uIScreenClosed: { version: 1 },
          }),
          a = {
            ...t,
            pageId: "artist_concerts_screen",
            pageType: "listing",
            _meta: r,
          };
        e.trackEvent("ArtistConcerts.Closed", a);
      }
      function eu(e, t) {
        let { objectPos: r = 1 } = t,
          a = er(1, {
            from40Properties: { version: 1 },
            uIScreenProperties: { version: 1 },
            domainObjectProperties: { version: 1 },
            domainObjectPosition1D: { version: 1 },
          }),
          i = {
            ...t,
            objectPos: r,
            pageId: "artist_concerts_screen",
            pageType: "listing",
            objectType: "concert",
            _meta: a,
          };
        e.trackEvent("ArtistConcerts.Concert.Showed", i);
      }
      function ed(e, t) {
        let { objectPos: r = 1 } = t,
          a = er(1, {
            from40Properties: { version: 1 },
            uIScreenProperties: { version: 1 },
            uIScreenNavigated: { version: 1 },
            domainObjectProperties: { version: 1 },
            domainObjectPosition1D: { version: 1 },
          }),
          i = {
            ...t,
            objectPos: r,
            pageId: "artist_concerts_screen",
            pageType: "listing",
            objectType: "concert",
            from: "artist_concerts_screen",
            _meta: a,
          };
        e.trackEvent("ArtistConcerts.Concert.Navigated", i);
      }
      function eh(e, t) {
        let {
            skeletonId: r = "",
            mainObjectType: a = V.NonApplicable,
            mainObjectId: i = "",
            tabId: s = "",
            tabPos: n = 0,
            isTabSelectedByDefault: o = !1,
            entityPosX: c = 1,
            entityPosY: l = 1,
            objectsCount: u = 0,
            displayReasonId: d = "",
            filterKey: h = "",
            filterValue: f = "",
            filterPos: m = 0,
          } = t,
          g = er(1, {
            uINavigationProperties: { version: 1 },
            uIScreenLightProperties: { version: 1 },
            mainDomainObjectProperties: { version: 1 },
            uITabProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            uIEntityDisplayReason: { version: 1 },
          }),
          p = {
            ...t,
            skeletonId: r,
            mainObjectType: a,
            mainObjectId: i,
            tabId: s,
            tabPos: n,
            isTabSelectedByDefault: o,
            entityPosX: c,
            entityPosY: l,
            objectsCount: u,
            displayReasonId: d,
            filterKey: h,
            filterValue: f,
            filterPos: m,
            _meta: g,
          };
        e.trackEvent("LandingBlock.Loaded", p);
      }
      function ef(e, t) {
        let {
            objectPosX: r = 0,
            objectPosY: a = 0,
            skeletonId: i = "",
            mainObjectType: s = V.NonApplicable,
            mainObjectId: n = "",
            tabId: o = "",
            tabPos: c = 0,
            isTabSelectedByDefault: l = !1,
            entityPosX: u = 1,
            entityPosY: d = 1,
            objectsCount: h = 0,
            displayReasonId: f = "",
            filterKey: m = "",
            filterValue: g = "",
            filterPos: p = 0,
          } = t,
          y = er(1, {
            uINavigationProperties: { version: 1 },
            uIScreenLightProperties: { version: 1 },
            uITabProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            uIEntityDisplayReason: { version: 1 },
            uIEntityFilterable: { version: 1 },
            uIEntityLifecycle: { version: 1 },
            mainDomainObjectProperties: { version: 1 },
            domainObjectProperties: { version: 1 },
          }),
          v = {
            ...t,
            objectPosX: r,
            objectPosY: a,
            skeletonId: i,
            mainObjectType: s,
            mainObjectId: n,
            tabId: o,
            tabPos: c,
            isTabSelectedByDefault: l,
            entityPosX: u,
            entityPosY: d,
            objectsCount: h,
            displayReasonId: f,
            filterKey: m,
            filterValue: g,
            filterPos: p,
            _meta: y,
          };
        e.trackEvent("LandingBlock.Showed", v);
      }
      function em(e, t) {
        let {
            objectPosX: r = 0,
            objectPosY: a = 0,
            skeletonId: i = "",
            mainObjectType: s = V.NonApplicable,
            mainObjectId: n = "",
            tabId: o = "",
            tabPos: c = 0,
            isTabSelectedByDefault: l = !1,
            entityPosX: u = 1,
            entityPosY: d = 1,
            objectsCount: h = 0,
            displayReasonId: f = "",
            filterKey: m = "",
            filterValue: g = "",
            filterPos: p = 0,
          } = t,
          y = er(1, {
            uINavigationProperties: { version: 1 },
            uIScreenLightProperties: { version: 1 },
            uITabProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            uIEntityDisplayReason: { version: 1 },
            uIEntityFilterable: { version: 1 },
            uIEntityLifecycle: { version: 1 },
            mainDomainObjectProperties: { version: 1 },
            domainObjectProperties: { version: 1 },
          }),
          v = {
            ...t,
            objectPosX: r,
            objectPosY: a,
            skeletonId: i,
            mainObjectType: s,
            mainObjectId: n,
            tabId: o,
            tabPos: c,
            isTabSelectedByDefault: l,
            entityPosX: u,
            entityPosY: d,
            objectsCount: h,
            displayReasonId: f,
            filterKey: m,
            filterValue: g,
            filterPos: p,
            _meta: y,
          };
        e.trackEvent("LandingBlock.Hidden", v);
      }
      function eg(e, t) {
        let {
            objectPosX: r = 0,
            objectPosY: a = 0,
            skeletonId: i = "",
            mainObjectType: s = V.NonApplicable,
            mainObjectId: n = "",
            tabId: o = "",
            tabPos: c = 0,
            isTabSelectedByDefault: l = !1,
            entityPosX: u = 1,
            entityPosY: d = 1,
            objectsCount: h = 0,
            displayReasonId: f = "",
            filterKey: m = "",
            filterValue: g = "",
            filterPos: p = 0,
            deepLink: y = "",
          } = t,
          v = er(1, {
            uINavigationProperties: { version: 1 },
            uIScreenLightProperties: { version: 1 },
            uITabProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            uIEntityDisplayReason: { version: 1 },
            uIEntityFilterable: { version: 1 },
            uIEntityNavigated: { version: 1 },
            mainDomainObjectProperties: { version: 1 },
            domainObjectProperties: { version: 1 },
          }),
          E = {
            ...t,
            objectPosX: r,
            objectPosY: a,
            skeletonId: i,
            mainObjectType: s,
            mainObjectId: n,
            tabId: o,
            tabPos: c,
            isTabSelectedByDefault: l,
            entityPosX: u,
            entityPosY: d,
            objectsCount: h,
            displayReasonId: f,
            filterKey: m,
            filterValue: g,
            filterPos: p,
            deepLink: y,
            _meta: v,
          };
        e.trackEvent("LandingBlock.Navigated", E);
      }
      function ep(e, t) {
        let {
            objectPosX: r = 0,
            objectPosY: a = 0,
            skeletonId: i = "",
            mainObjectType: s = V.NonApplicable,
            mainObjectId: n = "",
            tabId: o = "",
            tabPos: c = 0,
            isTabSelectedByDefault: l = !1,
            entityPosX: u = 1,
            entityPosY: d = 1,
            objectsCount: h = 0,
            displayReasonId: f = "",
            filterKey: m = "",
            filterValue: g = "",
            filterPos: p = 0,
          } = t,
          y = er(1, {
            uINavigationProperties: { version: 1 },
            uIScreenLightProperties: { version: 1 },
            uITabProperties: { version: 1 },
            uIEntityProperties: { version: 1 },
            uIEntityDisplayReason: { version: 1 },
            uIEntityFilterable: { version: 1 },
            mainDomainObjectProperties: { version: 1 },
            domainObjectProperties: { version: 1 },
          }),
          v = {
            ...t,
            objectPosX: r,
            objectPosY: a,
            skeletonId: i,
            mainObjectType: s,
            mainObjectId: n,
            tabId: o,
            tabPos: c,
            isTabSelectedByDefault: l,
            entityPosX: u,
            entityPosY: d,
            objectsCount: h,
            displayReasonId: f,
            filterKey: m,
            filterValue: g,
            filterPos: p,
            _meta: y,
          };
        e.trackEvent("LandingBlock.Started", v);
      }
      ((A || (A = {})).ConcertScreen = "concert_screen"),
        ((c = I || (I = {})).Album = "album"),
        (c.Playlist = "playlist"),
        (c.Category = "category"),
        (c.Promotion = "promotion"),
        (c.TrackChartItem = "track-chart-item"),
        (c.AlbumChartItem = "album-chart-item"),
        (c.Station = "station"),
        (c.Track = "track"),
        (c.MenuItemAlbum = "menu-item-album"),
        (c.MenuItemPlaylist = "menu-item-playlist"),
        (c.Artist = "artist"),
        (c.Tab = "tab"),
        (c.GenerativeStation = "generative-station"),
        (c.Video = "video"),
        (c.VideoPreview = "video-preview"),
        (c.LastActiveItem = "last_active_item"),
        (c.MyShelf = "my_shelf"),
        (c.Audiobook = "audiobook"),
        (c.Podcast = "podcast"),
        ((l = O || (O = {})).Station = "station"),
        (l.Chromecast = "chromecast"),
        (l.Airplay = "airplay"),
        (l.Bluetooth = "bluetooth"),
        (l.Sonos = "sonos"),
        (l.SamsungSdk = "samsung_sdk"),
        (l.YandexTv = "yandex_tv"),
        (l.Phone = "phone"),
        (l.AndroidTv = "android_tv"),
        (l.AppleTv = "apple_tv"),
        (l.WebTv = "web_tv"),
        (l.Web = "web"),
        (l.Unknown = "unknown"),
        ((u = L || (L = {})).Main = "main"),
        (u.Podcasts = "podcasts"),
        (u.Audiobooks = "audiobooks"),
        (u.Kids = "kids"),
        (u.Own = "own"),
        ((d = N || (N = {})).Top = "top"),
        (d.Track = "track"),
        (d.Album = "album"),
        (d.Artist = "artist"),
        (d.Playlist = "playlist"),
        (d.Podcast = "podcast"),
        (d.Book = "book"),
        (d.Spoken = "spoken"),
        (d.KidsMusic = "kids_music"),
        (d.KidsPlaylist = "kids_playlist"),
        (d.KidsSpoken = "kids_spoken"),
        (d.SpokenPlaylist = "spoken_playlist"),
        (d.Video = "video"),
        (d.Clip = "clip"),
        (d.Other = "other"),
        ((h = U || (U = {})).Artist = "artist"),
        (h.Track = "track"),
        (h.Playlist = "playlist"),
        (h.Album = "album"),
        (h.Wave = "wave"),
        (h.Video = "video"),
        ((f = D || (D = {})).ArtistScreen = "artist_screen"),
        (f.AlbumScreen = "album_screen"),
        (f.CompilationsScreen = "compilations_screen"),
        (f.PlaylistScreen = "playlist_screen"),
        (f.TrackActionsScreen = "track_actions_screen"),
        (f.ShareScreen = "share_screen"),
        (f.AddTracksScreen = "add_tracks_screen"),
        (f.TextScreen = "text_screen"),
        (f.DescriptionScreen = "description_screen"),
        (f.SelectDeviceScreen = "select_device_screen"),
        (f.Link = "link"),
        (f.VideoScreen = "video_screen"),
        (f.VideoWaveScreen = "video_wave_screen"),
        ((m = F || (F = {})).Pult = "pult"),
        (m.PultWithStation = "pult_with_station"),
        (m.FullScreen = "full_screen"),
        (m.NonFullScreen = "non_full_screen"),
        (m.Bottomsheet = "bottomsheet"),
        ((g = H || (H = {})).Timer = "timer"),
        (g.Cross = "cross"),
        ((p = M || (M = {})).Promotions = "promotions"),
        (p.Popular = "popular"),
        (p.TrackChart = "track-chart"),
        (p.AlbumChart = "album-chart"),
        (p.RecentlyPlayed = "recently-played"),
        (p.Editorial = "editorial"),
        (p.EditorialPlaylists = "editorial-playlists"),
        (p.PlaylistWithTracks = "playlist-with-tracks"),
        (p.Category = "category"),
        (p.CategoriesTab = "categories-tab"),
        (p.Radio = "radio"),
        (p.TimedShow = "timed-show"),
        (p.Menu = "menu"),
        (p.YearResultsPersonalPlaylist = "year_results_personal_playlist"),
        (p.TagCompilation = "tag-compilation"),
        (p.LikedPodcasts = "liked_podcasts"),
        (p.Shelf = "shelf"),
        (p.BookmateBanner = "bookmateBanner"),
        (p.MenuTab = "menuTab"),
        ((y = j || (j = {})).AlbumListScreen = "album_list_screen"),
        (y.PlaylistListScreen = "playlist_list_screen"),
        (y.AlbumChartScreen = "album_chart_screen"),
        (y.TrackChartScreen = "track_chart_screen"),
        (y.PlaylistScreen = "playlist_screen"),
        (y.StoriesScreen = "stories_screen"),
        (y.GenreScreen = "genre_screen"),
        (y.NewReleasesTabScreen = "new_releases_tab_screen"),
        (y.ChartTabScreen = "chart_tab_screen"),
        (y.MixesTabScreen = "mixes_tab_screen"),
        (y.RecentlyPlayedScreen = "recentlyPlayedScreen"),
        (y.LikedScreen = "likedScreen"),
        (y.PodcastsTabScreen = "podcasts_tab_screen"),
        ((v = W || (W = {})).User = "user"),
        (v.Smart = "smart"),
        (v.Editor = "editor"),
        (v.Liked = "liked"),
        (v.Chart = "chart"),
        ((E = B || (B = {})).Music = "music"),
        (E.Podcast = "podcast"),
        (E.FairyTale = "fairy-tale"),
        (E.Audiobook = "audiobook"),
        (E.Poetry = "poetry"),
        (E.Article = "article"),
        (E.Lecture = "lecture"),
        (E.Show = "show"),
        (E.Radio = "radio"),
        (E.Unknown = "unknown"),
        ((P = q || (q = {})).AlbumListScreen = "album_list_screen"),
        (P.PlaylistListScreen = "playlist_list_screen"),
        (P.PlaylistScreen = "playlist_screen"),
        (P.AlbumScreen = "album_screen"),
        (P.TreesScreen = "trees_screen"),
        (P.StoriesScreen = "stories_screen"),
        (P.Link = "link"),
        ((_ = V || (V = {})).Audiobook = "audiobook"),
        (_.Track = "track"),
        (_.Artist = "artist"),
        (_.Album = "album"),
        (_.Playlist = "playlist"),
        (_.Wave = "wave"),
        (_.Video = "video"),
        (_.Generative = "generative"),
        (_.Feature = "feature"),
        (_.Teaser = "teaser"),
        (_.Shortcut = "shortcut"),
        (_.Concert = "concert"),
        (_.UpcomingAlbum = "upcoming_album"),
        (_.NonApplicable = "non_applicable"),
        (_.Text = "text"),
        ((x = Y || (Y = {})).ArtistScreen = "artist_screen"),
        (x.ArtistListScreen = "artist_list_screen"),
        (x.TrackListScreen = "track_list_screen"),
        (x.AlbumScreen = "album_screen"),
        (x.AlbumListScreen = "album_list_screen"),
        (x.CompilationsScreen = "compilations_screen"),
        (x.CompilationsListScreen = "compilations_list_screen"),
        (x.ConcertScreen = "concert_screen"),
        (x.PlaylistScreen = "playlist_screen"),
        (x.PlaylistListScreen = "playlist_list_screen"),
        (x.TrackActionsScreen = "track_actions_screen"),
        (x.ShareScreen = "share_screen"),
        (x.Link = "link"),
        (x.VideoScreen = "video_screen"),
        (x.PodcastLandingScreen = "podcast_landing_screen"),
        (x.NonmusicLandingScreen = "nonmusic_landing_screen"),
        (x.KidsLandingScreen = "kids_landing_screen"),
        (x.AlbumChartScreen = "album_chart_screen"),
        (x.TicketPurchaseScreen = "ticket_purchase_screen"),
        (x.AddTracksScreen = "add_tracks_screen"),
        (x.ContestScreen = "contest_screen"),
        (x.TrackChartScreen = "track_chart_screen"),
        (x.MainScreen = "main_screen"),
        (x.TrackShareScreen = "track_share_screen"),
        (x.ExpandedPlayerScreen = "expanded_player_screen"),
        (x.CommunicationScreen = "communication_screen"),
        (x.AlbumShareScreen = "album_share_screen"),
        (x.SearchScreen = "search_screen"),
        (x.TreesScreen = "trees_screen"),
        (x.YearResultsScreen = "year_results_screen"),
        (x.SearchObjectListScreen = "search_object_list_screen"),
        (x.FunnelScreen = "funnel_screen"),
        (x.TextScreen = "text_screen"),
        (x.BottomsheetScreen = "bottomsheet_screen"),
        (x.QueueScreen = "queue_screen"),
        (x.HistoryScreen = "history_screen"),
        (x.ConcertPurchaseScreen = "concert_purchase_screen"),
        ((S = K || (K = {})).SearchScreen = "search_screen"),
        (S.CollectionLandingScreen = "collection_landing_screen"),
        (S.MainScreen = "main_screen"),
        (S.NonmusicLandingScreen = "nonmusic_landing_screen"),
        (S.PodcastLandingScreen = "podcast_landing_screen"),
        (S.AudiobookLandingScreen = "audiobook_landing_screen"),
        (S.KidsLandingScreen = "kids_landing_screen"),
        (S.DynamicScreen = "dynamic_screen"),
        ((T = G || (G = {})).Next = "next"),
        (T.End = "end"),
        ((b = z || (z = {})).Tap = "tap"),
        (b.LongTap = "longTap"),
        (b.DoubleTap = "doubleTap"),
        (b.Pan = "pan"),
        (b.Swipe = "swipe"),
        ((C = Q || (Q = {})).PersonalResults = "personal_results"),
        (C.ArtistPersonalResults = "artist_personal_results"),
        ((k = X || (X = {})).Concert = "concert"),
        (k.Shortcut = "shortcut"),
        ((w = Z || (Z = {})).ConcertScreen = "concert_screen"),
        (w.ConcertPurchaseScreen = "concert_purchase_screen"),
        (w.ArtistConcertsScreen = "artist_concerts_screen"),
        ((R = J || (J = {})).ConcertScreen = "concert_screen"),
        (R.ConcertPurchaseScreen = "concert_purchase_screen"),
        (($ || ($ = {})).ConcertPurchaseScreen = "concert_purchase_screen");
    },
    61185: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return a;
        },
      });
      let a = (e, t, r) => e.replace(r, t);
    },
    37810: function (e, t, r) {
      "use strict";
      r.d(t, {
        y: function () {
          return n;
        },
      });
      var a,
        i =
          ((a = function (e, t) {
            return (a =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = e;
            }
            a(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        s = function (e, t) {
          var r = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > t.indexOf(a) &&
              (r[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, a = Object.getOwnPropertySymbols(e);
              i < a.length;
              i++
            )
              0 > t.indexOf(a[i]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[i]) &&
                (r[a[i]] = e[a[i]]);
          return r;
        },
        n = (function (e) {
          function t(r, a) {
            void 0 === a && (a = {});
            var i = this,
              n = a.code,
              o = a.data,
              c = s(a, ["code", "data"]),
              l = r || "Internal error";
            return (
              Object.defineProperty((i = e.call(this, l, c) || this), "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "BaseException",
              }),
              Object.defineProperty(i, "message", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(i, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(i, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(i, "stack", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (i.message = l),
              (i.code = void 0 === n ? "E_INTERNAL" : n),
              (i.data = void 0 === o ? {} : o),
              (i.stack = Error(l).stack),
              Object.setPrototypeOf(i, t.prototype),
              i
            );
          }
          return i(t, e), t;
        })(Error);
    },
    99287: function (e, t, r) {
      "use strict";
      var a, i, s, n, o, c, l, u, d, h, f, m, g, p, y, v, E, P, _, x, S, T, b;
      r.d(t, {
        rp: function () {
          return d;
        },
        Qm: function () {
          return h;
        },
        r1: function () {
          return a;
        },
        EW: function () {
          return m;
        },
        oF: function () {
          return i;
        },
        we: function () {
          return s;
        },
        qe: function () {
          return f;
        },
        ay: function () {
          return u;
        },
        Sc: function () {
          return l;
        },
        yA: function () {
          return c;
        },
        zu: function () {
          return n;
        },
        Vc: function () {
          return o;
        },
      }),
        ((g = a || (a = {})).DEFAULT = "default"),
        (g.DONATION = "donation"),
        (g.REWIND = "year-rewind"),
        ((p = i || (i = {})).UNKNOWN = "unknown"),
        (p.MALE = "male"),
        (p.FEMALE = "female"),
        ((y = s || (s = {})).PUBLIC = "public"),
        (y.PRIVATE = "private"),
        ((v = n || (n = {})).OWN = "OWN"),
        (v.UGC = "UGC"),
        (v.OWN_REPLACED_TO_UGC = "OWN_REPLACED_TO_UGC"),
        (v.EXTERNAL = "EXTERNAL"),
        ((E = o || (o = {})).TRACK = "track"),
        (E.MUSIC = "music"),
        (E.NOISE = "noise"),
        (E.PODCAST = "podcast-episode"),
        (E.COMMENT = "comment"),
        (E.ARTICLE = "article"),
        (E.ASMR = "asmr"),
        (E.RADIO = "radio"),
        (E.SHOW = "show"),
        (E.LECTURE = "lecture"),
        (E.FAIRY_TALE = "fairy-tale"),
        (E.AUDIOBOOK = "audiobook"),
        (E.POETRY = "poetry"),
        ((c || (c = {})).SMART_PREVIEW = "smart_preview"),
        ((P = l || (l = {})).ALL = "all"),
        (P.TRACK = "track"),
        (P.ALBUM = "album"),
        (P.ARTIST = "artist"),
        (P.PLAYLIST = "playlist"),
        (P.WAVE = "wave"),
        (P.GENRE = "genre"),
        (P.USER = "user"),
        (P.UGC_TRACK = "ugc_track"),
        (P.PODCAST = "podcast"),
        (P.PODCAST_EPISODE = "podcast_episode"),
        (P.VIDEO = "video"),
        (P.LYRICS = "lyrics"),
        (P.CLIP = "clip"),
        ((_ = u || (u = {})).TOP = "top"),
        (_.TRACK = "track"),
        (_.CLIP = "clip"),
        (_.ALBUM = "album"),
        (_.ARTIST = "artist"),
        (_.PLAYLIST = "playlist"),
        (_.KIDS_MUSIC = "kids-music"),
        (_.KIDS_PLAYLIST = "kids-playlist"),
        (_.SPOKEN_PLAYLIST = "spoken-playlist"),
        (_.PODCAST = "podcast"),
        (_.BOOK = "book"),
        (_.KIDS_PODCAST = "kids-podcast"),
        (_.KIDS_BOOK = "kids-book"),
        ((x = d || (d = {})).PRIMARY = "primary"),
        (x.SECONDARY = "secondary"),
        (x.PLUS = "plus"),
        ((S = h || (h = {})).ALBUM = "album_item"),
        (S.ARTIST = "artist_item"),
        (S.PLAYLIST = "playlist_item"),
        (S.TRACK = "full_track_item"),
        (S.LIKED_PLAYLIST = "liked_playlist_item"),
        (S.PERSONAL_PLAYLIST = "personal_playlist_item"),
        (S.WAVE = "wave_item"),
        (S.MIX = "mix"),
        (S.LIKED_ALBUM = "liked_album_item"),
        (S.PRESAVED_ALBUM = "presaved_album_item"),
        (S.CHART_ALBUM = "chart_album_item"),
        (S.NON_MUSIC_ALBUM_ITEM = "non_music_album_item"),
        (S.MENU = "menu_item"),
        ((T = f || (f = {})).ALBUMS = "albums"),
        (T.ARTISTS = "artists"),
        (T.PLAYLISTS = "playlists"),
        ((b = m || (m = {})).TRACK = "track"),
        (b.WAVE = "wave"),
        (b.ARTIST = "artist"),
        (b.PLAYLIST = "playlist"),
        (b.ALBUM = "album"),
        (b.OTHER = "other"),
        (b.SEARCH = "search");
    },
    51179: function (e, t, r) {
      "use strict";
      r.d(t, {
        Rc: function () {
          return eN;
        },
        VZ: function () {
          return B;
        },
        SZ: function () {
          return eD;
        },
        cn: function () {
          return eM;
        },
        rp: function () {
          return eO.rp;
        },
        h9: function () {
          return j;
        },
        UN: function () {
          return e3;
        },
        V9: function () {
          return z;
        },
        nL: function () {
          return eo;
        },
        aU: function () {
          return ei;
        },
        F1: function () {
          return W;
        },
        em: function () {
          return X;
        },
        Qm: function () {
          return eO.Qm;
        },
        BS: function () {
          return tr;
        },
        Y7: function () {
          return e4;
        },
        r1: function () {
          return eO.r1;
        },
        l: function () {
          return e9;
        },
        dF: function () {
          return e2;
        },
        nN: function () {
          return K;
        },
        pi: function () {
          return eV;
        },
        Vq: function () {
          return ea;
        },
        gQ: function () {
          return er;
        },
        Fr: function () {
          return eq;
        },
        jB: function () {
          return en;
        },
        TA: function () {
          return eY;
        },
        Vf: function () {
          return ec;
        },
        kC: function () {
          return eK;
        },
        Ai: function () {
          return te;
        },
        yG: function () {
          return Z;
        },
        kF: function () {
          return eG;
        },
        z3: function () {
          return M;
        },
        EW: function () {
          return eO.EW;
        },
        E6: function () {
          return e8;
        },
        UE: function () {
          return eL;
        },
        hP: function () {
          return tt;
        },
        oF: function () {
          return eO.oF;
        },
        pH: function () {
          return V;
        },
        mD: function () {
          return e0;
        },
        IW: function () {
          return e5;
        },
        KZ: function () {
          return ey;
        },
        Bl: function () {
          return eF;
        },
        we: function () {
          return eO.we;
        },
        m3: function () {
          return eH;
        },
        ol: function () {
          return eJ;
        },
        Gu: function () {
          return ta;
        },
        Yk: function () {
          return J;
        },
        qe: function () {
          return eO.qe;
        },
        nJ: function () {
          return G;
        },
        Ud: function () {
          return eX;
        },
        C: function () {
          return ed;
        },
        pI: function () {
          return ef;
        },
        NE: function () {
          return eh;
        },
        Bm: function () {
          return em;
        },
        ay: function () {
          return eO.ay;
        },
        Po: function () {
          return e6;
        },
        xW: function () {
          return eZ;
        },
        kx: function () {
          return eg;
        },
        Sc: function () {
          return eO.Sc;
        },
        lp: function () {
          return eb;
        },
        tz: function () {
          return e$;
        },
        _O: function () {
          return ev;
        },
        PI: function () {
          return eE;
        },
        yC: function () {
          return e_;
        },
        H7: function () {
          return eP;
        },
        As: function () {
          return q;
        },
        ro: function () {
          return es;
        },
        yA: function () {
          return eO.yA;
        },
        hd: function () {
          return e7;
        },
        li: function () {
          return $;
        },
        cp: function () {
          return e1;
        },
        O3: function () {
          return ez;
        },
        mk: function () {
          return eu;
        },
        zu: function () {
          return eO.zu;
        },
        Vc: function () {
          return eO.Vc;
        },
        HZ: function () {
          return eW;
        },
        J7: function () {
          return Q;
        },
        o1: function () {
          return eT;
        },
        sy: function () {
          return eS;
        },
        Mx: function () {
          return ex;
        },
        Vn: function () {
          return ej;
        },
        Bi: function () {
          return ee;
        },
        ZW: function () {
          return et;
        },
      });
      var a,
        i,
        s,
        n,
        o,
        c,
        l,
        u,
        d,
        h,
        f,
        m,
        g,
        p,
        y,
        v,
        E,
        P,
        _,
        x,
        S,
        T,
        b,
        C,
        k,
        w,
        R,
        A,
        I,
        O,
        L,
        N,
        U,
        D,
        F,
        H,
        M,
        j,
        W,
        B,
        q,
        V,
        Y,
        K,
        G,
        z,
        Q,
        X,
        Z,
        J,
        $,
        ee,
        et,
        er,
        ea,
        ei,
        es,
        en,
        eo,
        ec,
        el,
        eu,
        ed,
        eh,
        ef,
        em,
        eg,
        ep,
        ey,
        ev,
        eE,
        eP,
        e_,
        ex,
        eS,
        eT,
        eb,
        eC = r(8655),
        ek = r(3429);
      class ew {
        constructor(e) {
          (0, eC._)(this, "httpClient", void 0), (this.httpClient = e);
        }
      }
      let eR = new Set(),
        eA = (e) => {
          if (!/\[...notFound\]/.test(e)) {
            let t = "".concat(
              e
                .replaceAll(/\/(?!$)/gi, "\\/")
                .replace(/\/(?=$)/i, "")
                .replaceAll(/\[[^/-]+\]/gi, "([^/]+)"),
              "\\/?",
            );
            eR.add(RegExp(t, "ig"));
          }
        };
      class eI extends ew {
        createRequestHeadersFromParams(e) {
          var t, r, a;
          let i =
              (null == e
                ? void 0
                : null === (t = e.common) || void 0 === t
                  ? void 0
                  : t.oauth) || this.config.params.common.oauth,
            s =
              (null == e
                ? void 0
                : null === (r = e.common) || void 0 === r
                  ? void 0
                  : r.client) || this.config.params.common.client,
            n =
              (null == e
                ? void 0
                : null === (a = e.common) || void 0 === a
                  ? void 0
                  : a.language) || this.config.params.common.language,
            o = (null == e ? void 0 : e.customRequestId) || (0, ek.Z)();
          return {
            authorization: void 0 !== i ? "OAuth ".concat(i) : void 0,
            "x-yandex-music-client": s,
            "accept-language": n,
            "x-yandex-music-frontend": "new",
            "X-Request-Id": o,
          };
        }
        createTvmHeadersFromParams(e) {
          let { params: t, target: r } = e,
            a =
              (null == t ? void 0 : t.tvmTickets) ||
              this.config.params.tvmTickets;
          if (a && r) {
            let e = a[r];
            if (e) return { "X-Ya-Service-Ticket": e.ticket };
          }
          return {};
        }
        createUserTicketHeaderFromParams() {
          let e = this.config.params.userTicket;
          return e ? { "X-Ya-User-Ticket": e } : {};
        }
        getRetryPolicyConfig(e) {
          return { config: this.retryPolicyConfig, isNotIdempotent: e };
        }
        constructor(e, t) {
          if (
            (super(e),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (0, eC._)(this, "retryPolicyConfig", void 0),
            (this.httpClient = e),
            (this.config = t),
            (this.retryPolicyConfig = t.retryPolicyConfig),
            Array.isArray(t.aggregatedIdUrlScheme))
          )
            for (let e of t.aggregatedIdUrlScheme) eA(e);
          else t.aggregatedIdUrlScheme && eA(t.aggregatedIdUrlScheme);
        }
      }
      ((a = M || (M = {})).RU = "ru"),
        (a.EN = "en"),
        (a.UK = "uk"),
        (a.BE = "be"),
        (a.KK = "kk"),
        (a.HY = "hy"),
        (a.AZ = "az"),
        (a.KA = "ka"),
        (a.HE = "he"),
        (a.UZ = "uz"),
        (a.TG = "tg"),
        (a.TR = "tr"),
        (a.JA = "ja"),
        (a.ZH = "zh"),
        (a.KO = "ko"),
        (a.TH = "th"),
        (a.ID = "id"),
        (a.DE = "de"),
        (a.EL = "el"),
        (a.RO = "ro"),
        (a.MO = "mo"),
        (a.AR = "ar");
      var eO = r(99287);
      ((i = j || (j = {})).UP = "up"),
        (i.DOWN = "down"),
        (i.SAME = "same"),
        (i.NEW = "new"),
        ((s = W || (W = {})).EXPLICIT = "explicit"),
        (s.CLEAN = "clean"),
        ((n = B || (B = {})).UNKNOWN = "unknown"),
        (n.ALBUM = "album"),
        (n.SINGLE = "single"),
        (n.COMPILATION = "compilation"),
        (n.PODCAST = "podcast"),
        (n.FAIRY_TALE = "fairy-tale"),
        (n.AUDIOBOOK = "audiobook"),
        (n.VIDEO_SINGLE = "video-single"),
        (n.VIDEO_ALBUM = "video-album"),
        (n.RADIO = "radio"),
        (n.ASMR = "asmr"),
        (n.NOISE = "noise"),
        ((o = q || (q = {})).ASC = "asc"),
        (o.DESC = "desc"),
        ((c = V || (V = {}))[(c.DAY = 1)] = "DAY"),
        (c[(c.WEEK = 7)] = "WEEK"),
        (c[(c.MONTH = 30)] = "MONTH"),
        ((Y || (Y = {})).Blackbox = "blackbox"),
        ((l = K || (K = {})).RADIAL = "RADIAL"),
        (l.STACK = "STACK"),
        ((u = G || (G = {})).LOSSLESS = "lossless"),
        (u.HQ = "hq"),
        (u.NQ = "nq"),
        (u.LQ = "lq"),
        (u.PREVIEW = "preview"),
        (u.SMART_PREVIEW = "smart_preview"),
        ((d = z || (z = {})).MP3 = "mp3"),
        (d.FLAC = "flac"),
        (d.AAC = "aac"),
        (d.HEAAC = "he-aac"),
        ((h = Q || (Q = {})).RAW = "raw"),
        (h.ENCRAW = "encraw"),
        ((f = X || (X = {})).MODAL = "modal"),
        (f.FOREIGN_AGENT = "foreignAgent"),
        (f.INFORMATIONAL = "informational"),
        (f.AGE_18 = "age18"),
        (f.EXPLICIT = "explicit");
      let eL = [
        eO.Vc.AUDIOBOOK,
        eO.Vc.FAIRY_TALE,
        eO.Vc.PODCAST,
        eO.Vc.COMMENT,
      ];
      ((m = Z || (Z = {})).TEXT = "TEXT"),
        (m.LRC = "LRC"),
        (m.RICH_JSON = "RICH_JSON"),
        ((g = J || (J = {})).KIDS = "kids"),
        (g.BOOKMATE = "bookmate"),
        ((p = $ || ($ = {})).RU = "ru"),
        (p.COM = "com"),
        (p.KZ = "kz"),
        (p.BY = "by"),
        (p.UZ = "uz");
      class eN extends eI {
        async experiments() {
          var e;
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("account/experiments", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (e = this.config.timeouts) || void 0 === e
                  ? void 0
                  : e.experiments,
            });
          return (await a.json()).result;
        }
        async experimentsDetails() {
          var e;
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("account/experiments/details", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (e = this.config.timeouts) || void 0 === e
                  ? void 0
                  : e.experimentsDetails,
            });
          return (await a.json()).result;
        }
        async settings() {
          var e;
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("account/settings", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (e = this.config.timeouts) || void 0 === e
                  ? void 0
                  : e.settings,
            });
          return (await a.json()).result;
        }
        async about() {
          var e;
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("account/about", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (e = this.config.timeouts) || void 0 === e
                  ? void 0
                  : e.about,
            });
          return (await a.json()).result;
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      let eU = (e) => {
        let t = {};
        return (
          Object.getOwnPropertyNames(e)
            .filter((t) => void 0 !== e[t] && null !== e[t])
            .map((r) => {
              t[r] = String(e[r]);
            }),
          new URLSearchParams(t)
        );
      };
      class eD extends eI {
        async getAlbumWithRichTracks(e) {
          var t;
          let r = e.albumId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("albums/".concat(r, "/with-tracks"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getAlbumWithRichTracks,
              searchParams: eU({
                resumeStream: e.resumeStream,
                page: e.page,
                pageSize: e.pageSize,
                "sort-order": e.sortOrder,
                richTracks: !0,
              }),
            });
          return (await s.json()).result;
        }
        async getAlbumWithTracksIds(e) {
          var t;
          let r = e.albumId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("albums/".concat(r, "/with-tracks"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getAlbumWithTracksIds,
              searchParams: eU({
                resumeStream: e.resumeStream,
                page: e.page,
                pageSize: e.pageSize,
                "sort-order": e.sortOrder,
                richTracks: !1,
              }),
            });
          return (await s.json()).result;
        }
        async getDisclaimer(e) {
          var t;
          let r = e.albumId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("albums/".concat(r, "/disclaimer"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getDisclaimer,
            });
          return (await s.json()).result;
        }
        async getTrailer(e) {
          var t;
          let r = e.albumId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("albums/".concat(r, "/trailer"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getTrailer,
            });
          return (await s.json()).result;
        }
        async getRelatedContent(e) {
          var t;
          let r = e.albumId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get(
              "albums/".concat(r, "/related-content"),
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...i,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getRelatedContent,
              },
            );
          return (await s.json()).result;
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            "".concat(t.gateway.prefixUrl, "/albums/[albumId]/with-tracks"),
            "".concat(t.gateway.prefixUrl, "/albums/[albumId]/disclaimer"),
            "".concat(t.gateway.prefixUrl, "/albums/[albumId]/trailer"),
            "".concat(t.gateway.prefixUrl, "/albums/[albumId]/related-content"),
          ]),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class eF extends eI {
        async getPlaylist(e) {
          var t;
          let r = e.playlistUuid,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("playlist/".concat(r), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                resumeStream: e.resumeStream,
                richTracks: e.richTracks,
                trackPlayCounts: e.trackPlayCounts,
                withSimilarsLikesCount: e.withSimilarsLikesCount,
                page: e.page,
                pageSize: e.pageSize,
              }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getPlaylist,
            });
          return (await s.json()).result;
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = "".concat(
            t.gateway.prefixUrl,
            "/playlist/[playlistUuid]/",
          )),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class eH extends eI {
        async getPlaylists(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("playlists", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                resumeStream: e.resumeStream,
                page: e.page,
                pageSize: e.pageSize,
                playlistIds: e.playlistIds,
              }),
            });
          return (await a.json()).result;
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = "".concat(
            t.gateway.prefixUrl,
            "/playlists/",
          )),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class eM extends eI {
        async getArtistTracks(e) {
          var t, r, a;
          let i = e.artistId,
            s = this.config.gateway.prefixUrl,
            n = this.config.gateway.headers,
            o = await this.httpClient.get("artists/".concat(i, "/tracks"), {
              prefixUrl: s,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...n,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                "sort-by":
                  null === (t = e.sort) || void 0 === t ? void 0 : t.sortBy,
                "sort-order":
                  null === (r = e.sort) || void 0 === r ? void 0 : r.sortOrder,
                page: e.page,
                pageSize: e.pageSize,
              }),
              timeout:
                null === (a = this.config.timeouts) || void 0 === a
                  ? void 0
                  : a.getArtistTracks,
            });
          return (await o.json()).result;
        }
        async getArtistTrackIds(e) {
          var t;
          let r = e.artistId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("artists/".concat(r, "/track-ids"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...i,
              },
              searchParams: eU({ page: e.page, pageSize: e.pageSize }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getArtistTrackIds,
            });
          return (await s.json()).result;
        }
        async getSafeDirectAlbums(e) {
          var t, r, a;
          let i = e.artistId,
            s = this.config.gateway.prefixUrl,
            n = this.config.gateway.headers,
            o = await this.httpClient.get(
              "artists/".concat(i, "/safe-direct-albums"),
              {
                prefixUrl: s,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...n,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({
                  "sort-by":
                    null === (t = e.sort) || void 0 === t ? void 0 : t.sortBy,
                  "sort-order":
                    null === (r = e.sort) || void 0 === r
                      ? void 0
                      : r.sortOrder,
                  limit: e.limit,
                }),
                timeout:
                  null === (a = this.config.timeouts) || void 0 === a
                    ? void 0
                    : a.getSafeDirectAlbums,
              },
            );
          return (await o.json()).result;
        }
        async getBriefInfo(e) {
          var t;
          let r = e.artistId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("artists/".concat(r, "/brief-info"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                popularTracksCount: e.popularTracksCount,
                useClipDataFormat: e.useClipDataFormat,
                discographyBlockEnabled: e.discographyBlockEnabled,
                fetchPlaylistLikesCounts: e.fetchPlaylistLikesCounts,
              }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getBriefInfo,
            });
          return (await s.json()).result;
        }
        async getSimilarArtists(e) {
          var t;
          let r = e.artistId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("artists/".concat(r, "/similar"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getSimilarArtists,
            });
          return (await s.json()).result;
        }
        async getDiscographyAlbums(e) {
          var t, r;
          let a = e.artistId,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.get(
              "artists/".concat(a, "/discography-albums"),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({
                  page: e.page,
                  pageSize: e.pageSize,
                  "sort-by":
                    null === (t = e.sort) || void 0 === t ? void 0 : t.sortBy,
                  "sort-order":
                    null === (r = e.sort) || void 0 === r
                      ? void 0
                      : r.sortOrder,
                }),
              },
            );
          return (await n.json()).result;
        }
        async getDirectAlbums(e) {
          var t, r;
          let a = e.artistId,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.get(
              "artists/".concat(a, "/direct-albums"),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({
                  page: e.page,
                  pageSize: e.pageSize,
                  "sort-by":
                    null === (t = e.sort) || void 0 === t ? void 0 : t.sortBy,
                  "sort-order":
                    null === (r = e.sort) || void 0 === r
                      ? void 0
                      : r.sortOrder,
                }),
              },
            );
          return (await n.json()).result;
        }
        async getAlsoAlbums(e) {
          var t, r;
          let a = e.artistId,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.get(
              "artists/".concat(a, "/also-albums"),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({
                  page: e.page,
                  pageSize: e.pageSize,
                  "sort-by":
                    null === (t = e.sort) || void 0 === t ? void 0 : t.sortBy,
                  "sort-order":
                    null === (r = e.sort) || void 0 === r
                      ? void 0
                      : r.sortOrder,
                }),
              },
            );
          return (await n.json()).result;
        }
        async getConcerts(e) {
          var t;
          let r = e.artistId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("artists/".concat(r, "/concerts"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getConcerts,
            });
          return (await s.json()).result;
        }
        async getFamiliarYouInfo(e) {
          var t;
          let { artistId: r, withWaveInfo: a, withCollectionInfo: i } = e,
            s = this.config.gateway.prefixUrl,
            n = this.config.gateway.headers,
            o = await this.httpClient.get(
              "artists/".concat(r, "/familiar-you/info"),
              {
                prefixUrl: s,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...n,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getFamiliarYouInfo,
                searchParams: eU({ withWaveInfo: a, withCollectionInfo: i }),
              },
            );
          return (await o.json()).result;
        }
        async getFamiliarYou(e) {
          var t;
          let {
              artistId: r,
              waveTracksLimit: a,
              collectionTracksLimit: i,
              collectionAlbumsLimit: s,
              withIds: n,
            } = e,
            o = this.config.gateway.prefixUrl,
            c = this.config.gateway.headers,
            l = await this.httpClient.get(
              "artists/".concat(r, "/familiar-you"),
              {
                prefixUrl: o,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...c,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getFamiliarYou,
                searchParams: eU({
                  waveTracksLimit: a,
                  collectionTracksLimit: i,
                  collectionAlbumsLimit: s,
                  withIds: n,
                }),
              },
            );
          return (await l.json()).result;
        }
        async getDisclaimer(e) {
          var t;
          let { artistId: r } = e,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("artists/".concat(r, "/disclaimer"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getDisclaimer,
            });
          return (await s.json()).result;
        }
        async getTrailer(e) {
          var t;
          let { artistId: r } = e,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("artists/".concat(r, "/trailer"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getTrailer,
            });
          return (await s.json()).result;
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            "".concat(t.gateway.prefixUrl, "/artists/[artistId]/tracks"),
            "".concat(
              t.gateway.prefixUrl,
              "/artists/[artistId]/safe-direct-albums",
            ),
            "".concat(t.gateway.prefixUrl, "/artists/[artistId]/brief-info"),
            "".concat(t.gateway.prefixUrl, "/artists/[artistId]/similar"),
            "".concat(t.gateway.prefixUrl, "/artists/[artistId]/direct-albums"),
            "".concat(t.gateway.prefixUrl, "/artists/[artistId]/also-albums"),
            "".concat(
              t.gateway.prefixUrl,
              "/artists/[artistId]/discography-albums",
            ),
            "".concat(t.gateway.prefixUrl, "/artists/[artistId]/concerts"),
            "".concat(
              t.gateway.prefixUrl,
              "/artists/[artistId]/familiar-you/info",
            ),
            "".concat(t.gateway.prefixUrl, "/artists/[artistId]/familiar-you"),
            "".concat(t.gateway.prefixUrl, "/artists/[artistId]/disclaimer"),
            "".concat(t.gateway.prefixUrl, "/artists/[artistId]/trailer"),
          ]),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      ((y = ee || (ee = {})).OK = "ok"),
        (y.ERROR = "error"),
        ((v = et || (et = {})).OK = "ok"),
        (v.ERROR = "error");
      class ej extends eI {
        async getLikedAlbums(e) {
          var t;
          let r = e.userId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get(
              "users/".concat(r, "/likes/albums/page"),
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...i,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({
                  rich: !0,
                  page: e.page,
                  pageSize: e.pageSize,
                  "sort-by": e.sortBy,
                  "sort-order": e.sortOrder,
                  metaType: e.metaType,
                }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getLikedAlbums,
              },
            );
          return (await s.json()).result;
        }
        async getLikedArtists(e) {
          var t;
          let r = e.userId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get(
              "users/".concat(r, "/likes/artists/page"),
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...i,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({
                  page: e.page,
                  pageSize: e.pageSize,
                  "sort-by": e.sortBy,
                  "sort-order": e.sortOrder,
                  withTimestamps: e.withTimestamps,
                }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getLikedArtists,
              },
            );
          return (await s.json()).result;
        }
        async getDislikedArtists(e) {
          var t;
          let r = e.userId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get(
              "users/".concat(r, "/dislikes/artists"),
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...i,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({
                  "sort-by": e.sortBy,
                  "sort-order": e.sortOrder,
                }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getDislikedArtists,
              },
            );
          return (await s.json()).result;
        }
        async getLikedPlaylists(e) {
          var t;
          let r = e.userId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get(
              "users/".concat(r, "/likes/playlists"),
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...i,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({
                  page: e.page,
                  pageSize: e.pageSize,
                  "sort-by": e.sortBy,
                  "sort-order": e.sortOrder,
                  metaType: e.metaType,
                  withTracks: e.withTracks,
                }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getLikedPlaylists,
              },
            ),
            n = await s.json();
          return { likedPlaylists: n.result, pager: n.pager };
        }
        async getPlaylistsKinds(e) {
          var t;
          let r = e.userId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get(
              "users/".concat(r, "/playlists/list/kinds"),
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...i,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getPlaylistsKinds,
              },
            );
          return (await s.json()).result;
        }
        async createPlaylist(e) {
          var t;
          let r = e.userId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.post(
              "users/".concat(r, "/playlists/create"),
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...i,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.createPlaylist,
                searchParams: eU({
                  visibility: e.visibility,
                  title: e.title,
                  description: e.description,
                }),
              },
            );
          return (await s.json()).result;
        }
        async getPlaylistsByKinds(e) {
          var t;
          let r = e.userId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.post("users/".concat(r, "/playlists"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                kinds: e.kinds,
                withLikesCount: e.withLikesCount,
                withTracks: e.withTracks,
              }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getPlaylistsByKinds,
            });
          return (await s.json()).result;
        }
        async getCreatedPlaylists(e) {
          var t;
          let r = e.userId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get(
              "users/".concat(r, "/playlists/list"),
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...i,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({
                  page: e.page,
                  pageSize: e.pageSize,
                  "sort-by": e.sortBy,
                  "sort-order": e.sortOrder,
                  withLikesCount: e.withLikesCount,
                }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getCreatedPlaylists,
              },
            );
          return (await s.json()).result;
        }
        async getPlaylistWithRichTracks(e) {
          var t;
          let r = e.userId,
            a = e.playlistKind,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.get(
              "users/".concat(r, "/playlists/").concat(a),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({
                  resumeStream: e.resumeStream,
                  trackMetaType: e.trackMetaType,
                  page: e.page,
                  pageSize: e.pageSize,
                  trackPlayCounts: e.trackPlayCounts,
                  withSimilarsLikesCount: e.withSimilarsLikesCount,
                  richTracks: !0,
                }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getPlaylistWithRichTracks,
              },
            );
          return (await n.json()).result;
        }
        async changePlaylistTitle(e) {
          var t;
          let r = e.userId,
            a = e.playlistKind,
            i = await this.httpClient.post(
              "users/".concat(r, "/playlists/").concat(a, "/name"),
              {
                prefixUrl: this.config.gateway.prefixUrl,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({ value: e.title }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.changePlaylistTitle,
              },
            );
          return (await i.json()).result;
        }
        async deletePlaylist(e) {
          var t;
          let r = e.userId,
            a = e.playlistKind,
            i = await this.httpClient.post(
              "users/".concat(r, "/playlists/").concat(a, "/delete"),
              {
                prefixUrl: this.config.gateway.prefixUrl,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.deletePlaylist,
              },
            );
          return (await i.json()).result;
        }
        async changePlaylistDescription(e) {
          var t;
          let r = e.userId,
            a = e.playlistKind,
            i = await this.httpClient.post(
              "users/".concat(r, "/playlists/").concat(a, "/description"),
              {
                prefixUrl: this.config.gateway.prefixUrl,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({ value: e.description }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.changePlaylistDescription,
              },
            );
          return (await i.json()).result;
        }
        async getPlaylistWithTracksIds(e) {
          var t;
          let r = e.userId,
            a = e.playlistKind,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.get(
              "users/".concat(r, "/playlists/").concat(a),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({
                  resumeStream: e.resumeStream,
                  trackMetaType: e.trackMetaType,
                  page: e.page,
                  pageSize: e.pageSize,
                  trackPlayCounts: e.trackPlayCounts,
                  withSimilarsLikesCount: e.withSimilarsLikesCount,
                  richTracks: !1,
                }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getPlaylistWithTracksIds,
              },
            );
          return (await n.json()).result;
        }
        async likeTrack(e) {
          var t, r;
          let a = e.entityId,
            i = e.userId,
            s = this.config.gateway.prefixUrl,
            n = this.config.gateway.headers,
            o = await this.httpClient.post(
              "users/".concat(i, "/likes/tracks/add"),
              {
                prefixUrl: s,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...n,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({ "track-id": a }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.likeTrack,
              },
            ),
            c = await o.json();
          return (
            null == c
              ? void 0
              : null === (r = c.result) || void 0 === r
                ? void 0
                : r.revision
          )
            ? ee.OK
            : ee.ERROR;
        }
        async unlikeTrack(e) {
          var t, r;
          let a = e.entityId,
            i = e.userId,
            s = this.config.gateway.prefixUrl,
            n = this.config.gateway.headers,
            o = await this.httpClient.post(
              "users/".concat(i, "/likes/tracks/").concat(a, "/remove"),
              {
                prefixUrl: s,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...n,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.unlikeTrack,
              },
            ),
            c = await o.json();
          return (
            null == c
              ? void 0
              : null === (r = c.result) || void 0 === r
                ? void 0
                : r.revision
          )
            ? ee.OK
            : ee.ERROR;
        }
        async dislikeTrack(e) {
          var t, r;
          let a = e.entityId,
            i = e.userId,
            s = this.config.gateway.prefixUrl,
            n = this.config.gateway.headers,
            o = await this.httpClient.post(
              "users/".concat(i, "/dislikes/tracks/add"),
              {
                prefixUrl: s,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...n,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({ "track-id": a }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.dislikeTrack,
              },
            ),
            c = await o.json();
          return (
            null == c
              ? void 0
              : null === (r = c.result) || void 0 === r
                ? void 0
                : r.revision
          )
            ? ee.OK
            : ee.ERROR;
        }
        async undislikeTrack(e) {
          var t, r;
          let a = e.entityId,
            i = e.userId,
            s = this.config.gateway.prefixUrl,
            n = this.config.gateway.headers,
            o = await this.httpClient.post(
              "users/".concat(i, "/dislikes/tracks/").concat(a, "/remove"),
              {
                prefixUrl: s,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...n,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.undislikeTrack,
              },
            ),
            c = await o.json();
          return (
            null == c
              ? void 0
              : null === (r = c.result) || void 0 === r
                ? void 0
                : r.revision
          )
            ? ee.OK
            : ee.ERROR;
        }
        async likeArtist(e) {
          var t;
          let r = e.entityId,
            a = e.userId,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.post(
              "users/".concat(a, "/likes/artists/add"),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({ "artist-id": r }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.likeArtist,
              },
            ),
            o = await n.json();
          return (null == o ? void 0 : o.result) === ee.OK ? ee.OK : ee.ERROR;
        }
        async unlikeArtist(e) {
          var t;
          let r = e.entityId,
            a = e.userId,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.post(
              "users/".concat(a, "/likes/artists/").concat(r, "/remove"),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.unlikeArtist,
              },
            ),
            o = await n.json();
          return (null == o ? void 0 : o.result) === ee.OK ? ee.OK : ee.ERROR;
        }
        async dislikeArtist(e) {
          var t;
          let r = e.entityId,
            a = e.userId,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.post(
              "users/".concat(a, "/dislikes/artists/add"),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({ "artist-id": r }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.dislikeArtist,
              },
            ),
            o = await n.json();
          return (null == o ? void 0 : o.result) === ee.OK ? ee.OK : ee.ERROR;
        }
        async undislikeArtist(e) {
          var t;
          let r = e.entityId,
            a = e.userId,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.post(
              "users/".concat(a, "/dislikes/artists/").concat(r, "/remove"),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.undislikeArtist,
              },
            ),
            o = await n.json();
          return (null == o ? void 0 : o.result) === ee.OK ? ee.OK : ee.ERROR;
        }
        async likeAlbum(e) {
          var t;
          let r = e.entityId,
            a = e.userId,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.post(
              "users/".concat(a, "/likes/albums/add"),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({ "album-id": r }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.likeAlbum,
              },
            ),
            o = await n.json();
          return (null == o ? void 0 : o.result) === ee.OK ? ee.OK : ee.ERROR;
        }
        async unlikeAlbum(e) {
          var t;
          let r = e.entityId,
            a = e.userId,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.post(
              "users/".concat(a, "/likes/albums/").concat(r, "/remove"),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.unlikeAlbum,
              },
            ),
            o = await n.json();
          return (null == o ? void 0 : o.result) === ee.OK ? ee.OK : ee.ERROR;
        }
        async likePlaylist(e) {
          var t;
          let { userId: r, ownerId: a, kindId: i } = e,
            { prefixUrl: s, headers: n } = this.config.gateway,
            o = await this.httpClient.post(
              "users/".concat(r, "/likes/playlists/add"),
              {
                prefixUrl: s,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...n,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({ "owner-uid": a, kind: i }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.likePlaylist,
              },
            ),
            c = await o.json();
          return (null == c ? void 0 : c.result) === ee.OK ? ee.OK : ee.ERROR;
        }
        async unlikePlaylist(e) {
          var t;
          let r = e.userId,
            a = e.ownerId,
            i = e.kindId,
            s = this.config.gateway.prefixUrl,
            n = this.config.gateway.headers,
            o = await this.httpClient.post(
              "users/"
                .concat(r, "/likes/playlists/")
                .concat(a, "-")
                .concat(i, "/remove"),
              {
                prefixUrl: s,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...n,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.unlikePlaylist,
              },
            ),
            c = await o.json();
          return (null == c ? void 0 : c.result) === ee.OK ? ee.OK : ee.ERROR;
        }
        async presaveAlbum(e) {
          var t;
          let { userId: r, albumId: a, likeAfterRelease: i } = e,
            s = this.config.gateway.prefixUrl,
            n = this.config.gateway.headers,
            o = await this.httpClient.post(
              "users/".concat(r, "/presaves/add"),
              {
                prefixUrl: s,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...n,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.presaveAlbum,
                searchParams: eU({ albumId: a, likeAfterRelease: i }),
              },
            ),
            c = await o.json();
          return (null == c ? void 0 : c.result) === et.OK ? et.OK : et.ERROR;
        }
        async removePresaveAlbum(e) {
          var t;
          let { userId: r, albumId: a } = e,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.post(
              "users/".concat(r, "/presaves/remove"),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.removePresaveAlbum,
                searchParams: eU({ albumId: a }),
              },
            ),
            o = await n.json();
          return (null == o ? void 0 : o.result) === et.OK ? et.OK : et.ERROR;
        }
        async getPresaves(e) {
          var t;
          let { userId: r, includeReleased: a, includeUpcoming: i } = e,
            s = this.config.gateway.prefixUrl,
            n = this.config.gateway.headers,
            o = await this.httpClient.get("users/".concat(r, "/presaves"), {
              prefixUrl: s,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...n,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({ includeReleased: a, includeUpcoming: i }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getPresaves,
            });
          return (await o.json()).result;
        }
        async getSearchHistory(e) {
          var t;
          let r = e.userId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get(
              "users/".concat(r, "/search-history"),
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...i,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({
                  clientSearchContext: e.clientSearchContext,
                  contentType: e.contentType,
                  supportedTypes: e.supportedTypes,
                }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getSearchHistory,
              },
            );
          return (await s.json()).result;
        }
        async clearSearchHistory(e) {
          var t;
          let r = e.userId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get(
              "users/".concat(r, "/search-history/clear"),
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...i,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.clearSearchHistory,
              },
            );
          return (await s.json()).result;
        }
        async changePlaylistRelative(e) {
          let { userId: t, playlistKind: r } = e,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.post(
              "users/".concat(t, "/playlists/").concat(r, "/change-relative"),
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...i,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({ diff: e.diff, revision: e.revision }),
              },
            );
          return (await s.json()).result;
        }
        async uploadPlaylistCover(e) {
          var t;
          let { userId: r, playlistKind: a } = e,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.post(
              "users/".concat(r, "/playlists/").concat(a, "/cover/upload"),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                body: e.formData,
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.uploadPlaylistCover,
              },
            );
          return (await n.json()).result;
        }
        async getPlaylistTrailer(e) {
          var t;
          let { userId: r, playlistKind: a } = e,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = await this.httpClient.post(
              "users/".concat(r, "/playlists/").concat(a, "/trailer"),
              {
                prefixUrl: i,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...s,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getPlaylistTrailer,
              },
            );
          return (await n.json()).result;
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            "".concat(t.gateway.prefixUrl, "/users/[userId]/likes/albums/page"),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/likes/artists/page",
            ),
            "".concat(t.gateway.prefixUrl, "/users/[userId]/likes/playlists"),
            "".concat(t.gateway.prefixUrl, "/users/[userId]/playlists/list"),
            "".concat(t.gateway.prefixUrl, "/users/[userId]/playlists/create"),
            "".concat(t.gateway.prefixUrl, "/users/[userId]/playlists/delete"),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/playlists/[playlistKind]",
            ),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/playlists/[playlistKind]/change-relative",
            ),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/playlists/[playlistKind]/name",
            ),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/playlists/[playlistKind]/description",
            ),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/playlists/[playlistKind]/cover/upload",
            ),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/playlists/[playlistKind]/trailer",
            ),
            "".concat(t.gateway.prefixUrl, "/users/[userId]/likes/tracks/add"),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/likes/tracks/[entityId]/remove",
            ),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/dislikes/tracks/add",
            ),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/dislikes/tracks/[entityId]/remove",
            ),
            "".concat(t.gateway.prefixUrl, "/users/[userId]/likes/artists/add"),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/likes/artists/[entityId]/remove",
            ),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/dislikes/artists/add",
            ),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/dislikes/artists/[entityId]/remove",
            ),
            "".concat(t.gateway.prefixUrl, "/users/[userId]/likes/albums/add"),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/likes/albums/[entityId]/remove",
            ),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/likes/playlists/add",
            ),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/likes/playlists/[ownerId]-[kindId]/remove",
            ),
            "".concat(t.gateway.prefixUrl, "/users/[userId]/presaves/add"),
            "".concat(t.gateway.prefixUrl, "/users/[userId]/presaves/remove"),
            "".concat(t.gateway.prefixUrl, "/users/[userId]/presaves"),
            "".concat(t.gateway.prefixUrl, "/users/[userId]/search-history"),
            "".concat(
              t.gateway.prefixUrl,
              "/users/[userId]/search-history/clear",
            ),
          ]),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class eW extends eI {
        async getStorageData(e) {
          var t;
          let {
              formatFlags: r,
              direct: a,
              preview: i,
              canUseStreaming: s,
              tsInSeconds: n,
              sign: o,
              debug: c,
              trackId: l,
              isAliceRequester: u,
              requireMp3Link: d,
            } = e,
            h = this.config.gateway.prefixUrl,
            f = this.config.gateway.headers,
            m = await this.httpClient.get(
              "tracks/".concat(l, "/download-info"),
              {
                prefixUrl: h,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...f,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({
                  formatFlags: r,
                  debug: c,
                  preview: i,
                  direct: a,
                  isAliceRequester: u,
                  requireMp3Link: d,
                  canUseStreaming: s,
                  ts: n,
                  sign: o,
                }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getStorageData,
              },
            );
          return (await m.json()).result;
        }
        async getSrcData(e) {
          var t, r;
          let a =
              (null === (t = e.common) || void 0 === t ? void 0 : t.language) ||
              this.config.params.common.language,
            { storageUrl: i } = e,
            s = this.config.gateway.headers,
            { overembed: n, externalDomain: o } = this.config,
            c = new URL(i),
            l = {};
          for (let e of c.searchParams.keys()) l[e] = c.searchParams.get(e);
          return (
            await this.httpClient.get(i, {
              prefixUrl: "",
              headers: {
                "accept-language": a,
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...s,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                ...l,
                format: "json",
                __t: Date.now(),
                "external-domain": o,
                overembed: n,
              }),
              credentials: "same-origin",
              timeout:
                null === (r = this.config.timeouts) || void 0 === r
                  ? void 0
                  : r.getSrcData,
            })
          ).json();
        }
        async getTracksMeta(e) {
          var t;
          let { trackIds: r, removeDuplicates: a = !1, withProgress: i } = e,
            s = this.config.gateway.prefixUrl,
            n = this.config.gateway.headers,
            o = await this.httpClient.get("tracks", {
              prefixUrl: s,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...n,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                trackIds: r,
                removeDuplicates: a,
                withProgress: i,
              }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getTracksMeta,
            });
          return (await o.json()).result;
        }
        async getFullInfoTrack(e) {
          var t;
          let { trackId: r, albumId: a } = e,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers,
            n = a ? "".concat(r, ":").concat(a) : r,
            o = await this.httpClient.get("tracks/".concat(n, "/full-info"), {
              prefixUrl: i,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...s,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getFullInfoTrack,
            });
          return (await o.json()).result;
        }
        async getFullDescriptionTrack(e) {
          var t;
          let { trackId: r } = e,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("tracks/".concat(r, "/supplement"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getFullDescriptionTrack,
            });
          return (await s.json()).result;
        }
        async getCredits(e) {
          var t;
          let { trackId: r } = e,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("tracks/".concat(r, "/credits"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getCredits,
            });
          return (await s.json()).result;
        }
        async getDisclaimer(e) {
          var t;
          let r = e.trackId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("tracks/".concat(r, "/disclaimer"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getDisclaimer,
            });
          return (await s.json()).result;
        }
        async getTrailer(e) {
          var t;
          let r = e.trackId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("tracks/".concat(r, "/trailer"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getTrailer,
            });
          return (await s.json()).result;
        }
        async getLyrics(e) {
          var t;
          let { trackId: r, sign: a, timeStamp: i, format: s } = e,
            n = this.config.gateway.prefixUrl,
            o = this.config.gateway.headers,
            c = await this.httpClient.get("tracks/".concat(r, "/lyrics"), {
              prefixUrl: n,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...o,
              },
              searchParams: eU({ sign: a, timeStamp: i, format: s }),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getLyrics,
            });
          return (await c.json()).result;
        }
        async getLyricsText(e) {
          var t;
          let r = await this.httpClient.get(e, {
            credentials: "omit",
            retry: this.getRetryPolicyConfig(),
            timeout:
              null === (t = this.config.timeouts) || void 0 === t
                ? void 0
                : t.getLyricsText,
          });
          return await r.text();
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            "".concat(t.gateway.prefixUrl, "/tracks/[trackId]/download-info"),
            "https://storage.mds.yandex.net/file-download-info/[id1]/[id2]",
            "".concat(t.gateway.prefixUrl, "/tracks/[trackId]/disclaimer"),
            "".concat(t.gateway.prefixUrl, "/tracks/[trackId]/full-info"),
            "".concat(t.gateway.prefixUrl, "/tracks/[trackId]/credits"),
            "".concat(t.gateway.prefixUrl, "/tracks/[trackId]/lyrics"),
            "".concat(t.gateway.prefixUrl, "/tracks/[trackId]/trailer"),
          ]),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      ((E = er || (er = {})).CHART_ALBUMS = "CHART_ALBUMS"),
        (E.CHART_TRACKS = "CHART_TRACKS"),
        (E.COLLECTION_ALBUMS = "COLLECTION_ALBUMS"),
        (E.COLLECTION_ALBUMS_PRESAVES = "COLLECTION_ALBUMS_PRESAVES"),
        (E.COLLECTION_ARTISTS = "COLLECTION_ARTISTS"),
        (E.COLLECTION_PLAYLISTS_CREATED = "COLLECTION_PLAYLISTS_CREATED"),
        (E.COLLECTION_PLAYLISTS_LIKED = "COLLECTION_PLAYLISTS_LIKED"),
        (E.COLLECTION_PLAYLISTS_LIKED_AND_CREATED =
          "COLLECTION_PLAYLISTS_LIKED_AND_CREATED"),
        (E.COLLECTION_PLAYLIST_WITH_LIKES = "COLLECTION_PLAYLIST_WITH_LIKES"),
        (E.CONCERTS_PERSONAL = "CONCERTS_PERSONAL"),
        (E.CONCERTS_TOP = "CONCERTS_TOP"),
        (E.EDITORIAL_ARTISTS = "EDITORIAL_ARTISTS"),
        (E.EDITORIAL_COMPILATION = "EDITORIAL_COMPILATION"),
        (E.EDITORIAL_NEW_RELEASES = "EDITORIAL_NEW_RELEASES"),
        (E.EDITORIAL_PROMOTIONS = "EDITORIAL_PROMOTIONS"),
        (E.EDITORIAL_WAVES = "EDITORIAL_WAVES"),
        (E.IN_STYLE = "IN_STYLE"),
        (E.ITEM_LIST = "ITEM_LIST"),
        (E.LIKES_AND_HISTORY = "LIKES_AND_HISTORY"),
        (E.META_TAG_ALBUMS = "META_TAG_ALBUMS"),
        (E.META_TAG_ARTISTS = "META_TAG_ARTISTS"),
        (E.META_TAG_NEW_ALBUMS = "META_TAG_NEW_ALBUMS"),
        (E.META_TAG_PLAYLISTS = "META_TAG_PLAYLISTS"),
        (E.META_TAG_POPULAR_ARTISTS = "META_TAG_POPULAR_ARTISTS"),
        (E.META_TAG_POPULAR_PLAYLISTS = "META_TAG_POPULAR_PLAYLISTS"),
        (E.META_TAG_SIMILAR_WAVE = "META_TAG_SIMILAR_WAVE"),
        (E.META_TAG_WAVE = "META_TAG_WAVE"),
        (E.MICRO_GENRE_ALBUMS = "MICRO_GENRE_ALBUMS"),
        (E.MICRO_GENRE_ARTISTS = "MICRO_GENRE_ARTISTS"),
        (E.MICRO_GENRE_SIMILAR_WAVE = "MICRO_GENRE_SIMILAR_WAVE"),
        (E.MICRO_GENRE_TOP_ARTISTS = "MICRO_GENRE_TOP_ARTISTS"),
        (E.MICRO_GENRE_WAVE = "MICRO_GENRE_WAVE"),
        (E.MIXES = "MIXES"),
        (E.NEUROMUSIC = "NEUROMUSIC"),
        (E.NEW_PLAYLISTS = "NEW_PLAYLISTS"),
        (E.NEW_RELEASES = "NEW_RELEASES"),
        (E.NEW_STARS_ARTISTS = "NEW_STARS_ARTISTS"),
        (E.NON_MUSIC_EDITORIAL_COMPILATION = "NON_MUSIC_EDITORIAL_COMPILATION"),
        (E.NON_MUSIC_OPEN_PLAYLIST = "NON_MUSIC_OPEN_PLAYLIST"),
        (E.OPEN_PLAYLIST = "OPEN_PLAYLIST"),
        (E.OVERVIEW = "OVERVIEW"),
        (E.PERSONAL_ARTISTS = "PERSONAL_ARTISTS"),
        (E.PERSONAL_PLAYLISTS = "PERSONAL_PLAYLISTS"),
        (E.PROMOTIONS = "PROMOTIONS"),
        (E.RECENTLY_PLAYED = "RECENTLY_PLAYED"),
        (E.RECOMMENDED_PLAYLISTS = "RECOMMENDED_PLAYLISTS"),
        (E.REWIND_PLAYLISTS = "REWIND_PLAYLISTS"),
        (E.SMART_OPEN_PLAYLIST = "SMART_OPEN_PLAYLIST"),
        (E.SPECIAL = "SPECIAL"),
        (E.TABS = "TABS"),
        (E.WAVES = "WAVES"),
        (E.WIZARD = "WIZARD");
      let eB = (e, t, r) => {
        let { uri: a, count: i, countWeb: s, ...n } = t,
          o = e + a,
          c = eU(n);
        s && c.append(r ? "limit" : "count", String(s));
        let l = c.toString();
        return l ? "".concat(o, "?").concat(l) : o;
      };
      class eq extends eI {
        createLandingRequestHeaders() {
          return { "X-Yandex-Music-Without-Invocation-Info": "1" };
        }
        async getSkeleton(e) {
          var t;
          let { gateway: r, landing: a } = this.config,
            i = a || r,
            s = i.prefixUrl,
            n = i.headers;
          return (
            await this.httpClient.get("landing/skeleton/".concat(e.id), {
              prefixUrl: s,
              headers: {
                ...this.createLandingRequestHeaders(),
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...n,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({ showWizard: e.showWizard }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getSkeleton,
            })
          ).json();
        }
        async getBlock(e, t) {
          var r;
          let a = t === er.CHART_TRACKS,
            { gateway: i, landing: s } = this.config,
            n = s || i,
            o = n.prefixUrl,
            c = n.headers,
            l = eB(o, e, a);
          return (
            await this.httpClient.get(l, {
              headers: {
                ...this.createLandingRequestHeaders(),
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...c,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (r = this.config.timeouts) || void 0 === r
                  ? void 0
                  : r.getBlock,
            })
          ).json();
        }
        async getBlockEntities(e) {
          let { blockId: t, page: r, pageSize: a } = e,
            i = this.config.gateway.prefixUrl,
            s = this.config.gateway.headers;
          return (
            await this.httpClient.get("landing/block/".concat(t, "/entities"), {
              prefixUrl: i,
              headers: {
                ...this.createLandingRequestHeaders(),
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...s,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({ page: r, pageSize: a }),
            })
          ).json();
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      ((P = ea || (ea = {})).SHOW_AND_LOAD = "SHOW_AND_LOAD"),
        (P.LOAD_AND_SHOW = "LOAD_AND_SHOW"),
        ((_ = ei || (ei = {})).PLAYLIST_LIKED_TAB = "liked_playlist_tab"),
        (_.PLAYLIST_CREATED_TAB = "created_playlist_tab"),
        ((x = es || (es = {})).LEFT = "LEFT"),
        (x.RIGHT = "Right"),
        ((S = en || (en = {})).WEB_MAIN = "web_main"),
        (S.WEB_COLLECTION = "web_collection"),
        (S.WEB_NON_MUSIC = "web_non_music"),
        ((T = eo || (eo = {})).ALBUM = "album_tab"),
        (T.PRESAVED_ALBUM = "presaved_album_tab");
      class eV extends eI {
        async getMetatags(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.get("landing3/metatags", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getMetatags,
            });
          return (await i.json()).result;
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class eY extends eI {
        async getAllIds(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.get("library/all-ids", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getAllIds,
            });
          return (await i.json()).result;
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      ((b = ec || (ec = {}))[(b.LIKED = 1)] = "LIKED"),
        (b[(b.DISLIKED = -1)] = "DISLIKED");
      class eK extends eI {
        async getUploadUrl(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.post("loader/upload-url", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                uid: e.uid,
                "playlist-id": e.playlistId,
                visibility: e.visibility,
              }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getUploadUrl,
            });
          return await i.json();
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      (el || (el = {})).TOO_MANY_FILES = "TOO_MANY_FILES";
      class eG extends eI {
        async getMetatagById(e) {
          var t;
          let r = e.id,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("metatags/".concat(r), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                tracksCount: e.tracksCount,
                artistsCount: e.artistsCount,
                composersCount: e.composersCount,
                albumsCount: e.albumsCount,
                promotionsCount: e.promotionsCount,
                featuresCount: e.featuresCount,
                playlistsCount: e.playlistsCount,
                concertsCount: e.concertsCount,
                tracksSortBy: e.tracksSortBy,
                albumsSortBy: e.albumsSortBy,
                withLikesCount: e.withLikesCount,
              }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getMetatagById,
            });
          return (await s.json()).result;
        }
        async getMetatagAlbums(e) {
          let t = e.id,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.get("metatags/".concat(t, "/albums"), {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                period: e.period,
                sortBy: e.sortBy,
                offset: e.offset,
                limit: e.limit,
              }),
            });
          return (await i.json()).result;
        }
        async getMetatagArtists(e) {
          let t = e.id,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.get("metatags/".concat(t, "/artists"), {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                period: e.period,
                sortBy: e.sortBy,
                offset: e.offset,
                limit: e.limit,
                tracksPerArtist: e.tracksPerArtist,
              }),
            });
          return (await i.json()).result;
        }
        async getMetatagPlaylists(e) {
          let t = e.id,
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.get("metatags/".concat(t, "/playlists"), {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                sortBy: e.sortBy,
                offset: e.offset,
                limit: e.limit,
                withLikesCount: e.withLikesCount,
              }),
            });
          return (await i.json()).result;
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            "".concat(t.gateway.prefixUrl, "/metatags/[id]"),
            "".concat(t.gateway.prefixUrl, "/metatags/[id]/albums"),
            "".concat(t.gateway.prefixUrl, "/metatags/[id]/artists"),
            "".concat(t.gateway.prefixUrl, "/metatags/[id]/playlists"),
          ]),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class ez extends eI {
        async getTopByGenre(e) {
          var t;
          let r = e.category,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("top/".concat(r), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                genre: e.genre,
                period: e.period,
                page: e.page,
                pageSize: e.pageSize,
                popularTracksPerArtist: e.popularTracksPerArtist,
                chartRegion: e.chartRegion,
              }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getTopByGenre,
            });
          return (await s.json()).result;
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            "".concat(t.gateway.prefixUrl, "/top/[category]"),
          ]),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      function eQ(e) {
        let t = {};
        return (
          Object.getOwnPropertyNames(e)
            .filter((t) => void 0 !== e[t] && null !== e[t])
            .map((r) => {
              t[r] = e[r];
            }),
          t
        );
      }
      (eu || (eu = {})).RECENT_ALBUMS = "recent-albums";
      class eX extends eI {
        async getStationInfo(e) {
          var t;
          let { stationId: r } = e,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("rotor/station/".concat(r, "/info"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getStationInfo,
            });
          return (await s.json()).result;
        }
        async sessionNew(e) {
          var t;
          let r = eQ({
              seeds: e.seeds,
              queue: e.queue,
              includeTracksInResponse: e.includeTracksInResponse,
              trackToStartFrom: e.trackToStartFrom,
              clientRemoteType: e.clientRemoteType,
              incognito: e.incognito,
              child: e.child,
              allowExplicit: e.allowExplicit,
              aliceExperiments: e.aliceExperiments,
              djData: e.djData,
              useIchwill: e.useIchwill,
              includeWaveModel: e.includeWaveModel,
            }),
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.post("rotor/session/new", {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              json: r,
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.sessionNew,
            });
          return (await s.json()).result;
        }
        async sessionTracks(e) {
          var t;
          let r = eQ({
              queue: e.queue,
              aliceExperiments: e.aliceExperiments,
              djData: e.djData,
              useIchwill: e.useIchwill,
              feedbacks: e.feedbacks,
            }),
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = "rotor/session/".concat(e.radioSessionId, "/tracks"),
            n = await this.httpClient.post(s, {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              json: r,
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.sessionTracks,
            });
          return (await n.json()).result;
        }
        async sessionFeedback(e) {
          var t;
          let r = eQ({ event: e.event, batchId: e.batchId }),
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = "rotor/session/".concat(e.radioSessionId, "/feedback/"),
            n = await this.httpClient.post(s, {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(!0),
              json: r,
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.sessionFeedback,
            });
          return (await n.json()).result;
        }
        async waveLast(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.get("rotor/wave/last", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.waveLast,
            });
          return (await i.json()).result;
        }
        async waveSettings() {
          var e;
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.get("rotor/wave/settings", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(t),
                ...this.createTvmHeadersFromParams({
                  params: t,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({ seeds: t.seeds }),
              timeout:
                null === (e = this.config.timeouts) || void 0 === e
                  ? void 0
                  : e.waveSettings,
            });
          return (await i.json()).result;
        }
        async waveLastReset(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.post("rotor/wave/last/reset", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.waveLastReset,
            });
          return (await i.json()).result;
        }
        async getGenerativeInfo(e) {
          var t;
          let { stationId: r } = e,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get(
              "rotor/station/".concat(r, "/stream"),
              {
                prefixUrl: a,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...i,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getGenerativeInfo,
              },
            );
          return (await s.json()).result;
        }
        async stationFeedback(e) {
          let t = "rotor/station/".concat(e.stationId, "/feedback"),
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.post(t, {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(!0),
              json: eQ({ type: e.type, timestamp: e.timestamp }),
              searchParams: eU({ streamId: e.streamId }),
            });
          return (await i.json()).result;
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            "".concat(t.gateway.prefixUrl, "/rotor/station/[stationId]/info"),
            "".concat(
              t.gateway.prefixUrl,
              "/rotor/session/[radioSessionId]/tracks",
            ),
            "".concat(
              t.gateway.prefixUrl,
              "/rotor/session/[radioSessionId]/feedback/",
            ),
            "".concat(t.gateway.prefixUrl, "/rotor/station/[stationId]/stream"),
            "".concat(
              t.gateway.prefixUrl,
              "/rotor/station/[stationId]/feedback",
            ),
          ]),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      ((C = ed || (ed = {})).RADIO_STARTED = "radioStarted"),
        (C.TRACK_STARTED = "trackStarted"),
        (C.TRACK_FINISHED = "trackFinished"),
        (C.SKIP = "skip"),
        (C.SKIP_FAILED = "skipFailed"),
        (C.LIKE = "like"),
        (C.DISLIKE = "dislike"),
        (C.AD = "ad"),
        (C.JINGLE = "jingle"),
        (C.UNLIKE = "unlike"),
        (C.UNDISLIKE = "undislike"),
        ((eh || (eh = {})).OK = "ok"),
        ((k = ef || (ef = {})).StreamPause = "streamPause"),
        (k.StreamPlay = "streamPlay");
      class eZ extends eI {
        async getInstantMixedSearch(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.get("search/instant/mixed", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                text: e.text,
                type: e.type,
                page: e.page,
                filter: e.filter,
                pageSize: e.pageSize,
                nocorrect: e.nocorrent,
                onlyCounters: e.onlyCounters,
                withLikesCount: e.withLikesCount,
                from: e.from,
                inputType: e.inputType,
                vocalTypes: e.vocalTypes,
                releaseYears: e.releaseYears,
                epochs: e.epochs,
                moods: e.moods,
                activities: e.activities,
                genres: e.genres,
                lyricsLanguages: e.lyricsLanguages,
                moodScoresFrom: e.moodScoresFrom,
                moodScoresTo: e.moodScoresTo,
                activityScoresFrom: e.activityScoresFrom,
                activityScoresTo: e.activityScoresTo,
              }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getInstantMixedSearch,
            });
          return (await i.json()).result;
        }
        async sendFeedback(e) {
          var t;
          let r = eQ({
              blockType: e.blockType,
              entityId: e.entityId,
              timestamp: e.timestamp,
              blockPosition: e.blockPosition,
              position: e.position,
              searchRequestId: e.searchRequestId,
              query: e.query,
              page: e.page,
              clickType: e.clickType,
              clientNow: e.clientNow,
              absolutePosition: e.absoluteBlockPosition,
              clientSearchContext: e.clientSearchContext,
              searchType: e.searchType,
            }),
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.post("search/feedback", {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              json: r,
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.sendFeedback,
            });
          return (await s.json()).result;
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      ((w = em || (em = {})).ARTIST = "artist"),
        (w.ALBUM = "album"),
        (w.TRACK = "track"),
        (w.PLAYLIST = "playlist"),
        (w.USER = "user"),
        (w.VIDEO = "video"),
        (w.CLIP = "clip"),
        (w.PODCAST = "podcast"),
        (w.PODCAST_EPISODE = "podcast_episode"),
        (w.WAVE = "wave"),
        (w.GENRE = "genre"),
        (w.SEARCH_PAGE = "search-page"),
        ((R = eg || (eg = {})).PLAY = "play"),
        (R.FRIDGE = "fridge"),
        (R.NAVIGATE = "navigate"),
        (R.LIKE = "like"),
        ((A = ep || (ep = {})).BEGIN = "begin"),
        (A.IN_PROGRESS = "in-progress"),
        (A.PAUSE = "pause"),
        (A.END = "end");
      class eJ extends eI {
        async sendPlays(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.post("plays", {
              prefixUrl: r,
              searchParams: eU({ clientNow: e.clientNow }),
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              json: { plays: e.plays },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.sendPlays,
            });
          return (await i.json()).result;
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      ((I = ey || (ey = {})).PREPARE = "prepare"), (I.PLAY = "play");
      class e$ extends eI {
        async getUserSlides(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.get("rewind/slides/user", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getUserSlides,
            }),
            { result: s } = await i.json();
          return s;
        }
        async getArtistSlides(e) {
          var t;
          let { artistId: r } = e,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("rewind/slides/artist/".concat(r), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getArtistSlides,
            }),
            { result: n } = await s.json();
          return n;
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      ((O = ev || (ev = {})).WAVE = "WAVE"),
        (O.ACTION = "ACTION"),
        (O.SHARE = "SHARE"),
        ((L = eE || (eE = {})).SQUARE = "SQUARE"),
        (L.CIRCLE = "CIRCLE"),
        ((N = eP || (eP = {})).TEXT = "TEXT"),
        (N.MINUTES = "MINUTES"),
        (N.HOURS = "HOURS"),
        (N.MINUTES_WITH_MUSIC = "MINUTES_WITH_MUSIC"),
        (N.LIKES = "LIKES"),
        (N.BOOKS = "BOOKS"),
        (N.MINUTES_WITH_BOOKS = "MINUTES_WITH_BOOKS"),
        (N.TRACKS = "TRACKS"),
        (N.LISTENERS = "LISTENERS"),
        (N.SUPERFANS = "SUPERFANS"),
        (N.LISTENINGS = "LISTENINGS"),
        (N.NEW_TRACKS = "NEW_TRACKS"),
        ((U = e_ || (e_ = {})).TEXT = "TEXT"),
        (U.STATS = "STATS"),
        (U.CHART = "CHART"),
        (U.CHART_FAVORITES = "CHART_FAVORITES"),
        (U.SINGLE_ENTITY = "SINGLE_ENTITY"),
        (U.QUIZ = "QUIZ");
      class e0 extends eI {
        async pinAlbum(e) {
          var t;
          let r = eQ({ id: e.id }),
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.put("pin/album", {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.pinAlbum,
              json: r,
            });
          return (await s.json()).result;
        }
        async unpinAlbum(e) {
          var t;
          let r = eQ({ id: e.id }),
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.delete("pin/album", {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.unpinAlbum,
              json: r,
            });
          return (await s.json()).result;
        }
        async pinPlaylist(e) {
          var t;
          let r = eQ({ uid: e.uid, kind: e.kind }),
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.put("pin/playlist", {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.pinPlaylist,
              json: r,
            });
          return (await s.json()).result;
        }
        async unpinPlaylist(e) {
          var t;
          let r = eQ({ uid: e.uid, kind: e.kind }),
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.delete("pin/playlist", {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.unpinPlaylist,
              json: r,
            });
          return (await s.json()).result;
        }
        async pinArtist(e) {
          var t;
          let r = eQ({ id: e.id }),
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.put("pin/artist", {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.pinArtist,
              json: r,
            });
          return (await s.json()).result;
        }
        async unpinArtist(e) {
          var t;
          let r = eQ({ id: e.id }),
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.delete("pin/artist", {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.unpinArtist,
              json: r,
            });
          return (await s.json()).result;
        }
        async pinWave(e) {
          var t;
          let r = eQ({ seeds: e.seeds }),
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.put("pin/wave", {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.pinWave,
              json: r,
            });
          return (await s.json()).result;
        }
        async unpinWave(e) {
          var t;
          let r = eQ({ seeds: e.seeds }),
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.delete("pin/wave", {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.unpinWave,
              json: r,
            });
          return (await s.json()).result;
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class e1 extends eI {
        async getPlaylistIds(e) {
          var t;
          let r = e.id,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("tags/".concat(r, "/playlist-ids"), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getPlaylistIds,
            });
          return (await s.json()).result;
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            "".concat(t.gateway.prefixUrl, "/tags/[id]/playlist-ids"),
          ]),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class e8 extends eI {
        async getMusicHistory(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("music-history", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({ fullModelsCount: e.fullModelsCount }),
            });
          return (await a.json()).result;
        }
        async getMusicHistoryItems(e) {
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.post("music-history/items", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              json: eQ({ items: e.items }),
            });
          return (await a.json()).result;
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class e9 extends eI {
        async getPromotionsById(e) {
          var t;
          let r = e.promoId,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = await this.httpClient.get("feed/promotions/".concat(r), {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({ checkContent: e.checkContent }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getPromotionsById,
            });
          return (await s.json()).result;
        }
        async getWizardGenres() {
          var e;
          let t = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers,
            a = await this.httpClient.get("feed/wizard2-new/get-genres", {
              prefixUrl: t,
              headers: {
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (e = this.config.timeouts) || void 0 === e
                  ? void 0
                  : e.getWizardGenres,
            });
          return (await a.json()).result;
        }
        async getWizardArtistsByGenre(e) {
          var t;
          let {
              genre: r,
              showedArtists: a,
              likedArtists: i,
              unlikedArtists: s,
              countOfNewArtists: n,
            } = e,
            o = eQ({
              genre: r,
              showedArtists: a,
              likedArtists: i,
              unlikedArtists: s,
              countOfNewArtists: n,
            }),
            c = this.config.gateway.prefixUrl,
            l = this.config.gateway.headers,
            u = await this.httpClient.post(
              "feed/wizard2-new/get-artists-by-genre",
              {
                prefixUrl: c,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...l,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getWizardArtistsByGenre,
                json: o,
              },
            );
          return (await u.json()).result;
        }
        async finishWizard(e) {
          var t;
          let { genre: r, likedArtists: a, unlikedArtists: i } = e,
            s = eQ({ genre: r, likedArtists: a, unlikedArtists: i }),
            n = this.config.gateway.prefixUrl,
            o = this.config.gateway.headers,
            c = await this.httpClient.post("feed/wizard2-new/finish", {
              prefixUrl: n,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...o,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.finishWizard,
              json: s,
            });
          return (await c.json()).result;
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            "".concat(t.gateway.prefixUrl, "/feed/promotions/[promoId]"),
          ]),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class e2 extends eI {
        async getFileInfo(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.get("get-file-info", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: eU({
                ts: e.tsInSeconds,
                trackId: e.trackId,
                quality: e.quality,
                codecs: e.codecs.join(","),
                transports: e.transports.join(","),
                sign: e.sign,
              }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getFileInfo,
            });
          return (await i.json()).result;
        }
        async getByteRange(e) {
          var t;
          let r = await this.httpClient.get(e.srcUrl, {
            headers: { Range: "bytes=".concat(e.start, "-").concat(e.end) },
            retry: this.getRetryPolicyConfig(),
            timeout:
              null === (t = this.config.timeouts) || void 0 === t
                ? void 0
                : t.getByteRange,
          });
          return {
            data: await r.arrayBuffer(),
            contentLength: Number(r.headers["content-length"]),
            contentRange: r.headers["content-range"],
          };
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class e5 extends eI {
        async getPins() {
          var e;
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.get("pins", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(t),
                ...this.createTvmHeadersFromParams({
                  params: t,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              timeout:
                null === (e = this.config.timeouts) || void 0 === e
                  ? void 0
                  : e.getPins,
              retry: this.getRetryPolicyConfig(),
            });
          return (await i.json()).result;
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class e3 extends eI {
        async getChart(e) {
          let t = this.config.gateway.headers,
            r = await this.httpClient.get("chart/tracks", {
              prefixUrl: this.config.gateway.prefixUrl,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...t,
              },
              retry: this.getRetryPolicyConfig(),
            });
          return (await r.json()).result;
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = "".concat(
            t.gateway.prefixUrl,
            "/chart/tracks/",
          )),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class e4 extends eI {
        async getTriggers(e) {
          let { anchorIds: t } = e,
            r = this.config.gateway.headers;
          return (
            await this.httpClient.post("dynamic-pages/trigger/polling", {
              prefixUrl: this.config.gateway.prefixUrl,
              headers: {
                ...this.createRequestHeadersFromParams(),
                ...this.createTvmHeadersFromParams({
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              json: { anchorIds: t },
              retry: this.getRetryPolicyConfig(),
            })
          ).json();
        }
        async getTrigger(e) {
          let { anchorId: t } = e,
            r = this.config.gateway.headers;
          return (
            await this.httpClient.get(
              "dynamic-pages/trigger/polling/".concat(t),
              {
                prefixUrl: this.config.gateway.prefixUrl,
                headers: {
                  ...this.createRequestHeadersFromParams(),
                  ...this.createTvmHeadersFromParams({
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...r,
                },
                retry: this.getRetryPolicyConfig(),
              },
            )
          ).json();
        }
        async shown(e) {
          let { anchorIds: t, screenId: r } = e,
            a = this.config.gateway.headers;
          await this.httpClient.post("dynamic-pages/trigger/shown", {
            prefixUrl: this.config.gateway.prefixUrl,
            headers: {
              ...this.createRequestHeadersFromParams(),
              ...this.createTvmHeadersFromParams({
                target: this.config.params.tvmTarget,
              }),
              ...this.createUserTicketHeaderFromParams(),
              ...a,
            },
            json: { anchorIds: t, screenId: r },
            retry: this.getRetryPolicyConfig(),
          });
        }
        async action(e) {
          let { anchorIds: t, screenId: r, actionId: a } = e,
            i = this.config.gateway.headers;
          await this.httpClient.post("dynamic-pages/trigger/action", {
            prefixUrl: this.config.gateway.prefixUrl,
            headers: {
              ...this.createRequestHeadersFromParams(),
              ...this.createTvmHeadersFromParams({
                target: this.config.params.tvmTarget,
              }),
              ...this.createUserTicketHeaderFromParams(),
              ...i,
            },
            json: { anchorIds: t, screenId: r, actionId: a },
            retry: this.getRetryPolicyConfig(),
          });
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = [
            "".concat(
              t.gateway.prefixUrl,
              "/dynamic-pages/trigger/polling/[anchorId]",
            ),
          ]),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      ((D = ex || (ex = {})).BAR_BELLOW = "barBellow"),
        (D.FULLSCREEN = "fullscreen"),
        ((F = eS || (eS = {})).CLOSE = "close"),
        (F.LINK = "link"),
        (F.PAYWALL = "paywall"),
        ((eT || (eT = {})).ON_START_BAR_BELLOW =
          "music-web-on-start-bar-bellow");
      class e6 extends eI {
        async getTrackIds(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            { uid: i, kind: s, part: n } = e,
            o = await this.httpClient.get(
              "search-playlist/".concat(i, "/").concat(s),
              {
                prefixUrl: r,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...a,
                },
                retry: this.getRetryPolicyConfig(),
                searchParams: eU({ part: n }),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getTrackIds,
              },
            );
          return (await o.json()).result;
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class e7 extends eI {
        async progressSync(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.post("streams/progress/sync", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              json: {
                lastSyncTimestamp: e.lastSyncTimestamp,
                trackStreams: e.trackStreams,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.progressSync,
            });
          return (await i.json()).result;
        }
        async markAlbumFinished(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.post(
              "streams/progress/mark-album-finished",
              {
                prefixUrl: r,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...a,
                },
                json: { albumId: e.albumId },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.markAlbumFinished,
              },
            );
          return (await i.json()).result;
        }
        async markAlbumUnfinished(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.post(
              "streams/progress/mark-album-finished",
              {
                prefixUrl: r,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...a,
                },
                json: { albumId: e.albumId },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.markAlbumUnfinished,
              },
            );
          return (await i.json()).result;
        }
        async markFinished(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.post("streams/progress/mark-finished", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              json: { trackId: e.trackId },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.markFinished,
            });
          return (await i.json()).result;
        }
        async markUnfinished(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.post(
              "streams/progress/mark-album-finished",
              {
                prefixUrl: r,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...a,
                },
                json: { trackId: e.trackId },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.markAlbumUnfinished,
              },
            );
          return (await i.json()).result;
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class te extends eI {
        async sendViews(e) {
          var t;
          let { lyricViews: r } = e,
            a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers,
            s = eQ({ lyricViews: r });
          await this.httpClient.post("lyric-views", {
            prefixUrl: a,
            headers: {
              ...this.createRequestHeadersFromParams(e),
              ...this.createTvmHeadersFromParams({
                params: e,
                target: this.config.params.tvmTarget,
              }),
              ...this.createUserTicketHeaderFromParams(),
              ...i,
            },
            retry: this.getRetryPolicyConfig(),
            timeout:
              null === (t = this.config.timeouts) || void 0 === t
                ? void 0
                : t.sendViews,
            json: s,
          });
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class tt extends eI {
        async getShelfRecentlyPlayed(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.get(
              "non-music/bookshelf/recently-played",
              {
                prefixUrl: r,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    params: e,
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...a,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getShelfRecentlyPlayed,
              },
            );
          return (await i.json()).result;
        }
        async getShelfLiked(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = await this.httpClient.get("non-music/bookshelf/liked", {
              prefixUrl: r,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getShelfLiked,
            });
          return (await i.json()).result;
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      ((H = eb || (eb = {})).ALBUM = "album"), (H.PLAYLIST = "playlist");
      class tr extends eI {
        async getAlbumDonations(e) {
          var t;
          let r = this.config.gateway.headers,
            a = await this.httpClient.get(
              "donation/album/".concat(null == e ? void 0 : e.albumId),
              {
                prefixUrl: this.config.gateway.prefixUrl,
                headers: {
                  ...this.createRequestHeadersFromParams(e),
                  ...this.createTvmHeadersFromParams({
                    target: this.config.params.tvmTarget,
                  }),
                  ...this.createUserTicketHeaderFromParams(),
                  ...r,
                },
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (t = this.config.timeouts) || void 0 === t
                    ? void 0
                    : t.getAlbumDonations,
              },
            );
          return await a.json();
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = "".concat(
            t.gateway.prefixUrl,
            "/donation/album/[albumId]",
          )),
            super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class ta extends eI {
        async uploadFile(e) {
          var t;
          let r = this.config.gateway.prefixUrl,
            a = this.config.gateway.headers,
            i = e.url,
            s = await this.httpClient.post(i, {
              prefixUrl: r,
              headers: {
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...a,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.uploadFile,
              body: e.formData,
              signal: e.signal,
            });
          return await s.json();
        }
        constructor(e, t) {
          super(e, t),
            (0, eC._)(this, "httpClient", void 0),
            (0, eC._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
    },
    9755: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
        H: function () {
          return n;
        },
      });
      var a,
        i,
        s = r(86867);
      let n = () => ({
        beforeContextSet: new s.AsyncSeriesHook(),
        afterContextSet: new s.SyncHook(),
        afterContextEnd: new s.AsyncSeriesHook(),
        beforeEntityPlayingProcessStart: new s.AsyncSeriesHook(),
        entityPlayingProcessStartError: new s.AsyncSeriesHook(),
        beforeMediaReload: new s.AsyncSeriesHook(),
        afterMediaReload: new s.AsyncSeriesHook(),
        beforeMediaStartPlaying: new s.AsyncSeriesHook(),
        afterMediaStartPlaying: new s.AsyncSeriesHook(),
        beforeMediaResume: new s.AsyncSeriesHook(),
        afterMediaResume: new s.AsyncSeriesHook(),
        beforeMediaPause: new s.AsyncSeriesHook(),
        afterMediaPause: new s.AsyncSeriesHook(),
        afterMediaEndPlaying: new s.AsyncSeriesHook(),
        beforeEntityChange: new s.AsyncSeriesHook(["changeMethod"]),
        afterError: new s.AsyncSeriesHook(["error"]),
      });
      ((a = i || (i = {})).MOVE_FORWARD = "moveForward"),
        (a.AUTO_MOVE_FORWARD = "autoMoveForward"),
        (a.MOVE_BACKWARD = "moveBackward"),
        (a.SET_INDEX = "setIndex"),
        (a.RESTART_CONTEXT = "restartContext"),
        (a.PLAY_CONTEXT = "playContext");
    },
    80789: function (e, t, r) {
      "use strict";
      r.d(t, {
        YB: function () {
          return s;
        },
        wi: function () {
          return i;
        },
        dC: function () {
          return n;
        },
      });
      var a = r(68200),
        i = (function () {
          function e(e) {
            Object.defineProperty(this, "observableValue", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              (this.observableValue = (0, a.td)(e));
          }
          return (
            Object.defineProperty(e.prototype, "value", {
              get: function () {
                return this.observableValue.value;
              },
              set: function (e) {
                this.observableValue.value = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onChange", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                return this.observableValue.subscribe(e);
              },
            }),
            e
          );
        })(),
        s = (function () {
          function e(e) {
            Object.defineProperty(this, "observableValue", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "prevValueByListener", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.observableValue = (0, a.Fl)(e)),
              (this.prevValueByListener = new Map());
          }
          return (
            Object.defineProperty(e.prototype, "value", {
              get: function () {
                return this.observableValue.value;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onChange", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this;
                return (
                  this.prevValueByListener.has(e) ||
                    this.prevValueByListener.set(e, void 0),
                  this.observableValue.subscribe(function (r) {
                    r !== t.prevValueByListener.get(e) &&
                      (t.prevValueByListener.set(e, r), e(r));
                  })
                );
              },
            }),
            e
          );
        })();
      function n(e) {
        (0, a.dC)(e);
      }
    },
    11691: function (e, t, r) {
      "use strict";
      r.d(t, {
        $n: function () {
          return M;
        },
        KX: function () {
          return h;
        },
        Xz: function () {
          return u;
        },
        RX: function () {
          return c;
        },
        Zp: function () {
          return p.Z;
        },
        YR: function () {
          return S;
        },
        lz: function () {
          return F;
        },
        Vb: function () {
          return H;
        },
        zq: function () {
          return v.zq;
        },
      }),
        ((c || (c = {})).Unloaded = "unloaded");
      var a,
        i,
        s,
        n,
        o,
        c,
        l,
        u,
        d,
        h,
        f,
        m,
        g = r(8655),
        p = r(9755);
      ((l || (l = {})).ENTITY_CAN_NOT_BE_PLAYED = "ENTITY_CAN_NOT_BE_PLAYED"),
        ((a = u || (u = {})).IDLE = "idle"),
        (a.PLAYING = "playing"),
        (a.PAUSED = "paused"),
        (a.STOPPED = "stopped"),
        (a.LOADING_MEDIA_SOURCE = "loadingMediaSource"),
        (a.LOADING_MEDIA_DATA = "loadingMediaData"),
        (a.MEDIA_ELEMENT_ERROR = "mediaElementError");
      var y = r(90454),
        v = r(87181);
      ((i = d || (d = {})).EVENT_PLAY = "play"),
        (i.EVENT_OUTER_PLAY = "outerplay"),
        (i.EVENT_STOP = "stop"),
        (i.EVENT_PAUSE = "pause"),
        (i.EVENT_RESUME = "resume"),
        (i.EVENT_OUTER_PAUSE = "outerpause"),
        (i.EVENT_PROGRESS = "progress"),
        (i.EVENT_POSITION = "position"),
        (i.EVENT_LOADING = "loading"),
        (i.EVENT_LOADED = "loaded"),
        (i.EVENT_VOLUME = "volumechange"),
        (i.EVENT_SPEED = "ratechange"),
        (i.EVENT_ENDED = "ended"),
        (i.EVENT_CRASHED = "crashed"),
        (i.EVENT_ERROR = "error"),
        (i.HLS_EVENT_ERROR = "hlserror"),
        (i.EVENT_DESTROY = "destroy"),
        (i.EVENT_STATE = "state"),
        (i.EVENT_SWAP = "swap");
      let E = {
        status: u.IDLE,
        progress: { duration: 0, position: 0, loaded: 0 },
        event: null,
        volume: 1,
        speed: 1,
      };
      var P = r(80789);
      class _ {
        constructor(e) {
          (0, g._)(this, "status", void 0),
            (0, g._)(this, "event", void 0),
            (0, g._)(this, "progress", void 0),
            (0, g._)(this, "volume", void 0),
            (0, g._)(this, "speed", void 0);
          let { status: t, progress: r, event: a, volume: i, speed: s } = e;
          (this.status = new P.wi(t)),
            (this.event = new P.wi(a)),
            (this.progress = new P.wi(r)),
            (this.volume = new P.wi(i)),
            (this.speed = new P.wi(s));
        }
      }
      ((s = h || (h = {})).RESUMED = "audio-resumed"),
        (s.STOP = "audio-stop"),
        (s.END = "audio-end"),
        (s.PAUSED = "audio-paused"),
        (s.UPDATING_PROGRESS = "audio-updating-progress"),
        (s.SET_PROGRESS = "audio-set-progress"),
        (s.SET_VOLUME = "audio-set-volume"),
        (s.SET_SPEED = "audio-set-speed"),
        (s.STALLED = "audio-stalled"),
        (s.CANPLAY = "audio-canplay"),
        (s.PLAYING = "audio-playing"),
        (s.MEDIA_ELEMENT_ERROR = "audio-media-element-error");
      var x = r(37810);
      class S extends x.y {
        constructor(
          e = "Media player error",
          { code: t = "E_MEDIA_PLAYER", ...r } = {},
        ) {
          super(e, { code: t, ...r }),
            (0, g._)(this, "name", "MediaPlayerException"),
            Object.setPrototypeOf(this, S.prototype);
        }
      }
      function T(e) {
        return e instanceof Error
          ? { name: e.name, message: e.message, stack: e.stack, cause: e.cause }
          : { data: e };
      }
      ((n = f || (f = {})).PLAY = "E_MEDIA_PLAYER_PLAY"),
        (n.STOP = "E_MEDIA_PLAYER_STOP"),
        (n.RESUME = "E_MEDIA_PLAYER_RESUME"),
        (n.PAUSE = "E_MEDIA_PLAYER_PAUSE"),
        (n.SET_SPEED = "E_MEDIA_PLAYER_SET_SPEED"),
        (n.SET_VOLUME = "E_MEDIA_PLAYER_SET_VOLUME"),
        (n.SET_PROGRESS = "E_MEDIA_PLAYER_SET_PROGRESS"),
        (n.E_MEDIA_ELEMENT_ERROR = "E_MEDIA_ELEMENT_ERROR");
      class b {
        get state() {
          return this.audioPlayerState;
        }
        play(e) {
          return this.getMediaSource({ entity: e }).then((e) =>
            this.hooks.beforeMediaStartPlaying
              .promise()
              .catch((e) => {
                this.hooks.afterError.promise(e);
              })
              .finally(() =>
                this.corePlay(e, 0).then(() => {
                  this.hooks.afterMediaStartPlaying.promise().catch((e) => {
                    this.hooks.afterError.promise(e);
                  });
                }),
              ),
          );
        }
        reload(e) {
          let t = this.audioPlayerState.progress.value.position,
            r = this.audioPlayerState.status.value;
          return this.getMediaSource({ entity: e }).then((e) =>
            this.hooks.beforeMediaReload
              .promise()
              .catch((e) => {
                this.hooks.afterError.promise(e);
              })
              .finally(() =>
                new Promise((a, i) => {
                  switch (r) {
                    case u.PLAYING:
                    case u.MEDIA_ELEMENT_ERROR:
                      this.corePlay(e, t).then(a).catch(i);
                      break;
                    case u.PAUSED:
                      this.core.setSrc(e, t),
                        (this.audioPlayerState.status.value = u.PAUSED),
                        a();
                  }
                }).then(() => {
                  this.hooks.afterMediaReload.promise().catch((e) => {
                    this.hooks.afterError.promise(e);
                  });
                }),
              ),
          );
        }
        setProgress(e) {
          return this.core.setProgress(e).catch((e) => {
            throw new S("Core set progress error", {
              code: f.SET_PROGRESS,
              cause: T(e),
            });
          });
        }
        setVolume(e) {
          return this.core.setVolume(e).catch((e) => {
            throw new S("Core set volume error", {
              code: f.SET_VOLUME,
              cause: T(e),
            });
          });
        }
        setSpeed(e) {
          return this.core
            .setSpeed(e)
            .then((e) => (this.handlers.audioSpeedChange(e), e))
            .catch((e) => {
              throw new S("Core set speed error", {
                code: f.SET_SPEED,
                cause: T(e),
              });
            });
        }
        pause() {
          return this.hooks.beforeMediaPause
            .promise()
            .catch((e) => {
              this.hooks.afterError.promise(e);
            })
            .finally(() =>
              this.core
                .pause()
                .then(() => {
                  this.hooks.afterMediaPause.promise().catch((e) => {
                    this.hooks.afterError.promise(e);
                  });
                })
                .catch((e) => {
                  throw new S("Core pause error", {
                    code: f.PAUSE,
                    cause: T(e),
                  });
                }),
            );
        }
        resume() {
          return this.hooks.beforeMediaResume
            .promise()
            .catch((e) => {
              this.hooks.afterError.promise(e);
            })
            .finally(() =>
              this.core
                .resume()
                .then(() => {
                  this.hooks.afterMediaResume.promise().catch((e) => {
                    this.hooks.afterError.promise(e);
                  });
                })
                .catch((e) => {
                  throw new S("Core resume error", {
                    code: f.RESUME,
                    cause: T(e),
                  });
                }),
            );
        }
        togglePause() {
          switch (this.audioPlayerState.status.value) {
            case u.PLAYING:
              return this.pause();
            case u.PAUSED:
              return this.resume();
          }
          return Promise.resolve();
        }
        stop() {
          return this.core
            .stop()
            .then(() => {
              this.handlers.audioStop();
            })
            .catch((e) => {
              throw new S("Core stop error", { code: f.STOP, cause: T(e) });
            });
        }
        corePlay(e, t) {
          return (
            (this.audioPlayerState.status.value = u.LOADING_MEDIA_DATA),
            this.core.play(e, t).catch((e) => {
              if (
                ((this.audioPlayerState.status.value = u.MEDIA_ELEMENT_ERROR),
                "string" != typeof e || e !== d.EVENT_PLAY)
              )
                throw new S("Core play error", { code: f.PLAY, cause: T(e) });
            })
          );
        }
        getMediaSource(e) {
          return (
            (this.audioPlayerState.status.value = u.LOADING_MEDIA_SOURCE),
            this.mediaProvider.getMediaSource(e).catch((e) => {
              throw (
                (this.stop().catch((e) => {
                  this.hooks.afterError.promise(e);
                }),
                e)
              );
            })
          );
        }
        subscribeCoreEvents() {
          this.core.onAudioEnd(this.handlers.audioEnd),
            this.core.onAudioPaused(this.handlers.audioPaused),
            this.core.onAudioResume(this.handlers.audioResume),
            this.core.onAudioUpdatingProgress(
              this.handlers.audioUpdatingProgress,
            ),
            this.core.onAudioSeeked(this.handlers.audioSeeked),
            this.core.onAudioStalled(this.handlers.audioStalled),
            this.core.onAudioCanplay(this.handlers.audioCanplay),
            this.core.onAudioPlaying(this.handlers.audioPlaying),
            this.core.onAudioError(this.handlers.audioError),
            this.core.onAudioVolumeChange(this.handlers.audioVolumeChange),
            this.core.onAudioSpeedChange(this.handlers.audioSpeedChange);
        }
        unsubscribeCoreEvents() {
          this.core.offAudioEnd(this.handlers.audioEnd),
            this.core.offAudioPaused(this.handlers.audioPaused),
            this.core.offAudioResume(this.handlers.audioResume),
            this.core.offAudioUpdatingProgress(
              this.handlers.audioUpdatingProgress,
            ),
            this.core.offAudioSeeked(this.handlers.audioSeeked),
            this.core.offAudioStalled(this.handlers.audioStalled),
            this.core.offAudioCanplay(this.handlers.audioCanplay),
            this.core.offAudioPlaying(this.handlers.audioPlaying),
            this.core.offAudioError(this.handlers.audioError),
            this.core.offAudioVolumeChange(this.handlers.audioVolumeChange),
            this.core.offAudioSpeedChange(this.handlers.audioSpeedChange);
        }
        constructor(e) {
          (0, g._)(this, "audioPlayerState", new _(E)),
            (0, g._)(this, "core", void 0),
            (0, g._)(this, "mediaProvider", void 0),
            (0, g._)(this, "hooks", void 0),
            (0, g._)(this, "handlers", {
              audioEnd: () =>
                (function (e) {
                  let { state: t, hooks: r } = e;
                  r.afterMediaEndPlaying
                    .promise()
                    .catch((e) => {
                      r.afterError.promise(e);
                    })
                    .finally(() => {
                      t.event.value = h.END;
                    });
                })({ state: this.audioPlayerState, hooks: this.hooks }),
              audioPaused: () =>
                (function (e) {
                  let { state: t } = e;
                  (t.status.value = u.PAUSED), (t.event.value = h.PAUSED);
                })({ state: this.audioPlayerState }),
              audioResume: () =>
                (function (e) {
                  let { state: t } = e;
                  (t.status.value = u.PLAYING), (t.event.value = h.RESUMED);
                })({ state: this.audioPlayerState }),
              audioSeeked: () =>
                (function (e) {
                  let { state: t } = e;
                  t.event.value = h.SET_PROGRESS;
                })({ state: this.audioPlayerState }),
              audioStalled: () =>
                (function (e) {
                  let { state: t } = e;
                  t.event.value = h.STALLED;
                })({ state: this.audioPlayerState }),
              audioCanplay: () =>
                (function (e) {
                  let { state: t } = e;
                  t.event.value = h.CANPLAY;
                })({ state: this.audioPlayerState }),
              audioPlaying: () => {
                !(function (e) {
                  let { state: t } = e;
                  (t.status.value = u.PLAYING), (t.event.value = h.PLAYING);
                })({ state: this.audioPlayerState });
              },
              audioError: (e) => {
                !(function (e) {
                  let { state: t, hooks: r, error: a } = e,
                    i = new S("Core media element error", {
                      code: "E_MEDIA_ELEMENT_ERROR",
                      cause: { code: a.code, message: a.message },
                    });
                  r.afterError.promise(i),
                    (t.status.value = u.MEDIA_ELEMENT_ERROR),
                    (t.event.value = h.MEDIA_ELEMENT_ERROR);
                })({
                  state: this.audioPlayerState,
                  hooks: this.hooks,
                  error: e,
                });
              },
              audioVolumeChange: (e) =>
                (function (e) {
                  let { state: t, volume: r } = e;
                  (t.volume.value = r), (t.event.value = h.SET_VOLUME);
                })({ state: this.audioPlayerState, volume: e }),
              audioSpeedChange: (e) => {
                !(function (e) {
                  let { state: t, speed: r } = e;
                  (t.speed.value = r), (t.event.value = h.SET_SPEED);
                })({ state: this.audioPlayerState, speed: e });
              },
              audioUpdatingProgress: (e) => {
                !(function (e) {
                  let { state: t, progress: r } = e;
                  (t.progress.value = r), (t.event.value = h.UPDATING_PROGRESS);
                })({ state: this.audioPlayerState, progress: e });
              },
              audioStop: () => {
                !(function (e) {
                  let { state: t, hooks: r } = e;
                  r.afterMediaEndPlaying
                    .promise()
                    .catch((e) => {
                      r.afterError.promise(e);
                    })
                    .finally(() => {
                      (t.status.value = u.STOPPED), (t.event.value = h.STOP);
                    });
                })({ state: this.audioPlayerState, hooks: this.hooks });
              },
            }),
            (this.core = e.core),
            (this.mediaProvider = e.mediaProvider),
            (this.hooks = e.hooks),
            this.subscribeCoreEvents();
        }
      }
      class C extends x.y {
        constructor(
          e = "No current context",
          { code: t = "E_NO_CURRENT_CONTEXT", ...r } = {},
        ) {
          super(e, { code: t, ...r }),
            (0, g._)(this, "name", "NoCurrentContextExceptions"),
            Object.setPrototypeOf(this, C.prototype);
        }
      }
      class k {
        get currentContextObservable() {
          return this.observableContext;
        }
        set currentContext(e) {
          this.observableContext.value &&
            (this.observableContext.value.isCurrentContext = !1),
            (this.observableContext.value = e),
            this.observableContext.value &&
              (this.observableContext.value.isCurrentContext = !0);
        }
        get currentContext() {
          return this.observableContext.value;
        }
        createEntities(e) {
          let t = [];
          for (let r of e) {
            let e = { data: r };
            t.push(this.entityFactory.create(e));
          }
          return t;
        }
        getContextEntities() {
          return this.observableContext.value
            ? this.observableContext.value
                .getContextEntitiesData()
                .then((e) => this.createEntities(e))
            : Promise.reject(new C());
        }
        loadContextMeta() {
          return this.observableContext.value
            ? this.observableContext.value.loadContextMeta()
            : Promise.reject(new C());
        }
        constructor(e) {
          (0, g._)(this, "entityFactory", void 0),
            (0, g._)(this, "observableContext", new P.wi(void 0)),
            (this.entityFactory = e);
        }
      }
      function w(e) {
        let { context: t, entities: r } = e,
          a = [];
        for (let e of r) a.push({ entity: e, context: t });
        return a;
      }
      ((o = m || (m = {})).Forward = "forward"), (o.Backward = "backward");
      class R extends x.y {
        constructor(e, { code: t = "E_HELPER", ...r } = {}) {
          super(e, { code: t, ...r }),
            (0, g._)(this, "name", "HelperException"),
            Object.setPrototypeOf(this, R.prototype);
        }
      }
      function A(e) {
        try {
          let {
              index: t,
              order: r,
              contextEntityPairs: a,
              direction: i,
              canBePlayedParams: s,
            } = e,
            n = t,
            o = null,
            l = () => (i === m.Forward ? n < r.length : n >= 0),
            u = () => {
              i === m.Forward ? (n += 1) : (n -= 1);
            };
          for (; l() && null === o; ) {
            let e = a[r[n]];
            e.entity.canBePlayed(s) || e.entity.data.type === c.Unloaded
              ? (o = n)
              : u();
          }
          return o;
        } catch (e) {
          throw new R("Error in findPlayableEntityIndex", {
            code: "E_FIND_PLAYABLE_ENTITY_INDEX_HELPER",
            cause: e,
          });
        }
      }
      class I extends x.y {
        constructor(
          e = "No playable entity",
          { code: t = "E_NO_PLAYABLE_ENTITY", ...r } = {},
        ) {
          super(e, { code: t, ...r }),
            (0, g._)(this, "name", "NoPlayableEntityExceptions"),
            Object.setPrototypeOf(this, I.prototype);
        }
      }
      class O {
        findPlayableEntityIndexInQueue(e) {
          let {
            index: t,
            direction: r,
            contextEntityPairs: a,
            order: i,
            canBePlayedParams: s,
            repeat: n,
          } = e;
          return new Promise((e, n) => {
            this.findPlayableEntityIndexInQueueRecursive({
              resolve: e,
              reject: n,
              index: t,
              order: i,
              contextEntityPairs: a,
              direction: r,
              canBePlayedParams: s,
            });
          }).then((e) =>
            n === v.zq.CONTEXT && null === e
              ? new Promise((e, t) => {
                  let n = r === m.Forward ? 0 : i.length - 1;
                  this.findPlayableEntityIndexInQueueRecursive({
                    resolve: e,
                    reject: t,
                    index: n,
                    order: i,
                    contextEntityPairs: a,
                    direction: r,
                    canBePlayedParams: s,
                  });
                })
              : Promise.resolve(e),
          );
        }
        findPlayableEntityIndexInQueueRecursive(e) {
          let {
            canBePlayedParams: t,
            index: r,
            order: a,
            contextEntityPairs: i,
            direction: s,
            resolve: n,
            reject: o,
          } = e;
          try {
            let e = A({
              contextEntityPairs: i,
              order: a,
              index: r,
              direction: s,
              canBePlayedParams: t,
            });
            null !== e
              ? this.playerQueue.getEntityByIndex({
                  index: e,
                  entityList: i,
                  order: a,
                }).entity.data.type === c.Unloaded
                ? this.loadEntitiesIfNeeded({
                    index: e,
                    contextEntityPairs: i,
                    order: a,
                  })
                    .then(() => {
                      this.findPlayableEntityIndexInQueueRecursive({
                        resolve: n,
                        reject: o,
                        direction: s,
                        index: e,
                        order: a,
                        contextEntityPairs: i,
                        canBePlayedParams: t,
                      });
                    })
                    .catch(o)
                : n(e)
              : n(null);
          } catch (e) {
            o(e);
          }
        }
        loadEntitiesIfNeeded(e) {
          return new Promise((t, r) => {
            let { index: a, contextEntityPairs: i, order: s } = e;
            try {
              let e = this.playerQueue.getEntityByIndex({
                  index: a,
                  entityList: i,
                  order: s,
                }),
                n = (function (e) {
                  try {
                    let { index: t, order: r, contextEntityPairs: a } = e,
                      i = r.slice(Math.max(t - 5, 0), t + 5 + 1),
                      s = !1;
                    for (let e of i)
                      a[e].entity.data.type === c.Unloaded && (s = !0);
                    return s;
                  } catch (e) {
                    throw new R("Error in hasUnloadedInCloseArea", {
                      code: "E_UNLOADED_IN_CLOSE_AREA_HELPER",
                      cause: e,
                    });
                  }
                })({ index: a, order: s, contextEntityPairs: i });
              e.entity.data.type === c.Unloaded
                ? this.loadEntities({
                    index: a,
                    order: s,
                    contextEntityPairs: i,
                  })
                    .then((e) => {
                      this.playerQueue.setEntityList(e, !0), t();
                    })
                    .catch(r)
                : (e.entity.data.type !== c.Unloaded &&
                    n &&
                    this.loadEntities({
                      index: a,
                      order: s,
                      contextEntityPairs: i,
                    })
                      .then((e) => {
                        this.playerQueue.setEntityList(e, !0);
                      })
                      .catch((e) => {
                        this.hooks.afterError.promise(e);
                      }),
                  t());
            } catch (e) {
              r(e);
            }
          });
        }
        loadEntities(e) {
          try {
            let { index: t, contextEntityPairs: r, order: a } = e,
              { contextEntityPairsToLoad: i, indexes: s } = (function (e) {
                try {
                  let t = [],
                    r = [],
                    {
                      index: a,
                      order: i,
                      contextEntityPairs: s,
                      windowSize: n,
                    } = e,
                    o = 0,
                    l = a,
                    u = i[l];
                  for (; void 0 !== u && o < n; )
                    s[u].entity.data.type === c.Unloaded &&
                      (r.push(u), (o += 1)),
                      (l -= 1),
                      (u = i[l]);
                  let d = 0,
                    h = a + 1;
                  for (u = i[h]; void 0 !== u && d < n; )
                    s[u].entity.data.type === c.Unloaded &&
                      (r.push(u), (d += 1)),
                      (h += 1),
                      (u = i[h]);
                  for (let e of r.sort((e, t) => e - t)) {
                    let r = s[e];
                    r && t.push(r);
                  }
                  return { contextEntityPairsToLoad: t, indexes: r };
                } catch (e) {
                  throw new R("Error in getContextEntityPairsToLoad", {
                    code: "E_GET_PAIRS_TO_LOAD_HELPER",
                    cause: e,
                  });
                }
              })({
                index: t,
                contextEntityPairs: r,
                order: a,
                windowSize: this.windowPaginationConfig.windowSize,
              });
            return this.entityProvider.loadEntities(i).then((e) => {
              let t = this.contextController.createEntities(e);
              return (function (e) {
                try {
                  let {
                      contextEntityPairs: t,
                      loadedEntities: r,
                      indexes: a,
                    } = e,
                    i = a.shift(),
                    s = r.shift(),
                    n = 0,
                    o = [];
                  for (; n !== t.length; ) {
                    if (n === i && s) {
                      let e = t[i];
                      o.push({ context: e.context, entity: s }),
                        (i = a.shift()),
                        (s = r.shift());
                    } else {
                      let e = t[n];
                      o.push(e);
                    }
                    n += 1;
                  }
                  return o;
                } catch (e) {
                  throw new R("Error in replaceEntities", {
                    code: "E_REPLACE_ENTITIES_HELPER",
                    cause: e,
                  });
                }
              })({ loadedEntities: t, contextEntityPairs: r, indexes: s });
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }
        constructor(e) {
          (0, g._)(this, "playerQueue", void 0),
            (0, g._)(this, "windowPaginationConfig", void 0),
            (0, g._)(this, "hooks", void 0),
            (0, g._)(this, "entityProvider", void 0),
            (0, g._)(this, "contextController", void 0),
            (this.playerQueue = e.playerQueue),
            (this.windowPaginationConfig = e.windowPaginationConfig),
            (this.hooks = e.hooks),
            (this.entityProvider = e.entityProvider),
            (this.contextController = e.contextController);
        }
      }
      class L {
        get queue() {
          return this.playerQueue;
        }
        setupQueue(e) {
          let { entitiesData: t, queueParams: r = {} } = e,
            { shuffle: a } = r,
            i = this.contextController.currentContext,
            s = { entityChangeMethod: p.Z.PLAY_CONTEXT, index: r.index };
          return i
            ? this.getEntitiesFromDataOrContext(t).then((e) => {
                let t;
                !0 === a
                  ? this.playerQueue.setShuffle(!0)
                  : !1 === a && this.playerQueue.setShuffle(!1);
                let n = r.entityId,
                  o = null;
                void 0 !== n &&
                  (o = e.findIndex(
                    (e) => Number(e.data.meta.id) === Number(n),
                  )),
                  (t =
                    o && -1 !== o
                      ? o
                      : void 0 !== r.index
                        ? r.index
                        : "number" == typeof i.resumeFromIndex
                          ? i.resumeFromIndex
                          : this.playerQueue.createIndex({
                              entityListLength: e.length,
                            }));
                let { order: l, index: u } = this.playerQueue.createOrder({
                    entityListLength: e.length,
                    index: t,
                  }),
                  d = w({ context: i, entities: e });
                if (d[l[u]].entity.data.type === c.Unloaded)
                  return this.entityLoader
                    .loadEntities({ order: l, contextEntityPairs: d, index: u })
                    .then((e) => {
                      let t = A({
                        contextEntityPairs: e,
                        order: l,
                        index: u,
                        direction: m.Forward,
                        canBePlayedParams: s,
                      });
                      if (null !== t)
                        (0, P.dC)(() => {
                          this.playerQueue.setEntityList(e, !1),
                            this.playerQueue.setOrder(l, !1),
                            (this.playerQueue.index = t);
                        });
                      else
                        throw (this.hooks.afterContextEnd.promise(), new I());
                    });
                let h = A({
                  contextEntityPairs: d,
                  order: l,
                  index: u,
                  direction: m.Forward,
                  canBePlayedParams: s,
                });
                if (null !== h)
                  return (
                    (0, P.dC)(() => {
                      this.playerQueue.setEntityList(d, !1),
                        this.playerQueue.setOrder(l, !1),
                        (this.playerQueue.index = h);
                    }),
                    Promise.resolve()
                  );
                throw (this.hooks.afterContextEnd.promise(), new I());
              })
            : Promise.reject(new C());
        }
        setIndex(e) {
          let t = e,
            r = this.playerQueue.state.order.value;
          if (this.playerQueue.state.shuffle.value) {
            let a = this.playerQueue.createOrder({
              entityListLength: this.playerQueue.state.entityList.value.length,
              index: e,
            });
            (t = a.index), (r = a.order);
          }
          let a = { entityChangeMethod: p.Z.SET_INDEX, index: t };
          return this.entityLoader
            .findPlayableEntityIndexInQueue({
              index: t,
              order: r,
              repeat: this.playerQueue.state.repeat.value,
              contextEntityPairs: this.playerQueue.state.entityList.value,
              direction: m.Forward,
              canBePlayedParams: a,
            })
            .then((e) =>
              null !== e
                ? this.entityLoader
                    .loadEntitiesIfNeeded({
                      index: e,
                      order: this.playerQueue.state.order.value,
                      contextEntityPairs:
                        this.playerQueue.state.entityList.value,
                    })
                    .then(() => {
                      this.hooks.beforeEntityChange
                        .promise(p.Z.SET_INDEX)
                        .catch((e) => {
                          this.hooks.afterError.promise(e);
                        })
                        .finally(() => {
                          (0, P.dC)(() => {
                            (t = e),
                              this.playerQueue.state.shuffle.value &&
                                this.playerQueue.setOrder(r, !1),
                              (this.playerQueue.index = t);
                          });
                        });
                    })
                : (this.hooks.afterContextEnd.promise(), Promise.resolve()),
            );
        }
        moveForward() {
          let e = this.playerQueue.state.index.value + 1,
            t = { entityChangeMethod: p.Z.MOVE_FORWARD, index: e };
          return this.entityLoader
            .findPlayableEntityIndexInQueue({
              index: e,
              order: this.playerQueue.state.order.value,
              repeat: this.playerQueue.state.repeat.value,
              contextEntityPairs: this.playerQueue.state.entityList.value,
              direction: m.Forward,
              canBePlayedParams: t,
            })
            .then((e) =>
              null !== e
                ? this.entityLoader
                    .loadEntitiesIfNeeded({
                      index: e,
                      order: this.playerQueue.state.order.value,
                      contextEntityPairs:
                        this.playerQueue.state.entityList.value,
                    })
                    .then(() => {
                      this.hooks.beforeEntityChange
                        .promise(p.Z.MOVE_FORWARD)
                        .catch((e) => {
                          this.hooks.afterError.promise(e);
                        })
                        .finally(() => {
                          this.playerQueue.index = e;
                        });
                    })
                : (this.hooks.afterContextEnd.promise(),
                  Promise.resolve({ cause: l.ENTITY_CAN_NOT_BE_PLAYED })),
            );
        }
        autoMoveForward() {
          let e = this.playerQueue.state.index.value + 1,
            t = { entityChangeMethod: p.Z.AUTO_MOVE_FORWARD, index: e };
          if (
            this.playerQueue.state.currentEntity.value &&
            this.playerState.event.value === h.END
          ) {
            let r = this.playerQueue.state.currentEntity.value;
            if (
              this.playerQueue.state.repeat.value === v.zq.ONE &&
              r.entity.canBePlayed(t)
            )
              return;
            this.playerQueue.state.repeat.value === v.zq.CONTEXT &&
              this.playerQueue.isOnLastIndex() &&
              this.playerQueue.state.order.value.length > 1 &&
              (e = 0),
              this.entityLoader
                .findPlayableEntityIndexInQueue({
                  index: e,
                  order: this.playerQueue.state.order.value,
                  repeat: this.playerQueue.state.repeat.value,
                  contextEntityPairs: this.playerQueue.state.entityList.value,
                  direction: m.Forward,
                  canBePlayedParams: t,
                })
                .then((e) => {
                  null !== e
                    ? this.entityLoader
                        .loadEntitiesIfNeeded({
                          index: e,
                          order: this.playerQueue.state.order.value,
                          contextEntityPairs:
                            this.playerQueue.state.entityList.value,
                        })
                        .then(() => {
                          this.hooks.beforeEntityChange
                            .promise(p.Z.AUTO_MOVE_FORWARD)
                            .catch((e) => {
                              this.hooks.afterError.promise(e);
                            })
                            .finally(() => {
                              this.playerQueue.index = e;
                            });
                        })
                        .catch((e) => {
                          this.hooks.afterError.promise(e);
                        })
                    : this.hooks.afterContextEnd.promise();
                })
                .catch((e) => {
                  this.hooks.afterError.promise(e);
                });
          }
        }
        moveBackward() {
          let e = this.playerQueue.state.index.value - 1,
            t = { entityChangeMethod: p.Z.MOVE_BACKWARD, index: e };
          return this.entityLoader
            .findPlayableEntityIndexInQueue({
              index: this.playerQueue.state.index.value - 1,
              order: this.playerQueue.state.order.value,
              repeat: this.playerQueue.state.repeat.value,
              contextEntityPairs: this.playerQueue.state.entityList.value,
              direction: m.Backward,
              canBePlayedParams: t,
            })
            .then((e) =>
              null !== e
                ? this.entityLoader
                    .loadEntitiesIfNeeded({
                      index: e,
                      order: this.playerQueue.state.order.value,
                      contextEntityPairs:
                        this.playerQueue.state.entityList.value,
                    })
                    .then(() => {
                      this.hooks.beforeEntityChange
                        .promise(p.Z.MOVE_BACKWARD)
                        .catch((e) => {
                          this.hooks.afterError.promise(e);
                        })
                        .finally(() => {
                          this.playerQueue.index = e;
                        });
                    })
                : Promise.resolve({ cause: l.ENTITY_CAN_NOT_BE_PLAYED }),
            );
        }
        append(e) {
          let t = this.contextController.currentContext,
            r = this.contextController.createEntities(e);
          if (t) {
            let e = w({ entities: r, context: t });
            this.playerQueue.append(e);
          } else throw new C();
        }
        inject(e, t) {
          let r = this.contextController.currentContext,
            a = this.contextController.createEntities(e);
          if (r) {
            let e = w({ entities: a, context: r });
            this.playerQueue.inject(e, t);
          } else throw new C();
        }
        remove(e) {
          this.playerQueue.remove(e);
        }
        toggleShuffle() {
          this.playerQueue.toggleShuffle();
        }
        setShuffle(e) {
          this.playerQueue.setShuffle(e);
        }
        getEntitiesFromDataOrContext(e) {
          return e
            ? Promise.resolve(this.contextController.createEntities(e))
            : this.contextController.getContextEntities();
        }
        constructor(e) {
          (0, g._)(this, "contextController", void 0),
            (0, g._)(this, "playerQueue", void 0),
            (0, g._)(this, "playerState", void 0),
            (0, g._)(this, "hooks", void 0),
            (0, g._)(this, "entityLoader", void 0);
          let {
            contextController: t,
            playerQueue: r,
            playerState: a,
            hooks: i,
            entityProvider: s,
            windowPaginationConfig: n,
          } = e;
          (this.contextController = t),
            (this.playerQueue = r),
            (this.playerState = a),
            (this.hooks = i),
            (this.entityLoader = new O({
              contextController: t,
              playerQueue: r,
              entityProvider: s,
              hooks: i,
              windowPaginationConfig: n,
            })),
            this.playerState.event.onChange(() => this.autoMoveForward());
        }
      }
      var N = r(3429);
      class U extends x.y {
        constructor() {
          super("No current entity in queue", { code: "E_NO_CURRENT_ENTITY" }),
            (0, g._)(this, "name", "NoCurrentEntityException"),
            Object.setPrototypeOf(this, U.prototype);
        }
      }
      class D {
        get listenQueueState() {
          return this.listenToQueueStateChange;
        }
        set listenQueueState(e) {
          this.listenToQueueStateChange = e;
        }
        get mediaPlayer() {
          return this.currentMediaPlayer;
        }
        play() {
          let e = this.queueState.currentEntity.value;
          return e
            ? ((e.entity.playId = this.generatePlayId()),
              this.hooks.beforeEntityPlayingProcessStart
                .promise()
                .catch((e) => {
                  this.hooks.afterError.promise(e);
                })
                .finally(() => this.currentMediaPlayer.play(e.entity))
                .then(() => {
                  var e;
                  let t =
                    null === (e = this.queueState.currentEntity.value) ||
                    void 0 === e
                      ? void 0
                      : e.entity;
                  (null == t ? void 0 : t.startPosition) &&
                    this.currentMediaPlayer.setProgress(t.startPosition);
                }))
            : Promise.reject(new U());
        }
        reload() {
          let e = this.queueState.currentEntity.value;
          return e
            ? navigator.onLine
              ? this.currentMediaPlayer.reload(e.entity)
              : Promise.resolve()
            : Promise.reject(new U());
        }
        pause() {
          return this.currentMediaPlayer.state.status.value === u.PLAYING
            ? this.currentMediaPlayer.pause()
            : Promise.resolve();
        }
        resume() {
          return this.currentMediaPlayer.state.status.value !== u.PLAYING
            ? this.currentMediaPlayer.resume()
            : Promise.resolve();
        }
        togglePause() {
          let e = Promise.resolve();
          switch (this.currentMediaPlayer.state.status.value) {
            case u.IDLE:
            case u.STOPPED:
              e = this.play();
              break;
            case u.MEDIA_ELEMENT_ERROR:
              e = this.reload();
              break;
            default:
              e = this.currentMediaPlayer.togglePause();
          }
          return e;
        }
        setProgress(e) {
          let t = this.queueState.currentEntity.value;
          return (
            t && (t.entity.startPosition = e),
            this.currentMediaPlayer.setProgress(e)
          );
        }
        setVolume(e) {
          return this.currentMediaPlayer.setVolume(e);
        }
        setSpeed(e) {
          return this.currentMediaPlayer.setSpeed(e);
        }
        stop() {
          return this.currentMediaPlayer.state.status.value === u.IDLE ||
            this.currentMediaPlayer.state.status.value === u.STOPPED
            ? Promise.resolve()
            : this.currentMediaPlayer.stop();
        }
        generatePlayId() {
          return (0, N.Z)();
        }
        subscribeQueue() {
          this.unsubArray.push(
            this.currentMediaPlayer.state.event.onChange(
              this.playerEventChangeHandler,
            ),
          ),
            this.unsubArray.push(
              this.queueState.currentEntity.onChange(this.currentEntityHandler),
            );
        }
        unsubscribeQueue() {
          for (let e of this.unsubArray) e();
        }
        playerEventChangeHandler() {
          let e = this.queueState.currentEntity.value;
          if (void 0 !== e)
            switch (this.currentMediaPlayer.state.event.value) {
              case h.END:
                this.playerEndHandler(e);
                break;
              case h.MEDIA_ELEMENT_ERROR:
                this.playerMediaElementErrorHandler(e);
                break;
              case h.PLAYING:
                e.entity.mediaElementErrorReloadCounter = 0;
            }
        }
        playerEndHandler(e) {
          let t = {
              entityChangeMethod: p.Z.AUTO_MOVE_FORWARD,
              index: this.queueState.index.value,
            },
            r = 1 === this.queueState.order.value.length;
          e.entity.canBePlayed(t) &&
            (this.queueState.repeat.value === v.zq.ONE ||
              (this.queueState.repeat.value === v.zq.CONTEXT && r)) &&
            this.play().catch((e) => this.hooks.afterError.promise(e));
        }
        playerMediaElementErrorHandler(e) {
          e.entity.mediaElementErrorReloadCounter <
            this.config.mediaElementErrorReloadCount &&
            ((e.entity.mediaElementErrorReloadCounter += 1),
            this.reload().catch((e) => this.hooks.afterError.promise(e)));
        }
        currentEntityHandler() {
          if (!this.listenToQueueStateChange) return;
          let e = this.queueState.currentEntity.value;
          void 0 !== e &&
            ((e.entity.mediaElementErrorReloadCounter = 0),
            this.play().catch((e) => {
              this.hooks.afterError.promise(e);
            }));
        }
        constructor(e) {
          (0, g._)(this, "currentMediaPlayer", void 0),
            (0, g._)(this, "queueState", void 0),
            (0, g._)(this, "unsubArray", []),
            (0, g._)(this, "config", void 0),
            (0, g._)(this, "listenToQueueStateChange", !0),
            (0, g._)(this, "hooks", void 0);
          let { queueState: t, audioPlayer: r, hooks: a, config: i } = e;
          (this.queueState = t),
            (this.currentMediaPlayer = r),
            (this.hooks = a),
            (this.config = { mediaElementErrorReloadCount: 1, ...(i || {}) }),
            (this.currentEntityHandler = this.currentEntityHandler.bind(this)),
            (this.playerEventChangeHandler =
              this.playerEventChangeHandler.bind(this)),
            this.subscribeQueue();
        }
      }
      let F = 5;
      class H {
        get state() {
          return this.playbackState;
        }
        playContext(e) {
          try {
            var t, r;
            let {
                context: a,
                queueParams: i,
                entitiesData: s,
                loadContextMeta: n,
              } = e,
              o = this.contextController.currentContextObservable.value,
              c = this.queueController.queue.state.currentEntity.value,
              l = this.queueController.queue.state.entityList.value,
              d = null == i ? void 0 : i.entityId,
              h = null == i ? void 0 : i.index;
            if (
              (void 0 !== d &&
                (h = l.findIndex(
                  (e) => Number(e.entity.data.meta.id) === Number(d),
                )),
              (function (e) {
                let {
                  currentContext: t,
                  newContext: r,
                  entityList: a,
                  entitiesData: i,
                } = e;
                if (void 0 === t || t.data.type !== r.data.type) return !0;
                if (!i || 0 === i.length)
                  return String(t.data.meta.id) !== String(r.data.meta.id);
                if (String(t.data.meta.id) !== String(r.data.meta.id))
                  return !0;
                let s = a.map((e) => {
                    let { entity: t } = e;
                    return String(t.data.meta.id);
                  }),
                  n = i.map((e) => String(e.meta.id));
                return !(0, y.Z)(s, n);
              })({
                currentContext: o,
                newContext: a,
                entityList: l,
                entitiesData: s,
              }) || void 0 === c)
            )
              return this.mediaController
                .stop()
                .then(() =>
                  this.setContext({
                    queueParams: i,
                    context: a,
                    entitiesData: s,
                    loadContextMeta: n,
                  }),
                )
                .then(() => this.play());
            let { entity: f } = c;
            if (void 0 === i || void 0 === h || -1 === h) {
              let e = this.playbackState.playerState.status.value === u.STOPPED,
                t =
                  this.playbackState.queueState.order.value.length ===
                  this.playbackState.queueState.index.value + 1,
                r = 1 === this.playbackState.queueState.entityList.value.length;
              if (e && t && !r) return this.setEntityByIndex(0);
              return this.togglePause();
            }
            let m = this.queueController.queue.state.entityList.value[h];
            if (
              m &&
              ((t = m.entity),
              (r = this.playbackState.queueState.index.value === h),
              f.data.meta.id !== t.data.meta.id || !r)
            )
              return this.setEntityByIndex(h);
            return this.togglePause();
          } catch (e) {
            return Promise.reject(e);
          }
        }
        setContext(e) {
          this.mediaController.listenQueueState = !1;
          let {
            context: t,
            entitiesData: r,
            queueParams: a,
            loadContextMeta: i = !0,
          } = e;
          return this.hooks.beforeContextSet
            .promise()
            .catch((e) => {
              this.hooks.afterError.promise(e);
            })
            .finally(() =>
              ((this.contextController.currentContext = t),
              this.hooks.afterContextSet.call(),
              i)
                ? this.contextController.loadContextMeta().then(() =>
                    this.queueController
                      .setupQueue({ entitiesData: r, queueParams: a })
                      .then(() => {
                        this.mediaController.listenQueueState = !0;
                      }),
                  )
                : this.queueController
                    .setupQueue({ entitiesData: r, queueParams: a })
                    .then(() => {
                      this.mediaController.listenQueueState = !0;
                    }),
            );
        }
        restartContext(e) {
          this.mediaController.listenQueueState = !1;
          let { playAfterRestart: t = !0, entitiesData: r, queueParams: a } = e;
          return this.hooks.beforeEntityChange
            .promise(p.Z.RESTART_CONTEXT)
            .catch((e) => {
              this.hooks.afterError.promise(e);
            })
            .finally(() =>
              this.queueController
                .setupQueue({ entitiesData: r, queueParams: a })
                .then(() =>
                  ((this.mediaController.listenQueueState = !0), t)
                    ? this.play()
                    : this.mediaController.stop(),
                ),
            );
        }
        reloadEntity() {
          return this.mediaController.reload();
        }
        play() {
          return this.mediaController.play();
        }
        moveForward() {
          return this.queueController
            .moveForward()
            .then((e) =>
              e && e.cause === l.ENTITY_CAN_NOT_BE_PLAYED
                ? this.mediaController.stop()
                : Promise.resolve(),
            );
        }
        moveBackward() {
          let {
            progress: { value: e },
          } = this.mediaController.mediaPlayer.state;
          return e.position > F
            ? this.mediaController.setProgress(0)
            : this.queueController
                .moveBackward()
                .then((e) =>
                  e && e.cause === l.ENTITY_CAN_NOT_BE_PLAYED
                    ? this.mediaController.stop()
                    : Promise.resolve(),
                );
        }
        setEntityByIndex(e) {
          return this.queueController.setIndex(e);
        }
        inject(e, t) {
          this.queueController.inject(e, t);
        }
        append(e) {
          this.queueController.append(e);
        }
        remove(e) {
          this.queueController.remove(e);
        }
        pause() {
          return this.mediaController.pause();
        }
        resume() {
          return this.mediaController.resume();
        }
        togglePause() {
          return this.mediaController.togglePause();
        }
        increaseVolume(e) {
          let t = this.playbackState.playerState.volume.value;
          return this.mediaController.setVolume(1 - e > t ? t + e : 1);
        }
        decreaseVolume(e) {
          let t = this.playbackState.playerState.volume.value;
          return this.mediaController.setVolume(t > e ? t - e : 0);
        }
        slideForward(e) {
          let { duration: t, position: r } =
              this.playbackState.playerState.progress.value,
            a = t - e;
          return this.mediaController.setProgress(a > r ? r + e : t);
        }
        slideBackward(e) {
          let { position: t } = this.playbackState.playerState.progress.value;
          return this.mediaController.setProgress(t > e ? t - e : 0);
        }
        toggleShuffle() {
          this.queueController.toggleShuffle();
        }
        setShuffle(e) {
          this.queueController.setShuffle(e);
        }
        setProgress(e) {
          return this.mediaController.setProgress(e);
        }
        setVolume(e) {
          return this.mediaController.setVolume(e);
        }
        setSpeed(e) {
          return this.mediaController.setSpeed(e);
        }
        bindPlayer() {
          this.mediaController.listenQueueState = !0;
        }
        unbindPlayer() {
          this.mediaController.listenQueueState = !1;
        }
        setRepeatMode(e) {
          this.queueController.queue.state.repeat.value = e;
        }
        stop() {
          return this.mediaController.stop();
        }
        constructor(e) {
          (0, g._)(this, "playbackState", void 0),
            (0, g._)(this, "queueController", void 0),
            (0, g._)(this, "contextController", void 0),
            (0, g._)(this, "mediaController", void 0),
            (0, g._)(this, "hooks", void 0),
            (0, g._)(this, "source", void 0),
            (this.hooks = e.hooks);
          let {
            queueController: t,
            contextController: r,
            mediaController: a,
          } = (function (e) {
            try {
              let {
                  audioCore: t,
                  mediaProvider: r,
                  entityFactory: a,
                  hooks: i,
                  entityProvider: s,
                  windowPaginationConfig: n,
                  config: o,
                } = e,
                c = new v.f1({
                  index: 0,
                  entityList: [],
                  order: [],
                  repeat: { ...v.zq }.NONE,
                  shuffle: !1,
                  currentEntity: void 0,
                }),
                l = new b({ core: t, mediaProvider: r, hooks: i }),
                u = new k(a),
                d = new L({
                  contextController: u,
                  playerQueue: c,
                  playerState: l.state,
                  hooks: i,
                  entityProvider: s,
                  windowPaginationConfig: n,
                }),
                h = {
                  mediaElementErrorReloadCount: o
                    ? o.mediaElementErrorReloadCount
                    : void 0,
                },
                f = new D({
                  queueState: c.state,
                  audioPlayer: l,
                  hooks: i,
                  config: h,
                });
              return {
                contextController: u,
                queueController: d,
                mediaController: f,
              };
            } catch (e) {
              throw new R("Error in createPlaybackControllers", {
                code: "E_CREATE_PLAYER_CONTROLLERS",
                cause: e,
              });
            }
          })({ ...e, hooks: this.hooks });
          (this.queueController = t),
            (this.mediaController = a),
            (this.contextController = r),
            (this.source = e.audioCore.source),
            (this.playbackState = {
              playerState: this.mediaController.mediaPlayer.state,
              queueState: this.queueController.queue.state,
              currentContext: this.contextController.currentContextObservable,
            });
        }
      }
      class M {}
    },
    87181: function (e, t, r) {
      "use strict";
      r.d(t, {
        f1: function () {
          return u;
        },
        zq: function () {
          return i;
        },
      });
      var a,
        i,
        s = r(8655),
        n = r(80789);
      class o {
        constructor(e) {
          (0, s._)(this, "index", void 0),
            (0, s._)(this, "entityList", void 0),
            (0, s._)(this, "order", void 0),
            (0, s._)(this, "repeat", void 0),
            (0, s._)(this, "shuffle", void 0),
            (0, s._)(this, "currentEntity", void 0);
          let { index: t, entityList: r, repeat: a, shuffle: i, order: o } = e;
          (this.index = new n.wi(t)),
            (this.entityList = new n.wi(r)),
            (this.order = new n.wi(o)),
            (this.repeat = new n.wi(a)),
            (this.shuffle = new n.wi(i)),
            (this.currentEntity = new n.YB(() => {
              let e = this.order.value[this.index.value];
              return void 0 !== e ? this.entityList.value[e] : void 0;
            }));
        }
      }
      function c(e) {
        let { originalOrderToShuffle: t, index: r } = e,
          a = t.slice(0, r),
          i = t.slice(r + 1),
          s = (function (e) {
            let t = [...e];
            for (let e = t.length - 1; e > 0; e--) {
              let r = Math.floor(Math.random() * (e + 1)),
                a = t[e];
              (t[e] = t[r]), (t[r] = a);
            }
            return t;
          })(a.concat(i));
        return [t[r], ...s];
      }
      function l(e) {
        return Array.from(Array(e).keys());
      }
      class u {
        get state() {
          return this.queueState;
        }
        set index(e) {
          if (e >= 0 && e <= this.queueState.entityList.value.length - 1)
            this.queueState.index.value = e;
          else throw Error("index out of range");
        }
        moveIndexForward() {
          let e = this.queueState.index.value + 1;
          e <= this.queueState.entityList.value.length - 1 &&
            (this.queueState.index.value = e);
        }
        moveIndexBackward() {
          let e = this.queueState.index.value - 1;
          e >= 0 && (this.queueState.index.value = e);
        }
        append(e) {
          for (let t of e) this.queueState.entityList.value.push(t);
          let t = [...this.queueState.order.value];
          for (let r = 0; r < e.length; r++) t.push(t.length);
          this.setOrder(t, !0);
        }
        inject(e, t) {
          if (
            (this.queueState.entityList.value.splice(t, 0, ...e),
            this.queueState.shuffle.value)
          ) {
            let r = this.queueState.order.value.map((r) =>
              r < t ? r : r + e.length,
            );
            for (let a = 0; a < e.length; a++) r.push(a + t);
            this.setOrder(r, !1);
          } else {
            let r = l(this.queueState.entityList.value.length);
            this.setOrder(r, !0),
              this.queueState.index.value >= t &&
                (this.queueState.index.value =
                  this.queueState.index.value + e.length);
          }
        }
        remove(e) {
          let t = [],
            r = this.queueState.entityList.value.length;
          for (let a = 0; a < r; a++) {
            let r = this.queueState.entityList.value.shift();
            e.includes(a) || void 0 === r || t.push(r);
          }
          this.setEntityList(t, !0);
          let { order: a } = this.createOrder({
            entityListLength: this.queueState.entityList.value.length,
            index: this.queueState.index.value,
          });
          this.setOrder(a, !0);
        }
        getEntityByIndex(e) {
          let { index: t } = e,
            r =
              void 0 === e.entityList
                ? this.state.entityList.value
                : e.entityList,
            a = (void 0 === e.order ? this.state.order.value : e.order)[t];
          if (void 0 !== a) {
            let e = r[a];
            if (e) return e;
            throw Error("no such entity");
          }
          throw Error("queue is empty");
        }
        setEntityList(e, t) {
          if (t) {
            for (; 0 !== this.queueState.entityList.value.length; )
              this.queueState.entityList.value.shift();
            let t = e.shift();
            for (; void 0 !== t; )
              this.queueState.entityList.value.push(t), (t = e.shift());
          } else this.queueState.entityList.value = e;
        }
        setOrder(e, t) {
          if (t) {
            for (; 0 !== this.queueState.order.value.length; )
              this.queueState.order.value.pop();
            let t = e.shift();
            for (; void 0 !== t; )
              this.queueState.order.value.push(t), (t = e.shift());
          } else this.queueState.order.value = e;
        }
        setShuffle(e) {
          e !== this.queueState.shuffle.value &&
            (e
              ? (0, n.dC)(() => {
                  this.queueState.shuffle.value = e;
                  let t = c({
                    originalOrderToShuffle: this.queueState.order.value,
                    index: this.queueState.index.value,
                  });
                  this.setOrder(t, !0);
                })
              : (0, n.dC)(() => {
                  this.queueState.shuffle.value = e;
                  let t = l(this.queueState.entityList.value.length);
                  this.setOrder(t, !0);
                }));
        }
        createOrder(e) {
          let { entityListLength: t, index: r } = e,
            a = l(t);
          return this.queueState.shuffle.value
            ? { order: c({ originalOrderToShuffle: a, index: r }), index: 0 }
            : { order: l(t), index: r };
        }
        createIndex(e) {
          let { entityListLength: t } = e,
            {
              shuffle: { value: r },
            } = this.queueState,
            a = 0;
          return (
            r &&
              (a = (function (e, t) {
                let r = Math.ceil(0);
                return Math.floor(Math.random() * (Math.floor(t) - r + 1)) + r;
              })(0, t - 1)),
            a
          );
        }
        toggleShuffle() {
          let {
            shuffle: { value: e },
            index: { value: t },
            order: { value: r },
            entityList: { value: a },
          } = this.queueState;
          if (e) {
            let e = r[t],
              i = l(a.length);
            (0, n.dC)(() => {
              this.setOrder(i, !0),
                (this.queueState.shuffle.value = !1),
                (this.queueState.index.value = e);
            });
          } else {
            let e = c({ originalOrderToShuffle: r, index: t });
            (0, n.dC)(() => {
              this.setOrder(e, !0),
                (this.queueState.shuffle.value = !0),
                (this.queueState.index.value = 0);
            });
          }
        }
        toggleRepeat(e) {}
        isOnLastIndex() {
          return this.state.order.value.length - 1 === this.state.index.value;
        }
        setRepeatMode(e) {
          this.state.repeat.value = e;
        }
        constructor(e) {
          (0, s._)(this, "queueState", void 0), (this.queueState = new o(e));
        }
      }
      ((a = i || (i = {})).NONE = "none"),
        (a.CONTEXT = "context"),
        (a.ONE = "one");
    },
    84338: function (e, t, r) {
      "use strict";
      r.d(t, {
        Zc: function () {
          return n;
        },
        Tg: function () {
          return D;
        },
        Ak: function () {
          return s;
        },
        $k: function () {
          return R;
        },
        bo: function () {
          return v;
        },
        m3: function () {
          return F;
        },
        Q7: function () {
          return W;
        },
        KT: function () {
          return j;
        },
        dt: function () {
          return M;
        },
        xA: function () {
          return H;
        },
      });
      var a,
        i,
        s,
        n,
        o = r(8655);
      ((a = s || (s = {})).Album = "album"),
        (a.Playlist = "playlist"),
        (a.Artist = "artist"),
        (a.Vibe = "vibe"),
        (a.Various = "various"),
        (a.Generative = "generative"),
        (a.Search = "search");
      var c = r(51179),
        l = r(11691);
      function u(e) {
        let t = [];
        for (let r of e)
          for (let e of r) t.push({ type: l.RX.Unloaded, meta: e });
        return t;
      }
      var d = r(80789);
      class h extends l.$n {
        get isCurrentContext() {
          return this.isCurrent;
        }
        set isCurrentContext(e) {
          this.isCurrent = e;
        }
        get availableActions() {
          return this.actions;
        }
        constructor(...e) {
          super(...e),
            (0, o._)(this, "isCurrent", !1),
            (0, o._)(this, "actions", {
              moveBackward: new d.wi(!1),
              moveForward: new d.wi(!0),
              repeat: new d.wi(null),
              shuffle: new d.wi(null),
              speed: new d.wi(null),
            }),
            (0, o._)(this, "from", "");
        }
      }
      var f = r(37810);
      class m extends f.y {
        constructor(e, { code: t = "E_CONTEXT", ...r } = {}) {
          super(e, { code: t, ...r }),
            (0, o._)(this, "name", "ContextException"),
            Object.setPrototypeOf(this, m.prototype);
        }
      }
      var g = r(31841);
      function p(e) {
        return e.map((e) => ({ type: g.A4.SmartPreview, meta: e }));
      }
      class y extends h {
        loadTrailer() {
          return this.albumsResource
            .getTrailer({ albumId: Number(this.contextData.meta.id) })
            .then((e) => ((this.contextData.meta.trailer = e.trailer), e))
            .catch((e) => {
              throw new m("Error in AlbumContext", {
                code: "E_ALBUM_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          return this.albumsResource
            .getAlbumWithTracksIds({
              albumId: Number(this.contextData.meta.id),
              resumeStream: !0,
            })
            .then((e) => ((this.contextData.meta = e), e))
            .catch((e) => {
              throw new m("Error in AlbumContext", {
                code: "E_ALBUM_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          return this.contextData.trailer
            ? this.loadTrailer().then((e) => p(e.trailer.tracks))
            : this.contextData.meta.volumes
              ? Promise.resolve(u(this.contextData.meta.volumes))
              : this.loadContextMeta().then((e) =>
                  Promise.resolve(u(e.volumes)),
                );
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        get resumeFromIndex() {
          var e;
          if (
            (null === (e = this.contextData.meta.resumeFrom) || void 0 === e
              ? void 0
              : e.trackId) &&
            Array.isArray(this.contextData.meta.volumes)
          ) {
            let e = []
              .concat(...this.contextData.meta.volumes)
              .findIndex((e) => {
                var t;
                return (
                  e.id ===
                  (null === (t = this.contextData.meta.resumeFrom) ||
                  void 0 === t
                    ? void 0
                    : t.trackId)
                );
              });
            if (e >= 0) return e;
          }
          return null;
        }
        constructor(e) {
          super(),
            (0, o._)(this, "contextData", void 0),
            (0, o._)(this, "albumsResource", void 0),
            (0, o._)(this, "variables", void 0);
          let {
            data: t,
            albumResourceConfig: r,
            httpClient: a,
            variables: i,
          } = e;
          (this.albumsResource = new c.SZ(a, r)),
            (this.contextData = t),
            (this.from = t.from),
            (this.variables = i);
        }
      }
      let v = (e) => {
          let [t, r] = e.split(":");
          return { uid: String(t), kind: Number(r) };
        },
        E = (e, t) => "".concat(e, ":").concat(t),
        P = (e) => 3 === e;
      class _ extends h {
        loadTrailer() {
          let { uid: e, kind: t } = v(this.contextData.meta.id);
          return this.usersResource
            .getPlaylistTrailer({ userId: e, playlistKind: t })
            .then((e) => ((this.contextData.meta.trailer = e.trailer), e))
            .catch((e) => {
              throw new m("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          let e = this.contextData.meta.uuid,
            { uid: t, kind: r } = v(this.contextData.meta.id);
          return (
            P(r) && void 0 !== e
              ? this.playlistResource.getPlaylist({
                  playlistUuid: e,
                  resumeStream: !1,
                  richTracks: !1,
                })
              : this.usersResource.getPlaylistWithTracksIds({
                  userId: t,
                  playlistKind: r,
                  resumeStream: !1,
                })
          )
            .then((e) => {
              let t = { ...e, id: E(e.uid, e.kind) };
              return (this.contextData.meta = t), t;
            })
            .catch((e) => {
              throw new m("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          if (this.contextData.trailer)
            return this.loadTrailer().then((e) => p(e.trailer.tracks));
          if (this.contextData.meta.tracks) {
            let e = [];
            for (let t of this.contextData.meta.tracks)
              e.push({ type: l.RX.Unloaded, meta: t });
            return Promise.resolve(e);
          }
          return this.loadContextMeta().then((e) => {
            let t = [];
            for (let r of e.tracks) t.push({ type: l.RX.Unloaded, meta: r });
            return t;
          });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        constructor(e) {
          super(),
            (0, o._)(this, "contextData", void 0),
            (0, o._)(this, "usersResource", void 0),
            (0, o._)(this, "playlistResource", void 0),
            (0, o._)(this, "variables", void 0);
          let {
            data: t,
            usersResourceConfig: r,
            playlistResourceConfig: a,
            httpClient: i,
            variables: s,
          } = e;
          (this.usersResource = new c.Vn(i, r)),
            (this.playlistResource = new c.Bl(i, a)),
            (this.contextData = t),
            (this.from = t.from),
            (this.variables = s);
        }
      }
      class x extends h {
        loadTrailer() {
          return this.artistsResource
            .getTrailer({ artistId: String(this.contextData.meta.id) })
            .then((e) => ((this.contextData.meta.trailer = e.trailer), e))
            .catch((e) => {
              throw new m("Error in ArtistContext", {
                code: "E_ARTIST_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          return this.artistsResource
            .getArtistTrackIds({ artistId: String(this.contextData.meta.id) })
            .then((e) => {
              let t = { id: this.contextData.meta.id, trackIds: e };
              return (this.contextData.meta = t), t;
            })
            .catch((e) => {
              throw new m("Error in ArtistContext", {
                code: "E_ARTIST_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          if (this.contextData.trailer)
            return this.loadTrailer().then((e) => p(e.trailer.tracks));
          if (this.contextData.meta.trackIds) {
            let e = [];
            for (let t of this.contextData.meta.trackIds)
              e.push({ type: l.RX.Unloaded, meta: { id: t } });
            return Promise.resolve(e);
          }
          return this.loadContextMeta().then((e) => {
            let t = [];
            for (let r of e.trackIds)
              t.push({ type: l.RX.Unloaded, meta: { id: r } });
            return t;
          });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        constructor(e) {
          super(),
            (0, o._)(this, "contextData", void 0),
            (0, o._)(this, "artistsResource", void 0),
            (0, o._)(this, "variables", void 0);
          let {
            data: t,
            artistsResourceConfig: r,
            httpClient: a,
            variables: i,
          } = e;
          (this.artistsResource = new c.cn(a, r)),
            (this.contextData = t),
            (this.from = t.from),
            (this.variables = i);
        }
      }
      function S(e) {
        let t = [];
        for (let r of e)
          t.push({
            type: g.A4.VibeTrack,
            meta: {
              ...r.track,
              liked: r.liked,
              trackParameters: r.trackParameters,
            },
          });
        return t;
      }
      function T(e) {
        var t;
        if (!("realId" in e.data.meta))
          throw new m("Error in VibeContext", { code: "E_WRONG_VIBE_CONTEXT" });
        if (e.data.type === l.RX.Unloaded) return String(e.data.meta.id);
        let {
          data: {
            meta: { albums: r, realId: a },
          },
        } = e;
        return r && (null === (t = r[0]) || void 0 === t ? void 0 : t.id)
          ? "".concat(a, ":").concat(r[0].id)
          : "".concat(a);
      }
      function b(e, t) {
        return e.slice(0, t + 2).map((e) => {
          let { entity: t } = e;
          return T(t);
        });
      }
      function C() {
        return new Date().toISOString();
      }
      let k = (e) =>
        "object" == typeof e &&
        e &&
        "durationMs" in e &&
        "number" == typeof e.durationMs;
      class w extends f.y {
        constructor(e, { code: t = "E_VIBE_CONTEXT_FEEDBACK", ...r } = {}) {
          super(e, { code: t, ...r }),
            (0, o._)(this, "name", "VibeContextFeedbackException"),
            Object.setPrototypeOf(this, w.prototype);
        }
      }
      let R = (e) => String([...e].sort());
      class A extends h {
        apply(e) {
          let { hooks: t, playback: r } = e;
          t.beforeContextSet.tap("VibeContext", () => {
            this.isCurrentContext &&
              this.sendFeedback(
                r.state.playerState,
                r.state.queueState,
                c.C.SKIP,
              );
          }),
            t.afterMediaStartPlaying.tapPromise("VibeContext", () =>
              this.isCurrentContext
                ? new Promise((e) => {
                    this.isVibeStarted
                      ? this.sendFeedback(
                          r.state.playerState,
                          r.state.queueState,
                          c.C.TRACK_STARTED,
                        )
                      : (this.sendFeedback(
                          r.state.playerState,
                          r.state.queueState,
                          c.C.RADIO_STARTED,
                        ).then(() => {
                          this.sendFeedback(
                            r.state.playerState,
                            r.state.queueState,
                            c.C.TRACK_STARTED,
                          );
                        }),
                        (this.isVibeStarted = !0)),
                      e();
                  })
                : Promise.resolve(),
            ),
            t.beforeEntityChange.tapPromise("VibeContext", (e) =>
              this.isCurrentContext
                ? new Promise((t, a) => {
                    switch (e) {
                      case l.Zp.AUTO_MOVE_FORWARD:
                        this.onAutoMoveForward(r).then(t).catch(a);
                        break;
                      case l.Zp.MOVE_FORWARD:
                        this.onMoveForward(r).then(t).catch(a);
                        break;
                      case l.Zp.MOVE_BACKWARD:
                        this.sendFeedback(
                          r.state.playerState,
                          r.state.queueState,
                          c.C.SKIP,
                        ),
                          t();
                        break;
                      case l.Zp.SET_INDEX:
                      case l.Zp.RESTART_CONTEXT:
                        t();
                    }
                  })
                : Promise.resolve(),
            );
        }
        loadContextMeta() {
          let {
            meta: { id: e },
            seeds: t,
          } = this.contextData;
          return this.rotorResource
            .sessionNew({ ...this.contextData, seeds: t, includeWaveModel: !0 })
            .then(
              (t) => (
                (this.contextData.meta.session = t), { id: e, session: t }
              ),
            )
            .catch((e) => {
              throw new m("Error in VibeContext", {
                code: "E_VIBE_LOAD_CONTEXT_META",
                cause: e,
                data: {
                  contextId: this.contextData.meta.id,
                  sessionId: this.contextData.meta.session
                    ? this.contextData.meta.session.radioSessionId
                    : "",
                },
              });
            });
        }
        setSettings(e, t, r) {
          let {
              meta: { id: a },
            } = this.contextData,
            i = b(r.entityList.value, r.index.value);
          return this.sendFeedback(t, r, c.C.SKIP).then(() =>
            this.rotorResource
              .sessionNew({
                ...this.contextData,
                seeds: e,
                queue: i,
                includeWaveModel: !0,
              })
              .then(
                (e) => (
                  (this.contextData.meta.session = e),
                  (this.contextData.meta.id = R(e.wave.seeds)),
                  { id: a, session: this.contextData.meta.session }
                ),
              )
              .catch((e) => {
                throw new m("Error in VibeContext", {
                  code: "E_VIBE_LOAD_CONTEXT_META",
                  cause: e,
                  data: {
                    contextId: this.contextData.meta.id,
                    sessionId: this.contextData.meta.session
                      ? this.contextData.meta.session.radioSessionId
                      : "",
                  },
                });
              }),
          );
        }
        getContextEntitiesData() {
          let {
            meta: { session: e },
          } = this.contextData;
          if (e) {
            let { sequence: t } = e;
            return Promise.resolve(S(t));
          }
          return this.loadContextMeta()
            .then((e) => {
              let {
                session: { sequence: t },
              } = e;
              return S(t);
            })
            .catch((e) => {
              throw new m("Error in VibeContext", {
                code: "E_VIBE_GET_CONTEXT_ENTITIES_DATA",
                cause: e,
                data: {
                  contextId: this.contextData.meta.id,
                  sessionId: this.contextData.meta.session
                    ? this.contextData.meta.session.radioSessionId
                    : "",
                },
              });
            });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        formatContextError(e, t, r, a) {
          return a
            ? new m(e, {
                code: t,
                cause: r,
                data: {
                  contextId: a.meta.id,
                  sessionId: a.meta.session
                    ? a.meta.session.radioSessionId
                    : "",
                },
              })
            : new m(e, { code: t, cause: r });
        }
        storeFeedbacksForSending(e) {
          if (e) {
            let t = Array.isArray(e) ? e : [e];
            this.feedbackForSending.push(...t);
          }
        }
        getFeedbacksForSending() {
          var e;
          if (
            !(null === (e = this.variables) || void 0 === e
              ? void 0
              : e.sendFeedbackToSessionTracks)
          )
            return null;
          let t = this.feedbackForSending;
          return (this.feedbackForSending = []), t;
        }
        sendFeedbackOnMoveForward(e, t) {
          var r;
          let a;
          return (
            (
              null === (r = this.variables) || void 0 === r
                ? void 0
                : r.sendFeedbackToSessionTracks
            )
              ? ((a = Promise.resolve()),
                this.storeFeedbacksForSending(
                  this.generateFeedbackForTracks(e.state.queueState, t),
                ))
              : (a = this.sendFeedback(
                  e.state.playerState,
                  e.state.queueState,
                  t,
                )),
            a
          );
        }
        onAutoMoveForward(e) {
          return this.sendFeedbackOnMoveForward(e, c.C.TRACK_FINISHED).then(
            () => {
              if (!this.contextData.meta.session)
                return Promise.reject(
                  this.formatContextError(
                    "Error in VibeContext",
                    "E_NO_SESSION",
                    void 0,
                  ),
                );
              let {
                  meta: { session: t },
                  aliceExperiments: r,
                  djData: a,
                  useIchwill: i,
                } = this.contextData,
                { index: s, entityList: n } = e.state.queueState,
                o = s.value === n.value.length - 2,
                c = s.value === n.value.length - 1,
                l = b(
                  e.state.queueState.entityList.value,
                  e.state.queueState.index.value,
                );
              if (!o && !c) return Promise.resolve();
              let u = this.getFeedbacksForSending(),
                d = this.rotorResource
                  .sessionTracks({
                    radioSessionId: t.radioSessionId,
                    queue: l,
                    aliceExperiments: r,
                    djData: a,
                    useIchwill: i,
                    feedbacks: u || void 0,
                  })
                  .then((t) => {
                    this.contextData.meta.sessionTracks = t;
                    let { sequence: r } = t,
                      a = S(r);
                    e.append(a), (this.availableActions.moveForward.value = !0);
                  });
              return o
                ? (d.catch((e) => {
                    this.storeFeedbacksForSending(u),
                      this.logger.error(
                        this.formatContextError(
                          "Error in VibeContext",
                          "E_AUTO_MOVE_FORWARD",
                          e,
                          this.contextData,
                        ),
                      );
                  }),
                  Promise.resolve())
                : d.catch(
                    (e) => (
                      this.storeFeedbacksForSending(u),
                      Promise.reject(
                        this.formatContextError(
                          "Error in VibeContext",
                          "E_AUTO_MOVE_FORWARD",
                          e,
                          this.contextData,
                        ),
                      )
                    ),
                  );
            },
          );
        }
        onMoveForward(e) {
          return this.sendFeedbackOnMoveForward(e, c.C.SKIP).then(() => {
            if (!this.contextData.meta.session)
              return Promise.reject(
                this.formatContextError(
                  "Error in VibeContext",
                  "E_NO_SESSION",
                  void 0,
                ),
              );
            let {
                meta: { session: t },
                aliceExperiments: r,
                djData: a,
                useIchwill: i,
              } = this.contextData,
              { index: s, entityList: n } = e.state.queueState,
              o = b(
                e.state.queueState.entityList.value,
                e.state.queueState.index.value,
              ),
              c = this.getFeedbacksForSending();
            return this.rotorResource
              .sessionTracks({
                radioSessionId: t.radioSessionId,
                queue: o,
                aliceExperiments: r,
                djData: a,
                useIchwill: i,
                feedbacks: c || void 0,
              })
              .then((t) => {
                this.contextData.meta.sessionTracks = t;
                let { sequence: r } = t,
                  a = S(r),
                  i = [];
                for (let e = s.value + 2; e < n.value.length; e++) i.push(e);
                (0, d.dC)(() => {
                  e.remove(i), e.append(a);
                });
              })
              .catch(
                (e) => (
                  this.storeFeedbacksForSending(c),
                  Promise.reject(
                    this.formatContextError(
                      "Error in VibeContext",
                      "E_AUTO_MOVE_FORWARD",
                      e,
                      this.contextData,
                    ),
                  )
                ),
              );
          });
        }
        generateFeedbackForTracks(e, t) {
          let r = this.generateFeedback(e, t),
            a = null;
          if (r) {
            var i;
            a = { batchId: r.batchId, from: r.event.from, event: r.event };
            let s =
              null === (i = e.currentEntity.value) || void 0 === i
                ? void 0
                : i.entity.data.meta;
            if (t === c.C.TRACK_FINISHED && k(s)) {
              let e = s.durationMs / 1e3,
                t = e % 1 == 0 ? e : Number(e.toFixed(3));
              a.event.trackLengthSeconds = t;
            }
          }
          return a;
        }
        generateFeedback(e, t) {
          let r = null;
          if (!this.contextData.meta.session) return r;
          let {
              meta: { session: a, sessionTracks: i },
            } = this.contextData,
            s = (function (e, t, r) {
              let a = e.currentEntity.value,
                i = { timestamp: C(), type: t, from: r };
              if (a) {
                let { entity: e } = a;
                (i.trackId = T(e)),
                  (i.totalPlayedSeconds = e.totalPlayedSeconds);
              }
              return i;
            })(e, t, this.from),
            { radioSessionId: n } = a,
            o = i ? i.batchId : a.batchId;
          switch (t) {
            case c.C.RADIO_STARTED:
              r = {
                batchId: o,
                radioSessionId: n,
                event: { type: t, timestamp: s.timestamp, from: s.from },
              };
              break;
            case c.C.TRACK_STARTED:
            case c.C.TRACK_FINISHED:
            case c.C.SKIP:
            case c.C.LIKE:
            case c.C.UNLIKE:
            case c.C.DISLIKE:
            case c.C.UNDISLIKE:
              r = { batchId: o, radioSessionId: n, event: s };
          }
          return r;
        }
        sendFeedback(e, t, r) {
          let a = this.generateFeedback(t, r);
          return this.contextData.meta.session && a
            ? this.rotorResource
                .sessionFeedback(a)
                .then(() => Promise.resolve())
                .catch((e) => {
                  this.logger.error(new w("Feedback error", { cause: e }));
                })
            : (this.logger.error(new w("Feedback error")), Promise.resolve());
        }
        constructor(e) {
          super(),
            (0, o._)(this, "contextData", void 0),
            (0, o._)(this, "rotorResource", void 0),
            (0, o._)(this, "logger", void 0),
            (0, o._)(this, "feedbackForSending", []),
            (0, o._)(this, "isVibeStarted", !1),
            (0, o._)(this, "variables", void 0);
          let {
            data: t,
            rotorResourceConfig: r,
            httpClient: a,
            logger: i,
            variables: s,
          } = e;
          (this.rotorResource = new c.Ud(a, r)),
            (this.logger = i),
            (this.contextData = t),
            (this.from = t.from),
            (this.availableActions.repeat.value = !1),
            (this.availableActions.shuffle.value = !1),
            (this.variables = s);
        }
      }
      class I extends h {
        getContextId() {
          var e, t;
          let r =
            null === (t = this.contextData.meta.albums) || void 0 === t
              ? void 0
              : null === (e = t[0]) || void 0 === e
                ? void 0
                : e.id;
          return r
            ? "".concat(this.contextData.meta.id, ":").concat(r)
            : String(this.contextData.meta.id);
        }
        loadTrailer() {
          return this.tracksResource
            .getTrailer({ trackId: this.getContextId() })
            .then((e) => ((this.contextData.meta = e.track), e))
            .catch((e) => {
              throw new m("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          let e = this.getContextId();
          return this.tracksResource
            .getTracksMeta({ trackIds: [e], withProgress: !0 })
            .then((t) => {
              let r = t[0];
              if (r) return (this.contextData.meta = r), r;
              throw new m("Error in VariousContext. Track not found", {
                code: "E_VARIOUS_LOAD_CONTEXT_META",
                data: { contextId: e },
              });
            })
            .catch((t) => {
              throw new m("Error in VariousContext", {
                code: "E_VARIOUS_LOAD_CONTEXT_META",
                cause: t,
                data: { contextId: e },
              });
            });
        }
        getContextEntitiesData() {
          return this.contextData.trailer
            ? this.loadTrailer().then((e) => [
                { meta: e.track, type: g.A4.SmartPreview },
              ])
            : this.contextData.meta
              ? Promise.resolve([
                  { meta: this.contextData.meta, type: g.A4.Unknown },
                ])
              : this.loadContextMeta().then((e) => [
                  { meta: e, type: g.A4.Unknown },
                ]);
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        constructor(e) {
          super(),
            (0, o._)(this, "contextData", void 0),
            (0, o._)(this, "tracksResource", void 0),
            (0, o._)(this, "variables", void 0);
          let {
            data: t,
            tracksResourceConfig: r,
            httpClient: a,
            variables: i,
          } = e;
          (this.tracksResource = new c.HZ(a, r)),
            (this.contextData = t),
            (this.from = t.from),
            (this.variables = i);
        }
      }
      class O extends f.y {
        constructor(e, { code: t = "E_CONTEXT_FACTORY", ...r } = {}) {
          super(e, { code: t, ...r }),
            (0, o._)(this, "name", "ContextFactoryException"),
            Object.setPrototypeOf(this, O.prototype);
        }
      }
      let L = (e) => [{ type: g.A4.Generative, meta: e }],
        N = "E_GENERATIVE_RESTART_LIMIT";
      class U extends h {
        apply(e) {
          let { hooks: t, playback: r } = e;
          r.state.playerState.status.onChange((e) => {
            this.isCurrentContext &&
              e &&
              (e === l.Xz.PLAYING
                ? (this.isPaused && this.sendFeedback(c.pI.StreamPlay, r),
                  (this.isPaused = !1))
                : e === l.Xz.PAUSED &&
                  (this.sendFeedback(c.pI.StreamPause, r),
                  (this.isPaused = !0)));
          }),
            t.afterError.tap("GenerativeContext", (e) => {
              (e && e instanceof m && e.code === N) ||
                !this.isCurrentContext ||
                this.restart(r);
            });
        }
        loadContextMeta() {
          return this.rotorResource
            .getGenerativeInfo({ stationId: String(this.contextData.meta.id) })
            .then((e) => {
              let t = {
                id: String(this.contextData.meta.id),
                stream: e.stream,
                ...e.data,
              };
              return (this.contextData.meta = t), t;
            })
            .catch((e) => {
              throw new m("Error GenerativeContext", {
                code: "E_GENERATIVE_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          var e;
          return (
            null === (e = this.contextData.meta.stream) || void 0 === e
              ? void 0
              : e.id
          )
            ? Promise.resolve(L(this.contextData.meta))
            : this.loadContextMeta().then((e) => Promise.resolve(L(e)));
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        sendFeedback(e, t) {
          var r;
          this.rotorResource
            .stationFeedback({
              type: e,
              stationId: String(this.contextData.meta.id),
              streamId: String(
                null === (r = this.contextData.meta.stream) || void 0 === r
                  ? void 0
                  : r.id,
              ),
              timestamp: C(),
            })
            .then((e) => {
              e.reload_stream && this.restart(t);
            });
        }
        restart(e) {
          return (
            this.restartsCount >= 5 &&
              e.hooks.afterError.promise(
                new m("Error GenerativeContext", {
                  code: N,
                  data: { contextId: this.contextData.meta.id },
                }),
              ),
            this.restartsCount++,
            this.loadContextMeta().then(() =>
              e.restartContext({
                playAfterRestart: !this.isPaused,
                entitiesData: L(this.contextData.meta),
              }),
            )
          );
        }
        constructor(e) {
          super(),
            (0, o._)(this, "contextData", void 0),
            (0, o._)(this, "rotorResource", void 0),
            (0, o._)(this, "isPaused", !1),
            (0, o._)(this, "restartsCount", 0),
            (0, o._)(this, "variables", void 0);
          let {
            data: t,
            rotorResourceConfig: r,
            httpClient: a,
            variables: i,
          } = e;
          (this.rotorResource = new c.Ud(a, r)),
            (this.contextData = t),
            (this.from = t.from),
            (this.availableActions.repeat.value = !1),
            (this.availableActions.shuffle.value = !1),
            (this.availableActions.moveBackward.value = !1),
            (this.availableActions.moveForward.value = !1),
            (this.variables = i);
        }
      }
      class D {
        create(e) {
          let t = null,
            { data: r } = e;
          try {
            var a, i, n, o, c, l, u, d, h, f, m, g;
            switch (r.type) {
              case s.Album:
                t = new y({
                  data: r,
                  albumResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (a = this.config.resourceTimeoutsConfig) ||
                      void 0 === a
                        ? void 0
                        : a.albumsResource,
                  },
                  httpClient: this.httpClient,
                  variables:
                    null === (i = this.config.contextVariables) || void 0 === i
                      ? void 0
                      : i[s.Album],
                });
                break;
              case s.Playlist:
                t = new _({
                  data: r,
                  usersResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (n = this.config.resourceTimeoutsConfig) ||
                      void 0 === n
                        ? void 0
                        : n.usersResource,
                  },
                  playlistResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (o = this.config.resourceTimeoutsConfig) ||
                      void 0 === o
                        ? void 0
                        : o.playlistResource,
                  },
                  httpClient: this.httpClient,
                  variables:
                    null === (c = this.config.contextVariables) || void 0 === c
                      ? void 0
                      : c[s.Playlist],
                });
                break;
              case s.Artist:
                t = new x({
                  data: r,
                  artistsResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (l = this.config.resourceTimeoutsConfig) ||
                      void 0 === l
                        ? void 0
                        : l.artistsResource,
                  },
                  httpClient: this.httpClient,
                  variables:
                    null === (u = this.config.contextVariables) || void 0 === u
                      ? void 0
                      : u[s.Artist],
                });
                break;
              case s.Vibe:
                t = new A({
                  data: r,
                  rotorResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (d = this.config.resourceTimeoutsConfig) ||
                      void 0 === d
                        ? void 0
                        : d.rotorResource,
                  },
                  httpClient: this.httpClient,
                  logger: this.logger,
                  variables:
                    null === (h = this.config.contextVariables) || void 0 === h
                      ? void 0
                      : h[s.Vibe],
                });
                break;
              case s.Various:
                t = new I({
                  data: r,
                  tracksResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (f = this.config.resourceTimeoutsConfig) ||
                      void 0 === f
                        ? void 0
                        : f.tracksResource,
                  },
                  httpClient: this.httpClient,
                  variables:
                    null === (m = this.config.contextVariables) || void 0 === m
                      ? void 0
                      : m[s.Various],
                });
                break;
              case s.Generative:
                t = new U({
                  data: r,
                  httpClient: this.httpClient,
                  rotorResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                  },
                  variables:
                    null === (g = this.config.contextVariables) || void 0 === g
                      ? void 0
                      : g[s.Generative],
                });
            }
          } catch (e) {
            throw new O("Error while creating context", {
              cause: e,
              data: { type: r.type, meta: r.meta },
            });
          }
          if (null !== t) return t;
          throw new O("Cannot create context with nonexistent type", {
            code: "E_NONEXISTENT_CONTEXT_TYPE",
            data: { type: r.type, meta: r.meta },
          });
        }
        constructor(e) {
          (0, o._)(this, "httpClient", void 0),
            (0, o._)(this, "config", void 0),
            (0, o._)(this, "logger", void 0);
          let { config: t, httpClient: r, logger: a } = e;
          (this.config = t), (this.httpClient = r), (this.logger = a);
        }
      }
      function F(e) {
        return e instanceof y;
      }
      function H(e) {
        return e instanceof A;
      }
      function M(e) {
        return e instanceof I;
      }
      function j(e) {
        return e instanceof _;
      }
      function W(e) {
        return e instanceof U;
      }
      ((i = n || (n = {})).Album = "album"),
        (i.Artist = "artist"),
        (i.Playlist = "playlist"),
        (i.Radio = "radio"),
        (i.Other = "other"),
        (i.Search = "search");
    },
    31841: function (e, t, r) {
      "use strict";
      r.d(t, {
        EE: function () {
          return n;
        },
        A4: function () {
          return s;
        },
        nS: function () {
          return P;
        },
        OX: function () {
          return _;
        },
        YM: function () {
          return x;
        },
      });
      var a,
        i,
        s,
        n,
        o = r(8655),
        c = r(11691),
        l = r(51179);
      ((a = s || (s = {})).Music = "music"),
        (a.VibeTrack = "vibeTrack"),
        (a.Generative = "generative"),
        (a.Unknown = "unknown"),
        (a.SmartPreview = "smartPreview"),
        ((i = n || (n = {})).PLAYING = "playing"),
        (i.NOT_PLAYING = "not-playing");
      let u = (e) =>
          !!(
            "object" == typeof e &&
            e &&
            "streamProgress" in e &&
            "object" == typeof e.streamProgress &&
            e.streamProgress &&
            "endPositionSec" in e.streamProgress &&
            "number" == typeof e.streamProgress.endPositionSec
          ),
        d = (e) =>
          "object" == typeof e &&
          e &&
          "rememberPosition" in e &&
          "boolean" == typeof e.rememberPosition;
      class h {
        set mediaSource(e) {
          this.getFileInfoResponse = e;
        }
        get mediaSource() {
          return this.getFileInfoResponse;
        }
        set playId(e) {
          this.entityPlayId = e;
        }
        get playId() {
          return this.entityPlayId;
        }
        set addTracksToPlayerTime(e) {
          this.entityAddTracksToPlayerTime = e;
        }
        get addTracksToPlayerTime() {
          return this.entityAddTracksToPlayerTime;
        }
        get totalPlayedSeconds() {
          return (function (e) {
            let t,
              r,
              a = 0,
              i = [];
            if (0 !== e.length) {
              for (let a of (function (e) {
                let t = [];
                for (; 0 !== e.length; ) {
                  let r = e.shift();
                  if (r && r.stage === n.PLAYING) {
                    let e = t[t.length - 1];
                    (e && e.stage !== n.NOT_PLAYING) || t.push(r);
                  } else if (r && r.stage === n.NOT_PLAYING) {
                    let e = t[t.length - 1];
                    e && e.stage === n.PLAYING && t.push(r);
                  }
                }
                let r = t[t.length - 1];
                return (
                  r &&
                    r.stage === n.PLAYING &&
                    t.push({
                      stage: n.NOT_PLAYING,
                      perfNow: performance.now(),
                      ts: Date.now(),
                    }),
                  t
                );
              })(e))
                a.stage === n.PLAYING ? (t = a.perfNow) : (r = a.perfNow),
                  t && r && (i.push(r - t), (t = void 0), (r = void 0));
              for (let e of i) a += e;
              return Math.round((a / 1e3 + Number.EPSILON) * 1e3) / 1e3;
            }
            return a;
          })([...this.entityTimeStagesOfPlayback]);
        }
        get timeStagesOfPlayback() {
          return this.entityTimeStagesOfPlayback;
        }
        saveTimeStageOfPlayback(e) {
          let t = {
            stage: e.stage,
            perfNow: performance.now(),
            ts: Date.now(),
          };
          e.reason && (t.reason = e.reason),
            this.entityTimeStagesOfPlayback.push(t);
        }
        clearTimeStagesOfPlayback() {
          this.entityTimeStagesOfPlayback = [];
        }
        get data() {
          return this.entityData;
        }
        canBePlayed(e) {
          let { entityChangeMethod: t, index: r } = e,
            a =
              !(
                t === c.Zp.SET_INDEX ||
                (t === c.Zp.PLAY_CONTEXT && void 0 !== r)
              ) && this.likeStore.isTrackDisliked(this.entityData.meta.id),
            i = !!(
              "available" in this.entityData.meta &&
              this.entityData.meta.available
            );
          return !a && i;
        }
        get startPosition() {
          let e = this.entityData.meta;
          if (d(e) && e.rememberPosition) {
            if (u(e)) {
              let { endPositionSec: t, everFinished: r } = e.streamProgress;
              if (!r)
                return Number.isFinite(this.currentStartPosition)
                  ? this.currentStartPosition
                  : t;
            }
            return this.currentStartPosition;
          }
          return null;
        }
        set startPosition(e) {
          let t = this.entityData.meta;
          d(t) && t.rememberPosition && (this.currentStartPosition = e);
        }
        constructor(e) {
          (0, o._)(this, "entityData", void 0),
            (0, o._)(this, "likeStore", void 0),
            (0, o._)(this, "entityPlayId", ""),
            (0, o._)(this, "entityAddTracksToPlayerTime", ""),
            (0, o._)(this, "entityTimeStagesOfPlayback", []),
            (0, o._)(this, "mediaElementErrorReloadCounter", 0),
            (0, o._)(this, "getFileInfoResponse", null),
            (0, o._)(this, "currentStartPosition", null),
            (this.entityData = e.data),
            (this.likeStore = e.likeStore);
        }
      }
      class f extends h {}
      class m extends h {}
      class g extends h {
        canBePlayed() {
          return !1;
        }
      }
      var p = r(37810);
      class y extends p.y {
        constructor(e, { code: t = "E_ENTITY_FACTORY", ...r } = {}) {
          super(e, { code: t, ...r }),
            (0, o._)(this, "name", "EntityFactoryException"),
            Object.setPrototypeOf(this, y.prototype);
        }
      }
      class v extends h {
        canBePlayed() {
          return !0;
        }
      }
      class E extends h {}
      class P {
        create(e) {
          let t = null,
            { data: r } = e;
          try {
            switch (r.type) {
              case s.Music:
                t = new f({ data: r, likeStore: this.likeStore });
                break;
              case s.VibeTrack:
                t = new m({ data: r, likeStore: this.likeStore });
                break;
              case s.Generative:
                t = new v({ data: r, likeStore: this.likeStore });
                break;
              case s.SmartPreview:
                t = new E({ data: r, likeStore: this.likeStore });
                break;
              case s.Unknown:
                r.meta.type,
                  l.Vc.MUSIC,
                  (t = new f({
                    data: { ...r, type: s.Music },
                    likeStore: this.likeStore,
                  }));
                break;
              case c.RX.Unloaded:
                t = new g({ data: r, likeStore: this.likeStore });
            }
          } catch (e) {
            throw new y("Error while creating entity", {
              cause: e,
              data: { type: r.type, meta: r.meta },
            });
          }
          if (null !== t) return t;
          throw new y("Cannot create entities with nonexistent type", {
            code: "E_NONEXISTENT_ENTITY_TYPE",
            data: { type: r.type, meta: r.meta },
          });
        }
        constructor(e) {
          (0, o._)(this, "likeStore", void 0), (this.likeStore = e.likeStore);
        }
      }
      function _(e) {
        return e instanceof v;
      }
      function x(e) {
        return e instanceof E;
      }
    },
    15419: function (e, t, r) {
      "use strict";
      r.d(t, {
        KX: function () {
          return s.KX;
        },
        Xz: function () {
          return s.Xz;
        },
        RX: function () {
          return s.RX;
        },
        SP: function () {
          return c;
        },
        $7: function () {
          return i;
        },
      });
      var a = r(8655);
      class i {
        get state() {
          return this.playbackController.getPlayback().state;
        }
        getState(e) {
          return this.playbackController.getPlayback(e).state;
        }
        getSource(e) {
          return this.playbackController.getPlayback(e).source;
        }
        playContext(e, t) {
          let r = this.playbackController.getPlayback(t);
          try {
            let { contextData: t } = e,
              a = this.contextFactory.create({ data: t });
            return r
              .playContext({
                context: a,
                entitiesData: e.entitiesData,
                loadContextMeta: e.loadContextMeta,
                queueParams: e.queueParams,
              })
              .catch((e) => {
                r.hooks.afterError.promise(e);
              });
          } catch (e) {
            return r.hooks.afterError.promise(e), Promise.resolve();
          }
        }
        setContext(e, t) {
          let r = this.playbackController.getPlayback(t);
          try {
            let { contextData: t } = e,
              a = this.contextFactory.create({ data: t });
            return r
              .setContext({
                context: a,
                entitiesData: e.entitiesData,
                loadContextMeta: e.loadContextMeta,
                queueParams: e.queueParams,
              })
              .catch((e) => {
                r.hooks.afterError.promise(e);
              });
          } catch (e) {
            return r.hooks.afterError.promise(e), Promise.resolve();
          }
        }
        restartContext(e, t) {
          let r = this.playbackController.getPlayback(t);
          return r
            .restartContext({
              playAfterRestart: e.playAfterRestart,
              entitiesData: e.entitiesData,
              queueParams: e.queueParams,
            })
            .catch((e) => {
              r.hooks.afterError.promise(e);
            });
        }
        play(e) {
          let t = this.playbackController.getPlayback(e);
          return t.play().catch((e) => {
            t.hooks.afterError.promise(e);
          });
        }
        stop(e) {
          let t = this.playbackController.getPlayback(e);
          return t.stop().catch((e) => {
            t.hooks.afterError.promise(e);
          });
        }
        pause(e) {
          let t = this.playbackController.getPlayback(e);
          return t.pause().catch((e) => {
            t.hooks.afterError.promise(e);
          });
        }
        resume(e) {
          let t = this.playbackController.getPlayback(e);
          return t.resume().catch((e) => {
            t.hooks.afterError.promise(e);
          });
        }
        setProgress(e, t) {
          let r = this.playbackController.getPlayback(t);
          return r
            .setProgress(e)
            .catch((e) => (r.hooks.afterError.promise(e), 0));
        }
        setVolume(e, t) {
          let r = this.playbackController.getPlayback(t);
          return r
            .setVolume(e)
            .catch((e) => (r.hooks.afterError.promise(e), 0));
        }
        setSpeed(e, t) {
          let r = this.playbackController.getPlayback(t);
          return r.setSpeed(e).catch((e) => (r.hooks.afterError.promise(e), 1));
        }
        slideForward(e, t) {
          let r = this.playbackController.getPlayback(t);
          return r
            .slideForward(e)
            .catch((e) => (r.hooks.afterError.promise(e), 0));
        }
        slideBackward(e, t) {
          let r = this.playbackController.getPlayback(t);
          return r
            .slideBackward(e)
            .catch((e) => (r.hooks.afterError.promise(e), 0));
        }
        increaseVolume(e, t) {
          let r = this.playbackController.getPlayback(t);
          return r
            .increaseVolume(e)
            .catch((e) => (r.hooks.afterError.promise(e), 0));
        }
        decreaseVolume(e, t) {
          let r = this.playbackController.getPlayback(t);
          return r
            .decreaseVolume(e)
            .catch((e) => (r.hooks.afterError.promise(e), 0));
        }
        moveForward(e) {
          let t = this.playbackController.getPlayback(e);
          return t.moveForward().catch((e) => {
            t.hooks.afterError.promise(e);
          });
        }
        moveBackward(e) {
          let t = this.playbackController.getPlayback(e);
          return t.moveBackward().catch((e) => {
            t.hooks.afterError.promise(e);
          });
        }
        setEntityByIndex(e, t) {
          let r = this.playbackController.getPlayback(t);
          return r.setEntityByIndex(e).catch((e) => {
            r.hooks.afterError.promise(e);
          });
        }
        togglePause(e) {
          let t = this.playbackController.getPlayback(e);
          return t.togglePause().catch((e) => {
            t.hooks.afterError.promise(e);
          });
        }
        toggleShuffle(e) {
          let t = this.playbackController.getPlayback(e);
          try {
            t.toggleShuffle();
          } catch (e) {
            t.hooks.afterError.promise(e);
          }
        }
        setShuffle(e, t) {
          let r = this.playbackController.getPlayback(t);
          try {
            r.setShuffle(e);
          } catch (e) {
            r.hooks.afterError.promise(e);
          }
        }
        bindPlayer(e) {
          this.playbackController.getPlayback(e).bindPlayer();
        }
        unbindPlayer(e) {
          this.playbackController.getPlayback(e).unbindPlayer();
        }
        setRepeatMode(e, t) {
          let r = this.playbackController.getPlayback(t);
          try {
            this.playbackController.getPlayback(t).setRepeatMode(e);
          } catch (e) {
            r.hooks.afterError.promise(e);
          }
        }
        remove(e, t) {
          this.playbackController.getPlayback(t).remove(e);
        }
        inject(e, t, r) {
          this.playbackController.getPlayback(r).inject(e, t);
        }
        constructor(e) {
          (0, a._)(this, "contextFactory", void 0),
            (0, a._)(this, "playbackController", void 0),
            (this.contextFactory = e.contextFactory),
            (this.playbackController = e.playbackController);
        }
      }
      var s = r(11691),
        n = r(9755);
      function o(e) {
        let { playback: t, plugins: r = [] } = e;
        for (let e of r) e.apply({ playback: t, hooks: t.hooks });
      }
      class c {
        afterPlayHandler(e) {
          return (this.activePlayback = e), Promise.resolve();
        }
        beforePlayHandler(e) {
          return this.activePlayback && this.activePlayback !== e
            ? this.activePlayback.pause()
            : Promise.resolve();
        }
        getPlayback(e) {
          if (e) {
            let t = this.playbacks.get(e);
            if (t) return t;
          }
          return this.mainPlayback;
        }
        createPlayback(e, t) {
          if (!this.playbacks.has(e)) {
            let r = new s.Vb({
              entityFactory: t.entityFactory,
              mediaProvider: t.mediaProvider,
              entityProvider: t.entityProvider,
              audioCore: t.audioCore,
              windowPaginationConfig: t.windowPaginationConfig,
              hooks: (0, n.H)(),
              config: t.config,
            });
            this.playbacks.set(e, r),
              r.hooks.afterMediaStartPlaying.tapPromise(
                "MusicPlaybackController",
                () => this.afterPlayHandler(r),
              ),
              r.hooks.beforeMediaStartPlaying.tapPromise(
                "MusicPlaybackController",
                () => this.beforePlayHandler(r),
              ),
              r.hooks.afterMediaResume.tapPromise(
                "MusicPlaybackController",
                () => this.afterPlayHandler(r),
              ),
              r.hooks.beforeMediaResume.tapPromise(
                "MusicPlaybackController",
                () => this.beforePlayHandler(r),
              ),
              o({ plugins: t.plugins, playback: r });
          }
        }
        constructor(e) {
          (0, a._)(this, "mainPlayback", void 0),
            (0, a._)(this, "activePlayback", null),
            (0, a._)(this, "playbacks", void 0),
            (this.mainPlayback = new s.Vb({
              entityFactory: e.entityFactory,
              audioCore: e.audioCore,
              mediaProvider: e.mediaProvider,
              entityProvider: e.entityProvider,
              windowPaginationConfig: e.windowPaginationConfig,
              hooks: (0, n.H)(),
              config: e.config,
            })),
            o({ plugins: e.plugins, playback: this.mainPlayback }),
            this.mainPlayback.hooks.afterMediaStartPlaying.tapPromise(
              "MusicPlaybackController",
              () => this.afterPlayHandler(this.mainPlayback),
            ),
            this.mainPlayback.hooks.beforeMediaStartPlaying.tapPromise(
              "MusicPlaybackController",
              () => this.beforePlayHandler(this.mainPlayback),
            ),
            this.mainPlayback.hooks.afterMediaResume.tapPromise(
              "MusicPlaybackController",
              () => this.afterPlayHandler(this.mainPlayback),
            ),
            this.mainPlayback.hooks.beforeMediaResume.tapPromise(
              "MusicPlaybackController",
              () => this.beforePlayHandler(this.mainPlayback),
            ),
            (this.playbacks = new Map());
        }
      }
    },
  },
]);

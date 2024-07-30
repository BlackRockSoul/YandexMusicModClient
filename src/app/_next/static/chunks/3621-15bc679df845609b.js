"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3621],
  {
    47945: function (e, t, n) {
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(69124),
        o = n.n(r);
    },
    1989: function (e, t, n) {
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(74735),
        o = n.n(r);
    },
    78692: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(66587);
      let r = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    39818: function (e, t, n) {
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(66587),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    36811: function (e, t) {
      let n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DOMAttributeNames: function () {
            return r;
          },
          default: function () {
            return i;
          },
          isEqualNode: function () {
            return l;
          },
        });
      let r = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule",
      };
      function o(e) {
        let { type: t, props: n } = e,
          o = document.createElement(t);
        for (let e in n) {
          if (
            !n.hasOwnProperty(e) ||
            "children" === e ||
            "dangerouslySetInnerHTML" === e ||
            void 0 === n[e]
          )
            continue;
          let l = r[e] || e.toLowerCase();
          "script" === t && ("async" === l || "defer" === l || "noModule" === l)
            ? (o[l] = !!n[e])
            : o.setAttribute(l, n[e]);
        }
        let { children: l, dangerouslySetInnerHTML: i } = n;
        return (
          i
            ? (o.innerHTML = i.__html || "")
            : l &&
              (o.textContent =
                "string" == typeof l ? l : Array.isArray(l) ? l.join("") : ""),
          o
        );
      }
      function l(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          let n = t.getAttribute("nonce");
          if (n && !e.getAttribute("nonce")) {
            let r = t.cloneNode(!0);
            return (
              r.setAttribute("nonce", ""),
              (r.nonce = n),
              n === e.nonce && e.isEqualNode(r)
            );
          }
        }
        return e.isEqualNode(t);
      }
      function i() {
        return {
          mountedInstances: new Set(),
          updateHead: (e) => {
            let t = {};
            e.forEach((e) => {
              if ("link" === e.type && e.props["data-optimized-fonts"]) {
                if (
                  document.querySelector(
                    'style[data-href="' + e.props["data-href"] + '"]',
                  )
                )
                  return;
                (e.props.href = e.props["data-href"]),
                  (e.props["data-href"] = void 0);
              }
              let n = t[e.type] || [];
              n.push(e), (t[e.type] = n);
            });
            let r = t.title ? t.title[0] : null,
              o = "";
            if (r) {
              let { children: e } = r.props;
              o = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : "";
            }
            o !== document.title && (document.title = o),
              ["meta", "base", "link", "style", "script"].forEach((e) => {
                n(e, t[e] || []);
              });
          },
        };
      }
      (n = (e, t) => {
        let n = document.getElementsByTagName("head")[0],
          r = n.querySelector("meta[name=next-head-count]"),
          i = Number(r.content),
          u = [];
        for (
          let t = 0, n = r.previousElementSibling;
          t < i;
          t++, n = (null == n ? void 0 : n.previousElementSibling) || null
        ) {
          var a;
          (null == n
            ? void 0
            : null == (a = n.tagName)
              ? void 0
              : a.toLowerCase()) === e && u.push(n);
        }
        let s = t.map(o).filter((e) => {
          for (let t = 0, n = u.length; t < n; t++)
            if (l(u[t], e)) return u.splice(t, 1), !1;
          return !0;
        });
        u.forEach((e) => {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
        }),
          s.forEach((e) => n.insertBefore(e, r)),
          (r.content = (i - u.length + s.length).toString());
      }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    69124: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let r = n(17830),
        o = n(9753),
        l = r._(n(98639)),
        i = n(65189),
        u = n(51493),
        a = n(89612),
        s = n(32988),
        c = n(78692),
        d = n(48248),
        f = n(89035),
        p = n(15093),
        h = n(39818),
        m = n(52030),
        g = n(48034),
        v = new Set();
      function y(e, t, n, r, o, l) {
        if ("undefined" != typeof window && (l || (0, u.isLocalURL)(t))) {
          if (!r.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                  ? e.locale
                  : void 0);
            if (v.has(o)) return;
            v.add(o);
          }
          (async () => (l ? e.prefetch(t, o) : e.prefetch(t, n, r)))().catch(
            (e) => {},
          );
        }
      }
      function x(e) {
        return "string" == typeof e ? e : (0, a.formatUrl)(e);
      }
      let b = l.default.forwardRef(function (e, t) {
        let n, r;
        let {
          href: a,
          as: v,
          children: b,
          prefetch: E = null,
          passHref: w,
          replace: T,
          shallow: I,
          scroll: S,
          locale: C,
          onClick: R,
          onMouseEnter: P,
          onTouchStart: _,
          legacyBehavior: O = !1,
          ...H
        } = e;
        (n = b),
          O &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, o.jsx)("a", { children: n }));
        let k = l.default.useContext(d.RouterContext),
          M = l.default.useContext(f.AppRouterContext),
          z = null != k ? k : M,
          L = !k,
          j = !1 !== E,
          B = null === E ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: N, as: A } = l.default.useMemo(() => {
            if (!k) {
              let e = x(a);
              return { href: e, as: v ? x(v) : e };
            }
            let [e, t] = (0, i.resolveHref)(k, a, !0);
            return { href: e, as: v ? (0, i.resolveHref)(k, v) : t || e };
          }, [k, a, v]),
          W = l.default.useRef(N),
          F = l.default.useRef(A);
        O && (r = l.default.Children.only(n));
        let U = O ? r && "object" == typeof r && r.ref : t,
          [D, Z, q] = (0, p.useIntersection)({ rootMargin: "200px" }),
          V = l.default.useCallback(
            (e) => {
              (F.current !== A || W.current !== N) &&
                (q(), (F.current = A), (W.current = N)),
                D(e),
                U &&
                  ("function" == typeof U
                    ? U(e)
                    : "object" == typeof U && (U.current = e));
            },
            [A, U, N, q, D],
          );
        l.default.useEffect(() => {
          z && Z && j && y(z, N, A, { locale: C }, { kind: B }, L);
        }, [A, N, Z, C, j, null == k ? void 0 : k.locale, z, L, B]);
        let G = {
          ref: V,
          onClick(e) {
            O || "function" != typeof R || R(e),
              O &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              z &&
                !e.defaultPrevented &&
                (function (e, t, n, r, o, i, a, s, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, u.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == a || a;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](n, r, {
                          shallow: i,
                          locale: s,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](r || n, { scroll: e });
                  };
                  c ? l.default.startTransition(f) : f();
                })(e, z, N, A, T, I, S, C, L);
          },
          onMouseEnter(e) {
            O || "function" != typeof P || P(e),
              O &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              z &&
                (j || !L) &&
                y(
                  z,
                  N,
                  A,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: B },
                  L,
                );
          },
          onTouchStart: function (e) {
            O || "function" != typeof _ || _(e),
              O &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              z &&
                (j || !L) &&
                y(
                  z,
                  N,
                  A,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: B },
                  L,
                );
          },
        };
        if ((0, s.isAbsoluteUrl)(A)) G.href = A;
        else if (!O || w || ("a" === r.type && !("href" in r.props))) {
          let e = void 0 !== C ? C : null == k ? void 0 : k.locale,
            t =
              (null == k ? void 0 : k.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                A,
                e,
                null == k ? void 0 : k.locales,
                null == k ? void 0 : k.domainLocales,
              );
          G.href =
            t ||
            (0, m.addBasePath)(
              (0, c.addLocale)(A, e, null == k ? void 0 : k.defaultLocale),
            );
        }
        return O
          ? l.default.cloneElement(r, G)
          : (0, o.jsx)("a", { ...H, ...G, children: n });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    40222: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    65189: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let r = n(69126),
        o = n(89612),
        l = n(22162),
        i = n(32988),
        u = n(66587),
        a = n(51493),
        s = n(28979),
        c = n(91337);
      function d(e, t, n) {
        let d;
        let f = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
          p = f.match(/^[a-zA-Z]{1,}:\/\//),
          h = p ? f.slice(p[0].length) : f;
        if ((h.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.",
          );
          let t = (0, i.normalizeRepeatedSlashes)(h);
          f = (p ? p[0] : "") + t;
        }
        if (!(0, a.isLocalURL)(f)) return n ? [f] : f;
        try {
          d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, u.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, s.isDynamicRoute)(e.pathname) && e.searchParams && n) {
            let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
              { result: i, params: u } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                n,
              );
            i &&
              (t = (0, o.formatWithValidation)({
                pathname: i,
                hash: e.hash,
                query: (0, l.omit)(n, u),
              }));
          }
          let i =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return n ? [i, t || i] : i;
        } catch (e) {
          return n ? [f] : f;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    74735: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return x;
          },
          handleClientScriptLoad: function () {
            return g;
          },
          initScriptLoader: function () {
            return v;
          },
        });
      let r = n(17830),
        o = n(91186),
        l = n(9753),
        i = r._(n(773)),
        u = o._(n(98639)),
        a = n(92015),
        s = n(36811),
        c = n(40222),
        d = new Map(),
        f = new Set(),
        p = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ],
        h = (e) => {
          if (i.default.preinit) {
            e.forEach((e) => {
              i.default.preinit(e, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let t = document.head;
            e.forEach((e) => {
              let n = document.createElement("link");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                (n.href = e),
                t.appendChild(n);
            });
          }
        },
        m = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: o = null,
              dangerouslySetInnerHTML: l,
              children: i = "",
              strategy: u = "afterInteractive",
              onError: a,
              stylesheets: c,
            } = e,
            m = n || t;
          if (m && f.has(m)) return;
          if (d.has(t)) {
            f.add(m), d.get(t).then(r, a);
            return;
          }
          let g = () => {
              o && o(), f.add(m);
            },
            v = document.createElement("script"),
            y = new Promise((e, t) => {
              v.addEventListener("load", function (t) {
                e(), r && r.call(this, t), g();
              }),
                v.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              a && a(e);
            });
          for (let [n, r] of (l
            ? ((v.innerHTML = l.__html || ""), g())
            : i
              ? ((v.textContent =
                  "string" == typeof i
                    ? i
                    : Array.isArray(i)
                      ? i.join("")
                      : ""),
                g())
              : t && ((v.src = t), d.set(t, y)),
          Object.entries(e))) {
            if (void 0 === r || p.includes(n)) continue;
            let e = s.DOMAttributeNames[n] || n.toLowerCase();
            v.setAttribute(e, r);
          }
          "worker" === u && v.setAttribute("type", "text/partytown"),
            v.setAttribute("data-nscript", u),
            c && h(c),
            document.body.appendChild(v);
        };
      function g(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => m(e));
            })
          : m(e);
      }
      function v(e) {
        e.forEach(g),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function y(e) {
        let {
            id: t,
            src: n = "",
            onLoad: r = () => {},
            onReady: o = null,
            strategy: s = "afterInteractive",
            onError: d,
            stylesheets: p,
            ...h
          } = e,
          {
            updateScripts: g,
            scripts: v,
            getIsSsr: y,
            appDir: x,
            nonce: b,
          } = (0, u.useContext)(a.HeadManagerContext),
          E = (0, u.useRef)(!1);
        (0, u.useEffect)(() => {
          let e = t || n;
          E.current || (o && e && f.has(e) && o(), (E.current = !0));
        }, [o, t, n]);
        let w = (0, u.useRef)(!1);
        if (
          ((0, u.useEffect)(() => {
            !w.current &&
              ("afterInteractive" === s
                ? m(e)
                : "lazyOnload" === s &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => m(e))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => m(e));
                      })),
              (w.current = !0));
          }, [e, s]),
          ("beforeInteractive" === s || "worker" === s) &&
            (g
              ? ((v[s] = (v[s] || []).concat([
                  { id: t, src: n, onLoad: r, onReady: o, onError: d, ...h },
                ])),
                g(v))
              : y && y()
                ? f.add(t || n)
                : y && !y() && m(e)),
          x)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                i.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === s)
          )
            return n
              ? (i.default.preload(
                  n,
                  h.integrity
                    ? { as: "script", integrity: h.integrity, nonce: b }
                    : { as: "script", nonce: b },
                ),
                (0, l.jsx)("script", {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([n, { ...h, id: t }]) +
                      ")",
                  },
                }))
              : (h.dangerouslySetInnerHTML &&
                  ((h.children = h.dangerouslySetInnerHTML.__html),
                  delete h.dangerouslySetInnerHTML),
                (0, l.jsx)("script", {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...h, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === s &&
            n &&
            i.default.preload(
              n,
              h.integrity
                ? { as: "script", integrity: h.integrity, nonce: b }
                : { as: "script", nonce: b },
            );
        }
        return null;
      }
      Object.defineProperty(y, "__nextScript", { value: !0 });
      let x = y;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    15093: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(98639),
        o = n(40222),
        l = "function" == typeof IntersectionObserver,
        i = new Map(),
        u = [];
      function a(e) {
        let { rootRef: t, rootMargin: n, disabled: a } = e,
          s = a || !l,
          [c, d] = (0, r.useState)(!1),
          f = (0, r.useRef)(null),
          p = (0, r.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (l) {
              if (s || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: o,
                    elements: l,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = u.find(
                        (e) => e.root === n.root && e.margin === n.margin,
                      );
                    if (r && (t = i.get(r))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: o,
                      }),
                      u.push(n),
                      i.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    l.set(e, t),
                    o.observe(e),
                    function () {
                      if ((l.delete(e), o.unobserve(e), 0 === l.size)) {
                        o.disconnect(), i.delete(r);
                        let e = u.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin,
                        );
                        e > -1 && u.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [s, n, t, c, f.current]),
          [
            p,
            c,
            (0, r.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    15758: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        r = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return n.test(e) ? e.replace(r, "\\$&") : e;
      }
    },
    48248: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(17830)._(n(98639)).default.createContext(null);
    },
    89612: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          formatUrl: function () {
            return l;
          },
          formatWithValidation: function () {
            return u;
          },
          urlObjectKeys: function () {
            return i;
          },
        });
      let r = n(91186)._(n(69126)),
        o = /https?|ftp|gopher|file/;
      function l(e) {
        let { auth: t, hostname: n } = e,
          l = e.protocol || "",
          i = e.pathname || "",
          u = e.hash || "",
          a = e.query || "",
          s = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (s = t + e.host)
            : n &&
              ((s = t + (~n.indexOf(":") ? "[" + n + "]" : n)),
              e.port && (s += ":" + e.port)),
          a &&
            "object" == typeof a &&
            (a = String(r.urlQueryToSearchParams(a)));
        let c = e.search || (a && "?" + a) || "";
        return (
          l && !l.endsWith(":") && (l += ":"),
          e.slashes || ((!l || o.test(l)) && !1 !== s)
            ? ((s = "//" + (s || "")), i && "/" !== i[0] && (i = "/" + i))
            : s || (s = ""),
          u && "#" !== u[0] && (u = "#" + u),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            l +
            s +
            (i = i.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            u
        );
      }
      let i = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function u(e) {
        return l(e);
      }
    },
    28979: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let r = n(41613),
        o = n(94672);
    },
    91337: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(80732),
        o = n(27222);
      function l(e, t, n) {
        let l = "",
          i = (0, o.getRouteRegex)(e),
          u = i.groups,
          a = (t !== e ? (0, r.getRouteMatcher)(i)(t) : "") || n;
        l = e;
        let s = Object.keys(u);
        return (
          s.every((e) => {
            let t = a[e] || "",
              { repeat: n, optional: r } = u[e],
              o = "[" + (n ? "..." : "") + e + "]";
            return (
              r && (o = (t ? "" : "/") + "[" + o + "]"),
              n && !Array.isArray(t) && (t = [t]),
              (r || e in a) &&
                (l =
                  l.replace(
                    o,
                    n
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t),
                  ) || "/")
            );
          }) || (l = ""),
          { params: s, result: l }
        );
      }
    },
    94672: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(29922),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function l(e) {
        return (
          (0, r.isInterceptionRouteAppPath)(e) &&
            (e = (0, r.extractInterceptionRouteInformation)(
              e,
            ).interceptedRoute),
          o.test(e)
        );
      }
    },
    51493: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(32988),
        o = n(70144);
      function l(e) {
        if (!(0, r.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, r.getLocationOrigin)(),
            n = new URL(e, t);
          return n.origin === t && (0, o.hasBasePath)(n.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    22162: function (e, t) {
      function n(e, t) {
        let n = {};
        return (
          Object.keys(e).forEach((r) => {
            t.includes(r) || (n[r] = e[r]);
          }),
          n
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    69126: function (e, t) {
      function n(e) {
        let t = {};
        return (
          e.forEach((e, n) => {
            void 0 === t[n]
              ? (t[n] = e)
              : Array.isArray(t[n])
                ? t[n].push(e)
                : (t[n] = [t[n], e]);
          }),
          t
        );
      }
      function r(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [n, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(n, r(e)))
              : t.set(n, r(o));
          }),
          t
        );
      }
      function l(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return (
          n.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, n) => e.append(n, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          assign: function () {
            return l;
          },
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    80732: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(32988);
      function o(e) {
        let { re: t, groups: n } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let l = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new r.DecodeError("failed to decode param");
              }
            },
            i = {};
          return (
            Object.keys(n).forEach((e) => {
              let t = n[e],
                r = o[t.pos];
              void 0 !== r &&
                (i[e] = ~r.indexOf("/")
                  ? r.split("/").map((e) => l(e))
                  : t.repeat
                    ? [l(r)]
                    : l(r));
            }),
            i
          );
        };
      }
    },
    27222: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return f;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return a;
          },
        });
      let r = n(29922),
        o = n(15758),
        l = n(2156);
      function i(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let n = e.startsWith("...");
        return n && (e = e.slice(3)), { key: e, repeat: n, optional: t };
      }
      function u(e) {
        let t = (0, l.removeTrailingSlash)(e).slice(1).split("/"),
          n = {},
          u = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = r.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                l = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && l) {
                let { key: e, optional: r, repeat: a } = i(l[1]);
                return (
                  (n[e] = { pos: u++, repeat: a, optional: r }),
                  "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!l) return "/" + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: r } = i(l[1]);
                return (
                  (n[e] = { pos: u++, repeat: t, optional: r }),
                  t ? (r ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: n,
        };
      }
      function a(e) {
        let { parameterizedRoute: t, groups: n } = u(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: n };
      }
      function s(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: n,
            segment: r,
            routeKeys: l,
            keyPrefix: u,
          } = e,
          { key: a, optional: s, repeat: c } = i(r),
          d = a.replace(/\W/g, "");
        u && (d = "" + u + d);
        let f = !1;
        (0 === d.length || d.length > 30) && (f = !0),
          isNaN(parseInt(d.slice(0, 1))) || (f = !0),
          f && (d = n()),
          u ? (l[d] = "" + u + a) : (l[d] = a);
        let p = t ? (0, o.escapeStringRegexp)(t) : "";
        return c
          ? s
            ? "(?:/" + p + "(?<" + d + ">.+?))?"
            : "/" + p + "(?<" + d + ">.+?)"
          : "/" + p + "(?<" + d + ">[^/]+?)";
      }
      function c(e, t) {
        let n;
        let i = (0, l.removeTrailingSlash)(e).slice(1).split("/"),
          u =
            ((n = 0),
            () => {
              let e = "",
                t = ++n;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          a = {};
        return {
          namedParameterizedRoute: i
            .map((e) => {
              let n = r.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                l = e.match(/\[((?:\[.*\])|.+)\]/);
              if (n && l) {
                let [n] = e.split(l[0]);
                return s({
                  getSafeRouteKey: u,
                  interceptionMarker: n,
                  segment: l[1],
                  routeKeys: a,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return l
                ? s({
                    getSafeRouteKey: u,
                    segment: l[1],
                    routeKeys: a,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: a,
        };
      }
      function d(e, t) {
        let n = c(e, t);
        return {
          ...a(e),
          namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
          routeKeys: n.routeKeys,
        };
      }
      function f(e, t) {
        let { parameterizedRoute: n } = u(e),
          { catchAll: r = !0 } = t;
        if ("/" === n) return { namedRegex: "^/" + (r ? ".*" : "") + "$" };
        let { namedParameterizedRoute: o } = c(e, !1);
        return { namedRegex: "^" + o + (r ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    41613: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      class n {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let n = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/"),
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").',
              );
            n.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/"),
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/"),
              ),
            n
          );
        }
        _insert(e, t, r) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error("Catch-all must be the last part of the URL.");
          let o = e[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let n = o.slice(1, -1),
              i = !1;
            if (
              (n.startsWith("[") &&
                n.endsWith("]") &&
                ((n = n.slice(1, -1)), (i = !0)),
              n.startsWith("...") && ((n = n.substring(3)), (r = !0)),
              n.startsWith("[") || n.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "').",
              );
            if (n.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "').",
              );
            function l(e, n) {
              if (null !== e && e !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    n +
                    "').",
                );
              t.forEach((e) => {
                if (e === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path',
                  );
                if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path',
                  );
              }),
                t.push(n);
            }
            if (r) {
              if (i) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).',
                  );
                l(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (o = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").',
                  );
                l(this.restSlugName, n), (this.restSlugName = n), (o = "[...]");
              }
            } else {
              if (i)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").',
                );
              l(this.slugName, n), (this.slugName = n), (o = "[]");
            }
          }
          this.children.has(o) || this.children.set(o, new n()),
            this.children.get(o)._insert(e.slice(1), t, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function r(e) {
        let t = new n();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    32988: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DecodeError: function () {
            return h;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return v;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return r;
          },
          getDisplayName: function () {
            return a;
          },
          getLocationOrigin: function () {
            return i;
          },
          getURL: function () {
            return u;
          },
          isAbsoluteUrl: function () {
            return l;
          },
          isResSent: function () {
            return s;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return x;
          },
        });
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function r(e) {
        let t,
          n = !1;
        return function () {
          for (var r = arguments.length, o = Array(r), l = 0; l < r; l++)
            o[l] = arguments[l];
          return n || ((n = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        l = (e) => o.test(e);
      function i() {
        let { protocol: e, hostname: t, port: n } = window.location;
        return e + "//" + t + (n ? ":" + n : "");
      }
      function u() {
        let { href: e } = window.location,
          t = i();
        return e.substring(t.length);
      }
      function a(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function s(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let n = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let r = await e.getInitialProps(t);
        if (n && s(n)) return r;
        if (!r)
          throw Error(
            '"' +
              a(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.',
          );
        return r;
      }
      let f = "undefined" != typeof performance,
        p =
          f &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e],
          );
      class h extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class v extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function x(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    61747: function (e, t, n) {
      var r = n(92089),
        o = n(77163),
        l = n(62503),
        i = n(51866);
      t.Z = function (e, t, n) {
        if (!(0, i.Z)(n)) return !1;
        var u = typeof t;
        return (
          ("number" == u
            ? !!((0, o.Z)(n) && (0, l.Z)(t, n.length))
            : "string" == u && t in n) && (0, r.Z)(n[t], e)
        );
      };
    },
    43539: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = function (e, t, n) {
          var r = -1,
            o = e.length;
          t < 0 && (t = -t > o ? 0 : o + t),
            (n = n > o ? o : n) < 0 && (n += o),
            (o = t > n ? 0 : (n - t) >>> 0),
            (t >>>= 0);
          for (var l = Array(o); ++r < o; ) l[r] = e[r + t];
          return l;
        },
        o = n(61747),
        l = n(87882),
        i = 1 / 0,
        u = function (e) {
          var t,
            n = (t = e)
              ? (t = (0, l.Z)(t)) === i || t === -i
                ? (t < 0 ? -1 : 1) * 17976931348623157e292
                : t == t
                  ? t
                  : 0
              : 0 === t
                ? t
                : 0,
            r = n % 1;
          return n == n ? (r ? n - r : n) : 0;
        },
        a = Math.ceil,
        s = Math.max,
        c = function (e, t, n) {
          t = (n ? (0, o.Z)(e, t, n) : void 0 === t) ? 1 : s(u(t), 0);
          var l = null == e ? 0 : e.length;
          if (!l || t < 1) return [];
          for (var i = 0, c = 0, d = Array(a(l / t)); i < l; )
            d[c++] = r(e, i, (i += t));
          return d;
        };
    },
    98780: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(51866),
        o = n(12933),
        l = function () {
          return o.Z.Date.now();
        },
        i = n(87882),
        u = Math.max,
        a = Math.min,
        s = function (e, t, n) {
          var o,
            s,
            c,
            d,
            f,
            p,
            h = 0,
            m = !1,
            g = !1,
            v = !0;
          if ("function" != typeof e) throw TypeError("Expected a function");
          function y(t) {
            var n = o,
              r = s;
            return (o = s = void 0), (h = t), (d = e.apply(r, n));
          }
          function x(e) {
            var n = e - p,
              r = e - h;
            return void 0 === p || n >= t || n < 0 || (g && r >= c);
          }
          function b() {
            var e,
              n,
              r,
              o = l();
            if (x(o)) return E(o);
            f = setTimeout(
              b,
              ((e = o - p), (n = o - h), (r = t - e), g ? a(r, c - n) : r),
            );
          }
          function E(e) {
            return ((f = void 0), v && o) ? y(e) : ((o = s = void 0), d);
          }
          function w() {
            var e,
              n = l(),
              r = x(n);
            if (((o = arguments), (s = this), (p = n), r)) {
              if (void 0 === f)
                return (h = e = p), (f = setTimeout(b, t)), m ? y(e) : d;
              if (g) return clearTimeout(f), (f = setTimeout(b, t)), y(p);
            }
            return void 0 === f && (f = setTimeout(b, t)), d;
          }
          return (
            (t = (0, i.Z)(t) || 0),
            (0, r.Z)(n) &&
              ((m = !!n.leading),
              (c = (g = "maxWait" in n) ? u((0, i.Z)(n.maxWait) || 0, t) : c),
              (v = "trailing" in n ? !!n.trailing : v)),
            (w.cancel = function () {
              void 0 !== f && clearTimeout(f),
                (h = 0),
                (o = p = s = f = void 0);
            }),
            (w.flush = function () {
              return void 0 === f ? d : E(l());
            }),
            w
          );
        };
    },
    41279: function (e, t, n) {
      var r = n(30014),
        o = n(2495);
      t.Z = function (e) {
        return (
          "symbol" == typeof e ||
          ((0, o.Z)(e) && "[object Symbol]" == (0, r.Z)(e))
        );
      };
    },
    23897: function (e, t, n) {
      var r = n(98780),
        o = n(51866);
      t.Z = function (e, t, n) {
        var l = !0,
          i = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
          (0, o.Z)(n) &&
            ((l = "leading" in n ? !!n.leading : l),
            (i = "trailing" in n ? !!n.trailing : i)),
          (0, r.Z)(e, t, { leading: l, maxWait: t, trailing: i })
        );
      };
    },
    87882: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var r = /\s/,
        o = function (e) {
          for (var t = e.length; t-- && r.test(e.charAt(t)); );
          return t;
        },
        l = /^\s+/,
        i = n(51866),
        u = n(41279),
        a = 0 / 0,
        s = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        f = parseInt,
        p = function (e) {
          if ("number" == typeof e) return e;
          if ((0, u.Z)(e)) return a;
          if ((0, i.Z)(e)) {
            var t,
              n = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = (0, i.Z)(n) ? n + "" : n;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = (t = e) ? t.slice(0, o(t) + 1).replace(l, "") : t;
          var r = c.test(e);
          return r || d.test(e) ? f(e.slice(2), r ? 2 : 8) : s.test(e) ? a : +e;
        };
    },
    42001: function (e, t, n) {
      n.d(t, {
        Mr: function () {
          return t9;
        },
      });
      var r,
        o = n(98639),
        l = n(773);
      function i(e, t) {
        return (n) => e(t(n));
      }
      function u(e, t) {
        return t(e);
      }
      function a(...e) {
        return e;
      }
      function s(e) {
        e();
      }
      function c(e) {
        return void 0 !== e;
      }
      function d() {}
      function f(e) {
        e(2);
      }
      function p(e) {
        return e(4);
      }
      function h(e, t) {
        return e(1, (e) => t(0, e));
      }
      function m(e, t) {
        let n = e(1, (e) => {
          n(), t(e);
        });
        return n;
      }
      function g() {
        let e = [];
        return (t, n) => {
          switch (t) {
            case 2:
              e.splice(0, e.length);
              return;
            case 1:
              return (
                e.push(n),
                () => {
                  let t = e.indexOf(n);
                  t > -1 && e.splice(t, 1);
                }
              );
            case 0:
              e.slice().forEach((e) => {
                e(n);
              });
              return;
            default:
              throw Error(`unrecognized action ${t}`);
          }
        };
      }
      function v(e) {
        let t = e,
          n = g();
        return (e, r) => {
          switch (e) {
            case 1:
              r(t);
              break;
            case 0:
              t = r;
              break;
            case 4:
              return t;
          }
          return n(e, r);
        };
      }
      function y(e) {
        var t;
        return h(e, (t = g())), t;
      }
      function x(e, t) {
        var n;
        return h(e, (n = v(t))), n;
      }
      function b(e, ...t) {
        let n = (function (...e) {
          return (t) => e.reduceRight(u, t);
        })(...t);
        return (t, r) => {
          switch (t) {
            case 1:
              return e(1, n(r));
            case 2:
              f(e);
              return;
          }
        };
      }
      function E(e, t) {
        return e === t;
      }
      function w(e = E) {
        let t;
        return (n) => (r) => {
          e(t, r) || ((t = r), n(r));
        };
      }
      function T(e) {
        return (t) => (n) => {
          e(n) && t(n);
        };
      }
      function I(e) {
        return (t) => i(t, e);
      }
      function S(e) {
        return (t) => () => t(e);
      }
      function C(e, t) {
        return (n) => (r) => n((t = e(t, r)));
      }
      function R(e) {
        return (t) => (n) => {
          e > 0 ? e-- : t(n);
        };
      }
      function P(e) {
        let t,
          n = null;
        return (r) => (o) => {
          (n = o),
            t ||
              (t = setTimeout(() => {
                (t = void 0), r(n);
              }, e));
        };
      }
      function _(e) {
        let t, n;
        return (r) => (o) => {
          (t = o),
            n && clearTimeout(n),
            (n = setTimeout(() => {
              r(t);
            }, e));
        };
      }
      function O(...e) {
        let t = Array(e.length),
          n = 0,
          r = null,
          o = Math.pow(2, e.length) - 1;
        return (
          e.forEach((e, l) => {
            let i = Math.pow(2, l);
            e(1, (e) => {
              let u = n;
              (n |= i),
                (t[l] = e),
                u !== o && n === o && r && (r(), (r = null));
            });
          }),
          (e) => (l) => {
            let i = () => e([l].concat(t));
            n === o ? i() : (r = i);
          }
        );
      }
      function H(...e) {
        return function (t, n) {
          switch (t) {
            case 1:
              return (function (...e) {
                return () => {
                  e.map(s);
                };
              })(...e.map((e) => e(1, n)));
            case 2:
              return;
            default:
              throw Error(`unrecognized action ${t}`);
          }
        };
      }
      function k(e, t = E) {
        return b(e, w(t));
      }
      function M(...e) {
        let t = g(),
          n = Array(e.length),
          r = 0,
          o = Math.pow(2, e.length) - 1;
        return (
          e.forEach((e, l) => {
            let i = Math.pow(2, l);
            e(1, (e) => {
              (n[l] = e), (r |= i) === o && t(0, n);
            });
          }),
          function (e, l) {
            switch (e) {
              case 1:
                return r === o && l(n), t(1, l);
              case 2:
                return f(t);
              default:
                throw Error(`unrecognized action ${e}`);
            }
          }
        );
      }
      function z(e, t = [], { singleton: n } = { singleton: !0 }) {
        return { id: L(), constructor: e, dependencies: t, singleton: n };
      }
      let L = () => Symbol(),
        j = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function B(e, t, n) {
        let r = Object.keys(t.required || {}),
          l = Object.keys(t.optional || {}),
          i = Object.keys(t.methods || {}),
          u = Object.keys(t.events || {}),
          a = o.createContext({});
        function s(e, n) {
          for (let o of (e.propsReady && (0, e.propsReady)(0, !1), r))
            (0, e[t.required[o]])(0, n[o]);
          for (let r of l) r in n && (0, e[t.optional[r]])(0, n[r]);
          e.propsReady && (0, e.propsReady)(0, !0);
        }
        return {
          Component: o.forwardRef((c, p) => {
            var h;
            let { children: m, ...g } = c,
              [v] = o.useState(() => {
                var t;
                return (
                  s(
                    (t = (function (e) {
                      let t = new Map(),
                        n = ({
                          id: e,
                          constructor: r,
                          dependencies: o,
                          singleton: l,
                        }) => {
                          if (l && t.has(e)) return t.get(e);
                          let i = r(o.map((e) => n(e)));
                          return l && t.set(e, i), i;
                        };
                      return n(e);
                    })(e)),
                    g,
                  ),
                  t
                );
              }),
              [y] = o.useState(() => {
                var e;
                return (
                  (e = v),
                  u.reduce(
                    (n, r) => (
                      (n[r] = (function (e) {
                        let t, n;
                        let r = () => t && t();
                        return function (o, l) {
                          switch (o) {
                            case 1:
                              if (!l) return r(), d;
                              if (n === l) return;
                              return r(), (n = l), (t = e(1, l));
                            case 2:
                              r(), (n = null);
                              return;
                            default:
                              throw Error(`unrecognized action ${o}`);
                          }
                        };
                      })(e[t.events[r]])),
                      n
                    ),
                    {},
                  )
                );
              });
            return (
              j(() => {
                for (let e of u) e in g && (0, y[e])(1, g[e]);
                return () => {
                  Object.values(y).map(f);
                };
              }, [g, y, v]),
              j(() => {
                s(v, g);
              }),
              o.useImperativeHandle(
                p,
                ((h = i.reduce(
                  (e, n) => (
                    (e[n] = (e) => {
                      (0, v[t.methods[n]])(0, e);
                    }),
                    e
                  ),
                  {},
                )),
                () => h),
              ),
              o.createElement(
                a.Provider,
                { value: v },
                n
                  ? o.createElement(
                      n,
                      (function (e, t) {
                        let n = {},
                          r = {},
                          o = 0,
                          l = e.length;
                        for (; o < l; ) (r[e[o]] = 1), (o += 1);
                        for (let e in t) r.hasOwnProperty(e) || (n[e] = t[e]);
                        return n;
                      })([...r, ...l, ...u], g),
                      m,
                    )
                  : m,
              )
            );
          }),
          usePublisher: (e) => {
            var t;
            return o.useCallback(
              ((t = o.useContext(a)[e]),
              (e) => {
                t(0, e);
              }),
              [e],
            );
          },
          useEmitterValue: (e) => {
            let t = o.useContext(a)[e],
              [n, r] = o.useState(() => t(4));
            return (
              j(
                () =>
                  t(1, (e) => {
                    e !== n && r(() => e);
                  }),
                [t, n],
              ),
              n
            );
          },
          useEmitter: (e, t) => {
            let n = o.useContext(a)[e];
            j(() => n(1, t), [t, n]);
          },
        };
      }
      let N = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      var A =
        (((r = A || {})[(r.DEBUG = 0)] = "DEBUG"),
        (r[(r.INFO = 1)] = "INFO"),
        (r[(r.WARN = 2)] = "WARN"),
        (r[(r.ERROR = 3)] = "ERROR"),
        r);
      let W = { 0: "debug", 1: "log", 2: "warn", 3: "error" },
        F = () => ("undefined" == typeof globalThis ? window : globalThis),
        U = z(
          () => {
            let e = v(3);
            return {
              log: v((t, n, r = 1) => {
                var o;
                r >= (null != (o = F().VIRTUOSO_LOG_LEVEL) ? o : e(4)) &&
                  console[W[r]](
                    "%creact-virtuoso: %c%s %o",
                    "color: #0253b3; font-weight: bold",
                    "color: initial",
                    t,
                    n,
                  );
              }),
              logLevel: e,
            };
          },
          [],
          { singleton: !0 },
        );
      function D(e, t = !0) {
        let n = o.useRef(null),
          r = (e) => {};
        if ("undefined" != typeof ResizeObserver) {
          let l = o.useMemo(
            () =>
              new ResizeObserver((t) => {
                let n = t[0].target;
                null !== n.offsetParent && e(n);
              }),
            [e],
          );
          r = (e) => {
            e && t
              ? (l.observe(e), (n.current = e))
              : (n.current && l.unobserve(n.current), (n.current = null));
          };
        }
        return { ref: n, callbackRef: r };
      }
      function Z(e, t = !0) {
        return D(e, t).callbackRef;
      }
      function q(e, t, n, r, l, i, u) {
        return D(
          o.useCallback(
            (n) => {
              var o;
              let a = (function (e, t, n, r) {
                  let o = e.length;
                  if (0 === o) return null;
                  let l = [];
                  for (let i = 0; i < o; i++) {
                    let o = e.item(i);
                    if (!o || void 0 === o.dataset.index) continue;
                    let u = parseInt(o.dataset.index),
                      a = parseFloat(o.dataset.knownSize),
                      s = t(o, n);
                    if (
                      (0 === s &&
                        r(
                          "Zero-sized element, this should not happen",
                          { child: o },
                          A.ERROR,
                        ),
                      s === a)
                    )
                      continue;
                    let c = l[l.length - 1];
                    0 === l.length || c.size !== s || c.endIndex !== u - 1
                      ? l.push({ startIndex: u, endIndex: u, size: s })
                      : l[l.length - 1].endIndex++;
                  }
                  return l;
                })(n.children, t, "offsetHeight", l),
                s = n.parentElement;
              for (; !s.dataset.virtuosoScroller; ) s = s.parentElement;
              let c = "window" === s.lastElementChild.dataset.viewportType;
              r({
                scrollTop: Math.max(
                  u
                    ? u.scrollTop
                    : c
                      ? window.pageYOffset || document.documentElement.scrollTop
                      : s.scrollTop,
                  0,
                ),
                scrollHeight: u
                  ? u.scrollHeight
                  : c
                    ? document.documentElement.scrollHeight
                    : s.scrollHeight,
                viewportHeight: u
                  ? u.offsetHeight
                  : c
                    ? window.innerHeight
                    : s.offsetHeight,
              }),
                null == i ||
                  i(
                    ("normal" === (o = getComputedStyle(n).rowGap) ||
                      (null == o ? void 0 : o.endsWith("px")) ||
                      l(
                        "row-gap was not resolved to pixel value correctly",
                        o,
                        A.WARN,
                      ),
                    "normal" === o)
                      ? 0
                      : parseInt(null != o ? o : "0", 10),
                  ),
                null !== a && e(a);
            },
            [e, t, l, i, u, r],
          ),
          n,
        );
      }
      function V(e, t) {
        return Math.round(e.getBoundingClientRect()[t]);
      }
      function G(e, t) {
        return 1.01 > Math.abs(e - t);
      }
      function $(e, t, n, r = d, i) {
        let u = o.useRef(null),
          a = o.useRef(null),
          s = o.useRef(null),
          c = o.useCallback(
            (n) => {
              let r = n.target,
                o = r === window || r === document,
                i = o
                  ? window.pageYOffset || document.documentElement.scrollTop
                  : r.scrollTop,
                u = o ? document.documentElement.scrollHeight : r.scrollHeight,
                c = o ? window.innerHeight : r.offsetHeight,
                d = () => {
                  e({
                    scrollTop: Math.max(i, 0),
                    scrollHeight: u,
                    viewportHeight: c,
                  });
                };
              n.suppressFlushSync ? d() : l.flushSync(d),
                null !== a.current &&
                  (i === a.current || i <= 0 || i === u - c) &&
                  ((a.current = null),
                  t(!0),
                  s.current && (clearTimeout(s.current), (s.current = null)));
            },
            [e, t],
          );
        return (
          o.useEffect(() => {
            let e = i || u.current;
            return (
              r(i || u.current),
              c({ target: e, suppressFlushSync: !0 }),
              e.addEventListener("scroll", c, { passive: !0 }),
              () => {
                r(null), e.removeEventListener("scroll", c);
              }
            );
          }, [u, c, n, r, i]),
          {
            scrollerRef: u,
            scrollByCallback: function (e) {
              u.current.scrollBy(e);
            },
            scrollToCallback: function (n) {
              let r, o, l;
              let i = u.current;
              if (!i || ("offsetHeight" in i && 0 === i.offsetHeight)) return;
              let c = "smooth" === n.behavior;
              i === window
                ? ((o = Math.max(
                    V(document.documentElement, "height"),
                    document.documentElement.scrollHeight,
                  )),
                  (r = window.innerHeight),
                  (l = document.documentElement.scrollTop))
                : ((o = i.scrollHeight),
                  (r = V(i, "height")),
                  (l = i.scrollTop));
              let d = o - r;
              if (
                ((n.top = Math.ceil(Math.max(Math.min(d, n.top), 0))),
                G(r, o) || n.top === l)
              ) {
                e({ scrollTop: l, scrollHeight: o, viewportHeight: r }),
                  c && t(!0);
                return;
              }
              c
                ? ((a.current = n.top),
                  s.current && clearTimeout(s.current),
                  (s.current = setTimeout(() => {
                    (s.current = null), (a.current = null), t(!0);
                  }, 1e3)))
                : (a.current = null),
                i.scrollTo(n);
            },
          }
        );
      }
      let K = z(
          () => {
            let e = g(),
              t = g(),
              n = v(0),
              r = g(),
              o = v(0),
              l = g(),
              i = g(),
              u = v(0),
              a = v(0),
              s = v(0),
              c = v(0),
              d = g(),
              f = g(),
              p = v(!1);
            return (
              h(
                b(
                  e,
                  I(({ scrollTop: e }) => e),
                ),
                t,
              ),
              h(
                b(
                  e,
                  I(({ scrollHeight: e }) => e),
                ),
                i,
              ),
              h(t, o),
              {
                scrollContainerState: e,
                scrollTop: t,
                viewportHeight: l,
                headerHeight: u,
                fixedHeaderHeight: a,
                fixedFooterHeight: s,
                footerHeight: c,
                scrollHeight: i,
                smoothScrollTargetReached: r,
                scrollTo: d,
                scrollBy: f,
                statefulScrollTop: o,
                deviation: n,
                scrollingInProgress: p,
              }
            );
          },
          [],
          { singleton: !0 },
        ),
        Y = { lvl: 0 };
      function Q(e, t, n, r = Y, o = Y) {
        return { k: e, v: t, lvl: n, l: r, r: o };
      }
      function J(e) {
        return e === Y;
      }
      function X(e, t) {
        return J(e)
          ? void 0
          : t === e.k
            ? e.v
            : t < e.k
              ? X(e.l, t)
              : X(e.r, t);
      }
      function ee(e, t, n = "k") {
        if (J(e)) return [-1 / 0, void 0];
        if (Number(e[n]) === t) return [e.k, e.v];
        if (Number(e[n]) < t) {
          let r = ee(e.r, t, n);
          return r[0] === -1 / 0 ? [e.k, e.v] : r;
        }
        return ee(e.l, t, n);
      }
      function et(e, t, n) {
        return J(e)
          ? Q(t, n, 1)
          : t === e.k
            ? er(e, { k: t, v: n })
            : t < e.k
              ? ea(es(er(e, { l: et(e.l, t, n) })))
              : ea(es(er(e, { r: et(e.r, t, n) })));
      }
      function en(e) {
        return J(e) ? [] : [...en(e.l), { k: e.k, v: e.v }, ...en(e.r)];
      }
      function er(e, t) {
        return Q(
          void 0 !== t.k ? t.k : e.k,
          void 0 !== t.v ? t.v : e.v,
          void 0 !== t.lvl ? t.lvl : e.lvl,
          void 0 !== t.l ? t.l : e.l,
          void 0 !== t.r ? t.r : e.r,
        );
      }
      function eo(e) {
        return J(e) || e.lvl > e.r.lvl;
      }
      function el(e) {
        let { l: t, r: n, lvl: r } = e;
        if (n.lvl >= r - 1 && t.lvl >= r - 1) return e;
        if (r > n.lvl + 1) {
          if (eo(t)) return es(er(e, { lvl: r - 1 }));
          if (!J(t) && !J(t.r))
            return er(t.r, {
              l: er(t, { r: t.r.l }),
              r: er(e, { l: t.r.r, lvl: r - 1 }),
              lvl: r,
            });
          throw Error("Unexpected empty nodes");
        }
        if (eo(e)) return ea(er(e, { lvl: r - 1 }));
        if (J(n) || J(n.l)) throw Error("Unexpected empty nodes");
        {
          let t = n.l,
            o = eo(t) ? n.lvl - 1 : n.lvl;
          return er(t, {
            l: er(e, { r: t.l, lvl: r - 1 }),
            r: ea(er(n, { l: t.r, lvl: o })),
            lvl: t.lvl + 1,
          });
        }
      }
      function ei(e, t, n) {
        if (J(e)) return [];
        let r = ee(e, t)[0];
        return eu(
          (function e(t, n, r) {
            if (J(t)) return [];
            let { k: o, v: l, l: i, r: u } = t,
              a = [];
            return (
              o > n && (a = a.concat(e(i, n, r))),
              o >= n && o <= r && a.push({ k: o, v: l }),
              o <= r && (a = a.concat(e(u, n, r))),
              a
            );
          })(e, r, n),
          ({ k: e, v: t }) => ({ index: e, value: t }),
        );
      }
      function eu(e, t) {
        let n = e.length;
        if (0 === n) return [];
        let { index: r, value: o } = t(e[0]),
          l = [];
        for (let i = 1; i < n; i++) {
          let { index: n, value: u } = t(e[i]);
          l.push({ start: r, end: n - 1, value: o }), (r = n), (o = u);
        }
        return l.push({ start: r, end: 1 / 0, value: o }), l;
      }
      function ea(e) {
        let { r: t, lvl: n } = e;
        return J(t) || J(t.r) || t.lvl !== n || t.r.lvl !== n
          ? e
          : er(t, { l: er(e, { r: t.l }), lvl: n + 1 });
      }
      function es(e) {
        let { l: t } = e;
        return J(t) || t.lvl !== e.lvl ? e : er(t, { r: er(e, { l: t.r }) });
      }
      function ec(e, t, n, r = 0) {
        let o = e.length - 1;
        for (; r <= o; ) {
          let l = Math.floor((r + o) / 2),
            i = n(e[l], t);
          if (0 === i) return l;
          if (-1 === i) {
            if (o - r < 2) return l - 1;
            o = l - 1;
          } else {
            if (o === r) return l;
            r = l + 1;
          }
        }
        throw Error(
          `Failed binary finding record in array - ${e.join(",")}, searched for ${t}`,
        );
      }
      let ed = z(() => ({ recalcInProgress: v(!1) }), [], { singleton: !0 });
      function ef(e, t) {
        let n = 0,
          r = 0;
        for (; n < e; ) (n += t[r + 1] - t[r] - 1), r++;
        return r - (n === e ? 0 : 1);
      }
      function ep({ index: e }, t) {
        return t === e ? 0 : t < e ? -1 : 1;
      }
      function eh({ offset: e }, t) {
        return t === e ? 0 : t < e ? -1 : 1;
      }
      function em(e) {
        return { index: e.index, value: e };
      }
      function eg(e, t, n, r) {
        let o = e,
          l = 0,
          i = 0,
          u = 0,
          a = 0;
        if (0 !== t) {
          (a = ec(o, t - 1, ep)), (u = o[a].offset);
          let e = ee(n, t - 1);
          (l = e[0]),
            (i = e[1]),
            o.length && o[a].size === ee(n, t)[1] && (a -= 1),
            (o = o.slice(0, a + 1));
        } else o = [];
        for (let { start: e, value: a } of ei(n, t, 1 / 0)) {
          let t = e - l,
            n = t * i + u + t * r;
          o.push({ offset: n, size: a, index: e }), (l = e), (u = n), (i = a);
        }
        return { offsetTree: o, lastIndex: l, lastOffset: u, lastSize: i };
      }
      function ev(e, [t, n, r, o]) {
        t.length > 0 && r("received item sizes", t, A.DEBUG);
        let l = e.sizeTree,
          i = l,
          u = 0;
        if (n.length > 0 && J(l) && 2 === t.length) {
          let e = t[0].size,
            r = t[1].size;
          i = n.reduce((t, n) => et(et(t, n, e), n + 1, r), i);
        } else
          [i, u] = (function (e, t) {
            let n = J(e) ? 0 : 1 / 0;
            for (let r of t) {
              let { size: t, startIndex: o, endIndex: l } = r;
              if (((n = Math.min(n, o)), J(e))) {
                e = et(e, 0, t);
                continue;
              }
              let i = ei(e, o - 1, l + 1);
              if (
                i.some(
                  (function (e) {
                    let { size: t, startIndex: n, endIndex: r } = e;
                    return (e) =>
                      e.start === n &&
                      (e.end === r || e.end === 1 / 0) &&
                      e.value === t;
                  })(r),
                )
              )
                continue;
              let u = !1,
                a = !1;
              for (let { start: n, end: r, value: o } of i)
                u
                  ? (l >= n || t === o) &&
                    (e = (function e(t, n) {
                      if (J(t)) return Y;
                      let { k: r, l: o, r: l } = t;
                      if (n === r) {
                        if (J(o)) return l;
                        if (J(l)) return o;
                        {
                          let [e, n] = (function e(t) {
                            return J(t.r) ? [t.k, t.v] : e(t.r);
                          })(o);
                          return el(
                            er(t, {
                              k: e,
                              v: n,
                              l: (function e(t) {
                                return J(t.r) ? t.l : el(er(t, { r: e(t.r) }));
                              })(o),
                            }),
                          );
                        }
                      }
                      return n < r
                        ? el(er(t, { l: e(o, n) }))
                        : el(er(t, { r: e(l, n) }));
                    })(e, n))
                  : ((a = o !== t), (u = !0)),
                  r > l && l >= n && o !== t && (e = et(e, l + 1, o));
              a && (e = et(e, o, t));
            }
            return [e, n];
          })(i, t);
        if (i === l) return e;
        let {
          offsetTree: a,
          lastIndex: s,
          lastSize: c,
          lastOffset: d,
        } = eg(e.offsetTree, u, i, o);
        return {
          sizeTree: i,
          offsetTree: a,
          lastIndex: s,
          lastOffset: d,
          lastSize: c,
          groupOffsetTree: n.reduce((e, t) => et(e, t, ey(t, a, o)), Y),
          groupIndices: n,
        };
      }
      function ey(e, t, n) {
        if (0 === t.length) return 0;
        let { offset: r, index: o, size: l } = t[ec(t, e, ep)],
          i = e - o,
          u = l * i + (i - 1) * n + r;
        return u > 0 ? u + n : u;
      }
      function ex(e, t, n) {
        if (void 0 !== e.groupIndex) return t.groupIndices[e.groupIndex] + 1;
        {
          let r = eb("LAST" === e.index ? n : e.index, t);
          return Math.max(0, r, Math.min(n, r));
        }
      }
      function eb(e, t) {
        if (!eE(t)) return e;
        let n = 0;
        for (; t.groupIndices[n] <= e + n; ) n++;
        return e + n;
      }
      function eE(e) {
        return !J(e.groupOffsetTree);
      }
      let ew = { offsetHeight: "height", offsetWidth: "width" },
        eT = z(
          ([{ log: e }, { recalcInProgress: t }]) => {
            let n = g(),
              r = g(),
              o = x(r, 0),
              l = g(),
              i = g(),
              u = v(0),
              a = v([]),
              s = v(void 0),
              c = v(void 0),
              d = v((e, t) => V(e, ew[t])),
              f = v(void 0),
              p = v(0),
              m = {
                offsetTree: [],
                sizeTree: Y,
                groupOffsetTree: Y,
                lastIndex: 0,
                lastOffset: 0,
                lastSize: 0,
                groupIndices: [],
              },
              E = x(b(n, O(a, e, p), C(ev, m), w()), m),
              S = x(
                b(
                  a,
                  w(),
                  C((e, t) => ({ prev: e.current, current: t }), {
                    prev: [],
                    current: [],
                  }),
                  I(({ prev: e }) => e),
                ),
                [],
              );
            h(
              b(
                a,
                T((e) => e.length > 0),
                O(E, p),
                I(([e, t, n]) => {
                  let r = e.reduce(
                    (e, r, o) => et(e, r, ey(r, t.offsetTree, n) || o),
                    Y,
                  );
                  return { ...t, groupIndices: e, groupOffsetTree: r };
                }),
              ),
              E,
            ),
              h(
                b(
                  r,
                  O(E),
                  T(([e, { lastIndex: t }]) => e < t),
                  I(([e, { lastIndex: t, lastSize: n }]) => [
                    { startIndex: e, endIndex: t, size: n },
                  ]),
                ),
                n,
              ),
              h(s, c);
            let R = x(
              b(
                s,
                I((e) => void 0 === e),
              ),
              !0,
            );
            h(
              b(
                c,
                T((e) => void 0 !== e && J(E(4).sizeTree)),
                I((e) => [{ startIndex: 0, endIndex: 0, size: e }]),
              ),
              n,
            );
            let P = y(
              b(
                n,
                O(E),
                C(({ sizes: e }, [t, n]) => ({ changed: n !== e, sizes: n }), {
                  changed: !1,
                  sizes: m,
                }),
                I((e) => e.changed),
              ),
            );
            b(
              u,
              C((e, t) => ({ diff: e.prev - t, prev: t }), {
                diff: 0,
                prev: 0,
              }),
              I((e) => e.diff),
            )(1, (e) => {
              let { groupIndices: n } = E(4);
              if (e > 0) t(0, !0), l(0, e + ef(e, n));
              else if (e < 0) {
                let t = S(4);
                t.length > 0 && (e -= ef(-e, t)), i(0, e);
              }
            }),
              b(u, O(e))(1, ([e, t]) => {
                e < 0 &&
                  t(
                    "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
                    { firstItemIndex: u },
                    A.ERROR,
                  );
              });
            let _ = y(l);
            h(
              b(
                l,
                O(E),
                I(([e, t]) => {
                  let n = t.groupIndices.length > 0,
                    r = [],
                    o = t.lastSize;
                  if (n) {
                    let n = X(t.sizeTree, 0),
                      l = 0,
                      i = 0;
                    for (; l < e; ) {
                      let e = t.groupIndices[i],
                        u =
                          t.groupIndices.length === i + 1
                            ? 1 / 0
                            : t.groupIndices[i + 1] - e - 1;
                      r.push({ startIndex: e, endIndex: e, size: n }),
                        r.push({
                          startIndex: e + 1,
                          endIndex: e + 1 + u - 1,
                          size: o,
                        }),
                        i++,
                        (l += u + 1);
                    }
                    let u = en(t.sizeTree);
                    return (
                      l !== e && u.shift(),
                      u.reduce(
                        (t, { k: n, v: r }) => {
                          let o = t.ranges;
                          return (
                            0 !== t.prevSize &&
                              (o = [
                                ...t.ranges,
                                {
                                  startIndex: t.prevIndex,
                                  endIndex: n + e - 1,
                                  size: t.prevSize,
                                },
                              ]),
                            { ranges: o, prevIndex: n + e, prevSize: r }
                          );
                        },
                        { ranges: r, prevIndex: e, prevSize: 0 },
                      ).ranges
                    );
                  }
                  return en(t.sizeTree).reduce(
                    (t, { k: n, v: r }) => ({
                      ranges: [
                        ...t.ranges,
                        {
                          startIndex: t.prevIndex,
                          endIndex: n + e - 1,
                          size: t.prevSize,
                        },
                      ],
                      prevIndex: n + e,
                      prevSize: r,
                    }),
                    { ranges: [], prevIndex: 0, prevSize: o },
                  ).ranges;
                }),
              ),
              n,
            );
            let H = y(
              b(
                i,
                O(E, p),
                I(([e, { offsetTree: t }, n]) => ey(-e, t, n)),
              ),
            );
            return (
              h(
                b(
                  i,
                  O(E, p),
                  I(([e, t, n]) => {
                    if (t.groupIndices.length > 0) {
                      if (J(t.sizeTree)) return t;
                      let r = Y,
                        o = S(4),
                        l = 0,
                        i = 0,
                        u = 0;
                      for (; l < -e; ) {
                        u = o[i];
                        let e = o[i + 1] - u - 1;
                        i++, (l += e + 1);
                      }
                      return (
                        (r = en(t.sizeTree).reduce(
                          (t, { k: n, v: r }) => et(t, Math.max(0, n + e), r),
                          r,
                        )),
                        l !== -e &&
                          ((r = et(r, 0, X(t.sizeTree, u))),
                          (r = et(r, 1, ee(t.sizeTree, -e + 1)[1]))),
                        { ...t, sizeTree: r, ...eg(t.offsetTree, 0, r, n) }
                      );
                    }
                    {
                      let r = en(t.sizeTree).reduce(
                        (t, { k: n, v: r }) => et(t, Math.max(0, n + e), r),
                        Y,
                      );
                      return {
                        ...t,
                        sizeTree: r,
                        ...eg(t.offsetTree, 0, r, n),
                      };
                    }
                  }),
                ),
                E,
              ),
              {
                data: f,
                totalCount: r,
                sizeRanges: n,
                groupIndices: a,
                defaultItemSize: c,
                fixedItemSize: s,
                unshiftWith: l,
                shiftWith: i,
                shiftWithOffset: H,
                beforeUnshiftWith: _,
                firstItemIndex: u,
                gap: p,
                sizes: E,
                listRefresh: P,
                statefulTotalCount: o,
                trackItemSizes: R,
                itemSize: d,
              }
            );
          },
          a(U, ed),
          { singleton: !0 },
        ),
        eI =
          "undefined" != typeof document &&
          "scrollBehavior" in document.documentElement.style;
      function eS(e) {
        let t = "number" == typeof e ? { index: e } : e;
        return (
          t.align || (t.align = "start"),
          (t.behavior && eI) || (t.behavior = "auto"),
          t.offset || (t.offset = 0),
          t
        );
      }
      let eC = z(
          ([
            { sizes: e, totalCount: t, listRefresh: n, gap: r },
            {
              scrollingInProgress: o,
              viewportHeight: l,
              scrollTo: i,
              smoothScrollTargetReached: u,
              headerHeight: a,
              footerHeight: s,
              fixedHeaderHeight: c,
              fixedFooterHeight: d,
            },
            { log: f },
          ]) => {
            let p = g(),
              y = v(0),
              x = null,
              E = null,
              w = null;
            function T() {
              x && (x(), (x = null)),
                w && (w(), (w = null)),
                E && (clearTimeout(E), (E = null)),
                o(0, !1);
            }
            return (
              h(
                b(
                  p,
                  O(e, l, t, y, a, s, f),
                  O(r, c, d),
                  I(([[e, t, r, l, i, a, s, c], d, f, h]) => {
                    let g = eS(e),
                      { align: v, behavior: y, offset: I } = g,
                      S = l - 1,
                      C = ex(g, t, S),
                      R = ey(C, t.offsetTree, d) + a;
                    "end" === v
                      ? ((R += f + ee(t.sizeTree, C)[1] - r + h),
                        C === S && (R += s))
                      : "center" === v
                        ? (R += (f + ee(t.sizeTree, C)[1] - r + h) / 2)
                        : (R -= i),
                      I && (R += I);
                    let P = (t) => {
                      T(),
                        t
                          ? (c(
                              "retrying to scroll to",
                              { location: e },
                              A.DEBUG,
                            ),
                            p(0, e))
                          : c(
                              "list did not change, scroll successful",
                              {},
                              A.DEBUG,
                            );
                    };
                    if ((T(), "smooth" === y)) {
                      let e = !1;
                      (w = n(1, (t) => {
                        e = e || t;
                      })),
                        (x = m(u, () => {
                          P(e);
                        }));
                    } else
                      x = m(
                        b(n, (e) => {
                          let t = setTimeout(() => {
                            e(!1);
                          }, 150);
                          return (n) => {
                            n && (e(!0), clearTimeout(t));
                          };
                        }),
                        P,
                      );
                    return (
                      (E = setTimeout(() => {
                        T();
                      }, 1200)),
                      o(0, !0),
                      c(
                        "scrolling from index to",
                        { index: C, top: R, behavior: y },
                        A.DEBUG,
                      ),
                      { top: R, behavior: y }
                    );
                  }),
                ),
                i,
              ),
              { scrollToIndex: p, topListHeight: y }
            );
          },
          a(eT, K, U),
          { singleton: !0 },
        ),
        eR = "down",
        eP = {
          atBottom: !1,
          notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
          state: {
            offsetBottom: 0,
            scrollTop: 0,
            viewportHeight: 0,
            scrollHeight: 0,
          },
        },
        e_ = z(
          ([
            {
              scrollContainerState: e,
              scrollTop: t,
              viewportHeight: n,
              headerHeight: r,
              footerHeight: o,
              scrollBy: l,
            },
          ]) => {
            let i = v(!1),
              u = v(!0),
              a = g(),
              s = g(),
              c = v(4),
              d = v(0),
              f = x(
                b(H(b(k(t), R(1), S(!0)), b(k(t), R(1), S(!1), _(100))), w()),
                !1,
              ),
              p = x(b(H(b(l, S(!0)), b(l, S(!1), _(200))), w()), !1);
            h(
              b(
                M(k(t), k(d)),
                I(([e, t]) => e <= t),
                w(),
              ),
              u,
            ),
              h(b(u, P(50)), s);
            let m = y(
                b(
                  M(e, k(n), k(r), k(o), k(c)),
                  C((e, [{ scrollTop: t, scrollHeight: n }, r, o, l, i]) => {
                    let u = {
                      viewportHeight: r,
                      scrollTop: t,
                      scrollHeight: n,
                    };
                    if (t + r - n > -i) {
                      let n, r;
                      return (
                        t > e.state.scrollTop
                          ? ((n = "SCROLLED_DOWN"), (r = e.state.scrollTop - t))
                          : ((n = "SIZE_DECREASED"),
                            (r = e.state.scrollTop - t || e.scrollTopDelta)),
                        {
                          atBottom: !0,
                          state: u,
                          atBottomBecause: n,
                          scrollTopDelta: r,
                        }
                      );
                    }
                    return {
                      atBottom: !1,
                      notAtBottomBecause:
                        u.scrollHeight > e.state.scrollHeight
                          ? "SIZE_INCREASED"
                          : r < e.state.viewportHeight
                            ? "VIEWPORT_HEIGHT_DECREASING"
                            : t < e.state.scrollTop
                              ? "SCROLLING_UPWARDS"
                              : "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",
                      state: u,
                    };
                  }, eP),
                  w((e, t) => e && e.atBottom === t.atBottom),
                ),
              ),
              E = x(
                b(
                  e,
                  C(
                    (
                      e,
                      { scrollTop: t, scrollHeight: n, viewportHeight: r },
                    ) => {
                      if (G(e.scrollHeight, n))
                        return {
                          scrollTop: t,
                          scrollHeight: n,
                          jump: 0,
                          changed: !1,
                        };
                      {
                        let o = n - (t + r) < 1;
                        return e.scrollTop !== t && o
                          ? {
                              scrollHeight: n,
                              scrollTop: t,
                              jump: e.scrollTop - t,
                              changed: !0,
                            }
                          : {
                              scrollHeight: n,
                              scrollTop: t,
                              jump: 0,
                              changed: !0,
                            };
                      }
                    },
                    { scrollHeight: 0, jump: 0, scrollTop: 0, changed: !1 },
                  ),
                  T((e) => e.changed),
                  I((e) => e.jump),
                ),
                0,
              );
            h(
              b(
                m,
                I((e) => e.atBottom),
              ),
              i,
            ),
              h(b(i, P(50)), a);
            let z = v(eR);
            h(
              b(
                e,
                I(({ scrollTop: e }) => e),
                w(),
                C(
                  (e, t) =>
                    p(4)
                      ? { direction: e.direction, prevScrollTop: t }
                      : {
                          direction: t < e.prevScrollTop ? "up" : eR,
                          prevScrollTop: t,
                        },
                  { direction: eR, prevScrollTop: 0 },
                ),
                I((e) => e.direction),
              ),
              z,
            ),
              h(b(e, P(50), S("none")), z);
            let L = v(0);
            return (
              h(
                b(
                  f,
                  T((e) => !e),
                  S(0),
                ),
                L,
              ),
              h(
                b(
                  t,
                  P(100),
                  O(f),
                  T(([e, t]) => !!t),
                  C(([e, t], [n]) => [t, n], [0, 0]),
                  I(([e, t]) => t - e),
                ),
                L,
              ),
              {
                isScrolling: f,
                isAtTop: u,
                isAtBottom: i,
                atBottomState: m,
                atTopStateChange: s,
                atBottomStateChange: a,
                scrollDirection: z,
                atBottomThreshold: c,
                atTopThreshold: d,
                scrollVelocity: L,
                lastJumpDueToItemResize: E,
              }
            );
          },
          a(K),
        ),
        eO = z(
          ([{ log: e }]) => {
            let t = v(!1),
              n = y(
                b(
                  t,
                  T((e) => e),
                  w(),
                ),
              );
            return (
              t(1, (t) => {
                t && e(4)("props updated", {}, A.DEBUG);
              }),
              { propsReady: t, didMount: n }
            );
          },
          a(U),
          { singleton: !0 },
        ),
        eH = z(
          ([
            { sizes: e, listRefresh: t, defaultItemSize: n },
            { scrollTop: r },
            { scrollToIndex: o },
            { didMount: l },
          ]) => {
            let i = v(!0),
              u = v(0),
              a = v(!1);
            return (
              h(
                b(
                  l,
                  O(u),
                  T(([e, t]) => !!t),
                  S(!1),
                ),
                i,
              ),
              b(
                M(t, l),
                O(i, e, n, a),
                T(
                  ([[, e], t, { sizeTree: n }, r, o]) =>
                    e && (!J(n) || c(r)) && !t && !o,
                ),
                O(u),
              )(1, ([, e]) => {
                a(0, !0),
                  (function e(t, n) {
                    0 == t ? n() : requestAnimationFrame(() => e(t - 1, n));
                  })(2, () => {
                    m(r, () => {
                      i(0, !0);
                    }),
                      o(0, e);
                  });
              }),
              { scrolledToInitialItem: i, initialTopMostItemIndex: u }
            );
          },
          a(eT, K, eC, eO),
          { singleton: !0 },
        );
      function ek(e) {
        return !!e && ("smooth" === e ? "smooth" : "auto");
      }
      let eM = (e, t) => ("function" == typeof e ? ek(e(t)) : t && ek(e)),
        ez = z(
          ([
            { totalCount: e, listRefresh: t },
            { isAtBottom: n, atBottomState: r },
            { scrollToIndex: o },
            { scrolledToInitialItem: l },
            { propsReady: i, didMount: u },
            { log: a },
            { scrollingInProgress: s },
          ]) => {
            let c = v(!1),
              d = g(),
              f = null;
            function p(e) {
              o(0, { index: "LAST", align: "end", behavior: e });
            }
            function h(e) {
              setTimeout(
                m(r, (t) => {
                  !e ||
                    t.atBottom ||
                    "SIZE_INCREASED" !== t.notAtBottomBecause ||
                    f ||
                    (a(4)(
                      "scrolling to bottom due to increased size",
                      {},
                      A.DEBUG,
                    ),
                    p("auto"));
                }),
                100,
              );
            }
            return (
              b(
                M(b(k(e), R(1)), u),
                O(k(c), n, l, s),
                I(([[e, t], n, r, o, l]) => {
                  let i = t && o,
                    u = "auto";
                  return (
                    i && ((u = eM(n, r || l)), (i = i && !!u)),
                    { totalCount: e, shouldFollow: i, followOutputBehavior: u }
                  );
                }),
                T(({ shouldFollow: e }) => e),
              )(1, ({ totalCount: e, followOutputBehavior: n }) => {
                f && (f(), (f = null)),
                  (f = m(t, () => {
                    a(4)("following output to ", { totalCount: e }, A.DEBUG),
                      p(n),
                      (f = null);
                  }));
              }),
              b(
                M(k(c), e, i),
                T(([e, , t]) => e && t),
                C(({ value: e }, [, t]) => ({ refreshed: e === t, value: t }), {
                  refreshed: !1,
                  value: 0,
                }),
                T(({ refreshed: e }) => e),
                O(c, e),
              )(1, ([, e]) => {
                h(!1 !== e);
              }),
              d(1, () => {
                h(!1 !== c(4));
              }),
              M(k(c), r)(1, ([e, t]) => {
                e &&
                  !t.atBottom &&
                  "VIEWPORT_HEIGHT_DECREASING" === t.notAtBottomBecause &&
                  p("auto");
              }),
              { followOutput: c, autoscrollToBottom: d }
            );
          },
          a(eT, e_, eC, eH, eO, U, K),
        );
      function eL(e) {
        return e.reduce(
          (e, t) => (
            e.groupIndices.push(e.totalCount), (e.totalCount += t + 1), e
          ),
          { totalCount: 0, groupIndices: [] },
        );
      }
      let ej = z(
        ([
          { totalCount: e, groupIndices: t, sizes: n },
          { scrollTop: r, headerHeight: o },
        ]) => {
          let l = g(),
            i = g(),
            u = y(b(l, I(eL)));
          return (
            h(
              b(
                u,
                I((e) => e.totalCount),
              ),
              e,
            ),
            h(
              b(
                u,
                I((e) => e.groupIndices),
              ),
              t,
            ),
            h(
              b(
                M(r, n, o),
                T(([e, t]) => eE(t)),
                I(
                  ([e, t, n]) =>
                    ee(t.groupOffsetTree, Math.max(e - n, 0), "v")[0],
                ),
                w(),
                I((e) => [e]),
              ),
              i,
            ),
            { groupCounts: l, topItemsIndexes: i }
          );
        },
        a(eT, K),
      );
      function eB(e, t) {
        return !!(e && e[0] === t[0] && e[1] === t[1]);
      }
      function eN(e, t) {
        return !!(
          e &&
          e.startIndex === t.startIndex &&
          e.endIndex === t.endIndex
        );
      }
      let eA = "bottom",
        eW = "none";
      function eF(e, t, n) {
        return "number" == typeof e
          ? ("up" === n && "top" === t) || (n === eR && t === eA)
            ? e
            : 0
          : "up" === n
            ? "top" === t
              ? e.main
              : e.reverse
            : t === eA
              ? e.main
              : e.reverse;
      }
      function eU(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let eD = z(
          ([
            {
              scrollTop: e,
              viewportHeight: t,
              deviation: n,
              headerHeight: r,
              fixedHeaderHeight: o,
            },
          ]) => {
            let l = g(),
              i = v(0),
              u = v(0),
              a = v(0),
              s = x(
                b(
                  M(k(e), k(t), k(r), k(l, eB), k(a), k(i), k(o), k(n), k(u)),
                  I(([e, t, n, [r, o], l, i, u, a, s]) => {
                    let c = e - a,
                      d = Math.max(n - c, 0),
                      f = eW,
                      p = eU(s, "top"),
                      h = eU(s, eA);
                    return ((r -= a),
                    (r += n + u),
                    (o += n + u),
                    r > e + (i + u) - p && (f = "up"),
                    (o -= a) < e - d + t + h && (f = eR),
                    f !== eW)
                      ? [
                          Math.max(c - n - eF(l, "top", f) - p, 0),
                          c - d - u + t + eF(l, eA, f) + h,
                        ]
                      : null;
                  }),
                  T((e) => null != e),
                  w(eB),
                ),
                [0, 0],
              );
            return {
              listBoundary: l,
              overscan: a,
              topListHeight: i,
              increaseViewportBy: u,
              visibleRange: s,
            };
          },
          a(K),
          { singleton: !0 },
        ),
        eZ = {
          items: [],
          topItems: [],
          offsetTop: 0,
          offsetBottom: 0,
          top: 0,
          bottom: 0,
          topListHeight: 0,
          totalCount: 0,
          firstItemIndex: 0,
        };
      function eq(e, t, n) {
        let r;
        if (0 === e.length) return [];
        if (!eE(t))
          return e.map((e) => ({
            ...e,
            index: e.index + n,
            originalIndex: e.index,
          }));
        let o = e[0].index,
          l = e[e.length - 1].index,
          i = [],
          u = ei(t.groupOffsetTree, o, l),
          a = 0;
        for (let o of e) {
          let e;
          (!r || r.end < o.index) &&
            ((r = u.shift()), (a = t.groupIndices.indexOf(r.start))),
            (e =
              o.index === r.start
                ? { type: "group", index: a }
                : { index: o.index - (a + 1) + n, groupIndex: a }),
            i.push({
              ...e,
              size: o.size,
              offset: o.offset,
              originalIndex: o.index,
              data: o.data,
            });
        }
        return i;
      }
      function eV(e, t, n, r, o, l) {
        let { lastSize: i, lastOffset: u, lastIndex: a } = o,
          s = 0,
          c = 0;
        if (e.length > 0) {
          s = e[0].offset;
          let t = e[e.length - 1];
          c = t.offset + t.size;
        }
        let d = n - a,
          f = s,
          p = u + d * i + (d - 1) * r - c;
        return {
          items: eq(e, o, l),
          topItems: eq(t, o, l),
          topListHeight: t.reduce((e, t) => t.size + e, 0),
          offsetTop: s,
          offsetBottom: p,
          top: f,
          bottom: c,
          totalCount: n,
          firstItemIndex: l,
        };
      }
      let eG = z(
          ([
            { sizes: e, totalCount: t, data: n, firstItemIndex: r, gap: o },
            l,
            { visibleRange: i, listBoundary: u, topListHeight: a },
            { scrolledToInitialItem: s, initialTopMostItemIndex: d },
            { topListHeight: f },
            p,
            { didMount: m },
            { recalcInProgress: E },
          ]) => {
            let S = v([]),
              C = g();
            h(l.topItemsIndexes, S);
            let R = x(
              b(
                M(m, E, k(i, eB), k(t), k(e), k(d), s, k(S), k(r), k(o), n),
                T(([e, t, , n, , , , , , , r]) => {
                  let o = r && r.length !== n;
                  return e && !t && !o;
                }),
                I(([, , [e, t], n, r, o, l, i, u, a, s]) => {
                  var c;
                  let { sizeTree: d, offsetTree: f } = r;
                  if (0 === n || (0 === e && 0 === t))
                    return { ...eZ, totalCount: n };
                  if (J(d))
                    return eV(
                      (function (e, t, n) {
                        if (eE(t)) {
                          let r = eb(e, t);
                          return [
                            {
                              index: ee(t.groupOffsetTree, r)[0],
                              size: 0,
                              offset: 0,
                            },
                            { index: r, size: 0, offset: 0, data: n && n[0] },
                          ];
                        }
                        return [
                          { index: e, size: 0, offset: 0, data: n && n[0] },
                        ];
                      })(
                        "number" == typeof o
                          ? o
                          : "LAST" === o.index
                            ? n - 1
                            : o.index,
                        r,
                        s,
                      ),
                      [],
                      n,
                      a,
                      r,
                      u,
                    );
                  let p = [];
                  if (i.length > 0) {
                    let e = i[0],
                      t = i[i.length - 1],
                      n = 0;
                    for (let r of ei(d, e, t)) {
                      let o = r.value,
                        l = Math.max(r.start, e),
                        i = Math.min(r.end, t);
                      for (let e = l; e <= i; e++)
                        p.push({
                          index: e,
                          size: o,
                          offset: n,
                          data: s && s[e],
                        }),
                          (n += o);
                    }
                  }
                  if (!l) return eV([], p, n, a, r, u);
                  let h = i.length > 0 ? i[i.length - 1] + 1 : 0,
                    m = (function (e, t, n, r = 0) {
                      return (
                        r > 0 && (t = Math.max(t, e[ec(e, r, ep)].offset)),
                        eu(
                          (function (e, t, n, r) {
                            let o = ec(e, t, r),
                              l = ec(e, n, r, o);
                            return e.slice(o, l + 1);
                          })(e, t, n, eh),
                          em,
                        )
                      );
                    })(f, e, t, h);
                  if (0 === m.length) return null;
                  let g = n - 1;
                  return eV(
                    (((n) => {
                      for (let r of m) {
                        let o = r.value,
                          l = o.offset,
                          i = r.start,
                          u = o.size;
                        if (o.offset < e) {
                          let t =
                            (i += Math.floor((e - o.offset + a) / (u + a))) -
                            r.start;
                          l += t * u + t * a;
                        }
                        i < h && ((l += (h - i) * u), (i = h));
                        let c = Math.min(r.end, g);
                        for (let e = i; e <= c && !(l >= t); e++)
                          n.push({
                            index: e,
                            size: u,
                            offset: l,
                            data: s && s[e],
                          }),
                            (l += u + a);
                      }
                    })((c = [])),
                    c),
                    p,
                    n,
                    a,
                    r,
                    u,
                  );
                }),
                T((e) => null !== e),
                w(),
              ),
              eZ,
            );
            h(
              b(
                n,
                T(c),
                I((e) => (null == e ? void 0 : e.length)),
              ),
              t,
            ),
              h(
                b(
                  R,
                  I((e) => e.topListHeight),
                ),
                f,
              ),
              h(f, a),
              h(
                b(
                  R,
                  I((e) => [e.top, e.bottom]),
                ),
                u,
              ),
              h(
                b(
                  R,
                  I((e) => e.items),
                ),
                C,
              );
            let _ = y(
                b(
                  R,
                  T(({ items: e }) => e.length > 0),
                  O(t, n),
                  T(
                    ([{ items: e }, t]) =>
                      e[e.length - 1].originalIndex === t - 1,
                  ),
                  I(([, e, t]) => [e - 1, t]),
                  w(eB),
                  I(([e]) => e),
                ),
              ),
              H = y(
                b(
                  R,
                  P(200),
                  T(
                    ({ items: e, topItems: t }) =>
                      e.length > 0 && e[0].originalIndex === t.length,
                  ),
                  I(({ items: e }) => e[0].index),
                  w(),
                ),
              ),
              z = y(
                b(
                  R,
                  T(({ items: e }) => e.length > 0),
                  I(({ items: e }) => {
                    let t = 0,
                      n = e.length - 1;
                    for (; "group" === e[t].type && t < n; ) t++;
                    for (; "group" === e[n].type && n > t; ) n--;
                    return { startIndex: e[t].index, endIndex: e[n].index };
                  }),
                  w(eN),
                ),
              );
            return {
              listState: R,
              topItemsIndexes: S,
              endReached: _,
              startReached: H,
              rangeChanged: z,
              itemsRendered: C,
              ...p,
            };
          },
          a(eT, ej, eD, eH, eC, e_, eO, ed),
          { singleton: !0 },
        ),
        e$ = z(
          ([
            { sizes: e, firstItemIndex: t, data: n, gap: r },
            { listState: o },
            { didMount: l },
          ]) => {
            let i = v(0);
            return (
              h(
                b(
                  l,
                  O(i),
                  T(([, e]) => 0 !== e),
                  O(e, t, r, n),
                  I(([[, e], t, n, r, o = []]) => {
                    let l = 0;
                    if (t.groupIndices.length > 0)
                      for (let n of t.groupIndices) {
                        if (n - l >= e) break;
                        l++;
                      }
                    let i = e + l;
                    return eV(
                      Array.from({ length: i }).map((e, t) => ({
                        index: t,
                        size: 0,
                        offset: 0,
                        data: o[t],
                      })),
                      [],
                      i,
                      r,
                      t,
                      n,
                    );
                  }),
                ),
                o,
              ),
              { initialItemCount: i }
            );
          },
          a(eT, eG, eO),
          { singleton: !0 },
        ),
        eK = z(
          ([{ scrollVelocity: e }]) => {
            let t = v(!1),
              n = g(),
              r = v(!1);
            return (
              h(
                b(
                  e,
                  O(r, t, n),
                  T(([e, t]) => !!t),
                  I(([e, t, n, r]) => {
                    let { exit: o, enter: l } = t;
                    if (n) {
                      if (o(e, r)) return !1;
                    } else if (l(e, r)) return !0;
                    return n;
                  }),
                  w(),
                ),
                t,
              ),
              b(M(t, e, n), O(r))(
                1,
                ([[e, t, n], r]) => e && r && r.change && r.change(t, n),
              ),
              {
                isSeeking: t,
                scrollSeekConfiguration: r,
                scrollVelocity: e,
                scrollSeekRangeChanged: n,
              }
            );
          },
          a(e_),
          { singleton: !0 },
        ),
        eY = z(([{ topItemsIndexes: e }]) => {
          let t = v(0);
          return (
            h(
              b(
                t,
                T((e) => e > 0),
                I((e) => Array.from({ length: e }).map((e, t) => t)),
              ),
              e,
            ),
            { topItemCount: t }
          );
        }, a(eG)),
        eQ = z(
          ([
            {
              footerHeight: e,
              headerHeight: t,
              fixedHeaderHeight: n,
              fixedFooterHeight: r,
            },
            { listState: o },
          ]) => {
            let l = g(),
              i = x(
                b(
                  M(e, r, t, n, o),
                  I(
                    ([e, t, n, r, o]) =>
                      e + t + n + r + o.offsetBottom + o.bottom,
                  ),
                ),
                0,
              );
            return (
              h(k(i), l), { totalListHeight: i, totalListHeightChanged: l }
            );
          },
          a(K, eG),
          { singleton: !0 },
        );
      function eJ(e) {
        let t,
          n = !1;
        return () => (n || ((n = !0), (t = e())), t);
      }
      let eX = eJ(
          () =>
            /iP(ad|od|hone)/i.test(navigator.userAgent) &&
            /WebKit/i.test(navigator.userAgent),
        ),
        e0 = z(
          ([
            { scrollBy: e, scrollTop: t, deviation: n, scrollingInProgress: r },
            {
              isScrolling: o,
              isAtBottom: l,
              scrollDirection: i,
              lastJumpDueToItemResize: u,
            },
            { listState: a },
            { beforeUnshiftWith: s, shiftWithOffset: c, sizes: d, gap: f },
            { log: p },
            { recalcInProgress: m },
          ]) => {
            let g = y(
              b(
                a,
                O(u),
                C(
                  (
                    [, e, t, n],
                    [
                      { items: r, totalCount: o, bottom: l, offsetBottom: i },
                      u,
                    ],
                  ) => {
                    let a = l + i,
                      s = 0;
                    return (
                      t === o &&
                        e.length > 0 &&
                        r.length > 0 &&
                        !(
                          0 === r[0].originalIndex && 0 === e[0].originalIndex
                        ) &&
                        0 != (s = a - n) &&
                        (s += u),
                      [s, r, o, a]
                    );
                  },
                  [0, [], 0, 0],
                ),
                T(([e]) => 0 !== e),
                O(t, i, r, l, p, m),
                T(([, e, t, n, , , r]) => !r && !n && 0 !== e && "up" === t),
                I(
                  ([[e], , , , , t]) => (
                    t("Upward scrolling compensation", { amount: e }, A.DEBUG),
                    e
                  ),
                ),
              ),
            );
            function v(t) {
              t > 0
                ? (e(0, { top: -t, behavior: "auto" }), n(0, 0))
                : (n(0, 0), e(0, { top: -t, behavior: "auto" }));
            }
            return (
              b(g, O(n, o))(1, ([e, t, r]) => {
                r && eX() ? n(0, t - e) : v(-e);
              }),
              b(
                M(x(o, !1), n, m),
                T(([e, t, n]) => !e && !n && 0 !== t),
                I(([e, t]) => t),
                P(1),
              )(1, v),
              h(
                b(
                  c,
                  I((e) => ({ top: -e })),
                ),
                e,
              ),
              b(
                s,
                O(d, f),
                I(([e, { lastSize: t, groupIndices: n, sizeTree: r }, o]) => {
                  if (0 === n.length) return e * (t + o);
                  {
                    let l = 0,
                      i = X(r, 0),
                      u = 0,
                      a = 0;
                    for (; u < e; ) {
                      u++, (l += i);
                      let r = n.length === a + 1 ? 1 / 0 : n[a + 1] - n[a] - 1;
                      u + r > e && ((l -= i), (r = e - u + 1)),
                        (u += r),
                        (l += r * (t + o)),
                        a++;
                    }
                    return l;
                  }
                }),
              )(1, (t) => {
                n(0, t),
                  requestAnimationFrame(() => {
                    e(0, { top: t }),
                      requestAnimationFrame(() => {
                        n(0, 0), m(0, !1);
                      });
                  });
              }),
              { deviation: n }
            );
          },
          a(K, e_, eG, eT, U, ed),
        ),
        e1 = z(
          ([{ didMount: e }, { scrollTo: t }, { listState: n }]) => {
            let r = v(0);
            return (
              b(
                e,
                O(r),
                T(([, e]) => 0 !== e),
                I(([, e]) => ({ top: e })),
              )(1, (e) => {
                m(
                  b(
                    n,
                    R(1),
                    T((e) => e.items.length > 1),
                  ),
                  () => {
                    requestAnimationFrame(() => {
                      t(0, e);
                    });
                  },
                );
              }),
              { initialScrollTop: r }
            );
          },
          a(eO, K, eG),
          { singleton: !0 },
        ),
        e2 = z(
          ([{ viewportHeight: e }, { totalListHeight: t }]) => {
            let n = v(!1),
              r = x(
                b(
                  M(n, e, t),
                  T(([e]) => e),
                  I(([, e, t]) => Math.max(0, e - t)),
                  P(0),
                  w(),
                ),
                0,
              );
            return { alignToBottom: n, paddingTopAddition: r };
          },
          a(K, eQ),
          { singleton: !0 },
        ),
        e8 = z(([{ scrollTo: e, scrollContainerState: t }]) => {
          let n = g(),
            r = g(),
            o = g(),
            l = v(!1),
            i = v(void 0);
          return (
            h(
              b(
                M(n, r),
                I(
                  ([
                    { viewportHeight: e, scrollTop: t, scrollHeight: n },
                    { offsetTop: r },
                  ]) => ({
                    scrollTop: Math.max(0, t - r),
                    scrollHeight: n,
                    viewportHeight: e,
                  }),
                ),
              ),
              t,
            ),
            h(
              b(
                e,
                O(r),
                I(([e, { offsetTop: t }]) => ({ ...e, top: e.top + t })),
              ),
              o,
            ),
            {
              useWindowScroll: l,
              customScrollParent: i,
              windowScrollContainerState: n,
              windowViewportRect: r,
              windowScrollTo: o,
            }
          );
        }, a(K)),
        e9 = ({
          itemTop: e,
          itemBottom: t,
          viewportTop: n,
          viewportBottom: r,
          locationParams: { behavior: o, align: l, ...i },
        }) =>
          e < n
            ? { ...i, behavior: o, align: null != l ? l : "start" }
            : t > r
              ? { ...i, behavior: o, align: null != l ? l : "end" }
              : null,
        e3 = z(
          ([
            { sizes: e, totalCount: t, gap: n },
            {
              scrollTop: r,
              viewportHeight: o,
              headerHeight: l,
              fixedHeaderHeight: i,
              fixedFooterHeight: u,
              scrollingInProgress: a,
            },
            { scrollToIndex: s },
          ]) => {
            let c = g();
            return (
              h(
                b(
                  c,
                  O(e, o, t, l, i, u, r),
                  O(n),
                  I(([[e, t, n, r, o, l, i, u], s]) => {
                    let {
                        done: c,
                        behavior: d,
                        align: f,
                        calculateViewLocation: p = e9,
                        ...h
                      } = e,
                      g = ex(e, t, r - 1),
                      v = ey(g, t.offsetTree, s) + o + l,
                      y = v + ee(t.sizeTree, g)[1],
                      x = p({
                        itemTop: v,
                        itemBottom: y,
                        viewportTop: u + l,
                        viewportBottom: u + n - i,
                        locationParams: { behavior: d, align: f, ...h },
                      });
                    return (
                      x
                        ? c &&
                          m(
                            b(
                              a,
                              T((e) => !1 === e),
                              R(a(4) ? 1 : 2),
                            ),
                            c,
                          )
                        : c && c(),
                      x
                    );
                  }),
                  T((e) => null !== e),
                ),
                s,
              ),
              { scrollIntoView: c }
            );
          },
          a(eT, K, eC, eG, U),
          { singleton: !0 },
        ),
        e6 = z(
          ([
            { sizes: e, sizeRanges: t },
            { scrollTop: n },
            { initialTopMostItemIndex: r },
            { didMount: o },
          ]) => {
            let l = g(),
              i = v(void 0);
            return (
              b(l, O(e, n))(1, ([e, t, n]) => {
                e({
                  ranges: en(t.sizeTree).map(({ k: e, v: t }, n, r) => {
                    let o = r[n + 1];
                    return {
                      startIndex: e,
                      endIndex: o ? o.k - 1 : 1 / 0,
                      size: t,
                    };
                  }),
                  scrollTop: n,
                });
              }),
              h(b(i, T(c), I(e7)), r),
              h(
                b(
                  o,
                  O(i),
                  T(([, e]) => void 0 !== e),
                  w(),
                  I(([, e]) => e.ranges),
                ),
                t,
              ),
              { getState: l, restoreStateFrom: i }
            );
          },
          a(eT, K, eH, eO),
        );
      function e7(e) {
        return { offset: e.scrollTop, index: 0, align: "start" };
      }
      let e4 = z(
          ([e, t, n, r, o, l, i, u, a, s]) => ({
            ...e,
            ...t,
            ...n,
            ...r,
            ...o,
            ...l,
            ...i,
            ...u,
            ...a,
            ...s,
          }),
          a(eD, e$, eO, eK, eQ, e1, e2, e8, e3, U),
        ),
        e5 = z(
          ([
            {
              totalCount: e,
              sizeRanges: t,
              fixedItemSize: n,
              defaultItemSize: r,
              trackItemSizes: o,
              itemSize: l,
              data: i,
              firstItemIndex: u,
              groupIndices: a,
              statefulTotalCount: s,
              gap: c,
              sizes: d,
            },
            { initialTopMostItemIndex: f, scrolledToInitialItem: p },
            m,
            g,
            v,
            { listState: y, topItemsIndexes: x, ...E },
            { scrollToIndex: w },
            T,
            { topItemCount: S },
            { groupCounts: C },
            R,
          ]) => (
            h(E.rangeChanged, R.scrollSeekRangeChanged),
            h(
              b(
                R.windowViewportRect,
                I((e) => e.visibleHeight),
              ),
              m.viewportHeight,
            ),
            {
              totalCount: e,
              data: i,
              firstItemIndex: u,
              sizeRanges: t,
              initialTopMostItemIndex: f,
              scrolledToInitialItem: p,
              topItemsIndexes: x,
              topItemCount: S,
              groupCounts: C,
              fixedItemHeight: n,
              defaultItemHeight: r,
              gap: c,
              ...v,
              statefulTotalCount: s,
              listState: y,
              scrollToIndex: w,
              trackItemSizes: o,
              itemSize: l,
              groupIndices: a,
              ...E,
              ...R,
              ...m,
              sizes: d,
              ...g,
            }
          ),
          a(eT, eH, K, e6, ez, eG, eC, e0, eY, ej, e4),
        ),
        te = "-webkit-sticky",
        tt = "sticky",
        tn = eJ(() => {
          if ("undefined" == typeof document) return tt;
          let e = document.createElement("div");
          return (e.style.position = te), e.style.position === te ? te : tt;
        });
      function tr(e, t) {
        let n = o.useRef(null),
          r = o.useCallback(
            (r) => {
              let o, l;
              if (null === r || !r.offsetParent) return;
              let i = r.getBoundingClientRect(),
                u = i.width;
              if (t) {
                let e = t.getBoundingClientRect(),
                  n = i.top - e.top;
                (o = e.height - Math.max(0, n)), (l = n + t.scrollTop);
              } else
                (o = window.innerHeight - Math.max(0, i.top)),
                  (l = i.top + window.pageYOffset);
              (n.current = { offsetTop: l, visibleHeight: o, visibleWidth: u }),
                e(n.current);
            },
            [e, t],
          ),
          { callbackRef: l, ref: i } = D(r),
          u = o.useCallback(() => {
            r(i.current);
          }, [r, i]);
        return (
          o.useEffect(() => {
            if (!t)
              return (
                window.addEventListener("scroll", u),
                window.addEventListener("resize", u),
                () => {
                  window.removeEventListener("scroll", u),
                    window.removeEventListener("resize", u);
                }
              );
            {
              t.addEventListener("scroll", u);
              let e = new ResizeObserver(u);
              return (
                e.observe(t),
                () => {
                  t.removeEventListener("scroll", u), e.unobserve(t);
                }
              );
            }
          }, [u, t]),
          l
        );
      }
      let to = o.createContext(void 0),
        tl = o.createContext(void 0);
      function ti(e) {
        return e;
      }
      let tu = z(() => {
          let e = v((e) => `Item ${e}`),
            t = v(null),
            n = v((e) => `Group ${e}`),
            r = v({}),
            o = v(ti),
            l = v("div"),
            i = v(d),
            u = (e, t = null) =>
              x(
                b(
                  r,
                  I((t) => t[e]),
                  w(),
                ),
                t,
              );
          return {
            context: t,
            itemContent: e,
            groupContent: n,
            components: r,
            computeItemKey: o,
            headerFooterTag: l,
            scrollerRef: i,
            FooterComponent: u("Footer"),
            HeaderComponent: u("Header"),
            TopItemListComponent: u("TopItemList"),
            ListComponent: u("List", "div"),
            ItemComponent: u("Item", "div"),
            GroupComponent: u("Group", "div"),
            ScrollerComponent: u("Scroller", "div"),
            EmptyPlaceholder: u("EmptyPlaceholder"),
            ScrollSeekPlaceholder: u("ScrollSeekPlaceholder"),
          };
        }),
        ta = z(([e, t]) => ({ ...e, ...t }), a(e5, tu)),
        ts = ({ height: e }) =>
          o.createElement("div", { style: { height: e } }),
        tc = { position: tn(), zIndex: 1, overflowAnchor: "none" },
        td = { overflowAnchor: "none" },
        tf = o.memo(function ({ showTopList: e = !1 }) {
          let t = tC("listState"),
            n = tS("sizeRanges"),
            r = tC("useWindowScroll"),
            l = tC("customScrollParent"),
            i = tS("windowScrollContainerState"),
            u = tS("scrollContainerState"),
            a = tC("itemContent"),
            s = tC("context"),
            c = tC("groupContent"),
            f = tC("trackItemSizes"),
            { callbackRef: p } = q(
              n,
              tC("itemSize"),
              f,
              e ? d : l || r ? i : u,
              tC("log"),
              tS("gap"),
              l,
            ),
            [h, m] = o.useState(0);
          tR("deviation", (e) => {
            h !== e && m(e);
          });
          let g = tC("EmptyPlaceholder"),
            v = tC("ScrollSeekPlaceholder") || ts,
            y = tC("ListComponent"),
            x = tC("ItemComponent"),
            b = tC("GroupComponent"),
            E = tC("computeItemKey"),
            w = tC("isSeeking"),
            T = tC("groupIndices").length > 0,
            I = tC("paddingTopAddition"),
            S = tC("scrolledToInitialItem"),
            C = e
              ? {}
              : {
                  boxSizing: "border-box",
                  paddingTop: t.offsetTop + I,
                  paddingBottom: t.offsetBottom,
                  marginTop: h,
                  ...(S ? {} : { visibility: "hidden" }),
                };
          return !e && 0 === t.totalCount && g
            ? o.createElement(g, tg(g, s))
            : o.createElement(
                y,
                {
                  ...tg(y, s),
                  ref: p,
                  style: C,
                  "data-test-id": e
                    ? "virtuoso-top-item-list"
                    : "virtuoso-item-list",
                },
                (e ? t.topItems : t.items).map((e) => {
                  let n = e.originalIndex,
                    r = E(n + t.firstItemIndex, e.data, s);
                  return w
                    ? o.createElement(v, {
                        ...tg(v, s),
                        key: r,
                        index: e.index,
                        height: e.size,
                        type: e.type || "item",
                        ...("group" === e.type
                          ? {}
                          : { groupIndex: e.groupIndex }),
                      })
                    : "group" === e.type
                      ? o.createElement(
                          b,
                          {
                            ...tg(b, s),
                            key: r,
                            "data-index": n,
                            "data-known-size": e.size,
                            "data-item-index": e.index,
                            style: tc,
                          },
                          c(e.index, s),
                        )
                      : o.createElement(
                          x,
                          {
                            ...tg(x, s),
                            key: r,
                            "data-index": n,
                            "data-known-size": e.size,
                            "data-item-index": e.index,
                            "data-item-group-index": e.groupIndex,
                            item: e.data,
                            style: td,
                          },
                          T
                            ? a(e.index, e.groupIndex, e.data, s)
                            : a(e.index, e.data, s),
                        );
                }),
              );
        }),
        tp = {
          height: "100%",
          outline: "none",
          overflowY: "auto",
          position: "relative",
          WebkitOverflowScrolling: "touch",
        },
        th = { width: "100%", height: "100%", position: "absolute", top: 0 },
        tm = { width: "100%", position: tn(), top: 0, zIndex: 1 };
      function tg(e, t) {
        if ("string" != typeof e) return { context: t };
      }
      let tv = o.memo(function () {
          let e = tC("HeaderComponent"),
            t = tS("headerHeight"),
            n = tC("headerFooterTag"),
            r = Z((e) => t(V(e, "height"))),
            l = tC("context");
          return e
            ? o.createElement(n, { ref: r }, o.createElement(e, tg(e, l)))
            : null;
        }),
        ty = o.memo(function () {
          let e = tC("FooterComponent"),
            t = tS("footerHeight"),
            n = tC("headerFooterTag"),
            r = Z((e) => t(V(e, "height"))),
            l = tC("context");
          return e
            ? o.createElement(n, { ref: r }, o.createElement(e, tg(e, l)))
            : null;
        });
      function tx({ usePublisher: e, useEmitter: t, useEmitterValue: n }) {
        return o.memo(function ({ style: r, children: l, ...i }) {
          let u = e("scrollContainerState"),
            a = n("ScrollerComponent"),
            s = e("smoothScrollTargetReached"),
            c = n("scrollerRef"),
            d = n("context"),
            {
              scrollerRef: f,
              scrollByCallback: p,
              scrollToCallback: h,
            } = $(u, s, a, c);
          return (
            t("scrollTo", h),
            t("scrollBy", p),
            o.createElement(
              a,
              {
                ref: f,
                style: { ...tp, ...r },
                "data-test-id": "virtuoso-scroller",
                "data-virtuoso-scroller": !0,
                tabIndex: 0,
                ...i,
                ...tg(a, d),
              },
              l,
            )
          );
        });
      }
      function tb({ usePublisher: e, useEmitter: t, useEmitterValue: n }) {
        return o.memo(function ({ style: r, children: l, ...i }) {
          let u = e("windowScrollContainerState"),
            a = n("ScrollerComponent"),
            s = e("smoothScrollTargetReached"),
            c = n("totalListHeight"),
            f = n("deviation"),
            p = n("customScrollParent"),
            h = n("context"),
            {
              scrollerRef: m,
              scrollByCallback: g,
              scrollToCallback: v,
            } = $(u, s, a, d, p);
          return (
            N(
              () => (
                (m.current = p || window),
                () => {
                  m.current = null;
                }
              ),
              [m, p],
            ),
            t("windowScrollTo", v),
            t("scrollBy", g),
            o.createElement(
              a,
              {
                style: {
                  position: "relative",
                  ...r,
                  ...(0 !== c ? { height: c + f } : {}),
                },
                "data-virtuoso-scroller": !0,
                ...i,
                ...tg(a, h),
              },
              l,
            )
          );
        });
      }
      let tE = ({ children: e }) => {
          let t = o.useContext(to),
            n = tS("viewportHeight"),
            r = tS("fixedItemHeight"),
            l = Z(i(n, (e) => V(e, "height")));
          return (
            o.useEffect(() => {
              t && (n(t.viewportHeight), r(t.itemHeight));
            }, [t, n, r]),
            o.createElement(
              "div",
              { style: th, ref: l, "data-viewport-type": "element" },
              e,
            )
          );
        },
        tw = ({ children: e }) => {
          let t = o.useContext(to),
            n = tS("windowViewportRect"),
            r = tS("fixedItemHeight"),
            l = tr(n, tC("customScrollParent"));
          return (
            o.useEffect(() => {
              t &&
                (r(t.itemHeight),
                n({
                  offsetTop: 0,
                  visibleHeight: t.viewportHeight,
                  visibleWidth: 100,
                }));
            }, [t, n, r]),
            o.createElement(
              "div",
              { ref: l, style: th, "data-viewport-type": "window" },
              e,
            )
          );
        },
        tT = ({ children: e }) => {
          let t = tC("TopItemListComponent"),
            n = tC("headerHeight"),
            r = { ...tm, marginTop: `${n}px` },
            l = tC("context");
          return o.createElement(t || "div", { style: r, context: l }, e);
        },
        {
          Component: tI,
          usePublisher: tS,
          useEmitterValue: tC,
          useEmitter: tR,
        } = B(
          ta,
          {
            required: {},
            optional: {
              restoreStateFrom: "restoreStateFrom",
              context: "context",
              followOutput: "followOutput",
              itemContent: "itemContent",
              groupContent: "groupContent",
              overscan: "overscan",
              increaseViewportBy: "increaseViewportBy",
              totalCount: "totalCount",
              groupCounts: "groupCounts",
              topItemCount: "topItemCount",
              firstItemIndex: "firstItemIndex",
              initialTopMostItemIndex: "initialTopMostItemIndex",
              components: "components",
              atBottomThreshold: "atBottomThreshold",
              atTopThreshold: "atTopThreshold",
              computeItemKey: "computeItemKey",
              defaultItemHeight: "defaultItemHeight",
              fixedItemHeight: "fixedItemHeight",
              itemSize: "itemSize",
              scrollSeekConfiguration: "scrollSeekConfiguration",
              headerFooterTag: "headerFooterTag",
              data: "data",
              initialItemCount: "initialItemCount",
              initialScrollTop: "initialScrollTop",
              alignToBottom: "alignToBottom",
              useWindowScroll: "useWindowScroll",
              customScrollParent: "customScrollParent",
              scrollerRef: "scrollerRef",
              logLevel: "logLevel",
            },
            methods: {
              scrollToIndex: "scrollToIndex",
              scrollIntoView: "scrollIntoView",
              scrollTo: "scrollTo",
              scrollBy: "scrollBy",
              autoscrollToBottom: "autoscrollToBottom",
              getState: "getState",
            },
            events: {
              isScrolling: "isScrolling",
              endReached: "endReached",
              startReached: "startReached",
              rangeChanged: "rangeChanged",
              atBottomStateChange: "atBottomStateChange",
              atTopStateChange: "atTopStateChange",
              totalListHeightChanged: "totalListHeightChanged",
              itemsRendered: "itemsRendered",
              groupIndices: "groupIndices",
            },
          },
          o.memo(function (e) {
            let t = tC("useWindowScroll"),
              n = tC("topItemsIndexes").length > 0,
              r = tC("customScrollParent"),
              l = r || t ? t_ : tP,
              i = r || t ? tw : tE;
            return o.createElement(
              l,
              { ...e },
              n &&
                o.createElement(
                  tT,
                  null,
                  o.createElement(tf, { showTopList: !0 }),
                ),
              o.createElement(
                i,
                null,
                o.createElement(tv, null),
                o.createElement(tf, null),
                o.createElement(ty, null),
              ),
            );
          }),
        ),
        tP = tx({ usePublisher: tS, useEmitterValue: tC, useEmitter: tR }),
        t_ = tb({ usePublisher: tS, useEmitterValue: tC, useEmitter: tR }),
        tO = {
          items: [],
          offsetBottom: 0,
          offsetTop: 0,
          top: 0,
          bottom: 0,
          itemHeight: 0,
          itemWidth: 0,
        },
        tH = {
          items: [{ index: 0 }],
          offsetBottom: 0,
          offsetTop: 0,
          top: 0,
          bottom: 0,
          itemHeight: 0,
          itemWidth: 0,
        },
        { round: tk, ceil: tM, floor: tz, min: tL, max: tj } = Math;
      function tB(e, t, n) {
        return Array.from({ length: t - e + 1 }).map((t, r) => ({
          index: r + e,
          data: null == n ? void 0 : n[r + e],
        }));
      }
      function tN(e, t) {
        return e && e.column === t.column && e.row === t.row;
      }
      function tA(e, t) {
        return e && e.width === t.width && e.height === t.height;
      }
      let tW = z(
        ([
          { overscan: e, visibleRange: t, listBoundary: n },
          {
            scrollTop: r,
            viewportHeight: o,
            scrollBy: l,
            scrollTo: i,
            smoothScrollTargetReached: u,
            scrollContainerState: a,
            footerHeight: s,
            headerHeight: d,
          },
          f,
          p,
          { propsReady: m, didMount: E },
          {
            windowViewportRect: C,
            windowScrollTo: R,
            useWindowScroll: P,
            customScrollParent: _,
            windowScrollContainerState: H,
          },
          z,
        ]) => {
          let L = v(0),
            j = v(0),
            B = v(tO),
            N = v({ height: 0, width: 0 }),
            A = v({ height: 0, width: 0 }),
            W = g(),
            F = g(),
            U = v(0),
            D = v(void 0),
            Z = v({ row: 0, column: 0 });
          h(
            b(
              E,
              O(j, D),
              T(([e, t]) => e && 0 !== t),
              I(([, e, t]) => ({
                items: tB(0, e - 1, t),
                top: 0,
                bottom: 0,
                offsetBottom: 0,
                offsetTop: 0,
                itemHeight: 0,
                itemWidth: 0,
              })),
            ),
            B,
          ),
            h(
              b(
                M(k(L), t, k(Z, tN), k(A, tA), k(N, tA), D),
                I(([e, [t, n], r, o, l, i]) => {
                  let { row: u, column: a } = r,
                    { height: s, width: c } = o,
                    { width: d } = l;
                  if (0 === e || 0 === d) return tO;
                  if (0 === c) {
                    var f;
                    return (f = tB(0, 0, i)), { ...tH, items: f };
                  }
                  let p = tD(d, c, a),
                    h = p * tz((t + u) / (s + u)),
                    m = p * tM((n + u) / (s + u)) - 1;
                  m = tL(e - 1, tj(m, p - 1));
                  let g = tB((h = tL(m, tj(0, h))), m, i),
                    { top: v, bottom: y } = tF(l, r, o, g),
                    x = tM(e / p);
                  return {
                    items: g,
                    offsetTop: v,
                    offsetBottom: x * s + (x - 1) * u - y,
                    top: v,
                    bottom: y,
                    itemHeight: s,
                    itemWidth: c,
                  };
                }),
              ),
              B,
            ),
            h(
              b(
                D,
                T(c),
                I((e) => e.length),
              ),
              L,
            ),
            h(
              b(
                N,
                I(({ height: e }) => e),
              ),
              o,
            ),
            h(
              b(
                M(N, A, B, Z),
                I(([e, t, { items: n }, r]) => {
                  let { top: o, bottom: l } = tF(e, r, t, n);
                  return [o, l];
                }),
                w(eB),
              ),
              n,
            );
          let q = v(!1);
          h(
            b(
              r,
              O(q),
              I(([e, t]) => t || 0 !== e),
            ),
            q,
          );
          let V = y(
              b(
                k(B),
                T(({ items: e }) => e.length > 0),
                O(L, q),
                T(
                  ([{ items: e }, t, n]) =>
                    n && e[e.length - 1].index === t - 1,
                ),
                I(([, e]) => e - 1),
                w(),
              ),
            ),
            G = y(
              b(
                k(B),
                T(({ items: e }) => e.length > 0 && 0 === e[0].index),
                S(0),
                w(),
              ),
            ),
            $ = y(
              b(
                k(B),
                T(({ items: e }) => e.length > 0),
                I(({ items: e }) => ({
                  startIndex: e[0].index,
                  endIndex: e[e.length - 1].index,
                })),
                w(eN),
              ),
            );
          h($, p.scrollSeekRangeChanged),
            h(
              b(
                W,
                O(N, A, L, Z),
                I(([e, t, n, r, o]) => {
                  let l = eS(e),
                    { align: i, behavior: u, offset: a } = l,
                    s = l.index;
                  "LAST" === s && (s = r - 1);
                  let c = tU(t, o, n, (s = tj(0, s, tL(r - 1, s))));
                  return (
                    "end" === i
                      ? (c = tk(c - t.height + n.height))
                      : "center" === i &&
                        (c = tk(c - t.height / 2 + n.height / 2)),
                    a && (c += a),
                    { top: c, behavior: u }
                  );
                }),
              ),
              i,
            );
          let K = x(
            b(
              B,
              I((e) => e.offsetBottom + e.bottom),
            ),
            0,
          );
          return (
            h(
              b(
                C,
                I((e) => ({ width: e.visibleWidth, height: e.visibleHeight })),
              ),
              N,
            ),
            {
              data: D,
              totalCount: L,
              viewportDimensions: N,
              itemDimensions: A,
              scrollTop: r,
              scrollHeight: F,
              overscan: e,
              scrollBy: l,
              scrollTo: i,
              scrollToIndex: W,
              smoothScrollTargetReached: u,
              windowViewportRect: C,
              windowScrollTo: R,
              useWindowScroll: P,
              customScrollParent: _,
              windowScrollContainerState: H,
              deviation: U,
              scrollContainerState: a,
              footerHeight: s,
              headerHeight: d,
              initialItemCount: j,
              gap: Z,
              ...p,
              gridState: B,
              totalListHeight: K,
              ...f,
              startReached: G,
              endReached: V,
              rangeChanged: $,
              propsReady: m,
              ...z,
            }
          );
        },
        a(eD, K, e_, eK, eO, e8, U),
      );
      function tF(e, t, n, r) {
        let { height: o } = n;
        return void 0 === o || 0 === r.length
          ? { top: 0, bottom: 0 }
          : {
              top: tU(e, t, n, r[0].index),
              bottom: tU(e, t, n, r[r.length - 1].index) + o,
            };
      }
      function tU(e, t, n, r) {
        let o = tz(r / tD(e.width, n.width, t.column)),
          l = o * n.height + tj(0, o - 1) * t.row;
        return l > 0 ? l + t.row : l;
      }
      function tD(e, t, n) {
        return tj(1, tz((e + n) / (tz(t) + n)));
      }
      let tZ = z(() => {
          let e = v((e) => `Item ${e}`),
            t = v({}),
            n = v(null),
            r = v("virtuoso-grid-item"),
            o = v("virtuoso-grid-list"),
            l = v(ti),
            i = v("div"),
            u = v(d),
            a = (e, n = null) =>
              x(
                b(
                  t,
                  I((t) => t[e]),
                  w(),
                ),
                n,
              );
          return {
            context: n,
            itemContent: e,
            components: t,
            computeItemKey: l,
            itemClassName: r,
            listClassName: o,
            headerFooterTag: i,
            scrollerRef: u,
            FooterComponent: a("Footer"),
            HeaderComponent: a("Header"),
            ListComponent: a("List", "div"),
            ItemComponent: a("Item", "div"),
            ScrollerComponent: a("Scroller", "div"),
            ScrollSeekPlaceholder: a("ScrollSeekPlaceholder", "div"),
          };
        }),
        tq = z(([e, t]) => ({ ...e, ...t }), a(tW, tZ)),
        tV = o.memo(function () {
          let e = tX("gridState"),
            t = tX("listClassName"),
            n = tX("itemClassName"),
            r = tX("itemContent"),
            l = tX("computeItemKey"),
            i = tX("isSeeking"),
            u = tJ("scrollHeight"),
            a = tX("ItemComponent"),
            s = tX("ListComponent"),
            c = tX("ScrollSeekPlaceholder"),
            d = tX("context"),
            f = tJ("itemDimensions"),
            p = tJ("gap"),
            h = tX("log"),
            m = Z((e) => {
              u(e.parentElement.parentElement.scrollHeight);
              let t = e.firstChild;
              t && f(t.getBoundingClientRect()),
                p({
                  row: t8("row-gap", getComputedStyle(e).rowGap, h),
                  column: t8("column-gap", getComputedStyle(e).columnGap, h),
                });
            });
          return o.createElement(
            s,
            {
              ref: m,
              className: t,
              ...tg(s, d),
              style: { paddingTop: e.offsetTop, paddingBottom: e.offsetBottom },
              "data-test-id": "virtuoso-item-list",
            },
            e.items.map((t) => {
              let u = l(t.index, t.data, d);
              return i
                ? o.createElement(c, {
                    key: u,
                    ...tg(c, d),
                    index: t.index,
                    height: e.itemHeight,
                    width: e.itemWidth,
                  })
                : o.createElement(
                    a,
                    {
                      ...tg(a, d),
                      className: n,
                      "data-index": t.index,
                      key: u,
                    },
                    r(t.index, t.data, d),
                  );
            }),
          );
        }),
        tG = o.memo(function () {
          let e = tX("HeaderComponent"),
            t = tJ("headerHeight"),
            n = tX("headerFooterTag"),
            r = Z((e) => t(V(e, "height"))),
            l = tX("context");
          return e
            ? o.createElement(n, { ref: r }, o.createElement(e, tg(e, l)))
            : null;
        }),
        t$ = o.memo(function () {
          let e = tX("FooterComponent"),
            t = tJ("footerHeight"),
            n = tX("headerFooterTag"),
            r = Z((e) => t(V(e, "height"))),
            l = tX("context");
          return e
            ? o.createElement(n, { ref: r }, o.createElement(e, tg(e, l)))
            : null;
        }),
        tK = ({ children: e }) => {
          let t = o.useContext(tl),
            n = tJ("itemDimensions"),
            r = tJ("viewportDimensions"),
            l = Z((e) => {
              r(e.getBoundingClientRect());
            });
          return (
            o.useEffect(() => {
              t &&
                (r({ height: t.viewportHeight, width: t.viewportWidth }),
                n({ height: t.itemHeight, width: t.itemWidth }));
            }, [t, r, n]),
            o.createElement("div", { style: th, ref: l }, e)
          );
        },
        tY = ({ children: e }) => {
          let t = o.useContext(tl),
            n = tJ("windowViewportRect"),
            r = tJ("itemDimensions"),
            l = tr(n, tX("customScrollParent"));
          return (
            o.useEffect(() => {
              t &&
                (r({ height: t.itemHeight, width: t.itemWidth }),
                n({
                  offsetTop: 0,
                  visibleHeight: t.viewportHeight,
                  visibleWidth: t.viewportWidth,
                }));
            }, [t, n, r]),
            o.createElement("div", { ref: l, style: th }, e)
          );
        },
        {
          Component: tQ,
          usePublisher: tJ,
          useEmitterValue: tX,
          useEmitter: t0,
        } = B(
          tq,
          {
            optional: {
              context: "context",
              totalCount: "totalCount",
              overscan: "overscan",
              itemContent: "itemContent",
              components: "components",
              computeItemKey: "computeItemKey",
              data: "data",
              initialItemCount: "initialItemCount",
              scrollSeekConfiguration: "scrollSeekConfiguration",
              headerFooterTag: "headerFooterTag",
              listClassName: "listClassName",
              itemClassName: "itemClassName",
              useWindowScroll: "useWindowScroll",
              customScrollParent: "customScrollParent",
              scrollerRef: "scrollerRef",
              logLevel: "logLevel",
            },
            methods: {
              scrollTo: "scrollTo",
              scrollBy: "scrollBy",
              scrollToIndex: "scrollToIndex",
            },
            events: {
              isScrolling: "isScrolling",
              endReached: "endReached",
              startReached: "startReached",
              rangeChanged: "rangeChanged",
              atBottomStateChange: "atBottomStateChange",
              atTopStateChange: "atTopStateChange",
            },
          },
          o.memo(function ({ ...e }) {
            let t = tX("useWindowScroll"),
              n = tX("customScrollParent"),
              r = n || t ? t2 : t1,
              l = n || t ? tY : tK;
            return o.createElement(
              r,
              { ...e },
              o.createElement(
                l,
                null,
                o.createElement(tG, null),
                o.createElement(tV, null),
                o.createElement(t$, null),
              ),
            );
          }),
        ),
        t1 = tx({ usePublisher: tJ, useEmitterValue: tX, useEmitter: t0 }),
        t2 = tb({ usePublisher: tJ, useEmitterValue: tX, useEmitter: t0 });
      function t8(e, t, n) {
        return ("normal" === t ||
          (null == t ? void 0 : t.endsWith("px")) ||
          n(`${e} was not resolved to pixel value correctly`, t, A.WARN),
        "normal" === t)
          ? 0
          : parseInt(null != t ? t : "0", 10);
      }
      let t9 = tQ,
        t3 = z(() => {
          let e = v((e) => o.createElement("td", null, "Item $", e)),
            t = v(null),
            n = v(null),
            r = v(null),
            l = v({}),
            i = v(ti),
            u = v(d),
            a = (e, t = null) =>
              x(
                b(
                  l,
                  I((t) => t[e]),
                  w(),
                ),
                t,
              );
          return {
            context: t,
            itemContent: e,
            fixedHeaderContent: n,
            fixedFooterContent: r,
            components: l,
            computeItemKey: i,
            scrollerRef: u,
            TableComponent: a("Table", "table"),
            TableHeadComponent: a("TableHead", "thead"),
            TableFooterComponent: a("TableFoot", "tfoot"),
            TableBodyComponent: a("TableBody", "tbody"),
            TableRowComponent: a("TableRow", "tr"),
            ScrollerComponent: a("Scroller", "div"),
            EmptyPlaceholder: a("EmptyPlaceholder"),
            ScrollSeekPlaceholder: a("ScrollSeekPlaceholder"),
            FillerRow: a("FillerRow"),
          };
        }),
        t6 = z(([e, t]) => ({ ...e, ...t }), a(e5, t3)),
        t7 = ({ height: e }) =>
          o.createElement(
            "tr",
            null,
            o.createElement("td", { style: { height: e } }),
          ),
        t4 = ({ height: e }) =>
          o.createElement(
            "tr",
            null,
            o.createElement("td", {
              style: { height: e, padding: 0, border: 0 },
            }),
          ),
        t5 = o.memo(function () {
          let e = no("listState"),
            t = nr("sizeRanges"),
            n = no("useWindowScroll"),
            r = no("customScrollParent"),
            l = nr("windowScrollContainerState"),
            i = nr("scrollContainerState"),
            u = no("itemContent"),
            a = no("trackItemSizes"),
            { callbackRef: s, ref: c } = q(
              t,
              no("itemSize"),
              a,
              r || n ? l : i,
              no("log"),
              void 0,
              r,
            ),
            [d, f] = o.useState(0);
          nl("deviation", (e) => {
            d !== e && ((c.current.style.marginTop = `${e}px`), f(e));
          });
          let p = no("EmptyPlaceholder"),
            h = no("ScrollSeekPlaceholder") || t7,
            m = no("FillerRow") || t4,
            g = no("TableBodyComponent"),
            v = no("TableRowComponent"),
            y = no("computeItemKey"),
            x = no("isSeeking"),
            b = no("paddingTopAddition"),
            E = no("firstItemIndex"),
            w = no("statefulTotalCount"),
            T = no("context");
          if (0 === w && p) return o.createElement(p, tg(p, T));
          let I = e.offsetTop + b + d,
            S = e.offsetBottom,
            C =
              I > 0
                ? o.createElement(m, {
                    height: I,
                    key: "padding-top",
                    context: T,
                  })
                : null,
            R =
              S > 0
                ? o.createElement(m, {
                    height: S,
                    key: "padding-bottom",
                    context: T,
                  })
                : null,
            P = e.items.map((e) => {
              let t = e.originalIndex,
                n = y(t + E, e.data, T);
              return x
                ? o.createElement(h, {
                    ...tg(h, T),
                    key: n,
                    index: e.index,
                    height: e.size,
                    type: e.type || "item",
                  })
                : o.createElement(
                    v,
                    {
                      ...tg(v, T),
                      key: n,
                      "data-index": t,
                      "data-known-size": e.size,
                      "data-item-index": e.index,
                      item: e.data,
                      style: { overflowAnchor: "none" },
                    },
                    u(e.index, e.data, T),
                  );
            });
          return o.createElement(
            g,
            { ref: s, "data-test-id": "virtuoso-item-list", ...tg(g, T) },
            [C, ...P, R],
          );
        }),
        ne = ({ children: e }) => {
          let t = o.useContext(to),
            n = nr("viewportHeight"),
            r = nr("fixedItemHeight"),
            l = Z(i(n, (e) => V(e, "height")));
          return (
            o.useEffect(() => {
              t && (n(t.viewportHeight), r(t.itemHeight));
            }, [t, n, r]),
            o.createElement(
              "div",
              { style: th, ref: l, "data-viewport-type": "element" },
              e,
            )
          );
        },
        nt = ({ children: e }) => {
          let t = o.useContext(to),
            n = nr("windowViewportRect"),
            r = nr("fixedItemHeight"),
            l = tr(n, no("customScrollParent"));
          return (
            o.useEffect(() => {
              t &&
                (r(t.itemHeight),
                n({
                  offsetTop: 0,
                  visibleHeight: t.viewportHeight,
                  visibleWidth: 100,
                }));
            }, [t, n, r]),
            o.createElement(
              "div",
              { ref: l, style: th, "data-viewport-type": "window" },
              e,
            )
          );
        },
        {
          Component: nn,
          usePublisher: nr,
          useEmitterValue: no,
          useEmitter: nl,
        } = B(
          t6,
          {
            required: {},
            optional: {
              context: "context",
              followOutput: "followOutput",
              firstItemIndex: "firstItemIndex",
              itemContent: "itemContent",
              fixedHeaderContent: "fixedHeaderContent",
              fixedFooterContent: "fixedFooterContent",
              overscan: "overscan",
              increaseViewportBy: "increaseViewportBy",
              totalCount: "totalCount",
              topItemCount: "topItemCount",
              initialTopMostItemIndex: "initialTopMostItemIndex",
              components: "components",
              groupCounts: "groupCounts",
              atBottomThreshold: "atBottomThreshold",
              atTopThreshold: "atTopThreshold",
              computeItemKey: "computeItemKey",
              defaultItemHeight: "defaultItemHeight",
              fixedItemHeight: "fixedItemHeight",
              itemSize: "itemSize",
              scrollSeekConfiguration: "scrollSeekConfiguration",
              data: "data",
              initialItemCount: "initialItemCount",
              initialScrollTop: "initialScrollTop",
              alignToBottom: "alignToBottom",
              useWindowScroll: "useWindowScroll",
              customScrollParent: "customScrollParent",
              scrollerRef: "scrollerRef",
              logLevel: "logLevel",
            },
            methods: {
              scrollToIndex: "scrollToIndex",
              scrollIntoView: "scrollIntoView",
              scrollTo: "scrollTo",
              scrollBy: "scrollBy",
            },
            events: {
              isScrolling: "isScrolling",
              endReached: "endReached",
              startReached: "startReached",
              rangeChanged: "rangeChanged",
              atBottomStateChange: "atBottomStateChange",
              atTopStateChange: "atTopStateChange",
              totalListHeightChanged: "totalListHeightChanged",
              itemsRendered: "itemsRendered",
              groupIndices: "groupIndices",
            },
          },
          o.memo(function (e) {
            let t = no("useWindowScroll"),
              n = no("customScrollParent"),
              r = nr("fixedHeaderHeight"),
              l = nr("fixedFooterHeight"),
              u = no("fixedHeaderContent"),
              a = no("fixedFooterContent"),
              s = no("context"),
              c = Z(i(r, (e) => V(e, "height"))),
              d = Z(i(l, (e) => V(e, "height"))),
              f = n || t ? nu : ni,
              p = n || t ? nt : ne,
              h = no("TableComponent"),
              m = no("TableHeadComponent"),
              g = no("TableFooterComponent"),
              v = u
                ? o.createElement(
                    m,
                    {
                      key: "TableHead",
                      style: { zIndex: 2, position: "sticky", top: 0 },
                      ref: c,
                      ...tg(m, s),
                    },
                    u(),
                  )
                : null,
              y = a
                ? o.createElement(
                    g,
                    {
                      key: "TableFoot",
                      style: { zIndex: 1, position: "sticky", bottom: 0 },
                      ref: d,
                      ...tg(g, s),
                    },
                    a(),
                  )
                : null;
            return o.createElement(
              f,
              { ...e },
              o.createElement(
                p,
                null,
                o.createElement(
                  h,
                  {
                    style: { borderSpacing: 0, overflowAnchor: "none" },
                    ...tg(h, s),
                  },
                  [v, o.createElement(t5, { key: "TableBody" }), y],
                ),
              ),
            );
          }),
        ),
        ni = tx({ usePublisher: nr, useEmitterValue: no, useEmitter: nl }),
        nu = tb({ usePublisher: nr, useEmitterValue: no, useEmitter: nl });
    },
  },
]);

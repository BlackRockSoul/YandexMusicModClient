(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7153],
  {
    71230: function (e, t, i) {
      "use strict";
      i.d(t, {
        i: function () {
          return d;
        },
      });
      var a,
        r,
        n = i(98639),
        l = {
          5881: (e, t, i) => {
            function a() {
              for (var e, t, i = 0, a = ""; i < arguments.length; )
                (e = arguments[i++]) &&
                  (t = (function e(t) {
                    var i,
                      a,
                      r = "";
                    if ("string" == typeof t || "number" == typeof t) r += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (i = 0; i < t.length; i++)
                          t[i] && (a = e(t[i])) && (r && (r += " "), (r += a));
                      else for (i in t) t[i] && (r && (r += " "), (r += i));
                    }
                    return r;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            i.r(t), i.d(t, { clsx: () => a, default: () => r });
            let r = a;
          },
          5264: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "JkKcxRVvjK7lcakkEliC",
              root_alwaysThumb: "cOKDtLfDZAuPXftfS2WM",
              root_trackSize_xs: "IB_XOYAyYPK4aszY9R1F",
              root_trackSize_s: "SHvrm0VRiLVwGqJJjNO8",
              root_thumbSize_xs: "BlvJwKLYTicnbJ3Qyuou",
              root_neverThumb: "dDJBVBTkzY5zY7vtSbyr",
              root_thumbSize_s: "qpvIbN4_hF6CqK0bjCq7",
              root_thumbSize_m: "P8_ABi1YnAOS8p8EY87f",
            };
          },
          6161: (e, t, i) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = i(810),
              r = Symbol.for("react.element"),
              n = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, i) {
              var a,
                n = {},
                c = null,
                d = null;
              for (a in (void 0 !== i && (c = "" + i),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                l.call(t, a) && !s.hasOwnProperty(a) && (n[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === n[a] && (n[a] = t[a]);
              return {
                $$typeof: r,
                type: e,
                key: c,
                ref: d,
                props: n,
                _owner: o.current,
              };
            }
            (t.Fragment = n), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, i) => {
            e.exports = i(6161);
          },
          2342: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ThumbVariant = t.DEFAULT_MAX_VALUE = t.SliderMode = void 0),
              (t.SliderMode = { NORMAL: "normal", DEFERRED: "deferred" }),
              (t.DEFAULT_MAX_VALUE = 100),
              (t.ThumbVariant = {
                HOVER: "hover",
                NEVER: "never",
                ALWAYS: "always",
              });
          },
          7886: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Slider = void 0);
            let r = i(9541),
              n = i(5881),
              l = i(810),
              o = i(2342),
              s = a(i(5264)),
              c = (e) => {
                let {
                    forwardRef: t,
                    className: i,
                    value: a,
                    secondaryValue: c = o.DEFAULT_MAX_VALUE,
                    maxValue: d = o.DEFAULT_MAX_VALUE,
                    thumbSize: u = "m",
                    trackSize: _ = "s",
                    mode: m = o.SliderMode.NORMAL,
                    onChange: p,
                    showThumbVariant: v = o.ThumbVariant.HOVER,
                    ...y
                  } = e,
                  [x, h] = (0, l.useState)(null != a ? a : 0),
                  [f, b] = (0, l.useState)(!1),
                  [C, g] = (0, l.useState)(!1);
                (0, l.useEffect)(() => {
                  f || h(a);
                }, [a, f]),
                  (0, l.useEffect)(() => {
                    !f && C && m === o.SliderMode.DEFERRED && (p(x, !0), g(!1));
                  }, [m, f, p, x, C]);
                let N = (0, l.useCallback)(
                    (e) => {
                      let t = Number(e.target.value);
                      h(t),
                        g(!0),
                        "normal" === m ? (p(t, !0), g(!1)) : p(t, !1);
                    },
                    [h, p, m],
                  ),
                  j = (0, l.useCallback)(
                    (e) => {
                      let t = !1,
                        i = !1;
                      e.nativeEvent instanceof window.MouseEvent
                        ? ((t = 0 === e.nativeEvent.button),
                          (i = "mousedown" === e.nativeEvent.type))
                        : ((t =
                            1 === e.nativeEvent.touches.length ||
                            "touchend" === e.nativeEvent.type),
                          (i = "touchstart" === e.nativeEvent.type)),
                        t && b(i);
                    },
                    [b],
                  ),
                  S = (0, l.useCallback)(() => {
                    b(!1);
                  }, [b]),
                  P = (0, l.useMemo)(() => {
                    let e = (100 * Math.min(x, d)) / d,
                      t = (100 * Math.min(c, d)) / d;
                    return {
                      backgroundSize: "".concat(e, "% 100%"),
                      "--seek-before-width": "".concat(e, "%"),
                      "--buffered-width": "".concat(t, "%"),
                    };
                  }, [x, c, d]);
                return (0, r.jsx)("input", {
                  ref: t,
                  className: (0, n.clsx)(
                    s.default.root,
                    {
                      [s.default["root_thumbSize_".concat(u)]]: u,
                      [s.default["root_trackSize_".concat(_)]]: _,
                      [s.default["root_".concat(v, "Thumb")]]: v,
                    },
                    i,
                  ),
                  type: "range",
                  max: d,
                  value: x,
                  style: P,
                  onTouchStart: j,
                  onTouchEnd: j,
                  onMouseDown: j,
                  onMouseUp: j,
                  onMouseOut: S,
                  onBlur: S,
                  onChange: N,
                  ...y,
                });
              };
            t.Slider = (0, l.forwardRef)((e, t) =>
              (0, r.jsx)(c, { forwardRef: t, ...e }),
            );
          },
          810: (e) => {
            e.exports = r || (r = i.t(n, 2));
          },
        },
        o = {};
      function s(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var i = (o[e] = { exports: {} });
        return l[e].call(i.exports, i, i.exports, s), i.exports;
      }
      (s.d = (e, t) => {
        for (var i in t)
          s.o(t, i) &&
            !s.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (s.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var c = {};
      Object.defineProperty(c, "X", { value: !0 }),
        (c.i = void 0),
        (a = s(7886)),
        Object.defineProperty(c, "i", {
          enumerable: !0,
          get: function () {
            return a.Slider;
          },
        });
      var d = c.i;
      c.X;
    },
    56570: function (e, t, i) {
      "use strict";
      i.d(t, {
        Bm: function () {
          return S;
        },
        ag: function () {
          return L;
        },
        MC: function () {
          return o;
        },
      });
      var a = i(42288);
      let r = (e) => {
          let { id: t, type: i, value: r } = e;
          return (0, a.pj)({
            id: t || null,
            type: i || null,
            value: r || null,
          });
        },
        n = (e) => {
          let { text: t, textColor: i, color: n, action: l } = e;
          return (0, a.pj)({
            text: t || null,
            textColor: i || null,
            color: n || null,
            action: l && r(l),
          });
        },
        l = (e) => {
          let {
            bgUrl: t,
            bgColor: i,
            title: r,
            text: l,
            titleColor: o,
            textColor: s,
            imageUrl: c,
            buttons: d,
          } = e;
          return (0, a.pj)({
            bgUrl: t || null,
            bgColor: i || null,
            title: r || null,
            text: l || null,
            titleColor: o || null,
            textColor: s || null,
            imageUrl: c || null,
            buttons: d.filter((e) => e.text).map(n),
          });
        },
        o = (e) =>
          (0, a.pj)({
            anchorId: e.anchorId,
            screenId: e.screenId,
            content: l(e.div),
          });
      var s = i(9753),
        c = i(60836),
        d = i(9544),
        u = i(98639),
        _ = i(80542),
        m = i(86939),
        p = i(2570),
        v = i(69869);
      let y = a.V5.model("CommunicationButtonAction", {
          id: a.V5.maybeNull(a.V5.string),
          type: a.V5.maybeNull(a.V5.enumeration(Object.values(v.sy))),
          value: a.V5.maybeNull(a.V5.string),
        }),
        x = a.V5.model("CommunicationButton", {
          text: a.V5.maybeNull(a.V5.string),
          color: a.V5.maybeNull(a.V5.enumeration(Object.values(v.rp))),
          action: a.V5.maybeNull(y),
          textColor: a.V5.maybeNull(a.V5.string),
        });
      var h = i(39513),
        f = i(63394),
        b = i(91147),
        C = i.n(b);
      let g = (0, d.Pi)((e) => {
        let { anchorId: t, screenId: i, button: a, buttonSize: r, hide: n } = e,
          { communication: l } = (0, f.oR)(),
          o = (0, u.useMemo)(() => {
            if (a.action && a.action.type === v.sy.LINK) return a.action.value;
          }, [a]),
          d = (0, f.s0)(o),
          _ = (0, u.useCallback)(() => {
            if (a.action)
              switch (
                (t && i && a.action.id && l.action(t, i, a.action.id),
                a.action.type)
              ) {
                case v.sy.LINK:
                  a.action.value && d();
                  return;
                case v.sy.CLOSE:
                  null == n || n();
                  return;
              }
          }, [t, i, l, a.action, n, d]),
          m = (0, u.useMemo)(() => {
            if (a.textColor) return { color: a.textColor };
          }, [a.textColor]);
        return (0, s.jsx)(h.z, {
          className: (0, c.W)(C().root, C()["root_".concat(a.color)]),
          role: o ? "link" : "button",
          color: a.color ? a.color : void 0,
          radius: "xxxl",
          onClick: _,
          size: r,
          children: (0, s.jsx)(p.Caption, {
            className: C().text,
            variant: "div",
            type: "text",
            size: "m",
            style: m,
            children: a.text,
          }),
        });
      });
      var N = i(82487),
        j = i.n(N);
      let S = (0, d.Pi)((e) => {
          var t, i, a, r;
          let { className: n, barBellow: l } = e,
            { formatMessage: o } = (0, _.Z)(),
            d = (0, u.useMemo)(() => {
              let e = { title: {}, text: {}, bg: {} };
              if (!l.barBellowItem) return e;
              let {
                titleColor: t,
                textColor: i,
                bgColor: a,
                bgUrl: r,
              } = l.barBellowItem.content;
              return (
                t && (e.title.color = t),
                i && (e.text.color = i),
                a && (e.bg.backgroundColor = a),
                r &&
                  (e.bg.backgroundImage = 'url("'.concat(
                    l.barBellowItem.content.bgUrl,
                    '")',
                  )),
                e
              );
            }, [l]),
            v = (0, u.useMemo)(() => {
              var e;
              return null === (e = l.barBellowItem) || void 0 === e
                ? void 0
                : e.content.buttons.map((e) => {
                    var t, i;
                    return (0, s.jsx)(
                      g,
                      {
                        anchorId:
                          null === (t = l.barBellowItem) || void 0 === t
                            ? void 0
                            : t.anchorId,
                        screenId:
                          null === (i = l.barBellowItem) || void 0 === i
                            ? void 0
                            : i.screenId,
                        button: e,
                        buttonSize: "l",
                        hide: l.hide,
                      },
                      e.text,
                    );
                  });
            }, [l]),
            y = (0, u.useCallback)(
              (e) => {
                e.animationName.includes("show")
                  ? l.setAnimationAlreadyBeenShown()
                  : e.animationName.includes("hide") &&
                    l.setAnimationAlreadyBeenHidden();
              },
              [l],
            ),
            x = (0, u.useCallback)(
              (e) => {
                e.animationName.includes("show") &&
                  l.setAnimationAlreadyBeenStarted();
              },
              [l],
            );
          return (0, s.jsxs)("section", {
            className: (0, c.W)(
              j().root,
              {
                [j().root_hidden]: !l.isVisible && !l.hideWithAnimation,
                [j().root_show]: l.showWithAnimation,
                [j().root_hide]: l.hideWithAnimation,
              },
              n,
            ),
            style: d.bg,
            onAnimationStart: x,
            onAnimationEnd: y,
            "aria-label": o({ id: "bar-bellow.section-name" }),
            children: [
              (null === (t = l.barBellowItem) || void 0 === t
                ? void 0
                : t.content.imageUrl) &&
                (0, s.jsx)(m.Image, {
                  className: j().image,
                  "aria-hidden": !0,
                  src:
                    null === (i = l.barBellowItem) || void 0 === i
                      ? void 0
                      : i.content.imageUrl,
                  fit: "contain",
                  withAvatarReplace: !0,
                  withAspectRatio: !0,
                }),
              (0, s.jsxs)("div", {
                className: j().content,
                children: [
                  (null === (a = l.barBellowItem) || void 0 === a
                    ? void 0
                    : a.content.title) &&
                    (0, s.jsx)(p.Heading, {
                      className: j().title,
                      variant: "h3",
                      style: d.title,
                      lineClamp: 2,
                      children: l.barBellowItem.content.title,
                    }),
                  (null === (r = l.barBellowItem) || void 0 === r
                    ? void 0
                    : r.content.text) &&
                    (0, s.jsx)(p.Heading, {
                      className: j().text,
                      variant: "h4",
                      size: "xs",
                      style: d.text,
                      lineClamp: 2,
                      children: l.barBellowItem.content.text,
                    }),
                ],
              }),
              (0, s.jsx)("div", { className: j().buttons, children: v }),
            ],
          });
        }),
        P = a.V5.model("BarBellowContent", {
          bgUrl: a.V5.maybeNull(a.V5.string),
          bgColor: a.V5.maybeNull(a.V5.string),
          imageUrl: a.V5.maybeNull(a.V5.string),
          title: a.V5.maybeNull(a.V5.string),
          titleColor: a.V5.maybeNull(a.V5.string),
          text: a.V5.maybeNull(a.V5.string),
          textColor: a.V5.maybeNull(a.V5.string),
          buttons: a.V5.array(x),
        }),
        w = a.V5.model("BarBellow", {
          anchorId: a.V5.enumeration(Object.values(v.o1)),
          screenId: a.V5.string,
          content: P,
        }),
        L = a.V5.model("BarBellowMain", {
          anchorId: a.V5.maybe(a.V5.string),
          isVisible: a.V5.maybe(a.V5.boolean),
          hasAnimationAlreadyBeenShown: a.V5.maybe(a.V5.boolean),
          hasAnimationAlreadyBeenHidden: a.V5.maybe(a.V5.boolean),
          hasAnimationAlreadyBeenStarted: a.V5.maybe(a.V5.boolean),
          list: a.V5.array(w),
        })
          .views((e) => ({
            get barBellowItem() {
              return e.list.find((t) => t.anchorId === e.anchorId);
            },
            get showWithAnimation() {
              return !e.hasAnimationAlreadyBeenShown && e.isVisible;
            },
            get hideWithAnimation() {
              return (
                e.hasAnimationAlreadyBeenShown &&
                !e.hasAnimationAlreadyBeenHidden &&
                !e.isVisible
              );
            },
          }))
          .actions((e) => ({
            setAnchorId(t) {
              e.anchorId = t;
            },
            show() {
              e.isVisible = !0;
            },
            hide() {
              e.isVisible = !1;
            },
            setAnimationAlreadyBeenShown() {
              e.hasAnimationAlreadyBeenShown = !0;
            },
            setAnimationAlreadyBeenHidden() {
              e.hasAnimationAlreadyBeenHidden = !0;
            },
            setAnimationAlreadyBeenStarted() {
              e.hasAnimationAlreadyBeenStarted = !0;
            },
          }));
    },
    29569: function (e, t, i) {
      "use strict";
      i.d(t, {
        F: function () {
          return y;
        },
        K: function () {
          return m;
        },
      });
      var a = i(9753),
        r = i(60836),
        n = i(9544),
        l = i(98639),
        o = i(80542),
        s = i(23881),
        c = i(39513),
        d = i(28852),
        u = i(71230),
        _ = i(63394);
      let m = () => {
        let e = (0, _.uK)().get(_.V0),
          t = (0, _.R$)();
        return (0, l.useCallback)(
          async (i) => {
            if (0 !== i)
              e.set(_.BU.YmPlayerPrevVolume, i),
                await (null == t ? void 0 : t.setVolume(0)),
                e.set(_.BU.YmPlayerVolume, 0);
            else {
              var a;
              let i =
                null !== (a = e.get(_.BU.YmPlayerPrevVolume)) && void 0 !== a
                  ? a
                  : 1;
              e.remove(_.BU.YmPlayerPrevVolume),
                await (null == t ? void 0 : t.setVolume(i)),
                e.set(_.BU.YmPlayerVolume, i);
            }
          },
          [t, e],
        );
      };
      var p = i(95904),
        v = i.n(p);
      let y = (0, n.Pi)((e) => {
        var t, i;
        let { className: n } = e,
          { formatMessage: p } = (0, o.Z)(),
          y = (0, _.uK)(),
          x = (0, _.R$)(),
          { sonataState: h } = (0, _.oR)(),
          f = m(),
          b = y.get(_.V0),
          C =
            null !==
              (i =
                null !== (t = b.get(_.BU.YmPlayerVolume)) && void 0 !== t
                  ? t
                  : h.volume) && void 0 !== i
              ? i
              : 1,
          g = (0, l.useCallback)(
            (e) => {
              null == x || x.setVolume(e), b.set(_.BU.YmPlayerVolume, e);
            },
            [x, b],
          ),
          N = (0, l.useCallback)(async () => {
            await f(h.volume);
          }, [f, h.volume]),
          j = p(
            0 === h.volume
              ? { id: "player-actions.volume-on" }
              : { id: "player-actions.volume-off" },
          );
        return (0, a.jsxs)("div", {
          className: (0, r.W)(v().root, n),
          children: [
            (0, a.jsx)(c.z, {
              radius: "round",
              size: "xxxs",
              variant: "text",
              withRipple: !1,
              onClick: N,
              "aria-label": j,
              icon: (0, a.jsx)(d.J, {
                size: "xs",
                className: v().icon,
                variant: 0 === C ? "volumeOff" : "volume",
              }),
              className: v().button,
              ...(0, s.BA)(s.bG.changeVolume.CHANGE_VOLUME_BUTTON),
            }),
            (0, a.jsx)(u.i, {
              thumbSize: "s",
              trackSize: "s",
              value: C,
              maxValue: 1,
              step: 0.01,
              onChange: g,
              "aria-label": p({ id: "player-actions.volume-control" }),
              ...(0, s.BA)(s.bG.changeVolume.CHANGE_VOLUME_SLIDER),
            }),
          ],
        });
      });
    },
    51952: function (e, t, i) {
      "use strict";
      i.d(t, {
        wp: function () {
          return eQ;
        },
        Lc: function () {
          return e2;
        },
      });
      var a,
        r,
        n,
        l,
        o,
        s,
        c,
        d,
        u,
        _,
        m,
        p,
        v,
        y = i(9753),
        x = i(60836),
        h = i(9544),
        f = i(98639),
        b = i.t(f, 2),
        C = i(23881),
        g = i(63394),
        N = i(23897);
      let j = () => {
        let [e, t] = (0, f.useState)(!1),
          i = (0, f.useMemo)(
            () =>
              (0, N.Z)(
                () => {
                  t(window.innerWidth < 1024);
                },
                100,
                { trailing: !1 },
              ),
            [t],
          );
        return (
          (0, f.useEffect)(
            () => (
              window.addEventListener("resize", i),
              i(),
              () => {
                window.removeEventListener("resize", i);
              }
            ),
            [i],
          ),
          e && !1
        );
      };
      var S = i(31695),
        P = i.n(S),
        w = i(80542),
        L = i(31014),
        k = i(37117),
        A = i(39513),
        B = i(28852),
        M = i(29901),
        E = {
          5881: (e, t, i) => {
            function a() {
              for (var e, t, i = 0, a = ""; i < arguments.length; )
                (e = arguments[i++]) &&
                  (t = (function e(t) {
                    var i,
                      a,
                      r = "";
                    if ("string" == typeof t || "number" == typeof t) r += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (i = 0; i < t.length; i++)
                          t[i] && (a = e(t[i])) && (r && (r += " "), (r += a));
                      else for (i in t) t[i] && (r && (r += " "), (r += i));
                    }
                    return r;
                  })(e)) &&
                  (a && (a += " "), (a += t));
              return a;
            }
            i.r(t), i.d(t, { clsx: () => a, default: () => r });
            let r = a;
          },
          2329: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "NGdj0oZ2Bt8qdZhP2Tzt",
              root_collapsed: "rece5errcONnjJeX0YW8",
              root_direction_vertical: "QilmoKKJwk6f0BdkYgrA",
              root_direction_horizontal: "AO4rWY4RLVh48fwQw5Qs",
            };
          },
          9948: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "yuyI2hMAT7qyL1N14MAQ",
              root_direction_vertical: "xfFtKQpgAYvC2jI1tBtS",
              root_direction_horizontal: "OGlYJO0lZgpSOhfU2Iru",
            };
          },
          8850: (e, t, i) => {
            i.r(t), i.d(t, { default: () => a });
            let a = {
              root: "Bp1d3U6W8Nrbqi3MRQS_",
              root_direction_vertical: "hYfgO_Y8c4rrQsZJWTDZ",
              ripple: "UiZ4QyGEVzfvZ3QfQqqA",
              root_direction_horizontal: "X_Lr5kqrhzMO6kX8v92s",
              root_collapsed: "Q3gGGaIXiJ_oQTiVZBfl",
              root_variant_main: "H4trq_Zx2d9qOnQgxmxr",
              root_animate: "Kr9rXeXGlqHee2euqH0u",
              animation_width: "k8zKIZRDy6LmoaIcEpo8",
              item: "A4bDkbQHkwWNGqxO9qhW",
              item_selected: "mAd9pgMkWVX5ktCgYINQ",
              item_direction_vertical: "Xx9Tg5ugzg1pkf8Zh421",
              item_direction_horizontal: "fQVXazc9HwT3NQ8dywCh",
              iconContainer: "zpkgiiHgDpbBThy6gavq",
              textContainer: "ZrkG6gNYcr4h3hfkhyT1",
              textContainer_selected: "xENlRAFvRskKnt8LUObC",
              textContainer_direction_horizontal: "xE5fIMRnjd8oSm5BOhpI",
            };
          },
          6161: (e, t, i) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var a = i(810),
              r = Symbol.for("react.element"),
              n = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              o =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, i) {
              var a,
                n = {},
                c = null,
                d = null;
              for (a in (void 0 !== i && (c = "" + i),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                l.call(t, a) && !s.hasOwnProperty(a) && (n[a] = t[a]);
              if (e && e.defaultProps)
                for (a in (t = e.defaultProps))
                  void 0 === n[a] && (n[a] = t[a]);
              return {
                $$typeof: r,
                type: e,
                key: c,
                ref: d,
                props: n,
                _owner: o.current,
              };
            }
            (t.Fragment = n), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, i) => {
            e.exports = i(6161);
          },
          9440: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.AVAILABLE_SIZES = t.DEFAULT_SIZE = void 0),
              (t.DEFAULT_SIZE = 100),
              (t.AVAILABLE_SIZES = [30, 50, 80, 100, 200, 300, 400, 600, 800]);
            let i = (e) => "https://".concat(e.replace(/^(https*:\/\/)/, ""));
            t.createAvatarUrl = (e, t, a) => {
              let r;
              return (
                (r =
                  "orig" === t
                    ? "orig"
                    : a
                      ? "m".concat(t, "x").concat(t)
                      : "".concat(t, "x").concat(t)),
                i(e.replace("%%", r))
              );
            };
          },
          8796: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, i) {
                let a = null != i ? i : e.currentTarget,
                  r = document.createElement("span"),
                  n = Math.max(a.clientWidth, a.clientHeight),
                  l = n / 2,
                  o = a.getBoundingClientRect(),
                  s =
                    0 === e.clientX
                      ? Math.round(o.width / 2)
                      : e.clientX - o.left,
                  c =
                    0 === e.clientY
                      ? Math.round(o.height / 2)
                      : e.clientY - o.top;
                (r.style.width = "".concat(n, "px")),
                  (r.style.height = "".concat(n, "px")),
                  (r.style.left =
                    0 === e.clientX ? "0px" : "".concat(s - l, "px")),
                  (r.style.top = "".concat(c - l, "px")),
                  r.classList.add(t);
                let d = a.getElementsByClassName(t)[0];
                d && d.remove(), a.insertBefore(r, a.firstChild);
              });
          },
          8216: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.createRipple = void 0);
            var a = i(8796);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return a.createRipple;
              },
            });
            var r = i(9440);
            Object.defineProperty(t, "createAvatarUrl", {
              enumerable: !0,
              get: function () {
                return r.createAvatarUrl;
              },
            });
          },
          19: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Navigation = void 0);
            let r = i(9541),
              n = i(5881),
              l = i(7786),
              o = a(i(2329));
            t.Navigation = function (e) {
              let {
                className: t,
                children: i,
                collapsed: a = !1,
                direction: s = "vertical",
                ...c
              } = e;
              return (0, r.jsx)(l.NavigationProvider, {
                collapsed: a,
                direction: s,
                children: (0, r.jsx)("nav", {
                  className: (0, n.clsx)(
                    o.default.root,
                    o.default["root_direction_".concat(s)],
                    { [o.default.root_collapsed]: a },
                    t,
                  ),
                  "aria-label": c["aria-label"],
                  ...c,
                  children: i,
                }),
              });
            };
          },
          7786: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationProvider = t.NavigationContext = void 0);
            let a = i(9541),
              r = i(810);
            (t.NavigationContext = (0, r.createContext)({
              collapsed: !1,
              direction: "vertical",
            })),
              (t.NavigationProvider = (e) => {
                let { collapsed: i, direction: n, children: l } = e,
                  o = (0, r.useMemo)(
                    () => ({ collapsed: i, direction: n }),
                    [i, n],
                  );
                return (0, a.jsx)(t.NavigationContext.Provider, {
                  value: o,
                  children: l,
                });
              });
          },
          8106: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationGroup = void 0);
            let r = i(9541),
              n = i(810),
              l = i(5881),
              o = i(7786),
              s = a(i(9948));
            t.NavigationGroup = function (e) {
              let { className: t, children: i, ...a } = e,
                c = (0, n.createRef)(),
                { direction: d } = (0, n.useContext)(o.NavigationContext);
              return (0, r.jsx)("ol", {
                ref: c,
                className: (0, l.clsx)(
                  s.default.root,
                  s.default["root_direction_".concat(d)],
                  t,
                ),
                ...a,
                children: i,
              });
            };
          },
          3506: function (e, t, i) {
            var a =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationItem = t.NavigationItemComponent = void 0);
            let r = i(9541),
              n = i(810),
              l = i(5881),
              o = i(7786),
              s = i(8216),
              c = a(i(8850));
            function d(e) {
              let {
                  className: t = "",
                  forwardRef: i,
                  children: a,
                  selected: d = !1,
                  shownAnimation: u,
                  withRipple: _ = !1,
                  variant: m = "default",
                  ...p
                } = e,
                { collapsed: v, direction: y } = (0, n.useContext)(
                  o.NavigationContext,
                ),
                x = (0, n.useCallback)(
                  (e) => {
                    _ && (0, s.createRipple)(e, c.default.ripple);
                  },
                  [_],
                ),
                [h, f] = n.Children.toArray(a.props.children),
                b = (0, n.useMemo)(
                  () =>
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("div", {
                          className: c.default.iconContainer,
                          children: h,
                        }),
                        (0, r.jsx)("div", {
                          className: (0, l.clsx)(
                            c.default.textContainer,
                            c.default["textContainer_direction_".concat(y)],
                            { [c.default.textContainer_selected]: d },
                          ),
                          children: f,
                        }),
                      ],
                    }),
                  [h, y, d, f],
                ),
                C = (0, n.cloneElement)(a, {
                  className: (0, l.clsx)(
                    c.default.item,
                    c.default["item_direction_".concat(y)],
                    {
                      [c.default.item_selected]: d,
                      [c.default["item_collapsed_".concat(y)]]: v,
                    },
                    a.props.className,
                  ),
                  children: b,
                });
              return (0, r.jsx)("li", {
                ref: i,
                className: (0, l.clsx)(
                  c.default.root,
                  c.default["root_direction_".concat(y)],
                  c.default["root_variant_".concat(m)],
                  {
                    [c.default.root_animate]: u,
                    [c.default.root_collapsed]: v,
                  },
                  t,
                ),
                "aria-current": !!d && "page",
                onClick: x,
                ...p,
                children: C,
              });
            }
            (t.NavigationItemComponent = d),
              (t.NavigationItem = (0, n.forwardRef)((e, t) =>
                (0, r.jsx)(d, { forwardRef: t, ...e }),
              ));
          },
          810: (e) => {
            e.exports = b;
          },
        },
        R = {};
      function T(e) {
        var t = R[e];
        if (void 0 !== t) return t.exports;
        var i = (R[e] = { exports: {} });
        return E[e].call(i.exports, i, i.exports, T), i.exports;
      }
      (T.d = (e, t) => {
        for (var i in t)
          T.o(t, i) &&
            !T.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (T.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (T.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var I = {};
      Object.defineProperty(I, "X$", { value: !0 }),
        (I.Dx = I.KB = I.W_ = void 0),
        (a = T(19)),
        Object.defineProperty(I, "W_", {
          enumerable: !0,
          get: function () {
            return a.Navigation;
          },
        }),
        (r = T(8106)),
        Object.defineProperty(I, "KB", {
          enumerable: !0,
          get: function () {
            return r.NavigationGroup;
          },
        }),
        (n = T(3506)),
        Object.defineProperty(I, "Dx", {
          enumerable: !0,
          get: function () {
            return n.NavigationItem;
          },
        });
      var V = I.W_,
        D = I.KB,
        z = I.Dx;
      I.X$;
      var O = i(5773),
        F = i(2570),
        W = i(54050),
        U = i(2959),
        G = i(67868);
      let Z = (e) => {
        let { padding: t, placement: i } = e;
        return {
          shiftOptions: { padding: t },
          offsetOptions: t,
          flipOptions: { fallbackAxisSideDirection: "start", padding: t },
          placement: i,
        };
      };
      var Q = i(1263),
        J = i(69869),
        Y = i(86939),
        H = i(12404),
        q = i(38360),
        K = i(98342),
        X = i(64638),
        $ = i.n(X);
      let ee = (e) => {
          let { children: t, entityUrl: i, ariaLabel: a } = e;
          return i
            ? (0, y.jsx)(G.rU, {
                href: i,
                "aria-label": a,
                className: $().link,
                children: t,
              })
            : t;
        },
        et = (e) => {
          let {
              className: t,
              cover: i,
              title: a,
              subtitle: r,
              contextMenu: n,
              isCollapsed: l,
              withCollapseAnimation: o,
              entityUrl: s,
              onDoubleClick: c,
              forwardRef: d,
              ariaLabel: u,
            } = e,
            _ = (0, f.useCallback)(
              (e) => {
                2 === e.detail
                  ? null == c || c()
                  : e.target instanceof HTMLElement &&
                    "IMG" !== e.target.tagName &&
                    (0, K.m)(e, $().ripple);
              },
              [c],
            );
          return (0, y.jsxs)(G.Md, {
            ref: d,
            onClick: _,
            className: (0, x.W)($().root, { [$().root_withoutLink]: !s }, t),
            role: "listitem",
            children: [
              (0, y.jsxs)(ee, {
                entityUrl: s,
                ariaLabel: u,
                children: [
                  (0, y.jsx)("div", { className: $().cover, children: i }),
                  (0, y.jsx)("div", {
                    className: $().meta,
                    children: (0, y.jsxs)("div", {
                      className: (0, x.W)($().info, {
                        [$().info_collapsed]: l,
                        [$().info_animated]: o,
                      }),
                      children: [
                        (0, y.jsx)(F.Caption, {
                          "aria-hidden": !0,
                          className: $().title,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: a,
                        }),
                        (0, y.jsx)(F.Caption, {
                          "aria-hidden": !0,
                          className: $().subtitle,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: r,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, y.jsx)("div", {
                className: (0, x.W)($().contextMenu, {
                  [$().contextMenu_hidden]: l,
                }),
                children: n,
              }),
            ],
          });
        },
        ei = (0, f.forwardRef)((e, t) =>
          (0, y.jsx)(et, { forwardRef: t, ...e }),
        ),
        ea = (0, f.createContext)(null);
      var er = i(64318),
        en = i.n(er),
        el = i(385);
      let eo = (e) => {
          let { onPinClick: t, isPinned: i } = e,
            { isCollapsed: a } = (0, f.useContext)(ea) || {},
            { formatMessage: r } = (0, w.Z)(),
            [n, l] = (0, f.useState)(!1),
            o = (0, f.useCallback)((e) => {
              e.preventDefault(), e.stopPropagation();
            }, []);
          return (
            (0, g.ZP)(n),
            (0, y.jsx)(el.v2, {
              reference: (0, y.jsx)(A.z, {
                className: (0, x.W)(en().contextMenu, {
                  [en().contextMenu_visible]: n,
                }),
                onClick: o,
                withRipple: !1,
                variant: "text",
                "aria-label": r({ id: "interface-actions.context-menu" }),
                icon: (0, y.jsx)(B.J, { size: "xxs", variant: "more" }),
                tabIndex: a ? -1 : 0,
                "aria-hidden": a,
              }),
              offsetOptions: 10,
              open: n,
              returnFocus: !1,
              onOpenChange: l,
              children: (0, y.jsx)(G.Zd, { onClick: t, isPinned: i }),
            })
          );
        },
        es = (e) => {
          var t;
          let { className: i, album: a, forwardRef: r, tooltipOptions: n } = e,
            { formatMessage: l } = (0, w.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, f.useContext)(ea)) && void 0 !== t ? t : {},
            c = (0, q.BV)(a),
            d = (0, q.H0)(a.type),
            u = (0, f.useMemo)(
              () =>
                (0, y.jsx)(H.Paper, {
                  className: en().cover,
                  radius: "xs",
                  children: (0, y.jsxs)(O.u, {
                    ...n,
                    enabled: o,
                    children: [
                      (0, y.jsx)(Y.Image, {
                        className: en().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, y.jsx)(O._v, {
                        className: en().tooltip,
                        children: (0, y.jsx)(F.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: a.title,
                        }),
                      }),
                    ],
                  }),
                }),
              [a.coverUri, a.title, o, n],
            );
          return (0, y.jsx)(ei, {
            ref: r,
            ariaLabel: l(
              { id: "entity-names.album-name" },
              { albumName: a.title },
            ),
            className: (0, x.W)(en().root, i),
            title: a.title,
            entityUrl: a.url,
            subtitle: d,
            cover: u,
            isCollapsed: !!o,
            withCollapseAnimation: !!s,
            contextMenu: (0, y.jsx)(eo, {
              onPinClick: c,
              isPinned: a.isPinned,
            }),
          });
        },
        ec = (0, f.forwardRef)((e, t) =>
          (0, y.jsx)(es, { forwardRef: t, ...e }),
        );
      var ed = i(33589);
      let eu = (e) => {
          var t;
          let { className: i, artist: a, forwardRef: r, tooltipOptions: n } = e,
            { formatMessage: l } = (0, w.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, f.useContext)(ea)) && void 0 !== t ? t : {},
            c = (0, ed.BV)(a),
            d = (0, f.useMemo)(
              () =>
                (0, y.jsx)(H.Paper, {
                  className: en().cover,
                  radius: "round",
                  children: (0, y.jsxs)(O.u, {
                    ...n,
                    enabled: o,
                    children: [
                      (0, y.jsx)(Y.Image, {
                        className: en().image,
                        "aria-hidden": !0,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, y.jsx)(O._v, {
                        className: en().tooltip,
                        children: (0, y.jsx)(F.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: a.name,
                        }),
                      }),
                    ],
                  }),
                }),
              [a.coverUri, a.name, o, n],
            );
          return (0, y.jsx)(ei, {
            ref: r,
            ariaLabel: l(
              { id: "entity-names.artist-name" },
              { artistName: a.name },
            ),
            className: (0, x.W)(en().root, i),
            title: a.name,
            entityUrl: a.url,
            subtitle: (0, y.jsx)(L.Z, { id: "entity-names.artist" }),
            cover: d,
            isCollapsed: !!o,
            withCollapseAnimation: !!s,
            contextMenu: (0, y.jsx)(eo, {
              onPinClick: c,
              isPinned: a.isPinned,
            }),
          });
        },
        e_ = (0, f.forwardRef)((e, t) =>
          (0, y.jsx)(eu, { forwardRef: t, ...e }),
        );
      var em = i(12090);
      let ep = (e) => {
          var t;
          let {
              className: i,
              playlist: a,
              forwardRef: r,
              tooltipOptions: n,
            } = e,
            { formatMessage: l } = (0, w.Z)(),
            { isCollapsed: o, withCollapseAnimation: s } =
              null !== (t = (0, f.useContext)(ea)) && void 0 !== t ? t : {},
            c = (0, em.BV)(a),
            d = (0, f.useMemo)(
              () =>
                (0, y.jsx)(H.Paper, {
                  className: en().cover,
                  radius: "xs",
                  children: (0, y.jsxs)(O.u, {
                    ...n,
                    enabled: o,
                    children: [
                      (0, y.jsx)(Y.Image, {
                        "aria-hidden": !0,
                        className: en().image,
                        src: a.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, y.jsx)(O._v, {
                        className: en().tooltip,
                        children: (0, y.jsx)(F.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: a.title,
                        }),
                      }),
                    ],
                  }),
                }),
              [o, a.coverUri, a.title, n],
            );
          return (0, y.jsx)(ei, {
            ref: r,
            ariaLabel: l(
              { id: "entity-names.playlist-name" },
              { playlistName: a.title },
            ),
            className: (0, x.W)(en().root, i),
            title: a.title,
            entityUrl: a.url,
            subtitle: (0, y.jsx)(L.Z, { id: "entity-names.playlist" }),
            cover: d,
            isCollapsed: !!o,
            withCollapseAnimation: !!s,
            contextMenu: (0, y.jsx)(eo, {
              onPinClick: c,
              isPinned: a.isPinned,
            }),
          });
        },
        ev = (0, f.forwardRef)((e, t) =>
          (0, y.jsx)(ep, { forwardRef: t, ...e }),
        );
      var ey = i(40029);
      let ex = (0, h.Pi)((e) => {
          var t, i;
          let { className: a, vibe: r, forwardRef: n, tooltipOptions: l } = e,
            o = (0, f.useId)(),
            { formatMessage: s } = (0, w.Z)(),
            { isCollapsed: c, withCollapseAnimation: d } =
              null !== (i = (0, f.useContext)(ea)) && void 0 !== i ? i : {},
            [u, _] = (0, f.useState)(!1),
            m = (0, ey.BV)(r),
            {
              isPlaying: p,
              togglePlay: v,
              isCurrent: h,
            } = (0, g.Qh)({
              seeds: r.seeds,
              pageIdForFrom: g.Rh.SIDEBAR,
              blockIdForFrom: g.aU.RADIO,
            }),
            b = (0, f.useCallback)(() => {
              _(!0),
                v().finally(() => {
                  _(!1);
                });
            }, [v]),
            C = (0, f.useMemo)(
              () =>
                (0, y.jsx)(F.Caption, {
                  id: o,
                  variant: "span",
                  "aria-label": s(
                    { id: "entity-names.vibe-name" },
                    { vibeName: r.title },
                  ),
                  type: "controls",
                  size: "s",
                  lineClamp: 1,
                  children: r.title,
                }),
              [s, o, r.title],
            ),
            N = (0, f.useMemo)(() => {
              var e;
              let t = {
                "--vibe-background-color":
                  null === (e = r.colors) || void 0 === e ? void 0 : e.average,
              };
              return (0, y.jsxs)(O.u, {
                ...l,
                enabled: c,
                children: [
                  (0, y.jsx)("div", {
                    style: t,
                    className: en().animation,
                    children: (0, y.jsx)(G.Df, {
                      isCurrent: h,
                      isPlaying: p,
                      isAvailable: !0,
                      isPlayButtonLoading: u,
                      onPlayButtonClick: b,
                      title: r.title,
                      shouldShowImage: !1,
                      ariaDescribedBy: o,
                    }),
                  }),
                  (0, y.jsx)(O._v, {
                    className: en().tooltip,
                    children: (0, y.jsx)(F.Caption, {
                      variant: "span",
                      type: "text",
                      size: "s",
                      weight: "medium",
                      lineClamp: 1,
                      children: r.title,
                    }),
                  }),
                ],
              });
            }, [
              b,
              c,
              h,
              u,
              p,
              o,
              l,
              null === (t = r.colors) || void 0 === t ? void 0 : t.average,
              r.title,
            ]);
          return (0, y.jsx)(ei, {
            ref: n,
            onDoubleClick: v,
            className: (0, x.W)(en().root, a),
            isCollapsed: !!c,
            contextMenu: (0, y.jsx)(eo, {
              onPinClick: m,
              isPinned: r.isPinned,
            }),
            withCollapseAnimation: !!d,
            title: C,
            subtitle: (0, y.jsx)(L.Z, { id: "entity-names.my-vibe" }),
            cover: N,
          });
        }),
        eh = (0, f.forwardRef)((e, t) =>
          (0, y.jsx)(ex, { forwardRef: t, ...e }),
        );
      var ef = i(8519),
        eb = i.n(ef);
      let eC = Z({ placement: "right", padding: 20 }),
        eg = (0, h.Pi)((e) => {
          var t, i;
          let { className: a, withCollapseAnimation: r, isCollapsed: n } = e,
            { formatMessage: l } = (0, w.Z)(),
            { pinsCollection: o } = (0, g.oR)(),
            s =
              null === (t = o.items) || void 0 === t
                ? void 0
                : t.map(() => (0, f.createRef)()),
            c = (0, f.useMemo)(
              () => ({
                enter: eb().pin_enter,
                enterActive: eb().pin_enter_active,
                exit: eb().pin_exit,
                exitActive: eb().pin_exit_active,
              }),
              [],
            ),
            d = (0, f.useMemo)(
              () => ({ withCollapseAnimation: r, isCollapsed: n }),
              [n, r],
            );
          return (0, y.jsx)(ea.Provider, {
            value: d,
            children: (0, y.jsx)("div", {
              className: (0, x.W)(eb().root, a),
              children: (0, y.jsx)("div", {
                role: "list",
                "aria-label": l({ id: "navigation.pins-list" }),
                className: eb().content,
                children: (0, y.jsx)(Q.Z, {
                  component: null,
                  children:
                    null === (i = o.items) || void 0 === i
                      ? void 0
                      : i.map((e, t) => {
                          switch (e.type) {
                            case J.Qm.ALBUM:
                              return (0, y.jsx)(
                                k.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(ec, {
                                    tooltipOptions: eC,
                                    ref: null == s ? void 0 : s[t],
                                    album: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case J.Qm.ARTIST:
                              return (0, y.jsx)(
                                k.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(e_, {
                                    tooltipOptions: eC,
                                    ref: null == s ? void 0 : s[t],
                                    artist: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case J.Qm.PLAYLIST:
                              return (0, y.jsx)(
                                k.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(ev, {
                                    tooltipOptions: eC,
                                    ref: null == s ? void 0 : s[t],
                                    playlist: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                            case J.Qm.WAVE:
                              return (0, y.jsx)(
                                k.Z,
                                {
                                  classNames: c,
                                  nodeRef: null == s ? void 0 : s[t],
                                  timeout: 270,
                                  children: (0, y.jsx)(eh, {
                                    tooltipOptions: eC,
                                    ref: null == s ? void 0 : s[t],
                                    vibe: e.data,
                                  }),
                                },
                                e.data.pinId,
                              );
                          }
                        }),
                }),
              }),
            }),
          });
        });
      var eN = i(84691);
      function ej() {
        return (ej = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var a in i)
                  Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eS = function (e) {
          return eN.createElement(
            "svg",
            ej(
              {
                viewBox: "0 0 58 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            eN.createElement(
              "g",
              { clipPath: "url(#clip0_2521_25547)" },
              eN.createElement(
                "g",
                { clipPath: "url(#clip1_2521_25547)" },
                l ||
                  (l = eN.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  })),
                o ||
                  (o = eN.createElement("path", {
                    d: "M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z",
                    fill: "#FCCA00",
                  })),
                s ||
                  (s = eN.createElement("path", {
                    d: "M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z",
                    fill: "#FC3F1D",
                  })),
                eN.createElement(
                  "mask",
                  {
                    id: "mask0_2521_25547",
                    style: { maskType: "alpha" },
                    maskUnits: "userSpaceOnUse",
                    x: 33,
                    y: 0,
                    width: 25,
                    height: 24,
                  },
                  c ||
                    (c = eN.createElement("circle", {
                      cx: 45.5005,
                      cy: 12,
                      r: 12,
                      fill: "white",
                    })),
                ),
                d ||
                  (d = eN.createElement("g", {
                    mask: "url(#mask0_2521_25547)",
                  })),
                u ||
                  (u = eN.createElement(
                    "g",
                    { clipPath: "url(#clip2_2521_25547)" },
                    eN.createElement("rect", {
                      width: 24,
                      height: 24,
                      transform: "translate(33.5005)",
                      fill: "black",
                    }),
                    eN.createElement("path", {
                      d: "M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z",
                      fill: "url(#paint0_radial_2521_25547)",
                    }),
                  )),
              ),
            ),
            _ ||
              (_ = eN.createElement(
                "g",
                { clipPath: "url(#clip3_2521_25547)" },
                eN.createElement("rect", {
                  x: 17.0005,
                  width: 24,
                  height: 24,
                  rx: 12,
                  fill: "white",
                }),
                eN.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z",
                  fill: "url(#paint1_linear_2521_25547)",
                }),
              )),
            m ||
              (m = eN.createElement("path", {
                d: "M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z",
                fill: "black",
              })),
            p ||
              (p = eN.createElement("path", {
                d: "M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z",
                fill: "#FED42B",
              })),
            v ||
              (v = eN.createElement(
                "defs",
                null,
                eN.createElement(
                  "radialGradient",
                  {
                    id: "paint0_radial_2521_25547",
                    cx: 0,
                    cy: 0,
                    r: 1,
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform:
                      "translate(40.7002 3.59937) rotate(45) scale(23.7588)",
                  },
                  eN.createElement("stop", {
                    offset: 0.5,
                    stopColor: "#FF5500",
                  }),
                  eN.createElement("stop", { offset: 1, stopColor: "#BBFF00" }),
                ),
                eN.createElement(
                  "linearGradient",
                  {
                    id: "paint1_linear_2521_25547",
                    x1: 17.0005,
                    y1: 10.4,
                    x2: 41.0005,
                    y2: 10.4,
                    gradientUnits: "userSpaceOnUse",
                  },
                  eN.createElement("stop", { stopColor: "#FF5C4D" }),
                  eN.createElement("stop", {
                    offset: 0.4,
                    stopColor: "#EB469F",
                  }),
                  eN.createElement("stop", { offset: 1, stopColor: "#8341EF" }),
                ),
                eN.createElement(
                  "clipPath",
                  { id: "clip0_2521_25547" },
                  eN.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                eN.createElement(
                  "clipPath",
                  { id: "clip1_2521_25547" },
                  eN.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                eN.createElement(
                  "clipPath",
                  { id: "clip2_2521_25547" },
                  eN.createElement("rect", {
                    width: 24,
                    height: 24,
                    fill: "white",
                    transform: "translate(33.5005)",
                  }),
                ),
                eN.createElement(
                  "clipPath",
                  { id: "clip3_2521_25547" },
                  eN.createElement("rect", {
                    x: 17.0005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
              )),
          );
        },
        eP = i(77314),
        ew = i.n(eP);
      let eL = (e) => {
          let { className: t, forwardRef: i } = e,
            { formatMessage: a } = (0, w.Z)();
          return (0, y.jsxs)("section", {
            className: (0, x.W)(ew().root, t),
            ref: i,
            "aria-label": a({ id: "plusbar.subscription-activation" }),
            children: [
              (0, y.jsx)(eS, { className: ew().logos, "aria-hidden": "true" }),
              (0, y.jsx)(F.Caption, {
                className: ew().title,
                variant: "div",
                size: "m",
                weight: "medium",
                children: (0, y.jsx)(L.Z, {
                  id: "plusbar.title",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, y.jsx)(F.Caption, {
                className: ew().addition,
                variant: "div",
                size: "xs",
                weight: "normal",
                children: (0, y.jsx)(L.Z, {
                  id: "plusbar.text",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, y.jsxs)("div", {
                className: ew().buttons,
                children: [
                  (0, y.jsx)(A.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    color: "plus",
                    children: "30 дней бесплатно",
                  }),
                  (0, y.jsx)(A.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    variant: "text",
                    color: "primary",
                    withRipple: !1,
                    children: (0, y.jsx)(L.Z, {
                      id: "interface-actions.more-details",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ek = (0, f.forwardRef)((e, t) =>
          (0, y.jsx)(eL, { forwardRef: t, ...e }),
        );
      var eA = i(3065),
        eB = i.n(eA),
        eM = i(24776),
        eE = i.n(eM);
      let eR = Z({ placement: "right", padding: 8 }),
        eT = (e) => {
          let { className: t, isCollapsed: i, withCollapseAnimation: a } = e;
          return (0, y.jsxs)(O.u, {
            ...eR,
            enabled: !0,
            children: [
              (0, y.jsxs)("div", {
                className: (0, x.W)(eE().root, t),
                children: [
                  (0, y.jsx)(F.Caption, {
                    className: eE().nda,
                    variant: "span",
                    size: "s",
                    weight: "medium",
                    children: (0, y.jsx)(L.Z, { id: "entity-names.nda" }),
                  }),
                  (0, y.jsx)(F.Caption, {
                    className: (0, x.W)(eE().text, {
                      [eE().text_collapsed]: i,
                      [eE().text_animated]: a,
                    }),
                    variant: "span",
                    size: "s",
                    weight: "medium",
                    lineClamp: 1,
                    children: (0, y.jsx)(L.Z, {
                      id: "warning-messages.only-for-staff",
                    }),
                  }),
                ],
              }),
              (0, y.jsx)(O._v, {
                className: eE().tooltipContent,
                children: (0, y.jsx)(L.Z, {
                  id: "warning-messages.do-not-take-screenshots",
                }),
              }),
            ],
          });
        },
        eI = {
          exit: eB().plusButtonContainer_exit,
          exitActive: eB().plusButtonContainer_exit_active,
          enter: eB().plusButtonContainer_enter,
          enterActive: eB().plusButtonContainer_enter_active,
        },
        eV = {
          exit: eB().plusBar_exit,
          exitActive: eB().plusBar_exit_active,
          enter: eB().plusBar_enter,
          enterActive: eB().plusBar_enter_active,
        },
        eD = Z({ placement: "right", padding: 8 }),
        ez = (0, h.Pi)((e) => {
          let {
              className: t,
              collapsed: i,
              shownAnimation: a,
              handleClick: r,
            } = e,
            n = j(),
            l = (0, g.hJ)(),
            { formatMessage: o } = (0, w.Z)(),
            { language: s } = (0, g.ZS)(),
            { user: c, experiments: d } = (0, g.oR)(),
            u = (0, f.useMemo)(
              () =>
                c.collectionHue
                  ? { "--logo-color": (0, W.Cx)(c.collectionHue) }
                  : null,
              [c.collectionHue],
            ),
            _ = (0, f.useMemo)(
              () =>
                i
                  ? o({ id: "sidebar.uncollapse" })
                  : o({ id: "sidebar.collapse" }),
              [i, o],
            ),
            m = (0, f.useMemo)(
              () => ({
                search: o({ id: "navigation.search" }),
                main: o({ id: "navigation.page-main" }),
                collection: o({ id: "navigation.page-collection" }),
                non_music: o({ id: "entity-names.podcasts" }),
              }),
              [o],
            ),
            p = (0, f.useMemo)(
              () =>
                (0, y.jsx)(
                  D,
                  {
                    children: (0, g.sQ)(d).map((e) =>
                      (0, y.jsx)(
                        z,
                        {
                          selected: l(e.path),
                          shownAnimation: a,
                          variant: "main",
                          children: (0, y.jsxs)(G.rU, {
                            href: e.path,
                            children: [
                              (0, y.jsxs)(O.u, {
                                ...eD,
                                enabled: i,
                                children: [
                                  (0, y.jsx)(B.J, {
                                    variant: l(e.path)
                                      ? e.iconSelected
                                      : e.icon,
                                    size: "m",
                                  }),
                                  (0, y.jsx)(O._v, {
                                    children: (0, y.jsx)(F.Caption, {
                                      variant: "span",
                                      type: "text",
                                      size: "s",
                                      weight: "medium",
                                      children: m[e.id],
                                    }),
                                  }),
                                ],
                              }),
                              (0, y.jsx)(F.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                className: (0, x.W)({
                                  [eB().title_animate]: a,
                                  [eB().title_collapsed]: i,
                                }),
                                children: m[e.id],
                              }),
                            ],
                          }),
                        },
                        e.id,
                      ),
                    ),
                  },
                  "main",
                ),
              [l, i, d, d.loadingState, a, m],
            ),
            v = (0, f.useMemo)(
              () =>
                n
                  ? null
                  : (0, f.createElement)(O.u, {
                      ...eD,
                      key: "collapseTooltip",
                      children: [
                        (0, y.jsx)(A.z, {
                          className: (0, x.W)(
                            eB().collapseButton,
                            eB().important,
                          ),
                          "aria-label": _,
                          radius: "round",
                          color: "secondary",
                          size: "s",
                          icon: (0, y.jsx)(B.J, {
                            variant: i ? "uncollapse" : "collapse",
                            size: "xs",
                          }),
                          onClick: r,
                        }),
                        (0, y.jsx)(O._v, {
                          className: (0, x.W)({
                            [eB().collapseButtonTooltip_hidden]: !i,
                          }),
                          children: _,
                        }),
                      ],
                    }),
              [i, _, r, n],
            ),
            h = (0, f.useRef)(null),
            b = (0, f.useMemo)(
              () =>
                (0, y.jsx)(k.Z, {
                  nodeRef: h,
                  in: i,
                  timeout: 150,
                  classNames: eI,
                  unmountOnExit: !0,
                  children: (0, y.jsx)("div", {
                    className: eB().plusButtonContainer,
                    ref: h,
                    children: (0, y.jsxs)(O.u, {
                      ...eD,
                      enabled: i,
                      children: [
                        (0, y.jsx)(A.z, {
                          variant: "text",
                          withRipple: !1,
                          size: "xxs",
                          icon: (0, y.jsx)(B.J, {
                            variant: "plusOutlined",
                            size: "m",
                          }),
                          className: (0, x.W)(eB().button, eB().important),
                          "aria-label": o({
                            id: "plusbar.subscription-activation",
                          }),
                        }),
                        (0, y.jsx)(O._v, {
                          children: (0, y.jsx)(F.Caption, {
                            variant: "span",
                            type: "text",
                            size: "s",
                            weight: "medium",
                            children: (0, y.jsx)(L.Z, {
                              id: "plusbar.subscription-activation",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              [i, o],
            ),
            C = (0, f.useRef)(null),
            N = (0, f.useMemo)(
              () =>
                (0, y.jsx)(k.Z, {
                  nodeRef: C,
                  in: !i,
                  timeout: 150,
                  classNames: eV,
                  unmountOnExit: !0,
                  children: (0, y.jsx)(ek, {
                    className: eB().plusBar,
                    forwardRef: C,
                  }),
                }),
              [i],
            );
          return (0, y.jsxs)("div", {
            className: (0, x.W)(eB().root, t),
            children: [
              (0, y.jsx)(G.rU, {
                href: "/",
                className: eB().logoLink,
                children: (0, y.jsx)(M.TR, {
                  style: u,
                  className: (0, x.W)(eB().logo),
                  collapsed: i,
                  shownAnimation: a,
                  collapsedButton: v,
                  lang: "ru" !== s ? M.o0.EN : M.o0.RU,
                }),
              }),
              d.checkExperiment(g.pe.WebNextNDABadge, "on") &&
                (0, y.jsx)(eT, {
                  className: eB().ndaBadge,
                  isCollapsed: i,
                  withCollapseAnimation: !!a,
                }),
              (0, y.jsx)(V, {
                className: eB().navigation,
                collapsed: i,
                "aria-label": o({ id: "navigation.main-menu" }),
                children: p,
              }),
              (0, y.jsx)(eg, {
                isCollapsed: i,
                withCollapseAnimation: !!a,
                className: eB().pinsList,
              }),
              !c.hasPlus &&
                (0, y.jsxs)("div", { className: eB().plus, children: [N, b] }),
              (0, y.jsx)(f.Suspense, {
                children: (0, y.jsx)("div", {
                  className: eB().user,
                  children: (0, y.jsx)(U.Iw, {
                    metaClassName: (0, x.W)(eB().userMeta, {
                      [eB().userMeta_animate]: a,
                      [eB().userMeta_collapsed]: i,
                    }),
                    variant: "desktop",
                    withMeta: !0,
                  }),
                }),
              }),
            ],
          });
        });
      var eO = i(73061),
        eF = i.n(eO),
        eW = i(14825),
        eU = i.n(eW);
      let eG = (e) => {
          let { className: t } = e;
          return (0, y.jsxs)("div", {
            className: (0, x.W)(eU().root, t),
            children: [
              (0, y.jsx)(F.Caption, {
                className: eU().nda,
                variant: "span",
                size: "m",
                weight: "medium",
                children: (0, y.jsx)(L.Z, { id: "entity-names.nda" }),
              }),
              (0, y.jsx)(F.Caption, {
                className: eU().text,
                variant: "span",
                size: "m",
                weight: "normal",
                lineClamp: 1,
                children: (0, y.jsx)(L.Z, {
                  id: "warning-messages.only-for-staff",
                }),
              }),
            ],
          });
        },
        eZ = (0, h.Pi)((e) => {
          let { className: t } = e,
            i = (0, g.hJ)(),
            { experiments: a } = (0, g.oR)(),
            { formatMessage: r } = (0, w.Z)(),
            n = r({ id: "navigation.main-menu" }),
            l = (0, f.useMemo)(
              () => ({
                search: r({ id: "navigation.search" }),
                main: r({ id: "navigation.page-main" }),
                collection: r({ id: "navigation.page-collection" }),
              }),
              [r],
            );
          return (0, y.jsxs)("div", {
            className: (0, x.W)(eF().root, t),
            children: [
              a.checkExperiment(g.pe.WebNextNDABadge, "on") &&
                (0, y.jsx)(eG, { className: eF().ndaBadge }),
              (0, y.jsx)(V, {
                collapsed: !0,
                direction: "horizontal",
                "aria-label": n,
                children: (0, y.jsx)(D, {
                  children: (0, y.jsxs)(y.Fragment, {
                    children: [
                      (0, g.sQ)(a).map((e) =>
                        (0, y.jsx)(
                          z,
                          {
                            selected: i(e.path),
                            children: (0, y.jsxs)(G.rU, {
                              href: e.path,
                              children: [
                                (0, y.jsx)(B.J, {
                                  variant: i(e.path) ? e.iconSelected : e.icon,
                                  size: "m",
                                }),
                                (0, y.jsx)(F.Caption, {
                                  variant: "span",
                                  type: "controls",
                                  size: "m",
                                  weight: "medium",
                                  lineClamp: 1,
                                  children: l[e.id],
                                }),
                              ],
                            }),
                          },
                          e.id,
                        ),
                      ),
                      (0, y.jsx)(z, {
                        children: (0, y.jsx)(U.Iw, {
                          className: eF().user,
                          variant: "mobile",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }),
        eQ = (0, h.Pi)((e) => {
          let { className: t } = e,
            i = (0, g.uK)().get(g.V0),
            a = j(),
            { settings: r } = (0, g.oR)(),
            [n, l] = (0, f.useState)(i.get(g.BU.NavbarCollapsed) || !1),
            [o, s] = (0, f.useState)(!1),
            c = (0, f.useMemo)(
              () => (r.layout === g.t8.Mobile ? eZ : ez),
              [r.layout],
            ),
            d = (0, f.useCallback)(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  i.set(g.BU.NavbarCollapsed, !n, { expires: 180 }),
                  l(!n),
                  s(!0);
              },
              [n, i],
            );
          return (0, y.jsx)("aside", {
            className: (0, x.W)(P().root, { [P().root_collapsed]: n || a }, t),
            ...(0, C.BA)(C.QM.navbar.NAVBAR),
            children: (0, y.jsx)(c, {
              handleClick: d,
              collapsed: n || a,
              shownAnimation: o,
            }),
          });
        });
      var eJ = i(42288);
      let eY = eJ.V5.model("PinAlbumItemModel", {
          type: eJ.V5.literal(J.Qm.ALBUM),
          data: q.KX,
        }),
        eH = eJ.V5.model("PinArtistItemModel", {
          type: eJ.V5.literal(J.Qm.ARTIST),
          data: ed.Go,
        }),
        eq = eJ.V5.model("PinPlaylistItemModel", {
          type: eJ.V5.literal(J.Qm.PLAYLIST),
          data: em.Cd,
        }),
        eK = eJ.V5.model("PinVibeItemModel", {
          type: eJ.V5.literal(J.Qm.WAVE),
          data: ey.KW,
        }),
        eX = eJ.V5.union(eY, eH, eq, eK),
        e$ = (e) => "object" == typeof e && e && "type" in e;
      var e0 = i(93490),
        e1 = i(31579);
      let e5 = (e) => {
          switch (e.type) {
            case J.Qm.WAVE:
              return (0, eJ.pj)({ type: J.Qm.WAVE, data: (0, ey.FF)(e.data) });
            case J.Qm.PLAYLIST:
              return (0, eJ.pj)({
                type: J.Qm.PLAYLIST,
                data: (0, e1.RE)({ playlist: e.data }),
              });
            case J.Qm.ARTIST:
              return (0, eJ.pj)({
                type: J.Qm.ARTIST,
                data: (0, ed.tR)(e.data),
              });
            case J.Qm.ALBUM:
              return (0, eJ.pj)({
                type: J.Qm.ALBUM,
                data: (0, e0.cO)({ album: e.data }),
              });
          }
        },
        e2 = eJ.V5.model("Pins", {
          loadingState: eJ.V5.enumeration(Object.values(g.Gu)),
          items: eJ.V5.maybeNull(eJ.V5.array(eX)),
          index: eJ.V5.map(eJ.V5.boolean),
        })
          .views((e) => ({ isPinned: (t) => !!e.index.get(t) }))
          .actions((e) => {
            let t = {
              deletePin(t) {
                var i;
                (e.items = (0, eJ.pj)(
                  null === (i = e.items) || void 0 === i
                    ? void 0
                    : i.filter((e) => e.data.pinId !== t),
                )),
                  e.index.delete(t);
              },
              addPin(t) {
                var i, a, r, n;
                if (
                  (null === (i = e.items) || void 0 === i
                    ? void 0
                    : i.length) === 30
                ) {
                  let t =
                    null === (n = e.items) || void 0 === n ? void 0 : n.pop();
                  void 0 !== t && e.index.delete(t.data.pinId);
                }
                null === (a = e.items) || void 0 === a || a.unshift(e5(t));
                let l =
                  null === (r = e.items) || void 0 === r ? void 0 : r.at(0);
                l && e.index.set(l.data.pinId, !0);
              },
              getData: (0, eJ.ls)(function* () {
                let { pinsResource: t, modelActionsLogger: i } = (0, eJ.dU)(e);
                if (e.loadingState !== g.Gu.PENDING)
                  try {
                    var a;
                    e.loadingState = g.Gu.PENDING;
                    let i = yield t.getPins();
                    (e.items = (0, eJ.pj)(i.pins.map(e5))),
                      null === (a = e.items) ||
                        void 0 === a ||
                        a.forEach((t) => {
                          e.index.set(t.data.pinId, !0);
                        }),
                      (e.loadingState = g.Gu.RESOLVE);
                  } catch (t) {
                    (e.loadingState = g.Gu.REJECT), i.error(t);
                  }
              }),
              toggleAlbumPin: (0, eJ.ls)(function* (i, a) {
                let { pinResource: r, modelActionsLogger: n } = (0, eJ.dU)(e);
                if (e.loadingState !== g.Gu.PENDING)
                  try {
                    let n;
                    if (e.isPinned(a))
                      return (n = yield r.unpinAlbum(i)), t.deletePin(a), n;
                    return (n = yield r.pinAlbum(i)), e$(n) && t.addPin(n), n;
                  } catch (e) {
                    n.error(e);
                    return;
                  }
              }),
              toggleArtistPin: (0, eJ.ls)(function* (i, a) {
                let { pinResource: r, modelActionsLogger: n } = (0, eJ.dU)(e);
                if (e.loadingState !== g.Gu.PENDING)
                  try {
                    let n;
                    if (e.isPinned(a))
                      return (n = yield r.unpinArtist(i)), t.deletePin(a), n;
                    return (n = yield r.pinArtist(i)), e$(n) && t.addPin(n), n;
                  } catch (e) {
                    n.error(e);
                    return;
                  }
              }),
              togglePlaylistPin: (0, eJ.ls)(function* (i, a) {
                let { pinResource: r, modelActionsLogger: n } = (0, eJ.dU)(e);
                if (e.loadingState !== g.Gu.PENDING)
                  try {
                    let n;
                    if (e.isPinned(a))
                      return (n = yield r.unpinPlaylist(i)), t.deletePin(a), n;
                    return (
                      (n = yield r.pinPlaylist(i)), e$(n) && t.addPin(n), n
                    );
                  } catch (e) {
                    n.error(e);
                    return;
                  }
              }),
              toggleVibePin: (0, eJ.ls)(function* (i, a) {
                let { pinResource: r, modelActionsLogger: n } = (0, eJ.dU)(e);
                if (e.loadingState !== g.Gu.PENDING)
                  try {
                    let n;
                    if (e.isPinned(a))
                      return (n = yield r.unpinWave(i)), t.deletePin(a), n;
                    return (n = yield r.pinWave(i)), e$(n) && t.addPin(n), n;
                  } catch (e) {
                    n.error(e);
                    return;
                  }
              }),
            };
            return t;
          });
    },
    5222: function (e, t, i) {
      "use strict";
      i.d(t, {
        Rt: function () {
          return e7;
        },
        Oe: function () {
          return tu;
        },
        ev: function () {
          return ea;
        },
      });
      var a,
        r,
        n = i(9753),
        l = i(60836),
        o = i(9544),
        s = i(98639),
        c = i(77070),
        d = i(63394),
        u = i(12683),
        _ = i.n(u),
        m = i(80542),
        p = i(31014),
        v = i(23881),
        y = i(84338),
        x = i(39513),
        h = i(28852),
        f = i(12404),
        b = i(16636),
        C = i(5773),
        g = i(2570),
        N = i(71230),
        j = i(33060),
        S = i.n(j),
        P = i(58163),
        w = i.n(P);
      let L = (e) => {
          let { value: t, variant: i, className: a } = e,
            r =
              "start" === i
                ? v.bG.changeTimecode.TIMECODE_TIME_START
                : v.bG.changeTimecode.TIMECODE_TIME_END;
          return (0, n.jsx)(g.Caption, {
            className: (0, l.W)(w().root, w()["root_".concat(i)], a),
            variant: "span",
            size: "s",
            type: "entity",
            weight: "medium",
            ...(0, v.BA)(r),
            children: t,
          });
        },
        k = (e) => {
          let {
              className: t,
              sliderClassName: i,
              disabled: a,
              isFullscreen: r,
              isMobile: o,
              showThumbVariant: c,
              withTimecode: u = !0,
            } = e,
            _ = (0, d.R$)(),
            p = (r || !o) && u,
            y = (0, s.useRef)(!1),
            [x, h] = (0, s.useState)(0),
            [f, b] = (0, s.useState)(0),
            [C, g] = (0, s.useState)(0),
            { formatMessage: j } = (0, m.Z)(),
            P = (0, s.useCallback)(
              (e, t) => {
                (y.current = !t), t ? null == _ || _.setProgress(e) : h(e);
              },
              [_],
            );
          return (
            (0, s.useEffect)(() => {
              let e =
                null == _
                  ? void 0
                  : _.state.playerState.progress.onChange(() => {
                      let e = _.state.playerState.progress.value;
                      e.duration === 1 / 0
                        ? (b(0), h(0), g(0))
                        : (b(e.duration),
                          h((t) => (y.current ? t : e.position)),
                          g(e.loaded));
                    });
              return () => {
                null == e || e();
              };
            }, [_]),
            (0, n.jsxs)("div", {
              className: (0, l.W)(
                S().root,
                {
                  [S().root_fullscreen]: r,
                  [S().root_mobile]: o,
                  [S().root_withTimecode]: u,
                },
                t,
              ),
              ...(0, v.BA)(v.bG.changeTimecode.TIMECODE_WRAPPER),
              children: [
                p &&
                  (0, n.jsx)(L, {
                    value: (0, d.gf)(Math.round(x), Math.round(f)),
                    variant: "start",
                    className: S().timecode,
                  }),
                (0, n.jsx)(N.i, {
                  className: (0, l.W)(
                    S().slider,
                    {
                      [S()["slider_thumbSize_".concat(r || o ? "xs" : "m")]]:
                        !0,
                    },
                    i,
                  ),
                  disabled: a,
                  thumbSize: r || o ? "xs" : "s",
                  trackSize: r || o ? "xs" : "s",
                  value: Math.round(x),
                  mode: "deferred",
                  secondaryValue: Math.round(C),
                  maxValue: 0 === f ? void 0 : Math.round(f),
                  onChange: P,
                  "aria-label": j({ id: "player-actions.timecode-control" }),
                  showThumbVariant: c,
                  ...(0, v.BA)(v.bG.changeTimecode.TIMECODE_SLIDER),
                }),
                p &&
                  (0, n.jsx)(L, {
                    value: (0, d.gf)(Math.round(f), Math.round(f)),
                    variant: "end",
                    className: S().timecode,
                  }),
              ],
            })
          );
        };
      var A = i(29569),
        B = i(75191),
        M = i(48892),
        E = i(67868),
        R = i(76894);
      let T = {
        [R.nJ.HQ_PLUS]: "HQ+",
        [R.nJ.HQ]: "HQ",
        [R.nJ.NQ]: "NQ",
        [R.nJ.LQ]: "LQ",
        [R.nJ.PREVIEW]: "PREVIEW",
      };
      var I = i(43056),
        V = i.n(I);
      let D = (e) => {
          let { className: t, ariaLabel: i, onClick: a, forwardRef: r } = e;
          return (0, n.jsx)("div", {
            ref: r,
            className: (0, l.W)(V().root, t),
            children: (0, n.jsx)(x.z, {
              className: V().button,
              radius: "round",
              size: "s",
              color: "secondary",
              withRipple: !1,
              "aria-label": i,
              icon: (0, n.jsx)(h.J, { variant: "fullscreen", size: "xs" }),
              onClick: a,
              ...(0, v.BA)(v.QM.player.FULLSCREEN_PLAYER_BUTTON),
            }),
          });
        },
        z = (0, s.forwardRef)((e, t) => (0, n.jsx)(D, { forwardRef: t, ...e }));
      var O = i(385),
        F = i(98776),
        W = i.n(F);
      let U = (e) => {
        let { closeToast: t, onOpenQualitySettingsMenu: i, message: a } = e,
          { formatMessage: r } = (0, m.Z)(),
          l = (0, s.useCallback)(() => {
            i(), null == t || t();
          }, [t, i]),
          o = (0, s.useMemo)(
            () =>
              (0, n.jsxs)("div", {
                className: W().message,
                children: [
                  (0, n.jsx)(g.Caption, {
                    variant: "div",
                    size: "m",
                    children: a,
                  }),
                  (0, n.jsx)(x.z, {
                    className: W().changeButton,
                    onClick: l,
                    variant: "text",
                    withRipple: !1,
                    "aria-label": r({ id: "interface-actions.change" }),
                    children: (0, n.jsx)(g.Caption, {
                      variant: "div",
                      size: "m",
                      children: (0, n.jsx)(p.Z, {
                        id: "interface-actions.change",
                      }),
                    }),
                  }),
                ],
              }),
            [r, l, a],
          );
        return (0, n.jsx)(E.Yj, {
          closeToast: t,
          cover: (0, n.jsx)(h.J, {
            className: W().icon,
            size: "xs",
            variant: "settings",
          }),
          message: o,
        });
      };
      var G = i(55676),
        Z = i.n(G);
      let Q = {
          duration: 300,
          initial: { transform: "translateY(5%)", opacity: 0 },
          open: { transform: "translateY(0)", opacity: 1 },
          close: { transform: "translateY(5%)", opacity: 0 },
        },
        J = [
          {
            type: R.nJ.HQ_PLUS,
            text: (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(p.Z, { id: "player-actions.audio-quality-hq-plus" }),
                "\xa0",
                (0, n.jsxs)("span", {
                  className: Z().item_type,
                  children: ["• ", T[R.nJ.HQ_PLUS]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-hq-plus",
          },
          {
            type: R.nJ.HQ,
            text: (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(p.Z, { id: "player-actions.audio-quality-hq" }),
                "\xa0",
                (0, n.jsxs)("span", {
                  className: Z().item_type,
                  children: ["• ", T[R.nJ.HQ]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-hq",
          },
          {
            type: R.nJ.NQ,
            text: (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(p.Z, { id: "player-actions.audio-quality-nq" }),
                "\xa0",
                (0, n.jsxs)("span", {
                  className: Z().item_type,
                  children: ["• ", T[R.nJ.NQ]],
                }),
              ],
            }),
            qualityMessageId: "player-actions.audio-quality-nq",
          },
        ],
        Y = {
          [R.nJ.HQ_PLUS]: (0, n.jsx)(p.Z, {
            id: "player-actions.hq-plus-description",
          }),
          [R.nJ.HQ]: (0, n.jsx)(p.Z, { id: "player-actions.hq-description" }),
          [R.nJ.NQ]: (0, n.jsx)(p.Z, { id: "player-actions.nq-description" }),
          [R.nJ.LQ]: (0, n.jsx)(p.Z, { id: "player-actions.nq-description" }),
        },
        H = (0, o.Pi)((e) => {
          let {
            reference: t,
            onOpenChange: i,
            open: a,
            placement: r,
            returnFocus: o,
            isNewQualityEnabled: c,
          } = e;
          (0, d.ZP)(a);
          let { formatMessage: u } = (0, m.Z)(),
            { contentRef: _ } = (0, d.$Y)(),
            { notify: v } = (0, d.d$)(),
            y = (0, d.uK)().get(d.V0),
            { sonataState: f, user: b } = (0, d.oR)(),
            C = (0, d.Sc)(),
            N = (0, s.useRef)(null),
            j = c
              ? u({ id: "player-actions.audio-quality-nda" })
              : u({ id: "player-actions.audio-quality" }),
            S = (0, s.useCallback)(() => {
              null == i || i(!0);
            }, [i]),
            P = (0, s.useCallback)(() => {
              null == i || i(!1);
            }, [i]),
            w = (0, s.useCallback)(
              (e) => {
                f.setQuality(e),
                  null == C || C.setQuality(e),
                  y.set(d.BU.YmPlayerQuality, e);
              },
              [C, f, y],
            ),
            L = (0, s.useCallback)(
              (e) => {
                let t = u({ id: e }).toLowerCase();
                return (0, n.jsx)(p.Z, {
                  id: "notifications-info.quality-changed",
                  values: { quality: t },
                });
              },
              [u],
            ),
            k = (0, s.useCallback)(
              (e, t) => () => {
                if (f.quality === e) return;
                w(e);
                let i = L(t);
                v((0, n.jsx)(U, { onOpenQualitySettingsMenu: S, message: i }), {
                  containerId: d.W$.INFO,
                });
              },
              [L, S, v, f.quality, w],
            ),
            A = (0, s.useMemo)(() => {
              let e = !b.hasPlus;
              return J.map((t) => {
                let { type: i, text: a, qualityMessageId: r } = t;
                if (!c && i === R.nJ.HQ_PLUS) return null;
                let o =
                    i === f.quality
                      ? (0, n.jsx)(h.J, { variant: "check" })
                      : null,
                  s = i === f.quality;
                return (
                  ((f.quality === R.nJ.NQ && i === R.nJ.LQ) ||
                    (f.quality === R.nJ.LQ && i === R.nJ.NQ)) &&
                    ((s = !0), (o = (0, n.jsx)(h.J, { variant: "check" }))),
                  (0, n.jsxs)(
                    O.sN,
                    {
                      isBlock: !0,
                      disabled: e,
                      className: (0, l.W)(Z().item, { [Z().expandedItem]: c }),
                      iconPosition: "right",
                      icon: o,
                      onClick: k(i, r),
                      role: "option",
                      "aria-selected": s,
                      children: [
                        c &&
                          (0, n.jsxs)("span", {
                            className: Z().itemWrapper,
                            children: [
                              (0, n.jsx)("span", {
                                className: Z().item_option,
                                children: a,
                              }),
                              (0, n.jsx)("span", {
                                className: (0, l.W)(
                                  Z().item_option,
                                  Z().itemSubTitle,
                                ),
                                children: Y[i],
                              }),
                            ],
                          }),
                        !c &&
                          (0, n.jsx)("span", {
                            className: Z().item_option,
                            children: a,
                          }),
                      ],
                    },
                    i,
                  )
                );
              });
            }, [k, f.quality, b.hasPlus, c]),
            B = (0, s.useMemo)(
              () =>
                c
                  ? {
                      className: Z().root,
                      popoverContentClassName: Z().popoverContent,
                      disableFloatingStyles: !0,
                      portalNode: _,
                      transform: !1,
                      transition: Q,
                    }
                  : { offsetOptions: 10 },
              [_, c],
            );
          return (0, n.jsxs)(O.v2, {
            reference: t,
            placement: r,
            open: a,
            onOpenChange: i,
            returnFocus: o,
            role: "listbox",
            strategy: "absolute",
            ...B,
            children: [
              (0, n.jsxs)(g.Heading, {
                className: (0, l.W)(Z().header, {
                  [Z().headerWithCloseButton]: c,
                }),
                variant: "h4",
                size: "xs",
                weight: "bold",
                children: [
                  j,
                  c &&
                    (0, n.jsx)(x.z, {
                      ref: N,
                      radius: "round",
                      color: "secondary",
                      size: "xxs",
                      icon: (0, n.jsx)(h.J, { variant: "close", size: "xxs" }),
                      onClick: P,
                      "aria-label": u({
                        id: "interface-actions.close-quality-settings",
                      }),
                    }),
                ],
              }),
              A,
            ],
          });
        });
      var q = i(66846),
        K = i.n(q);
      let X = "player-region",
        $ = (0, o.Pi)((e) => {
          let {
              className: t,
              entityMeta: i,
              onLikeClick: a,
              onDislikeClick: onDislikeClick,
            } = e,
            {
              user: r,
              sonataState: o,
              experiments: c,
              fullscreenPlayer: u,
            } = (0, d.oR)(),
            [_, N] = (0, s.useState)(!1),
            [j, S] = (0, s.useState)(!1),
            { formatMessage: P } = (0, m.Z)(),
            w = (0, d.uK)().get(d.V0),
            L = o.contextType === y.Ak.Generative,
            R = !L,
            I = c.checkExperiment(d.pe.WebNextPodcastPage, "on"),
            V = true && true,
            D = w.get(d.BU.YmPlayerQuality),
            O = D ? T[D] : null,
            F = r.isAuthorized && !L,
            W = true,
            U = (0, d.RV)(),
            G = o.canSpeed && U && I && (null == i ? void 0 : i.isNonMusic),
            Z = (0, s.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == i ? void 0 : i.averageColor,
              }),
              [null == i ? void 0 : i.averageColor],
            ),
            Q = (0, s.useCallback)((e) => {
              e.stopPropagation();
            }, []),
            J = (0, s.useCallback)(
              (e) => {
                let t = e.target,
                  a =
                    t instanceof Element &&
                    ["DIV", "SECTION"].includes(t.tagName);
                i && R && a && u.showFullscreenPlayerModal();
              },
              [i, u, R],
            ),
            Y = (0, s.useMemo)(() => {
              if (null == i ? void 0 : i.isNonMusic) return null;
              let e = ""
                .concat(P({ id: "interface-actions.open-sync-lyrics" }), " ")
                .concat(P({ id: "warning-messages.can-break-accessibility" }));
              return W
                ? (0, n.jsx)(x.z, {
                    radius: "round",
                    size: "xxxs",
                    variant: "text",
                    disabled: !(null == i ? void 0 : i.hasSyncLyrics),
                    withRipple: !1,
                    "aria-label": e,
                    icon: (0, n.jsx)(h.J, { variant: "lyrics", size: "xs" }),
                    onClick: u.showSyncLyricsModal,
                  })
                : (0, n.jsx)(E.wx, {
                    title: P({ id: "entity-names.sync-lyrics" }),
                    description: P({ id: "future-feature.message" }),
                    children: (0, n.jsx)(x.z, {
                      radius: "round",
                      size: "xxxs",
                      variant: "text",
                      disabled: !0,
                      withRipple: !1,
                      "aria-label": e,
                      icon: (0, n.jsx)(h.J, { variant: "lyrics", size: "xs" }),
                    }),
                  });
            }, [
              W,
              null == i ? void 0 : i.hasSyncLyrics,
              P,
              u.showSyncLyricsModal,
              null == i ? void 0 : i.isNonMusic,
            ]);
          return (0, n.jsxs)("section", {
            style: Z,
            className: (0, l.W)(K().root, { [K().root_disabled]: !i }, t),
            onDoubleClick: J,
            "aria-labelledby": X,
            ...(0, v.BA)(v.QM.player.PLAYERBAR_DESKTOP),
            children: [
              (0, n.jsx)(b.y, {
                children: (0, n.jsx)(g.Heading, {
                  variant: "h3",
                  id: X,
                  children: (0, n.jsx)(p.Z, { id: "a11y-regions.player" }),
                }),
              }),
              (0, n.jsxs)("div", {
                className: K().info,
                children: [
                  (0, n.jsx)("div", {
                    className: K().infoCard,
                    children:
                      i &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsxs)(f.Paper, {
                            radius: "s",
                            className: K().coverContainer,
                            children: [
                              (0, n.jsx)(E.BE, {
                                className: K().cover,
                                src: i.coverUri,
                                size: 100,
                                fit: "cover",
                                withAvatarReplace: !0,
                              }),
                              R &&
                                (0, n.jsxs)(C.u, {
                                  placement: "top",
                                  offsetOptions: 4,
                                  children: [
                                    (0, n.jsx)(z, {
                                      ariaLabel: P({
                                        id: "player-actions.fullscreen",
                                      }),
                                      onClick: u.showFullscreenPlayerModal,
                                    }),
                                    (0, n.jsx)(C._v, {
                                      children: (0, n.jsx)(p.Z, {
                                        id: "player-actions.fullscreen",
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: K().description,
                            children: (null == i ? void 0 : i.isPodcast)
                              ? (0, n.jsx)(M.wT, {
                                  track: i,
                                  withDate: !1,
                                  withSecondaryColor: !0,
                                  withPodcastName: !0,
                                })
                              : (0, n.jsx)(M.ko, {
                                  track: i,
                                  withSecondaryColor: !0,
                                  withAlbumLink: !0,
                                }),
                          }),
                        ],
                      }),
                  }),
                  (0, n.jsx)("div", {
                    className: K().infoButtons,
                    onDoubleClick: Q,
                    children:
                      i &&
                      F &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(E.dJ, {
                            className: K().likeButton,
                            isLiked: i.isLiked,
                            onClick: a,
                            iconSize: "xs",
                          }),
                          (0, n.jsx)(E.Q1, {
                            className: K().dislikeButton,
                            isDisliked: i.isDisliked,
                            onClick: onDislikeClick,
                            iconSize: "xs",
                          }),
                          (0, n.jsx)(M.hz, {
                            track: i,
                            placement: "top",
                            open: _,
                            onOpenChange: N,
                            reference: (0, n.jsx)(x.z, {
                              size: "s",
                              variant: "text",
                              withRipple: !1,
                              radius: "round",
                              "aria-label": P({
                                id: "interface-actions.context-menu",
                              }),
                              icon: (0, n.jsx)(h.J, {
                                size: "xs",
                                variant: "more",
                              }),
                              ...(0, v.BA)(
                                v.QM.player
                                  .PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON,
                              ),
                            }),
                          }),
                        ],
                      }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: K().sonata,
                children: [
                  (0, n.jsx)(B.WP, { isMobile: !1, entityMeta: i }),
                  !o.isGenerativeContext &&
                    (0, n.jsx)(k, {
                      disabled: !i,
                      isMobile: !1,
                      isFullscreen: !1,
                    }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: K().meta,
                children: [
                  !o.isGenerativeContext &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        G && (0, n.jsx)(E.t5, { iconSize: "l" }),
                        Y,
                        (0, n.jsx)(E.wx, {
                          title: P({ id: "player-actions.history" }),
                          description: P({ id: "future-feature.message" }),
                          children: (0, n.jsx)(x.z, {
                            radius: "round",
                            size: "xxxs",
                            variant: "text",
                            disabled: !0,
                            withRipple: !1,
                            "aria-label": P({ id: "player-actions.history" }),
                            icon: (0, n.jsx)(h.J, {
                              variant: "queue",
                              size: "xs",
                            }),
                          }),
                        }),
                        (0, n.jsx)(H, {
                          placement: "bottom",
                          open: j,
                          isNewQualityEnabled: V,
                          onOpenChange: S,
                          reference: (0, n.jsx)(x.z, {
                            className: (0, l.W)({ [K().settingsButton]: V }),
                            radius: "round",
                            size: "xxxs",
                            variant: "text",
                            withRipple: !1,
                            "aria-label": P({
                              id: "player-actions.audio-quality",
                            }),
                            icon: V
                              ? null
                              : (0, n.jsx)(h.J, {
                                  variant: "settings",
                                  size: "xs",
                                }),
                            ...(0, v.BA)(v.QM.player.SOUND_QUALITY_BUTTON),
                            children: V ? O : null,
                          }),
                        }),
                      ],
                    }),
                  (0, n.jsx)(A.F, {}),
                ],
              }),
            ],
          });
        });
      var ee = i(83249),
        et = i.n(ee);
      let ei = (0, o.Pi)((e) => {
          var t;
          let { className: i, entityMeta: a, onLikeClick: r } = e,
            { user: o, sonataState: c, fullscreenPlayer: u } = (0, d.oR)(),
            _ = c.contextType === y.Ak.Generative,
            m = o.isAuthorized && !_,
            v =
              (null == a ? void 0 : a.isTrackPodcast) ||
              (null == a
                ? void 0
                : null === (t = a.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            x = (0, s.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == a ? void 0 : a.averageColor,
              }),
              [null == a ? void 0 : a.averageColor],
            ),
            h = (0, s.useCallback)(
              (e) => {
                let t = e.target,
                  i =
                    t instanceof Element &&
                    ["DIV", "SECTION", "IMG"].includes(t.tagName);
                a && i && u.showFullscreenPlayerModal();
              },
              [a, u],
            );
          return (0, n.jsxs)("section", {
            style: x,
            className: (0, l.W)(et().root, i),
            onClick: h,
            children: [
              (0, n.jsx)(b.y, {
                children: (0, n.jsx)(g.Heading, {
                  variant: "h3",
                  id: "player-region",
                  children: (0, n.jsx)(p.Z, { id: "a11y-regions.player" }),
                }),
              }),
              !c.isGenerativeContext &&
                (0, n.jsx)(k, {
                  className: et().progressBar,
                  sliderClassName: et().progressBar,
                  isMobile: !0,
                  isFullscreen: !1,
                  disabled: !a,
                }),
              (0, n.jsxs)("div", {
                className: et().info,
                children: [
                  a
                    ? (0, n.jsxs)("div", {
                        className: et().infoCard,
                        children: [
                          (0, n.jsx)(f.Paper, {
                            radius: "s",
                            className: et().coverContainer,
                            children: (0, n.jsx)(E.BE, {
                              className: et().cover,
                              src: a.coverUri,
                              size: 50,
                              fit: "cover",
                              withAvatarReplace: !0,
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: et().description,
                            children: v
                              ? (0, n.jsx)(M.wT, {
                                  track: a,
                                  withDate: !1,
                                  withSecondaryColor: !0,
                                  withPodcastName: !0,
                                })
                              : (0, n.jsx)(M.ko, {
                                  track: a,
                                  withSecondaryColor: !0,
                                  withAlbumLink: !0,
                                }),
                          }),
                        ],
                      })
                    : (0, n.jsx)("div", { className: et().infoCard }),
                  (0, n.jsxs)("div", {
                    className: et().infoButtons,
                    children: [
                      a &&
                        m &&
                        (0, n.jsx)(E.dJ, { isLiked: a.isLiked, onClick: r }),
                      (0, n.jsx)(B.WP, { isMobile: !0, entityMeta: a }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        ea = (0, o.Pi)((e) => {
          let { className: t } = e,
            { settings: i, sonataState: a } = (0, d.oR)(),
            r = (0, d.XU)(),
            o = (0, c.SB)(a.entityMeta),
            u = (0, c.KX)(a.entityMeta);
          (0, s.useEffect)(() => {
            if (!a.isGenerativeContext)
              return (
                null == r || r.addShortcutsListener(d.yx.LIKE, o),
                null == r || r.addShortcutsListener(d.yx.DISLIKE, u),
                () => {
                  null == r || r.removeShortcutsListener(d.yx.LIKE),
                    null == r || r.removeShortcutsListener(d.yx.DISLIKE);
                }
              );
          }, [u, o, r, a.isGenerativeContext]);
          let m = (0, s.useMemo)(
            () => (i.layout === d.t8.Mobile ? ei : $),
            [i.layout],
          );
          return (0, n.jsx)(m, {
            onLikeClick: o,
            onDislikeClick: u,
            entityMeta: a.entityMeta,
            className: (0, l.W)(t, _().root),
          });
        });
      var er = i(23897),
        en = i(89352),
        el = i(69863),
        eo = i(67175),
        es = i.n(eo);
      let ec = (e) => {
        let { delay: t, initialState: i, throttleTimeout: a } = e,
          r = (0, s.useRef)(null),
          [n, l] = (0, s.useState)(!!i),
          o = (0, s.useMemo)(
            () =>
              (0, er.Z)(
                () => {
                  l(!i),
                    r.current && window.clearTimeout(r.current),
                    (r.current = window.setTimeout(() => {
                      l(!!i);
                    }, t));
                },
                a,
                { trailing: !1 },
              ),
            [t, i, a],
          ),
          c = (0, s.useCallback)(() => {
            l(!!i), r.current && window.clearTimeout(r.current);
          }, [i]);
        return (
          (0, s.useEffect)(
            () => () => {
              r.current && window.clearTimeout(r.current);
            },
            [],
          ),
          { state: n, handleDelayedToggle: o, reset: c }
        );
      };
      var ed = i(37117);
      let eu = (0, s.createContext)({}),
        e_ = () => (0, s.useContext)(eu);
      var em = i(80615),
        ep = i.n(em),
        ev = i(68466),
        ey = i.n(ev);
      let ex = (e) => (e + 1) * 0.275,
        eh = (e) => {
          let { className: t, icon: i } = e,
            a = (0, s.useCallback)(
              (e) => {
                let t = {
                  animationDelay: "".concat(ex(e), "s"),
                  animationDuration: "".concat(1.1, "s, ").concat(1.1, "s"),
                };
                return i
                  ? (0, s.cloneElement)(i, {
                      className: (0, l.W)(ey().element, ey().element_withIcon),
                      key: e,
                      style: t,
                    })
                  : (0, n.jsx)(
                      "div",
                      {
                        className: (0, l.W)(
                          ey().element,
                          ey().element_withDefaultElement,
                        ),
                        style: t,
                      },
                      e,
                    );
              },
              [i],
            );
          return (0, n.jsx)("div", {
            className: (0, l.W)(ey().root, t),
            children: Array.from({ length: 4 }, (e, t) => a(t)),
          });
        };
      var ef = i(75015),
        eb = i(45131);
      ((a = r || (r = {})).INTRO = "intro"),
        (a.PREPARE = "prepare"),
        (a.PLAYING = "playing"),
        (a.OUTRO = "outro");
      let eC = () => {
        var e;
        let t = (0, d.R$)(),
          [i, a] = (0, s.useState)(
            null !==
              (e =
                null == t
                  ? void 0
                  : t.state.playerState.progress.value.position) && void 0 !== e
              ? e
              : 0,
          ),
          r = (0, s.useCallback)((e) => {
            a(e);
          }, []);
        return (
          (0, s.useEffect)(() => {
            let e =
              null == t
                ? void 0
                : t.state.playerState.progress.onChange(() => {
                    a(t.state.playerState.progress.value.position);
                  });
            return () => {
              null == e || e();
            };
          }, [t]),
          { progressPosition: i, setProgressPosition: r }
        );
      };
      var eg = i(15419);
      let eN = (e) => {
          let { onSetProgressEventChange: t } = e,
            i = (0, d.R$)();
          (0, s.useEffect)(() => {
            let e =
              null == i
                ? void 0
                : i.state.playerState.event.onChange((e) => {
                    e === eg.KX.SET_PROGRESS && t();
                  });
            return () => {
              null == e || e();
            };
          }, [t, i]);
        },
        ej = (e) => {
          let { position: t } = e,
            {
              fullscreenPlayer: { syncLyrics: i },
            } = (0, d.oR)();
          return {
            state: (0, s.useMemo)(() => {
              let { startSec: e, endSec: a } = i;
              return e && e >= 3 && e - t > 0 && e - t <= 3
                ? r.PREPARE
                : e && e > t
                  ? r.INTRO
                  : a && t > a
                    ? r.OUTRO
                    : r.PLAYING;
            }, [t, i]),
          };
        };
      var eS = i(83627),
        eP = i.n(eS);
      let ew = (0, o.Pi)(() => {
        var e, t, i;
        let { formatMessage: a } = (0, m.Z)(),
          {
            fullscreenPlayer: { syncLyrics: r },
          } = (0, d.oR)();
        return (0, n.jsxs)("footer", {
          className: eP().root,
          children: [
            r.hasWriters &&
              (0, n.jsx)(g.Caption, {
                className: eP().writers,
                variant: "div",
                size: "l",
                weight: "medium",
                children: a(
                  { id: "entity-names.authors" },
                  {
                    authors:
                      null === (e = r.writers) || void 0 === e
                        ? void 0
                        : e.join(", "),
                  },
                ),
              }),
            (null === (t = r.major) || void 0 === t ? void 0 : t.name) &&
              (0, n.jsx)(g.Caption, {
                className: eP().major,
                variant: "div",
                size: "l",
                weight: "medium",
                children: a(
                  { id: "entity-names.source" },
                  {
                    source:
                      null === (i = r.major) || void 0 === i ? void 0 : i.name,
                  },
                ),
              }),
          ],
        });
      });
      var eL = i(73390),
        ek = i.n(eL);
      let eA = (e) => {
        let { className: t, text: i } = e;
        return (0, n.jsx)("span", {
          className: (0, l.W)(ek().root, t),
          children: i,
        });
      };
      var eB = i(77920),
        eM = i.n(eB);
      let eE = (e) => {
          let t = (0, s.useRef)(0),
            {
              fullscreenPlayer: { syncLyrics: i },
              sonataState: { contextId: a, contextType: r },
            } = (0, d.oR)();
          (0, s.useEffect)(() => {
            !i.hasLyricsViewed &&
              null !== e &&
              "visible" === document.visibilityState &&
              (t.current++,
              t.current >= 2 && i.sendViews({ contextId: a, contextType: r }));
          }, [e, a, r, i]);
        },
        eR = (0, o.Pi)((e) => {
          var t, i;
          let {
              state: a,
              progressPosition: o,
              shouldShowScrolledLyrics: c,
              setProgressPosition: u,
            } = e,
            _ = (0, d.R$)(),
            m = (0, eb.oc)(),
            {
              fullscreenPlayer: { syncLyrics: p },
            } = (0, d.oR)(),
            v = (0, s.useCallback)(
              (e) => (t) => {
                c &&
                  (t.stopPropagation(),
                  u(e + 0.01),
                  null == _ ||
                    _.setProgress(e + 0.01).catch(() => {
                      u(o);
                    }));
              },
              [o, u, c, _],
            ),
            y = p.getActiveLineIndex(o);
          return (
            eE(y),
            (0, s.useEffect)(() => {
              if (!c) {
                if (
                  ((a === r.INTRO || a === r.PREPARE) && m.slideTo(0),
                  a === r.OUTRO)
                ) {
                  var e;
                  m.slideTo(
                    Number(
                      null === (e = p.lines) || void 0 === e
                        ? void 0
                        : e.length,
                    ),
                  );
                }
                null !== y && m.slideTo(y + 1);
              }
            }, [
              y,
              c,
              a,
              m,
              null === (t = p.lines) || void 0 === t ? void 0 : t.length,
            ]),
            null === (i = p.lines) || void 0 === i
              ? void 0
              : i.map((e, t) => {
                  var i;
                  return (0, n.jsx)(
                    eb.o5,
                    {
                      onClickCapture: v(e.fromSec),
                      className: (0, l.W)(eM().line, {
                        [eM().line_last]:
                          t ===
                            Number(
                              null === (i = p.lines) || void 0 === i
                                ? void 0
                                : i.length,
                            ) -
                              1 && !c,
                        [eM().line_active]: t === y && !c,
                      }),
                      children: (0, n.jsx)(eA, { text: e.text }),
                    },
                    e.key,
                  );
                })
          );
        });
      eR.displayName = "SwiperSlide";
      let eT = { forceToAxis: !0 },
        eI = (0, o.Pi)(() => {
          let {
              fullscreenPlayer: { syncLyrics: e },
              settings: t,
            } = (0, d.oR)(),
            { progressPosition: i, setProgressPosition: a } = eC(),
            { state: o } = ej({ position: i }),
            {
              scrollerClassName: c,
              footerClassName: u,
              counterClassName: _,
            } = e_(),
            {
              state: m,
              handleDelayedToggle: p,
              reset: v,
            } = ec({ delay: 3e3, throttleTimeout: 300 }),
            {
              state: y,
              handleDelayedToggle: x,
              reset: h,
            } = ec({ delay: 3e3, throttleTimeout: 300 }),
            f = t.layout === d.t8.Mobile,
            b = (0, s.useCallback)(() => {
              y || p();
            }, [p, y]),
            C = (0, s.useCallback)(() => {
              m && v(), x();
            }, [x, v, m]),
            g = (0, s.useCallback)(
              (e) => {
                switch (e.code) {
                  case d.Dt.KEY_L:
                  case d.Dt.KEY_J:
                  case d.Dt.ARROW_LEFT:
                  case d.Dt.ARROW_RIGHT:
                    p();
                }
              },
              [p],
            ),
            N = (0, s.useMemo)(
              () =>
                o === r.PREPARE ? Math.ceil(Number(e.startSec) - i) : null,
              [i, o, e.startSec],
            ),
            j = (0, s.useMemo)(
              () =>
                o === r.PREPARE
                  ? (0, n.jsx)(eA, { className: eM().counterLine, text: N })
                  : o === r.INTRO
                    ? (0, n.jsx)(eh, {})
                    : null,
              [N, o],
            );
          return (
            eN({ onSetProgressEventChange: h }),
            (0, s.useEffect)(
              () => (
                window.addEventListener("keydown", g),
                () => {
                  window.removeEventListener("keydown", g);
                }
              ),
              [g],
            ),
            (0, s.useEffect)(
              () => (
                window.addEventListener("mousemove", b),
                () => {
                  window.addEventListener("mousemove", b);
                }
              ),
              [b],
            ),
            (0, n.jsxs)(eb.tq, {
              className: (0, l.W)(
                eM().root,
                {
                  [eM()["root_".concat(o)]]: !y,
                  [eM().root_withVisibleUpperLyrics]: m,
                  [eM().root_withVisibleScrolledLyrics]: y,
                },
                c,
              ),
              modules: [ef.Gk, ef.Rv],
              slidesPerView: "auto",
              spaceBetween: 32,
              direction: "vertical",
              mousewheel: eT,
              freeMode: !0,
              onScroll: C,
              onTouchMove: f ? C : void 0,
              allowTouchMove: f,
              children: [
                (0, n.jsx)(eb.o5, {
                  className: (0, l.W)(eM().counter, _),
                  children: j,
                }),
                (0, n.jsx)(eR, {
                  setProgressPosition: a,
                  shouldShowScrolledLyrics: y,
                  state: o,
                  progressPosition: i,
                }),
                (0, n.jsx)(eb.o5, {
                  className: u,
                  children: (0, n.jsx)(ew, {}),
                }),
              ],
            })
          );
        }),
        eV = {
          enter: ep().root_enter,
          enterActive: ep().root_enter_active,
          exit: ep().root_exit,
          exitActive: ep().root_exit_active,
        },
        eD = (0, o.Pi)((e) => {
          let {
              className: t,
              shouldShowSyncLyrics: i,
              counterClassName: a,
              footerClassName: r,
              scrollerClassName: o,
              contentClassName: c,
              loaderClassName: u,
            } = e,
            _ = (0, s.useRef)(null),
            {
              sonataState: { entityMeta: m },
              fullscreenPlayer: { syncLyrics: p },
            } = (0, d.oR)();
          (0, s.useEffect)(() => {
            p.currentTrackId !== (null == m ? void 0 : m.id) &&
              i &&
              p.getData(null == m ? void 0 : m.id);
          }, [null == m ? void 0 : m.id, i, p]);
          let v = (0, s.useMemo)(
              () =>
                p.isLoaded
                  ? (0, n.jsx)(eI, {})
                  : ((p.isRejected || p.hasInvalidLyrics || !i) &&
                      p.setInvisible(),
                    (0, n.jsx)(eh, { className: u })),
              [
                p.isLoaded,
                p.isRejected,
                p.hasInvalidLyrics,
                p.setInvisible,
                i,
                u,
              ],
            ),
            y = (0, s.useMemo)(
              () => ({
                counterClassName: a,
                scrollerClassName: o,
                footerClassName: r,
              }),
              [a, r, o],
            );
          return (0, n.jsx)(eu.Provider, {
            value: y,
            children: (0, n.jsx)(ed.Z, {
              in: i,
              nodeRef: _,
              timeout: 200,
              unmountOnExit: !0,
              classNames: eV,
              children: (0, n.jsx)("div", {
                ref: _,
                className: (0, l.W)(ep().root, t),
                children: (0, n.jsx)("div", {
                  className: (0, l.W)(ep().content, c),
                  children: v,
                }),
              }),
            }),
          });
        });
      var ez = i(63341),
        eO = i.n(ez);
      let eF = (0, o.Pi)((e) => {
        let { className: t } = e,
          { sonataState: i } = (0, d.oR)(),
          a = (0, s.useMemo)(
            () =>
              i.entityMeta
                ? (0, n.jsx)(M.ko, {
                    className: eO().meta,
                    track: i.entityMeta,
                    withSecondaryColor: !0,
                    withAlbumLink: !0,
                    captionSize: "l",
                    explicitSize: "s",
                    withAllArtistsTitle: !0,
                  })
                : null,
            [i.entityMeta],
          );
        return (0, n.jsxs)("div", {
          className: (0, l.W)(eO().root, t),
          children: [
            a,
            (0, n.jsx)(k, {
              className: eO().slider,
              disabled: !a,
              isMobile: !1,
              isFullscreen: !1,
              withTimecode: !1,
            }),
          ],
        });
      });
      var eW = i(82120),
        eU = i.n(eW);
      let eG = (e) => {
        let {
            shouldShowSyncLyricsControls: t,
            isContextMenuVisible: i,
            setIsContextMenuVisible: a,
          } = e,
          { formatMessage: r } = (0, m.Z)(),
          {
            fullscreenPlayer: o,
            sonataState: { entityMeta: u },
            user: _,
          } = (0, d.oR)(),
          { state: p, handleDelayedToggle: y } = ec({
            delay: 1500,
            throttleTimeout: 300,
          }),
          f = (0, c.SB)(u),
          b = (0, s.useCallback)(
            (e) => {
              e.stopPropagation(), o.syncLyrics.setInvisible();
            },
            [o],
          ),
          C = (0, s.useCallback)((e) => {
            e.stopPropagation();
          }, []),
          g = (0, s.useMemo)(() => {
            if (
              _.isAuthorized &&
              !(null == u ? void 0 : u.isRemoved) &&
              (null == u ? void 0 : u.isAvailable)
            )
              return (0, n.jsx)(M.hz, {
                track: u,
                open: i,
                onOpenChange: a,
                placement: "left",
                reference: (0, n.jsx)(x.z, {
                  className: (0, l.W)(eU().menuButton, {
                    [eU().menuButton_active]: i,
                  }),
                  onClick: C,
                  size: "l",
                  withRipple: !1,
                  radius: "round",
                  "aria-label": r({ id: "interface-actions.context-menu" }),
                  icon: (0, n.jsx)(h.J, { variant: "more", size: "m" }),
                  ...(0, v.BA)(
                    v.QM.player.FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                  ),
                }),
              });
          }, [u, r, C, i, a, _.isAuthorized]);
        return ((0, s.useEffect)(
          () => (
            window.addEventListener("mousemove", y),
            () => {
              window.removeEventListener("mousemove", y);
            }
          ),
          [y],
        ),
        t)
          ? (0, n.jsx)(z, {
              className: (0, l.W)(eU().fullscreenPlayerButton, {
                [eU().fullscreenPlayerButton_visible]: p,
              }),
              ariaLabel: r({ id: "interface-actions.hide-sync-lyrics" }),
              onClick: b,
            })
          : (0, n.jsxs)("div", {
              className: (0, l.W)(eU().root, { [eU().root_visible]: i }),
              children: [
                (0, n.jsx)(B.WP, {
                  className: eU().sonataControls,
                  isMobile: !1,
                  entityMeta: u,
                  isFullscreen: !0,
                }),
                g,
                (0, n.jsx)(E.dJ, {
                  className: eU().likeButton,
                  isLiked: null == u ? void 0 : u.isLiked,
                  onClick: f,
                  iconSize: "m",
                  size: "l",
                  variant: "default",
                  color: "secondary",
                }),
              ],
            });
      };
      var eZ = i(10751),
        eQ = i.n(eZ);
      let eJ = (e) => {
          let { className: t, children: i, coverUri: a } = e;
          return (0, n.jsxs)(f.Paper, {
            radius: "m",
            className: (0, l.W)(eQ().root, t),
            children: [
              (0, n.jsx)(E.BE, {
                className: eQ().cover,
                src: a,
                size: 400,
                fit: "cover",
                withAvatarReplace: !0,
              }),
              i,
            ],
          });
        },
        eY = (0, o.Pi)((e) => {
          var t;
          let { isContextMenuVisible: i, setIsContextMenuVisible: a } = e,
            { state: r, handleDelayedToggle: o } = ec({
              delay: 150,
              throttleTimeout: 100,
            }),
            {
              sonataState: { entityMeta: c },
              fullscreenPlayer: u,
            } = (0, d.oR)(),
            _ =
              (null == c ? void 0 : c.isTrackPodcast) ||
              (null == c
                ? void 0
                : null === (t = c.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast),
            m =
              !!(null == c ? void 0 : c.hasSyncLyrics) &&
              u.syncLyrics.isVisible,
            p = (0, s.useMemo)(
              () =>
                c
                  ? _
                    ? (0, n.jsx)(M.wT, {
                        className: es().meta,
                        titleContainerClassName: es().title,
                        track: c,
                        withSecondaryColor: !0,
                        withDate: !1,
                        captionSize: "l",
                        explicitSize: "s",
                        withPodcastName: !0,
                        textClassName: es().podcastAuthors,
                      })
                    : (0, n.jsx)(M.ko, {
                        className: es().meta,
                        titleContainerClassName: es().title,
                        track: c,
                        withSecondaryColor: !0,
                        withAlbumLink: !0,
                        captionSize: "l",
                        explicitSize: "s",
                        withAllArtistsTitle: !0,
                        artistsClassName: es().artists,
                      })
                  : null,
              [c, null == c ? void 0 : c.id, _],
            );
          return (
            (0, s.useEffect)(
              () => (
                window.addEventListener("resize", o),
                () => {
                  window.removeEventListener("resize", o);
                }
              ),
              [o],
            ),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(eJ, {
                  className: (0, l.W)(es().poster, es().important, {
                    [es().poster_withDisabledInsetTransition]: r,
                    [es().poster_withSyncLyricsAnimation]: m,
                  }),
                  coverUri: null == c ? void 0 : c.coverUri,
                  children: (0, n.jsx)(eG, {
                    setIsContextMenuVisible: a,
                    isContextMenuVisible: i,
                    shouldShowSyncLyricsControls: m,
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: es().info,
                  children: [
                    p,
                    (0, n.jsx)(k, {
                      className: es().sliderContainer,
                      sliderClassName: es().slider,
                      disabled: !c,
                      isMobile: !1,
                      isFullscreen: !1,
                    }),
                  ],
                }),
                (0, n.jsx)(eD, {
                  className: es().syncLyrics,
                  loaderClassName: es().syncLyricsLoader,
                  contentClassName: es().syncLyricsContent,
                  shouldShowSyncLyrics: m,
                  scrollerClassName: es().syncLyricsScroller,
                  counterClassName: es().syncLyricsCounter,
                  footerClassName: es().syncLyricsFooter,
                }),
                (0, n.jsx)(eF, {
                  className: (0, l.W)(es().syncLyricsCard, {
                    [es().syncLyricsCard_withAnimation]: m,
                  }),
                }),
              ],
            })
          );
        }),
        eH = (0, o.Pi)(() => {
          let { formatMessage: e } = (0, m.Z)(),
            [t, i] = (0, s.useState)(!1),
            {
              modals: { trackModal: a },
              sonataState: { entityMeta: r },
              fullscreenPlayer: o,
            } = (0, d.oR)(),
            c = (0, s.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == r ? void 0 : r.averageColor,
              }),
              [null == r ? void 0 : r.averageColor],
            );
          return (0, n.jsxs)(en.u, {
            className: (0, l.W)(es().root, es().important),
            open: o.modal.isOpened,
            onOpenChange: t || a.isOpened ? void 0 : o.modal.onOpenChange,
            onClose: o.modal.close,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            style: c,
            contentClassName: es().modalContent,
            closeOnOutsidePress: !1,
            ...(0, v.BA)(v.QM.player.FULLSCREEN_PLAYER_MODAL),
            children: [
              (0, n.jsx)("header", {
                className: es().header,
                children: (0, n.jsx)(x.z, {
                  className: es().closeButton,
                  radius: "round",
                  color: "secondary",
                  size: "s",
                  icon: (0, n.jsx)(h.J, { variant: "arrowDown", size: "xs" }),
                  onClick: o.modal.close,
                  "aria-label": e({ id: "interface-actions.close" }),
                  ...(0, v.BA)(v.QM.player.FULLSCREEN_PLAYER_CLOSE_BUTTON),
                }),
              }),
              (0, n.jsx)(eY, {
                setIsContextMenuVisible: i,
                isContextMenuVisible: t,
              }),
              (0, n.jsx)(el.P, {
                className: es().notification,
                enableMultiContainer: !0,
                containerId: d.W$.FULLSCREEN_INFO,
                position: "bottom-center",
              }),
              (0, n.jsx)(el.P, {
                className: es().notification,
                enableMultiContainer: !0,
                containerId: d.W$.FULLSCREEN_ERROR,
                position: "bottom-center",
              }),
            ],
          });
        });
      var eq = i(9410),
        eK = i.n(eq);
      let eX = (0, o.Pi)((e) => {
        var t, i, a, r;
        let { className: o, onSyncLyricsButtonClick: c } = e,
          { sonataState: u, experiments: _, fullscreenPlayer: p } = (0, d.oR)(),
          { formatMessage: v } = (0, m.Z)(),
          y = null === u.entityMeta,
          f =
            (null === (t = u.entityMeta) || void 0 === t
              ? void 0
              : t.isNonMusic) ||
            (null === (a = u.entityMeta) || void 0 === a
              ? void 0
              : null === (i = a.mainAlbum) || void 0 === i
                ? void 0
                : i.isNonMusic),
          b = true,
          C = (0, s.useMemo)(() => {
            var e;
            if (f) return;
            let t = ""
              .concat(v({ id: "interface-actions.open-sync-lyrics" }), " ")
              .concat(v({ id: "warning-messages.can-break-accessibility" }));
            return (
              b ||
                (E.wx,
                v({ id: "entity-names.sync-lyrics" }),
                v({ id: "future-feature.message" }),
                x.z,
                h.J),
              (0, n.jsx)(x.z, {
                className: (0, l.W)(eK().syncLyricsButton, {
                  [eK().syncLyricsButton_active]: p.syncLyrics.isVisible,
                }),
                radius: "round",
                size: "xxxs",
                variant: "text",
                disabled: !(null === (e = u.entityMeta) || void 0 === e
                  ? void 0
                  : e.hasSyncLyrics),
                withRipple: !1,
                withHover: !1,
                "aria-label": t,
                icon: (0, n.jsx)(h.J, { variant: "lyrics", size: "xs" }),
                onClick: c,
              })
            );
          }, [
            b,
            v,
            p.syncLyrics.isVisible,
            c,
            f,
            null === (r = u.entityMeta) || void 0 === r
              ? void 0
              : r.hasSyncLyrics,
          ]);
        return (0, n.jsx)("div", {
          className: (0, l.W)(eK().footer, o),
          children: (0, n.jsxs)("div", {
            className: eK().footerContainer,
            children: [
              (y || u.canChangeRepeatMode) &&
                (0, n.jsx)(B.$Z, {
                  isDisabled: y,
                  repeatMode: u.repeatMode,
                  variant: "text",
                }),
              C,
              (y || u.canShuffle) &&
                (0, n.jsx)(B.P4, {
                  isDisabled: y,
                  shuffle: u.shuffle,
                  variant: "text",
                }),
            ],
          }),
        });
      });
      var e$ = i(18806),
        e0 = i.n(e$);
      let e1 = {
          enter: e0().coverWrapper_enter,
          enterActive: e0().coverWrapper_enter_active,
          exit: e0().coverWrapper_exit,
          exitActive: e0().coverWrapper_exit_active,
        },
        e5 = (0, o.Pi)((e) => {
          var t;
          let { className: i } = e,
            a = (0, s.useRef)(null),
            {
              state: r,
              handleDelayedToggle: o,
              reset: c,
            } = ec({ delay: 7e3, throttleTimeout: 0 }),
            {
              fullscreenPlayer: u,
              sonataState: { entityMeta: _ },
              experiments: m,
            } = (0, d.oR)(),
            p =
              (null == _ ? void 0 : _.isNonMusic) ||
              (null == _
                ? void 0
                : null === (t = _.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isNonMusic),
            v =
              !!(null == _ ? void 0 : _.hasSyncLyrics) &&
              u.syncLyrics.isVisible,
            y = r || !v,
            x = (0, s.useCallback)(() => {
              v && (r ? c() : o());
            }, [o, r, v, c]),
            h = (0, s.useCallback)(() => {
              v && r && o();
            }, [o, r, v]),
            b = (0, s.useCallback)(() => {
              !(window.innerWidth > 480) &&
                (null == _ ? void 0 : _.hasSyncLyrics) &&
                true &&
                (u.syncLyrics.isVisible
                  ? u.syncLyrics.setInvisible()
                  : u.syncLyrics.setVisible());
            }, [null == _ ? void 0 : _.hasSyncLyrics, m, u.syncLyrics]),
            C = (0, s.useMemo)(
              () =>
                (0, er.Z)(() => {
                  window.innerWidth > 480 && u.syncLyrics.setInvisible();
                }, 100),
              [u.syncLyrics],
            ),
            g = (0, s.useMemo)(
              () =>
                _
                  ? p
                    ? (0, n.jsx)(M.wT, {
                        textClassName: e0().metaText,
                        track: _,
                        withSecondaryColor: !0,
                        withDate: !1,
                        captionSize: "l",
                        explicitSize: "s",
                        withPodcastName: !0,
                      })
                    : (0, n.jsx)(M.ko, {
                        textClassName: e0().metaText,
                        track: _,
                        withSecondaryColor: !0,
                        withAlbumLink: !0,
                        captionSize: "l",
                        explicitSize: "s",
                        withAllArtistsTitle: !0,
                      })
                  : void 0,
              [_, p],
            );
          return (
            (0, s.useEffect)(
              () => (
                window.addEventListener("resize", C),
                () => {
                  window.removeEventListener("resize", C);
                }
              ),
              [C],
            ),
            (0, s.useLayoutEffect)(() => {
              C();
            }, [C]),
            (0, s.useLayoutEffect)(() => {
              v && o();
            }, [v, o]),
            (0, n.jsxs)("div", {
              onTouchEnd: h,
              className: (0, l.W)(e0().root, i),
              children: [
                (0, n.jsx)("div", {
                  className: e0().content,
                  children: (0, n.jsxs)("div", {
                    className: e0().wrapper,
                    children: [
                      (0, n.jsxs)("div", {
                        className: (0, l.W)(e0().infoBlock, {
                          [e0().infoBlock_withExpandedSyncLyrics]: !r && v,
                        }),
                        children: [
                          (0, n.jsxs)("div", {
                            onClick: x,
                            className: e0().coverContainer,
                            children: [
                              (0, n.jsx)(eD, {
                                className: e0().syncLyrics,
                                scrollerClassName: e0().syncLyricsScroller,
                                contentClassName: e0().syncLyricsContent,
                                loaderClassName: e0().syncLyricsLoader,
                                footerClassName: e0().syncLyricsFooter,
                                counterClassName: e0().syncLyricsCounter,
                                shouldShowSyncLyrics: v,
                              }),
                              (0, n.jsx)(ed.Z, {
                                in: !v,
                                nodeRef: a,
                                timeout: 200,
                                unmountOnExit: !0,
                                classNames: e1,
                                children: (0, n.jsx)(f.Paper, {
                                  ref: a,
                                  radius: "m",
                                  className: e0().coverWrapper,
                                  children: (0, n.jsx)(E.BE, {
                                    className: e0().cover,
                                    src: null == _ ? void 0 : _.coverUri,
                                    size: 400,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: e0().trackInfo,
                            children: [
                              !r &&
                                v &&
                                (0, n.jsx)(f.Paper, {
                                  className: e0().trackInfoCoverContainer,
                                  radius: "xs",
                                  children: (0, n.jsx)(E.BE, {
                                    className: e0().trackInfoCover,
                                    src: null == _ ? void 0 : _.coverUri,
                                    size: 200,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                  }),
                                }),
                              g,
                            ],
                          }),
                        ],
                      }),
                      y &&
                        (0, n.jsx)(k, {
                          className: e0().timeline,
                          disabled: !_,
                          isMobile: !0,
                          isFullscreen: !0,
                          showThumbVariant: "always",
                        }),
                      y &&
                        (0, n.jsx)(B.WP, {
                          className: e0().buttonsBlock,
                          isMobile: !0,
                          entityMeta: _,
                          isFullscreen: !0,
                        }),
                    ],
                  }),
                }),
                y && (0, n.jsx)(eX, { onSyncLyricsButtonClick: b }),
              ],
            })
          );
        });
      var e2 = i(9349),
        e3 = i.n(e2);
      let e4 = (e) => {
          let { children: t, className: i } = e,
            a = (0, d.R$)(),
            { fullscreenPlayer: r } = (0, d.oR)(),
            { formatMessage: o } = (0, m.Z)(),
            c = (0, s.useRef)(""),
            u = (0, s.useCallback)(
              (e) => {
                e.stopPropagation(), r.modal.isOpened && r.modal.close();
              },
              [r],
            ),
            _ = (0, s.useMemo)(() => {
              if (a) {
                let t = a.state.queueState.currentEntity.value,
                  i = null == t ? void 0 : t.context.data;
                switch (null == i ? void 0 : i.type) {
                  case "vibe":
                    var e;
                    return null == i
                      ? void 0
                      : null === (e = i.meta.session) || void 0 === e
                        ? void 0
                        : e.wave.name;
                  case "album":
                    return (
                      (c.current = "/album/".concat(
                        null == i ? void 0 : i.meta.id,
                      )),
                      o(
                        { id: "playing-now.album" },
                        { title: null == i ? void 0 : i.meta.title },
                      )
                    );
                  case "playlist":
                    return (
                      (c.current = "/playlist/".concat(
                        null == i ? void 0 : i.meta.playlistUuid,
                      )),
                      o(
                        { id: "playing-now.playlist" },
                        { title: null == i ? void 0 : i.meta.title },
                      )
                    );
                }
              }
              return null;
            }, [a, o]);
          return (0, n.jsxs)("div", {
            className: (0, l.W)(e3().root, i),
            children: [
              !!_ &&
                (0, n.jsxs)("div", {
                  className: e3().textBlock,
                  children: [
                    (0, n.jsx)(g.Caption, {
                      variant: "span",
                      size: "s",
                      weight: "normal",
                      className: e3().subTitle,
                      children: (0, n.jsx)(p.Z, { id: "playing-now.common" }),
                    }),
                    c.current
                      ? (0, n.jsx)(E.rU, {
                          href: c.current,
                          target: "_self",
                          onClick: u,
                          className: e3().link,
                          children: (0, n.jsx)(g.Caption, {
                            variant: "span",
                            size: "m",
                            className: e3().title,
                            lineClamp: 1,
                            children: _,
                          }),
                        })
                      : (0, n.jsx)(g.Caption, {
                          variant: "span",
                          size: "m",
                          className: e3().title,
                          lineClamp: 1,
                          children: _,
                        }),
                  ],
                }),
              t,
            ],
          });
        },
        e8 = (0, o.Pi)(() => {
          let { formatMessage: e } = (0, m.Z)(),
            { fullscreenPlayer: t } = (0, d.oR)();
          return (0, n.jsxs)("header", {
            className: eK().header,
            children: [
              (0, n.jsx)(x.z, {
                radius: "round",
                color: "secondary",
                size: "s",
                variant: "text",
                icon: (0, n.jsx)(h.J, { variant: "arrowDown", size: "xs" }),
                onClick: t.modal.close,
                "aria-label": e({ id: "interface-actions.close" }),
              }),
              (0, n.jsx)(e4, {
                className: eK().headerCenter,
                children: (0, n.jsx)(E.wx, {
                  title: e({ id: "player-actions.cast" }),
                  description: e({ id: "future-feature.message" }),
                  children: (0, n.jsx)(x.z, {
                    className: eK().castButton,
                    radius: "round",
                    size: "s",
                    variant: "text",
                    disabled: !0,
                    withRipple: !1,
                    "aria-label": e({ id: "player-actions.cast" }),
                    icon: (0, n.jsx)(h.J, { variant: "cast", size: "xs" }),
                  }),
                }),
              }),
              (0, n.jsx)(E.wx, {
                title: e({ id: "player-actions.history" }),
                description: e({ id: "future-feature.message" }),
                children: (0, n.jsx)(x.z, {
                  radius: "round",
                  size: "s",
                  variant: "text",
                  disabled: !0,
                  withRipple: !1,
                  "aria-label": e({ id: "player-actions.history" }),
                  icon: (0, n.jsx)(h.J, { variant: "queue", size: "xs" }),
                }),
              }),
            ],
          });
        }),
        e6 = (0, o.Pi)(() => {
          let {
              sonataState: { entityMeta: e },
              fullscreenPlayer: t,
            } = (0, d.oR)(),
            i = (0, s.useMemo)(
              () => ({
                "--player-average-color-background":
                  null == e ? void 0 : e.averageColor,
              }),
              [null == e ? void 0 : e.averageColor],
            );
          return (0, n.jsxs)(en.u, {
            className: (0, l.W)(eK().root, eK().important),
            open: t.modal.isOpened,
            onOpenChange: t.modal.onOpenChange,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            style: i,
            contentClassName: eK().modalContent,
            children: [(0, n.jsx)(e8, {}), (0, n.jsx)(e5, {})],
          });
        }),
        e9 = (e) => {
          {
            let t = e === d.t8.Mobile,
              i = window.screen.availHeight || window.innerHeight;
            return (!t && i < 450) || t;
          }
        },
        e7 = (0, o.Pi)(() => {
          let { settings: e } = (0, d.oR)(),
            t = e.layout === d.t8.Mobile,
            [i, a] = (0, s.useState)(t),
            r = (0, s.useMemo)(
              () =>
                (0, er.Z)(
                  () => {
                    a(e9(e.layout));
                  },
                  100,
                  { trailing: !1 },
                ),
              [e.layout, a],
            );
          return (
            (0, s.useEffect)(
              () => (
                a(e9(e.layout)),
                window.addEventListener("resize", r),
                () => {
                  window.removeEventListener("resize", r);
                }
              ),
              [r, e.layout],
            ),
            i ? (0, n.jsx)(e6, {}) : (0, n.jsx)(eH, {})
          );
        });
      var te = i(42288),
        tt = i(3429),
        ti = i(69869),
        ta = i(38009);
      let tr = (e) => {
        let t = Math.floor(Date.now() / 1e3),
          i = "".concat(e).concat(t);
        return {
          sign: (0, ta.createHmac)("sha256", (0, d.Sq)())
            .update(i)
            .digest("base64"),
          timeStamp: t,
          trackId: e,
          format: ti.yG.LRC,
        };
      };
      var tn = i(31391),
        tl = i.n(tn);
      let to = (e) => {
          try {
            return (tl()(e).scripts || []).map((e) => {
              let { start: t, end: i, text: a } = e;
              return (0, te.pj)({ text: a.trim(), fromSec: t, toSec: i });
            });
          } catch (e) {
            return [];
          }
        },
        ts = te.V5.model("SyncLyricsLine", {
          text: te.V5.string,
          fromSec: te.V5.number,
          toSec: te.V5.number,
        }).views((e) => ({
          get key() {
            return "".concat(e.fromSec, ":").concat(e.toSec);
          },
        })),
        tc = te.V5.model("SyncLyrics", {
          isVisible: te.V5.optional(te.V5.boolean, !1),
          loadingState: te.V5.enumeration(Object.values(d.Gu)),
          lines: te.V5.maybeNull(te.V5.array(ts)),
          major: te.V5.maybeNull(c.bP),
          writers: te.V5.maybeNull(te.V5.array(te.V5.string)),
          lyricId: te.V5.maybeNull(te.V5.number),
          externalLyricId: te.V5.maybeNull(te.V5.string),
          currentTrackId: te.V5.maybeNull(
            te.V5.union(te.V5.string, te.V5.number),
          ),
          hasLyricsViewed: te.V5.optional(te.V5.boolean, !1),
        })
          .views((e) => ({
            get isLoaded() {
              return e.loadingState === d.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === d.Gu.REJECT;
            },
            get startSec() {
              var t;
              let i = null === (t = e.lines) || void 0 === t ? void 0 : t.at(0);
              return null == i ? void 0 : i.fromSec;
            },
            get endSec() {
              var i;
              let t =
                null === (i = e.lines) || void 0 === i ? void 0 : i.at(-1);
              return null == t ? void 0 : t.toSec;
            },
            get hasWriters() {
              var a;
              return !!(
                e.writers &&
                (null === (a = e.writers) || void 0 === a ? void 0 : a.length) >
                  0
              );
            },
            get hasInvalidLyrics() {
              var r;
              return !!(
                e.loadingState === d.Gu.RESOLVE &&
                (null === (r = e.lines) || void 0 === r ? void 0 : r.length) ===
                  0
              );
            },
          }))
          .actions((e) => {
            let t = {
              setVisible() {
                e.isVisible = !0;
              },
              setInvisible() {
                e.isVisible = !1;
              },
              getActiveLineIndex: (t) => {
                if (
                  (e.startSec && t < e.startSec) ||
                  (e.endSec && t > e.endSec)
                )
                  return null;
                let i = (e.lines || []).findIndex(
                  (e) => t >= e.fromSec && e.toSec >= t,
                );
                return i >= 0 ? i : null;
              },
              getData: (0, te.ls)(function* (i) {
                let { tracksResource: a, modelActionsLogger: r } = (0, te.dU)(
                  e,
                );
                if (i)
                  try {
                    e.loadingState = d.Gu.PENDING;
                    let {
                      downloadUrl: r,
                      major: n,
                      externalLyricId: l,
                      lyricId: o,
                      writers: s,
                    } = yield a.getLyrics(tr(i));
                    (e.major = (0, c.jp)(n)),
                      (e.externalLyricId = l),
                      (e.lyricId = o),
                      (e.writers = (0, te.pj)(s)),
                      (e.currentTrackId = i),
                      (e.hasLyricsViewed = !1),
                      yield t.downloadSyncLyrics(r),
                      (e.loadingState = d.Gu.RESOLVE);
                  } catch (t) {
                    (e.loadingState = d.Gu.REJECT), r.error(t);
                  }
              }),
              downloadSyncLyrics: (0, te.ls)(function* (t) {
                let { tracksResource: i } = (0, te.dU)(e),
                  a = yield i.getLyricsText(t);
                e.lines = (0, te.pj)(to(a));
              }),
              sendViews: (0, te.ls)(function* (t) {
                let { contextId: i, contextType: a } = t,
                  { lyricViewsResource: r, modelActionsLogger: n } = (0, te.dU)(
                    e,
                  );
                if (e.loadingState === d.Gu.RESOLVE)
                  try {
                    if (
                      !e.major ||
                      !e.lyricId ||
                      !e.externalLyricId ||
                      !e.currentTrackId
                    )
                      return;
                    yield r.sendViews({
                      lyricViews: [
                        {
                          id: (0, tt.Z)(),
                          trackId: e.currentTrackId,
                          majorId: e.major.id,
                          lyricId: e.lyricId,
                          externalLyricId: e.externalLyricId,
                          lyricFormat: ti.yG.LRC,
                          albumId: a === y.Ak.Album && i ? i : void 0,
                          playlistId: a === y.Ak.Playlist && i ? i : void 0,
                        },
                      ],
                    }),
                      (e.hasLyricsViewed = !0);
                  } catch (e) {
                    n.error(e);
                  }
              }),
            };
            return t;
          });
      var td = i(58421);
      let tu = te.V5.model("FullscreenPlayer", {
        syncLyrics: tc,
        modal: td.KL,
      }).actions((e) => ({
        showFullscreenPlayerModal() {
          e.syncLyrics.setInvisible(), e.modal.open();
        },
        showSyncLyricsModal() {
          e.syncLyrics.setVisible(), e.modal.open();
        },
      }));
    },
    94112: function (e, t, i) {
      "use strict";
      i.d(t, {
        _: function () {
          return el;
        },
        L: function () {
          return g;
        },
      });
      var a,
        r,
        n = i(42288),
        l = i(10542),
        o = i(63394),
        s = i(58421),
        c = i(33589);
      let d = (e, t) => {
          var i, a;
          let r = null == t ? void 0 : t.map(c.tR);
          return (0, n.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: null === (i = e.cover) || void 0 === i ? void 0 : i.uri,
            averageColor:
              null === (a = e.cover) || void 0 === a ? void 0 : a.color,
            albumArtists: r,
          });
        },
        u = (e) => {
          var t, i;
          return (0, n.pj)({
            id: String(e.id),
            title: e.name,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            averageColor:
              null === (i = e.cover) || void 0 === i ? void 0 : i.color,
          });
        },
        _ = (e) => {
          var t, i;
          return (0, n.pj)({
            id: "".concat(e.uid, ":").concat(e.kind),
            uuid: e.playlistUuid,
            title: e.title,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            averageColor:
              null === (i = e.cover) || void 0 === i ? void 0 : i.color,
          });
        },
        m = (e) => {
          var t;
          return (0, n.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: e.coverUri,
            averageColor:
              null === (t = e.derivedColors) || void 0 === t
                ? void 0
                : t.average,
          });
        };
      var p = i(48892);
      let v = (e, t) => {
        let i = (0, p.Vt)(e, t);
        if (null == t ? void 0 : t.albumId) {
          var a, r;
          let e = i.albums.find((e) => String(e.id) === String(t.albumId));
          return {
            ...i,
            isBest:
              null == e
                ? void 0
                : null === (a = e.bestAlbumTracks) || void 0 === a
                  ? void 0
                  : a.includes(Number(i.id)),
            positionInAlbum:
              null == e
                ? void 0
                : null === (r = e.trackPosition) || void 0 === r
                  ? void 0
                  : r.index,
          };
        }
        return (0, n.pj)({ ...i });
      };
      ((a = r || (r = {})).ALBUM = "album"),
        (a.ARTIST = "artist"),
        (a.PLAYLIST = "playlist"),
        (a.TRACK = "track");
      let y = n.V5.model("TrailerMeta", {
        id: n.V5.string,
        title: n.V5.maybe(n.V5.string),
        uuid: n.V5.maybe(n.V5.string),
        coverUri: n.V5.maybe(n.V5.string),
        averageColor: n.V5.maybe(n.V5.string),
        albumArtists: n.V5.maybe(n.V5.array(c.Go)),
      }).views((e) => ({
        getUrl(t) {
          switch (t) {
            case r.ALBUM:
              return "/album/".concat(e.id);
            case r.ARTIST:
              return "/artist/".concat(e.id);
            case r.PLAYLIST:
              return "/playlist/".concat(e.uuid);
            case r.TRACK:
              return;
          }
        },
      }));
      var x = i(84338),
        h = i(15419),
        f = i(75191);
      let b = n.V5.model("TrailerState", {
          contextType: n.V5.maybeNull(n.V5.enumeration(Object.values(x.Ak))),
          contextId: n.V5.maybeNull(n.V5.string),
          entityMeta: n.V5.maybeNull(f.s$),
          status: n.V5.enumeration(Object.values(h.Xz)),
        }).actions((e) => ({
          setContextId: (t) => {
            e.contextId = String(t);
          },
          setContextType: (t) => {
            e.contextType = t;
          },
          setEntityMeta: (t) => {
            t && t.data.meta && (e.entityMeta = (0, f.B5)(t));
          },
          setStatus: (t) => {
            e.status = t;
          },
        })),
        C = p.le
          .props({
            isBest: n.V5.maybe(n.V5.boolean),
            positionInAlbum: n.V5.maybe(n.V5.number),
          })
          .named("TrailerTrack"),
        g = n.V5.model("Trailer", {
          loadingState: n.V5.enumeration(Object.values(o.Gu)),
          errorStatusCode: n.V5.maybeNull(n.V5.number),
          modal: s.KL,
          variant: n.V5.maybeNull(n.V5.enumeration(Object.values(r))),
          tracks: n.V5.maybeNull(n.V5.array(C)),
          meta: n.V5.maybeNull(y),
          state: b,
          withAnimation: n.V5.boolean,
          shouldAutoStartPlaying: n.V5.boolean,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === o.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === o.Gu.REJECT;
            },
            get isNotFound() {
              var t;
              let i =
                  e.loadingState === o.Gu.RESOLVE &&
                  (null === (t = e.tracks) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                a = e.errorStatusCode === l.CN.NOT_FOUND;
              return i || a;
            },
          }))
          .actions((e) => {
            let t = {
              setAnimationState(t) {
                e.withAnimation = t;
              },
              setShouldAutoStartPlaying(t) {
                e.shouldAutoStartPlaying = t;
              },
              openArtistTrailer(i) {
                t.reset(),
                  (e.variant = r.ARTIST),
                  e.modal.open(),
                  t.getArtistTrailer({ artistId: i });
              },
              openAlbumTrailer(i) {
                t.reset(),
                  (e.variant = r.ALBUM),
                  e.modal.open(),
                  t.getAlbumTrailer({ albumId: i });
              },
              openPlaylistTrailer(i, a) {
                t.reset(),
                  (e.variant = r.PLAYLIST),
                  e.modal.open(),
                  t.getPlaylistTrailer({ userId: String(i), playlistKind: a });
              },
              openTrackTrailer(i) {
                t.reset(),
                  (e.variant = r.TRACK),
                  e.modal.open(),
                  t.getTrackTrailer({ trackId: i });
              },
              getArtistTrailer: (0, n.ls)(function* (i) {
                let { artistsResource: a } = (0, n.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let { artist: t, trailer: r } = yield a.getTrailer(i);
                    r.tracks &&
                      (e.tracks = (0, n.pj)(
                        r.tracks.map((e) => v(e, { isSmartPreview: !0 })),
                      )),
                      t && (e.meta = u(t)),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getAlbumTrailer: (0, n.ls)(function* (i) {
                let { albumResource: a } = (0, n.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let {
                      album: t,
                      artists: r,
                      trailer: l,
                    } = yield a.getTrailer(i);
                    l.tracks &&
                      (e.tracks = (0, n.pj)(
                        l.tracks.map((e) =>
                          v(e, { isSmartPreview: !0, albumId: t.id }),
                        ),
                      )),
                      t && (e.meta = d(t, r)),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getPlaylistTrailer: (0, n.ls)(function* (i) {
                let { usersResource: a } = (0, n.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let { playlist: t, trailer: r } =
                      yield a.getPlaylistTrailer(i);
                    r.tracks &&
                      (e.tracks = (0, n.pj)(
                        r.tracks.map((e) => v(e, { isSmartPreview: !0 })),
                      )),
                      t && (e.meta = _(t)),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getTrackTrailer: (0, n.ls)(function* (i) {
                let { tracksResource: a } = (0, n.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let { track: t } = yield a.getTrailer(i);
                    t &&
                      ((e.tracks = (0, n.pj)([v(t, { isSmartPreview: !0 })])),
                      (e.meta = m(t))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              handleError(t) {
                let { modelActionsLogger: i } = (0, n.dU)(e);
                i.error(t),
                  t instanceof l.du &&
                    (t.statusCode === l.CN.NOT_FOUND ||
                      t.statusCode === l.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = l.CN.NOT_FOUND),
                  e.loadingState !== o.Gu.IDLE &&
                    (e.loadingState = o.Gu.REJECT);
              },
              reset() {
                (e.loadingState = o.Gu.IDLE),
                  (e.errorStatusCode = null),
                  (e.variant = null),
                  (e.tracks = null),
                  (e.meta = null),
                  (e.withAnimation = !0),
                  (e.shouldAutoStartPlaying = !0);
              },
            };
            return t;
          });
      var N = i(9753),
        j = i(9544),
        S = i(98639),
        P = i(80542),
        w = i(39513),
        L = i(28852),
        k = i(89352),
        A = i(60836),
        B = i(67868);
      let M = (e) => {
        let { variant: t, id: i, from: a, uuid: n } = e;
        switch (t) {
          case r.ALBUM:
            return { type: x.Ak.Album, trailer: !0, meta: { id: i }, from: a };
          case r.ARTIST:
            return { type: x.Ak.Artist, trailer: !0, meta: { id: i }, from: a };
          case r.PLAYLIST:
            return {
              type: x.Ak.Playlist,
              trailer: !0,
              meta: { id: String(i), uuid: n },
              from: a,
            };
          case r.TRACK:
            return {
              type: x.Ak.Various,
              trailer: !0,
              meta: { id: i },
              from: a,
            };
        }
      };
      var E = i(31014),
        R = i(90679);
      let T = (e) => {
          let { variant: t, id: i, from: a, uuid: n } = e;
          switch (t) {
            case r.ALBUM:
              return { type: x.Ak.Album, meta: { id: i }, from: a };
            case r.ARTIST:
              return { type: x.Ak.Artist, meta: { id: i }, from: a };
            case r.PLAYLIST:
              return {
                type: x.Ak.Playlist,
                meta: { id: String(i), uuid: n },
                from: a,
              };
            case r.TRACK:
              return { type: x.Ak.Various, meta: { id: i }, from: a };
          }
        },
        I = (e) => {
          let {
            trailer: { meta: t },
            artist: i,
            album: a,
            playlist: n,
          } = (0, o.oR)();
          switch (e) {
            case r.ALBUM:
              return a.id === Number(null == t ? void 0 : t.id);
            case r.ARTIST:
              return i.id === (null == t ? void 0 : t.id);
            case r.PLAYLIST:
              return n.uuid === (null == t ? void 0 : t.uuid);
            case r.TRACK:
              return !1;
          }
        };
      var V = i(82705),
        D = i.n(V);
      let z = (e) => {
          let { isActive: t, className: i, isCurrentEntityPage: a } = e;
          return (0, N.jsxs)("div", {
            className: (0, A.W)(D().root, i),
            children: [
              (0, N.jsx)(R.Shimmer, {
                isActive: t,
                radius: "xxxl",
                className: D().playButtonShimmer,
              }),
              a &&
                (0, N.jsx)(R.Shimmer, {
                  isActive: t,
                  radius: "xxxl",
                  className: D().linkButtonShimmer,
                }),
            ],
          });
        },
        O = (0, j.Pi)((e) => {
          var t;
          let {
              variant: i,
              isShimmerVisible: a,
              isShimmerActive: n,
              className: l,
            } = e,
            {
              trailer: { state: s, meta: c, modal: d },
            } = (0, o.oR)(),
            u = (0, o.R$)(),
            _ = (0, o.s0)(null == c ? void 0 : c.getUrl(i)),
            m = I(i),
            p = !m && i !== r.TRACK,
            v = (0, S.useCallback)(() => {
              null == u || u.stop(o.ji.TRAILER), d.close(), p && _();
              let e = T({
                variant: i,
                id: Number(null == c ? void 0 : c.id),
                from: "test",
                uuid: null == c ? void 0 : c.uuid,
              });
              if (s.status === h.Xz.PLAYING) {
                var t;
                null == u ||
                  u.playContext({
                    contextData: e,
                    queueParams: {
                      entityId:
                        null === (t = s.entityMeta) || void 0 === t
                          ? void 0
                          : t.id,
                    },
                  });
              } else
                null == u ||
                  u.playContext({ contextData: e, queueParams: { index: 0 } });
            }, [
              _,
              p,
              null == c ? void 0 : c.id,
              null == c ? void 0 : c.uuid,
              d,
              u,
              null === (t = s.entityMeta) || void 0 === t ? void 0 : t.id,
              s.status,
              i,
            ]),
            y = (0, S.useMemo)(
              () =>
                (0, N.jsxs)("div", {
                  className: (0, A.W)(D().root, l),
                  children: [
                    (0, N.jsx)(w.z, {
                      radius: "xxxl",
                      size: "default",
                      color: "secondary",
                      icon: (0, N.jsx)(L.J, { variant: "play", size: "xxxs" }),
                      className: D().button,
                      onClick: v,
                      children: (0, N.jsx)(E.Z, {
                        id: "trailer.listen-full-version",
                      }),
                    }),
                    p &&
                      (0, N.jsx)(w.z, {
                        radius: "xxxl",
                        size: "default",
                        color: "secondary",
                        onClick: _,
                        className: D().button,
                        children: (0, N.jsx)(E.Z, { id: "trailer.navigate" }),
                      }),
                  ],
                }),
              [l, v, _, p],
            );
          return a
            ? z({ isActive: n, isCurrentEntityPage: m, className: l })
            : y;
        });
      var F = i(86939),
        W = i(12404),
        U = i(2570),
        G = i(65094),
        Z = i.n(G);
      let Q = {
          [r.ALBUM]: (0, N.jsx)(E.Z, { id: "trailer.title-album" }),
          [r.ARTIST]: (0, N.jsx)(E.Z, { id: "trailer.title-artist" }),
          [r.PLAYLIST]: (0, N.jsx)(E.Z, { id: "trailer.title-playlist" }),
          [r.TRACK]: (0, N.jsx)(E.Z, { id: "trailer.title-track" }),
        },
        J = (e, t) =>
          (0, N.jsx)("div", {
            className: Z().coverContainer,
            children: (0, N.jsx)(R.Shimmer, {
              isActive: e,
              radius: t,
              className: Z().cover,
            }),
          }),
        Y = (e) =>
          (0, N.jsxs)("div", {
            className: Z().textContainer,
            children: [
              (0, N.jsx)("div", {
                className: Z().shimmerContainer,
                children: (0, N.jsx)(R.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: Z().titleShimmer,
                }),
              }),
              (0, N.jsx)("div", {
                className: Z().shimmerContainer,
                children: (0, N.jsx)(R.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: Z().descriptionShimmer,
                }),
              }),
            ],
          }),
        H = (0, j.Pi)((e) => {
          let {
              variant: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              className: n,
            } = e,
            {
              trailer: { meta: l },
            } = (0, o.oR)(),
            s = t === r.ARTIST ? "round" : "s",
            { togglePlay: c, isPlaying: d } = (0, o.bA)({
              playContextParams: {
                contextData: M({
                  variant: t,
                  id: Number(null == l ? void 0 : l.id),
                  from: "test",
                  uuid: null == l ? void 0 : l.uuid,
                }),
                loadContextMeta: !0,
              },
            }),
            u = (0, S.useMemo)(() => {
              let e = {
                "--icon-background-color": null == l ? void 0 : l.averageColor,
              };
              return (0, N.jsxs)("div", {
                className: Z().coverContainer,
                children: [
                  (0, N.jsx)(W.Paper, {
                    radius: s,
                    className: Z().cover,
                    withShadow: !0,
                    children: (0, N.jsx)(F.Image, {
                      "aria-hidden": !0,
                      src: null == l ? void 0 : l.coverUri,
                      size: 100,
                      fit: "cover",
                      withAvatarReplace: !0,
                    }),
                  }),
                  (0, N.jsx)("div", {
                    className: Z().iconContainer,
                    style: e,
                    children: (0, N.jsx)(L.J, {
                      variant: "trailer",
                      size: "xs",
                      className: Z().icon,
                    }),
                  }),
                ],
              });
            }, [
              s,
              null == l ? void 0 : l.averageColor,
              null == l ? void 0 : l.coverUri,
            ]),
            _ = (0, S.useMemo)(() => {
              let e = null == l ? void 0 : l.getUrl(t);
              return e
                ? (0, N.jsx)(B.rU, {
                    href: e,
                    className: Z().link,
                    children: (0, N.jsx)(U.Caption, {
                      variant: "span",
                      type: "controls",
                      lineClamp: 1,
                      className: Z().text,
                      children: null == l ? void 0 : l.title,
                    }),
                  })
                : (0, N.jsx)(U.Caption, {
                    variant: "span",
                    type: "controls",
                    lineClamp: 1,
                    className: Z().text,
                    children: null == l ? void 0 : l.title,
                  });
            }, [l, t]),
            m = (0, S.useMemo)(
              () =>
                (0, N.jsxs)("div", {
                  className: Z().textContainer,
                  children: [
                    (0, N.jsx)(U.Caption, {
                      variant: "span",
                      type: "controls",
                      className: (0, A.W)(Z().text, Z().title),
                      lineClamp: 1,
                      children: Q[t],
                    }),
                    _,
                  ],
                }),
              [_, t],
            );
          return (0, N.jsxs)("div", {
            className: (0, A.W)(Z().root, n),
            children: [
              i ? J(a, s) : u,
              i ? Y(a) : m,
              !i &&
                (0, N.jsx)(B.JM, {
                  className: Z().playButton,
                  iconSize: "m",
                  variant: "filled",
                  isPlaying: d,
                  iconClassName: Z().playButtonIcon,
                  onClick: c,
                }),
            ],
          });
        }),
        q = (e) => {
          var t;
          let i = (0, o.R$)(),
            {
              trailer: { state: a },
            } = (0, o.oR)(),
            [r, n] = (0, S.useState)(0),
            l =
              (null === (t = a.entityMeta) || void 0 === t ? void 0 : t.id) ===
              e;
          return (
            (0, S.useEffect)(() => {
              let e =
                null == i
                  ? void 0
                  : i
                      .getState(o.ji.TRAILER)
                      .playerState.progress.onChange(() => {
                        let e = i.getState(o.ji.TRAILER).playerState,
                          t = e.progress.value;
                        l || n(0),
                          e.status.value === h.Xz.PLAYING &&
                            l &&
                            n((t.position / t.duration) * 100);
                      });
              return () => {
                null == e || e();
              };
            }, [l, i]),
            { isActive: l, progress: r }
          );
        };
      var K = i(80684),
        X = i.n(K);
      let $ = (0, j.Pi)((e) => {
        let { variant: t, track: i, playContextParams: a } = e,
          {
            trailer: { meta: n },
          } = (0, o.oR)(),
          l = t === r.ALBUM ? p.dn : p.fY,
          { isActive: s, progress: c } = q(i.id),
          d = (0, S.useMemo)(
            () => ({ "--track-progress": "".concat(c || 0, "%") }),
            [c],
          );
        return (0, N.jsx)("div", {
          className: (0, A.W)(X().root, { [X().root_active]: s }),
          style: d,
          children: (0, N.jsx)(l, {
            position: i.positionInAlbum,
            withLightning: !!(null == i ? void 0 : i.isBest),
            track: i,
            playContextParams: a,
            albumArtists: null == n ? void 0 : n.albumArtists,
          }),
        });
      });
      var ee = i(55560),
        et = i.n(ee);
      let ei = (e, t) => {
          let i = t === r.ALBUM ? o.Lx.ALBUM : o.Lx.PLAYLIST;
          return Array.from({ length: t === r.TRACK ? 1 : 5 }, (t, a) =>
            (0, N.jsx)(
              "div",
              {
                className: et().trackContainer,
                children: (0, N.jsx)(B.DX, {
                  isActive: e,
                  className: (0, A.W)(et().trackShimmer, {
                    [et().albumShimmer]: i === o.Lx.ALBUM,
                  }),
                  variant: i,
                }),
              },
              a,
            ),
          );
        },
        ea = (0, j.Pi)((e) => {
          let { variant: t } = e,
            { trailer: i } = (0, o.oR)(),
            {
              isLoading: a,
              isRejected: r,
              tracks: n,
              meta: l,
              state: s,
              shouldAutoStartPlaying: c,
              setShouldAutoStartPlaying: d,
            } = i,
            u = (0, o.R$)(),
            _ = a || r;
          (0, S.useEffect)(() => {
            (null == l ? void 0 : l.id) &&
              c &&
              (null == u ||
                u.playContext(
                  {
                    contextData: M({
                      variant: t,
                      id: Number(null == l ? void 0 : l.id),
                      from: "test",
                      uuid: null == l ? void 0 : l.uuid,
                    }),
                    queueParams: { index: 0 },
                    loadContextMeta: !0,
                  },
                  o.ji.TRAILER,
                ),
              d(!1));
          }, [
            null == l ? void 0 : l.id,
            null == l ? void 0 : l.uuid,
            d,
            c,
            u,
            s.status,
            t,
          ]);
          let m = (0, S.useCallback)(
              (e) => ({
                contextData: M({
                  variant: t,
                  id: Number(null == l ? void 0 : l.id),
                  from: "test",
                  uuid: null == l ? void 0 : l.uuid,
                }),
                queueParams: { index: e },
                loadContextMeta: !0,
              }),
              [null == l ? void 0 : l.id, null == l ? void 0 : l.uuid, t],
            ),
            p = (0, S.useMemo)(
              () =>
                _
                  ? ei(a, t)
                  : null == n
                    ? void 0
                    : n.map((e, i) =>
                        (0, N.jsx)(
                          $,
                          { variant: t, track: e, playContextParams: m(i) },
                          e.id,
                        ),
                      ),
              [m, a, _, n, t],
            );
          return (0, N.jsxs)("div", {
            className: et().root,
            children: [
              (0, N.jsx)(H, {
                isShimmerVisible: _,
                isShimmerActive: a,
                variant: t,
                className: et().header,
              }),
              p,
              (0, N.jsx)(O, {
                isShimmerVisible: _,
                isShimmerActive: a,
                variant: t,
                className: et().footer,
              }),
            ],
          });
        });
      var er = i(17601),
        en = i.n(er);
      let el = (0, j.Pi)(() => {
        let { settings: e, trailer: t, sonataState: i } = (0, o.oR)(),
          a = (0, o.R$)(),
          { contentRef: r } = (0, o.$Y)(),
          { formatMessage: n } = (0, P.Z)(),
          l = e.layout === o.t8.Mobile;
        (0, S.useEffect)(() => {
          let e =
              null == a
                ? void 0
                : a
                    .getState(o.ji.TRAILER)
                    .queueState.currentEntity.onChange((e) => {
                      var i;
                      let a = null == e ? void 0 : e.context.data.type,
                        r = null == e ? void 0 : e.context.data.meta.id;
                      t.state.setEntityMeta(
                        null !== (i = null == e ? void 0 : e.entity) &&
                          void 0 !== i
                          ? i
                          : null,
                      ),
                        a && t.state.setContextType(a),
                        r && t.state.setContextId(r);
                    }),
            i =
              null == a
                ? void 0
                : a.getState(o.ji.TRAILER).playerState.status.onChange((e) => {
                    e && t.state.setStatus(e);
                  });
          return () => {
            null == e || e(), null == i || i();
          };
        }, [a, t.state]);
        let s = (0, S.useCallback)(() => {
          null == a || a.stop(o.ji.TRAILER),
            t.setAnimationState(!0),
            t.modal.close();
        }, [a, t]);
        return (
          (0, S.useEffect)(() => {
            t.modal.isOpened &&
              t.isLoaded &&
              (i.status === h.Xz.PLAYING && s(), t.setAnimationState(!1));
          }, [s, i.status, t, t.modal.isOpened]),
          (0, N.jsxs)(k.u, {
            size: "fitContent",
            placement: l ? "default" : "right",
            open: t.modal.isOpened,
            onOpenChange: t.modal.onOpenChange,
            onClose: s,
            className: en().root,
            contentClassName: en().modalContent,
            portalNode: l ? null : r,
            showHeader: !1,
            withOverlay: !1,
            closeOnOutsidePress: !1,
            withAnimation: t.withAnimation,
            children: [
              (0, N.jsx)("div", {
                className: en().header,
                children: (0, N.jsx)(w.z, {
                  radius: "round",
                  color: "secondary",
                  size: "xxs",
                  icon: (0, N.jsx)(L.J, { variant: "close", size: "xxs" }),
                  onClick: s,
                  "aria-label": n({
                    id: "interface-actions.close-my-vibe-settings",
                  }),
                }),
              }),
              t.variant && (0, N.jsx)(ea, { variant: t.variant }),
            ],
          })
        );
      });
    },
    91147: function (e) {
      e.exports = {
        root_primary: "CommunicationButton_root_primary__rrmax",
        root_plus: "CommunicationButton_root_plus__d48MV",
        root_secondary: "CommunicationButton_root_secondary__YQujH",
        text: "CommunicationButton_text__kObnq",
      };
    },
    82487: function (e) {
      e.exports = {
        root: "BarBellow_root__uOAHP",
        root_hidden: "BarBellow_root_hidden__Z_De9",
        root_show: "BarBellow_root_show__3lfs4",
        show: "BarBellow_show__AeK4q",
        root_hide: "BarBellow_root_hide__cbYCD",
        hide: "BarBellow_hide__aZr6q",
        image: "BarBellow_image__XBhXF",
        content: "BarBellow_content__StYWl",
        title: "BarBellow_title__zdsvJ",
        text: "BarBellow_text__8rnfM",
        buttons: "BarBellow_buttons__JvPzt",
      };
    },
    33060: function (e) {
      e.exports = {
        timecode: "ChangeTimecode_timecode__UScFt",
        root: "ChangeTimecode_root__QxEw_",
        root_withTimecode: "ChangeTimecode_root_withTimecode__eJhYI",
        root_mobile: "ChangeTimecode_root_mobile__SzOdx",
        root_fullscreen: "ChangeTimecode_root_fullscreen__FA6r0",
        slider: "ChangeTimecode_slider__P4qmT",
      };
    },
    58163: function (e) {
      e.exports = {
        root: "Timecode_root__TLT75",
        root_start: "Timecode_root_start__pHG5N",
        root_end: "Timecode_root_end__LLQsh",
      };
    },
    95904: function (e) {
      e.exports = {
        root: "ChangeVolume_root__HDxtA",
        icon: "ChangeVolume_icon__5Zv2a",
        button: "ChangeVolume_button__4HLEr",
      };
    },
    31695: function (e) {
      e.exports = {
        root: "Navbar_root__chF4R",
        root_collapsed: "Navbar_root_collapsed__pozJX",
      };
    },
    3065: function (e) {
      e.exports = {
        root: "NavbarDesktop_root__scYzp",
        button: "NavbarDesktop_button__x_Ik1",
        important: "NavbarDesktop_important__fRfE5",
        collapseButton: "NavbarDesktop_collapseButton__XQh9d",
        navigation: "NavbarDesktop_navigation__dLUGW",
        logoLink: "NavbarDesktop_logoLink__KR0Dk",
        logo: "NavbarDesktop_logo__Z4jGx",
        collapseButtonTooltip_hidden:
          "NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ",
        title: "NavbarDesktop_title__OrnHN",
        title_animate: "NavbarDesktop_title_animate__XLxaQ",
        animation_show: "NavbarDesktop_animation_show__pRFj9",
        title_collapsed: "NavbarDesktop_title_collapsed__IH9Bc",
        animation_hide: "NavbarDesktop_animation_hide__8VxPs",
        pinsList: "NavbarDesktop_pinsList___jXIM",
        plus: "NavbarDesktop_plus__etQJm",
        plusButtonContainer: "NavbarDesktop_plusButtonContainer__C7Wf5",
        plusButtonContainer_enter:
          "NavbarDesktop_plusButtonContainer_enter__VRwh3",
        plusButtonContainer_enter_active:
          "NavbarDesktop_plusButtonContainer_enter_active__4fkf5",
        plusButtonContainer_exit:
          "NavbarDesktop_plusButtonContainer_exit__jtA7i",
        plusButtonContainer_exit_active:
          "NavbarDesktop_plusButtonContainer_exit_active__CYCui",
        plusBar: "NavbarDesktop_plusBar__E6cfw",
        plusBar_enter: "NavbarDesktop_plusBar_enter__om_ax",
        plusBar_enter_active: "NavbarDesktop_plusBar_enter_active__2VFPS",
        animation_show_scale: "NavbarDesktop_animation_show_scale___HzwE",
        plusBar_exit: "NavbarDesktop_plusBar_exit__bgdAw",
        plusBar_exit_active: "NavbarDesktop_plusBar_exit_active__s_9sz",
        animation_hide_scale: "NavbarDesktop_animation_hide_scale__mzAvb",
        user: "NavbarDesktop_user__dzbuH",
        userMeta_animate: "NavbarDesktop_userMeta_animate__3KkeR",
        userMeta_collapsed: "NavbarDesktop_userMeta_collapsed__rTdFz",
        ndaBadge: "NavbarDesktop_ndaBadge__moML6",
      };
    },
    24776: function (e) {
      e.exports = {
        text: "NavbarDesktopNDABadge_text__Yp1FL",
        text_collapsed: "NavbarDesktopNDABadge_text_collapsed__wwW9d",
        text_animated: "NavbarDesktopNDABadge_text_animated__d1ktb",
        show: "NavbarDesktopNDABadge_show__NeziW",
        hide: "NavbarDesktopNDABadge_hide__nQ832",
        root: "NavbarDesktopNDABadge_root__jgcw2",
        nda: "NavbarDesktopNDABadge_nda__0rdWY",
        tooltipContent: "NavbarDesktopNDABadge_tooltipContent__CmQZ_",
      };
    },
    73061: function (e) {
      e.exports = {
        root: "NavbarMobile_root__NhKBQ",
        user: "NavbarMobile_user__vTEb2",
        ndaBadge: "NavbarMobile_ndaBadge__QNk7h",
      };
    },
    14825: function (e) {
      e.exports = {
        root: "NavbarMobileNDABadge_root__4SoLG",
        nda: "NavbarMobileNDABadge_nda__0SDFn",
        text: "NavbarMobileNDABadge_text__e_Iz4",
      };
    },
    64638: function (e) {
      e.exports = {
        root: "Pin_root__UyplT",
        ripple: "Pin_ripple__Vzpzs",
        link: "Pin_link__nz6I7",
        root_withoutLink: "Pin_root_withoutLink__fr1XH",
        info: "Pin_info__x_7Zx",
        info_collapsed: "Pin_info_collapsed__bF9ac",
        info_animated: "Pin_info_animated__AQQZk",
        show: "Pin_show__xSkOa",
        hide: "Pin_hide__RCc9X",
        meta: "Pin_meta__MzX_7",
        contextMenu: "Pin_contextMenu__WGmhp",
        contextMenu_hidden: "Pin_contextMenu_hidden__xksGY",
        title: "Pin_title__Jw5WW",
        subtitle: "Pin_subtitle__rb8Gq",
        cover: "Pin_cover__7ofYY",
        cover_withAnimation: "Pin_cover_withAnimation__2Z2n6",
        show_and_scale: "Pin_show_and_scale__VdNfj",
      };
    },
    64318: function (e) {
      e.exports = {
        contextMenu: "PinItem_contextMenu__VwiFp",
        contextMenu_visible: "PinItem_contextMenu_visible__Zgwkh",
        root: "PinItem_root__WSoCn",
        image: "PinItem_image__Ow56U",
        animation: "PinItem_animation__syCWX",
        cover: "PinItem_cover__9TcjE",
        tooltip: "PinItem_tooltip__BGwBw",
      };
    },
    8519: function (e) {
      e.exports = {
        root: "PinsList_root__LN_2Z",
        content: "PinsList_content__9RG7s",
        pin_enter: "PinsList_pin_enter__2p2_6",
        pin_enter_active: "PinsList_pin_enter_active__eNGlc",
        "enter-fade": "PinsList_enter-fade__G_QY8",
        "enter-move": "PinsList_enter-move__DSAXH",
        pin_exit: "PinsList_pin_exit__y_gcM",
        pin_exit_active: "PinsList_pin_exit_active__rF5Je",
        "exit-fade": "PinsList_exit-fade__M6fYX",
        "exit-move": "PinsList_exit-move__Jtgi0",
      };
    },
    77314: function (e) {
      e.exports = {
        root: "PlusBar_root__yN9SZ",
        logos: "PlusBar_logos__8Gvj7",
        addition: "PlusBar_addition__npwOZ",
        title: "PlusBar_title__SwzSx",
        buttons: "PlusBar_buttons__QqSS4",
      };
    },
    67175: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktop_root___8vo1",
        important: "FullscreenPlayerDesktop_important__dGfiL",
        header: "FullscreenPlayerDesktop_header__OBhzq",
        modalContent: "FullscreenPlayerDesktop_modalContent__Zs_LC",
        notification: "FullscreenPlayerDesktop_notification__luD_J",
        closeButton: "FullscreenPlayerDesktop_closeButton__MQ64s",
        info: "FullscreenPlayerDesktop_info__W28Uk",
        artists: "FullscreenPlayerDesktop_artists__uYsKW",
        podcastAuthors: "FullscreenPlayerDesktop_podcastAuthors__20MgV",
        meta: "FullscreenPlayerDesktop_meta__1jT2G",
        title: "FullscreenPlayerDesktop_title__jCE_z",
        sliderContainer: "FullscreenPlayerDesktop_sliderContainer__dyeSe",
        slider: "FullscreenPlayerDesktop_slider__pnMep",
        poster: "FullscreenPlayerDesktop_poster__rU9SJ",
        poster_withSyncLyricsAnimation:
          "FullscreenPlayerDesktop_poster_withSyncLyricsAnimation__bPO0o",
        poster_withDisabledInsetTransition:
          "FullscreenPlayerDesktop_poster_withDisabledInsetTransition__IzMAy",
        syncLyrics: "FullscreenPlayerDesktop_syncLyrics__6emp4",
        syncLyricsContent: "FullscreenPlayerDesktop_syncLyricsContent__XfBlC",
        syncLyricsLoader: "FullscreenPlayerDesktop_syncLyricsLoader__N1I2u",
        syncLyricsCard: "FullscreenPlayerDesktop_syncLyricsCard__wsESf",
        syncLyricsCard_withAnimation:
          "FullscreenPlayerDesktop_syncLyricsCard_withAnimation__T_y0C",
        syncLyricsScroller: "FullscreenPlayerDesktop_syncLyricsScroller___rirI",
        syncLyricsFooter: "FullscreenPlayerDesktop_syncLyricsFooter__ioRt_",
        syncLyricsCounter: "FullscreenPlayerDesktop_syncLyricsCounter__zt6_S",
      };
    },
    43056: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopButton_root__qGgoC",
        button: "FullscreenPlayerDesktopButton_button__7NEl6",
      };
    },
    82120: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopControls_root__tviu4",
        root_visible: "FullscreenPlayerDesktopControls_root_visible__1b9xD",
        sonataControls: "FullscreenPlayerDesktopControls_sonataControls__9AIki",
        menuButton: "FullscreenPlayerDesktopControls_menuButton__R4cXl",
        likeButton: "FullscreenPlayerDesktopControls_likeButton__vpJ7S",
        likeButton_active:
          "FullscreenPlayerDesktopControls_likeButton_active__XltBK",
        menuButton_active:
          "FullscreenPlayerDesktopControls_menuButton_active__YZ8M8",
        fullscreenPlayerButton:
          "FullscreenPlayerDesktopControls_fullscreenPlayerButton__0UjpS",
        fullscreenPlayerButton_visible:
          "FullscreenPlayerDesktopControls_fullscreenPlayerButton_visible__qjQ0X",
      };
    },
    10751: function (e) {
      e.exports = {
        root: "FullscreenPlayerDesktopPoster_root__d__YD",
        cover: "FullscreenPlayerDesktopPoster_cover__CDmhM",
      };
    },
    9410: function (e) {
      e.exports = {
        root: "FullscreenPlayerMobile_root__Sqyh0",
        important: "FullscreenPlayerMobile_important__1lAN3",
        header: "FullscreenPlayerMobile_header__8KH28",
        headerCenter: "FullscreenPlayerMobile_headerCenter___EqSP",
        modalContent: "FullscreenPlayerMobile_modalContent__m2cbB",
        castButton: "FullscreenPlayerMobile_castButton__3ZgER",
        footer: "FullscreenPlayerMobile_footer__LRvhK",
        footerContainer: "FullscreenPlayerMobile_footerContainer__aupK1",
        syncLyricsButton_active:
          "FullscreenPlayerMobile_syncLyricsButton_active__6L4YF",
        syncLyricsButton: "FullscreenPlayerMobile_syncLyricsButton__1ui1W",
      };
    },
    18806: function (e) {
      e.exports = {
        root: "FullscreenPlayerMobileContent_root__RITqv",
        wrapper: "FullscreenPlayerMobileContent_wrapper__JPmBe",
        syncLyrics: "FullscreenPlayerMobileContent_syncLyrics__HKUm0",
        trackInfoCoverContainer:
          "FullscreenPlayerMobileContent_trackInfoCoverContainer__Y2hly",
        trackInfoCover: "FullscreenPlayerMobileContent_trackInfoCover__zsEEq",
        coverContainer: "FullscreenPlayerMobileContent_coverContainer__lTyMF",
        trackInfo: "FullscreenPlayerMobileContent_trackInfo__IPGjo",
        infoBlock: "FullscreenPlayerMobileContent_infoBlock__ZcRdn",
        infoBlock_withExpandedSyncLyrics:
          "FullscreenPlayerMobileContent_infoBlock_withExpandedSyncLyrics__qlbKX",
        coverWrapper: "FullscreenPlayerMobileContent_coverWrapper___Y6ll",
        coverWrapper_enter:
          "FullscreenPlayerMobileContent_coverWrapper_enter__oFtHh",
        coverWrapper_enter_active:
          "FullscreenPlayerMobileContent_coverWrapper_enter_active__GM_of",
        "enter-fade": "FullscreenPlayerMobileContent_enter-fade__Q0KNn",
        coverWrapper_exit:
          "FullscreenPlayerMobileContent_coverWrapper_exit__QDk1i",
        coverWrapper_exit_active:
          "FullscreenPlayerMobileContent_coverWrapper_exit_active__9S_wE",
        "exit-fade": "FullscreenPlayerMobileContent_exit-fade__uS0jT",
        cover: "FullscreenPlayerMobileContent_cover__W6pz2",
        metaText: "FullscreenPlayerMobileContent_metaText__Fr74D",
        timeline: "FullscreenPlayerMobileContent_timeline__Pta9W",
        content: "FullscreenPlayerMobileContent_content__EAteH",
        syncLyricsContent:
          "FullscreenPlayerMobileContent_syncLyricsContent__qhWG_",
        syncLyricsLoader:
          "FullscreenPlayerMobileContent_syncLyricsLoader__0_W2j",
        syncLyricsScroller:
          "FullscreenPlayerMobileContent_syncLyricsScroller__EqiCL",
        syncLyricsFooter:
          "FullscreenPlayerMobileContent_syncLyricsFooter__bi9vY",
        syncLyricsCounter:
          "FullscreenPlayerMobileContent_syncLyricsCounter___wm5g",
      };
    },
    9349: function (e) {
      e.exports = {
        root: "PlayingNow_root__0lQa8",
        textBlock: "PlayingNow_textBlock___CfRh",
        title: "PlayingNow_title__82csz",
        subTitle: "PlayingNow_subTitle__JNJfh",
        link: "PlayingNow_link__4gLK9",
      };
    },
    98776: function (e) {
      e.exports = {
        message: "NotificationChangeQuality_message__coCvn",
        changeButton: "NotificationChangeQuality_changeButton__Hzc3y",
        icon: "NotificationChangeQuality_icon__bOfQO",
      };
    },
    12683: function (e) {
      e.exports = { root: "PlayerBar_root__cXUnU" };
    },
    66846: function (e) {
      e.exports = {
        root: "PlayerBarDesktop_root__d2Hwi",
        info: "PlayerBarDesktop_info__56v53",
        infoCard: "PlayerBarDesktop_infoCard__tnLS6",
        coverContainer: "PlayerBarDesktop_coverContainer__2Z5nQ",
        cover: "PlayerBarDesktop_cover__IYLwR",
        description: "PlayerBarDesktop_description__eQ_tA",
        artists: "PlayerBarDesktop_artists__N5vpf",
        artistLink: "PlayerBarDesktop_artistLink__Btgdq",
        infoButtons: "PlayerBarDesktop_infoButtons__iSpa_",
        sonata: "PlayerBarDesktop_sonata__sJHY_",
        meta: "PlayerBarDesktop_meta__6sm58",
        settingsButton: "PlayerBarDesktop_settingsButton__jLkVn",
        dislikeButton: "PlayerBarDesktop_dislikeButton__XwMir",
        likeButton: "PlayerBarDesktop_likeButton__LKH4K",
      };
    },
    83249: function (e) {
      e.exports = {
        root: "PlayerBarMobile_root__cdKy_",
        progressBar: "PlayerBarMobile_progressBar___DmH8",
        info: "PlayerBarMobile_info__WmdhZ",
        infoCard: "PlayerBarMobile_infoCard__DCATu",
        coverContainer: "PlayerBarMobile_coverContainer__a3JDF",
        cover: "PlayerBarMobile_cover__pnJd1",
        description: "PlayerBarMobile_description__IxQ9L",
        artists: "PlayerBarMobile_artists__XVSBV",
        artistLink: "PlayerBarMobile_artistLink__pieMq",
        infoButtons: "PlayerBarMobile_infoButtons__JXxfv",
      };
    },
    55676: function (e) {
      e.exports = {
        root: "QualitySettingsContextMenu_root__fW5GK",
        popoverContent: "QualitySettingsContextMenu_popoverContent__I6gtY",
        header: "QualitySettingsContextMenu_header__YGH7p",
        headerWithCloseButton:
          "QualitySettingsContextMenu_headerWithCloseButton__vsXrW",
        itemWrapper: "QualitySettingsContextMenu_itemWrapper__VOgWT",
        item: "QualitySettingsContextMenu_item__JevQS",
        item_option: "QualitySettingsContextMenu_item_option__SSxha",
        item_type: "QualitySettingsContextMenu_item_type__LmiAl",
        expandedItem: "QualitySettingsContextMenu_expandedItem__m6M8x",
        itemSubTitle: "QualitySettingsContextMenu_itemSubTitle__YGtQk",
      };
    },
    80615: function (e) {
      e.exports = {
        root: "SyncLyrics_root__6KZg4",
        root_enter: "SyncLyrics_root_enter__vbksr",
        root_enter_active: "SyncLyrics_root_enter_active__QDvBg",
        "enter-fade": "SyncLyrics_enter-fade__GGjE_",
        root_exit: "SyncLyrics_root_exit__mlQvP",
        root_exit_active: "SyncLyrics_root_exit_active__J4Kai",
        "exit-fade": "SyncLyrics_exit-fade__Oy0KX",
        content: "SyncLyrics_content__lbkWP",
      };
    },
    63341: function (e) {
      e.exports = {
        root: "SyncLyricsCard_root__92qn_",
        slider: "SyncLyricsCard_slider__GwydX",
        meta: "SyncLyricsCard_meta__w6_tu",
      };
    },
    83627: function (e) {
      e.exports = {
        root: "SyncLyricsFooter_root__STCKQ",
        major: "SyncLyricsFooter_major__QMZmT",
        writers: "SyncLyricsFooter_writers__c7zhj",
      };
    },
    73390: function (e) {
      e.exports = { root: "SyncLyricsLine_root__r62BN" };
    },
    68466: function (e) {
      e.exports = {
        root: "SyncLyricsLoader_root__I2hTe",
        element: "SyncLyricsLoader_element___Luwv",
        pulse: "SyncLyricsLoader_pulse__5AqRf",
        "change-opacity": "SyncLyricsLoader_change-opacity__vscya",
        element_withIcon: "SyncLyricsLoader_element_withIcon__iiSBo",
        element_withDefaultElement:
          "SyncLyricsLoader_element_withDefaultElement__WmP80",
      };
    },
    77920: function (e) {
      e.exports = {
        line: "SyncLyricsScroller_line__Vh6WN",
        counter: "SyncLyricsScroller_counter__B2E7K",
        counterLine: "SyncLyricsScroller_counterLine__NpBT4",
        root: "SyncLyricsScroller_root__amiLm",
        root_withVisibleUpperLyrics:
          "SyncLyricsScroller_root_withVisibleUpperLyrics__d7noO",
        root_withVisibleScrolledLyrics:
          "SyncLyricsScroller_root_withVisibleScrolledLyrics__lowGE",
        root_intro: "SyncLyricsScroller_root_intro__13gls",
        root_outro: "SyncLyricsScroller_root_outro__XlDH5",
        line_last: "SyncLyricsScroller_line_last__liS_1",
        root_prepare: "SyncLyricsScroller_root_prepare__h0Gf1",
        line_active: "SyncLyricsScroller_line_active__6lLvH",
      };
    },
    55560: function (e) {
      e.exports = {
        root: "Trailer_root__c8eG3",
        header: "Trailer_header__FBFMi",
        trackShimmer: "Trailer_trackShimmer__qmCN3",
        albumShimmer: "Trailer_albumShimmer__8RxuC",
        footer: "Trailer_footer__POMTS",
      };
    },
    82705: function (e) {
      e.exports = {
        root: "TrailerFooter_root__LKXby",
        playButtonShimmer: "TrailerFooter_playButtonShimmer__5QwPi",
        linkButtonShimmer: "TrailerFooter_linkButtonShimmer__ZV1s1",
      };
    },
    65094: function (e) {
      e.exports = {
        root: "TrailerHeader_root__n8XkZ",
        coverContainer: "TrailerHeader_coverContainer__4R_jG",
        cover: "TrailerHeader_cover__G6BRb",
        iconContainer: "TrailerHeader_iconContainer__QXR64",
        icon: "TrailerHeader_icon__5T0JT",
        textContainer: "TrailerHeader_textContainer__LR03v",
        text: "TrailerHeader_text__BWMLw",
        link: "TrailerHeader_link__kObd5",
        title: "TrailerHeader_title__GuIe0",
        playButton: "TrailerHeader_playButton__MGmhZ",
        playButtonIcon: "TrailerHeader_playButtonIcon__JFbl_",
        shimmerContainer: "TrailerHeader_shimmerContainer__cOsas",
        titleShimmer: "TrailerHeader_titleShimmer__KKn7b",
        descriptionShimmer: "TrailerHeader_descriptionShimmer__WOlY5",
      };
    },
    17601: function (e) {
      e.exports = {
        root: "TrailerModal_root__T4ZJ8",
        modalContent: "TrailerModal_modalContent__ZSNFe",
        header: "TrailerModal_header__0h1zj",
      };
    },
    80684: function (e) {
      e.exports = {
        root: "TrailerTrack_root__0UIP4",
        root_active: "TrailerTrack_root_active__F_8Iw",
      };
    },
  },
]);

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4646],
  {
    17295: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return l;
        },
      });
      var i,
        o = n(98639),
        a = {
          810: (e) => {
            e.exports = i || (i = n.t(o, 2));
          },
        },
        r = {},
        s = {};
      (() => {
        Object.defineProperty(s, "__esModule", { value: !0 }),
          (s.useToggle = void 0);
        let e = (function e(t) {
          var n = r[t];
          if (void 0 !== n) return n.exports;
          var i = (r[t] = { exports: {} });
          return a[t](i, i.exports, e), i.exports;
        })(810);
        s.useToggle = (t) => {
          let [n, i] = (0, e.useState)(t);
          return {
            state: n,
            toggle: (0, e.useCallback)(() => {
              i((e) => !e);
            }, []),
            toggleTrue: (0, e.useCallback)(() => {
              i(!0);
            }, []),
            toggleFalse: (0, e.useCallback)(() => {
              i(!1);
            }, []),
          };
        };
      })(),
        s.__esModule;
      var l = s.useToggle;
    },
    16636: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return c;
        },
      });
      var i,
        o,
        a = n(98639),
        r = {
          5881: (e, t, n) => {
            function i() {
              for (var e, t, n = 0, i = ""; n < arguments.length; )
                (e = arguments[n++]) &&
                  (t = (function e(t) {
                    var n,
                      i,
                      o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (n = 0; n < t.length; n++)
                          t[n] && (i = e(t[n])) && (o && (o += " "), (o += i));
                      else for (n in t) t[n] && (o && (o += " "), (o += n));
                    }
                    return o;
                  })(e)) &&
                  (i && (i += " "), (i += t));
              return i;
            }
            n.r(t), n.d(t, { clsx: () => i, default: () => o });
            let o = i;
          },
          2068: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            let i = {
              root: "eaYyesBmJL_NbkgoYR1c",
              focusable: "uL1dD5rxgI4bPmfyMMe7",
            };
          },
          6161: (e, t, n) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var i = n(810),
              o = Symbol.for("react.element"),
              a = Symbol.for("react.fragment"),
              r = Object.prototype.hasOwnProperty,
              s =
                i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              l = { key: !0, ref: !0, __self: !0, __source: !0 };
            function u(e, t, n) {
              var i,
                a = {},
                u = null,
                c = null;
              for (i in (void 0 !== n && (u = "" + n),
              void 0 !== t.key && (u = "" + t.key),
              void 0 !== t.ref && (c = t.ref),
              t))
                r.call(t, i) && !l.hasOwnProperty(i) && (a[i] = t[i]);
              if (e && e.defaultProps)
                for (i in (t = e.defaultProps))
                  void 0 === a[i] && (a[i] = t[i]);
              return {
                $$typeof: o,
                type: e,
                key: u,
                ref: c,
                props: a,
                _owner: s.current,
              };
            }
            (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
          },
          9541: (e, t, n) => {
            e.exports = n(6161);
          },
          2865: function (e, t, n) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.SROnly = void 0);
            let o = n(9541),
              a = n(5881),
              r = n(810),
              s = i(n(2068));
            t.SROnly = (e) => {
              let { className: t, focusable: n, children: i, ...l } = e,
                u = (0, a.clsx)(
                  s.default.root,
                  { [s.default.focusable]: n },
                  t,
                );
              return (0, r.isValidElement)(i)
                ? (0, r.cloneElement)(i, {
                    ...l,
                    className: (0, a.clsx)(u, i.props.className),
                  })
                : (0, o.jsx)("span", { className: u, ...l, children: i });
            };
          },
          810: (e) => {
            e.exports = o || (o = n.t(a, 2));
          },
        },
        s = {};
      function l(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var n = (s[e] = { exports: {} });
        return r[e].call(n.exports, n, n.exports, l), n.exports;
      }
      (l.d = (e, t) => {
        for (var n in t)
          l.o(t, n) &&
            !l.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (u.SROnly = void 0),
        (i = l(2865)),
        Object.defineProperty(u, "SROnly", {
          enumerable: !0,
          get: function () {
            return i.SROnly;
          },
        });
      var c = u.SROnly;
      u.__esModule;
    },
    63955: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hsl2rgb = t.adjustHue = t.safeHue = void 0),
        (t.safeHue = (e, t) => (t >= 280 && t < 360 ? e % 360 : e)),
        (t.adjustHue = (e) => (e + 280) % 360),
        (t.hsl2rgb = (e, t, n) => {
          let i = (i) => {
            let o = (i + e / 30) % 12;
            return (
              n -
              t * Math.min(n, 1 - n) * Math.max(-1, Math.min(o - 3, 9 - o, 1))
            );
          };
          return [i(0), i(8), i(4)];
        });
    },
    43055: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.normalizeSettings =
          t.normalizeCollectionHue =
          t.normalizeFrequency =
            void 0);
      let i = n(83664),
        o = n(97456);
      (t.normalizeFrequency = (e) => Math.min(1, (0, o.round)(e))),
        (t.normalizeCollectionHue = (e) =>
          null != e ? e : i.DEFAULT_COLLECTION_HUE),
        (t.normalizeSettings = (e) => {
          let { hue: n, collectionHue: o, energy: a, backgroundColor: r } = e,
            s = { collectionHue: (0, t.normalizeCollectionHue)(o) };
          return (
            n && (s.hue = n),
            a && (s.energy = (a + 1) * i.ENERGY_FACTOR),
            r && (s.backgroundColor = r),
            s
          );
        });
    },
    97456: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomNumber = t.round = void 0),
        (t.round = (e) => Math.round(100 * e) / 100),
        (t.randomNumber = (e, t) =>
          Math.floor(Math.random() * (Math.floor(t) - e + 1)) + e);
    },
    83664: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ENERGY_FACTOR =
          t.DEFAULT_ENERGY =
          t.DEFAULT_COLLECTION_LIGHTNESS =
          t.DEFAULT_COLLECTION_SATURATION =
          t.DEFAULT_COLLECTION_HUE =
          t.DEFAULT_LIGHTNESS =
          t.DEFAULT_SATURATION =
          t.DEFAULT_HUE =
          t.MAX_FPS =
            void 0),
        (t.MAX_FPS = window.VIBE_ANIMATION_MAX_FPS ?? 25),
        (t.DEFAULT_HUE = 22.968),
        (t.DEFAULT_SATURATION = 1),
        (t.DEFAULT_LIGHTNESS = 0.5),
        (t.DEFAULT_COLLECTION_HUE = 10),
        (t.DEFAULT_COLLECTION_SATURATION = 0.8),
        (t.DEFAULT_COLLECTION_LIGHTNESS = 0.46),
        (t.DEFAULT_ENERGY = 0.2),
        (t.ENERGY_FACTOR = 0.4);
    },
    47456: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = n(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Color = void 0);
      let o = n(63955),
        a = n(97456),
        r = n(83664),
        s = n(80749);
      class l {
        get value() {
          return [
            this.bottomStart.value,
            this.middleStart.value,
            this.topStart.value,
            this.bottomEnd.value,
            this.middleEnd.value,
            this.topEnd.value,
          ];
        }
        update(e, t) {
          (this.hue = e), (this.collectionHue = t);
          let n = (0, o.adjustHue)(e),
            i = (0, o.safeHue)(n + (0, a.randomNumber)(40, 80), n),
            r = (0, o.adjustHue)(t);
          this.topStart.update(n),
            this.topEnd.update(
              (0, o.safeHue)(n + (0, a.randomNumber)(30, 40), n),
            ),
            this.middleStart.update(i),
            this.middleEnd.update(
              (0, o.safeHue)(i + (0, a.randomNumber)(30, 40), n),
            ),
            this.bottomStart.update(r),
            this.bottomEnd.update(
              (0, o.safeHue)(r + (0, a.randomNumber)(30, 40), n),
            );
        }
        next(e) {
          this.topStart.next(e),
            this.topEnd.next(e),
            this.middleStart.next(e),
            this.middleEnd.next(e),
            this.bottomStart.next(e),
            this.bottomEnd.next(e);
        }
        constructor(e) {
          i._(this, "hue", r.DEFAULT_HUE),
            i._(this, "collectionHue", r.DEFAULT_COLLECTION_HUE),
            i._(this, "topStart", void 0),
            i._(this, "topEnd", void 0),
            i._(this, "middleStart", void 0),
            i._(this, "middleEnd", void 0),
            i._(this, "bottomStart", void 0),
            i._(this, "bottomEnd", void 0),
            (this.collectionHue = e);
          let t = (0, o.adjustHue)(e),
            n = (0, o.safeHue)(t + (0, a.randomNumber)(30, 40), t);
          (this.topStart = new s.RGB(50)),
            (this.topEnd = new s.RGB(50)),
            (this.middleStart = new s.RGB(300)),
            (this.middleEnd = new s.RGB(320)),
            (this.bottomStart = new s.RGB(t)),
            (this.bottomEnd = new s.RGB(n));
        }
      }
      t.Color = l;
    },
    69407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = n(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DynamicValue = void 0);
      class o {
        clamp(e, t, n) {
          return Math.min(Math.max(e, t), n);
        }
        get value() {
          return this.formatter
            ? this.formatter(this.currentValue)
            : this.currentValue;
        }
        update(e) {
          (this.targetValue = e), (this.elapsedTime = 0);
        }
        next(e) {
          let t = this.clamp(this.elapsedTime / this.duration, 0, 1);
          return (
            (this.elapsedTime += e),
            (this.currentValue =
              this.currentValue + (this.targetValue - this.currentValue) * t),
            this.currentValue
          );
        }
        constructor(e, t, n, o) {
          i._(this, "currentValue", void 0),
            i._(this, "targetValue", void 0),
            i._(this, "elapsedTime", void 0),
            i._(this, "duration", void 0),
            i._(this, "formatter", void 0),
            (this.currentValue = e),
            (this.targetValue = t),
            (this.duration = n),
            (this.elapsedTime = 0),
            (this.formatter = o);
        }
      }
      t.DynamicValue = o;
    },
    19434: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = n(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VibeAnimationRenderer = void 0);
      let o = n(26716),
        a = n(43055),
        r = n(83664),
        s = n(52999),
        l = n(98355),
        u = n(61939),
        c = n(49198);
      class d {
        get rendererOptions() {
          return { alpha: !1, antialias: !1, preserveDrawingBuffer: !1 };
        }
        get vertexAndFragment() {
          return { vertex: s.VertexShaderV2, fragment: s.FragmentShaderV2 };
        }
        setupListeners() {
          window.addEventListener("resize", this.handleOnResize),
            document.addEventListener(
              "visibilitychange",
              this.handleOnVisibilityChange,
            );
        }
        createElement(e) {
          (e.innerHTML = ""), e.appendChild(this.renderer.gl.canvas);
        }
        createShader() {
          let e = this.renderer.gl,
            t = new o.Plane(e, { width: 2, height: 2 }),
            n = new o.Program(e, {
              ...this.vertexAndFragment,
              uniforms: this.uniforms.toObject(),
            });
          return (
            new o.Mesh(e, { geometry: t, program: n }).setParent(this.scene), n
          );
        }
        render() {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          this.uniforms.update(t, this.analyser),
            (this.shader.uniforms = this.uniforms.toObject()),
            null === (e = this.renderer) ||
              void 0 === e ||
              e.render({ scene: this.scene });
        }
        handleOnResize() {
          this.renderer.setSize(this.uniforms.width, this.uniforms.height);
        }
        handleOnVisibilityChange() {
          "visible" === document.visibilityState
            ? this.enableRender(l.RenderState.ACTIVE_TAB)
            : this.disableRender(l.RenderState.ACTIVE_TAB);
        }
        updateRenderingState() {
          Object.values(this.renderState).every((e) => e)
            ? this.ticker.start()
            : this.ticker.stop();
        }
        applySettings() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            {
              hue: t,
              collectionHue: n,
              energy: i,
              backgroundColor: o,
            } = (0, a.normalizeSettings)(e);
          t && n && this.uniforms.updateColor(t, n),
            i && this.uniforms.updateEnergy(i),
            o && this.uniforms.updateBackgroundColor(o);
        }
        likeAnimation() {
          this.uniforms.updateReactTop(0.7),
            setTimeout(() => {
              this.uniforms.updateReactMiddle(0.7);
            }, 100),
            setTimeout(() => {
              this.uniforms.updateReactBottom(0.7);
            }, 150),
            setTimeout(() => {
              this.uniforms.updateReactTop(0);
            }, 850),
            setTimeout(() => {
              this.uniforms.updateReactMiddle(0);
            }, 950),
            setTimeout(() => {
              this.uniforms.updateReactBottom(0);
            }, 1050);
        }
        playAnimation(e) {
          this.uniforms.updatePlayingState(!0), this.applySettings(e);
        }
        idleAnimation() {
          this.uniforms.updateEnergy(r.DEFAULT_ENERGY),
            this.uniforms.updatePlayingState(!1);
        }
        enableRender(e) {
          (this.renderState[e] = !0), this.updateRenderingState();
        }
        disableRender(e) {
          (this.renderState[e] = !1), this.updateRenderingState();
        }
        destroy() {
          this.handleOnResize &&
            window.removeEventListener("resize", this.handleOnResize),
            this.handleOnVisibilityChange &&
              document.removeEventListener(
                "visibilitychange",
                this.handleOnVisibilityChange,
              );
        }
        constructor(e, t, n) {
          i._(this, "analyser", void 0),
            i._(this, "ticker", void 0),
            i._(this, "scene", new o.Transform()),
            i._(this, "shader", void 0),
            i._(this, "renderer", void 0),
            i._(this, "uniforms", void 0),
            i._(this, "renderState", {
              [l.RenderState.ACTIVE_TAB]: !0,
              [l.RenderState.BLOCK_VISIBILITY]: !0,
              [l.RenderState.MANUAL]: !0,
            }),
            (this.uniforms = new c.Uniforms((0, a.normalizeCollectionHue)(n))),
            (this.renderer = new o.Renderer(this.rendererOptions)),
            (this.ticker = new u.Ticker(r.MAX_FPS, this.render.bind(this))),
            (this.analyser = t),
            this.createElement(e),
            (this.handleOnResize = this.handleOnResize.bind(this)),
            (this.handleOnVisibilityChange =
              this.handleOnVisibilityChange.bind(this)),
            (this.shader = this.createShader()),
            this.handleOnResize(),
            this.handleOnVisibilityChange(),
            this.setupListeners();
        }
      }
      t.VibeAnimationRenderer = d;
    },
    80749: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = n(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RGB = void 0);
      let o = n(63955),
        a = n(83664),
        r = n(69407);
      class s {
        get value() {
          return [this.r.value, this.g.value, this.b.value];
        }
        update(e) {
          let t = (0, o.hsl2rgb)(e, a.DEFAULT_SATURATION, a.DEFAULT_LIGHTNESS);
          this.r.update(t[0]), this.g.update(t[1]), this.b.update(t[2]);
        }
        next(e) {
          this.r.next(e), this.g.next(e), this.b.next(e);
        }
        constructor(e) {
          i._(this, "r", void 0),
            i._(this, "g", void 0),
            i._(this, "b", void 0);
          let t = (0, o.hsl2rgb)(e, a.DEFAULT_SATURATION, a.DEFAULT_LIGHTNESS);
          (this.r = new r.DynamicValue(t[0], t[0], 3e3)),
            (this.g = new r.DynamicValue(t[1], t[1], 3e3)),
            (this.b = new r.DynamicValue(t[2], t[2], 3e3));
        }
      }
      t.RGB = s;
    },
    61939: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = n(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Ticker = void 0);
      class o {
        start() {
          if (this.isActive) return;
          let e = window.performance.now(),
            t = 1e3 / this.fps,
            n = (i) => {
              this.requestId = requestAnimationFrame(n);
              let o = i - e;
              o >= t - 0.1 && ((e = i - (o % t)), this.render(o));
            };
          (this.isActive = !0), (this.requestId = requestAnimationFrame(n));
        }
        stop() {
          this.isActive &&
            ((this.isActive = !1), cancelAnimationFrame(this.requestId));
        }
        constructor(e, t) {
          i._(this, "fps", void 0),
            i._(this, "render", void 0),
            i._(this, "isActive", !1),
            i._(this, "requestId", 0),
            (this.fps = e),
            (this.render = t);
        }
      }
      t.Ticker = o;
    },
    49198: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = n(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Uniforms = void 0);
      let o = n(26716),
        a = n(83664),
        r = n(47456),
        s = n(69407);
      class l {
        toValue(e) {
          return { value: e };
        }
        get width() {
          return Math.min(window.innerWidth * this.quality, 800);
        }
        get height() {
          let e = window.innerHeight / window.innerWidth;
          return Math.min(window.innerHeight * this.quality, 800 * e);
        }
        updatePlayingState(e) {
          (this.isPlaying = e),
            e
              ? (this.audioLowRatio.update(1),
                this.audioMiddleRatio.update(1),
                this.audioHighRatio.update(1))
              : (this.audioLowRatio.update(0),
                this.audioMiddleRatio.update(0),
                this.audioHighRatio.update(0));
        }
        updateColor(e, t) {
          this.color.update(e, t);
        }
        updateBackgroundColor(e) {
          this.background = new o.Vec3(e, e, e);
        }
        updateEnergy(e) {
          this.energy.update(e);
        }
        updateReactTop(e) {
          this.reactTop.update(e);
        }
        updateReactMiddle(e) {
          this.reactMiddle.update(e);
        }
        updateReactBottom(e) {
          this.reactBottom.update(e);
        }
        updateTime(e) {
          let t = (this.energy.value * e) / 1e3;
          this.time = (this.time + t) % 86400;
        }
        update(e, t) {
          if (
            (this.trackEnergy.next(e),
            this.energy.next(e),
            this.color.next(e),
            this.reactTop.next(e),
            this.reactMiddle.next(e),
            this.reactBottom.next(e),
            this.updateTime(e),
            t)
          ) {
            let n = t.getAverageFrequencies({ low: 0, high: 500 }),
              i = t.getAverageFrequencies({ low: 500, high: 2e3 }),
              o = t.getAverageFrequencies({ low: 2e3, high: 4e3 });
            let intensity = ((n + i + o) / 3) * (window.VIBE_ANIMATION_INTENSITY_COEFFICIENT ?? 1);
            //console.debug(this.trackEnergy.value, this.energy.value, intensity);
            this.energy.update(this.trackEnergy.value + intensity);
            this.energy.next(e),
            this.trackEnergy.next(e),
              this.audioLowRatio.next(e),
              this.audioMiddleRatio.next(e),
              this.audioHighRatio.next(e),
              (this.audio = [
                n * this.audioLowRatio.value,
                i * this.audioMiddleRatio.value,
                o * this.audioHighRatio.value,
              ]);
          }
        }
        toObject() {
          return {
            vScreenSize: this.toValue(new o.Vec2(this.width, this.height)),
            vTime: this.toValue(this.time),
            vColorBackground: this.toValue(this.background),
            vColor: this.toValue(this.color.value),
            vRotation: this.toValue(this.rotation),
            vAudio: this.toValue(this.audio),
            vReact: this.toValue([
              this.reactTop.value,
              this.reactMiddle.value,
              this.reactBottom.value,
            ]),
            vInteractionPoint: this.toValue(this.point),
            vInteraction: this.toValue(this.interaction),
          };
        }
        constructor(e) {
          i._(this, "isPlaying", !1),
            i._(this, "quality", 0.6),
            i._(this, "background", new o.Vec3(0, 0, 0)),
            i._(
              this,
              "energy",
              new s.DynamicValue(a.DEFAULT_ENERGY, a.DEFAULT_ENERGY, 1e3),
            ),
              i._(
                  this,
                  "trackEnergy",
                  new s.DynamicValue(a.DEFAULT_ENERGY, a.DEFAULT_ENERGY, 1),
              ),
            i._(this, "time", Math.floor(3600 * Math.random())),
            i._(this, "color", void 0),
            i._(this, "rotation", [
              new o.Vec3(-0.3, 0.3, 0.2),
              new o.Vec3(-0.3, -0.3, -0.2),
              new o.Vec3(-0.3, -0.3, 0.2),
            ]),
            i._(this, "audio", [0, 0, 0]),
            i._(this, "audioLowRatio", new s.DynamicValue(0, 0, 1e3)),
            i._(this, "audioMiddleRatio", new s.DynamicValue(0, 0, 1e3)),
            i._(this, "audioHighRatio", new s.DynamicValue(0, 0, 1e3)),
            i._(this, "reactTop", new s.DynamicValue(0, 0, 600)),
            i._(this, "reactMiddle", new s.DynamicValue(0, 0, 600)),
            i._(this, "reactBottom", new s.DynamicValue(0, 0, 600)),
            i._(this, "point", [0, 0]),
            i._(this, "interaction", 0),
            (this.color = new r.Color(e));
        }
      }
      t.Uniforms = l;
    },
    53367: function (e, t, n) {
      "use strict";
      t.TP = t.UE = t.nT = t.dr = t.kB = t.wX = void 0;
      var i = n(63955);
      Object.defineProperty(t, "wX", {
        enumerable: !0,
        get: function () {
          return i.hsl2rgb;
        },
      }),
        Object.defineProperty(t, "kB", {
          enumerable: !0,
          get: function () {
            return i.adjustHue;
          },
        });
      var o = n(19434);
      Object.defineProperty(t, "dr", {
        enumerable: !0,
        get: function () {
          return o.VibeAnimationRenderer;
        },
      });
      var a = n(98355);
      Object.defineProperty(t, "nT", {
        enumerable: !0,
        get: function () {
          return a.RenderState;
        },
      });
      var r = n(83664);
      Object.defineProperty(t, "UE", {
        enumerable: !0,
        get: function () {
          return r.DEFAULT_COLLECTION_SATURATION;
        },
      }),
        Object.defineProperty(t, "TP", {
          enumerable: !0,
          get: function () {
            return r.DEFAULT_COLLECTION_LIGHTNESS;
          },
        });
    },
    52999: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FragmentShaderV2 = t.VertexShaderV2 = void 0),
        (t.VertexShaderV2 =
          "\nprecision highp float;\nattribute vec4 position;\n\nvoid main() {\n    gl_Position = position;\n}\n"),
        (t.FragmentShaderV2 =
          "\nprecision highp float;\n\nuniform vec2 vScreenSize;\nuniform float vTime;\n\nuniform vec3 vColorBackground;\n\nuniform vec3 vColor[6];\nuniform vec3 vRotation[3];\n\nuniform float vAudio[3];\nuniform float vReact[3];\n\nuniform vec2 vInteractionPoint;\nuniform float vInteraction;\n\n#define CIRCLE_WIDTH_BASE 0.8\n#define CIRCLE_WIDTH_STEP 0.2\n\n#define SPARK_STRENGTH_BASE 1.0\n#define SPARK_STRENGTH_STEP 0.3\n\n#define CIRCLE_RADIUS_BASE 0.95\n#define CIRCLE_RADIUS_STEP 0.15\n\n#define CIRCLE_OFFSET_BASE 0.0\n#define CIRCLE_OFFSET_STEP 1.57\n\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise3(vec3 v) {\n  const vec2 C = vec2(0.1666667, 0.3333333); // vec2(1.0/6.0, 1.0/3.0)\n  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  // First corner\n  vec3 i = floor(v + dot(v, C.yyy));\n  vec3 x0 = v - i + dot(i, C.xxx);\n\n  // Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min(g.xyz, l.zxy);\n  vec3 i2 = max(g.xyz, l.zxy);\n\n  // x0 = x0 - 0. + 0.0 * C\n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n  // Permutations\n  i = mod(i, 289.0);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n  // Gradients ( N*N points uniformly over a square, mapped onto an octahedron.)\n  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3 ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z *ns.z); //  mod(p,N*N), N=7\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n  //Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  // Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));\n}\n\nfloat tri(in float x){return abs(fract(x)-.5);}\nvec3 tri3(in vec3 p){return vec3( tri(p.z+tri(p.y*20.)), tri(p.z+tri(p.x*1.)), tri(p.y+tri(p.x*1.)));}\n\nfloat triNoise3D(in vec3 p, in float spd)\n{\n  float z=0.4;\n  float rz = 0.1;\n  vec3 bp = p;\n  for (float i=0.; i<=4.; i++ )\n  {\n    vec3 dg = tri3(bp*0.01); // Increase the scale factor to make noise less frequent\n    p += (dg+vTime*.1*spd);\n\n    bp *= 4.; // Increase the scale factor\n    z *= 0.9;\n    p *= 1.6; // Increase the scale factor\n\n    rz+= (tri(p.z+tri(0.6*p.x+0.1*tri(p.y))))/z;\n  }\n  return smoothstep(0.0, 8., rz + sin(rz + sin(z) * 2.8) * 2.2);\n}\n\nvec2 rotate(vec2 p, float a) {\n  float s = sin(a);\n  float c = cos(a);\n  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}\n\nfloat light(float intensity, float attenuation, float dist) {\n  return intensity / (1.0 + dist + dist * attenuation);\n}\n\nvec4 makeNoiseBlob2(vec2 uv, vec3 color1, vec3 color2, float strength, float offset) {\n  float len = length(uv);\n  float v0, v1, cl;\n  float r0, d0, n0;\n  float r, d;\n\n  n0 = snoise3( vec3(uv * 1.2 + offset, vTime * 0.5 + offset) ) * 0.5 + 0.5;\n  r0 = mix(0.0, 1.0, n0);\n  d0 = distance(uv, r0 / len * uv);\n  v0 = smoothstep(r0 + 0.1 + (sin(vTime + offset) + 1.0), r0, len);\n\n  v1 = light(0.15 * (1.0 + 1.5 * (-sin(vTime * 2. + offset * 0.5) * 0.5)) + 0.3 * strength, 10.0 , d0);\n\n  vec3 col = mix(color1, color2, uv.y * 2.);\n  col = col + v1;\n  col.rgb = clamp(col.rgb, 0.0, 1.0);\n  return vec4(col, v0);\n}\n\nvec4 makeBlob(vec2 uv,\n              float blob,\n              vec3 color1,\n              vec3 color2,\n              float width,\n              float baseReaction,\n              float likeReaction,\n              float audioStrength,\n              float offset,\n              vec2 noiseOffset) {\n  float len = length(uv);\n\n  float outerRadius = blob + width * 0.5 + baseReaction * (1.0 + max(likeReaction, audioStrength * 0.6) * 50. * baseReaction);\n\n  float strength = max(likeReaction, audioStrength);\n\n  vec4 noise = makeNoiseBlob2(uv * (1.0 - likeReaction * 0.5) + noiseOffset, color1, color2, strength, offset);\n  noise.a = mix(0.0, noise.a, smoothstep(outerRadius, 0.5, len));\n  noise.rgb += 0.6 * likeReaction * (1.0 - smoothstep(0.2, outerRadius * 0.8, len));\n\n  return noise;\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / vScreenSize.xy;\n\n  uv = uv * 2.0 - 1.0;\n  uv.y *= vScreenSize.y / min(vScreenSize.x, vScreenSize.y) / 0.55;\n  uv.x *= vScreenSize.x / min(vScreenSize.x, vScreenSize.y) / 0.55;\n\n  vec2 ruv = uv * 2.0;\n  float pr = length(ruv);\n  float pa = atan(ruv.y, ruv.x);\n\n  float idx = (pa/3.1415) / 2.0;   // 0 to 1\n\n  vec2 ruv1 = rotate(uv * 2.0, 3.1415);\n  float pa1 = atan(ruv1.y, ruv1.x);\n  float idx1 = (pa1/3.1415) / 2.0;   // 0 to 1\n  float idx21 = (pa1/3.1415 + 1.0) / 2.0 * 3.1415; // 0 to PI\n\n  float spark = triNoise3D(vec3(idx, 0.0, 0.0), 0.1);\n  spark = mix(spark, triNoise3D(vec3(idx1, 0.0, idx1), 0.1), smoothstep(0.9, 1.0, sin(idx21)));\n  spark = spark * 0.2 + pow(spark, 10.);\n  spark = smoothstep(0.0, spark, 0.3) * spark;\n\n  vec3 color = vColorBackground;\n  vec4 blobColor;\n  float floatIndex;\n  float radius;\n\n  float n0 = snoise3(vec3(uv * 1.2, vTime * 0.5));\n\n  for (int i = 0; i < 3; i++) {\n    floatIndex = float(i);\n    radius = CIRCLE_RADIUS_BASE - CIRCLE_RADIUS_STEP * floatIndex;\n    blobColor = makeBlob(uv,\n                         mix(radius, radius + 0.3, n0),\n                         vColor[i],\n                         vColor[i+3],\n                         CIRCLE_WIDTH_BASE - CIRCLE_WIDTH_STEP * floatIndex,\n                         (SPARK_STRENGTH_BASE - SPARK_STRENGTH_STEP * floatIndex) * spark,\n                         vReact[i],\n                         vAudio[i],\n                         CIRCLE_OFFSET_BASE + CIRCLE_OFFSET_STEP * floatIndex,\n                         rotate(vRotation[i].xy, vTime * vRotation[i].z));\n    color = mix(color, blobColor.rgb, blobColor.a);\n  }\n\n  gl_FragColor = vec4(color, 1.0);\n}\n");
    },
    98355: function (e, t) {
      "use strict";
      var n, i;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RenderState = void 0),
        ((i = n || (t.RenderState = n = {})).ACTIVE_TAB = "ACTIVE_TAB"),
        (i.BLOCK_VISIBILITY = "BLOCK_VISIBILITY"),
        (i.MANUAL = "MANUAL");
    },
    6571: function (e, t, n) {
      "use strict";
      n.d(t, {
        DefaultLayout: function () {
          return V;
        },
      });
      var i = n(9753),
        o = n(60836),
        a = n(9544),
        r = n(74717),
        s = n(69863),
        l = n(98639),
        u = (n(1263), n(37117), n(44367));
      let c = ["album", "users", "artist", "chart"],
        d = () => {
          let e = (0, r.usePathname)();
          return (0, l.useMemo)(() => {
            let [, t] = e.split("/");
            return !!t && c.includes(t);
          }, [e]);
        };
      var _ = n(3924),
        v = n.n(_);
      v().secondaryEnter, v().secondaryEnterActive;
      let p = (0, a.Pi)((e) => {
        let { className: t, children: n } = e;
        (0, u.uK)();
        let { setContentRef: a } = (0, u.$Y)(),
          { settings: r } = (0, u.oR)();
        return (
          r.layout,
          u.t8.Mobile,
          d(),
          (0, l.useRef)(null),
          (0, i.jsx)("main", {
            className: (0, o.W)(v().rootOld, t),
            ref: a,
            children: (0, i.jsx)(l.Suspense, { children: n }),
          })
        );
      });
      var m = n(80542),
        h = n(59131),
        f = n(96622),
        x = n(89352),
        y = n(67868),
        b = n(2570),
        g = n(81829),
        C = n.n(g);
      let k = (0, a.Pi)((e) => {
          let { children: t, link: n } = e,
            {
              currentTrackInfo: {
                modals: { trackModal: o },
              },
            } = (0, u.oR)();
          return n
            ? (0, i.jsx)(y.rU, {
                className: C().link,
                href: n,
                onClick: o.close,
                children: (0, i.jsx)(b.Caption, {
                  variant: "div",
                  size: "l",
                  children: t,
                }),
              })
            : (0, i.jsx)(b.Caption, { variant: "div", size: "l", children: t });
        }),
        S = (e) => {
          let { title: t, description: n, children: o, link: a } = e;
          return n || o
            ? (0, i.jsxs)("div", {
                className: C().infoBlock,
                children: [
                  t &&
                    (0, i.jsx)(b.Caption, {
                      variant: "div",
                      size: "l",
                      className: C().infoTitle,
                      children: t,
                    }),
                  (0, i.jsx)(k, { link: a, children: n || o }),
                ],
              })
            : null;
        },
        T = (0, a.Pi)(() => {
          var e, t;
          let { formatMessage: n } = (0, m.Z)(),
            { currentTrackInfo: o } = (0, u.oR)(),
            { fullTrack: a } = o;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(S, {
                children: null == a ? void 0 : a.shortDescription,
              }),
              (0, i.jsx)(S, {
                title: n({ id: "entity-names.audiobook" }),
                description:
                  null == a
                    ? void 0
                    : null === (e = a.mainAlbum) || void 0 === e
                      ? void 0
                      : e.title,
                link:
                  null == a
                    ? void 0
                    : null === (t = a.mainAlbum) || void 0 === t
                      ? void 0
                      : t.url,
              }),
            ],
          });
        }),
        E = (0, a.Pi)(() => {
          var e, t;
          let { formatMessage: n } = (0, m.Z)(),
            { currentTrackInfo: o } = (0, u.oR)(),
            a = o.fullTrack,
            r = (0, l.useMemo)(
              () =>
                o.fullDescription
                  ? (0, i.jsx)("span", {
                      className: C().text,
                      dangerouslySetInnerHTML: { __html: o.fullDescription },
                    })
                  : null == a
                    ? void 0
                    : a.shortDescription,
              [null == a ? void 0 : a.shortDescription, o.fullDescription],
            );
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(S, { children: r }),
              (0, i.jsx)(S, {
                title: n({ id: "entity-names.podcast" }),
                description:
                  null == a
                    ? void 0
                    : null === (e = a.mainAlbum) || void 0 === e
                      ? void 0
                      : e.title,
                link:
                  null == a
                    ? void 0
                    : null === (t = a.mainAlbum) || void 0 === t
                      ? void 0
                      : t.url,
              }),
            ],
          });
        }),
        N = (0, a.Pi)(() => {
          var e, t, n;
          let { formatMessage: a } = (0, m.Z)(),
            { notify: r } = (0, u.d$)(),
            { contentRef: s } = (0, u.$Y)(),
            {
              currentTrackInfo: c,
              settings: d,
              fullscreenPlayer: _,
            } = (0, u.oR)(),
            { trackModal: v } = c.modals,
            p = d.layout === u.t8.Mobile,
            b = c.isUGC,
            g = d.platform === u.t4.WINDOWS;
          b && c.isTrackIdle && c.getTrackMeta(),
            c.fullTrack || !c.isTrackIdle || b || c.getFullTrack(),
            !c.credits && c.isCreditsIdle && c.getCreditsInfo(),
            ((null === (e = c.fullTrack) || void 0 === e
              ? void 0
              : e.isTrackPodcast) ||
              (null === (n = c.fullTrack) || void 0 === n
                ? void 0
                : null === (t = n.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast)) &&
              c.getFullDescription(),
            (0, l.useEffect)(
              () => () => {
                c.reset();
              },
              [c],
            );
          let k = (0, l.useCallback)(() => {
              v.close(), c.reset();
            }, [c, v]),
            N = (0, l.useCallback)(
              (e) => {
                var t;
                e || c.reset(),
                  null === (t = v.onOpenChange) || void 0 === t || t.call(v, e);
              },
              [c, v],
            );
          c.isRejected &&
            (k(),
            r(
              (0, i.jsx)(y.Q, {
                error: a({ id: "error-messages.error-during-action" }),
              }),
              { containerId: u.W$.ERROR },
            ));
          let R = c.fullTrack,
            j = null == R ? void 0 : R.isExplicit,
            B = null == R ? void 0 : R.trackExplicitMark,
            L = (0, l.useMemo)(() => {
              if (R)
                return (0, i.jsxs)("span", {
                  children: [
                    R.title,
                    R.version &&
                      (0, i.jsx)("span", {
                        className: C().version,
                        children: R.version,
                      }),
                    j &&
                      B &&
                      (0, i.jsx)(f.ExplicitMark, {
                        className: (0, o.W)(C().explicitMark, {
                          [C().explicit]: !R.isTrackNonMusic,
                        }),
                        iconSize: "xxs",
                        variant: B,
                      }),
                  ],
                });
            }, [R, B, j]),
            P = (0, l.useMemo)(() => {
              var e;
              return (null == R ? void 0 : R.type) === h.Vc.AUDIOBOOK
                ? (0, i.jsx)(T, {})
                : (null == R ? void 0 : R.isTrackPodcast) ||
                    (null == R
                      ? void 0
                      : null === (e = R.mainAlbum) || void 0 === e
                        ? void 0
                        : e.isPodcast)
                  ? (0, i.jsx)(E, {})
                  : void 0;
            }, [R]),
            I = (0, l.useMemo)(() => {
              var e;
              return (
                null === (e = c.credits) || void 0 === e ? void 0 : e.length
              )
                ? c.credits.map((e) => {
                    let { title: t, value: n } = e;
                    return (0, i.jsx)(S, { title: t, description: n }, t);
                  })
                : null;
            }, [c.credits]);
          return (0, i.jsx)(x.u, {
            placement: p ? "default" : "right",
            open: v.isOpened,
            onClose: k,
            contentClassName: C().modalContent,
            title: L,
            headerClassName: C().header,
            className: (0, o.W)(C().root, {
              [C().root_withFullscreen]: _.modal.isOpened,
              [C().root_withWindows]: g,
            }),
            overlayClassName: C().overlay,
            onOpenChange: N,
            labelClose: a({ id: "interface-actions.close" }),
            portalNode: p || _.modal.isOpened ? null : s,
            children: (0, i.jsxs)("div", {
              className: C().content,
              children: [
                (c.isTrackLoading || c.isTrackRejected) &&
                  (0, i.jsx)(y.AH, { textClassName: C().textShimmer }),
                P,
                (c.isCreditsLoading || c.isCreditsRejected) &&
                  (0, i.jsx)(y.AH, { textClassName: C().textShimmer }),
                I,
              ],
            }),
          });
        }),
        R = (0, a.Pi)(() => {
          let { settings: e } = (0, u.oR)();
          return e.layout === u.t8.Mobile ? null : (0, i.jsx)(N, {});
        });
      var j = n(51952),
        B = n(93099),
        L = n(68106),
        P = n(12581),
        I = n(80757),
        O = n(69088),
        A = n(20121),
        M = n(6494),
        w = n.n(M);
      let V = (0, a.Pi)((e) => {
        var t, n, a;
        let { children: l } = e,
          c = (0, r.usePathname)(),
          d = (0, u.uK)().get(u.U5),
          { settings: _, experiments: v, communication: m } = (0, u.oR)();
        (0, u.HY)();
        let h = _.layout === u.t8.Mobile,
          f = _.layout !== u.t8.Mobile,
          x =
            f &&
            (null === (t = m.list) || void 0 === t
              ? void 0
              : t.barBelow.isVisible) &&
            (null === (n = m.list) || void 0 === n
              ? void 0
              : n.barBelow.hasAnimationAlreadyBeenStarted),
          b = _.platform === u.t4.MACOS,
          g = _.platform === u.t4.WINDOWS,
          C = v.checkExperiment(u.pe.WebNextTrackAboutModal, "on");
        return (0, i.jsxs)("div", {
          className: (0, o.W)(w().root, {
            [w().root_applicationPreserveTitleBar]: g,
            [w().root_withBarBelow]: x,
          }),
          children: [
            (0, i.jsx)(j.wp, {
              className: (0, o.W)(w().navbar, {
                [w().navbar_application_macos]: b,
                [w().navbar_application_windows]: g,
              }),
            }),
            (0, i.jsx)(p, {
              className: (0, o.W)(w().content, {
                [w().content_withPlayerBar]: h,
              }),
              children: (0, i.jsxs)(
                y.SV,
                {
                  fallback: L.D,
                  children: [
                    l,
                    (0, i.jsx)(s.Notification, {
                      className: w().notificationInfoContainer,
                      enableMultiContainer: !0,
                      containerId: u.W$.INFO,
                      position: "bottom-center",
                    }),
                    (0, i.jsx)(s.Notification, {
                      className: w().notificationErrorContainer,
                      enableMultiContainer: !0,
                      containerId: u.W$.ERROR,
                      position: "bottom-center",
                      limit: 1,
                    }),
                  ],
                },
                c,
              ),
            }),
            (0, i.jsx)(B.ev, { className: w().playerBar }),
            f &&
              m.list &&
              (0, i.jsx)(I.On, {
                className: w().barBelow,
                barBelow: m.list.barBelow,
              }),
            (null === (a = m.list) || void 0 === a ? void 0 : a.modal) &&
              (0, i.jsx)(O.IP, { modal: m.list.modal }),
            (0, i.jsx)(B.Rt, {}),
            (0, i.jsx)(A.F8, {}),
            (0, i.jsx)(P._, {}),
            C && (0, i.jsx)(R, {}),
            d.dev.panel && (0, i.jsx)(y.bs, {}),
          ],
        });
      });
    },
    40029: function (e, t, n) {
      "use strict";
      n.d(t, {
        k_: function () {
          return d.VibeButton;
        },
        xJ: function () {
          return d.VibeButtonShimmer;
        },
        op: function () {
          return u.VibeCard;
        },
        KW: function () {
          return r;
        },
        FF: function () {
          return l;
        },
        BV: function () {
          return c.useOnPinClick;
        },
        xF: function () {
          return s;
        },
      });
      var i = n(42288),
        o = n(84338),
        a = n(44367);
      let r = i.V5.model("Vibe", {
          title: i.V5.optional(i.V5.string, ""),
          header: i.V5.optional(i.V5.string, ""),
          subtitle: i.V5.maybe(i.V5.string),
          stationId: i.V5.string,
          seeds: i.V5.array(i.V5.string),
          idForFrom: i.V5.maybe(i.V5.string),
          imageUrl: i.V5.maybe(i.V5.string),
          animationUrl: i.V5.maybe(i.V5.string),
          backgroundImageUrl: i.V5.maybe(i.V5.string),
          backgroundColor: i.V5.maybe(i.V5.string),
          colors: i.V5.maybe(
            i.V5.model({
              average: i.V5.maybe(i.V5.string),
              waveText: i.V5.maybe(i.V5.string),
            }),
          ),
        })
          .views((e) => ({
            get context() {
              if (e.seeds && (e.stationId !== a.sH || e.seeds.length > 1))
                return e.title;
              return null;
            },
            get pinId() {
              return (0, o.$k)(e.seeds);
            },
            get isPinned() {
              if (!(0, i.fh)(e)) return !1;
              let { pinsCollection: t } = (0, i.yj)(e);
              return t.isPinned(this.pinId);
            },
          }))
          .actions((e) => ({
            togglePin: (0, i.ls)(function* () {
              if (!(0, i.fh)(e)) return;
              let { pinsCollection: t, user: n } = (0, i.yj)(e);
              if (n.isAuthorized)
                return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
            }),
          })),
        s = (e) =>
          (0, i.pj)({
            title: e.name,
            seeds: e.seeds,
            stationId: e.stationId,
            idForFrom: e.idForFrom,
          }),
        l = (e) => {
          var t, n, o, a;
          return (0, i.pj)({
            title: e.title,
            header: e.header,
            stationId: e.stationId,
            seeds: e.seeds,
            animationUrl: e.animationUrl,
            backgroundImageUrl: e.backgroundImageUrl,
            imageUrl: e.imageUrl,
            colors: {
              average:
                null !==
                  (o =
                    null === (t = e.colors) || void 0 === t
                      ? void 0
                      : t.average) && void 0 !== o
                  ? o
                  : "",
              waveText:
                null !==
                  (a =
                    null === (n = e.colors) || void 0 === n
                      ? void 0
                      : n.waveText) && void 0 !== a
                  ? a
                  : "",
            },
          });
        };
      var u = n(76356),
        c = n(77027),
        d = n(85533);
    },
    77027: function (e, t, n) {
      "use strict";
      n.d(t, {
        useOnPinClick: function () {
          return c;
        },
      });
      var i = n(9753),
        o = n(24244),
        a = n(98639),
        r = n(80542),
        s = n(44367),
        l = n(67868);
      let u = (e) => {
          var t;
          let { vibe: n, closeToast: o } = e;
          return (0, i.jsx)(l.K1, {
            closeToast: o,
            entityVariant: l.j9.VIBE,
            entityTitle: n.title,
            averageColor:
              null === (t = n.colors) || void 0 === t ? void 0 : t.average,
            isPinned: n.isPinned,
          });
        },
        c = (e) => {
          let { user: t } = (0, s.oR)(),
            { notify: n } = (0, s.d$)(),
            { formatMessage: c } = (0, r.Z)(),
            [d, _] = (0, a.useState)(!1);
          return (0, a.useCallback)(async () => {
            if (!e) return;
            if (!t.isAuthorized) {
              n(
                (0, i.jsx)(l.Q, {
                  error: c({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: s.W$.ERROR },
              );
              return;
            }
            if (d) return;
            let a = { ...(0, o.ZN)(e), isPinned: !e.isPinned };
            _(!0);
            let r = await e.togglePin();
            _(!1),
              r
                ? n((0, i.jsx)(u, { vibe: a }), { containerId: s.W$.INFO })
                : n(
                    (0, i.jsx)(l.Q, {
                      error: c({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: s.W$.ERROR },
                  );
          }, [c, n, d, t.isAuthorized, e]);
        };
    },
    85533: function (e, t, n) {
      "use strict";
      n.d(t, {
        VibeButton: function () {
          return b;
        },
        VibeButtonShimmer: function () {
          return y;
        },
      });
      var i = n(9753),
        o = n(60836),
        a = n(9544),
        r = n(98639),
        s = n(31014),
        l = n(23881),
        u = n(17295),
        c = n(98342),
        d = n(39513),
        _ = n(28852),
        v = n(86939),
        p = n(90679),
        m = n(2570),
        h = n(44367),
        f = n(70010),
        x = n.n(f);
      let y = (e) => {
          let { isActive: t, className: n } = e;
          return (0, i.jsx)(p.Shimmer, {
            isActive: t,
            className: (0, o.W)(x().root, n),
          });
        },
        b = (0, a.Pi)((e) => {
          let { className: t, vibe: n } = e,
            { pageId: a } = (0, h.lV)(),
            { blockIdForFrom: p } = (0, h.qY)(),
            { ref: f, intersectionPropertyId: y } = (0, h.Vf)(),
            { toggleTrue: b, toggleFalse: g, state: C } = (0, u.O)(!1),
            { isPlaying: k, togglePlay: S } = (0, h.Qh)({
              seeds: n.seeds,
              pageIdForFrom: a,
              blockIdForFrom: p,
            }),
            T = (0, h.lA)(),
            E = (0, r.useCallback)(
              (e) => {
                (0, c.m)(e, x().ripple),
                  b(),
                  S().finally(() => {
                    g(), T(!k);
                  });
              },
              [g, b, S, k, T],
            ),
            N = (0, r.useMemo)(() => {
              var e, t;
              return {
                "--vibe-button-background":
                  null === (e = n.colors) || void 0 === e ? void 0 : e.average,
                "--vibe-button-text-color":
                  null === (t = n.colors) || void 0 === t ? void 0 : t.waveText,
              };
            }, [n.colors]),
            R = k ? "pause" : "play";
          return (0, i.jsxs)(d.z, {
            style: N,
            withRipple: !1,
            withHover: !1,
            variant: "text",
            onClick: E,
            className: (0, o.W)(
              x().root,
              x().button,
              { [x().button_loading]: C },
              t,
            ),
            "data-intersection-property-id": y,
            ref: f,
            ...(0, l.BA)(l.QM.landing.VIBE_DISCOVERY_ITEM),
            children: [
              (0, i.jsx)(v.Image, {
                className: x().image,
                withAvatarReplace: !0,
                withFallback: !1,
                src: n.backgroundImageUrl,
                withAspectRatio: !0,
                size: 400,
                fit: "cover",
              }),
              (0, i.jsxs)("span", {
                className: x().textContainer,
                children: [
                  (0, i.jsx)(m.Caption, {
                    className: x().subtitle,
                    variant: "span",
                    type: "controls",
                    size: "s",
                    weight: "bold",
                    children: (0, i.jsx)(s.Z, { id: "entity-names.my-vibe" }),
                  }),
                  (0, i.jsxs)("span", {
                    className: x().titleContainer,
                    children: [
                      (0, i.jsx)(_.J, {
                        className: x().icon,
                        size: "xxs",
                        variant: R,
                      }),
                      (0, i.jsx)(m.Heading, {
                        className: x().title,
                        variant: "h2",
                        size: "xs",
                        lineClamp: 1,
                        children: n.title,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
    },
    76356: function (e, t, n) {
      "use strict";
      n.d(t, {
        VibeCard: function () {
          return p;
        },
      });
      var i = n(9753),
        o = n(60836),
        a = n(9544),
        r = n(98639),
        s = n(27491),
        l = n(12404),
        u = n(2570),
        c = n(44367),
        d = n(67868),
        _ = n(55215),
        v = n.n(_);
      let p = (0, a.Pi)((e) => {
        let { vibe: t, children: n, className: a } = e,
          { pageId: _ } = (0, c.lV)(),
          [p, m] = (0, r.useState)(!1),
          { blockIdForFrom: h } = (0, c.qY)(),
          { settings: f } = (0, c.oR)(),
          { sendPlaySearchFeedback: x } = (0, c.sA)(),
          y = f.layout === c.t8.Mobile,
          {
            isPlaying: b,
            isPaused: g,
            togglePlay: C,
          } = (0, c.Qh)({
            seeds: t.seeds,
            pageIdForFrom: _,
            blockIdForFrom: h,
          }),
          k = b || g,
          S = (0, r.useCallback)(() => {
            y && (p || b || (m(!0), null == x || x()), C());
          }, [y, b, p, x, C]),
          T = (0, r.useCallback)(() => {
            p || b || (m(!0), null == x || x()), C();
          }, [b, p, x, C]),
          E = (0, r.useMemo)(
            () =>
              (0, i.jsxs)(l.Paper, {
                className: v().cover,
                radius: "round",
                withShadow: !0,
                onClick: S,
                children: [
                  (0, i.jsx)(d.BE, {
                    size: 200,
                    fit: "cover",
                    className: v().image,
                    style: { backgroundColor: t.backgroundColor },
                    src: t.imageUrl,
                    alt: t.title,
                    withAvatarReplace: !0,
                  }),
                  k &&
                    (0, i.jsx)(d.Up, {
                      stopAnimation: g,
                      className: v().playingAnimation,
                    }),
                  (0, i.jsx)(s.kk, {
                    className: (0, o.W)(
                      v().controls,
                      { [v().controls_isPlaying]: k },
                      v().important,
                    ),
                    bottomContainerClassName: v().playControl,
                    radius: "round",
                    playControl: (0, i.jsx)(d.JM, {
                      isPlaying: b,
                      onClick: T,
                      className: (0, o.W)(v().playButton, v().control),
                      buttonVariant: "default",
                      withHover: !1,
                      iconSize: "xl",
                      variant: "filled",
                    }),
                  }),
                ],
              }),
            [S, T, g, b, k, t.backgroundColor, t.imageUrl, t.title],
          );
        return (0, i.jsx)(s.m7, {
          className: (0, o.W)(v().root, a),
          textPosition: "center",
          title: (0, i.jsx)(u.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: t.title,
          }),
          description: (0, i.jsx)(u.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 1,
            children: t.subtitle,
          }),
          view: E,
          children: n,
        });
      });
    },
    55784: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return o.h;
        },
        n: function () {
          return i.n;
        },
      });
      var i = n(33861),
        o = n(34906);
    },
    31579: function (e, t, n) {
      "use strict";
      n.d(t, {
        vY: function () {
          return a.EmptyPlaylistBlock;
        },
        ZL: function () {
          return i.PlaylistCard;
        },
        Nn: function () {
          return m;
        },
        d2: function () {
          return u;
        },
        VD: function () {
          return o.PlaylistsCarousel;
        },
        RE: function () {
          return b;
        },
        Q9: function () {
          return x;
        },
        VB: function () {
          return y;
        },
      });
      var i = n(22003),
        o = n(18921),
        a = n(6030),
        r = n(42288),
        s = n(33589),
        l = n(12090);
      let u = l.Cd.props({ artists: r.V5.maybe(r.V5.array(s.Go)) });
      var c = n(44367),
        d = n(13196),
        _ = n(59131);
      let v = r.V5.model("PlaylistOwner", {
          uid: r.V5.number,
          login: r.V5.string,
          name: r.V5.string,
          sex: r.V5.enumeration(Object.values(_.oF)),
          verified: r.V5.boolean,
        }),
        p = r.V5.model("PlaylistOwner", {
          userInfo: r.V5.maybeNull(v),
          caseForms: r.V5.maybeNull(d.S2),
        }),
        m = l.Cd.props({
          owner: r.V5.maybe(v),
          modified: r.V5.string,
          description: r.V5.maybe(r.V5.string),
          madeFor: r.V5.maybeNull(p),
        })
          .views((e) => ({
            get seeds() {
              var t;
              return [
                "playlist:"
                  .concat(
                    null === (t = e.owner) || void 0 === t ? void 0 : t.login,
                    "_",
                  )
                  .concat(e.kind),
              ];
            },
          }))
          .actions((e) => ({
            changeDescription: (0, r.ls)(function* (t) {
              if (!(0, r.fh)(e)) return c.SL.ERROR;
              if (e.description === t) return c.SL.OK;
              if (t.length > l.Zn) return c.SL.ERROR;
              let { usersResource: n, modelActionsLogger: i } = (0, r.dU)(e);
              if (e.canUserChange) {
                let o = e.description;
                e.description = t;
                try {
                  let i = yield n.changePlaylistDescription({
                    description: t,
                    userId: e.uid,
                    playlistKind: e.kind,
                  });
                  return (e.description = i.description), c.SL.OK;
                } catch (t) {
                  (e.description = o), i.error(t);
                }
              }
              return c.SL.ERROR;
            }),
            changePlaylistCover: (0, r.ls)(function* (t) {
              if (!(0, r.fh)(e)) return c.SL.ERROR;
              let { usersResource: n, modelActionsLogger: i } = (0, r.dU)(e);
              try {
                return (
                  yield n.uploadPlaylistCover({
                    userId: e.uid,
                    formData: t,
                    playlistKind: e.kind,
                  }),
                  c.SL.OK
                );
              } catch (e) {
                i.error(e);
              }
              return c.SL.ERROR;
            }),
          })),
        h = (e) => ({
          uid: e.uid,
          login: e.login,
          name: e.name,
          sex: e.sex,
          verified: e.verified,
        }),
        f = (e) =>
          (0, r.pj)({
            userInfo: e.userInfo ? h(e.userInfo) : null,
            caseForms: e.caseForms ? (0, c.GA)(e.caseForms) : null,
          }),
        x = (e) =>
          (0, r.pj)({
            ...(0, l.PV)(e),
            owner: e.owner ? h(e.owner) : void 0,
            description: e.description,
            modified: e.modified,
            madeFor: e.madeFor ? f(e.madeFor) : null,
          }),
        y = (e) => {
          var t, n;
          return (0, r.pj)({
            ...(0, l.PV)(e),
            artists:
              null !==
                (n =
                  null == e
                    ? void 0
                    : null === (t = e.artists) || void 0 === t
                      ? void 0
                      : t.map(s.d)) && void 0 !== n
                ? n
                : [],
          });
        },
        b = (e) => {
          var t, n;
          let { playlist: i, generatedPlaylistType: o, likesCount: a } = e;
          return (0, r.pj)({
            isAvailable: null === (n = i.available) || void 0 === n || n,
            uuid: i.playlistUuid,
            title: i.title,
            uid: i.uid,
            kind: i.kind,
            coverUri: null === (t = i.cover) || void 0 === t ? void 0 : t.uri,
            generatedPlaylistType: o,
            likesCount: a,
          });
        };
    },
    6030: function (e, t, n) {
      "use strict";
      n.d(t, {
        EmptyPlaylistBlock: function () {
          return d;
        },
      });
      var i = n(9753),
        o = n(60836),
        a = n(98639),
        r = n(31014),
        s = n(28852),
        l = n(2570),
        u = n(98746),
        c = n.n(u);
      let d = (e) => {
        let { className: t, isEmptySearch: n } = e,
          u = (0, a.useMemo)(
            () =>
              n
                ? (0, i.jsx)(r.Z, { id: "search-results.not-found-title" })
                : (0, i.jsx)(r.Z, {
                    id: "error-messages.empty-collection-playlist-title",
                  }),
            [n],
          ),
          d = (0, a.useMemo)(
            () =>
              n
                ? (0, i.jsx)(r.Z, {
                    id: "search-results.not-found-description",
                  })
                : (0, i.jsx)(r.Z, {
                    id: "error-messages.empty-collection-playlist-description",
                  }),
            [n],
          );
        return (0, i.jsxs)("div", {
          className: (0, o.W)(c().root, t),
          children: [
            (0, i.jsx)("div", {
              className: c().iconBackground,
              children: (0, i.jsx)(s.J, {
                variant: "search",
                size: "l",
                className: c().icon,
              }),
            }),
            (0, i.jsx)(l.Heading, {
              variant: "h3",
              size: "xs",
              className: c().title,
              children: u,
            }),
            (0, i.jsx)(l.Caption, {
              variant: "span",
              size: "l",
              className: c().subtitle,
              children: d,
            }),
          ],
        });
      };
    },
    22003: function (e, t, n) {
      "use strict";
      n.d(t, {
        PlaylistCard: function () {
          return T;
        },
      });
      var i = n(9753),
        o = n(60836),
        a = n(9544),
        r = n(98639),
        s = n(80542),
        l = n(52122),
        u = n(23881),
        c = n(84338),
        d = n(39513),
        _ = n(27491),
        v = n(28852),
        p = n(12404),
        m = n(2570),
        h = n(33589),
        f = n(12090),
        x = n(44367),
        y = n(67868);
      let b = (e) => {
        let { formatMessage: t } = (0, s.Z)();
        return (0, r.useMemo)(() => {
          let n = "";
          e.isLiked && !e.actualLikesCount
            ? (n = t({ id: "entity-names.has-your-like" }))
            : "number" == typeof e.actualLikesCount &&
              (n =
                e.actualLikesCount > 0
                  ? t(
                      { id: "entity-names.likes-counter" },
                      { counter: e.actualLikesCount },
                    )
                  : t({ id: "entity-names.likes-counter-empty" }));
          let i = t(
            { id: "entity-names.playlist-name" },
            { playlistName: e.title },
          );
          return "".concat(i, " ").concat(n);
        }, [t, e]);
      };
      var g = n(385);
      let C = (0, a.Pi)((e) => {
        var t;
        let {
            playlist: n,
            reference: o,
            onOpenChange: a,
            open: s,
            returnFocus: l,
          } = e,
          { settings: u, experiments: c, trailer: d } = (0, x.oR)(),
          _ = (0, f.SB)(n),
          v = (0, f.BV)(n),
          p = u.layout === x.t8.Mobile,
          m =
            c.checkExperiment(x.pe.WebNextEntityTrailer, "on") &&
            true &&
            (null === (t = n.trailer) || void 0 === t ? void 0 : t.isAvailable);
        (0, x.ZP)(s);
        let h = (0, r.useCallback)(() => {
          d.openPlaylistTrailer(n.id);
        }, [n.id, d]);
        return (0, i.jsxs)(g.v2, {
          title: n.title,
          onOpenChange: a,
          open: s,
          offsetOptions: 10,
          reference: o,
          isMobile: p,
          returnFocus: l,
          children: [
            !p && (0, i.jsx)(y.Zd, { onClick: v, isPinned: n.isPinned }),
            !n.isFavouritePlaylist &&
              (0, i.jsx)(y.xZ, { onClick: _, isLiked: n.isLiked }),
            m && (0, i.jsx)(y.NB, { onClick: h }),
          ],
        });
      });
      var k = n(88308),
        S = n.n(k);
      let T = (0, a.Pi)((e) => {
        let {
            className: t,
            playlist: n,
            children: a,
            contentLinesCount: g,
            customDescription: k,
          } = e,
          { ref: T, intersectionPropertyId: E } = (0, x.Vf)(),
          N = (0, x.x5)(),
          { formatMessage: R } = (0, s.Z)(),
          {
            sendLikeSearchFeedback: j,
            sendNavigateSearchFeedback: B,
            sendPlaySearchFeedback: L,
          } = (0, x.sA)(),
          [P, I] = (0, r.useState)(!1),
          [O, A] = (0, r.useState)(!1),
          [M, w] = (0, r.useState)(!1),
          V = b(n),
          z = (0, f.SB)(n),
          F = (0, f.BV)(n),
          D = (0, x.zx)(),
          U = (0, x.s0)(n.url),
          W = (0, x.s0)(n.url, !0),
          H = (0, h.ik)(W, U),
          [G, q] = (0, r.useState)(!1),
          { isPlaying: Y, togglePlay: K } = (0, x.qm)({
            playContextParams: {
              contextData: {
                type: c.Ak.Playlist,
                meta: { id: n.id, uuid: n.uuid },
                from: N,
              },
              loadContextMeta: !0,
            },
          }),
          J = (0, r.useCallback)(() => {
            D({ to: l.qU.PlaylistScreen }), null == B || B();
          }, [D, B]),
          Z = (0, r.useCallback)(
            (e) => {
              J(), H(e);
            },
            [H, J],
          ),
          X = (0, r.useCallback)(() => {
            P || Y || (I(!0), null == L || L()), K();
          }, [Y, P, L, K]),
          Q = (0, r.useCallback)(() => {
            O || n.isLiked || (A(!0), null == j || j()), z();
          }, [z, O, n.isLiked, j]),
          $ = (0, r.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          ee = (0, r.useCallback)(() => {
            w(!M), q(!M);
          }, [M]),
          et = (0, r.useMemo)(() => {
            var e;
            return k
              ? (0, i.jsx)(m.Caption, {
                  variant: "span",
                  type: "entity",
                  size: "s",
                  weight: "medium",
                  lineClamp: 2,
                  children: k,
                })
              : (null === (e = n.artists) || void 0 === e ? void 0 : e.length)
                ? (0, i.jsx)(h.jO, {
                    className: S().artists,
                    artists: n.artists,
                    lineClamp: 1,
                    linkClassName: S().artistLink,
                    captionSize: "s",
                  })
                : void 0;
          }, [n.artists, k]),
          en = (0, r.useMemo)(() => {
            if (!n.isFavouritePlaylist)
              return (0, i.jsx)(y.dJ, {
                className: (0, o.W)(S().likeButton, S().control),
                isLiked: n.isLiked,
                onClick: Q,
                variant: "default",
                size: "s",
                iconSize: "xxs",
              });
          }, [Q, n.isFavouritePlaylist, n.isLiked]),
          ei = (0, r.useMemo)(
            () =>
              (0, i.jsx)(p.Paper, {
                className: S().cover,
                radius: "s",
                withShadow: !0,
                ...(0, u.BA)(u.bG.playlist.PLAYLIST_CARD),
                children: (0, i.jsxs)("div", {
                  className: S().coverBlock,
                  onClick: Z,
                  children: [
                    (0, i.jsx)(y.BE, {
                      className: S().image,
                      src: n.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: V,
                      withAvatarReplace: !0,
                      "aria-hidden": !0,
                    }),
                    (0, i.jsx)(_.kk, {
                      isVisible: M || G,
                      className: S().controls,
                      playControl: (0, i.jsx)(y.JM, {
                        className: (0, o.W)(S().playButton, S().control),
                        buttonVariant: "default",
                        withHover: !1,
                        iconSize: "xl",
                        variant: "filled",
                        onClick: X,
                        isPlaying: Y,
                        disabled: !n.isAvailable,
                      }),
                      likeControl: en,
                      menuControl: (0, i.jsx)(C, {
                        playlist: n,
                        onOpenChange: ee,
                        open: M,
                        returnFocus: !1,
                        reference: (0, i.jsx)(d.z, {
                          onClick: $,
                          className: (0, o.W)(S().menuButton, S().control),
                          "aria-label": R({
                            id: "interface-actions.context-menu",
                          }),
                          icon: (0, i.jsx)(v.J, {
                            size: "xxs",
                            variant: "more",
                          }),
                          size: "s",
                          radius: "round",
                          ...(0, u.BA)(
                            u.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                          ),
                        }),
                      }),
                      pinControl: (0, i.jsx)(y.RT, {
                        onClick: F,
                        isPinned: n.isPinned,
                        className: (0, o.W)(S().pinButton, S().control),
                        withRipple: !1,
                      }),
                    }),
                  ],
                }),
              }),
            [Z, n, V, M, G, X, Y, en, ee, $, R, F],
          ),
          eo = !!n.actualLikesCount && !n.isLikesCountHidden;
        return (0, i.jsxs)(_.m7, {
          ref: T,
          "aria-label": V,
          className: (0, o.W)(S().root, t),
          title: (0, i.jsx)(m.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            ...(0, u.BA)(u.bG.playlist.PLAYLIST_TITLE),
            children: (0, i.jsx)(y.rU, {
              className: S().titleLink,
              href: n.url,
              onClick: J,
              children: n.title,
            }),
          }),
          srTitle: (0, i.jsx)(y.rU, {
            href: n.url,
            onClick: J,
            children: n.title,
          }),
          "data-intersection-property-id": E,
          contentLinesCount: g,
          view: ei,
          description: et,
          ...(0, u.BA)(u.bG.playlist.PLAYLIST_ITEM),
          children: [
            eo &&
              (0, i.jsx)(y.DB, {
                ariaLabel: R(
                  { id: "entity-names.likes-counter" },
                  { counter: n.actualLikesCount },
                ),
                likesCount: n.actualLikesCount,
                isLiked: n.isLiked,
                handleLikeClick: z,
              }),
            a,
          ],
        });
      });
    },
    18921: function (e, t, n) {
      "use strict";
      n.d(t, {
        PlaylistsCarousel: function () {
          return l;
        },
      });
      var i = n(9753),
        o = n(98639),
        a = n(67868),
        r = n(22003);
      let s = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: n,
            isShimmerActive: o,
            title: s,
            description: l,
            playlists: u,
            containerClassName: c,
            className: d,
            headerClassName: _,
            viewAllActionLink: v,
            ...p
          } = e;
          return (0, i.jsx)(a.HY, {
            isShimmerVisible: n,
            isShimmerActive: o,
            className: d,
            headerClassName: _,
            containerClassName: c,
            ref: t,
            title: s,
            description: l,
            viewAllActionLink: v,
            ...p,
            children:
              null == u
                ? void 0
                : u.map((e) =>
                    (0, i.jsx)(
                      r.PlaylistCard,
                      { playlist: e, contentLinesCount: 3 },
                      e.key,
                    ),
                  ),
          });
        },
        l = (0, o.forwardRef)((e, t) => (0, i.jsx)(s, { forwardRef: t, ...e }));
    },
    91173: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return l;
        },
      });
      var i = n(9753),
        o = n(98639),
        a = n(87181),
        r = n(44367),
        s = n(80128);
      let l = () => {
        let { notify: e } = (0, r.d$)(),
          { sonataState: t, fullscreenPlayer: n } = (0, r.oR)(),
          l = (0, r.R$)();
        return (0, o.useCallback)(() => {
          if (null === t.entityMeta || !t.canChangeRepeatMode) return;
          let o = a.zq.NONE;
          switch (t.repeatMode) {
            case a.zq.NONE:
              o = a.zq.CONTEXT;
              break;
            case a.zq.CONTEXT:
              o = a.zq.ONE;
          }
          null == l || l.setRepeatMode(o),
            e((0, i.jsx)(s.NotificationRepeat, { repeatMode: o }), {
              containerId: n.modal.isOpened ? r.W$.FULLSCREEN_INFO : r.W$.INFO,
            });
        }, [
          n.modal.isOpened,
          e,
          l,
          t.canChangeRepeatMode,
          t.entityMeta,
          t.repeatMode,
        ]);
      };
    },
    16129: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return s;
        },
      });
      var i = n(9753),
        o = n(98639),
        a = n(44367),
        r = n(18143);
      let s = () => {
        let { notify: e } = (0, a.d$)(),
          { sonataState: t, fullscreenPlayer: n } = (0, a.oR)(),
          s = (0, a.R$)();
        return (0, o.useCallback)(() => {
          null !== t.entityMeta &&
            t.canShuffle &&
            (null == s || s.toggleShuffle(),
            e(
              (0, i.jsx)(r.NotificationShuffle, {
                shuffle: !!(null == s
                  ? void 0
                  : s.state.queueState.shuffle.value),
              }),
              {
                containerId: n.modal.isOpened
                  ? a.W$.FULLSCREEN_INFO
                  : a.W$.INFO,
              },
            ));
        }, [n.modal.isOpened, e, s, t.canShuffle, t.entityMeta]);
      };
    },
    80128: function (e, t, n) {
      "use strict";
      n.d(t, {
        NotificationRepeat: function () {
          return v;
        },
      });
      var i = n(9753),
        o = n(60836),
        a = n(98639),
        r = n(31014),
        s = n(87181),
        l = n(28852),
        u = n(2570),
        c = n(67868),
        d = n(15450),
        _ = n.n(d);
      let v = (e) => {
        let { repeatMode: t, closeToast: n } = e,
          d = t === s.zq.ONE ? "repeat_one" : "repeat",
          v = (0, a.useMemo)(() => {
            let e;
            switch (t) {
              case s.zq.CONTEXT:
                e = (0, i.jsx)(r.Z, {
                  id: "notifications-info.change-repeat-context",
                });
                break;
              case s.zq.ONE:
                e = (0, i.jsx)(r.Z, {
                  id: "notifications-info.change-repeat-track",
                });
                break;
              case s.zq.NONE:
              default:
                e = (0, i.jsx)(r.Z, {
                  id: "notifications-info.change-repeat-none",
                });
            }
            return (0, i.jsx)(u.Caption, {
              className: _().message,
              variant: "div",
              type: "controls",
              size: "m",
              children: e,
            });
          }, [t]);
        return (0, i.jsx)(c.Yj, {
          cover: (0, i.jsx)(l.J, {
            className: (0, o.W)(_().icon, {
              [_().icon_unset]: t === s.zq.NONE,
            }),
            size: "xs",
            variant: d,
          }),
          message: v,
          closeToast: n,
        });
      };
    },
    18143: function (e, t, n) {
      "use strict";
      n.d(t, {
        NotificationShuffle: function () {
          return _;
        },
      });
      var i = n(9753),
        o = n(60836),
        a = n(98639),
        r = n(31014),
        s = n(28852),
        l = n(2570),
        u = n(67868),
        c = n(54394),
        d = n.n(c);
      let _ = (e) => {
        let { shuffle: t, closeToast: n } = e,
          c = (0, a.useMemo)(() => {
            let e;
            return (
              (e = t
                ? (0, i.jsx)(r.Z, { id: "notifications-info.shuffle-enabled" })
                : (0, i.jsx)(r.Z, {
                    id: "notifications-info.shuffle-disabled",
                  })),
              (0, i.jsx)(l.Caption, {
                className: d().message,
                variant: "div",
                type: "controls",
                size: "m",
                children: e,
              })
            );
          }, [t]);
        return (0, i.jsx)(u.Yj, {
          cover: (0, i.jsx)(s.J, {
            className: (0, o.W)(d().icon, { [d().icon_unset]: !t }),
            size: "xs",
            variant: "shuffle",
          }),
          message: c,
          closeToast: n,
        });
      };
    },
    99331: function (e, t, n) {
      "use strict";
      n.d(t, {
        RepeatButton: function () {
          return m;
        },
      });
      var i = n(9753),
        o = n(60836),
        a = n(80542),
        r = n(23881),
        s = n(87181),
        l = n(39513),
        u = n(28852),
        c = n(91173),
        d = n(24749),
        _ = n.n(d);
      let v = (e, t, n) =>
          t(
            e === s.zq.NONE || n
              ? { id: "player-actions.repeat" }
              : e === s.zq.ONE
                ? { id: "player-actions.repeat-one" }
                : { id: "player-actions.repeat-context" },
          ),
        p = (e, t) =>
          e === s.zq.NONE || t
            ? r.bG.sonata.REPEAT_BUTTON_NO_REPEAT
            : e === s.zq.ONE
              ? r.bG.sonata.REPEAT_BUTTON_REPEAT_ONE
              : r.bG.sonata.REPEAT_BUTTON_REPEAT_CONTEXT,
        m = (e) => {
          let {
              isDisabled: t,
              repeatMode: n,
              className: d,
              iconClassName: m,
              size: h = "xxxs",
              iconSize: f = "xs",
              color: x,
              variant: y = "default",
            } = e,
            b = (0, c.t)(),
            { formatMessage: g } = (0, a.Z)(),
            C = t || n !== s.zq.ONE ? "repeat" : "repeat_one",
            k = v(n, g, t);
          return (0, i.jsx)(l.z, {
            className: d,
            radius: "round",
            size: h,
            variant: y,
            color: x,
            disabled: t,
            withRipple: !1,
            "aria-hidden": t,
            "aria-label": k,
            "aria-pressed": !t && n !== s.zq.NONE,
            onClick: b,
            icon: (0, i.jsx)(u.J, {
              size: f,
              variant: C,
              className: (0, o.W)(
                _().repeatIcon,
                _()["repeatIcon_".concat(n)],
                { [_().repeatIcon_disabled]: t },
                m,
              ),
            }),
            ...(0, r.BA)(p(n, t)),
          });
        };
    },
    94975: function (e, t, n) {
      "use strict";
      n.d(t, {
        ShuffleButton: function () {
          return _;
        },
      });
      var i = n(9753),
        o = n(60836),
        a = n(80542),
        r = n(23881),
        s = n(39513),
        l = n(28852),
        u = n(16129),
        c = n(24584),
        d = n.n(c);
      let _ = (e) => {
        let {
            isDisabled: t,
            shuffle: n,
            className: c,
            size: _ = "xxxs",
            variant: v = "default",
            iconSize: p = "xs",
            color: m,
          } = e,
          h = (0, u.m)(),
          { formatMessage: f } = (0, a.Z)();
        return (0, i.jsx)(s.z, {
          className: c,
          radius: "round",
          size: _,
          variant: v,
          color: m,
          withRipple: !1,
          disabled: t,
          "aria-label": f({ id: "player-actions.shuffle" }),
          "aria-pressed": !t && n,
          "aria-hidden": t,
          icon: (0, i.jsx)(l.J, {
            variant: "shuffle",
            size: p,
            className: (0, o.W)(d().shuffleIcon, {
              [d().shuffleIcon_disabled]: t,
              [d().shuffleIcon_on]: !t && n,
              [d().shuffleIcon_off]: !t && !n,
            }),
          }),
          onClick: h,
          ...(0, r.BA)(r.bG.sonata.SHUFFLE_BUTTON),
        });
      };
    },
    78457: function (e, t, n) {
      "use strict";
      n.d(t, {
        SonataControls: function () {
          return L;
        },
      });
      var i = n(9753),
        o = n(9544),
        a = n(98639),
        r = n(15419),
        s = n(44367),
        l = n(91173),
        u = n(16129),
        c = n(60836),
        d = n(80542),
        _ = n(23881),
        v = n(39513),
        p = n(28852),
        m = n(67868),
        h = n(99331),
        f = n(94975),
        x = n(13689),
        y = n.n(x);
      let b = (0, o.Pi)((e) => {
        let {
            disabled: t,
            isPlaying: n,
            repeatMode: o,
            canMoveForward: a,
            canMoveBackward: r,
            canShuffle: s,
            shuffle: l,
            onClickNext: u,
            onClickPrev: x,
            onClickPlayPause: b,
            canChangeRepeatMode: g,
            className: C,
          } = e,
          { formatMessage: k } = (0, d.Z)();
        return (0, i.jsxs)("div", {
          className: (0, c.W)(y().root, C),
          children: [
            (0, i.jsx)("div", {
              className: y().buttonContainer,
              children:
                (t || s) &&
                (0, i.jsx)(f.ShuffleButton, {
                  className: y().sonataButton,
                  size: "xxxs",
                  variant: "text",
                  iconSize: "xs",
                  isDisabled: t,
                  shuffle: l,
                  ...(0, _.BA)(_.bG.sonata.SHUFFLE_BUTTON),
                }),
            }),
            (0, i.jsxs)("div", {
              className: y().sonataButtons,
              children: [
                (0, i.jsx)(v.z, {
                  className: y().sonataButton,
                  variant: "text",
                  size: "m",
                  radius: "round",
                  "aria-hidden": !r,
                  disabled: !r,
                  withRipple: !1,
                  "aria-label": k({ id: "player-actions.previous-track" }),
                  icon: (0, i.jsx)(p.J, { variant: "previous" }),
                  onClick: x,
                  ...(0, _.BA)(_.bG.sonata.PREVIOUS_TRACK_BUTTON),
                }),
                (0, i.jsx)(m.JM, {
                  className: y().sonataButton,
                  iconSize: "l",
                  variant: "filled",
                  isPlaying: n,
                  iconClassName: y().playButtonIcon,
                  onClick: b,
                }),
                (0, i.jsx)(v.z, {
                  className: y().sonataButton,
                  radius: "round",
                  size: "m",
                  variant: "text",
                  disabled: !a,
                  "aria-hidden": !a,
                  withRipple: !1,
                  "aria-label": k({ id: "player-actions.next-track" }),
                  icon: (0, i.jsx)(p.J, { variant: "next" }),
                  onClick: u,
                  ...(0, _.BA)(_.bG.sonata.NEXT_TRACK_BUTTON),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: y().buttonContainer,
              children:
                (t || g) &&
                (0, i.jsx)(h.RepeatButton, {
                  className: y().sonataButton,
                  size: "xxxs",
                  variant: "text",
                  isDisabled: t,
                  iconSize: "xs",
                  repeatMode: o,
                }),
            }),
          ],
        });
      });
      var g = n(73069);
      let C = (e) => {
        let {
          disabled: t,
          isPlaying: n,
          onClickPlayPause: o,
          className: a,
        } = e;
        return (0, i.jsx)(g.PlayButton, {
          className: a,
          size: "s",
          disabled: t,
          isPlaying: n,
          onClick: o,
        });
      };
      var k = n(98014),
        S = n.n(k);
      let T = (0, o.Pi)((e) => {
        let {
            disabled: t,
            isPlaying: n,
            repeatMode: o,
            canMoveForward: a,
            canMoveBackward: r,
            canShuffle: s,
            onClickNext: l,
            onClickPrev: u,
            onClickPlayPause: x,
            canChangeRepeatMode: y,
            shuffle: b,
            className: g,
          } = e,
          { formatMessage: C } = (0, d.Z)();
        return (0, i.jsxs)("div", {
          className: (0, c.W)(S().root, g),
          children: [
            (0, i.jsx)("div", {
              className: S().buttonContainer,
              children:
                (t || s) &&
                (0, i.jsx)(f.ShuffleButton, {
                  className: S().sonataButton,
                  size: "s",
                  iconSize: "xxs",
                  color: "secondary",
                  isDisabled: t,
                  shuffle: b,
                  ...(0, _.BA)(_.bG.sonata.SHUFFLE_BUTTON),
                }),
            }),
            (0, i.jsxs)("div", {
              className: S().sonataButtons,
              children: [
                (0, i.jsx)(v.z, {
                  className: S().sonataButton,
                  color: "secondary",
                  size: "m",
                  radius: "round",
                  disabled: !r,
                  withRipple: !1,
                  "aria-label": C({ id: "player-actions.previous-track" }),
                  icon: (0, i.jsx)(p.J, { variant: "previous" }),
                  onClick: u,
                  ...(0, _.BA)(_.bG.sonata.PREVIOUS_TRACK_BUTTON),
                }),
                (0, i.jsx)(m.JM, {
                  className: S().sonataButton,
                  iconSize: "m",
                  size: "l",
                  radius: "round",
                  color: "secondary",
                  buttonVariant: "default",
                  isPlaying: n,
                  iconClassName: S().playPauseButtonIcon,
                  onClick: x,
                }),
                (0, i.jsx)(v.z, {
                  className: S().sonataButton,
                  radius: "round",
                  size: "m",
                  color: "secondary",
                  disabled: !a,
                  withRipple: !1,
                  "aria-label": C({ id: "player-actions.next-track" }),
                  icon: (0, i.jsx)(p.J, { variant: "next" }),
                  onClick: l,
                  ...(0, _.BA)(_.bG.sonata.NEXT_TRACK_BUTTON),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: S().buttonContainer,
              children:
                (t || y) &&
                (0, i.jsx)(h.RepeatButton, {
                  className: S().sonataButton,
                  size: "s",
                  color: "secondary",
                  isDisabled: t,
                  iconSize: "xxs",
                  repeatMode: o,
                }),
            }),
          ],
        });
      });
      var E = n(84338),
        N = n(77070),
        R = n(75731),
        j = n.n(R);
      let B = (0, o.Pi)((e) => {
          let {
              isPlaying: t,
              canMoveForward: n,
              canMoveBackward: o,
              onClickNext: r,
              onClickPrev: l,
              onClickPlayPause: u,
              className: _,
            } = e,
            { formatMessage: h } = (0, d.Z)(),
            { user: f, sonataState: x } = (0, s.oR)(),
            y = (0, s.XU)(),
            b = x.entityMeta,
            g = x.contextType === E.Ak.Generative,
            C = f.isAuthorized && !g,
            k = (0, N.SB)(x.entityMeta),
            S = (0, N.KX)(x.entityMeta);
          return (
            (0, a.useEffect)(() => {
              if (!x.isGenerativeContext)
                return (
                  null == y || y.addShortcutsListener(s.yx.LIKE, k),
                  null == y || y.addShortcutsListener(s.yx.DISLIKE, S),
                  () => {
                    null == y || y.removeShortcutsListener(s.yx.LIKE),
                      null == y || y.removeShortcutsListener(s.yx.DISLIKE);
                  }
                );
            }, [S, k, y, x.isGenerativeContext]),
            (0, i.jsxs)("div", {
              className: (0, c.W)(j().root, _),
              children: [
                (0, i.jsx)("div", {
                  className: j().buttonContainer,
                  children:
                    b &&
                    C &&
                    (0, i.jsx)(m.Q1, { isDisliked: b.isDisliked, onClick: S }),
                }),
                (0, i.jsxs)("div", {
                  className: j().sonataButtons,
                  children: [
                    (0, i.jsx)(v.z, {
                      className: j().sonataButton,
                      variant: "text",
                      color: "secondary",
                      size: "m",
                      radius: "round",
                      disabled: !o,
                      withRipple: !1,
                      "aria-label": h({ id: "player-actions.previous-track" }),
                      icon: (0, i.jsx)(p.J, { variant: "previous" }),
                      onClick: l,
                    }),
                    (0, i.jsx)(m.JM, {
                      className: j().sonataButton,
                      iconSize: "xxl",
                      variant: "filled",
                      color: "secondary",
                      isPlaying: t,
                      iconClassName: j().playPauseButtonIcon,
                      onClick: u,
                    }),
                    (0, i.jsx)(v.z, {
                      className: j().sonataButton,
                      variant: "text",
                      radius: "round",
                      size: "m",
                      color: "secondary",
                      disabled: !n,
                      withRipple: !1,
                      "aria-label": h({ id: "player-actions.next-track" }),
                      icon: (0, i.jsx)(p.J, { variant: "next" }),
                      onClick: r,
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: j().buttonContainer,
                  children:
                    b &&
                    C &&
                    (0, i.jsx)(m.dJ, { isLiked: b.isLiked, onClick: k }),
                }),
              ],
            })
          );
        }),
        L = (0, o.Pi)((e) => {
          var t, n;
          let { isMobile: o, entityMeta: c, isFullscreen: d, className: _ } = e,
            { sonataState: v, vibe: p } = (0, s.oR)(),
            m = (0, s.XU)(),
            h = (0, s.R$)(),
            { togglePlay: f } = (0, s.Qh)({
              seeds:
                null !==
                  (n =
                    null === (t = p.meta) || void 0 === t ? void 0 : t.seeds) &&
                void 0 !== n
                  ? n
                  : [],
              pageIdForFrom: s.Rh.HOME,
              blockIdForFrom: s.BE.RUP_MAIN_RADIO,
            }),
            x = (0, a.useMemo)(
              () =>
                [
                  r.Xz.PLAYING,
                  r.Xz.LOADING_MEDIA_SOURCE,
                  r.Xz.LOADING_MEDIA_DATA,
                ].includes(v.status),
              [v.status],
            ),
            y = (0, a.useCallback)(() => {
              c ? null == h || h.togglePause() : f();
            }, [c, h, f]),
            g = (0, a.useCallback)(() => {
              null == h || h.moveForward();
            }, [h]),
            k = (0, a.useCallback)(() => {
              null == h || h.moveBackward();
            }, [h]),
            S = (0, u.m)(),
            E = (0, l.t)();
          (0, a.useEffect)(() => {
            if (!d)
              return (
                null == m || m.addShortcutsListener(s.yx.TOGGLE_PLAY, y),
                null == m || m.addShortcutsListener(s.yx.TOGGLE_REPEAT, E),
                null == m || m.addShortcutsListener(s.yx.TOGGLE_SHUFFLE, S),
                () => {
                  null == m || m.removeShortcutsListener(s.yx.TOGGLE_PLAY),
                    null == m || m.removeShortcutsListener(s.yx.TOGGLE_SHUFFLE),
                    null == m || m.removeShortcutsListener(s.yx.TOGGLE_REPEAT);
                }
              );
          }, [d, y, E, S, m]);
          let N = (0, a.useMemo)(() => (d ? (o ? B : T) : o ? C : b), [o, d]);
          return (0, i.jsx)(N, {
            className: _,
            disabled: null === v.entityMeta,
            isPlaying: x,
            canMoveBackward: v.canMoveBackward,
            canMoveForward: v.canMoveForward,
            canShuffle: v.canShuffle,
            shuffle: v.shuffle,
            onClickPlayPause: y,
            onClickNext: g,
            onClickPrev: k,
            canChangeRepeatMode: v.canChangeRepeatMode,
            repeatMode: v.repeatMode,
          });
        });
    },
    27097: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return h;
        },
        C: function () {
          return f;
        },
      });
      var i = n(9753),
        o = n(9544),
        a = n(98639),
        r = n(23881),
        s = n(84338),
        l = n(78507),
        u = n(15419),
        c = n(53367),
        d = n(44367);
      let _ = (e) => {
        var t, n;
        let [i, o] = (0, a.useState)({}),
          { sonataState: r } = (0, d.oR)();
        (0, a.useEffect)(() => {
          if (r.contextType === s.Ak.Vibe) {
            var t, n, a, l;
            i.id ===
              (null === (t = r.entityMeta) || void 0 === t ? void 0 : t.id) &&
              !i.isLiked &&
              (null === (l = r.entityMeta) || void 0 === l
                ? void 0
                : l.isLiked) &&
              e(),
              o({
                id: null === (n = r.entityMeta) || void 0 === n ? void 0 : n.id,
                isLiked:
                  null === (a = r.entityMeta) || void 0 === a
                    ? void 0
                    : a.isLiked,
              });
          }
        }, [
          r.contextType,
          null === (t = r.entityMeta) || void 0 === t ? void 0 : t.id,
          null === (n = r.entityMeta) || void 0 === n ? void 0 : n.isLiked,
          i.id,
          i.isLiked,
          e,
        ]);
      };
      var v = n(11799),
        p = n.n(v);
      let m = "vibe-animation",
        h = (0, o.Pi)((e) => {
          var t, n, o, v, h, f, x;
          let { className: y } = e,
            b = (0, a.useRef)(null),
            g = (0, a.useRef)(null),
            { isIntersecting: C } =
              null !== (x = (0, l.S1)([b])[m]) && void 0 !== x ? x : {},
            { sonataState: k, user: S } = (0, d.oR)(),
            { theme: T } = (0, d.Fg)(),
            E = (0, d.jp)(),
            N = k.status === u.Xz.PLAYING && k.contextType === s.Ak.Vibe;
          return (
            (0, a.useEffect)(() => {
              if (b.current) {
                var e, t;
                let n =
                    null === (t = k.entityMeta) || void 0 === t
                      ? void 0
                      : null === (e = t.trackParameters) || void 0 === e
                        ? void 0
                        : e.hue,
                  i = S.collectionHue;
                (g.current = new c.dr(
                  b.current,
                  null == E ? void 0 : E.analyser,
                  i,
                )),
                  g.current.applySettings({ hue: n, collectionHue: i }),
                  b.current.classList.add(p().root_visible);
              }
              return () => {
                var e;
                null === (e = g.current) || void 0 === e || e.destroy();
              };
            }, []),
            (0, a.useEffect)(() => {
              var e, t, n, i, o, a, r, s;
              let l =
                  null === (t = k.entityMeta) || void 0 === t
                    ? void 0
                    : null === (e = t.trackParameters) || void 0 === e
                      ? void 0
                      : e.hue,
                u =
                  null === (i = k.entityMeta) || void 0 === i
                    ? void 0
                    : null === (n = i.trackParameters) || void 0 === n
                      ? void 0
                      : n.energy,
                c =
                  null === (a = k.entityMeta) || void 0 === a
                    ? void 0
                    : null === (o = a.trackParameters) || void 0 === o
                      ? void 0
                      : o.userCollectionHue;
              c && S.setUserCollectionHue(c),
                N
                  ? null === (r = g.current) ||
                    void 0 === r ||
                    r.playAnimation({ hue: l, collectionHue: c, energy: u })
                  : null === (s = g.current) ||
                    void 0 === s ||
                    s.idleAnimation();
            }, [
              S,
              N,
              null === (n = k.entityMeta) || void 0 === n
                ? void 0
                : null === (t = n.trackParameters) || void 0 === t
                  ? void 0
                  : t.hue,
              null === (v = k.entityMeta) || void 0 === v
                ? void 0
                : null === (o = v.trackParameters) || void 0 === o
                  ? void 0
                  : o.energy,
              null === (f = k.entityMeta) || void 0 === f
                ? void 0
                : null === (h = f.trackParameters) || void 0 === h
                  ? void 0
                  : h.userCollectionHue,
            ]),
            (0, a.useEffect)(() => {
              var e;
              let t = T === d.Q2.Dark ? 0.0705 : 0.9607;
              null === (e = g.current) ||
                void 0 === e ||
                e.applySettings({ backgroundColor: t });
            }, [T]),
            (0, a.useEffect)(() => {
              if (g.current) {
                var e, t;
                C
                  ? null === (e = g.current) ||
                    void 0 === e ||
                    e.enableRender(c.nT.BLOCK_VISIBILITY)
                  : null === (t = g.current) ||
                    void 0 === t ||
                    t.disableRender(c.nT.BLOCK_VISIBILITY);
              }
            }, [C]),
            _(
              (0, a.useCallback)(() => {
                var e;
                null === (e = g.current) || void 0 === e || e.likeAnimation();
              }, []),
            ),
            (0, i.jsx)("div", {
              className: y,
              "data-intersection-property-id": m,
              ref: b,
              ...(0, r.BA)(r.bG.vibeAnimation.VIBE_ANIMATION),
            })
          );
        }),
        f = (e) => {
          let t = (0, c.wX)((0, c.kB)(e), c.UE, c.TP),
            n = Math.round(255 * t[0]),
            i = Math.round(255 * t[1]),
            o = Math.round(255 * t[2]);
          return "rgb(".concat(n, ", ").concat(i, ", ").concat(o, ")");
        };
    },
    68106: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return i.SomethingWentWrong;
        },
      });
      var i = n(18723);
    },
    18723: function (e, t, n) {
      "use strict";
      n.d(t, {
        SomethingWentWrong: function () {
          return m;
        },
      });
      var i = n(9753),
        o = n(60836),
        a = n(9544),
        r = n(98639),
        s = n(31014),
        l = n(39513),
        u = n(28852),
        c = n(2570),
        d = n(55784),
        _ = n(44367),
        v = n(88178),
        p = n.n(v);
      let m = (0, a.Pi)((e) => {
        let { className: t, withBackwardControl: n = !0 } = e,
          a = (0, r.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: v } = (0, _.$Y)();
        return (0, i.jsxs)("div", {
          className: (0, o.W)(p().root, t),
          children: [
            n &&
              (0, i.jsx)(d.n, {
                withBackwardFallback: "/",
                className: (0, o.W)(p().navigation, {
                  [p().navigation_desktop]: !v,
                }),
                withForwardControl: !1,
              }),
            (0, i.jsxs)("div", {
              className: (0, o.W)(p().content, { [p().content_shrink]: !n }),
              children: [
                (0, i.jsx)(u.J, {
                  className: p().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, i.jsx)(c.Heading, {
                  className: (0, o.W)(p().title, p().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, i.jsx)(s.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, i.jsxs)(c.Caption, {
                  className: (0, o.W)(p().text, p().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, i.jsx)(s.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, i.jsx)(l.z, {
                  onClick: a,
                  className: p().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, i.jsxs)(c.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: [
                      !1,
                      (0, i.jsx)(s.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    6494: function (e) {
      e.exports = {
        root: "DefaultLayout_root__7J0wo",
        root_applicationPreserveTitleBar:
          "DefaultLayout_root_applicationPreserveTitleBar__ygJtq",
        root_withBarBelow: "DefaultLayout_root_withBarBelow__jPsaV",
        content: "DefaultLayout_content__md70Z",
        content_withPlayerBar: "DefaultLayout_content_withPlayerBar__9uFJT",
        notificationErrorContainer:
          "DefaultLayout_notificationErrorContainer__Qz_mD",
        notificationInfoContainer:
          "DefaultLayout_notificationInfoContainer__tKt7J",
        navbar: "DefaultLayout_navbar__LIQWG",
        navbar_application_macos:
          "DefaultLayout_navbar_application_macos__9dj3u",
        navbar_application_windows:
          "DefaultLayout_navbar_application_windows__3hDQ_",
        playerBar: "DefaultLayout_playerBar___9IaS",
        barBelow: "DefaultLayout_barBelow__y6PFU",
      };
    },
    70010: function (e) {
      e.exports = {
        root: "VibeButton_root___i3R5",
        ripple: "VibeButton_ripple__cmoBR",
        textContainer: "VibeButton_textContainer__j9nOW",
        titleContainer: "VibeButton_titleContainer__yrRRu",
        title: "VibeButton_title__sLC0I",
        subtitle: "VibeButton_subtitle__MQ_Ca",
        image: "VibeButton_image__GOwKJ",
        button: "VibeButton_button__tXFAm",
        button_loading: "VibeButton_button_loading__LYnUR",
        "applying-setting": "VibeButton_applying-setting__Jd_3C",
        icon: "VibeButton_icon__KIv7n",
      };
    },
    55215: function (e) {
      e.exports = {
        root: "VibeCard_root__9TDjP",
        playingAnimation: "VibeCard_playingAnimation__iRgvh",
        cover: "VibeCard_cover__LbX93",
        image: "VibeCard_image__luolD",
        controls: "VibeCard_controls__CcEVx",
        controls_isPlaying: "VibeCard_controls_isPlaying__1_Ass",
        important: "VibeCard_important__WPWqc",
        control: "VibeCard_control__SM3H4",
        playControl: "VibeCard_playControl__pZxq5",
        playButton: "VibeCard_playButton__LWepP",
      };
    },
    98746: function (e) {
      e.exports = {
        root: "EmptyPlaylistBlock_root__wpA0j",
        iconBackground: "EmptyPlaylistBlock_iconBackground__pnUlz",
        title: "EmptyPlaylistBlock_title__pQQLf",
        subtitle: "EmptyPlaylistBlock_subtitle__P4Q7x",
      };
    },
    88308: function (e) {
      e.exports = {
        root: "PlaylistCard_root__i3pR4",
        controls: "PlaylistCard_controls__Ej8Rz",
        cover: "PlaylistCard_cover__tpK5L",
        coverBlock: "PlaylistCard_coverBlock__1slsN",
        image: "PlaylistCard_image__Li6oy",
        titleLink: "PlaylistCard_titleLink__H8qEc",
        artists: "PlaylistCard_artists__HtVIF",
        artistLink: "PlaylistCard_artistLink__jx3KB",
        playButton: "PlaylistCard_playButton__eaduk",
        likeButton: "PlaylistCard_likeButton__RYXJz",
        menuButton: "PlaylistCard_menuButton__jFcWr",
        pinButton: "PlaylistCard_pinButton__jhWnL",
        control: "PlaylistCard_control__73YUq",
      };
    },
    15450: function (e) {
      e.exports = {
        icon: "NotificationRepeat_icon__TjQ9H",
        message: "NotificationRepeat_message__IeQXU",
        icon_unset: "NotificationRepeat_icon_unset__Dr5iH",
      };
    },
    54394: function (e) {
      e.exports = {
        icon: "NotificationShuffle_icon__lIKky",
        message: "NotificationShuffle_message___Tpxo",
        icon_unset: "NotificationShuffle_icon_unset__VTrhj",
      };
    },
    24749: function (e) {
      e.exports = {
        repeatIcon_none: "RepeatButton_repeatIcon_none__GQOWG",
        repeatIcon_context: "RepeatButton_repeatIcon_context__HRK2F",
        repeatIcon_one: "RepeatButton_repeatIcon_one__vVtqR",
        repeatIcon_disabled: "RepeatButton_repeatIcon_disabled__PYLys",
      };
    },
    24584: function (e) {
      e.exports = {
        shuffleIcon_off: "ShuffleButton_shuffleIcon_off__PWssl",
        shuffleIcon_on: "ShuffleButton_shuffleIcon_on__3B_Rm",
        shuffleIcon_disabled: "ShuffleButton_shuffleIcon_disabled__vT_hB",
      };
    },
    13689: function (e) {
      e.exports = {
        root: "SonataControlsDesktop_root__oluUH",
        sonataButtons: "SonataControlsDesktop_sonataButtons__ux0qT",
        sonataButton: "SonataControlsDesktop_sonataButton__FTykq",
        playButtonIcon: "SonataControlsDesktop_playButtonIcon__BgNUF",
        buttonContainer: "SonataControlsDesktop_buttonContainer__PczhH",
      };
    },
    98014: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsDesktop_root__l4a2W",
        sonataButtons: "SonataFullscreenControlsDesktop_sonataButtons__BNse_",
        sonataButton: "SonataFullscreenControlsDesktop_sonataButton__qmSTF",
        playPauseButtonIcon:
          "SonataFullscreenControlsDesktop_playPauseButtonIcon__nD8zZ",
        buttonContainer:
          "SonataFullscreenControlsDesktop_buttonContainer__mkxBw",
      };
    },
    75731: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsMobile_root__lsmD7",
        sonataButtons: "SonataFullscreenControlsMobile_sonataButtons__PkHh6",
        sonataButton: "SonataFullscreenControlsMobile_sonataButton__2P1xg",
        playPauseButtonIcon:
          "SonataFullscreenControlsMobile_playPauseButtonIcon__veX3T",
        buttonContainer:
          "SonataFullscreenControlsMobile_buttonContainer__JavFn",
      };
    },
    11799: function (e) {
      e.exports = {
        root_visible: "VibeAnimation_root_visible__S7kXl",
        "fade-in": "VibeAnimation_fade-in__hx6bD",
      };
    },
    3924: function (e) {
      e.exports = {
        rootOld: "Content_rootOld__g85_m",
        root: "Content_root__IsH8s",
        primary: "Content_primary__dInSS",
        primary_isMobile: "Content_primary_isMobile__ApDi2",
        primary_short: "Content_primary_short__TSM3L",
        secondary: "Content_secondary__tGLLS",
        secondary_isMobile: "Content_secondary_isMobile__CbF7M",
        secondaryEnter: "Content_secondaryEnter__Nsp_f",
        secondaryEnterActive: "Content_secondaryEnterActive__Ks_PK",
        secondaryExit: "Content_secondaryExit__m4gOK",
        secondaryExitActive: "Content_secondaryExitActive__miNnR",
      };
    },
    81829: function (e) {
      e.exports = {
        root: "TrackModalDesktop_root__GB2Y3",
        root_withFullscreen: "TrackModalDesktop_root_withFullscreen__17XCc",
        root_withWindows: "TrackModalDesktop_root_withWindows__72ONf",
        header: "TrackModalDesktop_header__rF7X4",
        modalContent: "TrackModalDesktop_modalContent__mc2tL",
        infoBlock: "TrackModalDesktop_infoBlock__YQv3l",
        infoTitle: "TrackModalDesktop_infoTitle__KWsVO",
        link: "TrackModalDesktop_link__9BLEf",
        explicitMark: "TrackModalDesktop_explicitMark__QW2n_",
        version: "TrackModalDesktop_version___3Lb6",
        explicit: "TrackModalDesktop_explicit__bzKYo",
        content: "TrackModalDesktop_content__seXQ5",
        artistLink: "TrackModalDesktop_artistLink__PRr3M",
        artists: "TrackModalDesktop_artists__SU8pt",
        important: "TrackModalDesktop_important__6JUV2",
        overlay: "TrackModalDesktop_overlay__HY_wm",
        textShimmer: "TrackModalDesktop_textShimmer__sBj6W",
        text: "TrackModalDesktop_text__Q2szJ",
      };
    },
    88178: function (e) {
      e.exports = {
        root: "SomethingWentWrong_root__d77VJ",
        content: "SomethingWentWrong_content__8_YkJ",
        content_shrink: "SomethingWentWrong_content_shrink__GOR_7",
        navigation: "SomethingWentWrong_navigation__a8eMG",
        navigation_desktop: "SomethingWentWrong_navigation_desktop__WGGBX",
        icon: "SomethingWentWrong_icon__f15_y",
        title: "SomethingWentWrong_title__Kn89B",
        important: "SomethingWentWrong_important__namIb",
        text: "SomethingWentWrong_text__KEfGc",
        button: "SomethingWentWrong_button__dmh7t",
      };
    },
  },
]);

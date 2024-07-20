(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9057],
  {
    28578: function (t, e, n) {
      Promise.resolve().then(n.bind(n, 49154));
    },
    49154: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n(9753),
        o = n(74717),
        r = n(98639),
        s = n(23976);
      e.default = () => {
        let t = (0, o.useSearchParams)().get("promoId");
        return (
          t || (0, o.notFound)(),
          (0, i.jsx)(r.Suspense, { children: (0, i.jsx)(s.s6, { promoId: t }) })
        );
      };
    },
    87908: function (t, e, n) {
      "use strict";
      n.d(e, {
        IT: function () {
          return s.ArtistCard;
        },
        xG: function () {
          return a.ArtistContextMenu;
        },
        o9: function () {
          return r;
        },
        Op: function () {
          return l;
        },
        v2: function () {
          return u.useArtistDisclaimer;
        },
      });
      var i = n(42288),
        o = n(33589);
      let r = i.V5.model("ArtistMeta", {
        artist: o.Go,
        lastMonthListeners: i.V5.maybe(i.V5.number),
      });
      var s = n(99654),
        a = n(54864);
      let l = function () {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = t.reduce((t, e) => {
            var n, i;
            return (
              t +
              (null !==
                (i =
                  null === (n = e.decomposed) || void 0 === n
                    ? void 0
                    : n.length) && void 0 !== i
                ? i
                : 0)
            );
          }, 0);
        return t.length + e;
      };
      var u = n(66975);
    },
    66975: function (t, e, n) {
      "use strict";
      n.d(e, {
        useArtistDisclaimer: function () {
          return s;
        },
      });
      var i = n(98639),
        o = n(3429),
        r = n(63394);
      let s = (t) => {
        let { artist: e, callback: n, shouldHistoryBack: s } = t,
          {
            disclaimer: a,
            modals: { disclaimerModal: l },
          } = (0, r.oR)(),
          u = (0, i.useRef)(String((0, o.Z)())),
          c = (0, i.useRef)(!1),
          d = (0, r.uK)().get(r.ce);
        return (
          (0, i.useEffect)(() => {
            a.isUnsafeDisclaimerConfirmed &&
              a.id === u.current &&
              !c.current &&
              (null == n || n(), (c.current = !0));
          }, [n, a.id, a.isUnsafeDisclaimerConfirmed]),
          (0, i.useCallback)(
            async (t) => {
              let i = d.get(r.BU.ExEx);
              if (
                (null == e ? void 0 : e.isUnsafeLegal) &&
                (null == i
                  ? void 0
                  : i.includes("".concat(r.co.ARTIST, "_").concat(e.id)))
              ) {
                null == n || n();
                return;
              }
              if (
                (null == e ? void 0 : e.isLegalRejected) ||
                (null == e ? void 0 : e.isUnsafeLegal)
              ) {
                null == t || t.preventDefault(),
                  await a.getArtistDisclaimer({ artistId: e.id }),
                  e.isUnsafeLegal && a.setType(r.Gq.UNSAFE),
                  a.setId(u.current),
                  a.setEntityId(e.id),
                  a.setEntityType(r.co.ARTIST),
                  a.setShouldHistoryBack(!!s),
                  (c.current = !1),
                  l.open();
                return;
              }
              null == n || n();
            },
            [
              null == e ? void 0 : e.id,
              null == e ? void 0 : e.isLegalRejected,
              null == e ? void 0 : e.isUnsafeLegal,
              n,
              a,
              l,
              d,
              s,
            ],
          )
        );
      };
    },
    99654: function (t, e, n) {
      "use strict";
      n.d(e, {
        ArtistCard: function () {
          return S;
        },
      });
      var i = n(9753),
        o = n(60836),
        r = n(9544),
        s = n(98639),
        a = n(80542),
        l = n(31014),
        u = n(52122),
        c = n(23881),
        d = n(84338),
        m = n(39513),
        _ = n(27491),
        p = n(28852),
        x = n(12404),
        v = n(2570),
        g = n(33589),
        h = n(63394),
        f = n(67868),
        b = n(66975),
        C = n(54864),
        N = n(62914),
        j = n.n(N);
      let S = (0, r.Pi)((t) => {
        let { artist: e, className: n, children: r, contentLinesCount: N } = t,
          { ref: S, intersectionPropertyId: y } = (0, h.Vf)(),
          k = (0, h.x5)(),
          { formatMessage: T } = (0, a.Z)(),
          [P, A] = (0, s.useState)(!1),
          [E, W] = (0, s.useState)(!1),
          [L, B] = (0, s.useState)(!1),
          {
            sendLikeSearchFeedback: I,
            sendNavigateSearchFeedback: w,
            sendPlaySearchFeedback: G,
          } = (0, h.sA)(),
          F = (0, h.zx)(),
          R = (0, g.SB)(e),
          z = (0, g.BV)(e),
          { id: D, name: V, coverUri: U, isLiked: M } = e,
          O = (0, h.s0)(e.url),
          [Z, q] = (0, s.useState)(!1),
          J = (0, s.useMemo)(() => {
            let t = T({ id: "entity-names.artist-name" }, { artistName: V }),
              e = M ? T({ id: "entity-names.has-your-like" }) : "";
            return "".concat(t, " ").concat(e);
          }, [V, M, T]),
          { isPlaying: H, togglePlay: X } = (0, h.qm)({
            playContextParams: {
              contextData: {
                type: d.Ak.Artist,
                meta: { id: Number(D) },
                from: k,
              },
              loadContextMeta: !0,
            },
          }),
          K = (0, b.useArtistDisclaimer)({ artist: e, callback: O }),
          Y = (0, b.useArtistDisclaimer)({ artist: e, callback: X }),
          Q = (0, s.useCallback)(
            (t) => {
              null == w || w(), F({ to: u.qU.ArtistScreen }), K(t);
            },
            [F, w, K],
          ),
          $ = (0, s.useCallback)(
            (t) => {
              Q(t);
            },
            [Q],
          ),
          tt = (0, s.useCallback)(() => {
            P || H || (A(!0), null == G || G()), Y();
          }, [H, P, G, Y]),
          te = (0, s.useCallback)(() => {
            E || M || (W(!0), null == I || I()), R();
          }, [M, R, E, I]),
          tn = (0, s.useCallback)((t) => {
            t.preventDefault(), t.stopPropagation();
          }, []),
          ti = (0, s.useCallback)(() => {
            B(!L), q(!L);
          }, [L]),
          to = (0, s.useMemo)(
            () =>
              (0, i.jsx)(C.ArtistContextMenu, {
                artist: e,
                onOpenChange: ti,
                open: L,
                returnFocus: !1,
                reference: (0, i.jsx)(m.z, {
                  onClick: tn,
                  className: (0, o.W)(j().menuButton, j().control),
                  "aria-label": T({ id: "interface-actions.context-menu" }),
                  icon: (0, i.jsx)(p.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  radius: "round",
                  ...(0, c.BA)(c.bG.artist.ARTIST_CONTEXT_MENU_BUTTON),
                }),
              }),
            [e, T, tn, ti, L],
          ),
          tr = (0, s.useMemo)(() => {
            if (e.isAvailable)
              return (0, i.jsx)(_.kk, {
                isVisible: L || Z,
                className: j().controls,
                radius: "round",
                playControl: (0, i.jsx)(f.JM, {
                  buttonVariant: "default",
                  withHover: !1,
                  className: (0, o.W)(j().playButton, j().control),
                  iconSize: "xl",
                  variant: "filled",
                  onClick: tt,
                  isPlaying: H,
                  disabled: !e.isAvailableForPlaying,
                }),
                likeControl: (0, i.jsx)(f.dJ, {
                  className: (0, o.W)(j().likeButton, j().control),
                  isLiked: M,
                  onClick: te,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                }),
                menuControl: to,
                pinControl: (0, i.jsx)(f.RT, {
                  onClick: z,
                  isPinned: e.isPinned,
                  className: (0, o.W)(j().pinButton, j().control),
                  withRipple: !1,
                }),
              });
          }, [
            e.isAvailable,
            e.isAvailableForPlaying,
            to,
            te,
            tt,
            L,
            Z,
            M,
            H,
            e.isPinned,
            z,
          ]),
          ts = (0, s.useMemo)(
            () =>
              (0, i.jsx)(x.Paper, {
                className: j().cover,
                radius: "round",
                withShadow: !0,
                ...(0, c.BA)(c.bG.artist.ARTIST_CARD),
                children: (0, i.jsxs)("div", {
                  className: j().coverBlock,
                  onClick: $,
                  children: [
                    (0, i.jsx)(f.BE, {
                      className: j().image,
                      src: U,
                      size: 200,
                      fit: "cover",
                      alt: J,
                      withAvatarReplace: !0,
                      isAvailable: e.isAvailable,
                      "aria-hidden": !0,
                    }),
                    tr,
                  ],
                }),
              }),
            [$, U, J, e.isAvailable, tr],
          );
        return (0, i.jsx)(_.m7, {
          ref: S,
          className: (0, o.W)(j().root, n),
          textPosition: "center",
          "aria-label": J,
          title: (0, i.jsx)(v.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: (0, i.jsx)(f.rU, {
              className: j().titleLink,
              href: e.url,
              "aria-label": J,
              onClick: Q,
              ...(0, c.BA)(c.bG.artist.ARTIST_TITLE),
              children: V,
            }),
          }),
          srTitle: (0, i.jsx)(f.rU, { href: e.url, onClick: Q, children: J }),
          "data-intersection-property-id": y,
          description: (0, i.jsx)(v.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            ...(0, c.BA)(c.bG.artist.ARTIST_SUBTITLE),
            children: (0, i.jsx)(l.Z, { id: "entity-names.singer" }),
          }),
          contentLinesCount: N,
          view: ts,
          ...(0, c.BA)(c.bG.artist.ARTIST_ITEM),
          children: r,
        });
      });
    },
    54864: function (t, e, n) {
      "use strict";
      n.d(e, {
        ArtistContextMenu: function () {
          return c;
        },
      });
      var i = n(9753),
        o = n(9544),
        r = n(98639),
        s = n(385),
        a = n(33589),
        l = n(63394),
        u = n(67868);
      let c = (0, o.Pi)((t) => {
        var e, n;
        let {
            artist: o,
            lastMonthListeners: c,
            reference: d,
            onOpenChange: m,
            open: _,
            returnFocus: p,
          } = t,
          { settings: x, experiments: v, trailer: g } = (0, l.oR)(),
          h = (0, a.BV)(o),
          f = (0, a.SB)(o),
          b = "".concat(l.aU.ARTIST, "-").concat(null == o ? void 0 : o.id),
          C = x.layout === l.t8.Mobile,
          N =
            v.checkExperiment(l.pe.WebNextEntityTrailer, "on") &&
            true &&
            (null == o ? void 0 : o.hasTrailer),
          { href: j } = (0, l.qK)(
            null !== (e = null == o ? void 0 : o.url) && void 0 !== e ? e : "",
          ),
          { isPlaying: S, togglePlay: y } = (0, l.Qh)({
            seeds:
              null !== (n = null == o ? void 0 : o.seeds) && void 0 !== n
                ? n
                : [],
            pageIdForFrom: l.Rh.RADIO,
            blockIdForFrom: b,
          }),
          k = (0, r.useCallback)(() => {
            S || y();
          }, [S, y]),
          T = (0, r.useCallback)(() => {
            (null == o ? void 0 : o.id) &&
              g.openArtistTrailer(null == o ? void 0 : o.id);
          }, [null == o ? void 0 : o.id, g]);
        return (
          (0, l.ZP)(_),
          (0, i.jsxs)(s.v2, {
            reference: d,
            isMobile: C,
            title: null == o ? void 0 : o.name,
            description: c,
            offsetOptions: 10,
            open: _,
            onOpenChange: m,
            returnFocus: p,
            children: [
              !C &&
                (0, i.jsx)(u.Zd, {
                  onClick: h,
                  isPinned: null == o ? void 0 : o.isPinned,
                }),
              (0, i.jsx)(u.xZ, {
                onClick: f,
                isLiked: null == o ? void 0 : o.isLiked,
                disabled: !(null == o ? void 0 : o.isAvailable),
              }),
              N && (0, i.jsx)(u.NB, { onClick: T }),
              (0, i.jsx)(u.GQ, {
                onClick: k,
                disabled: !(null == o ? void 0 : o.isAvailable),
                variant: "artist",
              }),
              (0, i.jsx)(u.zq, {
                disabled: !o,
                shareLink: j,
                entityVariant: "artist",
                entityTitle: null == o ? void 0 : o.name,
              }),
            ],
          })
        );
      });
    },
    5293: function (t, e, n) {
      "use strict";
      n.d(e, {
        I7: function () {
          return x;
        },
        b4: function () {
          return a;
        },
        at: function () {
          return g;
        },
        zU: function () {
          return v;
        },
      });
      var i = n(9753),
        o = n(98639),
        r = n.t(o, 2),
        s = n(67868);
      let a = (t) => {
        let { children: e, title: n, className: r } = t,
          { setTitleElement: a, setTitle: l } = (0, o.useContext)(s.pI),
          u = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            (null == u ? void 0 : u.current) && a(u), n && l(n);
          }, [u, n, a, l]),
          (0, o.useEffect)(
            () => () => {
              l("");
            },
            [l],
          ),
          (0, i.jsx)("div", { ref: u, className: r, children: e })
        );
      };
      var l = n(9544),
        u = {
          810: (t) => {
            t.exports = r;
          },
        },
        c = {},
        d = {};
      (() => {
        Object.defineProperty(d, "__esModule", { value: !0 }),
          (d.useScroll = void 0);
        let t = (function t(e) {
          var n = c[e];
          if (void 0 !== n) return n.exports;
          var i = (c[e] = { exports: {} });
          return u[e](i, i.exports, t), i.exports;
        })(810);
        d.useScroll = (e) => {
          (0, t.useEffect)(
            () => (
              window.addEventListener("scroll", e, {
                capture: !0,
                passive: !0,
              }),
              () => {
                window.removeEventListener("scroll", e);
              }
            ),
            [e],
          );
        };
      })(),
        d.__esModule;
      var m = d.useScroll,
        _ = n(63394);
      let p = (t) => {
          let { element: e, scrollTop: n, isMobile: i } = t,
            o = 0.4 * e.clientHeight;
          return n + (i ? 56 : 72) >= e.offsetTop + o;
        },
        x = (0, l.Pi)((t) => {
          let {
              children: e,
              scrollElement: n,
              outerTitle: r = "",
              headerElement: a,
              headerThreshold: l,
            } = t,
            [u, c] = (0, o.useState)(r),
            [d, x] = (0, o.useState)(null),
            [v, g] = (0, o.useState)(!1),
            [h, f] = (0, o.useState)(!1),
            { settings: b } = (0, _.oR)(),
            C = b.layout === _.t8.Mobile;
          (0, o.useLayoutEffect)(() => {
            c(r);
          }, [r]);
          let N = (0, o.useCallback)(() => {
            if (!n) return;
            let t = null != l ? l : 10,
              e = a ? Number(a.offsetTop) - t : t;
            e < 0 && (e = 0),
              f(n.scrollTop > e),
              (null == d ? void 0 : d.current) &&
                g(
                  p({
                    element: null == d ? void 0 : d.current,
                    scrollTop: n.scrollTop,
                    isMobile: C,
                  }),
                );
          }, [n, l, a, d, C]);
          (0, o.useEffect)(() => {
            (null == n ? void 0 : n.scrollTop) === 0 && f(!1);
          }, [null == n ? void 0 : n.scrollTop]),
            m(N);
          let j = (0, o.useMemo)(
            () => ({
              title: u,
              setTitle: c,
              titleElement: d,
              scrollElement: n,
              setTitleElement: x,
              isScrolledTitle: v,
              isScrolling: h,
            }),
            [u, v, d, n, h],
          );
          return (0, i.jsx)(s.pI.Provider, { value: j, children: e });
        });
      n(66414);
      let v = () => {
          let [t, e] = (0, o.useState)(null),
            n = (0, o.useCallback)(
              (n) => {
                t !== n && e(n);
              },
              [t],
            );
          return [t, n];
        },
        g = (t, e) => (
          (0, _.uK)().get(_.Xt),
          [
            (0, o.useMemo)(() => {
              if (void 0 !== e) {
                let n = e - 17;
                return {
                  "--average-color-background": t,
                  transform: "translateY(".concat(e >= 17 ? 0 : n, "px)"),
                  opacity: 1,
                };
              }
              return {};
            }, [e, !1, t]),
            (0, o.useMemo)(() => ({ "--average-color-background": t }), [t]),
          ]
        );
    },
    55784: function (t, e, n) {
      "use strict";
      n.d(e, {
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
    23976: function (t, e, n) {
      "use strict";
      n.d(e, {
        s6: function () {
          return i.PostPage;
        },
        vU: function () {
          return m;
        },
      });
      var i = n(18211);
      n(45833);
      var o = n(42288),
        r = n(10542),
        s = n(99287),
        a = n(93490),
        l = n(31579),
        u = n(33589),
        c = n(12090),
        d = n(63394);
      let m = o.V5.model("PostPage", {
        errorStatusCode: o.V5.maybe(o.V5.number),
        loadingState: o.V5.enumeration(Object.values(d.Gu)),
        title: o.V5.maybeNull(o.V5.string),
        promotionType: o.V5.maybeNull(o.V5.enumeration(Object.values(s.qe))),
        artists: o.V5.maybe(o.V5.array(u.Go)),
        albums: o.V5.maybe(o.V5.array(a.ug)),
        playlists: o.V5.maybe(o.V5.array(l.d2)),
      })
        .views((t) => ({
          get isLoading() {
            return (
              t.loadingState === d.Gu.IDLE || t.loadingState === d.Gu.PENDING
            );
          },
          get isNotFound() {
            let e =
              t.errorStatusCode === r.CN.NOT_FOUND ||
              t.errorStatusCode === r.CN.BAD_REQUEST;
            return t.loadingState === d.Gu.REJECT && e;
          },
          get isSomethingWrong() {
            return t.loadingState === d.Gu.REJECT && !this.isNotFound;
          },
        }))
        .actions((t) => ({
          getData: (0, o.ls)(function* (e) {
            let { promoId: n } = e,
              { feedResource: i, modelActionsLogger: s } = (0, o.dU)(t);
            if (t.loadingState !== d.Gu.PENDING)
              try {
                t.loadingState = d.Gu.PENDING;
                let e = yield i.getPromotionsById({ promoId: n });
                (t.title = e.title),
                  (t.promotionType = e.promotionType),
                  e.artists &&
                    e.artists.length > 0 &&
                    (t.artists = (0, o.pj)(e.artists.map(u.d))),
                  e.albums &&
                    e.albums.length > 0 &&
                    (t.albums = (0, o.pj)(e.albums.map(a.ym))),
                  e.playlists &&
                    e.playlists.length > 0 &&
                    (t.playlists = (0, o.pj)(
                      e.playlists.map((t) => {
                        let { playlist: e } = t;
                        return (0, c.PV)(e);
                      }),
                    )),
                  t.loadingState !== d.Gu.IDLE &&
                    (t.loadingState = d.Gu.RESOLVE);
              } catch (e) {
                s.error(e),
                  e instanceof r.du &&
                    (e.statusCode === r.CN.NOT_FOUND ||
                      e.statusCode === r.CN.BAD_REQUEST) &&
                    (t.errorStatusCode = r.CN.NOT_FOUND),
                  t.loadingState !== d.Gu.IDLE &&
                    (t.loadingState = d.Gu.REJECT);
              }
          }),
          reset() {
            (t.loadingState = d.Gu.IDLE),
              (t.title = null),
              (t.artists = (0, o.pj)([])),
              (t.albums = (0, o.pj)([]));
          },
        }));
    },
    45833: function (t, e, n) {
      "use strict";
      n.d(e, {
        PostNotFoundPage: function () {
          return s;
        },
      });
      var i = n(9753),
        o = n(9544),
        r = n(23948);
      let s = (0, o.Pi)(() => (0, i.jsx)(r.T, {}));
    },
    18211: function (t, e, n) {
      "use strict";
      n.d(e, {
        PostPage: function () {
          return L;
        },
      });
      var i = n(9753),
        o = n(9544),
        r = n(74717),
        s = n(98639),
        a = n(21585),
        l = n(41055),
        u = n(90679),
        c = n(2570),
        d = n(68106),
        m = n(5293),
        _ = n(63394),
        p = n(67868),
        x = n(41949),
        v = n.n(x);
      let g = () =>
        (0, i.jsxs)("div", {
          className: v().root,
          children: [
            (0, i.jsx)(u.Shimmer, { radius: "l", className: v().top }),
            (0, i.jsx)(u.Shimmer, { radius: "l", className: v().bottom }),
          ],
        });
      var h = n(90978),
        f = n.n(h),
        b = n(93490),
        C = n(12903),
        N = n.n(C);
      let j = (0, o.Pi)((t) => {
        let { albums: e = [] } = t;
        return (0, i.jsx)("div", {
          className: N().root,
          children: (0, i.jsx)("div", {
            className: N().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: e.map((t) =>
              (0, i.jsx)(
                b.rf,
                { className: N().item, album: t, contentLinesCount: 3 },
                t.id,
              ),
            ),
          }),
        });
      });
      var S = n(87908),
        y = n(13209),
        k = n.n(y);
      let T = (0, o.Pi)((t) => {
        let { artists: e = [] } = t;
        return (0, i.jsx)("div", {
          className: k().root,
          children: (0, i.jsx)("div", {
            className: k().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: e.map((t) =>
              (0, i.jsx)(
                S.IT,
                { className: k().item, artist: t, contentLinesCount: 3 },
                t.id,
              ),
            ),
          }),
        });
      });
      var P = n(31579),
        A = n(39679),
        E = n.n(A);
      let W = (0, o.Pi)((t) => {
          let { playlists: e = [] } = t;
          return (0, i.jsx)("div", {
            className: E().root,
            children: (0, i.jsx)("div", {
              className: E().content,
              "aria-labelledby": "post-page-header",
              tabIndex: 0,
              children: e.map((t) =>
                (0, i.jsx)(
                  P.ZL,
                  { className: E().item, playlist: t, contentLinesCount: 3 },
                  t.id,
                ),
              ),
            }),
          });
        }),
        L = (0, o.Pi)((t) => {
          let { promoId: e } = t,
            { post: n } = (0, _.oR)(),
            o = (0, _.k6)(),
            [x, v] = (0, m.zU)();
          if (
            (e &&
              n.loadingState === _.Gu.IDLE &&
              (0, s.use)(n.getData({ promoId: e })),
            (0, s.useEffect)(
              () => () => {
                n.reset();
              },
              [n],
            ),
            n.isNotFound && (0, r.notFound)(),
            (0, _.NO)(n.loadingState === _.Gu.RESOLVE),
            n.isSomethingWrong)
          )
            return (0, i.jsx)(d.D, {});
          let h = (0, s.useMemo)(() => {
            if (n.isLoading) return (0, i.jsx)(g, {});
            switch (n.promotionType) {
              case a.qe.ARTISTS:
                return (0, i.jsx)(T, { artists: n.artists });
              case a.qe.ALBUMS:
                return (0, i.jsx)(j, { albums: n.albums });
              case a.qe.PLAYLISTS:
                return (0, i.jsx)(W, { playlists: n.playlists });
              default:
                (0, r.notFound)();
            }
          }, [n.albums, n.artists, n.isLoading, n.playlists, n.promotionType]);
          return (0, i.jsx)(_.Lh, {
            pageId: _.Rh.POST,
            children: (0, i.jsxs)(m.I7, {
              scrollElement: x,
              outerTitle: n.title || void 0,
              children: [
                (0, i.jsx)(p.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: o.canBack,
                  children: n.title
                    ? (0, i.jsx)(c.Heading, {
                        id: "post-header",
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: n.title,
                      })
                    : (0, i.jsx)(u.Shimmer, {
                        className: f().shimmerTitle,
                        radius: "l",
                      }),
                }),
                (0, i.jsx)(l.t, {
                  className: f().scrollableContainer,
                  ref: v,
                  children: (0, i.jsx)("div", {
                    className: f().container,
                    children: h,
                  }),
                }),
              ],
            }),
          });
        });
    },
    23948: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return i.NotFound;
        },
      });
      var i = n(8964);
    },
    8964: function (t, e, n) {
      "use strict";
      n.d(e, {
        NotFound: function () {
          return p;
        },
      });
      var i = n(9753),
        o = n(60836),
        r = n(9544),
        s = n(31014),
        a = n(39513),
        l = n(28852),
        u = n(2570),
        c = n(55784),
        d = n(63394),
        m = n(23067),
        _ = n.n(m);
      let p = (0, r.Pi)((t) => {
        let { className: e } = t,
          { contentRef: n } = (0, d.$Y)(),
          r = (0, d.s0)("/");
        return (
          (0, d.ZP)(!0),
          (0, i.jsxs)("div", {
            className: (0, o.W)(_().root, { [_().root_desktop]: !n }, e),
            children: [
              (0, i.jsx)(c.n, {
                withBackwardFallback: "/",
                className: _().navigation,
                withForwardControl: !1,
              }),
              (0, i.jsxs)("div", {
                className: _().content,
                children: [
                  (0, i.jsx)(l.J, {
                    className: _().icon,
                    variant: "musicLogo",
                    size: "xxl",
                  }),
                  (0, i.jsx)(u.Heading, {
                    className: (0, o.W)(_().title, _().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, i.jsx)(s.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, i.jsx)(u.Caption, {
                    className: (0, o.W)(_().text, _().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, i.jsx)(s.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, i.jsx)(a.z, {
                    onClick: r,
                    className: _().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, i.jsx)(u.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, i.jsx)(s.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    68106: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return i.SomethingWentWrong;
        },
      });
      var i = n(18723);
    },
    18723: function (t, e, n) {
      "use strict";
      n.d(e, {
        SomethingWentWrong: function () {
          return x;
        },
      });
      var i = n(9753),
        o = n(60836),
        r = n(9544),
        s = n(98639),
        a = n(31014),
        l = n(39513),
        u = n(28852),
        c = n(2570),
        d = n(55784),
        m = n(63394),
        _ = n(88178),
        p = n.n(_);
      let x = (0, r.Pi)((t) => {
        let { className: e, withBackwardControl: n = !0 } = t,
          r = (0, s.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: _ } = (0, m.$Y)();
        return (0, i.jsxs)("div", {
          className: (0, o.W)(p().root, e),
          children: [
            n &&
              (0, i.jsx)(d.n, {
                withBackwardFallback: "/",
                className: (0, o.W)(p().navigation, {
                  [p().navigation_desktop]: !_,
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
                  children: (0, i.jsx)(a.Z, {
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
                    (0, i.jsx)(a.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, i.jsx)(l.z, {
                  onClick: r,
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
                      (0, i.jsx)(a.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    62914: function (t) {
      t.exports = {
        root: "ArtistCard_root__x67BK",
        controls: "ArtistCard_controls__jsqqI",
        cover: "ArtistCard_cover__29ShU",
        coverBlock: "ArtistCard_coverBlock__dBL4x",
        image: "ArtistCard_image__pONJx",
        titleLink: "ArtistCard_titleLink__G8Puz",
        playButton: "ArtistCard_playButton__XZoTr",
        likeButton: "ArtistCard_likeButton__LU9TL",
        menuButton: "ArtistCard_menuButton__EynXG",
        pinButton: "ArtistCard_pinButton__G_VOi",
        control: "ArtistCard_control___qv5j",
      };
    },
    90978: function (t) {
      t.exports = {
        scrollableContainer: "PostPage_scrollableContainer__iV9Bo",
        container: "PostPage_container__orSfz",
        shimmerTitle: "PostPage_shimmerTitle__EeFCD",
      };
    },
    12903: function (t) {
      t.exports = {
        root: "PostAlbums_root__u2a1q",
        content: "PostAlbums_content__uMSez",
      };
    },
    13209: function (t) {
      t.exports = {
        root: "PostArtists_root__Zxmjq",
        content: "PostArtists_content__JzGOH",
      };
    },
    39679: function (t) {
      t.exports = {
        root: "PostPlaylists_root__3tea0",
        content: "PostPlaylists_content__2fXI5",
      };
    },
    41949: function (t) {
      t.exports = {
        root: "PostShimmer_root__MlLkY",
        top: "PostShimmer_top__ySpmZ",
        bottom: "PostShimmer_bottom__ajW_P",
      };
    },
    23067: function (t) {
      t.exports = {
        root: "NotFound_root__47ZX6",
        root_desktop: "NotFound_root_desktop___QqSb",
        navigation: "NotFound_navigation__q8rIW",
        content: "NotFound_content__3kry_",
        icon: "NotFound_icon___Wa9y",
        title: "NotFound_title__akG_o",
        important: "NotFound_important__z1LWl",
        text: "NotFound_text__oxDZv",
        button: "NotFound_button__jF4uH",
      };
    },
    88178: function (t) {
      t.exports = {
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
  function (t) {
    t.O(
      0,
      [
        8609, 481, 4153, 2877, 5340, 2498, 7873, 2138, 3621, 3394, 7868, 4901,
        3490, 1055, 1579, 2171, 361, 1744,
      ],
      function () {
        return t((t.s = 28578));
      },
    ),
      (_N_E = t.O());
  },
]);

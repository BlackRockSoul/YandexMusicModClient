(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3154],
  {
    79578: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return l;
        },
      });
      var a = i(91207),
        n = i(58997);
      let l = () => {
        let { fullscreenVideoPlayer: t } = (0, n.oR4)(),
          e = (0, n.PYm)();
        return (0, a.useCallback)(
          (i) => {
            t.setIds(i),
              e("/video?".concat(n.wxR.IDS, "=").concat(i.join(","))),
              t.modal.open();
          },
          [t, e],
        );
      };
    },
    5410: function (t, e, i) {
      "use strict";
      i.d(e, {
        em: function () {
          return f;
        },
        F8: function () {
          return I;
        },
        nU: function () {
          return u;
        },
        $H: function () {
          return r;
        },
      });
      var a = i(91207),
        n = i(10231),
        l = i(58997);
      let r = (t) => {
        let {
            entityType: e,
            isLegalRejected: i,
            isUnsafeLegal: r,
            newDisclaimerId: s,
            entityId: o,
            callback: c,
          } = t,
          {
            disclaimer: d,
            modals: { disclaimerModal: u },
          } = (0, l.oR4)(),
          m = (0, a.useRef)(String((0, n.Z)())),
          k = (0, a.useRef)(!1),
          v = (0, l.uK4)().get(l.ceh);
        return (
          (0, a.useEffect)(() => {
            d.isUnsafeDisclaimerConfirmed &&
              d.id === m.current &&
              !k.current &&
              (null == c || c(), (k.current = !0));
          }, [c, d.isUnsafeDisclaimerConfirmed, d.id]),
          (0, a.useCallback)(
            async (t) => {
              if (o && (i || r)) {
                let i = v.get(l.BUb.ExEx);
                if (
                  r &&
                  (null == i ? void 0 : i.includes("".concat(e, "_").concat(o)))
                ) {
                  null == c || c(t);
                  return;
                }
                null == t || t.preventDefault(),
                  await d.getDisclaimerData({
                    entityId: Number(o),
                    entityType: e,
                    newDisclaimerId: s,
                  }),
                  r && d.setType(l.Gq.UNSAFE),
                  d.setId(m.current),
                  d.setEntityId(o),
                  d.setEntityType(e),
                  (k.current = !1),
                  u.open();
                return;
              }
              null == c || c(t);
            },
            [c, d, u, o, e, i, r, v, s],
          )
        );
      };
      var s = i(79491),
        o = i(2685),
        c = i(91694);
      let d = (t) =>
          t.details
            ? (0, o.pj)({
                title: t.title,
                description: t.description,
                details: { text: t.details.text, url: t.details.url },
              })
            : (0, o.pj)({ title: t.title, description: t.description }),
        u = o.V5.model("Disclaimer", {
          loadingState: o.V5.enumeration(Object.values(l.Gui)),
          data: o.V5.maybeNull(c.K3),
          type: o.V5.maybeNull(o.V5.enumeration(Object.values(l.Gq))),
          id: o.V5.maybeNull(o.V5.string),
          entityType: o.V5.maybeNull(o.V5.enumeration(Object.values(l.coP))),
          entityId: o.V5.maybeNull(o.V5.union(o.V5.string, o.V5.number)),
          isUnsafeDisclaimerConfirmed: o.V5.optional(o.V5.boolean, !1),
          shouldHistoryBack: o.V5.optional(o.V5.boolean, !1),
        })
          .views((t) => ({
            get isLoading() {
              return t.loadingState === l.Gui.PENDING;
            },
            get isRejected() {
              return t.loadingState === l.Gui.REJECT;
            },
          }))
          .volatile(() => ({
            onDisclaimerConfirmHandler: null,
            onDisclaimerRejectHandler: null,
          }))
          .actions((t) => ({
            setDisclaimerData(e) {
              t.data = (0, s.ZN)(e);
            },
            getArtistDisclaimer: (0, o.ls)(function* (e) {
              let { artistId: i } = e,
                { artistsResource: a, modelActionsLogger: n } = (0, o.dU)(t);
              if (t.loadingState !== l.Gui.PENDING)
                try {
                  t.loadingState = l.Gui.PENDING;
                  let e = yield a.getDisclaimer({ artistId: i }),
                    n = e.modal || e.foreignAgent;
                  n && (t.data = d(n)),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.RESOLVE);
                } catch (e) {
                  n.error(e),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.REJECT);
                }
            }),
            getAlbumDisclaimer: (0, o.ls)(function* (e) {
              let { albumId: i } = e,
                { albumResource: a, modelActionsLogger: n } = (0, o.dU)(t);
              if (t.loadingState !== l.Gui.PENDING)
                try {
                  t.loadingState = l.Gui.PENDING;
                  let e = yield a.getDisclaimer({ albumId: i }),
                    n = e.modal || e.foreignAgent;
                  n && (t.data = d(n)),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.RESOLVE);
                } catch (e) {
                  n.error(e),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.REJECT);
                }
            }),
            getTrackDisclaimer: (0, o.ls)(function* (e) {
              let { trackId: i } = e,
                { tracksResource: a, modelActionsLogger: n } = (0, o.dU)(t);
              if (t.loadingState !== l.Gui.PENDING)
                try {
                  t.loadingState = l.Gui.PENDING;
                  let e = yield a.getDisclaimer({ trackId: i }),
                    n = e.modal || e.foreignAgent;
                  n && (t.data = d(n)),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.RESOLVE);
                } catch (e) {
                  n.error(e),
                    t.loadingState !== l.Gui.IDLE &&
                      (t.loadingState = l.Gui.REJECT);
                }
            }),
            setId(e) {
              t.id = e;
            },
            setType(e) {
              t.type = e;
            },
            setEntityType(e) {
              t.entityType = e;
            },
            setEntityId(e) {
              t.entityId = e;
            },
            setConfirmUnsafeDisclaimer(e) {
              t.isUnsafeDisclaimerConfirmed = e;
            },
            setShouldHistoryBack(e) {
              t.shouldHistoryBack = e;
            },
            setDisclaimerConfirmHandler(e) {
              t.onDisclaimerConfirmHandler = e;
            },
            setDisclaimerRejectHandler(e) {
              t.onDisclaimerRejectHandler = e;
            },
            reset() {
              (t.loadingState = l.Gui.IDLE),
                (t.data = null),
                (t.id = null),
                (t.type = null),
                (t.entityType = null),
                (t.entityId = null),
                (t.isUnsafeDisclaimerConfirmed = !1),
                (t.shouldHistoryBack = !1);
            },
          }))
          .actions((t) => ({
            getDisclaimerData: (0, o.ls)(function* (e) {
              let { entityId: i, entityType: a, newDisclaimerId: n } = e,
                { disclaimers: r, experiments: s } = (0, o.yj)(t);
              if (
                s.checkExperiment(l.peG.WebNextNewExplicitApiModalFA, "on") &&
                n
              ) {
                let e = yield r.getDisclaimerById(n);
                e && t.setDisclaimerData(e);
              } else
                switch (a) {
                  case l.coP.ARTIST:
                    yield t.getArtistDisclaimer({ artistId: String(i) });
                    break;
                  case l.coP.ALBUM:
                  case l.coP.PODCAST:
                  case l.coP.AUDIOBOOK:
                    yield t.getAlbumDisclaimer({ albumId: Number(i) });
                    break;
                  case l.coP.TRACK:
                    yield t.getTrackDisclaimer({ trackId: String(i) });
                }
            }),
          }));
      var m = i(65301),
        k = i(9695),
        v = i(96233),
        _ = i(44729),
        p = i(55975),
        x = i(78372),
        C = i(82607),
        y = i(81437),
        T = i(29778),
        b = i(18132),
        h = i.n(b);
      let g = {
          [l.coP.ALBUM]: (0, m.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-album",
          }),
          [l.coP.PODCAST]: (0, m.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-podcast",
          }),
          [l.coP.ARTIST]: (0, m.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-artist",
          }),
          [l.coP.TRACK]: (0, m.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-track",
          }),
          [l.coP.AUDIOBOOK]: (0, m.jsx)(_.Z, {
            id: "extra-explicit.confirm-unsafe-audiobook",
          }),
        },
        f = (0, v.Pi)((t) => {
          var e, i, n, r;
          let { disclaimer: s, onClose: o, className: c } = t,
            { data: d, isLoading: u } = null != s ? s : {},
            { href: v } = (0, l.zBm)(
              null !==
                (r =
                  null == s
                    ? void 0
                    : null === (i = s.data) || void 0 === i
                      ? void 0
                      : null === (e = i.details) || void 0 === e
                        ? void 0
                        : e.url) && void 0 !== r
                ? r
                : "",
            ),
            b = (0, l.k67)(),
            f = (0, l.s0h)("/"),
            N = (0, l.uK4)().get(l.ceh),
            A = (0, a.useCallback)(() => {
              if (o) return o();
              b.canBack && b.back(), f();
            }, [o, b, f]),
            j =
              (null == d
                ? void 0
                : null === (n = d.details) || void 0 === n
                  ? void 0
                  : n.url) && d.details.text,
            I = (0, a.useCallback)(() => {
              null == s || s.setConfirmUnsafeDisclaimer(!0);
              let t = N.get(l.BUb.ExEx),
                e = new Date(),
                i = e.setMinutes(e.getMinutes() + 15);
              t
                ? N.set(
                    l.BUb.ExEx,
                    [
                      ...t,
                      ""
                        .concat(null == s ? void 0 : s.entityType, "_")
                        .concat(null == s ? void 0 : s.entityId),
                    ],
                    { expires: new Date(i) },
                  )
                : N.set(
                    l.BUb.ExEx,
                    [
                      ""
                        .concat(null == s ? void 0 : s.entityType, "_")
                        .concat(null == s ? void 0 : s.entityId),
                    ],
                    { expires: new Date(i) },
                  ),
                null == o || o(),
                (null == s ? void 0 : s.onDisclaimerConfirmHandler) &&
                  s.onDisclaimerConfirmHandler();
            }, [s, N, o]),
            L = (0, a.useCallback)(() => {
              (null == s ? void 0 : s.shouldHistoryBack)
                ? (null == o || o(), b.canBack && b.back(), f())
                : null == o || o(),
                (null == s ? void 0 : s.onDisclaimerRejectHandler) &&
                  s.onDisclaimerRejectHandler();
            }, [s, b, f, o]);
          (0, a.useEffect)(
            () => () => {
              null == s || s.reset();
            },
            [s],
          );
          let D = (0, a.useMemo)(() => {
              if (u)
                return (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsx)(C.Shimmer, {
                      radius: "l",
                      width: 200,
                      height: 24,
                      className: h().shimmer,
                    }),
                    (0, m.jsx)(C.Shimmer, {
                      radius: "l",
                      width: 250,
                      height: 16,
                      className: h().shimmer,
                    }),
                  ],
                });
              if (d && !u) {
                var t;
                return (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsx)(y.Heading, {
                      variant: "h4",
                      size: "l",
                      className: (0, k.W)(h().title, h().text),
                      ...(0, p.BA)(p.FK.disclaimer.DISCLAIMER_TITLE),
                      children: d.title,
                    }),
                    (0, m.jsx)(y.Caption, {
                      variant: "div",
                      size: "l",
                      weight: "normal",
                      className: h().text,
                      ...(0, p.BA)(p.FK.disclaimer.DISCLAIMER_DESCRIPTION),
                      children: d.description,
                    }),
                    j &&
                      (0, m.jsx)(T.rU, {
                        href: v,
                        className: h().link,
                        children: (0, m.jsx)(y.Caption, {
                          variant: "span",
                          size: "l",
                          weight: "normal",
                          children:
                            null === (t = d.details) || void 0 === t
                              ? void 0
                              : t.text,
                        }),
                      }),
                  ],
                });
              }
            }, [u, d, v, j]),
            P = (0, a.useMemo)(
              () =>
                u
                  ? (0, m.jsx)(C.Shimmer, {
                      radius: "xl",
                      width: 190,
                      height: 50,
                      className: h().shimmer,
                    })
                  : (null == s ? void 0 : s.type) === l.Gq.UNSAFE
                    ? (0, m.jsxs)("div", {
                        className: h().buttons,
                        children: [
                          (0, m.jsx)(x.z, {
                            color: "primary",
                            onClick: L,
                            size: "l",
                            radius: "xxxl",
                            className: h().button,
                            children: (0, m.jsx)(_.Z, {
                              id: "extra-explicit.reject-unsafe-entity",
                            }),
                          }),
                          (0, m.jsx)(x.z, {
                            color: "secondary",
                            onClick: I,
                            size: "l",
                            radius: "xxxl",
                            className: h().button,
                            children: s.entityType && g[s.entityType],
                          }),
                        ],
                      })
                    : (0, m.jsx)("div", {
                        className: h().buttons,
                        children: (0, m.jsx)(x.z, {
                          color: "primary",
                          onClick: A,
                          size: "l",
                          radius: "xxxl",
                          className: h().button,
                          ...(0, p.BA)(
                            p.FK.disclaimer.DISCLAIMER_REJECT_BUTTON,
                          ),
                          children: (0, m.jsx)(_.Z, {
                            id: "interface-actions.confirm",
                          }),
                        }),
                      }),
              [
                I,
                null == s ? void 0 : s.entityType,
                null == s ? void 0 : s.type,
                A,
                u,
                L,
              ],
            );
          return (0, m.jsx)("div", {
            className: (0, k.W)(h().root, c),
            ...(0, p.BA)(p.FK.disclaimer.DISCLAIMER_CONTENT),
            children: (0, m.jsxs)("div", {
              className: h().container,
              children: [D, P],
            }),
          });
        });
      var N = i(14386),
        A = i(74794),
        j = i.n(A);
      let I = (0, v.Pi)(() => {
        let {
          disclaimer: t,
          modals: { disclaimerModal: e },
        } = (0, l.oR4)();
        return (0, m.jsx)(N.u, {
          size: "fitContent",
          placement: "center",
          open: e.isOpened,
          onOpenChange: e.onOpenChange,
          onClose: e.close,
          showHeader: !1,
          className: j().root,
          contentClassName: j().content,
          overlayColor: "full",
          containerProps: (0, p.BA)(p.FK.disclaimer.DISCLAIMER_MODAL),
          children: (0, m.jsx)(f, { disclaimer: t, onClose: e.close }),
        });
      });
    },
    3154: function (t, e, i) {
      "use strict";
      i.d(e, {
        MG: function () {
          return P.AudiobookMeta;
        },
        Jx: function () {
          return f;
        },
        Zz: function () {
          return M.Lyrics;
        },
        wT: function () {
          return E.PodcastMeta;
        },
        F7: function () {
          return B.SearchTrackCard;
        },
        RJ: function () {
          return O.TrackAlbum;
        },
        G7: function () {
          return U.TrackCard;
        },
        _3: function () {
          return W.TrackChart;
        },
        hz: function () {
          return S.TrackContextMenu;
        },
        Nl: function () {
          return I;
        },
        ko: function () {
          return R.TrackMeta;
        },
        le: function () {
          return g;
        },
        FP: function () {
          return z.TrackNonMusic;
        },
        O2: function () {
          return K.TrackPlaylist;
        },
        VZ: function () {
          return Z.TrackPlaylistAddition;
        },
        qL: function () {
          return H.TrackUgcUpload;
        },
        dn: function () {
          return G.TrailerTrackAlbum;
        },
        fY: function () {
          return F.TrailerTrackPlaylist;
        },
        eZ: function () {
          return w.UgcTrackEditModal;
        },
        bp: function () {
          return L;
        },
        bc: function () {
          return D;
        },
        cO: function () {
          return V.c;
        },
        S7: function () {
          return c;
        },
        o: function () {
          return m;
        },
        Er: function () {
          return _;
        },
        E5: function () {
          return x;
        },
        Vt: function () {
          return o;
        },
        Z2: function () {
          return C;
        },
        Wc: function () {
          return y.useAddTrackToPlaylist;
        },
        nD: function () {
          return T.useTrackDisclaimer;
        },
      });
      var a = i(2685),
        n = i(49724),
        l = i(48896),
        r = i(9096),
        s = i(26382);
      let o = (t, e) => {
          var i, n;
          let o =
              null === (i = t.artists) || void 0 === i ? void 0 : i.map(r.d),
            c = null === (n = t.albums) || void 0 === n ? void 0 : n.map(l.N);
          return (0, a.pj)({ ...(0, s.Ni)(t, e), artists: o, albums: c });
        },
        c = (t, e) => (0, a.pj)({ ...o(t), chart: e && (0, n.W5)(e) });
      var d = i(15134),
        u = i(58997);
      let m = (t, e) => {
        let i = Math.floor(Date.now() / 1e3),
          a = "".concat(t).concat(i);
        return {
          sign: (0, d.createHmac)("sha256", (0, u.Sqh)())
            .update(a)
            .digest("base64"),
          timeStamp: i,
          trackId: t,
          format: e,
        };
      };
      var k = i(99678),
        v = i(91207);
      (0, v.cache)(async (t, e) => {
        try {
          var i;
          let {
              container: a,
              backendHostTld: n,
              locale: l,
              host: r,
              fullUrl: s,
              requestUrl: o,
            } = await (0, u.rbP)(),
            c = a.get(u.g5F),
            d = await c.getFullInfoTrack({ trackId: t, albumId: Number(e) });
          return (
            (d.track && "not-found" !== d.track.error) || (0, k.notFound)(),
            {
              track: d.track,
              album:
                null === (i = d.track.albums) || void 0 === i ? void 0 : i[0],
              similarTracks: d.similarTracks,
              backendHostTld: n,
              locale: l,
              host: r,
              fullUrl: s,
              requestUrl: o,
            }
          );
        } catch (t) {
          return {
            track: void 0,
            album: void 0,
            similarTracks: void 0,
            backendHostTld: "",
            locale: null,
            host: "",
            fullUrl: null,
            requestUrl: null,
          };
        }
      });
      let _ = (t, e) => {
        if (!e) return;
        let { h: i, s: a } = (0, u.sEc)(e);
        return "hsl("
          .concat(i, ", ")
          .concat(a, "%, ")
          .concat(t === u.Q2A.Light ? 60 : 20, "%)");
      };
      (0, v.cache)(async (t) => {
        try {
          var e, i;
          let {
              container: a,
              backendHostTld: n,
              locale: l,
              host: r,
              fullUrl: s,
              requestUrl: o,
            } = await (0, u.rbP)(),
            c = a.get(u.g5F),
            d = await c.getTracksMeta({ trackIds: [t], removeDuplicates: !0 });
          return (
            (d && d.length) || (0, k.notFound)(),
            {
              track: d[0],
              album:
                null === (i = d[0]) || void 0 === i
                  ? void 0
                  : null === (e = i.albums) || void 0 === e
                    ? void 0
                    : e[0],
              backendHostTld: n,
              locale: l,
              host: r,
              fullUrl: s,
              requestUrl: o,
            }
          );
        } catch (t) {
          return {
            track: void 0,
            album: void 0,
            backendHostTld: "",
            locale: null,
            host: "",
            fullUrl: null,
            requestUrl: null,
          };
        }
      });
      var p = i(86348);
      let x = (t) => ({
          type: p.RX.Unloaded,
          meta: {
            id: t.albumId ? "".concat(t.id, ":").concat(t.albumId) : t.id,
          },
        }),
        C = (t) => {
          var e, i;
          return (0, a.pj)({
            ...o(t),
            artists:
              null !==
                (i =
                  null == t
                    ? void 0
                    : null === (e = t.artists) || void 0 === e
                      ? void 0
                      : e.map(r.d)) && void 0 !== i
                ? i
                : [],
          });
        };
      var y = i(47320);
      i(75234), i(72469), i(86784);
      var T = i(57438);
      let b = a.V5.model("Credit", { title: a.V5.string, value: a.V5.string });
      var h = i(91694);
      let g = s.yp
          .props({
            artists: a.V5.array(r.Go),
            albums: a.V5.array(l.KX),
            chart: a.V5.maybe(n.BH),
          })
          .views((t) => ({
            get artistsNames() {
              var e;
              return null === (e = t.artists) || void 0 === e
                ? void 0
                : e.map((t) => t.name).join(", ");
            },
            get mainAlbum() {
              var i, a;
              return null !==
                (a = null === (i = t.albums) || void 0 === i ? void 0 : i[0]) &&
                void 0 !== a
                ? a
                : null;
            },
            get index() {
              var n, l, r;
              return null !==
                (r =
                  null === (l = t.albums[0]) || void 0 === l
                    ? void 0
                    : null === (n = l.trackPosition) || void 0 === n
                      ? void 0
                      : n.index) && void 0 !== r
                ? r
                : null;
            },
            get isAvailableOnlyForPlus() {
              var s;
              return !!(null === (s = this.mainAlbum) || void 0 === s
                ? void 0
                : s.isAvailableOnlyForPlus);
            },
            get artistName() {
              var o, c, d, u;
              if (
                null === (c = t.artists) || void 0 === c
                  ? void 0
                  : null === (o = c[0]) || void 0 === o
                    ? void 0
                    : o.various
              )
                return;
              return null === (u = t.artists) || void 0 === u
                ? void 0
                : null === (d = u[0]) || void 0 === d
                  ? void 0
                  : d.name;
            },
          }))
          .actions((t) => ({
            changeTrackInfo: (0, a.ls)(function* (e, i) {
              let { ugcResource: n, modelActionsLogger: l } = (0, a.dU)(t);
              if (
                t.artists.map((t) => t.name).join(", ") === i &&
                e === t.title
              )
                return u.SLo.OK;
              try {
                var s;
                yield n.changeTrack({ trackId: t.id, title: e, artist: i }),
                  (t.title = e);
                let l =
                  (null === (s = t.artists[0]) || void 0 === s
                    ? void 0
                    : s.id) || "0";
                if (((t.artists = (0, a.pj)([])), i)) {
                  let e = r.Go.create({ id: l, name: i, isAvailable: !0 });
                  t.artists = (0, a.pj)([e]);
                }
                return u.SLo.OK;
              } catch (t) {
                return l.error(t), u.SLo.ERROR;
              }
            }),
          }))
          .named("Track"),
        f = a.V5.model("CurrentTrackInfo", {
          id: a.V5.maybeNull(a.V5.union(a.V5.string, a.V5.number)),
          albumId: a.V5.maybeNull(a.V5.number),
          isUGC: a.V5.maybeNull(a.V5.boolean),
          trackLoadingState: a.V5.enumeration(Object.values(u.Gui)),
          fullTrack: a.V5.maybeNull(g),
          creditsLoadingState: a.V5.enumeration(Object.values(u.Gui)),
          credits: a.V5.maybeNull(a.V5.array(b)),
          modal: h.KL,
          fullDescription: a.V5.maybeNull(a.V5.string),
          descriptionLoadingState: a.V5.enumeration(Object.values(u.Gui)),
        })
          .views((t) => ({
            get isTrackIdle() {
              return t.trackLoadingState === u.Gui.IDLE;
            },
            get isCreditsIdle() {
              return t.creditsLoadingState === u.Gui.IDLE;
            },
            get isTrackLoading() {
              return (
                t.trackLoadingState === u.Gui.PENDING ||
                t.trackLoadingState === u.Gui.IDLE
              );
            },
            get isTrackRejected() {
              return t.trackLoadingState === u.Gui.REJECT;
            },
            get isCreditsLoading() {
              return (
                t.creditsLoadingState === u.Gui.PENDING ||
                t.creditsLoadingState === u.Gui.IDLE
              );
            },
            get isCreditsRejected() {
              return t.creditsLoadingState === u.Gui.REJECT;
            },
            get isRejected() {
              return (
                t.creditsLoadingState === u.Gui.REJECT &&
                t.trackLoadingState === u.Gui.REJECT
              );
            },
          }))
          .actions((t) => ({
            setTrack(e) {
              let { id: i, albumId: a, isUGC: n } = e;
              (t.id = i), (t.albumId = a), (t.isUGC = n);
            },
            getFullTrack: (0, a.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, a.dU)(t);
              if (!t.id || t.trackLoadingState === u.Gui.PENDING) return null;
              try {
                t.trackLoadingState = u.Gui.PENDING;
                let i = yield e.getFullInfoTrack({
                  trackId: t.id,
                  albumId: t.albumId,
                });
                if (!i) return null;
                (t.fullTrack = (0, a.pj)(o(i.track))),
                  (t.trackLoadingState = u.Gui.RESOLVE);
              } catch (e) {
                i.error(e), (t.trackLoadingState = u.Gui.REJECT);
              }
              return null;
            }),
            getFullDescription: (0, a.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, a.dU)(t);
              if (!t.id || t.descriptionLoadingState === u.Gui.PENDING)
                return null;
              try {
                t.descriptionLoadingState = u.Gui.PENDING;
                let i = yield e.getFullDescriptionTrack({ trackId: t.id });
                if (!i) return null;
                (t.fullDescription = i.description),
                  (t.descriptionLoadingState = u.Gui.RESOLVE);
              } catch (e) {
                i.error(e), (t.descriptionLoadingState = u.Gui.REJECT);
              }
              return null;
            }),
            getTrackMeta: (0, a.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, a.dU)(t);
              if (!t.id || t.trackLoadingState === u.Gui.PENDING) return null;
              try {
                t.trackLoadingState = u.Gui.PENDING;
                let i = yield e.getTracksMeta({
                  trackIds: [t.id],
                  removeDuplicates: !0,
                });
                if (!i || !i.length) return null;
                i[0] &&
                  ((t.fullTrack = (0, a.pj)(o(i[0]))),
                  (t.trackLoadingState = u.Gui.RESOLVE));
              } catch (e) {
                i.error(e), (t.trackLoadingState = u.Gui.REJECT);
              }
              return null;
            }),
            getCreditsInfo: (0, a.ls)(function* () {
              let { tracksResource: e, modelActionsLogger: i } = (0, a.dU)(t);
              if (!t.id || t.creditsLoadingState === u.Gui.PENDING) return null;
              try {
                t.creditsLoadingState = u.Gui.PENDING;
                let i = yield e.getCredits({ trackId: t.id });
                (t.credits = (0, a.pj)(null == i ? void 0 : i.credits)),
                  (t.creditsLoadingState = u.Gui.RESOLVE);
              } catch (e) {
                i.error(e), (t.creditsLoadingState = u.Gui.REJECT);
              }
              return null;
            }),
            reset() {
              (t.id = null),
                (t.albumId = null),
                (t.isUGC = null),
                (t.trackLoadingState = u.Gui.IDLE),
                (t.descriptionLoadingState = u.Gui.IDLE),
                (t.creditsLoadingState = u.Gui.IDLE),
                (t.fullTrack = null),
                (t.credits = null);
            },
          }));
      var N = i(79491),
        A = i(10231),
        j = i(67410);
      let I = a.V5.model("TrackLyrics", {
          loadingState: a.V5.enumeration(Object.values(u.Gui)),
          lyrics: a.V5.maybeNull(a.V5.string),
          major: a.V5.maybeNull(s.bP),
          lyricId: a.V5.maybeNull(a.V5.number),
          writers: a.V5.array(a.V5.string),
          externalLyricId: a.V5.maybeNull(a.V5.string),
          modal: h.KL,
          track: a.V5.maybeNull(g),
          trackId: a.V5.maybeNull(a.V5.union(a.V5.string, a.V5.number)),
          prevTrackId: a.V5.maybeNull(a.V5.union(a.V5.string, a.V5.number)),
        })
          .views((t) => ({
            get isNeededToLoad() {
              return t.loadingState === u.Gui.IDLE;
            },
            get isLoading() {
              return t.loadingState === u.Gui.PENDING;
            },
            get isRejected() {
              return t.loadingState === u.Gui.REJECT;
            },
            get isResolve() {
              return t.loadingState === u.Gui.RESOLVE;
            },
            get writersNames() {
              return t.writers.join(", ");
            },
            get hasWriters() {
              return 0 !== t.writers.length;
            },
            get shouldReloadLyrics() {
              return t.prevTrackId === t.trackId;
            },
            get isShimmerVisible() {
              return (
                (this.isLoading || this.isRejected) && !this.shouldReloadLyrics
              );
            },
          }))
          .actions((t) => {
            let e = {
              setTrack(e) {
                t.track = (0, a.pj)({ ...(0, N.ZN)(e) });
              },
              getLyrics: (0, a.ls)(function* (i) {
                let { tracksResource: n, modelActionsLogger: l } = (0, a.dU)(t);
                if (
                  ((t.trackId = i),
                  t.loadingState !== u.Gui.PENDING && !t.shouldReloadLyrics)
                )
                  try {
                    (t.loadingState = u.Gui.PENDING), (t.lyrics = null);
                    let {
                      downloadUrl: l,
                      major: r,
                      externalLyricId: o,
                      lyricId: c,
                      writers: d,
                    } = yield n.getLyrics(m(i, j.y.TEXT));
                    yield e.downloadLyrics(l),
                      (t.major = (0, s.jp)(r)),
                      (t.externalLyricId = o),
                      (t.lyricId = c),
                      (t.writers = (0, a.pj)(d || [])),
                      (t.prevTrackId = i),
                      (t.loadingState = u.Gui.RESOLVE);
                  } catch (e) {
                    (t.lyrics = null),
                      (t.loadingState = u.Gui.REJECT),
                      l.error(e);
                  }
              }),
              downloadLyrics: (0, a.ls)(function* (e) {
                let { prefixlessResource: i } = (0, a.dU)(t),
                  n = yield i.getLyricsText(e);
                t.lyrics = n;
              }),
              sendViews: (0, a.ls)(function* (e) {
                let { trackId: i, albumId: n } = e,
                  { lyricViewsResource: l, modelActionsLogger: r } = (0, a.dU)(
                    t,
                  );
                if (t.loadingState === u.Gui.RESOLVE || t.shouldReloadLyrics)
                  try {
                    if (!t.major || !t.lyricId || !t.externalLyricId) return;
                    yield l.sendViews({
                      lyricViews: [
                        {
                          id: (0, A.Z)(),
                          trackId: i,
                          majorId: t.major.id,
                          lyricId: t.lyricId,
                          externalLyricId: t.externalLyricId,
                          lyricFormat: j.y.TEXT,
                          albumId: n,
                        },
                      ],
                    });
                  } catch (t) {
                    r.error(t);
                  }
              }),
              reset() {
                t.loadingState = u.Gui.IDLE;
              },
            };
            return e;
          }),
        L = a.V5.model("UgcTrackEditModal", { modal: h.KL })
          .volatile(() => ({ track: null }))
          .views((t) => ({
            get trackTitle() {
              if (!t.track) return "";
              return t.track.title;
            },
            get trackArtist() {
              if (!t.track) return "";
              return t.track.artists.map((t) => t.name).join(", ");
            },
          }))
          .actions((t) => {
            let e = {
              open(e) {
                (t.track = e), t.modal.open();
              },
              close() {
                t.modal.close(), e.reset();
              },
              reset() {
                t.track = null;
              },
            };
            return e;
          }),
        D = a.V5.compose(g, s.v$).named("UgcTrack");
      i(84486);
      var P = i(98757),
        E = i(40161),
        R = i(67419),
        S = i(35637),
        M = i(55044),
        B = i(97062),
        U = i(9730),
        w = i(25402),
        O = i(16228),
        G = i(46849),
        W = i(18993),
        z = i(21532),
        V = i(89748),
        K = i(37850),
        F = i(62888),
        Z = i(24263),
        H = i(95929);
    },
    31536: function (t, e, i) {
      "use strict";
      i.d(e, {
        p: function () {
          return n;
        },
      });
      var a = i(56229);
      let n = function () {
        var t, e;
        let i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (
          null === (e = i[0]) || void 0 === e
            ? void 0
            : null === (t = e.decomposed) || void 0 === t
              ? void 0
              : t.length
        )
          return i;
        let l = n.map((t) => t.id).sort(),
          r = i.map((t) => t.id).sort();
        return (0, a.Z)(l, r) ? [] : i.filter((t) => !t.various);
      };
    },
    47320: function (t, e, i) {
      "use strict";
      i.d(e, {
        useAddTrackToPlaylist: function () {
          return o;
        },
      });
      var a = i(65301),
        n = i(33387),
        l = i(50684),
        r = i(26382),
        s = i(58997);
      let o = () => {
        let { notify: t } = (0, s.d$W)(),
          { playlist: e, fullscreenPlayer: i } = (0, s.oR4)(),
          o = (0, s.RVp)(),
          c = (0, n.W)((n) => {
            var c, d;
            let {
              withSuccessNotification: u,
              withPageRefresh: m,
              playlist: k,
              track: v,
            } = n;
            if (u) {
              let e = (0, r.tx)(v, o);
              t(
                (0, a.jsx)(l.XD, {
                  entityTitle: v.title,
                  entityVariant: e,
                  entityCoverUri:
                    null !== (d = v.coverUri) && void 0 !== d ? d : "",
                  playlist: k,
                }),
                {
                  containerId: i.modal.isOpened
                    ? s.W$x.FULLSCREEN_INFO
                    : s.W$x.INFO,
                },
              );
            }
            m &&
              k.uuid ===
                (null === (c = e.meta) || void 0 === c ? void 0 : c.uuid) &&
              e.refresh();
          }),
          d = (0, n.W)((e) => {
            let { withFailNotification: n } = e;
            n &&
              t((0, a.jsx)(l.wi, {}), {
                containerId: i.modal.isOpened
                  ? s.W$x.FULLSCREEN_ERROR
                  : s.W$x.ERROR,
              });
          });
        return (0, n.W)(async (t) => {
          var e;
          let {
              playlist: i,
              track: a,
              withSuccessNotification: n = !0,
              withFailNotification: r = !0,
              withPageRefresh: s = !0,
            } = t,
            o = await i.changePlaylist(
              (0, l.PG)({
                operation: l.aL.INSERT,
                position: 0,
                tracks: [
                  {
                    id: a.id,
                    albumId:
                      null === (e = a.mainAlbum) || void 0 === e
                        ? void 0
                        : e.id,
                  },
                ],
              }),
            );
          return (
            o === l.pX.OK
              ? c({
                  withSuccessNotification: n,
                  withPageRefresh: s,
                  playlist: i,
                  track: a,
                })
              : d({ withFailNotification: r }),
            o
          );
        });
      };
    },
    75234: function (t, e, i) {
      "use strict";
      i.d(e, {
        T: function () {
          return n;
        },
      });
      var a = i(58997);
      function n(t) {
        let { withCustomTooltip: e } = t,
          {
            settings: { isMobile: i, browserInfo: n },
          } = (0, a.oR4)();
        return !((null == n ? void 0 : n.name) === "Safari" || i) && e;
      }
    },
    33579: function (t, e, i) {
      "use strict";
      i.d(e, {
        N: function () {
          return o;
        },
      });
      var a = i(99678),
        n = i(33387),
        l = i(9096),
        r = i(5410),
        s = i(58997);
      let o = (t) => {
        let {
            track: e,
            withSavingQueryParams: i,
            entityType: o,
            onNavigate: c,
          } = t,
          { fullscreenPlayer: d, album: u } = (0, s.oR4)(),
          m = u.id === e.albumId,
          k = (0, s.PYm)(),
          v = (0, a.useSearchParams)(),
          { href: _ } = (0, s.zBm)(e.url),
          p = i ? (0, s.rDv)(_, v) : _,
          x = (0, n.W)((t) => {
            d.modal.isOpened && d.modal.close(),
              null == c || c(),
              m
                ? (null == t || t.preventDefault(), k(p))
                : null == t || t.stopPropagation();
          }),
          C = (0, n.W)((t) => {
            null == c || c(), null == t || t.stopPropagation();
          }),
          y = {
            entityType: o,
            isLegalRejected: e.isLegalRejected,
            isUnsafeLegal: e.isUnsafeLegal,
            entityId: e.id,
          },
          T = (0, r.$H)({ ...y, callback: x }),
          b = (0, r.$H)({ ...y, callback: C });
        return (0, l.ik)(b, T);
      };
    },
    72469: function (t, e, i) {
      "use strict";
      i.d(e, {
        B: function () {
          return o;
        },
      });
      var a = i(65301),
        n = i(33387),
        l = i(50684),
        r = i(26382),
        s = i(58997);
      let o = () => {
        let { notify: t } = (0, s.d$W)(),
          { playlist: e, fullscreenPlayer: i } = (0, s.oR4)(),
          o = (0, s.RVp)(),
          c = (0, n.W)((n) => {
            var c, d;
            let {
              withSuccessNotification: u,
              withPageRefresh: m,
              playlist: k,
              track: v,
            } = n;
            if (u && v && k) {
              let e = (0, r.tx)(v, o);
              t(
                (0, a.jsx)(l.H2, {
                  entityTitle: v.title,
                  entityVariant: e,
                  entityCoverUri:
                    null !== (d = v.coverUri) && void 0 !== d ? d : "",
                  playlist: k,
                }),
                {
                  containerId: i.modal.isOpened
                    ? s.W$x.FULLSCREEN_INFO
                    : s.W$x.INFO,
                },
              );
            }
            m &&
              (null == k ? void 0 : k.uuid) ===
                (null === (c = e.meta) || void 0 === c ? void 0 : c.uuid) &&
              e.refresh();
          }),
          d = (0, n.W)((e) => {
            let { withFailNotification: n } = e;
            n &&
              t((0, a.jsx)(l.BQ, {}), {
                containerId: i.modal.isOpened
                  ? s.W$x.FULLSCREEN_ERROR
                  : s.W$x.ERROR,
              });
          });
        return (0, n.W)(async (t) => {
          let {
              playlist: e,
              track: i,
              trackIndex: a,
              withSuccessNotification: n = !0,
              withFailNotification: r = !0,
              withPageRefresh: s = !0,
            } = t,
            o = await e.changePlaylist(
              (0, l.PG)({
                operation: l.aL.DELETE,
                startPosition: a,
                endPosition: a + 1,
              }),
            );
          return (
            o === l.pX.OK
              ? c({
                  withSuccessNotification: n,
                  withPageRefresh: s,
                  playlist: e,
                  track: i,
                })
              : d({ withFailNotification: r }),
            o
          );
        });
      };
    },
    86784: function (t, e, i) {
      "use strict";
      i.d(e, {
        useRemoveTrackFromPlaylistByIndex: function () {
          return c;
        },
      });
      var a = i(65301),
        n = i(91207),
        l = i(37184),
        r = i(50684),
        s = i(58997),
        o = i(29778);
      let c = () => {
        let { playlist: t, trackIndex: e } = (0, n.useContext)(r.jK) || {},
          { notify: i } = (0, s.d$W)(),
          { playlist: c } = (0, s.oR4)(),
          { formatMessage: d } = (0, l.Z)(),
          u = (0, n.useCallback)(async () => {
            let n = !1;
            if (
              (t &&
                "number" == typeof e &&
                (await t.changePlaylist(
                  (0, r.PG)({
                    operation: r.aL.DELETE,
                    startPosition: e,
                    endPosition: e + 1,
                  }),
                )) === r.pX.OK &&
                (n = !0),
              n)
            ) {
              if (t && "number" == typeof e) {
                var l;
                t.uuid ===
                  (null === (l = c.meta) || void 0 === l ? void 0 : l.uuid) &&
                  (c.removeTracksFromItems(e, 1), c.search.setFocus());
              }
            } else
              i(
                (0, a.jsx)(o.Q, {
                  error: d({ id: "playlist-errors.failed-to-remove-track" }),
                }),
                { containerId: s.W$x.ERROR },
              );
          }, [t, e, c, i, d]);
        return {
          canRemoveTrackFromPlaylist: !!(null == t ? void 0 : t.canUserChange),
          removeTrackFromPlaylist: u,
        };
      };
    },
    83652: function (t, e, i) {
      "use strict";
      i.d(e, {
        D: function () {
          return n;
        },
      });
      var a = i(58997);
      let n = (t, e, i) => {
        let {
          settings: { isMobile: n },
        } = (0, a.oR4)();
        return !!(
          n &&
          t &&
          (((null == e ? void 0 : e.endPositionSec) && e.endPositionSec > 0) ||
            (null == e ? void 0 : e.hasEverFinished) ||
            (i && i > 0))
        );
      };
    },
    37634: function (t, e, i) {
      "use strict";
      i.d(e, {
        useTrackAboutModalTitle: function () {
          return l;
        },
      });
      var a = i(37184),
        n = i(35068);
      let l = (t) => {
        var e;
        let { formatMessage: i } = (0, a.Z)();
        return i(
          (null == t ? void 0 : t.type) === n.V.AUDIOBOOK
            ? { id: "track-modal.audiobook-title" }
            : (null == t ? void 0 : t.isTrackPodcast) ||
                (null == t
                  ? void 0
                  : null === (e = t.mainAlbum) || void 0 === e
                    ? void 0
                    : e.isPodcast)
              ? { id: "track-modal.podcast-title" }
              : { id: "track-modal.title" },
        );
      };
    },
    57438: function (t, e, i) {
      "use strict";
      i.d(e, {
        useTrackDisclaimer: function () {
          return r;
        },
      });
      var a = i(91207),
        n = i(10231),
        l = i(58997);
      let r = (t) => {
        let { track: e, callback: i, disclaimerRejectHandler: r } = t,
          {
            disclaimer: s,
            modals: { disclaimerModal: o },
          } = (0, l.oR4)(),
          c = (0, a.useRef)(String((0, n.Z)())),
          d = (0, a.useRef)(!1),
          u = (0, l.uK4)().get(l.ceh);
        return (
          (0, a.useEffect)(() => {
            s.isUnsafeDisclaimerConfirmed &&
              s.id === c.current &&
              !d.current &&
              (null == i || i(), (d.current = !0));
          }, [i, s.isUnsafeDisclaimerConfirmed, s.id]),
          (0, a.useCallback)(
            async (t) => {
              if (
                (null == e ? void 0 : e.isLegalRejected) ||
                (null == e ? void 0 : e.isUnsafeLegal)
              ) {
                let a = u.get(l.BUb.ExEx);
                if (
                  e.isUnsafeLegal &&
                  (null == a
                    ? void 0
                    : a.includes(
                        ""
                          .concat(l.coP.TRACK, "_")
                          .concat(null == e ? void 0 : e.id),
                      ))
                ) {
                  null == i || i();
                  return;
                }
                null == t || t.preventDefault(),
                  await s.getDisclaimerData({
                    entityId: e.id,
                    entityType: l.coP.TRACK,
                    newDisclaimerId:
                      null == e ? void 0 : e.newModalDisclaimerId,
                  }),
                  e.isUnsafeLegal && s.setType(l.Gq.UNSAFE),
                  r && s.setDisclaimerRejectHandler(r),
                  s.setId(c.current),
                  s.setEntityId(e.id),
                  s.setEntityType(l.coP.TRACK),
                  (d.current = !1),
                  o.open();
                return;
              }
              null == i || i();
            },
            [
              i,
              s,
              o,
              r,
              u,
              null == e ? void 0 : e.id,
              null == e ? void 0 : e.isLegalRejected,
              null == e ? void 0 : e.isUnsafeLegal,
              null == e ? void 0 : e.newModalDisclaimerId,
            ],
          )
        );
      };
    },
    32195: function (t, e, i) {
      "use strict";
      i.d(e, {
        x: function () {
          return o;
        },
      });
      var a = i(65301),
        n = i(9695),
        l = i(82036),
        r = i(27242),
        s = i.n(r);
      let o = (t) => {
        let { isDragging: e, className: i } = t;
        return (0, a.jsx)(l.Icon, {
          variant: "dragDots",
          size: "xxs",
          className: (0, n.W)(s().root, { [s().root_active]: e }, i),
          "aria-hidden": !0,
        });
      };
    },
    84486: function (t, e, i) {
      "use strict";
      i.d(e, {
        ControlsBar: function () {
          return g;
        },
      });
      var a = i(65301),
        n = i(9695),
        l = i(96233),
        r = i(91207),
        s = i(37184),
        o = i(44729),
        c = i(55975),
        d = i(33387),
        u = i(82036),
        m = i(92249),
        k = i(81437),
        v = i(26382),
        _ = i(58997),
        p = i(29778),
        x = i(35637),
        C = i(93877),
        y = i.n(C);
      let T = (0, l.Pi)((t) => {
        let { track: e } = t,
          { formatMessage: i } = (0, s.Z)();
        return e.isDownloaded
          ? (0, a.jsx)(u.Icon, {
              size: "xxs",
              variant: "downloaded",
              "aria-label": i({ id: "offline.track-downloaded" }),
            })
          : e.isDownloading
            ? (0, a.jsx)(p.kQ, {
                value: e.downloadingProgress,
                size: 16,
                className: y().downloadingProgress,
                progressBarClassName: y().progress,
              })
            : null;
      });
      var b = i(58847),
        h = i.n(b);
      let g = (0, l.Pi)((t) => {
        let {
            className: e,
            track: i,
            withLightning: l,
            ignoreDislikedStyles: C,
            onLikeClick: y,
            onDislikeClick: b,
            utmLink: g,
            withSecondaryColor: f,
            handleRemove: N,
            withDislike: A = !0,
            withTrailer: j = !0,
          } = t,
          {
            user: I,
            experiments: L,
            sonataState: { isVibeContext: D },
          } = (0, _.oR4)(),
          { formatMessage: P } = (0, s.Z)(),
          { sendLikeSearchFeedback: E } = (0, _.sAF)(),
          [R, S] = (0, r.useState)(!1),
          [M, B] = (0, r.useState)(!1),
          U = (0, v.SB)(i),
          w = (0, v.KX)(i),
          O =
            L.checkExperiment(_.peG.WebNextEnableDownloadControls, "on") &&
            I.hasPlus,
          G = (0, r.useMemo)(() => {
            let t = Math.round((i.durationMs || 0) / _.qkF);
            return (0, _.gf)(t);
          }, [i.durationMs]),
          W = (0, d.W)(async () => {
            R || i.isLiked || (S(!0), null == E || E()),
              await U(),
              null == y || y(i.isLiked);
          }),
          z = (0, d.W)(async () => {
            await w(), null == b || b(i.isDisliked);
          }),
          V = (0, d.W)((t) => {
            t.stopPropagation();
          }),
          K = (0, r.useMemo)(() => {
            if (!i.isRemoved && i.isAvailable)
              return (0, a.jsx)("div", {
                onClick: V,
                children: (0, a.jsx)(x.TrackContextMenu, {
                  track: i,
                  open: M,
                  onOpenChange: B,
                  placement: "bottom",
                  icon: (0, a.jsx)(u.Icon, { size: "xs", variant: "more" }),
                  size: "xs",
                  utmLink: g,
                  className: (0, n.W)(h().contextMenu, {
                    [h().contextMenu_visible]: M,
                  }),
                  handleRemove: N,
                  withTrailer: j,
                  ...(0, c.BA)(c.bG.track.TRACK_CONTEXT_MENU_BUTTON),
                }),
              });
          }, [V, N, M, j, i, g]);
        return (0, a.jsxs)("div", {
          className: (0, n.W)(h().root, h().controls, e, {
            [h().controls_dislikedControls]: i.isDisliked,
            [h().controls_dislikedColors]: i.isDisliked && !C,
            [h().controls_disabled]: !i.isAvailable,
            [h().root_withSecondaryColor]: f,
          }),
          children: [
            l &&
              (0, a.jsx)(u.Icon, {
                "aria-label": P({ id: "entity-names.popular-among-users" }),
                size: "xxs",
                className: h().lightning,
                variant: "lightning",
              }),
            i.isUGC &&
              (0, a.jsxs)(m.u, {
                placement: "bottom",
                offsetOptions: 8,
                children: [
                  (0, a.jsx)(u.Icon, {
                    "aria-label": P({ id: "ugc.track-description" }),
                    size: "xxs",
                    className: h().ugcIcon,
                    variant: "eye_crossed",
                  }),
                  (0, a.jsx)(m._v, {
                    children: (0, a.jsx)(o.Z, { id: "ugc.track-description" }),
                  }),
                ],
              }),
            N &&
              !D &&
              (0, a.jsx)(v.xZ, {
                size: "xs",
                iconSize: "xxs",
                className: (0, n.W)(h().item, h().removeButton),
                onClick: N,
              }),
            O &&
              (0, a.jsx)("div", {
                className: h().item,
                children: (0, a.jsx)(T, { track: i }),
              }),
            !i.isRemoved &&
              i.isAvailable &&
              (0, a.jsx)(p.FM, {
                fallback: (0, a.jsx)(p.dJ, {
                  size: "xs",
                  iconSize: "xxs",
                  className: (0, n.W)(h().item, h().likeIcon),
                  isLiked: i.isLiked,
                  onClick: W,
                }),
              }),
            !i.isRemoved &&
              i.isAvailable &&
              A &&
              (0, a.jsx)(p.FM, {
                fallback: (0, a.jsx)(p.Q1, {
                  size: "xs",
                  iconSize: "xxs",
                  className: (0, n.W)(h().item, h().dislikeIcon),
                  isDisliked: i.isDisliked,
                  onClick: z,
                }),
              }),
            (0, a.jsxs)("div", {
              className: (0, n.W)(h().item, h().contextMenuWrapper),
              children: [
                "number" == typeof i.durationMs &&
                  (0, a.jsx)(k.Caption, {
                    variant: "span",
                    className: (0, n.W)(h().duration, {
                      [h().duration_hidden]: M,
                    }),
                    type: "entity",
                    size: "m",
                    weight: "medium",
                    ...(0, c.BA)(c.bG.track.TRACK_DURATION),
                    children: G,
                  }),
                K,
              ],
            }),
          ],
        });
      });
    },
    98757: function (t, e, i) {
      "use strict";
      i.d(e, {
        AudiobookMeta: function () {
          return A;
        },
      });
      var a = i(65301),
        n = i(9695),
        l = i(96233),
        r = i(91207),
        s = i(37184),
        o = i(44729),
        c = i(55975),
        d = i(33387),
        u = i(92249),
        m = i(81437),
        k = i(9096),
        v = i(5410),
        _ = i(26382),
        p = i(58997),
        x = i(29778),
        C = i(31536),
        y = i(75234),
        T = i(33579),
        b = i(83652),
        h = i(57765),
        g = i.n(h),
        f = i(15830),
        N = i.n(f);
      let A = (0, l.Pi)((t) => {
        var e, i, l, h, f, A, j;
        let {
            track: I,
            className: L,
            withAuthor: D = !1,
            withSecondaryColor: P = !1,
            withListeningProgress: E = !1,
            captionSize: R = "m",
            explicitSize: S = "xs",
            withExplicitMark: M = !0,
            titleContainerClassName: B,
            textClassName: U,
            playContextParams: w,
            withTimeLeftText: O = !0,
            ignoreDislikedStyles: G,
            withBookLink: W,
            albumArtists: z,
            withCustomTooltip: V = !0,
            hasLineClamp: K = !0,
            withSavingQueryParams: F,
            beforeTitle: Z,
          } = t,
          { fullscreenPlayer: H, sonataState: Y } = (0, p.oR4)(),
          { formatMessage: q } = (0, s.Z)(),
          X = (0, y.T)({ withCustomTooltip: V }),
          $ = (0, p.s0h)(I.albumUrl),
          J = (0, v.$H)({
            entityType: p.coP.AUDIOBOOK,
            entityId:
              null === (e = I.mainAlbum) || void 0 === e ? void 0 : e.id,
            newDisclaimerId: I.newModalDisclaimerId,
            isLegalRejected: !!(null === (i = I.mainAlbum) || void 0 === i
              ? void 0
              : i.isLegalRejected),
            isUnsafeLegal: !!(null === (l = I.mainAlbum) || void 0 === l
              ? void 0
              : l.isUnsafeLegal),
            callback: $,
          }),
          Q = (0, d.W)((t) => {
            H.modal.isOpened && H.modal.close(), J(t);
          }),
          tt = (0, T.N)({
            track: I,
            withSavingQueryParams: F,
            entityType: p.coP.AUDIOBOOK,
          }),
          te = !!(
            E &&
            w &&
            I.shouldRememberPosition &&
            I.streamProgress &&
            I.durationMs
          ),
          ti =
            I.id ===
              (null === (h = Y.entityMeta) || void 0 === h ? void 0 : h.id) &&
            (null === (A = Y.entityMeta) || void 0 === A
              ? void 0
              : null === (f = A.streamProgress) || void 0 === f
                ? void 0
                : f.endPositionSec),
          ta = (0, b.D)(te, I.streamProgress, ti),
          tn = (0, r.useMemo)(
            () => (0, C.p)(I.artists, z),
            [I.artists, z, I.id],
          ),
          tl = tn.length > 0 && D && !ta,
          tr = (0, r.useCallback)(
            (t) =>
              (0, a.jsx)(u.u, {
                enabled: X,
                offsetOptions: 4,
                placement: "top",
                text: I.title,
                hoverSettings: p.cHI,
                children: (0, a.jsx)(m.Caption, {
                  className: g().title,
                  type: "entity",
                  size: R,
                  variant: "span",
                  title: X ? void 0 : I.title,
                  ...t,
                  children: I.title,
                }),
              }),
            [X, R, I.title],
          ),
          ts = (0, r.useMemo)(() => {
            var t, e;
            return I.isRemoved
              ? (0, a.jsx)(o.Z, { id: "track-title.audiobook-not-found" })
              : I.hasAlbumLink && W
                ? (0, a.jsx)(x.rU, {
                    "aria-label": q(
                      { id: "entity-names.audiobook-name" },
                      {
                        bookName:
                          null === (t = I.mainAlbum) || void 0 === t
                            ? void 0
                            : t.title,
                      },
                    ),
                    className: g().albumLink,
                    href: I.albumUrl,
                    title: X ? void 0 : I.title,
                    onClick: Q,
                    ...(0, c.BA)(c.bG.track.TRACK_TITLE),
                    children: tr(),
                  })
                : I.hasTrackLink
                  ? (0, a.jsx)(x.rU, {
                      "aria-label": q(
                        { id: "entity-names.audiobook-name" },
                        {
                          bookName:
                            null === (e = I.mainAlbum) || void 0 === e
                              ? void 0
                              : e.title,
                        },
                      ),
                      className: g().albumLink,
                      href: I.url,
                      title: X ? void 0 : I.title,
                      onClick: tt,
                      ...(0, c.BA)(c.bG.track.TRACK_TITLE),
                      children: tr(),
                    })
                  : tr((0, c.BA)(c.bG.track.TRACK_TITLE));
          }, [
            I.isRemoved,
            I.hasAlbumLink,
            I.hasTrackLink,
            null === (j = I.mainAlbum) || void 0 === j ? void 0 : j.title,
            I.albumUrl,
            I.title,
            I.url,
            W,
            tr,
            q,
            X,
            Q,
            tt,
          ]),
          to = (0, r.useMemo)(() => (K ? 1 : 0), [K]);
        return (0, a.jsx)("div", {
          className: (0, n.W)(
            g().root,
            {
              [g().root_disabled]: !I.isAvailable,
              [g().root_disliked]: I.isDisliked && !G,
              [g().root_withSecondaryColor]: P,
            },
            L,
          ),
          children: (0, a.jsxs)("div", {
            className: (0, n.W)(g().metaContainer, N().metaContainer, {
              [N().metaContainer_oneLine]: !D,
            }),
            children: [
              (0, a.jsxs)("div", {
                className: (0, n.W)(g().titleContainer, B, N().titleContainer),
                children: [
                  (0, a.jsxs)(m.Caption, {
                    className: (0, n.W)(g().text, U),
                    type: "entity",
                    size: R,
                    variant: "div",
                    lineClamp: 1,
                    children: [Z, ts],
                  }),
                  I.trackExplicitMark &&
                    M &&
                    (0, a.jsx)(x.$i, {
                      getDescriptionTexts: I.getDescriptionTexts,
                      variant: I.trackExplicitMark,
                      className: g().explicitMark,
                      iconSize: S,
                    }),
                ],
              }),
              tl &&
                (0, a.jsx)(m.Caption, {
                  type: "entity",
                  size: R,
                  variant: "div",
                  lineClamp: 1,
                  className: (0, n.W)(g().text, N().artists, U),
                  children: (0, a.jsx)(k.jO, {
                    className: (0, n.W)(g().text, { [g().artists]: K }, U),
                    linkClassName: (0, n.W)(g().text, g().link),
                    captionClassName: (0, n.W)(g().text, g().artistCaption),
                    artists: tn,
                    withLink: !I.isUGC,
                    lineClamp: to,
                    captionSize: R,
                    withAllArtistsTitle: !0,
                    withCustomTooltip: X,
                  }),
                }),
              te &&
                I.streamProgress &&
                w &&
                (0, a.jsx)(_.DR, {
                  className: (0, n.W)(N().progress, {
                    [N().progress_withPreviousInfo]: tl,
                    [N().progress_disabled]: !I.isAvailable || I.isDisliked,
                  }),
                  id: I.id,
                  albumId: I.albumId,
                  streamProgress: I.streamProgress,
                  durationMs: I.durationMs || 0,
                  playContextParams: w,
                  withTimeLeftText: O,
                }),
            ],
          }),
        });
      });
    },
    40161: function (t, e, i) {
      "use strict";
      i.d(e, {
        PodcastMeta: function () {
          return A;
        },
      });
      var a = i(65301),
        n = i(9695),
        l = i(96233),
        r = i(99678),
        s = i(91207),
        o = i(37184),
        c = i(44729),
        d = i(26928),
        u = i(55975),
        m = i(33387),
        k = i(92249),
        v = i(81437),
        _ = i(5410),
        p = i(26382),
        x = i(58997),
        C = i(29778),
        y = i(75234),
        T = i(33579),
        b = i(83652),
        h = i(57765),
        g = i.n(h),
        f = i(68107),
        N = i.n(f);
      let A = (0, l.Pi)((t) => {
        var e, i, l, h, f, A;
        let {
            track: j,
            className: I,
            withPodcastName: L = !1,
            withDate: D = !0,
            withSecondaryColor: P = !1,
            withListeningProgress: E = !1,
            captionSize: R = "m",
            explicitSize: S = "xs",
            withExplicitMark: M = !0,
            titleContainerClassName: B,
            textClassName: U,
            playContextParams: w,
            withTimeLeftText: O = !0,
            ignoreDislikedStyles: G,
            withCustomTooltip: W = !0,
            withSavingQueryParams: z,
            beforeTitle: V,
          } = t,
          { fullscreenPlayer: K, sonataState: F } = (0, x.oR4)(),
          { formatMessage: Z } = (0, o.Z)(),
          H = (0, y.T)({ withCustomTooltip: W }),
          Y = (0, r.useSearchParams)(),
          { href: q } = (0, x.zBm)(z ? (0, x.rDv)(j.url, Y) : j.url),
          X = j.pubDate ? new Date(j.pubDate) : new Date(),
          $ = (0, x.u9c)(X),
          J = !1,
          Q = (0, x.s0h)(j.albumUrl),
          tt = (0, s.useMemo)(() => {
            var t;
            let e = Z(
              { id: "entity-names.podcast-name" },
              { podcastName: j.title },
            );
            return ""
              .concat(e, " ")
              .concat(null !== (t = j.version) && void 0 !== t ? t : "");
          }, [Z, j.title, j.version]),
          te = !!(
            E &&
            w &&
            j.shouldRememberPosition &&
            j.streamProgress &&
            j.durationMs
          ),
          ti =
            j.id ===
              (null === (e = F.entityMeta) || void 0 === e ? void 0 : e.id) &&
            (null === (l = F.entityMeta) || void 0 === l
              ? void 0
              : null === (i = l.streamProgress) || void 0 === i
                ? void 0
                : i.endPositionSec),
          ta = (0, b.D)(te, j.streamProgress, ti),
          tn = j.mainAlbum && L && !ta,
          tl = j.pubDate && D && !ta,
          tr = (0, _.$H)({
            entityType: x.coP.PODCAST,
            entityId:
              null === (h = j.mainAlbum) || void 0 === h ? void 0 : h.id,
            newDisclaimerId: j.newModalDisclaimerId,
            isLegalRejected: !!(null === (f = j.mainAlbum) || void 0 === f
              ? void 0
              : f.isLegalRejected),
            isUnsafeLegal: !!(null === (A = j.mainAlbum) || void 0 === A
              ? void 0
              : A.isUnsafeLegal),
            callback: Q,
          }),
          ts = (0, m.W)((t) => {
            K.modal.isOpened && K.modal.close(), tr(t);
          }),
          to = (0, T.N)({
            track: j,
            withSavingQueryParams: z,
            entityType: x.coP.PODCAST,
          }),
          tc = (0, s.useCallback)(() => {
            switch ($) {
              case x.UvK.TODAY:
                return (0, a.jsx)(c.Z, { id: "interface-actions.date-today" });
              case x.UvK.YESTERDAY:
                return (0, a.jsx)(c.Z, {
                  id: "interface-actions.date-yesterday",
                });
              case x.UvK.DATE_WITH_YEAR:
                return (0, a.jsx)(d.Ji, {
                  value: j.pubDate,
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                });
              default:
                return (0, a.jsx)(d.Ji, {
                  value: j.pubDate,
                  month: "long",
                  day: "numeric",
                });
            }
          }, [j.pubDate, $]);
        j.pubDate && D && (J = [x.UvK.TODAY, x.UvK.YESTERDAY].includes($));
        let td = (0, s.useCallback)(
            (t) =>
              (0, a.jsx)(k.u, {
                enabled: H,
                offsetOptions: 4,
                placement: "top",
                text: j.title,
                hoverSettings: x.cHI,
                children: (0, a.jsx)(v.Caption, {
                  className: g().title,
                  type: "entity",
                  size: R,
                  variant: "span",
                  title: H ? void 0 : j.title,
                  ...t,
                  children: j.title,
                }),
              }),
            [H, R, j.title],
          ),
          tu = (0, s.useMemo)(
            () =>
              j.isRemoved
                ? (0, a.jsx)(k.u, {
                    enabled: H,
                    offsetOptions: 4,
                    placement: "top",
                    text: Z({ id: "track-title.podcast-not-found" }),
                    hoverSettings: x.cHI,
                    children: (0, a.jsx)("span", {
                      children: (0, a.jsx)(c.Z, {
                        id: "track-title.podcast-not-found",
                      }),
                    }),
                  })
                : j.hasTrackLink
                  ? (0, a.jsx)(C.rU, {
                      onClick: to,
                      className: g().albumLink,
                      href: q,
                      "aria-label": tt,
                      title: H ? void 0 : j.title,
                      ...(0, u.BA)(u.bG.track.TRACK_TITLE),
                      children: td(),
                    })
                  : td((0, u.BA)(u.bG.track.TRACK_TITLE)),
            [j.isRemoved, j.hasTrackLink, j.title, td, H, Z, to, q, tt],
          );
        return (0, a.jsx)("div", {
          className: (0, n.W)(
            g().root,
            {
              [g().root_disabled]: !j.isAvailable,
              [g().root_disliked]: j.isDisliked && !G,
              [g().root_withSecondaryColor]: P,
            },
            I,
          ),
          children: (0, a.jsxs)("div", {
            className: (0, n.W)(g().metaContainer, N().podcastMetaContainer),
            children: [
              (0, a.jsxs)("div", {
                className: (0, n.W)(
                  g().titleContainer,
                  B,
                  N().podcastTitleContainer,
                ),
                children: [
                  (0, a.jsxs)(v.Caption, {
                    className: (0, n.W)(g().text, U),
                    type: "entity",
                    size: R,
                    variant: "div",
                    lineClamp: 1,
                    children: [V, tu],
                  }),
                  j.trackExplicitMark &&
                    M &&
                    (0, a.jsx)(C.$i, {
                      getDescriptionTexts: j.getDescriptionTexts,
                      variant: j.trackExplicitMark,
                      className: g().explicitMark,
                      iconSize: S,
                    }),
                ],
              }),
              (0, a.jsxs)(v.Caption, {
                type: "entity",
                size: R,
                variant: "div",
                lineClamp: 1,
                className: (0, n.W)(g().text, N().podcastName, U),
                children: [
                  tn &&
                    (0, a.jsx)(C.rU, {
                      "aria-label": Z(
                        { id: "entity-names.podcast-name" },
                        { podcastName: j.mainAlbum.title },
                      ),
                      className: g().link,
                      href: j.albumUrl,
                      title: H ? void 0 : j.mainAlbum.title,
                      onClick: ts,
                      children: (0, a.jsx)(k.u, {
                        enabled: H,
                        offsetOptions: 4,
                        placement: "top",
                        text: j.mainAlbum.title,
                        hoverSettings: x.cHI,
                        children: (0, a.jsx)(v.Caption, {
                          variant: "span",
                          type: "entity",
                          size: R,
                          className: g().albumTitle,
                          children: j.mainAlbum.title,
                        }),
                      }),
                    }),
                  tl &&
                    (0, a.jsx)(v.Caption, {
                      variant: "span",
                      type: "entity",
                      size: R,
                      className: (0, n.W)({
                        [N().dateWithName]: tn,
                        [N().soonDate]: J,
                        [N().dateDisabled]: !j.isAvailable,
                        [N().dateDisliked]: j.isDisliked && !G,
                      }),
                      children: tc(),
                    }),
                ],
              }),
              te &&
                j.streamProgress &&
                w &&
                (0, a.jsx)(p.DR, {
                  className: (0, n.W)(N().progress, {
                    [N().progress_withPreviousInfo]: tn || tl,
                    [N().progress_disabled]: !j.isAvailable || j.isDisliked,
                  }),
                  id: j.id,
                  albumId: j.albumId,
                  streamProgress: j.streamProgress,
                  durationMs: j.durationMs || 0,
                  playContextParams: w,
                  withTimeLeftText: O,
                }),
            ],
          }),
        });
      });
    },
    67419: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackMeta: function () {
          return g;
        },
      });
      var a = i(65301),
        n = i(9695),
        l = i(96233),
        r = i(99678),
        s = i(91207),
        o = i(37184),
        c = i(44729),
        d = i(55975),
        u = i(33387),
        m = i(92249),
        k = i(81437),
        v = i(9096),
        _ = i(58997),
        p = i(29778),
        x = i(31536),
        C = i(75234),
        y = i(33579),
        T = i(57438),
        b = i(57765),
        h = i.n(b);
      let g = (0, l.Pi)((t) => {
        let {
            className: e,
            titleContainerClassName: i,
            track: l,
            albumArtists: b,
            withExplicitMark: g = !0,
            withSecondaryColor: f,
            captionSize: N = "m",
            explicitSize: A = "xxxs",
            withAlbumLink: j,
            withAllArtistsTitle: I,
            textClassName: L,
            artistsClassName: D,
            ignoreDislikedStyles: P,
            withCustomTooltip: E = !0,
            hasLineClamp: R = !0,
            withSavingQueryParams: S,
            beforeTitle: M,
          } = t,
          { formatMessage: B } = (0, o.Z)(),
          { sendNavigateSearchFeedback: U } = (0, _.sAF)(),
          { fullscreenPlayer: w } = (0, _.oR4)(),
          O = (0, C.T)({ withCustomTooltip: E }),
          G = (0, r.useSearchParams)(),
          W = S ? (0, _.rDv)(l.url, G) : l.url,
          z = (0, _.s0h)(l.albumUrl),
          V = (0, s.useMemo)(() => {
            var t;
            let e = B(
              { id: "entity-names.track-name" },
              { trackName: l.title },
            );
            return ""
              .concat(e, " ")
              .concat(null !== (t = l.version) && void 0 !== t ? t : "");
          }, [B, l.title, l.version]),
          K = (0, T.useTrackDisclaimer)({ track: l, callback: z }),
          F = (0, u.W)((t) => {
            w.modal.isOpened && w.modal.close(), K(t);
          }),
          Z = (0, y.N)({
            track: l,
            onNavigate: U,
            withSavingQueryParams: S,
            entityType: _.coP.TRACK,
          }),
          H = (0, s.useCallback)(
            (t) => {
              let e = ""
                .concat(l.title, " ")
                .concat(!l.isRemoved && l.version ? l.version : "");
              return (0, a.jsx)(m.u, {
                enabled: O,
                offsetOptions: 4,
                placement: "top",
                text: e,
                hoverSettings: _.cHI,
                children: (0, a.jsx)(k.Caption, {
                  className: (0, n.W)(h().text, h().title),
                  type: "entity",
                  size: N,
                  weight: "medium",
                  variant: "span",
                  ...t,
                  children: l.title,
                }),
              });
            },
            [O, N, l.isRemoved, l.title, l.version],
          ),
          Y = (0, s.useMemo)(() => {
            let t = ""
              .concat(l.title, " ")
              .concat(!l.isRemoved && l.version ? l.version : "");
            return l.isRemoved
              ? (0, a.jsx)(m.u, {
                  enabled: O,
                  offsetOptions: 4,
                  placement: "top",
                  text: B({ id: "track-title.error-not-found" }),
                  hoverSettings: _.cHI,
                  children: (0, a.jsx)(k.Caption, {
                    className: (0, n.W)(h().text, h().title),
                    type: "entity",
                    size: N,
                    weight: "medium",
                    variant: "span",
                    title: O
                      ? void 0
                      : B({ id: "track-title.error-not-found" }),
                    children: (0, a.jsx)(c.Z, {
                      id: "track-title.error-not-found",
                    }),
                  }),
                })
              : l.hasAlbumLink && j
                ? (0, a.jsx)(p.rU, {
                    onClick: F,
                    className: h().albumLink,
                    href: l.albumUrl,
                    "aria-label": V,
                    title: O ? void 0 : t,
                    ...(0, d.BA)(d.bG.track.TRACK_TITLE),
                    children: H(),
                  })
                : l.hasTrackLink
                  ? (0, a.jsx)(p.rU, {
                      onClick: Z,
                      className: h().albumLink,
                      href: W,
                      "aria-label": V,
                      title: O ? void 0 : t,
                      ...(0, d.BA)(d.bG.track.TRACK_TITLE),
                      children: H(),
                    })
                  : H((0, d.BA)(d.bG.track.TRACK_TITLE));
          }, [
            l.title,
            l.isRemoved,
            l.version,
            l.hasAlbumLink,
            l.hasTrackLink,
            l.albumUrl,
            j,
            H,
            O,
            B,
            N,
            F,
            V,
            Z,
            W,
          ]),
          q = (0, x.p)(l.artists, b),
          X = (0, s.useMemo)(() => (R ? 1 : 0), [R]);
        return (0, a.jsx)("div", {
          className: (0, n.W)(
            h().root,
            {
              [h().root_disabled]: !l.isAvailable,
              [h().root_disliked]: l.isDisliked && !P,
              [h().root_withSecondaryColor]: f,
            },
            e,
          ),
          children: (0, a.jsxs)("div", {
            className: h().metaContainer,
            children: [
              (0, a.jsxs)("div", {
                className: (0, n.W)(
                  h().titleContainer,
                  { [h().titleContainer_withVersion]: l.version },
                  i,
                ),
                children: [
                  (0, a.jsxs)(k.Caption, {
                    className: (0, n.W)(h().text, L),
                    type: "entity",
                    size: N,
                    weight: "medium",
                    variant: "div",
                    lineClamp: 1,
                    children: [
                      M,
                      Y,
                      !l.isRemoved &&
                        l.version &&
                        (0, a.jsxs)(k.Caption, {
                          className: (0, n.W)(h().text, h().version),
                          type: "entity",
                          size: N,
                          weight: "medium",
                          variant: "span",
                          title: O ? void 0 : l.version,
                          children: ["\xa0", l.version],
                        }),
                    ],
                  }),
                  l.trackExplicitMark &&
                    g &&
                    (0, a.jsx)(p.$i, {
                      getDescriptionTexts: l.getDescriptionTexts,
                      iconSize: A,
                      variant: l.trackExplicitMark,
                      className: h().explicitMark,
                    }),
                ],
              }),
              q.length > 0 &&
                (0, a.jsx)(v.jO, {
                  className: (0, n.W)(h().text, { [h().artists]: R }, D, L),
                  linkClassName: (0, n.W)(h().text, h().link),
                  captionClassName: (0, n.W)(h().text, h().artistCaption),
                  artists: q,
                  withLink: !l.isUGC,
                  lineClamp: X,
                  captionSize: N,
                  withAllArtistsTitle: I,
                  withCustomTooltip: O,
                }),
            ],
          }),
        });
      });
    },
    28246: function (t, e, i) {
      "use strict";
      i.d(e, {
        e: function () {
          return d;
        },
      });
      var a = i(65301),
        n = i(9695),
        l = i(96233),
        r = i(81437),
        s = i(29778),
        o = i(12396),
        c = i.n(o);
      let d = (0, l.Pi)((t) => {
        let {
          className: e,
          track: i,
          position: l,
          onPlayButtonClick: o,
          isPlaying: d,
          isCurrent: u,
        } = t;
        return (0, a.jsxs)("div", {
          className: (0, n.W)(e, c().root, {
            [c().root_disabled]: !i.isAvailable,
            [c().root_playing]: d,
            [c().root_disliked]: i.isDisliked,
            [c().root_current]: u,
          }),
          children: [
            i.isAvailable &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(s.Up, { className: c().playingAnimation }),
                  (0, a.jsx)(s.JM, {
                    variant: "filled",
                    className: c().playButton,
                    iconClassName: c().playButtonIcon,
                    isPlaying: d,
                    onClick: o,
                    iconSize: "xs",
                  }),
                ],
              }),
            l &&
              (0, a.jsx)(r.Caption, {
                variant: "div",
                className: c().position,
                weight: "normal",
                type: "entity",
                size: "m",
                children: l,
              }),
          ],
        });
      });
    },
    35637: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackContextMenu: function () {
          return ta;
        },
      });
      var a = i(65301),
        n = i(9695),
        l = i(79491),
        r = i(96233),
        s = i(91207),
        o = i(37184),
        c = i(44729),
        d = i(3283),
        u = i(55975),
        m = i(98),
        k = i(97635),
        v = i(81404),
        _ = i(33387),
        p = i(82036),
        x = i(92154),
        C = i(48896),
        y = i(79578),
        T = i(26382),
        b = i(58997),
        h = i(29778),
        g = i(86784),
        f = i(37634);
      let N = (0, r.Pi)((t) => {
        let { track: e } = t,
          {
            modals: { ugcTrackEditModal: i },
          } = (0, b.oR4)(),
          n = (0, s.useCallback)(() => {
            i.open(e);
          }, [e, i]);
        return (0, a.jsx)(x.sN, {
          onClick: n,
          icon: (0, a.jsx)(p.Icon, { variant: "edit", size: "xxs" }),
          ...(0, u.BA)(u.bG.track.TRACK_CONTEXT_MENU_UGC_EDIT_BUTTON),
          children: (0, a.jsx)(c.Z, { id: "interface-actions.edit" }),
        });
      });
      var A = i(93422),
        j = i(43998),
        I = i(81437),
        L = i(67870),
        D = i.n(L);
      let P = (t) => {
        let { artist: e } = t,
          i = (0, b.s0h)(e.url),
          n = (0, s.useMemo)(() => {
            var t;
            return (
              "decomposed" in e &&
              (null === (t = e.decomposed) || void 0 === t
                ? void 0
                : t.reduce(
                    (t, e) => (t.push((0, a.jsx)(P, { artist: e }, e.id)), t),
                    [],
                  ))
            );
          }, [e]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(
              x.sN,
              {
                className: D().root,
                onClick: i,
                children: [
                  (0, a.jsx)(j.Paper, {
                    radius: "round",
                    className: D().cover,
                    children: (0, a.jsx)(A.Image, {
                      withAvatarReplace: !0,
                      src: "coverUri" in e ? e.coverUri : "",
                      size: 100,
                      fit: "contain",
                      className: D().image,
                    }),
                  }),
                  (0, a.jsx)(I.Caption, {
                    variant: "span",
                    size: "m",
                    weight: "medium",
                    lineClamp: 1,
                    children: e.name,
                  }),
                ],
              },
              e.url,
            ),
            n,
          ],
        });
      };
      var E = i(17778),
        R = i.n(E);
      let S = (0, r.Pi)((t) => {
        let { className: e, artists: i, artistId: n } = t,
          {
            fullscreenPlayer: l,
            settings: { isMobile: r },
          } = (0, b.oR4)(),
          { formatMessage: s } = (0, o.Z)(),
          d = (0, b.s0h)("/artist/".concat(n)),
          m = i.length > 1,
          k = (0, _.W)(() => {
            d(), l.modal.close();
          });
        return m
          ? (0, a.jsx)(x.v2, {
              isMobile: r,
              icon: (0, a.jsx)(p.Icon, { variant: "artist", size: "xxs" }),
              label: s({ id: "interface-actions.navigate-to-artists" }),
              ariaLabel: s({ id: "interface-actions.navigate-to-artists" }),
              ...(0, u.BA)(u.bG.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_ARTIST),
              children: i.map((t) => (0, a.jsx)(P, { artist: t }, t.id)),
            })
          : (0, a.jsx)(x.sN, {
              className: e,
              onClick: k,
              icon: (0, a.jsx)(p.Icon, {
                className: R().navigateToAlbumIcon,
                variant: "artist",
                size: "xxs",
              }),
              children: (0, a.jsx)(c.Z, {
                id: "interface-actions.navigate-to-artist",
              }),
            });
      });
      var M = i(82607),
        B = i(50684),
        U = i(99678),
        w = i(22820),
        O = i(47320);
      let G = (t) => {
          let { createPlaylist: e, fullscreenPlayer: i } = (0, b.oR4)(),
            { notify: n } = (0, b.d$W)(),
            l = (0, U.useRouter)(),
            { formatMessage: r } = (0, o.Z)(),
            s = (0, O.useAddTrackToPlaylist)(),
            c = (0, _.W)(async (t) => {
              var i;
              if (
                (await e.create({
                  title: r({ id: "entity-names.new-playlist" }),
                  visibility: w.w.PUBLIC,
                }),
                !(null == e
                  ? void 0
                  : null === (i = e.meta) || void 0 === i
                    ? void 0
                    : i.uuid))
              )
                return null;
              if (
                (await s({
                  playlist: e.meta,
                  track: t,
                  withPageRefresh: !1,
                  withFailNotification: !1,
                  withSuccessNotification: !1,
                })) === B.pX.OK
              ) {
                let t = (0, b.SZ_)("/playlists/".concat(e.meta.uuid));
                return e.reset(), t;
              }
              return null;
            });
          return (0, _.W)(async () => {
            let e = await c(t);
            e
              ? (i.modal.isOpened && i.modal.close(), l.push(e))
              : n((0, a.jsx)(B.wi, {}), {
                  containerId: i.modal.isOpened
                    ? b.W$x.FULLSCREEN_ERROR
                    : b.W$x.ERROR,
                });
          });
        },
        W = (t, e) => {
          var i, a;
          let n = -1;
          return (
            (null === (i = t.tracks) || void 0 === i ? void 0 : i.length) &&
              (n =
                null === (a = t.tracks) || void 0 === a
                  ? void 0
                  : a.findIndex((t) =>
                      t.albumId
                        ? String(t.id) === e.id && t.albumId === e.albumId
                        : String(t.id) === e.id,
                    )),
            { isTrackInPlaylist: n > -1, trackIndexInPlaylist: n }
          );
        };
      var z = i(72469),
        V = i(59986),
        K = i.n(V);
      let F = (t) => {
        let { playlist: e, track: i } = t,
          { formatMessage: n } = (0, o.Z)(),
          l = (0, O.useAddTrackToPlaylist)(),
          r = (0, z.B)(),
          { isTrackInPlaylist: c, trackIndexInPlaylist: d } = W(e, i),
          u = (0, s.useCallback)((evt) => {
            c
              ? r({ playlist: e, track: i, trackIndex: d })
              : l({ playlist: e, track: i });
          }, [l, r, e, i, d, c]);
        return (0, a.jsxs)(x.sN, {
          className: K().root,
          onClick: u,
          // preventCloseOnClick: true,
          children: [
            (0, a.jsx)(I.Caption, {
              variant: "div",
              lineClamp: 1,
              children: e.title,
            }),
            c &&
              (0, a.jsx)(p.Icon, {
                className: K().icon,
                size: "xxs",
                variant: "check",
                "aria-label": n({ id: "entity-names.track-in-playlist" }),
              }),
          ],
        });
      };
      var Z = i(87285),
        H = i.n(Z);
      let Y = (props) =>
          (0, a.jsx)(x.sN, {
            children: (0, a.jsx)(M.Shimmer, { className: H().shimmer }),
            ...props
          }),
        q = (0, r.Pi)((t) => {
          var e;
          let { track: i } = t,
            {
              user: l,
              contextMenuPlaylists: r,
              fullscreenPlayer: d,
              settings: { isMobile: m },
            } = (0, b.oR4)(),
            k = (0, T.SB)(i),
            { notify: v } = (0, b.d$W)(),
            C = G(i),
            { formatMessage: y } = (0, o.Z)(),
            [searchValue, setSearchValue] = (0, s.useState)(""),
            g = (0, _.W)(() => {
              k(),
                v((0, a.jsx)(T.Yc, { track: i }), {
                  containerId: d.modal.isOpened
                    ? b.W$x.FULLSCREEN_INFO
                    : b.W$x.INFO,
                });
            }),
            f = (0, s.useCallback)(
              (t) => {
                l.account.uid &&
                  r.getData({ userId: l.account.uid, page: t, pageSize: 20 });
              },
              [r, l.account.uid],
            ),
            N = (0, s.useCallback)(async () => {
              l.account.uid &&
                (await r.getData({
                  userId: l.account.uid,
                  page: 0,
                  pageSize: 20,
                }));
            }, [r, l.account.uid]);
          (0, s.useEffect)(
            () => () => {
              r.reset();
            },
            [r],
          );
          let A = (t) => {
              var e;
              let n =
                null == r
                  ? void 0
                  : null === (e = r.items) || void 0 === e
                    ? void 0
                    : e[t];

              if (!n) {
                return (0, a.jsx)(Y, {});
              }

              if (
                n.kind !== B.eX.LIKE &&
                n.title.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return (0, a.jsx)(F, { track: i, playlist: n }, n.uuid);
              }

              return (0, a.jsx)(Y, {
                style: { height: '0.1px', opacity: 0, padding: 0 },
              });
            },
            j = (0, s.useMemo)(() => {
              if (!i.isTrackNonMusic && r.isLoaded)
                return (0, a.jsxs)(x.sN, {
                  className: H().favouritesPlaylistItem,
                  // preventCloseOnClick: true,
                  onClick: g,
                  children: [
                    (0, a.jsx)(c.Z, { id: "entity-names.liked-playlist" }),
                    i.isLiked &&
                      (0, a.jsx)(p.Icon, {
                        className: H().icon,
                        size: "xxs",
                        variant: "check",
                        "aria-label": y({
                          id: "entity-names.track-in-playlist",
                        }),
                      }),
                  ],
                });
            }, [r.isLoaded, g, i, y]),
            onSearchChange = (0, s.useCallback)((e) => {
              setSearchValue(e.target.value);
            }, []),
            I = (0, s.useMemo)(() => {
              var t, e, i;
              return r.isLoaded
                ? (0, a.jsx)(h.Wv, {
                    className: (0, n.W)(H().virtualScroll, H().important),
                    listClassName: H().content,
                    customComponents: { Header: () => j },
                    itemContentCallback: A,
                    context: {
                      listAriaLabel: y({ id: "entity-names.playlists-list" }),
                    },
                    totalCount:
                      null !==
                        (e =
                          null == r
                            ? void 0
                            : null === (t = r.pager) || void 0 === t
                              ? void 0
                              : t.total) && void 0 !== e
                        ? e
                        : 0,
                    onGetDataByPage: f,
                    pageSize: 20,
                    withFooter: !1,
                    totalRequests:
                      null !== (i = r.requests) && void 0 !== i ? i : 0,
                    alwaysShowScrollbar: !0,
                    isMobileLayout: m,
                    useWindowScroll: m,
                  })
                : [...Array(7)].map((t, e) => (0, a.jsx)(Y, {}, e));
            }, [
              r.loadingState,
              null == r
                ? void 0
                : null === (e = r.pager) || void 0 === e
                  ? void 0
                  : e.total,
              r.requests,
              f,
              k,
              C,
              searchValue,
            ]);
          return (0, a.jsxs)(x.v2, {
            offsetOptions: 3,
            onShow: N,
            icon: (0, a.jsx)(p.Icon, { variant: "addToPlaylist", size: "xxs" }),
            label: y({ id: "playlist-actions.add-track-to-playlist" }),
            ariaLabel: y({ id: "playlist-actions.add-track-to-playlist" }),
            disabled: !l.isAuthorized,
            menuClassName: H().menu,
            listClassName: H().listMenu,
            ...(0, u.BA)(u.bG.track.TRACK_CONTEXT_MENU_ADD_TO_PLAYLIST_BUTTON),
            children: [
              (0, a.jsx)(x.sN, {
                onClick: C,
                icon: (0, a.jsx)(p.Icon, { variant: "add", size: "xxs" }),
                children: (0, a.jsx)(c.Z, {
                  id: "playlist-actions.create-playlist",
                }),
              }),
              (0, a.jsx)("div", {
                className: H().root,
                children: [
                  (0, a.jsx)("input", {
                    type: "text",
                    placeholder: "Найти плейлист",
                    className:
                      "HbaqudSqu7Q3mv3zMPGr ContextMenuPlaylistItem_root__jhTvn EiyUV4aCJzpfNzuihfMM",
                    style: {
                      border: "none",
                    },
                    onChange: onSearchChange,
                    onKeyDown: (e) => {
                      e.stopPropagation();
                    },
                  }),
                  I,
                ],
              }),
            ],
          });
        });
      var X = i(38593),
        $ = i(82640),
        J = i.n($);
      let Q = (0, r.Pi)((t) => {
        let { track: e } = t,
          i = (0, b.h1d)(),
          n = (0, X.s)(),
          l = (0, s.useCallback)(() => {
            if (e.isDownloaded) {
              null == i || i.deleteTrack(e.entityId),
                n.count(b.YHm.TRACK_DELETE, b.OIz);
              return;
            }
            if (e.isDownloading) {
              null == i || i.stopDownload(e.entityId);
              return;
            }
            null == i || i.download(e.entityId),
              n.count(b.YHm.TRACK_DOWNLOAD, b.OIz);
          }, [n, i, e.entityId, e.isDownloaded, e.isDownloading]),
          r = (0, s.useMemo)(
            () =>
              e.isDownloaded
                ? (0, a.jsx)(c.Z, { id: "offline.delete-from-device" })
                : e.isDownloading
                  ? (0, a.jsx)(c.Z, { id: "offline.stop-downloading" })
                  : (0, a.jsx)(c.Z, { id: "offline.download" }),
            [e.isDownloaded, e.isDownloading],
          ),
          o = (0, s.useMemo)(
            () =>
              e.isDownloaded
                ? (0, a.jsx)(p.Icon, { variant: "upload", size: "xxs" })
                : e.isDownloading
                  ? (0, a.jsx)(h.kQ, {
                      value: e.downloadingProgress,
                      size: 20,
                      withCancelIcon: !0,
                      className: J().downloadingProgress,
                      progressBarClassName: J().progress,
                      cancelIconClassName: J().cancelIcon,
                    })
                  : (0, a.jsx)(p.Icon, { variant: "download", size: "xxs" }),
            [e.downloadingProgress, e.isDownloaded, e.isDownloading],
          );
        return (0, a.jsx)(x.sN, {
          onClick: l,
          icon: o,
          className: J().root,
          ...(0, u.BA)(u.r9.CONTEXT_MENU_DOWNLOAD_BUTTON),
          children: r,
        });
      });
      var tt = i(83769),
        te = i.n(tt);
      let ti = (0, r.Pi)((t) => {
          let { track: e } = t,
            {
              settings: { isMobile: i },
            } = (0, b.oR4)();
          return e.isUGC && i
            ? (0, a.jsxs)("div", {
                className: te().ugcLabel,
                children: [
                  (0, a.jsx)(p.Icon, { variant: "eye_crossed", size: "xxs" }),
                  (0, a.jsx)(I.Caption, {
                    variant: "span",
                    size: "s",
                    children: (0, a.jsx)(c.Z, { id: "ugc.track-description" }),
                  }),
                ],
              })
            : null;
        }),
        ta = (0, r.Pi)((t) => {
          var e, i, r, A, j, I, L, D, P, E, M, B, U, w, O;
          let {
              track: G,
              onOpenChange: W,
              open: z,
              placement: V,
              isFullscreenMobile: K = !1,
              icon: F,
              size: Z,
              utmLink: H,
              handleRemove: Y,
              withTrailer: X = !0,
              ...$
            } = t,
            {
              shouldShowBuySubscriptionModal: J,
              showBuySubscriptionModal: tt,
            } = (0, b.vLf)(),
            te = (0, b.R$C)(),
            {
              settings: ta,
              currentTrackInfo: tn,
              experiments: tl,
              fullscreenPlayer: tr,
              trailer: ts,
              sonataState: { entityMeta: to, isVibeContext: tc },
              trackLyrics: td,
              album: tu,
              advert: tm,
              track: tk,
              user: tv,
              slam: t_,
            } = (0, b.oR4)(),
            { notify: tp } = (0, b.d$W)(),
            { formatMessage: tx } = (0, o.Z)(),
            { modal: tC } = td,
            { modal: ty } = tn,
            tT = (0, T.OC)(G, T.h0.NEXT),
            tb = (0, T.OC)(G, T.h0.LAST),
            th = (0, T.SB)(G),
            tg = (0, T.KX)(G),
            tf = (0, C.SB)(G.mainAlbum),
            tN = (0, T.Ey)(G),
            tA = (0, b.FTC)(),
            tj = "".concat(b.aUg.TRACK, "-").concat(G.id),
            tI = K || ta.isMobile,
            { href: tL } = (0, b.qKB)(G.url),
            tD = (0, f.useTrackAboutModalTitle)(G),
            tP = (0, y.L)(),
            tE =
              (0, b.RVp)() &&
              (null === (e = G.mainAlbum) || void 0 === e
                ? void 0
                : e.isNonMusic),
            tR =
              (null == to ? void 0 : to.id) === G.id &&
              (null == to ? void 0 : to.albumId) ===
                (null === (i = G.mainAlbum) || void 0 === i ? void 0 : i.id),
            tS = !!(
              (0, m.x)(null == te ? void 0 : te.state.currentContext.value) ||
              (0, k.Q)(null == te ? void 0 : te.state.currentContext.value)
            ),
            tM =
              (null == tu
                ? void 0
                : null === (r = tu.meta) || void 0 === r
                  ? void 0
                  : r.listeningFinished) ||
              (tR &&
                (null == to
                  ? void 0
                  : null === (A = to.streamProgress) || void 0 === A
                    ? void 0
                    : A.hasEverFinished)) ||
              (null === (j = G.streamProgress) || void 0 === j
                ? void 0
                : j.hasEverFinished),
            tB =
              tl.checkExperiment(b.peG.WebNextEnableDownloadControls, "on") &&
              tv.hasPlus &&
              G.isAvailableForDownload,
            { canRemoveTrackFromPlaylist: tU, removeTrackFromPlaylist: tw } =
              (0, g.useRemoveTrackFromPlaylistByIndex)(),
            { isPlaying: tO, togglePlay: tG } = (0, b.QhE)({
              seeds:
                null !== (O = null == G ? void 0 : G.seeds) && void 0 !== O
                  ? O
                  : [],
              pageIdForFrom: b.Rhz.RADIO,
              blockIdForFrom: tj,
            }),
            tW = (0, s.useCallback)(() => {
              if (J && tv.isAuthorized) {
                tt();
                return;
              }
              if (tm.isAdvertShown) {
                tp((0, a.jsx)(h.vd, {}), { containerId: b.W$x.INFO });
                return;
              }
              tO || tG();
            }, [J, tv.isAuthorized, tm.isAdvertShown, tO, tt, tp, tG]),
            tz = (0, s.useCallback)(() => {
              if (J) {
                tt();
                return;
              }
              if (tm.isAdvertShown) {
                tp((0, a.jsx)(h.vd, {}), { containerId: b.W$x.INFO });
                return;
              }
              ts.setUtmLink(H),
                ts.openTrackTrailer(G.entityId),
                tA(d.OB.Track, G.id);
            }, [J, tm.isAdvertShown, ts, H, G.entityId, G.id, tA, tt, tp]),
            tV = (0, s.useCallback)(() => {
              var t;
              tn.setTrack({
                id: G.id,
                albumId:
                  (null === (t = G.mainAlbum) || void 0 === t
                    ? void 0
                    : t.id) || null,
                isUGC: G.isUGC || null,
              }),
                tk.isOpened && tk.close(),
                ty.open();
            }, [
              tn,
              G.id,
              G.isUGC,
              null === (I = G.mainAlbum) || void 0 === I ? void 0 : I.id,
              ty,
              tk,
            ]),
            tK = (0, s.useCallback)(() => {
              G.clipIds && tP((0, l.ZN)(G.clipIds));
            }, [tP, G.clipIds]),
            tF = (0, s.useCallback)(() => {
              if (J && tv.isAuthorized) {
                tt();
                return;
              }
              td.setTrack(G), tk.isOpened && tk.close(), tC.open();
            }, [J, tt, G, td, tC, tk, tv.isAuthorized]),
            tZ = (0, s.useCallback)(() => {
              if (J && tv.isAuthorized) {
                tt();
                return;
              }
              tr.syncLyrics.isVisible
                ? tr.syncLyrics.setInvisible()
                : tr.showSyncLyrics();
            }, [tr, J, tt, tv.isAuthorized]),
            tH = (0, s.useCallback)(() => {
              null == Y || Y(), null == W || W(!1);
            }, [Y, W]),
            tY = (0, _.W)(
              () => G.isSyncLyricsAvailable && tr.modal.isOpened && tI,
            ),
            tq = (0, _.W)(() => G.hasLyrics && !tr.modal.isOpened),
            tX = (0, _.W)(() => {
              var t;
              return (
                (null === (t = G.trailer) || void 0 === t
                  ? void 0
                  : t.isAvailable) &&
                !tr.modal.isOpened &&
                X
              );
            }),
            {
              withSyncLyricsItem: t$,
              withLyricsItem: tJ,
              withTrailerItem: tQ,
            } = (0, s.useMemo)(
              () => ({
                withSyncLyricsItem: tY(),
                withLyricsItem: tq(),
                withTrailerItem: tX(),
              }),
              [
                tY,
                tq,
                tX,
                G.isSyncLyricsAvailable,
                G.hasLyrics,
                null === (L = G.trailer) || void 0 === L
                  ? void 0
                  : L.isAvailable,
              ],
            );
          (0, b.ZP4)(z);
          let t0 = !tE,
            t9 = !G.isUGC && !tE,
            t7 = !tE,
            t5 = !tI,
            t3 = tE && tf,
            t8 = tl.checkExperiment(b.peG.WebNextTrackAboutModal, "on") && !tI,
            t2 = G.albums.length || G.mainAlbum,
            t1 =
              !!(null === (D = G.artists) || void 0 === D
                ? void 0
                : D.length) &&
              ((null === (P = G.mainAlbum) || void 0 === P
                ? void 0
                : P.isAudiobook) ||
                (null === (E = G.mainAlbum) || void 0 === E
                  ? void 0
                  : E.isAlbum) ||
                G.isTrackAudiobook ||
                G.isTrackMusic),
            t4 = tl.checkExperiment(b.peG.WebNextPlayQueue, "on") && !tS && to,
            t6 = tl.checkExperiment(b.peG.WebNextUGC, "on") && G.isUGC,
            et = tr.isPlayQueueMode && Y && !tc,
            ee =
              tl.checkExperiment(b.peG.WebNextClips, "on") &&
              (null === (M = G.clipIds) || void 0 === M ? void 0 : M.length),
            ei = {
              variant: b.GGO.TRACK,
              id: G.id,
              title: G.title,
              path: G.url,
              trackAlbumArtistName: G.artistName,
              trackAlbumId: G.albumId,
            };
          return t_.isOfflineModeEnabled
            ? (0, a.jsxs)(x.v2, {
                isMobile: tI,
                placement: V,
                offsetOptions: 10,
                open: z,
                onOpenChange: W,
                icon: F,
                size: Z,
                containerProps: (0, u.BA)(u.bG.track.TRACK_CONTEXT_MENU),
                ariaLabel: tx({ id: "interface-actions.context-menu" }),
                variant: "text",
                ...$,
                children: [
                  tB && (0, a.jsx)(Q, { track: G }),
                  (0, a.jsx)(h.zq, {
                    disabled:
                      G.isUGC || G.trackSource === v.z.OWN_REPLACED_TO_UGC,
                    shareLink: tL,
                    entityMeta: ei,
                  }),
                ],
              })
            : (0, a.jsxs)(x.v2, {
                isMobile: tI,
                placement: V,
                offsetOptions: 10,
                open: z,
                onOpenChange: W,
                icon: F,
                size: Z,
                containerProps: (0, u.BA)(u.bG.track.TRACK_CONTEXT_MENU),
                ariaLabel: tx({ id: "interface-actions.context-menu" }),
                variant: "text",
                ...$,
                children: [
                  (0, a.jsx)(ti, { track: G }),
                  tI &&
                    (0, a.jsx)(h.TF, {
                      getDescriptionTexts: G.getDescriptionTexts,
                      entityId: G.id,
                    }),
                  tE && (0, a.jsx)(h.XB, { onClick: tN, isFinished: tM }),
                  t0 && (0, a.jsx)(h.xZ, { onClick: th, isLiked: G.isLiked }),
                  tQ && (0, a.jsx)(h.NB, { onClick: tz }),
                  t9 &&
                    (0, a.jsx)(h.GQ, {
                      onClick: tW,
                      variant: b.xIL.TRACK,
                      disabled: !G.isAvailable,
                      onOpenMenuChange: W,
                    }),
                  ee &&
                    (0, a.jsx)(x.sN, {
                      onClick: tK,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "clip",
                        size: "xxs",
                      }),
                      ...(0, u.BA)(
                        u.bG.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_CLIP_BUTTON,
                      ),
                      children: (0, a.jsx)(c.Z, {
                        id: "non-music.navigate-to-clip",
                      }),
                    }),
                  tB && (0, a.jsx)(Q, { track: G }),
                  t4 &&
                    (0, a.jsx)(x.sN, {
                      onClick: tT,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "playNext",
                        size: "xxs",
                      }),
                      disabled: !tv.isAuthorized,
                      ...(0, u.BA)(
                        u.bG.track.TRACK_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                      ),
                      children: (0, a.jsx)(c.Z, { id: "play-queue.play-next" }),
                    }),
                  t4 &&
                    (0, a.jsx)(x.sN, {
                      onClick: tb,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "playLast",
                        size: "xxs",
                      }),
                      disabled: !tv.isAuthorized,
                      ...(0, u.BA)(
                        u.bG.track.TRACK_CONTEXT_MENU_PLAY_LAST_BUTTON,
                      ),
                      children: (0, a.jsx)(c.Z, { id: "play-queue.play-last" }),
                    }),
                  t$ &&
                    !tr.syncLyrics.isVisible &&
                    (0, a.jsx)(x.sN, {
                      className: (0, n.W)({ [R().syncLyrics]: K }),
                      onClick: tZ,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "syncLyrics",
                        size: "xxs",
                      }),
                      disabled: !tv.isAuthorized,
                      ...(0, u.BA)(
                        u.bG.track.TRACK_CONTEXT_MENU_SHOW_SYNC_LYRICS_BUTTON,
                      ),
                      children: (0, a.jsx)(c.Z, {
                        id: "interface-actions.open-sync-lyrics",
                      }),
                    }),
                  t$ &&
                    tr.syncLyrics.isVisible &&
                    (0, a.jsx)(x.sN, {
                      className: (0, n.W)({ [R().syncLyrics]: K }),
                      onClick: tZ,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "syncLyrics",
                        size: "xxs",
                      }),
                      ...(0, u.BA)(
                        u.bG.track.TRACK_CONTEXT_MENU_HIDE_SYNC_LYRICS_BUTTON,
                      ),
                      children: (0, a.jsx)(c.Z, {
                        id: "interface-actions.hide-sync-lyrics",
                      }),
                    }),
                  et &&
                    (0, a.jsx)(x.sN, {
                      onClick: tH,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "bucket",
                        size: "xxs",
                      }),
                      children: (0, a.jsx)(c.Z, {
                        id: "play-queue.delete-from-queue",
                      }),
                    }),
                  t7 &&
                    (0, a.jsx)(h.ZL, { onClick: tg, isDisliked: G.isDisliked }),
                  t5 && (0, a.jsx)(q, { track: G }),
                  tJ &&
                    (0, a.jsx)(x.sN, {
                      disabled: !tv.isAuthorized,
                      onClick: tF,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "lyrics",
                        size: "xxs",
                      }),
                      ...(0, u.BA)(u.bG.track.TRACK_CONTEXT_MENU_LYRICS_BUTTON),
                      children: (0, a.jsx)(c.Z, {
                        id: "interface-actions.open-lyrics",
                      }),
                    }),
                  (0, a.jsx)(h.zq, {
                    disabled:
                      G.isUGC || G.trackSource === v.z.OWN_REPLACED_TO_UGC,
                    shareLink: tL,
                    entityMeta: ei,
                  }),
                  t2 &&
                    (null === (B = G.mainAlbum) || void 0 === B
                      ? void 0
                      : B.url) &&
                    (0, a.jsx)(h.CC, {
                      albumUrl: G.mainAlbum.url,
                      albumType: G.mainAlbum.type,
                      trackType: G.type,
                    }),
                  t1 &&
                    G.artists[0] &&
                    (0, a.jsx)(S, {
                      artists: G.artists,
                      artistId: G.artists[0].id,
                    }),
                  t3 &&
                    (0, a.jsx)(h.qq, {
                      onClick: tf,
                      isLiked:
                        null === (U = G.mainAlbum) || void 0 === U
                          ? void 0
                          : U.isLiked,
                      albumType:
                        null === (w = G.mainAlbum) || void 0 === w
                          ? void 0
                          : w.type,
                    }),
                  t6 && (0, a.jsx)(N, { track: G }),
                  tU &&
                    (0, a.jsx)(x.sN, {
                      onClick: tw,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "bucket",
                        size: "xxs",
                      }),
                      ...(0, u.BA)(
                        u.bG.track
                          .TRACK_CONTEXT_MENU_REMOVE_TRACK_FROM_PLAYLIST_BUTTON,
                      ),
                      children: (0, a.jsx)(c.Z, {
                        id: "playlist-actions.remove-from-playlist",
                      }),
                    }),
                  t8 &&
                    (0, a.jsx)(x.sN, {
                      onClick: tV,
                      icon: (0, a.jsx)(p.Icon, {
                        variant: "info",
                        size: "xxs",
                      }),
                      ...(0, u.BA)(
                        u.bG.track.TRACK_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                      ),
                      children: tD,
                    }),
                ],
              });
        });
    },
    55044: function (t, e, i) {
      "use strict";
      i.d(e, {
        Lyrics: function () {
          return d;
        },
      });
      var a = i(65301),
        n = i(37184),
        l = i(55975),
        r = i(81437),
        s = i(29778),
        o = i(87736),
        c = i.n(o);
      let d = (t) => {
        let {
            lyrics: e,
            authors: i,
            source: o,
            isShimmerVisible: d,
            isShimmerActive: u,
          } = t,
          { formatMessage: m } = (0, n.Z)();
        return d
          ? (0, a.jsx)(s.Yh, { count: 25, isActive: u })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                e,
                (0, a.jsxs)("div", {
                  className: c().writers,
                  children: [
                    i.length > 0 &&
                      (0, a.jsx)(r.Caption, {
                        variant: "div",
                        size: "l",
                        weight: "medium",
                        ...(0, l.BA)(l.QM.content.TRACK_LYRICS_AUTHORS),
                        children: m(
                          { id: "entity-names.authors" },
                          { authors: i },
                        ),
                      }),
                    o &&
                      (0, a.jsx)(r.Caption, {
                        variant: "div",
                        size: "l",
                        weight: "medium",
                        ...(0, l.BA)(l.QM.content.TRACK_LYRICS_SOURCE),
                        children: m(
                          { id: "entity-names.source" },
                          { source: o },
                        ),
                      }),
                  ],
                }),
              ],
            });
      };
    },
    97062: function (t, e, i) {
      "use strict";
      i.d(e, {
        SearchTrackCard: function () {
          return C;
        },
      });
      var a = i(65301),
        n = i(9695),
        l = i(96233),
        r = i(91207),
        s = i(55975),
        o = i(19489),
        c = i(69847),
        d = i(35068),
        u = i(60383),
        m = i(58997),
        k = i(29778),
        v = i(57438),
        _ = i(84486),
        p = i(40161),
        x = i(67419);
      let C = (0, l.Pi)((t) => {
        var e;
        let { className: i, track: l, pageId: C } = t,
          { ref: y, intersectionPropertyId: T } = (0, m.VfV)(),
          { track: b } = (0, m.oR4)(),
          { from: h } = (0, m.MhG)({ pageId: C }),
          {
            isPlaying: g,
            isCurrent: f,
            togglePlay: N,
            restartPlay: A,
          } = (0, m.qmq)({
            playContextParams: {
              contextData: {
                type: o.A.Various,
                meta: { id: l.entityId },
                from: h,
                overrideContextType: c.Z.Search,
              },
              queueParams: { index: 0 },
              loadContextMeta: !0,
            },
            entityId: l.entityId,
          }),
          j = (0, v.useTrackDisclaimer)({ track: l, callback: N }),
          I = (0, r.useCallback)(() => {
            b.open({ trackId: l.id, albumId: l.albumId });
          }, [b, l.id, l.albumId]),
          L = (0, v.useTrackDisclaimer)({ track: l, callback: I }),
          D = (0, r.useCallback)(() => {
            g ? A() : j();
          }, [j, g, A]),
          P = (0, r.useCallback)(
            (t) => {
              2 === t.detail
                ? D()
                : (l.hasTrackLink && L(), (0, u.m)(t, k.$C.ripple));
            },
            [L, D, l.hasTrackLink],
          ),
          E = (0, r.useCallback)(
            (t) =>
              (0, a.jsx)(k.Df, {
                isAvailable: l.isAvailable,
                isDisliked: l.isDisliked,
                coverUri: l.coverUri,
                title: l.title,
                className: k.$C.playButtonCell,
                ...t,
              }),
            [l],
          ),
          R =
            null == E
              ? void 0
              : E({ onPlayButtonClick: j, isPlaying: g, isCurrent: f });
        return (0, a.jsxs)(k.Md, {
          ref: y,
          "data-intersection-property-id": T,
          className: (0, n.W)(k.$C.root, i),
          "aria-label": ""
            .concat(l.artistsNames, " ")
            .concat(l.title, " ")
            .concat(null !== (e = l.version) && void 0 !== e ? e : ""),
          onClick: P,
          ...(0, s.BA)(s.bG.track.SEARCH_TRACK_CARD),
          children: [
            R,
            l.type === d.V.PODCAST
              ? (0, a.jsx)(p.PodcastMeta, {
                  track: l,
                  playContextParams: {
                    contextData: {
                      type: o.A.Various,
                      meta: {
                        id: l.albumId
                          ? "".concat(l.id, ":").concat(l.albumId)
                          : l.id,
                      },
                      from: h,
                    },
                    queueParams: { index: 0 },
                    loadContextMeta: !0,
                  },
                  withPodcastName: !0,
                  withListeningProgress: !0,
                })
              : (0, a.jsx)(x.TrackMeta, { track: l }),
            (0, a.jsx)(_.ControlsBar, {
              className: k.$C.controlsBarCell,
              track: l,
            }),
          ],
        });
      });
    },
    3060: function (t, e, i) {
      "use strict";
      i.d(e, {
        f: function () {
          return _;
        },
      });
      var a = i(65301),
        n = i(9695),
        l = i(96233),
        r = i(91207),
        s = i(37184),
        o = i(33387),
        c = i(60383),
        d = i(58997),
        u = i(29778),
        m = i(57438),
        k = i(71039),
        v = i.n(k);
      let _ = (0, l.Pi)((t) => {
        let {
            className: e,
            track: i,
            meta: l,
            beforeBlock: k,
            controls: _,
            playButtonCellRender: p,
            withLightning: x,
            isPlaying: C,
            isCurrent: y,
            togglePlay: T,
            restartPlay: b,
            onPlayClick: h,
            ...g
          } = t,
          { shouldShowBuySubscriptionModal: f, showBuySubscriptionModal: N } =
            (0, d.vLf)(),
          { formatMessage: A } = (0, s.Z)(),
          { track: j } = (0, d.oR4)(),
          { ref: I, intersectionPropertyId: L } = (0, d.VfV)(),
          D = (0, m.useTrackDisclaimer)({ track: i, callback: T }),
          P = (0, o.W)(() => {
            j.open({ trackId: i.id, albumId: i.albumId });
          }),
          E = (0, m.useTrackDisclaimer)({ track: i, callback: P }),
          { sendPlaySearchFeedback: R } = (0, d.sAF)(),
          [S, M] = (0, r.useState)(!1),
          B = (0, o.W)(() => {
            if (f) {
              N();
              return;
            }
            S || C || (M(!0), null == R || R()), D(), null == h || h(!C);
          }),
          U = (0, o.W)(() => {
            if (C) {
              b();
              return;
            }
            B();
          }),
          w = (0, o.W)((t) => {
            if (!i.isAvailable) {
              f && i.isAvailableOnlyForPlus && N();
              return;
            }
            if (f) {
              N();
              return;
            }
            if (((0, c.m)(t, v().ripple), 2 === t.detail)) {
              U();
              return;
            }
            1 === t.detail && i.hasTrackLink && E();
          }),
          O =
            null == p
              ? void 0
              : p({ onPlayButtonClick: B, isPlaying: C, isCurrent: y }),
          G = (0, r.useMemo)(() => {
            var t;
            if (!i.isAvailable)
              return ""
                .concat(A({ id: "extra-explicit.play-unavailable" }), " ")
                .concat(i.artistsNames, " ")
                .concat(i.title);
            let e = x ? A({ id: "entity-names.popular-among-users" }) : "";
            return ""
              .concat(i.artistsNames, " ")
              .concat(i.title, " ")
              .concat(null !== (t = i.version) && void 0 !== t ? t : "", " ")
              .concat(e);
          }, [A, i.artistsNames, i.isAvailable, i.title, i.version, x]);
        return (0, a.jsxs)(u.Md, {
          ref: I,
          "aria-label": G,
          "data-intersection-property-id": L,
          onClick: w,
          className: (0, n.W)(
            v().root,
            { [v().root_disabled]: !i.isAvailable },
            e,
          ),
          ...g,
          children: [k, O, l, _],
        });
      });
    },
    9730: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackCard: function () {
          return I;
        },
      });
      var a = i(65301),
        n = i(9695),
        l = i(96233),
        r = i(91207),
        s = i(37184),
        o = i(19489),
        c = i(33387),
        d = i(32907),
        u = i(28257),
        m = i(43998),
        k = i(81437),
        v = i(48896),
        _ = i(9096),
        p = i(26382),
        x = i(58997),
        C = i(29778),
        y = i(57438),
        T = i(61347),
        b = i.n(T),
        h = i(44729),
        g = i(3283),
        f = i(55975),
        N = i(82036),
        A = i(35637);
      let j = (0, l.Pi)((t) => {
          let {
              track: e,
              handleLikeButtonClick: i,
              handlePlayButtonClick: l,
              isPlaying: s,
            } = t,
            { advert: o, trailer: m } = (0, x.oR4)(),
            { notify: k } = (0, x.d$W)(),
            [v, _] = (0, r.useState)(!1),
            [p, y] = (0, r.useState)(!1),
            T = (0, x.FTC)(),
            j = (0, c.W)(() => {
              _(!v), y(!v);
            }),
            I = (0, c.W)((t) => {
              t.preventDefault(), t.stopPropagation();
            }),
            L = (0, c.W)((t) => {
              if ((t.stopPropagation(), o.isAdvertShown)) {
                t.preventDefault(),
                  k((0, a.jsx)(C.vd, {}), { containerId: x.W$x.INFO });
                return;
              }
              m.openTrackTrailer(e.id), T(g.OB.Track, e.id);
            }),
            D = (0, d.V)(() => {
              var t;
              if (
                null == e
                  ? void 0
                  : null === (t = e.trailer) || void 0 === t
                    ? void 0
                    : t.isAvailable
              )
                return (0, a.jsx)(
                  C.xf,
                  {
                    children: (0, a.jsx)(C.eP, {
                      className: (0, n.W)(b().trailerButton, b().control),
                      radius: "round",
                      size: "s",
                      iconSize: "xxs",
                      onClick: L,
                    }),
                  },
                  e.getKey("TrackCardTrailerTooltip"),
                );
            });
          return (0, a.jsx)(u.kk, {
            isVisible: v || p,
            className: b().controls,
            labelText: (0, a.jsx)(h.Z, { id: "entity-names.track" }),
            playControl: (0, a.jsx)(
              C.JM,
              {
                className: (0, n.W)(b().playButton, b().control),
                buttonVariant: "default",
                withHover: !1,
                iconSize: "xl",
                variant: "filled",
                isPlaying: s,
                onClick: l,
              },
              e.getKey("PlayButton"),
            ),
            likeControl: (0, a.jsx)(
              C.dJ,
              {
                className: (0, n.W)(b().likeButton, b().control),
                isLiked: e.isLiked,
                onClick: i,
                variant: "default",
                size: "s",
                iconSize: "xxs",
              },
              e.getKey("LikeButton"),
            ),
            menuControl: (0, a.jsx)(
              A.TrackContextMenu,
              {
                placement: "bottom",
                track: e,
                onOpenChange: j,
                open: v,
                onClick: I,
                className: (0, n.W)(b().menuButton, b().control),
                icon: (0, a.jsx)(N.Icon, { size: "xxs", variant: "more" }),
                size: "s",
                ...(0, f.BA)(f.bG.track.TRACK_CONTEXT_MENU_BUTTON),
              },
              e.getKey("TrackContextMenu"),
            ),
            trailerControl: D,
          });
        }),
        I = (0, l.Pi)((t) => {
          let {
              className: e,
              children: i,
              track: l,
              contentLinesCount: T,
              overrideContextType: h,
            } = t,
            { from: g } = (0, x.MhG)(),
            { track: f } = (0, x.oR4)(),
            { formatMessage: N } = (0, s.Z)(),
            [A, I] = (0, r.useState)(!1),
            [L, D] = (0, r.useState)(!1),
            {
              sendLikeSearchFeedback: P,
              sendPlaySearchFeedback: E,
              sendNavigateSearchFeedback: R,
            } = (0, x.sAF)(),
            S = (0, p.SB)(l),
            M = (0, x.s0h)(l.albumUrl),
            B = (0, x.s0h)(l.albumUrl, !0),
            U = (0, x.s0h)(l.url),
            w = (0, x.s0h)(l.url, !0),
            O = (0, d.V)(() => {
              var t;
              let e = N(
                  { id: "entity-names.track-name" },
                  { trackName: l.title },
                ),
                i = l.isLiked ? N({ id: "entity-names.has-your-like" }) : "";
              return ""
                .concat(e, " ")
                .concat(null !== (t = l.version) && void 0 !== t ? t : "", " ")
                .concat(i);
            }),
            { isPlaying: G, togglePlay: W } = (0, x.qmq)({
              playContextParams: {
                contextData: {
                  type: o.A.Various,
                  meta: { id: l.entityId },
                  from: g,
                  overrideContextType: h,
                },
                queueParams: { index: 0 },
                loadContextMeta: !0,
              },
              entityId: l.entityId,
            }),
            z = (0, c.W)(() => {
              f.open({ trackId: l.id, albumId: l.albumId });
            }),
            V = (0, c.W)(() => {
              A || G || (I(!0), null == E || E()), W();
            }),
            K = (0, v.jV)({ album: l.mainAlbum, callback: M }),
            F = (0, v.jV)({ album: l.mainAlbum, callback: B }),
            Z = (0, y.useTrackDisclaimer)({ track: l, callback: U }),
            H = (0, y.useTrackDisclaimer)({ track: l, callback: w }),
            Y = (0, _.ik)(F, K),
            q = (0, _.ik)(H, Z),
            X = (0, y.useTrackDisclaimer)({ track: l, callback: z }),
            $ = (0, y.useTrackDisclaimer)({ track: l, callback: V }),
            J = (0, c.W)(() => {
              l.hasTrackLink && X();
            }),
            Q = (0, c.W)(() => {
              L || l.isLiked || (D(!0), null == P || P()), S();
            }),
            tt = (0, c.W)((t) => {
              if (l.hasTrackLink) {
                null == R || R(), q(t);
                return;
              }
              l.hasAlbumLink && Y(t);
            }),
            te = (0, d.V)(() => {
              var t, e;
              return l.hasTrackLink
                ? (0, a.jsx)(C.rU, {
                    "aria-label": ""
                      .concat(l.title, " ")
                      .concat(
                        null !== (t = l.version) && void 0 !== t ? t : "",
                      ),
                    className: b().titleLink,
                    href: l.url,
                    onClick: tt,
                    children: l.title,
                  })
                : l.hasAlbumLink
                  ? (0, a.jsx)(C.rU, {
                      "aria-label": ""
                        .concat(l.title, " ")
                        .concat(
                          null !== (e = l.version) && void 0 !== e ? e : "",
                        ),
                      className: b().titleLink,
                      href: l.albumUrl,
                      onClick: tt,
                      children: l.title,
                    })
                  : (0, a.jsx)(k.Caption, {
                      className: b().title,
                      variant: "span",
                      children: l.title,
                    });
            }),
            ti = (0, d.V)(() => {
              var t;
              return l.hasAlbumLink
                ? (0, a.jsx)(C.rU, {
                    href: l.albumUrl,
                    onClick: tt,
                    children: ""
                      .concat(l.title, " ")
                      .concat(
                        null !== (t = l.version) && void 0 !== t ? t : "",
                      ),
                  })
                : null;
            }),
            ta = (0, d.V)(() => {
              if (l.isAvailable)
                return (0, a.jsx)(j, {
                  track: l,
                  isPlaying: G,
                  handleLikeButtonClick: Q,
                  handlePlayButtonClick: $,
                });
            });
          return (0, a.jsx)(u.m7, {
            className: (0, n.W)(b().root, e),
            "aria-label": O,
            explicitMarkComponent:
              l.trackExplicitMark &&
              (0, a.jsx)(C.$i, {
                getDescriptionTexts: l.getDescriptionTexts,
                variant: l.trackExplicitMark,
              }),
            title: (0, a.jsxs)(k.Caption, {
              className: (0, n.W)(b().titleContainer, {
                [b().titleContainer_withVersion]: l.version,
              }),
              variant: "div",
              type: "entity",
              size: "s",
              weight: "medium",
              lineClamp: 2,
              children: [
                te,
                l.version &&
                  (0, a.jsx)(k.Caption, {
                    className: b().version,
                    variant: "span",
                    children: " ".concat(l.version),
                  }),
              ],
            }),
            srTitle: ti,
            contentLinesCount: T,
            view: (0, a.jsx)(m.Paper, {
              className: b().cover,
              radius: "l",
              withShadow: !0,
              children: (0, a.jsxs)("div", {
                className: (0, n.W)(b().coverBlock, {
                  [b().coverBlock_withTrackLink]: l.hasTrackLink,
                }),
                onClick: J,
                children: [
                  (0, a.jsx)(C.BE, {
                    className: b().image,
                    src: l.coverUri,
                    size: 200,
                    fit: "cover",
                    alt: O,
                    withAvatarReplace: !0,
                    isAvailable: l.isAvailable,
                    "aria-hidden": !0,
                  }),
                  ta,
                ],
              }),
            }),
            description: (0, a.jsx)(
              _.jO,
              {
                className: b().artists,
                artists: l.artists,
                lineClamp: 1,
                linkClassName: b().artistLink,
                captionSize: "s",
                withLink: !l.isUGC,
              },
              l.getKey("description"),
            ),
            children: i,
          });
        });
    },
    25402: function (t, e, i) {
      "use strict";
      i.d(e, {
        UgcTrackEditModal: function () {
          return k;
        },
      });
      var a,
        n,
        l = i(65301),
        r = i(96233),
        s = i(91207),
        o = i(37184),
        c = i(33387),
        d = i(58997),
        u = i(29778);
      ((a = n || (n = {})).TITLE = "title"), (a.ARTIST = "artist");
      let m = (t) => {
          var e, i;
          let a =
              null === (e = t.find((t) => t.key === n.TITLE)) || void 0 === e
                ? void 0
                : e.value,
            l =
              null === (i = t.find((t) => t.key === n.ARTIST)) || void 0 === i
                ? void 0
                : i.value;
          return {
            title: (a = a ? a.trim() : ""),
            artist: (l = l ? l.trim() : ""),
          };
        },
        k = (0, r.Pi)(() => {
          let {
              modals: { ugcTrackEditModal: t },
              fullscreenPlayer: e,
            } = (0, d.oR4)(),
            { notify: i } = (0, d.d$W)(),
            { formatMessage: a } = (0, o.Z)(),
            r = (0, s.useMemo)(
              () => [
                {
                  key: n.TITLE,
                  title: a({ id: "track-modal.track-name" }),
                  value: t.trackTitle,
                  minLength: 1,
                  maxLength: 200,
                },
                {
                  key: n.ARTIST,
                  title: a({ id: "entity-names.singer" }),
                  value: t.trackArtist,
                  minLength: 0,
                  maxLength: 200,
                },
              ],
              [a, t.trackArtist, t.trackTitle],
            ),
            k = (0, c.W)(async (n) => {
              let { title: r, artist: s } = m(n);
              t.track &&
                (await t.track.changeTrackInfo(r, s)) === d.SLo.ERROR &&
                i((0, l.jsx)(u.Q, { error: a({ id: "ugc.editing-failed" }) }), {
                  containerId: e.modal.isOpened
                    ? d.W$x.FULLSCREEN_ERROR
                    : d.W$x.ERROR,
                }),
                t.close();
            });
          return t.modal.isOpened
            ? (0, l.jsx)(u.g3, {
                open: t.modal.isOpened,
                title: a({ id: "entity-names.track" }),
                content: r,
                onClose: t.close,
                onChange: k,
              })
            : null;
        });
    },
    16228: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackAlbum: function () {
          return v;
        },
      });
      var a = i(65301),
        n = i(96233),
        l = i(91207),
        r = i(55975),
        s = i(58997),
        o = i(84486),
        c = i(67419),
        d = i(28246),
        u = i(3060),
        m = i(96093),
        k = i.n(m);
      let v = (0, n.Pi)((t) => {
        let {
            track: e,
            albumArtists: i,
            position: n,
            playContextParams: m,
            withLightning: v,
          } = t,
          _ = (0, s.qmq)({ playContextParams: m, entityId: e.entityId }),
          p = (0, l.useCallback)(
            (t) =>
              (0, a.jsx)(d.e, {
                track: e,
                position: n,
                className: k().playButtonCell,
                ...t,
              }),
            [e, n],
          );
        return (0, a.jsx)(u.f, {
          track: e,
          withLightning: v,
          meta: (0, a.jsx)(c.TrackMeta, {
            albumArtists: i,
            track: e,
            withSavingQueryParams: !0,
          }),
          playButtonCellRender: p,
          controls: (0, a.jsx)(o.ControlsBar, {
            withLightning: v,
            track: e,
            className: k().controlsBarCell,
            utmLink: m.contextData.utmLink,
          }),
          ..._,
          ...(0, r.BA)(r.bG.track.TRACK_ALBUM),
        });
      });
    },
    46849: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrailerTrackAlbum: function () {
          return v;
        },
      });
      var a = i(65301),
        n = i(96233),
        l = i(91207),
        r = i(55975),
        s = i(58997),
        o = i(84486),
        c = i(67419),
        d = i(28246),
        u = i(3060),
        m = i(96093),
        k = i.n(m);
      let v = (0, n.Pi)((t) => {
        let {
            track: e,
            albumArtists: i,
            position: n,
            playContextParams: m,
            withLightning: v,
            onPlayClick: _,
            onLikeClick: p,
            onDislikeClick: x,
          } = t,
          C = (0, s.bA$)({ playContextParams: m, entityId: e.entityId }),
          y = (0, l.useCallback)(
            (t) =>
              (0, a.jsx)(d.e, {
                track: e,
                position: n,
                className: k().playButtonCell,
                ...t,
              }),
            [e, n],
          );
        return (0, a.jsx)(u.f, {
          track: e,
          withLightning: v,
          meta: (0, a.jsx)(c.TrackMeta, { albumArtists: i, track: e }),
          playButtonCellRender: y,
          onPlayClick: _,
          controls: (0, a.jsx)(o.ControlsBar, {
            withLightning: v,
            track: e,
            className: k().controlsBarCell,
            onLikeClick: p,
            onDislikeClick: x,
          }),
          ...C,
          ...(0, r.BA)(r.bG.track.TRACK_ALBUM),
        });
      });
    },
    18993: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackChart: function () {
          return _;
        },
      });
      var a = i(65301),
        n = i(96233),
        l = i(91207),
        r = i(55975),
        s = i(49724),
        o = i(58997),
        c = i(29778),
        d = i(84486),
        u = i(67419),
        m = i(3060),
        k = i(38572),
        v = i.n(k);
      let _ = (0, n.Pi)((t) => {
        var e, i;
        let { track: n, playContextParams: k } = t,
          _ = (0, o.qmq)({ playContextParams: k, entityId: n.entityId }),
          p = (0, l.useCallback)(
            (t) =>
              (0, a.jsx)(c.Df, {
                isAvailable: n.isAvailable,
                isDisliked: n.isDisliked,
                coverUri: n.coverUri,
                title: n.title,
                className: v().playButtonCell,
                ...t,
              }),
            [n],
          );
        return (0, a.jsx)(m.f, {
          track: n,
          meta: (0, a.jsx)(u.TrackMeta, { track: n }),
          beforeBlock: (0, a.jsx)(s.kL, {
            withIcon: !0,
            className: v().chartCell,
            progress:
              null === (e = n.chart) || void 0 === e ? void 0 : e.progress,
            position:
              null === (i = n.chart) || void 0 === i ? void 0 : i.position,
            isDisliked: n.isDisliked,
            isDisabled: !n.isAvailable,
          }),
          playButtonCellRender: p,
          controls: (0, a.jsx)(d.ControlsBar, {
            track: n,
            className: v().controlsBarCell,
          }),
          ..._,
          ...(0, r.BA)(r.bG.track.TRACK_CHART),
        });
      });
    },
    21532: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackNonMusic: function () {
          return b;
        },
      });
      var a = i(65301),
        n = i(96233),
        l = i(9695),
        r = i(91207),
        s = i(55975),
        o = i(58997),
        c = i(29778),
        d = i(32195),
        u = i(84486),
        m = i(98757),
        k = i(28246),
        v = i(3060),
        _ = i(19882),
        p = i.n(_),
        x = i(89748);
      let C = (0, n.Pi)((t) => {
        let {
            track: e,
            playContextParams: i,
            className: n,
            withDNDBlock: _,
            isDragging: C,
            draggingClassName: y,
            withTimeLeftText: T,
            ignoreDislikedStyles: b,
            viewType: h = x.c.PLAYLIST,
            position: g,
            beforeTitle: f,
          } = t,
          N = (0, o.qmq)({ playContextParams: i, entityId: e.entityId }),
          A = (0, r.useCallback)(
            (t) =>
              h === x.c.ALBUM
                ? (0, a.jsx)(k.e, {
                    track: e,
                    position: g,
                    className: p().playButtonCell,
                    ...t,
                  })
                : (0, a.jsx)(c.Df, {
                    isAvailable: e.isAvailable,
                    isDisliked: e.isDisliked,
                    coverUri: e.coverUri,
                    title: e.title,
                    className: p().playButtonCell,
                    ignoreDislikedStyles: b,
                    ...t,
                  }),
            [b, g, h, e],
          );
        return (0, a.jsx)(v.f, {
          className: (0, l.W)(n, {
            [p().trackWithDots]: _,
            [p().important]: _,
          }),
          track: e,
          meta: (0, a.jsx)(m.AudiobookMeta, {
            beforeTitle: f,
            withAuthor: h === x.c.PLAYLIST,
            explicitSize: "xxxs",
            track: e,
            playContextParams: i,
            withListeningProgress: !0,
            withTimeLeftText: T,
            ignoreDislikedStyles: b,
            withSavingQueryParams: !0,
          }),
          playButtonCellRender: A,
          controls: (0, a.jsx)(u.ControlsBar, {
            track: e,
            className: p().controlsBarCell,
            ignoreDislikedStyles: b,
            utmLink: i.contextData.utmLink,
          }),
          beforeBlock: _
            ? (0, a.jsx)(d.x, {
                className: (0, l.W)(p().dots, y),
                isDragging: C,
              })
            : void 0,
          ...N,
          ...(0, s.BA)(s.bG.track.TRACK_AUDIOBOOK),
        });
      });
      var y = i(40161);
      let T = (0, n.Pi)((t) => {
          let {
              track: e,
              playContextParams: i,
              withPodcastName: n = !1,
              className: m,
              withDNDBlock: k,
              isDragging: _,
              draggingClassName: x,
              withTimeLeftText: C,
              ignoreDislikedStyles: T,
              beforeTitle: b,
            } = t,
            h = (0, o.qmq)({ playContextParams: i, entityId: e.entityId }),
            g = (0, r.useCallback)(
              (t) =>
                (0, a.jsx)(c.Df, {
                  isAvailable: e.isAvailable,
                  isDisliked: e.isDisliked,
                  coverUri: e.coverUri,
                  title: e.title,
                  className: p().playButtonCell,
                  ignoreDislikedStyles: T,
                  ...t,
                }),
              [T, e.coverUri, e.isAvailable, e.isDisliked, e.title],
            );
          return (0, a.jsx)(v.f, {
            className: (0, l.W)(m, {
              [p().trackWithDots]: k,
              [p().important]: k,
            }),
            track: e,
            meta: (0, a.jsx)(y.PodcastMeta, {
              beforeTitle: b,
              track: e,
              playContextParams: i,
              withPodcastName: n,
              withListeningProgress: !0,
              withTimeLeftText: C,
              ignoreDislikedStyles: T,
              explicitSize: "xxxs",
            }),
            playButtonCellRender: g,
            controls: (0, a.jsx)(u.ControlsBar, {
              track: e,
              className: p().controlsBarCell,
              ignoreDislikedStyles: T,
              utmLink: i.contextData.utmLink,
            }),
            beforeBlock: k
              ? (0, a.jsx)(d.x, {
                  className: (0, l.W)(p().dots, x),
                  isDragging: _,
                })
              : void 0,
            ...h,
            ...(0, s.BA)(s.bG.track.TRACK_PODCAST),
          });
        }),
        b = (0, n.Pi)((t) =>
          t.track.isTrackAudiobook
            ? (0, a.jsx)(C, { ...t })
            : (0, a.jsx)(T, { ...t }),
        );
    },
    89748: function (t, e, i) {
      "use strict";
      var a, n;
      i.d(e, {
        c: function () {
          return a;
        },
      }),
        ((n = a || (a = {})).ALBUM = "album"),
        (n.PLAYLIST = "playlist");
    },
    37850: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackPlaylist: function () {
          return p;
        },
      });
      var a = i(65301),
        n = i(9695),
        l = i(96233),
        r = i(55975),
        s = i(33387),
        o = i(58997),
        c = i(29778),
        d = i(32195),
        u = i(84486),
        m = i(67419),
        k = i(3060),
        v = i(12816),
        _ = i.n(v);
      let p = (0, l.Pi)((t) => {
        var e;
        let {
            track: i,
            playContextParams: l,
            className: v,
            withDNDBlock: p,
            isDragging: x,
            draggingClassName: C,
            ignoreDislikedStyles: y,
            withSecondaryColor: T,
            activeFilter: b,
            activeFilterIndex: h,
            handleRemove: g,
            withDislike: f,
            withTrailer: N = !0,
            beforeTitle: A,
          } = t,
          j = (0, o.qmq)({ playContextParams: l, entityId: i.entityId }),
          I = (0, o.nmn)({ objectId: i.id, tabId: b, tabPos: h }),
          L = (0, s.W)((t) => {
            t && I();
          }),
          D = (0, s.W)((t) =>
            (0, a.jsx)(c.Df, {
              isAvailable: i.isAvailable,
              isDisliked: i.isDisliked,
              coverUri: i.coverUri,
              title: i.title,
              className: _().playButtonCell,
              ignoreDislikedStyles: y,
              ...t,
            }),
          );
        return (0, a.jsx)(k.f, {
          className: (0, n.W)(v, {
            [_().trackWithDots]: p,
            [_().important]: p,
          }),
          track: i,
          beforeBlock: p
            ? (0, a.jsx)(d.x, {
                className: (0, n.W)(_().dots, C),
                isDragging: x,
              })
            : void 0,
          meta: (0, a.jsx)(m.TrackMeta, {
            beforeTitle: A,
            track: i,
            ignoreDislikedStyles: y,
            withSecondaryColor: T,
          }),
          playButtonCellRender: D,
          controls: (0, a.jsx)(u.ControlsBar, {
            track: i,
            className: _().controlsBarCell,
            ignoreDislikedStyles: y,
            utmLink:
              null === (e = l.contextData) || void 0 === e ? void 0 : e.utmLink,
            withSecondaryColor: T,
            handleRemove: g,
            withDislike: f,
            withTrailer: N,
          }),
          onPlayClick: L,
          ...j,
          ...(0, r.BA)(r.bG.track.TRACK_PLAYLIST),
        });
      });
    },
    62888: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrailerTrackPlaylist: function () {
          return v;
        },
      });
      var a = i(65301),
        n = i(96233),
        l = i(91207),
        r = i(55975),
        s = i(58997),
        o = i(29778),
        c = i(84486),
        d = i(67419),
        u = i(3060),
        m = i(12816),
        k = i.n(m);
      let v = (0, n.Pi)((t) => {
        let {
            track: e,
            playContextParams: i,
            onPlayClick: n,
            onLikeClick: m,
            onDislikeClick: v,
          } = t,
          _ = (0, s.bA$)({ playContextParams: i, entityId: e.entityId }),
          p = (0, l.useCallback)(
            (t) =>
              (0, a.jsx)(o.Df, {
                isAvailable: e.isAvailable,
                isDisliked: e.isDisliked,
                coverUri: e.coverUri,
                title: e.title,
                className: k().playButtonCell,
                ...t,
              }),
            [e],
          );
        return (0, a.jsx)(u.f, {
          track: e,
          meta: (0, a.jsx)(d.TrackMeta, { track: e }),
          playButtonCellRender: p,
          onPlayClick: n,
          controls: (0, a.jsx)(c.ControlsBar, {
            track: e,
            className: k().controlsBarCell,
            onLikeClick: m,
            onDislikeClick: v,
          }),
          ..._,
          ...(0, r.BA)(r.bG.track.TRACK_PLAYLIST),
        });
      });
    },
    24263: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackPlaylistAddition: function () {
          return p;
        },
      });
      var a = i(65301),
        n = i(96233),
        l = i(91207),
        r = i(37184),
        s = i(55975),
        o = i(78372),
        c = i(82036),
        d = i(58997),
        u = i(29778),
        m = i(67419),
        k = i(3060),
        v = i(14314),
        _ = i.n(v);
      let p = (0, n.Pi)((t) => {
        let { className: e, track: i, playContextParams: n, onClick: v } = t,
          { formatMessage: p } = (0, r.Z)(),
          x = (0, d.qmq)({ playContextParams: n, entityId: i.entityId }),
          C = (0, l.useCallback)(
            (t) =>
              (0, a.jsx)(u.Df, {
                isAvailable: i.isAvailable,
                isDisliked: i.isDisliked,
                coverUri: i.coverUri,
                title: i.title,
                className: _().playButtonCell,
                ...t,
              }),
            [i],
          ),
          y = (0, l.useCallback)(
            (t) => {
              t.stopPropagation(), null == v || v(i);
            },
            [i, v],
          ),
          T = (0, l.useMemo)(
            () =>
              (0, a.jsx)("div", {
                className: _().controls,
                children: (0, a.jsx)(o.z, {
                  className: _().button,
                  variant: "text",
                  size: "xs",
                  radius: "xxxl",
                  "aria-label": p({
                    id: "interface-actions.add-track-to-playlist",
                  }),
                  onClick: y,
                  icon: (0, a.jsx)(c.Icon, { size: "xxs", variant: "add" }),
                }),
              }),
            [p, y],
          );
        return (0, a.jsx)(k.f, {
          className: e,
          track: i,
          meta: (0, a.jsx)(m.TrackMeta, { track: i }),
          playButtonCellRender: C,
          controls: T,
          ...x,
          ...(0, s.BA)(s.bG.track.TRACK_PLAYLIST_ADDITION),
        });
      });
    },
    95929: function (t, e, i) {
      "use strict";
      i.d(e, {
        TrackUgcUpload: function () {
          return _;
        },
      });
      var a = i(65301),
        n = i(9695),
        l = i(96233),
        r = i(91207),
        s = i(37184),
        o = i(44729),
        c = i(78372),
        d = i(81437),
        u = i(26382),
        m = i(29778),
        k = i(64511),
        v = i.n(k);
      let _ = (0, l.Pi)((t) => {
        var e;
        let { className: i, track: l } = t,
          { formatMessage: k } = (0, s.Z)(),
          _ = null === (e = l.file) || void 0 === e ? void 0 : e.name,
          p = (0, r.useCallback)(() => {
            l.abortUpload();
          }, [l]),
          x = (0, r.useCallback)(() => {
            l.retryUpload();
          }, [l]),
          C = (0, r.useMemo)(
            () =>
              (0, a.jsx)(c.z, {
                variant: "text",
                withRipple: !1,
                "aria-label": k({ id: "ugc.cancel-upload" }),
                color: "primary",
                onClick: p,
                children: (0, a.jsx)(d.Caption, {
                  variant: "span",
                  size: "m",
                  type: "text",
                  className: v().button,
                  children: (0, a.jsx)(o.Z, { id: "ugc.cancel-upload" }),
                }),
              }),
            [p, k],
          ),
          y = (0, r.useMemo)(
            () =>
              (0, a.jsx)(c.z, {
                variant: "text",
                withRipple: !1,
                "aria-label": k({ id: "ugc.repeat-upload" }),
                color: "primary",
                onClick: x,
                children: (0, a.jsx)(d.Caption, {
                  variant: "span",
                  size: "m",
                  type: "text",
                  className: v().button,
                  children: (0, a.jsx)(o.Z, { id: "ugc.repeat-upload" }),
                }),
              }),
            [k, x],
          ),
          T = (0, r.useMemo)(() => {
            switch (l.loadingState) {
              case u.cU.IDLE:
              case u.cU.PREPARE:
              case u.cU.UPLOADING:
                return C;
              case u.cU.REJECT:
                return y;
              default:
                return null;
            }
          }, [C, y, l.loadingState]),
          b = (0, r.useMemo)(() => {
            switch (l.loadingState) {
              case u.cU.IDLE:
              case u.cU.PREPARE:
              case u.cU.UPLOADING:
                return (0, a.jsx)(o.Z, {
                  id: "ugc.track-uploading-pending-status",
                });
              case u.cU.PROCESSING:
              case u.cU.RESOLVE:
                return (0, a.jsx)(o.Z, {
                  id: "ugc.track-uploading-processing-status",
                });
              case u.cU.REJECT:
                return (0, a.jsx)(o.Z, {
                  id: "ugc.track-uploading-error-status",
                });
              default:
                return null;
            }
          }, [l.loadingState]);
        return (0, a.jsxs)(m.Md, {
          "aria-label": _,
          className: (0, n.W)(v().root, v().card, v().important, i),
          children: [
            (0, a.jsx)(m.Df, { title: _, className: v().playButton }),
            (0, a.jsxs)("div", {
              className: v().meta,
              children: [
                (0, a.jsx)(d.Caption, {
                  variant: "div",
                  size: "m",
                  className: v().title,
                  children: _,
                }),
                (0, a.jsx)(d.Caption, {
                  variant: "div",
                  size: "m",
                  className: v().status,
                  children: b,
                }),
              ],
            }),
            (0, a.jsx)("div", { className: v().controls, children: T }),
          ],
        });
      });
    },
    18132: function (t) {
      t.exports = {
        root: "Disclaimer_root___gYw4",
        container: "Disclaimer_container__Tnsjy",
        title: "Disclaimer_title__9wHWb",
        text: "Disclaimer_text__bg6L1",
        link: "Disclaimer_link__iGciq",
        buttons: "Disclaimer_buttons__5idgM",
        button: "Disclaimer_button__OmGNo",
        shimmer: "Disclaimer_shimmer__vg_D2",
      };
    },
    74794: function (t) {
      t.exports = {
        root: "DisclaimerModal_root__sidbk",
        content: "DisclaimerModal_content___tRvp",
      };
    },
    27242: function (t) {
      t.exports = {
        root: "DragAndDropIcon_root__OstQU",
        root_active: "DragAndDropIcon_root_active__xOTKt",
      };
    },
    58847: function (t) {
      t.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "ControlsBar_root__5HK2B",
        root_withSecondaryColor: "ControlsBar_root_withSecondaryColor__5TC5D",
        item: "ControlsBar_item__I_p99",
        contextMenu: "ControlsBar_contextMenu__8AFkQ",
        contextMenu_visible: "ControlsBar_contextMenu_visible__PYW8h",
        contextMenuWrapper: "ControlsBar_contextMenuWrapper__NHkn_",
        lightning: "ControlsBar_lightning__GBl7O",
        ugcIcon: "ControlsBar_ugcIcon__MckrL",
        duration: "ControlsBar_duration__RawSk",
        duration_hidden: "ControlsBar_duration_hidden__szTkk",
        controls: "ControlsBar_controls__3nXlz",
        dislikeIcon: "ControlsBar_dislikeIcon__ENXh_",
        removeButton: "ControlsBar_removeButton__kj1w8",
        controls_disabled: "ControlsBar_controls_disabled__5KRgJ",
        explicitMark: "ControlsBar_explicitMark__w9l80",
        controls_dislikedControls:
          "ControlsBar_controls_dislikedControls__XvkXb",
        likeIcon: "ControlsBar_likeIcon__mrNiz",
        controls_dislikedColors: "ControlsBar_controls_dislikedColors__22gsG",
        popover: "ControlsBar_popover__WrYMt",
      };
    },
    93877: function (t) {
      t.exports = {
        downloadingProgress: "TrackDownloadControl_downloadingProgress__wNg2W",
        progress: "TrackDownloadControl_progress__K_OhO",
      };
    },
    15830: function (t) {
      t.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        explicitMark: "AudiobookMeta_explicitMark__1rN7x",
        metaContainer: "AudiobookMeta_metaContainer__F7d9X",
        metaContainer_oneLine: "AudiobookMeta_metaContainer_oneLine__D9CQh",
        titleContainer: "AudiobookMeta_titleContainer__GIY6Q",
        artists: "AudiobookMeta_artists__ScMoq",
        progress: "AudiobookMeta_progress__i3_kS",
        progress_disabled: "AudiobookMeta_progress_disabled__D_7E9",
        progress_withPreviousInfo:
          "AudiobookMeta_progress_withPreviousInfo__97Hxr",
      };
    },
    57765: function (t) {
      t.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        artistCaption: "Meta_artistCaption__JESZi",
        link: "Meta_link__IFDBA",
        albumTitle: "Meta_albumTitle__mHeOs",
        root: "Meta_root__R8n1h",
        root_withSecondaryColor: "Meta_root_withSecondaryColor___uENY",
        root_disabled: "Meta_root_disabled__Dpx_M",
        albumLink: "Meta_albumLink__gASh6",
        artists: "Meta_artists__VnR52",
        explicitMark: "Meta_explicitMark__ocnCV",
        title: "Meta_title__GGBnH",
        titleContainer: "Meta_titleContainer__gDuXr",
        version: "Meta_version__c2sHU",
        root_disliked: "Meta_root_disliked__DrZ7_",
        text: "Meta_text__Y5uYH",
        metaContainer: "Meta_metaContainer__7i2dp",
        titleContainer_withVersion: "Meta_titleContainer_withVersion__n7MdY",
      };
    },
    68107: function (t) {
      t.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        dateWithName: "PodcastMeta_dateWithName__cKy0o",
        podcastMetaContainer: "PodcastMeta_podcastMetaContainer__pFASj",
        podcastTitleContainer: "PodcastMeta_podcastTitleContainer__p9Zja",
        podcastName: "PodcastMeta_podcastName__iQeNK",
        progress: "PodcastMeta_progress__5DqlO",
        progress_disabled: "PodcastMeta_progress_disabled__KX04q",
        progress_withPreviousInfo:
          "PodcastMeta_progress_withPreviousInfo__eOrCi",
        soonDate: "PodcastMeta_soonDate__zGuG9",
        dateDisabled: "PodcastMeta_dateDisabled__DxjtJ",
        dateDisliked: "PodcastMeta_dateDisliked__95MlL",
      };
    },
    12396: function (t) {
      t.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "PlayButtonWithPosition_root__H5FYg",
        playButton: "PlayButtonWithPosition_playButton__7cfDQ",
        playButtonIcon: "PlayButtonWithPosition_playButtonIcon___cLAL",
        playingAnimation: "PlayButtonWithPosition_playingAnimation__Hy5rC",
        position: "PlayButtonWithPosition_position__wk3OT",
        root_current: "PlayButtonWithPosition_root_current__FCDLJ",
        root_playing: "PlayButtonWithPosition_root_playing__RpnYU",
        root_disabled: "PlayButtonWithPosition_root_disabled__PMV24",
        root_disliked: "PlayButtonWithPosition_root_disliked__NIZzA",
      };
    },
    67870: function (t) {
      t.exports = {
        root: "ArtistItem_root__pGMKF",
        cover: "ArtistItem_cover__g00Nh",
        image: "ArtistItem_image__nPTr6",
      };
    },
    59986: function (t) {
      t.exports = {
        root: "ContextMenuPlaylistItem_root__jhTvn",
        icon: "ContextMenuPlaylistItem_icon__Eqwlv",
      };
    },
    87285: function (t) {
      t.exports = {
        root: "ContextSubMenuAddToPlaylist_root__ZGm6z",
        menu: "ContextSubMenuAddToPlaylist_menu__XLKpt",
        listMenu: "ContextSubMenuAddToPlaylist_listMenu__HIIeN",
        content: "ContextSubMenuAddToPlaylist_content__isTx4",
        virtualScroll: "ContextSubMenuAddToPlaylist_virtualScroll__SJG3e",
        important: "ContextSubMenuAddToPlaylist_important__OUL53",
        shimmer: "ContextSubMenuAddToPlaylist_shimmer__uQHAL",
        favouritesPlaylistItem:
          "ContextSubMenuAddToPlaylist_favouritesPlaylistItem__aFINX",
        icon: "ContextSubMenuAddToPlaylist_icon__2okWH",
      };
    },
    17778: function (t) {
      t.exports = { syncLyrics: "TrackContextMenu_syncLyrics___CDVn" };
    },
    82640: function (t) {
      t.exports = {
        cancelIcon: "TrackContextMenuDownloadItem_cancelIcon__0YF_e",
        root: "TrackContextMenuDownloadItem_root__BALdW",
        downloadingProgress:
          "TrackContextMenuDownloadItem_downloadingProgress__Xmtgm",
        progress: "TrackContextMenuDownloadItem_progress__FMBws",
      };
    },
    83769: function (t) {
      t.exports = { ugcLabel: "TrackContextMenuHeader_ugcLabel__k7hmv" };
    },
    87736: function (t) {
      t.exports = { writers: "Lyrics_writers__xvrNp" };
    },
    71039: function (t) {
      t.exports = {
        root: "Track_root__dbDjD",
        root_disabled: "Track_root_disabled__53T42",
        ripple: "Track_ripple__f8iBh",
      };
    },
    61347: function (t) {
      t.exports = {
        root: "TrackCard_root__kIpe1",
        controls: "TrackCard_controls__E7Y3L",
        cover: "TrackCard_cover__tkVPB",
        coverBlock: "TrackCard_coverBlock__WdvvQ",
        coverBlock_withTrackLink: "TrackCard_coverBlock_withTrackLink__fDe6k",
        image: "TrackCard_image__KsOFF",
        artists: "TrackCard_artists__wH48n",
        artistLink: "TrackCard_artistLink__aqLl7",
        titleContainer: "TrackCard_titleContainer__YCcZk",
        titleContainer_withVersion:
          "TrackCard_titleContainer_withVersion__fTRGu",
        title: "TrackCard_title__BVLuv",
        titleLink: "TrackCard_titleLink__NtPhm",
        version: "TrackCard_version__7iPuj",
        playButton: "TrackCard_playButton__ukJDd",
        likeButton: "TrackCard_likeButton__Hejrk",
        menuButton: "TrackCard_menuButton__XtYLf",
        trailerButton: "TrackCard_trailerButton__nGqhD",
        control: "TrackCard_control___huPc",
      };
    },
    96093: function (t) {
      t.exports = {
        playButtonCell: "TrackAlbum_playButtonCell__pLJte",
        controlsBarCell: "TrackAlbum_controlsBarCell__XUUCc",
      };
    },
    38572: function (t) {
      t.exports = {
        playButtonCell: "TrackChart_playButtonCell__cvY7u",
        controlsBarCell: "TrackChart_controlsBarCell__Xd5pn",
        chartCell: "TrackChart_chartCell__33_al",
      };
    },
    19882: function (t) {
      t.exports = {
        playButtonCell: "TrackNonMusic_playButtonCell__HaJrc",
        controlsBarCell: "TrackNonMusic_controlsBarCell__zWt44",
        dots: "TrackNonMusic_dots__Wom40",
        trackWithDots: "TrackNonMusic_trackWithDots__v2VbZ",
        important: "TrackNonMusic_important__u29Uj",
      };
    },
    12816: function (t) {
      t.exports = {
        playButtonCell: "TrackPlaylist_playButtonCell__Q6YT_",
        controlsBarCell: "TrackPlaylist_controlsBarCell__6clda",
        dots: "TrackPlaylist_dots__nLYej",
        trackWithDots: "TrackPlaylist_trackWithDots__EU6LD",
        important: "TrackPlaylist_important__n8Tjb",
      };
    },
    14314: function (t) {
      t.exports = {
        playButtonCell: "TrackPlaylistAddition_playButtonCell__Ocnhq",
        controls: "TrackPlaylistAddition_controls__S346Y",
        button: "TrackPlaylistAddition_button__fsY9k",
      };
    },
    64511: function (t) {
      t.exports = {
        root: "Track_root__dbDjD",
        card: "TrackUgcUpload_card__bidIG",
        important: "TrackUgcUpload_important__RQkp0",
        playButton: "TrackUgcUpload_playButton__3l2I7",
        meta: "TrackUgcUpload_meta__aHQv9",
        title: "TrackUgcUpload_title__Xq3UP",
        status: "TrackUgcUpload_status__aFGvl",
        controls: "TrackUgcUpload_controls__Ie2Ox",
      };
    },
    67410: function (t, e, i) {
      "use strict";
      var a, n;
      i.d(e, {
        y: function () {
          return a;
        },
      }),
        ((n = a || (a = {})).TEXT = "TEXT"),
        (n.LRC = "LRC"),
        (n.RICH_JSON = "RICH_JSON");
    },
    97635: function (t, e, i) {
      "use strict";
      i.d(e, {
        Q: function () {
          return n;
        },
      });
      var a = i(19489);
      function n(t) {
        return (null == t ? void 0 : t.data.type) === a.A.Generative;
      }
    },
    69847: function (t, e, i) {
      "use strict";
      var a, n;
      i.d(e, {
        Z: function () {
          return a;
        },
      }),
        ((n = a || (a = {})).Album = "album"),
        (n.Artist = "artist"),
        (n.Playlist = "playlist"),
        (n.Radio = "radio"),
        (n.Other = "other"),
        (n.Search = "search");
    },
  },
]);

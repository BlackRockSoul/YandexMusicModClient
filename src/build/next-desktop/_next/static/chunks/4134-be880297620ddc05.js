(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4134, 8890, 5094, 350, 2436, 4163, 3191, 7454, 651, 789],
  {
    62738: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ContainerProvider: function () {
            return l;
          },
        });
      var n = a(8759),
        i = a(99616),
        r = a(84133);
      let o = async (e) => {
          let {
              hostTld: t,
              forwardedForY: a,
              changeLanguageToken: n,
              tracestate: i,
              traceparent: o,
              serverDetectedLang: l,
              env: s,
            } = e,
            c = await (0, r.ZO)({
              tld: t,
              forwardedForY: a,
              changeLanguageToken: n,
              tracestate: i,
              traceparent: o,
              serverDetectedLang: l,
              env: s,
            });
          return await c.get(r.uh).loadDictionary(), c;
        },
        l = (e) => {
          let {
              children: t,
              hostTld: a,
              env: l,
              forwardedForY: s,
              tracestate: c,
              traceparent: u,
              changeLanguageToken: d,
              serverDetectedLang: m,
            } = e,
            g = (0, i.use)(
              o({
                hostTld: a,
                env: l,
                forwardedForY: s,
                tracestate: c,
                traceparent: u,
                changeLanguageToken: d,
                serverDetectedLang: m,
              }),
            );
          return (0, n.jsx)(r.Xl.Provider, { value: g, children: t });
        };
    },
    80271: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          StoreProvider: function () {
            return eN;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(96555),
        o = a(11769),
        l = a(99616),
        s = a(84133),
        c = a(29765),
        u = a(94175),
        d = a(86502);
      let m = {
        experiments: { loadingState: s.Gu.IDLE, experiments: {} },
        user: {
          account: { loadingState: s.Gu.IDLE },
          settings: { loadingState: s.Gu.IDLE, showWizard: !0 },
        },
        collection: {
          albums: {
            loadingState: s.Gu.IDLE,
            upcomingAlbumsLoadingState: s.Gu.IDLE,
            items: [],
          },
          playlistsCreated: { loadingState: s.Gu.IDLE, items: [] },
          playlistsLiked: { loadingState: s.Gu.IDLE, items: [] },
          artists: { loadingState: s.Gu.IDLE, items: [] },
          landing: {
            loadingState: s.Gu.IDLE,
            tabs: { loadingState: s.Gu.IDLE, data: [] },
          },
        },
        main: {
          landing: {
            loadingState: s.Gu.IDLE,
            tabs: { loadingState: s.Gu.IDLE, data: [] },
          },
        },
        kinopoisk: {
          landing: {
            loadingState: s.Gu.IDLE,
            tabs: { loadingState: s.Gu.IDLE, data: [] },
          },
        },
        nonMusic: {
          landing: {
            loadingState: s.Gu.IDLE,
            tabs: { loadingState: s.Gu.IDLE, data: [] },
          },
        },
        settings: { layout: null },
        currentTrackInfo: {
          trackLoadingState: s.Gu.IDLE,
          creditsLoadingState: s.Gu.IDLE,
          id: null,
          albumId: null,
          isUGC: null,
          fullTrack: null,
          credits: null,
        },
        album: {
          loadingState: s.Gu.IDLE,
          items: [],
          meta: null,
          otherAlbumVersions: [],
          latestGenreAlbums: { loadingState: s.Gu.IDLE, items: [] },
          otherArtistAlbums: { loadingState: s.Gu.IDLE, items: [] },
        },
        artist: {
          loadingState: s.Gu.IDLE,
          meta: null,
          popularTracks: [],
          similarArtists: [],
          albums: [],
          discography: [],
          compilations: [],
          playlists: [],
          fullTracksListSubpage: { loadingState: s.Gu.IDLE },
          albumsSubpage: { loadingState: s.Gu.IDLE },
          concertsSubpage: { loadingState: s.Gu.IDLE },
          familiarInfo: { loadingState: s.Gu.IDLE },
          familiarSubpage: { loadingState: s.Gu.IDLE },
        },
        library: {
          loadingState: s.Gu.IDLE,
          tracks: {},
          artists: {},
          playlists: {},
          albums: {},
        },
        sonataState: {
          contextId: null,
          contextType: null,
          entityMeta: null,
          status: d.Xz.IDLE,
          canMoveBackward: !1,
          canMoveForward: !1,
          canChangeRepeatMode: !0,
          repeatMode: u.zq.NONE,
          quality: c.nJ.HQ,
          canShuffle: !0,
          shuffle: !1,
        },
        playlist: {
          loadingState: s.Gu.IDLE,
          searchLoadingState: s.Gu.IDLE,
          meta: null,
          items: [],
          searchItems: {},
          similarPlaylists: [],
        },
        slides: {
          userSlidesLoadingState: s.Gu.IDLE,
          artistSlidesLoadingState: s.Gu.IDLE,
          userItems: [],
          artistItems: [],
        },
        vibe: {
          getLastLoadingState: s.Gu.IDLE,
          vibeResetLoadingState: s.Gu.IDLE,
          isLoading: !1,
        },
        search: {
          searchCorrectedText: null,
          loadingState: s.Gu.IDLE,
          results: [],
          history: { loadingState: s.Gu.IDLE, items: [] },
          mixes: { loadingState: s.Gu.IDLE, items: [] },
        },
        vibeSettings: { loadingState: s.Gu.IDLE },
        pinsCollection: { loadingState: s.Gu.IDLE, index: {} },
        genre: {
          loadingState: s.Gu.IDLE,
          albumsSubpage: { loadingState: s.Gu.IDLE },
          artistsSubpage: { loadingState: s.Gu.IDLE },
          playlistsSubpage: { loadingState: s.Gu.IDLE },
        },
        genres: { title: null, loadingState: s.Gu.IDLE, items: [] },
        mixes: { loadingState: s.Gu.IDLE, items: [] },
        tag: {
          tagLoadingState: s.Gu.IDLE,
          playlistsLoadingState: s.Gu.IDLE,
          playlistsData: [],
          playlists: [],
        },
        chart: {
          title: null,
          playlistMeta: null,
          loadingState: s.Gu.IDLE,
          items: [],
        },
        post: { loadingState: s.Gu.IDLE },
        landingBlockEntities: { loadingState: s.Gu.IDLE },
        contextMenuPlaylists: { loadingState: s.Gu.IDLE, items: [] },
        musicHistory: { loadingState: s.Gu.IDLE, tabs: null },
        createPlaylist: {},
        location: {},
        disclaimer: { loadingState: s.Gu.IDLE },
        trailer: { loadingState: s.Gu.IDLE },
        syncLyrics: { loadingState: s.Gu.IDLE },
        modals: {
          disclaimerModal: {},
          fullscreenPlayerModal: {},
          trackModal: {},
          releaseNotesModal: {},
          shortcutsModal: {},
          aboutAppModal: {},
          trailerModal: {},
        },
      };
      var g = a(17620),
        p = a(53191),
        f = a(69658),
        v = a(74241),
        h = a(96431),
        b = a(96911),
        y = a(58362);
      let _ = r.V5.model("CollectionAlbumsPage", {
        loadingState: r.V5.enumeration(Object.values(s.Gu)),
        sort: r.V5.maybeNull(y.$4),
        items: r.V5.array(r.V5.maybeNull(b.ug)),
        pager: r.V5.maybeNull(y.Vn),
        alreadyRequestedPages: r.V5.map(r.V5.number),
        pendingPages: r.V5.map(r.V5.number),
        requestsCount: r.V5.maybeNull(r.V5.number),
        upcomingAlbumsLoadingState: r.V5.enumeration(Object.values(s.Gu)),
        upcomingAlbums: r.V5.maybeNull(r.V5.array(b.W9)),
      })
        .views((e) => ({
          get isAlbumsLoading() {
            return (
              e.loadingState === s.Gu.IDLE ||
              (e.loadingState === s.Gu.PENDING && 0 === e.items.length)
            );
          },
          get isLoading() {
            return (
              this.isAlbumsLoading ||
              e.upcomingAlbumsLoadingState === s.Gu.IDLE ||
              e.upcomingAlbumsLoadingState === s.Gu.PENDING
            );
          },
          get isUpcomingAlbumsLoading() {
            return (
              e.upcomingAlbumsLoadingState === s.Gu.IDLE ||
              e.upcomingAlbumsLoadingState === s.Gu.PENDING
            );
          },
          get isUpcomingAlbumsEmpty() {
            var t;
            return (
              !this.isUpcomingAlbumsLoading &&
              (!e.upcomingAlbums ||
                (null === (t = e.upcomingAlbums) || void 0 === t
                  ? void 0
                  : t.length) === 0)
            );
          },
          get isAlbumsEmpty() {
            var a;
            return (
              !this.isAlbumsLoading &&
              (!e.items ||
                (null === (a = e.items) || void 0 === a ? void 0 : a.length) ===
                  0)
            );
          },
        }))
        .actions((e) => {
          let t = {
            getData: (0, r.ls)(function* (t) {
              let {
                  userId: a,
                  page: n = 0,
                  pageSize: i = 20,
                  sortBy: o,
                  sortOrder: l,
                  metaType: c,
                } = t,
                { usersResource: u, logger: d } = (0, r.dU)(e);
              if (
                !(
                  (e.loadingState === s.Gu.PENDING &&
                    e.pendingPages.has("".concat(n))) ||
                  e.alreadyRequestedPages.has("".concat(n))
                )
              ) {
                "number" == typeof n &&
                  e.alreadyRequestedPages.set("".concat(n), n),
                  (e.sort = null),
                  o && l && (e.sort = { sortBy: o, sortOrder: l });
                try {
                  var m;
                  (e.loadingState = s.Gu.PENDING),
                    e.pendingPages.set("".concat(n), n);
                  let t = yield u.getLikedAlbums({
                      userId: a,
                      page: n,
                      pageSize: i,
                      sortBy: o,
                      sortOrder: l,
                      metaType: c,
                    }),
                    d = { page: n, perPage: i, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, r.pj)(
                      Array.from({ length: d.total }, () => null),
                    ));
                  let g = t.albums.map((e) => {
                    let { album: t } = e;
                    return (0, b.ym)(t);
                  });
                  (0, s.AG)({
                    items: e.items,
                    mappedRawItems: g,
                    page: n,
                    pageSize: i,
                  }),
                    (e.pager = d),
                    (e.requestsCount =
                      (null !== (m = e.requestsCount) && void 0 !== m ? m : 0) +
                      1),
                    e.loadingState !== s.Gu.IDLE &&
                      (e.loadingState = s.Gu.RESOLVE);
                } catch (t) {
                  !(t instanceof h.eY) &&
                    (t instanceof Error || "string" == typeof t) &&
                    d.error(t),
                    (e.loadingState = s.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(n));
                }
              }
            }),
            getPresaves: (0, r.ls)(function* (t) {
              let { userId: a } = t,
                { usersResource: n, logger: i } = (0, r.dU)(e),
                { experiments: o } = (0, r.yj)(e),
                l = o.checkExperiment(s.pe.WebPresave, "on");
              if (e.upcomingAlbumsLoadingState !== s.Gu.PENDING && l)
                try {
                  var c;
                  e.upcomingAlbumsLoadingState = s.Gu.PENDING;
                  let t = yield n.getPresaves({
                    userId: a,
                    includeReleased: !1,
                    includeUpcoming: !0,
                  });
                  (e.upcomingAlbums = (0, r.pj)(
                    null === (c = t.upcomingAlbums) || void 0 === c
                      ? void 0
                      : c.map(b.wq),
                  )),
                    e.upcomingAlbumsLoadingState !== s.Gu.IDLE &&
                      (e.upcomingAlbumsLoadingState = s.Gu.RESOLVE);
                } catch (t) {
                  !(t instanceof h.eY) &&
                    (t instanceof Error || "string" == typeof t) &&
                    i.error(t),
                    e.upcomingAlbumsLoadingState !== s.Gu.IDLE &&
                      (e.upcomingAlbumsLoadingState = s.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = s.Gu.IDLE),
                (e.sort = null),
                (e.items = (0, r.pj)([])),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.upcomingAlbumsLoadingState = s.Gu.IDLE),
                (e.upcomingAlbums = null);
            },
          };
          return t;
        });
      var x = a(81446);
      let S = r.V5.model("CollectionArtistsPage", {
        loadingState: r.V5.enumeration(Object.values(s.Gu)),
        sort: r.V5.maybeNull(y.$4),
        items: r.V5.array(r.V5.maybeNull(x.Go)),
        pager: r.V5.maybeNull(y.Vn),
        alreadyRequestedPages: r.V5.map(r.V5.number),
        pendingPages: r.V5.map(r.V5.number),
        requests: r.V5.maybeNull(r.V5.number),
      }).actions((e) => {
        let t = {
          getData: (0, r.ls)(function* (t) {
            let {
                userId: a,
                page: n = 0,
                pageSize: i = 20,
                sortBy: o,
                sortOrder: l,
              } = t,
              { usersResource: c, logger: u } = (0, r.dU)(e);
            if (
              !(
                (e.loadingState === s.Gu.PENDING &&
                  e.pendingPages.has("".concat(n))) ||
                e.alreadyRequestedPages.has("".concat(n))
              )
            ) {
              "number" == typeof n &&
                e.alreadyRequestedPages.set("".concat(n), n),
                (e.sort = null),
                o && l && (e.sort = { sortBy: o, sortOrder: l });
              try {
                var d;
                (e.loadingState = s.Gu.PENDING),
                  e.pendingPages.set("".concat(n), n);
                let t = yield c.getLikedArtists({
                    userId: a,
                    page: n,
                    pageSize: i,
                    sortBy: o,
                    sortOrder: l,
                  }),
                  u = { page: n, perPage: i, total: t.pager.total };
                0 === e.items.length &&
                  (e.items = (0, r.pj)(
                    Array.from({ length: u.total }, () => null),
                  ));
                let m = t.artists.map(x.d);
                (e.loadingState = s.Gu.RESOLVE),
                  (0, s.AG)({
                    items: e.items,
                    mappedRawItems: m,
                    page: n,
                    pageSize: i,
                  }),
                  (e.pager = u),
                  (e.requests =
                    (null !== (d = e.requests) && void 0 !== d ? d : 0) + 1),
                  e.loadingState !== s.Gu.IDLE &&
                    (e.loadingState = s.Gu.RESOLVE);
              } catch (t) {
                !(t instanceof h.eY) &&
                  (t instanceof Error || "string" == typeof t) &&
                  u.error(t),
                  (e.loadingState = s.Gu.REJECT);
              } finally {
                e.pendingPages.delete("".concat(n));
              }
            }
          }),
          reset() {
            (e.loadingState = s.Gu.IDLE),
              (e.sort = null),
              e.pendingPages.clear(),
              (e.pager = null),
              e.alreadyRequestedPages.clear(),
              (e.items = (0, r.pj)([]));
          },
        };
        return t;
      });
      var C = a(3515);
      let E = r.V5.model("CollectionPlaylistsCreatedPage", {
          loadingState: r.V5.enumeration(Object.values(s.Gu)),
          sort: r.V5.maybeNull(y.$4),
          items: r.V5.array(r.V5.maybeNull(C.Cd)),
          pager: r.V5.maybeNull(y.Vn),
          alreadyRequestedPages: r.V5.map(r.V5.number),
          pendingPages: r.V5.map(r.V5.number),
          kinds: r.V5.array(r.V5.number),
          requests: r.V5.maybeNull(r.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === s.Gu.IDLE || e.loadingState === s.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === s.Gu.RESOLVE;
            },
            get isEmpty() {
              return this.isLoaded && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => {
            let t = {
              getKinds: (0, r.ls)(function* (t) {
                let a = [],
                  { usersResource: n } = (0, r.dU)(e);
                (a = yield n.getPlaylistsKinds({ userId: t })),
                  (e.kinds = (0, r.pj)(a));
              }),
              getData: (0, r.ls)(function* (a) {
                let {
                    userId: n,
                    page: i = 0,
                    pageSize: o = 20,
                    withLikesCount: l,
                  } = a,
                  { usersResource: c, logger: u } = (0, r.dU)(e);
                if (
                  !(
                    (e.loadingState === s.Gu.PENDING &&
                      e.pendingPages.has("".concat(i))) ||
                    e.alreadyRequestedPages.has("".concat(i))
                  )
                ) {
                  "number" == typeof i &&
                    e.alreadyRequestedPages.set("".concat(i), i);
                  try {
                    var d;
                    e.isLoaded || (e.loadingState = s.Gu.PENDING),
                      e.pendingPages.set("".concat(i), i),
                      0 === e.kinds.length && (yield t.getKinds(n));
                    let a = i * o,
                      u = a + o,
                      m = e.kinds.slice(a, u),
                      g = yield c.getPlaylistsByKinds({
                        userId: n,
                        kinds: m,
                        withLikesCount: l,
                        withTracks: !1,
                      });
                    e.requests =
                      (null !== (d = e.requests) && void 0 !== d ? d : 0) + 1;
                    let p = { page: i, perPage: o, total: e.kinds.length };
                    0 === e.items.length &&
                      (e.items = (0, r.pj)(
                        Array.from({ length: p.total }, () => null),
                      ));
                    let f = g.map(C.PV);
                    (0, s.AG)({
                      items: e.items,
                      mappedRawItems: f,
                      page: i,
                      pageSize: o,
                    }),
                      (e.pager = p),
                      (e.loadingState = s.Gu.RESOLVE);
                  } catch (t) {
                    !(t instanceof h.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      u.error(t),
                      (e.loadingState = s.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(i));
                  }
                }
              }),
              reset() {
                (e.loadingState = s.Gu.IDLE),
                  (e.sort = null),
                  (e.items = (0, r.pj)([])),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  e.pendingPages.clear(),
                  (e.kinds = (0, r.pj)([])),
                  (e.requests = null);
              },
            };
            return t;
          }),
        N = r.V5.model("CollectionPlaylistsLikedPage", {
          loadingState: r.V5.enumeration(Object.values(s.Gu)),
          sort: r.V5.maybeNull(y.$4),
          items: r.V5.array(r.V5.maybeNull(C.Cd)),
          pager: r.V5.maybeNull(y.Vn),
          alreadyRequestedPages: r.V5.map(r.V5.number),
          pendingPages: r.V5.map(r.V5.number),
          requests: r.V5.maybeNull(r.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === s.Gu.IDLE || e.loadingState === s.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === s.Gu.RESOLVE;
            },
            get isEmpty() {
              return this.isLoaded && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, r.ls)(function* (t) {
                let {
                  userId: a,
                  page: n = 0,
                  pageSize: i = 20,
                  sortBy: o,
                  sortOrder: l,
                  metaType: c,
                  withTracks: u,
                } = t;
                if (
                  (e.loadingState === s.Gu.PENDING &&
                    e.pendingPages.has("".concat(n))) ||
                  e.alreadyRequestedPages.has("".concat(n))
                )
                  return;
                "number" == typeof n &&
                  e.alreadyRequestedPages.set("".concat(n), n);
                let { usersResource: d, logger: m } = (0, r.dU)(e);
                (e.sort = null),
                  o && l && (e.sort = { sortBy: o, sortOrder: l });
                try {
                  var g;
                  (e.loadingState = s.Gu.PENDING),
                    e.pendingPages.set("".concat(n), n);
                  let { likedPlaylists: t, pager: m } =
                    yield d.getLikedPlaylists({
                      userId: a,
                      page: n,
                      pageSize: i,
                      sortBy: o,
                      sortOrder: l,
                      metaType: c,
                      withTracks: u,
                    });
                  (e.requests =
                    (null !== (g = e.requests) && void 0 !== g ? g : 0) + 1),
                    0 === e.items.length &&
                      (e.items = (0, r.pj)(
                        Array.from({ length: m.total }, () => null),
                      ));
                  let p = t.map((e) => {
                    let { playlist: t } = e;
                    return (0, C.PV)(t);
                  });
                  (0, s.AG)({
                    items: e.items,
                    mappedRawItems: p,
                    page: n,
                    pageSize: i,
                  }),
                    (e.pager = m),
                    (e.loadingState = s.Gu.RESOLVE);
                } catch (t) {
                  !(t instanceof h.eY) &&
                    (t instanceof Error || "string" == typeof t) &&
                    m.error(t),
                    "number" == typeof n &&
                      e.alreadyRequestedPages.delete("".concat(n)),
                    (e.requests =
                      "number" == typeof e.requests ? e.requests - 1 : 0),
                    (e.loadingState = s.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(n));
                }
              }),
              reset() {
                (e.loadingState = s.Gu.IDLE),
                  (e.sort = null),
                  (e.items = (0, r.pj)([])),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  e.pendingPages.clear(),
                  (e.requests = null);
              },
            };
            return t;
          }),
        P = r.V5.model("CollectionPage", {
          landing: v.d5,
          albums: _,
          playlistsLiked: N,
          playlistsCreated: E,
          artists: S,
        });
      a(3653), a(52539), a(97748), a(86643), a(90554), a(1363);
      var k = a(30651),
        L = a(24438);
      a(9702);
      let I = r.V5.model("KinopoiskPage", { landing: v.d5 });
      a(71486), a(63246);
      let A = r.V5.model("MainPage", { landing: v.d5 });
      a(12905);
      var T = a(36019),
        j = a(67414),
        R = a(53783),
        w = a(20210),
        D = a(95539),
        G = a(84290);
      let O = (e) =>
          e.reduce((e, t) => {
            let a = "".concat(t.type, "_").concat(t.id);
            if (a in e) {
              var n;
              null === (n = e[a]) || void 0 === n || n.push(t);
            } else e[a] = [t];
            return e;
          }, {}),
        V = (e) => {
          switch (e.type) {
            case T.EW.ALBUM:
              return "".concat(e.type, "_").concat((0, j.un)(e));
            case T.EW.TRACK:
              return "".concat(e.type, "_").concat((0, j.LV)(e));
            case T.EW.WAVE:
              return "".concat(e.type, "_").concat((0, j.R3)(e));
            case T.EW.PLAYLIST:
              return "".concat(e.type, "_").concat((0, j.aQ)(e));
            case T.EW.ARTIST:
              return "".concat(e.type, "_").concat((0, j.H5)(e));
          }
        },
        M = (e) => {
          let t = { historyTabs: [] },
            a = 0;
          for (let r of e.historyTabs) {
            var n, i;
            if (a > 1e3) break;
            let e = { ...r, items: [] };
            for (let t of null !== (n = r.items) && void 0 !== n ? n : []) {
              if (a > 1e3) break;
              let n = { ...t, tracks: [] };
              for (let e of t.tracks) {
                if (a > 1e3) break;
                n.tracks.push(e), ++a;
              }
              null === (i = e.items) || void 0 === i || i.push(n);
            }
            e.items && e.items.length > 0 && t.historyTabs.push(e);
          }
          return t;
        },
        B = (e) =>
          e
            .map((e) => {
              switch (e.type) {
                case T.EW.ARTIST:
                case T.EW.ALBUM:
                  return { type: e.type, data: { itemId: { id: e.id } } };
                case T.EW.PLAYLIST: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { uid: Number(t), kind: Number(a) } },
                  };
                }
                case T.EW.WAVE:
                  return {
                    type: e.type,
                    data: { itemId: { seeds: e.id.split(",") } },
                  };
                case T.EW.TRACK: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { trackId: String(t), albumId: a } },
                  };
                }
                default:
                  return null;
              }
            })
            .filter((e) => e),
        U = r.V5.model("MusicHistoryPage", {
          loadingState: r.V5.enumeration(Object.values(s.Gu)),
          indexesMap: r.V5.map(r.V5.number),
          items: r.V5.maybeNull(r.V5.array(R.M)),
          datesMap: r.V5.map(r.V5.boolean),
          tabs: r.V5.maybeNull(r.V5.array(j.t9)),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === s.Gu.IDLE || e.loadingState === s.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === s.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === s.Gu.REJECT;
            },
            get isEmpty() {
              var t;
              return (
                (this.isLoaded || this.isRejected) &&
                (null === (t = e.tabs) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
            getStartAndEndIndexes(t) {
              var a, n;
              let i = t,
                r = t + 1;
              return (
                (null === (a = e.items) || void 0 === a
                  ? void 0
                  : a.slice(t - 25 + 1, t).some((e) => !e.isLoaded)) &&
                  (i = t - 25 + 1),
                (null === (n = e.items) || void 0 === n
                  ? void 0
                  : n.slice(t, t + 25).some((e) => !e.isLoaded)) &&
                  (r = t + 25),
                [i, r]
              );
            },
            getItemsToLoad(t) {
              var a, n;
              let [i, r] = this.getStartAndEndIndexes(t);
              return null !==
                (n =
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.slice(i, r).filter((e) => !e.isLoaded)) && void 0 !== n
                ? n
                : [];
            },
            isInObservationRange(t) {
              var a;
              return (
                (0 !== t && t % 25 == 0) ||
                (e.items &&
                  t ===
                    (null === (a = e.items) || void 0 === a
                      ? void 0
                      : a.length) -
                      1)
              );
            },
            get dates() {
              var a, n;
              return null !==
                (n =
                  null === (a = e.tabs) || void 0 === a
                    ? void 0
                    : a.map((e) => e.date)) && void 0 !== n
                ? n
                : [];
            },
          }))
          .actions((e) => {
            let t = {
              fillItemsAndIndexes() {
                var t;
                let a = 0;
                (e.items = (0, r.pj)([])),
                  null === (t = e.tabs) ||
                    void 0 === t ||
                    t.forEach((t, n) => {
                      var i;
                      e.datesMap.set(t.date, !1),
                        null === (i = t.blocks) ||
                          void 0 === i ||
                          i.forEach((t, i) => {
                            var r;
                            let o = t.id;
                            e.indexesMap.set(
                              "".concat(n, "_").concat(i, "_").concat(o),
                              a,
                            ),
                              null === (r = e.items) ||
                                void 0 === r ||
                                r.push({
                                  id: o,
                                  type: t.type,
                                  tabIndex: n,
                                  blockIndex: i,
                                  trackIndex: null,
                                  loadingState:
                                    a < 25 ? s.Gu.RESOLVE : s.Gu.IDLE,
                                }),
                              ++a,
                              t.tracks.forEach((t, r) => {
                                var o;
                                e.indexesMap.set(
                                  ""
                                    .concat(n, "_")
                                    .concat(i, "_")
                                    .concat(r, "_")
                                    .concat(t.id),
                                  a,
                                ),
                                  null === (o = e.items) ||
                                    void 0 === o ||
                                    o.push({
                                      id: t.id,
                                      type: t.type,
                                      tabIndex: n,
                                      blockIndex: i,
                                      trackIndex: r,
                                      loadingState:
                                        a < 25 ? s.Gu.RESOLVE : s.Gu.IDLE,
                                    }),
                                  ++a;
                              });
                          });
                    });
              },
              setTrack(t, a) {
                var n, i, r, o;
                let { tabIndex: l, blockIndex: c, trackIndex: u } = t,
                  { fullModel: d } = a.data;
                if (null === u) return;
                let m =
                  null === (o = e.tabs) || void 0 === o
                    ? void 0
                    : null === (r = o[l]) || void 0 === r
                      ? void 0
                      : null === (i = r.blocks) || void 0 === i
                        ? void 0
                        : null === (n = i[c]) || void 0 === n
                          ? void 0
                          : n.tracks[u];
                m && ((m.data = (0, D.Vt)(d)), (m.loadingState = s.Gu.RESOLVE));
              },
              setAlbum(t, a) {
                var n, i, r;
                let { tabIndex: o, blockIndex: l } = t,
                  { fullModel: c } = a.data,
                  u =
                    null === (r = e.tabs) || void 0 === r
                      ? void 0
                      : null === (i = r[o]) || void 0 === i
                        ? void 0
                        : null === (n = i.blocks) || void 0 === n
                          ? void 0
                          : n[l];
                (0, j.Ql)(u) &&
                  ((u.meta = (0, b.cO)({ album: c.album, artists: c.artists })),
                  (u.loadingState = s.Gu.RESOLVE));
              },
              setArtist(t, a) {
                var n, i, r;
                let { tabIndex: o, blockIndex: l } = t,
                  { fullModel: c } = a.data,
                  u =
                    null === (r = e.tabs) || void 0 === r
                      ? void 0
                      : null === (i = r[o]) || void 0 === i
                        ? void 0
                        : null === (n = i.blocks) || void 0 === n
                          ? void 0
                          : n[l];
                (0, j.DF)(u) &&
                  ((u.meta = (0, x.tR)(c.artist)),
                  (u.loadingState = s.Gu.RESOLVE));
              },
              setPlaylist(t, a) {
                var n, i, r;
                let { tabIndex: o, blockIndex: l } = t,
                  { fullModel: c } = a.data,
                  u =
                    null === (r = e.tabs) || void 0 === r
                      ? void 0
                      : null === (i = r[o]) || void 0 === i
                        ? void 0
                        : null === (n = i.blocks) || void 0 === n
                          ? void 0
                          : n[l];
                (0, j.v3)(u) &&
                  ((u.meta = {
                    ...(0, w.RE)({ playlist: c.playlist }),
                    tracksCount: c.tracksCount,
                  }),
                  (u.loadingState = s.Gu.RESOLVE));
              },
              setVibe(t, a) {
                var n, i, r;
                let { tabIndex: o, blockIndex: l } = t,
                  { fullModel: c } = a.data,
                  u =
                    null === (r = e.tabs) || void 0 === r
                      ? void 0
                      : null === (i = r[o]) || void 0 === i
                        ? void 0
                        : null === (n = i.blocks) || void 0 === n
                          ? void 0
                          : n[l];
                (0, j.eE)(u) &&
                  ((u.meta = {
                    ...(0, G.FF)(c.wave),
                    imageUrl: c.simpleWaveForegroundImageUrl,
                    backgroundColor: c.simpleWaveBackgroundColor,
                  }),
                  (u.loadingState = s.Gu.RESOLVE));
              },
              getMusicHistory: (0, r.ls)(function* () {
                let { musicHistoryResource: a, logger: n } = (0, r.dU)(e);
                if (e.loadingState !== s.Gu.PENDING)
                  try {
                    e.loadingState = s.Gu.PENDING;
                    let n = yield a.getMusicHistory({ fullModelsCount: 25 }),
                      i = M(n);
                    (e.tabs = (0, r.pj)(i.historyTabs.map(j.OE))),
                      t.fillItemsAndIndexes(),
                      (e.loadingState = s.Gu.RESOLVE);
                  } catch (t) {
                    !(t instanceof h.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      n.error(t),
                      (e.loadingState = s.Gu.REJECT);
                  }
              }),
              getItems: (0, r.ls)(function* (a) {
                let { musicHistoryResource: n } = (0, r.dU)(e),
                  i = e.getItemsToLoad(a),
                  o = yield n.getMusicHistoryItems({ items: B(i) });
                i.forEach((e) => {
                  e.loadingState = s.Gu.RESOLVE;
                });
                let l = O(i);
                o.items.forEach((e) => {
                  var a;
                  let n = V(e);
                  null === (a = l[n]) ||
                    void 0 === a ||
                    a.forEach((a) => {
                      switch (e.type) {
                        case T.EW.ALBUM:
                          t.setAlbum(a, e);
                          break;
                        case T.EW.TRACK:
                          t.setTrack(a, e);
                          break;
                        case T.EW.WAVE:
                          t.setVibe(a, e);
                          break;
                        case T.EW.PLAYLIST:
                          t.setPlaylist(a, e);
                          break;
                        case T.EW.ARTIST:
                          t.setArtist(a, e);
                      }
                      a.loadingState = s.Gu.RESOLVE;
                    });
                });
              }),
              setDatesMap(t, a) {
                e.datesMap.set(t, a);
              },
              reset() {
                (e.items = null),
                  (e.tabs = null),
                  e.indexesMap.clear(),
                  e.datesMap.clear(),
                  (e.loadingState = s.Gu.IDLE);
              },
            };
            return t;
          });
      a(2365), a(87278);
      let F = r.V5.model("NonMusicPage", { landing: v.d5 });
      a(75773);
      var W = a(30789),
        H = a(63173);
      a(7992);
      var z = a(22810),
        q = a(16367);
      let K = [
          T.Sc.ARTIST,
          T.Sc.ALBUM,
          T.Sc.TRACK,
          T.Sc.PLAYLIST,
          T.Sc.WAVE,
          T.Sc.PODCAST,
        ],
        Y = (e) => {
          let t = [...K];
          return (
            e.features.nonMusic || (t = t.filter((e) => e !== T.Sc.PODCAST)), t
          );
        },
        Z = [
          T.Sc.ALBUM,
          T.Sc.ARTIST,
          T.Sc.PLAYLIST,
          T.Sc.TRACK,
          T.Sc.UGC_TRACK,
          T.Sc.WAVE,
          T.Sc.PODCAST,
        ],
        J = (e, t) => {
          let a = [...Z];
          return (
            e === T.ay.TOP && (a = a.filter((e) => e !== T.Sc.UGC_TRACK)),
            t.features.nonMusic || (a = a.filter((e) => e !== T.Sc.PODCAST)),
            a
          );
        },
        Q = (e) => {
          let { wave: t } = e,
            a = "".concat(t.id.type, ":").concat(t.id.tag);
          return (0, r.pj)({
            title: t.title,
            subtitle: t.subTitle,
            stationId: a,
            seeds: [a],
            backgroundColor: t.color,
            imageUrl: t.image,
          });
        },
        X = (e) => {
          let { type: t } = e;
          switch (t) {
            case T.Sc.UGC_TRACK:
              return { type: t, data: (0, D.Z2)(e.track) };
            case T.Sc.TRACK:
              return { type: t, data: (0, D.Vt)(e.track) };
            case T.Sc.ARTIST:
              return { type: t, data: (0, x.d)(e.artist) };
            case T.Sc.PLAYLIST:
              return {
                type: t,
                data: (0, w.VB)({ ...e.playlist, artists: [] }),
              };
            case T.Sc.ALBUM:
              return { type: t, data: (0, b.ym)(e.album) };
            case T.Sc.WAVE:
              return { type: t, data: Q(e) };
            case T.Sc.PODCAST:
              return { type: t, data: (0, b.ym)(e.podcast) };
            default:
              return null;
          }
        },
        $ = (e) =>
          e.map((e) => {
            switch (e.type) {
              case T.Sc.ALBUM:
                return { type: T.Sc.ALBUM, data: (0, b.ym)(e.album) };
              case T.Sc.ARTIST:
                return { type: T.Sc.ARTIST, data: (0, x.d)(e.artist) };
              case T.Sc.PLAYLIST:
                return {
                  type: T.Sc.PLAYLIST,
                  data: (0, w.VB)({ ...e.playlist, artists: [] }),
                };
              case T.Sc.UGC_TRACK:
                return { type: T.Sc.UGC_TRACK, data: (0, D.Z2)(e.track) };
              case T.Sc.TRACK:
                return { type: T.Sc.TRACK, data: (0, D.Vt)(e.track) };
              case T.Sc.WAVE:
                return { type: T.Sc.WAVE, data: Q(e) };
              case T.Sc.PODCAST:
                return { type: T.Sc.PODCAST, data: (0, b.ym)(e.podcast) };
            }
          }),
        ee = r.V5.model("SearchHistoryPage", {
          items: r.V5.array(q.Iv),
          loadingState: r.V5.enumeration(Object.values(s.Gu)),
        }),
        et = r.V5.model("SearchPage", {
          searchCorrectedText: r.V5.maybeNull(r.V5.string),
          loadingState: r.V5.enumeration(Object.values(s.Gu)),
          searchRequestId: r.V5.optional(r.V5.string, ""),
          results: r.V5.array(q.Iv),
          history: ee,
          mixes: z.ZP,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === s.Gu.IDLE || e.loadingState === s.Gu.PENDING
              );
            },
            get isEmpty() {
              return (
                (e.loadingState === s.Gu.RESOLVE ||
                  e.loadingState === s.Gu.REJECT) &&
                0 === e.results.length
              );
            },
            get isHistoryLoading() {
              return (
                e.history.loadingState === s.Gu.IDLE ||
                e.history.loadingState === s.Gu.PENDING
              );
            },
            get isHistoryReady() {
              return e.history.loadingState === s.Gu.IDLE;
            },
            get isEmptyHistory() {
              return (
                !e.history.items.length &&
                e.history.loadingState === s.Gu.RESOLVE
              );
            },
            get isEmptyHistoryAndMixes() {
              return this.isEmptyHistory && 0 === e.mixes.items.length;
            },
          }))
          .actions((e) => {
            let t = {
              getSearchResults: (0, r.ls)(function* (t) {
                let { text: a, filter: n, config: i } = t,
                  { searchResource: o } = (0, r.dU)(e);
                try {
                  e.loadingState = s.Gu.PENDING;
                  let t = yield o.getInstantMixedSearch({
                    text: a,
                    type: J(n, i),
                    filter: n === T.ay.TOP ? void 0 : n,
                    withLikesCount: !0,
                    page: 0,
                    pageSize: 36,
                  });
                  t.misspellResult &&
                    (e.searchCorrectedText = t.misspellResult),
                    t.results &&
                      t.results.length > 0 &&
                      ((e.results = (0, r.pj)($(t.results).filter((e) => e))),
                      (e.searchRequestId = t.searchRequestId)),
                    (e.loadingState = s.Gu.RESOLVE);
                } catch (t) {
                  e.loadingState = s.Gu.REJECT;
                }
              }),
              getHistory: (0, r.ls)(function* (t) {
                let { userId: a, config: n } = t;
                if (e.history.loadingState === s.Gu.PENDING) return;
                let { usersResource: i } = (0, r.dU)(e);
                try {
                  e.history.loadingState = s.Gu.PENDING;
                  let t = yield i.getSearchHistory({
                    userId: a,
                    supportedTypes: Y(n),
                  });
                  (e.history.items = (0, r.pj)(t.map(X).filter((e) => e))),
                    (e.history.loadingState = s.Gu.RESOLVE);
                } catch (t) {
                  console.error(t), (e.history.loadingState = s.Gu.REJECT);
                }
              }),
              clearHistory: (0, r.ls)(function* (t) {
                let { userId: a } = t,
                  { usersResource: n } = (0, r.dU)(e);
                if (e.loadingState !== s.Gu.PENDING)
                  try {
                    (e.loadingState = s.Gu.PENDING),
                      yield n.clearSearchHistory({ userId: a }),
                      (e.loadingState = s.Gu.RESOLVE);
                  } catch (t) {
                    console.error(t), (e.loadingState = s.Gu.REJECT);
                  }
              }),
              resetHistoryItems() {
                e.history.items = (0, r.pj)([]);
              },
              resetHistoryStateRequest() {
                (e.history.loadingState = s.Gu.IDLE),
                  (e.history.items = (0, r.pj)([]));
              },
              resetResults() {
                e.results = (0, r.pj)([]);
              },
              resetSearchCorrectedText() {
                e.searchCorrectedText = null;
              },
              reset() {
                (e.searchCorrectedText = null),
                  (e.loadingState = s.Gu.IDLE),
                  (e.results = (0, r.pj)([]));
              },
              sendFeedback: (0, r.ls)(function* (t) {
                let { searchResource: a, logger: n } = (0, r.dU)(e);
                try {
                  yield a.sendFeedback(t);
                } catch (e) {
                  !(e instanceof h.eY) &&
                    (e instanceof Error || "string" == typeof e) &&
                    n.error(e);
                }
              }),
            };
            return t;
          });
      a(50950);
      var ea = a(42864),
        en = a(59221),
        ei = a(42503),
        er = a(43310),
        eo = a(14545);
      let el = (e) => {
        let t = Math.floor(Date.now() / 1e3),
          a = "".concat(e).concat(t),
          n = (0, eo.createHmac)("sha256", (0, s.Sq)())
            .update(a)
            .digest("base64");
        return { sign: n, timeStamp: t, trackId: e, format: T.yG.LRC };
      };
      var es = a(885),
        ec = a.n(es);
      let eu = (e) => {
          try {
            let t = ec()(e).scripts;
            return (t || []).map((e) => {
              let { start: t, end: a, text: n } = e;
              return { text: n.trim(), from: t, to: a };
            });
          } catch (e) {
            return [];
          }
        },
        ed = r.V5.model("SyncLyricsLineModel", {
          from: r.V5.number,
          to: r.V5.number,
          text: r.V5.string,
        }),
        em = r.V5.model("SyncLyricsModel", {
          loadingState: r.V5.enumeration(Object.values(s.Gu)),
          lines: r.V5.maybeNull(r.V5.array(ed)),
          major: r.V5.maybeNull(er.bP),
          writers: r.V5.maybeNull(r.V5.array(r.V5.string)),
          lyricId: r.V5.maybeNull(r.V5.number),
          externalLyricId: r.V5.maybeNull(r.V5.string),
        }).actions((e) => {
          let t = {
            getData: (0, r.ls)(function* (a) {
              let { tracksResource: n, logger: i } = (0, r.dU)(e);
              if (e.loadingState !== s.Gu.PENDING)
                try {
                  e.loadingState = s.Gu.PENDING;
                  let {
                    downloadUrl: i,
                    major: o,
                    externalLyricId: l,
                    lyricId: c,
                    writers: u,
                  } = yield n.getLyrics(el(a));
                  (e.major = (0, er.jp)(o)),
                    (e.externalLyricId = l),
                    (e.lyricId = c),
                    (e.writers = (0, r.pj)(u)),
                    yield t.downloadSyncLyrics(i),
                    (e.loadingState = s.Gu.RESOLVE);
                } catch (t) {
                  (e.loadingState = s.Gu.REJECT),
                    !(t instanceof h.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      i.error(t);
                }
            }),
            downloadSyncLyrics: (0, r.ls)(function* (t) {
              let { tracksResource: a } = (0, r.dU)(e),
                n = yield a.getLyricsText(t);
              e.lines = (0, r.pj)(eu(n));
            }),
            sendViews: (0, r.ls)(function* (t) {
              let { trackId: a, albumId: n, playlistId: i } = t,
                { lyricViewsResource: o, logger: l } = (0, r.dU)(e);
              if (e.loadingState === s.Gu.RESOLVE)
                try {
                  if (!e.major || !e.lyricId || !e.externalLyricId) return;
                  yield o.sendViews({
                    lyricViews: [
                      {
                        id: (0, ei.Z)(),
                        trackId: a,
                        albumId: n,
                        playlistId: i,
                        majorId: e.major.id,
                        lyricId: e.lyricId,
                        externalLyricId: e.externalLyricId,
                        lyricFormat: T.yG.LRC,
                      },
                    ],
                  });
                } catch (e) {
                  !(e instanceof h.eY) &&
                    (e instanceof Error || "string" == typeof e) &&
                    l.error(e);
                }
            }),
            reset() {
              (e.lines = null),
                (e.major = null),
                (e.externalLyricId = null),
                (e.lyricId = null),
                (e.writers = null),
                (e.loadingState = s.Gu.IDLE);
            },
          };
          return t;
        });
      var eg = a(5915),
        ep = a(9495),
        ef = a(82436),
        ev = a(41540),
        eh = a(7042),
        eb = a(26079),
        ey = a(39479);
      let e_ = r.V5.model("Root", {
          experiments: y.i_,
          user: ey.T_,
          collection: P,
          main: A,
          settings: y.ao,
          currentTrackInfo: D.Jx,
          album: g.Lf,
          artist: p.Od,
          library: y.f8,
          sonataState: ef.ps,
          playlist: W.nb,
          slides: eb.iV,
          vibe: ep.a,
          search: et,
          vibeSettings: ev.Ux,
          pinsCollection: en.Lc,
          genre: k.Kx,
          genres: L.EU,
          mixes: z.ZP,
          tag: ea.tS,
          chart: f._,
          post: H.vU,
          landingBlockEntities: v.oT,
          contextMenuPlaylists: E,
          musicHistory: U,
          createPlaylist: C.b_,
          location: y.CU,
          kinopoisk: I,
          nonMusic: F,
          disclaimer: eh.nU,
          trailer: eg.L,
          syncLyrics: em,
          modals: y.dC,
        }),
        ex = (e, t) => e_.create(e, t);
      var eS = a(58616);
      let eC = ["settings", "sonataState"],
        eE = (e, t) => eC.reduce((t, a) => ((t[a] = e[a]), t), (0, eS.Z)(t));
      (0, i.DT)(!1);
      let eN = (e) => {
        let { children: t, nonce: a } = e;
        (0, l.useRef)([]), (0, l.useContext)(o.ServerInsertedHTMLContext);
        let i = (0, s.YS)(),
          c = (0, s.wL)(),
          [u] = (0, l.useState)(() => {
            var e;
            let t = { ...i, logger: c };
            return (
              null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                ? void 0
                : e.length
            )
              ? ex(
                  window.__STATE_SNAPSHOT__[
                    window.__STATE_SNAPSHOT__.length - 1
                  ],
                  t,
                )
              : ex(m, t);
          });
        return (
          (0, l.useLayoutEffect)(() => {
            function e() {
              var e;
              let t =
                null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                  ? void 0
                  : e[window.__STATE_SNAPSHOT__.length - 1];
              t && (0, r.Xx)(u, eE(u, t)), delete window.__STATE_SNAPSHOT__;
            }
            return (
              e(),
              window.addEventListener("yMusicStateSnapshotUpdated", e),
              () => window.removeEventListener("yMusicStateSnapshotUpdated", e)
            );
          }, [u]),
          (0, n.jsx)(s.xf.Provider, { value: u, children: t })
        );
      };
    },
    13212: function (e, t, a) {
      "use strict";
      a.d(t, {
        mH: function () {
          return o.Genre;
        },
        fm: function () {
          return r;
        },
        uG: function () {
          return l;
        },
      });
      var n = a(96555);
      let i = n.V5.model("GenreListItemSubGenreModel", {
          tag: n.V5.string,
          title: n.V5.string,
        }),
        r = n.V5.model("GenreListItemModel", {
          tag: n.V5.string,
          title: n.V5.string,
          subGenres: n.V5.array(i),
        });
      var o = a(31925);
      let l = (e) => ({
        tag: e.tag,
        title: e.title,
        subGenres: (0, n.pj)(
          (e.leaves || []).map((e) => ({ tag: e.tag, title: e.title })),
        ),
      });
    },
    31925: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          Genre: function () {
            return c;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(1918),
        o = a(44285),
        l = a(65688),
        s = a.n(l);
      let c = (0, i.Pi)((e) => {
        let { tag: t, title: a, subGenres: i } = e;
        return (0, n.jsxs)("div", {
          className: s().root,
          children: [
            (0, n.jsx)(o.rU, {
              className: s().link,
              href: "/genre/".concat(t),
              children: (0, n.jsx)(r.Heading, {
                variant: "h2",
                size: "m",
                lineClamp: 1,
                className: s().linkTitle,
                children: a,
              }),
            }),
            i.length > 0 &&
              (0, n.jsx)("div", {
                className: s().list,
                children: i.map((e) =>
                  (0, n.jsx)(
                    "div",
                    {
                      className: s().item,
                      children: (0, n.jsx)(o.rU, {
                        className: s().link,
                        href: "/genre/".concat(e.tag),
                        children: (0, n.jsx)(r.Caption, {
                          variant: "span",
                          size: "l",
                          lineClamp: 1,
                          className: s().linkTitle,
                          children: e.title,
                        }),
                      }),
                    },
                    e.tag,
                  ),
                ),
              }),
          ],
        });
      });
    },
    24163: function (e, t, a) {
      "use strict";
      a.d(t, {
        Pj: function () {
          return o.ReleaseNotesModal;
        },
        TF: function () {
          return r.TitleBar;
        },
        l7: function () {
          return d;
        },
        Yl: function () {
          return i;
        },
        F5: function () {
          return v;
        },
        Zl: function () {
          return c;
        },
        Pt: function () {
          return g;
        },
        vs: function () {
          return p.useApplicationDeeplinks;
        },
        Er: function () {
          return l.useApplicationUpdate;
        },
        Zw: function () {
          return f.useLaunch;
        },
        bO: function () {
          return u.useRefreshApplicationData;
        },
        Tk: function () {
          return s.useReleaseNotes;
        },
      });
      var n = a(84133);
      let i = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(n.BO.ON_APPLICATION_READY);
      };
      a(46971);
      var r = a(58081),
        o = a(82703),
        l = a(83001),
        s = a(63919);
      let c = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(n.BO.NEED_SHOW_RELEASE_NOTES);
      };
      var u = a(33854);
      let d = () => {
        document.addEventListener("auxclick", (e) => e.preventDefault()),
          document.addEventListener("click", (e) => {
            (e.ctrlKey || e.metaKey) && e.preventDefault();
          });
      };
      var m = a(86502);
      let g = (e) => {
        var t;

        null === (t = window.desktopEvents) ||
          void 0 === t ||
          t.send(n.BO.ON_PLAYER_STATE, {
            isPlaying: e.status === m.Xz.PLAYING,
            status: e.status,
            track: e.track,
            progress: e.progress,
          });
      };
      var p = a(75084),
        f = a(2779);
      let v = (e) => {
        let t = e === n.Q2.Light ? "#FFFFFF" : "#000000";
        window.desktopEvents.send(n.BO.APPLICATION_THEME, t);
      };
    },
    46971: function (e, t, a) {
      "use strict";
      a.d(t, {
        N$: function () {
          return i;
        },
        eZ: function () {
          return o;
        },
        tX: function () {
          return r;
        },
      });
      var n = a(84133);
      let i = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(n.BO.WINDOW_MINIMIZE);
        },
        r = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(n.BO.WINDOW_MAXIMIZE);
        },
        o = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(n.BO.WINDOW_CLOSE);
        };
    },
    75084: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useApplicationDeeplinks: function () {
            return l;
          },
        });
      var n = a(11769),
        i = a(99616),
        r = a(84133);
      let o = [
          [/^\/home$/, () => "/"],
          [/^\/users\/(.*)\/playlists$/, () => "/collection"],
          [/^\/users\/(.*)\/artists$/, () => "/collection"],
          [/^\/users\/(.*)\/albums$/, () => "/collection"],
          [/^\/users\/(.*)\/tracks$/, () => "/collection"],
          [/^\/users\/(.*)\/podcasts$/, () => "/collection"],
          [/^\/users\/(.*)\/kids$/, () => "/collection"],
          [/^\/users\/(.*)\/history$/, () => "/music-history"],
          [
            /^\/album\/(.*)\/track\/(.*)$/,
            (e) => {
              var t;
              let a = (0, r.z)(e, "/album/:albumId/track/:trackId"),
                n = a.albumId;
              return null !== (t = (0, r.SZ)("/album/".concat(n))) &&
                void 0 !== t
                ? t
                : "/";
            },
          ],
        ],
        l = () => {
          let e = (0, n.useRouter)(),
            t = (0, i.useCallback)(
              (t, a) => {
                for (let [t, n] of o)
                  if (t.test(a)) {
                    e.push(n(a));
                    return;
                  }
                let n = (0, r.SZ)(a);
                n ? e.push(n) : e.push("/");
              },
              [e],
            );
          (0, i.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(r.BO.ON_HANDLE_DEEPLINK, t),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(r.BO.ON_HANDLE_DEEPLINK, t);
              }
            );
          }, [t]);
        };
    },
    83001: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useApplicationUpdate: function () {
            return p;
          },
        });
      var n = a(8759),
        i = a(99616),
        r = a(65244),
        o = a(84133),
        l = a(35338),
        s = a(15527),
        c = a(1918),
        u = a(44285),
        d = a(12576),
        m = a.n(d);
      let g = (e) => {
          let { version: t, formatMessage: a, closeToast: r } = e,
            d = (0, i.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(o.BO.ON_UPDATE_INSTALL),
                null == r || r();
            }, [r]),
            g = (0, i.useMemo)(
              () =>
                (0, n.jsxs)("div", {
                  className: m().message,
                  children: [
                    (0, n.jsx)(c.Caption, {
                      className: m().text,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: a(
                        { id: "desktop.on-update-available" },
                        { version: t },
                      ),
                    }),
                    (0, n.jsx)(s.z, {
                      className: m().button,
                      onClick: d,
                      variant: "default",
                      color: "secondary",
                      size: "xs",
                      radius: "xxxl",
                      children: (0, n.jsx)(c.Caption, {
                        variant: "div",
                        type: "controls",
                        size: "m",
                        children: a({ id: "desktop.update" }),
                      }),
                    }),
                  ],
                }),
              [a, d, t],
            );
          return (0, n.jsx)(u.Yj, {
            className: (0, l.W)(m().root, m().important),
            message: g,
          });
        },
        p = () => {
          let { formatMessage: e } = (0, r.Z)(),
            { notify: t } = (0, o.d$)(),
            a = (0, i.useRef)(""),
            l = (0, i.useCallback)(
              (i, r) => {
                a.current !== r &&
                  ((a.current = r),
                  t((0, n.jsx)(g, { formatMessage: e, version: r }), {
                    containerId: o.W$.APPLICATION_UPDATE,
                  }));
              },
              [e, a, t],
            );
          (0, i.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(o.BO.ON_UPDATE_AVAILABLE, l),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(o.BO.ON_UPDATE_AVAILABLE, l);
              }
            );
          }, [l]);
        };
    },
    2779: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useLaunch: function () {
            return r;
          },
        });
      var n = a(99616),
        i = a(84133);
      let r = () => {
        let e = (0, i.sv)(),
          t = (0, n.useCallback)(() => {
            let t = (0, i.bo)();
            t && e.count(t, "installsCount");
          }, [e]);
        (0, n.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(i.BO.FIRST_LAUNCH, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(i.BO.FIRST_LAUNCH, t);
            }
          );
        }, [t]);
      };
    },
    33854: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useRefreshApplicationData: function () {
            return o;
          },
        });
      var n = a(99616),
        i = a(36019),
        r = a(84133);
      let o = () => {
        let {
            library: e,
            collection: t,
            experiments: a,
            main: o,
            user: l,
          } = (0, r.oR)(),
          s = (0, n.useCallback)(() => {
            a.getData(),
              e.getData(),
              o.landing.isLoaded &&
                o.landing.getSkeleton(
                  { id: i.jB.WEB_MAIN, showWizard: l.settings.showWizard },
                  { preloadBlocks: 2 },
                ),
              t.landing.isLoaded &&
                t.landing.getSkeleton(
                  {
                    id: i.jB.WEB_COLLECTION,
                    showWizard: l.settings.showWizard,
                  },
                  { preloadBlocks: 3 },
                );
          }, [t.landing, a, e, o.landing, l.settings.showWizard]);
        (0, n.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(r.BO.UPDATE_APPLICATION_DATA, s),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(r.BO.UPDATE_APPLICATION_DATA, s);
            }
          );
        }, [s]);
      };
    },
    63919: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useReleaseNotes: function () {
            return r;
          },
        });
      var n = a(99616),
        i = a(84133);
      let r = () => {
        let {
          modals: { releaseNotesModal: e },
        } = (0, i.oR)();
        (0, n.useEffect)(() => {
          var t;
          return (
            null === (t = window.desktopEvents) ||
              void 0 === t ||
              t.on(i.BO.SHOW_RELEASE_NOTES, e.open),
            () => {
              var t;
              null === (t = window.desktopEvents) ||
                void 0 === t ||
                t.off(i.BO.SHOW_RELEASE_NOTES, e.open);
            }
          );
        }, [e.open]);
      };
    },
    82703: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ReleaseNotesModal: function () {
            return v;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(99616),
        l = a(65244),
        s = a(2814),
        c = a(31476),
        u = a(71716),
        d = a(1918),
        m = a(84133),
        g = a(45679),
        p = a.n(g);
      let f = {
          ul: (e) =>
            (0, n.jsx)("ul", { className: p().description, children: e }),
          li: (e) => (0, n.jsx)("li", { className: p().item, children: e }),
          code: (e) => (0, n.jsx)("code", { className: p().code, children: e }),
          date: (e) => (0, n.jsx)("span", { className: p().date, children: e }),
          p: (e) => (0, n.jsx)("p", { className: p().paragraph, children: e }),
          br: (0, n.jsx)("br", {}),
        },
        v = (0, r.Pi)((e) => {
          let { dictionary: t } = e,
            {
              modals: { releaseNotesModal: a },
            } = (0, m.oR)(),
            { formatMessage: r } = (0, l.Z)(),
            g = (0, o.useMemo)(() => (0, m.L)(t), [t]);
          return (0, n.jsx)(c.u, {
            title: r({ id: "desktop.release-notes-modal-title" }),
            open: a.isOpened,
            onOpenChange: a.onOpenChange,
            onClose: a.close,
            size: "fitContent",
            placement: "center",
            labelClose: r({ id: "interface-actions.close" }),
            className: p().root,
            headerClassName: p().modalHeader,
            contentClassName: p().modalContent,
            children: (0, n.jsx)(u.t, {
              className: (0, i.W)(p().scrollableContent, p().important),
              containerClassName: (0, i.W)(p().notes, p().important),
              children: g.map((e) =>
                (0, n.jsxs)(
                  "div",
                  {
                    className: p().note,
                    children: [
                      (0, n.jsx)(d.Heading, {
                        variant: "h4",
                        className: (0, i.W)(p().version, p().important),
                        children: (0, m.K7)(e),
                      }),
                      (0, n.jsx)(s.Z, { id: e, values: f }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          });
        });
    },
    58081: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          TitleBar: function () {
            return g;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(99616),
        l = a(65244),
        s = a(84133),
        c = a(46971),
        u = a(99750),
        d = a.n(u);
      let m = (e) => {
          let {
            children: t,
            className: a,
            onClick: r,
            ariaLabel: o,
            withSecondaryColor: l,
          } = e;
          return (0, n.jsx)("button", {
            type: "button",
            className: (0, i.W)(
              d().button,
              { [d().button_withSecondaryColor]: l },
              a,
            ),
            onClick: r,
            "aria-label": o,
            children: t,
          });
        },
        g = (0, r.Pi)((e) => {
          let { withSecondaryColor: t } = e,
            a = (0, s.Xf)(),
            r = a === s.t4.WINDOWS,
            { formatMessage: u } = (0, l.Z)(),
            g = (0, o.useCallback)(() => {
              (0, c.N$)();
            }, []),
            p = (0, o.useCallback)(() => {
              (0, c.tX)();
            }, []),
            f = (0, o.useCallback)(() => {
              (0, c.eZ)();
            }, []);
          return (0, n.jsx)("div", {
            className: d().root,
            onDoubleClick: p,
            children:
              r &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(m, {
                    onClick: g,
                    ariaLabel: u({ id: "windows-menu.roll-up" }),
                    withSecondaryColor: t,
                    children: (0, n.jsx)("svg", {
                      width: "10",
                      height: "1",
                      viewBox: "0 0 10 1",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, i.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, n.jsx)("path", {
                        d: "M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, n.jsx)(m, {
                    onClick: p,
                    ariaLabel: u({ id: "windows-menu.unwrap" }),
                    withSecondaryColor: t,
                    children: (0, n.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, i.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, n.jsx)("path", {
                        d: "M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, n.jsx)(m, {
                    className: d().closeButton,
                    onClick: f,
                    ariaLabel: u({ id: "windows-menu.close" }),
                    children: (0, n.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, i.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, n.jsx)("path", {
                        d: "M5 5.70801L0.854492 9.85352C0.756836 9.95117 0.639648 10 0.50293 10C0.359701 10 0.239258 9.9528 0.141602 9.8584C0.0472005 9.76074 0 9.6403 0 9.49707C0 9.36035 0.0488281 9.24316 0.146484 9.14551L4.29199 5L0.146484 0.854492C0.0488281 0.756836 0 0.638021 0 0.498047C0 0.429688 0.0130208 0.364583 0.0390625 0.302734C0.0651042 0.240885 0.100911 0.188802 0.146484 0.146484C0.192057 0.100911 0.245768 0.0651042 0.307617 0.0390625C0.369466 0.0130208 0.43457 0 0.50293 0C0.639648 0 0.756836 0.0488281 0.854492 0.146484L5 4.29199L9.14551 0.146484C9.24316 0.0488281 9.36198 0 9.50195 0C9.57031 0 9.63379 0.0130208 9.69238 0.0390625C9.75423 0.0651042 9.80794 0.100911 9.85352 0.146484C9.89909 0.192057 9.9349 0.245768 9.96094 0.307617C9.98698 0.366211 10 0.429688 10 0.498047C10 0.638021 9.95117 0.756836 9.85352 0.854492L5.70801 5L9.85352 9.14551C9.95117 9.24316 10 9.36035 10 9.49707C10 9.56543 9.98698 9.63053 9.96094 9.69238C9.9349 9.75423 9.89909 9.80794 9.85352 9.85352C9.8112 9.89909 9.75911 9.9349 9.69727 9.96094C9.63542 9.98698 9.57031 10 9.50195 10C9.36198 10 9.24316 9.95117 9.14551 9.85352L5 5.70801Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                ],
              }),
          });
        });
    },
    82436: function (e, t, a) {
      "use strict";
      a.d(t, {
        $Z: function () {
          return C.RepeatButton;
        },
        P4: function () {
          return S.ShuffleButton;
        },
        WP: function () {
          return n.SonataControls;
        },
        ps: function () {
          return _;
        },
        RN: function () {
          return x;
        },
      });
      var n = a(2931);
      a(74758), a(34512);
      var i = a(93043),
        r = a(96555),
        o = a(71440),
        l = a(29765),
        s = a(94175),
        c = a(86502),
        u = a(84140),
        d = a(21774),
        m = a(81446),
        g = a(43310),
        p = a(84133);
      let f = (e) => {
          var t, a, n;
          switch (e.data.type) {
            case u.A4.Generative: {
              let a = e.data.meta,
                n = (0, p.Us)(null == a ? void 0 : a.derivedColors);
              return (0, r.pj)({
                id: String(a.id),
                coverUri: a.imageUrl,
                title: null !== (t = a.title) && void 0 !== t ? t : "",
                isAvailable: !0,
                isRemoved: !1,
                averageColor: n,
              });
            }
            case c.RX.Unloaded:
              return null;
            default: {
              let t = e.data.meta,
                i =
                  null === (a = t.artists) || void 0 === a
                    ? void 0
                    : a.map(m.d),
                o =
                  null === (n = t.albums) || void 0 === n ? void 0 : n.map(d.N);
              return (0, r.pj)({ ...(0, g.Ni)(t), artists: i, albums: o });
            }
          }
        },
        v = r.V5.model("UnloadedEntityMeta", {
          id: r.V5.union(r.V5.number, r.V5.string),
          albumId: r.V5.maybe(r.V5.union(r.V5.number, r.V5.string)),
        }),
        h = r.V5.model("UnloadedEntityData", {
          meta: v,
          type: r.V5.literal(c.RX.Unloaded),
        });
      var b = a(16121);
      let y = g.yp
          .props({
            artists: r.V5.array(m.Go),
            albums: r.V5.array(d.KX),
            chart: r.V5.maybe(b.BH),
          })
          .views((e) => ({
            get idWithContext() {
              return e.albumId ? "".concat(e.id, ":").concat(e.albumId) : e.id;
            },
            get artistsNames() {
              var t;
              return null === (t = e.artists) || void 0 === t
                ? void 0
                : t.map((e) => e.name).join(", ");
            },
            get mainAlbum() {
              var a, n;
              return null !==
                (n = null === (a = e.albums) || void 0 === a ? void 0 : a[0]) &&
                void 0 !== n
                ? n
                : null;
            },
            get index() {
              var i, r, o;
              return null !==
                (o =
                  null === (r = e.albums[0]) || void 0 === r
                    ? void 0
                    : null === (i = r.trackPosition) || void 0 === i
                      ? void 0
                      : i.index) && void 0 !== o
                ? o
                : null;
            },
          })),
        _ = r.V5.model("SonataState", {
          contextType: r.V5.maybeNull(r.V5.enumeration(Object.values(o.Ak))),
          contextId: r.V5.maybeNull(r.V5.string),
          entityMeta: r.V5.maybeNull(y),
          unloadedEntitiesData: r.V5.maybe(r.V5.array(h)),
          status: r.V5.enumeration(Object.values(c.Xz)),
          canMoveForward: r.V5.boolean,
          canMoveBackward: r.V5.boolean,
          repeatMode: r.V5.enumeration(Object.values(s.zq)),
          canChangeRepeatMode: r.V5.boolean,
          volume: r.V5.maybe(r.V5.number),
          canShuffle: r.V5.boolean,
          shuffle: r.V5.boolean,
          currentlyPlayingTrackIndex: r.V5.maybe(r.V5.number),
          quality: r.V5.enumeration(Object.values(l.nJ)),
        })
          .views((e) => ({
            get unloadedEntitiesDataFromModels() {
              return (0, i.ZN)(e.unloadedEntitiesData);
            },
            get isGenerativeContext() {
              return e.contextType === o.Ak.Generative;
            },
          }))
          .actions((e) => ({
            setContextId: (t) => {
              e.contextId = String(t);
            },
            setContextType: (t) => {
              e.contextType = t;
            },
            setEntityMeta: (t) => {
              t && t.data.meta && (e.entityMeta = f(t));
            },
            setUnloadedEntitiesData: (t) => {
              t && (e.unloadedEntitiesData = (0, r.pj)(t));
            },
            resetUnloadedEntitiesData: () => {
              e.unloadedEntitiesData = void 0;
            },
            setStatus: (t) => {
              e.status = t;
            },
            setCanMoveForward: (t) => {
              e.canMoveForward = t;
            },
            setCanMoveBackward: (t) => {
              e.canMoveBackward = t;
            },
            setVolume: (t) => {
              e.volume = t;
            },
            setRepeatMode: (t) => {
              e.repeatMode = t;
            },
            setCanChangeRepeatMode: (t) => {
              e.canChangeRepeatMode = t;
            },
            setCanShuffle: (t) => {
              e.canShuffle = t;
            },
            setShuffle: (t) => {
              e.shuffle = t;
            },
            setCurrentlyPlayingTrackIndex: (t) => {
              e.currentlyPlayingTrackIndex = t;
            },
            setQuality: (t) => {
              e.quality = t;
            },
          })),
        x = (e, t) => ({ type: c.RX.Unloaded, meta: { id: e, albumId: t } });
      var S = a(66403),
        C = a(6769);
    },
    3561: function (e, t, a) {
      "use strict";
      a.d(t, {
        L: function () {
          return v;
        },
        y5: function () {
          return o;
        },
        iX: function () {
          return U;
        },
        Cx: function () {
          return F;
        },
      });
      var n,
        i,
        r = a(99616);
      let o = (0, r.createContext)(null),
        l = (e, t) => (t >= 280 && t < 360 ? e % 360 : e),
        s = (e) => (e + 280) % 360,
        c = (e, t, a) => {
          let n = (n) => {
            let i = (n + e / 30) % 12;
            return (
              a -
              t * Math.min(a, 1 - a) * Math.max(-1, Math.min(i - 3, 9 - i, 1))
            );
          };
          return [n(0), n(8), n(4)];
        };
      var u = a(24807);
      let d = (e) => Math.round(100 * e) / 100,
        m = (e, t) => Math.floor(Math.random() * (Math.floor(t) - e + 1)) + e,
        g = (e) => Math.min(1, d(e)),
        p = (e) => (null != e ? e : 10),
        f = (e) => {
          let { hue: t, collectionHue: a, energy: n, backgroundColor: i } = e,
            r = { collectionHue: p(a) };
          return (
            t && (r.hue = t),
            n && (r.energy = (n + 1) * 0.4),
            i && (r.backgroundColor = i),
            r
          );
        };
      class v {
        handleUserAction() {
          this.audioContext.resume(),
            document.removeEventListener("click", this.handleUserAction);
        }
        setupListeners() {
          document.addEventListener("click", this.handleUserAction);
        }
        getAverageFrequencies(e) {
          var t, a;
          let { low: n, high: i } = e,
            r = Math.floor(
              n / (this.audioContext.sampleRate / this.bufferLength),
            ),
            o = Math.floor(
              i / (this.audioContext.sampleRate / this.bufferLength),
            );
          null === (t = this.analyserNode) ||
            void 0 === t ||
            t.getByteFrequencyData(this.spectrum);
          let l = 0,
            s = 0;
          for (let e = r; e <= o; e++) {
            let t = null !== (a = this.spectrum[e]) && void 0 !== a ? a : 0;
            (l += t / 256), s++;
          }
          return g(l / s);
        }
        constructor(e) {
          (0, u._)(this, "audioContext", void 0),
            (0, u._)(this, "sourceNode", void 0),
            (0, u._)(this, "analyserNode", void 0),
            (0, u._)(this, "bufferLength", 0),
            (0, u._)(this, "spectrum", new Uint8Array()),
            (this.audioContext = new AudioContext()),
            (this.sourceNode = this.audioContext.createMediaElementSource(e)),
            (this.analyserNode = this.audioContext.createAnalyser()),
            (this.analyserNode.fftSize = 32),
            (this.analyserNode.smoothingTimeConstant = 0.9),
            this.sourceNode.connect(this.analyserNode),
            this.analyserNode.connect(this.audioContext.destination),
            (this.bufferLength = this.analyserNode.frequencyBinCount),
            (this.spectrum = new Uint8Array(this.bufferLength)),
            (this.handleUserAction = this.handleUserAction.bind(this)),
            this.setupListeners();
        }
      }
      var h = a(7088),
        b = a(93456),
        y = a(35512),
        _ = a(41943),
        x = a(85777);
      ((n = i || (i = {})).ACTIVE_TAB = "ACTIVE_TAB"),
        (n.BLOCK_VISIBILITY = "BLOCK_VISIBILITY"),
        (n.MANUAL = "MANUAL");
      class S {
        start() {
          let e = window.performance.now(),
            t = 1e3 / this.fps,
            a = (n) => {
              this.requestId = requestAnimationFrame(a);
              let i = n - e;
              i >= t - 0.1 && ((e = n - (i % t)), this.render(i));
            };
          this.requestId = requestAnimationFrame(a);
        }
        stop() {
          cancelAnimationFrame(this.requestId);
        }
        constructor(e, t) {
          (0, u._)(this, "fps", void 0),
            (0, u._)(this, "render", void 0),
            (0, u._)(this, "requestId", void 0),
            (this.fps = e),
            (this.render = t),
            (this.requestId = 0);
        }
      }
      var C = a(12143),
        E = a(59728);
      class N {
        clamp(e, t, a) {
          return Math.min(Math.max(e, t), a);
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
        constructor(e, t, a, n) {
          (0, u._)(this, "currentValue", void 0),
            (0, u._)(this, "targetValue", void 0),
            (0, u._)(this, "elapsedTime", void 0),
            (0, u._)(this, "duration", void 0),
            (0, u._)(this, "formatter", void 0),
            (this.currentValue = e),
            (this.targetValue = t),
            (this.duration = a),
            (this.elapsedTime = 0),
            (this.formatter = n);
        }
      }
      class P {
        get value() {
          return [this.r.value, this.g.value, this.b.value];
        }
        update(e) {
          let t = c(e, 1, 0.5);
          this.r.update(t[0]), this.g.update(t[1]), this.b.update(t[2]);
        }
        next(e) {
          this.r.next(e), this.g.next(e), this.b.next(e);
        }
        constructor(e) {
          (0, u._)(this, "r", void 0),
            (0, u._)(this, "g", void 0),
            (0, u._)(this, "b", void 0);
          let t = c(e, 1, 0.5);
          (this.r = new N(t[0], t[0], 3e3)),
            (this.g = new N(t[1], t[1], 3e3)),
            (this.b = new N(t[2], t[2], 3e3));
        }
      }
      class k {
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
          let a = s(e),
            n = l(a + m(40, 80), a),
            i = s(t);
          this.topStart.update(a),
            this.topEnd.update(l(a + m(30, 40), a)),
            this.middleStart.update(n),
            this.middleEnd.update(l(n + m(30, 40), a)),
            this.bottomStart.update(i),
            this.bottomEnd.update(l(i + m(30, 40), a));
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
          (0, u._)(this, "hue", 22.968),
            (0, u._)(this, "collectionHue", 10),
            (0, u._)(this, "topStart", void 0),
            (0, u._)(this, "topEnd", void 0),
            (0, u._)(this, "middleStart", void 0),
            (0, u._)(this, "middleEnd", void 0),
            (0, u._)(this, "bottomStart", void 0),
            (0, u._)(this, "bottomEnd", void 0),
            (this.collectionHue = e);
          let t = s(e),
            a = l(t + m(30, 40), t);
          (this.topStart = new P(50)),
            (this.topEnd = new P(50)),
            (this.middleStart = new P(300)),
            (this.middleEnd = new P(320)),
            (this.bottomStart = new P(t)),
            (this.bottomEnd = new P(a));
        }
      }
      class L {
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
          this.background = new C.A(e, e, e);
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
          this.energy.next(e),
            this.color.next(e),
            this.reactTop.next(e),
            this.reactMiddle.next(e),
            this.reactBottom.next(e),
            this.updateTime(e);
          let a = t.getAverageFrequencies({ low: 0, high: 250 }),
            n = t.getAverageFrequencies({ low: 500, high: 2e3 }),
            i = t.getAverageFrequencies({ low: 2e3, high: 4e3 });
          this.audioLowRatio.next(e),
            this.audioMiddleRatio.next(e),
            this.audioHighRatio.next(e),
            (this.audio = [
              a * this.audioLowRatio.value,
              n * this.audioMiddleRatio.value,
              i * this.audioHighRatio.value,
            ]);
        }
        toObject() {
          return {
            vScreenSize: this.toValue(new E.S(this.width, this.height)),
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
          (0, u._)(this, "isPlaying", !1),
            (0, u._)(this, "quality", 0.6),
            (0, u._)(this, "background", new C.A(0, 0, 0)),
            (0, u._)(this, "energy", new N(0.2, 0.2, 1e3)),
            (0, u._)(this, "time", Math.floor(3600 * Math.random())),
            (0, u._)(this, "color", void 0),
            (0, u._)(this, "rotation", [
              new C.A(-0.3, 0.3, 0.2),
              new C.A(-0.3, -0.3, -0.2),
              new C.A(-0.3, -0.3, 0.2),
            ]),
            (0, u._)(this, "audio", [0, 0, 0]),
            (0, u._)(this, "audioLowRatio", new N(0, 0, 1e3)),
            (0, u._)(this, "audioMiddleRatio", new N(0, 0, 1e3)),
            (0, u._)(this, "audioHighRatio", new N(0, 0, 1e3)),
            (0, u._)(this, "reactTop", new N(0, 0, 600)),
            (0, u._)(this, "reactMiddle", new N(0, 0, 600)),
            (0, u._)(this, "reactBottom", new N(0, 0, 600)),
            (0, u._)(this, "point", [0, 0]),
            (0, u._)(this, "interaction", 0),
            (this.color = new k(e));
        }
      }
      class I {
        get rendererOptions() {
          return { alpha: !1, antialias: !1, preserveDrawingBuffer: !1 };
        }
        get vertexAndFragment() {
          return {
            vertex:
              "\nprecision highp float;\nattribute vec4 position;\n\nvoid main() {\n    gl_Position = position;\n}\n",
            fragment:
              "\nprecision highp float;\n\nuniform vec2 vScreenSize;\nuniform float vTime;\n\nuniform vec3 vColorBackground;\n\nuniform vec3 vColor[6];\nuniform vec3 vRotation[3];\n\nuniform float vAudio[3];\nuniform float vReact[3];\n\nuniform vec2 vInteractionPoint;\nuniform float vInteraction;\n\n#define CIRCLE_WIDTH_BASE 0.8\n#define CIRCLE_WIDTH_STEP 0.2\n\n#define SPARK_STRENGTH_BASE 1.0\n#define SPARK_STRENGTH_STEP 0.3\n\n#define CIRCLE_RADIUS_BASE 0.95\n#define CIRCLE_RADIUS_STEP 0.15\n\n#define CIRCLE_OFFSET_BASE 0.0\n#define CIRCLE_OFFSET_STEP 1.57\n\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise3(vec3 v) {\n  const vec2 C = vec2(0.1666667, 0.3333333); // vec2(1.0/6.0, 1.0/3.0)\n  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  // First corner\n  vec3 i = floor(v + dot(v, C.yyy));\n  vec3 x0 = v - i + dot(i, C.xxx);\n\n  // Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min(g.xyz, l.zxy);\n  vec3 i2 = max(g.xyz, l.zxy);\n\n  // x0 = x0 - 0. + 0.0 * C\n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n  // Permutations\n  i = mod(i, 289.0);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n  // Gradients ( N*N points uniformly over a square, mapped onto an octahedron.)\n  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3 ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z *ns.z); //  mod(p,N*N), N=7\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n  //Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  // Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));\n}\n\nfloat tri(in float x){return abs(fract(x)-.5);}\nvec3 tri3(in vec3 p){return vec3( tri(p.z+tri(p.y*20.)), tri(p.z+tri(p.x*1.)), tri(p.y+tri(p.x*1.)));}\n\nfloat triNoise3D(in vec3 p, in float spd)\n{\n  float z=0.4;\n  float rz = 0.1;\n  vec3 bp = p;\n  for (float i=0.; i<=4.; i++ )\n  {\n    vec3 dg = tri3(bp*0.01); // Increase the scale factor to make noise less frequent\n    p += (dg+vTime*.1*spd);\n\n    bp *= 4.; // Increase the scale factor\n    z *= 0.9;\n    p *= 1.6; // Increase the scale factor\n\n    rz+= (tri(p.z+tri(0.6*p.x+0.1*tri(p.y))))/z;\n  }\n  return smoothstep(0.0, 8., rz + sin(rz + sin(z) * 2.8) * 2.2);\n}\n\nvec2 rotate(vec2 p, float a) {\n  float s = sin(a);\n  float c = cos(a);\n  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}\n\nfloat light(float intensity, float attenuation, float dist) {\n  return intensity / (1.0 + dist + dist * attenuation);\n}\n\nvec4 makeNoiseBlob2(vec2 uv, vec3 color1, vec3 color2, float strength, float offset) {\n  float len = length(uv);\n  float v0, v1, cl;\n  float r0, d0, n0;\n  float r, d;\n\n  n0 = snoise3( vec3(uv * 1.2 + offset, vTime * 0.5 + offset) ) * 0.5 + 0.5;\n  r0 = mix(0.0, 1.0, n0);\n  d0 = distance(uv, r0 / len * uv);\n  v0 = smoothstep(r0 + 0.1 + (sin(vTime + offset) + 1.0), r0, len);\n\n  v1 = light(0.15 * (1.0 + 1.5 * (-sin(vTime * 2. + offset * 0.5) * 0.5)) + 0.3 * strength, 10.0 , d0);\n\n  vec3 col = mix(color1, color2, uv.y * 2.);\n  col = col + v1;\n  col.rgb = clamp(col.rgb, 0.0, 1.0);\n  return vec4(col, v0);\n}\n\nvec4 makeBlob(vec2 uv,\n              float blob,\n              vec3 color1,\n              vec3 color2,\n              float width,\n              float baseReaction,\n              float likeReaction,\n              float audioStrength,\n              float offset,\n              vec2 noiseOffset) {\n  float len = length(uv);\n\n  float outerRadius = blob + width * 0.5 + baseReaction * (1.0 + max(likeReaction, audioStrength * 0.6) * 50. * baseReaction);\n\n  float strength = max(likeReaction, audioStrength);\n\n  vec4 noise = makeNoiseBlob2(uv * (1.0 - likeReaction * 0.5) + noiseOffset, color1, color2, strength, offset);\n  noise.a = mix(0.0, noise.a, smoothstep(outerRadius, 0.5, len));\n  noise.rgb += 0.6 * likeReaction * (1.0 - smoothstep(0.2, outerRadius * 0.8, len));\n\n  return noise;\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / vScreenSize.xy;\n\n  uv = uv * 2.0 - 1.0;\n  uv.y *= vScreenSize.y / min(vScreenSize.x, vScreenSize.y) / 0.55;\n  uv.x *= vScreenSize.x / min(vScreenSize.x, vScreenSize.y) / 0.55;\n\n  vec2 ruv = uv * 2.0;\n  float pr = length(ruv);\n  float pa = atan(ruv.y, ruv.x);\n\n  float idx = (pa/3.1415) / 2.0;   // 0 to 1\n\n  vec2 ruv1 = rotate(uv * 2.0, 3.1415);\n  float pa1 = atan(ruv1.y, ruv1.x);\n  float idx1 = (pa1/3.1415) / 2.0;   // 0 to 1\n  float idx21 = (pa1/3.1415 + 1.0) / 2.0 * 3.1415; // 0 to PI\n\n  float spark = triNoise3D(vec3(idx, 0.0, 0.0), 0.1);\n  spark = mix(spark, triNoise3D(vec3(idx1, 0.0, idx1), 0.1), smoothstep(0.9, 1.0, sin(idx21)));\n  spark = spark * 0.2 + pow(spark, 10.);\n  spark = smoothstep(0.0, spark, 0.3) * spark;\n\n  vec3 color = vColorBackground;\n  vec4 blobColor;\n  float floatIndex;\n  float radius;\n\n  float n0 = snoise3(vec3(uv * 1.2, vTime * 0.5));\n\n  for (int i = 0; i < 3; i++) {\n    floatIndex = float(i);\n    radius = CIRCLE_RADIUS_BASE - CIRCLE_RADIUS_STEP * floatIndex;\n    blobColor = makeBlob(uv,\n                         mix(radius, radius + 0.3, n0),\n                         vColor[i],\n                         vColor[i+3],\n                         CIRCLE_WIDTH_BASE - CIRCLE_WIDTH_STEP * floatIndex,\n                         (SPARK_STRENGTH_BASE - SPARK_STRENGTH_STEP * floatIndex) * spark,\n                         vReact[i],\n                         vAudio[i],\n                         CIRCLE_OFFSET_BASE + CIRCLE_OFFSET_STEP * floatIndex,\n                         rotate(vRotation[i].xy, vTime * vRotation[i].z));\n    color = mix(color, blobColor.rgb, blobColor.a);\n  }\n\n  gl_FragColor = vec4(color, 1.0);\n}\n",
          };
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
            t = new h.J(e, {
              width: 2,
              height: 2,
              position: {
                size: 4,
                data: new Float32Array([
                  -1, -1, 1, 1, -1, 1, -1, 1, 1, 1, 1, 1,
                ]),
              },
            });
          this.shader = new b.$(e, {
            ...this.vertexAndFragment,
            uniforms: this.uniforms.toObject(),
          });
          let a = new y.K(e, { geometry: t, program: this.shader });
          a.setParent(this.scene);
        }
        render() {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          this.uniforms.update(t, this.analyzer),
            (this.shader.uniforms = this.uniforms.toObject()),
            null === (e = this.renderer) ||
              void 0 === e ||
              e.render({ scene: this.scene });
        }
        handleOnResize() {
          this.renderer.setSize(this.uniforms.width, this.uniforms.height);
        }
        handleOnVisibilityChange() {
          document.hidden
            ? this.disableRender(i.ACTIVE_TAB)
            : this.enableRender(i.ACTIVE_TAB);
        }
        updateRenderingState() {
          let e = Object.values(this.renderState).every((e) => e);
          e ? this.ticker.start() : this.ticker.stop();
        }
        applySettings(e) {
          let {
            hue: t,
            collectionHue: a,
            energy: n,
            backgroundColor: i,
          } = f(e);
          t && a && this.uniforms.updateColor(t, a),
            n && this.uniforms.updateEnergy(n),
            i && this.uniforms.updateBackgroundColor(i);
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
          this.uniforms.updateEnergy(0.2), this.uniforms.updatePlayingState(!1);
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
        constructor(e, t, a) {
          (0, u._)(this, "analyzer", void 0),
            (0, u._)(this, "ticker", void 0),
            (0, u._)(this, "scene", new _.w()),
            (0, u._)(this, "shader", void 0),
            (0, u._)(this, "renderer", void 0),
            (0, u._)(this, "uniforms", void 0),
            (0, u._)(this, "renderState", {
              [i.ACTIVE_TAB]: !0,
              [i.BLOCK_VISIBILITY]: !0,
              [i.MANUAL]: !0,
            }),
            (this.uniforms = new L(p(a))),
            (this.renderer = new x.T(this.rendererOptions)),
            (this.ticker = new S(25, this.render.bind(this))),
            (this.analyzer = t),
            this.createElement(e),
            (this.handleOnResize = this.handleOnResize.bind(this)),
            (this.handleOnVisibilityChange =
              this.handleOnVisibilityChange.bind(this)),
            this.createShader(),
            this.handleOnResize(),
            this.setupListeners();
        }
      }
      var A = a(8759),
        T = a(33423),
        j = a(71440),
        R = a(66936),
        w = a(86502),
        D = a(53433),
        G = a(84133);
      let O = (e) => {
        var t, a;
        let [n, i] = (0, r.useState)({}),
          { sonataState: o } = (0, G.oR)();
        (0, r.useEffect)(() => {
          if (o.contextType === j.Ak.Vibe) {
            var t, a, r, l;
            n.id ===
              (null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id) &&
              !n.isLiked &&
              (null === (l = o.entityMeta) || void 0 === l
                ? void 0
                : l.isLiked) &&
              e(),
              i({
                id: null === (a = o.entityMeta) || void 0 === a ? void 0 : a.id,
                isLiked:
                  null === (r = o.entityMeta) || void 0 === r
                    ? void 0
                    : r.isLiked,
              });
          }
        }, [
          o.contextType,
          null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id,
          null === (a = o.entityMeta) || void 0 === a ? void 0 : a.isLiked,
          n.id,
          n.isLiked,
          e,
        ]);
      };
      var V = a(42781),
        M = a.n(V);
      let B = "vibe-animation",
        U = (0, T.Pi)((e) => {
          var t, a, n, l, s, c, u;
          let { className: d } = e,
            m = (0, r.useRef)(null),
            g = (0, r.useRef)(null),
            p = (0, R.S1)([m]),
            { isIntersecting: f } =
              null !== (u = p[B]) && void 0 !== u ? u : {},
            { sonataState: v, user: h } = (0, G.oR)(),
            { theme: b } = (0, G.Fg)(),
            y = (0, r.useContext)(o),
            _ = v.status === w.Xz.PLAYING && v.contextType === j.Ak.Vibe;
          (0, r.useEffect)(() => {
            if (m.current && y) {
              var e, t;
              let a =
                  null === (t = v.entityMeta) || void 0 === t
                    ? void 0
                    : null === (e = t.trackParameters) || void 0 === e
                      ? void 0
                      : e.hue,
                n = h.collectionHue;
              (g.current = new I(m.current, y, n)),
                g.current.applySettings({ hue: a, collectionHue: n }),
                m.current.classList.add(M().root_visible);
            }
            return () => {
              var e;
              null === (e = g.current) || void 0 === e || e.destroy();
            };
          }, []),
            (0, r.useEffect)(() => {
              var e, t, a, n, i, r, o, l;
              let s =
                  null === (t = v.entityMeta) || void 0 === t
                    ? void 0
                    : null === (e = t.trackParameters) || void 0 === e
                      ? void 0
                      : e.hue,
                c =
                  null === (n = v.entityMeta) || void 0 === n
                    ? void 0
                    : null === (a = n.trackParameters) || void 0 === a
                      ? void 0
                      : a.energy,
                u =
                  null === (r = v.entityMeta) || void 0 === r
                    ? void 0
                    : null === (i = r.trackParameters) || void 0 === i
                      ? void 0
                      : i.userCollectionHue;
              u && h.setUserCollectionHue(u),
                _
                  ? null === (o = g.current) ||
                    void 0 === o ||
                    o.playAnimation({ hue: s, collectionHue: u, energy: c })
                  : null === (l = g.current) ||
                    void 0 === l ||
                    l.idleAnimation();
            }, [
              h,
              _,
              null === (a = v.entityMeta) || void 0 === a
                ? void 0
                : null === (t = a.trackParameters) || void 0 === t
                  ? void 0
                  : t.hue,
              null === (l = v.entityMeta) || void 0 === l
                ? void 0
                : null === (n = l.trackParameters) || void 0 === n
                  ? void 0
                  : n.energy,
              null === (c = v.entityMeta) || void 0 === c
                ? void 0
                : null === (s = c.trackParameters) || void 0 === s
                  ? void 0
                  : s.userCollectionHue,
            ]),
            (0, r.useEffect)(() => {
              var e;
              let t = b === G.Q2.Dark ? 0.0705 : 0.9607;
              null === (e = g.current) ||
                void 0 === e ||
                e.applySettings({ backgroundColor: t });
            }, [b]),
            (0, r.useEffect)(() => {
              if (g.current) {
                var e, t;
                f
                  ? null === (e = g.current) ||
                    void 0 === e ||
                    e.enableRender(i.BLOCK_VISIBILITY)
                  : null === (t = g.current) ||
                    void 0 === t ||
                    t.disableRender(i.BLOCK_VISIBILITY);
              }
            }, [f]);
          let x = (0, r.useCallback)(() => {
            var e;
            null === (e = g.current) || void 0 === e || e.likeAnimation();
          }, []);
          return (
            O(x),
            (0, A.jsx)("div", {
              className: d,
              "data-intersection-property-id": B,
              ref: m,
              ...(0, D.BA)(D.bG.vibeAnimation.VIBE_ANIMATION),
            })
          );
        }),
        F = (e) => {
          let t = c(s(e), 0.8, 0.46),
            a = Math.round(255 * t[0]),
            n = Math.round(255 * t[1]),
            i = Math.round(255 * t[2]);
          return "rgb(".concat(a, ", ").concat(n, ", ").concat(i, ")");
        };
    },
    41540: function (e, t, a) {
      "use strict";
      a.d(t, {
        Pk: function () {
          return W;
        },
        Ux: function () {
          return X;
        },
      });
      var n,
        i,
        r,
        o,
        l = a(8759),
        s = a(33423),
        c = a(99616),
        u = a.t(c, 2),
        d = a(65244),
        m = a(2814),
        g = a(96213),
        p = a(15527),
        f = a(14581),
        v = a(98786),
        h = {
          3483: (e, t, a) => {
            let n;
            a.r(t),
              a.d(t, {
                Composite: () => tN,
                CompositeItem: () => tP,
                FloatingArrow: () => tR,
                FloatingDelayGroup: () => tZ,
                FloatingFocusManager: () => ac,
                FloatingList: () => tb,
                FloatingNode: () => tB,
                FloatingOverlay: () => ad,
                FloatingPortal: () => ao,
                FloatingTree: () => tU,
                arrow: () => ew,
                autoPlacement: () => el,
                autoUpdate: () => eT,
                computePosition: () => ej,
                detectOverflow: () => er,
                flip: () => es,
                getOverflowAncestors: () => x,
                hide: () => ed,
                inline: () => eg,
                inner: () => aO,
                limitShift: () => eh,
                offset: () => ef,
                platform: () => eA,
                safePolygon: () => aB,
                shift: () => ev,
                size: () => eb,
                useClick: () => ag,
                useClientPoint: () => af,
                useDelayGroup: () => tJ,
                useDelayGroupContext: () => tY,
                useDismiss: () => ay,
                useFloating: () => a_,
                useFloatingNodeId: () => tM,
                useFloatingParentNodeId: () => tO,
                useFloatingPortalNode: () => ar,
                useFloatingTree: () => tV,
                useFocus: () => ax,
                useHover: () => tq,
                useId: () => tj,
                useInnerOffset: () => aV,
                useInteractions: () => aC,
                useListItem: () => ty,
                useListNavigation: () => aI,
                useMergeRefs: () => e7,
                useRole: () => aA,
                useTransitionStatus: () => aR,
                useTransitionStyles: () => aw,
                useTypeahead: () => aD,
              });
            var i,
              r = a(810);
            function o(e) {
              return c(e) ? (e.nodeName || "").toLowerCase() : "#document";
            }
            function l(e) {
              var t;
              return (
                (null == e
                  ? void 0
                  : null == (t = e.ownerDocument)
                    ? void 0
                    : t.defaultView) || window
              );
            }
            function s(e) {
              var t;
              return null ==
                (t = (c(e) ? e.ownerDocument : e.document) || window.document)
                ? void 0
                : t.documentElement;
            }
            function c(e) {
              return e instanceof Node || e instanceof l(e).Node;
            }
            function u(e) {
              return e instanceof Element || e instanceof l(e).Element;
            }
            function d(e) {
              return e instanceof HTMLElement || e instanceof l(e).HTMLElement;
            }
            function m(e) {
              return (
                "undefined" != typeof ShadowRoot &&
                (e instanceof ShadowRoot || e instanceof l(e).ShadowRoot)
              );
            }
            function g(e) {
              let {
                overflow: t,
                overflowX: a,
                overflowY: n,
                display: i,
              } = b(e);
              return (
                /auto|scroll|overlay|hidden|clip/.test(t + n + a) &&
                !["inline", "contents"].includes(i)
              );
            }
            function p(e) {
              let t = f(),
                a = b(e);
              return (
                "none" !== a.transform ||
                "none" !== a.perspective ||
                (!!a.containerType && "normal" !== a.containerType) ||
                (!t && !!a.backdropFilter && "none" !== a.backdropFilter) ||
                (!t && !!a.filter && "none" !== a.filter) ||
                ["transform", "perspective", "filter"].some((e) =>
                  (a.willChange || "").includes(e),
                ) ||
                ["paint", "layout", "strict", "content"].some((e) =>
                  (a.contain || "").includes(e),
                )
              );
            }
            function f() {
              return (
                "undefined" != typeof CSS &&
                !!CSS.supports &&
                CSS.supports("-webkit-backdrop-filter", "none")
              );
            }
            function h(e) {
              return ["html", "body", "#document"].includes(o(e));
            }
            function b(e) {
              return l(e).getComputedStyle(e);
            }
            function y(e) {
              return u(e)
                ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
                : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
            }
            function _(e) {
              if ("html" === o(e)) return e;
              let t =
                e.assignedSlot || e.parentNode || (m(e) && e.host) || s(e);
              return m(t) ? t.host : t;
            }
            function x(e, t, a) {
              var n;
              void 0 === t && (t = []), void 0 === a && (a = !0);
              let i = (function e(t) {
                  let a = _(t);
                  return h(a)
                    ? t.ownerDocument
                      ? t.ownerDocument.body
                      : t.body
                    : d(a) && g(a)
                      ? a
                      : e(a);
                })(e),
                r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
                o = l(i);
              return r
                ? t.concat(
                    o,
                    o.visualViewport || [],
                    g(i) ? i : [],
                    o.frameElement && a ? x(o.frameElement) : [],
                  )
                : t.concat(i, x(i, [], a));
            }
            function S(e) {
              let t = e.activeElement;
              for (
                ;
                (null == (a = t)
                  ? void 0
                  : null == (n = a.shadowRoot)
                    ? void 0
                    : n.activeElement) != null;

              ) {
                var a, n;
                t = t.shadowRoot.activeElement;
              }
              return t;
            }
            function C(e, t) {
              if (!e || !t) return !1;
              let a = t.getRootNode && t.getRootNode();
              if (e.contains(t)) return !0;
              if (a && m(a)) {
                let a = t;
                for (; a; ) {
                  if (e === a) return !0;
                  a = a.parentNode || a.host;
                }
              }
              return !1;
            }
            function E() {
              let e = navigator.userAgentData;
              return null != e && e.platform ? e.platform : navigator.platform;
            }
            function N() {
              let e = navigator.userAgentData;
              return e && Array.isArray(e.brands)
                ? e.brands
                    .map((e) => {
                      let { brand: t, version: a } = e;
                      return t + "/" + a;
                    })
                    .join(" ")
                : navigator.userAgent;
            }
            function P(e) {
              return (
                (0 === e.mozInputSource && !!e.isTrusted) ||
                (I() && e.pointerType
                  ? "click" === e.type && 1 === e.buttons
                  : 0 === e.detail && !e.pointerType)
              );
            }
            function k(e) {
              return (
                (!I() && 0 === e.width && 0 === e.height) ||
                (1 === e.width &&
                  1 === e.height &&
                  0 === e.pressure &&
                  0 === e.detail &&
                  "mouse" === e.pointerType) ||
                (e.width < 1 &&
                  e.height < 1 &&
                  0 === e.pressure &&
                  0 === e.detail)
              );
            }
            function L() {
              return /apple/i.test(navigator.vendor);
            }
            function I() {
              let e = /android/i;
              return e.test(E()) || e.test(N());
            }
            function A() {
              return (
                E().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
              );
            }
            function T(e, t) {
              let a = ["mouse", "pen"];
              return t || a.push("", void 0), a.includes(e);
            }
            function j(e) {
              return (null == e ? void 0 : e.ownerDocument) || document;
            }
            function R(e, t) {
              return (
                null != t &&
                ("composedPath" in e
                  ? e.composedPath().includes(t)
                  : null != e.target && t.contains(e.target))
              );
            }
            function w(e) {
              return "composedPath" in e ? e.composedPath()[0] : e.target;
            }
            function D(e) {
              return (
                d(e) &&
                e.matches(
                  "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])",
                )
              );
            }
            function G(e) {
              e.preventDefault(), e.stopPropagation();
            }
            let O = ["top", "right", "bottom", "left"],
              V = O.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
              M = Math.min,
              B = Math.max,
              U = Math.round,
              F = Math.floor,
              W = (e) => ({ x: e, y: e }),
              H = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom",
              },
              z = { start: "end", end: "start" };
            function q(e, t) {
              return "function" == typeof e ? e(t) : e;
            }
            function K(e) {
              return e.split("-")[0];
            }
            function Y(e) {
              return e.split("-")[1];
            }
            function Z(e) {
              return "x" === e ? "y" : "x";
            }
            function J(e) {
              return "y" === e ? "height" : "width";
            }
            function Q(e) {
              return ["top", "bottom"].includes(K(e)) ? "y" : "x";
            }
            function X(e, t, a) {
              void 0 === a && (a = !1);
              let n = Y(e),
                i = Z(Q(e)),
                r = J(i),
                o =
                  "x" === i
                    ? n === (a ? "end" : "start")
                      ? "right"
                      : "left"
                    : "start" === n
                      ? "bottom"
                      : "top";
              return t.reference[r] > t.floating[r] && (o = ee(o)), [o, ee(o)];
            }
            function $(e) {
              return e.replace(/start|end/g, (e) => z[e]);
            }
            function ee(e) {
              return e.replace(/left|right|bottom|top/g, (e) => H[e]);
            }
            function et(e) {
              return "number" != typeof e
                ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
                : { top: e, right: e, bottom: e, left: e };
            }
            function ea(e) {
              return {
                ...e,
                top: e.y,
                left: e.x,
                right: e.x + e.width,
                bottom: e.y + e.height,
              };
            }
            function en(e, t, a) {
              let n,
                { reference: i, floating: r } = e,
                o = Q(t),
                l = Z(Q(t)),
                s = J(l),
                c = K(t),
                u = "y" === o,
                d = i.x + i.width / 2 - r.width / 2,
                m = i.y + i.height / 2 - r.height / 2,
                g = i[s] / 2 - r[s] / 2;
              switch (c) {
                case "top":
                  n = { x: d, y: i.y - r.height };
                  break;
                case "bottom":
                  n = { x: d, y: i.y + i.height };
                  break;
                case "right":
                  n = { x: i.x + i.width, y: m };
                  break;
                case "left":
                  n = { x: i.x - r.width, y: m };
                  break;
                default:
                  n = { x: i.x, y: i.y };
              }
              switch (Y(t)) {
                case "start":
                  n[l] -= g * (a && u ? -1 : 1);
                  break;
                case "end":
                  n[l] += g * (a && u ? -1 : 1);
              }
              return n;
            }
            let ei = async (e, t, a) => {
              let {
                  placement: n = "bottom",
                  strategy: i = "absolute",
                  middleware: r = [],
                  platform: o,
                } = a,
                l = r.filter(Boolean),
                s = await (null == o.isRTL ? void 0 : o.isRTL(t)),
                c = await o.getElementRects({
                  reference: e,
                  floating: t,
                  strategy: i,
                }),
                { x: u, y: d } = en(c, n, s),
                m = n,
                g = {},
                p = 0;
              for (let a = 0; a < l.length; a++) {
                let { name: r, fn: f } = l[a],
                  {
                    x: v,
                    y: h,
                    data: b,
                    reset: y,
                  } = await f({
                    x: u,
                    y: d,
                    initialPlacement: n,
                    placement: m,
                    strategy: i,
                    middlewareData: g,
                    rects: c,
                    platform: o,
                    elements: { reference: e, floating: t },
                  });
                if (
                  ((u = null != v ? v : u),
                  (d = null != h ? h : d),
                  (g = { ...g, [r]: { ...g[r], ...b } }),
                  y && p <= 50)
                ) {
                  p++,
                    "object" == typeof y &&
                      (y.placement && (m = y.placement),
                      y.rects &&
                        (c =
                          !0 === y.rects
                            ? await o.getElementRects({
                                reference: e,
                                floating: t,
                                strategy: i,
                              })
                            : y.rects),
                      ({ x: u, y: d } = en(c, m, s))),
                    (a = -1);
                  continue;
                }
              }
              return {
                x: u,
                y: d,
                placement: m,
                strategy: i,
                middlewareData: g,
              };
            };
            async function er(e, t) {
              var a;
              void 0 === t && (t = {});
              let {
                  x: n,
                  y: i,
                  platform: r,
                  rects: o,
                  elements: l,
                  strategy: s,
                } = e,
                {
                  boundary: c = "clippingAncestors",
                  rootBoundary: u = "viewport",
                  elementContext: d = "floating",
                  altBoundary: m = !1,
                  padding: g = 0,
                } = q(t, e),
                p = et(g),
                f = l[m ? ("floating" === d ? "reference" : "floating") : d],
                v = ea(
                  await r.getClippingRect({
                    element:
                      null ==
                        (a = await (null == r.isElement
                          ? void 0
                          : r.isElement(f))) || a
                        ? f
                        : f.contextElement ||
                          (await (null == r.getDocumentElement
                            ? void 0
                            : r.getDocumentElement(l.floating))),
                    boundary: c,
                    rootBoundary: u,
                    strategy: s,
                  }),
                ),
                h =
                  "floating" === d
                    ? { ...o.floating, x: n, y: i }
                    : o.reference,
                b = await (null == r.getOffsetParent
                  ? void 0
                  : r.getOffsetParent(l.floating)),
                y = ((await (null == r.isElement ? void 0 : r.isElement(b))) &&
                  (await (null == r.getScale ? void 0 : r.getScale(b)))) || {
                  x: 1,
                  y: 1,
                },
                _ = ea(
                  r.convertOffsetParentRelativeRectToViewportRelativeRect
                    ? await r.convertOffsetParentRelativeRectToViewportRelativeRect(
                        { rect: h, offsetParent: b, strategy: s },
                      )
                    : h,
                );
              return {
                top: (v.top - _.top + p.top) / y.y,
                bottom: (_.bottom - v.bottom + p.bottom) / y.y,
                left: (v.left - _.left + p.left) / y.x,
                right: (_.right - v.right + p.right) / y.x,
              };
            }
            let eo = (e) => ({
                name: "arrow",
                options: e,
                async fn(t) {
                  let {
                      x: a,
                      y: n,
                      placement: i,
                      rects: r,
                      platform: o,
                      elements: l,
                      middlewareData: s,
                    } = t,
                    { element: c, padding: u = 0 } = q(e, t) || {};
                  if (null == c) return {};
                  let d = et(u),
                    m = { x: a, y: n },
                    g = Z(Q(i)),
                    p = J(g),
                    f = await o.getDimensions(c),
                    v = "y" === g,
                    h = v ? "clientHeight" : "clientWidth",
                    b = r.reference[p] + r.reference[g] - m[g] - r.floating[p],
                    y = m[g] - r.reference[g],
                    _ = await (null == o.getOffsetParent
                      ? void 0
                      : o.getOffsetParent(c)),
                    x = _ ? _[h] : 0;
                  (x &&
                    (await (null == o.isElement ? void 0 : o.isElement(_)))) ||
                    (x = l.floating[h] || r.floating[p]);
                  let S = x / 2 - f[p] / 2 - 1,
                    C = M(d[v ? "top" : "left"], S),
                    E = M(d[v ? "bottom" : "right"], S),
                    N = x - f[p] - E,
                    P = x / 2 - f[p] / 2 + (b / 2 - y / 2),
                    k = B(C, M(P, N)),
                    L =
                      !s.arrow &&
                      null != Y(i) &&
                      P != k &&
                      r.reference[p] / 2 - (P < C ? C : E) - f[p] / 2 < 0,
                    I = L ? (P < C ? P - C : P - N) : 0;
                  return {
                    [g]: m[g] + I,
                    data: {
                      [g]: k,
                      centerOffset: P - k - I,
                      ...(L && { alignmentOffset: I }),
                    },
                    reset: L,
                  };
                },
              }),
              el = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "autoPlacement",
                    options: e,
                    async fn(t) {
                      var a, n, i;
                      let {
                          rects: r,
                          middlewareData: o,
                          placement: l,
                          platform: s,
                          elements: c,
                        } = t,
                        {
                          crossAxis: u = !1,
                          alignment: d,
                          allowedPlacements: m = V,
                          autoAlignment: g = !0,
                          ...p
                        } = q(e, t),
                        f =
                          void 0 !== d || m === V
                            ? (function (e, t, a) {
                                let n = e
                                  ? [
                                      ...a.filter((t) => Y(t) === e),
                                      ...a.filter((t) => Y(t) !== e),
                                    ]
                                  : a.filter((e) => K(e) === e);
                                return n.filter(
                                  (a) =>
                                    !e || Y(a) === e || (!!t && $(a) !== a),
                                );
                              })(d || null, g, m)
                            : m,
                        v = await er(t, p),
                        h =
                          (null == (a = o.autoPlacement) ? void 0 : a.index) ||
                          0,
                        b = f[h];
                      if (null == b) return {};
                      let y = X(
                        b,
                        r,
                        await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                      );
                      if (l !== b) return { reset: { placement: f[0] } };
                      let _ = [v[K(b)], v[y[0]], v[y[1]]],
                        x = [
                          ...((null == (n = o.autoPlacement)
                            ? void 0
                            : n.overflows) || []),
                          { placement: b, overflows: _ },
                        ],
                        S = f[h + 1];
                      if (S)
                        return {
                          data: { index: h + 1, overflows: x },
                          reset: { placement: S },
                        };
                      let C = x
                          .map((e) => {
                            let t = Y(e.placement);
                            return [
                              e.placement,
                              t && u
                                ? e.overflows
                                    .slice(0, 2)
                                    .reduce((e, t) => e + t, 0)
                                : e.overflows[0],
                              e.overflows,
                            ];
                          })
                          .sort((e, t) => e[1] - t[1]),
                        E = C.filter((e) =>
                          e[2].slice(0, Y(e[0]) ? 2 : 3).every((e) => e <= 0),
                        ),
                        N = (null == (i = E[0]) ? void 0 : i[0]) || C[0][0];
                      return N !== l
                        ? {
                            data: { index: h + 1, overflows: x },
                            reset: { placement: N },
                          }
                        : {};
                    },
                  }
                );
              },
              es = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "flip",
                    options: e,
                    async fn(t) {
                      var a, n, i, r, o;
                      let {
                          placement: l,
                          middlewareData: s,
                          rects: c,
                          initialPlacement: u,
                          platform: d,
                          elements: m,
                        } = t,
                        {
                          mainAxis: g = !0,
                          crossAxis: p = !0,
                          fallbackPlacements: f,
                          fallbackStrategy: v = "bestFit",
                          fallbackAxisSideDirection: h = "none",
                          flipAlignment: b = !0,
                          ...y
                        } = q(e, t);
                      if (null != (a = s.arrow) && a.alignmentOffset) return {};
                      let _ = K(l),
                        x = K(u) === u,
                        S = await (null == d.isRTL
                          ? void 0
                          : d.isRTL(m.floating)),
                        C =
                          f ||
                          (x || !b
                            ? [ee(u)]
                            : (function (e) {
                                let t = ee(e);
                                return [$(e), t, $(t)];
                              })(u));
                      f ||
                        "none" === h ||
                        C.push(
                          ...(function (e, t, a, n) {
                            let i = Y(e),
                              r = (function (e, t, a) {
                                let n = ["left", "right"],
                                  i = ["right", "left"];
                                switch (e) {
                                  case "top":
                                  case "bottom":
                                    if (a) return t ? i : n;
                                    return t ? n : i;
                                  case "left":
                                  case "right":
                                    return t
                                      ? ["top", "bottom"]
                                      : ["bottom", "top"];
                                  default:
                                    return [];
                                }
                              })(K(e), "start" === a, n);
                            return (
                              i &&
                                ((r = r.map((e) => e + "-" + i)),
                                t && (r = r.concat(r.map($)))),
                              r
                            );
                          })(u, b, h, S),
                        );
                      let E = [u, ...C],
                        N = await er(t, y),
                        P = [],
                        k = (null == (n = s.flip) ? void 0 : n.overflows) || [];
                      if ((g && P.push(N[_]), p)) {
                        let e = X(l, c, S);
                        P.push(N[e[0]], N[e[1]]);
                      }
                      if (
                        ((k = [...k, { placement: l, overflows: P }]),
                        !P.every((e) => e <= 0))
                      ) {
                        let e =
                            ((null == (i = s.flip) ? void 0 : i.index) || 0) +
                            1,
                          t = E[e];
                        if (t)
                          return {
                            data: { index: e, overflows: k },
                            reset: { placement: t },
                          };
                        let a =
                          null ==
                          (r = k
                            .filter((e) => e.overflows[0] <= 0)
                            .sort((e, t) => e.overflows[1] - t.overflows[1])[0])
                            ? void 0
                            : r.placement;
                        if (!a)
                          switch (v) {
                            case "bestFit": {
                              let e =
                                null ==
                                (o = k
                                  .map((e) => [
                                    e.placement,
                                    e.overflows
                                      .filter((e) => e > 0)
                                      .reduce((e, t) => e + t, 0),
                                  ])
                                  .sort((e, t) => e[1] - t[1])[0])
                                  ? void 0
                                  : o[0];
                              e && (a = e);
                              break;
                            }
                            case "initialPlacement":
                              a = u;
                          }
                        if (l !== a) return { reset: { placement: a } };
                      }
                      return {};
                    },
                  }
                );
              };
            function ec(e, t) {
              return {
                top: e.top - t.height,
                right: e.right - t.width,
                bottom: e.bottom - t.height,
                left: e.left - t.width,
              };
            }
            function eu(e) {
              return O.some((t) => e[t] >= 0);
            }
            let ed = function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "hide",
                  options: e,
                  async fn(t) {
                    let { rects: a } = t,
                      { strategy: n = "referenceHidden", ...i } = q(e, t);
                    switch (n) {
                      case "referenceHidden": {
                        let e = await er(t, {
                            ...i,
                            elementContext: "reference",
                          }),
                          n = ec(e, a.reference);
                        return {
                          data: {
                            referenceHiddenOffsets: n,
                            referenceHidden: eu(n),
                          },
                        };
                      }
                      case "escaped": {
                        let e = await er(t, { ...i, altBoundary: !0 }),
                          n = ec(e, a.floating);
                        return { data: { escapedOffsets: n, escaped: eu(n) } };
                      }
                      default:
                        return {};
                    }
                  },
                }
              );
            };
            function em(e) {
              let t = M(...e.map((e) => e.left)),
                a = M(...e.map((e) => e.top)),
                n = B(...e.map((e) => e.right)),
                i = B(...e.map((e) => e.bottom));
              return { x: t, y: a, width: n - t, height: i - a };
            }
            let eg = function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "inline",
                  options: e,
                  async fn(t) {
                    let {
                        placement: a,
                        elements: n,
                        rects: i,
                        platform: r,
                        strategy: o,
                      } = t,
                      { padding: l = 2, x: s, y: c } = q(e, t),
                      u = Array.from(
                        (await (null == r.getClientRects
                          ? void 0
                          : r.getClientRects(n.reference))) || [],
                      ),
                      d = (function (e) {
                        let t = e.slice().sort((e, t) => e.y - t.y),
                          a = [],
                          n = null;
                        for (let e = 0; e < t.length; e++) {
                          let i = t[e];
                          !n || i.y - n.y > n.height / 2
                            ? a.push([i])
                            : a[a.length - 1].push(i),
                            (n = i);
                        }
                        return a.map((e) => ea(em(e)));
                      })(u),
                      m = ea(em(u)),
                      g = et(l),
                      p = await r.getElementRects({
                        reference: {
                          getBoundingClientRect: function () {
                            if (
                              2 === d.length &&
                              d[0].left > d[1].right &&
                              null != s &&
                              null != c
                            )
                              return (
                                d.find(
                                  (e) =>
                                    s > e.left - g.left &&
                                    s < e.right + g.right &&
                                    c > e.top - g.top &&
                                    c < e.bottom + g.bottom,
                                ) || m
                              );
                            if (d.length >= 2) {
                              if ("y" === Q(a)) {
                                let e = d[0],
                                  t = d[d.length - 1],
                                  n = "top" === K(a),
                                  i = e.top,
                                  r = t.bottom,
                                  o = n ? e.left : t.left,
                                  l = n ? e.right : t.right;
                                return {
                                  top: i,
                                  bottom: r,
                                  left: o,
                                  right: l,
                                  width: l - o,
                                  height: r - i,
                                  x: o,
                                  y: i,
                                };
                              }
                              let e = "left" === K(a),
                                t = B(...d.map((e) => e.right)),
                                n = M(...d.map((e) => e.left)),
                                i = d.filter((a) =>
                                  e ? a.left === n : a.right === t,
                                ),
                                r = i[0].top,
                                o = i[i.length - 1].bottom,
                                l = t - n;
                              return {
                                top: r,
                                bottom: o,
                                left: n,
                                right: t,
                                width: l,
                                height: o - r,
                                x: n,
                                y: r,
                              };
                            }
                            return m;
                          },
                        },
                        floating: n.floating,
                        strategy: o,
                      });
                    return i.reference.x !== p.reference.x ||
                      i.reference.y !== p.reference.y ||
                      i.reference.width !== p.reference.width ||
                      i.reference.height !== p.reference.height
                      ? { reset: { rects: p } }
                      : {};
                  },
                }
              );
            };
            async function ep(e, t) {
              let { placement: a, platform: n, elements: i } = e,
                r = await (null == n.isRTL ? void 0 : n.isRTL(i.floating)),
                o = K(a),
                l = Y(a),
                s = "y" === Q(a),
                c = ["left", "top"].includes(o) ? -1 : 1,
                u = r && s ? -1 : 1,
                d = q(t, e),
                {
                  mainAxis: m,
                  crossAxis: g,
                  alignmentAxis: p,
                } = "number" == typeof d
                  ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                  : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
              return (
                l && "number" == typeof p && (g = "end" === l ? -1 * p : p),
                s ? { x: g * u, y: m * c } : { x: m * c, y: g * u }
              );
            }
            let ef = function (e) {
                return (
                  void 0 === e && (e = 0),
                  {
                    name: "offset",
                    options: e,
                    async fn(t) {
                      let { x: a, y: n } = t,
                        i = await ep(t, e);
                      return { x: a + i.x, y: n + i.y, data: i };
                    },
                  }
                );
              },
              ev = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "shift",
                    options: e,
                    async fn(t) {
                      let { x: a, y: n, placement: i } = t,
                        {
                          mainAxis: r = !0,
                          crossAxis: o = !1,
                          limiter: l = {
                            fn: (e) => {
                              let { x: t, y: a } = e;
                              return { x: t, y: a };
                            },
                          },
                          ...s
                        } = q(e, t),
                        c = { x: a, y: n },
                        u = await er(t, s),
                        d = Q(K(i)),
                        m = Z(d),
                        g = c[m],
                        p = c[d];
                      if (r) {
                        let e = g + u["y" === m ? "top" : "left"],
                          t = g - u["y" === m ? "bottom" : "right"];
                        g = B(e, M(g, t));
                      }
                      if (o) {
                        let e = "y" === d ? "top" : "left",
                          t = "y" === d ? "bottom" : "right",
                          a = p + u[e],
                          n = p - u[t];
                        p = B(a, M(p, n));
                      }
                      let f = l.fn({ ...t, [m]: g, [d]: p });
                      return { ...f, data: { x: f.x - a, y: f.y - n } };
                    },
                  }
                );
              },
              eh = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    options: e,
                    fn(t) {
                      let {
                          x: a,
                          y: n,
                          placement: i,
                          rects: r,
                          middlewareData: o,
                        } = t,
                        {
                          offset: l = 0,
                          mainAxis: s = !0,
                          crossAxis: c = !0,
                        } = q(e, t),
                        u = { x: a, y: n },
                        d = Q(i),
                        m = Z(d),
                        g = u[m],
                        p = u[d],
                        f = q(l, t),
                        v =
                          "number" == typeof f
                            ? { mainAxis: f, crossAxis: 0 }
                            : { mainAxis: 0, crossAxis: 0, ...f };
                      if (s) {
                        let e = "y" === m ? "height" : "width",
                          t = r.reference[m] - r.floating[e] + v.mainAxis,
                          a = r.reference[m] + r.reference[e] - v.mainAxis;
                        g < t ? (g = t) : g > a && (g = a);
                      }
                      if (c) {
                        var h, b;
                        let e = "y" === m ? "width" : "height",
                          t = ["top", "left"].includes(K(i)),
                          a =
                            r.reference[d] -
                            r.floating[e] +
                            ((t && (null == (h = o.offset) ? void 0 : h[d])) ||
                              0) +
                            (t ? 0 : v.crossAxis),
                          n =
                            r.reference[d] +
                            r.reference[e] +
                            (t
                              ? 0
                              : (null == (b = o.offset) ? void 0 : b[d]) || 0) -
                            (t ? v.crossAxis : 0);
                        p < a ? (p = a) : p > n && (p = n);
                      }
                      return { [m]: g, [d]: p };
                    },
                  }
                );
              },
              eb = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "size",
                    options: e,
                    async fn(t) {
                      let a, n;
                      let {
                          placement: i,
                          rects: r,
                          platform: o,
                          elements: l,
                        } = t,
                        { apply: s = () => {}, ...c } = q(e, t),
                        u = await er(t, c),
                        d = K(i),
                        m = Y(i),
                        g = "y" === Q(i),
                        { width: p, height: f } = r.floating;
                      "top" === d || "bottom" === d
                        ? ((a = d),
                          (n =
                            m ===
                            ((await (null == o.isRTL
                              ? void 0
                              : o.isRTL(l.floating)))
                              ? "start"
                              : "end")
                              ? "left"
                              : "right"))
                        : ((n = d), (a = "end" === m ? "top" : "bottom"));
                      let v = f - u[a],
                        h = p - u[n],
                        b = !t.middlewareData.shift,
                        y = v,
                        _ = h;
                      if (g) {
                        let e = p - u.left - u.right;
                        _ = m || b ? M(h, e) : e;
                      } else {
                        let e = f - u.top - u.bottom;
                        y = m || b ? M(v, e) : e;
                      }
                      if (b && !m) {
                        let e = B(u.left, 0),
                          t = B(u.right, 0),
                          a = B(u.top, 0),
                          n = B(u.bottom, 0);
                        g
                          ? (_ =
                              p -
                              2 *
                                (0 !== e || 0 !== t
                                  ? e + t
                                  : B(u.left, u.right)))
                          : (y =
                              f -
                              2 *
                                (0 !== a || 0 !== n
                                  ? a + n
                                  : B(u.top, u.bottom)));
                      }
                      await s({ ...t, availableWidth: _, availableHeight: y });
                      let x = await o.getDimensions(l.floating);
                      return p !== x.width || f !== x.height
                        ? { reset: { rects: !0 } }
                        : {};
                    },
                  }
                );
              };
            function ey(e) {
              let t = b(e),
                a = parseFloat(t.width) || 0,
                n = parseFloat(t.height) || 0,
                i = d(e),
                r = i ? e.offsetWidth : a,
                o = i ? e.offsetHeight : n,
                l = U(a) !== r || U(n) !== o;
              return l && ((a = r), (n = o)), { width: a, height: n, $: l };
            }
            function e_(e) {
              return u(e) ? e : e.contextElement;
            }
            function ex(e) {
              let t = e_(e);
              if (!d(t)) return W(1);
              let a = t.getBoundingClientRect(),
                { width: n, height: i, $: r } = ey(t),
                o = (r ? U(a.width) : a.width) / n,
                l = (r ? U(a.height) : a.height) / i;
              return (
                (o && Number.isFinite(o)) || (o = 1),
                (l && Number.isFinite(l)) || (l = 1),
                { x: o, y: l }
              );
            }
            let eS = W(0);
            function eC(e) {
              let t = l(e);
              return f() && t.visualViewport
                ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop,
                  }
                : eS;
            }
            function eE(e, t, a, n) {
              var i;
              void 0 === t && (t = !1), void 0 === a && (a = !1);
              let r = e.getBoundingClientRect(),
                o = e_(e),
                s = W(1);
              t && (n ? u(n) && (s = ex(n)) : (s = ex(e)));
              let c = (void 0 === (i = a) && (i = !1),
                n && (!i || n === l(o)) && i)
                  ? eC(o)
                  : W(0),
                d = (r.left + c.x) / s.x,
                m = (r.top + c.y) / s.y,
                g = r.width / s.x,
                p = r.height / s.y;
              if (o) {
                let e = l(o),
                  t = n && u(n) ? l(n) : n,
                  a = e.frameElement;
                for (; a && n && t !== e; ) {
                  let e = ex(a),
                    t = a.getBoundingClientRect(),
                    n = b(a),
                    i =
                      t.left + (a.clientLeft + parseFloat(n.paddingLeft)) * e.x,
                    r = t.top + (a.clientTop + parseFloat(n.paddingTop)) * e.y;
                  (d *= e.x),
                    (m *= e.y),
                    (g *= e.x),
                    (p *= e.y),
                    (d += i),
                    (m += r),
                    (a = l(a).frameElement);
                }
              }
              return ea({ width: g, height: p, x: d, y: m });
            }
            function eN(e) {
              return eE(s(e)).left + y(e).scrollLeft;
            }
            function eP(e, t, a) {
              let n;
              if ("viewport" === t)
                n = (function (e, t) {
                  let a = l(e),
                    n = s(e),
                    i = a.visualViewport,
                    r = n.clientWidth,
                    o = n.clientHeight,
                    c = 0,
                    u = 0;
                  if (i) {
                    (r = i.width), (o = i.height);
                    let e = f();
                    (!e || (e && "fixed" === t)) &&
                      ((c = i.offsetLeft), (u = i.offsetTop));
                  }
                  return { width: r, height: o, x: c, y: u };
                })(e, a);
              else if ("document" === t)
                n = (function (e) {
                  let t = s(e),
                    a = y(e),
                    n = e.ownerDocument.body,
                    i = B(
                      t.scrollWidth,
                      t.clientWidth,
                      n.scrollWidth,
                      n.clientWidth,
                    ),
                    r = B(
                      t.scrollHeight,
                      t.clientHeight,
                      n.scrollHeight,
                      n.clientHeight,
                    ),
                    o = -a.scrollLeft + eN(e),
                    l = -a.scrollTop;
                  return (
                    "rtl" === b(n).direction &&
                      (o += B(t.clientWidth, n.clientWidth) - i),
                    { width: i, height: r, x: o, y: l }
                  );
                })(s(e));
              else if (u(t))
                n = (function (e, t) {
                  let a = eE(e, !0, "fixed" === t),
                    n = a.top + e.clientTop,
                    i = a.left + e.clientLeft,
                    r = d(e) ? ex(e) : W(1),
                    o = e.clientWidth * r.x,
                    l = e.clientHeight * r.y,
                    s = i * r.x,
                    c = n * r.y;
                  return { width: o, height: l, x: s, y: c };
                })(t, a);
              else {
                let a = eC(e);
                n = { ...t, x: t.x - a.x, y: t.y - a.y };
              }
              return ea(n);
            }
            function ek(e, t) {
              return d(e) && "fixed" !== b(e).position
                ? t
                  ? t(e)
                  : e.offsetParent
                : null;
            }
            function eL(e, t) {
              let a = l(e);
              if (!d(e)) return a;
              let n = ek(e, t);
              for (
                ;
                n &&
                ["table", "td", "th"].includes(o(n)) &&
                "static" === b(n).position;

              )
                n = ek(n, t);
              return n &&
                ("html" === o(n) ||
                  ("body" === o(n) && "static" === b(n).position && !p(n)))
                ? a
                : n ||
                    (function (e) {
                      let t = _(e);
                      for (; d(t) && !h(t); ) {
                        if (p(t)) return t;
                        t = _(t);
                      }
                      return null;
                    })(e) ||
                    a;
            }
            let eI = async function (e) {
                let { reference: t, floating: a, strategy: n } = e,
                  i = this.getOffsetParent || eL,
                  r = this.getDimensions;
                return {
                  reference: (function (e, t, a) {
                    let n = d(t),
                      i = s(t),
                      r = "fixed" === a,
                      l = eE(e, !0, r, t),
                      c = { scrollLeft: 0, scrollTop: 0 },
                      u = W(0);
                    if (n || (!n && !r)) {
                      if ((("body" !== o(t) || g(i)) && (c = y(t)), n)) {
                        let e = eE(t, !0, r, t);
                        (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                      } else i && (u.x = eN(i));
                    }
                    return {
                      x: l.left + c.scrollLeft - u.x,
                      y: l.top + c.scrollTop - u.y,
                      width: l.width,
                      height: l.height,
                    };
                  })(t, await i(a), n),
                  floating: { x: 0, y: 0, ...(await r(a)) },
                };
              },
              eA = {
                convertOffsetParentRelativeRectToViewportRelativeRect:
                  function (e) {
                    let { rect: t, offsetParent: a, strategy: n } = e,
                      i = d(a),
                      r = s(a);
                    if (a === r) return t;
                    let l = { scrollLeft: 0, scrollTop: 0 },
                      c = W(1),
                      u = W(0);
                    if (
                      (i || (!i && "fixed" !== n)) &&
                      (("body" !== o(a) || g(r)) && (l = y(a)), d(a))
                    ) {
                      let e = eE(a);
                      (c = ex(a)),
                        (u.x = e.x + a.clientLeft),
                        (u.y = e.y + a.clientTop);
                    }
                    return {
                      width: t.width * c.x,
                      height: t.height * c.y,
                      x: t.x * c.x - l.scrollLeft * c.x + u.x,
                      y: t.y * c.y - l.scrollTop * c.y + u.y,
                    };
                  },
                getDocumentElement: s,
                getClippingRect: function (e) {
                  let {
                      element: t,
                      boundary: a,
                      rootBoundary: n,
                      strategy: i,
                    } = e,
                    r =
                      "clippingAncestors" === a
                        ? (function (e, t) {
                            let a = t.get(e);
                            if (a) return a;
                            let n = x(e, [], !1).filter(
                                (e) => u(e) && "body" !== o(e),
                              ),
                              i = null,
                              r = "fixed" === b(e).position,
                              l = r ? _(e) : e;
                            for (; u(l) && !h(l); ) {
                              let t = b(l),
                                a = p(l);
                              a || "fixed" !== t.position || (i = null);
                              let o = r
                                ? !a && !i
                                : (!a &&
                                    "static" === t.position &&
                                    !!i &&
                                    ["absolute", "fixed"].includes(
                                      i.position,
                                    )) ||
                                  (g(l) &&
                                    !a &&
                                    (function e(t, a) {
                                      let n = _(t);
                                      return (
                                        !(n === a || !u(n) || h(n)) &&
                                        ("fixed" === b(n).position || e(n, a))
                                      );
                                    })(e, l));
                              o ? (n = n.filter((e) => e !== l)) : (i = t),
                                (l = _(l));
                            }
                            return t.set(e, n), n;
                          })(t, this._c)
                        : [].concat(a),
                    l = [...r, n],
                    s = l[0],
                    c = l.reduce(
                      (e, a) => {
                        let n = eP(t, a, i);
                        return (
                          (e.top = B(n.top, e.top)),
                          (e.right = M(n.right, e.right)),
                          (e.bottom = M(n.bottom, e.bottom)),
                          (e.left = B(n.left, e.left)),
                          e
                        );
                      },
                      eP(t, s, i),
                    );
                  return {
                    width: c.right - c.left,
                    height: c.bottom - c.top,
                    x: c.left,
                    y: c.top,
                  };
                },
                getOffsetParent: eL,
                getElementRects: eI,
                getClientRects: function (e) {
                  return Array.from(e.getClientRects());
                },
                getDimensions: function (e) {
                  return ey(e);
                },
                getScale: ex,
                isElement: u,
                isRTL: function (e) {
                  return "rtl" === b(e).direction;
                },
              };
            function eT(e, t, a, n) {
              let i;
              void 0 === n && (n = {});
              let {
                  ancestorScroll: r = !0,
                  ancestorResize: o = !0,
                  elementResize: l = "function" == typeof ResizeObserver,
                  layoutShift: c = "function" == typeof IntersectionObserver,
                  animationFrame: u = !1,
                } = n,
                d = e_(e),
                m = r || o ? [...(d ? x(d) : []), ...x(t)] : [];
              m.forEach((e) => {
                r && e.addEventListener("scroll", a, { passive: !0 }),
                  o && e.addEventListener("resize", a);
              });
              let g =
                  d && c
                    ? (function (e, t) {
                        let a,
                          n = null,
                          i = s(e);
                        function r() {
                          clearTimeout(a), n && n.disconnect(), (n = null);
                        }
                        return (
                          !(function o(l, s) {
                            void 0 === l && (l = !1),
                              void 0 === s && (s = 1),
                              r();
                            let {
                              left: c,
                              top: u,
                              width: d,
                              height: m,
                            } = e.getBoundingClientRect();
                            if ((l || t(), !d || !m)) return;
                            let g = F(u),
                              p = F(i.clientWidth - (c + d)),
                              f = F(i.clientHeight - (u + m)),
                              v = F(c),
                              h = {
                                rootMargin:
                                  -g +
                                  "px " +
                                  -p +
                                  "px " +
                                  -f +
                                  "px " +
                                  -v +
                                  "px",
                                threshold: B(0, M(1, s)) || 1,
                              },
                              b = !0;
                            function y(e) {
                              let t = e[0].intersectionRatio;
                              if (t !== s) {
                                if (!b) return o();
                                t
                                  ? o(!1, t)
                                  : (a = setTimeout(() => {
                                      o(!1, 1e-7);
                                    }, 100));
                              }
                              b = !1;
                            }
                            try {
                              n = new IntersectionObserver(y, {
                                ...h,
                                root: i.ownerDocument,
                              });
                            } catch (e) {
                              n = new IntersectionObserver(y, h);
                            }
                            n.observe(e);
                          })(!0),
                          r
                        );
                      })(d, a)
                    : null,
                p = -1,
                f = null;
              l &&
                ((f = new ResizeObserver((e) => {
                  let [n] = e;
                  n &&
                    n.target === d &&
                    f &&
                    (f.unobserve(t),
                    cancelAnimationFrame(p),
                    (p = requestAnimationFrame(() => {
                      f && f.observe(t);
                    }))),
                    a();
                })),
                d && !u && f.observe(d),
                f.observe(t));
              let v = u ? eE(e) : null;
              return (
                u &&
                  (function t() {
                    let n = eE(e);
                    v &&
                      (n.x !== v.x ||
                        n.y !== v.y ||
                        n.width !== v.width ||
                        n.height !== v.height) &&
                      a(),
                      (v = n),
                      (i = requestAnimationFrame(t));
                  })(),
                a(),
                () => {
                  m.forEach((e) => {
                    r && e.removeEventListener("scroll", a),
                      o && e.removeEventListener("resize", a);
                  }),
                    g && g(),
                    f && f.disconnect(),
                    (f = null),
                    u && cancelAnimationFrame(i);
                }
              );
            }
            let ej = (e, t, a) => {
                let n = new Map(),
                  i = { platform: eA, ...a },
                  r = { ...i.platform, _c: n };
                return ei(e, t, { ...i, platform: r });
              },
              eR =
                ((i = {}),
                a.d(i, {
                  createPortal: () => v.createPortal,
                  flushSync: () => v.flushSync,
                }),
                i),
              ew = (e) => ({
                name: "arrow",
                options: e,
                fn(t) {
                  let { element: a, padding: n } =
                    "function" == typeof e ? e(t) : e;
                  if (a && {}.hasOwnProperty.call(a, "current")) {
                    if (null != a.current)
                      return eo({ element: a.current, padding: n }).fn(t);
                  } else if (a) return eo({ element: a, padding: n }).fn(t);
                  return {};
                },
              });
            var eD =
              "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
            function eG(e, t) {
              let a, n, i;
              if (e === t) return !0;
              if (typeof e != typeof t) return !1;
              if ("function" == typeof e && e.toString() === t.toString())
                return !0;
              if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                  if ((a = e.length) != t.length) return !1;
                  for (n = a; 0 != n--; ) if (!eG(e[n], t[n])) return !1;
                  return !0;
                }
                if ((a = (i = Object.keys(e)).length) !== Object.keys(t).length)
                  return !1;
                for (n = a; 0 != n--; )
                  if (!{}.hasOwnProperty.call(t, i[n])) return !1;
                for (n = a; 0 != n--; ) {
                  let a = i[n];
                  if (("_owner" !== a || !e.$$typeof) && !eG(e[a], t[a]))
                    return !1;
                }
                return !0;
              }
              return e != e && t != t;
            }
            function eO(e) {
              if ("undefined" == typeof window) return 1;
              let t = e.ownerDocument.defaultView || window;
              return t.devicePixelRatio || 1;
            }
            function eV(e, t) {
              let a = eO(e);
              return Math.round(t * a) / a;
            }
            function eM(e) {
              let t = r.useRef(e);
              return (
                eD(() => {
                  t.current = e;
                }),
                t
              );
            }
            var eB =
                'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
              eU = "undefined" == typeof Element,
              eF = eU
                ? function () {}
                : Element.prototype.matches ||
                  Element.prototype.msMatchesSelector ||
                  Element.prototype.webkitMatchesSelector,
              eW =
                !eU && Element.prototype.getRootNode
                  ? function (e) {
                      var t;
                      return null == e
                        ? void 0
                        : null === (t = e.getRootNode) || void 0 === t
                          ? void 0
                          : t.call(e);
                    }
                  : function (e) {
                      return null == e ? void 0 : e.ownerDocument;
                    },
              eH = function e(t, a) {
                void 0 === a && (a = !0);
                var n,
                  i =
                    null == t
                      ? void 0
                      : null === (n = t.getAttribute) || void 0 === n
                        ? void 0
                        : n.call(t, "inert");
                return "" === i || "true" === i || (a && t && e(t.parentNode));
              },
              ez = function (e) {
                var t,
                  a =
                    null == e
                      ? void 0
                      : null === (t = e.getAttribute) || void 0 === t
                        ? void 0
                        : t.call(e, "contenteditable");
                return "" === a || "true" === a;
              },
              eq = function (e, t, a) {
                if (eH(e)) return [];
                var n = Array.prototype.slice.apply(e.querySelectorAll(eB));
                return t && eF.call(e, eB) && n.unshift(e), (n = n.filter(a));
              },
              eK = function e(t, a, n) {
                for (var i = [], r = Array.from(t); r.length; ) {
                  var o = r.shift();
                  if (!eH(o, !1)) {
                    if ("SLOT" === o.tagName) {
                      var l = o.assignedElements(),
                        s = e(l.length ? l : o.children, !0, n);
                      n.flatten
                        ? i.push.apply(i, s)
                        : i.push({ scopeParent: o, candidates: s });
                    } else {
                      eF.call(o, eB) &&
                        n.filter(o) &&
                        (a || !t.includes(o)) &&
                        i.push(o);
                      var c =
                          o.shadowRoot ||
                          ("function" == typeof n.getShadowRoot &&
                            n.getShadowRoot(o)),
                        u =
                          !eH(c, !1) &&
                          (!n.shadowRootFilter || n.shadowRootFilter(o));
                      if (c && u) {
                        var d = e(!0 === c ? o.children : c.children, !0, n);
                        n.flatten
                          ? i.push.apply(i, d)
                          : i.push({ scopeParent: o, candidates: d });
                      } else r.unshift.apply(r, o.children);
                    }
                  }
                }
                return i;
              },
              eY = function (e) {
                return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
              },
              eZ = function (e) {
                if (!e) throw Error("No node provided");
                return e.tabIndex < 0 &&
                  (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || ez(e)) &&
                  !eY(e)
                  ? 0
                  : e.tabIndex;
              },
              eJ = function (e, t) {
                var a = eZ(e);
                return a < 0 && t && !eY(e) ? 0 : a;
              },
              eQ = function (e, t) {
                return e.tabIndex === t.tabIndex
                  ? e.documentOrder - t.documentOrder
                  : e.tabIndex - t.tabIndex;
              },
              eX = function (e) {
                return "INPUT" === e.tagName;
              },
              e$ = function (e, t) {
                for (var a = 0; a < e.length; a++)
                  if (e[a].checked && e[a].form === t) return e[a];
              },
              e0 = function (e) {
                if (!e.name) return !0;
                var t,
                  a = e.form || eW(e),
                  n = function (e) {
                    return a.querySelectorAll(
                      'input[type="radio"][name="' + e + '"]',
                    );
                  };
                if (
                  "undefined" != typeof window &&
                  void 0 !== window.CSS &&
                  "function" == typeof window.CSS.escape
                )
                  t = n(window.CSS.escape(e.name));
                else
                  try {
                    t = n(e.name);
                  } catch (e) {
                    return (
                      console.error(
                        "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                        e.message,
                      ),
                      !1
                    );
                  }
                var i = e$(t, e.form);
                return !i || i === e;
              },
              e1 = function (e) {
                var t,
                  a,
                  n,
                  i,
                  r,
                  o,
                  l,
                  s = e && eW(e),
                  c = null === (t = s) || void 0 === t ? void 0 : t.host,
                  u = !1;
                if (s && s !== e)
                  for (
                    u = !!(
                      (null !== (a = c) &&
                        void 0 !== a &&
                        null !== (n = a.ownerDocument) &&
                        void 0 !== n &&
                        n.contains(c)) ||
                      (null != e &&
                        null !== (i = e.ownerDocument) &&
                        void 0 !== i &&
                        i.contains(e))
                    );
                    !u && c;

                  )
                    u = !!(
                      null !==
                        (o = c =
                          null === (r = s = eW(c)) || void 0 === r
                            ? void 0
                            : r.host) &&
                      void 0 !== o &&
                      null !== (l = o.ownerDocument) &&
                      void 0 !== l &&
                      l.contains(c)
                    );
                return u;
              },
              e5 = function (e) {
                var t = e.getBoundingClientRect(),
                  a = t.width,
                  n = t.height;
                return 0 === a && 0 === n;
              },
              e3 = function (e, t) {
                var a = t.displayCheck,
                  n = t.getShadowRoot;
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                var i = eF.call(e, "details>summary:first-of-type")
                  ? e.parentElement
                  : e;
                if (eF.call(i, "details:not([open]) *")) return !0;
                if (a && "full" !== a && "legacy-full" !== a) {
                  if ("non-zero-area" === a) return e5(e);
                } else {
                  if ("function" == typeof n) {
                    for (var r = e; e; ) {
                      var o = e.parentElement,
                        l = eW(e);
                      if (o && !o.shadowRoot && !0 === n(o)) return e5(e);
                      e = e.assignedSlot
                        ? e.assignedSlot
                        : o || l === e.ownerDocument
                          ? o
                          : l.host;
                    }
                    e = r;
                  }
                  if (e1(e)) return !e.getClientRects().length;
                  if ("legacy-full" !== a) return !0;
                }
                return !1;
              },
              e4 = function (e) {
                if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                  for (var t = e.parentElement; t; ) {
                    if ("FIELDSET" === t.tagName && t.disabled) {
                      for (var a = 0; a < t.children.length; a++) {
                        var n = t.children.item(a);
                        if ("LEGEND" === n.tagName)
                          return (
                            !!eF.call(t, "fieldset[disabled] *") ||
                            !n.contains(e)
                          );
                      }
                      return !0;
                    }
                    t = t.parentElement;
                  }
                return !1;
              },
              e9 = function (e, t) {
                var a, n, i;
                return (
                  !(
                    (eX((a = t)) && "radio" === a.type && !e0(a)) ||
                    0 > eZ(t)
                  ) &&
                  ((n = e),
                  !(
                    (i = t).disabled ||
                    eH(i) ||
                    (eX(i) && "hidden" === i.type) ||
                    e3(i, n) ||
                    ("DETAILS" === i.tagName &&
                      Array.prototype.slice
                        .apply(i.children)
                        .some(function (e) {
                          return "SUMMARY" === e.tagName;
                        })) ||
                    e4(i)
                  ))
                );
              },
              e2 = function (e) {
                var t = parseInt(e.getAttribute("tabindex"), 10);
                return !!isNaN(t) || t >= 0;
              },
              e6 = function e(t) {
                var a = [],
                  n = [];
                return (
                  t.forEach(function (t, i) {
                    var r = !!t.scopeParent,
                      o = r ? t.scopeParent : t,
                      l = eJ(o, r),
                      s = r ? e(t.candidates) : o;
                    0 === l
                      ? r
                        ? a.push.apply(a, s)
                        : a.push(o)
                      : n.push({
                          documentOrder: i,
                          tabIndex: l,
                          item: t,
                          isScope: r,
                          content: s,
                        });
                  }),
                  n
                    .sort(eQ)
                    .reduce(function (e, t) {
                      return (
                        t.isScope
                          ? e.push.apply(e, t.content)
                          : e.push(t.content),
                        e
                      );
                    }, [])
                    .concat(a)
                );
              },
              e8 = function (e, t) {
                return e6(
                  (t = t || {}).getShadowRoot
                    ? eK([e], t.includeContainer, {
                        filter: e9.bind(null, t),
                        flatten: !1,
                        getShadowRoot: t.getShadowRoot,
                        shadowRootFilter: e2,
                      })
                    : eq(e, t.includeContainer, e9.bind(null, t)),
                );
              };
            function e7(e) {
              return r.useMemo(
                () =>
                  e.every((e) => null == e)
                    ? null
                    : (t) => {
                        e.forEach((e) => {
                          "function" == typeof e
                            ? e(t)
                            : null != e && (e.current = t);
                        });
                      },
                e,
              );
            }
            let te = r["useInsertionEffect".toString()],
              tt = te || ((e) => e());
            function ta(e) {
              let t = r.useRef(() => {});
              return (
                tt(() => {
                  t.current = e;
                }),
                r.useCallback(function () {
                  for (
                    var e = arguments.length, a = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    a[n] = arguments[n];
                  return null == t.current ? void 0 : t.current(...a);
                }, [])
              );
            }
            let tn = "ArrowUp",
              ti = "ArrowDown",
              tr = "ArrowLeft",
              to = "ArrowRight";
            function tl(e, t, a) {
              return Math.floor(e / t) !== a;
            }
            function ts(e, t) {
              return t < 0 || t >= e.current.length;
            }
            function tc(e, t) {
              return td(e, { disabledIndices: t });
            }
            function tu(e, t) {
              return td(e, {
                decrement: !0,
                startingIndex: e.current.length,
                disabledIndices: t,
              });
            }
            function td(e, t) {
              let {
                  startingIndex: a = -1,
                  decrement: n = !1,
                  disabledIndices: i,
                  amount: r = 1,
                } = void 0 === t ? {} : t,
                o = e.current,
                l = a;
              do {
                var s, c;
                l += n ? -r : r;
              } while (
                l >= 0 &&
                l <= o.length - 1 &&
                (i
                  ? i.includes(l)
                  : null == o[l] ||
                    (null == (s = o[l])
                      ? void 0
                      : s.hasAttribute("disabled")) ||
                    (null == (c = o[l])
                      ? void 0
                      : c.getAttribute("aria-disabled")) === "true")
              );
              return l;
            }
            function tm(e, t) {
              let {
                  event: a,
                  orientation: n,
                  loop: i,
                  cols: r,
                  disabledIndices: o,
                  minIndex: l,
                  maxIndex: s,
                  prevIndex: c,
                  stopEvent: u = !1,
                } = t,
                d = c;
              if (a.key === tn) {
                if ((u && G(a), -1 === c)) d = s;
                else if (
                  ((d = td(e, {
                    startingIndex: d,
                    amount: r,
                    decrement: !0,
                    disabledIndices: o,
                  })),
                  i && (c - r < l || d < 0))
                ) {
                  let e = c % r,
                    t = s % r,
                    a = s - (t - e);
                  d = t === e ? s : t > e ? a : a - r;
                }
                ts(e, d) && (d = c);
              }
              if (
                (a.key === ti &&
                  (u && G(a),
                  -1 === c
                    ? (d = l)
                    : ((d = td(e, {
                        startingIndex: c,
                        amount: r,
                        disabledIndices: o,
                      })),
                      i &&
                        c + r > s &&
                        (d = td(e, {
                          startingIndex: (c % r) - r,
                          amount: r,
                          disabledIndices: o,
                        }))),
                  ts(e, d) && (d = c)),
                "both" === n)
              ) {
                let t = F(c / r);
                a.key === to &&
                  (u && G(a),
                  c % r != r - 1
                    ? ((d = td(e, { startingIndex: c, disabledIndices: o })),
                      i &&
                        tl(d, r, t) &&
                        (d = td(e, {
                          startingIndex: c - (c % r) - 1,
                          disabledIndices: o,
                        })))
                    : i &&
                      (d = td(e, {
                        startingIndex: c - (c % r) - 1,
                        disabledIndices: o,
                      })),
                  tl(d, r, t) && (d = c)),
                  a.key === tr &&
                    (u && G(a),
                    c % r != 0
                      ? ((d = td(e, {
                          startingIndex: c,
                          disabledIndices: o,
                          decrement: !0,
                        })),
                        i &&
                          tl(d, r, t) &&
                          (d = td(e, {
                            startingIndex: c + (r - (c % r)),
                            decrement: !0,
                            disabledIndices: o,
                          })))
                      : i &&
                        (d = td(e, {
                          startingIndex: c + (r - (c % r)),
                          decrement: !0,
                          disabledIndices: o,
                        })),
                    tl(d, r, t) && (d = c));
                let n = F(s / r) === t;
                ts(e, d) &&
                  (d =
                    i && n
                      ? a.key === tr
                        ? s
                        : td(e, {
                            startingIndex: c - (c % r) - 1,
                            disabledIndices: o,
                          })
                      : c);
              }
              return d;
            }
            let tg = 0;
            function tp(e, t) {
              void 0 === t && (t = {});
              let {
                preventScroll: a = !1,
                cancelPrevious: n = !0,
                sync: i = !1,
              } = t;
              n && cancelAnimationFrame(tg);
              let r = () =>
                null == e ? void 0 : e.focus({ preventScroll: a });
              i ? r() : (tg = requestAnimationFrame(r));
            }
            var tf =
              "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
            function tv(e, t) {
              let a = e.compareDocumentPosition(t);
              return a & Node.DOCUMENT_POSITION_FOLLOWING ||
                a & Node.DOCUMENT_POSITION_CONTAINED_BY
                ? -1
                : a & Node.DOCUMENT_POSITION_PRECEDING ||
                    a & Node.DOCUMENT_POSITION_CONTAINS
                  ? 1
                  : 0;
            }
            let th = r.createContext({
              register: () => {},
              unregister: () => {},
              map: new Map(),
              elementsRef: { current: [] },
            });
            function tb(e) {
              let { children: t, elementsRef: a, labelsRef: n } = e,
                [i, o] = r.useState(() => new Map()),
                l = r.useCallback((e) => {
                  o((t) => new Map(t).set(e, null));
                }, []),
                s = r.useCallback((e) => {
                  o((t) => {
                    let a = new Map(t);
                    return a.delete(e), a;
                  });
                }, []);
              return (
                tf(() => {
                  let e = new Map(i),
                    t = Array.from(e.keys()).sort(tv);
                  t.forEach((t, a) => {
                    e.set(t, a);
                  }),
                    !(function (e, t) {
                      if (e.size !== t.size) return !1;
                      for (let [a, n] of e.entries())
                        if (n !== t.get(a)) return !1;
                      return !0;
                    })(i, e) && o(e);
                }, [i]),
                r.createElement(
                  th.Provider,
                  {
                    value: r.useMemo(
                      () => ({
                        register: l,
                        unregister: s,
                        map: i,
                        elementsRef: a,
                        labelsRef: n,
                      }),
                      [l, s, i, a, n],
                    ),
                  },
                  t,
                )
              );
            }
            function ty(e) {
              let { label: t } = void 0 === e ? {} : e,
                [a, n] = r.useState(null),
                i = r.useRef(null),
                {
                  register: o,
                  unregister: l,
                  map: s,
                  elementsRef: c,
                  labelsRef: u,
                } = r.useContext(th),
                d = r.useCallback(
                  (e) => {
                    if (
                      ((i.current = e), null !== a && ((c.current[a] = e), u))
                    ) {
                      var n;
                      let i = void 0 !== t;
                      u.current[a] = i
                        ? t
                        : null != (n = null == e ? void 0 : e.textContent)
                          ? n
                          : null;
                    }
                  },
                  [a, c, u, t],
                );
              return (
                tf(() => {
                  let e = i.current;
                  if (e)
                    return (
                      o(e),
                      () => {
                        l(e);
                      }
                    );
                }, [o, l]),
                tf(() => {
                  let e = i.current ? s.get(i.current) : null;
                  null != e && n(e);
                }, [s]),
                r.useMemo(() => ({ ref: d, index: null == a ? -1 : a }), [a, d])
              );
            }
            function t_(e, t) {
              return "function" == typeof e
                ? e(t)
                : e
                  ? r.cloneElement(e, t)
                  : r.createElement("div", t);
            }
            let tx = r.createContext({ activeIndex: 0, onNavigate: () => {} }),
              tS = [tr, to],
              tC = [tn, ti],
              tE = [...tS, ...tC],
              tN = r.forwardRef(function (e, t) {
                let {
                    render: a,
                    orientation: n = "both",
                    loop: i = !0,
                    cols: o = 1,
                    disabledIndices: l,
                    activeIndex: s,
                    onNavigate: c,
                    ...u
                  } = e,
                  [d, m] = r.useState(0),
                  g = null != s ? s : d,
                  p = ta(null != c ? c : m),
                  f = r.useRef([]),
                  v = a && "function" != typeof a ? a.props : {},
                  h = r.useMemo(
                    () => ({ activeIndex: g, onNavigate: p }),
                    [g, p],
                  ),
                  b = o > 1,
                  y = {
                    ...u,
                    ...v,
                    ref: t,
                    "aria-orientation": "both" === n ? void 0 : n,
                    onKeyDown(e) {
                      null == u.onKeyDown || u.onKeyDown(e),
                        null == v.onKeyDown || v.onKeyDown(e),
                        (function (e) {
                          if (!tE.includes(e.key)) return;
                          let t = tc(f, l),
                            a = tu(f, l),
                            r = g;
                          b &&
                            (r = tm(f, {
                              event: e,
                              orientation: n,
                              loop: i,
                              cols: o,
                              disabledIndices: l,
                              minIndex: t,
                              maxIndex: a,
                              prevIndex: g,
                            }));
                          let s = {
                              horizontal: [to],
                              vertical: [ti],
                              both: [to, ti],
                            }[n],
                            c = {
                              horizontal: [tr],
                              vertical: [tn],
                              both: [tr, tn],
                            }[n],
                            u = b
                              ? tE
                              : { horizontal: tS, vertical: tC, both: tE }[n];
                          r === g &&
                            [...s, ...c].includes(e.key) &&
                            (r =
                              i && r === a && s.includes(e.key)
                                ? t
                                : i && r === t && c.includes(e.key)
                                  ? a
                                  : td(f, {
                                      startingIndex: r,
                                      decrement: c.includes(e.key),
                                      disabledIndices: l,
                                    })),
                            r === g ||
                              ts(f, r) ||
                              (e.stopPropagation(),
                              u.includes(e.key) && e.preventDefault(),
                              p(r),
                              queueMicrotask(() => {
                                tp(f.current[r]);
                              }));
                        })(e);
                    },
                  };
                return r.createElement(
                  tx.Provider,
                  { value: h },
                  r.createElement(tb, { elementsRef: f }, t_(a, y)),
                );
              }),
              tP = r.forwardRef(function (e, t) {
                let { render: a, ...n } = e,
                  i = a && "function" != typeof a ? a.props : {},
                  { activeIndex: o, onNavigate: l } = r.useContext(tx),
                  { ref: s, index: c } = ty(),
                  u = e7([s, t, i.ref]),
                  d = o === c,
                  m = {
                    ...n,
                    ...i,
                    ref: u,
                    tabIndex: d ? 0 : -1,
                    "data-active": d ? "" : void 0,
                    onFocus(e) {
                      null == n.onFocus || n.onFocus(e),
                        null == i.onFocus || i.onFocus(e),
                        l(c);
                    },
                  };
                return t_(a, m);
              });
            function tk() {
              return (tk = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var a = arguments[t];
                      for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) &&
                          (e[n] = a[n]);
                    }
                    return e;
                  }).apply(this, arguments);
            }
            let tL = !1,
              tI = 0,
              tA = () => "floating-ui-" + tI++,
              tT = r["useId".toString()],
              tj =
                tT ||
                function () {
                  let [e, t] = r.useState(() => (tL ? tA() : void 0));
                  return (
                    tf(() => {
                      null == e && t(tA());
                    }, []),
                    r.useEffect(() => {
                      tL || (tL = !0);
                    }, []),
                    e
                  );
                },
              tR = r.forwardRef(function (e, t) {
                let {
                    context: {
                      placement: a,
                      elements: { floating: n },
                      middlewareData: { arrow: i },
                    },
                    width: o = 14,
                    height: l = 7,
                    tipRadius: s = 0,
                    strokeWidth: c = 0,
                    staticOffset: u,
                    stroke: d,
                    d: m,
                    style: { transform: g, ...p } = {},
                    ...f
                  } = e,
                  v = tj();
                if (!n) return null;
                c *= 2;
                let h = c / 2,
                  b = (o / 2) * (-(s / 8) + 1),
                  y = ((l / 2) * s) / 4,
                  [_, x] = a.split("-"),
                  S = eA.isRTL(n),
                  C = !!m,
                  E = u && "end" === x ? "right" : "left";
                u && S && (E = "end" === x ? "left" : "right");
                let N = (null == i ? void 0 : i.x) != null ? u || i.x : "",
                  P = (null == i ? void 0 : i.y) != null ? u || i.y : "",
                  k =
                    m ||
                    "M0,0 H" +
                      o +
                      " L" +
                      (o - b) +
                      "," +
                      (l - y) +
                      (" Q" + o / 2 + "," + l + " ") +
                      b +
                      "," +
                      (l - y) +
                      " Z";
                return r.createElement(
                  "svg",
                  tk({}, f, {
                    "aria-hidden": !0,
                    ref: t,
                    width: C ? o : o + c,
                    height: o,
                    viewBox: "0 0 " + o + " " + (l > o ? l : o),
                    style: {
                      position: "absolute",
                      pointerEvents: "none",
                      [E]: N,
                      [u && "end" === x ? "bottom" : "top"]: P,
                      [_]:
                        "top" === _ || "bottom" === _ || C
                          ? "100%"
                          : "calc(100% - " + c / 2 + "px)",
                      transform:
                        "" +
                        {
                          top: C ? "rotate(180deg)" : "",
                          left: C ? "rotate(90deg)" : "rotate(-90deg)",
                          bottom: C ? "" : "rotate(180deg)",
                          right: C ? "rotate(-90deg)" : "rotate(90deg)",
                        }[_] +
                        (null != g ? g : ""),
                      ...p,
                    },
                  }),
                  c > 0 &&
                    r.createElement("path", {
                      clipPath: "url(#" + v + ")",
                      fill: "none",
                      stroke: d,
                      strokeWidth: c + (m ? 0 : 1),
                      d: k,
                    }),
                  r.createElement("path", {
                    stroke: c && !m ? f.fill : "none",
                    d: k,
                  }),
                  r.createElement(
                    "clipPath",
                    { id: v },
                    r.createElement("rect", {
                      x: -h,
                      y: h * (C ? -1 : 1),
                      width: o + c,
                      height: o,
                    }),
                  ),
                );
              });
            function tw() {
              let e = new Map();
              return {
                emit(t, a) {
                  var n;
                  null == (n = e.get(t)) || n.forEach((e) => e(a));
                },
                on(t, a) {
                  e.set(t, [...(e.get(t) || []), a]);
                },
                off(t, a) {
                  var n;
                  e.set(
                    t,
                    (null == (n = e.get(t))
                      ? void 0
                      : n.filter((e) => e !== a)) || [],
                  );
                },
              };
            }
            let tD = r.createContext(null),
              tG = r.createContext(null),
              tO = () => {
                var e;
                return (null == (e = r.useContext(tD)) ? void 0 : e.id) || null;
              },
              tV = () => r.useContext(tG);
            function tM(e) {
              let t = tj(),
                a = tV(),
                n = tO(),
                i = e || n;
              return (
                tf(() => {
                  let e = { id: t, parentId: i };
                  return (
                    null == a || a.addNode(e),
                    () => {
                      null == a || a.removeNode(e);
                    }
                  );
                }, [a, t, i]),
                t
              );
            }
            function tB(e) {
              let { children: t, id: a } = e,
                n = tO();
              return r.createElement(
                tD.Provider,
                { value: r.useMemo(() => ({ id: a, parentId: n }), [a, n]) },
                t,
              );
            }
            function tU(e) {
              let { children: t } = e,
                a = r.useRef([]),
                n = r.useCallback((e) => {
                  a.current = [...a.current, e];
                }, []),
                i = r.useCallback((e) => {
                  a.current = a.current.filter((t) => t !== e);
                }, []),
                o = r.useState(() => tw())[0];
              return r.createElement(
                tG.Provider,
                {
                  value: r.useMemo(
                    () => ({
                      nodesRef: a,
                      addNode: n,
                      removeNode: i,
                      events: o,
                    }),
                    [a, n, i, o],
                  ),
                },
                t,
              );
            }
            function tF(e) {
              return "data-floating-ui-" + e;
            }
            function tW(e) {
              let t = (0, r.useRef)(e);
              return (
                tf(() => {
                  t.current = e;
                }),
                t
              );
            }
            let tH = tF("safe-polygon");
            function tz(e, t, a) {
              return a && !T(a)
                ? 0
                : "number" == typeof e
                  ? e
                  : null == e
                    ? void 0
                    : e[t];
            }
            function tq(e, t) {
              void 0 === t && (t = {});
              let {
                  open: a,
                  onOpenChange: n,
                  dataRef: i,
                  events: o,
                  elements: { domReference: l, floating: s },
                  refs: c,
                } = e,
                {
                  enabled: d = !0,
                  delay: m = 0,
                  handleClose: g = null,
                  mouseOnly: p = !1,
                  restMs: f = 0,
                  move: v = !0,
                } = t,
                h = tV(),
                b = tO(),
                y = tW(g),
                _ = tW(m),
                x = r.useRef(),
                S = r.useRef(),
                E = r.useRef(),
                N = r.useRef(),
                P = r.useRef(!0),
                k = r.useRef(!1),
                L = r.useRef(() => {}),
                I = r.useCallback(() => {
                  var e;
                  let t = null == (e = i.current.openEvent) ? void 0 : e.type;
                  return (
                    (null == t ? void 0 : t.includes("mouse")) &&
                    "mousedown" !== t
                  );
                }, [i]);
              r.useEffect(() => {
                if (d)
                  return (
                    o.on("dismiss", e),
                    () => {
                      o.off("dismiss", e);
                    }
                  );
                function e() {
                  clearTimeout(S.current),
                    clearTimeout(N.current),
                    (P.current = !0);
                }
              }, [d, o]),
                r.useEffect(() => {
                  if (!d || !y.current || !a) return;
                  function e(e) {
                    I() && n(!1, e);
                  }
                  let t = j(s).documentElement;
                  return (
                    t.addEventListener("mouseleave", e),
                    () => {
                      t.removeEventListener("mouseleave", e);
                    }
                  );
                }, [s, a, n, d, y, i, I]);
              let A = r.useCallback(
                  function (e, t) {
                    void 0 === t && (t = !0);
                    let a = tz(_.current, "close", x.current);
                    a && !E.current
                      ? (clearTimeout(S.current),
                        (S.current = setTimeout(() => n(!1, e), a)))
                      : t && (clearTimeout(S.current), n(!1, e));
                  },
                  [_, n],
                ),
                R = r.useCallback(() => {
                  L.current(), (E.current = void 0);
                }, []),
                w = r.useCallback(() => {
                  if (k.current) {
                    let e = j(c.floating.current).body;
                    (e.style.pointerEvents = ""),
                      e.removeAttribute(tH),
                      (k.current = !1);
                  }
                }, [c]);
              return (
                r.useEffect(() => {
                  if (d && u(l))
                    return (
                      a && l.addEventListener("mouseleave", c),
                      null == s || s.addEventListener("mouseleave", c),
                      v && l.addEventListener("mousemove", r, { once: !0 }),
                      l.addEventListener("mouseenter", r),
                      l.addEventListener("mouseleave", o),
                      () => {
                        a && l.removeEventListener("mouseleave", c),
                          null == s || s.removeEventListener("mouseleave", c),
                          v && l.removeEventListener("mousemove", r),
                          l.removeEventListener("mouseenter", r),
                          l.removeEventListener("mouseleave", o);
                      }
                    );
                  function t() {
                    return (
                      !!i.current.openEvent &&
                      ["click", "mousedown"].includes(i.current.openEvent.type)
                    );
                  }
                  function r(e) {
                    if (
                      (clearTimeout(S.current),
                      (P.current = !1),
                      (p && !T(x.current)) ||
                        (f > 0 && 0 === tz(_.current, "open")))
                    )
                      return;
                    let t = tz(_.current, "open", x.current);
                    t
                      ? (S.current = setTimeout(() => {
                          n(!0, e);
                        }, t))
                      : n(!0, e);
                  }
                  function o(n) {
                    if (t()) return;
                    L.current();
                    let i = j(s);
                    if ((clearTimeout(N.current), y.current)) {
                      a || clearTimeout(S.current),
                        (E.current = y.current({
                          ...e,
                          tree: h,
                          x: n.clientX,
                          y: n.clientY,
                          onClose() {
                            w(), R(), A(n);
                          },
                        }));
                      let t = E.current;
                      i.addEventListener("mousemove", t),
                        (L.current = () => {
                          i.removeEventListener("mousemove", t);
                        });
                      return;
                    }
                    let r = "touch" !== x.current || !C(s, n.relatedTarget);
                    r && A(n);
                  }
                  function c(a) {
                    t() ||
                      null == y.current ||
                      y.current({
                        ...e,
                        tree: h,
                        x: a.clientX,
                        y: a.clientY,
                        onClose() {
                          w(), R(), A(a);
                        },
                      })(a);
                  }
                }, [l, s, d, e, p, f, v, A, R, w, n, a, h, _, y, i]),
                tf(() => {
                  var e, t, n;
                  if (
                    d &&
                    a &&
                    null != (e = y.current) &&
                    e.__options.blockPointerEvents &&
                    I()
                  ) {
                    let e = j(s).body;
                    if (
                      (e.setAttribute(tH, ""),
                      (e.style.pointerEvents = "none"),
                      (k.current = !0),
                      u(l) && s)
                    ) {
                      let e =
                        null == h
                          ? void 0
                          : null ==
                              (t = h.nodesRef.current.find((e) => e.id === b))
                            ? void 0
                            : null == (n = t.context)
                              ? void 0
                              : n.elements.floating;
                      return (
                        e && (e.style.pointerEvents = ""),
                        (l.style.pointerEvents = "auto"),
                        (s.style.pointerEvents = "auto"),
                        () => {
                          (l.style.pointerEvents = ""),
                            (s.style.pointerEvents = "");
                        }
                      );
                    }
                  }
                }, [d, a, b, s, l, h, y, i, I]),
                tf(() => {
                  a || ((x.current = void 0), R(), w());
                }, [a, R, w]),
                r.useEffect(
                  () => () => {
                    R(), clearTimeout(S.current), clearTimeout(N.current), w();
                  },
                  [d, l, R, w],
                ),
                r.useMemo(() => {
                  if (!d) return {};
                  function e(e) {
                    x.current = e.pointerType;
                  }
                  return {
                    reference: {
                      onPointerDown: e,
                      onPointerEnter: e,
                      onMouseMove(e) {
                        a ||
                          0 === f ||
                          (clearTimeout(N.current),
                          (N.current = setTimeout(() => {
                            P.current || n(!0, e.nativeEvent);
                          }, f)));
                      },
                    },
                    floating: {
                      onMouseEnter() {
                        clearTimeout(S.current);
                      },
                      onMouseLeave(e) {
                        o.emit("dismiss", {
                          type: "mouseLeave",
                          data: { returnFocus: !1 },
                        }),
                          A(e.nativeEvent, !1);
                      },
                    },
                  };
                }, [o, d, f, a, n, A])
              );
            }
            let tK = r.createContext({
                delay: 0,
                initialDelay: 0,
                timeoutMs: 0,
                currentId: null,
                setCurrentId: () => {},
                setState: () => {},
                isInstantPhase: !1,
              }),
              tY = () => r.useContext(tK),
              tZ = (e) => {
                let { children: t, delay: a, timeoutMs: n = 0 } = e,
                  [i, o] = r.useReducer((e, t) => ({ ...e, ...t }), {
                    delay: a,
                    timeoutMs: n,
                    initialDelay: a,
                    currentId: null,
                    isInstantPhase: !1,
                  }),
                  l = r.useRef(null),
                  s = r.useCallback((e) => {
                    o({ currentId: e });
                  }, []);
                return (
                  tf(() => {
                    i.currentId
                      ? null === l.current
                        ? (l.current = i.currentId)
                        : o({ isInstantPhase: !0 })
                      : (o({ isInstantPhase: !1 }), (l.current = null));
                  }, [i.currentId]),
                  r.createElement(
                    tK.Provider,
                    {
                      value: r.useMemo(
                        () => ({ ...i, setState: o, setCurrentId: s }),
                        [i, o, s],
                      ),
                    },
                    t,
                  )
                );
              },
              tJ = (e, t) => {
                let { open: a, onOpenChange: n } = e,
                  { id: i } = t,
                  {
                    currentId: r,
                    setCurrentId: o,
                    initialDelay: l,
                    setState: s,
                    timeoutMs: c,
                  } = tY();
                tf(() => {
                  r &&
                    (s({ delay: { open: 1, close: tz(l, "close") } }),
                    r !== i && n(!1));
                }, [i, n, s, r, l]),
                  tf(() => {
                    function e() {
                      n(!1), s({ delay: l, currentId: null });
                    }
                    if (!a && r === i) {
                      if (c) {
                        let t = window.setTimeout(e, c);
                        return () => {
                          clearTimeout(t);
                        };
                      }
                      e();
                    }
                  }, [a, s, r, i, n, l, c]),
                  tf(() => {
                    a && o(i);
                  }, [a, o, i]);
              };
            function tQ(e, t) {
              let a = e.filter((e) => {
                  var a;
                  return (
                    e.parentId === t &&
                    (null == (a = e.context) ? void 0 : a.open)
                  );
                }),
                n = a;
              for (; n.length; )
                (n = e.filter((e) => {
                  var t;
                  return null == (t = n)
                    ? void 0
                    : t.some((t) => {
                        var a;
                        return (
                          e.parentId === t.id &&
                          (null == (a = e.context) ? void 0 : a.open)
                        );
                      });
                })),
                  (a = a.concat(n));
              return a;
            }
            let tX = new WeakMap(),
              t$ = new WeakSet(),
              t0 = {},
              t1 = 0,
              t5 = () =>
                "undefined" != typeof HTMLElement &&
                "inert" in HTMLElement.prototype,
              t3 = (e) => e && (e.host || t3(e.parentNode)),
              t4 = (e, t) =>
                t
                  .map((t) => {
                    if (e.contains(t)) return t;
                    let a = t3(t);
                    return e.contains(a) ? a : null;
                  })
                  .filter((e) => null != e);
            function t9(e, t, a) {
              void 0 === t && (t = !1), void 0 === a && (a = !1);
              let n = j(e[0]).body;
              return (function (e, t, a, n) {
                let i = "data-floating-ui-inert",
                  r = n ? "inert" : a ? "aria-hidden" : null,
                  o = t4(t, e),
                  l = new Set(),
                  s = new Set(o),
                  c = [];
                t0[i] || (t0[i] = new WeakMap());
                let u = t0[i];
                return (
                  o.forEach(function e(t) {
                    !(!t || l.has(t)) &&
                      (l.add(t), t.parentNode && e(t.parentNode));
                  }),
                  (function e(t) {
                    !t ||
                      s.has(t) ||
                      Array.prototype.forEach.call(t.children, (t) => {
                        if (l.has(t)) e(t);
                        else {
                          let e = r ? t.getAttribute(r) : null,
                            a = null !== e && "false" !== e,
                            n = (tX.get(t) || 0) + 1,
                            o = (u.get(t) || 0) + 1;
                          tX.set(t, n),
                            u.set(t, o),
                            c.push(t),
                            1 === n && a && t$.add(t),
                            1 === o && t.setAttribute(i, ""),
                            !a && r && t.setAttribute(r, "true");
                        }
                      });
                  })(t),
                  l.clear(),
                  t1++,
                  () => {
                    c.forEach((e) => {
                      let t = (tX.get(e) || 0) - 1,
                        a = (u.get(e) || 0) - 1;
                      tX.set(e, t),
                        u.set(e, a),
                        t ||
                          (!t$.has(e) && r && e.removeAttribute(r),
                          t$.delete(e)),
                        a || e.removeAttribute(i);
                    }),
                      --t1 ||
                        ((tX = new WeakMap()),
                        (tX = new WeakMap()),
                        (t$ = new WeakSet()),
                        (t0 = {}));
                  }
                );
              })(
                e.concat(Array.from(n.querySelectorAll("[aria-live]"))),
                n,
                t,
                a,
              );
            }
            let t2 = () => ({
              getShadowRoot: !0,
              displayCheck:
                "function" == typeof ResizeObserver &&
                ResizeObserver.toString().includes("[native code]")
                  ? "full"
                  : "none",
            });
            function t6(e, t) {
              let a = e8(e, t2());
              "prev" === t && a.reverse();
              let n = a.indexOf(S(j(e)));
              return a.slice(n + 1)[0];
            }
            function t8() {
              return t6(document.body, "next");
            }
            function t7() {
              return t6(document.body, "prev");
            }
            function ae(e, t) {
              let a = t || e.currentTarget,
                n = e.relatedTarget;
              return !n || !C(a, n);
            }
            let at = {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "fixed",
              whiteSpace: "nowrap",
              width: "1px",
              top: 0,
              left: 0,
            };
            function aa(e) {
              "Tab" === e.key && (e.target, clearTimeout(n));
            }
            let an = r.forwardRef(function (e, t) {
                let [a, n] = r.useState();
                tf(
                  () => (
                    L() && n("button"),
                    document.addEventListener("keydown", aa),
                    () => {
                      document.removeEventListener("keydown", aa);
                    }
                  ),
                  [],
                );
                let i = {
                  ref: t,
                  tabIndex: 0,
                  role: a,
                  "aria-hidden": !a || void 0,
                  [tF("focus-guard")]: "",
                  style: at,
                };
                return r.createElement("span", tk({}, e, i));
              }),
              ai = r.createContext(null);
            function ar(e) {
              let { id: t, root: a } = void 0 === e ? {} : e,
                [n, i] = r.useState(null),
                o = tj(),
                l = al(),
                s = r.useMemo(
                  () => ({ id: t, root: a, portalContext: l, uniqueId: o }),
                  [t, a, l, o],
                ),
                c = r.useRef();
              return (
                tf(
                  () => () => {
                    null == n || n.remove();
                  },
                  [n, s],
                ),
                tf(() => {
                  if (c.current === s) return;
                  c.current = s;
                  let { id: e, root: t, portalContext: a, uniqueId: n } = s,
                    r = e ? document.getElementById(e) : null,
                    o = tF("portal");
                  if (r) {
                    let e = document.createElement("div");
                    (e.id = n), e.setAttribute(o, ""), r.appendChild(e), i(e);
                  } else {
                    let r = t || (null == a ? void 0 : a.portalNode);
                    r && !u(r) && (r = r.current), (r = r || document.body);
                    let l = null;
                    e &&
                      (((l = document.createElement("div")).id = e),
                      r.appendChild(l));
                    let s = document.createElement("div");
                    (s.id = n),
                      s.setAttribute(o, ""),
                      (r = l || r).appendChild(s),
                      i(s);
                  }
                }, [s]),
                n
              );
            }
            function ao(e) {
              let {
                  children: t,
                  id: a,
                  root: n = null,
                  preserveTabOrder: i = !0,
                } = e,
                o = ar({ id: a, root: n }),
                [l, s] = r.useState(null),
                c = r.useRef(null),
                u = r.useRef(null),
                d = r.useRef(null),
                m = r.useRef(null),
                g = !!l && !l.modal && l.open && i && !!(n || o);
              return (
                r.useEffect(() => {
                  if (o && i && (null == l || !l.modal))
                    return (
                      o.addEventListener("focusin", e, !0),
                      o.addEventListener("focusout", e, !0),
                      () => {
                        o.removeEventListener("focusin", e, !0),
                          o.removeEventListener("focusout", e, !0);
                      }
                    );
                  function e(e) {
                    if (o && ae(e)) {
                      let t = "focusin" === e.type;
                      (t
                        ? function (e) {
                            let t = e.querySelectorAll("[data-tabindex]");
                            t.forEach((e) => {
                              let t = e.dataset.tabindex;
                              delete e.dataset.tabindex,
                                t
                                  ? e.setAttribute("tabindex", t)
                                  : e.removeAttribute("tabindex");
                            });
                          }
                        : function (e) {
                            let t = e8(e, t2());
                            t.forEach((e) => {
                              (e.dataset.tabindex =
                                e.getAttribute("tabindex") || ""),
                                e.setAttribute("tabindex", "-1");
                            });
                          })(o);
                    }
                  }
                }, [o, i, null == l ? void 0 : l.modal]),
                r.createElement(
                  ai.Provider,
                  {
                    value: r.useMemo(
                      () => ({
                        preserveTabOrder: i,
                        beforeOutsideRef: c,
                        afterOutsideRef: u,
                        beforeInsideRef: d,
                        afterInsideRef: m,
                        portalNode: o,
                        setFocusManagerState: s,
                      }),
                      [i, o],
                    ),
                  },
                  g &&
                    o &&
                    r.createElement(an, {
                      "data-type": "outside",
                      ref: c,
                      onFocus: (e) => {
                        if (ae(e, o)) {
                          var t;
                          null == (t = d.current) || t.focus();
                        } else {
                          let e =
                            t7() ||
                            (null == l ? void 0 : l.refs.domReference.current);
                          null == e || e.focus();
                        }
                      },
                    }),
                  g &&
                    o &&
                    r.createElement("span", { "aria-owns": o.id, style: at }),
                  o && (0, eR.createPortal)(t, o),
                  g &&
                    o &&
                    r.createElement(an, {
                      "data-type": "outside",
                      ref: u,
                      onFocus: (e) => {
                        if (ae(e, o)) {
                          var t;
                          null == (t = m.current) || t.focus();
                        } else {
                          let t =
                            t8() ||
                            (null == l ? void 0 : l.refs.domReference.current);
                          null == t || t.focus(),
                            (null == l ? void 0 : l.closeOnFocusOut) &&
                              (null == l || l.onOpenChange(!1, e.nativeEvent));
                        }
                      },
                    }),
                )
              );
            }
            let al = () => r.useContext(ai),
              as = r.forwardRef(function (e, t) {
                return r.createElement(
                  "button",
                  tk({}, e, {
                    type: "button",
                    ref: t,
                    tabIndex: -1,
                    style: at,
                  }),
                );
              });
            function ac(e) {
              let {
                  context: t,
                  children: a,
                  disabled: n = !1,
                  order: i = ["content"],
                  guards: o = !0,
                  initialFocus: l = 0,
                  returnFocus: s = !0,
                  modal: c = !0,
                  visuallyHiddenDismiss: u = !1,
                  closeOnFocusOut: m = !0,
                } = e,
                {
                  open: g,
                  refs: p,
                  nodeId: f,
                  onOpenChange: v,
                  events: h,
                  dataRef: b,
                  elements: { domReference: y, floating: _ },
                } = t,
                x = "number" == typeof l && l < 0,
                E =
                  (null == y ? void 0 : y.getAttribute("role")) ===
                    "combobox" &&
                  D(y) &&
                  x,
                N = !E && c,
                P = !t5() || o,
                k = tW(i),
                L = tW(l),
                I = tW(s),
                A = tV(),
                T = al(),
                R = r.useRef(null),
                O = r.useRef(null),
                V = r.useRef(!1),
                M = r.useRef(null),
                B = r.useRef(!1),
                U = null != T,
                F = r.useCallback(
                  function (e) {
                    return void 0 === e && (e = _), e ? e8(e, t2()) : [];
                  },
                  [_],
                ),
                W = r.useCallback(
                  (e) => {
                    let t = F(e);
                    return k.current
                      .map((e) =>
                        y && "reference" === e
                          ? y
                          : _ && "floating" === e
                            ? _
                            : t,
                      )
                      .filter(Boolean)
                      .flat();
                  },
                  [y, _, k, F],
                );
              function H(e) {
                return !n && u && N
                  ? r.createElement(
                      as,
                      {
                        ref: "start" === e ? R : O,
                        onClick: (e) => v(!1, e.nativeEvent),
                      },
                      "string" == typeof u ? u : "Dismiss",
                    )
                  : null;
              }
              r.useEffect(() => {
                if (n || !N) return;
                function e(e) {
                  if ("Tab" === e.key) {
                    C(_, S(j(_))) && 0 === F().length && !E && G(e);
                    let t = W(),
                      a = w(e);
                    "reference" === k.current[0] &&
                      a === y &&
                      (G(e), e.shiftKey ? tp(t[t.length - 1]) : tp(t[1])),
                      "floating" === k.current[1] &&
                        a === _ &&
                        e.shiftKey &&
                        (G(e), tp(t[0]));
                  }
                }
                let t = j(_);
                return (
                  t.addEventListener("keydown", e),
                  () => {
                    t.removeEventListener("keydown", e);
                  }
                );
              }, [n, y, _, N, k, p, E, F, W]),
                r.useEffect(() => {
                  if (!n && m && _ && d(y))
                    return (
                      y.addEventListener("focusout", t),
                      y.addEventListener("pointerdown", e),
                      N || _.addEventListener("focusout", t),
                      () => {
                        y.removeEventListener("focusout", t),
                          y.removeEventListener("pointerdown", e),
                          N || _.removeEventListener("focusout", t);
                      }
                    );
                  function e() {
                    (B.current = !0),
                      setTimeout(() => {
                        B.current = !1;
                      });
                  }
                  function t(e) {
                    let t = e.relatedTarget;
                    queueMicrotask(() => {
                      let a = !(
                        C(y, t) ||
                        C(_, t) ||
                        C(t, _) ||
                        C(null == T ? void 0 : T.portalNode, t) ||
                        (null != t && t.hasAttribute(tF("focus-guard"))) ||
                        (A &&
                          (tQ(A.nodesRef.current, f).find((e) => {
                            var a, n;
                            return (
                              C(
                                null == (a = e.context)
                                  ? void 0
                                  : a.elements.floating,
                                t,
                              ) ||
                              C(
                                null == (n = e.context)
                                  ? void 0
                                  : n.elements.domReference,
                                t,
                              )
                            );
                          }) ||
                            (function (e, t) {
                              var a;
                              let n = [],
                                i =
                                  null == (a = e.find((e) => e.id === t))
                                    ? void 0
                                    : a.parentId;
                              for (; i; ) {
                                let t = e.find((e) => e.id === i);
                                (i = null == t ? void 0 : t.parentId),
                                  t && (n = n.concat(t));
                              }
                              return n;
                            })(A.nodesRef.current, f).find((e) => {
                              var a, n;
                              return (
                                (null == (a = e.context)
                                  ? void 0
                                  : a.elements.floating) === t ||
                                (null == (n = e.context)
                                  ? void 0
                                  : n.elements.domReference) === t
                              );
                            })))
                      );
                      t &&
                        a &&
                        !B.current &&
                        t !== M.current &&
                        ((V.current = !0), v(!1, e));
                    });
                  }
                }, [n, y, _, N, f, A, T, v, m]),
                r.useEffect(() => {
                  var e;
                  if (n) return;
                  let t = Array.from(
                    (null == T
                      ? void 0
                      : null == (e = T.portalNode)
                        ? void 0
                        : e.querySelectorAll("[" + tF("portal") + "]")) || [],
                  );
                  if (_) {
                    let e = [
                        _,
                        ...t,
                        R.current,
                        O.current,
                        k.current.includes("reference") || E ? y : null,
                      ].filter((e) => null != e),
                      a = c || E ? t9(e, P, !P) : t9(e);
                    return () => {
                      a();
                    };
                  }
                }, [n, y, _, c, k, T, E, P]),
                tf(() => {
                  if (n || !_) return;
                  let e = j(_),
                    t = S(e);
                  queueMicrotask(() => {
                    let e = W(_),
                      a = L.current,
                      n = ("number" == typeof a ? e[a] : a.current) || _,
                      i = C(_, t);
                    x || i || !g || tp(n, { preventScroll: n === _ });
                  });
                }, [n, g, _, x, W, L]),
                tf(() => {
                  if (n || !_) return;
                  let e = !1,
                    t = j(_),
                    a = S(t),
                    i = b.current;
                  function r(t) {
                    if (
                      ("escapeKey" === t.type &&
                        p.domReference.current &&
                        (M.current = p.domReference.current),
                      ["referencePress", "escapeKey"].includes(t.type))
                    )
                      return;
                    let a = t.data.returnFocus;
                    "object" == typeof a
                      ? ((V.current = !1), (e = a.preventScroll))
                      : (V.current = !a);
                  }
                  return (
                    (M.current = a),
                    h.on("dismiss", r),
                    () => {
                      h.off("dismiss", r);
                      let a = S(t),
                        n =
                          C(_, a) ||
                          (A &&
                            tQ(A.nodesRef.current, f).some((e) => {
                              var t;
                              return C(
                                null == (t = e.context)
                                  ? void 0
                                  : t.elements.floating,
                                a,
                              );
                            })) ||
                          (i.openEvent &&
                            ["click", "mousedown"].includes(i.openEvent.type));
                      n &&
                        p.domReference.current &&
                        (M.current = p.domReference.current),
                        I.current &&
                          d(M.current) &&
                          !V.current &&
                          tp(M.current, {
                            cancelPrevious: !1,
                            preventScroll: e,
                          });
                    }
                  );
                }, [n, _, I, b, p, h, A, f]),
                tf(() => {
                  if (!n && T)
                    return (
                      T.setFocusManagerState({
                        modal: N,
                        closeOnFocusOut: m,
                        open: g,
                        onOpenChange: v,
                        refs: p,
                      }),
                      () => {
                        T.setFocusManagerState(null);
                      }
                    );
                }, [n, T, N, g, v, p, m]),
                tf(() => {
                  if (n || !_ || "function" != typeof MutationObserver || x)
                    return;
                  let e = () => {
                    let e = _.getAttribute("tabindex");
                    k.current.includes("floating") ||
                    (S(j(_)) !== p.domReference.current && 0 === F().length)
                      ? "0" !== e && _.setAttribute("tabindex", "0")
                      : "-1" !== e && _.setAttribute("tabindex", "-1");
                  };
                  e();
                  let t = new MutationObserver(e);
                  return (
                    t.observe(_, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0,
                    }),
                    () => {
                      t.disconnect();
                    }
                  );
                }, [n, _, p, k, F, x]);
              let z = !n && P && (U || N);
              return r.createElement(
                r.Fragment,
                null,
                z &&
                  r.createElement(an, {
                    "data-type": "inside",
                    ref: null == T ? void 0 : T.beforeInsideRef,
                    onFocus: (e) => {
                      if (N) {
                        let e = W();
                        tp("reference" === i[0] ? e[0] : e[e.length - 1]);
                      } else if (
                        null != T &&
                        T.preserveTabOrder &&
                        T.portalNode
                      ) {
                        if (((V.current = !1), ae(e, T.portalNode))) {
                          let e = t8() || y;
                          null == e || e.focus();
                        } else {
                          var t;
                          null == (t = T.beforeOutsideRef.current) || t.focus();
                        }
                      }
                    },
                  }),
                !E && H("start"),
                a,
                H("end"),
                z &&
                  r.createElement(an, {
                    "data-type": "inside",
                    ref: null == T ? void 0 : T.afterInsideRef,
                    onFocus: (e) => {
                      if (N) tp(W()[0]);
                      else if (
                        null != T &&
                        T.preserveTabOrder &&
                        T.portalNode
                      ) {
                        if ((m && (V.current = !0), ae(e, T.portalNode))) {
                          let e = t7() || y;
                          null == e || e.focus();
                        } else {
                          var t;
                          null == (t = T.afterOutsideRef.current) || t.focus();
                        }
                      }
                    },
                  }),
              );
            }
            let au = new Set(),
              ad = r.forwardRef(function (e, t) {
                let { lockScroll: a = !1, ...n } = e,
                  i = tj();
                return (
                  tf(() => {
                    if (!a) return;
                    au.add(i);
                    let e = /iP(hone|ad|od)|iOS/.test(E()),
                      t = document.body.style,
                      n =
                        Math.round(
                          document.documentElement.getBoundingClientRect().left,
                        ) + document.documentElement.scrollLeft,
                      r = n ? "paddingLeft" : "paddingRight",
                      o =
                        window.innerWidth -
                        document.documentElement.clientWidth,
                      l = t.left ? parseFloat(t.left) : window.pageXOffset,
                      s = t.top ? parseFloat(t.top) : window.pageYOffset;
                    if (((t.overflow = "hidden"), o && (t[r] = o + "px"), e)) {
                      var c, u;
                      let e =
                          (null == (c = window.visualViewport)
                            ? void 0
                            : c.offsetLeft) || 0,
                        a =
                          (null == (u = window.visualViewport)
                            ? void 0
                            : u.offsetTop) || 0;
                      Object.assign(t, {
                        position: "fixed",
                        top: -(s - Math.floor(a)) + "px",
                        left: -(l - Math.floor(e)) + "px",
                        right: "0",
                      });
                    }
                    return () => {
                      au.delete(i),
                        0 === au.size &&
                          (Object.assign(t, { overflow: "", [r]: "" }),
                          e &&
                            (Object.assign(t, {
                              position: "",
                              top: "",
                              left: "",
                              right: "",
                            }),
                            window.scrollTo(l, s)));
                    };
                  }, [i, a]),
                  r.createElement(
                    "div",
                    tk({ ref: t }, n, {
                      style: {
                        position: "fixed",
                        overflow: "auto",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...n.style,
                      },
                    }),
                  )
                );
              });
            function am(e) {
              return d(e.target) && "BUTTON" === e.target.tagName;
            }
            function ag(e, t) {
              void 0 === t && (t = {});
              let {
                  open: a,
                  onOpenChange: n,
                  dataRef: i,
                  elements: { domReference: o },
                } = e,
                {
                  enabled: l = !0,
                  event: s = "click",
                  toggle: c = !0,
                  ignoreMouse: u = !1,
                  keyboardHandlers: d = !0,
                } = t,
                m = r.useRef(),
                g = r.useRef(!1);
              return r.useMemo(
                () =>
                  l
                    ? {
                        reference: {
                          onPointerDown(e) {
                            m.current = e.pointerType;
                          },
                          onMouseDown(e) {
                            0 !== e.button ||
                              (T(m.current, !0) && u) ||
                              "click" === s ||
                              (a &&
                              c &&
                              (!i.current.openEvent ||
                                "mousedown" === i.current.openEvent.type)
                                ? n(!1, e.nativeEvent)
                                : (e.preventDefault(), n(!0, e.nativeEvent)));
                          },
                          onClick(e) {
                            if ("mousedown" === s && m.current) {
                              m.current = void 0;
                              return;
                            }
                            (T(m.current, !0) && u) ||
                              (a &&
                              c &&
                              (!i.current.openEvent ||
                                "click" === i.current.openEvent.type)
                                ? n(!1, e.nativeEvent)
                                : n(!0, e.nativeEvent));
                          },
                          onKeyDown(e) {
                            (m.current = void 0),
                              e.defaultPrevented ||
                                !d ||
                                am(e) ||
                                (" " !== e.key ||
                                  D(o) ||
                                  (e.preventDefault(), (g.current = !0)),
                                "Enter" === e.key &&
                                  (a && c
                                    ? n(!1, e.nativeEvent)
                                    : n(!0, e.nativeEvent)));
                          },
                          onKeyUp(e) {
                            !(e.defaultPrevented || !d || am(e) || D(o)) &&
                              " " === e.key &&
                              g.current &&
                              ((g.current = !1),
                              a && c
                                ? n(!1, e.nativeEvent)
                                : n(!0, e.nativeEvent));
                          },
                        },
                      }
                    : {},
                [l, i, s, u, d, o, c, a, n],
              );
            }
            function ap(e) {
              return null != e && null != e.clientX;
            }
            function af(e, t) {
              void 0 === t && (t = {});
              let {
                  open: a,
                  refs: n,
                  dataRef: i,
                  elements: { floating: o },
                } = e,
                {
                  enabled: s = !0,
                  axis: c = "both",
                  x: u = null,
                  y: d = null,
                } = t,
                m = r.useRef(!1),
                g = r.useRef(null),
                [p, f] = r.useState(),
                [v, h] = r.useState([]),
                b = ta((e, t) => {
                  if (!m.current) {
                    var a, r;
                    let o, l, s;
                    (!i.current.openEvent || ap(i.current.openEvent)) &&
                      n.setPositionReference(
                        ((a = n.domReference),
                        (r = {
                          x: e,
                          y: t,
                          axis: c,
                          dataRef: i,
                          pointerType: p,
                        }),
                        (o = null),
                        (l = null),
                        (s = !1),
                        {
                          contextElement: a.current || void 0,
                          getBoundingClientRect() {
                            var e, t;
                            let n = (null == (e = a.current)
                                ? void 0
                                : e.getBoundingClientRect()) || {
                                width: 0,
                                height: 0,
                                x: 0,
                                y: 0,
                              },
                              i = "x" === r.axis || "both" === r.axis,
                              c = "y" === r.axis || "both" === r.axis,
                              u =
                                ["mouseenter", "mousemove"].includes(
                                  (null == (t = r.dataRef.current.openEvent)
                                    ? void 0
                                    : t.type) || "",
                                ) && "touch" !== r.pointerType,
                              d = n.width,
                              m = n.height,
                              g = n.x,
                              p = n.y;
                            return (
                              null == o && r.x && i && (o = n.x - r.x),
                              null == l && r.y && c && (l = n.y - r.y),
                              (g -= o || 0),
                              (p -= l || 0),
                              (d = 0),
                              (m = 0),
                              !s || u
                                ? ((d = "y" === r.axis ? n.width : 0),
                                  (m = "x" === r.axis ? n.height : 0),
                                  (g = i && null != r.x ? r.x : g),
                                  (p = c && null != r.y ? r.y : p))
                                : s &&
                                  !u &&
                                  ((m = "x" === r.axis ? n.height : m),
                                  (d = "y" === r.axis ? n.width : d)),
                              (s = !0),
                              {
                                width: d,
                                height: m,
                                x: g,
                                y: p,
                                top: p,
                                right: g + d,
                                bottom: p + m,
                                left: g,
                              }
                            );
                          },
                        }),
                      );
                  }
                }),
                y = ta((e) => {
                  null != u ||
                    null != d ||
                    (a ? g.current || h([]) : b(e.clientX, e.clientY));
                }),
                _ = T(p) ? o : a,
                x = r.useCallback(() => {
                  if (!_ || !s || null != u || null != d) return;
                  let e = l(n.floating.current);
                  function t(a) {
                    let i = w(a);
                    C(n.floating.current, i)
                      ? (e.removeEventListener("mousemove", t),
                        (g.current = null))
                      : b(a.clientX, a.clientY);
                  }
                  if (!i.current.openEvent || ap(i.current.openEvent)) {
                    e.addEventListener("mousemove", t);
                    let a = () => {
                      e.removeEventListener("mousemove", t), (g.current = null);
                    };
                    return (g.current = a), a;
                  }
                  n.setPositionReference(n.domReference.current);
                }, [i, s, _, n, b, u, d]);
              return (
                r.useEffect(() => x(), [x, v]),
                r.useEffect(() => {
                  s && !o && (m.current = !1);
                }, [s, o]),
                r.useEffect(() => {
                  !s && a && (m.current = !0);
                }, [s, a]),
                tf(() => {
                  s && (null != u || null != d) && ((m.current = !1), b(u, d));
                }, [s, u, d, b]),
                r.useMemo(() => {
                  if (!s) return {};
                  function e(e) {
                    let { pointerType: t } = e;
                    f(t);
                  }
                  return {
                    reference: {
                      onPointerDown: e,
                      onPointerEnter: e,
                      onMouseMove: y,
                      onMouseEnter: y,
                    },
                  };
                }, [s, y])
              );
            }
            let av = {
                pointerdown: "onPointerDown",
                mousedown: "onMouseDown",
                click: "onClick",
              },
              ah = {
                pointerdown: "onPointerDownCapture",
                mousedown: "onMouseDownCapture",
                click: "onClickCapture",
              },
              ab = (e) => {
                var t, a;
                return {
                  escapeKey:
                    "boolean" == typeof e
                      ? e
                      : null != (t = null == e ? void 0 : e.escapeKey) && t,
                  outsidePress:
                    "boolean" == typeof e
                      ? e
                      : null == (a = null == e ? void 0 : e.outsidePress) || a,
                };
              };
            function ay(e, t) {
              void 0 === t && (t = {});
              let {
                  open: a,
                  onOpenChange: n,
                  events: i,
                  nodeId: o,
                  elements: { reference: l, domReference: s, floating: c },
                  dataRef: m,
                } = e,
                {
                  enabled: g = !0,
                  escapeKey: p = !0,
                  outsidePress: f = !0,
                  outsidePressEvent: v = "pointerdown",
                  referencePress: y = !1,
                  referencePressEvent: S = "pointerdown",
                  ancestorScroll: E = !1,
                  bubbles: N,
                  capture: L,
                } = t,
                I = tV(),
                A = null != tO(),
                T = ta("function" == typeof f ? f : () => !1),
                D = "function" == typeof f ? T : f,
                G = r.useRef(!1),
                O = r.useRef(!1),
                { escapeKey: V, outsidePress: M } = ab(N),
                { escapeKey: B, outsidePress: U } = ab(L),
                F = ta((e) => {
                  if (!a || !g || !p || "Escape" !== e.key) return;
                  let t = I ? tQ(I.nodesRef.current, o) : [];
                  if (!V && (e.stopPropagation(), t.length > 0)) {
                    let e = !0;
                    if (
                      (t.forEach((t) => {
                        var a;
                        if (
                          null != (a = t.context) &&
                          a.open &&
                          !t.context.dataRef.current.__escapeKeyBubbles
                        ) {
                          e = !1;
                          return;
                        }
                      }),
                      !e)
                    )
                      return;
                  }
                  i.emit("dismiss", {
                    type: "escapeKey",
                    data: { returnFocus: { preventScroll: !1 } },
                  }),
                    n(!1, "nativeEvent" in e ? e.nativeEvent : e);
                }),
                W = ta((e) => {
                  var t;
                  let a = () => {
                    var t;
                    F(e),
                      null == (t = w(e)) || t.removeEventListener("keydown", a);
                  };
                  null == (t = w(e)) || t.addEventListener("keydown", a);
                }),
                H = ta((e) => {
                  let t = G.current;
                  G.current = !1;
                  let a = O.current;
                  if (
                    ((O.current = !1),
                    ("click" === v && a) ||
                      t ||
                      ("function" == typeof D && !D(e)))
                  )
                    return;
                  let r = w(e),
                    l = "[" + tF("inert") + "]",
                    m = j(c).querySelectorAll(l),
                    g = u(r) ? r : null;
                  for (; g && !h(g); ) {
                    let e = _(g);
                    if (e !== j(c).body && u(e)) g = e;
                    else break;
                  }
                  if (
                    m.length &&
                    u(r) &&
                    !r.matches("html,body") &&
                    !C(r, c) &&
                    Array.from(m).every((e) => !C(g, e))
                  )
                    return;
                  if (d(r) && c) {
                    let t = r.clientWidth > 0 && r.scrollWidth > r.clientWidth,
                      a = r.clientHeight > 0 && r.scrollHeight > r.clientHeight,
                      n = a && e.offsetX > r.clientWidth;
                    if (a) {
                      let t = "rtl" === b(r).direction;
                      t && (n = e.offsetX <= r.offsetWidth - r.clientWidth);
                    }
                    if (n || (t && e.offsetY > r.clientHeight)) return;
                  }
                  let p =
                    I &&
                    tQ(I.nodesRef.current, o).some((t) => {
                      var a;
                      return R(
                        e,
                        null == (a = t.context) ? void 0 : a.elements.floating,
                      );
                    });
                  if (R(e, c) || R(e, s) || p) return;
                  let f = I ? tQ(I.nodesRef.current, o) : [];
                  if (f.length > 0) {
                    let e = !0;
                    if (
                      (f.forEach((t) => {
                        var a;
                        if (
                          null != (a = t.context) &&
                          a.open &&
                          !t.context.dataRef.current.__outsidePressBubbles
                        ) {
                          e = !1;
                          return;
                        }
                      }),
                      !e)
                    )
                      return;
                  }
                  i.emit("dismiss", {
                    type: "outsidePress",
                    data: {
                      returnFocus: A ? { preventScroll: !0 } : P(e) || k(e),
                    },
                  }),
                    n(!1, e);
                }),
                z = ta((e) => {
                  var t;
                  let a = () => {
                    var t;
                    H(e), null == (t = w(e)) || t.removeEventListener(v, a);
                  };
                  null == (t = w(e)) || t.addEventListener(v, a);
                });
              return (
                r.useEffect(() => {
                  if (!a || !g) return;
                  function e(e) {
                    n(!1, e);
                  }
                  (m.current.__escapeKeyBubbles = V),
                    (m.current.__outsidePressBubbles = M);
                  let t = j(c);
                  p && t.addEventListener("keydown", B ? W : F, B),
                    D && t.addEventListener(v, U ? z : H, U);
                  let i = [];
                  return (
                    E &&
                      (u(s) && (i = x(s)),
                      u(c) && (i = i.concat(x(c))),
                      !u(l) &&
                        l &&
                        l.contextElement &&
                        (i = i.concat(x(l.contextElement)))),
                    (i = i.filter((e) => {
                      var a;
                      return (
                        e !==
                        (null == (a = t.defaultView)
                          ? void 0
                          : a.visualViewport)
                      );
                    })).forEach((t) => {
                      t.addEventListener("scroll", e, { passive: !0 });
                    }),
                    () => {
                      p && t.removeEventListener("keydown", B ? W : F, B),
                        D && t.removeEventListener(v, U ? z : H, U),
                        i.forEach((t) => {
                          t.removeEventListener("scroll", e);
                        });
                    }
                  );
                }, [m, c, s, l, p, D, v, a, n, E, g, V, M, F, B, W, H, U, z]),
                r.useEffect(() => {
                  G.current = !1;
                }, [D, v]),
                r.useMemo(
                  () =>
                    g
                      ? {
                          reference: {
                            onKeyDown: F,
                            [av[S]]: (e) => {
                              y &&
                                (i.emit("dismiss", {
                                  type: "referencePress",
                                  data: { returnFocus: !1 },
                                }),
                                n(!1, e.nativeEvent));
                            },
                          },
                          floating: {
                            onKeyDown: F,
                            onMouseDown() {
                              O.current = !0;
                            },
                            onMouseUp() {
                              O.current = !0;
                            },
                            [ah[v]]: () => {
                              G.current = !0;
                            },
                          },
                        }
                      : {},
                  [g, i, y, v, S, n, F],
                )
              );
            }
            function a_(e) {
              var t;
              void 0 === e && (e = {});
              let { open: a = !1, onOpenChange: n, nodeId: i } = e,
                [o, l] = r.useState(null),
                s = (null == (t = e.elements) ? void 0 : t.reference) || o,
                c = (function (e) {
                  void 0 === e && (e = {});
                  let {
                      placement: t = "bottom",
                      strategy: a = "absolute",
                      middleware: n = [],
                      platform: i,
                      elements: { reference: o, floating: l } = {},
                      transform: s = !0,
                      whileElementsMounted: c,
                      open: u,
                    } = e,
                    [d, m] = r.useState({
                      x: 0,
                      y: 0,
                      strategy: a,
                      placement: t,
                      middlewareData: {},
                      isPositioned: !1,
                    }),
                    [g, p] = r.useState(n);
                  eG(g, n) || p(n);
                  let [f, v] = r.useState(null),
                    [h, b] = r.useState(null),
                    y = r.useCallback(
                      (e) => {
                        e != C.current && ((C.current = e), v(e));
                      },
                      [v],
                    ),
                    _ = r.useCallback(
                      (e) => {
                        e !== E.current && ((E.current = e), b(e));
                      },
                      [b],
                    ),
                    x = o || f,
                    S = l || h,
                    C = r.useRef(null),
                    E = r.useRef(null),
                    N = r.useRef(d),
                    P = eM(c),
                    k = eM(i),
                    L = r.useCallback(() => {
                      if (!C.current || !E.current) return;
                      let e = { placement: t, strategy: a, middleware: g };
                      k.current && (e.platform = k.current),
                        ej(C.current, E.current, e).then((e) => {
                          let t = { ...e, isPositioned: !0 };
                          I.current &&
                            !eG(N.current, t) &&
                            ((N.current = t),
                            eR.flushSync(() => {
                              m(t);
                            }));
                        });
                    }, [g, t, a, k]);
                  eD(() => {
                    !1 === u &&
                      N.current.isPositioned &&
                      ((N.current.isPositioned = !1),
                      m((e) => ({ ...e, isPositioned: !1 })));
                  }, [u]);
                  let I = r.useRef(!1);
                  eD(
                    () => (
                      (I.current = !0),
                      () => {
                        I.current = !1;
                      }
                    ),
                    [],
                  ),
                    eD(() => {
                      if (
                        (x && (C.current = x), S && (E.current = S), x && S)
                      ) {
                        if (P.current) return P.current(x, S, L);
                        L();
                      }
                    }, [x, S, L, P]);
                  let A = r.useMemo(
                      () => ({
                        reference: C,
                        floating: E,
                        setReference: y,
                        setFloating: _,
                      }),
                      [y, _],
                    ),
                    T = r.useMemo(
                      () => ({ reference: x, floating: S }),
                      [x, S],
                    ),
                    j = r.useMemo(() => {
                      let e = { position: a, left: 0, top: 0 };
                      if (!T.floating) return e;
                      let t = eV(T.floating, d.x),
                        n = eV(T.floating, d.y);
                      return s
                        ? {
                            ...e,
                            transform: "translate(" + t + "px, " + n + "px)",
                            ...(eO(T.floating) >= 1.5 && {
                              willChange: "transform",
                            }),
                          }
                        : { position: a, left: t, top: n };
                    }, [a, s, T.floating, d.x, d.y]);
                  return r.useMemo(
                    () => ({
                      ...d,
                      update: L,
                      refs: A,
                      elements: T,
                      floatingStyles: j,
                    }),
                    [d, L, A, T, j],
                  );
                })(e),
                d = tV(),
                m = ta((e, t) => {
                  e && (p.current.openEvent = t), null == n || n(e, t);
                }),
                g = r.useRef(null),
                p = r.useRef({}),
                f = r.useState(() => tw())[0],
                v = tj(),
                h = r.useCallback(
                  (e) => {
                    let t = u(e)
                      ? {
                          getBoundingClientRect: () =>
                            e.getBoundingClientRect(),
                          contextElement: e,
                        }
                      : e;
                    c.refs.setReference(t);
                  },
                  [c.refs],
                ),
                b = r.useCallback(
                  (e) => {
                    (u(e) || null === e) && ((g.current = e), l(e)),
                      (u(c.refs.reference.current) ||
                        null === c.refs.reference.current ||
                        (null !== e && !u(e))) &&
                        c.refs.setReference(e);
                  },
                  [c.refs],
                ),
                y = r.useMemo(
                  () => ({
                    ...c.refs,
                    setReference: b,
                    setPositionReference: h,
                    domReference: g,
                  }),
                  [c.refs, b, h],
                ),
                _ = r.useMemo(
                  () => ({ ...c.elements, domReference: s }),
                  [c.elements, s],
                ),
                x = r.useMemo(
                  () => ({
                    ...c,
                    refs: y,
                    elements: _,
                    dataRef: p,
                    nodeId: i,
                    floatingId: v,
                    events: f,
                    open: a,
                    onOpenChange: m,
                  }),
                  [c, i, v, f, a, m, y, _],
                );
              return (
                tf(() => {
                  let e =
                    null == d
                      ? void 0
                      : d.nodesRef.current.find((e) => e.id === i);
                  e && (e.context = x);
                }),
                r.useMemo(
                  () => ({ ...c, context: x, refs: y, elements: _ }),
                  [c, y, _, x],
                )
              );
            }
            function ax(e, t) {
              void 0 === t && (t = {});
              let {
                  open: a,
                  onOpenChange: n,
                  events: i,
                  refs: o,
                  elements: { floating: s, domReference: c },
                } = e,
                { enabled: m = !0, visibleOnly: g = !0 } = t,
                p = r.useRef(!1),
                f = r.useRef(),
                v = r.useRef(!0);
              return (
                r.useEffect(() => {
                  if (!m) return;
                  let e = l(c);
                  function t() {
                    !a && d(c) && c === S(j(c)) && (p.current = !0);
                  }
                  function n() {
                    v.current = !0;
                  }
                  return (
                    e.addEventListener("blur", t),
                    e.addEventListener("keydown", n, !0),
                    () => {
                      e.removeEventListener("blur", t),
                        e.removeEventListener("keydown", n, !0);
                    }
                  );
                }, [s, c, a, m]),
                r.useEffect(() => {
                  if (m)
                    return (
                      i.on("dismiss", e),
                      () => {
                        i.off("dismiss", e);
                      }
                    );
                  function e(e) {
                    ("referencePress" === e.type || "escapeKey" === e.type) &&
                      (p.current = !0);
                  }
                }, [i, m]),
                r.useEffect(
                  () => () => {
                    clearTimeout(f.current);
                  },
                  [],
                ),
                r.useMemo(
                  () =>
                    m
                      ? {
                          reference: {
                            onPointerDown(e) {
                              k(e.nativeEvent) || (v.current = !1);
                            },
                            onMouseLeave() {
                              p.current = !1;
                            },
                            onFocus(e) {
                              if (p.current) return;
                              let t = w(e.nativeEvent);
                              if (g && u(t))
                                try {
                                  if (L() && A()) throw Error();
                                  if (!t.matches(":focus-visible")) return;
                                } catch (e) {
                                  if (!v.current && !D(t)) return;
                                }
                              n(!0, e.nativeEvent);
                            },
                            onBlur(e) {
                              p.current = !1;
                              let t = e.relatedTarget,
                                a =
                                  u(t) &&
                                  t.hasAttribute(tF("focus-guard")) &&
                                  "outside" === t.getAttribute("data-type");
                              f.current = window.setTimeout(() => {
                                let i = S(c ? c.ownerDocument : document);
                                if (t || i !== c) {
                                  if (C(o.floating.current, t) || C(c, t) || a)
                                    return;
                                  n(!1, e.nativeEvent);
                                }
                              });
                            },
                          },
                        }
                      : {},
                  [m, g, c, o, n],
                )
              );
            }
            function aS(e, t, a) {
              let n = new Map();
              return {
                ...("floating" === a && { tabIndex: -1 }),
                ...e,
                ...t
                  .map((e) => (e ? e[a] : null))
                  .concat(e)
                  .reduce(
                    (e, t) => (
                      t &&
                        Object.entries(t).forEach((t) => {
                          let [a, i] = t;
                          if (0 === a.indexOf("on")) {
                            if (
                              (n.has(a) || n.set(a, []), "function" == typeof i)
                            ) {
                              var r;
                              null == (r = n.get(a)) || r.push(i),
                                (e[a] = function () {
                                  for (
                                    var e,
                                      t = arguments.length,
                                      i = Array(t),
                                      r = 0;
                                    r < t;
                                    r++
                                  )
                                    i[r] = arguments[r];
                                  return null == (e = n.get(a))
                                    ? void 0
                                    : e
                                        .map((e) => e(...i))
                                        .find((e) => void 0 !== e);
                                });
                            }
                          } else e[a] = i;
                        }),
                      e
                    ),
                    {},
                  ),
              };
            }
            function aC(e) {
              void 0 === e && (e = []);
              let t = e,
                a = r.useCallback((t) => aS(t, e, "reference"), t),
                n = r.useCallback((t) => aS(t, e, "floating"), t),
                i = r.useCallback(
                  (t) => aS(t, e, "item"),
                  e.map((e) => (null == e ? void 0 : e.item)),
                );
              return r.useMemo(
                () => ({
                  getReferenceProps: a,
                  getFloatingProps: n,
                  getItemProps: i,
                }),
                [a, n, i],
              );
            }
            let aE = !1;
            function aN(e, t, a) {
              switch (e) {
                case "vertical":
                  return t;
                case "horizontal":
                  return a;
                default:
                  return t || a;
              }
            }
            function aP(e, t) {
              return aN(t, e === tn || e === ti, e === tr || e === to);
            }
            function ak(e, t, a) {
              return (
                aN(t, e === ti, a ? e === tr : e === to) ||
                "Enter" === e ||
                " " == e ||
                "" === e
              );
            }
            function aL(e, t, a) {
              return aN(t, a ? e === to : e === tr, e === tn);
            }
            function aI(e, t) {
              let {
                  open: a,
                  onOpenChange: n,
                  refs: i,
                  elements: { domReference: o, floating: l },
                } = e,
                {
                  listRef: s,
                  activeIndex: c,
                  onNavigate: u = () => {},
                  enabled: m = !0,
                  selectedIndex: g = null,
                  allowEscape: p = !1,
                  loop: f = !1,
                  nested: v = !1,
                  rtl: h = !1,
                  virtual: b = !1,
                  focusItemOnOpen: y = "auto",
                  focusItemOnHover: _ = !0,
                  openOnArrowKeyDown: x = !0,
                  disabledIndices: E,
                  orientation: N = "vertical",
                  cols: I = 1,
                  scrollItemIntoView: T = !0,
                  virtualItemRef: R,
                } = t,
                w = tO(),
                D = tV(),
                O = ta(u),
                V = r.useRef(y),
                M = r.useRef(null != g ? g : -1),
                B = r.useRef(null),
                U = r.useRef(!0),
                F = r.useRef(O),
                W = r.useRef(!!l),
                H = r.useRef(!1),
                z = r.useRef(!1),
                q = tW(E),
                K = tW(a),
                Y = tW(T),
                [Z, J] = r.useState(),
                [Q, X] = r.useState(),
                $ = ta(function (e, t, a) {
                  void 0 === a && (a = !1);
                  let n = e.current[t.current];
                  n &&
                    (b
                      ? (J(n.id),
                        null == D || D.events.emit("virtualfocus", n),
                        R && (R.current = n))
                      : tp(n, {
                          preventScroll: !0,
                          sync: !!(A() && L()) && (aE || H.current),
                        }),
                    requestAnimationFrame(() => {
                      let e = Y.current,
                        t = e && n && (a || !U.current);
                      t &&
                        (null == n.scrollIntoView ||
                          n.scrollIntoView(
                            "boolean" == typeof e
                              ? { block: "nearest", inline: "nearest" }
                              : e,
                          ));
                    }));
                });
              tf(() => {
                document.createElement("div").focus({
                  get preventScroll() {
                    return (aE = !0), !1;
                  },
                });
              }, []),
                tf(() => {
                  m &&
                    (a && l
                      ? V.current && null != g && ((z.current = !0), O(g))
                      : W.current && ((M.current = -1), F.current(null)));
                }, [m, a, l, g, O]),
                tf(() => {
                  if (m && a && l) {
                    if (null == c) {
                      if (
                        ((H.current = !1),
                        null == g &&
                          (W.current && ((M.current = -1), $(s, M)),
                          !W.current &&
                            V.current &&
                            (null != B.current ||
                              (!0 === V.current && null == B.current))))
                      ) {
                        let e = 0,
                          t = () => {
                            if (null == s.current[0]) {
                              if (e < 2) {
                                let a = e
                                  ? requestAnimationFrame
                                  : queueMicrotask;
                                a(t);
                              }
                              e++;
                            } else
                              (M.current =
                                null == B.current || ak(B.current, N, h) || v
                                  ? tc(s, q.current)
                                  : tu(s, q.current)),
                                (B.current = null),
                                O(M.current);
                          };
                        t();
                      }
                    } else
                      ts(s, c) ||
                        ((M.current = c), $(s, M, z.current), (z.current = !1));
                  }
                }, [m, a, l, c, g, v, s, N, h, O, $, q]),
                tf(() => {
                  var e, t;
                  if (!m || l || !D || b || !W.current) return;
                  let a = D.nodesRef.current,
                    n =
                      null == (e = a.find((e) => e.id === w))
                        ? void 0
                        : null == (t = e.context)
                          ? void 0
                          : t.elements.floating,
                    i = S(j(l)),
                    r = a.some(
                      (e) => e.context && C(e.context.elements.floating, i),
                    );
                  n && !r && U.current && n.focus({ preventScroll: !0 });
                }, [m, l, D, w, b]),
                tf(() => {
                  if (m && D && b && !w)
                    return (
                      D.events.on("virtualfocus", e),
                      () => {
                        D.events.off("virtualfocus", e);
                      }
                    );
                  function e(e) {
                    X(e.id), R && (R.current = e);
                  }
                }, [m, D, b, w, R]),
                tf(() => {
                  (F.current = O), (W.current = !!l);
                }),
                tf(() => {
                  a || (B.current = null);
                }, [a]);
              let ee = null != c,
                et = r.useMemo(() => {
                  function e(e) {
                    if (!a) return;
                    let t = s.current.indexOf(e);
                    -1 !== t && O(t);
                  }
                  let t = {
                    onFocus(t) {
                      let { currentTarget: a } = t;
                      e(a);
                    },
                    onClick: (e) => {
                      let { currentTarget: t } = e;
                      return t.focus({ preventScroll: !0 });
                    },
                    ...(_ && {
                      onMouseMove(t) {
                        let { currentTarget: a } = t;
                        e(a);
                      },
                      onPointerLeave(e) {
                        let { pointerType: t } = e;
                        U.current &&
                          "touch" !== t &&
                          ((M.current = -1),
                          $(s, M),
                          O(null),
                          b || tp(i.floating.current, { preventScroll: !0 }));
                      },
                    }),
                  };
                  return t;
                }, [a, i, $, _, s, O, b]);
              return r.useMemo(() => {
                if (!m) return {};
                let e = q.current;
                function t(t) {
                  if (
                    ((U.current = !1),
                    (H.current = !0),
                    !K.current && t.currentTarget === i.floating.current)
                  )
                    return;
                  if (v && aL(t.key, N, h)) {
                    G(t), n(!1, t.nativeEvent), d(o) && !b && o.focus();
                    return;
                  }
                  let r = M.current,
                    l = tc(s, e),
                    c = tu(s, e);
                  if (
                    ("Home" === t.key && (G(t), (M.current = l), O(M.current)),
                    "End" === t.key && (G(t), (M.current = c), O(M.current)),
                    (!(I > 1) ||
                      ((M.current = tm(s, {
                        event: t,
                        orientation: N,
                        loop: f,
                        cols: I,
                        disabledIndices: e,
                        minIndex: l,
                        maxIndex: c,
                        prevIndex: M.current,
                        stopEvent: !0,
                      })),
                      O(M.current),
                      "both" !== N)) &&
                      aP(t.key, N))
                  ) {
                    if (
                      (G(t),
                      a &&
                        !b &&
                        S(t.currentTarget.ownerDocument) === t.currentTarget)
                    ) {
                      (M.current = ak(t.key, N, h) ? l : c), O(M.current);
                      return;
                    }
                    ak(t.key, N, h)
                      ? f
                        ? (M.current =
                            r >= c
                              ? p && r !== s.current.length
                                ? -1
                                : l
                              : td(s, { startingIndex: r, disabledIndices: e }))
                        : (M.current = Math.min(
                            c,
                            td(s, { startingIndex: r, disabledIndices: e }),
                          ))
                      : f
                        ? (M.current =
                            r <= l
                              ? p && -1 !== r
                                ? s.current.length
                                : c
                              : td(s, {
                                  startingIndex: r,
                                  decrement: !0,
                                  disabledIndices: e,
                                }))
                        : (M.current = Math.max(
                            l,
                            td(s, {
                              startingIndex: r,
                              decrement: !0,
                              disabledIndices: e,
                            }),
                          )),
                      ts(s, M.current) ? O(null) : O(M.current);
                  }
                }
                function r(e) {
                  "auto" === y && P(e.nativeEvent) && (V.current = !0);
                }
                let l = b && a && ee && { "aria-activedescendant": Q || Z },
                  c = s.current.find((e) => (null == e ? void 0 : e.id) === Z);
                return {
                  reference: {
                    ...l,
                    onKeyDown(i) {
                      var r, o, l, u, d, m;
                      U.current = !1;
                      let p = 0 === i.key.indexOf("Arrow"),
                        f =
                          ((r = i.key),
                          aN(N, h ? r === tr : r === to, r === ti)),
                        y = aL(i.key, N, h),
                        _ = aP(i.key, N),
                        S =
                          (v ? f : _) ||
                          "Enter" === i.key ||
                          "" === i.key.trim();
                      if (b && a) {
                        let e, a;
                        let n =
                            null == D
                              ? void 0
                              : D.nodesRef.current.find(
                                  (e) => null == e.parentId,
                                ),
                          r =
                            D && n
                              ? ((o = D.nodesRef.current),
                                (l = n.id),
                                (a = -1),
                                !(function t(n, i) {
                                  i > a && ((e = n), (a = i));
                                  let r = tQ(o, n);
                                  r.forEach((e) => {
                                    t(e.id, i + 1);
                                  });
                                })(l, 0),
                                o.find((t) => t.id === e))
                              : null;
                        if (p && r && R) {
                          let e = new KeyboardEvent("keydown", {
                            key: i.key,
                            bubbles: !0,
                          });
                          if (f || y) {
                            let t =
                                (null == (u = r.context)
                                  ? void 0
                                  : u.elements.domReference) ===
                                i.currentTarget,
                              a =
                                y && !t
                                  ? null == (d = r.context)
                                    ? void 0
                                    : d.elements.domReference
                                  : f
                                    ? c
                                    : null;
                            a && (G(i), a.dispatchEvent(e), X(void 0));
                          }
                          if (
                            _ &&
                            r.context &&
                            r.context.open &&
                            r.parentId &&
                            i.currentTarget !== r.context.elements.domReference
                          ) {
                            G(i),
                              null == (m = r.context.elements.domReference) ||
                                m.dispatchEvent(e);
                            return;
                          }
                        }
                        return t(i);
                      }
                      if (a || x || !p) {
                        if ((S && (B.current = v && _ ? null : i.key), v)) {
                          f &&
                            (G(i),
                            a
                              ? ((M.current = tc(s, e)), O(M.current))
                              : n(!0, i.nativeEvent));
                          return;
                        }
                        _ &&
                          (null != g && (M.current = g),
                          G(i),
                          !a && x ? n(!0, i.nativeEvent) : t(i),
                          a && O(M.current));
                      }
                    },
                    onFocus() {
                      a && O(null);
                    },
                    onPointerDown: function (e) {
                      (V.current = y),
                        "auto" === y && k(e.nativeEvent) && (V.current = !0);
                    },
                    onMouseDown: r,
                    onClick: r,
                  },
                  floating: {
                    "aria-orientation": "both" === N ? void 0 : N,
                    ...l,
                    onKeyDown: t,
                    onPointerMove() {
                      U.current = !0;
                    },
                  },
                  item: et,
                };
              }, [
                o,
                i,
                Z,
                Q,
                q,
                K,
                s,
                m,
                N,
                h,
                b,
                a,
                ee,
                v,
                g,
                x,
                p,
                I,
                f,
                y,
                O,
                n,
                et,
                D,
                R,
              ]);
            }
            function aA(e, t) {
              void 0 === t && (t = {});
              let { open: a, floatingId: n } = e,
                { enabled: i = !0, role: o = "dialog" } = t,
                l = tj();
              return r.useMemo(() => {
                let e = { id: n, role: o };
                return i
                  ? "tooltip" === o
                    ? {
                        reference: { "aria-describedby": a ? n : void 0 },
                        floating: e,
                      }
                    : {
                        reference: {
                          "aria-expanded": a ? "true" : "false",
                          "aria-haspopup": "alertdialog" === o ? "dialog" : o,
                          "aria-controls": a ? n : void 0,
                          ...("listbox" === o && { role: "combobox" }),
                          ...("menu" === o && { id: l }),
                        },
                        floating: {
                          ...e,
                          ...("menu" === o && { "aria-labelledby": l }),
                        },
                      }
                  : {};
              }, [i, o, a, n, l]);
            }
            let aT = (e) =>
              e.replace(
                /[A-Z]+(?![a-z])|[A-Z]/g,
                (e, t) => (t ? "-" : "") + e.toLowerCase(),
              );
            function aj(e, t) {
              return "function" == typeof e ? e(t) : e;
            }
            function aR(e, t) {
              void 0 === t && (t = {});
              let {
                  open: a,
                  elements: { floating: n },
                } = e,
                { duration: i = 250 } = t,
                o = ("number" == typeof i ? i : i.close) || 0,
                [l, s] = r.useState(!1),
                [c, u] = r.useState("unmounted"),
                d = (function (e, t) {
                  let [a, n] = r.useState(e);
                  return (
                    e && !a && n(!0),
                    r.useEffect(() => {
                      if (!e) {
                        let e = setTimeout(() => n(!1), t);
                        return () => clearTimeout(e);
                      }
                    }, [e, t]),
                    a
                  );
                })(a, o);
              return (
                tf(() => {
                  l && !d && u("unmounted");
                }, [l, d]),
                tf(() => {
                  if (n) {
                    if (a) {
                      u("initial");
                      let e = requestAnimationFrame(() => {
                        u("open");
                      });
                      return () => {
                        cancelAnimationFrame(e);
                      };
                    }
                    s(!0), u("close");
                  }
                }, [a, n]),
                { isMounted: d, status: c }
              );
            }
            function aw(e, t) {
              void 0 === t && (t = {});
              let {
                  initial: a = { opacity: 0 },
                  open: n,
                  close: i,
                  common: o,
                  duration: l = 250,
                } = t,
                s = e.placement,
                c = s.split("-")[0],
                u = r.useMemo(() => ({ side: c, placement: s }), [c, s]),
                d = "number" == typeof l,
                m = (d ? l : l.open) || 0,
                g = (d ? l : l.close) || 0,
                [p, f] = r.useState(() => ({ ...aj(o, u), ...aj(a, u) })),
                { isMounted: v, status: h } = aR(e, { duration: l }),
                b = tW(a),
                y = tW(n),
                _ = tW(i),
                x = tW(o);
              return (
                tf(() => {
                  let e = aj(b.current, u),
                    t = aj(_.current, u),
                    a = aj(x.current, u),
                    n =
                      aj(y.current, u) ||
                      Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
                  if (
                    ("initial" === h &&
                      f((t) => ({
                        transitionProperty: t.transitionProperty,
                        ...a,
                        ...e,
                      })),
                    "open" === h &&
                      f({
                        transitionProperty: Object.keys(n).map(aT).join(","),
                        transitionDuration: m + "ms",
                        ...a,
                        ...n,
                      }),
                    "close" === h)
                  ) {
                    let n = t || e;
                    f({
                      transitionProperty: Object.keys(n).map(aT).join(","),
                      transitionDuration: g + "ms",
                      ...a,
                      ...n,
                    });
                  }
                }, [g, _, b, y, x, m, h, u]),
                { isMounted: v, styles: p }
              );
            }
            function aD(e, t) {
              var a;
              let { open: n, dataRef: i } = e,
                {
                  listRef: o,
                  activeIndex: l,
                  onMatch: s,
                  onTypingChange: c,
                  enabled: u = !0,
                  findMatch: d = null,
                  resetMs: m = 750,
                  ignoreKeys: g = [],
                  selectedIndex: p = null,
                } = t,
                f = r.useRef(),
                v = r.useRef(""),
                h = r.useRef(null != (a = null != p ? p : l) ? a : -1),
                b = r.useRef(null),
                y = ta(s),
                _ = ta(c),
                x = tW(d),
                S = tW(g);
              return (
                tf(() => {
                  n &&
                    (clearTimeout(f.current),
                    (b.current = null),
                    (v.current = ""));
                }, [n]),
                tf(() => {
                  if (n && "" === v.current) {
                    var e;
                    h.current = null != (e = null != p ? p : l) ? e : -1;
                  }
                }, [n, p, l]),
                r.useMemo(() => {
                  if (!u) return {};
                  function e(e) {
                    e
                      ? i.current.typing || ((i.current.typing = e), _(e))
                      : i.current.typing && ((i.current.typing = e), _(e));
                  }
                  function t(e, t, a) {
                    let n = x.current
                      ? x.current(t, a)
                      : t.find(
                          (e) =>
                            (null == e
                              ? void 0
                              : e
                                  .toLocaleLowerCase()
                                  .indexOf(a.toLocaleLowerCase())) === 0,
                        );
                    return n ? e.indexOf(n) : -1;
                  }
                  function a(a) {
                    let i = o.current;
                    if (
                      (v.current.length > 0 &&
                        " " !== v.current[0] &&
                        (-1 === t(i, i, v.current)
                          ? e(!1)
                          : " " === a.key && G(a)),
                      null == i ||
                        S.current.includes(a.key) ||
                        1 !== a.key.length ||
                        a.ctrlKey ||
                        a.metaKey ||
                        a.altKey)
                    )
                      return;
                    n && " " !== a.key && (G(a), e(!0));
                    let r = i.every((e) => {
                      var t, a;
                      return (
                        !e ||
                        (null == (t = e[0])
                          ? void 0
                          : t.toLocaleLowerCase()) !==
                          (null == (a = e[1]) ? void 0 : a.toLocaleLowerCase())
                      );
                    });
                    r &&
                      v.current === a.key &&
                      ((v.current = ""), (h.current = b.current)),
                      (v.current += a.key),
                      clearTimeout(f.current),
                      (f.current = setTimeout(() => {
                        (v.current = ""), (h.current = b.current), e(!1);
                      }, m));
                    let l = h.current,
                      s = t(
                        i,
                        [...i.slice((l || 0) + 1), ...i.slice(0, (l || 0) + 1)],
                        v.current,
                      );
                    -1 !== s
                      ? (y(s), (b.current = s))
                      : " " !== a.key && ((v.current = ""), e(!1));
                  }
                  return {
                    reference: { onKeyDown: a },
                    floating: {
                      onKeyDown: a,
                      onKeyUp(t) {
                        " " === t.key && e(!1);
                      },
                    },
                  };
                }, [u, n, i, o, m, S, x, y, _])
              );
            }
            function aG(e, t) {
              return {
                ...e,
                rects: {
                  ...e.rects,
                  floating: { ...e.rects.floating, height: t },
                },
              };
            }
            let aO = (e) => ({
              name: "inner",
              options: e,
              async fn(t) {
                let {
                    listRef: a,
                    overflowRef: n,
                    onFallbackChange: i,
                    offset: r = 0,
                    index: o = 0,
                    minItemsVisible: l = 4,
                    referenceOverflowThreshold: s = 0,
                    scrollRef: c,
                    ...u
                  } = e,
                  {
                    rects: d,
                    elements: { floating: m },
                  } = t,
                  g = a.current[o];
                if (!g) return {};
                let p = {
                    ...t,
                    ...(await ef(
                      -g.offsetTop -
                        m.clientTop -
                        d.reference.height / 2 -
                        g.offsetHeight / 2 -
                        r,
                    ).fn(t)),
                  },
                  f = (null == c ? void 0 : c.current) || m,
                  v = await er(aG(p, f.scrollHeight), u),
                  h = await er(p, { ...u, elementContext: "reference" }),
                  b = Math.max(0, v.top),
                  y = p.y + b,
                  _ = Math.max(0, f.scrollHeight - b - Math.max(0, v.bottom));
                return (
                  (f.style.maxHeight = _ + "px"),
                  (f.scrollTop = b),
                  i &&
                    (f.offsetHeight <
                      g.offsetHeight * Math.min(l, a.current.length - 1) - 1 ||
                    h.top >= -s ||
                    h.bottom >= -s
                      ? (0, eR.flushSync)(() => i(!0))
                      : (0, eR.flushSync)(() => i(!1))),
                  n &&
                    (n.current = await er(
                      aG({ ...p, y: y }, f.offsetHeight),
                      u,
                    )),
                  { y: y }
                );
              },
            });
            function aV(e, t) {
              let { open: a, elements: n } = e,
                {
                  enabled: i = !0,
                  overflowRef: o,
                  scrollRef: l,
                  onChange: s,
                } = t,
                c = ta(s),
                u = r.useRef(!1),
                d = r.useRef(null),
                m = r.useRef(null);
              return (
                r.useEffect(() => {
                  if (!i) return;
                  function e(e) {
                    if (e.ctrlKey || !t || null == o.current) return;
                    let a = e.deltaY,
                      n = o.current.top >= -0.5,
                      i = o.current.bottom >= -0.5,
                      r = t.scrollHeight - t.clientHeight,
                      l = a < 0 ? -1 : 1,
                      s = a < 0 ? "max" : "min";
                    !(t.scrollHeight <= t.clientHeight) &&
                      ((!n && a > 0) || (!i && a < 0)
                        ? (e.preventDefault(),
                          (0, eR.flushSync)(() => {
                            c((e) => e + Math[s](a, r * l));
                          }))
                        : /firefox/i.test(N()) && (t.scrollTop += a));
                  }
                  let t = (null == l ? void 0 : l.current) || n.floating;
                  if (a && t)
                    return (
                      t.addEventListener("wheel", e),
                      requestAnimationFrame(() => {
                        (d.current = t.scrollTop),
                          null != o.current && (m.current = { ...o.current });
                      }),
                      () => {
                        (d.current = null),
                          (m.current = null),
                          t.removeEventListener("wheel", e);
                      }
                    );
                }, [i, a, n.floating, o, l, c]),
                r.useMemo(
                  () =>
                    i
                      ? {
                          floating: {
                            onKeyDown() {
                              u.current = !0;
                            },
                            onWheel() {
                              u.current = !1;
                            },
                            onPointerMove() {
                              u.current = !1;
                            },
                            onScroll() {
                              let e =
                                (null == l ? void 0 : l.current) || n.floating;
                              if (o.current && e && u.current) {
                                if (null !== d.current) {
                                  let t = e.scrollTop - d.current;
                                  ((o.current.bottom < -0.5 && t < -1) ||
                                    (o.current.top < -0.5 && t > 1)) &&
                                    (0, eR.flushSync)(() => c((e) => e + t));
                                }
                                requestAnimationFrame(() => {
                                  d.current = e.scrollTop;
                                });
                              }
                            },
                          },
                        }
                      : {},
                  [i, o, n.floating, l, c],
                )
              );
            }
            function aM(e, t) {
              let [a, n] = e,
                i = !1,
                r = t.length;
              for (let e = 0, o = r - 1; e < r; o = e++) {
                let [r, l] = t[e] || [0, 0],
                  [s, c] = t[o] || [0, 0],
                  u =
                    l >= n != c >= n && a <= ((s - r) * (n - l)) / (c - l) + r;
                u && (i = !i);
              }
              return i;
            }
            function aB(e) {
              let t;
              void 0 === e && (e = {});
              let {
                  buffer: a = 0.5,
                  blockPointerEvents: n = !1,
                  requireIntent: i = !0,
                } = e,
                r = !1,
                o = null,
                l = null,
                s = performance.now(),
                c = (e) => {
                  let {
                    x: n,
                    y: c,
                    placement: d,
                    elements: m,
                    onClose: g,
                    nodeId: p,
                    tree: f,
                  } = e;
                  return function (e) {
                    function v() {
                      clearTimeout(t), g();
                    }
                    if (
                      (clearTimeout(t),
                      !m.domReference ||
                        !m.floating ||
                        null == d ||
                        null == n ||
                        null == c)
                    )
                      return;
                    let { clientX: h, clientY: b } = e,
                      y = [h, b],
                      _ = w(e),
                      x = "mouseleave" === e.type,
                      S = C(m.floating, _),
                      E = C(m.domReference, _),
                      N = m.domReference.getBoundingClientRect(),
                      P = m.floating.getBoundingClientRect(),
                      k = d.split("-")[0],
                      L = n > P.right - P.width / 2,
                      I = c > P.bottom - P.height / 2,
                      A =
                        y[0] >= N.x &&
                        y[0] <= N.x + N.width &&
                        y[1] >= N.y &&
                        y[1] <= N.y + N.height,
                      T = P.width > N.width,
                      j = P.height > N.height,
                      R = (T ? N : P).left,
                      D = (T ? N : P).right,
                      G = (j ? N : P).top,
                      O = (j ? N : P).bottom;
                    if (S && ((r = !0), !x)) return;
                    if ((E && (r = !1), E && !x)) {
                      r = !0;
                      return;
                    }
                    if (
                      (x &&
                        u(e.relatedTarget) &&
                        C(m.floating, e.relatedTarget)) ||
                      (f &&
                        tQ(f.nodesRef.current, p).some((e) => {
                          let { context: t } = e;
                          return null == t ? void 0 : t.open;
                        }))
                    )
                      return;
                    if (
                      ("top" === k && c >= N.bottom - 1) ||
                      ("bottom" === k && c <= N.top + 1) ||
                      ("left" === k && n >= N.right - 1) ||
                      ("right" === k && n <= N.left + 1)
                    )
                      return v();
                    let V = [];
                    switch (k) {
                      case "top":
                        V = [
                          [R, N.top + 1],
                          [R, P.bottom - 1],
                          [D, P.bottom - 1],
                          [D, N.top + 1],
                        ];
                        break;
                      case "bottom":
                        V = [
                          [R, P.top + 1],
                          [R, N.bottom - 1],
                          [D, N.bottom - 1],
                          [D, P.top + 1],
                        ];
                        break;
                      case "left":
                        V = [
                          [P.right - 1, O],
                          [P.right - 1, G],
                          [N.left + 1, G],
                          [N.left + 1, O],
                        ];
                        break;
                      case "right":
                        V = [
                          [N.right - 1, O],
                          [N.right - 1, G],
                          [P.left + 1, G],
                          [P.left + 1, O],
                        ];
                    }
                    if (!aM([h, b], V)) {
                      if (r && !A) return v();
                      if (!x && i) {
                        let t = (function (e, t) {
                          let a = performance.now(),
                            n = a - s;
                          if (null === o || null === l || 0 === n)
                            return (o = e), (l = t), (s = a), null;
                          let i = e - o,
                            r = t - l;
                          return (
                            (o = e),
                            (l = t),
                            (s = a),
                            Math.sqrt(i * i + r * r) / n
                          );
                        })(e.clientX, e.clientY);
                        if (null !== t && t < 0.1) return v();
                      }
                      aM(
                        [h, b],
                        (function (e) {
                          let [t, n] = e;
                          switch (k) {
                            case "top": {
                              let e = [
                                [
                                  P.left,
                                  L ? P.bottom - a : T ? P.bottom - a : P.top,
                                ],
                                [
                                  P.right,
                                  L ? (T ? P.bottom - a : P.top) : P.bottom - a,
                                ],
                              ];
                              return [
                                [
                                  T ? t + a / 2 : L ? t + 4 * a : t - 4 * a,
                                  n + a + 1,
                                ],
                                [
                                  T ? t - a / 2 : L ? t + 4 * a : t - 4 * a,
                                  n + a + 1,
                                ],
                                ...e,
                              ];
                            }
                            case "bottom": {
                              let e = [
                                [
                                  P.left,
                                  L ? P.top + a : T ? P.top + a : P.bottom,
                                ],
                                [
                                  P.right,
                                  L ? (T ? P.top + a : P.bottom) : P.top + a,
                                ],
                              ];
                              return [
                                [
                                  T ? t + a / 2 : L ? t + 4 * a : t - 4 * a,
                                  n - a,
                                ],
                                [
                                  T ? t - a / 2 : L ? t + 4 * a : t - 4 * a,
                                  n - a,
                                ],
                                ...e,
                              ];
                            }
                            case "left": {
                              let e = [
                                [
                                  I ? P.right - a : j ? P.right - a : P.left,
                                  P.top,
                                ],
                                [
                                  I ? (j ? P.right - a : P.left) : P.right - a,
                                  P.bottom,
                                ],
                              ];
                              return [
                                ...e,
                                [
                                  t + a + 1,
                                  j ? n + a / 2 : I ? n + 4 * a : n - 4 * a,
                                ],
                                [
                                  t + a + 1,
                                  j ? n - a / 2 : I ? n + 4 * a : n - 4 * a,
                                ],
                              ];
                            }
                            case "right": {
                              let e = [
                                [
                                  I ? P.left + a : j ? P.left + a : P.right,
                                  P.top,
                                ],
                                [
                                  I ? (j ? P.left + a : P.right) : P.left + a,
                                  P.bottom,
                                ],
                              ];
                              return [
                                [
                                  t - a,
                                  j ? n + a / 2 : I ? n + 4 * a : n - 4 * a,
                                ],
                                [
                                  t - a,
                                  j ? n - a / 2 : I ? n + 4 * a : n - 4 * a,
                                ],
                                ...e,
                              ];
                            }
                          }
                        })([n, c]),
                      )
                        ? !r && i && (t = window.setTimeout(v, 40))
                        : v();
                    }
                  };
                };
              return (c.__options = { blockPointerEvents: n }), c;
            }
          },
          5881: (e, t, a) => {
            function n() {
              for (var e, t, a = 0, n = ""; a < arguments.length; )
                (e = arguments[a++]) &&
                  (t = (function e(t) {
                    var a,
                      n,
                      i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (a = 0; a < t.length; a++)
                          t[a] && (n = e(t[a])) && (i && (i += " "), (i += n));
                      else for (a in t) t[a] && (i && (i += " "), (i += a));
                    }
                    return i;
                  })(e)) &&
                  (n && (n += " "), (n += t));
              return n;
            }
            a.r(t), a.d(t, { clsx: () => n, default: () => i });
            let i = n;
          },
          836: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            let n = { overlay: "ZSjQrniulol6xKOq2Bou" };
          },
          4539: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            let n = { root: "dJZf0Flxzx7PR15g7zqM" };
          },
          6169: (e, t, a) => {
            a.r(t),
              a.d(t, {
                DOWN: () => l,
                LEFT: () => i,
                RIGHT: () => r,
                UP: () => o,
                useSwipeable: () => g,
              });
            var n = a(810);
            let i = "Left",
              r = "Right",
              o = "Up",
              l = "Down",
              s = {
                delta: 10,
                preventScrollOnSwipe: !1,
                rotationAngle: 0,
                trackMouse: !1,
                trackTouch: !0,
                swipeDuration: 1 / 0,
                touchEventOptions: { passive: !0 },
              },
              c = {
                first: !0,
                initial: [0, 0],
                start: 0,
                swiping: !1,
                xy: [0, 0],
              },
              u = "mousemove",
              d = "mouseup";
            function m(e, t) {
              if (0 === t) return e;
              let a = (Math.PI / 180) * t,
                n = e[0] * Math.cos(a) + e[1] * Math.sin(a),
                i = e[1] * Math.cos(a) - e[0] * Math.sin(a);
              return [n, i];
            }
            function g(e) {
              var t, a, g;
              let p;
              let { trackMouse: f } = e,
                v = n.useRef(Object.assign({}, c)),
                h = n.useRef(Object.assign({}, s)),
                b = n.useRef(Object.assign({}, h.current));
              for (p in ((b.current = Object.assign({}, h.current)),
              (h.current = Object.assign(Object.assign({}, s), e)),
              s))
                void 0 === h.current[p] && (h.current[p] = s[p]);
              let [y, _] = n.useMemo(
                () =>
                  (function (e, t) {
                    let a = (t) => {
                        let a = "touches" in t;
                        (a && t.touches.length > 1) ||
                          e((e, i) => {
                            i.trackMouse &&
                              !a &&
                              (document.addEventListener(u, n),
                              document.addEventListener(d, f));
                            let { clientX: r, clientY: o } = a
                                ? t.touches[0]
                                : t,
                              l = m([r, o], i.rotationAngle);
                            return (
                              i.onTouchStartOrOnMouseDown &&
                                i.onTouchStartOrOnMouseDown({ event: t }),
                              Object.assign(
                                Object.assign(Object.assign({}, e), c),
                                {
                                  initial: l.slice(),
                                  xy: l,
                                  start: t.timeStamp || 0,
                                },
                              )
                            );
                          });
                      },
                      n = (t) => {
                        e((e, a) => {
                          let n = "touches" in t;
                          if (n && t.touches.length > 1) return e;
                          if (t.timeStamp - e.start > a.swipeDuration)
                            return e.swiping
                              ? Object.assign(Object.assign({}, e), {
                                  swiping: !1,
                                })
                              : e;
                          let { clientX: c, clientY: u } = n ? t.touches[0] : t,
                            [d, g] = m([c, u], a.rotationAngle),
                            p = d - e.xy[0],
                            f = g - e.xy[1],
                            v = Math.abs(p),
                            h = Math.abs(f),
                            b = (t.timeStamp || 0) - e.start,
                            y = Math.sqrt(v * v + h * h) / (b || 1),
                            _ = [p / (b || 1), f / (b || 1)],
                            x = v > h ? (p > 0 ? r : i) : f > 0 ? l : o,
                            S =
                              "number" == typeof a.delta
                                ? a.delta
                                : a.delta[x.toLowerCase()] || s.delta;
                          if (v < S && h < S && !e.swiping) return e;
                          let C = {
                            absX: v,
                            absY: h,
                            deltaX: p,
                            deltaY: f,
                            dir: x,
                            event: t,
                            first: e.first,
                            initial: e.initial,
                            velocity: y,
                            vxvy: _,
                          };
                          C.first && a.onSwipeStart && a.onSwipeStart(C),
                            a.onSwiping && a.onSwiping(C);
                          let E = !1;
                          return (
                            (a.onSwiping || a.onSwiped || a[`onSwiped${x}`]) &&
                              (E = !0),
                            E &&
                              a.preventScrollOnSwipe &&
                              a.trackTouch &&
                              t.cancelable &&
                              t.preventDefault(),
                            Object.assign(Object.assign({}, e), {
                              first: !1,
                              eventData: C,
                              swiping: !0,
                            })
                          );
                        });
                      },
                      g = (t) => {
                        e((e, a) => {
                          let n;
                          if (e.swiping && e.eventData) {
                            if (t.timeStamp - e.start < a.swipeDuration) {
                              (n = Object.assign(
                                Object.assign({}, e.eventData),
                                { event: t },
                              )),
                                a.onSwiped && a.onSwiped(n);
                              let i = a[`onSwiped${n.dir}`];
                              i && i(n);
                            }
                          } else a.onTap && a.onTap({ event: t });
                          return (
                            a.onTouchEndOrOnMouseUp &&
                              a.onTouchEndOrOnMouseUp({ event: t }),
                            Object.assign(
                              Object.assign(Object.assign({}, e), c),
                              { eventData: n },
                            )
                          );
                        });
                      },
                      p = () => {
                        document.removeEventListener(u, n),
                          document.removeEventListener(d, f);
                      },
                      f = (e) => {
                        p(), g(e);
                      },
                      v = (e, t) => {
                        let i = () => {};
                        if (e && e.addEventListener) {
                          let r = Object.assign(
                              Object.assign({}, s.touchEventOptions),
                              t.touchEventOptions,
                            ),
                            o = [
                              ["touchstart", a, r],
                              [
                                "touchmove",
                                n,
                                Object.assign(
                                  Object.assign({}, r),
                                  t.preventScrollOnSwipe ? { passive: !1 } : {},
                                ),
                              ],
                              ["touchend", g, r],
                            ];
                          o.forEach(([t, a, n]) => e.addEventListener(t, a, n)),
                            (i = () =>
                              o.forEach(([t, a]) =>
                                e.removeEventListener(t, a),
                              ));
                        }
                        return i;
                      },
                      h = {
                        ref: (t) => {
                          null !== t &&
                            e((e, a) => {
                              if (e.el === t) return e;
                              let n = {};
                              return (
                                e.el &&
                                  e.el !== t &&
                                  e.cleanUpTouch &&
                                  (e.cleanUpTouch(), (n.cleanUpTouch = void 0)),
                                a.trackTouch && t && (n.cleanUpTouch = v(t, a)),
                                Object.assign(
                                  Object.assign(Object.assign({}, e), {
                                    el: t,
                                  }),
                                  n,
                                )
                              );
                            });
                        },
                      };
                    return t.trackMouse && (h.onMouseDown = a), [h, v];
                  })((e) => (v.current = e(v.current, h.current)), {
                    trackMouse: f,
                  }),
                [f],
              );
              return (
                (v.current =
                  ((t = v.current),
                  (a = h.current),
                  (g = b.current),
                  a.trackTouch && t.el
                    ? t.cleanUpTouch
                      ? a.preventScrollOnSwipe !== g.preventScrollOnSwipe ||
                        a.touchEventOptions.passive !==
                          g.touchEventOptions.passive
                        ? (t.cleanUpTouch(),
                          Object.assign(Object.assign({}, t), {
                            cleanUpTouch: _(t.el, a),
                          }))
                        : t
                      : Object.assign(Object.assign({}, t), {
                          cleanUpTouch: _(t.el, a),
                        })
                    : (t.cleanUpTouch && t.cleanUpTouch(),
                      Object.assign(Object.assign({}, t), {
                        cleanUpTouch: void 0,
                      })))),
                y
              );
            }
          },
          6161: (e, t, a) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var n = a(810),
              i = Symbol.for("react.element"),
              r = Symbol.for("react.fragment"),
              o = Object.prototype.hasOwnProperty,
              l =
                n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, a) {
              var n,
                r = {},
                c = null,
                u = null;
              for (n in (void 0 !== a && (c = "" + a),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                o.call(t, n) && !s.hasOwnProperty(n) && (r[n] = t[n]);
              if (e && e.defaultProps)
                for (n in (t = e.defaultProps))
                  void 0 === r[n] && (r[n] = t[n]);
              return {
                $$typeof: i,
                type: e,
                key: c,
                ref: u,
                props: r,
                _owner: l.current,
              };
            }
            (t.Fragment = r), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, a) => {
            e.exports = a(6161);
          },
          4210: (e, t, a) => {
            var n, i;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.usePopoverSwipeable = void 0);
            let r = a(810),
              o = a(6169);
            ((i = n || (n = {})).TOP = "top"),
              (i.BOTTOM = "bottom"),
              (i.RIGHT = "right"),
              (i.LEFT = "left");
            let l = (e) => {
                switch (e) {
                  case "top":
                  case "top-end":
                  case "top-start":
                    return n.TOP;
                  case "right":
                  case "right-end":
                  case "right-start":
                    return n.RIGHT;
                  case "left":
                  case "left-end":
                  case "left-start":
                    return n.LEFT;
                  default:
                    return n.BOTTOM;
                }
              },
              s = ({ ref: e, deltaY: t, deltaX: a, placement: i }) => {
                requestAnimationFrame(() => {
                  e.current &&
                    ((e.current.style.willChange = "transform"),
                    (e.current.style.transform =
                      i === n.TOP || i === n.BOTTOM
                        ? `translateY(${t || 0}px)`
                        : `translateX(${a || 0}px)`));
                });
              },
              c = ({ ref: e, deltaY: t, deltaX: a, placement: i }) => {
                switch (i) {
                  case n.TOP:
                    t <= 0 && s({ ref: e, deltaY: t, deltaX: a, placement: i });
                    break;
                  case n.RIGHT:
                    a >= 0 && s({ ref: e, deltaY: t, deltaX: a, placement: i });
                    break;
                  case n.LEFT:
                    a <= 0 && s({ ref: e, deltaY: t, deltaX: a, placement: i });
                    break;
                  default:
                    t >= 0 && s({ ref: e, deltaY: t, deltaX: a, placement: i });
                }
              },
              u = (e) => {
                requestAnimationFrame(() => {
                  e.current &&
                    ((e.current.style.willChange = ""),
                    (e.current.style.transform = ""));
                });
              },
              d = ({ ref: e, deltaY: t, deltaX: a, placement: i }) => {
                switch (i) {
                  case n.TOP:
                    return (
                      e.current && t < 0 && e.current.offsetHeight / t >= -2
                    );
                  case n.RIGHT:
                    return e.current && a > 0 && e.current.offsetWidth / a <= 2;
                  case n.LEFT:
                    return (
                      e.current && a < 0 && e.current.offsetWidth / a >= -2
                    );
                  default:
                    return (
                      e.current && t > 0 && e.current.offsetHeight / t <= 2
                    );
                }
              };
            t.usePopoverSwipeable = ({
              ref: e,
              swipeableProps: t = {},
              onClose: a,
              disableSwipe: n,
              placement: i,
            }) => {
              let s = (0, r.useMemo)(() => l(i), [i]),
                m = (0, r.useCallback)(() => {
                  a && (u(e), a());
                }, [a, e]),
                g = (0, r.useCallback)(
                  (t) => {
                    n ||
                      c({
                        ref: e,
                        deltaY: t.deltaY,
                        deltaX: t.deltaX,
                        placement: s,
                      });
                  },
                  [n, e, s],
                ),
                p = (0, r.useCallback)(
                  (t) => {
                    !n &&
                      (d({
                        ref: e,
                        deltaY: t.deltaY,
                        deltaX: t.deltaX,
                        placement: s,
                      })
                        ? a && (u(e), a())
                        : u(e));
                  },
                  [n, e, s, a],
                ),
                f = (0, o.useSwipeable)({
                  onSwiped: p,
                  onSwiping: g,
                  trackMouse: !0,
                  trackTouch: !0,
                  ...t,
                });
              return { handlers: f, onCloseCallback: m };
            };
          },
          4640: function (e, t, a) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Popover = void 0);
            let i = a(9541),
              r = a(5881),
              o = a(810),
              l = a(3483),
              s = a(4210),
              c = a(9636),
              u = n(a(836));
            t.Popover = ({
              children: e,
              offsetOptions: t,
              strategy: a,
              placement: n,
              isMobile: d,
              visuallyHiddenDismiss: m,
              positionElement: g,
              transform: p,
              initialOpen: f = !1,
              open: v,
              onOpenChange: h,
              disableFloatingStyles: b = !1,
              overlayClassName: y,
              transition: _,
              style: x,
              returnFocus: S,
              isNested: C = !1,
              onShow: E,
              customRoleProps: N,
            }) => {
              let [P, k] = (0, o.useState)(f),
                [L, I] = (0, o.useState)(null),
                A = (0, o.useRef)([]),
                T = (0, o.useRef)([]),
                j = (0, l.useListItem)(),
                R = v ?? P,
                w = h ?? k,
                [D, G] = e,
                O = (0, o.useCallback)(() => {
                  w(!1);
                }, [w]),
                V = (0, o.useId)(),
                M = (0, o.useId)(),
                {
                  refs: B,
                  floatingStyles: U,
                  context: F,
                } = (0, l.useFloating)({
                  strategy: a,
                  placement: n,
                  open: R,
                  onOpenChange: w,
                  middleware: [(0, l.offset)(t), (0, l.flip)(), (0, l.shift)()],
                  whileElementsMounted: l.autoUpdate,
                  transform: p,
                }),
                W = (0, l.useTypeahead)(F, {
                  listRef: T,
                  onMatch: R ? I : void 0,
                  activeIndex: L,
                }),
                H = (0, l.useListNavigation)(F, {
                  listRef: A,
                  activeIndex: L,
                  nested: C,
                  onNavigate: I,
                }),
                z = (0, l.useFloatingTree)(),
                q = (0, l.useFloatingNodeId)(),
                K = (0, l.useFloatingParentNodeId)();
              (0, o.useEffect)(() => {
                if (!z) return;
                let e = () => {
                    w(!1);
                  },
                  t = (e) => {
                    e.nodeId !== q && e.parentId === K && w(!1);
                  };
                return (
                  z.events.on("click", e),
                  z.events.on("menuopen", t),
                  () => {
                    z.events.off("click", e), z.events.off("menuopen", t);
                  }
                );
              }, [z, q, K, w]),
                (0, o.useEffect)(() => {
                  R && E?.();
                }, [E, R]),
                (0, o.useEffect)(() => {
                  R &&
                    z &&
                    z.events.emit("menuopen", { parentId: K, nodeId: q });
                }, [z, R, q, K]),
                (0, o.useLayoutEffect)(() => {
                  g && B.setPositionReference(g);
                }, [B, g]);
              let { handlers: Y } = (0, s.usePopoverSwipeable)({
                  ref: B.floating,
                  onClose: O,
                  placement: n,
                  disableSwipe: !d,
                  swipeableProps: { preventScrollOnSwipe: !0 },
                }),
                Z = (0, l.useMergeRefs)([B.setFloating, Y?.ref]),
                J = (0, l.useRole)(F, N),
                Q = (0, l.useDismiss)(F, { referencePress: !0 }),
                X = (0, l.useClick)(F, { toggle: !C, ignoreMouse: C }),
                $ = (0, l.useHover)(F, {
                  enabled: C,
                  handleClose: (0, l.safePolygon)({ blockPointerEvents: !0 }),
                }),
                ee = (0, o.useCallback)((e) => {
                  e.stopPropagation();
                }, []),
                {
                  getReferenceProps: et,
                  getFloatingProps: ea,
                  getItemProps: en,
                } = (0, l.useInteractions)([J, Q, X, $, H, W]),
                { isMounted: ei, styles: er } = (0, l.useTransitionStyles)(
                  F,
                  _,
                ),
                eo = (0, l.useMergeRefs)([B.setReference, j.ref]),
                el =
                  D &&
                  (0, o.cloneElement)(D, {
                    ref: eo,
                    ...et({ onClick: D.props.onClick }),
                    key: V,
                  }),
                es = (0, o.useMemo)(
                  () =>
                    d
                      ? {
                          ...(b ? {} : U),
                          ...x,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          top: "auto",
                          transform: "none",
                        }
                      : { ...(b ? {} : U), ...x },
                  [d, b, U, x],
                ),
                ec = {
                  ref: Z,
                  style: es,
                  ...ea(),
                  onMouseDown: Y?.onMouseDown,
                  children: (0, o.cloneElement)(G.props.children, {
                    onClose: O,
                    style: er,
                    key: M,
                  }),
                },
                eu = (0, o.cloneElement)(G, ec),
                ed = (0, o.useMemo)(
                  () => ({
                    activeIndex: L,
                    setActiveIndex: I,
                    getItemProps: en,
                    isOpen: R,
                  }),
                  [L, en, R],
                ),
                em = C ? -1 : 0;
              return (0, i.jsxs)(c.PopoverContext.Provider, {
                value: ed,
                children: [
                  el,
                  (0, i.jsx)(l.FloatingList, {
                    elementsRef: A,
                    children:
                      ei &&
                      (0, i.jsx)(l.FloatingPortal, {
                        children: (0, i.jsx)(l.FloatingOverlay, {
                          className: (0, r.clsx)(u.default.overlay, y),
                          onClick: ee,
                          lockScroll: !0,
                          children: (0, i.jsx)(l.FloatingFocusManager, {
                            context: F,
                            returnFocus: S,
                            initialFocus: em,
                            visuallyHiddenDismiss: m,
                            children: eu,
                          }),
                        }),
                      }),
                  }),
                ],
              });
            };
          },
          9576: function (e, t, a) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverContent = t.PopoverContentComponent = void 0);
            let i = a(9541),
              r = a(810),
              o = a(5881),
              l = n(a(4539));
            (t.PopoverContentComponent = ({
              className: e,
              children: t,
              forwardRef: a,
              ...n
            }) =>
              (0, i.jsx)("div", {
                className: (0, o.clsx)(l.default.root, e),
                ref: a,
                ...n,
                children: t,
              })),
              (t.PopoverContent = (0, r.forwardRef)((e, a) =>
                (0, i.jsx)(t.PopoverContentComponent, { forwardRef: a, ...e }),
              ));
          },
          9636: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverContext = void 0);
            let n = a(810);
            t.PopoverContext = (0, n.createContext)({
              getItemProps: () => ({}),
              activeIndex: null,
              setActiveIndex: () => {},
              isOpen: !1,
            });
          },
          810: (e) => {
            e.exports = u;
          },
        },
        b = {};
      function y(e) {
        var t = b[e];
        if (void 0 !== t) return t.exports;
        var a = (b[e] = { exports: {} });
        return h[e].call(a.exports, a, a.exports, y), a.exports;
      }
      (y.d = (e, t) => {
        for (var a in t)
          y.o(t, a) &&
            !y.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      }),
        (y.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (y.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var _ = {};
      Object.defineProperty(_, "__esModule", { value: !0 }),
        (_.PopoverContent = _.Popover = void 0),
        (n = y(4640)),
        Object.defineProperty(_, "Popover", {
          enumerable: !0,
          get: function () {
            return n.Popover;
          },
        }),
        (i = y(9576)),
        Object.defineProperty(_, "PopoverContent", {
          enumerable: !0,
          get: function () {
            return i.PopoverContent;
          },
        });
      var x = _.Popover,
        S = _.PopoverContent;
      _.__esModule;
      var C = a(78354),
        E = a(1918),
        N = a(53433),
        P = a(84133);
      let k = (e) =>
          !!e &&
          e.some((e) => {
            let [t] = (null == e ? void 0 : e.split(":")) || [];
            return e === P.sH || (t && P.kF.includes(t));
          }),
        L = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            [t, a] = (0, c.useState)(e),
            { contentRef: n } = (0, P.$Y)();
          return (
            (0, c.useEffect)(() => {
              let e = new ResizeObserver((e) => {
                let [n] = e || [];
                n && n.contentRect.height !== t && a(n.contentRect.height);
              });
              return (
                n && e.observe(n),
                () => {
                  e.disconnect();
                }
              );
            }, [t, n]),
            { contentHeight: t }
          );
        };
      var I = a(35338),
        A = a(28036),
        T = a(51739),
        j = a.n(T);
      let R = (e) => {
        let { title: t, children: a, restrictionsClassName: n } = e;
        return (0, l.jsxs)("section", {
          className: j().root,
          children: [
            (0, l.jsx)(E.Caption, {
              variant: "span",
              type: "text",
              size: "m",
              weight: "medium",
              "aria-hidden": !0,
              children: t,
            }),
            (0, l.jsx)(A.y, {
              children: (0, l.jsx)(E.Heading, { variant: "h4", children: t }),
            }),
            (0, l.jsx)("div", {
              className: (0, I.W)(j().restrictions, n),
              children: a,
            }),
          ],
        });
      };
      var w = a(45656);
      let D = (e) => {
        var t, a, n;
        let { seed: i, title: r, isStation: o } = e,
          { vibe: l } = (0, P.oR)(),
          { applySetting: s } = (0, P.Qh)({
            seeds:
              null !==
                (n =
                  null === (t = l.meta) || void 0 === t ? void 0 : t.seeds) &&
              void 0 !== n
                ? n
                : [],
            pageIdForFrom: P.Rh.HOME,
            blockIdForFrom: P.BE.RUP_MAIN_RADIO,
          }),
          { formatMessage: u } = (0, d.Z)(),
          m = !!(null === (a = l.meta) || void 0 === a
            ? void 0
            : a.seeds.includes(i)),
          g = l.applyingSetting === i,
          p = (0, c.useMemo)(
            () =>
              m
                ? "".concat(u({ id: "vibe-actions.remove" }), " ").concat(r)
                : "".concat(u({ id: "vibe-actions.apply" }), " ").concat(r),
            [m, r, u],
          ),
          f = (0, c.useCallback)(async () => {
            l.setApplyingSetting(i), await s(i, o), l.setApplyingSetting();
          }, [s, o, i, l]);
        return {
          isApplying: g,
          isSelected: m,
          ariaLabel: p,
          ariaPressed: m,
          onClickHandler: f,
        };
      };
      var G = a(99798),
        O = a.n(G);
      let V = (0, s.Pi)((e) => {
        let { item: t } = e,
          { vibe: a } = (0, P.oR)(),
          n = (0, c.useRef)(null),
          {
            isApplying: i,
            isSelected: r,
            ariaPressed: o,
            onClickHandler: s,
          } = D({ seed: t.seed, title: t.title, isStation: !0 }),
          u = (0, c.useCallback)(
            (e) => {
              a.isLoading ||
                (n.current && (0, g.m)(e, O().ripple, n.current), s());
            },
            [s, a.isLoading],
          );
        return (0, l.jsxs)(p.z, {
          radius: "xxxl",
          className: (0, I.W)(O().button, O().textButton, {
            [O().button_selected]: r,
            [O().button_applying]: i,
            [O().specialButton]: t.specialContext,
          }),
          onClick: u,
          "aria-disabled": a.isLoading,
          "aria-pressed": o,
          withRipple: !1,
          children: [
            t.specialContext &&
              (0, l.jsx)(w.Image, {
                className: O().specialImage,
                src: t.specialContextImage,
                size: 100,
                fit: "cover",
                withAvatarReplace: !0,
              }),
            (0, l.jsx)(E.Caption, {
              variant: "span",
              type: "controls",
              size: "m",
              weight: "medium",
              className: O().title,
              children: t.title,
            }),
            (0, l.jsx)("div", { className: O().rippleContainer, ref: n }),
          ],
        });
      });
      ((r = o || (o = {})).DIVERSITY = "diversity"),
        (r.MOOD_ENERGY = "moodEnergy"),
        (r.LANGUAGE = "language");
      let M = (0, s.Pi)((e) => {
        let { type: t, restrictionValue: a } = e,
          { vibe: n } = (0, P.oR)(),
          i = (0, c.useRef)(null),
          {
            isApplying: r,
            isSelected: s,
            ariaPressed: u,
            onClickHandler: d,
          } = D({ seed: a.seed, title: a.title }),
          m = (0, c.useCallback)(
            (e) => {
              n.isLoading ||
                (i.current && (0, g.m)(e, O().ripple, i.current), d());
            },
            [d, n.isLoading],
          ),
          f = (0, c.useMemo)(
            () =>
              (0, l.jsx)(E.Caption, {
                variant: "span",
                type: "controls",
                size: "m",
                weight: "medium",
                className: O().title,
                children: a.title,
              }),
            [a.title],
          );
        switch (t) {
          case o.DIVERSITY:
            return (0, l.jsxs)(p.z, {
              className: (0, I.W)(O().button, O().diversityButton, {
                [O().button_selected]: s,
                [O().button_applying]: r,
              }),
              radius: "xl",
              "aria-disabled": n.isLoading,
              "aria-pressed": u,
              onClick: m,
              withRipple: !1,
              children: [
                (0, l.jsx)(w.Image, {
                  "aria-hidden": !0,
                  src: a.imageUrl,
                  fit: "contain",
                  width: 40,
                  height: 40,
                  withAvatarReplace: !0,
                }),
                f,
                (0, l.jsx)("div", { className: O().rippleContainer, ref: i }),
              ],
            });
          case o.MOOD_ENERGY:
            return (0, l.jsxs)("div", {
              className: O().moodEnergy,
              children: [
                (0, l.jsx)(p.z, {
                  variant: "text",
                  className: (0, I.W)(O().button, O().moodEnergyButton, {
                    [O().button_selected]: s,
                    [O().button_applying]: r,
                  }),
                  radius: "round",
                  onClick: m,
                  withRipple: !1,
                  "aria-disabled": n.isLoading,
                  "aria-pressed": u,
                  "aria-label": a.title,
                  children: (0, l.jsx)(w.Image, {
                    src: a.imageUrl,
                    fit: "contain",
                    width: 52,
                    height: 52,
                    "aria-hidden": !0,
                    withAvatarReplace: !0,
                  }),
                }),
                (0, l.jsx)("span", { "aria-hidden": !0, children: f }),
              ],
            });
          case o.LANGUAGE:
            return (0, l.jsxs)(p.z, {
              radius: "xxxl",
              className: (0, I.W)(O().button, O().textButton, {
                [O().button_selected]: s,
                [O().button_applying]: r,
              }),
              onClick: m,
              withRipple: !1,
              "aria-disabled": n.isLoading,
              "aria-pressed": u,
              children: [
                f,
                (0, l.jsx)("div", { className: O().rippleContainer, ref: i }),
              ],
            });
          default:
            return null;
        }
      });
      var B = a(87004),
        U = a.n(B);
      let F = {
          duration: 300,
          initial: { transform: "translateX(5%)", opacity: 0 },
          open: { transform: "translateX(0)", opacity: 1 },
          close: { transform: "translateX(5%)", opacity: 0 },
        },
        W = (0, s.Pi)(() => {
          var e, t, a, n;
          let { formatMessage: i } = (0, d.Z)(),
            { vibe: r, vibeSettings: o, settings: s } = (0, P.oR)(),
            { pageId: u } = (0, P.lV)(),
            { blockIdForFrom: v } = (0, P.qY)(),
            h = (0, c.useRef)(null),
            b = (0, c.useRef)(null),
            { resetSettings: y } = (0, P.Qh)({
              seeds:
                null !==
                  (n =
                    null === (e = r.meta) || void 0 === e ? void 0 : e.seeds) &&
                void 0 !== n
                  ? n
                  : [],
              pageIdForFrom: u,
              blockIdForFrom: v,
            }),
            { contentRef: _ } = (0, P.$Y)(),
            { contentHeight: I } = L(0),
            [A, T] = (0, c.useState)(!1);
          o.loadingState === P.Gu.IDLE && (0, c.use)(o.getData());
          let j = (0, c.useCallback)(() => {
              T(!1);
            }, [T]),
            w = s.layout === P.t8.Mobile,
            D = (0, c.useMemo)(
              () =>
                w
                  ? { height: "90vh" }
                  : _
                    ? {
                        insetInlineEnd: 20,
                        insetBlockStart: _.offsetTop + 7,
                        height: I - 16,
                      }
                    : {},
              [I, _, w],
            );
          (0, c.useEffect)(
            () => () => {
              o.reset();
            },
            [o],
          );
          let G = !!(r.isLoading || r.isMyVibe),
            O = (0, c.useCallback)(
              (e) => {
                if (!r.isLoading) {
                  var t;
                  h.current && (0, g.m)(e, U().ripple, h.current),
                    y(),
                    null === (t = b.current) || void 0 === t || t.focus();
                }
              },
              [y, r.isLoading],
            ),
            B = (0, c.useMemo)(() => {
              var e, t;
              if (k(null === (e = r.meta) || void 0 === e ? void 0 : e.seeds))
                return (
                  null === (t = r.meta) || void 0 === t ? void 0 : t.context
                )
                  ? (0, l.jsx)(p.z, {
                      className: U().toggleSettingsButton,
                      size: "m",
                      radius: "round",
                      icon: (0, l.jsx)(f.J, { variant: "filter", size: "xs" }),
                      "aria-label": i({
                        id: "vibe-actions.aria-label-settings",
                      }),
                      ...(0, N.BA)(N.bG.vibeSettings.VIBE_SETTINGS_BUTTON),
                    })
                  : (0, l.jsx)(p.z, {
                      className: U().toggleSettingsButton,
                      size: "default",
                      radius: "xxxl",
                      icon: (0, l.jsx)(f.J, { variant: "filter", size: "xxs" }),
                      "aria-label": i({
                        id: "vibe-actions.aria-label-settings",
                      }),
                      ...(0, N.BA)(N.bG.vibeSettings.VIBE_SETTINGS_BUTTON),
                      children: (0, l.jsx)(E.Caption, {
                        variant: "span",
                        type: "controls",
                        size: "m",
                        weight: "medium",
                        children: (0, l.jsx)(m.Z, {
                          id: "interface-actions.configure-my-vibe",
                        }),
                      }),
                    });
            }, [
              i,
              null === (t = r.meta) || void 0 === t ? void 0 : t.context,
              null === (a = r.meta) || void 0 === a ? void 0 : a.seeds,
            ]);
          return (0, l.jsxs)(x, {
            placement: "bottom",
            isMobile: w,
            strategy: "fixed",
            transform: !1,
            positionElement: _,
            disableFloatingStyles: !w,
            open: A,
            onOpenChange: T,
            style: D,
            overlayClassName: U().overlay,
            transition: F,
            children: [
              B,
              (0, l.jsx)(S, {
                className: U().popover,
                children: (0, l.jsxs)("div", {
                  className: U().root,
                  children: [
                    (0, l.jsxs)("div", {
                      className: U().header,
                      children: [
                        (0, l.jsx)(E.Heading, {
                          variant: "h3",
                          size: "s",
                          weight: "bold",
                          children: (0, l.jsx)(m.Z, {
                            id: "interface-actions.my-vibe-settings",
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className: U().actions,
                          children: [
                            (0, l.jsx)(C.u, {
                              offsetOptions: 4,
                              placement: "left",
                              text: i({
                                id: "interface-actions.reset-my-vibe-settings",
                              }),
                              children: (0, l.jsx)(p.z, {
                                variant: "outline",
                                radius: "round",
                                size: "xxxs",
                                icon: (0, l.jsx)(f.J, {
                                  variant: "reset",
                                  size: "xxxs",
                                }),
                                onClick: O,
                                disabled: !!r.isMyVibe,
                                "aria-disabled": G,
                                "aria-label": i({
                                  id: "interface-actions.reset-my-vibe-settings",
                                }),
                                ref: h,
                              }),
                            }),
                            (0, l.jsx)(p.z, {
                              radius: "round",
                              color: "secondary",
                              size: "xxs",
                              icon: (0, l.jsx)(f.J, {
                                variant: "close",
                                size: "xxs",
                              }),
                              onClick: j,
                              "aria-label": i({
                                id: "interface-actions.close-my-vibe-settings",
                              }),
                              ref: b,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: U().settings,
                      children: [
                        o.contextItems.length > 0 &&
                          (0, l.jsx)(R, {
                            title: i({
                              id: "interface-actions.my-vibe-context-settings",
                            }),
                            restrictionsClassName: U().contextItems,
                            children: o.contextItems.map((e) =>
                              (0, l.jsx)(V, { item: e }, e.seed),
                            ),
                          }),
                        o.diversity &&
                          (0, l.jsx)(R, {
                            title: o.diversity.title,
                            restrictionsClassName: U().diversity,
                            children: o.diversity.values.map((e) => {
                              var t;
                              return (0, l.jsx)(
                                M,
                                {
                                  type:
                                    null === (t = o.diversity) || void 0 === t
                                      ? void 0
                                      : t.type,
                                  restrictionValue: e,
                                },
                                e.value,
                              );
                            }),
                          }),
                        o.moodEnergy &&
                          (0, l.jsx)(R, {
                            title: o.moodEnergy.title,
                            restrictionsClassName: U().moodEnergy,
                            children: o.moodEnergy.values.map((e) => {
                              var t;
                              return (0, l.jsx)(
                                M,
                                {
                                  type:
                                    null === (t = o.moodEnergy) || void 0 === t
                                      ? void 0
                                      : t.type,
                                  restrictionValue: e,
                                },
                                e.value,
                              );
                            }),
                          }),
                        o.language &&
                          (0, l.jsx)(R, {
                            title: o.language.title,
                            restrictionsClassName: U().contextItems,
                            children: o.language.values.map((e) => {
                              var t;
                              return (0, l.jsx)(
                                M,
                                {
                                  type:
                                    null === (t = o.language) || void 0 === t
                                      ? void 0
                                      : t.type,
                                  restrictionValue: e,
                                },
                                e.value,
                              );
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        });
      var H = a(96555),
        z = a(96431);
      let q = (e) => {
          let { type: t, tag: a } = e.id;
          return {
            title: e.name,
            seed: "".concat(t, ":").concat(a),
            specialContext: e.specialContext,
            specialContextImage: e.specialContextImage,
          };
        },
        K = (e) => ({
          value: e.value,
          title: e.name,
          seed: e.serializedSeed,
          imageUrl: e.imageUrl,
        }),
        Y = (e, t) => {
          let a = [];
          return (
            t.possibleValues.forEach((e) => {
              e.unspecified || a.push(K(e));
            }),
            { type: e, title: t.name, values: (0, H.pj)(a) }
          );
        },
        Z = H.V5.model("ContextItem", {
          title: H.V5.string,
          seed: H.V5.string,
          specialContext: H.V5.boolean,
          specialContextImage: H.V5.optional(H.V5.string, ""),
        }),
        J = H.V5.model("RestrictonValue", {
          value: H.V5.string,
          title: H.V5.string,
          seed: H.V5.string,
          imageUrl: H.V5.maybe(H.V5.string),
        }),
        Q = H.V5.model("Restricton", {
          type: H.V5.enumeration(Object.values(o)),
          title: H.V5.string,
          values: H.V5.array(J),
        }),
        X = H.V5.model("VibeSettings", {
          loadingState: H.V5.enumeration(Object.values(P.Gu)),
          contextItems: H.V5.array(Z),
          diversity: H.V5.maybeNull(Q),
          moodEnergy: H.V5.maybeNull(Q),
          language: H.V5.maybeNull(Q),
        }).actions((e) => {
          let t = {
            getData: (0, H.ls)(function* (t) {
              let { rotorResource: a, logger: n } = (0, H.dU)(e);
              if (e.loadingState !== P.Gu.PENDING)
                try {
                  var i, r, l, s;
                  e.loadingState = P.Gu.PENDING;
                  let n = yield a.waveSettings(t);
                  (null == n
                    ? void 0
                    : null === (i = n.settingRestrictions) || void 0 === i
                      ? void 0
                      : i.diversity) &&
                    (e.diversity = Y(
                      o.DIVERSITY,
                      n.settingRestrictions.diversity,
                    )),
                    (null == n
                      ? void 0
                      : null === (r = n.settingRestrictions) || void 0 === r
                        ? void 0
                        : r.moodEnergy) &&
                      (e.moodEnergy = Y(
                        o.MOOD_ENERGY,
                        n.settingRestrictions.moodEnergy,
                      )),
                    (null == n
                      ? void 0
                      : null === (l = n.settingRestrictions) || void 0 === l
                        ? void 0
                        : l.language) &&
                      (e.language = Y(
                        o.LANGUAGE,
                        n.settingRestrictions.language,
                      ));
                  let c =
                    Array.isArray(null == n ? void 0 : n.blocks) &&
                    (null == n
                      ? void 0
                      : null === (s = n.blocks) || void 0 === s
                        ? void 0
                        : s.find(
                            (e) => (null == e ? void 0 : e.type) === "contexts",
                          ));
                  c &&
                    Array.isArray(c.items) &&
                    (e.contextItems = (0, H.pj)(c.items.map(q))),
                    e.loadingState !== P.Gu.IDLE &&
                      (e.loadingState = P.Gu.RESOLVE);
                } catch (t) {
                  !(t instanceof z.eY) &&
                    (t instanceof Error || "string" == typeof t) &&
                    n.error(t),
                    e.loadingState !== P.Gu.IDLE &&
                      (e.loadingState = P.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = P.Gu.IDLE),
                (e.contextItems = (0, H.pj)([])),
                (e.diversity = null),
                (e.moodEnergy = null),
                (e.language = null);
            },
          };
          return t;
        });
    },
    17620: function (e, t, a) {
      "use strict";
      a.d(t, {
        Xb: function () {
          return n.AlbumPage;
        },
        Lf: function () {
          return E;
        },
      });
      var n = a(56890);
      a(36957);
      var i = a(96555),
        r = a(96431),
        o = a(36019),
        l = a(6329),
        s = a(96911),
        c = a(82436),
        u = a(21774),
        d = a(84133);
      let m = (e) =>
          (null != e ? e : []).reduce((e, t) => ((e[t] = !0), e), {}),
        g = (e, t) => e.map((e) => "".concat(e, ":").concat(t));
      var p = a(95539);
      let f = (e) => ({ type: u.lf.TEXT, data: e || null }),
        v = (e, t, a, n, i) => ({
          type: (null == a ? void 0 : a.type) || o.Vc.TRACK,
          id: e,
          data: a || null,
          loadingState: t,
          position: n,
          isBest: i,
        }),
        h = (e) => "".concat(e, "-text"),
        b = (e) => String(e),
        y = (e, t, a, n) => {
          e.forEach((e) => {
            var i, r, o, l, s;
            if (null === (i = e.albums) || void 0 === i ? void 0 : i[0]) {
              let i = a.get(b(e.id));
              void 0 !== i &&
                (t[i] = v(
                  e.id,
                  d.Gu.RESOLVE,
                  (0, p.Vt)(e),
                  null === (o = e.albums[0]) || void 0 === o
                    ? void 0
                    : null === (r = o.trackPosition) || void 0 === r
                      ? void 0
                      : r.index,
                  n.has(String(e.id)),
                ));
              let c = a.get(h(e.id));
              void 0 !== c &&
                (t[c] = f(
                  null === (s = e.albums[0]) || void 0 === s
                    ? void 0
                    : null === (l = s.trackPosition) || void 0 === l
                      ? void 0
                      : l.volume,
                ));
            }
          });
        },
        _ = (e, t, a, n) => {
          let i = 0;
          e.volumes.forEach((r) => {
            e.volumes.length > 1 &&
              r[0] &&
              (t.push(f()), a.set(h(r[0].id), t.length - 1)),
              r.forEach((e) => {
                t.push(v(e.id, d.Gu.IDLE)),
                  a.set(b(e.id), t.length - 1),
                  n.set(b(e.id), i),
                  i++;
              });
          });
        },
        x = (e, t, a, n) => {
          e.forEach((e) => {
            let i = a.get(String(e));
            void 0 !== i && (t[i] = v(e, n));
          });
        },
        S = i.V5.model("LabelItem", { id: i.V5.number, name: i.V5.string }),
        C = i.V5.model("RelatedAlbumsPage", {
          loadingState: i.V5.enumeration(Object.values(d.Gu)),
          items: i.V5.array(s.ug),
        }),
        E = i.V5.model("AlbumPage", {
          meta: i.V5.maybeNull(s.ug),
          items: i.V5.array(l.JP),
          indexItems: i.V5.map(i.V5.number),
          trackIndexInContext: i.V5.map(i.V5.number),
          loadingState: i.V5.enumeration(Object.values(d.Gu)),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          deprecationTargetAlbumId: i.V5.maybeNull(i.V5.number),
          latestGenreAlbums: C,
          otherArtistAlbums: C,
          otherAlbumVersions: i.V5.array(s.ug),
          bests: i.V5.map(i.V5.boolean),
          labels: i.V5.maybeNull(i.V5.array(S)),
          contentWarning: i.V5.maybe(i.V5.enumeration(Object.values(o.F1))),
          description: i.V5.maybe(i.V5.string),
        })
          .views((e) => ({
            get isNonMusicType() {
              var t;
              if (null === (t = e.meta) || void 0 === t ? void 0 : t.type)
                return [o.VZ.PODCAST, o.VZ.AUDIOBOOK].includes(e.meta.type);
              return !1;
            },
            get isOtherArtistAlbumsAvailable() {
              var a, n, i, l;
              return !!(
                !this.isNonMusicType &&
                (null === (n = e.meta) || void 0 === n
                  ? void 0
                  : null === (a = n.artists) || void 0 === a
                    ? void 0
                    : a.length) === 1 &&
                !(null === (l = e.meta) || void 0 === l
                  ? void 0
                  : null === (i = l.artists[0]) || void 0 === i
                    ? void 0
                    : i.various)
              );
            },
            get isLatestGenreAlbumsAvailable() {
              var s;
              return !!(
                !this.isNonMusicType &&
                (null === (s = e.meta) || void 0 === s ? void 0 : s.genre)
              );
            },
            get isNotFound() {
              return (
                e.loadingState === d.Gu.REJECT &&
                e.errorStatusCode === r.CN.NOT_FOUND
              );
            },
            get isRejected() {
              return e.loadingState === d.Gu.REJECT;
            },
            get hasOtherAlbumVersions() {
              return !!(
                e.loadingState === d.Gu.IDLE ||
                e.loadingState === d.Gu.PENDING ||
                (e.otherAlbumVersions && e.otherAlbumVersions.length > 0)
              );
            },
            get hasLatestGenreAlbums() {
              return !!(
                e.latestGenreAlbums.loadingState === d.Gu.IDLE ||
                e.latestGenreAlbums.loadingState === d.Gu.PENDING ||
                (e.latestGenreAlbums.items &&
                  e.latestGenreAlbums.items.length > 0)
              );
            },
            get hasOtherArtistAlbums() {
              return !!(
                e.otherArtistAlbums.loadingState === d.Gu.IDLE ||
                e.otherArtistAlbums.loadingState === d.Gu.PENDING ||
                (e.otherArtistAlbums.items &&
                  e.otherArtistAlbums.items.length > 0)
              );
            },
            get isLoading() {
              return (
                e.loadingState === d.Gu.IDLE || e.loadingState === d.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === d.Gu.RESOLVE;
            },
            get isLatestGenreAlbumsLoading() {
              return (
                e.latestGenreAlbums.loadingState === d.Gu.IDLE ||
                e.latestGenreAlbums.loadingState === d.Gu.PENDING
              );
            },
            get isOtherArtistAlbumsLoading() {
              return (
                e.otherArtistAlbums.loadingState === d.Gu.IDLE ||
                e.otherArtistAlbums.loadingState === d.Gu.PENDING
              );
            },
            get contextMeta() {
              var c, m, g, p, f, v, h, b, y, _;
              return {
                id: e.meta.id,
                title: null === (c = e.meta) || void 0 === c ? void 0 : c.title,
                coverUri:
                  null === (m = e.meta) || void 0 === m ? void 0 : m.coverUri,
                type: null === (g = e.meta) || void 0 === g ? void 0 : g.type,
                year: null === (p = e.meta) || void 0 === p ? void 0 : p.year,
                version:
                  null === (f = e.meta) || void 0 === f ? void 0 : f.version,
                contentWarning:
                  null === (v = e.meta) || void 0 === v
                    ? void 0
                    : v.contentWarning,
                genre: null === (h = e.meta) || void 0 === h ? void 0 : h.genre,
                likesCount:
                  null === (b = e.meta) || void 0 === b ? void 0 : b.likesCount,
                averageColor:
                  null === (y = e.meta) || void 0 === y
                    ? void 0
                    : y.averageColor,
                available:
                  null === (_ = e.meta) || void 0 === _
                    ? void 0
                    : _.isAvailable,
              };
            },
            get lastEpisodes() {
              return e.items
                .filter((e) => e.type !== u.lf.TEXT)
                .slice(0, 5)
                .map((e) => e);
            },
            get lastEpisodesTrackIds() {
              return this.lastEpisodes.map((e) => e.id);
            },
          }))
          .actions((e) => {
            let t = {
              getLatestGenreAlbums: (0, i.ls)(function* (t) {
                let { topResource: a, logger: n } = (0, i.dU)(e);
                if (e.latestGenreAlbums.loadingState !== d.Gu.PENDING)
                  try {
                    e.latestGenreAlbums.loadingState = d.Gu.PENDING;
                    let n = yield a.getTopByGenre(t);
                    (e.latestGenreAlbums.items = (0, i.pj)(n.albums.map(s.ym))),
                      (e.latestGenreAlbums.loadingState = d.Gu.RESOLVE);
                  } catch (t) {
                    !(t instanceof r.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      n.error(t),
                      (e.latestGenreAlbums.loadingState = d.Gu.REJECT);
                  }
              }),
              getOtherArtistAlbums: (0, i.ls)(function* (t, a) {
                let { artistsResource: n, logger: o } = (0, i.dU)(e);
                if (e.otherArtistAlbums.loadingState !== d.Gu.PENDING)
                  try {
                    if (!t.artistId) {
                      e.otherArtistAlbums.loadingState = d.Gu.REJECT;
                      return;
                    }
                    e.otherArtistAlbums.loadingState = d.Gu.PENDING;
                    let r = yield n.getSafeDirectAlbums({
                      ...t,
                      artistId: t.artistId,
                    });
                    (e.otherArtistAlbums.items = (0, i.pj)(
                      r.albums
                        .filter((e) => String(e.id) !== String(a))
                        .map(s.ym),
                    )),
                      (e.otherArtistAlbums.loadingState = d.Gu.RESOLVE);
                  } catch (t) {
                    !(t instanceof r.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      o.error(t),
                      (e.otherArtistAlbums.loadingState = d.Gu.REJECT);
                  }
              }),
              getTracks: (0, i.ls)(function* (t) {
                let { trackIds: a } = t,
                  { tracksResource: n, logger: o } = (0, i.dU)(e);
                try {
                  var l;
                  if (!(null === (l = e.meta) || void 0 === l ? void 0 : l.id))
                    return;
                  x(a, e.items, e.indexItems, d.Gu.PENDING);
                  let t = yield n.getTracksMeta({
                    trackIds: g(a, e.meta.id),
                    withProgress: !0,
                  });
                  y(t, e.items, e.indexItems, e.bests);
                } catch (t) {
                  !(t instanceof r.eY) &&
                    (t instanceof Error || "string" == typeof t) &&
                    o.error(t),
                    x(a, e.items, e.indexItems, d.Gu.REJECT);
                }
              }),
              getData: (0, i.ls)(function* (a) {
                let { albumId: n, resumeStream: l } = a,
                  { albumResource: u, logger: g } = (0, i.dU)(e),
                  { experiments: p, disclaimer: f } = (0, i.yj)(e),
                  v = p.checkExperiment(d.pe.WebNextAlbumDisableVersions, "on"),
                  h = p.checkExperiment(d.pe.WebNextAlbumDisableTracks, "on"),
                  b = p.checkExperiment(
                    d.pe.WebNextAlbumDisableLatestGenreAlbums,
                    "on",
                  ),
                  y = p.checkExperiment(
                    d.pe.WebNextAlbumDisableOtherArtistAlbums,
                    "on",
                  ),
                  x = p.checkExperiment(d.pe.WebNextLegalRejectAlbum, "on");
                if (e.loadingState !== d.Gu.PENDING)
                  try {
                    var S, C, E, N;
                    let a, g;
                    e.loadingState = d.Gu.PENDING;
                    let p = yield u.getAlbumWithTracksIds({
                      albumId: n,
                      resumeStream: l,
                    });
                    if ((null == p ? void 0 : p.error) === "not-found") {
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                        (e.loadingState = d.Gu.REJECT),
                        (e.otherArtistAlbums.loadingState = d.Gu.REJECT),
                        (e.latestGenreAlbums.loadingState = d.Gu.REJECT);
                      return;
                    }
                    if (
                      null === (S = p.deprecation) || void 0 === S
                        ? void 0
                        : S.targetAlbumId
                    ) {
                      (e.deprecationTargetAlbumId =
                        p.deprecation.targetAlbumId),
                        (e.loadingState = d.Gu.RESOLVE);
                      return;
                    }
                    let P = (
                      null !== (C = p.disclaimers) && void 0 !== C ? C : []
                    ).includes(o.em.MODAL);
                    P && x && (yield f.getAlbumDisclaimer({ albumId: n }));
                    let { sonataState: k } = (0, i.yj)(e);
                    if (
                      (k.setUnloadedEntitiesData(
                        p.volumes.flat().map((e) => (0, c.RN)(e.id)),
                      ),
                      (e.meta = (0, s.ym)(p)),
                      (e.bests = (0, i.pj)(m(p.bests))),
                      (e.labels = (0, i.pj)(p.labels)),
                      (e.contentWarning = (0, i.pj)(p.contentWarning)),
                      (e.description = (0, i.pj)(p.description)),
                      !v &&
                        p.duplicates &&
                        p.duplicates.length > 0 &&
                        (e.otherAlbumVersions = (0, i.pj)(
                          null === (E = p.duplicates) || void 0 === E
                            ? void 0
                            : E.map(s.ym),
                        )),
                      !h)
                    ) {
                      _(p, e.items, e.indexItems, e.trackIndexInContext);
                      let a = [];
                      for (let t = 0; t < 10; t++) {
                        let n = e.items[t];
                        (null == n ? void 0 : n.type) === o.Vc.TRACK &&
                          a.push(String(n.id));
                      }
                      yield t.getTracks({ trackIds: a });
                    }
                    !b && e.isLatestGenreAlbumsAvailable
                      ? (a = t.getLatestGenreAlbums({
                          category: o.mk.RECENT_ALBUMS,
                          period: o.pH.WEEK,
                          pageSize: 8,
                          genre: p.genre,
                        }))
                      : (e.latestGenreAlbums.loadingState = d.Gu.RESOLVE),
                      !y && e.isOtherArtistAlbumsAvailable
                        ? (g = t.getOtherArtistAlbums(
                            {
                              artistId: String(
                                null === (N = p.artists[0]) || void 0 === N
                                  ? void 0
                                  : N.id,
                              ),
                              limit: 8,
                            },
                            n,
                          ))
                        : (e.otherArtistAlbums.loadingState = d.Gu.RESOLVE),
                      yield Promise.allSettled([a, g]),
                      e.loadingState !== d.Gu.IDLE &&
                        (e.loadingState = d.Gu.RESOLVE);
                  } catch (t) {
                    !(t instanceof r.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      g.error(t),
                      t instanceof r.du &&
                        (t.statusCode === r.CN.NOT_FOUND ||
                          t.statusCode === r.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = r.CN.NOT_FOUND),
                      e.loadingState !== d.Gu.IDLE &&
                        ((e.loadingState = d.Gu.REJECT),
                        (e.otherArtistAlbums.loadingState = d.Gu.REJECT),
                        (e.latestGenreAlbums.loadingState = d.Gu.REJECT));
                  }
              }),
              loadLastEpisodes() {
                t.getTracks({ trackIds: e.lastEpisodesTrackIds });
              },
              reset() {
                let { sonataState: t } = (0, i.yj)(e);
                t.resetUnloadedEntitiesData(),
                  (e.meta = null),
                  (e.errorStatusCode = null),
                  (e.deprecationTargetAlbumId = null),
                  (e.items = (0, i.pj)([])),
                  e.indexItems.clear(),
                  e.trackIndexInContext.clear(),
                  (e.loadingState = d.Gu.IDLE),
                  (e.latestGenreAlbums.loadingState = d.Gu.IDLE),
                  (e.latestGenreAlbums.items = (0, i.pj)([])),
                  (e.otherArtistAlbums.loadingState = d.Gu.IDLE),
                  (e.otherArtistAlbums.items = (0, i.pj)([])),
                  (e.otherAlbumVersions = (0, i.pj)([])),
                  (e.description = ""),
                  (e.labels = null);
              },
            };
            return t;
          });
    },
    36957: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          AlbumNotFoundPage: function () {
            return s;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(99616),
        o = a(2365),
        l = a(84133);
      let s = (0, i.Pi)(() => {
        let { album: e } = (0, l.oR)();
        return (
          (0, r.useEffect)(
            () => () => {
              e.reset();
            },
            [e],
          ),
          (0, n.jsx)(o.T, {})
        );
      });
    },
    56890: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          AlbumPage: function () {
            return G;
          },
        });
      var n,
        i,
        r = a(8759),
        o = a(33423),
        l = a(11769),
        s = a(99616),
        c = a(65244),
        u = a(27287),
        d = a(70579),
        m = a(96911),
        g = a(13236),
        p = a(7042),
        f = a(84133),
        v = a(44285),
        h = a(35338),
        b = a(2814),
        y = a(71440),
        _ = a(36019),
        x = a(1918),
        S = a(53433),
        C = a(48157),
        E = a(95539),
        N = a(21774),
        P = a(44752),
        k = a.n(P);
      let L = (0, o.Pi)((e) => {
        var t;
        let { albumHeaderRef: a, refCallback: n } = e,
          i = (0, s.useRef)(null),
          o = (0, f.x5)({ pageId: f.Rh.ALBUM, blockId: f.aU.ALBUM }),
          l = (0, s.useRef)(0),
          { notify: u } = (0, f.d$)(),
          { album: d, experiments: g, sonataState: p } = (0, f.oR)(),
          { formatMessage: P } = (0, c.Z)(),
          [L, I] = (0, s.useState)(!1);
        (0, s.useEffect)(
          () => () => {
            l.current = 0;
          },
          [d],
        ),
          (0, s.useEffect)(() => {
            (d.otherArtistAlbums.loadingState === f.Gu.REJECT ||
              d.latestGenreAlbums.loadingState === f.Gu.REJECT) &&
              l &&
              !(l.current > 0) &&
              (u(
                (0, r.jsx)(v.Q, {
                  error: P({
                    id: "album-errors.error-during-loading-similar-albums",
                  }),
                }),
                { containerId: f.W$.ERROR },
              ),
              l.current++);
          }, [
            d.isNotFound,
            d.latestGenreAlbums.loadingState,
            d.otherArtistAlbums.loadingState,
            P,
            u,
          ]),
          (0, s.useEffect)(() => {
            d.isLoaded && d.hasOtherAlbumVersions && I(!0);
          }, [d.hasOtherAlbumVersions, d.isLoaded]);
        let A = (0, s.useCallback)(() => {
            let e = i.current;
            null == e || e.scrollIntoView({ behavior: "smooth" });
          }, []),
          T = (0, s.useMemo)(
            () =>
              d.isLoading || !d.meta || d.isRejected
                ? (0, r.jsx)(C.KC, { className: k().header })
                : (0, r.jsx)(C.hx, {
                    album: d.meta,
                    className: k().header,
                    ref: a,
                    onVersionClick: L ? A : void 0,
                  }),
            [d.isLoading, d.isRejected, d.meta, a, A, L],
          ),
          j = (0, s.useMemo)(
            () => ({
              Header: () => T,
              Footer: () =>
                (0, r.jsxs)("div", {
                  className: k().footerContainer,
                  children: [
                    (0, r.jsxs)("div", {
                      className: k().carouselBlocks,
                      children: [
                        d.hasOtherAlbumVersions &&
                          (0, r.jsx)(m.wk, {
                            className: k().carouselContainer,
                            headerClassName: (0, h.W)(
                              k().carouselBlock,
                              k().carouselBlockHeader,
                            ),
                            containerClassName: k().carouselBlock,
                            isLoading: d.isLoading,
                            title: P({
                              id: "entity-names.other-album-versions",
                            }),
                            albums: d.otherAlbumVersions,
                            ...(0, S.BA)(S.Br.album.OTHER_VERSIONS_CAROUSEL),
                            headingRef: i,
                          }),
                        d.hasLatestGenreAlbums &&
                          (0, r.jsx)(m.wk, {
                            className: k().carouselContainer,
                            headerClassName: (0, h.W)(
                              k().carouselBlock,
                              k().carouselBlockHeader,
                            ),
                            containerClassName: k().carouselBlock,
                            isLoading: d.isLatestGenreAlbumsLoading,
                            title: P({
                              id: "entity-names.new-albums-in-genre",
                            }),
                            albums: d.latestGenreAlbums.items,
                            ...(0, S.BA)(S.Br.album.GENRE_ALBUMS_CAROUSEL),
                          }),
                        d.hasOtherArtistAlbums &&
                          (0, r.jsx)(m.wk, {
                            className: k().carouselContainer,
                            headerClassName: (0, h.W)(
                              k().carouselBlock,
                              k().carouselBlockHeader,
                            ),
                            containerClassName: k().carouselBlock,
                            isLoading: d.isOtherArtistAlbumsLoading,
                            title: P({
                              id: "entity-names.other-albums-of-artist",
                            }),
                            albums: d.otherArtistAlbums.items,
                            ...(0, S.BA)(
                              S.Br.album.OTHER_ARTIST_ALBUMS_CAROUSEL,
                            ),
                          }),
                      ],
                    }),
                    (0, r.jsx)(v.$_, { className: k().footer }),
                  ],
                }),
            }),
            [
              T,
              d.hasOtherAlbumVersions,
              d.isLoading,
              d.otherAlbumVersions,
              d.hasLatestGenreAlbums,
              d.isLatestGenreAlbumsLoading,
              d.latestGenreAlbums.items,
              d.hasOtherArtistAlbums,
              d.isOtherArtistAlbumsLoading,
              d.otherArtistAlbums.items,
              P,
            ],
          ),
          R = (0, s.useCallback)(
            (e) => {
              let t = [];
              for (let a = e.startIndex; a <= e.endIndex; a++) {
                let e = d.items[a];
                (null == e ? void 0 : e.type) === _.Vc.TRACK &&
                  (null == e ? void 0 : e.loadingState) === f.Gu.IDLE &&
                  t.push(e.id);
              }
              t.length && d.getTracks({ trackIds: t });
            },
            [d],
          ),
          w = g.checkExperiment(f.pe.WebNextAlbumDisableTracks, "on"),
          D = w ? 0 : d.items.length || 10;
        return (0, r.jsx)(v.Wv, {
          className: (0, h.W)(k().root, k().important),
          listClassName: k().content,
          context: {
            listAriaLabel: P(
              { id: "entity-names.albums-tracks-list" },
              {
                albumName:
                  (null === (t = d.meta) || void 0 === t ? void 0 : t.title) ||
                  "",
              },
            ),
          },
          customComponents: j,
          totalCount: D,
          itemContentCallback: (e) => {
            var t, a;
            let n =
              null == d
                ? void 0
                : null === (t = d.items) || void 0 === t
                  ? void 0
                  : t[e];
            if (!n || !d.meta || d.isRejected)
              return (0, r.jsx)(v.DX, {
                className: k().shimmerItem,
                variant: f.Lx.ALBUM,
              });
            if (!(null == n ? void 0 : n.data))
              switch (null == n ? void 0 : n.type) {
                case N.lf.TEXT:
                  return (0, r.jsx)(v.AH, { className: k().shimmerItem });
                case _.Vc.TRACK:
                  return (0, r.jsx)(v.DX, {
                    className: k().shimmerItem,
                    variant: f.Lx.ALBUM,
                  });
              }
            return (null == n ? void 0 : n.type) === N.lf.TEXT
              ? (0, r.jsx)("div", {
                  className: (0, h.W)(k().shimmerItem, k().textItem),
                  children: (0, r.jsx)(x.Caption, {
                    variant: "span",
                    type: "entity",
                    size: "m",
                    weight: "medium",
                    className: k().text,
                    children: (0, r.jsx)(b.Z, {
                      id: "entity-names.disk-number",
                      values: { number: n.data },
                    }),
                  }),
                })
              : n.data
                ? (0, r.jsx)(E.RJ, {
                    withLightning: n.isBest,
                    track: n.data,
                    position: n.position,
                    albumArtists:
                      null == d
                        ? void 0
                        : null === (a = d.meta) || void 0 === a
                          ? void 0
                          : a.artists,
                    playContextParams: {
                      contextData: {
                        type: y.Ak.Album,
                        meta: d.contextMeta,
                        from: o,
                      },
                      queueParams: {
                        index: d.trackIndexInContext.get(String(n.id)),
                      },
                      loadContextMeta: !0,
                      entitiesData: p.unloadedEntitiesDataFromModels,
                    },
                  })
                : void 0;
          },
          onGetDataByRange: R,
          debounceDurationInMs: 300,
          initialItemCount: D,
          handleRef: n,
          withHeader: !0,
        });
      });
      var I = a(26265),
        A = a(6329);
      ((n = i || (i = {})).ABOUT = "about"), (n.TRACKS = "track-list");
      let T = [i.ABOUT, i.TRACKS];
      var j = a(28280),
        R = a.n(j);
      let w = "activeTab",
        D = (0, o.Pi)((e) => {
          var t;
          let { podcastHeaderRef: a, refCallback: n } = e,
            o = (0, f.x5)({ pageId: f.Rh.PODCAST, blockId: f.aU.PODCAST }),
            l = (0, s.useRef)(0),
            u = (0, s.useRef)(null),
            [d, m] = (0, s.useState)(i.ABOUT),
            g = (0, f.m5)(),
            { album: p, experiments: S, sonataState: P } = (0, f.oR)(),
            L = S.checkExperiment(f.pe.WebNextPodcastPage, "on"),
            j = (0, I.useTabsState)(0),
            { formatMessage: D } = (0, c.Z)();
          (0, s.useEffect)(
            () => () => {
              l.current = 0;
            },
            [p],
          ),
            (0, s.useEffect)(() => {
              var e, t, a;
              if (!L) return;
              (null === (e = window.location) || void 0 === e
                ? void 0
                : e.href) && (u.current = new URL(window.location.href));
              let n =
                  null === (t = u.current) || void 0 === t
                    ? void 0
                    : t.searchParams,
                r = null == n ? void 0 : n.get(w);
              T.includes(r)
                ? (m(r),
                  null === (a = j.onTabChange) ||
                    void 0 === a ||
                    a.call(j, T.indexOf(r)))
                : (null == n || n.set(w, i.ABOUT), g(String(u.current)));
            }, [j, g, L]);
          let G = (0, s.useMemo)(
              () => ({
                about: D({ id: "podcast.tab-about" }),
                "track-list": D(
                  { id: "podcast.tab-tracks" },
                  { value: p.items.length },
                ),
              }),
              [D, p.items.length],
            ),
            O = (0, s.useMemo)(
              () => (e) => {
                var t, a, n;
                if (!j.onTabChange || e === j.value) return;
                j.onTabChange(e);
                let r = null !== (n = T[e]) && void 0 !== n ? n : i.ABOUT;
                m(r),
                  null === (a = u.current) ||
                    void 0 === a ||
                    null === (t = a.searchParams) ||
                    void 0 === t ||
                    t.set(w, r),
                  g(String(u.current));
              },
              [j, g],
            ),
            V = (e, t) =>
              (0, r.jsxs)("div", {
                className: R().infoBlock,
                children: [
                  (0, r.jsx)(x.Caption, {
                    variant: "div",
                    type: "entity",
                    size: "m",
                    className: R().infoTitle,
                    children: e,
                  }),
                  (0, r.jsx)(x.Caption, {
                    variant: "div",
                    type: "entity",
                    size: "m",
                    children: t,
                  }),
                ],
              }),
            M = (0, s.useMemo)(() => {
              var e, t, a, n, i;
              let o =
                  Number(
                    null === (e = p.labels) || void 0 === e ? void 0 : e.length,
                  ) > 1
                    ? D({ id: "podcast.publishers-title" })
                    : D({ id: "podcast.publisher-title" }),
                l =
                  null === (t = p.labels) || void 0 === t
                    ? void 0
                    : t.map((e) => e.name).join(", "),
                s = D({ id: "podcast.age-limit" }),
                c = p.contentWarning === _.F1.EXPLICIT;
              return (0, r.jsxs)("div", {
                className: R().contentAbout,
                children: [
                  !!(null === (a = p.description) || void 0 === a
                    ? void 0
                    : a.length) &&
                    (0, r.jsx)(x.Caption, {
                      variant: "div",
                      type: "entity",
                      size: "m",
                      className: k().text,
                      children: (0, r.jsx)("span", {
                        dangerouslySetInnerHTML: { __html: p.description },
                      }),
                    }),
                  ((null === (n = p.labels) || void 0 === n
                    ? void 0
                    : n.length) ||
                    c) &&
                    (0, r.jsxs)("div", {
                      className: k().text,
                      children: [
                        !!(null === (i = p.labels) || void 0 === i
                          ? void 0
                          : i.length) && V("".concat(o, ":"), String(l)),
                        c && V("".concat(s, ":"), "18+"),
                      ],
                    }),
                ],
              });
            }, [D, p.contentWarning, p.labels, p.description]),
            B = (0, s.useMemo)(
              () =>
                p.isLoading || !p.meta || p.isRejected
                  ? (0, r.jsx)(C.KC, { className: k().header })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(C.hx, {
                          album: p.meta,
                          className: k().header,
                          ref: a,
                        }),
                        L &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(v.no, {
                                className: R().tabCarousel,
                                ...j,
                                onTabChange: O,
                                children: T.map((e, t) =>
                                  (0, r.jsx)(
                                    v.OK,
                                    {
                                      className: R().tab,
                                      title: G[e],
                                      value: t,
                                    },
                                    e,
                                  ),
                                ),
                              }),
                              d === i.ABOUT && M,
                            ],
                          }),
                      ],
                    }),
              [p.isLoading, p.isRejected, p.meta, M, L, a, j, G, O, d],
            );
          (0, s.useEffect)(() => {
            p.isLoaded && p.loadLastEpisodes();
          }, [p, p.isLoaded, p.loadLastEpisodes]);
          let U =
              S.checkExperiment(f.pe.WebNextPodcastPage, "on") &&
              d === i.ABOUT &&
              p.lastEpisodes.length > 0,
            F = (0, s.useMemo)(
              () => ({
                Header: () => B,
                Footer: () =>
                  (0, r.jsxs)("div", {
                    className: k().footerContainer,
                    children: [
                      U && (0, r.jsx)(A.QG, { className: R().lastEpisodes }),
                      (0, r.jsx)(v.$_, { className: k().footer }),
                    ],
                  }),
              }),
              [B, U],
            ),
            W = (0, s.useCallback)(
              (e) => {
                let t = [];
                for (let a = e.startIndex; a <= e.endIndex; a++) {
                  let e = p.items[a];
                  (null == e ? void 0 : e.type) === _.Vc.TRACK &&
                    (null == e ? void 0 : e.loadingState) === f.Gu.IDLE &&
                    t.push(e.id);
                }
                t.length && p.getTracks({ trackIds: t });
              },
              [p],
            ),
            H = S.checkExperiment(f.pe.WebNextAlbumDisableTracks, "on"),
            z = H || (L && d === i.ABOUT) ? 0 : p.items.length || 10,
            q = (0, s.useMemo)(() => {
              var e;
              return L && d === i.TRACKS
                ? {
                    listAriaLabel: D(
                      { id: "podcast.episodes-list" },
                      {
                        albumName:
                          (null === (e = p.meta) || void 0 === e
                            ? void 0
                            : e.title) || "",
                      },
                    ),
                  }
                : null;
            }, [
              d,
              null === (t = p.meta) || void 0 === t ? void 0 : t.title,
              D,
              L,
            ]);
          return (0, r.jsx)(v.Wv, {
            className: (0, h.W)(k().root, k().important),
            listClassName: (0, h.W)(k().content, R().content),
            context: q,
            customComponents: F,
            totalCount: z,
            itemContentCallback: (e) => {
              var t;
              let a =
                null == p
                  ? void 0
                  : null === (t = p.items) || void 0 === t
                    ? void 0
                    : t[e];
              if (!a || !p.meta || p.isRejected)
                return (0, r.jsx)(v.DX, {
                  className: k().shimmerItem,
                  variant: f.Lx.ALBUM,
                });
              if (!(null == a ? void 0 : a.data))
                switch (null == a ? void 0 : a.type) {
                  case N.lf.TEXT:
                    return (0, r.jsx)(v.AH, { className: k().shimmerItem });
                  case _.Vc.TRACK:
                    return (0, r.jsx)(v.DX, {
                      className: k().shimmerItem,
                      variant: f.Lx.ALBUM,
                    });
                  default:
                    return (0, r.jsx)(v.DX, {
                      className: R().shimmerItem,
                      variant: f.Lx.PLAYLIST,
                    });
                }
              return (null == a ? void 0 : a.type) === N.lf.TEXT
                ? (0, r.jsx)("div", {
                    className: (0, h.W)(k().shimmerItem, k().textItem),
                    children: (0, r.jsx)(x.Caption, {
                      variant: "span",
                      type: "entity",
                      size: "m",
                      className: k().text,
                      children: (0, r.jsx)(b.Z, {
                        id: "entity-names.season-number",
                        values: { number: a.data },
                      }),
                    }),
                  })
                : a.data
                  ? (0, r.jsx)(E.N6, {
                      track: a.data,
                      playContextParams: {
                        contextData: {
                          type: y.Ak.Album,
                          meta: p.contextMeta,
                          from: o,
                        },
                        queueParams: {
                          index: p.trackIndexInContext.get(String(a.id)),
                        },
                        loadContextMeta: !1,
                        entitiesData: P.unloadedEntitiesDataFromModels,
                      },
                    })
                  : void 0;
            },
            onGetDataByRange: W,
            debounceDurationInMs: 300,
            initialItemCount: z,
            handleRef: n,
            withHeader: !0,
          });
        }),
        G = (0, o.Pi)((e) => {
          var t, a, n, i;
          let { albumId: o } = e,
            h = (0, s.useRef)(0),
            [b, y] = (0, g.zU)(),
            { notify: _ } = (0, f.d$)(),
            { album: x, disclaimer: S } = (0, f.oR)(),
            { formatMessage: C } = (0, c.Z)(),
            { ref: E, offsetY: N } = (0, u.e)(),
            P = (0, s.useMemo)(() => {
              var e;
              return (0, f.XG)(
                null === (e = x.meta) || void 0 === e ? void 0 : e.averageColor,
              );
            }, [
              null === (t = x.meta) || void 0 === t ? void 0 : t.averageColor,
            ]),
            [I, A] = (0, g.at)(P, N),
            { href: T } = (0, f.zB)(
              "/album/".concat(x.deprecationTargetAlbumId),
            ),
            j = (0, m.jV)({ album: x.meta, shouldHistoryBack: !0 });
          (0, s.useEffect)(() => {
            var e;
            (null === (e = x.meta) || void 0 === e
              ? void 0
              : e.isUnsafeLegal) && j();
          }, [
            null === (a = x.meta) || void 0 === a ? void 0 : a.isUnsafeLegal,
            j,
          ]),
            (0, s.useEffect)(
              () => () => {
                x.reset();
              },
              [x, o],
            ),
            o &&
              x.loadingState === f.Gu.IDLE &&
              (0, s.use)(x.getData({ albumId: Number(o), resumeStream: !1 })),
            x.deprecationTargetAlbumId && (0, l.redirect)(T);
          let R = (0, s.useMemo)(
            () => () => {
              if (
                !x.isNotFound &&
                (x.isRejected || (!x.meta && !x.isLoading))
              ) {
                var e;
                if (!h || h.current > 0) return;
                let t = (
                  null === (e = x.meta) || void 0 === e ? void 0 : e.isPodcast
                )
                  ? C({ id: "podcast-errors.error-during-loading-podcast" })
                  : C({ id: "album-errors.error-during-loading-album" });
                _((0, r.jsx)(v.Q, { error: t }), { containerId: f.W$.ERROR }),
                  h.current++;
              }
            },
            [x.isRejected, x.isNotFound, x.meta, x.isLoading, _, C],
          );
          R(),
            (0, f.NO)(x.loadingState === f.Gu.RESOLVE),
            x.isNotFound && (0, l.notFound)();
          let w = (0, s.useMemo)(() => {
            var e;
            return (
              null === (e = x.meta) || void 0 === e ? void 0 : e.isPodcast
            )
              ? (0, r.jsx)(D, { podcastHeaderRef: E, refCallback: y })
              : (0, r.jsx)(L, { albumHeaderRef: E, refCallback: y });
          }, [
            null === (n = x.meta) || void 0 === n ? void 0 : n.isPodcast,
            E,
            y,
          ]);
          return (
            null === (i = x.meta) || void 0 === i ? void 0 : i.isLegalRejected
          )
            ? S.isRejected
              ? (0, r.jsx)(d.D, {})
              : (0, r.jsx)(p.em, { disclaimer: S })
            : (0, r.jsx)(f.Lh, {
                pageId: f.Rh.ALBUM,
                children: (0, r.jsxs)(g.I7, {
                  scrollElement: b,
                  children: [
                    (0, r.jsx)(v.h4, { style: A }),
                    (0, r.jsx)("div", {
                      className: k().averageColorBackground,
                      style: I,
                    }),
                    w,
                  ],
                }),
              });
        });
    },
    53191: function (e, t, a) {
      "use strict";
      a.d(t, {
        pr: function () {
          return o.ArtistAlbumsPage;
        },
        MX: function () {
          return s.M;
        },
        aG: function () {
          return l.ArtistConcertsPage;
        },
        vQ: function () {
          return T.ArtistFamiliarPage;
        },
        xA: function () {
          return n.ArtistPage;
        },
        Od: function () {
          return A;
        },
        x3: function () {
          return r.ArtistSimilarPage;
        },
        hD: function () {
          return i.ArtistTracksPage;
        },
      });
      var n = a(91399),
        i = a(66016),
        r = a(41591),
        o = a(4144),
        l = a(66649),
        s = a(85564);
      a(64285);
      var c = a(96555),
        u = a(96431),
        d = a(36019),
        m = a(96911),
        g = a(81546),
        p = a(20210),
        f = a(95539),
        v = a(81446),
        h = a(55238),
        b = a(84133);
      let y = (e, t) =>
        (0, c.pj)({
          artist: (0, v.d)(e),
          lastMonthListeners: null == t ? void 0 : t.lastMonthListeners,
        });
      var _ = a(21774),
        x = a(58362);
      let S = c.V5.model("ArtistAlbumsPage", {
          loadingState: c.V5.enumeration(Object.values(b.Gu)),
          pager: c.V5.maybeNull(x.Vn),
          variant: c.V5.maybeNull(c.V5.enumeration(Object.values(s.M))),
          alreadyRequestedPages: c.V5.map(c.V5.number),
          pendingPages: c.V5.map(c.V5.number),
          requests: c.V5.maybeNull(c.V5.number),
          errorStatusCode: c.V5.maybeNull(c.V5.number),
          items: c.V5.array(c.V5.maybeNull(m.ug)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === b.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                n =
                  e.errorStatusCode === u.CN.NOT_FOUND ||
                  e.errorStatusCode === u.CN.BAD_REQUEST;
              return (e.loadingState === b.Gu.REJECT && n) || a;
            },
          }))
          .actions((e) => {
            let t = {
              setVariant: (t) => {
                e.variant = t;
              },
              getData: (0, c.ls)(function* (t) {
                let { artistId: a, page: n = 0, pageSize: i = 20, sort: r } = t,
                  { artistsResource: o, logger: l } = (0, c.dU)(e);
                if (
                  !(
                    (e.loadingState === b.Gu.PENDING &&
                      e.pendingPages.has("".concat(n))) ||
                    e.alreadyRequestedPages.has("".concat(n))
                  )
                ) {
                  "number" == typeof n &&
                    e.alreadyRequestedPages.set("".concat(n), n);
                  try {
                    var d;
                    let t;
                    (e.loadingState = b.Gu.PENDING),
                      e.pendingPages.set("".concat(n), n);
                    let l = {
                      artistId: a,
                      page: n,
                      pageSize: i,
                      sort: { sortBy: null == r ? void 0 : r.sortBy },
                    };
                    switch (e.variant) {
                      case s.M.COMPILATIONS:
                        t = yield o.getAlsoAlbums(l);
                        break;
                      case s.M.DISCOGRAPHY:
                        t = yield o.getDiscographyAlbums(l);
                        break;
                      default:
                        t = yield o.getDirectAlbums(l);
                    }
                    let u = { page: n, perPage: i, total: t.pager.total };
                    0 === e.items.length &&
                      (e.items = (0, c.pj)(
                        Array.from({ length: u.total }, () => null),
                      ));
                    let m = t.albums.map(_.N);
                    (0, b.AG)({
                      items: e.items,
                      mappedRawItems: m,
                      page: n,
                      pageSize: i,
                    }),
                      (e.pager = u),
                      (e.requests =
                        (null !== (d = e.requests) && void 0 !== d ? d : 0) +
                        1),
                      (e.loadingState = b.Gu.RESOLVE);
                  } catch (t) {
                    ("string" == typeof t || t instanceof Error) && l.error(t),
                      t instanceof u.du &&
                        (t.statusCode === u.CN.NOT_FOUND ||
                          t.statusCode === u.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = u.CN.NOT_FOUND),
                      e.loadingState !== b.Gu.IDLE &&
                        (e.loadingState = b.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(n));
                  }
                }
              }),
              reset() {
                (e.loadingState = b.Gu.IDLE),
                  e.pendingPages.clear(),
                  (e.pager = null),
                  (e.variant = null),
                  e.alreadyRequestedPages.clear(),
                  (e.errorStatusCode = null),
                  (e.items = (0, c.pj)([]));
              },
            };
            return t;
          }),
        C = c.V5.model("ArtistConcertsPage", {
          loadingState: c.V5.enumeration(Object.values(b.Gu)),
          errorStatusCode: c.V5.maybeNull(c.V5.number),
          concerts: c.V5.maybeNull(c.V5.array(h.Z)),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === b.Gu.IDLE || e.loadingState === b.Gu.PENDING
              );
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === b.Gu.RESOLVE &&
                  (null === (t = e.concerts) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                n =
                  e.errorStatusCode === u.CN.NOT_FOUND ||
                  e.errorStatusCode === u.CN.BAD_REQUEST;
              return (e.loadingState === b.Gu.REJECT && n) || a;
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, c.ls)(function* (t) {
                let { artistId: a } = t,
                  { artistsResource: n, logger: i } = (0, c.dU)(e);
                if (e.loadingState !== b.Gu.PENDING)
                  try {
                    e.loadingState = b.Gu.PENDING;
                    let { concerts: t } = yield n.getConcerts({ artistId: a });
                    (e.concerts = (0, c.pj)(t.map(h.zj))),
                      (e.loadingState = b.Gu.RESOLVE);
                  } catch (t) {
                    ("string" == typeof t || t instanceof Error) && i.error(t),
                      t instanceof u.du &&
                        (t.statusCode === u.CN.NOT_FOUND ||
                          t.statusCode === u.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = u.CN.NOT_FOUND),
                      e.loadingState !== b.Gu.IDLE &&
                        (e.loadingState = b.Gu.REJECT);
                  }
              }),
              reset() {
                (e.loadingState = b.Gu.IDLE),
                  (e.errorStatusCode = null),
                  (e.concerts = null);
              },
            };
            return t;
          }),
        E = (e) =>
          (0, c.pj)({
            ...(0, m.cO)({ album: e, artists: e.artists }),
            version: e.version,
          }),
        N = c.V5.model("ArtistFamiliarPage", {
          loadingState: c.V5.enumeration(Object.values(b.Gu)),
          errorStatusCode: c.V5.maybeNull(c.V5.number),
          vibeTracks: c.V5.maybeNull(c.V5.array(f.le)),
          collectionTracks: c.V5.maybeNull(c.V5.array(f.le)),
          collectionAlbums: c.V5.maybeNull(c.V5.array(m.ug)),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === b.Gu.IDLE || e.loadingState === b.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === b.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === b.Gu.REJECT;
            },
            get isNotFound() {
              let t =
                e.errorStatusCode === u.CN.NOT_FOUND ||
                e.errorStatusCode === u.CN.BAD_REQUEST;
              return e.loadingState === b.Gu.REJECT && t;
            },
            get hasCollectionEntities() {
              var t, a;
              return (
                (this.isLoaded &&
                  Number(
                    null === (t = e.collectionTracks) || void 0 === t
                      ? void 0
                      : t.length,
                  ) > 0) ||
                Number(
                  null === (a = e.collectionAlbums) || void 0 === a
                    ? void 0
                    : a.length,
                ) > 0
              );
            },
            get shouldShowTitleBlocks() {
              var n, i;
              if (this.isLoading) return !0;
              return (
                Number(
                  null === (n = e.collectionTracks) || void 0 === n
                    ? void 0
                    : n.length,
                ) > 0 &&
                Number(
                  null === (i = e.collectionAlbums) || void 0 === i
                    ? void 0
                    : i.length,
                ) > 0
              );
            },
            get hasVibeTracks() {
              var r;
              return (
                Number(
                  null === (r = e.vibeTracks) || void 0 === r
                    ? void 0
                    : r.length,
                ) > 0
              );
            },
            get collectionEntitiesData() {
              var o, l;
              return null !==
                (l =
                  null === (o = e.collectionTracks) || void 0 === o
                    ? void 0
                    : o.map(f.E5)) && void 0 !== l
                ? l
                : [];
            },
            get vibeEntitiesData() {
              var s, c;
              return null !==
                (c =
                  null === (s = e.vibeTracks) || void 0 === s
                    ? void 0
                    : s.map(f.E5)) && void 0 !== c
                ? c
                : [];
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, c.ls)(function* (t) {
                let { artistId: a } = t,
                  { artistsResource: n, logger: i } = (0, c.dU)(e);
                if (e.loadingState !== b.Gu.PENDING)
                  try {
                    var r, o, l, s, d, m;
                    e.loadingState = b.Gu.PENDING;
                    let t = yield n.getFamiliarYou({
                      artistId: a,
                      waveTracksLimit: 100,
                      collectionTracksLimit: 100,
                      collectionAlbumsLimit: 20,
                    });
                    (e.vibeTracks = (0, c.pj)(
                      null === (o = t.wave) || void 0 === o
                        ? void 0
                        : null === (r = o.tracks) || void 0 === r
                          ? void 0
                          : r.map(f.Vt),
                    )),
                      (e.collectionTracks = (0, c.pj)(
                        null === (s = t.collection) || void 0 === s
                          ? void 0
                          : null === (l = s.tracks) || void 0 === l
                            ? void 0
                            : l.map(f.Vt),
                      )),
                      (e.collectionAlbums = (0, c.pj)(
                        null === (m = t.collection) || void 0 === m
                          ? void 0
                          : null === (d = m.albums) || void 0 === d
                            ? void 0
                            : d.map(E),
                      )),
                      (e.loadingState = b.Gu.RESOLVE);
                  } catch (t) {
                    ("string" == typeof t || t instanceof Error) && i.error(t),
                      t instanceof u.du &&
                        (t.statusCode === u.CN.NOT_FOUND ||
                          t.statusCode === u.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = u.CN.NOT_FOUND),
                      e.loadingState !== b.Gu.IDLE &&
                        (e.loadingState = b.Gu.REJECT);
                  }
              }),
              reset() {
                (e.loadingState = b.Gu.IDLE),
                  (e.errorStatusCode = null),
                  (e.vibeTracks = null),
                  (e.collectionTracks = null);
              },
            };
            return t;
          });
      var P = a(63514);
      let k = c.V5.model("FamiliarInfo", {
        loadingState: c.V5.enumeration(Object.values(b.Gu)),
        vibeTrackCount: c.V5.optional(c.V5.number, 0),
        collectionTrackCount: c.V5.optional(c.V5.number, 0),
        collectionAlbumCount: c.V5.optional(c.V5.number, 0),
      })
        .views((e) => ({
          get isLoaded() {
            return e.loadingState === b.Gu.RESOLVE;
          },
          get hasTracks() {
            return (
              this.isLoaded &&
              (e.collectionTrackCount > 0 || e.vibeTrackCount > 0)
            );
          },
          get hasFamiliarInfo() {
            return (
              this.isLoaded && (this.hasTracks || e.collectionAlbumCount > 0)
            );
          },
          get tracksCount() {
            return e.collectionTrackCount + e.vibeTrackCount;
          },
          get hasCollectionEntities() {
            return (
              this.isLoaded &&
              (e.collectionTrackCount > 0 || e.collectionAlbumCount > 0)
            );
          },
          get hasVibeEntities() {
            return this.isLoaded && e.vibeTrackCount > 0;
          },
          get isFamiliarYouEnabled() {
            let { experiments: t } = (0, c.yj)(e);
            return t.checkExperiment(b.pe.WebNextFamiliarYou, "on");
          },
          href(e) {
            return e
              ? this.hasCollectionEntities
                ? "/artist/".concat(e, "/familiar?tab=").concat(P.g.COLLECTION)
                : this.hasVibeEntities
                  ? "/artist/".concat(e, "/familiar?tab=").concat(P.g.VIBE)
                  : "/artist/".concat(e, "/familiar")
              : "";
          },
        }))
        .actions((e) => {
          let t = {
            getData: (0, c.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: n, logger: i } = (0, c.dU)(e);
              if (e.loadingState !== b.Gu.PENDING && e.isFamiliarYouEnabled)
                try {
                  e.loadingState = b.Gu.PENDING;
                  let t = yield n.getFamiliarYouInfo({
                    artistId: a,
                    withWaveInfo: !0,
                    withCollectionInfo: !0,
                  });
                  t.collection &&
                    ((e.collectionTrackCount = t.collection.trackCount),
                    (e.collectionAlbumCount = t.collection.albumCount)),
                    t.wave && (e.vibeTrackCount = t.wave.trackCount),
                    e.loadingState !== b.Gu.IDLE &&
                      (e.loadingState = b.Gu.RESOLVE);
                } catch (t) {
                  ("string" == typeof t || t instanceof Error) && i.error(t),
                    e.loadingState !== b.Gu.IDLE &&
                      (e.loadingState = b.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = b.Gu.IDLE),
                (e.vibeTrackCount = 0),
                (e.collectionTrackCount = 0),
                (e.collectionAlbumCount = 0);
            },
          };
          return t;
        });
      var L = a(82436);
      let I = c.V5.model("FullTracksList", {
          loadingState: c.V5.enumeration(Object.values(b.Gu)),
          errorStatusCode: c.V5.maybeNull(c.V5.number),
          ids: c.V5.maybeNull(c.V5.array(c.V5.string)),
          tracks: c.V5.optional(c.V5.map(f.le), {}),
        })
          .views((e) => ({
            getTrackByIndex(t) {
              if (!e.ids || !e.ids.length) return null;
              let a = e.ids[t];
              if (!a) return null;
              let n = e.tracks.get(a);
              return n || null;
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === b.Gu.RESOLVE &&
                  (null === (t = e.ids) || void 0 === t ? void 0 : t.length) ===
                    0,
                n =
                  e.errorStatusCode === u.CN.NOT_FOUND ||
                  e.errorStatusCode === u.CN.BAD_REQUEST;
              return (e.loadingState === b.Gu.REJECT && n) || a;
            },
          }))
          .actions((e) => {
            let t = {
              getTracksIds: (0, c.ls)(function* (t) {
                let { artistId: a } = t,
                  { artistsResource: n, logger: i } = (0, c.dU)(e);
                try {
                  e.loadingState = b.Gu.PENDING;
                  let t = yield n.getArtistTrackIds({ artistId: a }),
                    { sonataState: i } = (0, c.yj)(e);
                  i.setUnloadedEntitiesData(t.map((e) => (0, L.RN)(e))),
                    (e.ids = (0, c.pj)(t)),
                    e.loadingState !== b.Gu.IDLE &&
                      (e.loadingState = b.Gu.RESOLVE);
                } catch (t) {
                  ("string" == typeof t || t instanceof Error) && i.error(t),
                    t instanceof u.du &&
                      (t.statusCode === u.CN.NOT_FOUND ||
                        t.statusCode === u.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = u.CN.NOT_FOUND),
                    e.loadingState !== b.Gu.IDLE &&
                      (e.loadingState = b.Gu.REJECT);
                }
              }),
              getTracks: (0, c.ls)(function* (t) {
                let { trackIds: a } = t,
                  { tracksResource: n, logger: i } = (0, c.dU)(e);
                try {
                  let t = yield n.getTracksMeta({
                    trackIds: a,
                    withProgress: !0,
                  });
                  e.tracks.merge(
                    t.reduce((e, t) => ((e[t.id] = (0, f.Vt)(t)), e), {}),
                  );
                } catch (e) {
                  ("string" == typeof e || e instanceof Error) && i.error(e);
                }
              }),
              reset() {
                let { sonataState: t } = (0, c.yj)(e);
                t.resetUnloadedEntitiesData(),
                  (e.loadingState = b.Gu.IDLE),
                  (e.ids = (0, c.pj)([])),
                  e.tracks.clear();
              },
            };
            return t;
          }),
        A = c.V5.model("ArtistPage", {
          loadingState: c.V5.enumeration(Object.values(b.Gu)),
          meta: c.V5.maybeNull(g.o9),
          popularTracks: c.V5.array(f.le),
          lastRelease: c.V5.maybeNull(m.ug),
          upcomingAlbum: c.V5.maybeNull(m.W9),
          concerts: c.V5.maybeNull(c.V5.array(h.Z)),
          similarArtists: c.V5.array(v.Go),
          playlists: c.V5.array(p.d2),
          errorStatusCode: c.V5.maybeNull(c.V5.number),
          deprecationTargetArtistId: c.V5.maybeNull(c.V5.number),
          albums: c.V5.array(m.ug),
          discography: c.V5.array(m.ug),
          compilations: c.V5.array(m.ug),
          familiarInfo: k,
          albumsSubpage: S,
          fullTracksListSubpage: I,
          concertsSubpage: C,
          familiarSubpage: N,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === b.Gu.IDLE || e.loadingState === b.Gu.PENDING
              );
            },
            get hasPopularTracks() {
              return (
                e.loadingState === b.Gu.IDLE ||
                e.loadingState === b.Gu.PENDING ||
                e.popularTracks.length > 0
              );
            },
            get hasAlbums() {
              return (
                e.loadingState === b.Gu.IDLE ||
                e.loadingState === b.Gu.PENDING ||
                e.albums.length > 0
              );
            },
            get hasDiscography() {
              return (
                e.loadingState === b.Gu.IDLE ||
                e.loadingState === b.Gu.PENDING ||
                e.discography.length > 0
              );
            },
            get hasCompilations() {
              return (
                e.loadingState === b.Gu.IDLE ||
                e.loadingState === b.Gu.PENDING ||
                e.compilations.length > 0
              );
            },
            get hasSimilarArtists() {
              return (
                e.loadingState === b.Gu.IDLE ||
                e.loadingState === b.Gu.PENDING ||
                e.similarArtists.length > 0
              );
            },
            get hasPlaylists() {
              return (
                e.loadingState === b.Gu.IDLE ||
                e.loadingState === b.Gu.PENDING ||
                (e.playlists && e.playlists.length > 0)
              );
            },
            get hasConcerts() {
              let { experiments: t } = (0, c.yj)(e);
              return (
                e.loadingState === b.Gu.IDLE ||
                e.loadingState === b.Gu.PENDING ||
                (e.concerts &&
                  e.concerts.length > 0 &&
                  t.checkExperiment(b.pe.WebNewBlockConcerts, "on"))
              );
            },
            get concertsLink() {
              var t, a;
              let { experiments: n } = (0, c.yj)(e);
              if (
                n.checkExperiment(b.pe.WebNewConcertsList, "on") &&
                (null === (t = e.meta) || void 0 === t
                  ? void 0
                  : t.artist.id) &&
                e.concerts &&
                e.concerts.length > 3
              )
                return "/artist/".concat(
                  null === (a = e.meta) || void 0 === a ? void 0 : a.artist.id,
                  "/concerts",
                );
              return null;
            },
            get isNotFound() {
              return (
                e.loadingState === b.Gu.REJECT &&
                e.errorStatusCode === u.CN.NOT_FOUND
              );
            },
            get isLoaded() {
              return e.loadingState === b.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === b.Gu.REJECT;
            },
            get hasErrorLoadingSimilarArtists() {
              let t =
                e.errorStatusCode === u.CN.NOT_FOUND ||
                e.errorStatusCode === u.CN.BAD_REQUEST;
              return this.isRejected && t;
            },
            get hasNoOneSimilarArtistOrNotFound() {
              return (
                this.hasErrorLoadingSimilarArtists ||
                (this.isLoaded && 0 === e.similarArtists.length)
              );
            },
            get hasReleaseBlock() {
              let { experiments: t } = (0, c.yj)(e),
                a = t.checkExperiment(b.pe.WebPresave, "on") && e.upcomingAlbum;
              return !!(this.isLoading || a || e.lastRelease);
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, c.ls)(function* (t) {
                let { artistId: a } = t,
                  { slides: n, experiments: i, disclaimer: r } = (0, c.yj)(e),
                  { artistsResource: o, logger: l } = (0, c.dU)(e),
                  s = i.checkExperiment(
                    b.pe.WebNextArtistDisableLastReleases,
                    "on",
                  ),
                  g = i.checkExperiment(
                    b.pe.WebNextArtistDisablePopularTracks,
                    "on",
                  ),
                  _ = i.checkExperiment(
                    b.pe.WebNextArtistDisableSimilarArtists,
                    "on",
                  ),
                  x = i.checkExperiment(
                    b.pe.WebNextArtistDisablePopularAlbums,
                    "on",
                  ),
                  S = i.checkExperiment(
                    b.pe.WebNextArtistDisableDiscography,
                    "on",
                  ),
                  C = i.checkExperiment(
                    b.pe.WebNextArtistDisableCompilations,
                    "on",
                  ),
                  E = i.checkExperiment(
                    b.pe.WebNextArtistDisablePlaylists,
                    "on",
                  ),
                  N = i.checkExperiment(b.pe.WebNextLegalRejectArtist, "on");
                if (e.loadingState !== b.Gu.PENDING)
                  try {
                    var P, k;
                    e.loadingState = b.Gu.PENDING;
                    let {
                      popularTracks: t,
                      error: i,
                      artist: l,
                      stats: L,
                      albums: I,
                      playlists: A,
                      alsoAlbums: T,
                      similarArtists: j,
                      lastReleases: R,
                      concerts: w,
                      upcomingAlbum: D,
                      discography: G,
                    } = yield o.getBriefInfo({
                      artistId: a,
                      popularTracksCount: 5,
                      fetchPlaylistLikesCounts: !0,
                      discographyBlockEnabled: !0,
                    });
                    if (
                      "not-found" === i ||
                      (null == l ? void 0 : l.error) === "not-found"
                    ) {
                      (e.errorStatusCode = u.CN.NOT_FOUND),
                        (e.loadingState = b.Gu.REJECT);
                      return;
                    }
                    if (
                      null === (P = l.deprecation) || void 0 === P
                        ? void 0
                        : P.targetArtistId
                    ) {
                      (e.deprecationTargetArtistId =
                        l.deprecation.targetArtistId),
                        (e.loadingState = b.Gu.RESOLVE);
                      return;
                    }
                    e.meta = (0, c.pj)(y(l, L));
                    let O = (
                      null !== (k = l.disclaimers) && void 0 !== k ? k : []
                    ).includes(d.em.MODAL);
                    if (
                      (!l.available &&
                        O &&
                        N &&
                        (yield r.getArtistDisclaimer({ artistId: a })),
                      !s && R && R.length > 0)
                    ) {
                      let t = R[0];
                      t &&
                        I &&
                        I.length > 1 &&
                        (e.lastRelease = (0, c.pj)((0, m.ym)(t)));
                    }
                    D && (e.upcomingAlbum = (0, c.pj)((0, m.wq)(D))),
                      w && (e.concerts = (0, c.pj)(w.map(h.zj))),
                      !g &&
                        t &&
                        t.length > 0 &&
                        (e.popularTracks = (0, c.pj)(t.slice(0, 5).map(f.Vt))),
                      !_ &&
                        j &&
                        j.length > 0 &&
                        (e.similarArtists = (0, c.pj)(j.slice(0, 9).map(v.d))),
                      !x &&
                        Number(null == I ? void 0 : I.length) > 0 &&
                        (e.albums = (0, c.pj)(
                          null == I ? void 0 : I.map(m.ym),
                        )),
                      !S &&
                        Number(null == G ? void 0 : G.length) > 0 &&
                        (e.discography = (0, c.pj)(
                          null == G ? void 0 : G.map(m.ym).slice(0, 9),
                        )),
                      !C &&
                        Number(null == T ? void 0 : T.length) > 0 &&
                        (e.compilations = (0, c.pj)(
                          null == T ? void 0 : T.map(m.ym).slice(0, 9),
                        )),
                      !E &&
                        A &&
                        A.length > 0 &&
                        (e.playlists = (0, c.pj)(A.map(p.Q9).slice(0, 9))),
                      n.resetArtist(),
                      e.loadingState !== b.Gu.IDLE &&
                        (e.loadingState = b.Gu.RESOLVE);
                  } catch (t) {
                    !(t instanceof u.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      l.error(t),
                      t instanceof u.du &&
                        (t.statusCode === u.CN.NOT_FOUND ||
                          t.statusCode === u.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = u.CN.NOT_FOUND),
                      e.loadingState !== b.Gu.IDLE &&
                        (e.loadingState = b.Gu.REJECT);
                  }
              }),
              getSimilarArtists: (0, c.ls)(function* (t) {
                let { artistId: a } = t,
                  { artistsResource: n, logger: i } = (0, c.dU)(e);
                try {
                  e.loadingState = b.Gu.PENDING;
                  let t = yield n.getSimilarArtists({ artistId: a });
                  (e.similarArtists = (0, c.pj)(t.similarArtists.map(v.d))),
                    e.loadingState !== b.Gu.IDLE &&
                      (e.loadingState = b.Gu.RESOLVE);
                } catch (t) {
                  ("string" == typeof t || t instanceof Error) && i.error(t),
                    t instanceof u.du &&
                      (t.statusCode === u.CN.NOT_FOUND ||
                        t.statusCode === u.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = u.CN.NOT_FOUND),
                    e.loadingState !== b.Gu.IDLE &&
                      (e.loadingState = b.Gu.REJECT);
                }
              }),
              reset() {
                (e.loadingState = b.Gu.IDLE),
                  (e.meta = null),
                  (e.errorStatusCode = null),
                  (e.deprecationTargetArtistId = null),
                  (e.lastRelease = null),
                  (e.upcomingAlbum = null),
                  (e.concerts = null),
                  (e.popularTracks = (0, c.pj)([])),
                  (e.similarArtists = (0, c.pj)([])),
                  (e.playlists = (0, c.pj)([])),
                  (e.albums = (0, c.pj)([])),
                  (e.discography = (0, c.pj)([])),
                  (e.compilations = (0, c.pj)([]));
              },
            };
            return t;
          });
      var T = a(45304);
    },
    85564: function (e, t, a) {
      "use strict";
      var n, i;
      a.d(t, {
        M: function () {
          return n;
        },
      }),
        ((i = n || (n = {})).DISCOGRAPHY = "discography"),
        (i.ALBUMS = "albums"),
        (i.COMPILATIONS = "compilations");
    },
    63514: function (e, t, a) {
      "use strict";
      var n, i;
      a.d(t, {
        g: function () {
          return n;
        },
      }),
        ((i = n || (n = {})).COLLECTION = "collection"),
        (i.VIBE = "vibe");
    },
    4144: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistAlbumsPage: function () {
            return _;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(1918),
        u = a(70579),
        d = a(96911),
        m = a(81546),
        g = a(13236),
        p = a(7042),
        f = a(84133),
        v = a(44285),
        h = a(85564),
        b = a(28674),
        y = a.n(b);
      let _ = (0, r.Pi)((e) => {
        var t, a, r, b, _, x;
        let { artistId: S, variant: C } = e,
          { artist: E, disclaimer: N } = (0, f.oR)(),
          { formatMessage: P } = (0, s.Z)(),
          [k, L] = (0, g.zU)(),
          I = (0, f.k6)();
        if (S && E.albumsSubpage.loadingState === f.Gu.IDLE) {
          E.albumsSubpage.setVariant(C);
          let e = Promise.allSettled([
            E.getData({ artistId: S }),
            E.albumsSubpage.getData({
              artistId: S,
              page: 0,
              pageSize: 20,
              sort: { sortBy: "year" },
            }),
          ]);
          (0, l.use)(e);
        }
        let A = (0, l.useCallback)(
            (e) => {
              S &&
                E.albumsSubpage.getData({
                  artistId: S,
                  page: e,
                  pageSize: 20,
                  sort: { sortBy: "year" },
                });
            },
            [E.albumsSubpage, S],
          ),
          T = (0, m.v2)({
            artist: null === (t = E.meta) || void 0 === t ? void 0 : t.artist,
            shouldHistoryBack: !0,
          });
        (0, l.useEffect)(() => {
          T();
        }, [T]),
          (0, l.useEffect)(
            () => () => {
              E.reset(), E.albumsSubpage.reset();
            },
            [E, E.albumsSubpage],
          ),
          E.albumsSubpage.isNotFound && (0, o.notFound)(),
          (0, f.NO)(E.albumsSubpage.loadingState === f.Gu.RESOLVE);
        let j = (0, l.useMemo)(
            () => ({
              Footer: () => (0, n.jsx)(v.$_, { className: y().footer }),
            }),
            [],
          ),
          R = (0, l.useMemo)(() => {
            switch (C) {
              case h.M.DISCOGRAPHY:
                return P({ id: "entity-names.studio-albums" });
              case h.M.COMPILATIONS:
                return P({ id: "entity-names.compilations" });
              default:
                return P({ id: "entity-names.albums" });
            }
          }, [P, C]),
          w = (0, l.useMemo)(() => {
            switch (C) {
              case h.M.DISCOGRAPHY:
                return P({ id: "entity-names.artist-studio-albums-list" });
              case h.M.COMPILATIONS:
                return P({ id: "entity-names.artist-compilations-list" });
              default:
                return P({ id: "entity-names.artist-albums-list" });
            }
          }, [P, C]),
          D = (0, l.useMemo)(() => {
            switch (C) {
              case h.M.DISCOGRAPHY:
                return f.Rh.ARTIST_DISCOGRAPHY;
              case h.M.COMPILATIONS:
                return f.Rh.ARTIST_COMPILATIONS;
              default:
                return f.Rh.ARTIST_ALBUMS;
            }
          }, [C]);
        return (
          null === (a = E.meta) || void 0 === a
            ? void 0
            : a.artist.isLegalRejected
        )
          ? N.isRejected
            ? (0, n.jsx)(u.D, {})
            : (0, n.jsx)(p.em, { disclaimer: N })
          : E.albumsSubpage.loadingState !== f.Gu.REJECT ||
              E.albumsSubpage.isNotFound
            ? (0, n.jsx)(f.Lh, {
                pageId: D,
                children: (0, n.jsx)(g.I7, {
                  scrollElement: k,
                  outerTitle: R,
                  children: (0, n.jsxs)("div", {
                    className: y().root,
                    children: [
                      (0, n.jsx)(v.h4, {
                        variant: "text",
                        withForwardControl: !1,
                        withBackwardControl: I.canBack,
                        children: (0, n.jsx)(c.Heading, {
                          variant: "h2",
                          weight: "bold",
                          size: "xl",
                          lineClamp: 1,
                          children: R,
                        }),
                      }),
                      (0, n.jsx)(v.Wv, {
                        className: (0, i.W)(y().scrollContainer, y().important),
                        listClassName: y().content,
                        itemClassName: y().item,
                        customComponents: j,
                        itemContentCallback: (e) => {
                          var t, a;
                          let i =
                              null === (a = E.albumsSubpage) || void 0 === a
                                ? void 0
                                : null === (t = a.items) || void 0 === t
                                  ? void 0
                                  : t[e],
                            r = P(
                              { id: "loading-messages.entity-is-loading" },
                              {
                                entityName: P({ id: "entity-names.playlist" }),
                              },
                            );
                          return i
                            ? (0, n.jsx)(
                                d.rf,
                                { album: i, contentLinesCount: 3 },
                                i.id,
                              )
                            : (0, n.jsx)(v.hi, { "aria-label": r });
                        },
                        totalCount:
                          null !==
                            (_ =
                              null === (b = E.albumsSubpage) || void 0 === b
                                ? void 0
                                : null === (r = b.pager) || void 0 === r
                                  ? void 0
                                  : r.total) && void 0 !== _
                            ? _
                            : 0,
                        onGetDataByPage: A,
                        pageSize: 20,
                        totalRequests:
                          null !== (x = E.albumsSubpage.requests) &&
                          void 0 !== x
                            ? x
                            : 0,
                        handleRef: L,
                        context: { listAriaLabel: w },
                      }),
                    ],
                  }),
                }),
              })
            : (0, n.jsx)(u.D, {});
      });
    },
    66649: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistConcertsPage: function () {
            return E;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(11769),
        o = a(99616),
        l = a(65244),
        s = a(2814),
        c = a(42503),
        u = a(71716),
        d = a(1918),
        m = a(70579),
        g = a(81546),
        p = a(13236),
        f = a(55238),
        v = a(7042),
        h = a(84133),
        b = a(44285),
        y = a(86742);
      let _ = (e) => {
          let { artistId: t, viewUuid: a } = e,
            n = (0, h.z$)(),
            { hash: i } = (0, h.RQ)(),
            r = (0, h.wL)();
          return (0, o.useCallback)(() => {
            if (!n || !t) return;
            let e = (0, h.KO)({
              params: { hash: i, artistId: t, viewUuid: a },
              logger: r,
              context: _.name,
            });
            e && (0, y.A7)(n.evgenInstance, e);
          }, [n, t, i, r, a]);
        },
        x = (e) => {
          let { artistId: t, viewUuid: a } = e,
            n = (0, h.z$)(),
            { hash: i } = (0, h.RQ)(),
            r = (0, h.wL)();
          return (0, o.useCallback)(() => {
            if (!n || !t) return;
            let e = (0, h.KO)({
              params: { hash: i, artistId: t, viewUuid: a },
              logger: r,
              context: x.name,
            });
            e && (0, y.is)(n.evgenInstance, e);
          }, [n, t, i, r, a]);
        };
      var S = a(8023),
        C = a.n(S);
      let E = (0, i.Pi)((e) => {
        var t, a;
        let { artistId: i } = e,
          { artist: y, experiments: S, disclaimer: E } = (0, h.oR)(),
          { formatMessage: N } = (0, l.Z)(),
          [P, k] = (0, p.zU)(),
          L = (0, h.k6)(),
          I = (0, o.useRef)(String((0, c.Z)())),
          A = x({ artistId: i, viewUuid: I.current }),
          T = _({ artistId: i, viewUuid: I.current });
        if (
          ((0, o.useEffect)(
            () => (
              A(),
              () => {
                T();
              }
            ),
            [T, A],
          ),
          i && y.concertsSubpage.loadingState === h.Gu.IDLE)
        ) {
          let e = Promise.allSettled([
            y.getData({ artistId: i }),
            y.concertsSubpage.getData({ artistId: i }),
          ]);
          (0, o.use)(e);
        }
        let j = (0, g.v2)({
          artist: null === (t = y.meta) || void 0 === t ? void 0 : t.artist,
          shouldHistoryBack: !0,
        });
        (0, o.useEffect)(() => {
          j();
        }, [j]),
          (0, o.useEffect)(
            () => () => {
              y.reset(), y.concertsSubpage.reset();
            },
            [y],
          ),
          (0, h.NO)(y.concertsSubpage.loadingState === h.Gu.RESOLVE),
          (y.concertsSubpage.isNotFound ||
            !S.checkExperiment(h.pe.WebNewConcertsList, "on")) &&
            (0, r.notFound)();
        let R = (0, o.useMemo)(() => {
          if (y.concertsSubpage.isLoading) return (0, b.M4)(10);
          if (i) {
            var e;
            return null === (e = y.concertsSubpage.concerts) || void 0 === e
              ? void 0
              : e.map((e, t) =>
                  (0, n.jsx)(
                    h.nZ,
                    {
                      objectId: String(e.id),
                      objectPos: t + 1,
                      children: (0, n.jsx)(f.kb, {
                        artistId: i,
                        concert: e,
                        viewUuid: I.current,
                      }),
                    },
                    e.id,
                  ),
                );
          }
        }, [y.concertsSubpage.concerts, y.concertsSubpage.isLoading, i, I]);
        return (
          null === (a = y.meta) || void 0 === a
            ? void 0
            : a.artist.isLegalRejected
        )
          ? E.isRejected
            ? (0, n.jsx)(m.D, {})
            : (0, n.jsx)(v.em, { disclaimer: E })
          : (0, n.jsx)(h.Lh, {
              pageId: h.Rh.ARTIST_CONCERTS,
              children: (0, n.jsx)(h.e4, {
                children: (0, n.jsxs)(p.I7, {
                  scrollElement: P,
                  outerTitle: N({ id: "entity-names.concerts" }),
                  children: [
                    (0, n.jsx)(b.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: L.canBack,
                      children: (0, n.jsx)(d.Heading, {
                        id: "concerts-header",
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: (0, n.jsx)(s.Z, {
                          id: "entity-names.concerts",
                        }),
                      }),
                    }),
                    (0, n.jsx)(u.t, {
                      ref: k,
                      className: C().root,
                      containerClassName: C().scrollableContainer,
                      children: (0, n.jsxs)("div", {
                        className: C().container,
                        children: [
                          (0, n.jsx)("div", {
                            className: C().content,
                            "aria-labelledby": "concerts-header",
                            tabIndex: 0,
                            children: R,
                          }),
                          (0, n.jsx)(b.$_, { className: C().footer }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            });
      });
    },
    45304: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistFamiliarPage: function () {
            return W;
          },
        });
      var n,
        i,
        r = a(8759),
        o = a(33423),
        l = a(11769),
        s = a(99616),
        c = a(26265),
        u = a(70579),
        d = a(81546),
        m = a(13236),
        g = a(7042),
        p = a(84133),
        f = a(63514);
      ((n = i || (i = {}))[(n.COLLECTION = 0)] = "COLLECTION"),
        (n[(n.VIBE = 1)] = "VIBE");
      var v = a(50871),
        h = a.n(v),
        b = a(35338),
        y = a(65244),
        _ = a(71440),
        x = a(71716),
        S = a(12670),
        C = a(96911),
        E = a(95539),
        N = a(44285),
        P = a(2814),
        k = a(1918),
        L = a(42769);
      let I = (e) => {
        let t = (0, p.m5)();
        return (0, s.useCallback)(
          (a) => {
            var n;
            null === (n = e.onTabChange) || void 0 === n || n.call(e, a),
              t("".concat(window.location.pathname, "?tab=").concat(a));
          },
          [t, e],
        );
      };
      var A = a(81920),
        T = a.n(A);
      let j = () =>
          (0, r.jsxs)("div", {
            className: T().tabsShimmer,
            children: [
              (0, r.jsx)(S.Shimmer, { className: T().tabShimmer }),
              (0, r.jsx)(S.Shimmer, { className: T().tabShimmer }),
            ],
          }),
        R = (0, o.Pi)((e) => {
          let { tabsState: t, tabElementId: a } = e,
            { artist: n } = (0, p.oR)(),
            { formatMessage: o } = (0, y.Z)(),
            l = (0, p.k6)(),
            { isScrolling: c } = (0, s.useContext)(N.pI),
            u = I(t);
          return (0, r.jsxs)("header", {
            className: T().root,
            "aria-hidden": c,
            children: [
              (0, r.jsxs)("div", {
                className: T().container,
                children: [
                  l.canBack &&
                    (0, r.jsx)(L.n, {
                      withForwardControl: !1,
                      withBackwardControl: l.canBack,
                    }),
                  (0, r.jsx)(k.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    className: T().title,
                    children: (0, r.jsx)(P.Z, { id: "page.familiar-you" }),
                  }),
                ],
              }),
              (0, r.jsxs)(N.no, {
                isLoading: n.familiarSubpage.isLoading,
                shimmer: (0, r.jsx)(j, {}),
                className: T().tabs,
                elementId: a,
                onTabChange: u,
                ...t,
                children: [
                  (0, r.jsx)(N.OK, {
                    className: T().tab,
                    value: i.COLLECTION,
                    title: o({ id: "page.familiar-collection" }),
                    "aria-hidden": c,
                    tabIndex: c ? -1 : 0,
                  }),
                  (0, r.jsx)(N.OK, {
                    className: T().tab,
                    value: i.VIBE,
                    title: o({ id: "page.familiar-vibe" }),
                    "aria-hidden": c,
                    tabIndex: c ? -1 : 0,
                  }),
                ],
              }),
            ],
          });
        });
      var w = a(67807),
        D = a.n(w);
      let G = (0, o.Pi)((e) => {
          var t;
          let { forwardRef: a, tabsState: n, tabElementId: o, artistId: l } = e,
            { artist: u } = (0, p.oR)(),
            { formatMessage: d } = (0, y.Z)(),
            m = (0, p.x5)(),
            g = (0, s.useCallback)(
              (e, t) => ({
                contextData: {
                  type: _.Ak.Various,
                  meta: { id: String(l) },
                  from: m,
                  overrideAutoflowSeeds: ["artist:".concat(l)],
                  overrideContextType: _.Zc.Artist,
                },
                queueParams: { index: t },
                loadContextMeta: !1,
                entitiesData: u.familiarSubpage.collectionEntitiesData,
              }),
              [u.familiarSubpage.collectionEntitiesData, l, m],
            ),
            f = (0, s.useMemo)(() => {
              var e;
              return (0, r.jsx)(N.RS, {
                variant: p.Lx.PLAYLIST,
                isLoading: u.familiarSubpage.isLoading,
                shimmersCount: 10,
                className: (0, b.W)(D().block, D().tracksBlock),
                children:
                  null === (e = u.familiarSubpage.collectionTracks) ||
                  void 0 === e
                    ? void 0
                    : e.map((e, t) =>
                        (0, r.jsx)(
                          E.O2,
                          { track: e, playContextParams: g(e, t) },
                          e.id,
                        ),
                      ),
              });
            }, [
              u.familiarSubpage.collectionTracks,
              u.familiarSubpage.isLoading,
              g,
            ]),
            v = (0, s.useMemo)(
              () =>
                u.familiarSubpage.shouldShowTitleBlocks
                  ? u.familiarSubpage.isLoading
                    ? (0, r.jsx)("div", {
                        className: (0, b.W)(D().block, D().blockHeader),
                        children: (0, r.jsx)(S.Shimmer, {
                          className: D().shimmerTitle,
                          radius: "l",
                          isLoading: u.familiarSubpage.isLoading,
                        }),
                      })
                    : (0, r.jsx)(N.ti, {
                        className: (0, b.W)(D().block, D().blockHeader),
                        title: d({ id: "entity-names.tracks" }),
                      })
                  : void 0,
              [
                u.familiarSubpage.isLoading,
                u.familiarSubpage.shouldShowTitleBlocks,
                d,
              ],
            ),
            h = (0, s.useMemo)(() => {
              if (u.familiarSubpage.shouldShowTitleBlocks)
                return d({ id: "entity-names.albums" });
            }, [u.familiarSubpage.shouldShowTitleBlocks, d]);
          return (0, r.jsxs)(x.t, {
            className: D().root,
            containerClassName: (0, b.W)(D().scrollContainer, D().important),
            ref: a,
            children: [
              (0, r.jsx)(R, { tabsState: n, tabElementId: o }),
              (0, r.jsxs)(c.TabPanel, {
                value: n.value,
                name: i.COLLECTION,
                elementId: o,
                className: D().content,
                children: [
                  (0, r.jsxs)("section", { children: [v, f] }),
                  (0, r.jsx)(N.HY, {
                    headerClassName: D().blockHeader,
                    containerClassName: D().block,
                    isLoading: u.familiarSubpage.isLoading,
                    title: h,
                    showHeaderShimmer: u.familiarSubpage.shouldShowTitleBlocks,
                    children:
                      null === (t = u.familiarSubpage.collectionAlbums) ||
                      void 0 === t
                        ? void 0
                        : t.map((e) =>
                            (0, r.jsx)(
                              C.rf,
                              { album: e, contentLinesCount: 3 },
                              e.id,
                            ),
                          ),
                  }),
                ],
              }),
              (0, r.jsx)(N.$_, { className: D().footer }),
            ],
          });
        }),
        O = (0, o.Pi)((e) => {
          let { forwardRef: t, tabsState: a, tabElementId: n, artistId: o } = e,
            { artist: l } = (0, p.oR)(),
            u = (0, p.x5)(),
            d = (0, s.useCallback)(
              (e, t) => ({
                contextData: {
                  type: _.Ak.Various,
                  meta: { id: String(o) },
                  from: u,
                  overrideAutoflowSeeds: ["artist:".concat(o)],
                  overrideContextType: _.Zc.Artist,
                },
                queueParams: { index: t },
                loadContextMeta: !1,
                entitiesData: l.familiarSubpage.vibeEntitiesData,
              }),
              [l.familiarSubpage.vibeEntitiesData, o, u],
            ),
            m = (0, s.useMemo)(() => {
              var e;
              return (0, r.jsx)(N.RS, {
                variant: p.Lx.PLAYLIST,
                isLoading: l.familiarSubpage.isLoading,
                shimmersCount: 10,
                className: (0, b.W)(D().block, D().tracksBlock),
                children:
                  null === (e = l.familiarSubpage.vibeTracks) || void 0 === e
                    ? void 0
                    : e.map((e, t) =>
                        (0, r.jsx)(
                          E.O2,
                          { track: e, playContextParams: d(e, t) },
                          e.id,
                        ),
                      ),
              });
            }, [l.familiarSubpage.isLoading, l.familiarSubpage.vibeTracks, d]);
          return (0, r.jsxs)(x.t, {
            className: D().root,
            containerClassName: (0, b.W)(D().scrollContainer, D().important),
            ref: t,
            children: [
              (0, r.jsx)(R, { tabsState: a, tabElementId: n }),
              (0, r.jsx)(c.TabPanel, {
                value: a.value,
                name: i.VIBE,
                elementId: n,
                className: D().content,
                children: m,
              }),
              (0, r.jsx)(N.$_, { className: D().footer }),
            ],
          });
        });
      var V = a(14581),
        M = a(38462),
        B = a.n(M);
      let U = (e) => {
          let { tabsState: t, tabElementId: a } = e,
            n = (0, s.useMemo)(() => {
              switch (t.value) {
                case i.COLLECTION:
                  return (0, r.jsx)(P.Z, {
                    id: "error-messages.empty-artist-familiar-collection-title",
                  });
                case i.VIBE:
                  return (0, r.jsx)(P.Z, {
                    id: "error-messages.empty-artist-familiar-vibe-title",
                  });
              }
            }, [t.value]);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(R, { tabsState: t, tabElementId: a }),
              (0, r.jsxs)("div", {
                className: B().root,
                children: [
                  (0, r.jsx)(V.J, {
                    className: B().icon,
                    variant: "attention",
                  }),
                  (0, r.jsx)(k.Heading, {
                    className: B().title,
                    variant: "h3",
                    size: "xs",
                    children: n,
                  }),
                ],
              }),
            ],
          });
        },
        F = (0, o.Pi)((e) => {
          let { tabsState: t, tabElementId: a } = e,
            { artist: n } = (0, p.oR)(),
            { formatMessage: o } = (0, y.Z)(),
            { isScrolling: l } = (0, s.useContext)(N.pI),
            c = (0, p.k6)(),
            u = I(t);
          return (0, r.jsx)(N.h4, {
            variant: "composite",
            staticClassName: (0, b.W)(T().staticHeader, T().important),
            "aria-hidden": !l,
            stickyClassName: (0, b.W)(T().stickyHeader, T().important),
            stickyChild: (0, r.jsxs)("div", {
              className: T().container,
              children: [
                c.canBack &&
                  (0, r.jsx)(L.n, {
                    withForwardControl: !1,
                    withBackwardControl: c.canBack,
                    buttonSize: "xs",
                  }),
                (0, r.jsxs)(N.no, {
                  isLoading: n.familiarSubpage.isLoading,
                  shimmer: (0, r.jsx)(j, {}),
                  className: T().tabs,
                  elementId: a,
                  onTabChange: u,
                  ...t,
                  children: [
                    (0, r.jsx)(N.OK, {
                      className: T().tab,
                      value: i.COLLECTION,
                      title: o({ id: "page.familiar-collection" }),
                      "aria-hidden": !l,
                      tabIndex: l ? 0 : -1,
                    }),
                    (0, r.jsx)(N.OK, {
                      className: T().tab,
                      value: i.VIBE,
                      title: o({ id: "page.familiar-vibe" }),
                      "aria-hidden": !l,
                      tabIndex: l ? 0 : -1,
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        W = (0, o.Pi)((e) => {
          var t, a;
          let { artistId: n } = e,
            o = (0, l.useSearchParams)(),
            { artist: v, experiments: b, disclaimer: y } = (0, p.oR)(),
            [_, x] = (0, m.zU)(),
            S = (0, s.useId)(),
            C = (0, s.useMemo)(() => {
              let e = o.get("tab");
              switch (e) {
                case f.g.COLLECTION:
                  break;
                case f.g.VIBE:
                  return i.VIBE;
              }
              return i.COLLECTION;
            }, [o]),
            E = (0, c.useTabsState)(C);
          n &&
            v.familiarSubpage.loadingState === p.Gu.IDLE &&
            (0, s.use)(v.familiarSubpage.getData({ artistId: n }));
          let N = (0, d.v2)({
            artist: null === (t = v.meta) || void 0 === t ? void 0 : t.artist,
            shouldHistoryBack: !0,
          });
          (0, s.useEffect)(() => {
            N();
          }, [N]),
            (0, s.useEffect)(
              () => () => {
                v.familiarSubpage.reset();
              },
              [v],
            ),
            (0, p.NO)(v.familiarSubpage.loadingState === p.Gu.RESOLVE),
            (v.familiarSubpage.isNotFound ||
              !b.checkExperiment(p.pe.WebNextFamiliarYou, "on")) &&
              (0, l.notFound)();
          let P = (0, s.useMemo)(() => {
            switch (E.value) {
              case i.COLLECTION:
                if (
                  v.familiarSubpage.isLoaded &&
                  !v.familiarSubpage.hasCollectionEntities
                )
                  return (0, r.jsx)(U, { tabsState: E, tabElementId: S });
                return (0, r.jsx)(G, {
                  tabsState: E,
                  forwardRef: x,
                  tabElementId: S,
                  artistId: n,
                });
              case i.VIBE:
                if (
                  v.familiarSubpage.isLoaded &&
                  !v.familiarSubpage.hasVibeTracks
                )
                  return (0, r.jsx)(U, { tabsState: E, tabElementId: S });
                return (0, r.jsx)(O, {
                  tabsState: E,
                  forwardRef: x,
                  tabElementId: S,
                  artistId: n,
                });
            }
          }, [
            v.familiarSubpage.hasCollectionEntities,
            v.familiarSubpage.hasVibeTracks,
            v.familiarSubpage.isLoaded,
            n,
            x,
            S,
            E,
          ]);
          return v.familiarSubpage.isRejected && !v.familiarSubpage.isNotFound
            ? (0, r.jsx)(u.D, {})
            : (
                  null === (a = v.meta) || void 0 === a
                    ? void 0
                    : a.artist.isLegalRejected
                )
              ? y.isRejected
                ? (0, r.jsx)(u.D, {})
                : (0, r.jsx)(g.em, { disclaimer: y })
              : (0, r.jsx)(p.Lh, {
                  pageId: p.Rh.FAMILIAR_YOU,
                  children: (0, r.jsx)(m.I7, {
                    scrollElement: _,
                    headerThreshold: 148,
                    children: (0, r.jsxs)("div", {
                      className: h().root,
                      children: [
                        (0, r.jsx)(F, { tabElementId: S, tabsState: E }),
                        (0, r.jsx)(p.J, {
                          blockIdForFrom: p.aU.DEFAULT,
                          children: P,
                        }),
                      ],
                    }),
                  }),
                });
        });
    },
    64285: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistNotFoundPage: function () {
            return s;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(99616),
        o = a(2365),
        l = a(84133);
      let s = (0, i.Pi)(() => {
        let { artist: e } = (0, l.oR)();
        return (
          (0, r.useEffect)(
            () => () => {
              e.reset();
            },
            [e],
          ),
          (0, n.jsx)(o.T, {})
        );
      });
    },
    91399: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistPage: function () {
            return j;
          },
        });
      var n,
        i,
        r = a(8759),
        o = a(35338),
        l = a(33423),
        s = a(11769),
        c = a(99616),
        u = a(65244),
        d = a(86742),
        m = a(71440),
        g = a(27287),
        p = a(71716),
        f = a(12670),
        v = a(48157),
        h = a(70579),
        b = a(96911),
        y = a(81546),
        _ = a(13236),
        x = a(20210),
        S = a(95539),
        C = a(55238),
        E = a(7042),
        N = a(3515),
        P = a(84133),
        k = a(44285);
      let L = (e) => {
        let { blockId: t, scrollRef: a, headerRef: n } = e,
          i = document.getElementById(t);
        if (i && a) {
          var r;
          let e = i.getBoundingClientRect().top,
            t = (
              null === (r = n.current) || void 0 === r ? void 0 : r.offsetHeight
            )
              ? e - n.current.offsetHeight
              : e;
          a.scrollTo({ top: t - 10, behavior: "smooth" });
        }
      };
      ((n = i || (i = {})).UPCOMING_RELEASE = "upcoming_release"),
        (n.TRACKS = "tracks"),
        (n.FAMILIAR = "familiar"),
        (n.CONCERTS = "concerts");
      var I = a(41550),
        A = a.n(I);
      let T = (e) => {
          let {
              withReleaseBlock: t,
              children: a,
              isLoading: n,
              viewAllActionLink: i,
              ...l
            } = e,
            { formatMessage: s } = (0, u.Z)();
          return (0, r.jsxs)("div", {
            className: (0, o.W)(A().popularTracksBlock, {
              [A().popularTracksBlock_withReleaseBlock]: t,
            }),
            ...l,
            children: [
              (0, r.jsx)(k.ti, {
                className: A().popularTracksBlockHeader,
                title: s({ id: "entity-names.popular-tracks" }),
                viewAllActionLink: i,
              }),
              (0, r.jsx)(k.RS, {
                className: A().popularTracksBlockList,
                isLoading: n,
                variant: P.Lx.PLAYLIST,
                children: a,
              }),
            ],
          });
        },
        j = (0, l.Pi)((e) => {
          var t, a, n, l, I, j, R, w, D, G;
          let { artistId: O } = e,
            V = (0, P.x5)({ pageId: P.Rh.ARTIST, blockId: P.aU.ARTIST }),
            { notify: M } = (0, P.d$)(),
            { artist: B, experiments: U, disclaimer: F } = (0, P.oR)(),
            { formatMessage: W } = (0, u.Z)(),
            H = (0, c.useRef)(0),
            { href: z } = (0, P.zB)(
              "/artist/".concat(B.deprecationTargetArtistId),
            ),
            { ref: q, offsetY: K } = (0, g.e)(),
            [Y, Z] = (0, _.zU)(),
            J = (0, c.useRef)(null),
            Q = (0, c.useMemo)(() => {
              var e, t;
              return (0, P.XG)(
                null == B
                  ? void 0
                  : null === (t = B.meta) || void 0 === t
                    ? void 0
                    : null === (e = t.artist) || void 0 === e
                      ? void 0
                      : e.averageColor,
              );
            }, [
              null == B
                ? void 0
                : null === (a = B.meta) || void 0 === a
                  ? void 0
                  : null === (t = a.artist) || void 0 === t
                    ? void 0
                    : t.averageColor,
            ]),
            [X, $] = (0, _.at)(Q, K),
            ee = (0, s.useSearchParams)();
          (0, c.useEffect)(() => {
            let e = ee.get("block");
            e &&
              B.isLoaded &&
              B.familiarInfo.isLoaded &&
              L({ blockId: e, scrollRef: Y, headerRef: J });
          }, [B.isLoaded, B.familiarInfo.isLoaded, Y, ee]);
          let et = (0, y.v2)({
            artist: null === (n = B.meta) || void 0 === n ? void 0 : n.artist,
            shouldHistoryBack: !0,
          });
          (0, c.useEffect)(() => {
            var e;
            (null === (e = B.meta) || void 0 === e
              ? void 0
              : e.artist.isUnsafeLegal) && et();
          }, [
            null === (l = B.meta) || void 0 === l
              ? void 0
              : l.artist.isUnsafeLegal,
            et,
          ]),
            (0, c.useEffect)(
              () => () => {
                B.reset(), B.familiarInfo.reset(), (H.current = 0);
              },
              [B, O],
            ),
            B.deprecationTargetArtistId && (0, s.redirect)(z);
          let ea = (0, c.useMemo)(
            () => () => {
              (B.isRejected || (!B.meta && !B.isLoading)) &&
                H &&
                !(H.current > 0) &&
                (M(
                  (0, r.jsx)(k.Q, {
                    error: W({
                      id: "artist-errors.error-during-loading-artist",
                    }),
                  }),
                  { containerId: P.W$.ERROR },
                ),
                H.current++);
            },
            [B.isRejected, B.meta, B.isLoading, M, W],
          );
          if ((ea(), O && B.loadingState === P.Gu.IDLE)) {
            let e = Promise.allSettled([
              B.getData({ artistId: O }),
              B.familiarInfo.getData({ artistId: O }),
            ]);
            (0, c.use)(e);
          }
          if (
            ((0, P.NO)(B.loadingState === P.Gu.RESOLVE),
            B.isNotFound && (0, s.notFound)(),
            B.loadingState === P.Gu.REJECT && !B.isNotFound)
          )
            return (0, r.jsx)(h.D, {});
          let en = (e) => ({
              contextData: {
                type: m.Ak.Artist,
                meta: { id: Number(O) },
                from: V,
              },
              queueParams: {
                index: B.popularTracks.findIndex((t) => t.id === e),
              },
              loadContextMeta: !0,
            }),
            ei = (0, c.useMemo)(
              () =>
                B.isLoading || !B.meta
                  ? (0, r.jsx)(v.KC, {
                      className: A().header,
                      coverRadius: "round",
                    })
                  : (0, r.jsx)(v.f3, {
                      className: A().header,
                      artistMeta: B.meta,
                      ref: q,
                    }),
              [B.isLoading, B.meta, q],
            ),
            er = (0, c.useMemo)(
              () =>
                B.isLoading
                  ? (0, r.jsxs)("div", {
                      className: A().releaseBlock,
                      children: [
                        (0, r.jsx)(f.Shimmer, {
                          radius: "l",
                          className: A().releaseBlockHeaderShimmer,
                        }),
                        (0, r.jsx)(k.hi, {
                          className: (0, o.W)(
                            A().releaseBlockCard,
                            A().important,
                          ),
                        }),
                      ],
                    })
                  : B.upcomingAlbum && U.checkExperiment(P.pe.WebPresave, "on")
                    ? (0, r.jsxs)("div", {
                        className: A().releaseBlock,
                        id: i.UPCOMING_RELEASE,
                        children: [
                          (0, r.jsx)(k.ti, {
                            className: A().releaseBlockHeader,
                            title: W({ id: "entity-names.upcoming-album" }),
                          }),
                          (0, r.jsx)(b.vK, {
                            className: (0, o.W)(
                              A().releaseBlockCard,
                              A().important,
                            ),
                            upcomingAlbum: B.upcomingAlbum,
                          }),
                        ],
                      })
                    : B.lastRelease
                      ? (0, r.jsxs)("div", {
                          className: A().releaseBlock,
                          children: [
                            (0, r.jsx)(k.ti, {
                              className: A().releaseBlockHeader,
                              title: W({ id: "entity-names.recently-release" }),
                            }),
                            (0, r.jsx)(b.rf, {
                              className: (0, o.W)(
                                A().releaseBlockCard,
                                A().important,
                              ),
                              album: B.lastRelease,
                            }),
                          ],
                        })
                      : void 0,
              [B.isLoading, B.lastRelease, B.upcomingAlbum, U, W],
            ),
            eo = (0, c.useMemo)(() => {
              let e = [];
              return (
                B.familiarInfo.tracksCount &&
                  e.push(
                    W(
                      { id: "entity-names.tracks-count" },
                      { value: B.familiarInfo.tracksCount },
                    ),
                  ),
                B.familiarInfo.collectionAlbumCount &&
                  e.push(
                    W(
                      { id: "entity-names.albums-count" },
                      { value: B.familiarInfo.collectionAlbumCount },
                    ),
                  ),
                e.join(" • ")
              );
            }, [
              B.familiarInfo.collectionAlbumCount,
              B.familiarInfo.tracksCount,
              W,
            ]);
          return (
            null === (I = B.meta) || void 0 === I
              ? void 0
              : I.artist.isLegalRejected
          )
            ? F.isRejected
              ? (0, r.jsx)(h.D, {})
              : (0, r.jsx)(E.em, { disclaimer: F })
            : (0, r.jsx)(P.Lh, {
                pageId: P.Rh.ARTIST,
                children: (0, r.jsx)(P.e4, {
                  children: (0, r.jsxs)(_.I7, {
                    scrollElement: Y,
                    children: [
                      (0, r.jsx)(k.h4, { style: $, innerHeaderRef: J }),
                      (0, r.jsx)("div", {
                        className: A().averageColorBackground,
                        style: X,
                      }),
                      (0, r.jsxs)(p.t, {
                        className: A().root,
                        containerClassName: A().content,
                        ref: Z,
                        children: [
                          (0, r.jsxs)("div", {
                            children: [
                              ei,
                              (0, r.jsxs)("div", {
                                className: A().recents,
                                children: [
                                  B.hasPopularTracks &&
                                    (0, r.jsx)(T, {
                                      withReleaseBlock: B.hasReleaseBlock,
                                      isLoading: B.isLoading,
                                      viewAllActionLink: "/artist/".concat(
                                        O,
                                        "/tracks",
                                      ),
                                      id: i.TRACKS,
                                      children:
                                        null === (j = B.popularTracks) ||
                                        void 0 === j
                                          ? void 0
                                          : j.map((e, t) =>
                                              (0, r.jsx)(
                                                S.O2,
                                                {
                                                  track: e,
                                                  playContextParams: en(e.id),
                                                  hasDuplicatesBefore: (0,
                                                  N.BA)(B.popularTracks, e, t),
                                                },
                                                e.id,
                                              ),
                                            ),
                                    }),
                                  er,
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: A().carouselBlocks,
                                children: [
                                  B.familiarInfo.isFamiliarYouEnabled &&
                                    B.familiarInfo.hasFamiliarInfo &&
                                    (0, r.jsx)(k.ti, {
                                      id: i.FAMILIAR,
                                      className: (0, o.W)(
                                        A().carouselBlockHeader,
                                        A().carouselBlock,
                                      ),
                                      coverUrl:
                                        "avatars.mds.yandex.net/get-music-misc/2419084/img.65faec7dd0866004f49a38bc/%%",
                                      viewAllActionLink: B.familiarInfo.href(O),
                                      controls: !1,
                                      title: W({ id: "page.familiar-you" }),
                                      description: eo,
                                    }),
                                  B.hasDiscography &&
                                    (0, r.jsx)(P.J, {
                                      blockId: P.BE.DISCOGRAPHY_CAROUSEL,
                                      blockType: P.BE.ALBUMS_CAROUSEL,
                                      blockPosX: 1,
                                      blockPosY: 2,
                                      blockIdForFrom: P.BE.DISCOGRAPHY_CAROUSEL,
                                      objectsCount: B.discography.length,
                                      children: (0, r.jsx)(b.wk, {
                                        headerClassName: (0, o.W)(
                                          A().carouselBlockHeader,
                                          A().carouselBlock,
                                        ),
                                        containerClassName: A().carouselBlock,
                                        albums: B.discography,
                                        isLoading: B.isLoading,
                                        title: W({
                                          id: "entity-names.studio-albums",
                                        }),
                                        viewAllActionLink: "/artist/".concat(
                                          O,
                                          "/discography",
                                        ),
                                      }),
                                    }),
                                  B.hasAlbums &&
                                    (0, r.jsx)(P.J, {
                                      blockId: P.BE.ALBUMS_CAROUSEL,
                                      blockType: P.BE.ALBUMS_CAROUSEL,
                                      blockPosX: 1,
                                      blockPosY: 3,
                                      blockIdForFrom: P.BE.ALBUMS_CAROUSEL,
                                      objectsCount: B.albums.length,
                                      children: (0, r.jsx)(b.wk, {
                                        headerClassName: (0, o.W)(
                                          A().carouselBlockHeader,
                                          A().carouselBlock,
                                        ),
                                        containerClassName: A().carouselBlock,
                                        albums: B.albums,
                                        isLoading: B.isLoading,
                                        title: W({
                                          id: "entity-names.popular-albums",
                                        }),
                                        viewAllActionLink: "/artist/".concat(
                                          O,
                                          "/albums",
                                        ),
                                      }),
                                    }),
                                  O &&
                                    B.hasConcerts &&
                                    (0, r.jsx)(P.nZ, {
                                      objectType: d.OB.Shortcut,
                                      objectId: "/artist/".concat(
                                        O,
                                        "/concerts",
                                      ),
                                      objectPosX: 0,
                                      objectPosY: 0,
                                      objectsCount:
                                        null !==
                                          (D =
                                            null === (R = B.concerts) ||
                                            void 0 === R
                                              ? void 0
                                              : R.length) && void 0 !== D
                                          ? D
                                          : 0,
                                      children: (0, r.jsx)(C.m, {
                                        id: i.CONCERTS,
                                        artistId: O,
                                        title: W({
                                          id: "entity-names.concerts",
                                        }),
                                        isLoading: B.isLoading,
                                        headerClassName: (0, o.W)(
                                          A().carouselBlockHeader,
                                          A().carouselBlock,
                                        ),
                                        containerClassName: A().concertsBlock,
                                        viewAllActionLink: B.concertsLink,
                                        children:
                                          null === (w = B.concerts) ||
                                          void 0 === w
                                            ? void 0
                                            : w.map((e, t) => {
                                                var a;
                                                return (0, r.jsx)(
                                                  P.nZ,
                                                  {
                                                    objectType: d.OB.Concert,
                                                    objectId: String(e.id),
                                                    objectPosX:
                                                      Math.floor(t / 2) + 1,
                                                    objectPosY: (t % 2) + 1,
                                                    objectsCount:
                                                      null !==
                                                        (G =
                                                          null ===
                                                            (a = B.concerts) ||
                                                          void 0 === a
                                                            ? void 0
                                                            : a.length) &&
                                                      void 0 !== G
                                                        ? G
                                                        : 0,
                                                    children: (0, r.jsx)(C.kb, {
                                                      artistId: O,
                                                      concert: e,
                                                    }),
                                                  },
                                                  e.id,
                                                );
                                              }),
                                      }),
                                    }),
                                  B.hasPlaylists &&
                                    (0, r.jsx)(x.VD, {
                                      containerClassName: A().carouselBlock,
                                      headerClassName: (0, o.W)(
                                        A().carouselBlockHeader,
                                        A().carouselBlock,
                                      ),
                                      isLoading: B.isLoading,
                                      title: W({
                                        id: "entity-names.artist-playlist",
                                      }),
                                      playlists: B.playlists,
                                    }),
                                  B.hasCompilations &&
                                    (0, r.jsx)(P.J, {
                                      blockId: P.BE.COMPILATIONS_CAROUSEL,
                                      blockType: "albums_carousel",
                                      blockPosX: 1,
                                      blockPosY: 5,
                                      blockIdForFrom:
                                        P.BE.COMPILATIONS_CAROUSEL,
                                      objectsCount: B.compilations.length,
                                      children: (0, r.jsx)(b.wk, {
                                        headerClassName: (0, o.W)(
                                          A().carouselBlockHeader,
                                          A().carouselBlock,
                                        ),
                                        containerClassName: A().carouselBlock,
                                        albums: B.compilations,
                                        isLoading: B.isLoading,
                                        title: W({
                                          id: "entity-names.compilations",
                                        }),
                                        viewAllActionLink: "/artist/".concat(
                                          O,
                                          "/compilations",
                                        ),
                                      }),
                                    }),
                                  B.hasSimilarArtists &&
                                    (0, r.jsx)(k.HY, {
                                      headerClassName: (0, o.W)(
                                        A().carouselBlockHeader,
                                        A().carouselBlock,
                                      ),
                                      containerClassName: A().carouselBlock,
                                      title: W({
                                        id: "entity-names.similar-artists",
                                      }),
                                      isLoading: B.isLoading,
                                      viewAllActionLink: "/artist/".concat(
                                        O,
                                        "/similar",
                                      ),
                                      children: B.similarArtists.map((e) =>
                                        (0, r.jsx)(
                                          y.IT,
                                          { artist: e, contentLinesCount: 3 },
                                          e.id,
                                        ),
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)(k.$_, { className: A().footer }),
                        ],
                      }),
                    ],
                  }),
                }),
              });
        });
    },
    41591: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistSimilarPage: function () {
            return y;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(11769),
        o = a(99616),
        l = a(65244),
        s = a(2814),
        c = a(71716),
        u = a(1918),
        d = a(70579),
        m = a(81546),
        g = a(13236),
        p = a(7042),
        f = a(84133),
        v = a(44285),
        h = a(33768),
        b = a.n(h);
      let y = (0, i.Pi)((e) => {
        var t, a;
        let { artistId: i } = e,
          { artist: h, disclaimer: y } = (0, f.oR)(),
          { formatMessage: _ } = (0, l.Z)(),
          [x, S] = (0, g.zU)(),
          C = (0, f.k6)();
        if (i && h.loadingState === f.Gu.IDLE) {
          let e = Promise.allSettled([
            h.getData({ artistId: i }),
            h.getSimilarArtists({ artistId: i }),
          ]);
          (0, o.use)(e);
        }
        let E = (0, m.v2)({
          artist: null === (t = h.meta) || void 0 === t ? void 0 : t.artist,
          shouldHistoryBack: !0,
        });
        (0, o.useEffect)(() => {
          E();
        }, [E]),
          (0, o.useEffect)(
            () => () => {
              h.reset();
            },
            [h],
          ),
          h.hasNoOneSimilarArtistOrNotFound && (0, r.notFound)(),
          (0, f.NO)(h.loadingState === f.Gu.RESOLVE);
        let N = (0, o.useMemo)(() => {
          if (h.loadingState === f.Gu.RESOLVE)
            return h.similarArtists.map((e) =>
              (0, n.jsx)(
                m.IT,
                { className: b().item, artist: e, contentLinesCount: 3 },
                e.id,
              ),
            );
          let e = _(
            { id: "loading-messages.entity-is-loading" },
            { entityName: _({ id: "entity-names.similar-artists" }) },
          );
          return (0, n.jsx)(v.Wm, {
            itemClassName: b().item,
            round: !0,
            centered: !0,
            "aria-label": e,
          });
        }, [h.loadingState, h.similarArtists, _, h.similarArtists.length]);
        return (
          null === (a = h.meta) || void 0 === a
            ? void 0
            : a.artist.isLegalRejected
        )
          ? y.isRejected
            ? (0, n.jsx)(d.D, {})
            : (0, n.jsx)(p.em, { disclaimer: y })
          : h.isRejected
            ? (0, n.jsx)(d.D, {})
            : (0, n.jsx)(f.Lh, {
                pageId: f.Rh.ARTIST_SIMILAR,
                children: (0, n.jsxs)(g.I7, {
                  scrollElement: x,
                  outerTitle: _({ id: "entity-names.similar-artists" }),
                  children: [
                    (0, n.jsx)(v.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: C.canBack,
                      children: (0, n.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: (0, n.jsx)(s.Z, {
                          id: "entity-names.similar-artists",
                        }),
                      }),
                    }),
                    (0, n.jsx)(c.t, {
                      className: b().scrollableContent,
                      ref: S,
                      children: (0, n.jsxs)("div", {
                        className: b().container,
                        children: [
                          (0, n.jsx)("div", {
                            className: b().content,
                            "aria-labelledby": "collection-artists-header",
                            tabIndex: 0,
                            children: N,
                          }),
                          (0, n.jsx)(v.$_, { className: b().footer }),
                        ],
                      }),
                    }),
                  ],
                }),
              });
      });
    },
    66016: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistTracksPage: function () {
            return x;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(2814),
        u = a(71440),
        d = a(1918),
        m = a(70579),
        g = a(81546),
        p = a(13236),
        f = a(95539),
        v = a(7042),
        h = a(84133),
        b = a(44285),
        y = a(60495),
        _ = a.n(y);
      let x = (0, r.Pi)((e) => {
        var t, a, r, y;
        let { artistId: x } = e,
          { artist: S, sonataState: C, disclaimer: E } = (0, h.oR)(),
          { formatMessage: N } = (0, s.Z)(),
          P = (0, h.x5)({ pageId: h.Rh.ARTIST_TRACKS }),
          [k, L] = (0, p.zU)(),
          I = (0, h.k6)();
        if (x && S.fullTracksListSubpage.loadingState === h.Gu.IDLE) {
          let e = Promise.allSettled([
            S.getData({ artistId: x }),
            S.fullTracksListSubpage.getTracksIds({ artistId: x }),
          ]);
          (0, l.use)(e);
        }
        let A = (0, g.v2)({
          artist: null === (t = S.meta) || void 0 === t ? void 0 : t.artist,
          shouldHistoryBack: !0,
        });
        (0, l.useEffect)(() => {
          A();
        }, [A]),
          (0, l.useEffect)(
            () => () => {
              S.reset(), S.fullTracksListSubpage.reset();
            },
            [S, S.fullTracksListSubpage],
          ),
          S.fullTracksListSubpage.isNotFound && (0, o.notFound)(),
          (0, h.NO)(S.fullTracksListSubpage.loadingState === h.Gu.RESOLVE);
        let T = (0, l.useMemo)(
            () => ({
              Footer: () => (0, n.jsx)(b.$_, { className: _().footer }),
            }),
            [],
          ),
          j = (0, l.useCallback)(
            (e) => {
              let t = [];
              for (let n = e.startIndex; n <= e.endIndex; n++) {
                var a;
                let e =
                  null === (a = S.fullTracksListSubpage.ids) || void 0 === a
                    ? void 0
                    : a[n];
                !S.fullTracksListSubpage.getTrackByIndex(n) && e && t.push(e);
              }
              t.length && S.fullTracksListSubpage.getTracks({ trackIds: t });
            },
            [S.fullTracksListSubpage],
          );
        return S.fullTracksListSubpage.loadingState !== h.Gu.REJECT ||
          S.fullTracksListSubpage.isNotFound
          ? (
              null === (a = S.meta) || void 0 === a
                ? void 0
                : a.artist.isLegalRejected
            )
            ? E.isRejected
              ? (0, n.jsx)(m.D, {})
              : (0, n.jsx)(v.em, { disclaimer: E })
            : (0, n.jsx)(p.I7, {
                scrollElement: k,
                outerTitle: N({ id: "search-filters.track" }),
                children: (0, n.jsxs)("div", {
                  className: _().root,
                  children: [
                    (0, n.jsx)(b.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: I.canBack,
                      children: (0, n.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: (0, n.jsx)(c.Z, {
                          id: "search-filters.track",
                        }),
                      }),
                    }),
                    (0, n.jsx)(b.Wv, {
                      className: (0, i.W)(_().scrollContainer, _().important),
                      customComponents: T,
                      itemContentCallback: (e) => {
                        let t = S.fullTracksListSubpage.getTrackByIndex(e),
                          a = N(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: N({ id: "search-filters.track" }) },
                          );
                        return t
                          ? (0, n.jsx)(f.O2, {
                              track: t,
                              playContextParams: {
                                contextData: {
                                  type: u.Ak.Artist,
                                  meta: { id: Number(x) },
                                  from: P,
                                },
                                queueParams: { index: e },
                                loadContextMeta: !0,
                                entitiesData: C.unloadedEntitiesDataFromModels,
                              },
                            })
                          : (0, n.jsx)(b.DX, {
                              "aria-label": a,
                              variant: h.Lx.PLAYLIST,
                              className: _().shimmerItem,
                            });
                      },
                      totalCount:
                        null !==
                          (y =
                            null === (r = S.fullTracksListSubpage.ids) ||
                            void 0 === r
                              ? void 0
                              : r.length) && void 0 !== y
                          ? y
                          : 0,
                      onGetDataByRange: j,
                      pageSize: 20,
                      listClassName: _().content,
                      itemClassName: _().item,
                      totalRequests: S.fullTracksListSubpage.tracks.size,
                      handleRef: L,
                      context: {
                        listAriaLabel: N({
                          id: "entity-names.artist-tracks-list",
                        }),
                      },
                    }),
                  ],
                }),
              })
          : (0, n.jsx)(m.D, {});
      });
    },
    69658: function (e, t, a) {
      "use strict";
      a.d(t, {
        D: function () {
          return b;
        },
        _: function () {
          return S;
        },
      });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(99616),
        l = a(65244),
        s = a(71440),
        c = a(12670),
        u = a(1918),
        d = a(70579),
        m = a(13236),
        g = a(95539),
        p = a(84133),
        f = a(44285),
        v = a(63049),
        h = a.n(v);
      let b = (0, r.Pi)(() => {
        let { formatMessage: e } = (0, l.Z)(),
          { chart: t } = (0, p.oR)(),
          a = (0, p.k6)(),
          [r, v] = (0, m.zU)(),
          b = (0, p.x5)({ pageId: p.Rh.CHART });
        t.loadingState === p.Gu.IDLE && (0, o.use)(t.getTracks()),
          (0, p.NO)(t.loadingState === p.Gu.RESOLVE);
        let y = (0, o.useCallback)(
            (e) => {
              let a = t.items[e];
              return a && !t.isLoading && t.playlistMeta
                ? (0, n.jsx)(g._3, {
                    track: a,
                    playContextParams: {
                      contextData: {
                        type: s.Ak.Playlist,
                        meta: {
                          id: ""
                            .concat(t.playlistMeta.uid, ":")
                            .concat(t.playlistMeta.kind),
                        },
                        from: b,
                      },
                      queueParams: { index: e },
                      loadContextMeta: !0,
                    },
                  })
                : (0, n.jsx)(f.DX, {
                    className: h().shimmerItem,
                    variant: p.Lx.PLAYLIST,
                  });
            },
            [b, t.items, t.isLoading, t.playlistMeta],
          ),
          _ = (0, o.useMemo)(
            () => ({
              Footer: () => (0, n.jsx)(f.$_, { className: h().footer }),
            }),
            [],
          ),
          x = (0, o.useMemo)(
            () =>
              t.title
                ? (0, n.jsx)(u.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: t.title,
                  })
                : (0, n.jsx)(c.Shimmer, {
                    className: h().shimmerTitle,
                    radius: "l",
                  }),
            [t.title],
          );
        return t.loadingState === p.Gu.REJECT
          ? (0, n.jsx)(d.D, {})
          : (0, n.jsx)(p.Lh, {
              pageId: p.Rh.CHART,
              children: (0, n.jsx)(m.I7, {
                scrollElement: r,
                ...(t.title && { outerTitle: t.title }),
                children: (0, n.jsxs)("div", {
                  className: h().root,
                  children: [
                    (0, n.jsx)(f.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: a.canBack,
                      children: x,
                    }),
                    (0, n.jsx)(f.Wv, {
                      className: (0, i.W)(h().scrollContainer, h().important),
                      listClassName: h().content,
                      customComponents: _,
                      totalCount: t.items.length,
                      itemContentCallback: y,
                      debounceDurationInMs: 300,
                      handleRef: v,
                      context: {
                        listAriaLabel: e({
                          id: "entity-names.chart-tracks-list",
                        }),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
      var y = a(96555),
        _ = a(96431);
      let x = y.V5.model("ChartPagePlaylistModel", {
          uuid: y.V5.string,
          uid: y.V5.number,
          kind: y.V5.number,
        }),
        S = y.V5.model("ChartPageModel", {
          title: y.V5.maybeNull(y.V5.string),
          playlistMeta: y.V5.maybeNull(x),
          items: y.V5.array(g.le),
          loadingState: y.V5.enumeration(Object.values(p.Gu)),
        })
          .actions((e) => ({
            getTracks: (0, y.ls)(function* () {
              let { chartResource: t, logger: a } = (0, y.dU)(e);
              if (e.loadingState !== p.Gu.PENDING)
                try {
                  e.loadingState = p.Gu.PENDING;
                  let a = yield t.getChart();
                  (e.title = a.title),
                    (e.playlistMeta = (0, y.pj)({
                      uuid: a.playContext.playlistUuid,
                      uid: a.playContext.uid,
                      kind: a.playContext.kind,
                    })),
                    (e.items = (0, y.pj)(
                      a.chartPositions.map((e) =>
                        (0, g.S7)(e.track, e.chartPosition),
                      ),
                    )),
                    e.loadingState !== p.Gu.IDLE &&
                      (e.loadingState = p.Gu.RESOLVE);
                } catch (t) {
                  !(t instanceof _.eY) &&
                    (t instanceof Error || "string" == typeof t) &&
                    a.error(t),
                    e.loadingState !== p.Gu.IDLE &&
                      (e.loadingState = p.Gu.REJECT);
                }
            }),
          }))
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === p.Gu.PENDING || e.loadingState === p.Gu.IDLE
              );
            },
            get isLoadingError() {
              return e.loadingState === p.Gu.REJECT;
            },
          }));
    },
    52539: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          CollectionAlbumsPage: function () {
            return O;
          },
        });
      var n,
        i,
        r = a(8759),
        o = a(33423),
        l = a(11769),
        s = a(99616),
        c = a(26265),
        u = a(13236),
        d = a(84133);
      ((n = i || (i = {}))[(n.LIKED_ALBUMS = 0)] = "LIKED_ALBUMS"),
        (n[(n.UPCOMING_ALBUMS = 1)] = "UPCOMING_ALBUMS");
      var m = a(68585),
        g = a.n(m),
        p = a(35338),
        f = a(65244),
        v = a(96911),
        h = a(44285),
        b = a(2814),
        y = a(1918),
        _ = a(42769);
      let x = (e) => {
        let t = (0, d.m5)();
        return (0, s.useCallback)(
          (a) => {
            var n;
            switch (
              (null === (n = e.onTabChange) || void 0 === n || n.call(e, a), a)
            ) {
              case i.LIKED_ALBUMS:
                t("/collection/albums?tab=".concat(d.Gr.LIKED_ALBUMS));
                break;
              case i.UPCOMING_ALBUMS:
                t("/collection/albums?tab=".concat(d.Gr.UPCOMING_ALBUMS));
            }
          },
          [t, e],
        );
      };
      var S = a(915),
        C = a.n(S),
        E = a(12670);
      let N = () =>
          (0, r.jsxs)("div", {
            className: C().tabsShimmer,
            children: [
              (0, r.jsx)(E.Shimmer, { className: C().tabShimmer }),
              (0, r.jsx)(E.Shimmer, { className: C().tabShimmer }),
            ],
          }),
        P = (0, o.Pi)((e) => {
          var t, a, n;
          let { tabsState: o, tabElementId: l } = e,
            { collection: c, experiments: u } = (0, d.oR)(),
            { formatMessage: m } = (0, f.Z)(),
            g = (0, d.k6)(),
            { isScrolling: p } = (0, s.useContext)(h.pI),
            v = u.checkExperiment(d.pe.WebPresave, "on"),
            S = x(o),
            E = (0, s.useMemo)(
              () =>
                c.albums.items.length
                  ? ""
                      .concat(m({ id: "entity-names.albums" }), " • ")
                      .concat(c.albums.items.length)
                  : m({ id: "entity-names.albums" }),
              [c.albums.items.length, m],
            ),
            P = (0, s.useMemo)(() => {
              var e, t;
              return (
                null === (e = c.albums.upcomingAlbums) || void 0 === e
                  ? void 0
                  : e.length
              )
                ? ""
                    .concat(m({ id: "entity-names.upcoming-albums" }), " • ")
                    .concat(
                      null === (t = c.albums.upcomingAlbums) || void 0 === t
                        ? void 0
                        : t.length,
                    )
                : m({ id: "entity-names.upcoming-albums" });
            }, [
              null === (t = c.albums.upcomingAlbums) || void 0 === t
                ? void 0
                : t.length,
              m,
            ]);
          return (0, r.jsxs)("header", {
            className: C().root,
            "aria-hidden": p,
            children: [
              (0, r.jsxs)("div", {
                className: C().container,
                children: [
                  g.canBack &&
                    (0, r.jsx)(_.n, {
                      withForwardControl: !1,
                      withBackwardControl: g.canBack,
                    }),
                  (0, r.jsx)(y.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    className: C().title,
                    children: (0, r.jsx)(b.Z, {
                      id: "entity-names.favourite-albums",
                    }),
                  }),
                ],
              }),
              v &&
                (0, r.jsxs)(h.no, {
                  isLoading: c.albums.isLoading,
                  shimmer: (0, r.jsx)(N, {}),
                  className: C().tabs,
                  elementId: l,
                  ...o,
                  onTabChange: S,
                  children: [
                    (0, r.jsx)(h.OK, {
                      className: C().tab,
                      value: i.LIKED_ALBUMS,
                      title: E,
                      "aria-label": m(
                        { id: "entity-names.albums-count" },
                        { value: c.albums.items.length },
                      ),
                      "aria-hidden": p,
                      tabIndex: p ? -1 : 0,
                    }),
                    (0, r.jsx)(h.OK, {
                      className: C().tab,
                      value: i.UPCOMING_ALBUMS,
                      title: P,
                      "aria-label": m(
                        { id: "entity-names.upcoming-albums-count" },
                        {
                          value:
                            null !==
                              (n =
                                null === (a = c.albums.upcomingAlbums) ||
                                void 0 === a
                                  ? void 0
                                  : a.length) && void 0 !== n
                              ? n
                              : 0,
                        },
                      ),
                      "aria-hidden": p,
                      tabIndex: p ? -1 : 0,
                    }),
                  ],
                }),
            ],
          });
        });
      var k = a(21017),
        L = a.n(k);
      let I = (0, o.Pi)((e) => {
        var t, a, n;
        let { forwardRef: o, tabsState: l, tabElementId: u } = e,
          { user: m, collection: g } = (0, d.oR)(),
          { formatMessage: b } = (0, f.Z)(),
          y = (0, s.useCallback)(
            (e) => {
              m.account.uid &&
                g.albums.getData({
                  userId: m.account.uid,
                  metaType: "music",
                  page: e,
                  pageSize: 20,
                });
            },
            [g.albums, m.account.uid],
          ),
          _ = (0, s.useMemo)(
            () => ({
              Header: () => (0, r.jsx)(P, { tabsState: l, tabElementId: u }),
              Footer: () => (0, r.jsx)(h.$_, { className: L().footer }),
            }),
            [u, l],
          );
        return (0, r.jsx)("div", {
          className: L().root,
          children: (0, r.jsx)(c.TabPanel, {
            value: l.value,
            name: i.LIKED_ALBUMS,
            elementId: u,
            className: L().tabPanel,
            children: (0, r.jsx)(h.Wv, {
              className: (0, p.W)(L().scrollContainer, L().important),
              customComponents: _,
              itemContentCallback: (e) => {
                var t;
                let a =
                    null === (t = g.albums.items) || void 0 === t
                      ? void 0
                      : t[e],
                  n = b(
                    { id: "loading-messages.entity-is-loading" },
                    { entityName: b({ id: "entity-names.album" }) },
                  );
                return a
                  ? (0, r.jsx)(v.rf, { album: a, contentLinesCount: 4 }, a.id)
                  : (0, r.jsx)(h.hi, { "aria-label": n });
              },
              totalCount:
                null !==
                  (a =
                    null === (t = g.albums.pager) || void 0 === t
                      ? void 0
                      : t.total) && void 0 !== a
                  ? a
                  : 0,
              onGetDataByPage: y,
              pageSize: 20,
              totalRequests:
                null !== (n = g.albums.requestsCount) && void 0 !== n ? n : 0,
              listClassName: L().content,
              itemClassName: L().item,
              handleRef: o,
              context: {
                listAriaLabel: b({ id: "collection.liked-albums-list" }),
              },
            }),
          }),
        });
      });
      var A = a(71716);
      let T = (0, o.Pi)((e) => {
        let { forwardRef: t, tabsState: a, tabElementId: n } = e,
          { collection: o } = (0, d.oR)(),
          { formatMessage: l } = (0, f.Z)(),
          u = (0, s.useMemo)(() => {
            var e;
            let t = l(
              { id: "loading-messages.entity-is-loading" },
              { entityName: l({ id: "entity-names.album" }) },
            );
            return o.albums.isUpcomingAlbumsLoading
              ? (0, r.jsx)(h.Wm, { "aria-label": t })
              : null === (e = o.albums.upcomingAlbums) || void 0 === e
                ? void 0
                : e.map((e) => (0, r.jsx)(v.vK, { upcomingAlbum: e }, e.id));
          }, [o.albums.isUpcomingAlbumsLoading, o.albums.upcomingAlbums, l]);
        return (0, r.jsxs)(A.t, {
          className: L().root,
          containerClassName: (0, p.W)(L().scrollContainer, L().important),
          ref: t,
          children: [
            (0, r.jsx)(P, { tabsState: a, tabElementId: n }),
            (0, r.jsx)(c.TabPanel, {
              value: a.value,
              name: i.UPCOMING_ALBUMS,
              elementId: n,
              className: L().content,
              children: u,
            }),
            (0, r.jsx)(h.$_, { className: L().footer }),
          ],
        });
      });
      var j = a(14581),
        R = a(91036),
        w = a.n(R);
      let D = (0, o.Pi)((e) => {
          let { tabsState: t, tabElementId: a } = e,
            n = (0, s.useMemo)(() => {
              switch (t.value) {
                case i.LIKED_ALBUMS:
                  return (0, r.jsx)(b.Z, {
                    id: "error-messages.empty-collection-albums-title",
                  });
                case i.UPCOMING_ALBUMS:
                  return (0, r.jsx)(b.Z, {
                    id: "error-messages.empty-collection-upcoming-albums-title",
                  });
              }
            }, [t.value]),
            o = (0, s.useMemo)(() => {
              switch (t.value) {
                case i.LIKED_ALBUMS:
                  return (0, r.jsx)(b.Z, {
                    id: "error-messages.empty-collection-albums-description",
                  });
                case i.UPCOMING_ALBUMS:
                  return (0, r.jsx)(b.Z, {
                    id: "error-messages.empty-collection-upcoming-albums-description",
                  });
              }
            }, [t.value]);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(P, { tabsState: t, tabElementId: a }),
              (0, r.jsxs)(c.TabPanel, {
                value: t.value,
                name: t.value,
                elementId: a,
                className: w().root,
                children: [
                  (0, r.jsx)(j.J, {
                    className: w().icon,
                    size: "l",
                    variant: "album",
                  }),
                  (0, r.jsx)(y.Heading, {
                    className: w().title,
                    variant: "h3",
                    size: "xs",
                    children: n,
                  }),
                  (0, r.jsx)(y.Caption, {
                    className: w().text,
                    variant: "span",
                    type: "controls",
                    size: "l",
                    weight: "normal",
                    children: o,
                  }),
                ],
              }),
            ],
          });
        }),
        G = (0, o.Pi)((e) => {
          var t, a;
          let { tabsState: n, tabElementId: o } = e,
            { collection: l, experiments: c } = (0, d.oR)(),
            { formatMessage: u } = (0, f.Z)(),
            { isScrolling: m } = (0, s.useContext)(h.pI),
            g = (0, d.k6)(),
            v = x(n),
            S = c.checkExperiment(d.pe.WebPresave, "on"),
            E = (0, s.useMemo)(
              () =>
                l.albums.items.length
                  ? ""
                      .concat(u({ id: "entity-names.albums" }), " • ")
                      .concat(l.albums.items.length)
                  : u({ id: "entity-names.albums" }),
              [l.albums.items.length, u],
            ),
            P = (0, s.useMemo)(() => {
              var e, t;
              return (
                null === (e = l.albums.upcomingAlbums) || void 0 === e
                  ? void 0
                  : e.length
              )
                ? ""
                    .concat(u({ id: "entity-names.upcoming-albums" }), " • ")
                    .concat(
                      null === (t = l.albums.upcomingAlbums) || void 0 === t
                        ? void 0
                        : t.length,
                    )
                : u({ id: "entity-names.upcoming-albums" });
            }, [
              null === (t = l.albums.upcomingAlbums) || void 0 === t
                ? void 0
                : t.length,
              u,
            ]),
            k = (0, s.useMemo)(() => {
              if (S) {
                var e, t;
                return (0, r.jsxs)(h.no, {
                  isLoading: l.albums.isLoading,
                  shimmer: (0, r.jsx)(N, {}),
                  className: C().tabs,
                  elementId: o,
                  ...n,
                  onTabChange: v,
                  children: [
                    (0, r.jsx)(h.OK, {
                      className: C().tab,
                      value: i.LIKED_ALBUMS,
                      title: E,
                      "aria-label": u(
                        { id: "entity-names.albums-count" },
                        { value: l.albums.items.length },
                      ),
                      "aria-hidden": !m,
                      tabIndex: m ? 0 : -1,
                    }),
                    (0, r.jsx)(h.OK, {
                      className: C().tab,
                      value: i.UPCOMING_ALBUMS,
                      title: P,
                      "aria-label": u(
                        { id: "entity-names.upcoming-albums-count" },
                        {
                          value:
                            null !==
                              (t =
                                null === (e = l.albums.upcomingAlbums) ||
                                void 0 === e
                                  ? void 0
                                  : e.length) && void 0 !== t
                              ? t
                              : 0,
                        },
                      ),
                      "aria-hidden": !m,
                      tabIndex: m ? 0 : -1,
                    }),
                  ],
                });
              }
              return (0, r.jsx)(y.Heading, {
                variant: "h2",
                weight: "bold",
                size: "s",
                lineClamp: 1,
                className: C().title,
                children: (0, r.jsx)(b.Z, {
                  id: "entity-names.favourite-albums",
                }),
              });
            }, [
              E,
              l.albums.isLoading,
              l.albums.items.length,
              null === (a = l.albums.upcomingAlbums) || void 0 === a
                ? void 0
                : a.length,
              u,
              S,
              m,
              v,
              o,
              n,
              P,
            ]);
          return (0, r.jsx)(h.h4, {
            variant: "composite",
            staticClassName: (0, p.W)(C().staticHeader, C().important),
            "aria-hidden": !m,
            stickyClassName: (0, p.W)(C().stickyHeader, C().important),
            stickyChild: (0, r.jsxs)("div", {
              className: C().container,
              children: [
                g.canBack &&
                  (0, r.jsx)(_.n, {
                    withForwardControl: !1,
                    withBackwardControl: g.canBack,
                    buttonSize: "xs",
                  }),
                k,
              ],
            }),
          });
        }),
        O = (0, o.Pi)(() => {
          let e = (0, l.useSearchParams)(),
            { user: t, collection: a, experiments: n } = (0, d.oR)(),
            [o, m] = (0, u.zU)(),
            p = n.checkExperiment(d.pe.WebNextDisableCollectionAlbums, "on"),
            f = n.checkExperiment(d.pe.WebNextDisableCollection, "on"),
            v = n.checkExperiment(d.pe.WebPresave, "on"),
            h = (0, s.useId)(),
            b = (0, d.m5)(),
            y = (0, s.useMemo)(() => {
              let t = e.get("tab");
              if (!v) return b("/collection/albums"), i.LIKED_ALBUMS;
              switch (t) {
                case d.Gr.LIKED_ALBUMS:
                  break;
                case d.Gr.UPCOMING_ALBUMS:
                  return i.UPCOMING_ALBUMS;
              }
              return i.LIKED_ALBUMS;
            }, [b, v, e]),
            _ = (0, c.useTabsState)(y);
          if (
            (p && f && (0, l.redirect)("/"),
            p && (0, l.redirect)("/collection"),
            t.account.uid && a.albums.loadingState === d.Gu.IDLE)
          ) {
            let e = Promise.allSettled([
              a.albums.getData({
                userId: t.account.uid,
                metaType: "music",
                page: 0,
                pageSize: 20,
              }),
              a.albums.getPresaves({ userId: t.account.uid }),
            ]);
            (0, s.use)(e);
          }
          (0, d.NO)(a.albums.loadingState === d.Gu.RESOLVE),
            (0, s.useEffect)(
              () => () => {
                a.albums.reset();
              },
              [a.albums],
            );
          let x = (0, s.useMemo)(
              () => ({ "--header-height": "".concat(v ? 148 : 96, "px") }),
              [v],
            ),
            S = (0, s.useMemo)(() => {
              switch (_.value) {
                case i.LIKED_ALBUMS:
                  if (a.albums.isAlbumsEmpty)
                    return (0, r.jsx)(D, { tabsState: _, tabElementId: h });
                  return (0, r.jsx)(I, {
                    forwardRef: m,
                    tabsState: _,
                    tabElementId: h,
                  });
                case i.UPCOMING_ALBUMS:
                  if (a.albums.isUpcomingAlbumsEmpty)
                    return (0, r.jsx)(D, { tabsState: _, tabElementId: h });
                  return (0, r.jsx)(T, {
                    forwardRef: m,
                    tabsState: _,
                    tabElementId: h,
                  });
              }
            }, [
              a.albums.isAlbumsEmpty,
              a.albums.isUpcomingAlbumsEmpty,
              m,
              h,
              _,
            ]);
          return (0, r.jsx)(d.Lh, {
            pageId: d.Rh.OWN_ALBUMS,
            children: (0, r.jsx)(u.I7, {
              scrollElement: o,
              headerThreshold: v ? 148 : 96,
              children: (0, r.jsxs)("div", {
                className: g().root,
                style: x,
                children: [(0, r.jsx)(G, { tabsState: _, tabElementId: h }), S],
              }),
            }),
          });
        });
    },
    97748: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          CollectionArtistsPage: function () {
            return h;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(2814),
        u = a(1918),
        d = a(81546),
        m = a(13236),
        g = a(84133),
        p = a(44285),
        f = a(77979),
        v = a.n(f);
      let h = (0, r.Pi)(() => {
        var e, t, a, r;
        let { user: f, collection: h, experiments: b } = (0, g.oR)(),
          { formatMessage: y } = (0, s.Z)(),
          [_, x] = (0, m.zU)(),
          S = (0, g.k6)(),
          C = b.checkExperiment(g.pe.WebNextDisableCollectionArtists, "on"),
          E = b.checkExperiment(g.pe.WebNextDisableCollection, "on");
        C && E && (0, o.redirect)("/"),
          C && (0, o.redirect)("/collection"),
          f.account.uid &&
            h.artists.loadingState === g.Gu.IDLE &&
            (0, l.use)(h.artists.getData({ userId: f.account.uid })),
          (0, g.NO)(h.artists.loadingState === g.Gu.RESOLVE),
          (0, l.useEffect)(
            () => () => {
              h.artists.reset();
            },
            [h.artists],
          );
        let N = (0, l.useCallback)(
            (e) => {
              f.account.uid &&
                h.artists.getData({
                  userId: f.account.uid,
                  page: e,
                  pageSize: 20,
                });
            },
            [h.artists, f.account.uid],
          ),
          P = (0, l.useMemo)(
            () => ({
              Footer: () => (0, n.jsx)(p.$_, { className: v().footer }),
            }),
            [],
          );
        return (0, n.jsx)(g.Lh, {
          pageId: g.Rh.OWN_ARTISTS,
          children: (0, n.jsx)(m.I7, {
            scrollElement: _,
            outerTitle: y({ id: "entity-names.artists" }),
            children: (0, n.jsxs)("div", {
              className: v().root,
              children: [
                (0, n.jsx)(p.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: S.canBack,
                  children: (0, n.jsx)(u.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, n.jsx)(c.Z, { id: "entity-names.artists" }),
                  }),
                }),
                (0, n.jsx)(p.Wv, {
                  className: (0, i.W)(v().scrollContainer, v().important),
                  customComponents: P,
                  itemContentCallback: (e) => {
                    var t, a;
                    let i =
                        null === (a = h.artists) || void 0 === a
                          ? void 0
                          : null === (t = a.items) || void 0 === t
                            ? void 0
                            : t[e],
                      r = y(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: y({ id: "entity-names.artist" }) },
                      );
                    return i
                      ? (0, n.jsx)(
                          d.IT,
                          { artist: i, contentLinesCount: 3 },
                          i.id,
                        )
                      : (0, n.jsx)(p.hi, {
                          "aria-label": r,
                          round: !0,
                          centered: !0,
                        });
                  },
                  totalCount:
                    null !==
                      (a =
                        null === (t = h.artists) || void 0 === t
                          ? void 0
                          : null === (e = t.pager) || void 0 === e
                            ? void 0
                            : e.total) && void 0 !== a
                      ? a
                      : 0,
                  onGetDataByPage: N,
                  pageSize: 20,
                  totalRequests:
                    null !== (r = h.artists.requests) && void 0 !== r ? r : 0,
                  listClassName: v().content,
                  itemClassName: v().item,
                  handleRef: x,
                  context: {
                    listAriaLabel: y({ id: "collection.liked-artists-list" }),
                  },
                }),
              ],
            }),
          }),
        });
      });
    },
    3653: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          CollectionPage: function () {
            return x;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(2814),
        u = a(36019),
        d = a(71716),
        m = a(1918),
        g = a(74241),
        p = a(70579),
        f = a(13236),
        v = a(3561),
        h = a(84133),
        b = a(44285),
        y = a(23234),
        _ = a.n(y);
      let x = (0, r.Pi)(() => {
        let { collection: e, user: t, experiments: a } = (0, h.oR)(),
          [r, y] = (0, f.zU)(),
          { formatMessage: x } = (0, s.Z)(),
          S = e.landing.loadingState !== h.Gu.REJECT && !!t.collectionHue;
        a.checkExperiment(h.pe.WebNextDisableCollection, "on") &&
          (0, o.redirect)("/"),
          e.landing.loadingState === h.Gu.IDLE &&
            (0, l.use)(
              e.landing.getSkeleton(
                { id: u.jB.WEB_COLLECTION, showWizard: t.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            ),
          (0, l.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, h.NO)(e.landing.loadingState === h.Gu.RESOLVE);
        let C = (0, g._B)(e.landing),
          E = (0, l.useMemo)(
            () =>
              S && t.collectionHue
                ? { "--collection-color": (0, v.Cx)(t.collectionHue) }
                : null,
            [S, t.collectionHue],
          ),
          N = (0, l.useMemo)(
            () => ({
              color: (e) =>
                (0, n.jsx)(b.wx, {
                  title: x({ id: "collection.collection-color-title" }),
                  description: x({
                    id: "collection.collection-color-description",
                  }),
                  placement: "right",
                  children: (0, n.jsx)("span", {
                    className: _().collectionColor,
                    style: E,
                    children: e,
                  }),
                }),
            }),
            [E, x],
          );
        return (0, n.jsx)(h.Lh, {
          pageId: h.Rh.OWN_COLLECTION,
          children: (0, n.jsxs)(f.I7, {
            scrollElement: r,
            outerTitle: x({ id: "entity-names.collection" }),
            children: [
              (0, n.jsx)(b.h4, {
                variant: "text",
                showControls: !1,
                children: (0, n.jsxs)("div", {
                  className: _().header,
                  children: [
                    (0, n.jsx)(m.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      children: (0, n.jsx)(c.Z, {
                        id: "entity-names.collection",
                      }),
                    }),
                    S &&
                      (0, n.jsx)(m.Caption, {
                        className: _().description,
                        variant: "div",
                        size: "m",
                        children: (0, n.jsx)(c.Z, {
                          id: "collection.collection-color",
                          values: N,
                        }),
                      }),
                  ],
                }),
              }),
              (0, n.jsxs)(d.t, {
                className: (0, i.W)(_().root, {
                  [_().root_withCollectionColor]: S,
                }),
                containerClassName: _().content,
                ref: y,
                children: [
                  (0, n.jsx)("div", {
                    className: (0, i.W)(_().landing, {
                      [_().landing_onlyWizard]: C,
                    }),
                    children: (0, n.jsx)(g.Od, {
                      landing: e.landing,
                      errorComponent: (0, n.jsx)(p.D, {
                        className: _().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, n.jsx)(b.$_, { className: _().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    90554: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          CollectionPlaylistsCreatedPage: function () {
            return h;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(2814),
        u = a(1918),
        d = a(13236),
        m = a(20210),
        g = a(84133),
        p = a(44285),
        f = a(85742),
        v = a.n(f);
      let h = (0, r.Pi)(() => {
        var e, t, a;
        let {
            user: r,
            collection: { playlistsCreated: f },
            experiments: h,
          } = (0, g.oR)(),
          { formatMessage: b } = (0, s.Z)(),
          [y, _] = (0, d.zU)(),
          x = (0, g.k6)(),
          S = h.checkExperiment(
            g.pe.WebNextDisableCollectionCreatedPlaylists,
            "on",
          ),
          C = h.checkExperiment(g.pe.WebNextDisableCollection, "on");
        S && C && (0, o.redirect)("/"), S && (0, o.redirect)("/collection");
        let E = (0, l.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(p.$_, { className: v().footer }) }),
          [],
        );
        r.account.uid &&
          f.loadingState === g.Gu.IDLE &&
          (0, l.use)(
            f.getData({ userId: r.account.uid, page: 0, pageSize: 20 }),
          ),
          (0, g.NO)(f.loadingState === g.Gu.RESOLVE);
        let N = (0, l.useCallback)(
          (e) => {
            r.account.uid &&
              f.getData({ userId: r.account.uid, page: e, pageSize: 20 });
          },
          [f, r.account.uid],
        );
        return (
          (0, l.useEffect)(
            () => () => {
              f.reset();
            },
            [f],
          ),
          (0, n.jsx)(g.Lh, {
            pageId: g.Rh.OWN_PLAYLISTS,
            children: (0, n.jsx)(d.I7, {
              scrollElement: y,
              outerTitle: b({ id: "entity-names.my-playlists" }),
              children: (0, n.jsxs)("div", {
                className: v().root,
                children: [
                  (0, n.jsx)(p.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: x.canBack,
                    children: (0, n.jsx)(u.Heading, {
                      id: "collection-playlistsCreated-header",
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: (0, n.jsx)(c.Z, {
                        id: "entity-names.my-playlists",
                      }),
                    }),
                  }),
                  (0, n.jsx)(p.Wv, {
                    className: (0, i.W)(v().scrollContainer, v().important),
                    customComponents: E,
                    itemContentCallback: (e) => {
                      var t;
                      let a =
                          null == f
                            ? void 0
                            : null === (t = f.items) || void 0 === t
                              ? void 0
                              : t[e],
                        i = b(
                          { id: "loading-messages.entity-is-loading" },
                          { entityName: b({ id: "entity-names.playlist" }) },
                        );
                      return a
                        ? (0, n.jsx)(
                            m.ZL,
                            { playlist: a, contentLinesCount: 3 },
                            a.key,
                          )
                        : (0, n.jsx)(p.hi, { "aria-label": i });
                    },
                    totalCount:
                      null !==
                        (t =
                          null == f
                            ? void 0
                            : null === (e = f.pager) || void 0 === e
                              ? void 0
                              : e.total) && void 0 !== t
                        ? t
                        : 0,
                    onGetDataByPage: N,
                    pageSize: 20,
                    totalRequests:
                      null !== (a = f.requests) && void 0 !== a ? a : 0,
                    listClassName: v().content,
                    itemClassName: v().item,
                    handleRef: _,
                    context: {
                      listAriaLabel: b({
                        id: "collection.created-playlists-list",
                      }),
                    },
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    86643: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          CollectionPlaylistsLikedPage: function () {
            return b;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(2814),
        u = a(36019),
        d = a(1918),
        m = a(13236),
        g = a(20210),
        p = a(84133),
        f = a(44285),
        v = a(92158),
        h = a.n(v);
      let b = (0, r.Pi)(() => {
        var e, t, a;
        let {
            user: r,
            collection: { playlistsLiked: v },
            experiments: b,
          } = (0, p.oR)(),
          { formatMessage: y } = (0, s.Z)(),
          [_, x] = (0, m.zU)(),
          S = (0, p.k6)(),
          C = b.checkExperiment(
            p.pe.WebNextDisableCollectionLikedPlaylists,
            "on",
          ),
          E = b.checkExperiment(p.pe.WebNextDisableCollection, "on");
        C && E && (0, o.redirect)("/"), C && (0, o.redirect)("/collection");
        let N = (0, l.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(f.$_, { className: h().footer }) }),
          [],
        );
        r.account.uid &&
          v.loadingState === p.Gu.IDLE &&
          (0, l.use)(
            v.getData({
              userId: r.account.uid,
              sortOrder: u.As.DESC,
              metaType: "music",
              page: 0,
              pageSize: 20,
            }),
          ),
          (0, p.NO)(v.loadingState === p.Gu.RESOLVE);
        let P = (0, l.useCallback)(
          (e) => {
            r.account.uid &&
              v.getData({
                userId: r.account.uid,
                sortOrder: u.As.DESC,
                metaType: "music",
                page: e,
                pageSize: 20,
              });
          },
          [v, r.account.uid],
        );
        return (
          (0, l.useEffect)(
            () => () => {
              v.reset();
            },
            [v],
          ),
          (0, n.jsx)(p.Lh, {
            pageId: p.Rh.OWN_PLAYLISTS,
            children: (0, n.jsx)(m.I7, {
              scrollElement: _,
              outerTitle: y({ id: "entity-names.favourite-playlists" }),
              children: (0, n.jsxs)("div", {
                className: h().root,
                children: [
                  (0, n.jsx)(f.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: S.canBack,
                    children: (0, n.jsx)(d.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: (0, n.jsx)(c.Z, {
                        id: "entity-names.favourite-playlists",
                      }),
                    }),
                  }),
                  (0, n.jsx)(f.Wv, {
                    className: (0, i.W)(h().scrollContainer, h().important),
                    customComponents: N,
                    itemContentCallback: (e) => {
                      var t;
                      let a =
                          null == v
                            ? void 0
                            : null === (t = v.items) || void 0 === t
                              ? void 0
                              : t[e],
                        i = y(
                          { id: "loading-messages.entity-is-loading" },
                          { entityName: y({ id: "entity-names.playlist" }) },
                        );
                      return a
                        ? (0, n.jsx)(
                            g.ZL,
                            { playlist: a, contentLinesCount: 3 },
                            a.key,
                          )
                        : (0, n.jsx)(f.hi, { "aria-label": i });
                    },
                    totalCount:
                      null !==
                        (t =
                          null == v
                            ? void 0
                            : null === (e = v.pager) || void 0 === e
                              ? void 0
                              : e.total) && void 0 !== t
                        ? t
                        : 0,
                    onGetDataByPage: P,
                    pageSize: 20,
                    totalRequests:
                      null !== (a = v.requests) && void 0 !== a ? a : 0,
                    listClassName: h().content,
                    itemClassName: h().item,
                    handleRef: x,
                    context: {
                      listAriaLabel: y({
                        id: "collection.liked-playlists-list",
                      }),
                    },
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    1363: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          CollectionPlaylistsPage: function () {
            return B;
          },
        });
      var n,
        i,
        r,
        o,
        l = a(8759),
        s = a(33423),
        c = a(11769),
        u = a(99616),
        d = a(36019),
        m = a(26265),
        g = a(13236),
        p = a(84133);
      ((n = r || (r = {})).CREATED = "created"),
        (n.LIKED = "liked"),
        ((i = o || (o = {}))[(i.CREATED = 0)] = "CREATED"),
        (i[(i.LIKED = 1)] = "LIKED");
      var f = a(95187),
        v = a.n(f),
        h = a(35338),
        b = a(65244),
        y = a(20210),
        _ = a(3515),
        x = a(44285),
        S = a(2814),
        C = a(1918),
        E = a(42769);
      let N = (e) => {
        let t = (0, p.m5)();
        return (0, u.useCallback)(
          (a) => {
            var n;
            switch (
              (null === (n = e.onTabChange) || void 0 === n || n.call(e, a), a)
            ) {
              case o.CREATED:
                t("/collection/playlists?tab=".concat(r.CREATED));
                break;
              case o.LIKED:
                t("/collection/playlists?tab=".concat(r.LIKED));
            }
          },
          [t, e],
        );
      };
      var P = a(53158),
        k = a.n(P),
        L = a(12670);
      let I = () =>
          (0, l.jsxs)("div", {
            className: k().tabsShimmer,
            children: [
              (0, l.jsx)(L.Shimmer, { className: k().tabShimmer }),
              (0, l.jsx)(L.Shimmer, { className: k().tabShimmer }),
            ],
          }),
        A = (0, s.Pi)((e) => {
          var t, a, n, i, r, s;
          let { tabsState: c, tabElementId: d } = e,
            {
              collection: { playlistsCreated: m, playlistsLiked: g },
            } = (0, p.oR)(),
            { formatMessage: f } = (0, b.Z)(),
            v = (0, p.k6)(),
            { isScrolling: h } = (0, u.useContext)(x.pI),
            y = N(c),
            _ = (0, u.useMemo)(() => {
              var e;
              return (null === (e = m.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(
                      f({ id: "collection.your-created-playlists" }),
                      " • ",
                    )
                    .concat(m.pager.total)
                : f({ id: "collection.your-created-playlists" });
            }, [f, null === (t = m.pager) || void 0 === t ? void 0 : t.total]),
            P = (0, u.useMemo)(() => {
              var e;
              return (null === (e = g.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(f({ id: "collection.your-liked-playlists" }), " • ")
                    .concat(g.pager.total)
                : f({ id: "collection.your-liked-playlists" });
            }, [f, null === (a = g.pager) || void 0 === a ? void 0 : a.total]);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("header", {
                className: k().root,
                "aria-hidden": h,
                children: (0, l.jsxs)("div", {
                  className: k().container,
                  children: [
                    v.canBack &&
                      (0, l.jsx)(E.n, {
                        withForwardControl: !1,
                        withBackwardControl: v.canBack,
                      }),
                    (0, l.jsx)(C.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      className: k().title,
                      children: (0, l.jsx)(S.Z, {
                        id: "entity-names.artist-playlist",
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsxs)(x.no, {
                isLoading: m.isLoading,
                shimmer: (0, l.jsx)(I, {}),
                className: k().staticTabs,
                elementId: d,
                ...c,
                onTabChange: y,
                children: [
                  (0, l.jsx)(x.OK, {
                    className: k().tab,
                    value: o.CREATED,
                    title: _,
                    "aria-label": f(
                      { id: "entity-names.created-playlists-count" },
                      {
                        value:
                          null !==
                            (r =
                              null === (n = m.pager) || void 0 === n
                                ? void 0
                                : n.total) && void 0 !== r
                            ? r
                            : 0,
                      },
                    ),
                    "aria-hidden": h,
                    tabIndex: h ? -1 : 0,
                  }),
                  (0, l.jsx)(x.OK, {
                    className: k().tab,
                    value: o.LIKED,
                    title: P,
                    "aria-label": f(
                      { id: "entity-names.liked-playlists-count" },
                      {
                        value:
                          null !==
                            (s =
                              null === (i = g.pager) || void 0 === i
                                ? void 0
                                : i.total) && void 0 !== s
                            ? s
                            : 0,
                      },
                    ),
                    "aria-hidden": h,
                    tabIndex: h ? -1 : 0,
                  }),
                ],
              }),
            ],
          });
        });
      var T = a(82825),
        j = a.n(T);
      let R = (0, s.Pi)((e) => {
          var t, a, n;
          let { forwardRef: i, tabsState: r, tabElementId: s } = e,
            {
              user: c,
              collection: { playlistsCreated: d },
            } = (0, p.oR)(),
            { formatMessage: g } = (0, b.Z)(),
            f = (0, u.useMemo)(
              () => ({
                Header: () => (0, l.jsx)(A, { tabsState: r, tabElementId: s }),
                Footer: () => (0, l.jsx)(x.$_, { className: j().footer }),
              }),
              [s, r],
            ),
            v = (0, u.useCallback)(
              (e) => {
                c.account.uid &&
                  d.getData({ userId: c.account.uid, page: e, pageSize: 20 });
              },
              [d, c.account.uid],
            ),
            S =
              (null !==
                (a =
                  null === (t = d.pager) || void 0 === t ? void 0 : t.total) &&
              void 0 !== a
                ? a
                : 0) + 1;
          return (0, l.jsx)("div", {
            className: j().root,
            children: (0, l.jsx)(m.TabPanel, {
              value: r.value,
              name: o.CREATED,
              elementId: s,
              className: j().tabPanel,
              children: (0, l.jsx)(x.Wv, {
                className: (0, h.W)(j().scrollContainer, j().important),
                customComponents: f,
                itemContentCallback: (e) => {
                  var t;
                  if (0 === e) return (0, l.jsx)(_.lN, {});
                  let a =
                      null == d
                        ? void 0
                        : null === (t = d.items) || void 0 === t
                          ? void 0
                          : t[e - 1],
                    n = g(
                      { id: "loading-messages.entity-is-loading" },
                      { entityName: g({ id: "entity-names.playlist" }) },
                    );
                  return a
                    ? (0, l.jsx)(
                        y.ZL,
                        { playlist: a, contentLinesCount: 3 },
                        a.key,
                      )
                    : (0, l.jsx)(x.hi, { "aria-label": n });
                },
                totalCount: S,
                onGetDataByPage: v,
                pageSize: 20,
                totalRequests:
                  null !== (n = d.requests) && void 0 !== n ? n : 0,
                listClassName: j().content,
                itemClassName: j().item,
                handleRef: i,
                context: {
                  listAriaLabel: g({ id: "collection.created-playlists-list" }),
                },
              }),
            }),
          });
        }),
        w = (0, s.Pi)((e) => {
          var t, a, n;
          let { forwardRef: i, tabsState: r, tabElementId: s } = e,
            {
              user: c,
              collection: { playlistsLiked: g },
            } = (0, p.oR)(),
            { formatMessage: f } = (0, b.Z)(),
            v = (0, u.useCallback)(
              (e) => {
                c.account.uid &&
                  g.getData({
                    userId: c.account.uid,
                    sortOrder: d.As.DESC,
                    metaType: "music",
                    page: e,
                    pageSize: 20,
                  });
              },
              [g, c.account.uid],
            ),
            _ = (0, u.useMemo)(
              () => ({
                Header: () => (0, l.jsx)(A, { tabsState: r, tabElementId: s }),
                Footer: () => (0, l.jsx)(x.$_, { className: j().footer }),
              }),
              [s, r],
            );
          return (0, l.jsx)("div", {
            className: j().root,
            children: (0, l.jsx)(m.TabPanel, {
              value: r.value,
              name: o.LIKED,
              elementId: s,
              className: j().tabPanel,
              children: (0, l.jsx)(x.Wv, {
                className: (0, h.W)(j().scrollContainer, j().important),
                customComponents: _,
                itemContentCallback: (e) => {
                  var t;
                  let a =
                      null == g
                        ? void 0
                        : null === (t = g.items) || void 0 === t
                          ? void 0
                          : t[e],
                    n = f(
                      { id: "loading-messages.entity-is-loading" },
                      { entityName: f({ id: "entity-names.playlist" }) },
                    );
                  return a
                    ? (0, l.jsx)(
                        y.ZL,
                        { playlist: a, contentLinesCount: 3 },
                        a.key,
                      )
                    : (0, l.jsx)(x.hi, { "aria-label": n });
                },
                totalCount:
                  null !==
                    (a =
                      null == g
                        ? void 0
                        : null === (t = g.pager) || void 0 === t
                          ? void 0
                          : t.total) && void 0 !== a
                    ? a
                    : 0,
                onGetDataByPage: v,
                pageSize: 20,
                totalRequests:
                  null !== (n = g.requests) && void 0 !== n ? n : 0,
                listClassName: j().content,
                itemClassName: j().item,
                handleRef: i,
                context: {
                  listAriaLabel: f({ id: "collection.liked-playlists-list" }),
                },
              }),
            }),
          });
        });
      var D = a(14581),
        G = a(36397),
        O = a.n(G);
      let V = (0, s.Pi)((e) => {
          let { tabsState: t, tabElementId: a } = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(A, { tabsState: t, tabElementId: a }),
              (0, l.jsxs)(m.TabPanel, {
                value: t.value,
                name: t.value,
                elementId: a,
                className: O().root,
                children: [
                  (0, l.jsx)(D.J, {
                    className: O().icon,
                    size: "l",
                    variant: "album",
                  }),
                  (0, l.jsx)(C.Heading, {
                    className: O().title,
                    variant: "h3",
                    size: "xs",
                    children: (0, l.jsx)(S.Z, {
                      id: "error-messages.empty-collection-liked-playlists",
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        M = (0, s.Pi)((e) => {
          var t, a, n, i, r, s;
          let { tabsState: c, tabElementId: d } = e,
            {
              collection: { playlistsCreated: m, playlistsLiked: g },
            } = (0, p.oR)(),
            { formatMessage: f } = (0, b.Z)(),
            { isScrolling: v } = (0, u.useContext)(x.pI),
            y = (0, p.k6)(),
            _ = N(c),
            S = (0, u.useMemo)(() => {
              var e, t;
              return (null === (e = m.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(
                      f({ id: "collection.your-created-playlists" }),
                      " • ",
                    )
                    .concat(
                      null === (t = m.pager) || void 0 === t ? void 0 : t.total,
                    )
                : f({ id: "collection.your-created-playlists" });
            }, [f, null === (t = m.pager) || void 0 === t ? void 0 : t.total]),
            C = (0, u.useMemo)(() => {
              var e, t;
              return (null === (e = g.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(f({ id: "collection.your-liked-playlists" }), " • ")
                    .concat(
                      null === (t = g.pager) || void 0 === t ? void 0 : t.total,
                    )
                : f({ id: "collection.your-liked-playlists" });
            }, [f, null === (a = g.pager) || void 0 === a ? void 0 : a.total]);
          return (0, l.jsx)(x.h4, {
            variant: "composite",
            staticClassName: (0, h.W)(k().staticHeader, k().important),
            "aria-hidden": !v,
            stickyClassName: (0, h.W)(k().stickyHeader, k().important),
            stickyChild: (0, l.jsxs)("div", {
              className: k().container,
              children: [
                y.canBack &&
                  (0, l.jsx)(E.n, {
                    withForwardControl: !1,
                    withBackwardControl: y.canBack,
                    buttonSize: "xs",
                  }),
                (0, l.jsxs)(x.no, {
                  isLoading: m.isLoading,
                  shimmer: (0, l.jsx)(I, {}),
                  className: k().stickyTabs,
                  elementId: d,
                  ...c,
                  onTabChange: _,
                  children: [
                    (0, l.jsx)(x.OK, {
                      className: k().tab,
                      value: o.CREATED,
                      title: S,
                      "aria-label": f(
                        { id: "entity-names.created-playlists-count" },
                        {
                          value:
                            null !==
                              (r =
                                null === (n = m.pager) || void 0 === n
                                  ? void 0
                                  : n.total) && void 0 !== r
                              ? r
                              : 0,
                        },
                      ),
                      "aria-hidden": !v,
                      tabIndex: v ? 0 : -1,
                    }),
                    (0, l.jsx)(x.OK, {
                      className: k().tab,
                      value: o.LIKED,
                      title: C,
                      "aria-label": f(
                        { id: "entity-names.liked-playlists-count" },
                        {
                          value:
                            null !==
                              (s =
                                null === (i = g.pager) || void 0 === i
                                  ? void 0
                                  : i.total) && void 0 !== s
                              ? s
                              : 0,
                        },
                      ),
                      "aria-hidden": !v,
                      tabIndex: v ? 0 : -1,
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        B = (0, s.Pi)(() => {
          let e = (0, c.useSearchParams)(),
            {
              user: t,
              collection: { playlistsCreated: a, playlistsLiked: n },
              experiments: i,
            } = (0, p.oR)(),
            [s, f] = (0, g.zU)(),
            h = i.checkExperiment(p.pe.WebNextDisableCollection, "on"),
            b = (0, u.useId)(),
            y = (0, u.useMemo)(() => {
              let t = e.get("tab");
              switch (t) {
                case r.CREATED:
                  break;
                case r.LIKED:
                  return o.LIKED;
              }
              return o.CREATED;
            }, [e]),
            _ = (0, m.useTabsState)(y);
          if (
            (h && (0, c.redirect)("/"),
            t.account.uid && a.loadingState === p.Gu.IDLE)
          ) {
            let e = Promise.allSettled([
              a.getData({ userId: t.account.uid, page: 0, pageSize: 20 }),
              n.getData({
                userId: t.account.uid,
                sortOrder: d.As.DESC,
                metaType: "music",
                page: 0,
                pageSize: 20,
              }),
            ]);
            (0, u.use)(e);
          }
          (0, p.NO)(a.loadingState === p.Gu.RESOLVE),
            (0, u.useEffect)(
              () => () => {
                a.reset(), n.reset();
              },
              [a, n],
            );
          let x = (0, u.useMemo)(() => {
            switch (_.value) {
              case o.CREATED:
                return (0, l.jsx)(R, {
                  forwardRef: f,
                  tabsState: _,
                  tabElementId: b,
                });
              case o.LIKED:
                if (n.isEmpty)
                  return (0, l.jsx)(V, { tabsState: _, tabElementId: b });
                return (0, l.jsx)(w, {
                  forwardRef: f,
                  tabsState: _,
                  tabElementId: b,
                });
            }
          }, [f, n.isEmpty, b, _]);
          return (0, l.jsx)(p.Lh, {
            pageId: p.Rh.OWN_PLAYLISTS,
            children: (0, l.jsx)(g.I7, {
              scrollElement: s,
              headerThreshold: 148,
              children: (0, l.jsxs)("div", {
                className: v().root,
                children: [(0, l.jsx)(M, { tabsState: _, tabElementId: b }), x],
              }),
            }),
          });
        });
    },
    30651: function (e, t, a) {
      "use strict";
      a.d(t, {
        rT: function () {
          return i.GenreAlbumsPage;
        },
        eq: function () {
          return r.GenreArtistsPage;
        },
        a0: function () {
          return n.GenrePage;
        },
        Kx: function () {
          return y;
        },
        Fe: function () {
          return o.GenrePlaylistsPage;
        },
      });
      var n = a(72376),
        i = a(72683),
        r = a(58936),
        o = a(85694);
      a(75244);
      var l = a(96555),
        s = a(96431),
        c = a(96911),
        u = a(20210),
        d = a(81446),
        m = a(84133),
        g = a(21774),
        p = a(58362);
      let f = l.V5.model("GenreAlbumsPage", {
          loadingState: l.V5.enumeration(Object.values(m.Gu)),
          pager: l.V5.maybeNull(p.Vn),
          alreadyRequestedPages: l.V5.map(l.V5.number),
          pendingPages: l.V5.map(l.V5.number),
          requests: l.V5.maybeNull(l.V5.number),
          errorStatusCode: l.V5.maybeNull(l.V5.number),
          fullTitle: l.V5.maybeNull(l.V5.string),
          items: l.V5.array(l.V5.maybeNull(c.ug)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === m.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                n =
                  e.errorStatusCode === s.CN.NOT_FOUND ||
                  e.errorStatusCode === s.CN.BAD_REQUEST;
              return (e.loadingState === m.Gu.REJECT && n) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === m.Gu.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, l.ls)(function* (t) {
                let { metatagId: a, page: n = 0, pageSize: i = 20 } = t,
                  { metatagsResource: r, logger: o } = (0, l.dU)(e);
                if (
                  !(
                    (e.loadingState === m.Gu.PENDING &&
                      e.pendingPages.has("".concat(n))) ||
                    e.alreadyRequestedPages.has("".concat(n))
                  )
                ) {
                  "number" == typeof n &&
                    e.alreadyRequestedPages.set("".concat(n), n);
                  try {
                    var c;
                    (e.loadingState = m.Gu.PENDING),
                      e.pendingPages.set("".concat(n), n);
                    let t = yield r.getMetatagAlbums({
                      id: a,
                      offset: n,
                      limit: i,
                    });
                    e.fullTitle = t.title.fullTitle;
                    let o = { page: n, perPage: i, total: t.pager.total };
                    0 === e.items.length &&
                      (e.items = (0, l.pj)(
                        Array.from({ length: o.total }, () => null),
                      ));
                    let s = t.albums.map(g.N);
                    (0, m.AG)({
                      items: e.items,
                      mappedRawItems: s,
                      page: n,
                      pageSize: i,
                    }),
                      (e.pager = o),
                      (e.requests =
                        (null !== (c = e.requests) && void 0 !== c ? c : 0) +
                        1),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.RESOLVE);
                  } catch (t) {
                    ("string" == typeof t || t instanceof Error) && o.error(t),
                      t instanceof s.du &&
                        (t.statusCode === s.CN.NOT_FOUND ||
                          t.statusCode === s.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = s.CN.NOT_FOUND),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(n));
                  }
                }
              }),
              reset() {
                (e.loadingState = m.Gu.IDLE),
                  e.pendingPages.clear(),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  (e.errorStatusCode = null),
                  (e.items = (0, l.pj)([]));
              },
            };
            return t;
          }),
        v = l.V5.model("GenreArtistsPage", {
          loadingState: l.V5.enumeration(Object.values(m.Gu)),
          pager: l.V5.maybeNull(p.Vn),
          alreadyRequestedPages: l.V5.map(l.V5.number),
          pendingPages: l.V5.map(l.V5.number),
          requests: l.V5.maybeNull(l.V5.number),
          errorStatusCode: l.V5.maybeNull(l.V5.number),
          fullTitle: l.V5.maybeNull(l.V5.string),
          items: l.V5.array(l.V5.maybeNull(d.Go)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === m.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                n =
                  e.errorStatusCode === s.CN.NOT_FOUND ||
                  e.errorStatusCode === s.CN.BAD_REQUEST;
              return (e.loadingState === m.Gu.REJECT && n) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === m.Gu.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, l.ls)(function* (t) {
                let { metatagId: a, page: n = 0, pageSize: i = 20 } = t,
                  { metatagsResource: r, logger: o } = (0, l.dU)(e);
                if (
                  !(
                    (e.loadingState === m.Gu.PENDING &&
                      e.pendingPages.has("".concat(n))) ||
                    e.alreadyRequestedPages.has("".concat(n))
                  )
                ) {
                  "number" == typeof n &&
                    e.alreadyRequestedPages.set("".concat(n), n);
                  try {
                    var c;
                    (e.loadingState = m.Gu.PENDING),
                      e.pendingPages.set("".concat(n), n);
                    let t = yield r.getMetatagArtists({
                      id: a,
                      offset: n,
                      limit: i,
                      period: "week",
                    });
                    e.fullTitle = t.title.fullTitle;
                    let o = { page: n, perPage: i, total: t.pager.total };
                    0 === e.items.length &&
                      (e.items = (0, l.pj)(
                        Array.from({ length: o.total }, () => null),
                      ));
                    let s = t.artists.map((e) => (0, d.d)(e.artist));
                    (0, m.AG)({
                      items: e.items,
                      mappedRawItems: s,
                      page: n,
                      pageSize: i,
                    }),
                      (e.pager = o),
                      (e.requests =
                        (null !== (c = e.requests) && void 0 !== c ? c : 0) +
                        1),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.RESOLVE);
                  } catch (t) {
                    ("string" == typeof t || t instanceof Error) && o.error(t),
                      t instanceof s.du &&
                        (t.statusCode === s.CN.NOT_FOUND ||
                          t.statusCode === s.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = s.CN.NOT_FOUND),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(n));
                  }
                }
              }),
              reset() {
                (e.loadingState = m.Gu.IDLE),
                  e.pendingPages.clear(),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  (e.errorStatusCode = null),
                  (e.items = (0, l.pj)([]));
              },
            };
            return t;
          });
      var h = a(3515);
      let b = l.V5.model("GenrePlaylistsPage", {
          loadingState: l.V5.enumeration(Object.values(m.Gu)),
          pager: l.V5.maybeNull(p.Vn),
          alreadyRequestedPages: l.V5.map(l.V5.number),
          pendingPages: l.V5.map(l.V5.number),
          requests: l.V5.maybeNull(l.V5.number),
          errorStatusCode: l.V5.maybeNull(l.V5.number),
          fullTitle: l.V5.maybeNull(l.V5.string),
          items: l.V5.array(l.V5.maybeNull(h.Cd)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === m.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                n =
                  e.errorStatusCode === s.CN.NOT_FOUND ||
                  e.errorStatusCode === s.CN.BAD_REQUEST;
              return (e.loadingState === m.Gu.REJECT && n) || a;
            },
            get isSomethingWrong() {
              return (
                !this.isNotFound &&
                e.loadingState === m.Gu.REJECT &&
                0 === e.alreadyRequestedPages.size
              );
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, l.ls)(function* (t) {
                let { metatagId: a, page: n = 0, pageSize: i = 20 } = t,
                  { metatagsResource: r, logger: o } = (0, l.dU)(e);
                if (
                  !(
                    (e.loadingState === m.Gu.PENDING &&
                      e.pendingPages.has("".concat(n))) ||
                    e.alreadyRequestedPages.has("".concat(n))
                  )
                ) {
                  "number" == typeof n &&
                    e.alreadyRequestedPages.set("".concat(n), n);
                  try {
                    var c;
                    (e.loadingState = m.Gu.PENDING),
                      e.pendingPages.set("".concat(n), n);
                    let t = yield r.getMetatagPlaylists({
                      id: a,
                      offset: n,
                      limit: i,
                      withLikesCount: !0,
                    });
                    e.fullTitle = t.title.fullTitle;
                    let o = { page: n, perPage: i, total: t.pager.total };
                    0 === e.items.length &&
                      (e.items = (0, l.pj)(
                        Array.from({ length: o.total }, () => null),
                      ));
                    let s = t.playlists.map(h.PV);
                    (0, m.AG)({
                      items: e.items,
                      mappedRawItems: s,
                      page: n,
                      pageSize: i,
                    }),
                      (e.pager = o),
                      (e.requests =
                        (null !== (c = e.requests) && void 0 !== c ? c : 0) +
                        1),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.RESOLVE);
                  } catch (t) {
                    !(t instanceof s.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      o.error(t),
                      e.alreadyRequestedPages.delete("".concat(n)),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(n));
                  }
                }
              }),
              reset() {
                (e.loadingState = m.Gu.IDLE),
                  e.pendingPages.clear(),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  (e.errorStatusCode = null),
                  (e.items = (0, l.pj)([]));
              },
            };
            return t;
          }),
        y = l.V5.model("GenrePage", {
          id: l.V5.maybeNull(l.V5.string),
          errorStatusCode: l.V5.maybeNull(l.V5.number),
          loadingState: l.V5.enumeration(Object.values(m.Gu)),
          fullTitle: l.V5.maybeNull(l.V5.string),
          artists: l.V5.array(d.Go),
          albums: l.V5.array(c.ug),
          playlists: l.V5.array(u.d2),
          albumsSubpage: f,
          artistsSubpage: v,
          playlistsSubpage: b,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === m.Gu.IDLE || e.loadingState === m.Gu.PENDING
              );
            },
            get hasAlbums() {
              return (
                e.loadingState === m.Gu.IDLE ||
                e.loadingState === m.Gu.PENDING ||
                e.albums.length > 0
              );
            },
            get hasArtists() {
              return (
                e.loadingState === m.Gu.IDLE ||
                e.loadingState === m.Gu.PENDING ||
                e.artists.length > 0
              );
            },
            get hasPlaylists() {
              return (
                e.loadingState === m.Gu.IDLE ||
                e.loadingState === m.Gu.PENDING ||
                e.playlists.length > 0
              );
            },
            get isNotFound() {
              let t =
                  e.loadingState === m.Gu.RESOLVE &&
                  !this.hasAlbums &&
                  !this.hasArtists &&
                  !this.hasPlaylists,
                a =
                  e.errorStatusCode === s.CN.NOT_FOUND ||
                  e.errorStatusCode === s.CN.BAD_REQUEST;
              return (e.loadingState === m.Gu.REJECT && a) || t;
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, l.ls)(function* (t) {
                let { id: a } = t,
                  { metatagsResource: n, logger: i } = (0, l.dU)(e);
                if (e.loadingState !== m.Gu.PENDING)
                  try {
                    e.loadingState = m.Gu.PENDING;
                    let t = yield n.getMetatagById({ id: a });
                    (e.id = t.id),
                      (e.fullTitle = t.title.fullTitle),
                      (e.artists = (0, l.pj)(t.artists.map(d.d))),
                      (e.albums = (0, l.pj)(t.albums.map(c.ym))),
                      (e.playlists = (0, l.pj)(t.playlists.map(u.Q9))),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.RESOLVE);
                  } catch (t) {
                    ("string" == typeof t || t instanceof Error) && i.error(t),
                      t instanceof s.du &&
                        (t.statusCode === s.CN.NOT_FOUND ||
                          t.statusCode === s.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = s.CN.NOT_FOUND),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.REJECT);
                  }
              }),
              reset() {
                (e.loadingState = m.Gu.IDLE),
                  (e.fullTitle = null),
                  (e.artists = (0, l.pj)([])),
                  (e.albums = (0, l.pj)([])),
                  (e.playlists = (0, l.pj)([]));
              },
            };
            return t;
          });
    },
    72683: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenreAlbumsPage: function () {
            return h;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(1918),
        u = a(70579),
        d = a(96911),
        m = a(13236),
        g = a(84133),
        p = a(44285),
        f = a(56908),
        v = a.n(f);
      let h = (0, r.Pi)((e) => {
        var t, a, r;
        let { metatagId: f } = e,
          {
            genre: { albumsSubpage: h },
          } = (0, g.oR)(),
          { formatMessage: b } = (0, s.Z)(),
          [y, _] = (0, m.zU)(),
          x = (0, g.k6)();
        f &&
          h.loadingState === g.Gu.IDLE &&
          (0, l.use)(h.getData({ metatagId: f, page: 0, pageSize: 20 }));
        let S = (0, l.useCallback)(
          (e) => {
            f && h.getData({ metatagId: f, page: e, pageSize: 20 });
          },
          [h, f],
        );
        (0, l.useEffect)(
          () => () => {
            h.reset();
          },
          [h],
        ),
          h.isNotFound && (0, o.notFound)(),
          (0, g.NO)(h.loadingState === g.Gu.RESOLVE);
        let C = (0, l.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(p.$_, { className: v().footer }) }),
          [],
        );
        return h.isSomethingWrong
          ? (0, n.jsx)(u.D, {})
          : (0, n.jsx)(g.Lh, {
              pageId: g.Rh.GENRE_ALBUMS,
              children: (0, n.jsx)(m.I7, {
                scrollElement: y,
                outerTitle: h.fullTitle,
                children: (0, n.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, n.jsx)(p.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: x.canBack,
                      children: (0, n.jsx)(c.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: h.fullTitle,
                      }),
                    }),
                    (0, n.jsx)(p.Wv, {
                      className: (0, i.W)(v().scrollContainer, v().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == h
                              ? void 0
                              : null === (t = h.items) || void 0 === t
                                ? void 0
                                : t[e],
                          i = b(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: b({ id: "entity-names.album" }) },
                          );
                        return a
                          ? (0, n.jsx)(
                              d.rf,
                              { album: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, n.jsx)(p.hi, { "aria-label": i });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == h
                              ? void 0
                              : null === (t = h.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: S,
                      pageSize: 20,
                      totalRequests:
                        null !== (r = h.requests) && void 0 !== r ? r : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: _,
                      context: {
                        listAriaLabel: b(
                          { id: "mixes.albums-list" },
                          { genreName: h.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    58936: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenreArtistsPage: function () {
            return h;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(1918),
        u = a(70579),
        d = a(81546),
        m = a(13236),
        g = a(84133),
        p = a(44285),
        f = a(11318),
        v = a.n(f);
      let h = (0, r.Pi)((e) => {
        var t, a, r;
        let { metatagId: f } = e,
          {
            genre: { artistsSubpage: h },
          } = (0, g.oR)(),
          { formatMessage: b } = (0, s.Z)(),
          [y, _] = (0, m.zU)(),
          x = (0, g.k6)();
        f &&
          h.loadingState === g.Gu.IDLE &&
          (0, l.use)(h.getData({ metatagId: f, page: 0, pageSize: 20 }));
        let S = (0, l.useCallback)(
          (e) => {
            f && h.getData({ metatagId: f, page: e, pageSize: 20 });
          },
          [h, f],
        );
        (0, l.useEffect)(
          () => () => {
            h.reset();
          },
          [h],
        ),
          h.isNotFound && (0, o.notFound)(),
          (0, g.NO)(h.loadingState === g.Gu.RESOLVE);
        let C = (0, l.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(p.$_, { className: v().footer }) }),
          [],
        );
        return h.isSomethingWrong
          ? (0, n.jsx)(u.D, {})
          : (0, n.jsx)(g.Lh, {
              pageId: g.Rh.GENRE_ARTISTS,
              children: (0, n.jsx)(m.I7, {
                scrollElement: y,
                outerTitle: h.fullTitle,
                children: (0, n.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, n.jsx)(p.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: x.canBack,
                      children: (0, n.jsx)(c.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: h.fullTitle,
                      }),
                    }),
                    (0, n.jsx)(p.Wv, {
                      className: (0, i.W)(v().scrollContainer, v().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == h
                              ? void 0
                              : null === (t = h.items) || void 0 === t
                                ? void 0
                                : t[e],
                          i = b(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: b({ id: "entity-names.artist" }) },
                          );
                        return a
                          ? (0, n.jsx)(
                              d.IT,
                              { artist: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, n.jsx)(p.hi, {
                              "aria-label": i,
                              round: !0,
                              centered: !0,
                            });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == h
                              ? void 0
                              : null === (t = h.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: S,
                      pageSize: 20,
                      totalRequests:
                        null !== (r = h.requests) && void 0 !== r ? r : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: _,
                      context: {
                        listAriaLabel: b(
                          { id: "mixes.artists-list" },
                          { genreName: h.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    75244: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenreNotFoundPage: function () {
            return o;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(2365);
      let o = (0, i.Pi)(() => (0, n.jsx)(r.T, {}));
    },
    72376: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenrePage: function () {
            return _;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(71716),
        u = a(1918),
        d = a(70579),
        m = a(96911),
        g = a(81546),
        p = a(13236),
        f = a(20210),
        v = a(84133),
        h = a(44285),
        b = a(59896),
        y = a.n(b);
      let _ = (0, r.Pi)((e) => {
        let { metatagId: t } = e,
          { genre: a } = (0, v.oR)(),
          { formatMessage: r } = (0, s.Z)(),
          [b, _] = (0, p.zU)(),
          x = (0, v.k6)();
        return (t &&
          a.loadingState === v.Gu.IDLE &&
          (0, l.use)(a.getData({ id: t })),
        a.isNotFound && (0, o.notFound)(),
        (0, l.useEffect)(
          () => () => {
            a.reset();
          },
          [a],
        ),
        (0, v.NO)(a.loadingState === v.Gu.RESOLVE),
        a.loadingState !== v.Gu.REJECT || a.isNotFound)
          ? (0, n.jsx)(v.Lh, {
              pageId: v.Rh.GENRE,
              children: (0, n.jsxs)(p.I7, {
                scrollElement: b,
                outerTitle: a.fullTitle,
                children: [
                  (0, n.jsx)(h.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: x.canBack,
                    children: (0, n.jsx)(u.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: a.fullTitle,
                    }),
                  }),
                  (0, n.jsx)(c.t, {
                    className: y().root,
                    containerClassName: y().content,
                    ref: _,
                    children: (0, n.jsxs)("div", {
                      className: y().carouselBlocks,
                      children: [
                        a.hasPlaylists &&
                          (0, n.jsx)(v.J, {
                            blockId: v.BE.PLAYLISTS_CAROUSEL,
                            blockType: v.BE.PLAYLISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 1,
                            blockIdForFrom: v.BE.PLAYLISTS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, n.jsx)(f.VD, {
                              headerClassName: (0, i.W)(
                                y().carouselBlockHeader,
                                y().carouselBlock,
                              ),
                              containerClassName: y().carouselBlock,
                              isLoading: a.isLoading,
                              playlists: a.playlists,
                              title: r({
                                id: "entity-names.popular-playlists",
                              }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/playlists",
                              ),
                            }),
                          }),
                        a.hasAlbums &&
                          (0, n.jsx)(v.J, {
                            blockId: v.BE.ALBUMS_CAROUSEL,
                            blockType: v.BE.ALBUMS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 2,
                            blockIdForFrom: v.BE.ALBUMS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, n.jsx)(m.wk, {
                              headerClassName: (0, i.W)(
                                y().carouselBlockHeader,
                                y().carouselBlock,
                              ),
                              containerClassName: y().carouselBlock,
                              isLoading: a.isLoading,
                              albums: a.albums,
                              title: r({ id: "entity-names.new-albums" }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/albums",
                              ),
                            }),
                          }),
                        a.hasArtists &&
                          (0, n.jsx)(v.J, {
                            blockId: v.BE.ARTISTS_CAROUSEL,
                            blockType: v.BE.ARTISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 3,
                            blockIdForFrom: v.BE.ARTISTS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, n.jsx)(h.HY, {
                              headerClassName: (0, i.W)(
                                y().carouselBlockHeader,
                                y().carouselBlock,
                              ),
                              containerClassName: y().carouselBlock,
                              isLoading: a.isLoading,
                              title: r({ id: "entity-names.popular-artists" }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/artists",
                              ),
                              children: a.artists.map((e) =>
                                (0, n.jsx)(
                                  g.IT,
                                  { artist: e, contentLinesCount: 3 },
                                  e.id,
                                ),
                              ),
                            }),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : (0, n.jsx)(d.D, {});
      });
    },
    85694: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenrePlaylistsPage: function () {
            return h;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(1918),
        u = a(70579),
        d = a(13236),
        m = a(20210),
        g = a(84133),
        p = a(44285),
        f = a(39214),
        v = a.n(f);
      let h = (0, r.Pi)((e) => {
        var t, a, r;
        let { metatagId: f } = e,
          {
            genre: { playlistsSubpage: h },
          } = (0, g.oR)(),
          { formatMessage: b } = (0, s.Z)(),
          [y, _] = (0, d.zU)(),
          x = (0, g.k6)();
        f &&
          h.loadingState === g.Gu.IDLE &&
          (0, l.use)(h.getData({ metatagId: f, page: 0, pageSize: 20 }));
        let S = (0, l.useCallback)(
          (e) => {
            f && h.getData({ metatagId: f, page: e, pageSize: 20 });
          },
          [h, f],
        );
        (0, l.useEffect)(
          () => () => {
            h.reset();
          },
          [h],
        ),
          h.isNotFound && (0, o.notFound)(),
          (0, g.NO)(h.loadingState === g.Gu.RESOLVE);
        let C = (0, l.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(p.$_, { className: v().footer }) }),
          [],
        );
        return h.isSomethingWrong
          ? (0, n.jsx)(u.D, {})
          : (0, n.jsx)(g.Lh, {
              pageId: g.Rh.GENRE_PLAYLISTS,
              children: (0, n.jsx)(d.I7, {
                scrollElement: y,
                outerTitle: h.fullTitle,
                children: (0, n.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, n.jsx)(p.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: x.canBack,
                      children: (0, n.jsx)(c.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: h.fullTitle,
                      }),
                    }),
                    (0, n.jsx)(p.Wv, {
                      className: (0, i.W)(v().scrollContainer, v().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == h
                              ? void 0
                              : null === (t = h.items) || void 0 === t
                                ? void 0
                                : t[e],
                          i = b(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: b({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, n.jsx)(
                              m.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, n.jsx)(p.hi, { "aria-label": i });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == h
                              ? void 0
                              : null === (t = h.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: S,
                      pageSize: 20,
                      totalRequests:
                        null !== (r = h.requests) && void 0 !== r ? r : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: _,
                      context: {
                        listAriaLabel: b(
                          { id: "mixes.playlists-list" },
                          { genreName: h.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    24438: function (e, t, a) {
      "use strict";
      a.d(t, {
        rx: function () {
          return n.GenresPage;
        },
        EU: function () {
          return s;
        },
      });
      var n = a(83560);
      a(26141);
      var i = a(96555),
        r = a(96431),
        o = a(13212),
        l = a(84133);
      let s = i.V5.model("GenresPageModel", {
        title: i.V5.maybeNull(i.V5.string),
        items: i.V5.array(o.fm),
        loadingState: i.V5.enumeration(Object.values(l.Gu)),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === l.Gu.IDLE || e.loadingState === l.Gu.PENDING
            );
          },
          get isNotFound() {
            let t = e.loadingState === l.Gu.RESOLVE && 0 === e.items.length,
              a = e.errorStatusCode === r.CN.NOT_FOUND;
            return a || t;
          },
        }))
        .actions((e) => {
          let t = {
            getData: (0, i.ls)(function* (t) {
              let { landing3Resource: a, logger: n } = (0, i.dU)(e);
              if (e.loadingState !== l.Gu.PENDING)
                try {
                  e.loadingState = l.Gu.PENDING;
                  let n = yield a.getMetatags({}),
                    s = n.trees.find((e) => e.navigationId === t);
                  if (!s) {
                    e.errorStatusCode = r.CN.NOT_FOUND;
                    return;
                  }
                  (e.title = s.title),
                    (e.items = (0, i.pj)(s.leaves.map(o.uG))),
                    e.loadingState !== l.Gu.IDLE &&
                      (e.loadingState = l.Gu.RESOLVE);
                } catch (t) {
                  ("string" == typeof t || t instanceof Error) && n.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.loadingState !== l.Gu.IDLE &&
                      (e.loadingState = l.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = l.Gu.IDLE),
                (e.title = null),
                (e.items = (0, i.pj)([])),
                (e.errorStatusCode = null);
            },
          };
          return t;
        });
    },
    26141: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenresNotFoundPage: function () {
            return r;
          },
        });
      var n = a(8759),
        i = a(2365);
      let r = () => (0, n.jsx)(i.T, {});
    },
    83560: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenresPage: function () {
            return v;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(11769),
        o = a(99616),
        l = a(71716),
        s = a(1918),
        c = a(70579),
        u = a(13236),
        d = a(13212),
        m = a(84133),
        g = a(44285),
        p = a(73899),
        f = a.n(p);
      let v = (0, i.Pi)((e) => {
        let { navigationId: t } = e,
          { genres: a } = (0, m.oR)(),
          [i, p] = (0, u.zU)(),
          v = (0, m.k6)();
        return ((0, o.useEffect)(
          () => () => {
            a.reset();
          },
          [a, t],
        ),
        a.isNotFound && (0, r.notFound)(),
        t && a.loadingState === m.Gu.IDLE && (0, o.use)(a.getData(t)),
        (0, m.NO)(a.loadingState === m.Gu.RESOLVE),
        a.loadingState === m.Gu.REJECT)
          ? (0, n.jsx)(c.D, {})
          : (0, n.jsxs)(u.I7, {
              scrollElement: i,
              outerTitle: a.title,
              children: [
                (0, n.jsx)(g.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: v.canBack,
                  children: (0, n.jsx)(s.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: a.title,
                  }),
                }),
                (0, n.jsx)(l.t, {
                  className: f().root,
                  containerClassName: f().content,
                  ref: p,
                  children: (0, n.jsx)("div", {
                    className: f().list,
                    children: a.items.map((e) =>
                      (0, n.jsx)(
                        d.mH,
                        { tag: e.tag, title: e.title, subGenres: e.subGenres },
                        e.tag,
                      ),
                    ),
                  }),
                }),
              ],
            });
      });
    },
    71486: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          KinopoiskNotFoundPage: function () {
            return s;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(99616),
        o = a(2365),
        l = a(84133);
      let s = (0, i.Pi)(() => {
        let { kinopoisk: e } = (0, l.oR)();
        return (
          (0, r.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, n.jsx)(o.T, {})
        );
      });
    },
    9702: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          KinopoiskPage: function () {
            return _;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(2814),
        u = a(36019),
        d = a(71716),
        m = a(1918),
        g = a(74241),
        p = a(70579),
        f = a(13236),
        v = a(84133),
        h = a(44285),
        b = a(86422),
        y = a.n(b);
      let _ = (0, r.Pi)(() => {
        let { experiments: e, kinopoisk: t, user: a } = (0, v.oR)(),
          { formatMessage: r } = (0, s.Z)(),
          [b, _] = (0, f.zU)();
        e.checkExperiment(v.pe.WebKinopoiskLanding, "on") || (0, o.notFound)(),
          t.landing.loadingState === v.Gu.IDLE &&
            (0, l.use)(
              t.landing.getSkeleton(
                { id: u.jB.KINOPOISK, showWizard: a.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            ),
          (0, l.useEffect)(() => () => t.landing.reset(), [t.landing]),
          (0, v.NO)(t.landing.loadingState === v.Gu.RESOLVE);
        let x = (0, g._B)(t.landing);
        return (0, n.jsx)(v.Lh, {
          pageId: v.Rh.KINOPOISK,
          children: (0, n.jsxs)(f.I7, {
            scrollElement: b,
            outerTitle: r({ id: "navigation.page-kinopoisk" }),
            children: [
              (0, n.jsx)(h.h4, {
                variant: "text",
                showControls: !1,
                children: (0, n.jsxs)("div", {
                  className: y().header,
                  children: [
                    (0, n.jsx)(m.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      children: (0, n.jsx)(c.Z, {
                        id: "navigation.page-kinopoisk",
                      }),
                    }),
                    (0, n.jsx)(h.rU, {
                      className: (0, i.W)(
                        y().feedbackUrl,
                        y().feedbackUrl_outline,
                      ),
                      href: "https://forms.yandex.ru/surveys/13489904.1e94b26c50866632911c1069103b0902e6e40d54/",
                      children: (0, n.jsx)(m.Caption, {
                        variant: "span",
                        size: "m",
                        type: "text",
                        children: (0, n.jsx)(c.Z, {
                          id: "navigation.feedback",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, n.jsxs)(d.t, {
                className: y().root,
                containerClassName: y().content,
                ref: _,
                children: [
                  (0, n.jsx)("div", {
                    className: (0, i.W)(y().landing, {
                      [y().landing_onlyWizard]: x,
                    }),
                    children: (0, n.jsx)(g.Od, {
                      landing: t.landing,
                      errorComponent: (0, n.jsx)(p.D, {
                        className: y().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, n.jsx)(h.$_, { className: y().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    63246: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          MainPage: function () {
            return x;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(99616),
        o = a(65244),
        l = a(36019),
        s = a(15527),
        c = a(71716),
        u = a(78354),
        d = a(1918),
        m = a(74241),
        g = a(70579),
        p = a(9495),
        f = a(24163),
        v = a(13236),
        h = a(84133),
        b = a(44285),
        y = a(50045),
        _ = a.n(y);
      let x = (0, i.Pi)(() => {
        let {
            main: e,
            user: t,
            experiments: a,
            modals: { releaseNotesModal: i },
          } = (0, h.oR)(),
          { formatMessage: y } = (0, o.Z)(),
          x = (0, h.bo)(),
          [S, C] = (0, v.zU)(),
          [E, N] = (0, v.zU)();
        e.landing.loadingState === h.Gu.IDLE &&
          (0, r.use)(
            e.landing.getSkeleton(
              { id: l.jB.WEB_MAIN, showWizard: t.settings.showWizard },
              { preloadBlocks: 2 },
            ),
          ),
          (0, r.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, r.useEffect)(() => {
            (0, f.Zl)();
          }, []),
          (0, h.NO)(e.landing.loadingState === h.Gu.RESOLVE);
        let P = a.checkExperiment(h.pe.WebNextDisableVibe, "on"),
          k = (0, r.useMemo)(
            () => (P ? { "margin-block-start": "1vh" } : {}),
            [P],
          ),
          L = (0, r.useMemo)(
            () =>
              (0, n.jsxs)(u.u, {
                placement: "right",
                offsetOptions: 4,
                children: [
                  (0, n.jsx)(s.z, {
                    color: "secondary",
                    radius: "xl",
                    "aria-label": "Beta ".concat(
                      y({ id: "desktop.app-version" }, { version: x }),
                    ),
                    className: _().beta,
                    onClick: i.open,
                    children: (0, n.jsx)(d.Caption, {
                      variant: "div",
                      type: "text",
                      size: "s",
                      weight: "medium",
                      children: "Beta",
                    }),
                  }),
                  (0, n.jsx)(u._v, { children: x }),
                ],
              }),
            [y, i.open, x],
          );
        return (0, n.jsx)(h.Lh, {
          pageId: h.Rh.HOME,
          children: (0, n.jsx)(v.I7, {
            scrollElement: S,
            headerElement: E,
            children: (0, n.jsxs)(c.t, {
              className: _().root,
              containerClassName: _().content,
              ref: C,
              children: [
                L,
                !P &&
                  (0, n.jsx)(h.J, {
                    blockIdForFrom: h.BE.RUP_MAIN_RADIO,
                    blockId: h.aU.RUP,
                    blockType: h.aU.RUP,
                    blockPosX: 0,
                    blockPosY: 0,
                    objectsCount: 0,
                    children: (0, n.jsx)(p.w, { className: _().vibe }),
                  }),
                (0, n.jsx)("div", { className: _().header, ref: N }),
                (0, n.jsx)(m.Od, {
                  landing: e.landing,
                  errorComponent: (0, n.jsx)(g.D, {
                    className: _().error,
                    withBackwardControl: !1,
                  }),
                  containerClassName: _().landing,
                  headerClassName: _().header,
                  containerStyle: k,
                }),
                (0, n.jsx)(b.$_, { className: _().footer }),
              ],
            }),
          }),
        });
      });
    },
    75773: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          NonMusicNotFoundPage: function () {
            return s;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(99616),
        o = a(2365),
        l = a(84133);
      let s = (0, i.Pi)(() => {
        let { nonMusic: e } = (0, l.oR)();
        return (
          (0, r.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, n.jsx)(o.T, {})
        );
      });
    },
    87278: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          NonMusicPage: function () {
            return _;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(2814),
        u = a(36019),
        d = a(71716),
        m = a(1918),
        g = a(74241),
        p = a(70579),
        f = a(13236),
        v = a(84133),
        h = a(44285),
        b = a(37436),
        y = a.n(b);
      let _ = (0, r.Pi)(() => {
        let { experiments: e, nonMusic: t, user: a } = (0, v.oR)(),
          { formatMessage: r } = (0, s.Z)(),
          [b, _] = (0, f.zU)();
        e.checkExperiment(v.pe.WebNextNonMusicLanding, "on") ||
          (0, o.notFound)(),
          t.landing.loadingState === v.Gu.IDLE &&
            (0, l.use)(
              t.landing.getSkeleton(
                { id: u.jB.WEB_NON_MUSIC, showWizard: a.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            ),
          (0, l.useEffect)(() => () => t.landing.reset(), [t.landing]),
          (0, v.NO)(t.landing.loadingState === v.Gu.RESOLVE);
        let x = (0, g._B)(t.landing);
        return (0, n.jsxs)(f.I7, {
          scrollElement: b,
          outerTitle: r({ id: "navigation.page-non-music" }),
          children: [
            (0, n.jsx)(h.h4, {
              variant: "text",
              showControls: !1,
              children: (0, n.jsx)("div", {
                className: y().header,
                children: (0, n.jsx)(m.Heading, {
                  variant: "h2",
                  weight: "bold",
                  size: "xl",
                  children: (0, n.jsx)(c.Z, {
                    id: "navigation.page-non-music",
                  }),
                }),
              }),
            }),
            (0, n.jsxs)(d.t, {
              className: y().root,
              containerClassName: y().content,
              ref: _,
              children: [
                (0, n.jsx)("div", {
                  className: (0, i.W)(y().landing, {
                    [y().landing_onlyWizard]: x,
                  }),
                  children: (0, n.jsx)(g.Od, {
                    landing: t.landing,
                    errorComponent: (0, n.jsx)(p.D, {
                      className: y().error,
                      withBackwardControl: !1,
                    }),
                  }),
                }),
                (0, n.jsx)(h.$_, { className: y().footer }),
              ],
            }),
          ],
        });
      });
    },
    30789: function (e, t, a) {
      "use strict";
      a.d(t, {
        i$: function () {
          return n.PlaylistPage;
        },
        nb: function () {
          return h;
        },
      });
      var n = a(49773);
      a(46924);
      var i = a(93043),
        r = a(96555),
        o = a(96431),
        l = a(20210),
        s = a(95539),
        c = a(84133);
      let u = (e, t) =>
          t.map((t) => {
            let a = e.find((e) => String(e.id) === t);
            return (null == a ? void 0 : a.albumId)
              ? "".concat(t, ":").concat(a.albumId)
              : t;
          }),
        d = (e, t) =>
          t.map((t) => {
            let a = e[t];
            return (null == a ? void 0 : a.albumId)
              ? "".concat(a.id, ":").concat(a.albumId)
              : String(null == a ? void 0 : a.id);
          }),
        m = (e, t) => {
          let { startIndex: a, endIndex: n } = t,
            i = [];
          for (let t = a; t <= n; t++) {
            var r, o;
            ((null === (r = e[t]) || void 0 === r ? void 0 : r.loadingState) ===
              c.Gu.IDLE ||
              (null === (o = e[t]) || void 0 === o
                ? void 0
                : o.loadingState) === c.Gu.REJECT) &&
              i.push(t);
          }
          return i;
        };
      var g = a(82436);
      let p = (e) => e.map((e) => (0, g.RN)(e.id, e.albumId || void 0)),
        f = r.V5.model("PlaylistItem", {
          id: r.V5.union(r.V5.string, r.V5.number),
          albumId: r.V5.maybeNull(r.V5.union(r.V5.string, r.V5.number)),
          key: r.V5.string,
          data: r.V5.maybeNull(s.le),
          loadingState: r.V5.enumeration(Object.values(c.Gu)),
        }),
        v = r.V5.model("PlaylistSearchItems", {
          playlistTrackIds: r.V5.maybeNull(r.V5.array(r.V5.string)),
          suggestedTrackIds: r.V5.maybeNull(r.V5.array(r.V5.string)),
          additionTrackInProggress: r.V5.maybeNull(r.V5.string),
          tracks: r.V5.maybeNull(r.V5.array(s.le)),
        })
          .views((e) => ({
            get suggestedTracks() {
              var t;
              return null === (t = e.suggestedTrackIds) || void 0 === t
                ? void 0
                : t.map((t) => {
                    var a;
                    return (
                      (null === (a = e.tracks) || void 0 === a
                        ? void 0
                        : a.find((e) => e.id === t)) || null
                    );
                  });
            },
            get playlistTracks() {
              let t = [...(e.playlistTrackIds || [])];
              return (
                e.additionTrackInProggress &&
                  t.unshift(e.additionTrackInProggress),
                null == t
                  ? void 0
                  : t.map((t) => {
                      var a;
                      return (
                        (null === (a = e.tracks) || void 0 === a
                          ? void 0
                          : a.find((e) => {
                              var a;
                              let n =
                                (null === (a = e.mainAlbum) || void 0 === a
                                  ? void 0
                                  : a.id) && t.includes(":")
                                  ? "".concat(e.id, ":").concat(e.mainAlbum.id)
                                  : e.id;
                              return n === t;
                            })) || null
                      );
                    })
              );
            },
          }))
          .actions((e) => ({
            setAdditionTrackAnimation(t) {
              e.additionTrackInProggress = t;
            },
            replaceAdditionTrackInProggress() {
              if (e.additionTrackInProggress) {
                var t, a;
                null === (t = e.playlistTrackIds) ||
                  void 0 === t ||
                  t.unshift(e.additionTrackInProggress),
                  (e.suggestedTrackIds = (0, r.pj)(
                    null === (a = e.suggestedTrackIds) || void 0 === a
                      ? void 0
                      : a.filter((t) => t !== e.additionTrackInProggress),
                  )),
                  (e.additionTrackInProggress = null);
              }
            },
            resetAdditionTrackAnimation() {
              e.additionTrackInProggress = null;
            },
          })),
        h = r.V5.model("PlaylistPage", {
          meta: r.V5.maybeNull(l.Nn),
          items: r.V5.array(f),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          loadingState: r.V5.enumeration(Object.values(c.Gu)),
          similarPlaylists: r.V5.array(l.d2),
          searchLoadingState: r.V5.enumeration(Object.values(c.Gu)),
          searchItems: v,
        })
          .views((e) => ({
            get isNotFound() {
              return (
                e.loadingState === c.Gu.REJECT &&
                e.errorStatusCode === o.CN.NOT_FOUND
              );
            },
            get isLoading() {
              return (
                e.loadingState === c.Gu.PENDING || e.loadingState === c.Gu.IDLE
              );
            },
            get isSearchLoading() {
              return (
                e.searchLoadingState === c.Gu.PENDING ||
                e.searchLoadingState === c.Gu.IDLE
              );
            },
            get isDisabled() {
              var t;
              return (
                e.loadingState === c.Gu.RESOLVE &&
                (0 === e.items.length ||
                  !(null === (t = e.meta) || void 0 === t
                    ? void 0
                    : t.isAvailable))
              );
            },
            get isRejected() {
              return e.loadingState === c.Gu.REJECT;
            },
            get hasSimilarPlaylists() {
              return (
                e.loadingState === c.Gu.IDLE ||
                e.loadingState === c.Gu.PENDING ||
                e.similarPlaylists.length > 0
              );
            },
            get isEmptyPlaylist() {
              return 0 === e.items.length && e.loadingState === c.Gu.RESOLVE;
            },
            get contextMeta() {
              var a, n, i, l, s, u, d, m, g, p;
              return {
                isAvailable:
                  null === (a = e.meta) || void 0 === a
                    ? void 0
                    : a.isAvailable,
                id: e.meta.id,
                uid: null === (n = e.meta) || void 0 === n ? void 0 : n.uid,
                uuid: e.meta.uuid,
                kind: null === (i = e.meta) || void 0 === i ? void 0 : i.kind,
                title: null === (l = e.meta) || void 0 === l ? void 0 : l.title,
                coverUri:
                  null === (s = e.meta) || void 0 === s ? void 0 : s.coverUri,
                likesCount:
                  null === (u = e.meta) || void 0 === u ? void 0 : u.likesCount,
                averageColor:
                  null === (d = e.meta) || void 0 === d
                    ? void 0
                    : d.averageColor,
                owner: null === (m = e.meta) || void 0 === m ? void 0 : m.owner,
                description:
                  null === (g = e.meta) || void 0 === g
                    ? void 0
                    : g.description,
                modified:
                  null === (p = e.meta) || void 0 === p ? void 0 : p.modified,
              };
            },
            get isDragAndDropEnabled() {
              var f;
              if (!(0, r.fh)(e)) return !1;
              let { experiments: t } = (0, r.yj)(e);
              return !!(
                (null === (f = e.meta) || void 0 === f
                  ? void 0
                  : f.canUserChange) &&
                e.items.length > 1 &&
                t.checkExperiment(c.pe.WebNextPlaylistDnD, "on")
              );
            },
            get itemsKeys() {
              return e.items.map((e) => e.key);
            },
          }))
          .actions((e) => {
            let t = {
              getTracksByRange: (0, r.ls)(function* (t) {
                var a, n;
                let { startIndex: i, endIndex: l } = t,
                  { tracksResource: u, logger: g } = (0, r.dU)(e);
                if (
                  !(null === (a = e.meta) || void 0 === a ? void 0 : a.uid) ||
                  !(null === (n = e.meta) || void 0 === n ? void 0 : n.kind)
                )
                  return null;
                (i = Math.max(0, i)), (l = Math.min(l, e.items.length));
                let p = m(e.items, { startIndex: i, endIndex: l });
                try {
                  let t = d(e.items, p);
                  if (!t.length) return null;
                  p.forEach((t) => {
                    let a = e.items[t];
                    a && (a.loadingState = c.Gu.PENDING);
                  });
                  let a = yield u.getTracksMeta({
                    trackIds: t,
                    withProgress: !0,
                  });
                  p.forEach((t, n) => {
                    var i, r;
                    let o = null == a ? void 0 : a[n];
                    e.items[t] &&
                      o &&
                      (e.items[t] = {
                        id: o.id,
                        albumId:
                          (null === (r = o.albums) || void 0 === r
                            ? void 0
                            : null === (i = r[0]) || void 0 === i
                              ? void 0
                              : i.id) || null,
                        key: "".concat(o.id, "-").concat(t),
                        data: (0, s.Vt)(o),
                        loadingState: c.Gu.RESOLVE,
                      });
                  });
                } catch (t) {
                  !(t instanceof o.eY) &&
                    (t instanceof Error || "string" == typeof t) &&
                    g.error(t),
                    p.forEach((t) => {
                      let a = e.items[t];
                      a && (a.loadingState = c.Gu.REJECT);
                    });
                }
                return null;
              }),
              getSearchTracksMeta: (0, r.ls)(function* () {
                let { tracksResource: t, logger: a } = (0, r.dU)(e),
                  n = [...(e.searchItems.playlistTrackIds || [])].concat(
                    e.searchItems.suggestedTrackIds || [],
                  );
                try {
                  let a = yield t.getTracksMeta({
                    trackIds: n,
                    removeDuplicates: !0,
                  });
                  (e.searchItems.tracks = (0, r.pj)(
                    null == a ? void 0 : a.map(s.Vt),
                  )),
                    e.searchLoadingState !== c.Gu.IDLE &&
                      (e.searchLoadingState = c.Gu.RESOLVE);
                } catch (e) {
                  !(e instanceof o.eY) &&
                    (e instanceof Error || "string" == typeof e) &&
                    a.error(e);
                }
                return null;
              }),
              updateData: (0, r.ls)(function* (a) {
                var n;
                if ((null == a ? void 0 : a.error) === "not-found")
                  return (
                    (e.errorStatusCode = o.CN.NOT_FOUND),
                    (e.loadingState = c.Gu.REJECT),
                    null
                  );
                (e.similarPlaylists = (0, r.pj)(
                  null === (n = a.similarPlaylists) || void 0 === n
                    ? void 0
                    : n.map(l.VB),
                )),
                  (e.meta = (0, l.Q9)(a)),
                  (e.items = (0, r.pj)(
                    a.tracks.map((e, t) => ({
                      id: String(e.id),
                      albumId: e.albumId || null,
                      key: "".concat(e.id, "-").concat(t),
                      loadingState: c.Gu.IDLE,
                    })),
                  ));
                let { sonataState: i } = (0, r.yj)(e);
                return (
                  i.setUnloadedEntitiesData(p(e.items)),
                  yield t.getTracksByRange({ startIndex: 0, endIndex: 10 })
                );
              }),
              getPlaylistByUserIdAndKind: (0, r.ls)(function* (a) {
                let {
                    userId: n,
                    playlistKind: i,
                    resumeStream: l = !1,
                    trackMetaType: s,
                  } = a,
                  { usersResource: u, logger: d } = (0, r.dU)(e);
                if (e.loadingState !== c.Gu.PENDING)
                  try {
                    e.loadingState = c.Gu.PENDING;
                    let a = yield u.getPlaylistWithTracksIds({
                      userId: n,
                      playlistKind: i,
                      resumeStream: l,
                      trackMetaType: s,
                    });
                    if ("string" != typeof a.playlistUuid) {
                      (e.errorStatusCode = o.CN.NOT_FOUND),
                        (e.loadingState = c.Gu.REJECT);
                      return;
                    }
                    yield t.updateData(a), (e.loadingState = c.Gu.RESOLVE);
                  } catch (t) {
                    !(t instanceof o.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      d.error(t),
                      t instanceof o.du &&
                        (t.statusCode === o.CN.NOT_FOUND ||
                          t.statusCode === o.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = o.CN.NOT_FOUND),
                      (e.loadingState = c.Gu.REJECT);
                  }
              }),
              getSearchTracks: (0, r.ls)(function* (a) {
                let { uid: n, kind: i, part: l = "" } = a,
                  { searchPlaylistResource: s, logger: d } = (0, r.dU)(e);
                if (e.searchLoadingState !== c.Gu.PENDING && l.length)
                  try {
                    e.searchLoadingState = c.Gu.PENDING;
                    let {
                        playlistTrackIds: a = [],
                        suggestedTrackIds: o = [],
                      } = yield s.getTrackIds({ uid: n, kind: i, part: l }),
                      d = u(e.items, a);
                    (e.searchItems.playlistTrackIds = (0, r.pj)(d)),
                      (e.searchItems.suggestedTrackIds = (0, r.pj)(o)),
                      t.getSearchTracksMeta();
                  } catch (t) {
                    !(t instanceof o.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      d.error(t),
                      t instanceof o.du &&
                        (t.statusCode === o.CN.NOT_FOUND ||
                          t.statusCode === o.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = o.CN.NOT_FOUND),
                      e.searchLoadingState !== c.Gu.IDLE &&
                        (e.searchLoadingState = c.Gu.REJECT);
                  }
              }),
              getPlaylistByUuid: (0, r.ls)(function* (a) {
                let {
                    playlistUuid: n,
                    richTracks: i = !1,
                    resumeStream: l = !1,
                  } = a,
                  { playlistResource: s, logger: u } = (0, r.dU)(e);
                if (e.loadingState !== c.Gu.PENDING)
                  try {
                    e.loadingState = c.Gu.PENDING;
                    let a = yield s.getPlaylist({
                      playlistUuid: n,
                      resumeStream: l,
                      richTracks: i,
                    });
                    yield t.updateData(a),
                      e.loadingState !== c.Gu.IDLE &&
                        (e.loadingState = c.Gu.RESOLVE);
                  } catch (t) {
                    !(t instanceof o.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      u.error(t),
                      t instanceof o.du &&
                        (t.statusCode === o.CN.NOT_FOUND ||
                          t.statusCode === o.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = o.CN.NOT_FOUND),
                      e.loadingState !== c.Gu.IDLE &&
                        (e.loadingState = c.Gu.REJECT);
                  }
              }),
              moveTrack(t, a) {
                let n = (0, i.ZN)(e.items[t]);
                if (
                  !(t < 0) &&
                  !(a < 0) &&
                  !(t >= e.items.length) &&
                  !(a >= e.items.length) &&
                  n &&
                  (e.items.splice(t, 1), e.items.splice(a, 0, n), (0, r.fh)(e))
                ) {
                  let { sonataState: t } = (0, r.yj)(e);
                  t.setUnloadedEntitiesData(p(e.items));
                }
              },
              removeTracksFromItems(t, a) {
                e.items.splice(t, a);
              },
              resetSearch() {
                (e.searchItems.playlistTrackIds = null),
                  (e.searchItems.suggestedTrackIds = null),
                  (e.searchItems.additionTrackInProggress = null),
                  (e.searchItems.tracks = null),
                  (e.searchLoadingState = c.Gu.IDLE);
              },
              reset() {
                let { sonataState: a } = (0, r.yj)(e);
                a.resetUnloadedEntitiesData(),
                  (e.meta = null),
                  (e.loadingState = c.Gu.IDLE),
                  (e.items = (0, r.pj)([])),
                  (e.similarPlaylists = (0, r.pj)([])),
                  (e.errorStatusCode = null),
                  t.resetSearch();
              },
              refresh() {
                var a, n;
                (null === (a = e.meta) || void 0 === a ? void 0 : a.uuid) &&
                  t.getPlaylistByUuid({
                    playlistUuid:
                      null === (n = e.meta) || void 0 === n ? void 0 : n.uuid,
                    resumeStream: !1,
                  });
              },
            };
            return t;
          });
    },
    46924: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          PlaylistNotFoundPage: function () {
            return o;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(2365);
      let o = (0, i.Pi)(() => (0, n.jsx)(r.T, {}));
    },
    49773: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          PlaylistPage: function () {
            return H;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(27287),
        u = a(48157),
        d = a(79765),
        m = a(2814),
        g = a(9227),
        p = a(1918),
        f = a(20210),
        v = a(95539),
        h = a(3515),
        b = a(84133),
        y = a(44285),
        _ = a(71440);
      let x = (e, t) => {
        let a = e.id,
          n = e.albumId;
        return {
          contextData: {
            type: _.Ak.Various,
            meta: { id: n ? "".concat(a, ":").concat(n) : a },
            from: t,
          },
          queueParams: { index: 0 },
          loadContextMeta: !0,
        };
      };
      var S = a(95431),
        C = a.n(S);
      let E = (0, r.Pi)((e) => {
        var t, a, r, o, c, u, _;
        let { autoFocus: S, onChange: E, className: N } = e,
          { formatMessage: P } = (0, s.Z)(),
          [k, L] = (0, l.useState)(""),
          { playlist: I } = (0, b.oR)(),
          A = null == I ? void 0 : I.searchItems,
          T = (0, v.Wc)(),
          j = (0, l.useRef)(0),
          R = (null === (t = I.meta) || void 0 === t ? void 0 : t.isOwnPlaylist)
            ? b.Rh.OWN_PLAYLISTS
            : b.Rh.PLAYLIST,
          w = (0, b.x5)({ pageId: R, blockId: b.aU.FILTERED }),
          D = (0, b.x5)({ pageId: R, blockId: b.aU.SUGGESTED }),
          [G, O] = (0, l.useState)(!1);
        (0, l.useEffect)(
          () => () => {
            window.clearTimeout(j.current), null == E || E(!1);
          },
          [E],
        );
        let V = (0, l.useMemo)(
            () =>
              (0, d.Z)((e) => {
                let t = e.trim();
                L(t),
                  t &&
                    (null == I ? void 0 : I.meta) &&
                    (I.resetSearch(),
                    I.getSearchTracks({
                      uid: I.meta.uid,
                      kind: I.meta.kind,
                      part: t,
                    })),
                  (!t || 0 === t.length) && G && (O(!1), I.refresh()),
                  null == E || E(!!t.length);
              }, 100),
            [I, G, E],
          ),
          M = (0, l.useCallback)(
            async (e) => {
              if (I.meta) {
                A.setAdditionTrackAnimation(e.id);
                let t = T({
                    track: e,
                    playlist: I.meta,
                    withSuccessNotification: !1,
                    withPageRefresh: !1,
                  }),
                  a = new Promise((e) => {
                    j.current = window.setTimeout(e, 300);
                  }),
                  [n] = await Promise.all([t, a]);
                n === h.pX.OK
                  ? (A.replaceAdditionTrackInProggress(), O(!0))
                  : A.resetAdditionTrackAnimation();
              }
            },
            [T, I.meta, A],
          ),
          B = (0, l.useMemo)(() => {
            var e;
            return I.isSearchLoading
              ? (0, n.jsx)(y.DX, {
                  className: C().shimmerItem,
                  variant: b.Lx.PLAYLIST,
                })
              : null == A
                ? void 0
                : null === (e = A.playlistTracks) || void 0 === e
                  ? void 0
                  : e.map((e) =>
                      e
                        ? (0, n.jsx)(
                            v.O2,
                            {
                              className: (0, i.W)(C().track, {
                                [C().appearingTrack]:
                                  e.id === A.additionTrackInProggress,
                              }),
                              track: e,
                              playContextParams: x(e, w),
                              shouldCheckSelfIndex: !1,
                            },
                            e.id,
                          )
                        : null,
                    );
          }, [
            I.isSearchLoading,
            null == A ? void 0 : A.playlistTracks,
            A.additionTrackInProggress,
            w,
          ]),
          U = (0, l.useMemo)(() => {
            var e, t;
            return (
              null === (e = I.meta) || void 0 === e ? void 0 : e.canUserChange
            )
              ? I.isSearchLoading
                ? (0, n.jsx)(y.DX, {
                    className: C().shimmerItem,
                    variant: b.Lx.PLAYLIST,
                  })
                : null == A
                  ? void 0
                  : null === (t = A.suggestedTracks) || void 0 === t
                    ? void 0
                    : t.map((e) =>
                        e
                          ? (0, n.jsx)(
                              v.VZ,
                              {
                                track: e,
                                className: (0, i.W)({
                                  [C().disappearingTrack]:
                                    e.id === A.additionTrackInProggress,
                                }),
                                shouldCheckSelfIndex: !1,
                                playContextParams: x(e, D),
                                onClick: M,
                              },
                              e.id,
                            )
                          : null,
                      )
              : void 0;
          }, [
            null === (a = I.meta) || void 0 === a ? void 0 : a.canUserChange,
            I.isSearchLoading,
            null == A ? void 0 : A.suggestedTracks,
            A.additionTrackInProggress,
            D,
            M,
          ]),
          F = (0, l.useMemo)(() => {
            var e, t;
            return (null == A
              ? void 0
              : null === (e = A.playlistTrackIds) || void 0 === e
                ? void 0
                : e.length) ||
              (null == A
                ? void 0
                : null === (t = A.suggestedTracks) || void 0 === t
                  ? void 0
                  : t.length) ||
              I.isSearchLoading
              ? null
              : (0, n.jsx)(f.vY, {
                  className: C().emptyBlockContainer,
                  isEmptySearch: !0,
                });
          }, [
            null == A
              ? void 0
              : null === (r = A.playlistTrackIds) || void 0 === r
                ? void 0
                : r.length,
            null == A
              ? void 0
              : null === (o = A.suggestedTracks) || void 0 === o
                ? void 0
                : o.length,
            I.isSearchLoading,
          ]);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(g.M, {
              className: (0, i.W)(C().root, N),
              autoFocus: S,
              initialValue: k,
              correctedValue: null,
              placeholder: P({ id: "search.track-placeholder" }),
              onChange: V,
              resetButtonAriaLabel: P({
                id: "interface-actions.reset-search-input",
              }),
              onResetClick: I.resetSearch,
            }),
            k &&
              (0, n.jsxs)("div", {
                className: C().content,
                children: [
                  F,
                  B,
                  Number(
                    null == A
                      ? void 0
                      : null === (c = A.suggestedTracks) || void 0 === c
                        ? void 0
                        : c.length,
                  ) > 0 &&
                    (null === (u = I.meta) || void 0 === u
                      ? void 0
                      : u.canUserChange) &&
                    (0, n.jsx)(
                      p.Caption,
                      {
                        variant: "div",
                        type: "text",
                        size: "s",
                        weight: "medium",
                        className: (0, i.W)(C().catalog, {
                          [C().catalog_withTracks]:
                            null == A
                              ? void 0
                              : null === (_ = A.playlistTrackIds) ||
                                  void 0 === _
                                ? void 0
                                : _.length,
                        }),
                        children: (0, n.jsx)(m.Z, {
                          id: "search.search-catalog",
                        }),
                      },
                      "search.search-catalog-caption",
                    ),
                  U,
                ],
              }),
          ],
        });
      });
      var N = a(13236),
        P = a(90598),
        k = a.n(P),
        L = a(3786),
        I = a(63690),
        A = a.n(I);
      let T = (0, r.Pi)(
        (0, l.forwardRef)((e, t) => {
          var a;
          let { children: r, "data-index": o, ...s } = e,
            { playlist: c } = (0, b.oR)(),
            {
              isDragging: u,
              listeners: d,
              setNodeRef: m,
              transform: g,
              transition: p,
              attributes: f,
            } = (0, L.nB)({
              id: String(
                null === (a = c.items[o]) || void 0 === a ? void 0 : a.key,
              ),
            }),
            v = (0, l.useCallback)(
              (e) => {
                m(e), "function" == typeof t && t(e);
              },
              [t, m],
            ),
            h = {
              transition: p,
              "--translate-y": g ? "".concat(Math.round(g.y), "px") : void 0,
            };
          return (0, n.jsx)("div", {
            ref: v,
            "data-index": o,
            style: h,
            ...s,
            className: A().root,
            children: (0, n.jsx)("div", {
              className: (0, i.W)(A().inner, { [A().dragging]: u }),
              ...d,
              ...f,
              children: r,
            }),
          });
        }),
      );
      var j = a(2050),
        R = a(44757),
        w = a(98786);
      let D = (e, t) => {
          var a;
          let n = t - 1;
          if (!e.items.length || n < 0 || n > e.items.length) return "";
          let i = e.items[n];
          return (
            (null == i
              ? void 0
              : null === (a = i.data) || void 0 === a
                ? void 0
                : a.title) || ""
          );
        },
        G = (e) => {
          let { formatMessage: t } = (0, s.Z)(),
            a = {
              draggable: t({ id: "drag-and-drop.playlist-move-instructions" }),
            };
          return {
            screenReaderInstructions: a,
            announcements: {
              onDragStart(a) {
                let { active: n } = a,
                  i = D(e, Number(n.id)),
                  r = n.id;
                return t(
                  { id: "drag-and-drop.playlist-on-move-start" },
                  { trackName: i, index: r },
                );
              },
              onDragOver(a) {
                let { active: n, over: i } = a,
                  r = D(e, Number(n.id));
                if (i) {
                  let e = i.id;
                  return t(
                    { id: "drag-and-drop.playlist-on-move" },
                    { trackName: r, index: e },
                  );
                }
                return t(
                  { id: "drag-and-drop.playlist-on-move-fail" },
                  { trackName: r },
                );
              },
              onDragEnd(a) {
                let { active: n, over: i } = a,
                  r = D(e, Number(n.id));
                if (i) {
                  let e = i.id;
                  return t(
                    { id: "drag-and-drop.playlist-on-move-end-with-index" },
                    { trackName: r, index: e },
                  );
                }
                return t(
                  { id: "drag-and-drop.playlist-on-move-end" },
                  { trackName: r },
                );
              },
              onDragCancel: () =>
                t({ id: "drag-and-drop.playlist-on-move-cancel" }),
            },
          };
        },
        O = (e) => {
          let { notify: t } = (0, b.d$)(),
            { formatMessage: a } = (0, s.Z)();
          return (0, l.useCallback)(
            async (i) => {
              var r, o, l, s;
              let { from: c, to: u } = i;
              if (c < 0 || u < 0 || c >= e.items.length || u >= e.items.length)
                return;
              let d = String(
                null === (r = e.items[c]) || void 0 === r ? void 0 : r.id,
              );
              if (!d) return;
              let m = (
                null === (o = e.items[c]) || void 0 === o ? void 0 : o.albumId
              )
                ? Number(
                    null === (l = e.items[c]) || void 0 === l
                      ? void 0
                      : l.albumId,
                  )
                : void 0;
              e.moveTrack(c, u);
              let g = await (null === (s = e.meta) || void 0 === s
                ? void 0
                : s.changePlaylist(
                    (0, h.PG)({
                      operation: h.aL.MOVE,
                      startPosition: c,
                      endPosition: u,
                      tracks: [{ id: d, albumId: m }],
                    }),
                  ));
              (g && g === h.pX.OK) ||
                (g === h.pX.RELOAD ? e.refresh() : e.moveTrack(u, c),
                t(
                  (0, n.jsx)(y.Q, {
                    error: a({ id: "drag-and-drop.failed-to-move" }),
                  }),
                  { containerId: b.W$.ERROR },
                ));
            },
            [a, t, e],
          );
        };
      var V = a(81711),
        M = a.n(V);
      let B = (0, r.Pi)((e) => {
        var t, a;
        let i,
          { index: r, className: o } = e,
          { playlist: l, experiments: s, sonataState: c } = (0, b.oR)(),
          u =
            s.checkExperiment(b.pe.WebNextPlaylistAddition, "on") &&
            (null === (t = l.meta) || void 0 === t ? void 0 : t.isOwnPlaylist),
          d = (0, b.x5)({ pageId: b.Rh.PLAYLIST, blockId: b.aU.PLAYLIST }),
          m = l.items[r];
        return l.isEmptyPlaylist && u
          ? (0, n.jsx)(f.vY, { className: M().emptyBlockContainer })
          : ((i =
              m && m.data && l.meta
                ? m.data.isTrackPodcast ||
                  (null === (a = m.data.mainAlbum) || void 0 === a
                    ? void 0
                    : a.isPodcast)
                  ? (0, n.jsx)(v.N6, {
                      withPodcastName: !0,
                      track: m.data,
                      hasDuplicatesBefore: (0, h.BA)(l.items, m, r),
                      playContextParams: {
                        contextData: {
                          type: _.Ak.Playlist,
                          meta: l.contextMeta,
                          from: d,
                        },
                        entitiesData: c.unloadedEntitiesDataFromModels,
                        queueParams: { index: r },
                        loadContextMeta: !0,
                      },
                      className: o,
                    })
                  : (0, n.jsx)(v.O2, {
                      track: m.data,
                      hasDuplicatesBefore: (0, h.BA)(l.items, m, r),
                      playContextParams: {
                        contextData: {
                          type: _.Ak.Playlist,
                          meta: l.contextMeta,
                          from: d,
                        },
                        entitiesData: c.unloadedEntitiesDataFromModels,
                        queueParams: { index: r },
                        loadContextMeta: !0,
                      },
                      className: o,
                    })
                : (0, n.jsx)(y.DX, {
                    className: M().shimmerItem,
                    variant: b.Lx.PLAYLIST,
                  })),
            (0, n.jsx)(h.jK.Provider, {
              value: { playlist: l.meta, trackIndex: r },
              children: i,
            }));
      });
      var U = a(43601),
        F = a.n(U);
      let W = (0, r.Pi)((e) => {
          let { children: t, playlist: a } = e,
            { announcements: i, screenReaderInstructions: r } = G(a),
            o = O(a),
            s = (0, j.Dy)(
              (0, j.VT)(j.MA, {
                activationConstraint: { distance: { y: 1 }, tolerance: 5 },
              }),
              (0, j.VT)(j.LO, {
                activationConstraint: { delay: 250, tolerance: 5 },
              }),
              (0, j.VT)(j.Lg, {
                coordinateGetter: L.is,
                keyboardCodes: {
                  start: ["Enter"],
                  cancel: ["Escape"],
                  end: ["Enter"],
                },
              }),
            ),
            [c, u] = (0, l.useState)(null),
            d = (0, l.useCallback)((e) => {
              let { active: t } = e;
              u(t.id);
            }, []),
            m = (0, l.useCallback)(
              (e) => {
                let { active: t, over: n } = e;
                if (!t.id || !(null == n ? void 0 : n.id)) return;
                let i = a.itemsKeys.indexOf(String(t.id)),
                  r = a.itemsKeys.indexOf(String(n.id));
                Number.isInteger(i) &&
                  Number.isInteger(r) &&
                  o({ from: i, to: r });
              },
              [o, a.itemsKeys],
            ),
            g = (0, l.useCallback)(() => {
              u(null);
            }, []),
            p = (0, l.useMemo)(
              () => a.itemsKeys.indexOf(String(c)),
              [c, a.itemsKeys],
            );
          return a.isDragAndDropEnabled
            ? (0, n.jsxs)(j.LB, {
                sensors: s,
                collisionDetection: j.pE,
                onDragStart: d,
                onDragEnd: m,
                onDragCancel: g,
                modifiers: [R.DL, R.F4],
                accessibility: {
                  announcements: i,
                  screenReaderInstructions: r,
                },
                children: [
                  (0, n.jsx)("div", {
                    className: F().root,
                    children: (0, n.jsx)(L.Fo, {
                      items: a.itemsKeys,
                      strategy: L.qw,
                      children: t,
                    }),
                  }),
                  (0, w.createPortal)(
                    (0, n.jsx)(j.y9, {
                      dropAnimation: { duration: 0 },
                      children: c
                        ? (0, n.jsx)("div", {
                            className: F().draggableItemWrapper,
                            children: (0, n.jsx)(B, {
                              index: p,
                              className: F().noHoverItem,
                            }),
                          })
                        : null,
                    }),
                    window.document.body,
                  ),
                ],
              })
            : t;
        }),
        H = (0, r.Pi)((e) => {
          var t, a, r;
          let { userId: d, kind: m, playlistUuid: g } = e,
            p = (0, l.useRef)(0),
            { notify: v } = (0, b.d$)(),
            { playlist: h, experiments: _ } = (0, b.oR)(),
            { formatMessage: x } = (0, s.Z)(),
            { ref: S, offsetY: C } = (0, c.e)(),
            [P, L] = (0, N.zU)(),
            I = (0, l.useMemo)(() => {
              var e;
              return (0, b.XG)(
                null == h
                  ? void 0
                  : null === (e = h.meta) || void 0 === e
                    ? void 0
                    : e.averageColor,
              );
            }, [
              null == h
                ? void 0
                : null === (t = h.meta) || void 0 === t
                  ? void 0
                  : t.averageColor,
            ]),
            [A, j] = (0, N.at)(I, C),
            R =
              _.checkExperiment(b.pe.WebNextPlaylistAddition, "on") &&
              (null === (a = h.meta) || void 0 === a
                ? void 0
                : a.isOwnPlaylist),
            [w, D] = (0, l.useState)(!1),
            G = _.checkExperiment(b.pe.WebNextPlaylistAddition, "on");
          (0, l.useEffect)(
            () => () => {
              h.reset(), (p.current = 0);
            },
            [h, g, d, m],
          );
          let O = (0, l.useMemo)(
            () => () => {
              (h.isRejected || (!h.meta && !h.isLoading)) &&
                p &&
                !(p.current > 0) &&
                (v(
                  (0, n.jsx)(y.Q, {
                    error: x({
                      id: "playlist-errors.error-during-loading-playlist",
                    }),
                  }),
                  { containerId: b.W$.ERROR },
                ),
                p.current++);
            },
            [h.isRejected, h.meta, h.isLoading, v, x],
          );
          O(),
            h.loadingState === b.Gu.IDLE &&
              ("string" == typeof g
                ? (0, l.use)(
                    h.getPlaylistByUuid({ playlistUuid: g, resumeStream: !1 }),
                  )
                : "string" == typeof d &&
                  "string" == typeof m &&
                  (0, l.use)(
                    h.getPlaylistByUserIdAndKind({
                      userId: d,
                      playlistKind: Number(m),
                      resumeStream: !1,
                    }),
                  )),
            (0, b.NO)(h.loadingState === b.Gu.RESOLVE),
            h.isNotFound && (0, o.notFound)();
          let V = (0, l.useMemo)(
              () =>
                h.isLoading || !h.meta || h.isRejected
                  ? (0, n.jsx)(u.KC, { className: k().header })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(u.Vm, {
                          playlist: h.meta,
                          isDisabled: h.isDisabled,
                          className: k().header,
                          ref: S,
                        }),
                        G &&
                          (0, n.jsx)(E, {
                            autoFocus: !h.items.length,
                            onChange: D,
                          }),
                      ],
                    }),
              [h.isDisabled, h.isLoading, h.meta, h.isRejected, S, h.items, G],
            ),
            M = (0, l.useMemo)(
              () => ({
                Header: () => V,
                Item: h.isDragAndDropEnabled ? T : void 0,
                Footer: () =>
                  (0, n.jsxs)("div", {
                    className: k().footerContainer,
                    children: [
                      (0, n.jsx)("div", {
                        className: k().carouselBlocks,
                        children:
                          h.hasSimilarPlaylists &&
                          (0, n.jsx)(b.J, {
                            blockId: b.BE.PLAYLISTS_SIMILAR_PLAYLIST,
                            blockType: b.BE.PLAYLISTS_SIMILAR_PLAYLIST,
                            blockPosX: 1,
                            blockPosY: 2,
                            blockIdForFrom: b.BE.PLAYLISTS_SIMILAR_PLAYLIST,
                            objectsCount: h.similarPlaylists.length,
                            children: (0, n.jsx)(f.VD, {
                              className: k().carouselContainer,
                              headerClassName: (0, i.W)(
                                k().carouselBlockHeader,
                                k().carouselBlock,
                              ),
                              containerClassName: k().carouselBlock,
                              title: x({
                                id: "entity-names.similar-playlists",
                              }),
                              playlists: h.similarPlaylists,
                              isLoading: h.isLoading,
                            }),
                          }),
                      }),
                      !(h.isEmptyPlaylist && R) &&
                        (0, n.jsx)(y.$_, { className: k().footer }),
                    ],
                  }),
              }),
              [
                h.isDragAndDropEnabled,
                h.hasSimilarPlaylists,
                h.similarPlaylists,
                h.isLoading,
                h.isEmptyPlaylist,
                V,
                x,
                R,
              ],
            ),
            U = (0, l.useCallback)(
              (e) => {
                h.getTracksByRange(e);
              },
              [h],
            ),
            F = (0, l.useCallback)(
              (e) => {
                var t;
                return null === (t = h.items[e]) || void 0 === t
                  ? void 0
                  : t.key;
              },
              [h.items],
            ),
            H = (0, l.useCallback)((e) => e, []),
            z = h.items.length || (R ? 1 : 0);
          return (0, n.jsx)(b.Lh, {
            pageId: b.Rh.PLAYLIST,
            children: (0, n.jsxs)(N.I7, {
              scrollElement: P,
              children: [
                (0, n.jsx)(y.h4, { style: j }),
                (0, n.jsx)("div", {
                  className: k().averageColorBackground,
                  style: A,
                }),
                (0, n.jsx)(W, {
                  playlist: h,
                  children: (0, n.jsx)(y.Wv, {
                    context: {
                      listAriaLabel: x(
                        { id: "entity-names.playlist-tracks-list" },
                        {
                          playlistName:
                            (null === (r = h.meta) || void 0 === r
                              ? void 0
                              : r.title) || "",
                        },
                      ),
                    },
                    className: (0, i.W)(k().root, k().important),
                    listClassName: k().content,
                    customComponents: M,
                    computeItemKey: h.isDragAndDropEnabled ? F : H,
                    totalCount: w ? 0 : z,
                    itemContentCallback: (e) => (0, n.jsx)(B, { index: e }),
                    onGetDataByRange: U,
                    debounceDurationInMs: 300,
                    initialItemCount: h.items.length,
                    handleRef: L,
                    shouldTriggerRangeChangedOnTotalCountChange: !0,
                  }),
                }),
              ],
            }),
          });
        });
    },
    63173: function (e, t, a) {
      "use strict";
      a.d(t, {
        s6: function () {
          return n.PostPage;
        },
        vU: function () {
          return m;
        },
      });
      var n = a(66048);
      a(76674);
      var i = a(96555),
        r = a(96431),
        o = a(65237),
        l = a(96911),
        s = a(20210),
        c = a(81446),
        u = a(3515),
        d = a(84133);
      let m = i.V5.model("PostPage", {
        errorStatusCode: i.V5.maybe(i.V5.number),
        loadingState: i.V5.enumeration(Object.values(d.Gu)),
        title: i.V5.maybeNull(i.V5.string),
        promotionType: i.V5.maybeNull(i.V5.enumeration(Object.values(o.qe))),
        artists: i.V5.maybe(i.V5.array(c.Go)),
        albums: i.V5.maybe(i.V5.array(l.ug)),
        playlists: i.V5.maybe(i.V5.array(s.d2)),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === d.Gu.IDLE || e.loadingState === d.Gu.PENDING
            );
          },
          get isNotFound() {
            let t =
              e.errorStatusCode === r.CN.NOT_FOUND ||
              e.errorStatusCode === r.CN.BAD_REQUEST;
            return e.loadingState === d.Gu.REJECT && t;
          },
          get isSomethingWrong() {
            return e.loadingState === d.Gu.REJECT && !this.isNotFound;
          },
        }))
        .actions((e) => {
          let t = {
            getData: (0, i.ls)(function* (t) {
              let { promoId: a } = t,
                { feedResource: n, logger: o } = (0, i.dU)(e);
              if (e.loadingState !== d.Gu.PENDING)
                try {
                  e.loadingState = d.Gu.PENDING;
                  let t = yield n.getPromotionsById({ promoId: a });
                  (e.title = t.title),
                    (e.promotionType = t.promotionType),
                    t.artists &&
                      t.artists.length > 0 &&
                      (e.artists = (0, i.pj)(t.artists.map(c.d))),
                    t.albums &&
                      t.albums.length > 0 &&
                      (e.albums = (0, i.pj)(t.albums.map(l.ym))),
                    t.playlists &&
                      t.playlists.length > 0 &&
                      (e.playlists = (0, i.pj)(
                        t.playlists.map((e) => {
                          let { playlist: t } = e;
                          return (0, u.PV)(t);
                        }),
                      )),
                    e.loadingState !== d.Gu.IDLE &&
                      (e.loadingState = d.Gu.RESOLVE);
                } catch (t) {
                  ("string" == typeof t || t instanceof Error) && o.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.loadingState !== d.Gu.IDLE &&
                      (e.loadingState = d.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = d.Gu.IDLE),
                (e.title = null),
                (e.artists = (0, i.pj)([])),
                (e.albums = (0, i.pj)([]));
            },
          };
          return t;
        });
    },
    76674: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          PostNotFoundPage: function () {
            return o;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(2365);
      let o = (0, i.Pi)(() => (0, n.jsx)(r.T, {}));
    },
    66048: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          PostPage: function () {
            return j;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(11769),
        o = a(99616),
        l = a(36019),
        s = a(71716),
        c = a(12670),
        u = a(1918),
        d = a(70579),
        m = a(13236),
        g = a(84133),
        p = a(44285),
        f = a(18448),
        v = a.n(f);
      let h = () =>
        (0, n.jsxs)("div", {
          className: v().root,
          children: [
            (0, n.jsx)(c.Shimmer, { radius: "l", className: v().top }),
            (0, n.jsx)(c.Shimmer, { radius: "l", className: v().bottom }),
          ],
        });
      var b = a(15697),
        y = a.n(b),
        _ = a(96911),
        x = a(57551),
        S = a.n(x);
      let C = (0, i.Pi)((e) => {
        let { albums: t = [] } = e;
        return (0, n.jsx)("div", {
          className: S().root,
          children: (0, n.jsx)("div", {
            className: S().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, n.jsx)(
                _.rf,
                { className: S().item, album: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var E = a(81546),
        N = a(74706),
        P = a.n(N);
      let k = (0, i.Pi)((e) => {
        let { artists: t = [] } = e;
        return (0, n.jsx)("div", {
          className: P().root,
          children: (0, n.jsx)("div", {
            className: P().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, n.jsx)(
                E.IT,
                { className: P().item, artist: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var L = a(20210),
        I = a(95456),
        A = a.n(I);
      let T = (0, i.Pi)((e) => {
          let { playlists: t = [] } = e;
          return (0, n.jsx)("div", {
            className: A().root,
            children: (0, n.jsx)("div", {
              className: A().content,
              "aria-labelledby": "post-page-header",
              tabIndex: 0,
              children: t.map((e) =>
                (0, n.jsx)(
                  L.ZL,
                  { className: A().item, playlist: e, contentLinesCount: 3 },
                  e.id,
                ),
              ),
            }),
          });
        }),
        j = (0, i.Pi)((e) => {
          let { promoId: t } = e,
            { post: a } = (0, g.oR)(),
            i = (0, g.k6)(),
            [f, v] = (0, m.zU)();
          if (
            (t &&
              a.loadingState === g.Gu.IDLE &&
              (0, o.use)(a.getData({ promoId: t })),
            (0, o.useEffect)(
              () => () => {
                a.reset();
              },
              [a],
            ),
            a.isNotFound && (0, r.notFound)(),
            (0, g.NO)(a.loadingState === g.Gu.RESOLVE),
            a.isSomethingWrong)
          )
            return (0, n.jsx)(d.D, {});
          let b = (0, o.useMemo)(() => {
            if (a.isLoading) return (0, n.jsx)(h, {});
            switch (a.promotionType) {
              case l.qe.ARTISTS:
                return (0, n.jsx)(k, { artists: a.artists });
              case l.qe.ALBUMS:
                return (0, n.jsx)(C, { albums: a.albums });
              case l.qe.PLAYLISTS:
                return (0, n.jsx)(T, { playlists: a.playlists });
              default:
                (0, r.notFound)();
            }
          }, [a.albums, a.artists, a.isLoading, a.playlists, a.promotionType]);
          return (0, n.jsx)(g.Lh, {
            pageId: g.Rh.POST,
            children: (0, n.jsxs)(m.I7, {
              scrollElement: f,
              outerTitle: a.title || void 0,
              children: [
                (0, n.jsx)(p.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: i.canBack,
                  children: a.title
                    ? (0, n.jsx)(u.Heading, {
                        id: "post-header",
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: a.title,
                      })
                    : (0, n.jsx)(c.Shimmer, {
                        className: y().shimmerTitle,
                        radius: "l",
                      }),
                }),
                (0, n.jsx)(s.t, {
                  className: y().scrollableContainer,
                  ref: v,
                  children: (0, n.jsx)("div", {
                    className: y().container,
                    children: b,
                  }),
                }),
              ],
            }),
          });
        });
    },
    50950: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SearchHistoryPage: function () {
            return h;
          },
        });
      var n = a(8759),
        i = a(79765),
        r = a(33423),
        o = a(99616),
        l = a(65244),
        s = a(2814),
        c = a(15527),
        u = a(14581),
        d = a(71716),
        m = a(1918),
        g = a(16367),
        p = a(84133),
        f = a(54301),
        v = a.n(f);
      let h = (0, r.Pi)(() => {
        var e;
        let t = (0, p.uK)(),
          a = t.get(p.U5),
          { search: r, user: f, settings: h } = (0, p.oR)(),
          { formatMessage: b } = (0, l.Z)(),
          y = (0, p.k6)(),
          _ = (0, o.useRef)(!1),
          x = (0, g.vy)(() => {
            _.current = !0;
          }),
          S = h.layout === p.t8.Mobile,
          C = r.history.items.length;
        r.isHistoryReady &&
          (null === (e = f.account) || void 0 === e ? void 0 : e.uid) &&
          (0, o.use)(r.getHistory({ userId: f.account.uid, config: a })),
          (0, o.useEffect)(
            () => () => {
              (null == _ ? void 0 : _.current)
                ? (r.resetHistoryItems(), (_.current = !1))
                : r.resetHistoryStateRequest();
            },
            [r],
          );
        let E = (0, o.useMemo)(
            () =>
              (0, i.Z)(() => {
                null == y || y.back();
              }, 200),
            [y],
          ),
          N = (0, o.useMemo)(
            () =>
              r.history.items.length
                ? (0, n.jsx)("div", {
                    className: v().items,
                    children: r.history.items.map(g.Fu).filter((e) => e),
                  })
                : (0, n.jsx)(m.Caption, {
                    className: v().emptyHistory,
                    variant: "div",
                    size: "m",
                    type: "text",
                    children: (0, n.jsx)(s.Z, { id: "search.history-empty" }),
                  }),
            [r.history.items],
          );
        return (0, n.jsx)("div", {
          className: v().root,
          children: (0, n.jsxs)(d.t, {
            className: v().scrollContent,
            containerClassName: v().scrollContainer,
            children: [
              (0, n.jsxs)("div", {
                className: v().header,
                children: [
                  (0, n.jsxs)("div", {
                    className: v().title,
                    children: [
                      y.canBack &&
                        (0, n.jsx)(c.z, {
                          "aria-label": b({ id: "navigation.go-back" }),
                          radius: "round",
                          disabled: !y.canBack,
                          size: "s",
                          icon: (0, n.jsx)(u.J, {
                            size: "xxs",
                            variant: "arrowLeft",
                          }),
                          onClick: E,
                        }),
                      (0, n.jsx)(m.Heading, {
                        variant: "h2",
                        size: S ? "m" : "xl",
                        children: (0, n.jsx)(s.Z, { id: "search.history" }),
                      }),
                    ],
                  }),
                  (0, n.jsx)(c.z, {
                    "aria-label": b({ id: "search.clear-history" }),
                    radius: "xxxl",
                    variant: "outline",
                    disabled: !C,
                    size: S ? "s" : "default",
                    onClick: x,
                    children: (0, n.jsx)(m.Caption, {
                      variant: "span",
                      size: "m",
                      type: "text",
                      children: (0, n.jsx)(s.Z, { id: "search.clear-history" }),
                    }),
                  }),
                ],
              }),
              !r.isHistoryLoading && N,
            ],
          }),
        });
      });
    },
    7992: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SearchPage: function () {
            return x;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(79765),
        o = a(33423),
        l = a(11769),
        s = a(99616),
        c = a(65244),
        u = a(36019),
        d = a(71716),
        m = a(9227),
        g = a(26265),
        p = a(22810),
        f = a(16367),
        v = a(84133),
        h = a(44285);
      let b = [
        u.ay.TOP,
        u.ay.TRACK,
        u.ay.ALBUM,
        u.ay.ARTIST,
        u.ay.PLAYLIST,
        u.ay.PODCAST,
      ];
      var y = a(16894),
        _ = a.n(y);
      let x = (0, o.Pi)(() => {
        let e = (0, g.useTabsState)(0),
          [t, a] = (0, s.useState)(u.ay.TOP),
          [o, y] = (0, s.useState)(!1),
          { formatMessage: x } = (0, c.Z)(),
          { search: S, experiments: C } = (0, v.oR)(),
          E = (0, v.uK)(),
          N = E.get(v.U5),
          P = b.filter((e) => {
            if ("podcast" !== e || N.features.nonMusic) return e;
          });
        C.checkExperiment(v.pe.WebNextDisableSearch, "on") &&
          (0, l.redirect)("/");
        let [k, L] = (0, s.useState)(""),
          I = k.length > 0;
        (0, s.useEffect)(
          () => () => {
            S.reset();
          },
          [S],
        );
        let A = (0, s.useCallback)(
            (e, t) => {
              S.resetResults();
              let a = 0 === e.length;
              a ||
                S.getSearchResults({
                  text: decodeURIComponent(e),
                  filter: t,
                  config: N,
                });
            },
            [S, N],
          ),
          T = (0, s.useCallback)(
            (e) => {
              let a = e.trim(),
                n = encodeURIComponent(a);
              L(n), A(n, t), S.resetSearchCorrectedText(), y(!1);
            },
            [S, A, t, y],
          ),
          j = (0, s.useCallback)(() => {
            y(!0);
          }, [y]),
          R = (0, s.useMemo)(
            () =>
              (0, r.Z)((t) => {
                var n;
                if (!e.onTabChange || t === e.value) return;
                e.onTabChange(t);
                let i = null !== (n = b[t]) && void 0 !== n ? n : u.ay.TOP;
                a(i), A(k, i);
              }, 300),
            [A, k, e],
          ),
          w = (0, s.useMemo)(
            () => (e) => {
              let {
                id: t,
                type: a,
                blockPosition: n,
                position: i,
                feedbackType: r,
              } = e;
              S.sendFeedback({
                blockType: a,
                entityId: "".concat(a, ":").concat(t),
                timestamp: new Date().toISOString(),
                searchRequestId: S.searchRequestId,
                query: k,
                clickType: r,
                blockPosition: n,
                position: i,
                page: 0,
              });
            },
            [S, k],
          ),
          D = (0, s.useMemo)(
            () =>
              S.searchCorrectedText
                ? (0, n.jsx)(f.gK, {
                    searchCorrectedText: S.searchCorrectedText,
                    onCorrectText: j,
                  })
                : null,
            [j, S.searchCorrectedText],
          ),
          G = (0, s.useMemo)(() => {
            if (!S.isLoading && 0 === S.results.length)
              return (0, n.jsx)(f.hF, { searchCorrectedText: D });
            switch (t) {
              case u.ay.TOP:
                return (0, n.jsx)(f.Id, {
                  className: _().searchResults,
                  isLoading: S.isLoading,
                  results: S.results,
                  sendSearchFeedback: w,
                  searchCorrectedText: D,
                });
              case u.ay.TRACK:
                return (0, n.jsx)(f.XM, {
                  className: _().searchResults,
                  isLoading: S.isLoading,
                  results: S.results,
                  sendSearchFeedback: w,
                  searchCorrectedText: D,
                });
              case u.ay.ALBUM:
                return (0, n.jsx)(f.xz, {
                  className: _().searchResults,
                  isLoading: S.isLoading,
                  results: S.results,
                  filter: u.ay.ALBUM,
                  sendSearchFeedback: w,
                  searchCorrectedText: D,
                });
              case u.ay.PLAYLIST:
                return (0, n.jsx)(f.xz, {
                  className: _().searchResults,
                  isLoading: S.isLoading,
                  results: S.results,
                  filter: u.ay.PLAYLIST,
                  sendSearchFeedback: w,
                  searchCorrectedText: D,
                });
              case u.ay.ARTIST:
                return (0, n.jsx)(f.xz, {
                  className: _().searchResults,
                  isLoading: S.isLoading,
                  results: S.results,
                  filter: u.ay.ARTIST,
                  sendSearchFeedback: w,
                  searchCorrectedText: D,
                });
              case u.ay.PODCAST:
                return (0, n.jsx)(f.R_, {
                  className: _().searchResults,
                  isLoading: S.isLoading,
                  results: S.results,
                  sendSearchFeedback: w,
                  searchCorrectedText: D,
                });
              default:
                return D;
            }
          }, [S.isLoading, S.results, t, w, D]),
          O = (0, s.useMemo)(
            () =>
              k.length > 0
                ? G
                : (0, n.jsxs)(d.t, {
                    className: _().scrollableContent,
                    containerClassName: (0, i.W)(_().main, {
                      [_().main_empty]: S.isEmptyHistoryAndMixes,
                    }),
                    children: [
                      (0, n.jsx)(s.Suspense, {
                        children: (0, n.jsx)(v.J, {
                          blockId: v.BE.SEARCH_HISTORY,
                          blockType: v.BE.SEARCH_HISTORY,
                          blockPosX: 1,
                          blockPosY: 1,
                          blockIdForFrom: v.BE.SEARCH_HISTORY,
                          objectsCount: S.history.items.length,
                          children: (0, n.jsx)(f.y9, {}),
                        }),
                      }),
                      (0, n.jsx)(s.Suspense, {
                        children: (0, n.jsx)(p.JG, {}),
                      }),
                      (0, n.jsx)(h.$_, { className: _().footer }),
                    ],
                  }),
            [k.length, S.isEmptyHistoryAndMixes, G, S.history.items.length],
          ),
          V = (0, s.useMemo)(
            () => ({
              top: x({ id: "search-filters.top" }),
              track: x({ id: "search-filters.track" }),
              album: x({ id: "search-filters.album" }),
              artist: x({ id: "search-filters.artist" }),
              playlist: x({ id: "search-filters.playlist" }),
              podcast: x({ id: "search-filters.podcast" }),
            }),
            [x],
          );
        return (0, n.jsx)(v.Lh, {
          pageId: v.Rh.SEARCH,
          children: (0, n.jsxs)("div", {
            className: (0, i.W)(_().root, { [_().root_showFilters]: I }),
            children: [
              (0, n.jsxs)("div", {
                className: _().header,
                children: [
                  (0, n.jsx)(m.M, {
                    className: _().input,
                    autoFocus: !0,
                    initialValue: k,
                    placeholder: x({ id: "search.input-placeholder" }),
                    onChange: T,
                    resetButtonAriaLabel: x({
                      id: "interface-actions.reset-search-input",
                    }),
                    correctedValue: o ? S.searchCorrectedText : null,
                  }),
                  I &&
                    (0, n.jsx)(h.no, {
                      className: _().tabCarousel,
                      ...e,
                      onTabChange: R,
                      children: P.map((t, a) =>
                        (0, n.jsx)(
                          h.OK,
                          {
                            className: (0, i.W)(_().filter, {
                              [_().filter_selected]: a === e.value,
                            }),
                            title: V[t],
                            value: a,
                          },
                          a,
                        ),
                      ),
                    }),
                ],
              }),
              (0, n.jsx)("div", { className: _().content, children: O }),
            ],
          }),
        });
      });
    },
    42864: function (e, t, a) {
      "use strict";
      a.d(t, {
        uj: function () {
          return n.TagPage;
        },
        tS: function () {
          return c;
        },
      });
      var n = a(42651);
      a(92569);
      var i = a(96555),
        r = a(96431),
        o = a(3515),
        l = a(84133),
        s = a(58362);
      let c = i.V5.model("TagPage", {
        title: i.V5.maybe(i.V5.string),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
        tagLoadingState: i.V5.enumeration(Object.values(l.Gu)),
        playlistsLoadingState: i.V5.enumeration(Object.values(l.Gu)),
        playlistsData: i.V5.array(
          i.V5.model({ uid: i.V5.number, kind: i.V5.number }),
        ),
        playlists: i.V5.array(i.V5.maybeNull(o.Cd)),
        pager: i.V5.maybeNull(s.Vn),
        alreadyRequestedPages: i.V5.map(i.V5.number),
        pendingPages: i.V5.map(i.V5.number),
        requests: i.V5.maybeNull(i.V5.number),
      })
        .views((e) => ({
          get isNotFound() {
            let t =
                e.playlistsLoadingState === l.Gu.RESOLVE &&
                0 === e.playlists.length,
              a =
                (e.tagLoadingState === l.Gu.REJECT ||
                  e.playlistsLoadingState === l.Gu.REJECT) &&
                (e.errorStatusCode === r.CN.NOT_FOUND ||
                  e.errorStatusCode === r.CN.BAD_REQUEST);
            return a || t;
          },
        }))
        .actions((e) => {
          let t = {
            getPlaylists: (0, i.ls)(function* (t) {
              let { page: a = 0, pageSize: n = 20 } = t,
                { playlistsResource: s, logger: c } = (0, i.dU)(e);
              if (
                !(
                  e.tagLoadingState !== l.Gu.RESOLVE ||
                  (e.playlistsLoadingState === l.Gu.PENDING &&
                    e.pendingPages.has("".concat(a))) ||
                  e.alreadyRequestedPages.has("".concat(a))
                )
              ) {
                e.alreadyRequestedPages.set("".concat(a), a);
                try {
                  var u;
                  (e.playlistsLoadingState = l.Gu.PENDING),
                    e.pendingPages.set("".concat(a), a);
                  let t = a * n,
                    r = t + n,
                    c = e.playlistsData.slice(t, r),
                    d = yield s.getPlaylists({
                      playlistIds: c.map((e) =>
                        "".concat(e.uid, ":").concat(e.kind),
                      ),
                      resumeStream: !1,
                    });
                  e.requests =
                    (null !== (u = e.requests) && void 0 !== u ? u : 0) + 1;
                  let m = {
                    page: a,
                    perPage: n,
                    total: e.playlistsData.length,
                  };
                  0 === e.playlists.length &&
                    (e.playlists = (0, i.pj)(
                      Array.from({ length: m.total }, () => null),
                    ));
                  let g = d.playlists.map(o.PV);
                  (0, l.AG)({
                    items: e.playlists,
                    mappedRawItems: g,
                    page: a,
                    pageSize: n,
                  }),
                    (e.pager = m),
                    e.playlistsLoadingState !== l.Gu.IDLE &&
                      (e.playlistsLoadingState = l.Gu.RESOLVE);
                } catch (t) {
                  !(t instanceof r.eY) &&
                    (t instanceof Error || "string" == typeof t) &&
                    c.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.playlistsLoadingState !== l.Gu.IDLE &&
                      (e.playlistsLoadingState = l.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(a));
                }
              }
            }),
            reset() {
              (e.tagLoadingState = l.Gu.IDLE),
                (e.playlistsLoadingState = l.Gu.IDLE),
                e.alreadyRequestedPages.clear(),
                e.pendingPages.clear(),
                (e.title = void 0),
                (e.playlistsData = (0, i.pj)([])),
                (e.playlists = (0, i.pj)([])),
                (e.errorStatusCode = null);
            },
            getTag: (0, i.ls)(function* (a) {
              let { id: n, page: o = 0, pageSize: s = 20 } = a,
                { tagResource: c, logger: u } = (0, i.dU)(e);
              if (e.tagLoadingState !== l.Gu.PENDING)
                try {
                  var d;
                  e.tagLoadingState = l.Gu.PENDING;
                  let a = yield c.getPlaylistIds({ id: n });
                  (e.title =
                    null === (d = a.tag) || void 0 === d ? void 0 : d.name),
                    (e.playlistsData = (0, i.pj)(
                      a.ids.map((e) => ({ uid: e.uid, kind: e.kind })),
                    )),
                    e.tagLoadingState !== l.Gu.IDLE &&
                      (e.tagLoadingState = l.Gu.RESOLVE),
                    yield t.getPlaylists({ page: o, pageSize: s });
                } catch (t) {
                  !(t instanceof r.eY) &&
                    (t instanceof Error || "string" == typeof t) &&
                    u.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.tagLoadingState !== l.Gu.IDLE &&
                      (e.tagLoadingState = l.Gu.REJECT);
                }
            }),
          };
          return t;
        });
    },
    92569: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          TagNotFoundPage: function () {
            return o;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(2365);
      let o = (0, i.Pi)(() => (0, n.jsx)(r.T, {}));
    },
    42651: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          TagPage: function () {
            return h;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(11769),
        l = a(99616),
        s = a(65244),
        c = a(1918),
        u = a(70579),
        d = a(13236),
        m = a(20210),
        g = a(84133),
        p = a(44285),
        f = a(3537),
        v = a.n(f);
      let h = (0, r.Pi)((e) => {
        var t, a, r;
        let { tagId: f } = e,
          { tag: h } = (0, g.oR)(),
          { formatMessage: b } = (0, s.Z)(),
          [y, _] = (0, d.zU)(),
          x = (0, g.k6)();
        f || (0, o.notFound)();
        let S = (0, l.useCallback)(
          (e) => {
            h.getPlaylists({ page: e, pageSize: 20 });
          },
          [h],
        );
        h.tagLoadingState === g.Gu.IDLE &&
          (0, l.use)(h.getTag({ id: f, page: 0, pageSize: 20 })),
          h.isNotFound && (0, o.notFound)(),
          (0, l.useEffect)(
            () => () => {
              h.reset();
            },
            [h],
          );
        let C = (0, l.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(p.$_, { className: v().footer }) }),
          [],
        );
        return ((0, g.NO)(
          h.tagLoadingState === g.Gu.RESOLVE &&
            h.playlistsLoadingState === g.Gu.RESOLVE,
        ),
        (h.tagLoadingState !== g.Gu.REJECT &&
          h.playlistsLoadingState !== g.Gu.REJECT) ||
          h.isNotFound)
          ? (0, n.jsx)(g.Lh, {
              pageId: g.Rh.TAG,
              children: (0, n.jsx)(d.I7, {
                scrollElement: y,
                outerTitle: h.title,
                children: (0, n.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, n.jsx)(p.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: x.canBack,
                      children: (0, n.jsx)(c.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: h.title,
                      }),
                    }),
                    (0, n.jsx)(p.Wv, {
                      className: (0, i.W)(v().scrollContainer, v().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == h
                              ? void 0
                              : null === (t = h.playlists) || void 0 === t
                                ? void 0
                                : t[e],
                          i = b(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: b({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, n.jsx)(
                              m.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, n.jsx)(p.hi, { "aria-label": i });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == h
                              ? void 0
                              : null === (t = h.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: S,
                      pageSize: 20,
                      totalRequests:
                        null !== (r = h.requests) && void 0 !== r ? r : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: _,
                      context: {
                        listAriaLabel: b(
                          { id: "mixes.albums-list" },
                          { genreName: h.title || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            })
          : (0, n.jsx)(u.D, {});
      });
    },
    6329: function (e, t, a) {
      "use strict";
      a.d(t, {
        QG: function () {
          return n.LastEpisodes;
        },
        JP: function () {
          return d;
        },
      });
      var n = a(76963),
        i = a(96555),
        r = a(36019),
        o = a(95539),
        l = a(21774),
        s = a(84133);
      let c = i.V5.model("VolumeItemTrack", {
          type: i.V5.enumeration(Object.values(r.Vc)),
          id: i.V5.union(i.V5.string, i.V5.number),
          data: i.V5.maybeNull(o.le),
          position: i.V5.maybe(i.V5.number),
          isBest: i.V5.maybe(i.V5.boolean),
          loadingState: i.V5.enumeration(Object.values(s.Gu)),
        }),
        u = i.V5.model("VolumeItemText", {
          type: i.V5.literal(l.lf.TEXT),
          data: i.V5.maybeNull(i.V5.number),
        }),
        d = i.V5.union(u, c);
    },
    76963: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          LastEpisodes: function () {
            return p;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(99616),
        l = a(65244),
        s = a(71440),
        c = a(95539),
        u = a(84133),
        d = a(44285),
        m = a(63548),
        g = a.n(m);
      let p = (0, r.Pi)((e) => {
        let { className: t } = e,
          { formatMessage: a } = (0, l.Z)(),
          { album: r, sonataState: m } = (0, u.oR)(),
          p = (0, u.x5)({ pageId: u.Rh.PODCAST, blockId: u.aU.PODCAST }),
          f = (0, o.useMemo)(
            () =>
              r.lastEpisodes.map((e, t) =>
                r.isLoaded && e.data
                  ? (0, n.jsx)(
                      c.N6,
                      {
                        track: e.data,
                        playContextParams: {
                          contextData: {
                            type: s.Ak.Album,
                            meta: r.contextMeta,
                            from: p,
                          },
                          queueParams: {
                            index: r.trackIndexInContext.get(String(e.id)),
                          },
                          loadContextMeta: !1,
                          entitiesData: m.unloadedEntitiesDataFromModels,
                        },
                      },
                      e.data.id,
                    )
                  : (0, n.jsx)(
                      d.DX,
                      { className: g().shimmerItem, variant: u.Lx.ALBUM },
                      t,
                    ),
              ),
            [
              r.lastEpisodes,
              r.isLoaded,
              r.contextMeta,
              r.trackIndexInContext,
              p,
              m.unloadedEntitiesDataFromModels,
            ],
          );
        return (0, n.jsxs)("div", {
          className: (0, i.W)(t, g().root),
          children: [
            (0, n.jsx)(d.ti, {
              className: g().blockHeader,
              title: a({ id: "entity-names.podcast-last-episodes" }),
            }),
            (0, n.jsx)("div", {
              role: "list",
              "aria-label": a({ id: "podcast.last-episodes-list" }),
              tabIndex: 0,
              children: f,
            }),
          ],
        });
      });
    },
    22810: function (e, t, a) {
      "use strict";
      a.d(t, {
        JG: function () {
          return n.Mixes;
        },
        RB: function () {
          return i.MixesGrid;
        },
        ZP: function () {
          return d;
        },
      });
      var n = a(31411),
        i = a(85250),
        r = a(96555),
        o = a(96431),
        l = a(36019),
        s = a(27951),
        c = a(84133);
      let u = (e) => ({
          items: (0, r.pj)(e.items.map((e) => (0, s.Fh)(e.data))),
        }),
        d = r.V5.model("Mixes", {
          loadingState: r.V5.enumeration(Object.values(c.Gu)),
          items: r.V5.array(s.zn),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
        })
          .actions((e) => ({
            getMixes: (0, r.ls)(function* (t) {
              let { landingResource: a, logger: n } = (0, r.dU)(e);
              if (e.loadingState !== c.Gu.PENDING)
                try {
                  e.loadingState = c.Gu.PENDING;
                  let n = yield a.getBlock(
                    { uri: "/landing/block/mixes", fullList: t },
                    l.gQ.MIXES,
                  );
                  (e.items = u(n).items), (e.loadingState = c.Gu.RESOLVE);
                } catch (t) {
                  ("string" == typeof t || t instanceof Error) && n.error(t),
                    t instanceof o.du &&
                      (t.statusCode === o.CN.NOT_FOUND ||
                        t.statusCode === o.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = o.CN.NOT_FOUND),
                    e.loadingState !== c.Gu.IDLE &&
                      (e.loadingState = c.Gu.REJECT);
                }
            }),
          }))
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === c.Gu.IDLE || e.loadingState === c.Gu.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === c.Gu.REJECT;
            },
            get isNotFound() {
              let t = e.loadingState === c.Gu.RESOLVE && 0 === e.items.length,
                a = e.errorStatusCode === o.CN.NOT_FOUND;
              return a || t;
            },
          }));
    },
    31411: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          Mixes: function () {
            return f;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(99616),
        o = a(84133),
        l = a(65244),
        s = a(61617),
        c = a(27951),
        u = a(44285),
        d = a(67085),
        m = a.n(d);
      let g = (0, i.Pi)((e) => {
        let { mixes: t, isLoading: a, isRejected: i } = e,
          { formatMessage: o } = (0, l.Z)(),
          d = (0, r.useMemo)(
            () =>
              a || i
                ? (0, u.Cl)({ isLoading: a, withInfo: !1 })
                : t.map((e) =>
                    (0, n.jsx)(
                      c.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        coverSize: 80,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [a, i, t],
          );
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(u.ti, {
              className: m().carouselHeader,
              title: o({ id: "entity-names.mixes" }),
              titleSize: "xs",
              viewAllActionLink: "/mixes",
            }),
            (0, n.jsx)(s.l, {
              containerClassName: m().carouselBlock,
              itemClassName: m().mixItem,
              children: d,
            }),
          ],
        });
      });
      var p = a(85250);
      let f = (0, i.Pi)(() => {
        let { settings: e, search: t } = (0, o.oR)(),
          a = e.layout === o.t8.Mobile;
        return (t.mixes.loadingState === o.Gu.IDLE &&
          (0, r.use)(t.mixes.getMixes(!1)),
        a)
          ? (0, n.jsx)(g, {
              mixes: t.mixes.items,
              isLoading: t.mixes.isLoading,
              isRejected: t.mixes.isRejected,
            })
          : (0, n.jsx)(p.MixesGrid, {
              withTitle: !0,
              mixes: t.mixes.items,
              isLoading: t.mixes.isLoading,
              isRejected: t.mixes.isRejected,
            });
      });
    },
    85250: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          MixesGrid: function () {
            return m;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(99616),
        o = a(2814),
        l = a(1918),
        s = a(27951),
        c = a(44285),
        u = a(54672),
        d = a.n(u);
      let m = (0, i.Pi)((e) => {
        let {
            withTitle: t,
            mixes: a,
            isLoading: i,
            isRejected: u,
            shimmerCount: m = 5,
          } = e,
          g = (0, r.useMemo)(
            () =>
              i || u
                ? (0, n.jsx)(c.Wm, {
                    round: !1,
                    centered: !1,
                    withInfo: !1,
                    count: m,
                  })
                : a.map((e) =>
                    (0, n.jsx)(
                      s.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [i, u, a, m],
          );
        return (0, n.jsxs)("div", {
          children: [
            t &&
              (0, n.jsx)(l.Heading, {
                className: d().mixesTitle,
                size: "s",
                weight: "bold",
                variant: "h3",
                children: (0, n.jsx)(o.Z, { id: "entity-names.mixes" }),
              }),
            (0, n.jsx)("div", { className: d().mixesGrid, children: g }),
          ],
        });
      });
    },
    59221: function (e, t, a) {
      "use strict";
      a.d(t, {
        wp: function () {
          return e_;
        },
        Lc: function () {
          return ej;
        },
      });
      var n,
        i,
        r,
        o = a(8759),
        l = a(35338),
        s = a(33423),
        c = a(99616),
        u = a.t(c, 2),
        d = a(53433),
        m = a(84133),
        g = a(57285);
      let p = () => {
        let [e, t] = (0, c.useState)(!1),
          a = (0, c.useMemo)(
            () =>
              (0, g.Z)(
                () => {
                  t(window.innerWidth < 1024);
                },
                100,
                { trailing: !1 },
              ),
            [t],
          );
        return (
          (0, c.useEffect)(
            () => (
              window.addEventListener("resize", a),
              a(),
              () => {
                window.removeEventListener("resize", a);
              }
            ),
            [a],
          ),
          e && !1
        );
      };
      var f = a(29913),
        v = a.n(f),
        h = a(65244),
        b = a(15527),
        y = a(14581),
        _ = a(13410),
        x = {
          5881: (e, t, a) => {
            function n() {
              for (var e, t, a = 0, n = ""; a < arguments.length; )
                (e = arguments[a++]) &&
                  (t = (function e(t) {
                    var a,
                      n,
                      i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (a = 0; a < t.length; a++)
                          t[a] && (n = e(t[a])) && (i && (i += " "), (i += n));
                      else for (a in t) t[a] && (i && (i += " "), (i += a));
                    }
                    return i;
                  })(e)) &&
                  (n && (n += " "), (n += t));
              return n;
            }
            a.r(t), a.d(t, { clsx: () => n, default: () => i });
            let i = n;
          },
          9605: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            let n = {
              root: "NGdj0oZ2Bt8qdZhP2Tzt",
              root_collapsed: "rece5errcONnjJeX0YW8",
              root_direction_vertical: "QilmoKKJwk6f0BdkYgrA",
              root_direction_horizontal: "AO4rWY4RLVh48fwQw5Qs",
            };
          },
          4990: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            let n = {
              root: "yuyI2hMAT7qyL1N14MAQ",
              root_direction_vertical: "xfFtKQpgAYvC2jI1tBtS",
              root_direction_horizontal: "OGlYJO0lZgpSOhfU2Iru",
            };
          },
          4161: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            let n = {
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
          6161: (e, t, a) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var n = a(810),
              i = Symbol.for("react.element"),
              r = Symbol.for("react.fragment"),
              o = Object.prototype.hasOwnProperty,
              l =
                n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, a) {
              var n,
                r = {},
                c = null,
                u = null;
              for (n in (void 0 !== a && (c = "" + a),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                o.call(t, n) && !s.hasOwnProperty(n) && (r[n] = t[n]);
              if (e && e.defaultProps)
                for (n in (t = e.defaultProps))
                  void 0 === r[n] && (r[n] = t[n]);
              return {
                $$typeof: i,
                type: e,
                key: c,
                ref: u,
                props: r,
                _owner: l.current,
              };
            }
            (t.Fragment = r), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, a) => {
            e.exports = a(6161);
          },
          1845: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.AVAILABLE_SIZES = t.DEFAULT_SIZE = void 0),
              (t.DEFAULT_SIZE = 100),
              (t.AVAILABLE_SIZES = [30, 50, 80, 100, 200, 300, 400, 600, 800]);
            let a = (e) => `https://${e.replace(/^(https*:\/\/)/, "")}`;
            t.createAvatarUrl = (e, t, n) => {
              let i;
              return (
                (i = "orig" === t ? "orig" : n ? `m${t}x${t}` : `${t}x${t}`),
                a(e.replace("%%", i))
              );
            };
          },
          9665: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, a) {
                let n = a ?? e.currentTarget,
                  i = document.createElement("span"),
                  r = Math.max(n.clientWidth, n.clientHeight),
                  o = r / 2,
                  l = n.getBoundingClientRect(),
                  s =
                    0 === e.clientX
                      ? Math.round(l.width / 2)
                      : e.clientX - l.left,
                  c =
                    0 === e.clientY
                      ? Math.round(l.height / 2)
                      : e.clientY - l.top;
                (i.style.width = `${r}px`),
                  (i.style.height = `${r}px`),
                  (i.style.left = 0 === e.clientX ? "0px" : `${s - o}px`),
                  (i.style.top = `${c - o}px`),
                  i.classList.add(t);
                let u = n.getElementsByClassName(t)[0];
                u && u.remove(), n.insertBefore(i, n.firstChild);
              });
          },
          1317: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.createRipple = void 0);
            var n = a(9665);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return n.createRipple;
              },
            });
            var i = a(1845);
            Object.defineProperty(t, "createAvatarUrl", {
              enumerable: !0,
              get: function () {
                return i.createAvatarUrl;
              },
            });
          },
          9606: function (e, t, a) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Navigation = void 0);
            let i = a(9541),
              r = a(5881),
              o = a(3871),
              l = n(a(9605));
            t.Navigation = function ({
              className: e,
              children: t,
              collapsed: a = !1,
              direction: n = "vertical",
              ...s
            }) {
              return (0, i.jsx)(o.NavigationProvider, {
                collapsed: a,
                direction: n,
                children: (0, i.jsx)("nav", {
                  className: (0, r.clsx)(
                    l.default.root,
                    l.default[`root_direction_${n}`],
                    { [l.default.root_collapsed]: a },
                    e,
                  ),
                  "aria-label": s["aria-label"],
                  ...s,
                  children: t,
                }),
              });
            };
          },
          3871: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationProvider = t.NavigationContext = void 0);
            let n = a(9541),
              i = a(810);
            (t.NavigationContext = (0, i.createContext)({
              collapsed: !1,
              direction: "vertical",
            })),
              (t.NavigationProvider = ({
                collapsed: e,
                direction: a,
                children: r,
              }) => {
                let o = (0, i.useMemo)(
                  () => ({ collapsed: e, direction: a }),
                  [e, a],
                );
                return (0, n.jsx)(t.NavigationContext.Provider, {
                  value: o,
                  children: r,
                });
              });
          },
          9477: function (e, t, a) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationGroup = void 0);
            let i = a(9541),
              r = a(810),
              o = a(5881),
              l = a(3871),
              s = n(a(4990));
            t.NavigationGroup = function ({ className: e, children: t, ...a }) {
              let n = (0, r.createRef)(),
                { direction: c } = (0, r.useContext)(l.NavigationContext);
              return (0, i.jsx)("ol", {
                ref: n,
                className: (0, o.clsx)(
                  s.default.root,
                  s.default[`root_direction_${c}`],
                  e,
                ),
                ...a,
                children: t,
              });
            };
          },
          4306: function (e, t, a) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationItem = t.NavigationItemComponent = void 0);
            let i = a(9541),
              r = a(810),
              o = a(5881),
              l = a(3871),
              s = a(1317),
              c = n(a(4161));
            function u({
              className: e = "",
              forwardRef: t,
              children: a,
              selected: n = !1,
              shownAnimation: u,
              withRipple: d = !1,
              variant: m = "default",
              ...g
            }) {
              let { collapsed: p, direction: f } = (0, r.useContext)(
                  l.NavigationContext,
                ),
                v = (0, r.useCallback)(
                  (e) => {
                    d && (0, s.createRipple)(e, c.default.ripple);
                  },
                  [d],
                ),
                [h, b] = r.Children.toArray(a.props.children),
                y = (0, r.useMemo)(
                  () =>
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("div", {
                          className: c.default.iconContainer,
                          children: h,
                        }),
                        (0, i.jsx)("div", {
                          className: (0, o.clsx)(
                            c.default.textContainer,
                            c.default[`textContainer_direction_${f}`],
                            { [c.default.textContainer_selected]: n },
                          ),
                          children: b,
                        }),
                      ],
                    }),
                  [h, f, n, b],
                ),
                _ = (0, r.cloneElement)(a, {
                  className: (0, o.clsx)(
                    c.default.item,
                    c.default[`item_direction_${f}`],
                    {
                      [c.default.item_selected]: n,
                      [c.default[`item_collapsed_${f}`]]: p,
                    },
                    a.props.className,
                  ),
                  children: y,
                });
              return (0, i.jsx)("li", {
                ref: t,
                className: (0, o.clsx)(
                  c.default.root,
                  c.default[`root_direction_${f}`],
                  c.default[`root_variant_${m}`],
                  {
                    [c.default.root_animate]: u,
                    [c.default.root_collapsed]: p,
                  },
                  e,
                ),
                "aria-current": !!n && "page",
                onClick: v,
                ...g,
                children: _,
              });
            }
            (t.NavigationItemComponent = u),
              (t.NavigationItem = (0, r.forwardRef)((e, t) =>
                (0, i.jsx)(u, { forwardRef: t, ...e }),
              ));
          },
          810: (e) => {
            e.exports = u;
          },
        },
        S = {};
      function C(e) {
        var t = S[e];
        if (void 0 !== t) return t.exports;
        var a = (S[e] = { exports: {} });
        return x[e].call(a.exports, a, a.exports, C), a.exports;
      }
      (C.d = (e, t) => {
        for (var a in t)
          C.o(t, a) &&
            !C.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      }),
        (C.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (C.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var E = {};
      Object.defineProperty(E, "X$", { value: !0 }),
        (E.Dx = E.KB = E.W_ = void 0),
        (n = C(9606)),
        Object.defineProperty(E, "W_", {
          enumerable: !0,
          get: function () {
            return n.Navigation;
          },
        }),
        (i = C(9477)),
        Object.defineProperty(E, "KB", {
          enumerable: !0,
          get: function () {
            return i.NavigationGroup;
          },
        }),
        (r = C(4306)),
        Object.defineProperty(E, "Dx", {
          enumerable: !0,
          get: function () {
            return r.NavigationItem;
          },
        });
      var N = E.W_,
        P = E.KB,
        k = E.Dx;
      E.X$;
      var L = a(78354),
        I = a(1918),
        A = a(3561),
        T = a(39479),
        j = a(44285),
        R = a(6955),
        w = a(71747),
        D = a(36019),
        G = a(2814),
        O = a(45656),
        V = a(96437),
        M = a(21774);
      let B = {
        FLIP: { fallbackAxisSideDirection: "start", padding: 20 },
        SHIFT: { padding: 20 },
        OFFSET: 20,
      };
      var U = a(96213),
        F = a(53724),
        W = a.n(F);
      let H = (e) => {
          let { children: t, entityUrl: a, ariaLabel: n } = e;
          return a
            ? (0, o.jsx)(j.rU, {
                href: a,
                "aria-label": n,
                className: W().link,
                children: t,
              })
            : t;
        },
        z = (e) => {
          let {
              className: t,
              cover: a,
              title: n,
              subtitle: i,
              contextMenu: r,
              isCollapsed: s,
              withCollapseAnimation: u,
              entityUrl: d,
              onDoubleClick: m,
              forwardRef: g,
              ariaLabel: p,
            } = e,
            f = (0, c.useCallback)(
              (e) => {
                2 === e.detail
                  ? null == m || m()
                  : e.target instanceof HTMLElement &&
                    "IMG" !== e.target.tagName &&
                    (0, U.m)(e, W().ripple);
              },
              [m],
            );
          return (0, o.jsxs)(j.Md, {
            ref: g,
            onClick: f,
            className: (0, l.W)(W().root, { [W().root_withoutLink]: !d }, t),
            role: "listitem",
            children: [
              (0, o.jsxs)(H, {
                entityUrl: d,
                ariaLabel: p,
                children: [
                  (0, o.jsx)("div", { className: W().cover, children: a }),
                  (0, o.jsx)("div", {
                    className: W().meta,
                    children: (0, o.jsxs)("div", {
                      className: (0, l.W)(W().info, {
                        [W().info_collapsed]: s,
                        [W().info_animated]: u,
                      }),
                      children: [
                        (0, o.jsx)(I.Caption, {
                          "aria-hidden": !0,
                          className: W().title,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: n,
                        }),
                        (0, o.jsx)(I.Caption, {
                          "aria-hidden": !0,
                          className: W().subtitle,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: i,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: (0, l.W)(W().contextMenu, {
                  [W().contextMenu_hidden]: s,
                }),
                children: r,
              }),
            ],
          });
        },
        q = (0, c.forwardRef)((e, t) => (0, o.jsx)(z, { forwardRef: t, ...e })),
        K = (0, c.createContext)(null);
      var Y = a(93088),
        Z = a.n(Y),
        J = a(52317);
      let Q = (e) => {
          let { onPinClick: t, isPinned: a } = e,
            { isCollapsed: n } = (0, c.useContext)(K) || {},
            { formatMessage: i } = (0, h.Z)(),
            [r, s] = (0, c.useState)(!1),
            u = (0, c.useCallback)((e) => {
              e.preventDefault(), e.stopPropagation();
            }, []);
          return (
            (0, m.ZP)(r),
            (0, o.jsx)(J.v2, {
              reference: (0, o.jsx)(b.z, {
                className: (0, l.W)(Z().contextMenu, {
                  [Z().contextMenu_visible]: r,
                }),
                onClick: u,
                withRipple: !1,
                variant: "text",
                "aria-label": i({ id: "interface-actions.context-menu" }),
                icon: (0, o.jsx)(y.J, { size: "xxs", variant: "more" }),
                tabIndex: n ? -1 : 0,
                "aria-hidden": n,
              }),
              offsetOptions: 10,
              open: r,
              returnFocus: !1,
              onOpenChange: s,
              children: (0, o.jsx)(j.Zd, { onClick: t, isPinned: a }),
            })
          );
        },
        X = (e) => {
          var t;
          let { className: a, album: n, forwardRef: i } = e,
            { formatMessage: r } = (0, h.Z)(),
            { isCollapsed: s, withCollapseAnimation: u } =
              null !== (t = (0, c.useContext)(K)) && void 0 !== t ? t : {},
            d = (0, M.BV)(n),
            m = (0, c.useMemo)(
              () =>
                (0, o.jsx)(V.Paper, {
                  className: Z().cover,
                  radius: "xs",
                  children: (0, o.jsxs)(L.u, {
                    flipOptions: B.FLIP,
                    shiftOptions: B.SHIFT,
                    offsetOptions: B.OFFSET,
                    placement: "right",
                    enabled: s,
                    children: [
                      (0, o.jsx)(O.Image, {
                        className: Z().image,
                        "aria-hidden": !0,
                        src: n.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, o.jsx)(L._v, {
                        className: Z().tooltip,
                        children: (0, o.jsx)(I.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: n.title,
                        }),
                      }),
                    ],
                  }),
                }),
              [n.coverUri, n.title, s],
            );
          return (0, o.jsx)(q, {
            ref: i,
            ariaLabel: r(
              { id: "entity-names.album-name" },
              { albumName: n.title },
            ),
            className: (0, l.W)(Z().root, a),
            title: n.title,
            entityUrl: n.url,
            subtitle: (0, o.jsx)(G.Z, { id: "entity-names.album" }),
            cover: m,
            isCollapsed: !!s,
            withCollapseAnimation: !!u,
            contextMenu: (0, o.jsx)(Q, { onPinClick: d, isPinned: n.isPinned }),
          });
        },
        $ = (0, c.forwardRef)((e, t) => (0, o.jsx)(X, { forwardRef: t, ...e }));
      var ee = a(81446);
      let et = (e) => {
          var t;
          let { className: a, artist: n, forwardRef: i } = e,
            { formatMessage: r } = (0, h.Z)(),
            { isCollapsed: s, withCollapseAnimation: u } =
              null !== (t = (0, c.useContext)(K)) && void 0 !== t ? t : {},
            d = (0, ee.BV)(n),
            m = (0, c.useMemo)(
              () =>
                (0, o.jsx)(V.Paper, {
                  className: Z().cover,
                  radius: "round",
                  children: (0, o.jsxs)(L.u, {
                    flipOptions: B.FLIP,
                    shiftOptions: B.SHIFT,
                    offsetOptions: B.OFFSET,
                    placement: "right",
                    enabled: s,
                    children: [
                      (0, o.jsx)(O.Image, {
                        className: Z().image,
                        "aria-hidden": !0,
                        src: n.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, o.jsx)(L._v, {
                        className: Z().tooltip,
                        children: (0, o.jsx)(I.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: n.name,
                        }),
                      }),
                    ],
                  }),
                }),
              [n.coverUri, n.name, s],
            );
          return (0, o.jsx)(q, {
            ref: i,
            ariaLabel: r(
              { id: "entity-names.artist-name" },
              { artistName: n.name },
            ),
            className: (0, l.W)(Z().root, a),
            title: n.name,
            entityUrl: n.url,
            subtitle: (0, o.jsx)(G.Z, { id: "entity-names.artist" }),
            cover: m,
            isCollapsed: !!s,
            withCollapseAnimation: !!u,
            contextMenu: (0, o.jsx)(Q, { onPinClick: d, isPinned: n.isPinned }),
          });
        },
        ea = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(et, { forwardRef: t, ...e }),
        );
      var en = a(3515);
      let ei = (e) => {
          var t;
          let { className: a, playlist: n, forwardRef: i } = e,
            { formatMessage: r } = (0, h.Z)(),
            { isCollapsed: s, withCollapseAnimation: u } =
              null !== (t = (0, c.useContext)(K)) && void 0 !== t ? t : {},
            d = (0, en.BV)(n),
            m = (0, c.useMemo)(
              () =>
                (0, o.jsx)(V.Paper, {
                  className: Z().cover,
                  radius: "xs",
                  children: (0, o.jsxs)(L.u, {
                    flipOptions: B.FLIP,
                    shiftOptions: B.SHIFT,
                    offsetOptions: B.OFFSET,
                    placement: "right",
                    enabled: s,
                    children: [
                      (0, o.jsx)(O.Image, {
                        "aria-hidden": !0,
                        className: Z().image,
                        src: n.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, o.jsx)(L._v, {
                        className: Z().tooltip,
                        children: (0, o.jsx)(I.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: n.title,
                        }),
                      }),
                    ],
                  }),
                }),
              [s, n.coverUri, n.title],
            );
          return (0, o.jsx)(q, {
            ref: i,
            ariaLabel: r(
              { id: "entity-names.playlist-name" },
              { playlistName: n.title },
            ),
            className: (0, l.W)(Z().root, a),
            title: n.title,
            entityUrl: n.url,
            subtitle: (0, o.jsx)(G.Z, { id: "entity-names.playlist" }),
            cover: m,
            isCollapsed: !!s,
            withCollapseAnimation: !!u,
            contextMenu: (0, o.jsx)(Q, { onPinClick: d, isPinned: n.isPinned }),
          });
        },
        er = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(ei, { forwardRef: t, ...e }),
        );
      var eo = a(84290);
      let el = (0, s.Pi)((e) => {
          var t, a;
          let { className: n, vibe: i, forwardRef: r } = e,
            s = (0, c.useId)(),
            { formatMessage: u } = (0, h.Z)(),
            { isCollapsed: d, withCollapseAnimation: g } =
              null !== (a = (0, c.useContext)(K)) && void 0 !== a ? a : {},
            [p, f] = (0, c.useState)(!1),
            v = (0, eo.BV)(i),
            {
              isPlaying: b,
              togglePlay: y,
              isCurrent: _,
            } = (0, m.Qh)({
              seeds: i.seeds,
              pageIdForFrom: m.Rh.SIDEBAR,
              blockIdForFrom: m.aU.RADIO,
            }),
            x = (0, c.useCallback)(() => {
              f(!0),
                y().finally(() => {
                  f(!1);
                });
            }, [y]),
            S = (0, c.useMemo)(
              () =>
                (0, o.jsx)(I.Caption, {
                  id: s,
                  variant: "span",
                  "aria-label": u(
                    { id: "entity-names.vibe-name" },
                    { vibeName: i.title },
                  ),
                  type: "controls",
                  size: "s",
                  lineClamp: 1,
                  children: i.title,
                }),
              [u, s, i.title],
            ),
            C = (0, c.useMemo)(() => {
              var e;
              let t = {
                "--vibe-background-color":
                  null === (e = i.colors) || void 0 === e ? void 0 : e.average,
              };
              return (0, o.jsxs)(L.u, {
                flipOptions: B.FLIP,
                shiftOptions: B.SHIFT,
                offsetOptions: B.OFFSET,
                placement: "right",
                enabled: d,
                children: [
                  (0, o.jsx)("div", {
                    style: t,
                    className: Z().animation,
                    children: (0, o.jsx)(j.Df, {
                      isCurrent: _,
                      isPlaying: b,
                      isAvailable: !0,
                      isPlayButtonLoading: p,
                      onPlayButtonClick: x,
                      title: i.title,
                      shouldShowImage: !1,
                      ariaDescribedBy: s,
                    }),
                  }),
                  (0, o.jsx)(L._v, {
                    className: Z().tooltip,
                    children: (0, o.jsx)(I.Caption, {
                      variant: "span",
                      type: "text",
                      size: "s",
                      weight: "medium",
                      lineClamp: 1,
                      children: i.title,
                    }),
                  }),
                ],
              });
            }, [
              x,
              d,
              _,
              p,
              b,
              s,
              null === (t = i.colors) || void 0 === t ? void 0 : t.average,
              i.title,
            ]);
          return (0, o.jsx)(q, {
            ref: r,
            onDoubleClick: y,
            className: (0, l.W)(Z().root, n),
            isCollapsed: !!d,
            contextMenu: (0, o.jsx)(Q, { onPinClick: v, isPinned: i.isPinned }),
            withCollapseAnimation: !!g,
            title: S,
            subtitle: (0, o.jsx)(G.Z, { id: "entity-names.my-vibe" }),
            cover: C,
          });
        }),
        es = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(el, { forwardRef: t, ...e }),
        );
      var ec = a(13774),
        eu = a.n(ec);
      let ed = (0, s.Pi)((e) => {
        var t, a;
        let { className: n, withCollapseAnimation: i, isCollapsed: r } = e,
          { formatMessage: s } = (0, h.Z)(),
          { pinsCollection: u } = (0, m.oR)(),
          d =
            null === (t = u.items) || void 0 === t
              ? void 0
              : t.map(() => (0, c.createRef)()),
          g = (0, c.useMemo)(
            () => ({
              enter: eu().pin_enter,
              enterActive: eu().pin_enter_active,
              exit: eu().pin_exit,
              exitActive: eu().pin_exit_active,
            }),
            [],
          ),
          p = (0, c.useMemo)(
            () => ({ withCollapseAnimation: i, isCollapsed: r }),
            [r, i],
          );
        return (0, o.jsx)(K.Provider, {
          value: p,
          children: (0, o.jsx)("div", {
            className: (0, l.W)(eu().root, n),
            children: (0, o.jsx)("div", {
              role: "list",
              "aria-label": s({ id: "navigation.pins-list" }),
              className: eu().content,
              children: (0, o.jsx)(R.Z, {
                component: null,
                children:
                  null === (a = u.items) || void 0 === a
                    ? void 0
                    : a.map((e, t) => {
                        switch (e.type) {
                          case D.Qm.ALBUM:
                            return (0, o.jsx)(
                              w.Z,
                              {
                                classNames: g,
                                nodeRef: null == d ? void 0 : d[t],
                                timeout: 270,
                                children: (0, o.jsx)($, {
                                  ref: null == d ? void 0 : d[t],
                                  album: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                          case D.Qm.ARTIST:
                            return (0, o.jsx)(
                              w.Z,
                              {
                                classNames: g,
                                nodeRef: null == d ? void 0 : d[t],
                                timeout: 270,
                                children: (0, o.jsx)(ea, {
                                  ref: null == d ? void 0 : d[t],
                                  artist: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                          case D.Qm.PLAYLIST:
                            return (0, o.jsx)(
                              w.Z,
                              {
                                classNames: g,
                                nodeRef: null == d ? void 0 : d[t],
                                timeout: 270,
                                children: (0, o.jsx)(er, {
                                  ref: null == d ? void 0 : d[t],
                                  playlist: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                          case D.Qm.WAVE:
                            return (0, o.jsx)(
                              w.Z,
                              {
                                classNames: g,
                                nodeRef: null == d ? void 0 : d[t],
                                timeout: 270,
                                children: (0, o.jsx)(es, {
                                  ref: null == d ? void 0 : d[t],
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
      var em = a(27206),
        eg = a.n(em);
      let ep = { fallbackAxisSideDirection: "start", padding: 8 },
        ef = { padding: 8 },
        ev = (0, s.Pi)((e) => {
          let {
              className: t,
              collapsed: a,
              shownAnimation: n,
              handleClick: i,
            } = e,
            r = p(),
            s = (0, m.hJ)(),
            { formatMessage: u } = (0, h.Z)(),
            { user: d, experiments: g } = (0, m.oR)(),
            f = (0, c.useMemo)(
              () =>
                d.collectionHue
                  ? { "--logo-color": (0, A.Cx)(d.collectionHue) }
                  : null,
              [d.collectionHue],
            ),
            v = (0, c.useMemo)(
              () =>
                a
                  ? u({ id: "sidebar.uncollapse" })
                  : u({ id: "sidebar.collapse" }),
              [a, u],
            ),
            x = (0, c.useMemo)(
              () => ({
                search: u({ id: "navigation.search" }),
                main: u({ id: "navigation.page-main" }),
                collection: u({ id: "navigation.page-collection" }),
                kinopoisk: u({ id: "navigation.page-kinopoisk" }),
                non_music: u({ id: "navigation.page-non-music" }),
              }),
              [u],
            ),
            S = (0, c.useMemo)(
              () =>
                (0, o.jsx)(
                  P,
                  {
                    children: (0, m.sQ)(g).map((e) =>
                      (0, o.jsx)(
                        k,
                        {
                          selected: s(e.path),
                          shownAnimation: n,
                          variant: "main",
                          children: (0, o.jsxs)(j.rU, {
                            href: e.path,
                            children: [
                              (0, o.jsxs)(L.u, {
                                flipOptions: ep,
                                shiftOptions: ef,
                                offsetOptions: 8,
                                placement: "right",
                                enabled: a,
                                children: [
                                  (0, o.jsx)(y.J, {
                                    variant: s(e.path)
                                      ? e.iconSelected
                                      : e.icon,
                                    size: "m",
                                  }),
                                  (0, o.jsx)(L._v, {
                                    children: (0, o.jsx)(I.Caption, {
                                      variant: "span",
                                      type: "text",
                                      size: "s",
                                      weight: "medium",
                                      children: x[e.id],
                                    }),
                                  }),
                                ],
                              }),
                              (0, o.jsx)(I.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                className: (0, l.W)({
                                  [eg().title_animate]: n,
                                  [eg().title_collapsed]: a,
                                }),
                                children: x[e.id],
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
              [s, a, g, g.loadingState, n, x],
            ),
            C = (0, c.useMemo)(
              () =>
                r
                  ? null
                  : (0, o.jsxs)(
                      L.u,
                      {
                        flipOptions: ep,
                        shiftOptions: ef,
                        offsetOptions: 8,
                        placement: "right",
                        children: [
                          (0, o.jsx)(b.z, {
                            className: (0, l.W)(
                              eg().collapseButton,
                              eg().important,
                            ),
                            "aria-label": v,
                            radius: "round",
                            color: "secondary",
                            size: "s",
                            icon: (0, o.jsx)(y.J, {
                              variant: a ? "uncollapse" : "collapse",
                              size: "xs",
                            }),
                            onClick: i,
                          }),
                          (0, o.jsx)(L._v, {
                            className: (0, l.W)({
                              [eg().collapseButtonTooltip_hidden]: !a,
                            }),
                            children: v,
                          }),
                        ],
                      },
                      "collapseTooltip",
                    ),
              [r, v, a, i],
            );
          return (0, o.jsxs)("div", {
            className: (0, l.W)(eg().root, t),
            children: [
              (0, o.jsx)(j.rU, {
                href: "/",
                className: eg().logoLink,
                children: (0, o.jsx)(_.T, {
                  style: f,
                  className: (0, l.W)(eg().logo),
                  collapsed: a,
                  shownAnimation: n,
                  collapsedButton: C,
                }),
              }),
              (0, o.jsx)(N, {
                className: (0, l.W)(eg().navigation, {
                  [eg().navigation_withoutPins]: !g.checkExperiment(
                    m.pe.WebPins,
                    "on",
                  ),
                }),
                collapsed: a,
                "aria-label": u({ id: "navigation.main-menu" }),
                children: S,
              }),
              g.checkExperiment(m.pe.WebPins, "on") &&
                (0, o.jsx)(ed, {
                  isCollapsed: a,
                  withCollapseAnimation: !!n,
                  className: eg().pinsList,
                }),
              (0, o.jsx)(c.Suspense, {
                children: (0, o.jsx)("div", {
                  className: eg().user,
                  children: (0, o.jsx)(T.Iw, {
                    metaClassName: (0, l.W)(eg().userMeta, {
                      [eg().userMeta_animate]: n,
                      [eg().userMeta_collapsed]: a,
                    }),
                    variant: "desktop",
                    withMeta: !0,
                  }),
                }),
              }),
            ],
          });
        });
      var eh = a(12484),
        eb = a.n(eh);
      let ey = (0, s.Pi)((e) => {
          let { className: t } = e,
            a = (0, m.hJ)(),
            { experiments: n } = (0, m.oR)(),
            { formatMessage: i } = (0, h.Z)(),
            r = i({ id: "navigation.main-menu" }),
            s = (0, c.useMemo)(
              () => ({
                search: i({ id: "navigation.search" }),
                main: i({ id: "navigation.page-main" }),
                collection: i({ id: "navigation.page-collection" }),
              }),
              [i],
            );
          return (0, o.jsx)("div", {
            className: (0, l.W)(eb().root, t),
            children: (0, o.jsx)(N, {
              collapsed: !0,
              direction: "horizontal",
              "aria-label": r,
              children: (0, o.jsx)(P, {
                children: (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, m.sQ)(n).map((e) =>
                      (0, o.jsx)(
                        k,
                        {
                          selected: a(e.path),
                          children: (0, o.jsxs)(j.rU, {
                            href: e.path,
                            children: [
                              (0, o.jsx)(y.J, {
                                variant: a(e.path) ? e.iconSelected : e.icon,
                                size: "m",
                              }),
                              (0, o.jsx)(I.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                children: s[e.id],
                              }),
                            ],
                          }),
                        },
                        e.id,
                      ),
                    ),
                    (0, o.jsx)(k, {
                      children: (0, o.jsx)(T.Iw, {
                        className: eb().user,
                        variant: "mobile",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        e_ = (0, s.Pi)((e) => {
          let { className: t } = e,
            a = (0, m.uK)(),
            n = a.get(m.V0),
            i = p(),
            { settings: r } = (0, m.oR)(),
            [s, u] = (0, c.useState)(n.get(m.BU.NavbarCollapsed) || !1),
            [g, f] = (0, c.useState)(!1),
            h = (0, c.useMemo)(
              () => (r.layout === m.t8.Mobile ? ey : ev),
              [r.layout],
            ),
            b = (0, c.useCallback)(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  n.set(m.BU.NavbarCollapsed, !s, { expires: 180 }),
                  u(!s),
                  f(!0);
              },
              [s, n],
            );
          return (0, o.jsx)("aside", {
            className: (0, l.W)(v().root, { [v().root_collapsed]: s || i }, t),
            ...(0, d.BA)(d.QM.navbar.NAVBAR),
            children: (0, o.jsx)(h, {
              handleClick: b,
              collapsed: s || i,
              shownAnimation: g,
            }),
          });
        });
      var ex = a(96555);
      let eS = ex.V5.model("PinAlbumItemModel", {
          type: ex.V5.literal(D.Qm.ALBUM),
          data: M.KX,
        }),
        eC = ex.V5.model("PinArtistItemModel", {
          type: ex.V5.literal(D.Qm.ARTIST),
          data: ee.Go,
        }),
        eE = ex.V5.model("PinPlaylistItemModel", {
          type: ex.V5.literal(D.Qm.PLAYLIST),
          data: en.Cd,
        }),
        eN = ex.V5.model("PinVibeItemModel", {
          type: ex.V5.literal(D.Qm.WAVE),
          data: eo.KW,
        }),
        eP = ex.V5.union(eS, eC, eE, eN);
      var ek = a(96431);
      let eL = (e) => "object" == typeof e && e && "type" in e;
      var eI = a(96911),
        eA = a(20210);
      let eT = (e) => {
          switch (e.type) {
            case D.Qm.WAVE:
              return (0, ex.pj)({ type: D.Qm.WAVE, data: (0, eo.FF)(e.data) });
            case D.Qm.PLAYLIST:
              return (0, ex.pj)({
                type: D.Qm.PLAYLIST,
                data: (0, eA.RE)({ playlist: e.data }),
              });
            case D.Qm.ARTIST:
              return (0, ex.pj)({
                type: D.Qm.ARTIST,
                data: (0, ee.tR)(e.data),
              });
            case D.Qm.ALBUM:
              return (0, ex.pj)({
                type: D.Qm.ALBUM,
                data: (0, eI.cO)({ album: e.data }),
              });
          }
        },
        ej = ex.V5.model("Pins", {
          loadingState: ex.V5.enumeration(Object.values(m.Gu)),
          items: ex.V5.maybeNull(ex.V5.array(eP)),
          index: ex.V5.map(ex.V5.boolean),
        })
          .views((e) => ({ isPinned: (t) => !!e.index.get(t) }))
          .actions((e) => {
            let t = {
              deletePin(t) {
                var a;
                (e.items = (0, ex.pj)(
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.filter((e) => e.data.pinId !== t),
                )),
                  e.index.delete(t);
              },
              addPin(t) {
                var a, n, i, r;
                if (
                  (null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.length) === 30
                ) {
                  let t =
                    null === (r = e.items) || void 0 === r ? void 0 : r.pop();
                  void 0 !== t && e.index.delete(t.data.pinId);
                }
                null === (n = e.items) || void 0 === n || n.unshift(eT(t));
                let o =
                  null === (i = e.items) || void 0 === i ? void 0 : i.at(0);
                o && e.index.set(o.data.pinId, !0);
              },
              getData: (0, ex.ls)(function* () {
                let { pinsResource: t, logger: a } = (0, ex.dU)(e);
                if (e.loadingState !== m.Gu.PENDING)
                  try {
                    var n;
                    e.loadingState = m.Gu.PENDING;
                    let a = yield t.getPins();
                    (e.items = (0, ex.pj)(a.pins.map(eT))),
                      null === (n = e.items) ||
                        void 0 === n ||
                        n.forEach((t) => {
                          e.index.set(t.data.pinId, !0);
                        }),
                      (e.loadingState = m.Gu.RESOLVE);
                  } catch (t) {
                    (e.loadingState = m.Gu.REJECT),
                      !(t instanceof ek.eY) &&
                        (t instanceof Error || "string" == typeof t) &&
                        a.error(t);
                  }
              }),
              toggleAlbumPin: (0, ex.ls)(function* (a, n) {
                let { pinResource: i, logger: r } = (0, ex.dU)(e);
                if (e.loadingState !== m.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(n))
                      return (r = yield i.unpinAlbum(a)), t.deletePin(n), r;
                    return (r = yield i.pinAlbum(a)), eL(r) && t.addPin(r), r;
                  } catch (e) {
                    !(e instanceof ek.eY) &&
                      (e instanceof Error || "string" == typeof e) &&
                      r.error(e);
                    return;
                  }
              }),
              toggleArtistPin: (0, ex.ls)(function* (a, n) {
                let { pinResource: i, logger: r } = (0, ex.dU)(e);
                if (e.loadingState !== m.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(n))
                      return (r = yield i.unpinArtist(a)), t.deletePin(n), r;
                    return (r = yield i.pinArtist(a)), eL(r) && t.addPin(r), r;
                  } catch (e) {
                    !(e instanceof ek.eY) &&
                      (e instanceof Error || "string" == typeof e) &&
                      r.error(e);
                    return;
                  }
              }),
              togglePlaylistPin: (0, ex.ls)(function* (a, n) {
                let { pinResource: i, logger: r } = (0, ex.dU)(e);
                if (e.loadingState !== m.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(n))
                      return (r = yield i.unpinPlaylist(a)), t.deletePin(n), r;
                    return (
                      (r = yield i.pinPlaylist(a)), eL(r) && t.addPin(r), r
                    );
                  } catch (e) {
                    !(e instanceof ek.eY) &&
                      (e instanceof Error || "string" == typeof e) &&
                      r.error(e);
                    return;
                  }
              }),
              toggleVibePin: (0, ex.ls)(function* (a, n) {
                let { pinResource: i, logger: r } = (0, ex.dU)(e);
                if (e.loadingState !== m.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(n))
                      return (r = yield i.unpinWave(a)), t.deletePin(n), r;
                    return (r = yield i.pinWave(a)), eL(r) && t.addPin(r), r;
                  } catch (e) {
                    !(e instanceof ek.eY) &&
                      (e instanceof Error || "string" == typeof e) &&
                      r.error(e);
                    return;
                  }
              }),
            };
            return t;
          });
    },
    16367: function (e, t, a) {
      "use strict";
      a.d(t, {
        gK: function () {
          return s.SearchCorrectedText;
        },
        hF: function () {
          return l.SearchEmpty;
        },
        xz: function () {
          return o.SearchEntitiesGrid;
        },
        y9: function () {
          return c.SearchHistoryBlock;
        },
        Iv: function () {
          return E;
        },
        Id: function () {
          return n.SearchMixed;
        },
        R_: function () {
          return r.SearchPodcastList;
        },
        XM: function () {
          return i.SearchTrackList;
        },
        Fu: function () {
          return N.F;
        },
        vy: function () {
          return P.useClearHistory;
        },
      });
      var n = a(69125),
        i = a(71711),
        r = a(42930),
        o = a(48365),
        l = a(96421),
        s = a(58392);
      a(32677), a(48875);
      var c = a(47893);
      a(61670), a(27095);
      var u = a(96555),
        d = a(36019),
        m = a(96911),
        g = a(20210),
        p = a(95539),
        f = a(81446),
        v = a(84290);
      let h = u.V5.model("SearchAlbum", {
          type: u.V5.literal(d.Sc.ALBUM),
          data: m.ug,
        }),
        b = u.V5.model("SearchPlaylist", {
          type: u.V5.literal(d.Sc.PLAYLIST),
          data: g.d2,
        }),
        y = u.V5.model("SearchArtist", {
          type: u.V5.literal(d.Sc.ARTIST),
          data: f.Go,
        }),
        _ = u.V5.model("SearchUgcTrack", {
          type: u.V5.literal(d.Sc.UGC_TRACK),
          data: p.bc,
        }),
        x = u.V5.model("SearchTrack", {
          type: u.V5.literal(d.Sc.TRACK),
          data: p.le,
        }),
        S = u.V5.model("SearchVibe", {
          type: u.V5.literal(d.Sc.WAVE),
          data: v.KW,
        }),
        C = u.V5.model("SearchPodcast", {
          type: u.V5.literal(d.Sc.PODCAST),
          data: m.ug,
        }),
        E = u.V5.union(h, b, y, x, _, S, C);
      a(8759), a(71440), a(81546);
      var N = a(6348),
        P = a(33117);
    },
    6348: function (e, t, a) {
      "use strict";
      a.d(t, {
        F: function () {
          return o;
        },
      });
      var n = a(8759),
        i = a(36019),
        r = a(32677);
      let o = (e) => {
        switch (e.type) {
          case i.Sc.UGC_TRACK:
          case i.Sc.TRACK: {
            let t = e.data;
            return (0, n.jsx)(
              r.YL,
              { track: t },
              "".concat(e.type, "-").concat(t.id),
            );
          }
          case i.Sc.ARTIST: {
            let t = e.data;
            return (0, n.jsx)(
              r.q3,
              { artist: t },
              "".concat(e.type, "-").concat(t.id),
            );
          }
          case i.Sc.PLAYLIST: {
            let t = e.data;
            return (0, n.jsx)(r.tN, { playlist: t }, t.key);
          }
          case i.Sc.ALBUM: {
            let t = e.data;
            return (0, n.jsx)(
              r.sx,
              { album: t },
              "".concat(e.type, "-").concat(t.id),
            );
          }
          default:
            return null;
        }
      };
    },
    33117: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useClearHistory: function () {
            return d;
          },
        });
      var n = a(8759),
        i = a(11769),
        r = a(99616),
        o = a(65244),
        l = a(2814),
        s = a(84133),
        c = a(44285);
      let u = "/search",
        d = (e) => {
          let { user: t, search: a } = (0, s.oR)(),
            { formatMessage: d } = (0, o.Z)(),
            { notify: m } = (0, s.d$)(),
            g = (0, i.useRouter)();
          return (
            (0, r.useEffect)(() => {
              a.isEmptyHistory && g.push(u);
            }, [a.isEmptyHistory, g]),
            (0, r.useCallback)(() => {
              try {
                var i;
                (null === (i = t.account) || void 0 === i ? void 0 : i.uid) &&
                  a.clearHistory({ userId: t.account.uid }),
                  m(
                    (0, n.jsx)(c.Yj, {
                      message: (0, n.jsx)(l.Z, {
                        id: "search.cleared-history",
                      }),
                    }),
                    { containerId: s.W$.INFO },
                  ),
                  e && e(),
                  g.push(u);
              } catch (e) {
                m(
                  (0, n.jsx)(c.Q, {
                    error: d({ id: "error-messages.error-during-action" }),
                  }),
                  { containerId: s.W$.ERROR },
                );
              }
            }, [t.account.uid, m, e, g, a, d])
          );
        };
    },
    61670: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          MixedEntitiesBlock: function () {
            return f;
          },
        });
      var n,
        i,
        r = a(8759),
        o = a(35338),
        l = a(31977),
        s = a(99616),
        c = a(61617),
        u = a(44285),
        d = a(27095),
        m = a(14346),
        g = a.n(m);
      ((n = i || (i = {})).ONE = "one"), (n.TWO = "two");
      let p = (e) => {
          let {
              forwardRef: t,
              isLoading: a,
              title: n,
              description: m,
              viewAllAction: p,
              coverUrl: f,
              children: v,
              className: h = "",
              maxColumns: b = 2,
              itemsPerColumn: y = 3,
              containerClassName: _ = "",
              headerClassName: x = "",
              titleSize: S,
              showControls: C = !1,
            } = e,
            [E, N] = (0, s.useState)(),
            P = (0, s.useRef)(null),
            k = (0, s.useId)(),
            L = (0, s.useMemo)(() => {
              let e = (0, l.Z)(v, y).slice(0, b);
              return (
                1 === e.length ? N(i.ONE) : N(i.TWO),
                e.map((e, t) =>
                  (0, r.jsx)(
                    d.MixedEntitiesList,
                    {
                      shimmersCount: 3,
                      isLoading: a,
                      className: g().column,
                      children: e,
                    },
                    t,
                  ),
                )
              );
            }, [v, a, y, b]);
          return (0, r.jsxs)("section", {
            ref: t,
            className: (0, o.W)(h, g().root),
            children: [
              (0, r.jsx)(u.ti, {
                className: x,
                labeledForId: k,
                title: n,
                description: m,
                coverUrl: f,
                viewAllActionLink: p,
                titleSize: S,
                controls:
                  C &&
                  (0, r.jsx)(u.J8, { className: g().controls, carouselRef: P }),
              }),
              (0, r.jsx)(c.l, {
                containerClassName: _,
                ref: P,
                itemClassName: (0, o.W)(
                  g().columns,
                  g()["columns_".concat(a && b > 1 ? i.TWO : E)],
                ),
                "aria-labelledby": k,
                children: L,
              }),
            ],
          });
        },
        f = (0, s.forwardRef)((e, t) => (0, r.jsx)(p, { forwardRef: t, ...e }));
    },
    27095: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          MixedEntitiesList: function () {
            return p;
          },
        });
      var n = a(8759),
        i = a(99616),
        r = a(65244),
        o = a(35338),
        l = a(12670),
        s = a(10809),
        c = a.n(s);
      let u = (e) => {
        let { className: t, ariaLabel: a } = e;
        return (0, n.jsxs)("div", {
          tabIndex: 0,
          "aria-label": a,
          "aria-live": "polite",
          "aria-busy": !0,
          className: (0, o.W)(c().root, t),
          children: [
            (0, n.jsxs)("div", {
              className: c().infoContainer,
              children: [
                (0, n.jsx)(l.Shimmer, { className: c().cover, radius: "s" }),
                (0, n.jsxs)("div", {
                  className: c().textContainer,
                  children: [
                    (0, n.jsx)(l.Shimmer, {
                      className: c().title,
                      radius: "s",
                    }),
                    (0, n.jsx)(l.Shimmer, {
                      className: c().description,
                      radius: "s",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(l.Shimmer, { className: c().action, radius: "s" }),
          ],
        });
      };
      var d = a(73270),
        m = a.n(d);
      let g = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 5,
            { formatMessage: t } = (0, r.Z)(),
            a = (0, i.useMemo)(
              () =>
                t(
                  { id: "loading-messages.entity-is-loading" },
                  { entityName: t({ id: "search.history" }) },
                ),
              [t],
            );
          return Array.from({ length: e }, (e, t) =>
            (0, n.jsx)(u, { className: m().shimmer, ariaLabel: a }, t),
          );
        },
        p = (e) => {
          let { isLoading: t, shimmersCount: a, className: i, children: r } = e;
          return (0, n.jsx)("div", { className: i, children: t ? g(a) : r });
        };
    },
    84834: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          AlbumItem: function () {
            return y;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(99616),
        l = a(71440),
        s = a(36019),
        c = a(96213),
        u = a(33066),
        d = a(14581),
        m = a(1918),
        g = a(96911),
        p = a(84133),
        f = a(44285),
        v = a(48875),
        h = a(72735),
        b = a.n(h);
      let y = (0, r.Pi)((e) => {
        var t;
        let { className: a, album: r } = e,
          h = (0, p.x5)({ pageId: p.Rh.SEARCH }),
          y = (0, p.s0)(r.url),
          {
            sonataState: { status: _ },
          } = (0, p.oR)(),
          {
            isPlaying: x,
            isCurrent: S,
            togglePlay: C,
          } = (0, p.qm)({
            playContextParams: {
              contextData: { type: l.Ak.Album, meta: { id: r.id }, from: h },
              loadContextMeta: !0,
            },
            sonataStatus: _,
          }),
          E = (0, g.jV)({ album: r, callback: y }),
          N = (0, g.jV)({ album: r, callback: C }),
          { sendPlaySearchFeedback: P } = (0, p.sA)(),
          [k, L] = (0, o.useState)(!1),
          I = (0, o.useCallback)(() => {
            k || x || (L(!0), null == P || P()), N();
          }, [x, k, P, N]),
          A = (0, o.useCallback)(
            (e) => {
              (0, c.m)(e, b().ripple), E(e);
            },
            [E],
          ),
          T = (0, o.useCallback)(
            (e) => {
              E(e);
            },
            [E],
          ),
          j = (0, o.useCallback)(
            (e) =>
              (0, n.jsx)(f.Df, {
                isAvailable: r.isAvailable,
                isDisliked: !1,
                coverUri: r.coverUri,
                title: r.title,
                className: b().playButtonCell,
                ...e,
              }),
            [r],
          ),
          R =
            null == j
              ? void 0
              : j({ onPlayButtonClick: I, isPlaying: x, isCurrent: S }),
          w = (0, o.useMemo)(
            () =>
              r.url && r.isAvailable
                ? (0, n.jsx)(f.rU, {
                    className: (0, i.W)(b().text, b().titleLink),
                    href: r.url,
                    onClick: T,
                    children: r.title,
                  })
                : (0, n.jsx)(m.Caption, {
                    className: (0, i.W)(b().text, b().titleText),
                    size: "m",
                    variant: "div",
                    type: "text",
                    children: r.title,
                  }),
            [r.isAvailable, r.title, r.url, T],
          );
        return (0, n.jsxs)(f.Md, {
          className: (0, i.W)(
            b().root,
            { [b().root_disabled]: !r.isAvailable },
            a,
          ),
          "aria-label": ""
            .concat(r.artistNames, " ")
            .concat(r.title, " ")
            .concat(null !== (t = r.version) && void 0 !== t ? t : ""),
          onClick: A,
          children: [
            R,
            (0, n.jsx)(v.J, {
              isDisabled: !r.isAvailable,
              artists: r.artists,
              version: r.version,
              title: w,
              explicitMarkVariant:
                r.contentWarning === s.F1.EXPLICIT
                  ? u.ExplicitMarkVariant.E
                  : null,
            }),
            (0, n.jsx)("div", {
              className: b().controlsBarCell,
              children: (0, n.jsx)(d.J, {
                className: b().buttonArrow,
                variant: "arrowRight",
                size: "xs",
              }),
            }),
          ],
        });
      });
    },
    40558: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistItem: function () {
            return b;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(99616),
        l = a(65244),
        s = a(71440),
        c = a(96213),
        u = a(14581),
        d = a(1918),
        m = a(81546),
        g = a(84133),
        p = a(44285),
        f = a(48875),
        v = a(72735),
        h = a.n(v);
      let b = (0, r.Pi)((e) => {
        let { className: t, artist: a } = e,
          r = (0, g.x5)({ pageId: g.Rh.SEARCH }),
          v = (0, g.s0)(a.url),
          { formatMessage: b } = (0, l.Z)(),
          {
            sonataState: { status: y },
          } = (0, g.oR)(),
          {
            isPlaying: _,
            isCurrent: x,
            togglePlay: S,
          } = (0, g.qm)({
            playContextParams: {
              contextData: {
                type: s.Ak.Artist,
                meta: { id: Number(a.id) },
                from: r,
              },
              loadContextMeta: !0,
            },
            sonataStatus: y,
          }),
          C = (0, m.v2)({ artist: a, callback: v }),
          E = (0, m.v2)({ artist: a, callback: S }),
          { sendPlaySearchFeedback: N } = (0, g.sA)(),
          [P, k] = (0, o.useState)(!1),
          L = (0, o.useCallback)(() => {
            P || _ || (k(!0), null == N || N()), E();
          }, [E, _, P, N]),
          I = (0, o.useCallback)(
            (e) => {
              (0, c.m)(e, h().ripple), C(e);
            },
            [C],
          ),
          A = (0, o.useCallback)(
            (e) => {
              C(e);
            },
            [C],
          ),
          T = (0, o.useCallback)(
            (e) =>
              (0, n.jsx)(p.Df, {
                isAvailable: a.isAvailable,
                isDisliked: !1,
                coverUri: a.coverUri,
                title: a.name,
                className: h().playButtonCell,
                radius: "round",
                ...e,
              }),
            [a, !1],
          ),
          j =
            null == T
              ? void 0
              : T({ onPlayButtonClick: L, isPlaying: _, isCurrent: x }),
          R = (0, o.useMemo)(
            () =>
              a.url && a.isAvailable
                ? (0, n.jsx)(p.rU, {
                    className: (0, i.W)(h().text, h().titleLink),
                    href: a.url,
                    onClick: A,
                    children: a.name,
                  })
                : (0, n.jsx)(d.Caption, {
                    className: (0, i.W)(h().text, h().titleText),
                    size: "m",
                    variant: "div",
                    type: "text",
                    children: a.name,
                  }),
            [a.isAvailable, a.name, a.url, A],
          );
        return (0, n.jsxs)(p.Md, {
          className: (0, i.W)(
            h().root,
            { [h().root_disabled]: !a.isAvailable },
            t,
          ),
          "aria-label": a.name,
          onClick: I,
          children: [
            j,
            (0, n.jsx)(f.J, {
              isDisabled: !a.isAvailable,
              isDisliked: !1,
              title: R,
              description: b({ id: "entity-names.singer" }),
            }),
            (0, n.jsx)("div", {
              className: h().controlsBarCell,
              children: (0, n.jsx)(u.J, {
                className: h().buttonArrow,
                variant: "arrowRight",
                size: "xs",
              }),
            }),
          ],
        });
      });
    },
    4732: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          PlaylistItem: function () {
            return h;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(99616),
        l = a(65244),
        s = a(71440),
        c = a(96213),
        u = a(14581),
        d = a(1918),
        m = a(84133),
        g = a(44285),
        p = a(48875),
        f = a(72735),
        v = a.n(f);
      let h = (0, r.Pi)((e) => {
        let { className: t, playlist: a } = e,
          r = (0, m.x5)({ pageId: m.Rh.SEARCH }),
          f = (0, m.s0)(a.url),
          h = a.title || "",
          { formatMessage: b } = (0, l.Z)(),
          {
            sonataState: { status: y },
          } = (0, m.oR)(),
          {
            isPlaying: _,
            isCurrent: x,
            togglePlay: S,
          } = (0, m.qm)({
            playContextParams: {
              contextData: {
                type: s.Ak.Playlist,
                meta: { id: a.id, uuid: a.uuid },
                from: r,
              },
              loadContextMeta: !0,
            },
            sonataStatus: y,
          }),
          { sendPlaySearchFeedback: C } = (0, m.sA)(),
          [E, N] = (0, o.useState)(!1),
          P = (0, o.useCallback)(() => {
            E || _ || (N(!0), null == C || C()), S();
          }, [_, E, C, S]),
          k = (0, o.useCallback)(
            (e) => {
              a.isAvailable && ((0, c.m)(e, v().ripple), f());
            },
            [f, a.isAvailable],
          ),
          L = (0, o.useCallback)(() => {
            a.isAvailable && f();
          }, [f, a.isAvailable]),
          I = (0, o.useCallback)(
            (e) =>
              (0, n.jsx)(g.Df, {
                isAvailable: a.isAvailable,
                isDisliked: !1,
                coverUri: a.coverUri,
                title: h,
                className: v().playButtonCell,
                ...e,
              }),
            [a, h],
          ),
          A =
            null == I
              ? void 0
              : I({ onPlayButtonClick: P, isPlaying: _, isCurrent: x }),
          T = (0, o.useMemo)(
            () =>
              a.url && a.isAvailable
                ? (0, n.jsx)(g.rU, {
                    className: (0, i.W)(v().text, v().titleLink),
                    href: a.url,
                    onClick: L,
                    children: h,
                  })
                : (0, n.jsx)(d.Caption, {
                    className: (0, i.W)(v().text, v().titleText),
                    size: "m",
                    variant: "div",
                    type: "text",
                    children: h,
                  }),
            [L, a.isAvailable, a.url, h],
          );
        return (0, n.jsxs)(g.Md, {
          className: (0, i.W)(
            v().root,
            { [v().root_disabled]: !a.isAvailable },
            t,
          ),
          "aria-label": a.title || b({ id: "entity-names.playlist" }),
          onClick: k,
          children: [
            A,
            (0, n.jsx)(p.J, { isDisabled: !a.isAvailable, title: T }),
            (0, n.jsx)("div", {
              className: v().controlsBarCell,
              children: (0, n.jsx)(u.J, {
                className: v().buttonArrow,
                variant: "arrowRight",
                size: "xs",
              }),
            }),
          ],
        });
      });
    },
    92410: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          TrackItem: function () {
            return p;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(99616),
        l = a(71440),
        s = a(96213),
        c = a(95539),
        u = a(84133),
        d = a(44285),
        m = a(72735),
        g = a.n(m);
      let p = (0, r.Pi)((e) => {
        var t;
        let { className: a, track: r } = e,
          m = (0, u.x5)({ pageId: u.Rh.SEARCH }),
          {
            sonataState: { status: p },
          } = (0, u.oR)(),
          f = r.albumId ? "".concat(r.id, ":").concat(r.albumId) : r.id,
          {
            isPlaying: v,
            isCurrent: h,
            togglePlay: b,
            restartPlay: y,
          } = (0, u.qm)({
            playContextParams: {
              contextData: {
                type: l.Ak.Various,
                meta: { id: f },
                from: m,
                overrideContextType: l.Zc.Search,
              },
              queueParams: { index: 0 },
              loadContextMeta: !0,
            },
            sonataStatus: p,
            entityId: f,
          }),
          _ = (0, c.nD)({ track: r, callback: b }),
          { sendPlaySearchFeedback: x } = (0, u.sA)(),
          [S, C] = (0, o.useState)(!1),
          E = (0, o.useCallback)(() => {
            S || v || (C(!0), null == x || x()), _();
          }, [v, S, x, _]),
          N = (0, o.useCallback)(() => {
            v ? y() : E();
          }, [v, y, E]),
          P = (0, o.useCallback)(
            (e) => {
              2 === e.detail ? N() : (0, s.m)(e, g().ripple);
            },
            [N],
          ),
          k = (0, o.useCallback)(
            (e) =>
              (0, n.jsx)(d.Df, {
                isAvailable: r.isAvailable,
                isDisliked: r.isDisliked,
                coverUri: r.coverUri,
                title: r.title,
                className: g().playButtonCell,
                ...e,
              }),
            [r],
          ),
          L =
            null == k
              ? void 0
              : k({ onPlayButtonClick: E, isPlaying: v, isCurrent: h });
        return (0, n.jsxs)(d.Md, {
          className: (0, i.W)(g().root, a),
          "aria-label": ""
            .concat(r.artistsNames, " ")
            .concat(r.title, " ")
            .concat(null !== (t = r.version) && void 0 !== t ? t : ""),
          onClick: P,
          children: [
            L,
            (0, n.jsx)(c.ko, { track: r }),
            (0, n.jsx)(c.jt, { className: g().controlsBarCell, track: r }),
          ],
        });
      });
    },
    32677: function (e, t, a) {
      "use strict";
      a.d(t, {
        YL: function () {
          return i.TrackItem;
        },
        q3: function () {
          return r.ArtistItem;
        },
        sx: function () {
          return o.AlbumItem;
        },
        tN: function () {
          return n.PlaylistItem;
        },
      });
      var n = a(4732),
        i = a(92410),
        r = a(40558),
        o = a(84834);
    },
    48875: function (e, t, a) {
      "use strict";
      a.d(t, {
        J: function () {
          return u;
        },
      });
      var n = a(8759),
        i = a(35338),
        r = a(33066),
        o = a(1918),
        l = a(81446),
        s = a(53594),
        c = a.n(s);
      let u = (e) => {
        let {
          isDisliked: t,
          isDisabled: a,
          artists: s = [],
          description: u,
          explicitMarkVariant: d,
          className: m,
          version: g,
          title: p,
        } = e;
        return (0, n.jsxs)("div", {
          className: (0, i.W)(
            c().root,
            { [c().root_disabled]: a, [c().root_disliked]: t },
            m,
          ),
          children: [
            (0, n.jsxs)("div", {
              className: c().titleContainer,
              children: [
                (0, n.jsxs)(o.Caption, {
                  className: (0, i.W)(c().text, c().title, {
                    [c().title_withVersion]: g,
                  }),
                  size: "m",
                  variant: "div",
                  lineClamp: 1,
                  type: "text",
                  children: [
                    p,
                    g &&
                      (0, n.jsx)(o.Caption, {
                        className: (0, i.W)(c().text, c().version),
                        size: "m",
                        variant: "div",
                        type: "text",
                        children: " ".concat(g),
                      }),
                  ],
                }),
                d &&
                  (0, n.jsx)(r.ExplicitMark, {
                    className: c().explicitMark,
                    variant: d,
                  }),
              ],
            }),
            s.length > 0 &&
              (0, n.jsx)(l.jO, {
                linkClassName: (0, i.W)(c().text, c().artistLink),
                captionClassName: (0, i.W)(c().text, c().artistCaption),
                artists: s,
                lineClamp: 1,
                withLink: !a,
              }),
            !s &&
              u &&
              (0, n.jsx)(o.Caption, {
                className: (0, i.W)(c().text, c().description),
                variant: "span",
                type: "text",
                lineClamp: 1,
                children: u,
              }),
          ],
        });
      };
    },
    58392: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SearchCorrectedText: function () {
            return d;
          },
        });
      var n = a(8759),
        i = a(99616),
        r = a(65244),
        o = a(2814),
        l = a(15527),
        s = a(1918),
        c = a(43312),
        u = a.n(c);
      let d = (e) => {
        let { onCorrectText: t, searchCorrectedText: a } = e,
          { formatMessage: c } = (0, r.Z)(),
          d = (0, i.useMemo)(
            () => ({
              text: (0, n.jsx)(l.z, {
                "aria-label": c({ id: "search.corrected-text" }, { text: a }),
                variant: "text",
                radius: "xs",
                onClick: t,
                children: (0, n.jsx)(s.Caption, {
                  className: u().link,
                  variant: "span",
                  size: "m",
                  type: "text",
                  children: a,
                }),
              }),
            }),
            [c, a, t],
          );
        return (0, n.jsx)("div", {
          className: u().root,
          children: (0, n.jsx)(s.Caption, {
            className: u().text,
            variant: "span",
            size: "m",
            type: "text",
            children: (0, n.jsx)(o.Z, {
              id: "search.corrected-text",
              values: d,
            }),
          }),
        });
      };
    },
    96421: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SearchEmpty: function () {
            return p;
          },
          SearchEmptyComponent: function () {
            return g;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(99616),
        o = a(65244),
        l = a(14581),
        s = a(71716),
        c = a(1918),
        u = a(44285),
        d = a(24435),
        m = a.n(d);
      let g = (e) => {
          let { forwardRef: t, className: a, searchCorrectedText: r } = e,
            { formatMessage: d } = (0, o.Z)();
          return (0, n.jsxs)(s.t, {
            className: (0, i.W)(m().root, a),
            containerClassName: m().container,
            ref: t,
            children: [
              (0, n.jsxs)("div", {
                className: m().content,
                children: [
                  r &&
                    (0, n.jsx)("div", {
                      className: m().correctedTextBlock,
                      children: r,
                    }),
                  (0, n.jsx)(l.J, {
                    className: m().icon,
                    variant: "search",
                    size: "xxl",
                  }),
                  (0, n.jsx)(c.Heading, {
                    className: m().title,
                    size: "s",
                    weight: "bold",
                    variant: "h3",
                    children: d({ id: "search-results.not-found-title" }),
                  }),
                  (0, n.jsx)(c.Caption, {
                    className: m().subtitle,
                    variant: "div",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: d({ id: "search-results.not-found-description" }),
                  }),
                ],
              }),
              (0, n.jsx)(u.$_, { className: m().footer }),
            ],
          });
        },
        p = (0, r.forwardRef)((e, t) => (0, n.jsx)(g, { forwardRef: t, ...e }));
    },
    48365: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SearchEntitiesGrid: function () {
            return v;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(99616),
        o = a(36019),
        l = a(71716),
        s = a(96911),
        c = a(81546),
        u = a(20210),
        d = a(84133),
        m = a(44285),
        g = a(24528),
        p = a.n(g);
      let f = (e) => {
          let {
              forwardRef: t,
              className: a,
              results: g,
              filter: f,
              isLoading: v,
              sendSearchFeedback: h,
              searchCorrectedText: b,
            } = e,
            y = (0, r.useMemo)(
              () =>
                v
                  ? (0, n.jsx)(m.Wm, {
                      itemClassName: p().block,
                      round: f === o.Sc.ARTIST,
                      centered: f === o.Sc.ARTIST,
                      count: 36,
                    })
                  : g
                      .filter((e) => e.type === f)
                      .map((e, t) => {
                        switch (e.type) {
                          case o.Sc.ALBUM:
                            return (0, n.jsx)(d.B1.Provider, {
                              value: {
                                sendSearchFeedback: h,
                                id: e.data.id,
                                type: o.Bm.ALBUM,
                                blockPosition: 0,
                                position: t,
                              },
                              children: (0, n.jsx)(
                                s.rf,
                                { album: e.data },
                                e.data.id,
                              ),
                            });
                          case o.Sc.PLAYLIST:
                            return (0, n.jsx)(d.B1.Provider, {
                              value: {
                                sendSearchFeedback: h,
                                id: e.data.id,
                                type: o.Bm.PLAYLIST,
                                blockPosition: 0,
                                position: t,
                              },
                              children: (0, n.jsx)(
                                u.ZL,
                                { playlist: e.data },
                                e.data.key,
                              ),
                            });
                          case o.Sc.ARTIST:
                            return (0, n.jsx)(d.B1.Provider, {
                              value: {
                                sendSearchFeedback: h,
                                id: e.data.id,
                                type: o.Bm.ARTIST,
                                blockPosition: 0,
                                position: t,
                              },
                              children: (0, n.jsx)(
                                c.IT,
                                { artist: e.data },
                                e.data.id,
                              ),
                            });
                          case o.Sc.PODCAST:
                            return (0, n.jsx)(d.B1.Provider, {
                              value: {
                                sendSearchFeedback: h,
                                id: e.data.id,
                                type: o.Bm.PODCAST,
                                blockPosition: 0,
                                position: t,
                              },
                              children: (0, n.jsx)(
                                s.rf,
                                {
                                  album: e.data,
                                  withLikesCount: !0,
                                  withAddition: !1,
                                },
                                e.data.id,
                              ),
                            });
                          default:
                            return null;
                        }
                      }),
              [v, g, f, h],
            );
          return (0, n.jsxs)(l.t, {
            className: (0, i.W)(p().root, a),
            containerClassName: p().container,
            ref: t,
            children: [
              (0, n.jsxs)("div", {
                className: p().content,
                children: [
                  b &&
                    (0, n.jsx)("div", {
                      className: p().correctedTextBlock,
                      children: b,
                    }),
                  (0, n.jsx)("div", { className: p().items, children: y }),
                ],
              }),
              (0, n.jsx)(m.$_, { className: p().footer }),
            ],
          });
        },
        v = (0, r.forwardRef)((e, t) => (0, n.jsx)(f, { forwardRef: t, ...e }));
    },
    47893: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SearchHistoryBlock: function () {
            return E;
          },
        });
      var n = a(8759),
        i = a(33423),
        r = a(84133),
        o = a(99616),
        l = a(65244),
        s = a(6348),
        c = a(61670),
        u = a(11894),
        d = a.n(u);
      let m = "/search/history",
        g = (e) => e === m,
        p = (0, i.Pi)(() => {
          var e;
          let t = (0, r.uK)(),
            a = t.get(r.U5),
            { search: i, user: u } = (0, r.oR)(),
            { formatMessage: p } = (0, l.Z)(),
            f = i.history.items;
          if (
            (i.isHistoryReady &&
              (null === (e = u.account) || void 0 === e ? void 0 : e.uid) &&
              (0, o.use)(i.getHistory({ userId: u.account.uid, config: a })),
            (0, o.useEffect)(
              () => () => {
                var e;
                g(
                  null === (e = location) || void 0 === e ? void 0 : e.pathname,
                ) || i.resetHistoryStateRequest();
              },
              [i],
            ),
            0 === f.length)
          )
            return null;
          let v = f.map(s.F).filter((e) => e);
          return (0, n.jsx)("section", {
            className: d().root,
            children: (0, n.jsx)(c.MixedEntitiesBlock, {
              headerClassName: d().header,
              containerClassName: d().content,
              isLoading: i.isHistoryLoading,
              title: p({ id: "search.history" }),
              viewAllAction: m,
              maxColumns: 2,
              itemsPerColumn: 4,
              showControls: !0,
              children: v,
            }),
          });
        });
      var f = a(2814),
        v = a(15527),
        h = a(1918),
        b = a(33117),
        y = a(95020),
        _ = a.n(y);
      let x = "/search/history",
        S = (e) => e === x,
        C = (0, i.Pi)(() => {
          var e;
          let t = (0, r.uK)(),
            a = t.get(r.U5),
            { search: i, user: u } = (0, r.oR)(),
            { formatMessage: d } = (0, l.Z)(),
            m = (0, b.useClearHistory)(i.resetHistoryItems),
            g = i.history.items;
          if (
            (i.isHistoryReady &&
              (null === (e = u.account) || void 0 === e ? void 0 : e.uid) &&
              (0, o.use)(i.getHistory({ userId: u.account.uid, config: a })),
            (0, o.useEffect)(
              () => () => {
                var e;
                S(
                  null === (e = location) || void 0 === e ? void 0 : e.pathname,
                ) || i.resetHistoryStateRequest();
              },
              [i],
            ),
            0 === g.length)
          )
            return null;
          let p = g.map(s.F).filter((e) => e);
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(c.MixedEntitiesBlock, {
                headerClassName: _().header,
                containerClassName: _().mixedEntitiesBlock,
                isLoading: i.isHistoryLoading,
                title: d({ id: "search.history" }),
                viewAllAction: x,
                titleSize: "xs",
                children: p,
              }),
              (0, n.jsx)("div", {
                className: _().buttonContainer,
                children: (0, n.jsx)(v.z, {
                  className: _().button,
                  "aria-label": d({ id: "search.clear-history" }),
                  disabled: !g.length,
                  size: "default",
                  radius: "xxxl",
                  onClick: m,
                  children: (0, n.jsx)(h.Caption, {
                    variant: "span",
                    size: "m",
                    type: "text",
                    children: (0, n.jsx)(f.Z, { id: "search.clear-history" }),
                  }),
                }),
              }),
            ],
          });
        }),
        E = (0, i.Pi)(() => {
          let { settings: e } = (0, r.oR)(),
            t = e.layout === r.t8.Mobile;
          return t ? (0, n.jsx)(C, {}) : (0, n.jsx)(p, {});
        });
    },
    69125: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SearchMixed: function () {
            return E;
          },
          SearchMixedComponent: function () {
            return C;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(99616),
        o = a(65244),
        l = a(36019),
        s = a(71716),
        c = a(44285),
        u = a(33423),
        d = a(71440),
        m = a(96911),
        g = a(81546),
        p = a(20210),
        f = a(95539),
        v = a(84290),
        h = a(84133);
      let b = (0, u.Pi)((e) => {
          let {
            items: t = [],
            title: a,
            forwardRef: i,
            isLoading: r = !1,
            sendSearchFeedback: o,
            blockPosition: s = 0,
            containerClassName: u,
            headerClassName: b,
            className: y,
          } = e;
          return (0, n.jsx)(c.HY, {
            className: y,
            containerClassName: u,
            headerClassName: b,
            showHeaderShimmer: !0,
            isLoading: r,
            ref: i,
            title: a,
            children: t.map((e, t) => {
              switch (e.type) {
                case l.Sc.ALBUM:
                  return (0, n.jsx)(
                    h.B1.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.id,
                        type: l.Bm.ALBUM,
                        blockPosition: s,
                        position: t,
                      },
                      children: (0, n.jsx)(m.rf, {
                        album: e.data,
                        contentLinesCount: 3,
                      }),
                    },
                    e.data.id,
                  );
                case l.Sc.ARTIST:
                  return (0, n.jsx)(
                    h.B1.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.id,
                        type: l.Bm.ARTIST,
                        blockPosition: s,
                        position: t,
                      },
                      children: (0, n.jsx)(g.IT, {
                        artist: e.data,
                        contentLinesCount: 3,
                      }),
                    },
                    e.data.id,
                  );
                case l.Sc.PLAYLIST:
                  return (0, n.jsx)(
                    h.B1.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.id,
                        type: l.Bm.PLAYLIST,
                        blockPosition: s,
                        position: t,
                      },
                      children: (0, n.jsx)(p.ZL, {
                        playlist: e.data,
                        contentLinesCount: 3,
                      }),
                    },
                    e.data.key,
                  );
                case l.Sc.UGC_TRACK:
                case l.Sc.TRACK:
                  return (0, n.jsx)(
                    h.B1.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.albumId
                          ? "".concat(e.data.id, ":").concat(e.data.albumId)
                          : e.data.id,
                        type: l.Bm.TRACK,
                        blockPosition: s,
                        position: t,
                      },
                      children: (0, n.jsx)(f.G7, {
                        track: e.data,
                        overrideContextType: d.Zc.Search,
                      }),
                    },
                    e.data.id,
                  );
                case l.Sc.WAVE:
                  return (0, n.jsx)(
                    h.B1.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.stationId,
                        type: l.Bm.WAVE,
                        blockPosition: s,
                        position: t,
                      },
                      children: (0, n.jsx)(v.op, { vibe: e.data }),
                    },
                    e.data.stationId,
                  );
                case l.Sc.PODCAST:
                  return (0, n.jsx)(
                    h.B1.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.id,
                        type: l.Bm.PODCAST,
                        blockPosition: s,
                        position: t,
                      },
                      children: (0, n.jsx)(m.rf, {
                        album: e.data,
                        contentLinesCount: 3,
                        withLikesCount: !0,
                        withAddition: !1,
                      }),
                    },
                    e.data.id,
                  );
              }
            }),
          });
        }),
        y = (0, r.forwardRef)((e, t) => (0, n.jsx)(b, { forwardRef: t, ...e }));
      var _ = a(86134),
        x = a.n(_);
      let S = () => {
          let e = Array.from([, ,].keys());
          return e.map((e) =>
            (0, n.jsx)(
              y,
              {
                isLoading: !0,
                className: x().block,
                headerClassName: x().blockHeader,
                containerClassName: x().blockCarousel,
              },
              e,
            ),
          );
        },
        C = (e) => {
          let {
              forwardRef: t,
              className: a,
              results: u,
              isLoading: d,
              sendSearchFeedback: m,
              searchCorrectedText: g,
            } = e,
            { formatMessage: p } = (0, o.Z)(),
            f = (0, r.useMemo)(() => {
              if (d) return (0, n.jsx)(S, {});
              let e = {
                [l.Sc.ALL]: {
                  message: p({ id: "search-results.best" }),
                  type: l.Sc.ALL,
                  items: [],
                },
                [l.Sc.ARTIST]: {
                  message: p({ id: "search-results.artist" }),
                  type: l.Sc.ARTIST,
                  items: [],
                },
                [l.Sc.PODCAST]: {
                  message: p({ id: "search-results.podcasts-and-books" }),
                  type: l.Sc.PODCAST,
                  items: [],
                },
                [l.Sc.ALBUM]: {
                  message: p({ id: "search-results.album" }),
                  type: l.Sc.ALBUM,
                  items: [],
                },
                [l.Sc.PLAYLIST]: {
                  message: p({ id: "search-results.playlist" }),
                  type: l.Sc.PLAYLIST,
                  items: [],
                },
              };
              return (
                u.forEach((t) => {
                  var a, n;
                  null === (a = e[t.type]) || void 0 === a || a.items.push(t),
                    null === (n = e[l.Sc.ALL]) ||
                      void 0 === n ||
                      n.items.push(t);
                }),
                Object.getOwnPropertyNames(e)
                  .filter((t) => {
                    let a = e[t];
                    return a.items.length > 0;
                  })
                  .map((t, a) => {
                    let i = e[t];
                    return (0, n.jsx)(
                      y,
                      {
                        className: x().block,
                        headerClassName: x().blockHeader,
                        containerClassName: x().blockCarousel,
                        blockPosition: a,
                        items: i.items,
                        title: i.message,
                        sendSearchFeedback: m,
                      },
                      a,
                    );
                  })
              );
            }, [d, u, p, m]);
          return (0, n.jsxs)(s.t, {
            className: (0, i.W)(x().root, a),
            containerClassName: x().container,
            ref: t,
            children: [
              (0, n.jsxs)("div", {
                className: x().content,
                children: [
                  g &&
                    (0, n.jsx)("div", {
                      className: x().correctedTextBlock,
                      children: g,
                    }),
                  (0, n.jsx)("div", { className: x().items, children: f }),
                ],
              }),
              (0, n.jsx)(c.$_, { className: x().footer }),
            ],
          });
        },
        E = (0, r.forwardRef)((e, t) => (0, n.jsx)(C, { forwardRef: t, ...e }));
    },
    42930: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SearchPodcastList: function () {
            return s;
          },
        });
      var n = a(8759),
        i = a(99616),
        r = a(36019),
        o = a(48365);
      let l = (e) => {
          let {
            isLoading: t,
            results: a,
            sendSearchFeedback: i,
            searchCorrectedText: l,
            className: s,
          } = e;
          return (0, n.jsx)(o.SearchEntitiesGrid, {
            className: s,
            isLoading: t,
            results: a,
            filter: r.ay.PODCAST,
            sendSearchFeedback: i,
            searchCorrectedText: l,
          });
        },
        s = (0, i.forwardRef)((e, t) => (0, n.jsx)(l, { forwardRef: t, ...e }));
    },
    71711: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SearchTrackList: function () {
            return v;
          },
        });
      var n = a(8759),
        i = a(35338),
        r = a(99616),
        o = a(71440),
        l = a(36019),
        s = a(71716),
        c = a(95539),
        u = a(84133),
        d = a(44285),
        m = a(79123),
        g = a.n(m);
      let p = () => {
          let e = Array.from(Array(36).keys());
          return e.map((e) =>
            (0, n.jsx)(
              d.DX,
              { className: g().shimmer, variant: u.Lx.PLAYLIST },
              e,
            ),
          );
        },
        f = (e) => {
          let {
              forwardRef: t,
              className: a,
              results: m,
              isLoading: f,
              sendSearchFeedback: v,
              searchCorrectedText: h,
            } = e,
            b = (0, u.x5)(),
            y = (0, r.useCallback)(
              (e, t) => ({
                contextData: {
                  type: o.Ak.Various,
                  meta: { id: t ? "".concat(e, ":").concat(t) : e },
                  from: b,
                  overrideContextType: o.Zc.Search,
                },
                queueParams: { index: 0 },
                loadContextMeta: !0,
              }),
              [b],
            ),
            _ = (0, r.useMemo)(
              () =>
                f
                  ? (0, n.jsx)(p, {})
                  : m
                      .filter((e) =>
                        [l.Sc.TRACK, l.Sc.UGC_TRACK].includes(e.type),
                      )
                      .map((e, t) => {
                        let { data: a } = e;
                        return (0, n.jsx)(
                          u.B1.Provider,
                          {
                            value: {
                              sendSearchFeedback: v,
                              id: a.albumId
                                ? "".concat(a.id, ":").concat(a.albumId)
                                : a.id,
                              type: l.Bm.TRACK,
                              blockPosition: 0,
                              position: t,
                            },
                            children: (0, n.jsx)(c.O2, {
                              track: a,
                              playContextParams: y(a.id, a.albumId),
                              shouldCheckSelfIndex: !1,
                            }),
                          },
                          a.id,
                        );
                      }),
              [f, m, y, v],
            );
          return (0, n.jsxs)(s.t, {
            className: (0, i.W)(g().root, a),
            containerClassName: g().container,
            ref: t,
            children: [
              (0, n.jsxs)("div", {
                className: g().content,
                children: [
                  h &&
                    (0, n.jsx)("div", {
                      className: g().correctedTextBlock,
                      children: h,
                    }),
                  (0, n.jsx)("div", { className: g().items, children: _ }),
                ],
              }),
              (0, n.jsx)(d.$_, { className: g().footer }),
            ],
          });
        },
        v = (0, r.forwardRef)((e, t) => (0, n.jsx)(f, { forwardRef: t, ...e }));
    },
    5915: function (e, t, a) {
      "use strict";
      a.d(t, {
        _: function () {
          return b;
        },
        L: function () {
          return s;
        },
      });
      var n = a(96555),
        i = a(96431),
        r = a(95539),
        o = a(84133);
      let l = [
          {
            id: "61843268",
            realId: "61843268",
            title: "Ты это серьёзно?",
            contentWarning: "explicit",
            major: { id: 87, name: "BELIEVE_DIGITAL" },
            available: !0,
            availableForPremiumUsers: !0,
            availableFullWithoutPermission: !1,
            availableForOptions: ["bookmate"],
            disclaimers: ["explicit"],
            storageDir: "",
            durationMs: 197660,
            fileSize: 0,
            r128: { i: -9.01, tp: -0.95 },
            fade: { inStart: 0, inStop: 0, outStart: 197.1, outStop: 197.5 },
            previewDurationMs: 3e4,
            artists: [
              {
                id: 3246342,
                name: "Скриптонит",
                various: !1,
                composer: !1,
                cover: {
                  type: "from-artist-photos",
                  uri: "avatars.mds.yandex.net/get-music-content/8871869/3e323853.p.3246342/%%",
                  prefix: "3e323853.p.3246342/",
                },
                genres: [],
                disclaimers: [],
              },
              {
                id: 5489695,
                name: "104",
                various: !1,
                composer: !1,
                cover: {
                  type: "from-artist-photos",
                  uri: "avatars.mds.yandex.net/get-music-content/10210263/0ecbf8f2.p.5489695/%%",
                  prefix: "0ecbf8f2.p.5489695/",
                },
                genres: [],
                disclaimers: [],
              },
            ],
            albums: [
              {
                id: 9684249,
                title: "2004",
                metaType: "music",
                contentWarning: "explicit",
                year: 2020,
                releaseDate: "2020-01-28T00:00:00+03:00",
                coverUri:
                  "avatars.mds.yandex.net/get-music-content/1880735/fa6a6018.a.9684249-1/%%",
                ogImage:
                  "avatars.mds.yandex.net/get-music-content/1880735/fa6a6018.a.9684249-1/%%",
                genre: "rusrap",
                trackCount: 24,
                recent: !1,
                veryImportant: !1,
                artists: [
                  {
                    id: 3246342,
                    name: "Скриптонит",
                    various: !1,
                    composer: !1,
                    cover: {
                      type: "from-artist-photos",
                      uri: "avatars.mds.yandex.net/get-music-content/8871869/3e323853.p.3246342/%%",
                      prefix: "3e323853.p.3246342/",
                    },
                    genres: [],
                    disclaimers: [],
                  },
                ],
                labels: [{ id: 1532485, name: "Musica36" }],
                available: !0,
                availableForPremiumUsers: !0,
                availableForOptions: ["bookmate"],
                availableForMobile: !0,
                availablePartially: !1,
                bests: [61843244, 61843242, 61843268],
                disclaimers: ["explicit"],
                trackPosition: { volume: 1, index: 22 },
              },
            ],
            coverUri:
              "avatars.mds.yandex.net/get-music-content/1880735/fa6a6018.a.9684249-1/%%",
            derivedColors: {
              average: "#736B58",
              waveText: "#CCCCCC",
              miniPlayer: "#C1BBAD",
              accent: "#A69E8B",
            },
            ogImage:
              "avatars.mds.yandex.net/get-music-content/1880735/fa6a6018.a.9684249-1/%%",
            lyricsAvailable: !1,
            type: "music",
            rememberPosition: !1,
            trackSharingFlag: "COVER_ONLY",
            lyricsInfo: {
              hasAvailableSyncLyrics: !0,
              hasAvailableTextLyrics: !0,
            },
            trackSource: "OWN",
            specialAudioResources: ["smart_preview"],
          },
          {
            id: "53729473",
            realId: "53729473",
            title: "Самурай",
            contentWarning: "explicit",
            major: { id: 87, name: "BELIEVE_DIGITAL" },
            available: !0,
            availableForPremiumUsers: !0,
            availableFullWithoutPermission: !1,
            availableForOptions: ["bookmate"],
            disclaimers: ["explicit"],
            storageDir: "",
            durationMs: 164e3,
            fileSize: 0,
            r128: { i: -11.01, tp: 0.18 },
            fade: { inStart: 0, inStop: 0.1, outStart: 160, outStop: 161.8 },
            previewDurationMs: 3e4,
            artists: [
              {
                id: 4465783,
                name: "Miyagi",
                various: !1,
                composer: !1,
                cover: {
                  type: "from-artist-photos",
                  uri: "avatars.mds.yandex.net/get-music-content/118603/e9de54a9.p.4465783/%%",
                  prefix: "e9de54a9.p.4465783/",
                },
                genres: [],
                disclaimers: [],
              },
            ],
            albums: [
              {
                id: 21265372,
                title: "Buster Keaton",
                metaType: "music",
                contentWarning: "explicit",
                year: 2019,
                releaseDate: "2019-06-21T00:00:00+03:00",
                coverUri:
                  "avatars.mds.yandex.net/get-music-content/5718717/2d401ddd.a.21265372-1/%%",
                ogImage:
                  "avatars.mds.yandex.net/get-music-content/5718717/2d401ddd.a.21265372-1/%%",
                genre: "rusrap",
                trackCount: 11,
                recent: !1,
                veryImportant: !1,
                artists: [
                  {
                    id: 4465783,
                    name: "Miyagi",
                    various: !1,
                    composer: !1,
                    cover: {
                      type: "from-artist-photos",
                      uri: "avatars.mds.yandex.net/get-music-content/118603/e9de54a9.p.4465783/%%",
                      prefix: "e9de54a9.p.4465783/",
                    },
                    genres: [],
                    disclaimers: [],
                  },
                ],
                labels: [{ id: 1001411, name: "Hajime" }],
                available: !0,
                availableForPremiumUsers: !0,
                availableForOptions: ["bookmate"],
                availableForMobile: !0,
                availablePartially: !1,
                bests: [53729475, 53729474, 53729473],
                disclaimers: ["explicit"],
                trackPosition: { volume: 1, index: 9 },
              },
            ],
            coverUri:
              "avatars.mds.yandex.net/get-music-content/5718717/2d401ddd.a.21265372-1/%%",
            derivedColors: {
              average: "#999999",
              waveText: "#CCCCCC",
              miniPlayer: "#B7B7B7",
              accent: "#999999",
            },
            ogImage:
              "avatars.mds.yandex.net/get-music-content/5718717/2d401ddd.a.21265372-1/%%",
            lyricsAvailable: !1,
            type: "music",
            rememberPosition: !1,
            trackSharingFlag: "COVER_ONLY",
            lyricsInfo: {
              hasAvailableSyncLyrics: !0,
              hasAvailableTextLyrics: !0,
            },
            trackSource: "OWN",
            specialAudioResources: ["smart_preview"],
          },
          {
            id: "119204132",
            realId: "119204132",
            title: "DIAMOND",
            major: { id: 87, name: "BELIEVE_DIGITAL" },
            available: !0,
            availableForPremiumUsers: !0,
            availableFullWithoutPermission: !1,
            availableForOptions: ["bookmate"],
            disclaimers: [],
            storageDir: "",
            durationMs: 118610,
            fileSize: 0,
            r128: { i: -7.85, tp: -0.16 },
            fade: { inStart: 0, inStop: 3.3, outStart: 117.7, outStop: 118.2 },
            previewDurationMs: 3e4,
            artists: [
              {
                id: 7251201,
                name: "Xcho",
                various: !1,
                composer: !1,
                cover: {
                  type: "from-artist-photos",
                  uri: "avatars.mds.yandex.net/get-music-content/10139807/6ed1bc67.p.7251201/%%",
                  prefix: "6ed1bc67.p.7251201/",
                },
                genres: [],
                disclaimers: [],
              },
            ],
            albums: [
              {
                id: 28188351,
                title: "DIAMOND",
                type: "single",
                metaType: "music",
                year: 2023,
                releaseDate: "2023-11-17T00:00:00+03:00",
                coverUri:
                  "avatars.mds.yandex.net/get-music-content/10641165/61b87581.a.28188351-2/%%",
                ogImage:
                  "avatars.mds.yandex.net/get-music-content/10641165/61b87581.a.28188351-2/%%",
                genre: "rusrap",
                trackCount: 1,
                recent: !1,
                veryImportant: !1,
                artists: [
                  {
                    id: 7251201,
                    name: "Xcho",
                    various: !1,
                    composer: !1,
                    cover: {
                      type: "from-artist-photos",
                      uri: "avatars.mds.yandex.net/get-music-content/10139807/6ed1bc67.p.7251201/%%",
                      prefix: "6ed1bc67.p.7251201/",
                    },
                    genres: [],
                    disclaimers: [],
                  },
                ],
                labels: [{ id: 2005528, name: "Glass Cage" }],
                available: !0,
                availableForPremiumUsers: !0,
                availableForOptions: ["bookmate"],
                availableForMobile: !0,
                availablePartially: !1,
                bests: [],
                disclaimers: [],
                trackPosition: { volume: 1, index: 1 },
              },
            ],
            coverUri:
              "avatars.mds.yandex.net/get-music-content/10641165/61b87581.a.28188351-2/%%",
            derivedColors: {
              average: "#615B56",
              waveText: "#CCCCCC",
              miniPlayer: "#BBB6B3",
              accent: "#9E9793",
            },
            ogImage:
              "avatars.mds.yandex.net/get-music-content/10641165/61b87581.a.28188351-2/%%",
            lyricsAvailable: !1,
            type: "music",
            rememberPosition: !1,
            trackSharingFlag: "COVER_ONLY",
            lyricsInfo: {
              hasAvailableSyncLyrics: !0,
              hasAvailableTextLyrics: !0,
            },
            trackSource: "OWN",
            specialAudioResources: ["smart_preview"],
          },
        ],
        s = n.V5.model("Trailer", {
          loadingState: n.V5.enumeration(Object.values(o.Gu)),
          errorStatusCode: n.V5.maybeNull(n.V5.number),
          tracks: n.V5.array(r.le),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === o.Gu.REJECT;
            },
            get isNotFound() {
              let t = e.loadingState === o.Gu.RESOLVE && 0 === e.tracks.length,
                a = e.errorStatusCode === i.CN.NOT_FOUND;
              return t || a;
            },
          }))
          .actions((e) => {
            let t = {
              getArtistTrailer: (0, n.ls)(function* (a) {
                let { artistsResource: i } = (0, n.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    (e.loadingState = o.Gu.PENDING),
                      yield i.getTrailer(a),
                      (e.tracks = (0, n.pj)(l.map(r.Vt))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getAlbumTrailer: (0, n.ls)(function* (a) {
                let { albumResource: i } = (0, n.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    (e.loadingState = o.Gu.PENDING),
                      yield i.getTrailer(a),
                      (e.tracks = (0, n.pj)(l.map(r.Vt))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getPlaylistTrailer: (0, n.ls)(function* (a) {
                let { usersResource: i } = (0, n.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    (e.loadingState = o.Gu.PENDING),
                      yield i.getPlaylistTrailer(a),
                      (e.tracks = (0, n.pj)(l.map(r.Vt))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getTrackTrailer: (0, n.ls)(function* (a) {
                let { tracksResource: i } = (0, n.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    (e.loadingState = o.Gu.PENDING),
                      yield i.getTrailer(a),
                      (e.tracks = (0, n.pj)(l.map(r.Vt))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              handleError(t) {
                let { logger: a } = (0, n.dU)(e);
                ("string" == typeof t || t instanceof Error) && a.error(t),
                  t instanceof i.du &&
                    (t.statusCode === i.CN.NOT_FOUND ||
                      t.statusCode === i.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = i.CN.NOT_FOUND),
                  e.loadingState !== o.Gu.IDLE &&
                    (e.loadingState = o.Gu.REJECT);
              },
            };
            return t;
          });
      var c = a(8759),
        u = a(35338),
        d = a(33423),
        m = a(31476),
        g = a(26365),
        p = a.n(g);
      let f = (0, d.Pi)(() =>
        (0, c.jsx)("div", { className: p().root, children: "Trailer" }),
      );
      var v = a(42762),
        h = a.n(v);
      let b = (0, d.Pi)(() => {
        let {
            settings: e,
            modals: { trailerModal: t },
          } = (0, o.oR)(),
          { contentRef: a } = (0, o.$Y)(),
          n = e.layout === o.t8.Mobile;
        return (0, c.jsx)(m.u, {
          size: "fitContent",
          placement: n ? "default" : "right",
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          className: h().root,
          contentClassName: (0, u.W)(h().content, h().important),
          overlayClassName: h().overlay,
          portalNode: n ? null : a,
          children: (0, c.jsx)(f, {}),
        });
      });
    },
    9495: function (e, t, a) {
      "use strict";
      a.d(t, {
        a: function () {
          return A;
        },
        w: function () {
          return P;
        },
      });
      var n = a(8759),
        i = a(35338),
        r = a(33423),
        o = a(99616),
        l = a(53433),
        s = a(3561),
        c = a(84133),
        u = a(65244),
        d = a(2814),
        m = a(15527),
        g = a(14581),
        p = a(4910),
        f = a.n(p);
      let v = (0, r.Pi)((e) => {
        let { isPlaying: t, onClick: a, className: r } = e,
          { vibe: s } = (0, c.oR)(),
          { formatMessage: p } = (0, u.Z)(),
          v = t ? "pauseVibe" : "playVibe",
          h = t
            ? l.QM.vibe.MY_VIBE_PLAY_BUTTON_PLAYING
            : l.QM.vibe.MY_VIBE_PLAY_BUTTON_NOT_PLAYING,
          b = (0, o.useMemo)(
            () =>
              t
                ? p({ id: "vibe-actions.aria-label-pause" })
                : p({ id: "vibe-actions.aria-label-play" }),
            [p, t],
          ),
          y = (0, o.useCallback)(
            (e) => {
              s.isLoading || null == a || a(),
                e.stopPropagation(),
                e.preventDefault();
            },
            [a, s.isLoading],
          );
        return (0, n.jsx)(m.z, {
          className: (0, i.W)(
            f().root,
            { [f().root_isLoading]: s.isLoading },
            r,
          ),
          withRipple: !1,
          withHover: !1,
          onClick: y,
          variant: "text",
          "aria-disabled": s.isLoading,
          "aria-label": b,
          icon: (0, n.jsx)(g.J, {
            size: "s",
            className: (0, i.W)(f().icon, f()["icon_".concat(v)]),
            variant: v,
          }),
          ...(0, l.BA)(h),
          children: (0, n.jsx)(d.Z, { id: "entity-names.my-vibe" }),
        });
      });
      var h = a(63112),
        b = a.n(h),
        y = a(1918),
        _ = a(41540),
        x = a(84290),
        S = a(44285),
        C = a(13095),
        E = a.n(C);
      let N = (0, r.Pi)((e) => {
          var t;
          let { context: a, onResetClick: r, className: s } = e,
            { vibe: d, experiments: p, settings: f } = (0, c.oR)(),
            { formatMessage: v } = (0, u.Z)(),
            h = (0, x.BV)(d.meta),
            b = f.layout === c.t8.Mobile,
            C = a && p.checkExperiment(c.pe.WebPins, "on") && !b;
          return (0, n.jsxs)("div", {
            className: (0, i.W)(E().root, s),
            children: [
              C &&
                (0, n.jsx)(S.RT, {
                  size: "m",
                  iconSize: "xs",
                  withScaleAnimation: !1,
                  isPinned:
                    null === (t = d.meta) || void 0 === t ? void 0 : t.isPinned,
                  onClick: h,
                  className: E().pinButton,
                }),
              (0, n.jsx)(o.Suspense, { children: (0, n.jsx)(_.Pk, {}) }),
              a &&
                (0, n.jsxs)("div", {
                  className: (0, i.W)(E().context),
                  ...(0, l.BA)(l.QM.vibe.VIBE_CONTEXT),
                  children: [
                    (0, n.jsx)(y.Caption, {
                      variant: "span",
                      type: "controls",
                      size: "m",
                      weight: "medium",
                      lineClamp: 1,
                      children: a,
                    }),
                    (0, n.jsx)(m.z, {
                      className: E().resetButton,
                      variant: "text",
                      radius: "round",
                      withRipple: !1,
                      icon: (0, n.jsx)(g.J, { variant: "close", size: "xxs" }),
                      onClick: r,
                      "aria-label": ""
                        .concat(v({ id: "vibe-actions.reset-settings" }), " ")
                        .concat(a),
                      ...(0, l.BA)(l.QM.vibe.RESET_VIBE_CONTEXT_BUTTON),
                    }),
                  ],
                }),
            ],
          });
        }),
        P = (0, r.Pi)((e) => {
          var t, a, r;
          let { className: u } = e,
            { vibe: d, experiments: m } = (0, c.oR)(),
            { pageId: g } = (0, c.lV)(),
            { blockIdForFrom: p } = (0, c.qY)(),
            {
              isVibeContext: f,
              isPlaying: h,
              togglePlay: y,
              resetSettings: _,
            } = (0, c.Qh)({
              seeds:
                null !==
                  (r =
                    null === (t = d.meta) || void 0 === t ? void 0 : t.seeds) &&
                void 0 !== r
                  ? r
                  : [],
              pageIdForFrom: g,
              blockIdForFrom: p,
            }),
            x = m.checkExperiment(c.pe.WebNextDisableVibeSettings, "on");
          d.getLastLoadingState === c.Gu.IDLE && (0, o.use)(d.getLastVibe());
          let S = (0, o.useCallback)(() => {
            f ? _() : d.vibeResetLoadingState !== c.Gu.PENDING && d.vibeReset();
          }, [f, d, _]);
          return (
            (0, o.useEffect)(
              () => () => {
                d.reset();
              },
              [d],
            ),
            (0, n.jsxs)("div", {
              className: (0, i.W)(b().root, u),
              ...(0, l.BA)(l.QM.vibe.VIBE_BLOCK),
              children: [
                (0, n.jsx)(s.iX, { className: b().vibeAnimation }),
                (0, n.jsxs)("div", {
                  className: b().controls,
                  children: [
                    (0, n.jsx)(v, { isPlaying: h, onClick: y }),
                    !x &&
                      (0, n.jsx)(N, {
                        className: b().settingsButton,
                        context:
                          null === (a = d.meta) || void 0 === a
                            ? void 0
                            : a.context,
                        onResetClick: S,
                      }),
                  ],
                }),
              ],
            })
          );
        });
      var k = a(96555),
        L = a(96431),
        I = a(36019);
      let A = k.V5.model("VibeActions", {
        meta: k.V5.maybeNull(x.KW),
        applyingSetting: k.V5.maybeNull(k.V5.string),
        isLoading: k.V5.boolean,
        getLastLoadingState: k.V5.enumeration(Object.values(c.Gu)),
        vibeResetLoadingState: k.V5.enumeration(Object.values(c.Gu)),
      })
        .views((e) => ({
          get isMyVibe() {
            return (
              e.meta && 1 === e.meta.seeds.length && e.meta.seeds[0] === c.sH
            );
          },
        }))
        .actions((e) => {
          let t = {
            getLastVibe: (0, k.ls)(function* () {
              let { rotorResource: t, logger: a } = (0, k.dU)(e);
              if (e.getLastLoadingState !== c.Gu.PENDING)
                try {
                  e.getLastLoadingState = c.Gu.PENDING;
                  let a = yield t.waveLast();
                  (e.meta = (0, x.xF)(a)),
                    (e.getLastLoadingState = c.Gu.RESOLVE);
                } catch (t) {
                  !(t instanceof L.eY) && t instanceof Error && a.error(t),
                    (e.getLastLoadingState = c.Gu.REJECT);
                }
            }),
            vibeReset: (0, k.ls)(function* () {
              let { rotorResource: t, logger: a } = (0, k.dU)(e);
              if (e.vibeResetLoadingState !== c.Gu.PENDING)
                try {
                  e.vibeResetLoadingState = c.Gu.PENDING;
                  let a = yield t.waveLastReset();
                  a === I.NE.OK &&
                    (e.meta = (0, x.xF)({
                      name: "",
                      seeds: [c.sH],
                      stationId: c.sH,
                      idForFrom: c.sH,
                    })),
                    (e.vibeResetLoadingState = c.Gu.RESOLVE);
                } catch (t) {
                  !(t instanceof L.eY) &&
                    (t instanceof Error || "string" == typeof t) &&
                    a.error(t),
                    (e.vibeResetLoadingState = c.Gu.REJECT);
                }
            }),
            setApplyingSetting(t) {
              t
                ? (e.applyingSetting = (0, k.pj)(t))
                : (e.applyingSetting = null);
            },
            setIsLoading(t) {
              e.isLoading = t;
            },
            setVibe(t) {
              e.meta = (0, x.xF)(t);
            },
            reset() {
              (e.meta = null),
                (e.vibeResetLoadingState = c.Gu.IDLE),
                (e.getLastLoadingState = c.Gu.IDLE);
            },
          };
          return t;
        });
    },
    65688: function (e) {
      e.exports = {
        root: "Genre_root__80dlk",
        link: "Genre_link__Wewaq",
        linkTitle: "Genre_linkTitle__ORAsw",
        list: "Genre_list__C2Pxf",
      };
    },
    12576: function (e) {
      e.exports = {
        root: "NotificationUpdate_root__hpSQi",
        important: "NotificationUpdate_important___0WHj",
        text: "NotificationUpdate_text__YylYD",
        button: "NotificationUpdate_button__F3O16",
        message: "NotificationUpdate_message__rLYpW",
      };
    },
    45679: function (e) {
      e.exports = {
        root: "ReleaseNotesModal_root__RSw1p",
        modalHeader: "ReleaseNotesModal_modalHeader__gp9SA",
        modalContent: "ReleaseNotesModal_modalContent__g8OTu",
        scrollableContent: "ReleaseNotesModal_scrollableContent__zGdbH",
        important: "ReleaseNotesModal_important__u8yP4",
        notes: "ReleaseNotesModal_notes__bVAoa",
        date: "ReleaseNotesModal_date__s3_ux",
        description: "ReleaseNotesModal_description__B_yLI",
        paragraph: "ReleaseNotesModal_paragraph___laDJ",
        note: "ReleaseNotesModal_note__S9E6z",
        version: "ReleaseNotesModal_version__4Mcd5",
        item: "ReleaseNotesModal_item___CYml",
        code: "ReleaseNotesModal_code__Yv3QD",
      };
    },
    99750: function (e) {
      e.exports = {
        root: "TitleBar_root__QjdOZ",
        button: "TitleBar_button__9MptL",
        button_withSecondaryColor: "TitleBar_button_withSecondaryColor__oIkuo",
        icon: "TitleBar_icon__8Wji9",
        icon_withSecondaryColor: "TitleBar_icon_withSecondaryColor__vuw6G",
        closeButton: "TitleBar_closeButton__Epxh7",
      };
    },
    42781: function (e) {
      e.exports = {
        root_visible: "VibeAnimation_root_visible__S7kXl",
        "fade-in": "VibeAnimation_fade-in__hx6bD",
      };
    },
    51739: function (e) {
      e.exports = {
        root: "RestrictionBlock_root__P_g9o",
        restrictions: "RestrictionBlock_restrictions__BhR_r",
      };
    },
    99798: function (e) {
      e.exports = {
        button: "RestrictionButton_button__eLMkU",
        button_selected: "RestrictionButton_button_selected__LHD20",
        button_applying: "RestrictionButton_button_applying___ik5f",
        "applying-setting": "RestrictionButton_applying-setting__utqyc",
        diversityButton: "RestrictionButton_diversityButton__uclSi",
        moodEnergy: "RestrictionButton_moodEnergy__q_I4y",
        moodEnergyButton: "RestrictionButton_moodEnergyButton__yKkaS",
        textButton: "RestrictionButton_textButton__HC_AE",
        title: "RestrictionButton_title__UZn0O",
        specialButton: "RestrictionButton_specialButton__Di6B9",
        specialImage: "RestrictionButton_specialImage__0E3x2",
        rippleContainer: "RestrictionButton_rippleContainer__xPANO",
        ripple: "RestrictionButton_ripple__Rsu8b",
      };
    },
    87004: function (e) {
      e.exports = {
        root: "VibeSettingsBlock_root__t8Hp_",
        popover: "VibeSettingsBlock_popover__ogu17",
        overlay: "VibeSettingsBlock_overlay__5jAS5",
        toggleSettingsButton: "VibeSettingsBlock_toggleSettingsButton__g9rTZ",
        header: "VibeSettingsBlock_header__Ww2RA",
        actions: "VibeSettingsBlock_actions__JEc14",
        settings: "VibeSettingsBlock_settings__0Kluc",
        diversity: "VibeSettingsBlock_diversity__tU1OY",
        moodEnergy: "VibeSettingsBlock_moodEnergy__OJ0wF",
        contextItems: "VibeSettingsBlock_contextItems__kTvUX",
        ripple: "VibeSettingsBlock_ripple__jaJ8q",
      };
    },
    44752: function (e) {
      e.exports = {
        root: "AlbumPage_root__RMrFx",
        important: "AlbumPage_important__x2o8I",
        averageColorBackground: "AlbumPage_averageColorBackground__PmVaF",
        header: "AlbumPage_header__TDpqp",
        content: "AlbumPage_content__1JXxB",
        footerContainer: "AlbumPage_footerContainer__1IxWF",
        carouselBlocks: "AlbumPage_carouselBlocks__VIvNT",
        carouselBlock: "AlbumPage_carouselBlock__oWYmS",
        carouselBlockHeader: "AlbumPage_carouselBlockHeader__Bb3Ts",
        carouselContainer: "AlbumPage_carouselContainer__9clXz",
        textItem: "AlbumPage_textItem__1T3qL",
        text: "AlbumPage_text__rCU1L",
        shimmerItem: "AlbumPage_shimmerItem___Yecm",
        footer: "AlbumPage_footer__6_0Ei",
      };
    },
    28280: function (e) {
      e.exports = {
        tabCarousel: "PodcastContent_tabCarousel__cNl0q",
        tab: "PodcastContent_tab__6Rx8j",
        contentAbout: "PodcastContent_contentAbout__OFJ8L",
        infoBlock: "PodcastContent_infoBlock__kDh2i",
        infoTitle: "PodcastContent_infoTitle__WnMqm",
        content: "PodcastContent_content__U7mlc",
        lastEpisodes: "PodcastContent_lastEpisodes__GhmYl",
      };
    },
    28674: function (e) {
      e.exports = {
        root: "ArtistAlbumsPage_root__UVZDz",
        scrollContent: "ArtistAlbumsPage_scrollContent__DUMkg",
        scrollContainer: "ArtistAlbumsPage_scrollContainer__2FrjI",
        important: "ArtistAlbumsPage_important__Id_vh",
        footer: "ArtistAlbumsPage_footer__6Nrct",
        item: "ArtistAlbumsPage_item__kiegh",
        content: "ArtistAlbumsPage_content__65D6P",
      };
    },
    8023: function (e) {
      e.exports = {
        root: "ArtistConcertsPage_root__DDTmb",
        scrollableContainer: "ArtistConcertsPage_scrollableContainer__qrAF_",
        container: "ArtistConcertsPage_container__ho6Fw",
        content: "ArtistConcertsPage_content__Ynto2",
        footer: "ArtistConcertsPage_footer__kQL7m",
      };
    },
    50871: function (e) {
      e.exports = { root: "ArtistFamiliarPage_root__9Zjo0" };
    },
    67807: function (e) {
      e.exports = {
        root: "ArtistFamiliarPageContent_root__0Mc9t",
        scrollContainer: "ArtistFamiliarPageContent_scrollContainer__TD6Kj",
        important: "ArtistFamiliarPageContent_important__o2KTP",
        content: "ArtistFamiliarPageContent_content__QquDA",
        block: "ArtistFamiliarPageContent_block__Cr2H_",
        blockHeader: "ArtistFamiliarPageContent_blockHeader__Z_uvq",
        tracksBlock: "ArtistFamiliarPageContent_tracksBlock__SCCLT",
        footer: "ArtistFamiliarPageContent_footer__nveR8",
        item: "ArtistFamiliarPageContent_item__fyC2q",
        shimmerTitle: "ArtistFamiliarPageContent_shimmerTitle__WU3vH",
      };
    },
    38462: function (e) {
      e.exports = {
        root: "ArtistFamiliarPageEmpty_root__s5xX9",
        icon: "ArtistFamiliarPageEmpty_icon__b7kR5",
        title: "ArtistFamiliarPageEmpty_title__wvBGS",
      };
    },
    81920: function (e) {
      e.exports = {
        root: "ArtistFamiliarPageHeader_root__0Wxyx",
        container: "ArtistFamiliarPageHeader_container__HFQzt",
        title: "ArtistFamiliarPageHeader_title__YpVQg",
        tabs: "ArtistFamiliarPageHeader_tabs__CrnJC",
        tab: "ArtistFamiliarPageHeader_tab__RK4OK",
        tabsShimmer: "ArtistFamiliarPageHeader_tabsShimmer__cbLvV",
        tabShimmer: "ArtistFamiliarPageHeader_tabShimmer__iLiqI",
        staticHeader: "ArtistFamiliarPageHeader_staticHeader__LrzR8",
        important: "ArtistFamiliarPageHeader_important__buc81",
        stickyHeader: "ArtistFamiliarPageHeader_stickyHeader__u7JdF",
      };
    },
    41550: function (e) {
      e.exports = {
        root: "ArtistPage_root__QPg3p",
        averageColorBackground: "ArtistPage_averageColorBackground__wXTSY",
        header: "ArtistPage_header__tQnNe",
        content: "ArtistPage_content__iZHVN",
        recents: "ArtistPage_recents__fjgcr",
        popularTracksBlock: "ArtistPage_popularTracksBlock__uJall",
        popularTracksBlock_withReleaseBlock:
          "ArtistPage_popularTracksBlock_withReleaseBlock__mzSb3",
        carouselBlockHeader: "ArtistPage_carouselBlockHeader__CtGDa",
        popularTracksBlockHeader: "ArtistPage_popularTracksBlockHeader__TysMC",
        releaseBlockHeader: "ArtistPage_releaseBlockHeader__OmgPW",
        releaseBlockHeaderShimmer:
          "ArtistPage_releaseBlockHeaderShimmer__AvOZC",
        popularTracksBlockList: "ArtistPage_popularTracksBlockList__3khYd",
        releaseBlock: "ArtistPage_releaseBlock__wzo2G",
        releaseBlockCard: "ArtistPage_releaseBlockCard__Q9Vim",
        important: "ArtistPage_important__rngCz",
        concertsBlock: "ArtistPage_concertsBlock__1BfM8",
        carouselBlock: "ArtistPage_carouselBlock__7tYRK",
        carouselBlocks: "ArtistPage_carouselBlocks__KfSTw",
        footer: "ArtistPage_footer__8m6P9",
      };
    },
    33768: function (e) {
      e.exports = {
        scrollableContent: "ArtistSimilarPage_scrollableContent__WD72A",
        container: "ArtistSimilarPage_container__DDj5O",
        content: "ArtistSimilarPage_content__X71xs",
        footer: "ArtistSimilarPage_footer__FdVkO",
      };
    },
    60495: function (e) {
      e.exports = {
        root: "ArtistTracksPage_root__ad3rI",
        footer: "ArtistTracksPage_footer__KN2i_",
        scrollContainer: "ArtistTracksPage_scrollContainer__9iO2g",
        important: "ArtistTracksPage_important__iulth",
        content: "ArtistTracksPage_content__6LJJd",
        shimmerItem: "ArtistTracksPage_shimmerItem__136_r",
      };
    },
    63049: function (e) {
      e.exports = {
        root: "ChartPage_root__JwQua",
        container: "ChartPage_container__mdNLA",
        scrollContent: "ChartPage_scrollContent__Hz3LW",
        scrollContainer: "ChartPage_scrollContainer__VJzA3",
        important: "ChartPage_important__HCgQ4",
        content: "ChartPage_content__adrCP",
        footer: "ChartPage_footer__JyfRg",
        shimmerItem: "ChartPage_shimmerItem__n3Z_s",
      };
    },
    68585: function (e) {
      e.exports = { root: "CollectionAlbumsPage_root__qMtcC" };
    },
    21017: function (e) {
      e.exports = {
        root: "CollectionAlbumsPageContent_root__2Ya18",
        scrollContainer: "CollectionAlbumsPageContent_scrollContainer__0TjJm",
        important: "CollectionAlbumsPageContent_important__fixM8",
        content: "CollectionAlbumsPageContent_content__jcwRU",
        footer: "CollectionAlbumsPageContent_footer__ZkUKY",
        item: "CollectionAlbumsPageContent_item__I_Wuz",
        tabPanel: "CollectionAlbumsPageContent_tabPanel__0qXKZ",
      };
    },
    91036: function (e) {
      e.exports = {
        root: "CollectionAlbumsPageEmpty_root__7yn1F",
        icon: "CollectionAlbumsPageEmpty_icon__XFf9x",
        title: "CollectionAlbumsPageEmpty_title__hMQde",
        text: "CollectionAlbumsPageEmpty_text__jp_lj",
      };
    },
    915: function (e) {
      e.exports = {
        root: "CollectionAlbumsPageHeader_root__87L_c",
        container: "CollectionAlbumsPageHeader_container__96cIo",
        title: "CollectionAlbumsPageHeader_title__1Ps8d",
        tabs: "CollectionAlbumsPageHeader_tabs__P4GTY",
        tab: "CollectionAlbumsPageHeader_tab__JSFBc",
        tabsShimmer: "CollectionAlbumsPageHeader_tabsShimmer__fGlR0",
        tabShimmer: "CollectionAlbumsPageHeader_tabShimmer__9hCc6",
        staticHeader: "CollectionAlbumsPageHeader_staticHeader__YNfX4",
        important: "CollectionAlbumsPageHeader_important__0dgC2",
        stickyHeader: "CollectionAlbumsPageHeader_stickyHeader__L_1IS",
      };
    },
    77979: function (e) {
      e.exports = {
        root: "CollectionArtistsPage_root__EH25F",
        container: "CollectionArtistsPage_container__mNUIo",
        scrollContent: "CollectionArtistsPage_scrollContent__CSeYr",
        scrollContainer: "CollectionArtistsPage_scrollContainer__tT6NQ",
        important: "CollectionArtistsPage_important__MG_XV",
        footer: "CollectionArtistsPage_footer__aZrx3",
        item: "CollectionArtistsPage_item___cy_9",
        content: "CollectionArtistsPage_content__Jd9hE",
      };
    },
    23234: function (e) {
      e.exports = {
        root: "CollectionPage_root__CZAxL",
        root_withCollectionColor:
          "CollectionPage_root_withCollectionColor__4kV02",
        content: "CollectionPage_content__c3f8z",
        header: "CollectionPage_header__z193s",
        description: "CollectionPage_description__A3dny",
        collectionColor: "CollectionPage_collectionColor__M5l1f",
        landing: "CollectionPage_landing__B4jW_",
        landing_onlyWizard: "CollectionPage_landing_onlyWizard__umeEK",
        footer: "CollectionPage_footer__9kzD0",
        footer_onlyWizard: "CollectionPage_footer_onlyWizard__FxCwa",
        error: "CollectionPage_error__xs4ZH",
      };
    },
    85742: function (e) {
      e.exports = {
        root: "CollectionPlaylistsCreatedPage_root__o77CF",
        scrollContainer:
          "CollectionPlaylistsCreatedPage_scrollContainer__Spb2M",
        important: "CollectionPlaylistsCreatedPage_important__DLkOq",
        content: "CollectionPlaylistsCreatedPage_content___qalr",
        footer: "CollectionPlaylistsCreatedPage_footer__I2jJa",
        item: "CollectionPlaylistsCreatedPage_item__2RmBg",
      };
    },
    92158: function (e) {
      e.exports = {
        root: "CollectionPlaylistsLikedPage_root__ZyIwA",
        scrollContainer: "CollectionPlaylistsLikedPage_scrollContainer__H_vPA",
        important: "CollectionPlaylistsLikedPage_important__GjYTU",
        content: "CollectionPlaylistsLikedPage_content__WIxhp",
        footer: "CollectionPlaylistsLikedPage_footer__A60Ui",
        item: "CollectionPlaylistsLikedPage_item__PpCht",
      };
    },
    95187: function (e) {
      e.exports = { root: "CollectionPlaylistsPage_root__1QnBw" };
    },
    82825: function (e) {
      e.exports = {
        root: "CollectionPlaylistsPageContent_root__hGnWW",
        scrollContainer:
          "CollectionPlaylistsPageContent_scrollContainer__fiLLm",
        important: "CollectionPlaylistsPageContent_important__ebi2p",
        content: "CollectionPlaylistsPageContent_content__aZ2bA",
        footer: "CollectionPlaylistsPageContent_footer__4Ir_w",
        item: "CollectionPlaylistsPageContent_item__OPBiS",
        tabPanel: "CollectionPlaylistsPageContent_tabPanel__2uB2_",
      };
    },
    36397: function (e) {
      e.exports = {
        root: "CollectionPlaylistsPageEmpty_root__mKZt2",
        icon: "CollectionPlaylistsPageEmpty_icon__x9v_P",
        title: "CollectionPlaylistsPageEmpty_title__8RfSi",
      };
    },
    53158: function (e) {
      e.exports = {
        root: "CollectionPlaylistsPageHeader_root__GfGIl",
        container: "CollectionPlaylistsPageHeader_container__oh7C2",
        title: "CollectionPlaylistsPageHeader_title__2D23I",
        staticTabs: "CollectionPlaylistsPageHeader_staticTabs__9c9yq",
        stickyTabs: "CollectionPlaylistsPageHeader_stickyTabs__Iot6U",
        tab: "CollectionPlaylistsPageHeader_tab__aNTOB",
        tabsShimmer: "CollectionPlaylistsPageHeader_tabsShimmer__u9JIN",
        tabShimmer: "CollectionPlaylistsPageHeader_tabShimmer__ekXeT",
        staticHeader: "CollectionPlaylistsPageHeader_staticHeader__lzc4l",
        important: "CollectionPlaylistsPageHeader_important__uR36G",
        stickyHeader: "CollectionPlaylistsPageHeader_stickyHeader__ojvbQ",
      };
    },
    56908: function (e) {
      e.exports = {
        root: "GenreAlbumsPage_root__r_Sts",
        scrollContent: "GenreAlbumsPage_scrollContent__sBMMq",
        scrollContainer: "GenreAlbumsPage_scrollContainer__K_v_b",
        important: "GenreAlbumsPage_important__r3P2T",
        footer: "GenreAlbumsPage_footer__vmCiR",
        item: "GenreAlbumsPage_item__zRzB0",
        content: "GenreAlbumsPage_content__PRJUm",
      };
    },
    11318: function (e) {
      e.exports = {
        root: "GenreArtistsPage_root__PgtIz",
        scrollContent: "GenreArtistsPage_scrollContent__fDonT",
        scrollContainer: "GenreArtistsPage_scrollContainer__s_HLR",
        important: "GenreArtistsPage_important__YxR3i",
        footer: "GenreArtistsPage_footer__fYaCO",
        item: "GenreArtistsPage_item__OX8zl",
        content: "GenreArtistsPage_content__cz47x",
      };
    },
    59896: function (e) {
      e.exports = {
        root: "GenrePage_root___kL_v",
        content: "GenrePage_content__NRwAJ",
        shimmerTitle: "GenrePage_shimmerTitle__hrgjK",
        carouselBlocks: "GenrePage_carouselBlocks__kR63B",
        carouselBlock: "GenrePage_carouselBlock__QCkpK",
        carouselBlockHeader: "GenrePage_carouselBlockHeader__u12sn",
      };
    },
    39214: function (e) {
      e.exports = {
        root: "GenrePlaylistsPage_root__WZwkl",
        scrollContent: "GenrePlaylistsPage_scrollContent__rahSG",
        scrollContainer: "GenrePlaylistsPage_scrollContainer__N3BZw",
        important: "GenrePlaylistsPage_important__986BX",
        footer: "GenrePlaylistsPage_footer__aMDul",
        item: "GenrePlaylistsPage_item__tUsqJ",
        content: "GenrePlaylistsPage_content__2rKJY",
      };
    },
    73899: function (e) {
      e.exports = {
        root: "GenresPage_root__LhP_S",
        shimmerTitle: "GenresPage_shimmerTitle__4j8uH",
        content: "GenresPage_content__yhKrQ",
        list: "GenresPage_list__l2Cuc",
      };
    },
    86422: function (e) {
      e.exports = {
        root: "KinopoiskPage_root__efIzv",
        content: "KinopoiskPage_content__uUKLe",
        header: "KinopoiskPage_header__EH22X",
        feedbackUrl: "KinopoiskPage_feedbackUrl__Bk6i6",
        feedbackUrl_default: "KinopoiskPage_feedbackUrl_default__TZ83j",
        ripple: "KinopoiskPage_ripple__gev3H",
        feedbackUrl_outline: "KinopoiskPage_feedbackUrl_outline__qEo4x",
        feedbackUrl_text: "KinopoiskPage_feedbackUrl_text__K21_J",
        landing: "KinopoiskPage_landing__Ljr6g",
        landing_onlyWizard: "KinopoiskPage_landing_onlyWizard__iFo5R",
        footer: "KinopoiskPage_footer__DMI7A",
        error: "KinopoiskPage_error__3oxp4",
      };
    },
    50045: function (e) {
      e.exports = {
        content: "MainPage_content__kskSM",
        root: "MainPage_root__STXqc",
        container: "MainPage_container__CB86l",
        vibe: "MainPage_vibe__XEBbh",
        landing: "MainPage_landing___FGNm",
        header: "MainPage_header__lPh0v",
        beta: "MainPage_beta__y32vb",
        footer: "MainPage_footer__2rGy2",
        error: "MainPage_error__u_UCm",
      };
    },
    37436: function (e) {
      e.exports = {
        root: "NonMusicPage_root__IPKkH",
        content: "NonMusicPage_content__7_TYy",
        header: "NonMusicPage_header__dijgk",
        landing: "NonMusicPage_landing__kGKTh",
        landing_onlyWizard: "NonMusicPage_landing_onlyWizard__P9nN3",
        footer: "NonMusicPage_footer__juz5v",
        error: "NonMusicPage_error__oW0V3",
      };
    },
    90598: function (e) {
      e.exports = {
        root: "PlaylistPage_root__ajyaP",
        important: "PlaylistPage_important__1Xpl5",
        averageColorBackground: "PlaylistPage_averageColorBackground__3wEkw",
        header: "PlaylistPage_header__EdIoE",
        content: "PlaylistPage_content__T7zOm",
        footerContainer: "PlaylistPage_footerContainer__8uPBx",
        carouselBlock: "PlaylistPage_carouselBlock__lvaKg",
        carouselBlockHeader: "PlaylistPage_carouselBlockHeader__asTWy",
        carouselContainer: "PlaylistPage_carouselContainer__TfWiI",
        footer: "PlaylistPage_footer__ih_cJ",
      };
    },
    63690: function (e) {
      e.exports = {
        root: "PlaylistPageDnDItemWrapper_root__eBm1E",
        inner: "PlaylistPageDnDItemWrapper_inner__UXQZf",
        dragging: "PlaylistPageDnDItemWrapper_dragging__Pl94m",
        dragOverlay: "PlaylistPageDnDItemWrapper_dragOverlay__tWQut",
      };
    },
    43601: function (e) {
      e.exports = {
        root: "PlaylistPageDnDList_root__6Fryw",
        draggableItemWrapper: "PlaylistPageDnDList_draggableItemWrapper__vvEWL",
        noHoverItem: "PlaylistPageDnDList_noHoverItem__dbPTH",
      };
    },
    81711: function (e) {
      e.exports = {
        emptyBlockContainer: "PlaylistPageItem_emptyBlockContainer__K5xRV",
        shimmerItem: "PlaylistPageItem_shimmerItem__s_fFo",
      };
    },
    15697: function (e) {
      e.exports = {
        scrollableContainer: "PostPage_scrollableContainer__iV9Bo",
        container: "PostPage_container__orSfz",
        shimmerTitle: "PostPage_shimmerTitle__EeFCD",
      };
    },
    57551: function (e) {
      e.exports = {
        root: "PostAlbums_root__u2a1q",
        content: "PostAlbums_content__uMSez",
      };
    },
    74706: function (e) {
      e.exports = {
        root: "PostArtists_root__Zxmjq",
        content: "PostArtists_content__JzGOH",
      };
    },
    95456: function (e) {
      e.exports = {
        root: "PostPlaylists_root__3tea0",
        content: "PostPlaylists_content__2fXI5",
      };
    },
    18448: function (e) {
      e.exports = {
        root: "PostShimmer_root__MlLkY",
        top: "PostShimmer_top__ySpmZ",
        bottom: "PostShimmer_bottom__ajW_P",
      };
    },
    54301: function (e) {
      e.exports = {
        root: "SearchHistoryPage_root__Wbvyf",
        title: "SearchHistoryPage_title__gnJuo",
        header: "SearchHistoryPage_header__YdTG5",
        scrollContainer: "SearchHistoryPage_scrollContainer__ScAez",
        scrollContent: "SearchHistoryPage_scrollContent__5AXWC",
        content: "SearchHistoryPage_content__iPgVO",
        desktopItem: "SearchHistoryPage_desktopItem__Xv9C_",
        items: "SearchHistoryPage_items___okS8",
        emptyHistory: "SearchHistoryPage_emptyHistory__gzfUu",
      };
    },
    16894: function (e) {
      e.exports = {
        header: "SearchPage_header__BOkdn",
        root: "SearchPage_root__i7sE0",
        root_showFilters: "SearchPage_root_showFilters__reB44",
        input: "SearchPage_input__TSbxK",
        content: "SearchPage_content__ycqK5",
        scrollableContent: "SearchPage_scrollableContent__gzoBu",
        main: "SearchPage_main__FV4Cr",
        main_empty: "SearchPage_main_empty__G954C",
        tabCarousel: "SearchPage_tabCarousel__9cWOl",
        filter: "SearchPage_filter__5xzTL",
        filter_selected: "SearchPage_filter_selected__FOfyJ",
        compilations: "SearchPage_compilations__52N9u",
        footer: "SearchPage_footer__20bvg",
      };
    },
    3537: function (e) {
      e.exports = {
        root: "TagPage_root__EWN9A",
        scrollContainer: "TagPage_scrollContainer__lvG_1",
        important: "TagPage_important__Jq37E",
        content: "TagPage_content__rUC_l",
        footer: "TagPage_footer__W0mZr",
        item: "TagPage_item__X_lW7",
      };
    },
    63548: function (e) {
      e.exports = {
        root: "LastEpisodes_root__4JPKj",
        blockHeader: "LastEpisodes_blockHeader__se7bd",
        shimmerItem: "LastEpisodes_shimmerItem__Iirx5",
      };
    },
    67085: function (e) {
      e.exports = {
        carouselBlock: "MixesCarousel_carouselBlock__ZpMU2",
        carouselHeader: "MixesCarousel_carouselHeader__6mMHX",
        mixItem: "MixesCarousel_mixItem__YNSsB",
      };
    },
    54672: function (e) {
      e.exports = {
        mixesTitle: "MixesGrid_mixesTitle__QawnL",
        mixesGrid: "MixesGrid_mixesGrid__uZQtt",
      };
    },
    29913: function (e) {
      e.exports = {
        root: "Navbar_root__chF4R",
        root_collapsed: "Navbar_root_collapsed__pozJX",
      };
    },
    27206: function (e) {
      e.exports = {
        root: "NavbarDesktop_root__scYzp",
        collapseButton: "NavbarDesktop_collapseButton__XQh9d",
        important: "NavbarDesktop_important__fRfE5",
        navigation: "NavbarDesktop_navigation__dLUGW",
        navigation_withoutPins: "NavbarDesktop_navigation_withoutPins__SHInZ",
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
        user: "NavbarDesktop_user__dzbuH",
        userMeta_animate: "NavbarDesktop_userMeta_animate__3KkeR",
        userMeta_collapsed: "NavbarDesktop_userMeta_collapsed__rTdFz",
      };
    },
    12484: function (e) {
      e.exports = {
        root: "NavbarMobile_root__NhKBQ",
        user: "NavbarMobile_user__vTEb2",
      };
    },
    53724: function (e) {
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
    93088: function (e) {
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
    13774: function (e) {
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
    95431: function (e) {
      e.exports = {
        root: "SearchPlaylistInput_root__o14iM",
        content: "SearchPlaylistInput_content__iDyfU",
        catalog: "SearchPlaylistInput_catalog__5r6Xm",
        catalog_withTracks: "SearchPlaylistInput_catalog_withTracks__B2ZYF",
        track: "SearchPlaylistInput_track__2TGLS",
        shimmerItem: "SearchPlaylistInput_shimmerItem__V0cOt",
        emptyBlockContainer: "SearchPlaylistInput_emptyBlockContainer__NSQKG",
        disappearingTrack: "SearchPlaylistInput_disappearingTrack__D6ja5",
        disappearing: "SearchPlaylistInput_disappearing__w48Cd",
        appearingTrack: "SearchPlaylistInput_appearingTrack__CYHzN",
        appearing: "SearchPlaylistInput_appearing__SafaE",
      };
    },
    14346: function (e) {
      e.exports = {
        root: "MixedEntitiesBlock_root__Zs8l2",
        controls: "MixedEntitiesBlock_controls__mOhq7",
        columns: "MixedEntitiesBlock_columns__6YlqL",
        columns_one: "MixedEntitiesBlock_columns_one__pVHXi",
        columns_two: "MixedEntitiesBlock_columns_two__zw6GL",
        column: "MixedEntitiesBlock_column__sHpUC",
      };
    },
    73270: function (e) {
      e.exports = { shimmer: "MixedEntitiesList_shimmer__sPCJN" };
    },
    72735: function (e) {
      e.exports = {
        buttonArrow: "MixedEntitiesListItem_buttonArrow__Emsn1",
        titleLink: "MixedEntitiesListItem_titleLink__RURfg",
        titleText: "MixedEntitiesListItem_titleText__YuRWS",
        root: "MixedEntitiesListItem_root__bHtJ6",
        root_disabled: "MixedEntitiesListItem_root_disabled__DoZ5p",
        ripple: "MixedEntitiesListItem_ripple__uW_0P",
        playButtonCell: "MixedEntitiesListItem_playButtonCell__OlVV0",
        controlsBarCell: "MixedEntitiesListItem_controlsBarCell__J78Qc",
        text: "MixedEntitiesListItem_text__RM5Qh",
      };
    },
    53594: function (e) {
      e.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "SearchColumnMeta_root__AlBTs",
        root_disabled: "SearchColumnMeta_root_disabled__YIvnw",
        albumLink: "SearchColumnMeta_albumLink__kWgmo",
        artistCaption: "SearchColumnMeta_artistCaption__aP_ij",
        artistLink: "SearchColumnMeta_artistLink__2NVDf",
        description: "SearchColumnMeta_description__55wxv",
        explicitMark: "SearchColumnMeta_explicitMark__njTQl",
        title: "SearchColumnMeta_title__TRQrJ",
        titleContainer: "SearchColumnMeta_titleContainer__0sj5A",
        version: "SearchColumnMeta_version__dv3CA",
        root_disliked: "SearchColumnMeta_root_disliked__e46E6",
        title_withVersion: "SearchColumnMeta_title_withVersion__t3g1H",
        text: "SearchColumnMeta_text__SsWM7",
      };
    },
    10809: function (e) {
      e.exports = {
        root: "SearchColumnShimmer_root__PDf3Y",
        infoContainer: "SearchColumnShimmer_infoContainer__cQ8_H",
        textContainer: "SearchColumnShimmer_textContainer__IekgL",
        title: "SearchColumnShimmer_title__IorPg",
        description: "SearchColumnShimmer_description__nNupy",
        cover: "SearchColumnShimmer_cover__58jV8",
        action: "SearchColumnShimmer_action__JbJGl",
      };
    },
    43312: function (e) {
      e.exports = {
        root: "SearchCorrectedText_root__ZM2f2",
        link: "SearchCorrectedText_link__eORMG",
        text: "SearchCorrectedText_text__HKgvL",
      };
    },
    24435: function (e) {
      e.exports = {
        root: "SearchEmpty_root__Yz53B",
        container: "SearchEmpty_container__6WP_o",
        content: "SearchEmpty_content__OdVMa",
        correctedTextBlock: "SearchEmpty_correctedTextBlock__wR4Hh",
        icon: "SearchEmpty_icon__NYKMM",
        title: "SearchEmpty_title__C77x5",
        subtitle: "SearchEmpty_subtitle__2TlGa",
        footer: "SearchEmpty_footer__WP03G",
      };
    },
    24528: function (e) {
      e.exports = {
        root: "SearchEntitiesGrid_root__kk0fO",
        container: "SearchEntitiesGrid_container__zFcDu",
        content: "SearchEntitiesGrid_content__8SAwu",
        correctedTextBlock: "SearchEntitiesGrid_correctedTextBlock__4j4cD",
        items: "SearchEntitiesGrid_items__RrGDy",
        footer: "SearchEntitiesGrid_footer__NK1iL",
      };
    },
    11894: function (e) {
      e.exports = {
        root: "SearchHistoryBlockDesktop_root__jKICZ",
        controls: "SearchHistoryBlockDesktop_controls__5JPBt",
        header: "SearchHistoryBlockDesktop_header__zOALK",
        clearButton: "SearchHistoryBlockDesktop_clearButton__kN4Nk",
        content: "SearchHistoryBlockDesktop_content__doQsC",
      };
    },
    95020: function (e) {
      e.exports = {
        button: "SearchHistoryBlockMobile_button__Wh_Q6",
        header: "SearchHistoryBlockMobile_header__Lx4On",
        mixedEntitiesBlock:
          "SearchHistoryBlockMobile_mixedEntitiesBlock__cJ3o_",
        buttonContainer: "SearchHistoryBlockMobile_buttonContainer__IppED",
      };
    },
    86134: function (e) {
      e.exports = {
        root: "SearchMixed_root__RR4QT",
        container: "SearchMixed_container__KIfE1",
        correctedTextBlock: "SearchMixed_correctedTextBlock___1rfE",
        block: "SearchMixed_block__SasiH",
        blockCarousel: "SearchMixed_blockCarousel__IQjJA",
        blockHeader: "SearchMixed_blockHeader__L0FSh",
        footer: "SearchMixed_footer__INQFP",
      };
    },
    79123: function (e) {
      e.exports = {
        root: "SearchTrackList_root__pSSfZ",
        container: "SearchTrackList_container__Bww_R",
        shimmer: "SearchTrackList_shimmer__L9t1x",
        correctedTextBlock: "SearchTrackList_correctedTextBlock__w5t0t",
        items: "SearchTrackList_items__VucVX",
        footer: "SearchTrackList_footer__M70p4",
      };
    },
    26365: function (e) {
      e.exports = { root: "Trailer_root__c8eG3" };
    },
    42762: function (e) {
      e.exports = {
        root: "TrailerModal_root__T4ZJ8",
        content: "TrailerModal_content__GsiAg",
        important: "TrailerModal_important__WM9wy",
        overlay: "TrailerModal_overlay__D9vRl",
      };
    },
    4910: function (e) {
      e.exports = {
        root: "PlayButton_root__nYKdN",
        root_isLoading: "PlayButton_root_isLoading__925Sa",
        "applying-setting": "PlayButton_applying-setting__3nbT9",
        icon: "PlayButton_icon__t_THQ",
        icon_pauseVibe: "PlayButton_icon_pauseVibe__Ogg_U",
        icon_playVibe: "PlayButton_icon_playVibe__BKPRh",
      };
    },
    63112: function (e) {
      e.exports = {
        root: "VibeBlock_root__z7LtR",
        vibeAnimation: "VibeBlock_vibeAnimation__XVEE6",
        controls: "VibeBlock_controls__BpDFL",
        settingsButton: "VibeBlock_settingsButton__GeMtO",
      };
    },
    13095: function (e) {
      e.exports = {
        root: "VibeContext_root__dbiNv",
        context: "VibeContext_context__Z_82k",
        pinButton: "VibeContext_pinButton__b6SNF",
        resetButton: "VibeContext_resetButton__9KK4S",
      };
    },
    29765: function (e, t, a) {
      "use strict";
      a.d(t, {
        Tb: function () {
          return d;
        },
        yC: function () {
          return o;
        },
        nJ: function () {
          return r;
        },
        sd: function () {
          return y;
        },
        $J: function () {
          return x;
        },
        Ez: function () {
          return E;
        },
      });
      var n,
        i,
        r,
        o,
        l = a(36019);
      async function s(e) {
        let { secretKey: t, data: a } = e,
          n = new TextEncoder(),
          i = n.encode(t);
        return crypto.subtle
          .importKey(
            "raw",
            i,
            { name: "HMAC", hash: { name: "SHA-256" } },
            !0,
            ["sign", "verify"],
          )
          .then(async (e) => {
            let t = n.encode(a);
            return crypto.subtle.sign("HMAC", e, t).then((e) => {
              let t = new Uint8Array(e),
                a = btoa(String.fromCharCode(...t));
              return a.slice(0, -1);
            });
          });
      }
      function c() {
        return Math.floor(Date.now() / 1e3);
      }
      var u = a(83993);
      class d extends u.y {
        name = "DownloadInfoMediaProviderException";
        constructor(
          e,
          { code: t = "E_DOWNLOADINFO_MEDIA_PROVIDER", ...a } = {},
        ) {
          super(e, { code: t, ...a }), Object.setPrototypeOf(this, d.prototype);
        }
      }
      let m = {
        lossless: [{ codec: l.V9.FLAC, bitrateInKbps: 0 }],
        hq: [{ codec: l.V9.MP3, bitrateInKbps: 320 }],
        nq: [
          { codec: l.V9.AAC, bitrateInKbps: 128 },
          { codec: l.V9.MP3, bitrateInKbps: 192 },
        ],
        lq: [
          { codec: l.V9.AAC, bitrateInKbps: 128 },
          { codec: l.V9.MP3, bitrateInKbps: 192 },
        ],
        preview: [{ codec: l.V9.MP3, bitrateInKbps: 128 }],
      };
      class g {
        secretKey;
        resource;
        mediaConfigController;
        constructor(e) {
          let {
            httpClient: t,
            resourceConfig: a,
            secretKey: n,
            mediaConfigController: i,
          } = e;
          (this.resource = new l.HZ(t, {
            params: a.params,
            gateway: a.gateway,
            overembed: a.overembed,
            externalDomain: a.externalDomain,
            retryPolicyConfig: a.retryPolicyConfig,
            timeouts: a.timeouts,
          })),
            (this.mediaConfigController = i),
            (this.secretKey = n);
        }
        getMediaSource(e) {
          return new Promise((t, a) => {
            let {
                entity: {
                  data: {
                    meta: { id: n },
                  },
                },
              } = e,
              i = c();
            s({ secretKey: this.secretKey, data: `${i}${n}` })
              .then((e) => {
                this.resource
                  .getStorageData({
                    trackId: String(n),
                    sign: e,
                    tsInSeconds: i,
                    canUseStreaming: !1,
                    direct: !1,
                    requireMp3Link: !1,
                    isAliceRequester: !1,
                    preview:
                      this.mediaConfigController.qualityConfig.preview.value,
                  })
                  .then((e) => {
                    let i = (function (e, t) {
                      if (t.preview.value && e[0]) return e[0];
                      let a = e.find((e) =>
                          m.lossless.find((t) => e.codec === t.codec),
                        ),
                        n = e.find((e) =>
                          m.hq.find(
                            (t) =>
                              e.codec === t.codec &&
                              e.bitrateInKbps === t.bitrateInKbps,
                          ),
                        ),
                        i = e.find((e) =>
                          m.nq.find(
                            (t) =>
                              e.codec === t.codec &&
                              e.bitrateInKbps === t.bitrateInKbps,
                          ),
                        );
                      return t.lossless.value && a
                        ? a
                        : t.hq.value && n
                          ? n
                          : (t.lq.value || t.nq.value) && i
                            ? i
                            : null;
                    })(e, this.mediaConfigController.qualityConfig);
                    null !== i
                      ? this.resource
                          .getSrcData({ storageUrl: i.downloadInfoUrl })
                          .then((e) => {
                            try {
                              let a = (function (e) {
                                let {
                                    srcData: t,
                                    secretKey: a,
                                    trackId: n,
                                  } = e,
                                  i = (function (e, t) {
                                    let a, n, i, r, o, l, s, c, u;
                                    let d = String.fromCharCode;
                                    function m(e, t) {
                                      return (e << t) | (e >>> (32 - t));
                                    }
                                    function g(e, t) {
                                      let a, n, i, r, o;
                                      return ((i = 2147483648 & e),
                                      (r = 2147483648 & t),
                                      (a = 1073741824 & e),
                                      (n = 1073741824 & t),
                                      (o = (1073741823 & e) + (1073741823 & t)),
                                      a & n)
                                        ? 2147483648 ^ o ^ i ^ r
                                        : a | n
                                          ? 1073741824 & o
                                            ? 3221225472 ^ o ^ i ^ r
                                            : 1073741824 ^ o ^ i ^ r
                                          : o ^ i ^ r;
                                    }
                                    function p(e, t, a, n, i, r, o) {
                                      return (
                                        (e = g(
                                          e,
                                          g(g((t & a) | (~t & n), i), o),
                                        )),
                                        g(m(e, r), t)
                                      );
                                    }
                                    function f(e, t, a, n, i, r, o) {
                                      return (
                                        (e = g(
                                          e,
                                          g(g((t & n) | (a & ~n), i), o),
                                        )),
                                        g(m(e, r), t)
                                      );
                                    }
                                    function v(e, t, a, n, i, r, o) {
                                      return (
                                        (e = g(e, g(g(t ^ a ^ n, i), o))),
                                        g(m(e, r), t)
                                      );
                                    }
                                    function h(e, t, a, n, i, r, o) {
                                      return (
                                        (e = g(e, g(g(a ^ (t | ~n), i), o))),
                                        g(m(e, r), t)
                                      );
                                    }
                                    function b(e) {
                                      let t = "",
                                        a = "",
                                        n;
                                      for (n = 0; n <= 3; n++)
                                        t +=
                                          (a = `0${((e >>> (8 * n)) & 255).toString(16)}`).substr(
                                            a.length - 2,
                                            2,
                                          );
                                      return t;
                                    }
                                    let y = [];
                                    for (
                                      a = 0,
                                        y = (function (e) {
                                          let t;
                                          let a = e.length,
                                            n = a + 8,
                                            i = ((n - (n % 64)) / 64 + 1) * 16,
                                            r = Array(i - 1),
                                            o = 0,
                                            l = 0;
                                          for (; l < a; )
                                            (t = (l - (l % 4)) / 4),
                                              (o = (l % 4) * 8),
                                              (r[t] =
                                                r[t] | (e.charCodeAt(l) << o)),
                                              l++;
                                          return (
                                            (t = (l - (l % 4)) / 4),
                                            (o = (l % 4) * 8),
                                            (r[t] = r[t] | (128 << o)),
                                            (r[i - 2] = a << 3),
                                            (r[i - 1] = a >>> 29),
                                            r
                                          );
                                        })(
                                          (e = (function (e) {
                                            e = t + e.replace(/\r\n/g, "\n");
                                            let a = "";
                                            for (let t = 0; t < e.length; t++) {
                                              let n = e.charCodeAt(t);
                                              n < 128
                                                ? (a += d(n))
                                                : n > 127 && n < 2048
                                                  ? (a +=
                                                      d((n >> 6) | 192) +
                                                      d((63 & n) | 128))
                                                  : (a +=
                                                      d((n >> 12) | 224) +
                                                      d(((n >> 6) & 63) | 128) +
                                                      d((63 & n) | 128));
                                            }
                                            return a;
                                          })(e)),
                                        ),
                                        l = 1732584193,
                                        s = 4023233417,
                                        c = 2562383102,
                                        u = 271733878;
                                      a < y.length;
                                      a += 16
                                    )
                                      (n = l),
                                        (i = s),
                                        (r = c),
                                        (o = u),
                                        (l = p(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 0],
                                          7,
                                          3614090360,
                                        )),
                                        (u = p(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 1],
                                          12,
                                          3905402710,
                                        )),
                                        (c = p(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 2],
                                          17,
                                          606105819,
                                        )),
                                        (s = p(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 3],
                                          22,
                                          3250441966,
                                        )),
                                        (l = p(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 4],
                                          7,
                                          4118548399,
                                        )),
                                        (u = p(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 5],
                                          12,
                                          1200080426,
                                        )),
                                        (c = p(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 6],
                                          17,
                                          2821735955,
                                        )),
                                        (s = p(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 7],
                                          22,
                                          4249261313,
                                        )),
                                        (l = p(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 8],
                                          7,
                                          1770035416,
                                        )),
                                        (u = p(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 9],
                                          12,
                                          2336552879,
                                        )),
                                        (c = p(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 10],
                                          17,
                                          4294925233,
                                        )),
                                        (s = p(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 11],
                                          22,
                                          2304563134,
                                        )),
                                        (l = p(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 12],
                                          7,
                                          1804603682,
                                        )),
                                        (u = p(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 13],
                                          12,
                                          4254626195,
                                        )),
                                        (c = p(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 14],
                                          17,
                                          2792965006,
                                        )),
                                        (s = p(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 15],
                                          22,
                                          1236535329,
                                        )),
                                        (l = f(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 1],
                                          5,
                                          4129170786,
                                        )),
                                        (u = f(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 6],
                                          9,
                                          3225465664,
                                        )),
                                        (c = f(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 11],
                                          14,
                                          643717713,
                                        )),
                                        (s = f(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 0],
                                          20,
                                          3921069994,
                                        )),
                                        (l = f(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 5],
                                          5,
                                          3593408605,
                                        )),
                                        (u = f(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 10],
                                          9,
                                          38016083,
                                        )),
                                        (c = f(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 15],
                                          14,
                                          3634488961,
                                        )),
                                        (s = f(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 4],
                                          20,
                                          3889429448,
                                        )),
                                        (l = f(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 9],
                                          5,
                                          568446438,
                                        )),
                                        (u = f(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 14],
                                          9,
                                          3275163606,
                                        )),
                                        (c = f(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 3],
                                          14,
                                          4107603335,
                                        )),
                                        (s = f(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 8],
                                          20,
                                          1163531501,
                                        )),
                                        (l = f(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 13],
                                          5,
                                          2850285829,
                                        )),
                                        (u = f(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 2],
                                          9,
                                          4243563512,
                                        )),
                                        (c = f(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 7],
                                          14,
                                          1735328473,
                                        )),
                                        (s = f(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 12],
                                          20,
                                          2368359562,
                                        )),
                                        (l = v(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 5],
                                          4,
                                          4294588738,
                                        )),
                                        (u = v(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 8],
                                          11,
                                          2272392833,
                                        )),
                                        (c = v(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 11],
                                          16,
                                          1839030562,
                                        )),
                                        (s = v(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 14],
                                          23,
                                          4259657740,
                                        )),
                                        (l = v(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 1],
                                          4,
                                          2763975236,
                                        )),
                                        (u = v(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 4],
                                          11,
                                          1272893353,
                                        )),
                                        (c = v(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 7],
                                          16,
                                          4139469664,
                                        )),
                                        (s = v(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 10],
                                          23,
                                          3200236656,
                                        )),
                                        (l = v(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 13],
                                          4,
                                          681279174,
                                        )),
                                        (u = v(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 0],
                                          11,
                                          3936430074,
                                        )),
                                        (c = v(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 3],
                                          16,
                                          3572445317,
                                        )),
                                        (s = v(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 6],
                                          23,
                                          76029189,
                                        )),
                                        (l = v(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 9],
                                          4,
                                          3654602809,
                                        )),
                                        (u = v(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 12],
                                          11,
                                          3873151461,
                                        )),
                                        (c = v(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 15],
                                          16,
                                          530742520,
                                        )),
                                        (s = v(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 2],
                                          23,
                                          3299628645,
                                        )),
                                        (l = h(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 0],
                                          6,
                                          4096336452,
                                        )),
                                        (u = h(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 7],
                                          10,
                                          1126891415,
                                        )),
                                        (c = h(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 14],
                                          15,
                                          2878612391,
                                        )),
                                        (s = h(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 5],
                                          21,
                                          4237533241,
                                        )),
                                        (l = h(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 12],
                                          6,
                                          1700485571,
                                        )),
                                        (u = h(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 3],
                                          10,
                                          2399980690,
                                        )),
                                        (c = h(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 10],
                                          15,
                                          4293915773,
                                        )),
                                        (s = h(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 1],
                                          21,
                                          2240044497,
                                        )),
                                        (l = h(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 8],
                                          6,
                                          1873313359,
                                        )),
                                        (u = h(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 15],
                                          10,
                                          4264355552,
                                        )),
                                        (c = h(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 6],
                                          15,
                                          2734768916,
                                        )),
                                        (s = h(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 13],
                                          21,
                                          1309151649,
                                        )),
                                        (l = h(
                                          l,
                                          s,
                                          c,
                                          u,
                                          y[a + 4],
                                          6,
                                          4149444226,
                                        )),
                                        (u = h(
                                          u,
                                          l,
                                          s,
                                          c,
                                          y[a + 11],
                                          10,
                                          3174756917,
                                        )),
                                        (c = h(
                                          c,
                                          u,
                                          l,
                                          s,
                                          y[a + 2],
                                          15,
                                          718787259,
                                        )),
                                        (s = h(
                                          s,
                                          c,
                                          u,
                                          l,
                                          y[a + 9],
                                          21,
                                          3951481745,
                                        )),
                                        (l = g(l, n)),
                                        (s = g(s, i)),
                                        (c = g(c, r)),
                                        (u = g(u, o));
                                    let _ = b(l) + b(s) + b(c) + b(u);
                                    return _.toLowerCase();
                                  })(t.path.substr(1) + t.s, a),
                                  r = `/get-mp3/${i}/${t.ts}${t.path}?track-id=${n}&play=false`;
                                return `https://${t.host}${r}`;
                              })({
                                trackId: n,
                                srcData: e,
                                secretKey: this.secretKey,
                              });
                              t(a);
                            } catch (t) {
                              let e = t;
                              t instanceof Error &&
                                (e = {
                                  name: t.name,
                                  message: t.message,
                                  stack: t.stack,
                                  cause: t.cause,
                                }),
                                a(
                                  new d("Failed to create src link", {
                                    code: "E_CREATE_SRC_LINK",
                                    cause: e,
                                    data: { trackId: n },
                                  }),
                                );
                            }
                          })
                          .catch((e) => {
                            a(
                              new d("Failed to get src data", {
                                code: "E_GET_SRC_DATA",
                                cause: e,
                                data: { trackId: n },
                              }),
                            );
                          })
                      : a(
                          new d("No storage url for entity", {
                            code: "E_NO_STORAGE_URL",
                          }),
                        );
                  })
                  .catch((e) => {
                    a(
                      new d("Failed to get storage data", {
                        code: "E_GET_STORAGE_DATA",
                        cause: e,
                        data: { trackId: n },
                      }),
                    );
                  });
              })
              .catch((e) => {
                let t = e;
                e instanceof Error &&
                  (t = {
                    name: e.name,
                    message: e.message,
                    stack: e.stack,
                    cause: e.cause,
                  }),
                  a(
                    new d("Failed to create sign", {
                      code: "E_CREATE_SIGN",
                      cause: t,
                      data: { trackId: n },
                    }),
                  );
              });
          });
        }
      }
      ((n = r || (r = {})).HQ_PLUS = "hqPlus"),
        (n.HQ = "hq"),
        (n.NQ = "nq"),
        (n.LQ = "lq"),
        (n.PREVIEW = "preview");
      class p extends u.y {
        name = "GetFileInfoMediaProviderException";
        constructor(
          e,
          { code: t = "E_GET_FILE_INFO_MEDIA_PROVIDER", ...a } = {},
        ) {
          super(e, { code: t, ...a }), Object.setPrototypeOf(this, p.prototype);
        }
      }
      class f {
        secretKey;
        resource;
        mediaConfigController;
        transport;
        constructor(e) {
          let {
            httpClient: t,
            resourceConfig: a,
            secretKey: n,
            mediaConfigController: i,
            transport: r,
          } = e;
          (this.resource = new l.dF(t, {
            params: a.params,
            gateway: a.gateway,
          })),
            (this.secretKey = n),
            (this.mediaConfigController = i),
            (this.transport = r);
        }
        getMediaSource(e) {
          let t;
          let a = c(),
            n = (function (e) {
              let t = l.nJ.NQ;
              switch (e) {
                case r.HQ_PLUS:
                  t = l.nJ.LOSSLESS;
                  break;
                case r.HQ:
                  t = l.nJ.HQ;
                  break;
                case r.NQ:
                case r.LQ:
                  t = l.nJ.NQ;
                  break;
                case r.PREVIEW:
                  t = l.nJ.PREVIEW;
              }
              return t;
            })(this.mediaConfigController.quality.value),
            { concatedCodecs: i, arrayOfCodecs: o } =
              ((t = {
                concatedCodecs: `${l.V9.AAC}${l.V9.MP3}`,
                arrayOfCodecs: [l.V9.AAC, l.V9.MP3],
              }),
              n === l.nJ.LOSSLESS &&
                (t = {
                  concatedCodecs: `${l.V9.FLAC}${l.V9.AAC}${l.V9.MP3}`,
                  arrayOfCodecs: [l.V9.FLAC, l.V9.AAC, l.V9.MP3],
                }),
              t),
            u = `${a}${e.entity.data.meta.id}${n}${i}${this.transport}`;
          return new Promise((t, r) => {
            s({ data: u, secretKey: this.secretKey })
              .then((l) =>
                this.resource
                  .getFileInfo({
                    tsInSeconds: a,
                    trackId: e.entity.data.meta.id,
                    quality: n,
                    codecs: o,
                    transports: [this.transport],
                    sign: l,
                  })
                  .then((e) => {
                    if (!e.downloadInfo.urls?.[0])
                      throw Error("An empty array of URLs has been received");
                    t(e.downloadInfo.urls[0]);
                  })
                  .catch((t) => {
                    let a = t;
                    t instanceof Error &&
                      (a = {
                        name: t.name,
                        message: t.message,
                        stack: t.stack,
                        cause: t.cause,
                      }),
                      r(
                        new p("An empty array of URLs has been received", {
                          code: "E_EMPTY_URLS",
                          cause: a,
                          data: {
                            trackId: e.entity.data.meta.id,
                            quality: n,
                            codecs: i,
                          },
                        }),
                      );
                  }),
              )
              .catch((t) => {
                let a = t;
                t instanceof Error &&
                  (a = {
                    name: t.name,
                    message: t.message,
                    stack: t.stack,
                    cause: t.cause,
                  }),
                  r(
                    new p("Failed to create sign", {
                      code: "E_CREATE_SIGN",
                      cause: a,
                      data: {
                        trackId: e.entity.data.meta.id,
                        quality: n,
                        codecs: i,
                      },
                    }),
                  );
              });
          });
        }
      }
      var v = a(84140);
      class h extends u.y {
        name = "YaMusicEntityProviderException";
        constructor(e, { code: t = "E_YAMUSIC_ENTITY_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }), Object.setPrototypeOf(this, h.prototype);
        }
      }
      var b = a(71440);
      class y {
        resource;
        constructor(e) {
          let { httpClient: t, config: a } = e;
          this.resource = new l.HZ(t, {
            params: a.params,
            gateway: a.gateway,
            retryPolicyConfig: a.retryPolicyConfig,
            timeouts: a.timeouts,
          });
        }
        async loadEntities(e) {
          let t = e.map(({ context: e, entity: t }) =>
            (0, b.m3)(e)
              ? `${t.data.meta.id}:${e.data.meta.id}`
              : (0, b.KT)(e) && "albumId" in t.data.meta && t.data.meta.albumId
                ? `${t.data.meta.id}:${t.data.meta.albumId}`
                : t.data.meta.id,
          );
          return this.resource
            .getTracksMeta({ trackIds: t, withProgress: !0 })
            .then((e) => {
              let t = [];
              for (let a of e) t.push({ type: v.A4.Unknown, meta: a });
              return t;
            })
            .catch((e) => {
              throw new h("Failed to get entities meta", { cause: e });
            });
        }
      }
      var _ = a(87025);
      class x {
        qualityConfig = {
          lossless: new _.w(!1),
          hq: new _.w(!0),
          nq: new _.w(!0),
          lq: new _.w(!0),
          preview: new _.w(!0),
        };
        quality = new _.w(r.HQ);
        constructor(e) {
          this.setQuality(e);
        }
        setQuality(e) {
          switch (e) {
            case r.HQ_PLUS:
              (this.qualityConfig.lossless.value = !0),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = r.HQ_PLUS);
              break;
            case r.HQ:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = r.HQ);
              break;
            case r.NQ:
            case r.LQ:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = r.NQ);
              break;
            case r.PREVIEW:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !1),
                (this.qualityConfig.lq.value = !1),
                (this.qualityConfig.preview.value = !0),
                (this.quality.value = r.PREVIEW);
          }
        }
      }
      ((i = o || (o = {})).DOWNLOAD_INFO_PROVIDER = "downloadInfoProvider"),
        (i.GET_FILE_INFO_PROVIDER = "getFileInfoProvider");
      class S extends u.y {
        name = "GenerativeMediaProviderException";
        constructor(e, { code: t = "E_GENERATIVE_MEDIA_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }), Object.setPrototypeOf(this, S.prototype);
        }
      }
      class C {
        async getMediaSource(e) {
          return (0, v.OX)(e.entity)
            ? this.getGenerativeSrc(e.entity.data)
            : new Promise((e, t) => {
                t(
                  new S("Provided entity is not generative entity", {
                    code: "E_NOT_GENERATIVE_NETITY",
                  }),
                );
              });
        }
        async getGenerativeSrc(e) {
          return new Promise((t, a) => {
            e.meta.stream?.url
              ? t(e.meta.stream.url)
              : a(
                  new S("Failed to create generative src link", {
                    code: "E_CREATE_GENERATIVE_SRC_LINK",
                  }),
                );
          });
        }
      }
      class E {
        params;
        mediaProvider;
        generaiveMediaProvider;
        constructor(e) {
          switch (((this.params = e), e.type)) {
            case o.DOWNLOAD_INFO_PROVIDER:
              this.mediaProvider = new g(e.providerParams);
              break;
            case o.GET_FILE_INFO_PROVIDER:
              this.mediaProvider = new f(e.providerParams);
          }
          this.generaiveMediaProvider = new C();
        }
        async getMediaSource(e) {
          return (0, v.OX)(e.entity)
            ? this.generaiveMediaProvider.getMediaSource(e)
            : this.mediaProvider.getMediaSource(e);
        }
      }
    },
  },
]);

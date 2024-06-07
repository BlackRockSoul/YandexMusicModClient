(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7454],
  {
    46924: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          PlaylistNotFoundPage: function () {
            return r;
          },
        });
      var i = t(8759),
        l = t(33423),
        s = t(2365);
      let r = (0, l.Pi)(() => (0, i.jsx)(s.T, {}));
    },
    49773: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          PlaylistPage: function () {
            return U;
          },
        });
      var i = t(8759),
        l = t(35338),
        s = t(33423),
        r = t(11769),
        n = t(99616),
        o = t(65244),
        d = t(27287),
        c = t(48157),
        u = t(79765),
        m = t(2814),
        g = t(9227),
        p = t(1918),
        y = t(20210),
        v = t(95539),
        P = t(3515),
        h = t(84133),
        _ = t(44285),
        k = t(71440);
      let x = (e, a) => {
        let t = e.id,
          i = e.albumId;
        return {
          contextData: {
            type: k.Ak.Various,
            meta: { id: i ? "".concat(t, ":").concat(i) : t },
            from: a,
          },
          queueParams: { index: 0 },
          loadContextMeta: !0,
        };
      };
      var I = t(95431),
        S = t.n(I);
      let C = (0, s.Pi)((e) => {
        var a, t, s, r, d, c, k;
        let { autoFocus: I, onChange: C, className: L } = e,
          { formatMessage: f } = (0, o.Z)(),
          [T, D] = (0, n.useState)(""),
          { playlist: b } = (0, h.oR)(),
          N = null == b ? void 0 : b.searchItems,
          j = (0, v.Wc)(),
          E = (0, n.useRef)(0),
          A = (null === (a = b.meta) || void 0 === a ? void 0 : a.isOwnPlaylist)
            ? h.Rh.OWN_PLAYLISTS
            : h.Rh.PLAYLIST,
          B = (0, h.x5)({ pageId: A, blockId: h.aU.FILTERED }),
          R = (0, h.x5)({ pageId: A, blockId: h.aU.SUGGESTED }),
          [w, W] = (0, n.useState)(!1);
        (0, n.useEffect)(
          () => () => {
            window.clearTimeout(E.current), null == C || C(!1);
          },
          [C],
        );
        let M = (0, n.useMemo)(
            () =>
              (0, u.Z)((e) => {
                let a = e.trim();
                D(a),
                  a &&
                    (null == b ? void 0 : b.meta) &&
                    (b.resetSearch(),
                    b.getSearchTracks({
                      uid: b.meta.uid,
                      kind: b.meta.kind,
                      part: a,
                    })),
                  (!a || 0 === a.length) && w && (W(!1), b.refresh()),
                  null == C || C(!!a.length);
              }, 100),
            [b, w, C],
          ),
          O = (0, n.useCallback)(
            async (e) => {
              if (b.meta) {
                N.setAdditionTrackAnimation(e.id);
                let a = j({
                    track: e,
                    playlist: b.meta,
                    withSuccessNotification: !1,
                    withPageRefresh: !1,
                  }),
                  t = new Promise((e) => {
                    E.current = window.setTimeout(e, 300);
                  }),
                  [i] = await Promise.all([a, t]);
                i === P.pX.OK
                  ? (N.replaceAdditionTrackInProggress(), W(!0))
                  : N.resetAdditionTrackAnimation();
              }
            },
            [j, b.meta, N],
          ),
          Y = (0, n.useMemo)(() => {
            var e;
            return b.isSearchLoading
              ? (0, i.jsx)(_.DX, {
                  className: S().shimmerItem,
                  variant: h.Lx.PLAYLIST,
                })
              : null == N
                ? void 0
                : null === (e = N.playlistTracks) || void 0 === e
                  ? void 0
                  : e.map((e) =>
                      e
                        ? (0, i.jsx)(
                            v.O2,
                            {
                              className: (0, l.W)(S().track, {
                                [S().appearingTrack]:
                                  e.id === N.additionTrackInProggress,
                              }),
                              track: e,
                              playContextParams: x(e, B),
                              shouldCheckSelfIndex: !1,
                            },
                            e.id,
                          )
                        : null,
                    );
          }, [
            b.isSearchLoading,
            null == N ? void 0 : N.playlistTracks,
            N.additionTrackInProggress,
            B,
          ]),
          F = (0, n.useMemo)(() => {
            var e, a;
            return (
              null === (e = b.meta) || void 0 === e ? void 0 : e.canUserChange
            )
              ? b.isSearchLoading
                ? (0, i.jsx)(_.DX, {
                    className: S().shimmerItem,
                    variant: h.Lx.PLAYLIST,
                  })
                : null == N
                  ? void 0
                  : null === (a = N.suggestedTracks) || void 0 === a
                    ? void 0
                    : a.map((e) =>
                        e
                          ? (0, i.jsx)(
                              v.VZ,
                              {
                                track: e,
                                className: (0, l.W)({
                                  [S().disappearingTrack]:
                                    e.id === N.additionTrackInProggress,
                                }),
                                shouldCheckSelfIndex: !1,
                                playContextParams: x(e, R),
                                onClick: O,
                              },
                              e.id,
                            )
                          : null,
                      )
              : void 0;
          }, [
            null === (t = b.meta) || void 0 === t ? void 0 : t.canUserChange,
            b.isSearchLoading,
            null == N ? void 0 : N.suggestedTracks,
            N.additionTrackInProggress,
            R,
            O,
          ]),
          K = (0, n.useMemo)(() => {
            var e, a;
            return (null == N
              ? void 0
              : null === (e = N.playlistTrackIds) || void 0 === e
                ? void 0
                : e.length) ||
              (null == N
                ? void 0
                : null === (a = N.suggestedTracks) || void 0 === a
                  ? void 0
                  : a.length) ||
              b.isSearchLoading
              ? null
              : (0, i.jsx)(y.vY, {
                  className: S().emptyBlockContainer,
                  isEmptySearch: !0,
                });
          }, [
            null == N
              ? void 0
              : null === (s = N.playlistTrackIds) || void 0 === s
                ? void 0
                : s.length,
            null == N
              ? void 0
              : null === (r = N.suggestedTracks) || void 0 === r
                ? void 0
                : r.length,
            b.isSearchLoading,
          ]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(g.M, {
              className: (0, l.W)(S().root, L),
              autoFocus: I,
              initialValue: T,
              correctedValue: null,
              placeholder: f({ id: "search.track-placeholder" }),
              onChange: M,
              resetButtonAriaLabel: f({
                id: "interface-actions.reset-search-input",
              }),
              onResetClick: b.resetSearch,
            }),
            T &&
              (0, i.jsxs)("div", {
                className: S().content,
                children: [
                  K,
                  Y,
                  Number(
                    null == N
                      ? void 0
                      : null === (d = N.suggestedTracks) || void 0 === d
                        ? void 0
                        : d.length,
                  ) > 0 &&
                    (null === (c = b.meta) || void 0 === c
                      ? void 0
                      : c.canUserChange) &&
                    (0, i.jsx)(
                      p.Caption,
                      {
                        variant: "div",
                        type: "text",
                        size: "s",
                        weight: "medium",
                        className: (0, l.W)(S().catalog, {
                          [S().catalog_withTracks]:
                            null == N
                              ? void 0
                              : null === (k = N.playlistTrackIds) ||
                                  void 0 === k
                                ? void 0
                                : k.length,
                        }),
                        children: (0, i.jsx)(m.Z, {
                          id: "search.search-catalog",
                        }),
                      },
                      "search.search-catalog-caption",
                    ),
                  F,
                ],
              }),
          ],
        });
      });
      var L = t(13236),
        f = t(90598),
        T = t.n(f),
        D = t(3786),
        b = t(63690),
        N = t.n(b);
      let j = (0, s.Pi)(
        (0, n.forwardRef)((e, a) => {
          var t;
          let { children: s, "data-index": r, ...o } = e,
            { playlist: d } = (0, h.oR)(),
            {
              isDragging: c,
              listeners: u,
              setNodeRef: m,
              transform: g,
              transition: p,
              attributes: y,
            } = (0, D.nB)({
              id: String(
                null === (t = d.items[r]) || void 0 === t ? void 0 : t.key,
              ),
            }),
            v = (0, n.useCallback)(
              (e) => {
                m(e), "function" == typeof a && a(e);
              },
              [a, m],
            ),
            P = {
              transition: p,
              "--translate-y": g ? "".concat(Math.round(g.y), "px") : void 0,
            };
          return (0, i.jsx)("div", {
            ref: v,
            "data-index": r,
            style: P,
            ...o,
            className: N().root,
            children: (0, i.jsx)("div", {
              className: (0, l.W)(N().inner, { [N().dragging]: c }),
              ...u,
              ...y,
              children: s,
            }),
          });
        }),
      );
      var E = t(2050),
        A = t(44757),
        B = t(98786);
      let R = (e, a) => {
          var t;
          let i = a - 1;
          if (!e.items.length || i < 0 || i > e.items.length) return "";
          let l = e.items[i];
          return (
            (null == l
              ? void 0
              : null === (t = l.data) || void 0 === t
                ? void 0
                : t.title) || ""
          );
        },
        w = (e) => {
          let { formatMessage: a } = (0, o.Z)(),
            t = {
              draggable: a({ id: "drag-and-drop.playlist-move-instructions" }),
            };
          return {
            screenReaderInstructions: t,
            announcements: {
              onDragStart(t) {
                let { active: i } = t,
                  l = R(e, Number(i.id)),
                  s = i.id;
                return a(
                  { id: "drag-and-drop.playlist-on-move-start" },
                  { trackName: l, index: s },
                );
              },
              onDragOver(t) {
                let { active: i, over: l } = t,
                  s = R(e, Number(i.id));
                if (l) {
                  let e = l.id;
                  return a(
                    { id: "drag-and-drop.playlist-on-move" },
                    { trackName: s, index: e },
                  );
                }
                return a(
                  { id: "drag-and-drop.playlist-on-move-fail" },
                  { trackName: s },
                );
              },
              onDragEnd(t) {
                let { active: i, over: l } = t,
                  s = R(e, Number(i.id));
                if (l) {
                  let e = l.id;
                  return a(
                    { id: "drag-and-drop.playlist-on-move-end-with-index" },
                    { trackName: s, index: e },
                  );
                }
                return a(
                  { id: "drag-and-drop.playlist-on-move-end" },
                  { trackName: s },
                );
              },
              onDragCancel: () =>
                a({ id: "drag-and-drop.playlist-on-move-cancel" }),
            },
          };
        },
        W = (e) => {
          let { notify: a } = (0, h.d$)(),
            { formatMessage: t } = (0, o.Z)();
          return (0, n.useCallback)(
            async (l) => {
              var s, r, n, o;
              let { from: d, to: c } = l;
              if (d < 0 || c < 0 || d >= e.items.length || c >= e.items.length)
                return;
              let u = String(
                null === (s = e.items[d]) || void 0 === s ? void 0 : s.id,
              );
              if (!u) return;
              let m = (
                null === (r = e.items[d]) || void 0 === r ? void 0 : r.albumId
              )
                ? Number(
                    null === (n = e.items[d]) || void 0 === n
                      ? void 0
                      : n.albumId,
                  )
                : void 0;
              e.moveTrack(d, c);
              let g = await (null === (o = e.meta) || void 0 === o
                ? void 0
                : o.changePlaylist(
                    (0, P.PG)({
                      operation: P.aL.MOVE,
                      startPosition: d,
                      endPosition: c,
                      tracks: [{ id: u, albumId: m }],
                    }),
                  ));
              (g && g === P.pX.OK) ||
                (g === P.pX.RELOAD ? e.refresh() : e.moveTrack(c, d),
                a(
                  (0, i.jsx)(_.Q, {
                    error: t({ id: "drag-and-drop.failed-to-move" }),
                  }),
                  { containerId: h.W$.ERROR },
                ));
            },
            [t, a, e],
          );
        };
      var M = t(81711),
        O = t.n(M);
      let Y = (0, s.Pi)((e) => {
        var a, t;
        let l,
          { index: s, className: r } = e,
          { playlist: n, experiments: o, sonataState: d } = (0, h.oR)(),
          c =
            o.checkExperiment(h.pe.WebNextPlaylistAddition, "on") &&
            (null === (a = n.meta) || void 0 === a ? void 0 : a.isOwnPlaylist),
          u = (0, h.x5)({ pageId: h.Rh.PLAYLIST, blockId: h.aU.PLAYLIST }),
          m = n.items[s];
        return n.isEmptyPlaylist && c
          ? (0, i.jsx)(y.vY, { className: O().emptyBlockContainer })
          : ((l =
              m && m.data && n.meta
                ? m.data.isTrackPodcast ||
                  (null === (t = m.data.mainAlbum) || void 0 === t
                    ? void 0
                    : t.isPodcast)
                  ? (0, i.jsx)(v.N6, {
                      withPodcastName: !0,
                      track: m.data,
                      hasDuplicatesBefore: (0, P.BA)(n.items, m, s),
                      playContextParams: {
                        contextData: {
                          type: k.Ak.Playlist,
                          meta: n.contextMeta,
                          from: u,
                        },
                        entitiesData: d.unloadedEntitiesDataFromModels,
                        queueParams: { index: s },
                        loadContextMeta: !0,
                      },
                      className: r,
                    })
                  : (0, i.jsx)(v.O2, {
                      track: m.data,
                      hasDuplicatesBefore: (0, P.BA)(n.items, m, s),
                      playContextParams: {
                        contextData: {
                          type: k.Ak.Playlist,
                          meta: n.contextMeta,
                          from: u,
                        },
                        entitiesData: d.unloadedEntitiesDataFromModels,
                        queueParams: { index: s },
                        loadContextMeta: !0,
                      },
                      className: r,
                    })
                : (0, i.jsx)(_.DX, {
                    className: O().shimmerItem,
                    variant: h.Lx.PLAYLIST,
                  })),
            (0, i.jsx)(P.jK.Provider, {
              value: { playlist: n.meta, trackIndex: s },
              children: l,
            }));
      });
      var F = t(43601),
        K = t.n(F);
      let V = (0, s.Pi)((e) => {
          let { children: a, playlist: t } = e,
            { announcements: l, screenReaderInstructions: s } = w(t),
            r = W(t),
            o = (0, E.Dy)(
              (0, E.VT)(E.MA, {
                activationConstraint: { distance: { y: 1 }, tolerance: 5 },
              }),
              (0, E.VT)(E.LO, {
                activationConstraint: { delay: 250, tolerance: 5 },
              }),
              (0, E.VT)(E.Lg, {
                coordinateGetter: D.is,
                keyboardCodes: {
                  start: ["Enter"],
                  cancel: ["Escape"],
                  end: ["Enter"],
                },
              }),
            ),
            [d, c] = (0, n.useState)(null),
            u = (0, n.useCallback)((e) => {
              let { active: a } = e;
              c(a.id);
            }, []),
            m = (0, n.useCallback)(
              (e) => {
                let { active: a, over: i } = e;
                if (!a.id || !(null == i ? void 0 : i.id)) return;
                let l = t.itemsKeys.indexOf(String(a.id)),
                  s = t.itemsKeys.indexOf(String(i.id));
                Number.isInteger(l) &&
                  Number.isInteger(s) &&
                  r({ from: l, to: s });
              },
              [r, t.itemsKeys],
            ),
            g = (0, n.useCallback)(() => {
              c(null);
            }, []),
            p = (0, n.useMemo)(
              () => t.itemsKeys.indexOf(String(d)),
              [d, t.itemsKeys],
            );
          return t.isDragAndDropEnabled
            ? (0, i.jsxs)(E.LB, {
                sensors: o,
                collisionDetection: E.pE,
                onDragStart: u,
                onDragEnd: m,
                onDragCancel: g,
                modifiers: [A.DL, A.F4],
                accessibility: {
                  announcements: l,
                  screenReaderInstructions: s,
                },
                children: [
                  (0, i.jsx)("div", {
                    className: K().root,
                    children: (0, i.jsx)(D.Fo, {
                      items: t.itemsKeys,
                      strategy: D.qw,
                      children: a,
                    }),
                  }),
                  (0, B.createPortal)(
                    (0, i.jsx)(E.y9, {
                      dropAnimation: { duration: 0 },
                      children: d
                        ? (0, i.jsx)("div", {
                            className: K().draggableItemWrapper,
                            children: (0, i.jsx)(Y, {
                              index: p,
                              className: K().noHoverItem,
                            }),
                          })
                        : null,
                    }),
                    window.document.body,
                  ),
                ],
              })
            : a;
        }),
        U = (0, s.Pi)((e) => {
          var a, t, s;
          let { userId: u, kind: m, playlistUuid: g } = e,
            p = (0, n.useRef)(0),
            { notify: v } = (0, h.d$)(),
            { playlist: P, experiments: k } = (0, h.oR)(),
            { formatMessage: x } = (0, o.Z)(),
            { ref: I, offsetY: S } = (0, d.e)(),
            [f, D] = (0, L.zU)(),
            b = (0, n.useMemo)(() => {
              var e;
              return (0, h.XG)(
                null == P
                  ? void 0
                  : null === (e = P.meta) || void 0 === e
                    ? void 0
                    : e.averageColor,
              );
            }, [
              null == P
                ? void 0
                : null === (a = P.meta) || void 0 === a
                  ? void 0
                  : a.averageColor,
            ]),
            [N, E] = (0, L.at)(b, S),
            A =
              k.checkExperiment(h.pe.WebNextPlaylistAddition, "on") &&
              (null === (t = P.meta) || void 0 === t
                ? void 0
                : t.isOwnPlaylist),
            [B, R] = (0, n.useState)(!1),
            w = k.checkExperiment(h.pe.WebNextPlaylistAddition, "on");
          (0, n.useEffect)(
            () => () => {
              P.reset(), (p.current = 0);
            },
            [P, g, u, m],
          );
          let W = (0, n.useMemo)(
            () => () => {
              (P.isRejected || (!P.meta && !P.isLoading)) &&
                p &&
                !(p.current > 0) &&
                (v(
                  (0, i.jsx)(_.Q, {
                    error: x({
                      id: "playlist-errors.error-during-loading-playlist",
                    }),
                  }),
                  { containerId: h.W$.ERROR },
                ),
                p.current++);
            },
            [P.isRejected, P.meta, P.isLoading, v, x],
          );
          W(),
            P.loadingState === h.Gu.IDLE &&
              ("string" == typeof g
                ? (0, n.use)(
                    P.getPlaylistByUuid({ playlistUuid: g, resumeStream: !1 }),
                  )
                : "string" == typeof u &&
                  "string" == typeof m &&
                  (0, n.use)(
                    P.getPlaylistByUserIdAndKind({
                      userId: u,
                      playlistKind: Number(m),
                      resumeStream: !1,
                    }),
                  )),
            (0, h.NO)(P.loadingState === h.Gu.RESOLVE),
            P.isNotFound && (0, r.notFound)();
          let M = (0, n.useMemo)(
              () =>
                P.isLoading || !P.meta || P.isRejected
                  ? (0, i.jsx)(c.KC, { className: T().header })
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(c.Vm, {
                          playlist: P.meta,
                          isDisabled: P.isDisabled,
                          className: T().header,
                          ref: I,
                        }),
                        w &&
                          (0, i.jsx)(C, {
                            autoFocus: !P.items.length,
                            onChange: R,
                          }),
                      ],
                    }),
              [P.isDisabled, P.isLoading, P.meta, P.isRejected, I, P.items, w],
            ),
            O = (0, n.useMemo)(
              () => ({
                Header: () => M,
                Item: P.isDragAndDropEnabled ? j : void 0,
                Footer: () =>
                  (0, i.jsxs)("div", {
                    className: T().footerContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: T().carouselBlocks,
                        children:
                          P.hasSimilarPlaylists &&
                          (0, i.jsx)(h.J, {
                            blockId: h.BE.PLAYLISTS_SIMILAR_PLAYLIST,
                            blockType: h.BE.PLAYLISTS_SIMILAR_PLAYLIST,
                            blockPosX: 1,
                            blockPosY: 2,
                            blockIdForFrom: h.BE.PLAYLISTS_SIMILAR_PLAYLIST,
                            objectsCount: P.similarPlaylists.length,
                            children: (0, i.jsx)(y.VD, {
                              className: T().carouselContainer,
                              headerClassName: (0, l.W)(
                                T().carouselBlockHeader,
                                T().carouselBlock,
                              ),
                              containerClassName: T().carouselBlock,
                              title: x({
                                id: "entity-names.similar-playlists",
                              }),
                              playlists: P.similarPlaylists,
                              isLoading: P.isLoading,
                            }),
                          }),
                      }),
                      !(P.isEmptyPlaylist && A) &&
                        (0, i.jsx)(_.$_, { className: T().footer }),
                    ],
                  }),
              }),
              [
                P.isDragAndDropEnabled,
                P.hasSimilarPlaylists,
                P.similarPlaylists,
                P.isLoading,
                P.isEmptyPlaylist,
                M,
                x,
                A,
              ],
            ),
            F = (0, n.useCallback)(
              (e) => {
                P.getTracksByRange(e);
              },
              [P],
            ),
            K = (0, n.useCallback)(
              (e) => {
                var a;
                return null === (a = P.items[e]) || void 0 === a
                  ? void 0
                  : a.key;
              },
              [P.items],
            ),
            U = (0, n.useCallback)((e) => e, []),
            X = P.items.length || (A ? 1 : 0);
          return (0, i.jsx)(h.Lh, {
            pageId: h.Rh.PLAYLIST,
            children: (0, i.jsxs)(L.I7, {
              scrollElement: f,
              children: [
                (0, i.jsx)(_.h4, { style: E }),
                (0, i.jsx)("div", {
                  className: T().averageColorBackground,
                  style: N,
                }),
                (0, i.jsx)(V, {
                  playlist: P,
                  children: (0, i.jsx)(_.Wv, {
                    context: {
                      listAriaLabel: x(
                        { id: "entity-names.playlist-tracks-list" },
                        {
                          playlistName:
                            (null === (s = P.meta) || void 0 === s
                              ? void 0
                              : s.title) || "",
                        },
                      ),
                    },
                    className: (0, l.W)(T().root, T().important),
                    listClassName: T().content,
                    customComponents: O,
                    computeItemKey: P.isDragAndDropEnabled ? K : U,
                    totalCount: B ? 0 : X,
                    itemContentCallback: (e) => (0, i.jsx)(Y, { index: e }),
                    onGetDataByRange: F,
                    debounceDurationInMs: 300,
                    initialItemCount: P.items.length,
                    handleRef: D,
                    shouldTriggerRangeChangedOnTotalCountChange: !0,
                  }),
                }),
              ],
            }),
          });
        });
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
  },
]);

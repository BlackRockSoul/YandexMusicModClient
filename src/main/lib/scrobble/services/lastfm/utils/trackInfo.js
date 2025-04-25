"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrackInfo = getTrackInfo;
function getTrackInfo(track) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var mainArtist = (_a = track.artists) === null || _a === void 0 ? void 0 : _a[0];
    if (!track.title || !(mainArtist === null || mainArtist === void 0 ? void 0 : mainArtist.name)) {
        throw new Error("Missing required track information");
    }
    return {
        artist: mainArtist.name,
        track: track.title,
        duration: Math.floor(track.durationMs / 1000),
        album: (_c = (_b = track.albums) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.title,
        albumArtist: (_g = (_f = (_e = (_d = track.albums) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.artists) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.name,
        trackNumber: (_k = (_j = (_h = track.albums) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.trackPosition) === null || _k === void 0 ? void 0 : _k.index,
    };
}

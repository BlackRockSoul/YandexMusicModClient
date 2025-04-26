"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrackInfo = getTrackInfo;
function getTrackInfo(track) {
    const mainArtist = track.artists?.[0];
    if (!track.title || !mainArtist?.name) {
        throw new Error("Missing required track information");
    }
    return {
        artist: mainArtist.name,
        track: track.title,
        duration: Math.floor(track.durationMs / 1000),
        album: track.albums?.[0]?.title,
        albumArtist: track.albums?.[0]?.artists?.[0]?.name,
        trackNumber: track.albums?.[0]?.trackPosition?.index,
    };
}

import type { ITrack } from "../../../core/types/ITrack";
import type { ILastFmTrackInfo } from "../types/ILastFmApi";

/**
 * Extracts Last.fm compatible track information from a track object
 *
 * @param track The track to extract information from
 * @returns Last.fm compatible track information
 */
export function getTrackInfo(track: ITrack): ILastFmTrackInfo {
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

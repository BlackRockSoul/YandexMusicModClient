export interface ILastFmSession {
  key: string;
  name: string;
  subscriber: number;
}

export interface ILastFmTrackInfo {
  artist: string;
  track: string;
  duration?: number;

  album?: string;
  albumArtist?: string;
  trackNumber?: number;
}

export interface ILastFmApi {
  "auth.getToken": void;
  "auth.getSession": {
    token: string;
  };
  "track.updateNowPlaying": ILastFmTrackInfo & {
    context?: string;
    mbid?: string;
  };
  "track.scrobble": ILastFmTrackInfo & {
    context?: string;
    mbid?: string;

    timestamp: number;
    streamId?: string;
    chosenByUser?: 0 | 1;
  };
}

export interface ILastFmApiResponse {
  "auth.getToken": {
    token: string;
  };
  "auth.getSession": {
    session: ILastFmSession;
  };
  "track.updateNowPlaying": void;
  "track.scrobble": void;
}

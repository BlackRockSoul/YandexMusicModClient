export interface ITrackArtist {
  id: string;
  name: string;
  various: boolean;
  composer: boolean;
  cover?: {
    type: string;
    uri: string;
    prefix: string;
  };
}

export interface ITrackAlbum {
  id: number;
  title: string;
  type: string;
  metaType: string;
  year: number;
  releaseDate: string;
  coverUri: string;
  ogImage: string;
  genre: string;
  trackCount: number;
  likesCount: number;
  recent: boolean;
  veryImportant: boolean;
  artists: ITrackArtist[];
  labels: string[];
  available: boolean;
  availableForPremiumUsers: boolean;
  availableForOptions: string[];
  availableForMobile: boolean;
  availablePartially: boolean;
  bests: unknown[];
  disclaimers: unknown[];
  trackPosition: {
    volume: number;
    index: number;
  };
}

export interface ITrack {
  id: string;
  realId: string;
  title: string;
  version?: string;
  major: {
    id: number;
    name: string;
  };
  available: boolean;
  availableForPremiumUsers: boolean;
  availableFullWithoutPermission: boolean;
  availableForOptions: string[];
  disclaimers: unknown[];
  storageDir: string;
  durationMs: number;
  fileSize: number;
  r128?: {
    i: number;
    tp: number;
  };
  fade?: {
    inStart: number;
    inStop: number;
    outStart: number;
    outStop: number;
  };
  previewDurationMs: number;
  artists: ITrackArtist[];
  albums: ITrackAlbum[];
  coverUri?: string;
  ogImage?: string;
  lyricsAvailable: boolean;
  type: string;
  rememberPosition: boolean;
  trackSharingFlag?: string;
}

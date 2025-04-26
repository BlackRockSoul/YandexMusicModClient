import type { IScrobblerService } from "../../core/interfaces/IScrobblerService";
import type { IPlayingState } from "../../core/types/IPlayingState";
import type { ITrack } from "../../core/types/ITrack";
import type { ILastFmSession } from "./types/ILastFmApi";
import { BrowserWindow, session } from "electron";
import { Logger } from "../../../../packages/logger/Logger";
import ElectronStore from "electron-store";
import { getTrackInfo } from "./utils/trackInfo";
import { LastFmApi } from "./api/LastFmApi";
import { ScrobblerTypeEnum } from "../../constants/scrobblerTypeEnum";

export class LastFmScrobbler implements IScrobblerService {
  private static readonly MIN_TRACK_DURATION_MS = 30000; // 30 seconds
  private static readonly MAX_SCROBBLE_TIME_MS = 240000; // 4 minutes

  public readonly type = ScrobblerTypeEnum.LastFm;

  private readonly logger = new Logger("LastFmScrobbler");

  private readonly API_KEY: string;
  private readonly api: LastFmApi;

  private readonly store = new ElectronStore({
    name: "lastfm",
    encryptionKey: "lastfm-session-key",
  });
  private readonly SESSION_STORE_KEY = "session";

  /* #region Current track state */
  private currentTrack: ITrack | null = null;
  private currentTrackStartTime: number | null = null;
  private currentTrackPlayedTime: number = 0;
  /* #endregion */

  public constructor(apiKey: string, sharedSecret: string, baseUrl: string) {
    this.API_KEY = apiKey;

    this.api = new LastFmApi(this.API_KEY, sharedSecret, baseUrl, () =>
      this.getStoredSession()
    );
  }

  public isEnabled(): boolean {
    // TODO: Implement based on user preferences
    return this.isLoggedIn();
  }

  public isLoggedIn(): boolean {
    const session = this.store.get(this.SESSION_STORE_KEY);
    return !!session && !!session.key;
  }

  public async login(): Promise<void> {
    const token = await this.api.getToken();

    const childWindow = new BrowserWindow({
      width: 800,
      height: 600,
    });

    childWindow.loadURL(
      `http://www.last.fm/api/auth/?api_key=${this.API_KEY}&token=${token}`
    );

    childWindow.on("closed", async () => {
      await this.fetchAndStoreSession(token);
    });
  }

  public async logout(): Promise<void> {
    this.store.delete(this.SESSION_STORE_KEY);
    this.logger.info("Logged out");
  }

  public handleEvent(playingState: IPlayingState): void {
    if (this.isTrackChanged(playingState.track)) {
      this.handleTrackChange(playingState);
    } else if (this.isPlaybackStateChanged(playingState)) {
      this.handlePlaybackStateChange(playingState);
    }
  }

  private isTrackChanged(newTrack: ITrack): boolean {
    return this.currentTrack?.id !== newTrack.id;
  }

  private handleTrackChange(playingState: IPlayingState): void {
    this.maybeScrobbleCurrentTrack();

    this.currentTrack = playingState.track;
    this.currentTrackStartTime = null;
    this.currentTrackPlayedTime = 0;

    if (playingState.isPlaying) {
      this.startTrackPlayback();
      void this.updateNowPlaying(playingState.track);
    }
  }

  private isPlaybackStateChanged(playingState: IPlayingState): boolean {
    return (
      this.currentTrack?.id === playingState.track?.id &&
      (playingState.isPlaying
        ? this.currentTrackStartTime === null
        : this.currentTrackStartTime !== null)
    );
  }

  private handlePlaybackStateChange(playingState: IPlayingState): void {
    if (playingState.isPlaying) {
      this.startTrackPlayback();
    } else {
      this.pauseTrackPlayback();
      this.maybeScrobbleCurrentTrack();
    }
  }

  private startTrackPlayback(): void {
    if (!this.currentTrack) return;

    this.currentTrackStartTime = Date.now();
  }

  private pauseTrackPlayback(): void {
    if (!this.currentTrack || !this.currentTrackStartTime) return;

    this.currentTrackPlayedTime += Date.now() - this.currentTrackStartTime;
    this.currentTrackStartTime = null;
  }

  private maybeScrobbleCurrentTrack(): void {
    if (!this.currentTrack) return;

    const totalPlayedTime = this.calculateTotalPlayedTime();
    if (this.isTrackEligibleForScrobble(this.currentTrack, totalPlayedTime)) {
      void this.sendScrobble(this.currentTrack);
    }
  }

  private calculateTotalPlayedTime(): number {
    let totalTime = this.currentTrackPlayedTime;
    if (this.currentTrackStartTime) {
      totalTime += Date.now() - this.currentTrackStartTime;
    }

    return totalTime;
  }

  private isTrackEligibleForScrobble(
    track: ITrack,
    playedTimeMs: number
  ): boolean {
    if (track.durationMs < LastFmScrobbler.MIN_TRACK_DURATION_MS) {
      this.logger.info("Track is too short to scrobble");
      return false;
    }

    const minPlayTimeMs = Math.min(
      track.durationMs / 2,
      LastFmScrobbler.MAX_SCROBBLE_TIME_MS
    );

    if (playedTimeMs < minPlayTimeMs) {
      this.logger.info("Track is not played long enough to scrobble");
      return false;
    }

    return true;
  }

  private async updateNowPlaying(track: ITrack): Promise<void> {
    this.logger.info("Updating now playing: ", track.title);

    try {
      await this.api.updateNowPlaying(getTrackInfo(track));
    } catch (error) {
      this.logger.error("Failed to update now playing", error);
    }
  }

  private async sendScrobble(track: ITrack): Promise<void> {
    this.logger.info("Scrobbling track:", track.title);

    try {
      await this.api.scrobble(getTrackInfo(track));
    } catch (error) {
      this.logger.error("Failed to send scrobble", error);
    }
  }

  private async fetchAndStoreSession(token: string): Promise<void> {
    try {
      const session = await this.api.getSession(token);

      this.store.set(this.SESSION_STORE_KEY, session);
      this.logger.info("Session fetched and stored");
    } catch (error) {
      this.logger.error("Failed to get and store session", error);
    }
  }

  private getStoredSession(): ILastFmSession {
    const session = this.store.get(this.SESSION_STORE_KEY);

    if (!session) throw new Error("No session found");

    return session;
  }
}

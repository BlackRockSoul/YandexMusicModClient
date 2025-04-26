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
  public readonly type = ScrobblerTypeEnum.LastFm;

  private readonly logger = new Logger("LastFmScrobbler");

  private readonly API_KEY: string;
  private readonly api: LastFmApi;

  private readonly store = new ElectronStore({
    name: "lastfm",
    encryptionKey: "lastfm-session-key",
  });
  private readonly SESSION_STORE_KEY = "session";

  private currentTrackTimeout: NodeJS.Timeout | null = null;

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
    if (playingState.isPlaying) {
      void this.updateNowPlaying(playingState);
    }

    void this.enqueueScrobble(playingState);
  }

  private async updateNowPlaying(playingState: IPlayingState): Promise<void> {
    if (!this.isLoggedIn() || !playingState?.track) return;

    this.logger.info("Updating now playing: ", playingState.track.title);

    try {
      await this.api.updateNowPlaying(getTrackInfo(playingState.track));
    } catch (error) {
      this.logger.error("Failed to update now playing", error);
    }
  }

  private async enqueueScrobble(playingState: IPlayingState): Promise<void> {
    const trackDuration = playingState.track.durationMs / 1000;

    // If track is too short, don't scrobble
    if (trackDuration < 30) {
      this.logger.info(
        "Track too short to scrobble:",
        trackDuration,
        "seconds"
      );
      return;
    }

    // Clear any existing timeout
    if (this.currentTrackTimeout) {
      clearTimeout(this.currentTrackTimeout);
    }

    if (!playingState.isPlaying) {
      return;
    }

    // Calculate minimum required play time (half duration or 4 minutes, whichever is less)
    const minPlayTimeMs = Math.min(trackDuration / 2, 240) * 1000;
    this.logger.info(
      "Enqueuing scrobble: ",
      playingState.track.title,
      "after: ",
      minPlayTimeMs / 1000,
      "seconds"
    );

    // Set timeout to scrobble after minimum play time
    this.currentTrackTimeout = setTimeout(async () => {
      this.logger.info("Scrobbling track:", playingState.track.title);

      await this.sendScrobble(playingState.track);
    }, minPlayTimeMs);
  }

  private async sendScrobble(track: ITrack): Promise<void> {
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

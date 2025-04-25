import type { IScrobblerService } from "./core/interfaces/IScrobblerService";
import type { IPlayingState } from "./core/types/IPlayingState";
import type { ITrack } from "./core/types/ITrack";
import { Logger } from "../../packages/logger/Logger";
import * as crypto from "crypto";

/**
 * ScrobblerManager is responsible for managing all scrobbler services
 * and distributing playing state events to them.
 */
export class ScrobblerManager {
  private readonly logger = new Logger("ScrobblerManager");
  private readonly scrobblers: IScrobblerService[] = [];

  private currentTrackHash: string | null = null;
  private currentTrackPlaying: boolean = false;

  /**
   * Registers a scrobbler service with the manager
   *
   * @param scrobbler The scrobbler service to register
   */
  public registerScrobbler(scrobbler: IScrobblerService): void {
    this.logger.info(`Registering scrobbler: ${scrobbler.type}`);
    this.scrobblers.push(scrobbler);
  }

  /**
   * Gets all registered scrobblers
   */
  public getScrobblers(): ReadonlyArray<IScrobblerService> {
    return this.scrobblers;
  }

  /**
   * Handles a playing state event and distributes it to all enabled scrobblers
   *
   * @param playingState The current playing state
   */
  public async handlePlayingState(playingState: IPlayingState): Promise<void> {
    if (!playingState?.track) return;
    if (playingState.status.startsWith("loading")) return;

    const trackHash = this.getTrackHash(playingState.track);

    if (
      trackHash === this.currentTrackHash &&
      this.currentTrackPlaying === playingState.isPlaying
    ) {
      return;
    }

    this.currentTrackHash = trackHash;
    this.currentTrackPlaying = playingState.isPlaying;

    this.logger.info(
      `Handling playing state: ${
        playingState.isPlaying ? "Playing" : "Paused"
      } with status "${playingState.status}" - ${playingState.track.title}`
    );

    this.scrobblers
      .filter((scrobbler) => scrobbler.isEnabled())
      .forEach((scrobbler) => scrobbler.handleEvent(playingState));
  }

  private getTrackHash(track: ITrack): string {
    return crypto
      .createHash("sha256")
      .update(JSON.stringify(track))
      .digest("hex");
  }
}

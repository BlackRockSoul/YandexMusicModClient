import type { IScrobblerService } from "./core/interfaces/IScrobblerService";
import type { IPlayingState } from "./core/types/IPlayingState";
import type { ITrack } from "./core/types/ITrack";
import { Logger } from "../../packages/logger/Logger";
import { ScrobblerTypeEnum } from "./constants/scrobblerTypeEnum";

/**
 * ScrobblerManager is responsible for managing all scrobbler services
 * and distributing playing state events to them.
 */
export class ScrobblerManager {
  private static readonly DEBOUNCE_DELAY_MS = 1500;

  private readonly logger = new Logger("ScrobblerManager");
  private readonly scrobblers: IScrobblerService[] = [];

  private currentTrackId: ITrack["id"] | null = null;
  private currentTrackPlaying: boolean = false;

  private debounceTimeout: NodeJS.Timeout | null = null;

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
   * Gets a scrobbler service by type
   *
   * @param type The type of scrobbler service to get
   * @returns The scrobbler service or undefined if not found
   */
  public getScrobblerByType(
    type: ScrobblerTypeEnum
  ): IScrobblerService | undefined {
    return this.scrobblers.find((scrobbler) => scrobbler.type === type);
  }

  /**
   * Handles a playing state event and distributes it to all enabled scrobblers
   *
   * Has a debounce to prevent spamming the scrobblers with the same event.
   *
   * @param playingState The current playing state
   */
  public handlePlayingState(playingState: IPlayingState): void {
    if (!playingState?.track) return;
    if (playingState.status.startsWith("loading")) return;

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }

    if (
      playingState.track.id === this.currentTrackId &&
      this.currentTrackPlaying === playingState.isPlaying
    )
      return;

    this.debounceTimeout = setTimeout(() => {
      this.processPlayingState(playingState);
    }, ScrobblerManager.DEBOUNCE_DELAY_MS);
  }

  /**
   * Processes a playing state event and distributes it to all enabled scrobblers
   *
   * @param playingState The current playing state
   */
  private processPlayingState(playingState: IPlayingState): void {
    if (!playingState) return;

    this.currentTrackId = playingState.track.id;
    this.currentTrackPlaying = playingState.isPlaying;

    this.logger.info(
      `Processing playing state: ${
        playingState.isPlaying ? "Playing" : "Paused"
      } with status "${playingState.status}" - ${playingState.track.title}`
    );

    this.scrobblers
      .filter((scrobbler) => scrobbler.isEnabled())
      .forEach((scrobbler) => scrobbler.handleEvent(playingState));
  }
}

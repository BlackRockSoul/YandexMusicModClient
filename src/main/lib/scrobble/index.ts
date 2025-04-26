import { ScrobblerManager } from "./ScrobblerManager";
import { LastFmScrobbler } from "./services/lastfm/LastFmScrobbler";
import type { IPlayingState } from "./core/types/IPlayingState";
import type { IScrobblerService } from "./core/interfaces/IScrobblerService";

const scrobblerManager = new ScrobblerManager();

scrobblerManager.registerScrobbler(
  // TODO: Move to config, toolset or environment variables?
  new LastFmScrobbler(
    "ebd53b66afc398d291226adc17b1c5e1",
    "cd1c5e25adabf68e3621679a3943bb07",
    "https://ws.audioscrobbler.com/2.0"
  )
);

/**
 * Handle a playing state event from Yandex Music
 *
 * @param playingState The current playing state
 */
export function handlePlayingStateEvent(playingState: IPlayingState): void {
  scrobblerManager.handlePlayingState(playingState);
}

export { scrobblerManager };

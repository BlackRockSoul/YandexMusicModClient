import { ScrobblerTypeEnum } from "../../constants/scrobblerTypeEnum";
import type { IPlayingState } from "../types/IPlayingState";

export interface IScrobblerService {
  /**
   * Name of the scrobbler service
   */
  readonly type: ScrobblerTypeEnum;

  /**
   * Checks if the scrobbler is enabled in user settings
   */
  isEnabled(): boolean;

  /**
   * Checks if the service has a valid authenticated session
   */
  isLoggedIn(): boolean;

  /**
   * Initiates the login/authentication flow
   */
  login(): Promise<void>;

  /**
   * Logs out the user
   */
  logout(): Promise<void>;

  /**
   * Handles a playing state event (called by ScrobblerManager)
   */
  handleEvent(playingState: IPlayingState): void;
}

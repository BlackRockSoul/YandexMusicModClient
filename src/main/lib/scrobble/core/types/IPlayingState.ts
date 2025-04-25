import { ITrack } from "../types/ITrack";

export interface IPlayingState {
  isPlaying: boolean;

  canMoveBackward: boolean;
  canMoveForward: boolean;

  track: ITrack;
  status: string;
  progress: number;

  availableActions: {
    moveBackward: boolean;
    moveForward: boolean;
    repeat: boolean;
    shuffle: boolean;
    speed: boolean;
  };

  actionsStore: {
    repeat: string;
    shuffle: boolean;
    isLiked: boolean;
    isDisliked: boolean;
  };
}

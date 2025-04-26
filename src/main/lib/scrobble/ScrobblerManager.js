"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrobblerManager = void 0;
const Logger_1 = require("../../packages/logger/Logger");
class ScrobblerManager {
    constructor() {
        this.logger = new Logger_1.Logger("ScrobblerManager");
        this.scrobblers = [];
        this.currentTrackId = null;
        this.currentTrackPlaying = false;
        this.debounceTimeout = null;
    }
    registerScrobbler(scrobbler) {
        this.logger.info(`Registering scrobbler: ${scrobbler.type}`);
        this.scrobblers.push(scrobbler);
    }
    getScrobblers() {
        return this.scrobblers;
    }
    handlePlayingState(playingState) {
        if (!playingState?.track)
            return;
        if (playingState.status.startsWith("loading"))
            return;
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = null;
        }
        if (playingState.track.id === this.currentTrackId &&
            this.currentTrackPlaying === playingState.isPlaying)
            return;
        this.debounceTimeout = setTimeout(() => {
            this.processPlayingState(playingState);
        }, ScrobblerManager.DEBOUNCE_DELAY_MS);
    }
    processPlayingState(playingState) {
        if (!playingState)
            return;
        this.currentTrackId = playingState.track.id;
        this.currentTrackPlaying = playingState.isPlaying;
        this.logger.info(`Processing playing state: ${playingState.isPlaying ? "Playing" : "Paused"} with status "${playingState.status}" - ${playingState.track.title}`);
        this.scrobblers
            .filter((scrobbler) => scrobbler.isEnabled())
            .forEach((scrobbler) => scrobbler.handleEvent(playingState));
    }
}
exports.ScrobblerManager = ScrobblerManager;
ScrobblerManager.DEBOUNCE_DELAY_MS = 1500;

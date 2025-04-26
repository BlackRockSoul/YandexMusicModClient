"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrobblerManager = void 0;
const Logger_1 = require("../../packages/logger/Logger");
const crypto = require("crypto");
class ScrobblerManager {
    constructor() {
        this.logger = new Logger_1.Logger("ScrobblerManager");
        this.scrobblers = [];
        this.currentTrackHash = null;
        this.currentTrackPlaying = false;
    }
    registerScrobbler(scrobbler) {
        this.logger.info(`Registering scrobbler: ${scrobbler.type}`);
        this.scrobblers.push(scrobbler);
    }
    getScrobblers() {
        return this.scrobblers;
    }
    async handlePlayingState(playingState) {
        if (!playingState?.track)
            return;
        if (playingState.status.startsWith("loading"))
            return;
        const trackHash = this.getTrackHash(playingState.track);
        if (trackHash === this.currentTrackHash &&
            this.currentTrackPlaying === playingState.isPlaying) {
            return;
        }
        this.currentTrackHash = trackHash;
        this.currentTrackPlaying = playingState.isPlaying;
        this.logger.info(`Handling playing state: ${playingState.isPlaying ? "Playing" : "Paused"} with status "${playingState.status}" - ${playingState.track.title}`);
        this.scrobblers
            .filter((scrobbler) => scrobbler.isEnabled())
            .forEach((scrobbler) => scrobbler.handleEvent(playingState));
    }
    getTrackHash(track) {
        return crypto
            .createHash("sha256")
            .update(JSON.stringify(track))
            .digest("hex");
    }
}
exports.ScrobblerManager = ScrobblerManager;

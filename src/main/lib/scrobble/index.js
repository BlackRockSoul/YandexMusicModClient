"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrobblerManager = void 0;
exports.handlePlayingStateEvent = handlePlayingStateEvent;
exports.getScrobblers = getScrobblers;
var ScrobblerManager_1 = require("./ScrobblerManager");
Object.defineProperty(exports, "ScrobblerManager", { enumerable: true, get: function () { return ScrobblerManager_1.ScrobblerManager; } });
var LastFmScrobbler_1 = require("./services/lastfm/LastFmScrobbler");
var scrobblerManager = new ScrobblerManager_1.ScrobblerManager();
scrobblerManager.registerScrobbler(new LastFmScrobbler_1.LastFmScrobbler("ebd53b66afc398d291226adc17b1c5e1", "cd1c5e25adabf68e3621679a3943bb07", "https://ws.audioscrobbler.com/2.0"));
function handlePlayingStateEvent(playingState) {
    scrobblerManager.handlePlayingState(playingState);
}
function getScrobblers() {
    return scrobblerManager.getScrobblers();
}
__exportStar(require("./core/interfaces/IScrobblerService"), exports);
__exportStar(require("./core/types/IPlayingState"), exports);
__exportStar(require("./core/types/ITrack"), exports);

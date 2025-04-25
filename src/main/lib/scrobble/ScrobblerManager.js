"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrobblerManager = void 0;
var Logger_1 = require("../../packages/logger/Logger");
var crypto = require("crypto");
var ScrobblerManager = (function () {
    function ScrobblerManager() {
        this.logger = new Logger_1.Logger("ScrobblerManager");
        this.scrobblers = [];
        this.currentTrackHash = null;
        this.currentTrackPlaying = false;
    }
    ScrobblerManager.prototype.registerScrobbler = function (scrobbler) {
        this.logger.info("Registering scrobbler: ".concat(scrobbler.type));
        this.scrobblers.push(scrobbler);
    };
    ScrobblerManager.prototype.getScrobblers = function () {
        return this.scrobblers;
    };
    ScrobblerManager.prototype.handlePlayingState = function (playingState) {
        return __awaiter(this, void 0, void 0, function () {
            var trackHash;
            return __generator(this, function (_a) {
                if (!(playingState === null || playingState === void 0 ? void 0 : playingState.track))
                    return [2];
                if (playingState.status.startsWith("loading"))
                    return [2];
                trackHash = this.getTrackHash(playingState.track);
                if (trackHash === this.currentTrackHash &&
                    this.currentTrackPlaying === playingState.isPlaying) {
                    return [2];
                }
                this.currentTrackHash = trackHash;
                this.currentTrackPlaying = playingState.isPlaying;
                this.logger.info("Handling playing state: ".concat(playingState.isPlaying ? "Playing" : "Paused", " with status \"").concat(playingState.status, "\" - ").concat(playingState.track.title));
                this.scrobblers
                    .filter(function (scrobbler) { return scrobbler.isEnabled(); })
                    .forEach(function (scrobbler) { return scrobbler.handleEvent(playingState); });
                return [2];
            });
        });
    };
    ScrobblerManager.prototype.getTrackHash = function (track) {
        return crypto
            .createHash("sha256")
            .update(JSON.stringify(track))
            .digest("hex");
    };
    return ScrobblerManager;
}());
exports.ScrobblerManager = ScrobblerManager;

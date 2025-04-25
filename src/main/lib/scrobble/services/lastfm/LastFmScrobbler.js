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
exports.LastFmScrobbler = void 0;
var electron_1 = require("electron");
var Logger_1 = require("../../../../packages/logger/Logger");
var electron_store_1 = require("electron-store");
var trackInfo_1 = require("./utils/trackInfo");
var LastFmApi_1 = require("./api/LastFmApi");
var scrobblerTypeEnum_1 = require("../../constants/scrobblerTypeEnum");
var LastFmScrobbler = (function () {
    function LastFmScrobbler(apiKey, sharedSecret, baseUrl) {
        var _this = this;
        this.type = scrobblerTypeEnum_1.ScrobblerType.LastFm;
        this.logger = new Logger_1.Logger("LastFmScrobbler");
        this.store = new electron_store_1.default({
            name: "lastfm",
            encryptionKey: "lastfm-session-key",
        });
        this.SESSION_STORE_KEY = "session";
        this.currentTrackTimeout = null;
        this.API_KEY = apiKey;
        this.api = new LastFmApi_1.LastFmApi(this.API_KEY, sharedSecret, baseUrl, function () {
            return _this.getStoredSession();
        });
    }
    LastFmScrobbler.prototype.isEnabled = function () {
        return this.isLoggedIn();
    };
    LastFmScrobbler.prototype.isLoggedIn = function () {
        var session = this.store.get(this.SESSION_STORE_KEY);
        return !!session && !!session.key;
    };
    LastFmScrobbler.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, childWindow;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.api.getToken()];
                    case 1:
                        token = _a.sent();
                        childWindow = new electron_1.BrowserWindow({
                            width: 800,
                            height: 600,
                        });
                        childWindow.loadURL("http://www.last.fm/api/auth/?api_key=".concat(this.API_KEY, "&token=").concat(token));
                        childWindow.on("closed", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.fetchAndStoreSession(token)];
                                    case 1:
                                        _a.sent();
                                        return [2];
                                }
                            });
                        }); });
                        return [2];
                }
            });
        });
    };
    LastFmScrobbler.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.store.delete(this.SESSION_STORE_KEY);
                this.logger.info("Logged out");
                return [2];
            });
        });
    };
    LastFmScrobbler.prototype.handleEvent = function (playingState) {
        if (playingState.isPlaying) {
            void this.updateNowPlaying(playingState);
        }
        void this.enqueueScrobble(playingState);
    };
    LastFmScrobbler.prototype.updateNowPlaying = function (playingState) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isLoggedIn() || !(playingState === null || playingState === void 0 ? void 0 : playingState.track))
                            return [2];
                        this.logger.info("Updating now playing: ", playingState.track.title);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.api.updateNowPlaying((0, trackInfo_1.getTrackInfo)(playingState.track))];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.logger.error("Failed to update now playing", error_1);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    LastFmScrobbler.prototype.enqueueScrobble = function (playingState) {
        return __awaiter(this, void 0, void 0, function () {
            var trackDuration, minPlayTimeMs;
            var _this = this;
            return __generator(this, function (_a) {
                trackDuration = playingState.track.durationMs / 1000;
                if (trackDuration < 30) {
                    this.logger.info("Track too short to scrobble:", trackDuration, "seconds");
                    return [2];
                }
                if (this.currentTrackTimeout) {
                    clearTimeout(this.currentTrackTimeout);
                }
                if (!playingState.isPlaying) {
                    return [2];
                }
                minPlayTimeMs = Math.min(trackDuration / 2, 240) * 1000;
                this.logger.info("Enqueuing scrobble: ", playingState.track.title, "after: ", minPlayTimeMs / 1000, "seconds");
                this.currentTrackTimeout = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.logger.info("Scrobbling track:", playingState.track.title);
                                return [4, this.sendScrobble(playingState.track)];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); }, minPlayTimeMs);
                return [2];
            });
        });
    };
    LastFmScrobbler.prototype.sendScrobble = function (track) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.api.scrobble((0, trackInfo_1.getTrackInfo)(track))];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.logger.error("Failed to send scrobble", error_2);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    LastFmScrobbler.prototype.fetchAndStoreSession = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var session_1, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.api.getSession(token)];
                    case 1:
                        session_1 = _a.sent();
                        this.store.set(this.SESSION_STORE_KEY, session_1);
                        this.logger.info("Session fetched and stored");
                        return [3, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.logger.error("Failed to get and store session", error_3);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    LastFmScrobbler.prototype.getStoredSession = function () {
        var session = this.store.get(this.SESSION_STORE_KEY);
        if (!session)
            throw new Error("No session found");
        return session;
    };
    return LastFmScrobbler;
}());
exports.LastFmScrobbler = LastFmScrobbler;

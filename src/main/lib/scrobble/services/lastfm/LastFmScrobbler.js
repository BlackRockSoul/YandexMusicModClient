"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastFmScrobbler = void 0;
const electron_1 = require("electron");
const Logger_1 = require("../../../../packages/logger/Logger");
const electron_store_1 = require("electron-store");
const trackInfo_1 = require("./utils/trackInfo");
const LastFmApi_1 = require("./api/LastFmApi");
const scrobblerTypeEnum_1 = require("../../constants/scrobblerTypeEnum");
class LastFmScrobbler {
    constructor(apiKey, sharedSecret, baseUrl) {
        this.type = scrobblerTypeEnum_1.ScrobblerTypeEnum.LastFm;
        this.logger = new Logger_1.Logger("LastFmScrobbler");
        this.store = new electron_store_1.default({
            name: "lastfm",
            encryptionKey: "lastfm-session-key",
        });
        this.SESSION_STORE_KEY = "session";
        this.currentTrackTimeout = null;
        this.API_KEY = apiKey;
        this.api = new LastFmApi_1.LastFmApi(this.API_KEY, sharedSecret, baseUrl, () => this.getStoredSession());
    }
    isEnabled() {
        return this.isLoggedIn();
    }
    isLoggedIn() {
        const session = this.store.get(this.SESSION_STORE_KEY);
        return !!session && !!session.key;
    }
    async login() {
        const token = await this.api.getToken();
        const childWindow = new electron_1.BrowserWindow({
            width: 800,
            height: 600,
        });
        childWindow.loadURL(`http://www.last.fm/api/auth/?api_key=${this.API_KEY}&token=${token}`);
        childWindow.on("closed", async () => {
            await this.fetchAndStoreSession(token);
        });
    }
    async logout() {
        this.store.delete(this.SESSION_STORE_KEY);
        this.logger.info("Logged out");
    }
    handleEvent(playingState) {
        if (playingState.isPlaying) {
            void this.updateNowPlaying(playingState);
        }
        void this.enqueueScrobble(playingState);
    }
    async updateNowPlaying(playingState) {
        if (!this.isLoggedIn() || !playingState?.track)
            return;
        this.logger.info("Updating now playing: ", playingState.track.title);
        try {
            await this.api.updateNowPlaying((0, trackInfo_1.getTrackInfo)(playingState.track));
        }
        catch (error) {
            this.logger.error("Failed to update now playing", error);
        }
    }
    async enqueueScrobble(playingState) {
        const trackDuration = playingState.track.durationMs / 1000;
        if (trackDuration < 30) {
            this.logger.info("Track too short to scrobble:", trackDuration, "seconds");
            return;
        }
        if (this.currentTrackTimeout) {
            clearTimeout(this.currentTrackTimeout);
        }
        if (!playingState.isPlaying) {
            return;
        }
        const minPlayTimeMs = Math.min(trackDuration / 2, 240) * 1000;
        this.logger.info("Enqueuing scrobble: ", playingState.track.title, "after: ", minPlayTimeMs / 1000, "seconds");
        this.currentTrackTimeout = setTimeout(async () => {
            this.logger.info("Scrobbling track:", playingState.track.title);
            await this.sendScrobble(playingState.track);
        }, minPlayTimeMs);
    }
    async sendScrobble(track) {
        try {
            await this.api.scrobble((0, trackInfo_1.getTrackInfo)(track));
        }
        catch (error) {
            this.logger.error("Failed to send scrobble", error);
        }
    }
    async fetchAndStoreSession(token) {
        try {
            const session = await this.api.getSession(token);
            this.store.set(this.SESSION_STORE_KEY, session);
            this.logger.info("Session fetched and stored");
        }
        catch (error) {
            this.logger.error("Failed to get and store session", error);
        }
    }
    getStoredSession() {
        const session = this.store.get(this.SESSION_STORE_KEY);
        if (!session)
            throw new Error("No session found");
        return session;
    }
}
exports.LastFmScrobbler = LastFmScrobbler;

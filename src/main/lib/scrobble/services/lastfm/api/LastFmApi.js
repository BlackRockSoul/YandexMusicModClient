"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastFmApi = void 0;
const signature_1 = require("../utils/signature");
const Logger_1 = require("../../../../../packages/logger/Logger");
class LastFmApi {
    constructor(apiKey, sharedSecret, baseUrl, sessionProvider) {
        this.apiKey = apiKey;
        this.sharedSecret = sharedSecret;
        this.baseUrl = baseUrl;
        this.sessionProvider = sessionProvider;
        this.logger = new Logger_1.Logger("LastFmApi");
    }
    async getToken() {
        const { token } = await this.request("auth.getToken", undefined, {
            noSig: true,
            noSk: true,
            method: "GET",
        });
        return token;
    }
    async getSession(token) {
        const { session } = await this.request("auth.getSession", { token }, { noSk: true, method: "GET" });
        return session;
    }
    async updateNowPlaying(trackInfo) {
        const result = await this.request("track.updateNowPlaying", trackInfo);
        this.handleScrobbleResult(result.nowplaying);
    }
    async scrobble(trackInfo) {
        const result = await this.request("track.scrobble", {
            ...trackInfo,
            timestamp: Math.floor(Date.now() / 1000),
        });
        this.handleScrobbleResult(result.scrobbles.scrobble);
    }
    handleScrobbleResult({ ignoredMessage, }) {
        const warningMessages = [];
        if (ignoredMessage?.code !== "0") {
            warningMessages.push(`Track was ignored by Last.fm with code: ${ignoredMessage.code}`);
            if (ignoredMessage["#text"]) {
                warningMessages.push(ignoredMessage["#text"]);
            }
        }
        if (warningMessages.length > 0) {
            throw new Error(warningMessages.join("; "));
        }
    }
    async request(method, params, options = {
        noSig: false,
        noSk: false,
        method: "POST",
    }) {
        const queryParams = new URLSearchParams();
        const isPostMethod = options.method === "POST";
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined)
                    queryParams.append(key, value.toString());
            });
        }
        queryParams.append("method", method);
        queryParams.append("api_key", this.apiKey);
        if (!options.noSk) {
            queryParams.append("sk", this.sessionProvider().key);
        }
        if (!options.noSig) {
            queryParams.append("api_sig", (0, signature_1.generateSignature)(queryParams, this.sharedSecret));
        }
        const url = isPostMethod
            ? `${this.baseUrl}?format=json`
            : `${this.baseUrl}?${queryParams.toString()}&format=json`;
        const body = isPostMethod ? queryParams : undefined;
        const response = await fetch(url, { method: options.method, body });
        return await this.handleResponse(response);
    }
    async handleResponse(response) {
        const text = await response.text().catch((e) => {
            this.logger.error("Failed to read response", e);
            throw e;
        });
        this.logger.debug(`Response: "${text}"`);
        let result;
        try {
            result = JSON.parse(text);
        }
        catch (e) {
            this.logger.error("Failed to parse response:", text);
            throw e;
        }
        if (this.isApiError(result)) {
            this.logger.error(`Received API error.`, `For more information, see https://www.last.fm/api/errorcodes.`, result);
            throw new Error(result.message);
        }
        return result;
    }
    isApiError(error) {
        return (typeof error === "object" &&
            error !== null &&
            "error" in error &&
            typeof error.error === "number");
    }
}
exports.LastFmApi = LastFmApi;

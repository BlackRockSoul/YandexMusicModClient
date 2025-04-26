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
        await this.request("track.updateNowPlaying", trackInfo);
    }
    async scrobble(trackInfo) {
        await this.request("track.scrobble", {
            ...trackInfo,
            timestamp: Math.floor(Date.now() / 1000),
        });
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
        return await response
            .text()
            .then((text) => {
            this.logger.debug("Response", text);
            return JSON.parse(text);
        })
            .catch((e) => {
            this.logger.error("Failed to fetch from Last.fm API", e);
            throw e;
        });
    }
}
exports.LastFmApi = LastFmApi;

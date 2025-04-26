import type {
  ILastFmApi,
  ILastFmApiError,
  ILastFmApiResponse,
  ILastFmApiScrobbleResult,
  ILastFmSession,
  ILastFmTrackInfo,
} from "../types/ILastFmApi";
import { generateSignature } from "../utils/signature";
import { Logger } from "../../../../../packages/logger/Logger";

/**
 * Handles all Last.fm API communication
 */
export class LastFmApi {
  private readonly logger = new Logger("LastFmApi");

  constructor(
    private readonly apiKey: string,
    private readonly sharedSecret: string,
    private readonly baseUrl: string,

    private readonly sessionProvider: () => ILastFmSession
  ) {}

  /**
   * Gets an authentication token from Last.fm
   *
   * @returns A token string for the authentication process
   */
  public async getToken(): Promise<string> {
    const { token } = await this.request("auth.getToken", undefined, {
      noSig: true,
      noSk: true,
      method: "GET",
    });

    return token;
  }

  /**
   * Gets a session from Last.fm using a token
   *
   * @param token Auth token from getToken
   * @returns Session object with key and user information
   */
  public async getSession(token: string): Promise<ILastFmSession> {
    const { session } = await this.request(
      "auth.getSession",
      { token },
      { noSk: true, method: "GET" }
    );

    return session;
  }

  /**
   * Updates the now playing track on Last.fm
   *
   * @param trackInfo Track information to send
   */
  public async updateNowPlaying(trackInfo: ILastFmTrackInfo): Promise<void> {
    const result = await this.request("track.updateNowPlaying", trackInfo);

    this.handleScrobbleResult(result.nowplaying);
  }

  /**
   * Scrobbles a track on Last.fm
   *
   * @param trackInfo Track information to scrobble
   * @param timestamp Unix timestamp when the track was played
   */
  public async scrobble(trackInfo: ILastFmTrackInfo): Promise<void> {
    const result = await this.request("track.scrobble", {
      ...trackInfo,
      timestamp: Math.floor(Date.now() / 1000),
    });

    this.handleScrobbleResult(result.scrobbles.scrobble);
  }

  /**
   * Handles possible warnings from a scrobble result
   *
   * @param result The result to handle
   * @throws Error if track was ignored
   */
  private handleScrobbleResult({
    ignoredMessage,
  }: ILastFmApiScrobbleResult): void {
    const warningMessages: string[] = [];

    if (ignoredMessage?.code !== "0") {
      warningMessages.push(
        `Track was ignored by Last.fm with code: ${ignoredMessage.code}`
      );

      if (ignoredMessage["#text"]) {
        warningMessages.push(ignoredMessage["#text"]);
      }
    }

    if (warningMessages.length > 0) {
      throw new Error(warningMessages.join("; "));
    }
  }

  /**
   * Makes a request to the Last.fm API
   */
  private async request<T extends keyof ILastFmApi>(
    method: T,
    params: ILastFmApi[T],
    options: { noSig?: boolean; noSk?: boolean; method?: "POST" | "GET" } = {
      noSig: false,
      noSk: false,
      method: "POST",
    }
  ): Promise<ILastFmApiResponse[T]> {
    const queryParams = new URLSearchParams();

    const isPostMethod = options.method === "POST";

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) queryParams.append(key, value.toString());
      });
    }

    queryParams.append("method", method);
    queryParams.append("api_key", this.apiKey);

    if (!options.noSk) {
      queryParams.append("sk", this.sessionProvider().key);
    }

    if (!options.noSig) {
      queryParams.append(
        "api_sig",
        generateSignature(queryParams, this.sharedSecret)
      );
    }

    const url = isPostMethod
      ? `${this.baseUrl}?format=json`
      : `${this.baseUrl}?${queryParams.toString()}&format=json`;
    const body = isPostMethod ? queryParams : undefined;

    const response = await fetch(url, { method: options.method, body });

    return await this.handleResponse<T>(response);
  }

  /**
   * Handles a response from the Last.fm API
   *
   * @param response The response to handle
   * @returns The parsed response
   * @throws Error if the response is not JSON
   * @throws Error if the response is an API error
   */
  private async handleResponse<T extends keyof ILastFmApi>(
    response: Response
  ): Promise<ILastFmApiResponse[T]> {
    const text = await response.text().catch((e) => {
      this.logger.error("Failed to read response", e);
      throw e;
    });

    this.logger.debug(`Response: "${text}"`);

    let result: ILastFmApiResponse[T];
    try {
      result = JSON.parse(text);
    } catch (e) {
      this.logger.error("Failed to parse response:", text);
      throw e;
    }

    if (this.isApiError(result)) {
      this.logger.error(
        `Received API error.`,
        `For more information, see https://www.last.fm/api/errorcodes.`,
        result
      );

      throw new Error(result.message);
    }

    return result as ILastFmApiResponse[T];
  }

  /**
   * `ILastFmApiError` type guard
   *
   * @param error The error to check
   * @returns {boolean} True if the error is an API error, false otherwise
   */
  private isApiError(error: unknown): error is ILastFmApiError {
    return (
      typeof error === "object" &&
      error !== null &&
      "error" in error &&
      typeof error.error === "number"
    );
  }
}

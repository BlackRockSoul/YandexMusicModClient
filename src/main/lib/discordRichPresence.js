"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_js_1 = require("../packages/logger/Logger.js");
const store_js_1 = require("./store.js");
const DiscordRPC = require("discord-rpc");
const discordRichPresenceLogger = new Logger_js_1.Logger("DiscordRichPresence");

const settings = () => store_js_1.getModFeatures()?.discordRPC;

const clientId = settings()?.applicationIDForRPC ?? "1124055337234858005";
const GITHUB_LINK = "https://github.com/TheKing-OfTime/YandexMusicModClient";
const SET_ACTIVITY_TIMEOUT_MS = 1500;

let rpc = undefined;
let isReady = false;
let isListeningType = true;
let timeoutId = undefined;
let sendActivityTimeoutId = undefined;

let previousActivity = undefined;

const initRPC = () => {
    rpc = new DiscordRPC.Client({ transport: "ipc" });
    isReady = false;
    isListeningType = false;

    rpc.on("ready", () => {
        isReady = true;
        discordRichPresenceLogger.info("Ready");
    });

    rpc.on("close", (e) => {
        isReady = false;
        discordRichPresenceLogger.info("Closed");
    });

    rpc.on("error", (e) => {
        if (e.name === "Could not connect") {
            isReady = false;
        }
        discordRichPresenceLogger.info("Error", e.name);
    });
};

initRPC();

const states = {
    playing: { icon: "playing", name: "Playing" },
    paused: { icon: "paused", name: "Paused" },
    stopped: { icon: "paused", name: "Stopped" },
    unknown: { icon: "logo", name: "Unknown" },
    default: { icon: "logo", name: "Yandex Music" },
};

function silentTypeCheck(activity) {
    isListeningType = activity.type === 2;
}

function string2Discord(string) {
    if (!string) return string;
    if (string.length <= 1) {
        string += "ㅤ";
    }
    if (string.length > 128) {
        string = string.substring(0, 127);
        string += "…";
    }
    return string;
}

function removeTimestampsFromActivity(activity) {
    let copyActivity = JSON.parse(JSON.stringify(activity));
    copyActivity = copyActivity.startTimestamp
        ? (copyActivity.startTimestamp = 0)
        : copyActivity;
    copyActivity = copyActivity.endTimestamp
        ? (copyActivity.endTimestamp = 0)
        : copyActivity;
    return copyActivity;
}

function serializeActivity(activity) {
    return JSON.stringify(activity);
}

// Проверка значительно ли отличаются временные метки. Нужно для оценки целесообразности отправки нового SET_ACTIVITY
function isTimestampsDifferent(activityA, activityB) {
    const diff =
        Math.abs(
            (activityA.startTimestamp ?? 0) - (activityB.startTimestamp ?? 0),
        ) + Math.abs((activityA.endTimestamp ?? 0) - (activityB.endTimestamp ?? 0));
    discordRichPresenceLogger.info(
        diff,
        (activityA.startTimestamp ?? 0) - (activityB.startTimestamp ?? 0),
        (activityA.endTimestamp ?? 0) - (activityB.endTimestamp ?? 0),
    );
    return diff > 2000;
}

function compareActivities(newActivity) {
    if (!previousActivity) return false;
    return (
        serializeActivity(removeTimestampsFromActivity(newActivity)) ===
        serializeActivity(removeTimestampsFromActivity(previousActivity)) &&
        !isTimestampsDifferent(newActivity, previousActivity)
    );
}

async function setActivity(
    state,
    trackName = "unknown",
    trackArtist = undefined,
    trackAlbum = undefined,
    trackAlbumAvatar = "logo",
    trackProgress = undefined,
    trackDurationMs = undefined,
    deepShareTrackUrl = undefined,
    webShareTrackUrl = undefined,
    currentDevice = undefined,
) {
    if (!(settings()?.enable ?? true)) {
        if (previousActivity) {
            await rpc.clearActivity();
            previousActivity = undefined;
            await rpc.destroy();
        }
        return;
    }
    if (!rpc || !isReady) {
        if (rpc) {
            const connected = await tryReconnect();
            if (!connected) {
                return false;
            }
        } else {
            return false;
        }
    }

    let startTimestamp = Math.round(Date.now() - trackProgress * 1000);
    let endTimestamp = startTimestamp + trackDurationMs;
    let stateKey = states[state]?.icon;
    let stateText = states[state]?.name;

    stateText += " on " + (currentDevice?.info?.type ?? "DESKTOP");

    if (!states[state]) {
        stateKey = states.unknown?.icon;
        stateText = states.unknown?.name;
    }

    if (state !== "playing") {
        startTimestamp = undefined;
    }
    if (!isListeningType || state !== "playing") {
        endTimestamp = undefined;
    }

    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
    }

    if (state === "paused") {
        timeoutId = setTimeout(
            () => {
                rpc.clearActivity();
                timeoutId = undefined;
            },
            (settings()?.afkTimeout ?? 15) * 60 * 1000,
        );
    }

    let activityObject = {
        type: 2,
        details: string2Discord(trackName),
        state: string2Discord(trackArtist),
        largeImageKey: trackAlbumAvatar,
        startTimestamp,
        endTimestamp,
        instance: false,
    };

    if (settings()?.showSmallIcon ?? true) {
        activityObject.smallImageKey = stateKey;
        activityObject.smallImageText = stateText;
    }

    if (settings()?.showAlbum ?? true) {
        activityObject.largeImageText = string2Discord(trackAlbum);
    }

    if (
        (deepShareTrackUrl || webShareTrackUrl) &&
        (settings()?.showButtons ?? true)
    ) {
        if (!(settings()?.overrideDeepLinksExperiment ?? false)) {
            activityObject.buttons = [
                {
                    label: "Listen in Yandex Music App",
                    url: deepShareTrackUrl,
                },
                {
                    label: "Listen in Yandex Music Web",
                    url: webShareTrackUrl,
                },
            ];
        } else if (settings()?.showGitHubButton ?? true) {
            activityObject.buttons = [
                {
                    label: "Listen on Yandex Music",
                    url: webShareTrackUrl,
                },
                {
                    label: "Install from GitHub",
                    url: GITHUB_LINK,
                },
            ];
        } else {
            activityObject.buttons = [
                {
                    label: "Listen on Yandex Music",
                    url: webShareTrackUrl,
                },
            ];
        }
    }

    if (compareActivities(activityObject)) return true;

    previousActivity = activityObject;

    if (sendActivityTimeoutId) {
        clearTimeout(sendActivityTimeoutId);
        sendActivityTimeoutId = undefined;
        discordRichPresenceLogger.log(
            "SET_ACTIVITY Suppressed:",
            previousActivity,
        );
    }
    sendActivityTimeoutId = setTimeout(() => {
        discordRichPresenceLogger.log("Activity sent:",previousActivity);
        rpc
            .setActivity(previousActivity)
            .then((activity) => silentTypeCheck(activity))
            .catch((e) => {
                discordRichPresenceLogger.error(e);
                //console.log(e.name);
                //isReady = false;
            });
    }, SET_ACTIVITY_TIMEOUT_MS);
}

const tryConnect = () => {
    try {
        rpc.clearActivity().catch((e) => {discordRichPresenceLogger.error('ClearActivity failed:', e);});
        return rpc.login({ clientId })
    } catch (e) {
        discordRichPresenceLogger.error('Try connection failed:', e);
    }
};

const tryReconnect = async () => {
    try {
        await rpc.clearActivity().catch((e) => {discordRichPresenceLogger.error('ClearActivity failed:', e);});;
        await rpc.destroy();
        rpc = null;
        initRPC();
        return await rpc.login({ clientId })
    } catch (e) {
        discordRichPresenceLogger.error('Try reconnection failed:', e);
    }
};

tryConnect();

const getArtist = (artistsArray) => {
    if (!artistsArray?.[0]?.name) return undefined;
    let artistsLabel = "by " + artistsArray[0].name;
    artistsArray.shift();
    artistsArray.forEach((artist) => {
        artistsLabel += ", " + artist.name;
    });
    return artistsLabel;
};

const fromYnisonState = (ynisonState) => {
    if (!settings().fromYnison) return;
    let partialPlayerState = {};
    let currentTrackData =
        ynisonState?.rawData?.player_state?.player_queue?.playable_list[
            ynisonState?.rawData?.player_state?.player_queue?.current_playable_index
            ];
    if (!currentTrackData) return;
    partialPlayerState.track = {
        title: currentTrackData?.title,
        coverUri: currentTrackData?.cover_url_optional,
        id: currentTrackData?.playable_id,
        ...(currentTrackData.album_id_optional
            ? { albums: [{ id: currentTrackData.album_id_optional }] }
            : undefined),
        durationMs: parseInt(
            ynisonState?.rawData?.player_state?.status?.duration_ms,
        ),
    };
    partialPlayerState.progress = parseInt(
        ynisonState?.rawData?.player_state?.status?.progress_ms,
    );
    partialPlayerState.status = ynisonState?.rawData?.player_state?.status?.paused
        ? "paused"
        : "playing";

    partialPlayerState.devices = ynisonState?.rawData?.devices;

    let currentDevice = undefined;

    ynisonState?.rawData?.devices.forEach((device) => {
        if (
            device?.info?.device_id &&
            device?.info?.device_id ===
            ynisonState?.rawData?.active_device_id_optional
        )
            currentDevice = device;
    });

    partialPlayerState.currentDevice = currentDevice;

    if (partialPlayerState.progress && partialPlayerState.progress !== 0)
        partialPlayerState.progress = Math.round(
            partialPlayerState.progress / 1000,
        );

    discordRichPresence(partialPlayerState);
};

const discordRichPresence = (playingState) => {
    if (!playingState.track) return undefined;
    if (playingState.status.startsWith("loading")) {
        return; //playingState.status = "playing";
    }
    let title = playingState.track?.title;
    if (playingState.track?.version) {
        title = playingState.track.title + ` (${playingState.track.version})`;
    }

    const artist = getArtist(playingState.track?.artists?.slice());

    let album = playingState.track?.albums?.[0]?.title;

    if (title === album || album === undefined) {
        album = undefined;
    } else if (isListeningType) {
        album = "on " + album;
    }

    let albumArt = undefined;

    if (playingState.track?.coverUri)
        albumArt = `https://${playingState.track.coverUri}`.replace(
            "%%",
            "400x400",
        );

    const shareTrackPath = `album/${playingState.track.albums?.[0]?.id}/track/${playingState.track.id}`;
    const deepShareTrackUrl = "yandexmusic://" + shareTrackPath;
    const webShareTrackUrl =
        "https://music.yandex.ru/" +
        shareTrackPath +
        "?utm_source=discord&utm_medium=rich_presence_click";

    setActivity(
        playingState.status,
        title,
        artist,
        album,
        albumArt,
        playingState.progress,
        playingState.track.durationMs,
        deepShareTrackUrl,
        webShareTrackUrl,
        playingState.currentDevice,
    ).catch((e) =>
        discordRichPresenceLogger.error("Rich Presence set failed: " + e),
    );
};
exports.discordRichPresence = discordRichPresence;
exports.fromYnisonState = fromYnisonState;

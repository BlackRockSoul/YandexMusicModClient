"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSignature = generateSignature;
const crypto = require("crypto");
function generateSignature(params, sharedSecret) {
    const sortedParams = Array.from(params.entries())
        .filter(([key]) => !["format", "callback", "api_sig"].includes(key))
        .sort(([a], [b]) => a.localeCompare(b));
    const signatureString = sortedParams.map(([key, value]) => `${key}${value}`).join("") +
        sharedSecret;
    return crypto.createHash("md5").update(signatureString).digest("hex");
}

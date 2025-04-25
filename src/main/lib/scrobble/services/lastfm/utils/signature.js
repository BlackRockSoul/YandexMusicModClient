"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSignature = generateSignature;
var crypto = require("crypto");
function generateSignature(params, sharedSecret) {
    var sortedParams = Array.from(params.entries())
        .filter(function (_a) {
        var key = _a[0];
        return !["format", "callback", "api_sig"].includes(key);
    })
        .sort(function (_a, _b) {
        var a = _a[0];
        var b = _b[0];
        return a.localeCompare(b);
    });
    var signatureString = sortedParams.map(function (_a) {
        var key = _a[0], value = _a[1];
        return "".concat(key).concat(value);
    }).join("") +
        sharedSecret;
    return crypto.createHash("md5").update(signatureString).digest("hex");
}

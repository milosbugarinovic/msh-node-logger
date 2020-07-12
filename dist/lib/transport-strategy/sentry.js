"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sentry = void 0;
var os_1 = require("os");
var winston_transport_sentry_node_1 = require("winston-transport-sentry-node");
var Sentry = /** @class */ (function () {
    function Sentry(sentryOptions, defaultMeta) {
        if (defaultMeta === void 0) { defaultMeta = {}; }
        var _a;
        this.__sentryOptions = sentryOptions;
        this.__sentryOptions.level = (_a = sentryOptions.level) !== null && _a !== void 0 ? _a : 'error';
        if (!this.__sentryOptions.sentry)
            this.__sentryOptions.sentry = {};
        if (!this.__sentryOptions.sentry.dsn)
            throw new Error('Sentry requires dsn');
        this.__sentryOptions.sentry.serverName = this.__sentryOptions.sentry.serverName || os_1.default.hostname();
        this.__sentryOptions.sentry.environment = this.__sentryOptions.sentry.environment || defaultMeta.environment;
        this.__sentryOptions.sentry.release = this.__sentryOptions.sentry.release || defaultMeta.release;
    }
    Sentry.prototype.create = function () {
        return new winston_transport_sentry_node_1.default(this.__sentryOptions);
    };
    return Sentry;
}());
exports.Sentry = Sentry;
//# sourceMappingURL=sentry.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackHook = void 0;
var winston_slack_webhook_transport_1 = require("winston-slack-webhook-transport");
var SlackHook = /** @class */ (function () {
    function SlackHook(transportOptions) {
        var _a;
        this.__slackHookOptions = transportOptions;
        this.__slackHookOptions.level = (_a = transportOptions.level) !== null && _a !== void 0 ? _a : 'info';
    }
    SlackHook.prototype.create = function () {
        return new winston_slack_webhook_transport_1.default(this.__slackHookOptions);
    };
    return SlackHook;
}());
exports.SlackHook = SlackHook;
//# sourceMappingURL=slack-hook.js.map
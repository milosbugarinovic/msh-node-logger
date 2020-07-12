"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
var winston_1 = require("winston");
var Console = /** @class */ (function () {
    function Console(transportOptions, handleRejections) {
        if (handleRejections === void 0) { handleRejections = true; }
        var _a, _b;
        this.__consoleOptions = transportOptions;
        this.__consoleOptions.level = (_a = transportOptions.level) !== null && _a !== void 0 ? _a : 'info';
        this.__consoleOptions.handleExceptions = (_b = transportOptions.handleExceptions) !== null && _b !== void 0 ? _b : true;
        this.__handleRejections = handleRejections;
    }
    Console.prototype.create = function () {
        var transport = new winston_1.transports.Console(this.__consoleOptions);
        // @ts-ignore
        transport['handleRejections'] = this.__handleRejections;
        return transport;
    };
    return Console;
}());
exports.Console = Console;
//# sourceMappingURL=console.js.map
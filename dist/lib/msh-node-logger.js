"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_recovery_1 = require("./recovery-strategy/no-recovery");
var MshNodeLogger = /** @class */ (function () {
    function MshNodeLogger(transactionStrategy, recoveryStrategy) {
        if (recoveryStrategy === void 0) { recoveryStrategy = new no_recovery_1.NoRecovery(); }
        this.__transportStrategy = transactionStrategy;
        this.__recoveryStrategy = recoveryStrategy;
    }
    MshNodeLogger.prototype.createTransport = function () {
        var _this = this;
        var transport = this.__transportStrategy.create();
        transport.on('error', function () {
            _this.__recoveryStrategy.startRecovery();
        });
        return transport;
    };
    MshNodeLogger.prototype.onRecovered = function (cb) {
        var _this = this;
        this.__recoveryStrategy.onRecovered(function () {
            cb(_this.createTransport());
        });
    };
    return MshNodeLogger;
}());
exports.default = MshNodeLogger;
//# sourceMappingURL=msh-node-logger.js.map
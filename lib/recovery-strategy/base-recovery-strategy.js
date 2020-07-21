"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRecoveryStrategy = void 0;
var BaseRecoveryStrategy = /** @class */ (function () {
    function BaseRecoveryStrategy() {
        this.__callBackFunctions = [];
    }
    BaseRecoveryStrategy.prototype._addCallBackFunction = function (cb) {
        if (this.__callBackFunctions.indexOf(cb) === -1)
            this.__callBackFunctions.push(cb);
    };
    BaseRecoveryStrategy.prototype._triggerAllCallBackFunction = function () {
        this.__callBackFunctions.forEach(function (cb) { return cb(); });
    };
    return BaseRecoveryStrategy;
}());
exports.BaseRecoveryStrategy = BaseRecoveryStrategy;
//# sourceMappingURL=base-recovery-strategy.js.map
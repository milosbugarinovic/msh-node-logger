"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoRecovery = void 0;
var base_recovery_strategy_1 = require("./base-recovery-strategy");
var NoRecovery = /** @class */ (function (_super) {
    __extends(NoRecovery, _super);
    function NoRecovery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoRecovery.prototype.startRecovery = function () {
        return;
    };
    NoRecovery.prototype.onRecovered = function (cb) {
        return;
    };
    return NoRecovery;
}(base_recovery_strategy_1.BaseRecoveryStrategy));
exports.NoRecovery = NoRecovery;
//# sourceMappingURL=no-recovery.js.map
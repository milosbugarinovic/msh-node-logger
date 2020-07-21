"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Byot = void 0;
var Byot = /** @class */ (function () {
    function Byot(createTransportFn) {
        this.__createTransportFn = createTransportFn;
    }
    Byot.prototype.create = function () {
        return this.__createTransportFn();
    };
    return Byot;
}());
exports.Byot = Byot;
//# sourceMappingURL=byot.js.map
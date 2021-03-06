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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsReachable = void 0;
var base_recovery_strategy_1 = require("./base-recovery-strategy");
var isReachable = require('is-reachable');
var IsReachable = /** @class */ (function (_super) {
    __extends(IsReachable, _super);
    function IsReachable(target, retryTimeout) {
        if (target === void 0) { target = 'google.com'; }
        if (retryTimeout === void 0) { retryTimeout = 4000; }
        var _this = _super.call(this) || this;
        _this.__isRecovering = false;
        _this.__retryTimout = retryTimeout;
        _this.__target = target;
        return _this;
    }
    IsReachable.prototype.onRecovered = function (cb) {
        this._addCallBackFunction(cb);
    };
    IsReachable.prototype.startRecovery = function () {
        // console.log('IsReachable: start recovery')
        if (this.__isRecovering)
            return;
        this.__isRecovering = true;
        this.__checkUntilInternetAvailable().catch(function (err) {
            console.error(err);
        });
    };
    IsReachable.prototype.__connectionRecovered = function () {
        // console.log('IsReachable: connection recovered')
        this.__isRecovering = false;
        this._triggerAllCallBackFunction();
    };
    IsReachable.prototype.__checkUntilInternetAvailable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.__isRecovering) return [3 /*break*/, 2];
                        // console.log('IsReachable: check is reachable')
                        return [4 /*yield*/, isReachable(this.__target, {
                                timeout: this.__retryTimout,
                            })
                                .then(function () {
                                _this.__connectionRecovered();
                            })
                                .catch(function () {
                                console.error('IsReachable: host not reachable');
                            })];
                    case 1:
                        // console.log('IsReachable: check is reachable')
                        _a.sent();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return IsReachable;
}(base_recovery_strategy_1.BaseRecoveryStrategy));
exports.IsReachable = IsReachable;
//# sourceMappingURL=is-reachable.js.map
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.mshNodeLogger = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
    }(BaseRecoveryStrategy));

    var MshNodeLogger = /** @class */ (function () {
        function MshNodeLogger(transactionStrategy, recoveryStrategy) {
            if (recoveryStrategy === void 0) { recoveryStrategy = new NoRecovery(); }
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

    return MshNodeLogger;

})));
//# sourceMappingURL=msh-node-logger.umd.js.map

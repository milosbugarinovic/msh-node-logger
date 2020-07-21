"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElasticSearch = void 0;
var winston_elasticsearch_1 = require("winston-elasticsearch");
var ElasticSearch = /** @class */ (function () {
    function ElasticSearch(elasticSearchOptions) {
        var _a;
        this.__elasticSearchOptions = elasticSearchOptions;
        this.__elasticSearchOptions.level = (_a = elasticSearchOptions.level) !== null && _a !== void 0 ? _a : 'info';
    }
    ElasticSearch.prototype.create = function () {
        return new winston_elasticsearch_1.ElasticsearchTransport(this.__elasticSearchOptions);
    };
    return ElasticSearch;
}());
exports.ElasticSearch = ElasticSearch;
//# sourceMappingURL=elastic-search.js.map
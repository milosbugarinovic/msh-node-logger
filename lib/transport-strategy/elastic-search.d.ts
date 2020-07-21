import { ElasticsearchTransportOptions } from 'winston-elasticsearch';
import * as Transport from 'winston-transport';
import { TransportStrategy } from './index';
export declare class ElasticSearch implements TransportStrategy {
    private readonly __elasticSearchOptions;
    constructor(elasticSearchOptions: ElasticsearchTransportOptions);
    create(): Transport;
}

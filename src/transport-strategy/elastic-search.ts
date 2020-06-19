import { TransportStrategy } from './index'
import { ElasticsearchTransport, ElasticsearchTransportOptions } from 'winston-elasticsearch'
import * as Transport from 'winston-transport'

export class ElasticSearch implements TransportStrategy {
  private readonly __elasticSearchOptions: ElasticsearchTransportOptions

  constructor(elasticSearchOptions: ElasticsearchTransportOptions) {
    this.__elasticSearchOptions = elasticSearchOptions
    this.__elasticSearchOptions.level = elasticSearchOptions.level ?? 'info'
  }

  public create(): Transport {
    return new ElasticsearchTransport(this.__elasticSearchOptions) as Transport
  }
}

import * as Transport from 'winston-transport';
import { SentryTransportOptions } from 'winston-transport-sentry-node/dist/transport';
import { TransportStrategy } from './index';
export declare type WinstonSentryDefaultMetaType = {
    environment?: string;
    release?: string;
};
export declare class Sentry implements TransportStrategy {
    private readonly __sentryOptions;
    constructor(sentryOptions: SentryTransportOptions, defaultMeta?: WinstonSentryDefaultMetaType);
    create(): Transport;
}

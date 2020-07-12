import * as Transport from 'winston-transport';
import { ConsoleTransportOptions } from 'winston/lib/winston/transports';
import { TransportStrategy } from './index';
export declare class Console implements TransportStrategy {
    private readonly __consoleOptions;
    private readonly __handleRejections;
    constructor(transportOptions: ConsoleTransportOptions, handleRejections?: boolean);
    create(): Transport;
}

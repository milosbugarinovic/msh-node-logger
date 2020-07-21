import * as Transport from 'winston-transport';
import { TransportStrategy } from './index';
export declare class Byot implements TransportStrategy {
    private readonly __createTransportFn;
    constructor(createTransportFn: () => Transport);
    create(): Transport;
}

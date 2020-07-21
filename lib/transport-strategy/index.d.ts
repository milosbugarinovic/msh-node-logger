import * as Transport from 'winston-transport';
export interface TransportStrategy {
    create(): Transport;
}

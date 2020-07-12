import * as Transport from 'winston-transport';
import { NoRecovery } from './recovery-strategy/no-recovery';
import { TransportStrategy } from './transport-strategy/';
export default class MshNodeLogger {
    private __transportStrategy;
    private __recoveryStrategy;
    constructor(transactionStrategy: TransportStrategy, recoveryStrategy?: NoRecovery);
    createTransport(): Transport;
    onRecovered(cb: (transport: Transport) => void): void;
}

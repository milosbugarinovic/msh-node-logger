import { BaseRecoveryStrategy } from './base-recovery-strategy';
import { RecoveryStrategy } from './index';
export declare class InternetAvailable extends BaseRecoveryStrategy implements RecoveryStrategy {
    private readonly __retryTimout;
    private readonly __domainName;
    private __isRecovering;
    constructor(domainName?: string, retryTimeout?: number);
    onRecovered(cb: () => void): void;
    startRecovery(): void;
    private __internetRecovered;
    private __checkUntilInternetAvailable;
}

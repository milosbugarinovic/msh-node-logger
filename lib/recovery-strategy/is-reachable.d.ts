import { BaseRecoveryStrategy } from './base-recovery-strategy';
import { RecoveryStrategy } from './index';
export declare class IsReachable extends BaseRecoveryStrategy implements RecoveryStrategy {
    private readonly __retryTimout;
    private readonly __target;
    private __isRecovering;
    constructor(target?: string, retryTimeout?: number);
    onRecovered(cb: () => void): void;
    startRecovery(): void;
    private __connectionRecovered;
    private __checkUntilInternetAvailable;
}

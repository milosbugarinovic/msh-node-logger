import { BaseRecoveryStrategy } from './base-recovery-strategy';
import { RecoveryStrategy } from './index';
export declare class NoRecovery extends BaseRecoveryStrategy implements RecoveryStrategy {
    startRecovery(): void;
    onRecovered(cb: () => void): void;
}

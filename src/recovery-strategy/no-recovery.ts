import { BaseRecoveryStrategy } from './base-recovery-strategy'
import { RecoveryStrategy } from './index'

export class NoRecovery extends BaseRecoveryStrategy implements RecoveryStrategy {
  public startRecovery(): void {
  }

  public onRecovered(cb: () => void): void {
  }
}

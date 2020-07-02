import { BaseRecoveryStrategy } from './base-recovery-strategy'
import { RecoveryStrategy } from './index'

export class NoRecovery extends BaseRecoveryStrategy implements RecoveryStrategy {
  public startRecovery(): void {
    return
  }

  public onRecovered(cb: () => void): void {
    return
  }
}

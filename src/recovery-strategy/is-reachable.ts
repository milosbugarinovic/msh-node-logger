import { BaseRecoveryStrategy } from './base-recovery-strategy'
import { RecoveryStrategy } from './index'

const isReachable = require('is-reachable')

export class IsReachable extends BaseRecoveryStrategy implements RecoveryStrategy {
  private readonly __retryTimout: number
  private readonly __target: string
  private __isRecovering = false

  constructor(target = 'google.com', retryTimeout = 4000) {
    super()
    this.__retryTimout = retryTimeout
    this.__target = target
  }

  public onRecovered(cb: () => void): void {
    this._addCallBackFunction(cb)
  }

  public startRecovery(): void {
    // console.log('IsReachable: start recovery')
    if (this.__isRecovering) return
    this.__isRecovering = true
    this.__checkUntilInternetAvailable().catch( err => {
      console.error(err)
    })
  }

  private __connectionRecovered(): void {
    // console.log('IsReachable: connection recovered')
    this.__isRecovering = false
    this._triggerAllCallBackFunction()
  }

  private async __checkUntilInternetAvailable(): Promise<void> {
    // console.log('IsReachable: check until internet available')
    while (this.__isRecovering) {
      // console.log('IsReachable: check is reachable')
      await isReachable(this.__target, {
        timeout: this.__retryTimout,
      })
        .then(() => {
          this.__connectionRecovered()
        })
        .catch(() => {
          console.error('IsReachable: host not reachable')
        })
    }
  }
}

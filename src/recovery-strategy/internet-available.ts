import { BaseRecoveryStrategy } from './base-recovery-strategy'
import { RecoveryStrategy } from './index'

const internetAvailable = require('internet-available')

export class InternetAvailable extends BaseRecoveryStrategy implements RecoveryStrategy {
  private readonly __retryTimout: number
  private readonly __domainName: string
  private __isRecovering = false

  constructor(domainName = 'google.com', retryTimeout = 4000) {
    super()
    this.__retryTimout = retryTimeout
    this.__domainName = domainName
  }

  public onRecovered(cb: () => void): void {
    this._addCallBackFunction(cb)
  }

  public startRecovery(): void {
    // console.log('InternetAvailable: start recovery')
    if (this.__isRecovering) return
    this.__isRecovering = true
    this.__checkUntilInternetAvailable().catch( err => {
      console.error(err)
    })
  }

  private __internetRecovered(): void {
    // console.log('InternetAvailable: internet recovered')
    this.__isRecovering = false
    this._triggerAllCallBackFunction()
  }

  private async __checkUntilInternetAvailable(): Promise<void> {
    // console.log('InternetAvailable: check until internet available')
    while (this.__isRecovering) {
      // console.log('InternetAvailable: check is reachable')
      await internetAvailable({
        domainName: this.__domainName,
        timeout: this.__retryTimout,
      })
        .then(() => {
          this.__internetRecovered()
        })
        .catch(() => {
          console.error('InternetAvailable: no internet connection')
        })
    }
  }
}

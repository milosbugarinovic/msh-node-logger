import * as Transport from 'winston-transport'
import { RecoveryStrategy } from './recovery-strategy'
import { NoRecovery } from './recovery-strategy/no-recovery'
import { TransportStrategy } from './transport-strategy/'

export default class MshNodeLogger {
  private __transportStrategy: TransportStrategy
  private __recoveryStrategy: RecoveryStrategy

  constructor(transactionStrategy: TransportStrategy, recoveryStrategy = new NoRecovery()) {
    this.__transportStrategy = transactionStrategy
    this.__recoveryStrategy = recoveryStrategy
  }

  public createTransport(): Transport {
    const transport = this.__transportStrategy.create()
    transport.on('error', () => {
      this.__recoveryStrategy.startRecovery()
    })
    return transport
  }
  public onRecovered(cb: (transport: Transport) => void): void {
    this.__recoveryStrategy.onRecovered(() => {
      cb(this.createTransport())
    })
  }
}

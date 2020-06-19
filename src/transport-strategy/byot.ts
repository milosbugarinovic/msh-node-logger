import { TransportStrategy } from './index'
import * as Transport from 'winston-transport'

export class Byot implements TransportStrategy {
  private readonly __createTransportFn: () => Transport

  constructor(createTransportFn: () => Transport) {
    this.__createTransportFn = createTransportFn
  }

  public create(): Transport {
    return this.__createTransportFn()
  }
}

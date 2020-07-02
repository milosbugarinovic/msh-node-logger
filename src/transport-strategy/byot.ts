import * as Transport from 'winston-transport'
import { TransportStrategy } from './index'

export class Byot implements TransportStrategy {
  private readonly __createTransportFn: () => Transport

  constructor(createTransportFn: () => Transport) {
    this.__createTransportFn = createTransportFn
  }

  public create(): Transport {
    return this.__createTransportFn()
  }
}

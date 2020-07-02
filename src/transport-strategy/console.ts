import { transports } from 'winston'
import * as Transport from 'winston-transport'
import { ConsoleTransportOptions } from 'winston/lib/winston/transports'
import { TransportStrategy } from './index'

export class Console implements TransportStrategy {
  private readonly __consoleOptions: ConsoleTransportOptions
  private readonly __handleRejections: boolean

  constructor(transportOptions: ConsoleTransportOptions, handleRejections= true) {
    this.__consoleOptions = transportOptions
    this.__consoleOptions.level = transportOptions.level ?? 'info'
    this.__consoleOptions.handleExceptions = transportOptions.handleExceptions ?? true
    this.__handleRejections = handleRejections
  }

  public create(): Transport {
    const transport = new transports.Console(this.__consoleOptions)
    // @ts-ignore
    transport['handleRejections'] = this.__handleRejections
    return transport
  }
}

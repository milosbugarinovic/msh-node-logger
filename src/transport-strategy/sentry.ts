import WinstonSentry from 'winston-transport-sentry-node'
import { SentryTransportOptions } from 'winston-transport-sentry-node/dist/transport'
import { TransportStrategy } from './index'
import * as Transport from 'winston-transport'
import os from 'os'

export type WinstonSentryDefaultMetaType = {
  environment?: string
  release?: string
}
export class Sentry implements TransportStrategy {
  private readonly __sentryOptions: SentryTransportOptions

  constructor(sentryOptions: SentryTransportOptions, defaultMeta: WinstonSentryDefaultMetaType = {}) {
    this.__sentryOptions = sentryOptions
    this.__sentryOptions.level = sentryOptions.level ?? 'error'
    if (!this.__sentryOptions.sentry) this.__sentryOptions.sentry = {}
    if (!this.__sentryOptions.sentry.dsn) throw new Error('Sentry requires dsn')

    this.__sentryOptions.sentry.serverName = this.__sentryOptions.sentry.serverName || os.hostname()
    this.__sentryOptions.sentry.environment = this.__sentryOptions.sentry.environment || defaultMeta.environment
    this.__sentryOptions.sentry.release = this.__sentryOptions.sentry.release || defaultMeta.release
  }

  public create(): Transport {
    return new WinstonSentry(this.__sentryOptions) as Transport
  }
}

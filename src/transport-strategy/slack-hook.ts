import { SlackHookOptions } from 'winston-slack-webhook-transport'
import WinstonSlackHook from 'winston-slack-webhook-transport'
import * as Transport from 'winston-transport'
import { TransportStrategy } from './index'

export class SlackHook implements TransportStrategy {
  private readonly __slackHookOptions: SlackHookOptions

  constructor(transportOptions: SlackHookOptions) {
    this.__slackHookOptions= transportOptions
    this.__slackHookOptions.level = transportOptions.level ?? 'info'

  }

  public create() :Transport {
    return new WinstonSlackHook(this.__slackHookOptions)
  }
}

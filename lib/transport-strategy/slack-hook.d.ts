import { SlackHookOptions } from 'winston-slack-webhook-transport';
import * as Transport from 'winston-transport';
import { TransportStrategy } from './index';
export declare class SlackHook implements TransportStrategy {
    private readonly __slackHookOptions;
    constructor(transportOptions: SlackHookOptions);
    create(): Transport;
}

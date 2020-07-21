export declare class BaseRecoveryStrategy {
    private readonly __callBackFunctions;
    protected _addCallBackFunction(cb: () => void): void;
    protected _triggerAllCallBackFunction(): void;
}

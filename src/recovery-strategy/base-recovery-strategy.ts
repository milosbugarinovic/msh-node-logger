export class BaseRecoveryStrategy {
  private readonly __callBackFunctions: (() => void)[] = []

  protected _addCallBackFunction(cb: () => void): void {
    if (this.__callBackFunctions.indexOf(cb) === -1) this.__callBackFunctions.push(cb)
  }
  protected _triggerAllCallBackFunction(): void {
    this.__callBackFunctions.forEach((cb) => cb())
  }
}

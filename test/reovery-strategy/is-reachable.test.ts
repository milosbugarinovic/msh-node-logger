import { IsReachable } from '../../src/recovery-strategy/is-reachable'
jest.mock('is-reachable')

describe('internetAvailable', () => {
  const isReachable = require('is-reachable')

  it('should call on recovered if target is reachable', (done) => {
    const instance = new IsReachable()
    isReachable(true)
    instance.onRecovered(() => {
      expect(isReachable).toBeCalled()
      expect(isReachable).toBeCalledWith('google.com', { timeout: 4000 })
      expect(instance['__isRecovering']).toBeFalsy()
      done()
    })
    expect(instance['__isRecovering']).toBeFalsy()
    instance.startRecovery()

    expect(instance['__isRecovering']).toBeTruthy()
  })
  it('should check if target is reachable with different target and timeout', (done) => {
    const instance = new IsReachable('192.168.2.200', 2000)
    isReachable(true)
    instance.onRecovered(() => {
      expect(isReachable).toBeCalled()
      expect(isReachable).toBeCalledWith('192.168.2.200', { timeout: 2000 })
      done()
    })
    instance.startRecovery()
  })
})

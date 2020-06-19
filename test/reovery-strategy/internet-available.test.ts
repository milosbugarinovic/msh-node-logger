import { InternetAvailable } from '../../src/recovery-strategy/internet-available'
jest.mock('internet-available')

describe('internetAvailable', () => {
  const internetAvailable = require('internet-available')

  it('should call on recovered if connected to internet', (done) => {
    const instance = new InternetAvailable()
    internetAvailable(true)
    instance.onRecovered(() => {
      expect(internetAvailable).toBeCalled()
      expect(internetAvailable).toBeCalledWith({domainName:'google.com', timeout:4000})
      expect(instance['__isRecovering']).toBeFalsy()
      done()
    })
    expect(instance['__isRecovering']).toBeFalsy()
    instance.startRecovery()

    expect(instance['__isRecovering']).toBeTruthy()
  })
  it('should check if internet is connected with different domain and timeout', (done) => {
    const instance = new InternetAvailable('google.rs',2000)
    internetAvailable(true)
    instance.onRecovered(() => {
      expect(internetAvailable).toBeCalled()
      expect(internetAvailable).toBeCalledWith({domainName:'google.rs', timeout:2000})
      done()
    })
    instance.startRecovery()
  })
})

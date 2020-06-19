import MshNodeLogger from '../src/msh-node-logger'
import { TransportStrategy } from '../src/transport-strategy/'
import { Console } from '../src/transport-strategy/console'
import { InternetAvailable } from '../src/recovery-strategy/internet-available'

describe('MshNodeLogger', () => {
  it('MshNodeLogger is instantiable', () => {
    expect(new MshNodeLogger({} as TransportStrategy)).toBeInstanceOf(MshNodeLogger)
  })

  it('should create instance with default values', () => {
    const dummyTransportStrategy = {} as TransportStrategy
    const instance = new MshNodeLogger(dummyTransportStrategy)
    expect(instance['__transportStrategy']).toBe(dummyTransportStrategy)
    expect(instance['__recoveryStrategy'].constructor.name).toEqual('NoRecovery')
  })
  it('should create instance with passed params', () => {
    const dummyConsole = {} as Console
    const dummyInternetAvailable = {} as InternetAvailable
    const instance = new MshNodeLogger(dummyConsole, dummyInternetAvailable)
    expect(instance['__transportStrategy']).toBe(dummyConsole)
    expect(instance['__recoveryStrategy']).toBe(dummyInternetAvailable)
  })
  it('should create new transport', () => {
    const dummyTransport = {
      on: jest.fn(),
    }
    const dummyTransportStrategy = {
      create: jest.fn(() => {
        return dummyTransport as any
      }),
    } as TransportStrategy

    const instance = new MshNodeLogger(dummyTransportStrategy)
    const result = instance.createTransport()

    expect(result).toBe(dummyTransport)
    expect(dummyTransportStrategy.create).toBeCalledTimes(1)
    expect(dummyTransport.on).toBeCalledWith('error', expect.any(Function))
  })

  it('should register recovery strategy', () => {
    const dummyTransport = {} as any
    const dummyTransportStrategy = {} as TransportStrategy
    const dummyRecoveryStrategy = {
      onRecovered: jest.fn((cb) => {
        cb()
      }),
    } as any
    const instance = new MshNodeLogger(dummyTransportStrategy, dummyRecoveryStrategy)
    const dummyOnRecoveredCallBack = jest.fn()

    const instanceCreateTransportSpy = jest.spyOn(instance, 'createTransport')
    instanceCreateTransportSpy.mockReturnValue(dummyTransport)
    instance.onRecovered(dummyOnRecoveredCallBack)
    expect(dummyRecoveryStrategy.onRecovered).toBeCalledTimes(1)
    expect(instanceCreateTransportSpy).toBeCalledTimes(1)
    expect(dummyOnRecoveredCallBack).toBeCalledTimes(1)
    expect(dummyOnRecoveredCallBack).toBeCalledWith(dummyTransport)
  })
})

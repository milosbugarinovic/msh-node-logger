import { Console } from '../../src/transport-strategy/console'
import { transports } from 'winston'
jest.mock('winston')

describe('Console', () => {
  it('Console is instantiable', () => {
    expect(new Console({})).toBeInstanceOf(Console)
  })

  it('should create an instance with default values', () => {
    const instance = new Console({})
    expect(instance['__consoleOptions'].level).toEqual('info')
    expect(instance['__consoleOptions'].handleExceptions).toBeTruthy()
    expect(instance['__handleRejections']).toBeTruthy()
  })

  it('should create an instance with passed properties', () => {
    const instance = new Console({ level: 'error', handleExceptions: false }, false)
    expect(instance['__consoleOptions'].level).toEqual('error')
    expect(instance['__consoleOptions'].handleExceptions).toBeFalsy()
    expect(instance['__handleRejections']).toBeFalsy()
  })

  it('should return transport on create', () => {
    const instance = new Console({})
    const result = instance.create()
    expect(transports.Console).toBeCalledTimes(1)
    expect(transports.Console).toBeCalledWith(instance['__consoleOptions'])
    expect(result).toBeDefined()
    expect((result as any)['handleRejections']).toBeTruthy()
  })
})

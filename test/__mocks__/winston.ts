import * as Transport from 'winston-transport'

const Console = (): Transport => {
  return {} as Transport
}

const transports = {
  Console: jest.fn(Console),
}

export { transports }

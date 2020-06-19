let isAvailable = false

const internetAvailableMock = (setIsConnectedToInternet?: boolean) => {
  if (typeof setIsConnectedToInternet === 'boolean') {
    isAvailable = setIsConnectedToInternet
    return
  }
  return new Promise((resolve, reject) => {
    if (isAvailable) return resolve()
    return reject()
  })
}

module.exports = jest.fn(internetAvailableMock)

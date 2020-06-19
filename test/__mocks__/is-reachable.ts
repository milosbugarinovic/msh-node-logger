let isReachable = false

const isReachableMock = (setIsReachable?: boolean) => {
  if (typeof setIsReachable === 'boolean') {
    isReachable = setIsReachable
    return
  }
  return new Promise((resolve, reject) => {
    if (isReachable) return resolve()
    return reject()
  })
}

module.exports = jest.fn(isReachableMock)

module.exports = {
  testPathIgnorePattenrs: ['/node_modules/'],
  setupFiles: [
    "<rootDir>/src/tests/setupTests.ts" // not working idk why, I've tried AfterEnv also
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx|)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(scss)$": "identity-obj-proxy"
  }
}
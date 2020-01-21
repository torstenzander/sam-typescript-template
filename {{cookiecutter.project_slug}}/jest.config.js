module.exports = {
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: [
    '**/specs/**/*.spec.(ts|js)'
  ],
  testEnvironment: 'node'
};


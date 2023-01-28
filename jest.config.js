module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/**/__tests__/*.test.ts'
  ],
  moduleFileExtensions: [
    'js',
    'ts',
  ],
}

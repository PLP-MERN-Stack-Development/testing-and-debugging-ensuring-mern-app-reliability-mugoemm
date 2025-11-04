module.exports = {
  projects: [
    {
      displayName: 'server',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/server/tests/**/*.test.js'],
      setupFilesAfterEnv: ['<rootDir>/server/tests/setup.js'],
      moduleFileExtensions: ['js', 'json', 'node'],
      coverageDirectory: '<rootDir>/coverage/server',
      collectCoverageFrom: ['server/src/**/*.js', '!server/src/config/**', '!**/node_modules/**']
    },
    {
      displayName: 'client',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/client/src/**/*.test.{js,jsx}'],
      setupFilesAfterEnv: ['<rootDir>/client/src/tests/setup.js'],
      moduleFileExtensions: ['js', 'jsx', 'json'],
      transform: { 
        '^.+\\.(js|jsx)$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react'] }]
      },
      transformIgnorePatterns: [
        'node_modules/(?!(@testing-library/.*|@babel/.*))'
      ],
      coverageDirectory: '<rootDir>/coverage/client',
      collectCoverageFrom: ['client/src/**/*.{js,jsx}', '!client/src/index.js', '!**/node_modules/**'],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/client/src/tests/__mocks__/fileMock.js'
      }
    }
  ],
  verbose: true,
  collectCoverage: false,
  coverageReporters: ['text', 'lcov', 'html'],
  testTimeout: 10000
};

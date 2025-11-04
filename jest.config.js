// jest.config.js - Root Jest configuration file for MERN Bug Tracker

module.exports = {
  // Multi-project configuration for both client and server tests
  projects: [
    // Server-side tests configuration  
    {
      displayName: 'server',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/server/tests/**/*.test.js'],
      setupFilesAfterEnv: ['<rootDir>/server/tests/setup.js'],
      moduleFileExtensions: ['js', 'json', 'node'],
      coverageDirectory: '<rootDir>/coverage/server',
      collectCoverageFrom: [
        'server/src/**/*.js', 
        '!server/src/config/**', 
        '!**/node_modules/**'
      ]
    },
    
    // Client-side tests configuration
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
      collectCoverageFrom: [
        'client/src/**/*.{js,jsx}', 
        '!client/src/index.js', 
        '!**/node_modules/**'
      ],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/client/src/tests/__mocks__/fileMock.js'
      }
    }
  ],
  
  // Global configuration
  verbose: true,
  collectCoverage: false,
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 60, 
      functions: 70,
      lines: 70
    }
  },
  testTimeout: 10000
};

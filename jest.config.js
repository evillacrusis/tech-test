module.exports = {
    transform: {
        '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }]
    },
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    rootDir: './',
    testMatch: ['<rootDir>/tests/**/*.test.ts']
  };
  
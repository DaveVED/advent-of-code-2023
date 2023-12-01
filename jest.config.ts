import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    roots: ['<rootDir>/src', '<rootDir>/src'],
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    collectCoverage: true,
    coverageReporters: ['text'],
};

export default config;

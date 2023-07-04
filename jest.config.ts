import type {Config} from 'jest';

const config: Config = 
{
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    clearMocks: true,
    transform: 
    {
        '^.+\\.ts?$': 'ts-jest',
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFiles: [
        "jest-canvas-mock",
        "<rootDir>/setupTests.ts"
    ],
    transformIgnorePatterns: 
    [
        "node_modules/(?!(<package-name>|<second-package-name>)/)"
    ],
    coverageThreshold: 
    {
        global: 
        {
            lines: 95,
            functions: 95,
            branches: 95,
            statements: 95
        }
    },
    coveragePathIgnorePatterns: 
    [
        "mocks"
    ],
    moduleNameMapper: 
    {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
};

export default config;
import { JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { compilerOptions } from './tsconfig.json';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coveragePathIgnorePatterns: ['index.ts', '.config.ts', 'reportWebVitals.ts', '__snapshots__'],
  coverageReporters: ['json', 'lcov', 'text-summary', 'text', 'clover'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      lines: 80,
      functions: 80,
    },
  },
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};

export default config;

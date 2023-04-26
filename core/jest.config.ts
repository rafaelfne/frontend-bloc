/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    "^common$": "<rootDir>/src/common",
    "^common/(.*)$": "<rootDir>/src/common/$1"
    // adicione mais mapeamentos de acordo com a sua estrutura de pastas
  }
};
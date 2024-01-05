/**
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  transform: {
    '^.+.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'typescript',
          },
        },
      },
    ],
  },

  // A path to a module which exports an async function that is triggered once before all test suites
  globalSetup: './src/jest-global-setup.ts',

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [],

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  extensionsToTreatAsEsm: ['.ts'],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    // cf. https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}

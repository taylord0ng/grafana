// We set this specifically for 2 reasons.
// 1. It makes sense for both CI tests and local tests to behave the same so issues are found earlier
// 2. Any wrong timezone handling could be hidden if we use UTC/GMT local time (which would happen in CI).
process.env.TZ = 'Pacific/Easter';

module.exports = {
  verbose: false,
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', 'public'],
  roots: ['<rootDir>/public/app', '<rootDir>/public/test', '<rootDir>/packages', '<rootDir>/scripts'],
  testRegex: '(\\.|/)(test)\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFiles: ['jest-canvas-mock', './public/test/jest-shim.ts', './public/test/jest-setup.ts'],
  setupFilesAfterEnv: ['./public/test/setupTests.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globals: { 'ts-jest': { isolatedModules: true } },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/public/test/mocks/svg.ts',
    '\\.css': '<rootDir>/public/test/mocks/style.ts',
    'monaco-editor/esm/vs/editor/editor.api': '<rootDir>/public/test/mocks/monaco.ts',
  },
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
};

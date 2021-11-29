module.exports = {
  // cacheDirectory: '.cache/jest',
  testMatch: ['**/*.stories.[jt]s?(x)'],
  moduleNameMapper: {
    // non-js files
    '\\.(jpg|jpeg|png|apng|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '@storybook/test-runner/mocks/fileMock.js',
    '\\.(css|scss|stylesheet)$': '@storybook/test-runner/mocks/styleMock.js',
  },
  transform: {
    '^.+\\.stories\\.[jt]sx?$': '@storybook/test-runner/playwright/transform',
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  preset: 'jest-playwright-preset',
  globalSetup: '@storybook/test-runner/playwright/global-setup.js',
  globalTeardown: '@storybook/test-runner/playwright/global-teardown.js',
  testEnvironment: '@storybook/test-runner/playwright/custom-environment.js',
};

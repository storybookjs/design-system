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
    '^.+\\.stories\\.[jt]sx?$': '@storybook/test-runner/jsdom/transform',
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
};

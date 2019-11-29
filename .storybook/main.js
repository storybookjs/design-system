const DependenciesPlugin = require('storybook-dep-webpack-plugin');
const path = require('path');

module.exports = {
  presets: ['@storybook/addon-docs/preset'],
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.js',
  ],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-a11y/register',
  ],
  webpack: async (config) => ({
    ...config,
    plugins: [
      ...config.plugins,
      new DependenciesPlugin({
        exclude: /^@babel/
      })
    ]
  }),
};

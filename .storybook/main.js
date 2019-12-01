
module.exports = {
  presets: ['@storybook/addon-docs/preset', {
    name: 'storybook-addon-deps/preset',
    options: {
      exclude: /^@babel/
    }
  }],
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
};

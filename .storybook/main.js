module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ],
};

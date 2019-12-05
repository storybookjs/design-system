module.exports = {
  stories: [
    '../src/**/intro.stories.(mdx)',
    '../src/**/colors.stories.(mdx)',
    '../src/**/typography.stories.(mdx)',
    '../src/**/*.stories.(js)',
  ],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-a11y/register',    
  ],
  presets: ['@storybook/addon-docs/preset'],
};

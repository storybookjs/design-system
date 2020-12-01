module.exports = {
  stories: [
    '../src/components/Demo.stories.js',
    '../src/components/Button.stories.js',
    '../src/components/PriceHeader.stories.js',
    '../src/components/Divider.stories.js',
    '../src/components/DatePicker.stories.js',
  ],
  addons: [
    'storybook-contrast',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ],
};

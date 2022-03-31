module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js', '../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-storysource', '@storybook/addon-a11y'],
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true,
      },
    },
  },
  // Not sure why the option above doesn't do this in this project
  webpackFinal: (c) => ({ ...c, experiments: { lazyCompilation: { entries: false } } }),
};

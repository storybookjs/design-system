const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.stories\.js$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { injectParameters: true },
      },
    ],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  });
  return config;
};

module.exports = {
  stories: ['../src/**/*.stories.@(mdx|js|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-storysource', '@storybook/addon-a11y'],
  skeletonWebpackConfig: {
    module: {
      rules: [
        {
          test: /\.m?[t|j]sx?$/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.mdx/,
          use: [
            {
              loader: 'null-loader',
            },
          ],
        },
      ],
    },
  },
};

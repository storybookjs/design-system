const path = require('path');
const prefixer = require('autoprefixer');

const commonIncludes = [path.resolve(__dirname, './'), path.resolve(__dirname, './src')];

module.exports = {
  components: './src/components',
  outputPath: './storybook-static/playroom',

  // Optional:
  title: 'My Awesome Library',
  themes: '',
  snippets: '',
  frameComponent: '',
  scope: '',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: false,
  paramType: 'search', // default is 'hash'
  exampleCode: ``,
  baseUrl: '/playroom/',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: commonIncludes,
          exclude: /node_modules/,
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                require.resolve('@babel/preset-env'),
                require.resolve('@babel/preset-react'),
              ],
            },
          },
        },
        {
          test: /\.tsx?$/,
          include: commonIncludes,
          exclude: /node_modules/,
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                require.resolve('@babel/preset-env'),
                require.resolve('@babel/preset-react'),
              ],
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loaders: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: { plugins: () => [prefixer()] },
            },
          ],
        },
      ],
    },
  }),
  iframeSandbox: 'allow-scripts',
};

module.exports = {
  ignoreExisting: true,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      'prefixIds',
      'removeDimensions',
    ],
  },
  svgProps: {
    role: 'img',
  },
  titleProp: true,
  typescript: 'true',
};

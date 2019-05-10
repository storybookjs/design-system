module.exports = api => {
  api.cache(true);

  return {
    presets: ['@babel/env', '@babel/react'],
    plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
    env: {
      test: {
        plugins: ['require-context-hook'],
      },
    },
  };
};

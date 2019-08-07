module.exports = api => {
  api.cache(true);

  return {
    presets: ['@babel/env', '@babel/react'],
    plugins: ['@babel/plugin-proposal-object-rest-spread'],
    env: {
      test: {
        plugins: ['require-context-hook'],
      },
    },
  };
};

module.exports = api => {
  api.cache(true);

  return {
    presets: ['@babel/env', '@babel/react'],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      [
        'prismjs',
        {
          languages: ['bash', 'typescript', 'json'],
        },
      ],
    ],
    env: {
      test: {
        plugins: ['require-context-hook'],
      },
    },
  };
};

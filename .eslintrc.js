module.exports = {
  root: true,
  extends: ['@storybook/eslint-config-storybook', 'plugin:storybook/recommended'],
  parserOptions: {
    project: ['./tsconfig.json'],
    createDefaultProgram: true,
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/default-props-match-prop-types': 'off',
      },
    },
  ],
  settings: {
    jest: {
      version: 'latest',
    },
  },
};

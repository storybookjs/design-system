module.exports = {
  root: true,
  extends: ['@storybook/eslint-config-storybook'],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};

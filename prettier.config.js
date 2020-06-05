const base = require('@storybook/linter-config/prettier.config');

module.exports = {
  ...base,
  arrowParens: 'always',
  overrides: [
    {
      files: '*.html',
      options: { parser: 'babel' },
    },
  ],
};

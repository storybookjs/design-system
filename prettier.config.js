module.exports = {
  printWidth: 100,
  tabWidth: 2,
  bracketSpacing: true,
  trailingComma: 'es5',
  singleQuote: true,
  overrides: [
    {
      files: '*.html',
      options: { parser: 'babel' },
    },
  ],
};

'use strict';

module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  plugins: ['prettier-plugin-go-template'],
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'go-template',
      },
    },
  ],
};

module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    requireConfigFile: false,
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['./test.js', './tests/**'],
      },
    ],
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'no-continue': 'off',
  },
};

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    node: true,
    jest: true,
    es2020: true
  },
  rules: {
    'prettier/prettier': 'error'
  }
}

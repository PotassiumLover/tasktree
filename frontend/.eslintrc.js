module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    settings: {
      react: {
        version: '18.2.0'
      }
    }
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
};

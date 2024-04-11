module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    '.lintstagedrc.cjs',
    'commitlint.config.cjs',
    'jest.config.js',
    'vite.config.js',
    'vitest.setup.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {},
  plugins: ['prettier'],
  rules: {},
};

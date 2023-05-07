module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'next/core-web-vitals',
    'google',
    'prettier',
    "plugin:tailwindcss/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'jsx-a11y'],
  "ignorePatterns": [
    "*.config.js"
  ],
  rules: {
    'require-jsdoc': ['off'],
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    '@next/next/no-img-element': ['off'],
  },
}

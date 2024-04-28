import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tsEslint from 'typescript-eslint';

/** @type { import('eslint').Linter.FlatConfig } */
export default [
  eslintJs.configs.recommended,
  eslintConfigPrettier,
  ...tsEslint.configs.recommended,
  {
    rules: {
      'array-callback-return': ['error', { checkForEach: true }],
      eqeqeq: 'error',
      'no-console': 'warn',
      'no-duplicate-imports': ['error', { includeExports: true }],
      'max-classes-per-file': ['error', { ignoreExpressions: true }],
      'no-floating-decimal': 'warn',
      'prefer-template': 'warn',
      'no-nested-ternary': 'warn',
      'no-else-return': 'error',
      'one-var': ['warn', 'never'],
      'prefer-exponentiation-operator': 'warn',
      'require-unicode-regexp': 'warn',
      'no-undef': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/prefer-as-const': 'warn',
      '@typescript-eslint/prefer-includes': 'warn',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
    },
  },
  {
    ignores: ['**/*.config.?js'],
    rules: {
      'no-restricted-exports': [
        'error',
        {
          restrictDefaultExports: {
            direct: true,
            named: true,
          },
        },
      ],
    },
  },
  {
    ignores: [
      /* artifacts */
      'build',
      'dist',
      'coverage',
      '.cache',

      /* dependencies */
      'node_modules',
      '.pnp',
      '.pnp.js',
      '.yarn',

      /* debug */
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      '.pnpm-debug.log*',

      /* linting */
      '.husky',
      '.prettierignore',

      /* misc */
      '.DS_Store',
      '*.pem',

      /* code editors */
      '.vscode/*',
      '!.vscode/extensions.json',
      '.idea',
      '*.suo',
      '*.ntvs*',
      '*.njsproj',
      '*.sln',
      '*.sw?',
    ],
  },
];

import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

/**
 * @type {import('eslint').Linter.FlatConfig}
 */
export default [
  eslintJs.configs.recommended,
  eslintConfigPrettier,
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

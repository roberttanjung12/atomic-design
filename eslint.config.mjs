import pluginJs from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      import: importPlugin,
      next: nextPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'unused-imports': unusedImports
    }
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        }
      }
    },
    rules: {
      'next/no-img-element': 'off',
      'next/next-script-for-ga': 'error',
      'react/no-danger': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'import/newline-after-import': ['error', { count: 1 }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'unknown'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before'
            },
            {
              pattern: '*.{css,sass,scss}',
              patternOptions: { matchBase: true },
              group: 'unknown',
              position: 'after'
            }
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      'newline-before-return': 'error',
      'no-duplicate-imports': 'error',
      'no-unused-vars': 'off',
      'no-use-before-define': [
        'error',
        {
          functions: true,
          classes: true,
          variables: true,
          allowNamedExports: false
        }
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['export'], next: ['*'] },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var']
        }
      ],
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ]
    }
  }
];

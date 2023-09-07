import { resolverExtensionsWithTS } from '../helpers/constants';
import { defineConfig } from '../helpers/utilities';
import { typescriptRules } from '../rules/typescript';

export const typescriptConfig = defineConfig({
  extends: ['plugin:@embyth/core', 'plugin:import/typescript'],
  settings: {
    /** Use TypeScript resolver so we can use `baseUrl` and `paths` */
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: resolverExtensionsWithTS,
      },
    },
    /** Configure node plugin to include TS files */
    node: {
      tryExtensions: ['.js', '.ts', '.tsx'],
    },
    /**
     * Fixes the import plugin not handling packages with types packages installed correctly
     * https://github.com/benmosher/eslint-plugin-import/issues/1552
     * Might not be necessary anymore, but doesn't hurt to keep
     */
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/extensions': resolverExtensionsWithTS,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        /** Type definition files need different rules than normal files */
        'import/no-duplicates': 'off',
        'import/order': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      extends: [
        /**
         * Adds typescript rules, typescript parser
         * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
         */
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['**/tsconfig.json'],
      },
      rules: typescriptRules,
    },
  ],
});

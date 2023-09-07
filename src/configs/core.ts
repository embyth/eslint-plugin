import { defineConfig } from '../helpers/utilities';
import { ignorePatterns } from '../helpers/constants';

export const coreConfig = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'plugin:@embyth/base',
    'plugin:@embyth/node',
    'plugin:@embyth/import',
    'plugin:@embyth/json',
    'plugin:@embyth/yml',
    'plugin:@embyth/markdown',
    'plugin:@embyth/promise',
    'plugin:@embyth/redos',
    'plugin:@embyth/unicorn',
    'plugin:@embyth/comments',
    'plugin:@embyth/testing',
    'plugin:@embyth/prettier',
  ],
  reportUnusedDisableDirectives: true,
  ignorePatterns,
  rules: {},
});

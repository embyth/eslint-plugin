import { defineConfig } from '../helpers/utilities';
import { promiseRules } from '../rules/promise';

export const promiseConfig = defineConfig({
  extends: ['plugin:promise/recommended'],
  rules: promiseRules,
});

import { defineConfig } from '../helpers/utilities';
import { unicornRules } from '../rules/unicorn';

export const unicornConfig = defineConfig({
  extends: ['plugin:unicorn/recommended'],
  rules: unicornRules,
});

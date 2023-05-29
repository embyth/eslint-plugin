import { defineConfig } from '../helpers/utilities';
import { nodeRules } from '../rules/node';

export const nodeConfig = defineConfig({
  extends: ['plugin:n/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: nodeRules,
});

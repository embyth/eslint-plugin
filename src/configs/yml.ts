import { defineConfig } from '../helpers/utilities';
import { ymlRules } from '../rules/yml';

export const ymlConfig = defineConfig({
  extends: ['plugin:yml/standard'],
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: ymlRules,
    },
  ],
});

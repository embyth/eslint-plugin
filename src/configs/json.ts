import { defineConfig } from '../helpers/utilities';
import { jsonRules } from '../rules/json';
import { packageJsonRules } from '../rules/package-json';

export const jsonConfig = defineConfig({
  extends: ['plugin:jsonc/recommended-with-jsonc'],
  overrides: [
    {
      files: [
        '*.json',
        '*.json5',
        '*.jsonc',
      ],
      parser: 'jsonc-eslint-parser',
      rules: jsonRules,
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: { ...jsonRules, ...packageJsonRules },
    },
  ],
});

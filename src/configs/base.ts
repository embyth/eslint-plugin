import { defineConfig } from '../helpers/utilities';
import { bestPracticeRules } from '../rules/best-practices';
import { errorRules } from '../rules/errors';
import { es6Rules } from '../rules/es6';
import { strictRules } from '../rules/strict';
import { styleRules } from '../rules/style';
import { variablesRules } from '../rules/variables';

export const baseConfig = defineConfig({
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    ...bestPracticeRules,
    ...errorRules,
    ...styleRules,
    ...variablesRules,
    ...es6Rules,
    ...strictRules,
  },
});

import { defineRules } from '../helpers/utilities';

export const strictRules = defineRules({
  // Require or disallow strict mode directives
  // https://eslint.org/docs/rules/strict
  strict: ['error', 'never'],
});

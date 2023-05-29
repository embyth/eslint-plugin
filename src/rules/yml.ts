import { defineRules } from '../helpers/utilities';

export const ymlRules = defineRules({
  'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }],
  'yml/no-empty-document': 'off',
  'yml/no-empty-mapping-value': 'off',
});

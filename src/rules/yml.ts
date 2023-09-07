import { defineRules } from '../helpers/utilities';

export const ymlRules = defineRules({
  'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }],
  'yml/flow-mapping-curly-spacing': ['error', 'always'],
  'yml/no-empty-document': 'off',
  'yml/no-empty-mapping-value': 'off',
});

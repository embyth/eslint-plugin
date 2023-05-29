import { defineRules } from '../helpers/utilities';

export const promiseRules = defineRules({
  'promise/param-names': 'error',
  'promise/always-return': 'off',
  'promise/catch-or-return': 'off',
});

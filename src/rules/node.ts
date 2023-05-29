import { defineRules } from '../helpers/utilities';

export const nodeRules = defineRules({
  // enforce return after a callback
  // https://eslint.org/docs/rules/callback-return
  'callback-return': 'off',

  // require all requires be top-level
  // https://eslint.org/docs/rules/global-require
  'global-require': 'error',

  // enforces error handling in callbacks (node environment)
  // https://eslint.org/docs/rules/handle-callback-err
  'handle-callback-err': 'off',
  // Require error handling in callbacks
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md
  'n/handle-callback-err': ['error', '^(err|error)$'],

  // disallow use of the Buffer() constructor
  // https://eslint.org/docs/rules/no-buffer-constructor
  'no-buffer-constructor': 'error',

  // disallow mixing regular variable and require declarations
  // https://eslint.org/docs/rules/no-mixed-requires
  'no-mixed-requires': ['off', false],

  // disallow use of new operator with the require function
  // https://eslint.org/docs/rules/no-new-require
  'no-new-require': 'off',
  // Disallow new operators with calls to require
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
  'n/no-new-require': 'error',

  // disallow string concatenation with __dirname and __filename
  // https://eslint.org/docs/rules/no-path-concat
  'no-path-concat': 'off',
  // Disallow string concatenation with __dirname and __filename
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
  'n/no-path-concat': 'error',

  // disallow use of process.env
  // https://eslint.org/docs/rules/no-process-env
  'no-process-env': 'off',

  // disallow process.exit()
  // https://eslint.org/docs/rules/no-process-exit
  'no-process-exit': 'off',

  // restrict usage of specified node modules
  // https://eslint.org/docs/rules/no-restricted-modules
  'no-restricted-modules': 'off',

  // disallow use of synchronous methods (off by default)
  // https://eslint.org/docs/rules/no-sync
  'no-sync': 'off',

  // The Buffer class of buffer module is defined as a global variable.
  // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
  'n/prefer-global/buffer': ['error', 'never'],

  // Enforce Node.js-style error-first callback pattern is followed
  // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-callback-literal.md
  'n/no-callback-literal': 'error',

  // disallow deprecated APIs
  // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
  'n/no-deprecated-api': 'error',

  // disallow the assignment to exports
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-exports-assign.md
  'n/no-exports-assign': 'error',

  // Require that process.exit() expressions use the same code path as throw
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/process-exit-as-throw.md
  'n/process-exit-as-throw': 'error',

  // Disabled import declarations which import non-existence modules
  // This rule is conflicting with import-plugin
  // @see https://github.com/mysticatea/eslint-plugin-node/issues/248#issuecomment-1052550467
  'n/no-missing-import': 'off',
});

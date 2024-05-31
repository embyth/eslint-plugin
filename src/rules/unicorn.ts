import { defineRules } from '../helpers/utilities';

export const unicornRules = defineRules({
  // Pass error message when throwing errors
  'unicorn/error-message': 'error',
  // Uppercase regex escapes
  'unicorn/escape-case': 'error',
  // Array.isArray instead of instanceof
  'unicorn/no-instanceof-array': 'error',
  // Prevent deprecated `new Buffer()`
  'unicorn/no-new-buffer': 'error',
  // Keep regex literals safe!
  'unicorn/no-unsafe-regex': 'off',
  // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
  'unicorn/number-literal-case': 'error',
  // includes over indexOf when checking for existence
  'unicorn/prefer-includes': 'error',
  // String methods startsWith/endsWith instead of more complicated stuff
  'unicorn/prefer-string-starts-ends-with': 'error',
  // textContent instead of innerText
  'unicorn/prefer-text-content': 'error',
  // Enforce throwing type error when throwing error while checking typeof
  'unicorn/prefer-type-error': 'error',
  // Use new when throwing error
  'unicorn/throw-new-error': 'error',
  // Prefer using the node: protocol
  'unicorn/prefer-node-protocol': 'error',
  // Require Array.isArray() instead of instanceof Array
  'unicorn/no-array-instanceof': 'error',
  // Disallow Array#reduce() and Array#reduceRight()
  'unicorn/no-array-reduce': 'off',
  // Prefer using Object.fromEntries(…) to transform a list of key-value pairs into an object
  'unicorn/prefer-object-from-entries': 'off',
  // Disallow the use of the null literal
  'unicorn/no-null': 'off',
  // Enforces all linted files to have their names in a certain case style and lowercase file extension
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        camelCase: true,
        pascalCase: true,
        kebabCase: true,
      },
      // ignore markdown files
      ignore: [/^[\w-]+\.md$/i],
    },
  ],
  // Using complete words results in more readable code. Not everyone knows all your abbreviations. Code is written only once, but read many times.
  'unicorn/prevent-abbreviations': [
    'error',
    {
      allowList: {
        getInitialProps: true,
        props: true,
      },
    },
  ],
  // A function definition should be placed as close to the top-level scope as possible without breaking its captured values. This improves readability, directly improves performance and allows JavaScript engines to better optimize performance.
  'unicorn/consistent-function-scoping': [
    'error',
    {
      checkArrowFunctions: false,
    },
  ],
});

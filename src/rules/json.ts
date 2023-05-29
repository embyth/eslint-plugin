import { defineRules } from '../helpers/utilities';

export const jsonRules = defineRules({
  // Disallow or enforce spaces inside of brackets
  'jsonc/array-bracket-spacing': ['error', 'never'],
  // Require or disallow trailing commas
  'jsonc/comma-dangle': ['error', 'never'],
  // Enforce consistent comma style
  'jsonc/comma-style': ['error', 'last'],
  // Enforce consistent indentation
  'jsonc/indent': ['error', 2],
  // Enforce consistent spacing between keys and values in object literal properties
  'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
  // Disallow octal escape sequences in string literals
  'jsonc/no-octal-escape': 'error',
  // Enforce consistent line breaks inside braces
  'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
  // Enforce consistent spacing inside braces
  'jsonc/object-curly-spacing': ['error', 'always'],
  // Enforce placing object properties on separate lines
  'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: false }],
});

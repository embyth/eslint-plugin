import { TSEquivalents } from '../helpers/constants';
import { defineRules, fromEntries, ruleFromStandard } from '../helpers/utilities';

export const typescriptRules = defineRules({
  ...fromEntries(TSEquivalents.map((name) => [name, 'off'])),
  ...fromEntries(TSEquivalents.map((name) => [`@typescript-eslint/${name}`, ruleFromStandard(name)])),
  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      functions: false,
      classes: false,
      enums: false,
      variables: true,
      typedefs: false,
    },
  ],
  '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
  '@typescript-eslint/space-before-function-paren': 'off',
  '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      multiline: { delimiter: 'none' },
      singleline: { delimiter: 'semi', requireLast: false },
    },
  ],
  '@typescript-eslint/type-annotation-spacing': 'error',
  '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/no-misused-promises': [
    2,
    {
      checksVoidReturn: {
        attributes: false,
      },
    },
  ],
  '@typescript-eslint/naming-convention': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/parameter-properties': 'off',
  '@typescript-eslint/no-empty-interface': 'off',
  '@typescript-eslint/ban-ts-ignore': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/ban-types': 'off',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/indent': 'off',
});

import { defineConfig } from '../helpers/utilities';
import { testingRules } from '../rules/testing';

export const testingConfig = defineConfig({
  overrides: [
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: testingRules,
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
});

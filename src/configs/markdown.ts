import { defineConfig } from '../helpers/utilities';
import { markdownRules } from '../rules/markdown';

export const markdownConfig = defineConfig({
  extends: ['plugin:markdown/recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.md/*.{js,jsx,json,yml,yaml}'],
      rules: markdownRules,
      globals: {
        // For code examples, `import React from "react";` at the top
        // of every code block is distracting, so pre-define the
        // `React` global.
        React: false,
      },
    },
  ],
});

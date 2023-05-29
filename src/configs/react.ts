import { defineConfig } from '../helpers/utilities';
import { reactRules } from '../rules/react';

export const reactConfig = defineConfig({
  extends: [
    'plugin:@embyth/core',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
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
  rules: reactRules,
});

import { resolverExtensions } from '../helpers/constants';
import { defineConfig } from '../helpers/utilities';
import { importRules } from '../rules/import';

export const importConfig = defineConfig({
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: ['plugin:import/recommended'],
  plugins: ['unused-imports'],
  settings: {
    'import/resolver': {
      node: {
        extensions: resolverExtensions,
      },
    },
    'import/extensions': resolverExtensions,
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },
  rules: importRules,
});

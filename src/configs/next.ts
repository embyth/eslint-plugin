import { defineConfig } from '../helpers/utilities';
import { nextRules } from '../rules/next';

export const nextConfig = defineConfig({
  extends: ['plugin:@embyth/typescript', 'plugin:@embyth/react', 'plugin:@next/next/recommended'],
  rules: nextRules,
});

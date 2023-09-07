import { defineConfig } from '../helpers/utilities';
import { nestRules } from '../rules/nest';

export const nestConfig = defineConfig({
  extends: ['plugin:@embyth/typescript'],
  rules: nestRules,
});

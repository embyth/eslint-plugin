import { defineConfig } from '../helpers/utilities';
import { commentsRules } from '../rules/comments';

export const commentsConfig = defineConfig({
  extends: ['plugin:eslint-comments/recommended'],
  rules: commentsRules,
});

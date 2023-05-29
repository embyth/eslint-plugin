import standardConfig from 'eslint-config-standard/.eslintrc.json';
import type { TSESLint } from '@typescript-eslint/utils';

export function defineConfig(
  config: TSESLint.Linter.Config,
): TSESLint.Linter.Config {
  return config;
}

export function defineRules(
  rules: TSESLint.Linter.Config['rules'],
): TSESLint.Linter.Config['rules'] {
  return rules;
}

export function definePlugin(
  plugin: TSESLint.Linter.Plugin,
): TSESLint.Linter.Plugin {
  return plugin;
}

export function fromEntries<T>(
  iterable: Array<[string, T]>,
): Record<string, T> {
  return [...iterable].reduce<Record<string, T>>((object, [key, value]) => ({
    ...object,
    [key]: value,
  }), {});
}

export const ruleFromStandard = (name: string): TSESLint.Linter.RuleEntry => {
  const configStandard = standardConfig as unknown as TSESLint.Linter.Config;
  // eslint-disable-next-line no-undefined
  if (configStandard.rules === undefined) {
    throw new Error('rules can not be undefined');
  }
  const rule: TSESLint.Linter.RuleEntry | undefined = configStandard.rules[name];
  // eslint-disable-next-line no-undefined
  if (rule === undefined) {
    throw new Error('rule can not be undefined');
  }
  if (typeof rule !== 'object') {
    return rule;
  }
  return JSON.parse(JSON.stringify(rule)) as TSESLint.Linter.RuleEntry;
};

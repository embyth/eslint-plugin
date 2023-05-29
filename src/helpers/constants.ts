export const TSEquivalents = [
  'comma-spacing',
  'brace-style',
  'func-call-spacing',
  'indent',
  'keyword-spacing',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
  'no-redeclare',
  'no-unused-vars',
  'no-unused-expressions',
  'no-useless-constructor',
  'no-use-before-define',
  'quotes',
  'space-before-function-paren',
  'space-infix-ops',
  'object-curly-spacing',
] as const;

export const ignorePatterns: string[] = [
  '*.min.*',
  '*.d.ts',
  'CHANGELOG.md',
  'dist',
  'LICENSE*',
  'output',
  'out',
  'coverage',
  'public',
  'temp',
  'package-lock.json',
  'pnpm-lock.yaml',
  'yarn.lock',
  '__snapshots__',
  // ignore for in lint-staged
  '*.css',
  '*.png',
  '*.ico',
  '*.toml',
  '*.patch',
  '*.txt',
  '*.crt',
  '*.key',
  'Dockerfile',
  // force include
  '!.github',
  '!.vitepress',
  '!.vscode',
  // force exclude
  '.vitepress/cache',
];

export const resolverExtensions = [
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.json',
];
export const resolverExtensionsWithTS = [
  '.ts',
  '.tsx',
  ...resolverExtensions,
];

import { definePlugin } from './helpers/utilities';
import { baseConfig } from './configs/base';
import { nodeConfig } from './configs/node';
import { importConfig } from './configs/import';
import { jsonConfig } from './configs/json';
import { ymlConfig } from './configs/yml';
import { markdownConfig } from './configs/markdown';
import { coreConfig } from './configs/core';
import { typescriptConfig } from './configs/typescript';
import { promiseConfig } from './configs/promise';
import { redosConfig } from './configs/redos';
import { unicornConfig } from './configs/unicorn';
import { commentsConfig } from './configs/comments';
import { testingConfig } from './configs/testing';
import { reactConfig } from './configs/react';
import { nextConfig } from './configs/next';
import { prettierConfig } from './configs/prettier';
import { nestConfig } from './configs/nest';

const plugin = definePlugin({
  rules: {},
  configs: {
    core: coreConfig,
    base: baseConfig,
    node: nodeConfig,
    import: importConfig,
    json: jsonConfig,
    yml: ymlConfig,
    markdown: markdownConfig,
    typescript: typescriptConfig,
    promise: promiseConfig,
    redos: redosConfig,
    unicorn: unicornConfig,
    comments: commentsConfig,
    testing: testingConfig,
    react: reactConfig,
    next: nextConfig,
    nest: nestConfig,
    prettier: prettierConfig,
  },
});

const { rules, configs } = plugin;

export { rules, configs };

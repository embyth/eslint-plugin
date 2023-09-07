# :dart: `@embyth/eslint-plugin`

> Embyth's shareable plugin with variety of configurations for [`eslint`][eslint-link].

## :wrench: Installation

```bash
# Yarn:
yarn add --dev eslint prettier @embyth/eslint-plugin

# npm:
npm install --save-dev eslint prettier @embyth/eslint-plugin

# pnpm:
pnpm add --save-dev eslint prettier @embyth/eslint-plugin
```

## :eyes: Usage

Add it to your `.eslintrc` file config you want to use:

```json
{
  "extends": "plugin:@embyth/typescript"
}
```

List of available configs:

- `@embyth/core` - core config with variety of rules including `node`, `import`, `json`, `yml`, `markdown`, `promise`, `redos`, `unicorn`, `comments`, `testing`, `prettier` eslint plugins
- `@embyth/typescript` - includes `@embyth/core` and rules for TypeScript
- `@embyth/react` - includes `@embyth/core` and rules for React
- `@embyth/next` - includes `@embyth/typescript`, `@embyth/react` and rules for Next.js
- `@embyth/nest` - includes `@embyth/typescript` and rules for Nest.js

## :jigsaw: Extending the config

The defined rules can be modified by adding other configurations, plugins or custom rules:

```json
{
  "extends": ["plugin:@embyth/core", "some-other-config-you-use"],
  "rules": {
    "curly": "off"
  }
}
```

## :thinking: Documentations

Read the [eslint docs][eslint-docs-link] for more information.

[eslint-docs-link]: https://eslint.org/docs/latest/
[eslint-link]: https://github.com/eslint/eslint

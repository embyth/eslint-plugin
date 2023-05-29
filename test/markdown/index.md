# With `eslint-plugin-markdown`, ESLint will lint fenced code blocks in your Markdown documents

```js
// This gets linted
const answer = 6 * 7;
console.log(answer);
```

Here is some regular Markdown text that will be ignored.

```js
// This also gets linted
function hello() {
  console.log('Hello, world!');
}
hello();
```

```jsx
// This can be linted too if you add `.jsx` files to `overrides` in ESLint v7
// or pass `--ext jsx` in ESLint v6.
const div = <div className="jsx"></div>;
```

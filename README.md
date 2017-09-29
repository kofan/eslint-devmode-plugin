# eslint-plugin-devmode

This plugin allows to use `console` object in the development mode i.e.

```javascript
if (DEV_MODE) {
  console.log('Hello World');
}
```

Don't forget to set `DEV_MODE` global variable using `webpack.DefinePlugin` i.e.

```javascript
new webpack.DefinePlugin({
  'DEV_MODE': env.isDevelopment() ? 'true' : 'false',
});
```

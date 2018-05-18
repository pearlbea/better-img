[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/pearlbea/better-img)

# better-img

A vanilla component that adds a fallback url and logging function to an image.

<!---
```
<custom-element-demo>
  <template>
    <style> body { text-align: center; } </style>
    <script src="../custom-elements/custom-elements.js"></script>
    <script src="src/better-img/better-img.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<better-img
  url="https://placeimg.com/480/640/animals"
  fallback="https://lorempixel.com/480/640"
  alt="an adorable animal">
</better-img>
```

## Installing

Clone the repository. There are no required dependencies, although if you want to use this component in browsers that do not support Custom Elements v1, use the [webcomponents-lite](https://github.com/webcomponents/webcomponentsjs) polyfill.
## Running the tests

To setup the testing tools:
```npm run setup```
Then to run the tests:
```npm run test```
See the [web-component-tester](https://github.com/Polymer/web-component-tester) docs for more info.

## Usage

| property | type | default | description |
| -------- | ---- | ------- | ----------- |
| url (required) | string | null | An image url. This will become the image's "src" attribute. |
| fallback | string | null | An image url. If the url provided returns an error, the fallback url will be assigned to the "src" attribute. |
| width | number | 480 | Image width |
| height | number | 640 | Image height |
| alt | string | "" | Image alt text |
| log | string | null | If you provide the name of a function, it will be called if the url returns an error and receive the error object as a parameter.|

## License

[MIT](https://opensource.org/licenses/MIT)

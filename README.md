# better-img

A simple vanilla component that adds a fallback url and logging function to an image.

<!---
```
<custom-element-demo>
  <template>
    <style> body { text-align: center; } </style>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="src/better-img/better-img.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<better-img height="400" width="400" url="fail" fallback="https://placeimg.com/400/400/animals" alt="Some alt text">...</better-img>
```

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

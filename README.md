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

## Installation

bower install

## Usage

| property | type | default | description |
| -------- | ---- | ------- | ----------- |
| url (required) | string | null | This will become the image's "src" attribute. |
| fallback (optional) | string | null | If the url provided returns an error, the fallback url will be assigned to the "src" attribute. |
| width (optional) | number | 480 | Image width |
| height (optional) | number | 640 | Image height |
| alt (optional) | string | "" | Image alt text |

## Contributing

## Credits

TODO: Write credits

## License

[MIT](https://opensource.org/licenses/MIT)

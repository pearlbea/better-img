# &lt;better-img-nutmeg&gt;

## Install

Polyfill tags if you need them. This will include ShadowDOM and Custom Elements support.

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-sd-ce.js"></script>
```

Loading this component.

```html
<script src="https://unpkg.com/better-img-nutmeg@latest/dist/better-img-nutmeg.min.js"></script>
```

## Usage

| property       | type   | default | description                                                                                                                       |
| -------------- | ------ | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| url (required) | string | null    | An image url. This will become the image's "src" attribute.                                                                       |
| fallback       | string | null    | An image url. If the url provided returns an error, the fallback url will be assigned to the "src" attribute.                     |
| width          | number | 480     | Image width                                                                                                                       |
| height         | number | 640     | Image height                                                                                                                      |
| alt            | string | ""      | Image alt text                                                                                                                    |
| log            | string | null    | If you provide the name of a function, it will be called if the url returns an error and receive the error object as a parameter. |

## License

BetterImgNutmeg is released under an MIT license.

Built, tested, and published with [Nutmeg](https://nutmeg.tools).

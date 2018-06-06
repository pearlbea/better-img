# better-img-nutmeg

## Installation

Install the [npm package](https://www.npmjs.com/package/@pearlbea/better-img-nutmeg) or add the script from [unkpg](https://unpkg.com/@pearlbea/better-img-nutmeg@1.2.8/dist/better-img-nutmeg.min.js) to your HTML page. If you want to use this component in [browsers](https://caniuse.com/#feat=custom-elementsv1) that do not support Custom Elements v1, use the [webcomponentsjs](https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-sd-ce.js) polyfill.

Example:

```html
<!-- load the polyfill, if necessary -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-sd-ce.js"></script>

<!-- then load the element from unkpg -->
<script src="https://unpkg.com/@pearlbea/better-img-nutmeg@1.2.8/dist/better-img-nutmeg.min.js"></script>

<!-- or from node modules -->
<script src="../node_modules/@pearlbea/better-img-nutmeg/dist/better-img-nutmeg.js"></script>

<!-- use the component on your page -->
<better-img-nutmeg
  url="https://placeimg.com/480/640/animals"
  fallback="https://lorempixel.com/480/640"
  alt="an adorable animal">
</better-img-nutmeg>
```

Polyfill tags if you need them. This will include ShadowDOM and Custom Elements support.

```html

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

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/pearlbea/better-img)

# better-img

A vanilla component that adds a fallback url and logging function to an image.

## Installation

Install the [npm package](https://www.npmjs.com/package/@pearlbea/better-img) or add the script from [unkpg](https://unpkg.com/@pearlbea/better-img@1.3.0/src/better-img/better-img.js) to your HTML page. If you want to use this component in [browsers](https://caniuse.com/#feat=custom-elementsv1) that do not support Custom Elements v1, use the [webcomponentsjs](https://github.com/webcomponents/webcomponentsjs) polyfill.

Example:

```html
<!-- load the polyfill, if necessary -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"></script>

<!-- then load the element from unkpg -->
<script src="https://unpkg.com/@pearlbea/better-img@1.4.0/src/better-img/better-img.min.js"></script>

<!-- or from node modules -->
<script src="../node_modules/src/better-img/better-img.min.js"></script>

<!-- use the component on your page -->
<better-img
  url="https://placeimg.com/480/640/animals"
  fallback="https://lorempixel.com/480/640"
  alt="an adorable animal">
</better-img>
```

## Usage

Include

| property       | type   | default | description                                                                                                                       |
| -------------- | ------ | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| url (required) | string | null    | An image url. This will become the image's "src" attribute.                                                                       |
| fallback       | string | null    | An image url. If the url provided returns an error, the fallback url will be assigned to the "src" attribute.                     |
| width          | number | 480     | Image width                                                                                                                       |
| height         | number | 640     | Image height                                                                                                                      |
| alt            | string | ""      | Image alt text                                                                                                                    |
| log            | string | null    | If you provide the name of a function, it will be called if the url returns an error and receive the error object as a parameter. |

## Running the tests

To setup the testing tools:

```
npm install
```

Then to run the tests:

```
npm test
```

See the [web-component-tester](https://github.com/Polymer/web-component-tester) docs for more info.

## Viewing your component

```
npm start
```

## License

[MIT](https://opensource.org/licenses/MIT)

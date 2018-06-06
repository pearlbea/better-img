# better-img-stencil

A simple component that adds a fallback url and logging function to an image. Made with [Stencil Component Starter](https://github.com/ionic-team/stencil-component-starter).

## Installation

Install the [npm package](https://www.npmjs.com/package/@pearlbea/better-img-stencil) or add the script from [unkpg](https://unpkg.com/@pearlbea/better-img-stencil@1.2.8/dist/better-img-stencil.js) to your HTML page.
Example:

```html
<!-- load the element from unkpg -->
<script src="https://unpkg.com/@pearlbea/better-img-stencil@1.2.8/dist/better-img-stencil.js"></script>

<!-- or from node modules -->
<script src="../node_modules/@pearlbea/better-img/src/better-img/dist/better-img-stencil.js"></script>

<!-- use the component on your page -->
<better-img-stencil
  url="https://placeimg.com/480/640/animals"
  fallback="https://lorempixel.com/480/640"
  log="logMe"
  width="480"
  height="640"
  alt="an adorable animal">
</better-img-stencil>
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

## Viewing your component

```
$ npm run dev
```

## Running the tests

```
$ npm test
```

See the Stencil testing [docs](https://stenciljs.com/docs/unit-testing/) and [Jest](https://facebook.github.io/jest/en/) for more info.

## License

[MIT](https://opensource.org/licenses/MIT)

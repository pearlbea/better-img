# better-img-polymer

A simple Polymer element that adds a fallback url and logging function to an image.

## Installation

Install the [npm package](https://www.npmjs.com/package/@pearlbea/better-img-pollymer) or add the script from [unkpg](https://unpkg.com/@pearlbea/better-img-polymer@1.4.2/dist/bundle.js) to your HTML page.

Example:

```html
<!-- load the element from unkpg -->
<script src="https://unpkg.com/@pearlbea/better-img-polymer@1.4.2/dist/bundle.js"></script>

<!-- or from node modules -->
<script src="../node_modules/@pearlbea/better-img-polymer/better-img-polymer.js"></script>

<!-- use the component on your page -->
<better-img-polymer
  url="https://placeimg.com/480/640/animals"
  fallback="https://lorempixel.com/480/640"
  alt="an adorable animal">
</better-img-polymer>
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
$ npm run serve
```

## Running the tests

As of this writing, Polymer tests were not working with Node 10. See the [issue on GitHub](https://github.com/Polymer/tools/issues/280).

```
$ npm test
```

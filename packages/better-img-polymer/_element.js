import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `better-img-polymer`
 * A simple element that adds a fallback url and logging function to an image.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BetterImgPolymer extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'better-img-polymer',
      },
    };
  }
}

window.customElements.define('better-img-polymer', BetterImgPolymer);

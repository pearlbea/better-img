import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

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
          text-align: center;
        }
      </style>
      <img
        width$=[[width]]
        height$=[[height]]
        alt$="[[alt]]"
      /><slot></slot>
    `;
  }
  static get properties() {
    return {
      width: {
        type: Number,
        value: 480
      },
      height: {
        type: Number,
        value: 640
      },
      alt: {
        type: String,
        value: ""
      },
      url: String,
      usingFallback: {
        type: Boolean,
        value: false
      },
      fallback: String,
      log: String
    };
  }
  get image() {
    return this.shadowRoot.querySelector("img");
  }

  ready() {
    super.ready();
    this.image.addEventListener("error", e => this.onImageError(e));
    this.setSrc(this.url);
  }

  onImageError(e) {
    this.logError(e);
    this.useFallback();
  }

  logError(e) {
    if (this.logCallback) {
      window[this.logCallback](e);
    }
  }

  useFallback() {
    if (this.fallback && !this.usingFallback) {
      this.setAttribute("url", this.fallback);
      this.setSrc(this.fallback);
    }
  }

  setSrc(url) {
    this.image.src = url;
  }
}

window.customElements.define("better-img-polymer", BetterImgPolymer);

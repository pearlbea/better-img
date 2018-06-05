class BetterImg extends HTMLElement {
  static get template() {
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>
      <img />
    `;
    return template;
  }
  constructor() {
    super();
    this.attachShadowDOM();
  }

  connectedCallback() {
    this.usingFallback = false;
    this.img.onerror = this.onImgError.bind(this);
    this.upgradeProperties();
    this.setProperties();
  }

  attachShadowDOM() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(BetterImg.template.content.cloneNode(true));
  }

  upgradeProperties() {
    this.propKeys.forEach(prop => {
      if (this.hasOwnProperty(prop)) {
        let value = this[prop];
        delete this[prop];
        this[prop] = value;
      }
    });
  }

  setProperties() {
    this.setSrc(this.url);
    this.img.width = this.width;
    this.img.height = this.height;
    this.img.alt = this.altText;
  }

  get propKeys() {
    return ["url", "fallback", "width", "height", "altText", "logCallback"];
  }

  get img() {
    return this.shadowRoot.querySelector("img");
  }

  get url() {
    return this.getAttribute("url");
  }

  get width() {
    return this.getAttribute("width") || 480;
  }

  get height() {
    return this.getAttribute("height") || 640;
  }

  get altText() {
    return this.getAttribute("alt") || "";
  }

  get fallback() {
    return this.getAttribute("fallback");
  }

  get logCallback() {
    return this.getAttribute("log");
  }

  onImgError(err) {
    this.logError(err);
    this.useFallback();
  }

  useFallback() {
    if (this.fallback && !this.usingFallback) {
      this.setAttribute("url", this.fallback);
      this.setSrc(this.fallback);
      this.usingFallback = true;
    }
  }

  logError(err) {
    if (this.logCallback) {
      window[this.logCallback](err);
    }
  }

  setSrc(url) {
    this.img.src = url;
  }
}

customElements.define("better-img", BetterImg);

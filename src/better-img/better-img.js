class BetterImg extends HTMLElement {

    constructor() {
      super();
      this.defaultWidth = 480;
      this.defaultHeight = 640;
      this.usingFallback = true;
    }

    connectedCallback() {
      this.initShadowDom();
    }

    initShadowDom() {
      let shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = this.template;
      shadowRoot.querySelector('img').onerror = this.onImgError();
    }

    get url() {
      return this.getAttribute('url');
    }

    set url(value) {
      return this.url = value;
    }

    get width() {
      return this.getAttribute('width') || this.defaultWidth;
    }

    get height() {
      return this.getAttribute('height') || this.defaultHeight;
    }

    get fallback() {
      return this.getAttribute('fallback');
    }

    get template() {
      return `
        <img
          width=${this.width}
          height=${this.height}
          src=${this.url} />
      `;
    }

    onImgError() {
      if(this.fallback && this.usingFallback) {
        this.setAttribute('url', this.fallback);
        this.setSrc();
      }
      this.usingFallback = false;
    }

    setSrc() {
      this.shadowRoot.querySelector('img').src = this.fallback;
    }

  }

  customElements.define('better-img', BetterImg);

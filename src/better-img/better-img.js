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
      this.addErrorListener();
    }

    addErrorListener() {
      this.shadowRoot.querySelector('img').onerror = (err) => {
        this.onImgError(err);
      }
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

    get logUrl() {
      return this.getAttribute('log');
    }

    get altText() {
      return this.getAttribute('alt') || "";
    }

    get template() {
      return `
        <img
          width=${this.width}
          height=${this.height}
          src="${this.url}"
          alt="${this.altText}"
        />
      `;
    }

    onImgError(err) {
      this.log(err);
      if(this.fallback && this.usingFallback) {
        this.setAttribute('url', this.fallback);
        this.setSrc(this.fallback);
        this.usingFallback = false;
      }
    }

    log(err) {
      if(this.logUrl){

      }
    }

    setSrc(url) {
      this.shadowRoot.querySelector('img').src = url;
    }
  }

  customElements.define('better-img', BetterImg);

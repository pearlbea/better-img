class BetterImg extends HTMLElement {

    constructor() {
      super();
      this.usingFallback = true;
    }

    get defaultWidth() {
      return 480;
    }

    get defaultHeight() {
      return 640;
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
      this.shadowRoot.querySelector('img').onerror = this.onImgError.bind(this);
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
      this.logError(err);
      if(this.fallback && this.usingFallback) {
        this.setAttribute('url', this.fallback);
        this.setSrc(this.fallback);
        this.usingFallback = false;
      }
    }

    logError(err) {
      if(this.logUrl){
        window[this.logUrl](err);
      }
    }

    setSrc(url) {
      this.shadowRoot.querySelector('img').src = url;
    }
  }

  customElements.define('better-img', BetterImg);

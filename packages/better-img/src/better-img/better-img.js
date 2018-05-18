class BetterImg extends HTMLElement {

    constructor() {
      super();
      this.usingFallback = false;
    }

    get defaultWidth() {
      return 480;
    }

    get defaultHeight() {
      return 640;
    }

    connectedCallback() {
      this.init();
    }

    init() {
      this.innerHTML = this.template;
      this.addErrorListener();
      this.setSrc(this.url);
    }

    addErrorListener() {
      this.querySelector('img').onerror = this.onImgError.bind(this);
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

    get logCallback() {
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
          alt="${this.altText}"
        />
      `;
    }

    onImgError(err) {
      this.logError(err);
      this.useFallback();
    }

    useFallback() {
      if(this.fallback && !this.usingFallback) {
        this.setAttribute('url', this.fallback);
        this.setSrc(this.fallback);
        this.usingFallback = true;
      }
    }

    logError(err) {
      if(this.logCallback){
        window[this.logCallback](err);
      }
    }

    setSrc(url) {
      this.querySelector('img').src = url;
    }
  }

  customElements.define('better-img', BetterImg);

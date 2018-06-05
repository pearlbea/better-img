import { Seed, Property, html, TemplateResult } from "@nutmeg/seed";

export class BetterImgNutmeg extends Seed {
  @Property() public fallback: string = "";
  @Property() public log: string = "";
  @Property() public url: string = "";
  @Property() public width: number = 640;
  @Property() public height: number = 480;
  @Property() public alt: string = "";
  @Property() private usingFallback: boolean = false;

  constructor() {
    super();
  }

  /** The component instance has been inserted into the DOM. */
  public connectedCallback() {
    super.connectedCallback();
    this.addEventListener("error", this.handleImageError.bind(this));
    this.setSrc();
  }

  /** The component instance has been removed from the DOM. */
  public disconnectedCallback() {
    super.disconnectedCallback();
  }

  /** Watch for changes to these attributes. */
  public static get observedAttributes(): string[] {
    return super.observedAttributes;
  }

  /** Rerender when the observed attributes change. */
  public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  /** Styling for the component. */
  public get styles(): TemplateResult {
    return html`
      <style><style>
    `;
  }

  /** HTML Template for the component. */
  public get template(): TemplateResult {
    return html`
      <img
        fallback=${this.fallback}
        log=${this.log}
        url=${this.url}
        alt=${this.alt}
        width=${this.width}
        height=${this.height}
        />
    `;
  }

  private handleImageError() {}

  get image() {
    return this.$("img");
  }

  private setSrc() {
    this.image.setAttribute("src", this.url);
  }
}

window.customElements.define("better-img-nutmeg", BetterImgNutmeg);

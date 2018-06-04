import { Component, Element, Prop, State } from "@stencil/core";

@Component({
  tag: "better-img-stencil",
  styleUrl: "better-img-stencil.css"
})
export class BetterImgStencil {
  @Element() el: HTMLElement;

  @Prop() alt: string;
  @Prop() fallback: string;
  @Prop() height: number = 640;
  @Prop() log: string;
  @Prop() url: string;
  @Prop() width: number = 480;

  @State() usingFallback: boolean = false;

  render() {
    return (
      <img
        onError={this.handleImgError.bind(this)}
        width={this.width}
        height={this.height}
        alt={this.alt}
      />
    );
  }

  componentDidLoad() {
    this.setSrc(this.url);
  }

  get image() {
    return this.el.querySelector("img");
  }

  handleImgError(error) {
    this.logError(error);
    this.useFallback();
  }

  logError(error) {
    if (this.log) {
      window[this.log](error);
    }
  }

  setSrc(url) {
    this.image.setAttribute("src", url);
  }

  useFallback() {
    if (this.fallback && !this.usingFallback) {
      this.setSrc(this.fallback);
      this.usingFallback = true;
    }
  }
}

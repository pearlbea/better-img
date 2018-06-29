import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "better-img-stencil",
  styleUrl: "better-img-stencil.css",
  shadow: true
})
export class BetterImgStencil {
  @Prop() alt: string;
  @Prop() fallback: string;
  @Prop() height: number = 640;
  @Prop() log: string;
  @Prop() url: string;
  @Prop() width: number = 480;

  @State() usingFallback: boolean = false;

  image: HTMLImageElement;

  render() {
    return (
      <div>
        <img
          ref={(img: HTMLImageElement) => this.image = img}
          onError={this.handleImgError.bind(this)}
          width={this.width}
          height={this.height}
          alt={this.alt}
        /><div><slot /></div>
      </div>
    );
  }

  componentDidLoad() {
    this.setSrc(this.url);
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

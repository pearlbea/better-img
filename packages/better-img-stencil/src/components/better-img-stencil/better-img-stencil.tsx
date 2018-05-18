import { Component, Event, EventEmitter, Listen, Prop } from "@stencil/core";

@Component({
  tag: "better-img-stencil",
  styleUrl: "better-img-stencil.css",
  shadow: true
})
export class MyComponent {
  @Event() imageError: EventEmitter;

  @Prop() alt: string = "";
  @Prop() fallback: string;
  @Prop() height: number = 640;
  @Prop() log: number;
  @Prop() url: string;
  @Prop() usingFallback: boolean = false;
  @Prop() width: number = 480;

  render() {
    return <img width={this.width} height={this.height} alt={this.alt} />;
  }
  componentDidLoad() {}

  @Listen("error")
  handleError(e) {
    console.log(e);
  }

  imageErrorHandler() {}
}

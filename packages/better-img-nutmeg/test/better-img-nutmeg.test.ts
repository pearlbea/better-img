import "mocha";
import { expect } from "chai";
import * as sinon from "sinon";

import { BetterImgNutmeg } from "../src/better-img-nutmeg";

function logMe(): void {
  let newNode: HTMLDivElement = document.createElement("div");
  newNode.setAttribute("id", "test");
  newNode.textContent = "me";
  document.querySelector("img").insertBefore(newNode, undefined);
}

describe("<better-img-nutmeg>", () => {
  let component: BetterImgNutmeg;

  describe("with defaults", () => {
    beforeEach(() => {
      component = fixture("<better-img-nutmeg></better-img-nutmeg>");
    });

    it("renders an image", () => {
      expect(component.$("img")).to.be.ok;
    });

    it("uses the default width", () => {
      expect(component.$("img").getAttribute("width")).to.equal("640");
    });

    it("uses the default height", () => {
      expect(component.$("img").getAttribute("height")).to.equal("480");
    });
  });

  describe("with set props", () => {
    beforeEach(() => {
      component = fixture(`<better-img-nutmeg
        url="https://placeimg.com/300/300/animals"
        alt="cute animal"
        fallback="https://placeimg.com/300/300/nature"
        width="300"
        height="300"
        ></better-img-nutmeg>`);
    });

    it("displays the image", () => {
      expect(component.$("img").getAttribute("src")).to.equal(component.url);
    });

    it("displays the alt text", () => {
      expect(component.$("img").getAttribute("alt")).to.equal(component.alt);
    });

    it("uses the supplied width", () => {
      expect(component.$("img").getAttribute("width")).to.equal(
        String(component.width)
      );
    });

    it("uses the supplied height", () => {
      expect(component.$("img").getAttribute("height")).to.equal(
        String(component.height)
      );
    });
  });

  describe("with error", () => {
    beforeEach(() => {
      component = fixture(`<better-img-nutmeg
        url="https://placeg.com/300/300/animals"
        alt="cute animal"
        fallback="https://placeimg.com/300/300/nature"
        width="300"
        height="300"
        ></better-img-nutmeg>`);
    });

    it("is renders fallback image", () => {
      setTimeout(() => {
        expect(component.$("img").getAttribute("src")).to.equal(
          component.fallback
        );
      }, 200);
    });

    it("is calls the log function", () => {
      setTimeout(() => {
        expect(document.querySelector("test")).to.be.ok;
        expect(document.querySelector("test")).to.equal("me");
      }, 200);
    });
  });
});

function fixture(tag: string): BetterImgNutmeg {
  function fixtureContainer(): HTMLElement {
    let div = document.createElement("div");
    div.classList.add("fixture");
    return div;
  }
  let fixture =
    document.body.querySelector(".fixture") ||
    document.body.appendChild(fixtureContainer());
  fixture.innerHTML = tag;
  return fixture.children[0] as BetterImgNutmeg;
}

// tests don't work with shadow dom: https://github.com/ionic-team/stencil/issues/381

import { TestWindow } from "@stencil/core/testing";
import { BetterImgStencil } from "./better-img-stencil";

function logMe(err) {
  let newNode: HTMLDivElement = document.createElement("div");
  newNode.setAttribute("id", "test");
  newNode.textContent = "me";
  document.querySelector("img").insertBefore(newNode, undefined);
}

describe("better-img-stencil", () => {
  it("should build", () => {
    expect(new BetterImgStencil()).toBeTruthy();
  });

  describe("rendering defaults", () => {
    let element: HTMLBetterImgStencilElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [BetterImgStencil],
        html: "<better-img-stencil></better-img-stencil>"
      });
    });

    it("should render an image", () => {
      expect(element.querySelector("img")).toBeTruthy;
    });

    it("should set the default width", () => {
      expect(element.querySelector("img").getAttribute("width")).toBe("480");
    });

    it("should set the default height", () => {
      expect(element.querySelector("img").getAttribute("height")).toBe("640");
    });

    it("should set no alt text", () => {
      expect(element.querySelector("img").getAttribute("alt")).toBe(null);
    });
  });

  describe("rendering passed-in properties", () => {
    let element: HTMLBetterImgStencilElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [BetterImgStencil],
        html: `<better-img-stencil
                  url='https://placeimg.com/500/300/animals'
                  width="500"
                  height="300"
                  alt='cute animals'
                  fallback='https://placeimg.com/500/500/nature'
                  ><div>caption</div></better-img-stencil>`
      });
    });

    it("should render the image", () => {
      expect(element.querySelector("img")).toBeTruthy;
      expect(element.querySelector("img").getAttribute("src")).toBe(
        element.url
      );
    });

    it("should render the alt text", () => {
      expect(element.querySelector("img").getAttribute("alt")).toBe(
        "cute animals"
      );
    });

    it("should use the supplied width", () => {
      expect(element.querySelector("img").getAttribute("width")).toBe("500");
    });

    it("should use the supplied height", () => {
      expect(element.querySelector("img").getAttribute("height")).toBe("300");
    });
    it("should render slot content", () => {
      expect(element.innerHTML).toContain("<div>caption</div>")
    });
  });

  describe("handling errors", () => {
    let element: HTMLBetterImgStencilElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [BetterImgStencil],
        html: `<better-img-stencil
                  url='https://plaeimg.com/500/300/wrong'
                  width="500"
                  height="300"
                  alt='cute animals'
                  log="logMe"
                  fallback='https://placeimg.com/500/500/nature'
                  ></better-img-stencil>`
      });
    });

    it("should render the fallback image", async () => {
      await testWindow.flush();
      setTimeout(() => {
        expect(element.querySelector("img").getAttribute("src")).toBe(
          element.fallback
        );
      }, 200);
    });

    it("should call the logging function", async () => {
      setTimeout(function() {
        expect(document.querySelector("test")).toBeTruthy;
        expect(document.querySelector("test")).toBe("me");
      }, 200);
    });
  });
});

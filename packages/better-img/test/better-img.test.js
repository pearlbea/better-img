function logMe() {
  let newNode = document.createElement("div");
  newNode.setAttribute("id", "test");
  newNode.textContent = "me";
  document.querySelector("img").insertBefore(newNode, undefined);
}

describe("<better-img>", () => {
  let component, img;

  describe("with defaults", () => {
    beforeEach(() => {
      component = fixture("<better-img></better-img>");
      img = component.shadowRoot.querySelector("img");
    });

    it("renders an image", () => {
      expect(img).to.be.ok;
    });

    it("uses the default width", () => {
      expect(img.getAttribute("width")).to.equal("480");
    });

    it("uses the default height", () => {
      expect(img.getAttribute("height")).to.equal("640");
    });
  });

  describe("with set props", () => {
    beforeEach(() => {
      component = fixture(`<better-img
        url="https://placeimg.com/300/300/animals"
        alt="cute animal"
        fallback="https://placeimg.com/300/300/nature"
        width="300"
        height="300"
        ></better-img>`);
      img = component.shadowRoot.querySelector("img");
    });

    it("displays the image", () => {
      expect(img.getAttribute("src")).to.equal(component.url);
    });

    it("displays the alt text", () => {
      expect(img.getAttribute("alt")).to.equal(component.alt);
    });

    it("uses the supplied width", () => {
      expect(img.getAttribute("width")).to.equal(String(component.width));
    });

    it("uses the supplied height", () => {
      expect(img.getAttribute("height")).to.equal(String(component.height));
    });
  });

  describe("with error", () => {
    beforeEach(() => {
      component = fixture(`<better-img
        url="https://placeg.com/300/300/animals"
        alt="cute animal"
        fallback="https://placeimg.com/300/300/nature"
        width="300"
        height="300"
        ></better-img>`);
      img = component.shadowRoot.querySelector("img");
    });

    it("is renders fallback image", () => {
      setTimeout(() => {
        expect(img.getAttribute("src")).to.equal(component.fallback);
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

function fixture(tag) {
  function fixtureContainer() {
    let div = document.createElement("div");
    div.classList.add("fixture");
    return div;
  }
  let fixture =
    document.body.querySelector(".fixture") ||
    document.body.appendChild(fixtureContainer());
  fixture.innerHTML = tag;
  return fixture.children[0];
}

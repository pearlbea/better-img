const path = require("path");

module.exports = {
  entry: "./better-img-polymer.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};

const path = require("path");

module.exports = {
  entry: "./src/mailgo.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};

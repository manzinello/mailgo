const path = require("path");

module.exports = [
  {
    mode: "production",
    entry: "./dist/mailgo.min.js",
    output: {
      filename: "mailgo.js",
      path: path.resolve(__dirname),
      library: "mailgo",
      libraryTarget: "umd",
    },
  },
  {
    mode: "production",
    entry: "./dist/mailgo.min.js",
    output: {
      filename: "./dist/mailgo.min.js",
      path: path.resolve(__dirname),
      library: "mailgo",
      libraryTarget: "umd",
    },
  },
];

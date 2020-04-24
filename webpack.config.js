const path = require("path");

module.exports = [
  {
    mode: "production",
    entry: "./src/mailgo.script.js",
    output: {
      filename: "./dist/mailgo.min.js",
      path: path.resolve(__dirname),
      library: "mailgo",
      libraryTarget: "umd",
    },
  },
];

const path = require("path");

module.exports = [
  {
    mode: "production",
    entry: "./src/mailgo.script.js",
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["to-string-loader", "css-loader"],
        },
      ],
    },
    output: {
      filename: "./dist/mailgo.min.js",
      path: path.resolve(__dirname),
      library: "mailgo",
      libraryTarget: "umd",
    },
  },
];

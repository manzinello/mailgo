const path = require("path");

module.exports = {
  entry: "./src/mailgo.js",
  output: {
    filename: "mailgo.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"]
      }
    ]
  }
};

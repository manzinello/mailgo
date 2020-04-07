const path = require("path");

module.exports = {
  mode: "production",
  entry: "./dist/mailgo.min.js",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "mailgo.js",
    path: path.resolve(__dirname),
    library: "mailgo",
    libraryTarget: "umd",
  },
};

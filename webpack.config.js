const path = require("path");

const mailgoRules = [
  {
    test: /\.tsx?$/,
    include: path.resolve(__dirname, "./src/"),
    use: "ts-loader",
    exclude: /node_modules/,
  },
  {
    test: /\.s[ac]ss$/i,
    use: ["to-string-loader", "css-loader", "sass-loader"],
  },
];

module.exports = [
  {
    mode: "development",
    entry: "./mailgo.webpack.ts",
    context: path.join(__dirname, "src"),
    module: {
      rules: mailgoRules,
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    output: {
      filename: "mailgo.min.js",
      path: path.resolve(__dirname, "dist"),
    },
  },
  {
    mode: "production",
    entry: "./mailgo.ts",
    context: path.join(__dirname, "src"),
    module: {
      rules: mailgoRules,
    },
    optimization: {
      minimize: false,
    },
    output: {
      filename: "mailgo.js",
      path: path.resolve(__dirname, "dist"),
    },
  },
];

const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

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
  {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  },
];

module.exports = [
  {
    mode: "production",
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
    entry: "./mailgo.lib.ts",
    context: path.join(__dirname, "src"),
    module: {
      rules: mailgoRules,
    },
    optimization: {
      minimize: false,
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    output: {
      filename: "lib/mailgo.js",
      library: "mailgo",
      libraryTarget: "umd",
      libraryExport: "default",
      globalObject: "typeof self !== 'undefined' ? self : this",
      // auxiliaryComment: "mailgo",
      path: path.resolve(__dirname),
    },
  },
];

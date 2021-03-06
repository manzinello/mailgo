const path = require("path");
const babelconfig = require("./babel.config");
const TerserPlugin = require("terser-webpack-plugin");

const mailgoRules = [
  {
    test: /\.tsx?$/,
    include: path.resolve(__dirname, "./src/"),
    use: [{ loader: "babel-loader", options: babelconfig }],
    exclude: /node_modules/,
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      "to-string-loader",
      {
        loader: "css-loader",
        options: {
          esModule: false,
          sourceMap: false,
        },
      },
      "sass-loader",
    ],
  },
];

const mailgoOutputEnvironment = {
  arrowFunction: false,
  bigIntLiteral: false,
  const: false,
  destructuring: false,
  dynamicImport: false,
  forOf: false,
  module: false,
};

const mailgoOptimization = {
  minimize: true,
  minimizer: [new TerserPlugin()],
};

module.exports = [
  {
    mode: "production",
    target: "web",
    devtool: "source-map",
    entry: "./mailgo.dist.ts",
    context: path.join(__dirname, "webpack"),
    module: {
      rules: mailgoRules,
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    optimization: mailgoOptimization,
    output: {
      filename: "mailgo.min.js",
      library: "mailgo",
      libraryTarget: "window",
      environment: mailgoOutputEnvironment,
      path: path.resolve(__dirname, "dist"),
    },
  },
  {
    mode: "production",
    target: "web",
    devtool: "source-map",
    entry: "./mailgo.dist.ts",
    context: path.join(__dirname, "webpack"),
    optimization: {
      minimize: false,
    },
    module: {
      rules: mailgoRules,
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    output: {
      filename: "mailgo.js",
      library: "mailgo",
      libraryTarget: "window",
      environment: mailgoOutputEnvironment,
      path: path.resolve(__dirname, "dist"),
    },
  },
  {
    mode: "production",
    target: "web",
    devtool: "source-map",
    entry: "./mailgo.dist.dark.ts",
    context: path.join(__dirname, "webpack"),
    module: {
      rules: mailgoRules,
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    optimization: mailgoOptimization,
    output: {
      filename: "mailgo.dark.min.js",
      library: "mailgo",
      libraryTarget: "window",
      environment: mailgoOutputEnvironment,
      path: path.resolve(__dirname, "dist"),
    },
  },
  {
    mode: "production",
    target: "web",
    devtool: "source-map",
    entry: "./mailgo.dist.nocss.ts",
    context: path.join(__dirname, "webpack"),
    module: {
      rules: mailgoRules,
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    optimization: mailgoOptimization,
    output: {
      filename: "mailgo.nocss.min.js",
      library: "mailgo",
      libraryTarget: "window",
      environment: mailgoOutputEnvironment,
      path: path.resolve(__dirname, "dist"),
    },
  },
  {
    mode: "production",
    target: "web",
    devtool: "source-map",
    entry: "./mailgo.lib.ts",
    context: path.join(__dirname, "webpack"),
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
      filename: "mailgo.js",
      library: "mailgo",
      libraryTarget: "umd",
      environment: mailgoOutputEnvironment,
      globalObject: "typeof self !== 'undefined' ? self : this",
      path: path.resolve(__dirname, "lib"),
    },
  },
];

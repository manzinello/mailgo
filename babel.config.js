const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        browsers: ["last 2 versions"],
      },
    },
  ],
  "@babel/preset-typescript",
];

module.exports = { presets };

const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        browsers: ["defaults"],
      },
    },
  ],
  "@babel/preset-typescript",
];

module.exports = { presets };

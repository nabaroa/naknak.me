require("postcss");
require("postcss-import");
require("postcss-preset-env");

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      stage: 1,
      customMedia: true,
      // "nesting-rules": true,
      importFrom: [
        "./node_modules/nakds/dist/css/variables/custom-media.css",
      ],
    },
  },
};

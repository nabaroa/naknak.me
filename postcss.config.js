require("postcss");
require("postcss-import");
require("postcss-preset-env");
require("cssnano");

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      stage: 1,
      features: {
        "custom-media-queries": true,
      },
    },
    cssnano: {
      preset: "default",
    },
  },
};

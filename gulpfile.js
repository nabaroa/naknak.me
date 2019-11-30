const gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  cssImport = require("postcss-import"),
  postcssPresetEnv = require("postcss-preset-env"),
  cssnano = require("cssnano"),
  mixins = require("postcss-mixins"),
  nested = require("postcss-nested"),
  rename = require("gulp-rename"),
  customMedia = require("postcss-custom-media");
(browserSync = require("browser-sync")), (notify = require("gulp-notify"));

function css() {
  return gulp
    .src("./src/*.css")
    .pipe(
      postcss([
        cssImport(),
        mixins(),
        customMedia(),
        nested(),
        postcssPresetEnv({
          autoprefixer: { grid: true }
        })
      ])
    )
    .pipe(postcss([cssnano()]))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./docs/css/"))
    .pipe(
      notify({
        message: "Your CSS is ready ♡"
      })
    );
}

gulp.task("browser-sync", () => {
  browserSync({
    server: {
      baseDir: "./docs/"
    }
  });
});

function watch() {
  gulp.watch("./src/**/*.css", css);
}

const build = gulp.series(css);

exports.default = build;
exports.css = css;
exports.watch = watch;

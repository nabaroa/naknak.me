var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
        livereload = require('gulp-livereload');

gulp.task('default', function() {
    return gulp.src('scss/style.scss')
    .pipe(sass({
            sourcemap: true
        }))
    // Catch any SCSS errors and prevent them from crashing gulp
    .on('error', function(error) {
        console.error(error);
        this.emit('end');
    })
    .pipe(sourcemaps.init({
        loadMaps: true
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./css'))
    .pipe(sourcemaps.write())
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(minifycss())
    .pipe(gulp.dest('./css'))
    .pipe(notify({ message: 'Sass task complete' }));
});
// Watch
gulp.task('watch', function() {
 
  // Watch .scss files
  gulp.watch('scss/**/*.scss', ['default']);

 
  // Create LiveReload server
  livereload.listen(); 
 
  // Watch any files in dist/, reload on change
  gulp.watch(['css/']).on('change', livereload.changed);
 
});

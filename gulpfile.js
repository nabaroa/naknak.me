var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnext = require('postcss-cssnext'),
    precss = require('precss'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence');;

gulp.task('css', function() {
    var processors = [
      autoprefixer,
        cssnext,
        precss
    ];

    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'))
        .pipe(plumber())
        .pipe(gulp.dest('./docs/css'))
        .pipe( browserSync.stream() )
        .pipe(notify({ message: 'Your CSS is ready ;)' }));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './docs/'
        }
    });
});

// Watch
gulp.task('watch', function() {
    // Watch .css files
    gulp.watch('src/**/*.css', ['css']);

});

// Default
gulp.task('default', function() {
  runSequence(['css', 'browser-sync', 'watch']);
});

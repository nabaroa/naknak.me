const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    browserSync = require('browser-sync'),
    notify = require('gulp-notify');

gulp.task('css', () =>{
    return gulp.src('./src/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./docs/css'))
        .pipe(notify({ message: 'Your CSS is ready ♡' }));
});


gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: './docs/'
    }
  });
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.css', ['css']);

});

gulp.task('default', gulp.series('css', 'browser-sync', 'watch'));

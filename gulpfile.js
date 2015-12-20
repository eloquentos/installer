var gulp = require('gulp');
var sass = require('gulp-sass');
var swig = require('gulp-swig');

gulp.task('sass', function () {
  gulp.src('./assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('views', function() {
  gulp.src('./views/**/*.html')
    .pipe(swig())
    .pipe(gulp.dest('./html/'))
});

gulp.task('watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
  gulp.watch('./views/**/*.html', ['views']);
});

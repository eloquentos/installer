var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  gulp.src('./assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('coffee', function() {
  gulp.src('./assets/coffee/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./assets/coffee/compiled/'));
});

gulp.task('concat', function() {

  gulp.src('./assets/coffee/compiled/controllers/*.js')
    .pipe(concat('controllers.js'))
    .pipe(gulp.dest('./assets/js/'));

  gulp.src('./assets/coffee/compiled/app/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./assets/js/'));


});

gulp.task('watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
  gulp.watch('./assets/coffee/**/*.coffee', ['coffee', 'concat']);
});

var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass'); 

gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('src/css/'));
});

gulp.task('minify-css', () => {
    return gulp.src('src/css/App.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('App.min.css'))
    .pipe(gulp.dest('src/css/'));
});

gulp.task('default', [ 'sass', 'minify-css' ]);
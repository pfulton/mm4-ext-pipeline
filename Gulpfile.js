var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify');

gulp.task('imgmin', function () {
    return gulp.src('source/images/dev/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('source/images/prod'));
});

gulp.task('watch', function() {
  gulp.watch('source/images/dev/*', ['imgmin']);
});

gulp.task('default', ['imgmin', 'watch']);
gulp.task('buildProd', ['imgmin']);

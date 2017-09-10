var gulp = require('gulp')
  ,clean = require('gulp-clean')
  ,uglify = require('gulp-uglify')
  ,usemin = require('gulp-usemin')
  ,cssmin = require('gulp-cssmin')
  ,autoprefixer = require('gulp-autoprefixer')

gulp.task('default', ['copy'], function() {
	gulp.start('usemin');
});

gulp.task('copy', ['clean'], function() {
	return gulp.src('src/**/*')
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
	return gulp.src('dist')
		.pipe(clean());
});

gulp.task('usemin', function() {
  return gulp.src('src/**/*.html')
    .pipe(usemin({
      js: [uglify],
      css: [autoprefixer]
    }))
    .pipe(gulp.dest('dist'));
});
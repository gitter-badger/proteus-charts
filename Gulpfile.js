const gulp = require('gulp');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');


gulp.task('concat', function() {
  return gulp.src([
  	'./src/utils/globals.js',
  	'./src/utils/svg.js',
  	'./src/charts/classes.js'
  	])
    .pipe(concat('proteus-charts.js'))
    .pipe(gulp.dest('./dist/'));
});	

gulp.task('minify', function() {
  return gulp.src('./dist/es5/proteus-charts.js')
    .pipe(uglify().on('error', gutil.log))
    .pipe(gulp.dest('./min'));
  
});

gulp.task('default', ['concat', 'minify']);
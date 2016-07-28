var gulp = require('gulp');
var dutil = require('./doc-util');
var clean = require('gulp-clean');
var runSequence = require( 'run-sequence' );

gulp.task('build', function (done) {
  runSequence(
    [
      'sass',
      'javascript',
      'images',
      'fonts',
    ],
    done
  );
});

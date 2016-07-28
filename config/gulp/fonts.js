var gulp = require('gulp');
var del = require('del');
var dutil = require('./doc-util');
var task = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];

gulp.task('clean-assets-fonts', function() {
  return del('assets/fonts/**/*');
});

gulp.task(task, function (done) {

  dutil.logMessage(task, 'Copying Fonts');

  var stream = gulp.src(['node_modules/font-awesome/fonts/**/*', 'node_modules/uswds/src/fonts/**/*'])
    .pipe(gulp.dest('assets/fonts'));

  return stream;

});

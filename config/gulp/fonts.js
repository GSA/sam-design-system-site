var gulp = require('gulp');
var dutil = require('./doc-util');
var task = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];

gulp.task(task, function (done) {

  dutil.logMessage(task, 'Copying Fonts');

  var stream = gulp.src([
      'node_modules/font-awesome/fonts/**/*', // get font awesome font files
      'node_modules/uswds/src/fonts/**/*' // get uswds font files
    ])
    .pipe(gulp.dest('dist/fonts')); // if this moves them to dist - what moves them to assets

  return stream;

});

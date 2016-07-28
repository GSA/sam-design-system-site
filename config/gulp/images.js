var gulp = require('gulp');
var del = require('del');
var dutil = require('./doc-util');
var task = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];

gulp.task('clean-assets-img', function() {
  return del(['assets/img/**/*', '!assets/img/home/**']);
});

gulp.task(task, function (done) {

  dutil.logMessage(task, 'Copying Images');

  var stream = gulp.src(['node_modules/uswds/src/img/**/*', 'src/img/**/*', '_styleguide_assets/**/*'])
    .pipe(gulp.dest('assets/img'));

  return stream;

});

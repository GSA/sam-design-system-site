var gulp = require('gulp');
var dutil = require('./doc-util');
var task = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('clean-dist', function() {
  return del('dist');
});

gulp.task('dist-fonts', function() {
  dutil.logMessage(task, 'Distributing Fonts');

  var stream = gulp.src(['node_modules/font-awesome/fonts/**/*', 'node_modules/uswds/src/fonts/**/*', 'src/fonts/**/*'])
    .pipe(gulp.dest('dist/fonts'));

  return stream;
});

gulp.task('dist-javascript', function() {
  dutil.logMessage(task, 'Distributing JavaScript');

  var stream = gulp.src(['node_modules/uswds/src/js/**/*', 'src/js/**/*'])
    .pipe(gulp.dest('dist/js'));

  return stream;
});

gulp.task('dist-sass', function() {
  dutil.logMessage(task, 'Distributing Sass');

  var stream = gulp.src('src/stylesheets/**/*')
    .pipe(gulp.dest('dist/stylesheets'));

  return stream;
});

gulp.task('dist-images', function() {
  dutil.logMessage(task, 'Distributing Images');

  var stream = gulp.src(['node_modules/uswds/src/img/**/*', 'src/img/**/*'])
    .pipe(gulp.dest('dist/img'));

  return stream;
});

gulp.task(task, function (done) {

  dutil.logMessage(task, 'Creating distribution directory');

  runSequence(
    'clean-dist',
    [
      'dist-fonts',
      'dist-javascript',
      'dist-sass',
      'dist-images'
    ],
    done
  );
});

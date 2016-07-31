var gulp = require('gulp');
var dutil = require('./doc-util');
var task = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];
var spawn = require('cross-spawn');
var runSequence = require('run-sequence');
var del = require('del');


gulp.task('make-tmp-directory', function (done) {

  dutil.logMessage('make-tmp-directory', 'Creating temporary release directory.');

  return gulp.src('dist/**/*')
    .pipe(gulp.dest(dutil.dirName));

});

gulp.task('clean-tmp-directory', function (done) {

  dutil.logMessage('clean-tmp-directory', 'Deleting temporary release directory.');

  return del(dutil.dirName);
});

gulp.task('zip-archives', function (done) {

  dutil.logMessage('zip-archives', 'Creating a zip archive in dist/' + dutil.dirName + '.zip');

  var zip = spawn('zip', [
    '--log-info',
    '-r',
    './dist/' + dutil.dirName + '.zip',
    dutil.dirName,
    '-x "*.DS_Store"',
  ]);

  zip.stdout.on('data', function (data) {

    if (/[\w\d]+/.test(data)) {

      dutil.logData('zip-archives', data);

    }

  });

  zip.stderr.on('data', function (data) {

    dutil.logError('zip-archives', data);

  });

  zip.on('error', function (error) {

     dutil.logError('zip-archives', 'Failed to create a zip archive');

     done(error);
  });

  zip.on('close', function (code) { if (0 === code) { done(); } });

});

gulp.task(task, [ 'build' ], function (done) {

  dutil.logMessage(task, 'Creating a zip archive at dist/' + dutil.dirName + '.zip');

  runSequence(
    'make-tmp-directory',
    'zip-archives',
    'clean-tmp-directory',
    done
  );
});

// var gulp = require('gulp');
// var dutil = require('./doc-util');
// var task = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];
// var del = require('del');
// var runSequence = require('run-sequence');

// gulp.task('clean-dist', function() {
//   return del('dist');
// });

// gulp.task('dist-fonts', function() {
//   dutil.logMessage(task, 'Distributing Fonts');

//   var stream = gulp.src([
//       'node_modules/font-awesome/fonts/**/*', 
//       'node_modules/uswds/src/fonts/**/*', 
//       'src/fonts/**/*'
//     ])
//     .pipe(gulp.dest('dist/fonts'));

//   return stream;
// });

// gulp.task('dist-javascript', function() {
//   dutil.logMessage(task, 'Distributing JavaScript');

//   var stream = gulp.src(['node_modules/uswds/src/js/**/*', 'src/js/**/*'])
//     .pipe(gulp.dest('dist/js'));

//   return stream;
// });

// gulp.task('dist-sass', function() {
//   dutil.logMessage(task, 'Distributing Sass');

//   var stream = gulp.src('src/stylesheets/**/*')
//     .pipe(gulp.dest('dist/stylesheets'));

//   return stream;
// });

// gulp.task('dist-images', function() {
//   dutil.logMessage(task, 'Distributing Images');

//   var stream = gulp.src(['node_modules/uswds/src/img/**/*', 'src/img/**/*'])
//     .pipe(gulp.dest('dist/img'));

//   return stream;
// });

// gulp.task(task, function (done) {

//   dutil.logMessage(task, 'Creating distribution directory');

//   runSequence(
//     'clean-dist',
//     [
//       'dist-fonts',
//       'dist-javascript',
//       'dist-sass',
//       'dist-images'
//     ],
//     done
//   );
// });

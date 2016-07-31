var gulp = require('gulp');
var gutil = require('gulp-util');
var dutil = require('./doc-util');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge-stream');
var rename = require('gulp-rename');
var assert = require('gulp-if');
var linter = require('gulp-eslint');
var task = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];
var doc_task = 'docs_' + task;

gulp.task('doc_eslint', function (done) {

  if (!cFlags.test) {
    dutil.logMessage('eslint', 'Skipping linting of docs JavaScript files.');
    return done();
  }

  return gulp.src([
      'docs/doc_assets/js/**/*.js', // TODO: This is not the correct location
      '!docs/doc_assets/js/vendor/**/*.js' // TODO: This is not the correct location
    ])
    .pipe(linter('.eslintrc'))
    .pipe(linter.format());

});

gulp.task('eslint', function (done) {

  if (!cFlags.test) {
    dutil.logMessage('eslint', 'Skipping linting of JavaScript files.');
    return done();
  }

  return gulp.src([ 
      'src/js/**/*.js', // TODO: This is not the correct location
      '!src/js/vendor/**/*.js' // TODO: This is not the correct location
    ])
    .pipe(linter('.eslintrc'))
    .pipe(linter.format());

});

gulp.task(task, [ 'eslint' ], function (done) {

  dutil.logMessage(task, 'Compiling JavaScript');

  var defaultStream = browserify({
    entries: 'src/js/start.js',
    debug: true,
  });

  defaultStream = defaultStream.bundle()
    .pipe(source('components.js')) // TODO: This does not exist
    .pipe(buffer())
    .pipe(rename({ basename: dutil.pkg.name }))
    .pipe(gulp.dest('dist/js')); // TODO: This does not exist

  var minifiedStream = browserify({
    entries: 'src/js/start.js',
    debug: true,
  });

  minifiedStream = minifiedStream.bundle()
    .pipe(source('components.js')) // TODO: This does not exist
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .on('error', gutil.log)
      .pipe(rename({
        basename: dutil.pkg.name,
        suffix: '.min',
      }))
    .pipe(sourcemaps.write('.', { addComment: false }))
    .pipe(gulp.dest('dist/js'));

  return merge(defaultStream, minifiedStream);

});

gulp.task(doc_task, [ 'doc_eslint' ], function (done) {

  dutil.logMessage(doc_task, 'Compiling JavaScript for website');

  var minifiedStream = browserify({
    entries: '_site-assets/js/start.js',
    debug: true,
  });

  return minifiedStream.bundle()
    .pipe(source('start.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .on('error', gutil.log)
      .pipe(rename({
        basename: 'styleguide',
      }))
    .pipe(sourcemaps.write('.', { addComment: false }))
    .pipe(gulp.dest('assets/js'));

});

// var gulp = require('gulp');
// var del = require('del');
// var gutil = require('gulp-util');
// var dutil = require('./doc-util');
// var browserify = require('browserify');
// var buffer = require('vinyl-buffer');
// var source = require('vinyl-source-stream');
// var uglify = require('gulp-uglify');
// var sourcemaps = require('gulp-sourcemaps');
// var merge = require('merge-stream');
// var rename = require('gulp-rename');
// var assert = require('gulp-if');
// var linter = require('gulp-eslint');
// var task = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];

// gulp.task('eslint', function (done) {

//   if (!cFlags.test) {
//     dutil.logMessage('eslint', 'Skipping linting of JavaScript files.');
//     return done();
//   }

//   return gulp.src([ 'src/js/**/*.js', '!src/js/vendor/**/*.js' ])
//     .pipe(linter('.eslintrc'))
//     .pipe(linter.format());

// });

// gulp.task('clean-assets-js', function(done) {
//   return del([
//     'assets/js/' + dutil.serveDestName + '.js',
//     'assets/js/' + dutil.serveDestName + '.min.js',
//     'assets/js/' + dutil.serveDestName + '.min.js.map'
//   ]);
// });

// gulp.task(task, [ 'eslint' ], function (done) {

//   dutil.logMessage(task, 'Compiling JavaScript');

//   var entries = ['src/js/start.js', 'assets/js/start.js'];

//   var defaultStream = browserify({
//     entries: entries,
//     debug: true,
//   });

//   defaultStream = defaultStream.bundle()
//     .pipe(source('components.js'))
//     .pipe(buffer())
//     .pipe(rename({ basename: dutil.serveDestName }))
//     .pipe(gulp.dest('assets/js'));

//   var minifiedStream = browserify({
//     entries: entries,
//     debug: true,
//   });

//   minifiedStream = minifiedStream.bundle()
//     .pipe(source('components.js'))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({ loadMaps: true }))
//       .pipe(uglify())
//       .on('error', gutil.log)
//       .pipe(rename({
//         basename: dutil.serveDestName,
//         suffix: '.min',
//       }))
//     .pipe(sourcemaps.write('.', { addComment: false }))
//     .pipe(gulp.dest('assets/js'));

//   return merge(defaultStream, minifiedStream);

// });

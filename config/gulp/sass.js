var gulp = require('gulp');
var del = require('del');
var dutil = require('./doc-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var linter = require('gulp-scss-lint');
var merge = require('merge-stream');
var filter = require('gulp-filter');
var task = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];

var entryFileFilter = filter('all.scss', { restore: true });
var normalizeCssFilter = filter('normalize.css', { restore: true });

gulp.task('scss-lint', function (done) {

  if (!cFlags.test) {
    dutil.logMessage('scss-lint', 'Skipping linting of Sass files.');
    return done();
  }

  return gulp.src('src/stylesheets/**/*.scss')
    .pipe(linter({
      config: '.scss-lint.yml',
    }));

});

gulp.task('clean-assets-css', function(done) {
  return del([
    'assets/css/' + dutil.serveDestName + '.css',
    'assets/css/' + dutil.serveDestName + '.min.css',
    'assets/css/' + dutil.serveDestName + '.min.css.map'
  ]);
});

gulp.task(task, [ 'scss-lint' ], function (done) {

  dutil.logMessage(task, 'Compiling Sass');

  // move prism
  gulp.src('_styleguide_assets/stylesheets/prism.css').pipe(gulp.dest('assets/css'));

  var entryFile = '_styleguide_assets/stylesheets/all.scss';

  var defaultStream = gulp.src(entryFile)
    .pipe(
      sass({ outputStyle: 'expanded' })
        .on('error', sass.logError)
    )
    .pipe(rename({ basename: dutil.serveDestName }))
    .pipe(gulp.dest('assets/css'));

  var minifiedStream = gulp.src(entryFile)
    .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(
        sass({ outputStyle: 'compressed' })
          .on('error', sass.logError)
      )
      .pipe(rename({
        basename: dutil.serveDestName,
        suffix: '.min',
      }))
    .pipe(sourcemaps.write('.', { addComment: false }))
    .pipe(gulp.dest('assets/css'));

  var streams = merge(defaultStream, minifiedStream);

  return streams;

});

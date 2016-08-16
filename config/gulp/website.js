var gulp = require('gulp');
var dutil = require('./doc-util');
var spawn = require('cross-spawn');
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var runSequence = require('run-sequence');
var del = require('del');
var clean = require('gulp-clean');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge-stream');
var supportedBrowsers = [
  '> 1%',
  'Last 2 versions',
  'IE 11',
  'IE 10',
  'IE 9',
];

var task = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];
var taskBuild = task + ':build';
var taskServe = task + ':serve';
var taskDev = task + ':development';

gulp.task('clean-fonts', function () {
  return del('assets/fonts/');
});

gulp.task('clean-bundled-javascript', function () {
  return del('assets/js/vendor/' + dutil.pkg.name + '.min.js');
});

gulp.task('clean-generated-assets', function (done) {
  runSequence(
    [
      'clean-fonts',
      'clean-bundled-javascript',
    ],
    done
  );
});


gulp.task('copy-docs-assets:images', function (done) {

  dutil.logMessage('copy-docs-assets:images', 'Copying _site-assets/img to assets/img');

  return gulp.src('_site-assets/img/**/*')
    .on('error', function (data) { dutil.logError('copy-docs-assets:images', data); })
    .pipe(gulp.dest('assets/img'));

});

gulp.task('copy-docs-assets:stylesheets', ['compile-docs-sass'], function (done) {

  dutil.logMessage('copy-docs-assets:stylesheets', 'Copying _site-assets/css to assets/css');

  return gulp.src('_site-assets/css/**/*.css')
    .on('error', function (data) { dutil.logError('copy-docs-assets:stylesheets', data); })
    .pipe(gulp.dest('assets/css'));

});

gulp.task('compile-docs-sass', function(done) {
  dutil.logMessage(task, 'Compiling site Sass');

  var entryFile = '_site-assets/css/styleguide.scss';

  var defaultStream = gulp.src(entryFile)
    .pipe(
      sass({ outputStyle: 'expanded' })
        .on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: supportedBrowsers,
        cascade: false,
      })
    )
    // .pipe(rename({ basename: dutil.pkg.name }))
    .pipe(gulp.dest('assets/css'));

  var minifiedStream = gulp.src(entryFile)
    .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(
        sass({ outputStyle: 'compressed' })
          .on('error', sass.logError)
      )
      .pipe(
        autoprefixer({
          browsers: supportedBrowsers,
          cascade: false,
        })
      )
      .pipe(rename({
        // basename: dutil.pkg.name,
        suffix: '.min',
      }))
    .pipe(sourcemaps.write('.', { addComment: false }))
    .pipe(gulp.dest('assets/css'));

  var streams = merge(defaultStream, minifiedStream);

  return streams;
});

gulp.task('copy-bundled-javascript', function (done) {

  dutil.logMessage('copy-bundled-javascript', 'Copying ' + dutil.dirName + ' release JavaScript');

  return gulp.src('dist/js/' + dutil.pkg.name + '.min.js')
    .on('error', function (data) { dutil.logError('copy-bundled-javascript', data); })
    .pipe(gulp.dest('assets/js/vendor'));

});

gulp.task('copy-fonts', function (done) {

  dutil.logMessage('copy-fonts', 'Copying ' + dutil.dirName + ' release fonts');

  return gulp.src('dist/fonts/**/*')
    .on('error', function (data) { dutil.logError('copy-fonts', data); })
    .pipe(gulp.dest('assets/fonts'));

});

gulp.task('copy-images', function (done) {

  dutil.logMessage('copy-images', 'Copying ' + dutil.dirName + ' release images');

  return gulp.src('dist/img/**/*')
    .on('error', function (data) { dutil.logError('copy-images', data); })
    .pipe(gulp.dest('assets/img'));
});

gulp.task('copy-assets', [ 'build' ], function (done) {
  runSequence(
    'clean-generated-assets',
    'docs_javascript',
    [
      'copy-bundled-javascript',
      'copy-fonts',
      'copy-images',
      'copy-docs-assets:images',
      'copy-docs-assets:stylesheets',
    ],
    done
  );
});

// Wrapper task for `bundle install` which installs gems for the Jekyll site.
//
gulp.task('bundle-gems', function (done) {

  var bundle = spawn('bundle');

  bundle.stdout.on('data', function (data) {

    if (/[\w\d]+/.test(data)) {

      dutil.logData('bundle-gems', data);

    }

  });

  bundle.stderr.on('data', function (data) {

    dutil.logError('bundle-gems', data);

  });

  bundle.on('error', function (error) { done(error); });

  bundle.on('close', function (code) { if (0 === code) { done(); } });

});

// Base task for `gulp website` prints helpful information about available commands.
//
gulp.task(task, function (done) {

  dutil.logIntroduction();

  dutil.logHelp(
    'gulp ' + task,
    'This is the default website task. Please review the available commands.'
 );

  dutil.logCommand(
    'gulp ' + taskBuild,
    'Build the website.'
 );

  dutil.logCommand(
    'gulp ' + taskServe,
    'Preview the website locally and rebuild it when files change.'
 );

  done();

});

// Wrapper task for `jekyll serve --watch` which runs after `gulp bundle-gems` to make sure
// the gems are properly bundled.
//
gulp.task(taskServe, [ 'copy-assets', 'bundle-gems' ], function (done) {

  gulp.watch([
    '_site-assets/css/**/*.scss', // Assets specific to website
    'src/stylesheets/**/*.scss', // Assets specific to package
    '!src/stylesheets/lib/**/*', // Not sure I agree with this ignore
  ], function (event) {
    runSequence(
      'sass',
      'copy-docs-assets:stylesheets'
    );
  });
  gulp.watch([
    'src/js/**/*.js',
    '!src/js/vendor/**/*',
  ], function (event) {
    runSequence(
      'javascript',
      'clean-bundled-javascript',
      [
        'copy-bundled-javascript',
      ]
    );
  });
  gulp.watch([
    '_site-assets/js/**/*.js',
    '!docs/doc_assets/js/vendor/**/*',
  ], function (event) {
    runSequence('docs_javascript');
  });
  gulp.watch('src/img/**/*', function (event) {
    runSequence(
      'images',
      [
        'copy-images',
        'copy-docs-assets:images',
      ]
    );
  });
  gulp.watch('src/fonts/**/*', function (event) {
    runSequence(
      'fonts',
      'clean-fonts',
      'copy-fonts'
    );
  });

  var jekyll = spawn('jekyll', [ 'serve', '-w' ]);

  jekyll.stdout.on('data', function (data) {

    if (/[\w\d]+/.test(data)) {

      data += '';
      data = data.replace(/[\s]+/g, ' ');

      if (/done|[^-]regen/i.test(data)) {

        dutil.logMessage(taskServe, data);

      } else {

        dutil.logData(taskServe, data);

      }

    }

  });

  jekyll.stderr.on('data', function (data) {
    dutil.logError(taskServe, data);
  });

  jekyll.on('error', function (error) { done(error); });

  jekyll.on('close', function (code) { if (0 === code) { done(); } });


});

// Wrapper task for `jekyll build` which runs after `gulp bundle-gems` to make sure
// the gems are properly bundled.
//
gulp.task(taskBuild, [ 'copy-assets', 'bundle-gems' ], function (done) {

  var jekyll = spawn('jekyll', [ 'build' ]);

  jekyll.stdout.on('data', function (data) {

    if (/[\w\d]+/.test(data)) {

      data += '';
      data = data.replace(/[\s]+/g, ' ');
      dutil.logData(taskBuild, data);

    }

  });

  jekyll.stderr.on('data', function (data) {
    dutil.logError(taskBuild, data);
  });

  jekyll.on('error', function (error) { done(error); });

  jekyll.on('close', function (code) { if (0 === code) { done(); } });

});

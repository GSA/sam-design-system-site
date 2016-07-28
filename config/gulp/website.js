var gulp = require('gulp');
var dutil = require('./doc-util');
var spawn = require('cross-spawn');
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var runSequence = require('run-sequence');
var del = require('del');
var clean = require('gulp-clean');

var task = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];
var taskBuild = task + ':build';
var taskServe = task + ':serve';

gulp.task('bundle-clean-build', function(done) {
  runSequence(
    'clean-assets',
    'bundle-gems',
    'build',
    done
  );
});

gulp.task('clean-assets', function(done) {
  runSequence(
    [
      'clean-assets-css',
      'clean-assets-js',
      'clean-assets-img',
      'clean-assets-fonts'
    ],
    done
  )
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
gulp.task(taskServe, [ 'bundle-clean-build' ], function (done) {

  gulp.watch([
    'assets/css/styleguide.scss',
    'src/stylesheets/components/**/*.scss',
    'src/stylesheets/elements/**/*.scss',
    'src/stylesheets/core/**/*.scss',
    'src/stylesheets/all.scss',
    '!src/stylesheets/lib/**/*',
    '_styleguide_assets/css/**/*'
  ], function (event) {
    runSequence(
      'clean-assets-css',
      'sass'
    );
  });

  gulp.watch([
    'assets/js/start.js',
    'src/js/**/*.js',
    '!src/js/vendor/**/*',
    '_styleguide_assets/js/**/*'
  ], function (event) {
    runSequence(
      'clean-assets-js',
      'javascript'
    );
  });

  gulp.watch([
    'src/img/**/*',
    '_styleguide_assets/img/**/*'
  ], function (event) {
    runSequence(
      'clean-assets-img',
      'images'
    );
  });

  gulp.watch('src/fonts/**/*', function (event) {
    runSequence(
      'clean-assets-fonts',
      'fonts'
    );
  });

  var jekyll = spawn('jekyll', [ 'serve', '-w' ]);

  jekyll.stdout.on('data', function (data) {

    if (/[\w\d]+/.test(data)) {

      data += '';
      data = data.replace(/[\s]+/g, ' ');

      if (/done|regen/i.test(data)) {

        dutil.logMessage(taskServe, data);

      } else {

        dutil.logData(taskServe, data);

      }

    }

  });

  jekyll.on('error', function (error) { done(error); });

  jekyll.on('close', function (code) { if (0 === code) { done(); } });


});

// Wrapper task for `jekyll build` which runs after `gulp bundle-gems` to make sure
// the gems are properly bundled.
//
gulp.task(taskBuild, [ 'bundle-gems' ], function (done) {

  var jekyll = spawn('jekyll', [ 'build' ]);

  jekyll.stdout.on('data', function (data) {

    if (/[\w\d]+/.test(data)) {

      data += '';
      data = data.replace(/[\s]+/g, ' ');
      dutil.logData(taskBuild, data);

    }

  });

  jekyll.on('error', function (error) { done(error); });

  jekyll.on('close', function (code) { if (0 === code) { done(); } });

});

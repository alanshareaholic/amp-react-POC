var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var stylish = require('jshint-stylish');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');


function compileStyles(){
  console.log('recompiling styles...');
  return gulp.src('./app/styles/*.styl')
    .pipe(stylus())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./app/build/'));
}

gulp.task('lint', function(){
  return gulp.src('./app/**/*.js')
    .pipe(jshint({linter: require('jshint-jsx').JSXHINT}))
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

gulp.task('serve', function(){
  connect.server({
    root: 'app',
    port: 3334
  });
});

gulp.task('browserify-dev', ['lint'], function() {
    var bundler = browserify({
        entries: ['./app/main-dev.js'],
        transform: [babelify.configure({compact: false, nonStandard: true})],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });
    var watcher = watchify(bundler);

    return watcher.on('update', function () {
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./app/build/'));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./app/build/'));
});

gulp.task('browserify-prod', ['lint'], function() {
    return browserify({
        entries: ['./app/main.js'],
        transform: [babelify.configure({compact: false, nonStandard: true})],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./app/build/'));
});

gulp.task('styles', compileStyles);

gulp.task('watch-assets', function () {
    gulp.watch('./app/styles/*.styl', compileStyles);
});

gulp.task('dev', ['browserify-dev', 'serve', 'watch-assets']);
gulp.task('build', ['browserify-prod', 'styles']);

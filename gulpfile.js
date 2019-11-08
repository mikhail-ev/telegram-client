var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var rollup = require('gulp-better-rollup');
var inject = require('gulp-inject');
var clean = require('gulp-clean');
var connect = require('gulp-connect');

gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('js-lib', function () {
    return gulp.src([
        'config.js',
        'lib/**/*.js',
        'mtproto/mtproto-utils/angular.js',
        'mtproto/mtproto-utils/timeout.js',
        'mtproto/mtproto-utils/crypto-worker.js',
        'mtproto/mtproto-utils/http.js',
        'mtproto/mtproto-utils/interval.js',
        'mtproto/mtproto-utils/q.js',
        'mtproto/mtproto-utils/root-scope.js',
        'mtproto/mtproto-utils/storage.js',
        'mtproto/mtproto-utils/utils.js',
        'mtproto/mtproto-utils/tl-utils.js',
        'mtproto/mtproto-core/mtp-dc-configurator.js',
        'mtproto/mtproto-core/mtp-rsa-keys-manager.js',
        'mtproto/mtproto-core/mtp-secure-random.js',
        'mtproto/mtproto-core/mtp-time-manager.js',
        'mtproto/mtproto-core/mtp-authorizer.js',
        'mtproto/mtproto-core/mtp-networker-factory.js',
        'mtproto/mtproto-core/mtp-api-manager.js'])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('js-src', function () {
    return gulp.src('src/index.js')
        .pipe(sourcemaps.init())
        .pipe(rollup({}, {file: 'app.js', format: 'iife', strict: false}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

// gulp.task('pack-css', function () {
//     return gulp.src(['assets/css/main.css', 'assets/css/custom.css'])
//         .pipe(concat('stylesheet.css'))
//         .pipe(gulp.dest('public/build/css'));
// });

gulp.task('index', function () {
    return gulp.src('src/index.html')
        .pipe(inject(gulp.src(['dist/**/*.js'], {read: false})))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*', gulp.series('js-src'));
});

gulp.task('serve', function () {
    connect.server({
        name: 'App',
        root: ['dist'],
        port: 4000,
        livereload: true
    });
});

gulp.task('default', gulp.series('clean', 'js-lib', 'js-src', 'index'));
gulp.task('default:serve', gulp.series('clean', 'js-lib', 'js-src', 'index', gulp.parallel('watch', 'serve')));

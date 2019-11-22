var gulp = require('gulp');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var rollup = require('rollup');
var config = require('./rollup.config');
var uglify = require('gulp-uglify-es').default;

gulp.task('clean', function () {
    return gulp.src('dist/', { read: false })
        .pipe(clean());
});

gulp.task('js-lib', function () {
    return gulp.src([
        'src/config.js',
        'src/lib/**/*.js',
        'src/mtproto/mtproto-utils/helpers.js',
        'src/mtproto/mtproto-utils/timeout.js',
        'src/mtproto/mtproto-utils/crypto-worker.js',
        'src/mtproto/mtproto-utils/http.js',
        'src/mtproto/mtproto-utils/interval.js',
        'src/mtproto/mtproto-utils/q.js',
        'src/mtproto/mtproto-utils/root-scope.js',
        'src/mtproto/mtproto-utils/storage.js',
        'src/mtproto/mtproto-utils/utils.js',
        'src/mtproto/mtproto-utils/tl-utils.js',
        'src/mtproto/mtproto-core/mtp-dc-configurator.js',
        'src/mtproto/mtproto-core/mtp-rsa-keys-manager.js',
        'src/mtproto/mtproto-core/mtp-secure-random.js',
        'src/mtproto/mtproto-core/mtp-time-manager.js',
        'src/mtproto/mtproto-core/mtp-authorizer.js',
        'src/mtproto/mtproto-core/mtp-networker-factory.js',
        'src/mtproto/mtproto-core/mtp-api-manager.js'])
		.pipe(uglify())
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('js-src', function (done) {
    return new Promise((resolve, reject) => {
        var watcher = rollup.watch(config);
        watcher.on('event', function (event) {
            if (event.code === 'END') {
                watcher.close();
                connect.reload();
                resolve();
            } else if(event.code === 'ERROR') {
                console.log('Rollup error: ', event);
                reject();
            }
        });
    });
});

gulp.task('css', function () {
    return gulp.src(['src/**/*.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('assets', function () {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('index', function () {
    return gulp.src('src/index.html')
        .pipe(inject(gulp.src(['dist/**/*.js'], { read: false })))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('watch:js', function () {
    return gulp.watch(['src/**/*.js', 'src/index.html'], gulp.series('js-src', 'index'));
});

gulp.task('watch:scss', function () {
    return gulp.watch('src/**/*.scss', gulp.series('css', 'index'));
});

gulp.task('serve', function () {
    return connect.server({
        root: 'dist',
        port: 4000,
        livereload: true
    });
});

gulp.task('default', gulp.series('clean', 'css', 'js-lib', 'js-src', 'assets', 'index'));
gulp.task('default:serve', gulp.series('default', gulp.parallel('watch:js', 'watch:scss', 'serve')));

// 定义工作流
var gulp = require('gulp');
//配合gulp 有一些任务插件
var browserSync = require('browser-sync').create();
var minifyCSS = require('gulp-minify-css');
// var uglify = require('gulp-uglify');
var reload = browserSync.reload;
var stylusPath = './src/stylus/*.styl';
var stylus = require('gulp-stylus');
// stylus 任务交给一个task
gulp.task('stylus', function() {
    return gulp.src(stylusPath)
        .pipe(stylus())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream())
})
var jsPath = 'src/js/*.js';
gulp.task('scripts', function() {
    return gulp.src(jsPath)
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream())
})
gulp.task('watch', function() {
    //启动browser-sync
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    var temlateFiles = [
        '*.html'
    ];
    gulp.watch(temlateFiles).on('change', reload);
    //监听目录，执行一系列任务
    gulp.watch(stylusPath, ['stylus']);
    gulp.watch(jsPath, ['scripts']);
})
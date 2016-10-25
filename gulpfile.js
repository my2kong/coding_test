var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('gulp-webpack');;
var webpackConfig = require('./webpack.config.js');
var browserSync = require('browser-sync').create();

gulp.task('webpack', function () {
    gulp.src(['./src/ts/*.ts'])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist'));
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.ts', ['webpack']);
    gulp.watch('./dist/*.js').on('change', browserSync.reload);

});

gulp.task('default', ['webpack','watch','server']);
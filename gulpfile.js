// 引入 gulp
var gulp = require('gulp');

// 引入组件
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');

// 编译Sass
gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(rename('wxm.css'))
        .pipe(gulp.dest('./css'))
        .pipe(minifycss())
        .pipe(rename('wxm.min.css'))
        .pipe(gulp.dest('./css'));
});

// 默认任务
gulp.task('default', function() {
    //运行
    gulp.run('sass');

});

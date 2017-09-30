"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
// var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

//compile sass files
gulp.task('styles', function(){
    gulp.src('client/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('server/public/assets/styles/'));
});

//copy files
gulp.task('copy', function(){
    gulp.src(['node_modules/animejs/anime.min.js'])
        .pipe(gulp.dest('server/public/vendors/'));
    gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery/dist/jquery.min.map'])
        .pipe(gulp.dest('server/public/vendors/'));
    gulp.src(['client/views/*'])
        .pipe(gulp.dest('server/public/assets/views/'));
});

//uglify and concat js
gulp.task('js', function(){
    //intro animation
    gulp.src('client/scripts/waves.js')
        // .pipe(uglify())
        .pipe(concat('waves.min.js'))
        .pipe(gulp.dest('server/public/assets/scripts/'));
});

//watch task
gulp.task('watch', function(){
    // gulp.watch('client/styles/**/*.scss', ['styles']);
    gulp.watch('client/scripts/*.js', ['js'])
    gulp.watch('client/views/*', ['copy'])
    gulp.watch('client/styles/*', ['styles'])
});

gulp.task('default', ['js', 'copy', 'styles']);
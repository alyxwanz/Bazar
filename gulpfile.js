'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const pug = require('gulp-pug');
const watch = require('gulp-watch');

sass.compiler = require('node-sass');

gulp.task('scss', () => {
	return gulp.src('./src/styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/styles'));
});

gulp.task('pug', function buildHTML() {
	return gulp.src('src/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('dist'))
});

gulp.task('watch:pug', () => {
	return watch('src/index.pug', { ignoreInitial: false })
		.pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
	return gulp.src('src/images/**/*.{svg,png,jpeg,jpg,webp}', { since: gulp.lastRun('images') })
		.pipe(gulp.dest('dist/images'));
});

gulp.task('build', gulp.series('scss', 'images', 'pug'));

gulp.task('watch',() => {
	gulp.watch(['./src/index.pug','./src/**/**/*.pug'],gulp.series('pug'));
	gulp.watch(['./src/**/**/*.scss', './src/styles/*.scss'],gulp.series('scss'));
	gulp.watch('src/images/**/*.{svg,png,jpeg,jpg,webp}',gulp.series('images'));
	});

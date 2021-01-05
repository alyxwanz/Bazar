'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const watchSass = require("gulp-watch-sass");
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');

sass.compiler = require('node-sass');

gulp.task('scss', () => {
	return gulp.src('./src/styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/styles'));
});

gulp.task('scss:watch', () => watchSass([
	'./src/styles/*.scss'
])
	.pipe(sass())
	.pipe(gulp.dest('./dist/styles')));

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


gulp.task('images', () => {
	return gulp.src('src/images/**/*.{svg,png,jpeg,jpg,webp}', { since: gulp.lastRun('images') })
		.pipe(gulp.dest('dist/images'));
});

gulp.task('build', gulp.series('scss', 'images', 'pug'));



// gulp.task('serve', () => {
//     browserSync.init({
//         server: "./src"
//     });
//     // gulp.watch('./src/styles/*.scss', ['scss'])
//     watchSass([
//         './src/styles/*.scss'
//       ])
//         .pipe(sass())
//         .pipe(gulp.dest('./dist/styles'));
//     gulp.watch("./src/*.scss").pipe(
//         ['']
//     );

//     gulp.watch("./src/*.html").on('change', browserSync.reload);
// });

// gulp.task('serve', () => {
//     gulp.series('html:watch', 'scss:watch');
// })
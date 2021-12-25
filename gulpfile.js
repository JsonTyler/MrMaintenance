const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
// const browswersync = require('browser-sync').create();

// Sass Task
function scssTask() {
    return src('./wwwroot/scss/app.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('./wwwroot/css/app.css', { sourcemaps: '.' }));
}

// Default Gulp task
exports.default = series(
    scssTask
);
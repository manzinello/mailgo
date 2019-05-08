const { src, dest, parallel } = require("gulp");

const uglify = require("gulp-uglify");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const csso = require("gulp-csso");

function js() {
  return src("src/*.js").pipe(dest("dist"));
}

function jsmin() {
  return src("src/*.js")
    .pipe(terser())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(dest("dist"));
}

function css() {
  return src("src/*.css").pipe(dest("dist"));
}

function cssmin() {
  return src("src/*.css")
    .pipe(csso())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(dest("dist"));
}

exports.js = js;
exports.jsmin = jsmin;
exports.css = css;
exports.cssmin = cssmin;

exports.default = parallel(js, jsmin, css, cssmin);

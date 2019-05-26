const { src, dest, parallel } = require("gulp");

const rename = require("gulp-rename");
const csso = require("gulp-csso");
const replace = require("gulp-replace");
const uglify = require("gulp-uglify");

const babel = require("gulp-babel");

let version = require("./package.json").version;

function js() {
  return src("src/*.js")
    .pipe(replace("MAILGO_VERSION", version))
    .pipe(babel())
    .pipe(dest("dist"));
}

function jsmin() {
  return src("src/*.js")
    .pipe(replace("MAILGO_VERSION", version))
    .pipe(babel())
    .pipe(uglify())
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

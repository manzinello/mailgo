const { src, dest, parallel } = require("gulp");

const uglify = require("gulp-uglify");
const terser = require("gulp-terser");
const rename = require("gulp-rename");

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

exports.js = js;
exports.jsmin = jsmin;

exports.default = parallel(js, jsmin);

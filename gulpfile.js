const { src, dest, parallel } = require("gulp");
const terser = require("gulp-terser");

function js() {
  return src("src/*.js", { sourcemaps: false }).pipe(
    dest("dist", { sourcemaps: false })
  );
}

function jsmin() {
  return src("src/*.js")
    .pipe(terser())
    .pipe(dest("dist"));
}

exports.js = js;
exports.jsmin = jsmin;
exports.default = parallel(js, jsmin);

const { src, dest, parallel } = require("gulp");
const terser = require("gulp-terser");

function js() {
  return src("src/*.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(dest("dist", { sourcemaps: true }));
}

exports.js = js;
exports.default = parallel(js);

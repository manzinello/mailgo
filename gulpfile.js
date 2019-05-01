const { src, dest, parallel } = require("gulp");
const terser = require("gulp-terser");

function js() {
  return src("src/*.js", { sourcemaps: false }).pipe(
    dest("dist", { sourcemaps: false })
  );
}

exports.js = js;
exports.default = parallel(js);

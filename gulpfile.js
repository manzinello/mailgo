const { src, dest, parallel } = require("gulp");

function js() {
  return src("src/*.js", { sourcemaps: true }).pipe(
    dest("dist/js", { sourcemaps: true })
  );
}

exports.js = js;
exports.default = parallel(js);

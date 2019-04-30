const { src, dest, parallel } = require("gulp");

function js() {
  return src("src/*.js", { sourcemaps: true }).pipe(
    dest("dist", { sourcemaps: true })
  );
}

exports.js = js;
exports.default = parallel(js);

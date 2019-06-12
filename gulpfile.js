const { src, dest, parallel, series } = require("gulp");

const rename = require("gulp-rename");
const csso = require("gulp-csso");
const replace = require("gulp-replace");
const uglify = require("gulp-uglify");

const fs = require("fs");

const babel = require("gulp-babel");

const sass = require("gulp-sass");
sass.compiler = require("node-sass");

let version = require("./package.json").version;

function style() {
  return src("src/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(csso())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(dest("dist"));
}

function js() {
  let cssMinContent = fs.readFileSync("dist/mailgo.min.css", "utf8");
  return src("src/*.js")
    .pipe(replace("MAILGO_VERSION", version))
    .pipe(replace("MAILGO_STYLE", cssMinContent))
    .pipe(babel())
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(dest("dist"));
}

exports.js = js;
exports.style = style;

exports.default = series(style, js);

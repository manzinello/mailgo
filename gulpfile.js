const { src, dest, series } = require("gulp");

const tsGulp = require("gulp-typescript");
const tsProject = tsGulp.createProject("tsconfig.json");

const rename = require("gulp-rename");

const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");

function style() {
  return src("src/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(dest("dist"));
}

function js() {
  return src("src/*.ts")
    .pipe(tsProject())
    .pipe(
      rename({
        suffix: ".m",
      })
    )
    .pipe(dest("src"));
}

exports.style = style;
exports.js = js;

exports.default = series(style, js);

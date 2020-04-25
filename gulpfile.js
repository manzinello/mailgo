const { src, dest, series } = require("gulp");

const tsGulp = require("gulp-typescript");
const tsProject = tsGulp.createProject("tsconfig.json");

const rename = require("gulp-rename");
const replace = require("gulp-replace");

const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");

const fs = require("fs");

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
  let cssMinContent = fs.readFileSync("dist/mailgo.min.css", "utf8");
  return src("src/*.ts")
    .pipe(replace("MAILGO_STYLE", cssMinContent))
    .pipe(tsProject())
    .pipe(dest("./"));
}

function ts() {
  let cssMinContent = fs.readFileSync("dist/mailgo.min.css", "utf8");
  return (
    src("src/*.ts")
      .pipe(replace("MAILGO_STYLE", cssMinContent))
      // .pipe(tsProject())
      .pipe(dest("./"))
  );
}

exports.js = js;
exports.ts = ts;
exports.style = style;

exports.default = series(style, ts, js);

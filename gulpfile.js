const { src, dest, series } = require("gulp");

const MAILGO_STYLE_TAG = "{{MAILGO_STYLE}}";

const tsGulp = require("gulp-typescript");
const tsProject = tsGulp.createProject("tsconfig.json");

const rename = require("gulp-rename");
const replace = require("gulp-replace");

const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");

// const uglify = require("gulp-uglify");
// const babel = require("gulp-babel");

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
  return (
    src("src/*.ts")
      .pipe(replace(MAILGO_STYLE_TAG, cssMinContent))
      .pipe(tsProject())
      // .pipe(babel())
      .pipe(
        rename({
          suffix: ".m",
        })
      )
      .pipe(dest("src"))
  );
}

exports.style = style;
exports.js = js;

exports.default = series(style, js);

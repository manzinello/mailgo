// gulp in mailgo is used to export in /dist/ also CSS (minified and not) from SCSS

const gulp = require("gulp");
const { series } = require("gulp");

const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");

const prettier = require("gulp-prettier");

const rename = require("gulp-rename");

sass.compiler = require("node-sass");

function css() {
  return gulp
    .src("./src/**/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(prettier({ singleQuote: true }))
    .pipe(gulp.dest("./dist"));
}

function cssMin() {
  return gulp
    .src("./src/**/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("./dist"));
}

exports.css = css;
exports.cssMin = cssMin;

exports.default = series(css, cssMin);

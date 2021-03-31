"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import pug from "gulp-pug";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";

global.envVariable = yargs.argv.envBase;

const argv = yargs.argv,
  production = !!argv.production;

gulp.task("views", () => {
  return gulp.src(paths.views.src)
    .pipe(pug({
      pretty: false
    }))
    .pipe(gulpif(production, replace(".css", ".min.css")))
    .pipe(gulpif(production, replace(".js", ".min.js")))
    .pipe(gulp.dest(paths.views.dist))
    .pipe(browsersync.stream());
});
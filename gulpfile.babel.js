"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
  paths = {
    views: {
      src: [
        /*"./src/views/index.pug",
        ./src/views/pages/*.pug",
        "./src/views/pages/article1.pug",
        "./src/views/pages/registratsiya_kompanii/fr_registratsiya_kompanii.pug",
        "./src/views/pages/expert_articles.pug",
        "./src/views/pages/contacts/contacts.pug",
        "./src/views/pages/search_results.pug",
        "./src/views/pages/thank_you.pug",
        "./src/views/pages/online_business.pug",
        "./src/views/pages/business_school.pug",
        "./src/views/pages/venture_capital_online.pug",
        */

        "./src/views/pages/business_mission.pug",
        "./src/views/pages/doing_in_israel.pug",
        "./src/views/pages/doing_in_dubai_offline.pug",
        "./src/views/pages/doing_in_dubai_online.pug",
        "./src/views/pages/doing_it.pug",

        /*"./src/views/pages/minilends/*.pug",*/
      ],
      dist: "./dist/",
      watch: [
        "./src/blocks/**/*.pug",
        "./src/views/**/*.pug"
      ]
    },
    styles: {
      src: [
        /*
        "./src/styles/*.styl",
        "./src/styles/pages/*.styl",
        "./src/styles/pages/article1.styl",
        "./src/styles/pages/search_results.styl",
        "./src/styles/pages/registratsiya_kompanii.styl",
        "./src/styles/pages/expert_articles.styl",
        "./src/styles/pages/contacts.styl",
        "./src/styles/pages/thank_you.styl",
        "./src/styles/pages/business_school.styl",
        "./src/styles/pages/venture_capital.styl",
        "./src/styles/pages/venture_capital_online.styl",
        */


        "./src/styles/pages/doing_it.styl",
        "./src/styles/pages/doing_in_israel.styl",
        "./src/styles/pages/business_mission.styl",
        "./src/styles/pages/doing_in_dubai_offline.styl",
        "./src/styles/pages/doing_in_dubai_online.styl",

        // minilends
        /*
        "./src/styles/pages/minilends/minilends.styl",
        "./src/styles/pages/minilends/menu_services.styl",
        */
      ],
      dist: [
        "./dist/styles/"
      ],
      watch: [
        "./src/blocks/**/*.styl",
        "./src/blocks/**/*/*.styl",
        "./src/styles/**/*.styl"
      ]
    },
    scripts: {
      src: [
        "./src/js/index.js",
        "./src/js/base/global.js",
        "./src/js/vendor/libs.js",
        "./src/js/vendor/import/*.js",
        "./src/js/vendor/import/animateSvg/*.js",
      ],
      dist: "./dist/js/",
      watch: [
        "./src/blocks/**/*.js",
        "./src/js/**/*.js"
      ]
    },
    images: {
      src: [
        "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
        "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
      ],
      dist: "./dist/img/",
      watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}"
    },
    webp: {
      src: [
        "./src/img/**/*.{jpg,jpeg,png,tiff}",
        "!./src/img/favicon/*.{jpg,jpeg,png,gif}"
      ],
      dist: "./dist/img/",
      watch: [
        "./src/img/**/*.{jpg,jpeg,png,tiff}",
        "!./src/img/favicon.{jpg,jpeg,png,gif}"
      ]
    },
    sprites: {
      src: "./src/img/svg/*.svg",
      dist: "./dist/img/sprites/",
      watch: "./src/img/svg/*.svg"
    },
    fonts: {
      src: "./src/fonts/**/*.{ttf,woff,woff2}",
      dist: "./dist/fonts/",
      watch: "./src/fonts/**/*.{ttf,woff,woff2}"
    },
    favicons: {
      src: "./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
      dist: "./dist/img/favicons/",
    },
    gzip: {
      src: "./src/.htaccess",
      dist: "./dist/"
    }
  };

requireDir("./gulp-tasks/");

export {paths};

export const development = gulp.series("clean",
  gulp.parallel(["views", "fonts", "styles", "scripts", "images"]),
  gulp.parallel("serve"));

export const prod = gulp.series("clean",
  gulp.series(["views", "styles", "scripts", "images", "webp", "favicons", "gzip"]));

export default development;
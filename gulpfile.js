let projectFolder = "dist";
let sourceFolder = "#src";

let path = {
  build: {
    html: projectFolder + "/",
    css: projectFolder + "/css/",
    js: projectFolder + "/js/",
    img: projectFolder + "/img/",
    fonts: projectFolder + "/fonts/",
  },

  src: {
    html: sourceFolder + "/",
    css: sourceFolder + "/scss/style.scss",
    js: sourceFolder + "/js/app.js",
    img: sourceFolder + "/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}",
    fonts: sourceFolder + "/fonts/*.ttf",
  },

  watch: {
    html: sourceFolder + "/**/*.html",
    css: sourceFolder + "/scss/**/*.scss",
    js: sourceFolder + "/js/**/*.js",
    img: sourceFolder + "/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}",
  },

  clean: "./" + projectFolder + "/",
};

let { src, dest } = require("gulp"),
  gulp = require("gulp")

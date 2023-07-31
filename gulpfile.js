const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
//utilidades css
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

const paths ={
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**.js'
}
function css(){
    return src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./build/css'))
}

/*function imagenes(){
    return src(paths.imagenes)
    .pipe(imagemin())
    .pipe( dest('./build/img'))
    .pipe(notify({message: 'Imagen Minificada'}));
}*/

function javascript(){
    return src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe( dest('./build/js'))
}

function watchArchivos(){
    watch('src/scss/**/*', css);
    watch('src/js/**/*', javascript);
}

exports.css = css;
exports.watchArchivos = watchArchivos;
exports.javascript = javascript;

//exports.default = series(imagenes,javascript,watchArchivos);
exports.default = series(javascript,watchArchivos);

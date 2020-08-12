const gulp = require('gulp')
const gulpPlumber = require('gulp-plumber')
const gulpUglify = require('gulp-uglify')
const gulpConcat = require('gulp-concat')
const gulpCleanCss = require('gulp-clean-css')

const jsSrc = './src/public/assets/js/*.js'
const jsDist = './src/public/dist/js'
const jsDistName = 'script.js'

gulp.task('scripts', () =>
    gulp.src(jsSrc)
        .pipe(gulpPlumber())
        .pipe(gulpUglify())
        .pipe(gulpConcat(jsDistName))
        .pipe(gulp.dest(jsDist))
)

const stylesSrc = './src/public/assets/css/*.css'
const stylesDist = './src/public/dist/css'
const stylesDistName = 'styles.css'

gulp.task('styles', () =>
    gulp.src(stylesSrc)
        .pipe(gulpPlumber())
        .pipe(gulpCleanCss())
        .pipe(gulpConcat(stylesDistName))
        .pipe(gulp.dest(stylesDist))
)
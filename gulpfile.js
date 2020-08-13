const gulp = require('gulp')
const gulpPlumber = require('gulp-plumber')
const gulpUglify = require('gulp-uglify')
const gulpConcat = require('gulp-concat')
const gulpCleanCss = require('gulp-clean-css')
const gulpImageMinify = require('gulp-imagemin')

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

const imgSrc = './src/public/assets/img/*'
const imgDistSrc = './src/public/dist/img'


gulp.task('images', () =>
    gulp.src(imgSrc)
        .pipe(gulpImageMinify(
            [gulpImageMinify.optipng({ optimizationLevel: 5 })]
        ))
        .pipe(gulp.dest(imgDistSrc))
)

exports.build = gulp.series(['scripts', 'styles', 'images'])



exports.default = function () {
    gulp.watch(jsSrc, gulp.series('scripts'))
    gulp.watch(stylesSrc, gulp.series('styles'))
    gulp.watch(imgSrc, gulp.series('images'))
} 
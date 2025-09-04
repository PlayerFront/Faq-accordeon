const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('styles', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({
            // sourceMap: true,
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('assets', () => {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/js/**/*.js', gulp.series('scripts'));
});
gulp.task('dev', () => {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});
gulp.task('build', gulp.parallel('styles', 'html', 'scripts', 'assets'));
gulp.task('default', gulp.series('build', 'watch'));
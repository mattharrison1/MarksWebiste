var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var uglify 		= require("gulp-uglify");


// watch custom js files
gulp.task('minify-js', function () {
	return gulp.src('src/customjs/*.js')
		.pipe(uglify())
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});


// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js','customjs/*.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

// Static Server + watching js/scss/html files
gulp.task('serve', ['sass', 'minify-js'], function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch(['src/customjs/*.js'],['minify-js']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
	gulp.watch("src/js/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);

var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 
cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');


function browsersyncReload(callback) {
	browserSync.reload();
	callback();
};

function watch() {
	// Below  are the files which will be watched and to skip watching files use '!' before the path.
	gulp.watch(['src/assets/scss/**/*.scss'], gulp.series('scss', browsersyncReload));
	gulp.watch(['src/assets/css/dark-style.scss'], gulp.series('dark', browsersyncReload));
	gulp.watch(['src/assets/css/transparent-style.scss'], gulp.series('transparent', browsersyncReload));
	gulp.watch(['src/assets/css/skin-modes.scss'], gulp.series('skins', browsersyncReload));
	gulp.watch(['./src/assets/colors/**/*.scss'], gulp.series('color', browsersyncReload));
};


//_______ task for scss folder to css main style 
gulp.task('scss', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('./src/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))  
		.pipe(beautify.css({ indent_size: 4 })) 
		.pipe(gulp.dest('./src/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______ task for style-dark
gulp.task('dark', function(){
   return gulp.src('./src/assets/css/dark-style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/assets/css/'));
		
});

//_______ task for style-transparent
gulp.task('transparent', function(){
	return gulp.src('./src/assets/css/transparent-style.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(beautify.css({ indent_size: 4 }))
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('./src/assets/css/'));
		 
 });

 
 //_______task for skin-modes
gulp.task('skins', function(){
	return gulp.src('./src/assets/css/skin-modes.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(beautify.css({ indent_size: 4 }))
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('./src/assets/css/'));
		 
 });
 
//_______task for Color
gulp.task('color', function(){
	return gulp.src('./src/assets/colors/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(beautify.css({ indent_size: 4 }))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./src/assets/colors'));
});

//______default task
gulp.task('default', gulp.series( 'scss', 'dark', 'transparent', 'color', 'skins', gulp.parallel(watch)));

// Export tasks
exports.browsersyncReload = browsersyncReload;
exports.watch = watch;

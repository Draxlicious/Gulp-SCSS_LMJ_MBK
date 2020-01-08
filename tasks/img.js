var gulp = require("gulp");
var imagemin = require("gulp-imagemin");



function imageTask(){
	gulp.src("src/img/*")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/img"))
};



module.exports = {
	imageTask
}
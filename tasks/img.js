var gulp = require("gulp");
var imagemin = require("gulp-imagemin");



function imageTask(){
	gulp.src("src/img/*")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/img"))
};


function watchImg(){
	return gulp.watch("src/img/*", {ignoreInitial:false}, imageTask);
}



module.exports = {
	imageTask,
	watchImg
}
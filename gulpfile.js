var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  // place code for your default task here
  return gulp.src('css/custom.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist'));
});
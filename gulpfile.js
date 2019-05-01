var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
  console.log("Bieeeeen - he creado una task de Gulp.");
});

gulp.task('html', function(){
  console.log("Imagina algo bueno para html");
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });
});

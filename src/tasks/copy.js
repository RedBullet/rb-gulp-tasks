import gulp from 'gulp';
import changed from 'gulp-changed';

export const copyTask = (config) => {
  gulp.task('copy', () => {
    return gulp.src(config.copy.src)
      .pipe(changed(config.copy.dest))
      .pipe(gulp.dest(config.copy.dest));
  });
}

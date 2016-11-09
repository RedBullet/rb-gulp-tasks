import gulp from 'gulp';
import phplint from 'gulp-phplint';

export const phplintTask = (config) => {
  gulp.task('phplint', () => {
    return gulp.src(config.phplint.src)
      .pipe(phplint('', config.phplint.options))
      .pipe(phplint.reporter('fail'));
  });
}

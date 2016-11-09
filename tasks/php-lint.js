import gulp from 'gulp';
import phplint from 'gulp-phplint';

export default (config) => {
  gulp.task('php-lint', () => {
    return gulp.src(config.phplint.src)
      .pipe(phplint('', config.phplint.options))
      .pipe(phplint.reporter('fail'));
  });
}

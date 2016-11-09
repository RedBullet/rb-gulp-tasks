import gulp from 'gulp';
import phpcs from 'gulp-phpcs';

export const phpcsTask = (config) => {
  gulp.task('phpcs', () => {
    return gulp.src(config.phpcs.src)
      .pipe(phpcs(config.phpcs.options))
      .pipe(phpcs.reporter('log'))
      .pipe(phpcs.reporter('fail'));
  });
}

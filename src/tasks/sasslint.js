import gulp from 'gulp';
import sasslint from 'gulp-sass-lint';

export const sasslintTask = (config) => {
  gulp.task('sasslint', () => {
    return gulp.src(config.sasslint.src)
      .pipe(sasslint(config.sasslint.options))
      .pipe(sasslint.failOnError());
  });
}

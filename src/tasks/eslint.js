import gulp from 'gulp';
import eslint from 'gulp-eslint';

export const eslintTask = (config) => {
  gulp.task('eslint', () => {
    return gulp.src(config.eslint.src)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  });
}

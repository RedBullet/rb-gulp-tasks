import gulp from 'gulp';

export const lintTask = (config) => {
  gulp.task('lint', ['eslint', 'sasslint', 'phplint', 'phpcs']);
}
import gulp from 'gulp';

export const defaultTask = (config) => {
  gulp.task('default', ['build:prod']);
}
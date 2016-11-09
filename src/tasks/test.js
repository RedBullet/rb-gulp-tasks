import gulp from 'gulp';

export const testTask = (config) => {
  gulp.task('test', ['vistest']);
}

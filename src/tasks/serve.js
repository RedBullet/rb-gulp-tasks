import gulp from 'gulp';

export const serveTask = (config) => {
  gulp.task('serve', ['browsersync']);
}
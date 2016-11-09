import gulp from 'gulp';
import runSequence from 'run-sequence';

export const buildTask = (config) => {
  gulp.task('build:dev', (callback) => {
    runSequence('clean', ['copy', 'scripts:dev', 'styles:dev', 'images'], callback);
  });

  gulp.task('build:prod', (callback) => {
    runSequence('clean', ['copy', 'scripts:prod', 'styles:prod', 'images'], 'rev', callback);
  });
}

import gulp from 'gulp';
import chug from 'gulp-chug';

function reference(config) {
  return gulp.src(config.visualRegression.backstopGulp)
    .pipe(chug({
      tasks: ['reference'],
    }));
}

function test(config) {
  return gulp.src(config.visualRegression.backstopGulp)
    .pipe(chug({
      tasks: ['test'],
    }));
}

export const visualRegressionTask = (config) => {
  gulp.task('visreference', reference.bind(null, config));
  gulp.task('vistest', test.bind(null, config));
}

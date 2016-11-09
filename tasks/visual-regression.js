import gulp from 'gulp';
import chug from 'gulp-chug';

function reference() {
  return gulp.src(config.visualRegression.backstopGulp)
    .pipe(chug({
      tasks: ['reference'],
    }));
}

function test() {
  return gulp.src(config.visualRegression.backstopGulp)
    .pipe(chug({
      tasks: ['test'],
    }));
}

export default (config) => {
  gulp.task('visreference', reference.bind(null));
  gulp.task('vistest', test.bind(null));
}

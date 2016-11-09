import gulp from 'gulp';
import scssLint from 'gulp-scss-lint';

export default (config) => {
  gulp.task('scss-lint', () => {
    return gulp.src(config.scssLint.src)
      .pipe(scssLint(config.scssLint.options))
      .pipe(scssLint.failReporter('E'));
  });
}

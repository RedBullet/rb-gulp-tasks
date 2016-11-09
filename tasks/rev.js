import gulp from 'gulp';
import RevAll from 'gulp-rev-all';
import vinylPaths from 'vinyl-paths';
import filter from 'gulp-filter';
import del from 'del';

export default (config) => {
  gulp.task('rev', () => {
    const revAll = new RevAll(config.rev.options);
    const preFiles = vinylPaths();
    const postFiles = vinylPaths();

    return gulp.src(config.rev.src, config.rev.srcOptions)
      .pipe(filter(file => { return !file.isDirectory(); }))
      .pipe(preFiles)
      .pipe(revAll.revision())
      .pipe(postFiles)
      .pipe(gulp.dest(config.rev.dest))
      .on('end', () => {
        const difference = preFiles.paths.filter(file => {
          return postFiles.paths.indexOf(file) === -1;
        });
        del(difference);
      });
  });
}

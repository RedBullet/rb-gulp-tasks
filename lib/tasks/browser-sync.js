'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browserSyncTask = undefined;

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

var _watchify = require('watchify');

var _watchify2 = _interopRequireDefault(_watchify);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { bundlers, scriptsStream, applyEnv } from './scripts';

var browserSyncTask = exports.browserSyncTask = function browserSyncTask(config) {
  _gulp2.default.task('browsersync', ['build:dev'], function () {
    (0, _browserSync2.default)({
      files: config.dest,
      notify: false,
      port: config.browserSync.port,
      proxy: config.browserSync.proxy,
      watchOptions: {
        debounceDelay: 1000
      }
    });

    _gulp2.default.watch(config.dest).on('change', _browserSync2.default.reload);
    _gulp2.default.watch(config.styles.watch, ['styles:dev']);
    _gulp2.default.watch(config.images.watch, ['images']);
    _gulp2.default.watch(config.copy.watch, ['copy']);

    // bundlers.forEach(bundler => {
    //   const watchifyBundle = watchify(applyEnv(bundler.bundle, true));
    //   watchifyBundle.on('log', gulpUtil.log);
    //   const bundlerArr = [{ bundle: watchifyBundle, script: bundler.script }];
    //   scriptsStream(bundlerArr, true);
    //   watchifyBundle.on('update', scriptsStream.bind(null, bundlerArr, true, false));
    // });
  });
};
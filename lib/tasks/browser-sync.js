'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

var _watchify = require('watchify');

var _watchify2 = _interopRequireDefault(_watchify);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _scripts = require('./scripts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
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

    _scripts.bundlers.forEach(function (bundler) {
      var watchifyBundle = (0, _watchify2.default)((0, _scripts.applyEnv)(bundler.bundle, true));
      watchifyBundle.on('log', _gulpUtil2.default.log);
      var bundlerArr = [{ bundle: watchifyBundle, script: bundler.script }];
      (0, _scripts.scriptsStream)(bundlerArr, true);
      watchifyBundle.on('update', _scripts.scriptsStream.bind(null, bundlerArr, true, false));
    });
  });
};
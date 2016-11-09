'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scriptsTask = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _browserify = require('browserify');

var _browserify2 = _interopRequireDefault(_browserify);

var _babelify = require('babelify');

var _babelify2 = _interopRequireDefault(_babelify);

var _gulpUglify = require('gulp-uglify');

var _gulpUglify2 = _interopRequireDefault(_gulpUglify);

var _vinylSourceStream = require('vinyl-source-stream');

var _vinylSourceStream2 = _interopRequireDefault(_vinylSourceStream);

var _vinylBuffer = require('vinyl-buffer');

var _vinylBuffer2 = _interopRequireDefault(_vinylBuffer);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

var _gulpSourcemaps = require('gulp-sourcemaps');

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _eventStream = require('event-stream');

var _eventStream2 = _interopRequireDefault(_eventStream);

var _custom = require('loose-envify/custom');

var _custom2 = _interopRequireDefault(_custom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function applyEnv(bundle) {
  var dev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return bundle.transform((0, _custom2.default)({ NODE_ENV: dev ? 'development' : 'production' }), { global: true });
}

function scriptsStream(config, bundlerArr) {
  var dev = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var shouldThrow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var tasks = bundlerArr.map(function (bundler) {
    return bundler.bundle.bundle().on('error', function (error) {
      _gulpUtil2.default.log('Browserify Error', error);
      if (shouldThrow) {
        throw error;
      }
    }).pipe((0, _vinylSourceStream2.default)(bundler.script)).pipe((0, _vinylBuffer2.default)()).pipe((0, _gulpIf2.default)(dev, _gulpSourcemaps2.default.init({ loadMaps: true }))).pipe((0, _gulpIf2.default)(!dev, (0, _gulpUglify2.default)())).pipe((0, _gulpIf2.default)(dev, _gulpSourcemaps2.default.write('.'))).pipe(_gulp2.default.dest(config.dest));
  });
  return _eventStream2.default.merge.apply(null, tasks);
}

function bundleScripts(config, bundlerArr) {
  var dev = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var shouldThrow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var updatedBundlerArr = bundlerArr.map(function (bundler) {
    return _extends({}, bundler, { bundle: applyEnv(bundler.bundle, dev) });
  });
  return scriptsStream(config, updatedBundlerArr, dev, shouldThrow);
}

var scriptsTask = exports.scriptsTask = function scriptsTask(config) {
  var scripts = config.scripts.paths;

  var bundlers = scripts.map(function (script) {
    return {
      bundle: (0, _browserify2.default)(_path2.default.join(config.src, script), { debug: true }).transform(_babelify2.default),
      script: script
    };
  });

  _gulp2.default.task('scripts:dev', bundleScripts.bind(null, config, bundlers, true));
  _gulp2.default.task('scripts:prod', bundleScripts.bind(null, config, bundlers, false));
};
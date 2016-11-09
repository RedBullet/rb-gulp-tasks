'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stylesTask = undefined;

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpPostcss = require('gulp-postcss');

var _gulpPostcss2 = _interopRequireDefault(_gulpPostcss);

var _gulpSourcemaps = require('gulp-sourcemaps');

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _postcssCssnext = require('postcss-cssnext');

var _postcssCssnext2 = _interopRequireDefault(_postcssCssnext);

var _cssnano = require('cssnano');

var _cssnano2 = _interopRequireDefault(_cssnano);

var _gulpSass = require('gulp-sass');

var _gulpSass2 = _interopRequireDefault(_gulpSass);

var _gulpSassGlob = require('gulp-sass-glob');

var _gulpSassGlob2 = _interopRequireDefault(_gulpSassGlob);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleError(err) {
  _gulpUtil2.default.log(err);
  this.emit('end');
}

function stylesheets(config, dev) {
  var processors = [(0, _postcssCssnext2.default)(config.styles.cssnext)];

  if (!dev) {
    processors.push((0, _cssnano2.default)());
  }

  return _gulp2.default.src(config.styles.src).pipe((0, _gulpSassGlob2.default)()).pipe((0, _gulpIf2.default)(dev, _gulpSourcemaps2.default.init())).pipe((0, _gulpSass2.default)(config.styles.sass)).on('error', handleError).pipe((0, _gulpPostcss2.default)(processors)).pipe((0, _gulpIf2.default)(dev, _gulpSourcemaps2.default.write('.'))).pipe(_gulp2.default.dest(config.styles.dest));
}

var stylesTask = exports.stylesTask = function stylesTask(config) {
  _gulp2.default.task('styles:dev', stylesheets.bind(null, config, true));
  _gulp2.default.task('styles:prod', stylesheets.bind(null, config, false));
};
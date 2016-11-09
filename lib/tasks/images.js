'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imagesTask = undefined;

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

var _gulpCache = require('gulp-cache');

var _gulpCache2 = _interopRequireDefault(_gulpCache);

var _gulpImagemin = require('gulp-imagemin');

var _gulpImagemin2 = _interopRequireDefault(_gulpImagemin);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imagesTask = exports.imagesTask = function imagesTask(config) {
  _gulp2.default.task('images', function () {
    return _gulp2.default.src(config.images.src).pipe((0, _gulpIf2.default)(_gulpIf2.default.isFile, (0, _gulpCache2.default)((0, _gulpImagemin2.default)(config.images.imagemin)).on('error', function (err) {
      _gulpUtil2.default.log(err);
      undefined.end();
    }))).pipe(_gulp2.default.dest(config.images.dest));
  });
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpChanged = require('gulp-changed');

var _gulpChanged2 = _interopRequireDefault(_gulpChanged);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  _gulp2.default.task('copy', function () {
    return _gulp2.default.src(config.copy.src).pipe((0, _gulpChanged2.default)(config.copy.dest)).pipe(_gulp2.default.dest(config.copy.dest));
  });
};
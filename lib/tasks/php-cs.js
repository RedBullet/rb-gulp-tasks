'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpPhpcs = require('gulp-phpcs');

var _gulpPhpcs2 = _interopRequireDefault(_gulpPhpcs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  _gulp2.default.task('php-cs', function () {
    return _gulp2.default.src(config.phpcs.src).pipe((0, _gulpPhpcs2.default)(config.phpcs.options)).pipe(_gulpPhpcs2.default.reporter('log')).pipe(_gulpPhpcs2.default.reporter('fail'));
  });
};
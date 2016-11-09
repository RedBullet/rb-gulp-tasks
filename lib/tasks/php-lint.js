'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpPhplint = require('gulp-phplint');

var _gulpPhplint2 = _interopRequireDefault(_gulpPhplint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  _gulp2.default.task('php-lint', function () {
    return _gulp2.default.src(config.phplint.src).pipe((0, _gulpPhplint2.default)('', config.phplint.options)).pipe(_gulpPhplint2.default.reporter('fail'));
  });
};
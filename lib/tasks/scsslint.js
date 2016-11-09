'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpScssLint = require('gulp-scss-lint');

var _gulpScssLint2 = _interopRequireDefault(_gulpScssLint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  _gulp2.default.task('scsslint', function () {
    return _gulp2.default.src(config.scssLint.src).pipe((0, _gulpScssLint2.default)(config.scssLint.options)).pipe(_gulpScssLint2.default.failReporter('E'));
  });
};
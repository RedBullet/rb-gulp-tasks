'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sasslintTask = undefined;

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpSassLint = require('gulp-sass-lint');

var _gulpSassLint2 = _interopRequireDefault(_gulpSassLint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sasslintTask = exports.sasslintTask = function sasslintTask(config) {
  _gulp2.default.task('sasslint', function () {
    return _gulp2.default.src(config.sasslint.src).pipe((0, _gulpSassLint2.default)(config.sasslint.options)).pipe(_gulpSassLint2.default.failOnError());
  });
};
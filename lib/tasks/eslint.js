'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eslintTask = undefined;

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpEslint = require('gulp-eslint');

var _gulpEslint2 = _interopRequireDefault(_gulpEslint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eslintTask = exports.eslintTask = function eslintTask(config) {
  _gulp2.default.task('eslint', function () {
    return _gulp2.default.src(config.eslint.src).pipe((0, _gulpEslint2.default)()).pipe(_gulpEslint2.default.format()).pipe(_gulpEslint2.default.failAfterError());
  });
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _runSequence = require('run-sequence');

var _runSequence2 = _interopRequireDefault(_runSequence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  _gulp2.default.task('build:dev', function (callback) {
    (0, _runSequence2.default)('clean', ['copy', 'scripts:dev', 'styles:dev', 'images'], callback);
  });

  _gulp2.default.task('build:prod', function (callback) {
    (0, _runSequence2.default)('clean', ['copy', 'scripts:prod', 'styles:prod', 'images'], 'rev', callback);
  });
};
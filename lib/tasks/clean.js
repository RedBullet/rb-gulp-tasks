'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  _gulp2.default.task('clean', _del2.default.bind(null, config.dest));
};
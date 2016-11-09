'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.revTask = undefined;

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpRevAll = require('gulp-rev-all');

var _gulpRevAll2 = _interopRequireDefault(_gulpRevAll);

var _vinylPaths = require('vinyl-paths');

var _vinylPaths2 = _interopRequireDefault(_vinylPaths);

var _gulpFilter = require('gulp-filter');

var _gulpFilter2 = _interopRequireDefault(_gulpFilter);

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var revTask = exports.revTask = function revTask(config) {
  _gulp2.default.task('rev', function () {
    var revAll = new _gulpRevAll2.default(config.rev.options);
    var preFiles = (0, _vinylPaths2.default)();
    var postFiles = (0, _vinylPaths2.default)();

    return _gulp2.default.src(config.rev.src, config.rev.srcOptions).pipe((0, _gulpFilter2.default)(function (file) {
      return !file.isDirectory();
    })).pipe(preFiles).pipe(revAll.revision()).pipe(postFiles).pipe(_gulp2.default.dest(config.rev.dest)).on('end', function () {
      var difference = preFiles.paths.filter(function (file) {
        return postFiles.paths.indexOf(file) === -1;
      });
      (0, _del2.default)(difference);
    });
  });
};
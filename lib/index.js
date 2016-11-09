'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _build = require('./tasks/build');

Object.defineProperty(exports, 'build', {
  enumerable: true,
  get: function get() {
    return _build.buildTask;
  }
});

var _clean = require('./tasks/clean');

Object.defineProperty(exports, 'clean', {
  enumerable: true,
  get: function get() {
    return _clean.cleanTask;
  }
});

var _copy = require('./tasks/copy');

Object.defineProperty(exports, 'copy', {
  enumerable: true,
  get: function get() {
    return _copy.copyTask;
  }
});

var _scripts = require('./tasks/scripts');

Object.defineProperty(exports, 'scripts', {
  enumerable: true,
  get: function get() {
    return _scripts.scriptsTask;
  }
});

var _styles = require('./tasks/styles');

Object.defineProperty(exports, 'styles', {
  enumerable: true,
  get: function get() {
    return _styles.stylesTask;
  }
});

var _images = require('./tasks/images');

Object.defineProperty(exports, 'images', {
  enumerable: true,
  get: function get() {
    return _images.imagesTask;
  }
});

var _browserSync = require('./tasks/browser-sync');

Object.defineProperty(exports, 'browserSync', {
  enumerable: true,
  get: function get() {
    return _browserSync.browserSyncTask;
  }
});

var _sasslint = require('./tasks/sasslint');

Object.defineProperty(exports, 'sasslint', {
  enumerable: true,
  get: function get() {
    return _sasslint.sasslintTask;
  }
});

var _phplint = require('./tasks/phplint');

Object.defineProperty(exports, 'phplint', {
  enumerable: true,
  get: function get() {
    return _phplint.phplintTask;
  }
});

var _phpcs = require('./tasks/phpcs');

Object.defineProperty(exports, 'phpcs', {
  enumerable: true,
  get: function get() {
    return _phpcs.phpcsTask;
  }
});

var _eslint = require('./tasks/eslint');

Object.defineProperty(exports, 'eslint', {
  enumerable: true,
  get: function get() {
    return _eslint.eslintTask;
  }
});

var _rev = require('./tasks/rev');

Object.defineProperty(exports, 'rev', {
  enumerable: true,
  get: function get() {
    return _rev.revTask;
  }
});
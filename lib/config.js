'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var src = 'src';
var dest = 'dist';

var config = { src: src, dest: dest };

config.styles = {
  src: [src + '/styles/main.scss'],
  watch: [src + '/styles/**/*.scss'],
  dest: dest + '/styles',
  cssnext: {
    features: { colorRgba: false },
    browsers: '> 1%',
    warnForDuplicates: false
  },
  sass: {
    includePaths: 'node_modules'
  }
};

config.scripts = {
  paths: ['scripts/main.js']
};

config.images = {
  src: src + '/images/**/*',
  watch: [src + '/images/**/*'],
  dest: dest + '/images',
  imagemin: {
    progressive: true,
    interlaced: true,
    svgoPlugins: [{ cleanupIDs: false }]
  }
};

var copySrc = [src + '/**/*', '!' + src + '/styles{,/**}', '!' + src + '/scripts{,/**}', '!' + src + '/images{,/**}'];

config.copy = {
  src: copySrc,
  watch: copySrc,
  dest: dest
};

config.browserSync = {
  port: 9000,
  proxy: 'wp-boilerplate.lvh.me'
};

config.sasslint = {
  src: [src + '/styles/**/*.scss'],
  options: {
    config: _path2.default.join(__dirname, '../.sass-lint.yml')
  }
};

config.eslint = {
  src: [src + '/scripts/**/*.js']
};

config.phplint = {
  src: [src + '/**/*.php'],
  options: {
    skipPassedFiles: true
  }
};

config.phpcs = {
  src: [src + '/**/*.php'],
  options: {
    bin: './web/vendor/bin/phpcs',
    standard: 'PSR2',
    warningSeverity: 0
  }
};

var revSkip = ['.php', '.twig'];

config.rev = {
  src: [dest + '/**/*'],
  srcOptions: {
    base: dest
  },
  dest: dest,
  options: {
    dontRenameFile: revSkip,
    dontUpdateReference: revSkip
  }
};

exports.default = config;
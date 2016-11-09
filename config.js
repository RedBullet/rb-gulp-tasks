import path from 'path';

const src = 'src';
const dest = 'dist';

const config = { src, dest };

config.styles = {
  src: [`${src}/styles/main.scss`],
  watch: [
    `${src}/styles/**/*.scss`,
  ],
  dest: `${dest}/styles`,
  cssnext: {
    features: { colorRgba: false },
    browsers: '> 1%',
    warnForDuplicates: false,
  },
  sass: {
    includePaths: 'node_modules',
  },
};

config.scripts = {
  paths: ['scripts/main.js'],
};

config.images = {
  src: `${src}/images/**/*`,
  watch: [`${src}/images/**/*`],
  dest: `${dest}/images`,
  imagemin: {
    progressive: true,
    interlaced: true,
    svgoPlugins: [{ cleanupIDs: false }],
  },
};

const copySrc = [
  `${src}/**/*`,
  `!${src}/styles{,/**}`,
  `!${src}/scripts{,/**}`,
  `!${src}/images{,/**}`,
];

config.copy = {
  src: copySrc,
  watch: copySrc,
  dest,
};

config.browserSync = {
  port: 9000,
  proxy: 'wp-boilerplate.lvh.me',
};

config.sasslint = {
  src: [
    `${src}/styles/**/*.scss`,
  ],
  options: {
    config: path.join(__dirname, '../.sass-lint.yml'),
  },
};

config.eslint = {
  src: [`${src}/scripts/**/*.js`],
};

config.phplint = {
  src: [`${src}/**/*.php`],
  options: {
    skipPassedFiles: true,
  },
};

config.phpcs = {
  src: [`${src}/**/*.php`],
  options: {
    bin: './web/vendor/bin/phpcs',
    standard: 'PSR2',
    warningSeverity: 0,
  },
};

const revSkip = [
  '.php',
  '.twig',
];

config.rev = {
  src: [
    `${dest}/**/*`,
  ],
  srcOptions: {
    base: dest,
  },
  dest: dest,
  options: {
    dontRenameFile: revSkip,
    dontUpdateReference: revSkip,
  },
};

export default config;

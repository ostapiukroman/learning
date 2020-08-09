// Modules
const {parallel, src} = require('gulp');
const connect = require('gulp-connect');
const open = require('gulp-open');

const config = require('./config.json');

const startServer = function() {
  connect.server({
    root: 'src',
    livereload: false,
    port: config.port,
    host: config.host,
  })
}

const openBrowser = function(cb) {
  if (!config.open) {
    cb();
  } else {
    return src('.')
    .pipe(open({uri: `http://${config.host}:${config.port}`}))
  }
}

exports.default = parallel(
  startServer,
  openBrowser
);

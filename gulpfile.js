var gulp = require('gulp')
var shell = require('gulp-shell')

gulp.task('default', [
  'webpack',
])

gulp.task('webpack', shell.task([
  './node_modules/webpack/bin/webpack.js --watch --progress --colors'
]))

process.env.NODE_ENV = 'test';

var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./webpack.config');
var packageConfig = require('./package.json');

module.exports = function(wallaby) {

  var specFilePattern = 'src/shared/**/*.spec.js';
  var srcFilePattern = 'src/shared/**/*.js*';

  var babelProcessor = wallaby.compilers.babel(packageConfig['babel']);

  var webpackPostProcessor = wallabyWebpack(webpackConfig);



  return {
    testFramework: 'mocha',
    debug: true,
    files: [
      { pattern: srcFilePattern, load: false },
      { pattern: specFilePattern, ignore: true }
    ],
    tests: [
      { pattern: specFilePattern, load: false }
    ],
    compilers: {
      '**/*.js*': babelProcessor
    },
    postprocessor: webpackPostProcessor,
    bootstrap: function(){
      window.__moduleBundler.loadTests();
    }
  };
};
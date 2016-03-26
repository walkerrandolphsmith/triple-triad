process.env.NODE_ENV = 'test';

module.exports = function(wallaby) {
    var wallabyWebpack;
    var packageConfig;
    var specFilePattern;
    var srcFilePattern;
    var babelProcessor;
    var webpackPostProcessor;

    wallabyWebpack = require('wallaby-webpack');
    packageConfig = require('./package.json');

    specFilePattern = 'src/shared/**/*.spec.js';
    srcFilePattern = 'src/shared/**/*.js*';

    babelProcessor = wallaby.compilers.babel(packageConfig.babel);

    webpackPostProcessor = wallabyWebpack({
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        module: {
            loaders: [
                { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192' },
                { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader'] },
                { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
                { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff2' },
                { test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }
            ]
        }
    });

    return {
        testFramework: 'mocha',
        debug: true,
        workers: {
            initial: 12,
            regular: 2
        },
        files: [
            { pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false },
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
        bootstrap: function() {
            window.__moduleBundler.loadTests();
        }
    };
};
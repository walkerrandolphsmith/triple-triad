var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3001/',
        'webpack/hot/only-dev-server',
        './src/client'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx', '.css', '.less']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.PORT': JSON.stringify('3000'),
            'process.env.DEV_PORT': JSON.stringify('3001')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('styles.css')
    ],
    eslint: {
        configFile: '.eslintrc'
    },
    module: {
        preLoaders: [
            { test: /\.jsx?$/, loaders: ['eslint-loader'], exclude: /node_modules/ }
        ],
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot-loader', 'babel-loader', 'eslint-loader'], exclude: /node_modules/ },
            { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff2' },
            { test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }
        ]
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        proxy: {
            '*': 'http://localhost:3000'
        }
    }
};

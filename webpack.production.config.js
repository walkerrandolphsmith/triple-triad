var path    = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry:  [
    './src/client'
  ],
  output: {
    path:     path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions:         ['', '.js', '.jsx', '.css', '.less']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.PORT': JSON.stringify('3000')
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css'),
    new TransferWebpackPlugin([
      {from: 'src/assets/images', to:'assets/images'}
    ])
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ["babel-loader"], exclude: /node_modules/ },
      { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff2' },
      { test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }
    ]
  }
};

var path    = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry:  [
    'webpack-dev-server/client?http://localhost:3001/',
    'webpack/hot/only-dev-server',
    './src/client'
  ],
  output: {
    path:     path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions:         ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot-loader', "babel-loader"], exclude: /node_modules/ },
      { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.less$/, loader: 'style!css!less' },
    ]
  }
};

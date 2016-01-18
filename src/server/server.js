import path from 'path';
import express from 'express';
import game from './game';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
var config = require('./../../webpack.config');

let app = express();
const port = process.env.PORT || 3000;

if(process.env.NODE_ENV !== 'production'){
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));

  new WebpackDevServer(webpack(config), config.devServer).listen(3001, 'localhost', (err, result) => {
    if (err) console.log(err);
    console.log('Listening at localhost:3001');
  });
  app.use(express.static(path.join(__dirname, './../../src')));
}else{
  app.use(express.static(path.join(__dirname, './../../../dist')));
}

app.use((request, response) => {
  game(request, response);
});

app.listen(port, (error) => {
  if (error) console.error(error);
  else console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});

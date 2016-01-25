import path from 'path';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import configurePassport from './passport-strategies/configurePassport';
import loadUserRoutes from './routes/user-routes';
import game from './game';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
var config = require('./../../webpack.config');

const port = process.env.PORT || 3000;
//const mongoUri = `mongodb://db`; When I get docker working
const mongoUri = process.env.MONGOLAB_URI || `mongodb://localhost/${port}/test`;

configurePassport(passport);

let app = express();

mongoose.connect(mongoUri);

app.use(cors());
app.use(passport.initialize());

const userRouter = express.Router();
loadUserRoutes(userRouter, passport);
app.use('/api', userRouter);


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

app.get('/*', (request, response) => {
  game(request, response);
});

app.listen(port, (error) => {
  if (error) console.error(error);
  else console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});

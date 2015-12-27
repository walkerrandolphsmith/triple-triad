import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
var config = require('./webpack.config');

import React from 'react';
import ReactDom from 'react-dom/server';

import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from './src/shared/routes';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './src/shared/reducers/index'

let app = express();
const port = process.env.PORT || 3000;

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

//app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src')));

app.use((request, response) => {
  const location = createLocation(request.url);

  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  const store = createStoreWithMiddleware(reducers);
  //const store = createStore(reducers);

  match({routes, location}, (err, redirectLocation, renderProps) => {
    if(err) return response.status(500).end('Internal server error.');
    if(!renderProps) return response.status(404).end('Not found.');
    const InitialComponent = (
      <Provider store={store}>
        <RoutingContext {...renderProps} />
      </Provider>
    );
    const componentHTML = ReactDom.renderToString(InitialComponent);
    const initialState = store.getState();

    const markup = `
      <!doctype html>
        <html>
          <head>
            <title>Triple Triad</title>
            <meta name="description" content="Final Fantasy 8 Card Game Triple Triad." />
            <meta name="author" content="Walker Randolph Smith" />
            <link rel="icon" type="image/png" href="profile.png" />
            <link rel="apple-touch-icon" sizes="57x57" href="apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="apple-icon-144x144.png" />
            <link rel="stylesheet" type="text/css" href="assets/stylesheets/navigation.css">
          </head>
          <body>
            <div id="app">${componentHTML}</div>
            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="/bundle.js"></script>
          </body>
        </html>
    `;

    response.end(markup);
  })
});

app.listen(port, (error) => {
  if (error) console.error(error);
  else console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
})

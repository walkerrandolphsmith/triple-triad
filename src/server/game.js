import React from 'react';
import ReactDom from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import {Provider} from 'react-redux';
import createLocation from 'history/lib/createLocation';

import routes from './../shared/routes';
import configureStore from './../shared/store/store';

export default function game(request, response) {
    const location = createLocation(request.url);

    const store = configureStore();

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
    });
}
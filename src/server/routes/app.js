import React from 'react';
import ReactDom from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';
import createLocation from 'history/lib/createLocation';
import routes from './../../shared/routes';
import configureStore from './../../shared/store/store';
import { getGame } from './../../shared/ducks/game';
import { setRef } from './../../shared/ducks/firebase/index';
import firebase from 'firebase';

export function app(request, response) {
    const location = createLocation(request.url);

    const store = configureStore({
        initialState: undefined,
        history: undefined
    });

    var ref = firebase.database().ref();
    store.dispatch(setRef(ref));

    if(request.url.startsWith('/game/-')) {
        const gameId = request.url.split('/')[2];
        store.dispatch(getGame(gameId));
    }
    //Overwrite firebase ref or JSON.stringify wiill throw
    //TYPE ERROR circular dependency error
    store.dispatch(setRef(''));


    match({ routes, location }, (err, redirectLocation, renderProps) => {
        if(err) {
            return response.status(500).end('Internal server error.');
        }
        if(!renderProps) {
            return response.status(404).end('Not found.');
        }

        const InitialComponent = (
            <Provider store={store}>
                <RouterContext {...renderProps} />
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
                <link rel="stylesheet" type="text/css" href="styles.css" />
              </head>
              <body>
                <div id="app"><div>${componentHTML}</div></div>
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
import React from 'react';
import ReactDom from 'react-dom/server';
import { RouterContext } from 'react-router';
import { Provider } from 'react-redux';

export const generateHTMLString = (componentHTML, initialState) => `
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

export const getComponentHtml = (renderProps, store) => {
    const InitialComponent = (
        <Provider store={store}>
            <RouterContext {...renderProps} />
        </Provider>
    );
    return ReactDom.renderToString(InitialComponent);
};

export const getView = (renderProps, store) => {
    const componentHTML = getComponentHtml(renderProps, store);
    const initialState = store.getState();
    return generateHTMLString(componentHTML, initialState)
};
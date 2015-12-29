import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './../shared/routes';
import configureStore from './../shared/store/store';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

const history = createBrowserHistory();
const store = configureStore(window.__INITIAL_STATE__);

const mountNode = document.getElementById('app');
ReactDom.render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  mountNode
);

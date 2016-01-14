import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { syncReduxAndRouter } from 'redux-simple-router'
import Routes from './../shared/routes';
import configureStore from './../shared/store/store';

let initialState = window.__INITIAL_STATE__;
Object.keys(initialState).forEach(key => { initialState[key] = fromJS(initialState[key]);  });

const store = configureStore(initialState);
const history = createHistory();

syncReduxAndRouter(history, store);

const mountNode = document.getElementById('app');
ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      {Routes}
    </Router>
  </Provider>,
  mountNode
);

if (process.env.NODE_ENV !== 'production') {
  const showDevTools = require('./../dev-tools/showDevTools').default;
  showDevTools(store);
}
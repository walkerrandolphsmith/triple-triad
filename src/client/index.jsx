import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './../shared/routes';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './../shared/reducers/index';
import { fromJS } from 'immutable';

const history = createBrowserHistory();

let initialState = window.__INITIAL_STATE__;

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, initialState);

const mountNode = document.getElementById('app');
ReactDom.render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  mountNode
);

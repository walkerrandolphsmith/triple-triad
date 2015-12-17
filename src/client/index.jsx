import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './../shared/routes';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './../shared/reducers';
import { fromJS } from 'immutable';

const history = createBrowserHistory();

let initialState = window.__INITIAL_STATE__;
/*Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
  });
*/
const reducer = combineReducers(reducers);
const store = createStore(reducer, initialState);

const mountNode = document.getElementById('app');
ReactDom.render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  mountNode
);

import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import routes from './../shared/routes';
import configureStore from './../shared/store/store';


const history = createBrowserHistory();

let initialState = window.__INITIAL_STATE__;
Object.keys(initialState).forEach(key => { if(key === "step") initialState[key] = fromJS(initialState[key]);  });

const store = configureStore(initialState);

const mountNode = document.getElementById('app');
ReactDom.render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  mountNode
);

if (process.env.NODE_ENV !== 'production') {
  const showDevTools = require('./../dev-tools/showDevTools').default;
  showDevTools(store);
}
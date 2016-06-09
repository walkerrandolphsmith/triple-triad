const injectTouchTapEvent = require('react-tap-event-plugin');
import React from 'react';
import ReactDom from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import firebase from 'firebase';
import Routes from './../shared/routes';
import configureStore from './../shared/store/store';
import { setRef, listenToAuth } from './../shared/ducks/firebase';
import { observeStore, onChange, select } from './gameObserver';
import env from './../shared/config/environment';
import './../assets/stylesheets/index.less';

const browserHistory = useRouterHistory(createBrowserHistory)({
    basename: '/'
});

let initialState = window.__INITIAL_STATE__;
Object.keys(initialState).forEach(key => {
    initialState[key] = fromJS(initialState[key]);
});

const store = configureStore({
    initialState: initialState,
    history: browserHistory
});

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.routing
});

injectTouchTapEvent();
const mountNode = document.getElementById('app');
ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      {Routes}
    </Router>
  </Provider>,
  mountNode
);

firebase.initializeApp({
    apiKey: env.keys.firebase.apiKey,
    authDomain: env.firebase.authDomain,
    databaseURL: env.firebase.databaseURL,
    storageBucket: env.firebase.dataStorage
});

var ref = firebase.database().ref();

store.dispatch(setRef(ref));
store.dispatch(listenToAuth());

observeStore(store, select, onChange);

if (env.nodeEnv !== 'production') {
  const showDevTools = require('./../dev-tools/showDevTools').default;
  showDevTools(store);
}
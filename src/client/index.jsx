import React from 'react';
import ReactDom from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import Routes from './../shared/routes';
import configureStore from './../shared/store/store';
import Firebase from 'firebase';
import { FIREBASE } from './../shared/constants/firebase';
import { setRef, listenToGames, listenToAuth } from './../shared/ducks/firebase';
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

const mountNode = document.getElementById('app');
ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      {Routes}
    </Router>
  </Provider>,
  mountNode
);

const ref = new Firebase(FIREBASE);
store.dispatch(setRef(ref));
store.dispatch(listenToAuth());
store.dispatch(listenToGames());

observeStore(store, select, onChange);

if (env.nodeEnv !== 'production') {
  const showDevTools = require('./../dev-tools/showDevTools').default;
  showDevTools(store);
}
import React from 'react';
import ReactDom from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import { userProfile } from './../shared/ducks/user';
import { getGame, getGames } from './../shared/ducks/game';
import Routes from './../shared/routes';
import configureStore from './../shared/store/store';
import { syncFirebase } from 'refire';
import { FIREBASE } from './../shared/constants/firebase';
import { fireBaseBindings } from './../shared/ducks/firebase';
import env from './../shared/config/environment';
import './../assets/stylesheets/index.less';

const browserHistory = useRouterHistory(createBrowserHistory)({
    basename: '/'
});

let initialState = window.__INITIAL_STATE__;
Object.keys(initialState).forEach(key => {
    if(key !== 'firebase') {
        initialState[key] = fromJS(initialState[key]);
    }
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

browserHistory.listen(location => {
    if(location.pathname === 'games') {
        store.dispatch(getGames());
    }
    else if(location.pathname.startsWith('game/')) {
        const id = location.pathname.split('game/')[1];
        store.dispatch(getGame(id));
    }else if(location.pathname === 'user') {
        let userId = store.getState().auth.get('user').get('id');
        store.dispatch(userProfile(userId));
    }
});

const { unsubscribe } = syncFirebase({
    store: store,
    url: FIREBASE,
    bindings: fireBaseBindings,
    onAuth: (authData) => {

    },
    onCancel: (error) => {

    }
});

if (env.nodeEnv !== 'production') {
  const showDevTools = require('./../dev-tools/showDevTools').default;
  showDevTools(store);
}
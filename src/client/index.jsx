import React from 'react';
import ReactDom from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import io from 'socket.io-client';

import * as Actions from './../shared/actions';
import { userProfile } from './../shared/reducers/user/user';
import Routes from './../shared/routes';
import configureStore from './../shared/store/store';
import env from './../shared/config/environment';
import './../assets/stylesheets/index.less';

const browserHistory = useRouterHistory(createBrowserHistory)({
    basename: '/'
});

let initialState = window.__INITIAL_STATE__;
Object.keys(initialState).forEach(key => { initialState[key] = fromJS(initialState[key]);  });

const socket = io(`http://${env.host}:${env.port}`);

const store = configureStore({
    initialState: initialState,
    history: browserHistory,
    socket: socket
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
        store.dispatch(Actions.getGames());
    }
    else if(location.pathname.startsWith('game/')) {
        const id = location.pathname.split('game/')[1];
        store.dispatch(Actions.getGame(id));
    }else if(location.pathname === 'user') {
        let userId = store.getState().auth.get('user').get('id');
        store.dispatch(userProfile(userId));
    }
});

if (env.nodeEnv !== 'production') {
  const showDevTools = require('./../dev-tools/showDevTools').default;
  showDevTools(store);
}
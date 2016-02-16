import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router';
import { createHistory } from 'history';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import io from 'socket.io-client';
import { syncReduxAndRouter } from 'redux-simple-router'
import Routes from './../shared/routes';
import configureStore from './../shared/store/store';
import env from './../shared/config/environment';
import './../assets/stylesheets/index.less';

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

const socket = io.connect('http://localhost:3001');
socket.on('serverEvent', data => {
  console.log(data);
  socket.emit('clientEvent', { my: 'data' });
});

if (env.nodeEnv !== 'production') {
  const showDevTools = require('./../dev-tools/showDevTools').default;
  showDevTools(store);
}
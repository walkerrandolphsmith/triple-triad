import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { syncReduxAndRouter } from 'redux-simple-router'
import routes from './../shared/routes';
import configureStore from './../shared/store/store';

import Game from './../shared/containers/game';
import SettingsSelection from './../shared/containers/settingsSelection';
import CardSelection from './../shared/containers/cardSelection';
import Round from './../shared/containers/round';

let initialState = window.__INITIAL_STATE__;
Object.keys(initialState).forEach(key => { initialState[key] = fromJS(initialState[key]);  });

const store = configureStore(initialState);
const history = createHistory();

syncReduxAndRouter(history, store);

const mountNode = document.getElementById('app');
ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Game}>
        <IndexRoute component={SettingsSelection}/>
        <Route path="card-selection" component={CardSelection}/>
        <Route path="round" component={Round}/>
      </Route>
    </Router>
  </Provider>,
  mountNode
);

if (process.env.NODE_ENV !== 'production') {
  const showDevTools = require('./../dev-tools/showDevTools').default;
  showDevTools(store);
}
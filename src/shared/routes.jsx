import React from 'react';
import {Route} from 'react-router';

import App from './components/app';
import Game from './components/game';
import Deck from './components/deck';

export default (
  <Route name="app" component={App} path="/">
    <Route component={Game} path="game"></Route>
    <Route component={Deck} path="deck"></Route>
  </Route>
)

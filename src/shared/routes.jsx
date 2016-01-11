import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Game from './../shared/containers/game';
import SettingsSelection from './../shared/containers/settingsSelection';
import CardSelection from './../shared/containers/cardSelection';
import Round from './../shared/containers/round';
import GameOverBanner from './../shared/containers/gameOverBanner';

export default (
    <Route path="/" component={Game}>
      <IndexRoute component={SettingsSelection}/>
      <Route path="card-selection" component={CardSelection}/>
      <Route path="round" component={Round}/>
      <Route path="game-over" component={GameOverBanner}/>
    </Route>
)

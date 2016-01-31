import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Game from './../shared/containers/game';
import SignIn from './../shared/containers/signin';
import SignUp from './../shared/containers/signup';
import SettingsSelection from './../shared/containers/settingsSelection';
import CardSelection from './../shared/containers/cardSelection';
import Round from './../shared/containers/round';
import RequireAuthentication from './containers/authentication';
import PhaseEnforcer from './containers/phaseEnforcer';

export default (
    <Route path="/" component={Game}>
      <IndexRoute component={SignIn}/>
      <Route path="signin" component={SignIn}/>
      <Route path="signup" component={SignUp}/>
      <Route path="settings-selection" component={RequireAuthentication(PhaseEnforcer(SettingsSelection))}/>
      <Route path="card-selection" component={RequireAuthentication(PhaseEnforcer(CardSelection))}/>
      <Route path="round" component={RequireAuthentication(PhaseEnforcer(Round))}/>
    </Route>
)
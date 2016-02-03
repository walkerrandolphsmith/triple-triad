import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Game from './../shared/containers/game';
import SignIn from './../shared/containers/signin';
import SignUp from './../shared/containers/signup';
import User from './../shared/containers/user';
import SettingsSelection from './../shared/containers/settingsSelection';
import CardSelection from './../shared/containers/cardSelection';
import Round from './../shared/containers/round';
import NotFound from './../shared/containers/notFound';
import RequireAuthentication from './containers/authentication';
import PhaseEnforcer from './containers/phaseEnforcer';

export default (
    <Route path="/" component={Game}>
      <IndexRoute component={SignIn}/>
      <Route path="signin" component={SignIn}/>
      <Route path="signup" component={SignUp}/>
      <Route path="user" component={RequireAuthentication(User)}/>
      <Route path="settings-selection" component={RequireAuthentication(SettingsSelection)}/>
      <Route path="card-selection" component={RequireAuthentication(CardSelection)}/>
      <Route path="round" component={RequireAuthentication(Round)}/>
      <Route path="*" component={NotFound} status={404}/>
    </Route>
)
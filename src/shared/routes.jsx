import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Game from './../shared/containers/game';
import SignIn from './../shared/containers/signin';
import SignUp from './../shared/containers/signup';
import SettingsSelection from './../shared/containers/settingsSelection';
import CardSelection from './../shared/containers/cardSelection';
import Round from './../shared/containers/round';
import { checkAuth } from './../shared/actions/action-creators/checkAuth';

function requireAuth(nextState, replace) {
    if(!checkAuth()) {
        return replace(null, '/signin')
    }
};

export default (
    <Route path="/" component={Game}>
      <IndexRoute component={SignIn}/>
      <Route path="signin" component={SignIn} />
      <Route path="signup" component={SignUp} />
      <Route path="settings-selection" component={SettingsSelection} onEnter={requireAuth}/>
      <Route path="card-selection" component={CardSelection} onEnter={requireAuth}/>
      <Route path="round" component={Round} onEnter={requireAuth}/>
    </Route>
)

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './../shared/containers/app';
import LeaderBoard from './../shared/containers/leaderBoard';
import SignIn from './../shared/containers/signin';
import SignUp from './../shared/containers/signup';
import VerifyEmail from './../shared/containers/verify';
import ForgotPassword from './../shared/containers/forgotPassword';
import PasswordReset from './../shared/containers/passwordReset';
import Games from './../shared/containers/games';
import User from './../shared/containers/user';
import UserEdit from './../shared/containers/userEdit';
import NotFound from './../shared/containers/notFound';
import PhaseEnforcer from './containers/phaseEnforcer';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={SignIn}/>
      <Route path="signin" component={SignIn}/>
      <Route path="signup" component={SignUp}/>
      <Route path="verify/:token" component={VerifyEmail}/>
      <Route path="forgot" component={ForgotPassword}/>
      <Route path="reset/:token" component={PasswordReset}/>
      <Route path="games" component={Games}/>
      <Route path="game/:gameId" component={PhaseEnforcer()} />
      <Route path="user" component={User}/>
      <Route path="user/edit" component={UserEdit}/>
      <Route path="leaderboard" component={LeaderBoard}/>
      <Route path="*" component={NotFound} status={404}/>
    </Route>
)
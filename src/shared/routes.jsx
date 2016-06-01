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
import AcceptInvitation from './../shared/containers/acceptInvitation';
import User from './../shared/containers/user';
import UserEdit from './../shared/containers/userEdit';
import NotFound from './../shared/containers/notFound';
import PhaseEnforcer from './containers/phaseEnforcer';

export const ROUTES = [
      {
            path: 'signin',
            component: SignIn,
            status: 200
      },
      {
            path: 'signup',
            component: SignUp,
            status: 200
      },
      {
            path: 'verify/:token',
            component: VerifyEmail,
            status: 200
      },
      {
            path: 'forgot',
            component: ForgotPassword,
            status: 200
      },
      {
            path: 'reset/:token',
            component: PasswordReset,
            status: 200
      },
      {
            path: 'games',
            component: Games,
            status: 200
      },
      {
            path: 'accept-invitation/:token',
            component: AcceptInvitation,
            status: 200
      },
      {
            path: 'user',
            component: User,
            status: 200
      },
      {
            path: 'user/edit',
            component: UserEdit,
            status: 200
      },
      {
            path: 'leaderboard',
            component: LeaderBoard,
            status: 200
      },
      {
            path: '*',
            component: NotFound,
            status: 404
      }
];

export const getRoutesForRouteDefinitions = routeDefinitions => routeDefinitions.map(
    route => <Route path={route.path} component={route.component} status={route.status} />
);

export const RouterFactory = routeDefinitions => {
      const routes = getRoutesForRouteDefinitions(routeDefinitions);

      return (
          <Route path="/" component={App}>
                <IndexRoute component={SignIn} />
                <Route path="game/:gameId" component={PhaseEnforcer()} />
                {routes}
          </Route>
      );
};

export default RouterFactory(ROUTES);
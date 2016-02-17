import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router';

import auth from './auth/auth'
import user from './user/user';
import game from './game/game';
import games from './games/games';
import settings from './settings/settings';
import signupForm from './signupForm/signupForm'
import signinForm from './signinForm/signinForm';

export default combineReducers({
    auth: auth,
    user: user,
    game: game,
    games: games,
    settings: settings,
    signupForm: signupForm,
    signinForm: signinForm,
    routing: routeReducer
});
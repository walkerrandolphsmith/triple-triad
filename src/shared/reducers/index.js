import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux';

import auth from './auth/auth'
import user from './user/user';
import game from './game/game';
import games from './games/games';
import settings from './settings/settings';
import signupForm from './signupForm/signupForm'
import signinForm from './signinForm/signinForm';
import resetPasswordForm from './resetPasswordForm/reducer';
import forgotPasswordForm from './forgotPasswordForm/forgotPasswordForm';

export default combineReducers({
    auth: auth,
    user: user,
    game: game,
    games: games,
    settings: settings,
    signupForm: signupForm,
    signinForm: signinForm,
    resetPasswordForm: resetPasswordForm,
    forgotPasswordForm: forgotPasswordForm,
    routing: router
});
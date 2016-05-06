import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import auth from './auth';
import forms from './forms';
import game from './game';
import passwordReset from './passwordReset'
import resendVerificationEmail from './resendVerificationEmail';
import settings from './settings';
import user from './user';

export default combineReducers({
    auth,
    forms,
    game,
    passwordReset,
    resendVerificationEmail,
    settings,
    user,
    routing: router
});
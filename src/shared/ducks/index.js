import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import auth from './auth';
import firebase from './firebase';
import forms from './forms';
import game from './game';
import sendPasswordReset from './sendPasswordReset'
import resendVerificationEmail from './resendVerificationEmail';
import settings from './settings';

export default combineReducers({
    auth,
    firebase,
    forms,
    game,
    sendPasswordReset,
    resendVerificationEmail,
    settings,
    routing: router
});
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import auth from './auth';
import filters from './filters';
import firebase from './firebase';
import forms from './forms';
import game from './game';
import sendPasswordReset from './sendPasswordReset'
import resendVerificationEmail from './resendVerificationEmail';

export default combineReducers({
    auth,
    filters,
    firebase,
    forms,
    game,
    sendPasswordReset,
    resendVerificationEmail,
    routing: router
});
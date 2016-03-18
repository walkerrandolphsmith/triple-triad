import { Map } from 'immutable';
import {
    AUTH_SIGNIN,
    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNIN_FAIL,
    AUTH_SIGNOUT,
    AUTH_SIGNOUT_SUCCESS,
    AUTH_SIGNOUT_FAIL,
    AUTH_SIGNUP,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_FAIL
} from './../../constants/actionTypes';

import signin from './signin';
import signinSuccess from './signinSuccess';
import signinFailure from './signinFailure';
import signup from './signup';
import signupSuccess from './signupSuccess';
import signupFailure from './signupFailure';
import signout from './signout';
import signoutSuccess from './signoutSuccess';
import signoutFailure from './signoutFailure';


const INITIAL_STATE = new Map({
    loading: false,
    loaded: false,
    signingIn: false,
    signingOut: false,
    signingUp: false,
    user: new Map({
        username: null,
        id: null
    })
});

export default function auth(state = INITIAL_STATE, action = {}) {

    const { type, payload } = action;

    switch (type) {
        case AUTH_SIGNIN: return signin(state, payload);
        case AUTH_SIGNIN_SUCCESS: return signinSuccess(state, payload);
        case AUTH_SIGNIN_FAIL: return signinFailure(state, payload);

        case AUTH_SIGNUP: return signup(state, payload);
        case AUTH_SIGNUP_SUCCESS: return signupSuccess(state, payload);
        case AUTH_SIGNUP_FAIL: return signupFailure(state, payload);

        case AUTH_SIGNOUT: return signout(state, payload);
        case AUTH_SIGNOUT_SUCCESS: return signoutSuccess(state, payload);
        case AUTH_SIGNOUT_FAIL: return signoutFailure(state, payload);

        default: return state;
    }
}
import { Map } from 'immutable';
import request from 'superagent';
import { push } from 'react-router-redux';
import {
    isValidUsername, isValidPassword, passwordsMatch, isValidEmail
} from './../../utils/formValidation/formValidation';

import { setFormError } from './../../reducers/forms';

export const AUTH_SIGNIN = 'AUTH_SIGNIN';
export const AUTH_SIGNIN_SUCCESS = 'AUTH_SIGNIN_SUCCESS';
export const AUTH_SIGNIN_FAIL = 'AUTH_SIGNIN_FAIL';

export const AUTH_SIGNOUT = 'AUTH_SIGNOUT';
export const AUTH_SIGNOUT_SUCCESS = 'AUTH_SIGNOUT_SUCCESS';
export const AUTH_SIGNOUT_FAIL = 'AUTH_SIGNOUT_FAIL';

export const AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS';
export const AUTH_SIGNUP = 'AUTH_SIGNUP';
export const AUTH_SIGNUP_FAIL = 'AUTH_SIGNUP_FAIL';

export const requestSignIn = () => ({ type: AUTH_SIGNIN });

export const receiveSignIn = user => ({
    type: AUTH_SIGNIN_SUCCESS,
    payload: {
        user: {
            name: user.name,
            id: user.id
        }
    }
});

export function signIn(user) {
    return dispatch => {
        dispatch(requestSignIn());

        let error;
        if(!isValidUsername(user.username)) {
            dispatch(setFormError({
                form: 'signIn',
                field: 'username',
                error: 'Invalid Username'
            }));
            error = true;
        }

        if(!isValidPassword(user.password)) {
            dispatch(setFormError({
                form: 'signIn',
                field: 'password',
                error: 'Invalid Password'
            }));
            error = true;
        }

        if(error) {
            return;
        }

        request
            .post('/api/signIn')
            .send(JSON.stringify(user))
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end((err, response) => {
                if(response.status === 200) {
                    dispatch(receiveSignIn(response.body));
                    dispatch(push('/games'));
                } else {
                    let message = JSON.parse(response.text);
                    message.form = 'signIn';
                    dispatch(setFormError(message));
                }
            });
    };
}

export const requestSignUp = () => ({ type: AUTH_SIGNUP });

export const receiveUser = user => ({
    type: AUTH_SIGNUP_SUCCESS,
    payload: {
        user: {
            name: user.name,
            id: user.id
        }
    }
});

export function signUp(user) {
    return dispatch => {
        dispatch(requestSignUp());

        const { username, password, confirmPassword, email } = user;

        let error = false;

        if(!isValidUsername(username)) {
            dispatch(setFormError({
                form: 'signUp',
                field: 'username',
                error: 'Invalid Username'
            }));
            error = true;
        }

        if(!isValidPassword(password)) {
            dispatch(setFormError({
                form: 'signUp',
                field: 'password',
                error: 'Invalid Password'
            }));
            error = true;
        }

        if(!passwordsMatch(password, confirmPassword)) {
            dispatch(setFormError({
                form: 'signUp',
                field: 'confirmPassword',
                error: 'Passwords must match'
            }));
            error = true;
        }

        if(!isValidEmail(email)) {
            dispatch(setFormError({
                form: 'signUp',
                field: 'email',
                error: 'Invalid email address'
            }));
            error = true;
        }

        if(error) {
            return;
        }

        request
            .post('/api/signUp')
            .send(JSON.stringify(user))
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end((err, response) => {
                if(response.status === 200) {
                    dispatch(receiveUser(response.body));
                    dispatch(push('/games'));
                } else {
                    let message = JSON.parse(response.text);
                    message.form = 'signUp';
                    dispatch(setFormError(message));
                }
            });
    };
}

export const requestSignOut = () => ({ type: AUTH_SIGNOUT });
export const receiveSignOut = () => ({ type: AUTH_SIGNOUT_SUCCESS });

export function signOut() {
    return dispatch => {
        dispatch(requestSignOut());
        return request
            .get('/api/signOut')
            .end((error, response) => {
                if(response.status === 200) {
                    dispatch(receiveSignOut());
                    dispatch(push('/'));
                }
            });
    };
}

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

    switch(type) {
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

export const signin = state => state.set('signingIn', true);

export const signinFailure = (state, payload) => {
    let nextState = state.set('signingIn', false);
    nextState = nextState.setIn('user.username'.split('.'), null);
    nextState = nextState.setIn('user.id'.split('.'), null);
    return nextState.set('signInError', payload.error);
};

export const signinSuccess = (state, payload) => {
    let nextState = state.set('signingIn', true);
    nextState = nextState.setIn('user.username'.split('.'), payload.user.name);
    return nextState.setIn('user.id'.split('.'), payload.user.id);
};

export const signout = state => state.set('signingOut', true);

export const signoutFailure = (state, payload) => {
    state.set('signingOut', false);
    return state.set('signOutError', payload.error);
};

export const signoutSuccess = state => {
    let nextState = state.set('signingOut', false);
    nextState = nextState.setIn('user.username'.split('.'), null);
    return nextState.setIn('user.id'.split('.'), null);
};

export const signup = state => state.set('signingUp', true);

export const signupFailure = state => {
    let nextState = state.set('signingUp', false);
    nextState = nextState.setIn('user.username'.split('.'), null);
    return nextState.setIn('user.id'.split('.'), null);
};

export const signupSuccess = (state, payload) => {
    let nextState = state.set('signingUp', false);
    nextState = nextState.setIn('user.username'.split('.'), payload.user.name);
    return nextState.setIn('user.id'.split('.'), payload.user.id);
};
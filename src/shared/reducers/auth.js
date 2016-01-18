import { Map } from 'immutable';
import {
    AUTH_LOAD,
    AUTH_LOAD_SUCCESS,
    AUTH_LOAD_FAIL,
    AUTH_SIGNIN,
    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNIN_FAIL,
    AUTH_SIGNOUT,
    AUTH_SIGNOUT_SUCCESS,
    AUTH_SIGNOUT_FAIL,
    AUTH_SIGNUP,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_FAIL
} from './../constants/action-types';

const initialState = new Map({
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

export default function auth(state = initialState, action = {}) {

    const { type, payload } = action;

    switch (action.type) {
        case AUTH_LOAD: return load(state, payload);
        case AUTH_LOAD_SUCCESS: return loadSuccessful(state, payload);
        case AUTH_LOAD_FAIL: return loadFailure(state, payload);

        case AUTH_SIGNIN: return signin(state, payload);
        case AUTH_SIGNIN_SUCCESS: return signInSuccess(state, payload);
        case AUTH_SIGNIN_FAIL: return signInFailure(state, payload);

        case AUTH_SIGNUP: return signUp(state, payload);
        case AUTH_SIGNUP_SUCCESS: return signUpSuccess(state, payload);
        case AUTH_SIGNUP_FAIL: return signUpFailure(state, payload);

        case AUTH_SIGNOUT: return signOut(state, payload);
        case AUTH_SIGNOUT_SUCCESS: return signOutSuccess(state, payload);
        case AUTH_SIGNOUT_FAIL: return signOutFailure(state, payload);

        default: return state;
    }
}

function load(state, payload) {
    return state.set('loading', true);
}

function loadSuccessful(state, payload) {
    state = state.set('loading', false);
    state = state.set('loaded', true);
    return state.setIn('user.username'.split('.'), payload.user);
}

function loadFailure(state, payload) {
    state = state.set('loading', false);
    state = state.set('loaded', false);
    return state.set('error', payload.error);
}

function signin(state, payload) {
    return state.set('signingIn', true);
}

function signInSuccess(state, payload) {
    state = state.set('signingIn', true);
    state = state.setIn('user.username'.split('.'), payload.user.name);
    return state.setIn('user.id'.split('.'), payload.user.id);
}

function signInFailure(state, payload) {
    state = state.set('signingIn', false);
    state = state.setIn('user.username'.split('.'), null);
    state = state.setIn('user.id'.split('.'), null);
    return state.set('signInError', payload.error);
}

function signUp(state, payload) {
    return state.set('signingUp', true);
}

function signUpSuccess(state, payload) {
    state = state.set('signingUp', false);
    state = state.setIn('user.username'.split('.'), payload.username);
    return state.setIn('user.id'.split('.'), payload.id);
}

function signUpFailure(state, payload) {
    state = state.set('signingUp', false);
    state = state.setIn('user.username'.split('.'), null);
    return state.setIn('user.id'.split('.'), null);
}

function signOut(state, payload){
    return state.set('signingOut', true);
}

function signOutSuccess(state, payload){
    state = state.set('signingOut', false);
    state = state.setIn('user.username'.split('.'), null);
    return state.setIn('user.id'.split('.'), null);
}

function signOutFailure(state, payload){
    state.set('signingOut', false);
    return state.set('signOutError', payload.error);
}
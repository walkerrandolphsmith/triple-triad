import { Map } from 'immutable';
import {
    USER_PROFILE,
    USER_PROFILE_SUCCESS
} from './../constants/actionTypes';

const INITIAL_STATE = new Map({
    loading: false,
    loaded: false,
    user: new Map({
        verified: null
    })
});

export default function user(state = INITIAL_STATE, action = {}) {

    const { type, payload } = action;

    switch (type) {
        case USER_PROFILE: return userProfile(state, payload);
        case USER_PROFILE_SUCCESS: return userProfileSuccess(state, payload);

        default: return state;
    }
}

function userProfile(state, payload) {
    state = state.set('loaded', false);
    return state.set('loading', true);
}

function userProfileSuccess(state, payload) {
    state = state.set('loading', false);
    state = state.set('loaded', true);
    return state.setIn('user.verified'.split('.'), payload.user.verified);
}
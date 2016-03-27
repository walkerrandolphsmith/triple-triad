import { Map } from 'immutable';
import {
    RESEND_EMAIL_VERIFICATION,
    RESEND_EMAIL_VERIFICATION_SUCCESS,
    RESEND_EMAIL_VERIFICATION_FAILED,
    RESEND_EMAIL_VERIFICATION_CLEAR,
    USER_PROFILE,
    USER_PROFILE_SUCCESS,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_REQUEST,
    PASSWORD_RESET_FAILED,
    PASSWORD_RESET_CLEAR
} from './../../constants/actionTypes';

const INITIAL_STATE = new Map({
    loading: false,
    loaded: false,
    user: new Map({
        verified: null
    }),
    resending: false,
    resendingSuccess: false,
    resendingFailure: false,
    passwordReset: new Map({
        loading: false,
        loaded: false,
        failed: false
    })

});

export default function user(state = INITIAL_STATE, action = {}) {
    const { type, payload } = action;

    switch(type) {
        case USER_PROFILE: return userProfile(state, payload);
        case USER_PROFILE_SUCCESS: return userProfileSuccess(state, payload);
        case RESEND_EMAIL_VERIFICATION: return resendVerificationEmail(state, payload);
        case RESEND_EMAIL_VERIFICATION_SUCCESS: return resendVerificationEmailSuccess(state, payload);
        case RESEND_EMAIL_VERIFICATION_FAILED: return resendVerificationEmailFailure(state, payload);
        case RESEND_EMAIL_VERIFICATION_CLEAR: return resendVerificationEmailClear(state, payload);
        case PASSWORD_RESET_SUCCESS: return resetPasswordSuccess(state, payload);
        case PASSWORD_RESET_REQUEST: return resetPasswordRequest(state, payload);
        case PASSWORD_RESET_FAILED: return resetPasswordFailure(state, payload);
        case PASSWORD_RESET_CLEAR: return resetPasswordClear(state, payload);

        default: return state;
    }
}

function userProfile(state) {
    let nextState = state.set('loaded', false);
    return nextState.set('loading', true);
}

function userProfileSuccess(state, payload) {
    let nextState = state.set('loading', false);
    nextState = nextState.set('loaded', true);
    return nextState.setIn('user.verified'.split('.'), payload.user.verified);
}

function resendVerificationEmail(state) {
    let nextState = state.set('resending', true);
    nextState = nextState.set('resendingSuccess', false);
    return nextState.set('resendingFailure', false);
}

function resendVerificationEmailSuccess(state) {
    let nextState = state.set('resending', false);
    nextState = nextState.set('resendingSuccess', true);
    return nextState.set('resendingFailure', false);
}

function resendVerificationEmailFailure(state) {
    let nextState = state.set('resending', false);
    nextState = nextState.set('resendingSuccess', false);
    return nextState.set('resendingFailure', true);
}

function resendVerificationEmailClear(state) {
    let nextState = state.set('resending', false);
    nextState = nextState.set('resendingSuccess', false);
    return nextState.set('resendingFailure', false);
}

function resetPasswordSuccess(state) {
    let nextState = state.setIn('passwordReset.failed'.split('.'), false);
    nextState = nextState.setIn('passwordReset.loaded'.split('.'), true);
    return nextState.setIn('passwordReset.loading'.split('.'), false);
}

function resetPasswordRequest(state) {
    let nextState = state.setIn('passwordReset.failed'.split('.'), false);
    nextState = nextState.setIn('passwordReset.loaded'.split('.'), false);
    return nextState.setIn('passwordReset.loading'.split('.'), true);
}

function resetPasswordFailure(state) {
    let nextState = state.setIn('passwordReset.failed'.split('.'), true);
    nextState = nextState.setIn('passwordReset.loaded'.split('.'), false);
    return nextState.setIn('passwordReset.loading'.split('.'), false);
}

function resetPasswordClear(state) {
    let nextState = state.setIn('passwordReset.failed'.split('.'), false);
    nextState = nextState.setIn('passwordReset.loaded'.split('.'), false);
    return nextState.setIn('passwordReset.loading'.split('.'), false);
}
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

    switch (type) {
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
    state = state.set('loaded', false);
    return state.set('loading', true);
}

function userProfileSuccess(state, payload) {
    state = state.set('loading', false);
    state = state.set('loaded', true);
    return state.setIn('user.verified'.split('.'), payload.user.verified);
}

function resendVerificationEmail(state) {
    state = state.set('resending', true);
    state = state.set('resendingSuccess', false);
    return state.set('resendingFailure', false);
}

function resendVerificationEmailSuccess(state) {
    state = state.set('resending', false);
    state = state.set('resendingSuccess', true);
    return state.set('resendingFailure', false);
}

function resendVerificationEmailFailure(state) {
    state = state.set('resending', false);
    state = state.set('resendingSuccess', false);
    return state.set('resendingFailure', true);
}

function resendVerificationEmailClear(state) {
    state = state.set('resending', false);
    state = state.set('resendingSuccess', false);
    return state.set('resendingFailure', false);
}

function resetPasswordSuccess(state){
    state = state.setIn('passwordReset.failed'.split('.'), false);
    state = state.setIn('passwordReset.loaded'.split('.'), true);
    return state.setIn('passwordReset.loading'.split('.'), false);
}

function resetPasswordRequest(state){
    state = state.setIn('passwordReset.failed'.split('.'), false);
    state = state.setIn('passwordReset.loaded'.split('.'), false);
    return state.setIn('passwordReset.loading'.split('.'), true);
}

function resetPasswordFailure(state){
    state = state.setIn('passwordReset.failed'.split('.'), true);
    state = state.setIn('passwordReset.loaded'.split('.'), false);
    return state.setIn('passwordReset.loading'.split('.'), false);
}

function resetPasswordClear(state){
    state = state.setIn('passwordReset.failed'.split('.'), false);
    state = state.setIn('passwordReset.loaded'.split('.'), false);
    return state.setIn('passwordReset.loading'.split('.'), false);
}
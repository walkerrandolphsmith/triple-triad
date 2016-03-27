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

import resendVerificationEmailClear from './resendVerificationEmailClear';
import resendVerificationEmailFailure from './resendVerificationEmailFailure';
import resendVerificationEmailRequest from './resendVerificationEmailRequest';
import resendVerificationEmailSuccess from './resendVerificationEmailSuccess';
import resetPasswordClear from './resetPasswordClear';
import resetPasswordFailure from './resetPasswordFailure';
import resetPasswordRequest from './resetPasswordRequest';
import resetPasswordSuccess from './resetPasswordSuccess';
import userProfileRequest from './userProfileRequest';
import userProfileSuccess from './userProfileSuccess';

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
        case USER_PROFILE: return userProfileRequest(state);
        case USER_PROFILE_SUCCESS: return userProfileSuccess(state, payload);
        case RESEND_EMAIL_VERIFICATION: return resendVerificationEmailRequest(state);
        case RESEND_EMAIL_VERIFICATION_SUCCESS: return resendVerificationEmailSuccess(state);
        case RESEND_EMAIL_VERIFICATION_FAILED: return resendVerificationEmailFailure(state);
        case RESEND_EMAIL_VERIFICATION_CLEAR: return resendVerificationEmailClear(state);
        case PASSWORD_RESET_SUCCESS: return resetPasswordSuccess(state);
        case PASSWORD_RESET_REQUEST: return resetPasswordRequest(state);
        case PASSWORD_RESET_FAILED: return resetPasswordFailure(state);
        case PASSWORD_RESET_CLEAR: return resetPasswordClear(state);

        default: return state;
    }
}
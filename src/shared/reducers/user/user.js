import { Map } from 'immutable';
import {
    RESEND_EMAIL_VERIFICATION,
    RESEND_EMAIL_VERIFICATION_SUCCESS,
    RESEND_EMAIL_VERIFICATION_FAILED,
    RESEND_EMAIL_VERIFICATION_CLEAR,
    USER_PROFILE,
    USER_PROFILE_SUCCESS
} from './../../constants/actionTypes';

import resendVerificationEmailClear from './resendVerificationEmailClear';
import resendVerificationEmailFailure from './resendVerificationEmailFailure';
import resendVerificationEmailRequest from './resendVerificationEmailRequest';
import resendVerificationEmailSuccess from './resendVerificationEmailSuccess';
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
    resendingFailure: false
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
        default: return state;
    }
}
import { Map } from 'immutable';

import { resendVerificationEmailCleared } from './mutations/resendVerificationEmailCleared';
import { resendVerificationEmailFailed } from './mutations/resendVerificationEmailFailed';
import { resendVerificationEmailRequested } from './mutations/resendVerificationEmailRequested';
import { resendVerificationEmailSucceeded } from './mutations/resendVerificationEmailSucceeded';

export const RESEND_EMAIL_VERIFICATION_CLEAR = 'RESEND_EMAIL_VERIFICATION_CLEAR';
export const RESEND_EMAIL_VERIFICATION_FAILED = 'RESEND_EMAIL_VERIFICATION_FAILED';
export const RESEND_EMAIL_VERIFICATION_REQUEST = 'RESEND_EMAIL_VERIFICATION_REQUEST';
export const RESEND_EMAIL_VERIFICATION_SUCCESS = 'RESEND_EMAIL_VERIFICATION_SUCCESS';

export { resendEmailVerificationClear } from './actions/resendEmailVerificationClear';
export { resendEmailVerificationFailure } from './actions/resendEmailVerificationFailure';
export { resendEmailVerificationRequest } from './actions/resendEmailVerificationRequest';
export { resendEmailVerificationSuccess } from './actions/resendEmailVerificationSuccess';
export { resendEmailVerification } from './thunks/resendEmailVerificaiton';

const INITIAL_STATE = new Map({
    loading: false,
    loaded: false,
    failed: false
});

export default function user(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case RESEND_EMAIL_VERIFICATION_CLEAR: return resendVerificationEmailCleared(state);
        case RESEND_EMAIL_VERIFICATION_FAILED: return resendVerificationEmailFailed(state);
        case RESEND_EMAIL_VERIFICATION_REQUEST: return resendVerificationEmailRequested(state);
        case RESEND_EMAIL_VERIFICATION_SUCCESS: return resendVerificationEmailSucceeded(state);
        default: return state;
    }
}
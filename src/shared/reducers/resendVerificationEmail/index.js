import { Map } from 'immutable';
import request from 'superagent';

export const RESEND_EMAIL_VERIFICATION_CLEAR = 'RESEND_EMAIL_VERIFICATION_CLEAR';
export const RESEND_EMAIL_VERIFICATION_FAILED = 'RESEND_EMAIL_VERIFICATION_FAILED';
export const RESEND_EMAIL_VERIFICATION_REQUEST = 'RESEND_EMAIL_VERIFICATION_REQUEST';
export const RESEND_EMAIL_VERIFICATION_SUCCESS = 'RESEND_EMAIL_VERIFICATION_SUCCESS';

export const resendEmailVerificationClear = () => ({ type: RESEND_EMAIL_VERIFICATION_CLEAR });
export const resendEmailVerificationFailed = () => ({ type: RESEND_EMAIL_VERIFICATION_FAILED });
export const resendEmailVerificationRequest = () => ({ type: RESEND_EMAIL_VERIFICATION_REQUEST });
export const resendEmailVerificationSuccess = () => ({ type: RESEND_EMAIL_VERIFICATION_SUCCESS });

export const resendEmailVerification = id => dispatch => {
    dispatch(resendEmailVerificationRequest());
    return request
        .post('/api/resendVerificationEmail')
        .send(JSON.stringify({ userId: id }))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200) {
                dispatch(resendEmailVerificationSuccess());
            } else {
                dispatch(resendEmailVerificationFailed());
            }
            setTimeout(() => {
                dispatch(resendEmailVerificationClear());
            }, 2500);
        });
};

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

export const resendVerificationEmailCleared = state => state
    .set('loading', false)
    .set('loaded', false)
    .set('failed', false);

export const resendVerificationEmailFailed =  state => state
    .set('loading', false)
    .set('loaded', false)
    .set('failed', true);

export const resendVerificationEmailRequested = state => state
    .set('loading', true)
    .set('loaded', false)
    .set('failed', false);

export const resendVerificationEmailSucceeded = state => state
    .set('loading', false)
    .set('loaded', true)
    .set('failed', false);
import { Map } from 'immutable';
import request from 'superagent';
import {
    isValidPassword,
    passwordsMatch
} from './../../utils/formValidation/formValidation';
import { setFormError } from './../forms/';

export const PASSWORD_RESET_CLEAR = 'PASSWORD_RESET_CLEAR';
export const PASSWORD_RESET_FAILED = 'PASSWORD_RESET_FAILED';
export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';

export const passwordResetClear = () => ({ type: PASSWORD_RESET_CLEAR });
export const passwordResetFailure = () => ({ type: PASSWORD_RESET_FAILED });
export const passwordResetRequest = () => ({ type: PASSWORD_RESET_REQUEST });
export const passwordResetSuccess = () => ({ type: PASSWORD_RESET_SUCCESS });

export const passwordReset = (token, password, confirmPassword) => dispatch => {
    dispatch(passwordResetRequest());

    let error;
    if(!isValidPassword(password)) {
        dispatch(setFormError({
            form: 'resetPassword',
            field: 'password',
            error: 'Invalid Password'
        }));
        error = true;
    }

    if(!passwordsMatch(password, confirmPassword)) {
        dispatch(setFormError({
            form: 'resetPassword',
            field: 'password',
            error: 'Passwords must match'
        }));
        error = true;
    }

    if(error) {
        return;
    }

    request
        .post('/api/resetPassword')
        .send(JSON.stringify({
            token: token,
            password: password,
            confirmPassword: confirmPassword
        }))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, response) => {
            if(response.status === 200) {
                dispatch(passwordResetSuccess());
            } else {
                dispatch(passwordResetFailure());
            }
            setTimeout(() => {
                dispatch(passwordResetClear());
            }, 1000);
        });
};

const INITIAL_STATE = new Map({
    loading: false,
    loaded: false,
    failed: false
});

export default function user(state = INITIAL_STATE, action = {}) {
    const { type, payload } = action;

    switch(type) {
        case PASSWORD_RESET_CLEAR: return passwordResetCleared(state);
        case PASSWORD_RESET_FAILED: return passwordResetFailed(state);
        case PASSWORD_RESET_REQUEST: return passwordResetRequested(state);
        case PASSWORD_RESET_SUCCESS: return passwordResetSucceeded(state);

        default: return state;
    }
}

export const passwordResetCleared = state => state
    .set('failed', false)
    .set('loaded', false)
    .set('loading', false);

export const passwordResetFailed = state => state
    .set('failed', true)
    .set('loaded', false)
    .set('loading', false);

export const passwordResetRequested = state => state
    .set('failed', false)
    .set('loaded', false)
    .set('loading', true);

export const passwordResetSucceeded = state => state
    .set('failed', false)
    .set('loaded', true)
    .set('loading', false);
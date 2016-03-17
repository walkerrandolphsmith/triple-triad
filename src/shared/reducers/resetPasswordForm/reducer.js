import { Map } from 'immutable';
import {
    RESET_PASSWORD_FORM_ERROR,
    CLEAR_FORM_ERRORS
} from './../../constants/actionTypes';

import resetPasswordFormError from './resetPasswordFormError';
import clearFormErrors from './clearFormErrors';

const INITIAL_STATE = new Map({
    password: '',
    confirmPassword: ''
});

export default function(state = INITIAL_STATE, action = {}) {

    const { type, payload } = action;

    switch (type) {
        case RESET_PASSWORD_FORM_ERROR: return resetPasswordFormError(state, payload);
        case CLEAR_FORM_ERRORS: return clearFormErrors(INITIAL_STATE);
        default: return state;
    }
}
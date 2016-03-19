import { Map } from 'immutable';
import {
    FORGOT_PASSWORD_FORM_ERROR,
    CLEAR_FORM_ERRORS
} from './../../constants/actionTypes';

import { setFormError, clearFormError } from './../forms';

const INITIAL_STATE = new Map({
    email: ''
});

export default function forgotPasswordFormErrors(state = INITIAL_STATE, action = {}) {

    const { type, payload } = action;

    switch (type) {
        case FORGOT_PASSWORD_FORM_ERROR: return setFormError(state, payload);
        case CLEAR_FORM_ERRORS: return clearFormError(INITIAL_STATE);
        default: return state;
    }
}
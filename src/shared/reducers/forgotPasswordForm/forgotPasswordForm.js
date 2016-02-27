import { Map } from 'immutable';
import {
    FORGOT_PASSWORD_FORM_ERROR,
    CLEAR_FORM_ERRORS
} from './../../constants/actionTypes';

const INITIAL_STATE = new Map({
    email: ''
});

export default function forgotPasswordFormErrors(state = INITIAL_STATE, action = {}) {

    const { type, payload } = action;

    switch (type) {
        case FORGOT_PASSWORD_FORM_ERROR: return state.set(payload['field'], payload['error']);
        case CLEAR_FORM_ERRORS: return INITIAL_STATE;
        default: return state;
    }
}
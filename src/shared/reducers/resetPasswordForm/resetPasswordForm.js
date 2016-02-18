import { Map } from 'immutable';
import {
    RESET_PASSWORD_FORM_ERROR,
    RESET_PASSWORD_FORM_ERROR_RESET
} from './../../constants/actionTypes';

const INITIAL_STATE = new Map({
    password: '',
    confirmPassword: ''
});

export default function resetPasswordFormErrors(state = INITIAL_STATE, action = {}) {

    const { type, payload } = action;

    switch (type) {
        case RESET_PASSWORD_FORM_ERROR: return state.set(payload['field'], payload['error']);
        case RESET_PASSWORD_FORM_ERROR_RESET: return INITIAL_STATE;
        default: return state;
    }
}
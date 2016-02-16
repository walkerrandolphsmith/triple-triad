import { Map } from 'immutable';
import {
    SIGN_UP_FORM_ERROR,
    SIGN_UP_FORM_ERROR_RESET
} from './../../constants/actionTypes';

const INITIAL_STATE = new Map({
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
});

export default function signUpFormErrors(state = INITIAL_STATE, action = {}) {

    const { type, payload } = action;

    switch (type) {
        case SIGN_UP_FORM_ERROR: return state.set(payload['field'], payload['error']);
        case SIGN_UP_FORM_ERROR_RESET: return INITIAL_STATE;
        default: return state;
    }
}
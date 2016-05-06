import { Map } from 'immutable';
import { formErrorCleared } from './mutations/formErrorCleared';
import { formErrorSet } from './mutations/formErrorSet';

export const SET_FORM_ERROR = 'SET_FROM_ERROR';
export const CLEAR_FORM_ERRORS = 'CLEAR_FORM_ERRORS';

export { clearFormErrors } from './actions/clearFormErrors';
export { setFormError } from './actions/setFormError';


export const INITIAL_STATE = new Map({
    forgotPassword: new Map({
        email: ''
    }),
    resetPassword: new Map({
        password: '',
        confirmPassword: ''
    }),
    signIn: new Map({
        username: '',
        password: ''
    }),
    signUp: new Map({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    })
});

export default function (state = INITIAL_STATE, action = {}) {
    const { type, payload } = action;

    switch(type) {
        case SET_FORM_ERROR: return formErrorSet(state, payload);
        case CLEAR_FORM_ERRORS: return formErrorCleared(state, payload);
        default: return state;
    }
}
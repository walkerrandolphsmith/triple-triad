import { Map } from 'immutable';

export const SET_FORM_ERROR = 'SET_FROM_ERROR';
export const CLEAR_FORM_ERRORS = 'CLEAR_FORM_ERRORS';

export const clearFormErrors = (formName) => ({
    type: CLEAR_FORM_ERRORS,
    payload: {
        form: formName
    }
});

export const setFormError = ({form, field, error}) => ({
    type: SET_FORM_ERROR,
    payload: {
        form: form,
        field: field,
        error: error
    }
});

const INITIAL_STATE = new Map({
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
        case SET_FORM_ERROR: return updateFormError(state, payload);
        case CLEAR_FORM_ERRORS: return clearFormError(state, payload);
        default: return state;
    }
}

export const updateFormError = (state, payload) => state.setIn(`${payload.form}.${payload.field}`.split('.'), payload.error);
export const clearFormError = (state, payload) => state.set(payload.form, INITIAL_STATE.get(payload.form));

import { SET_FORM_ERROR } from './../index';

export const setFormError = ({form, field, error}) => ({
    type: SET_FORM_ERROR,
    payload: {
        form: form,
        field: field,
        error: error
    }
});
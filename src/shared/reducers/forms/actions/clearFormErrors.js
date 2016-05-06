import { CLEAR_FORM_ERRORS } from './../index';

export const clearFormErrors = (formName) => ({
    type: CLEAR_FORM_ERRORS,
    payload: {
        form: formName
    }
});
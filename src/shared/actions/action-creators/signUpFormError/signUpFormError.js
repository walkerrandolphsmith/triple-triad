import { SIGN_UP_FORM_ERROR } from './../../../constants/actionTypes';

export function signUpFormError(formData) {
    return {
        type: SIGN_UP_FORM_ERROR,
        payload: {
            field: formData.field,
            error: formData.error
        }
    };
}
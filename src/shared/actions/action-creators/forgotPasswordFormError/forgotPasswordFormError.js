import { FORGOT_PASSWORD_FORM_ERROR } from './../../../constants/actionTypes';

export function forgotPasswordFormError(formData) {
    return {
        type: FORGOT_PASSWORD_FORM_ERROR,
        payload: {
            field: formData.field,
            error: formData.error
        }
    };
}
import { RESET_PASSWORD_FORM_ERROR } from './../../../constants/actionTypes';

export function resetPasswordFormError(formData){
    return {
        type: RESET_PASSWORD_FORM_ERROR,
        payload: {
            field: formData.field,
            error: formData.error
        }
    }
}
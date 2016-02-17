import { SIGN_IN_FORM_ERROR } from './../../../constants/actionTypes';

export function signinFormError(formData){
    return {
        type: SIGN_IN_FORM_ERROR,
        payload: {
            field: formData.field,
            error: formData.error
        }
    }
}
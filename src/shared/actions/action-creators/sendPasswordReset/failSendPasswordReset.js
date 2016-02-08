import {  SEND_PASSWORD_RESET_FAILED } from './../../../constants/actionTypes';

export function failSendPasswordReset() {
    return {
        type: SEND_PASSWORD_RESET_FAILED
    }
}

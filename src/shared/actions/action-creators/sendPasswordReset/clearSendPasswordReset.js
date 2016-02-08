import {  SEND_PASSWORD_RESET_CLEAR } from './../../../constants/actionTypes';

export function clearSendPasswordReset() {
    return {
        type: SEND_PASSWORD_RESET_CLEAR
    }
}

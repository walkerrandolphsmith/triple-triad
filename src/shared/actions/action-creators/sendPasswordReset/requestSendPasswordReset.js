import { SEND_PASSWORD_RESET } from './../../../constants/actionTypes';

export function requestSendPasswordReset() {
    return {
        type: SEND_PASSWORD_RESET
    }
}

import { SEND_PASSWORD_RESET_SUCCESS } from './../../../../constants/actionTypes';

export function receiveSendPasswordReset() {
    return {
        type: SEND_PASSWORD_RESET_SUCCESS
    }
}

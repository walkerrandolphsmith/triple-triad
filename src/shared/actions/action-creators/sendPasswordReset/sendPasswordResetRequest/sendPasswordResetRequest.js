import { SEND_PASSWORD_RESET } from './../../../../constants/actionTypes';

export function sendPasswordResetRequest() {
    return {
        type: SEND_PASSWORD_RESET
    }
}

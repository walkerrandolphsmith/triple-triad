import {  SEND_PASSWORD_RESET_FAILED } from './../../../../constants/actionTypes';

export function sendPasswordResetFailed() {
    return {
        type: SEND_PASSWORD_RESET_FAILED
    }
}

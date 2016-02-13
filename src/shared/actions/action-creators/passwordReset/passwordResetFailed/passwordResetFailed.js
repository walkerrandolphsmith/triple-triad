import {  PASSWORD_RESET_FAILURE } from './../../../../constants/actionTypes';

export function passwordResetFailed() {
    return {
        type: PASSWORD_RESET_FAILURE
    }
}

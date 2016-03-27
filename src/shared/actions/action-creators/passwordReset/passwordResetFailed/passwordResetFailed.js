import { PASSWORD_RESET_FAILED } from './../../../../constants/actionTypes';

export function passwordResetFailed() {
    return {
        type: PASSWORD_RESET_FAILED
    };
}

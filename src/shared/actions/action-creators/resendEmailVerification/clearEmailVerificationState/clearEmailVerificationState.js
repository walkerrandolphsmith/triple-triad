import {  RESEND_EMAIL_VERIFICATION_CLEAR } from './../../../../constants/actionTypes';

export function clearEmailVerificationState() {
    return {
        type: RESEND_EMAIL_VERIFICATION_CLEAR
    }
}

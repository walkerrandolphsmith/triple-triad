import {  RESEND_EMAIL_VERIFICATION_FAILED } from './../../../../constants/actionTypes';

export function resendEmailVerificationFailed() {
    return {
        type: RESEND_EMAIL_VERIFICATION_FAILED
    }
}

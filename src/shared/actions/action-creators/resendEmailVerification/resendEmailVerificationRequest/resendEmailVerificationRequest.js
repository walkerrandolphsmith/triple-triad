import { RESEND_EMAIL_VERIFICATION } from './../../../../constants/actionTypes';

export function resendEmailVerificationRequest() {
    return {
        type: RESEND_EMAIL_VERIFICATION
    };
}

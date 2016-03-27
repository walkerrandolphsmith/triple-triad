import { RESEND_EMAIL_VERIFICATION_SUCCESS } from './../../../../constants/actionTypes';

export function resendEmailVerificationSuccess() {
    return {
        type: RESEND_EMAIL_VERIFICATION_SUCCESS
    };
}

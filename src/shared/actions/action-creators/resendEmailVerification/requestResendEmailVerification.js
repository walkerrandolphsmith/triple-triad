import { RESEND_EMAIL_VERIFICATION } from './../../../constants/actionTypes';

export function requestResendEmailVerification() {
    return {
        type: RESEND_EMAIL_VERIFICATION
    }
}

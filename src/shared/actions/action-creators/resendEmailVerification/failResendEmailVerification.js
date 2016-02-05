import {  RESEND_EMAIL_VERIFICATION_FAILED } from './../../../constants/actionTypes';

export function failResendEmailVerification() {
    return {
        type: RESEND_EMAIL_VERIFICATION_FAILED
    }
}

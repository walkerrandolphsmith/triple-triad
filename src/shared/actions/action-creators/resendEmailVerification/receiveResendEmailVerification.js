import { RESEND_EMAIL_VERIFICATION_SUCCESS } from './../../../constants/actionTypes';

export function receiveResendEmailVerification() {
    return {
        type: RESEND_EMAIL_VERIFICATION_SUCCESS
    }
}

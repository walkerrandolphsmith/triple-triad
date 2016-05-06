import { EMAIL_VERIFIED } from './../index';

export const verifyEmailSuccess = isVerified => ({
    type: EMAIL_VERIFIED,
    payload: {
        isVerified: isVerified
    }
});
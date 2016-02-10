import { EMAIL_VERIFIED } from './../../../constants/actionTypes';

export function emailVerified(isVerified) {
    return {
        type: EMAIL_VERIFIED,
        payload: {
            isVerified: isVerified
        }
    }
}

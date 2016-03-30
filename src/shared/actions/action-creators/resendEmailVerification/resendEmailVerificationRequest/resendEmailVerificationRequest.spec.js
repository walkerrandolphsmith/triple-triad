import expect from 'expect';
import { RESEND_EMAIL_VERIFICATION } from './../../../../constants/actionTypes';
import { resendEmailVerificationRequest } from './resendEmailVerificationRequest';

describe('Clear resend email verification state', () => {
    it('should create an action to reset the resend email state', () => {
        const expectedAction = {
            type: RESEND_EMAIL_VERIFICATION
        };
        expect(resendEmailVerificationRequest()).toEqual(expectedAction);
    });
});
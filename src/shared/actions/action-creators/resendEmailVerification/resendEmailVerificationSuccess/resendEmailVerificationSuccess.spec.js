import expect from 'expect';
import { RESEND_EMAIL_VERIFICATION_SUCCESS } from './../../../../constants/actionTypes';
import { resendEmailVerificationSuccess } from './resendEmailVerificationSuccess';

describe('Clear resend email verification state', () => {

    it('should create an action to reset the resend email state', () => {
        const expectedAction = {
            type: RESEND_EMAIL_VERIFICATION_SUCCESS
        };
        expect(resendEmailVerificationSuccess()).toEqual(expectedAction)
    });

});
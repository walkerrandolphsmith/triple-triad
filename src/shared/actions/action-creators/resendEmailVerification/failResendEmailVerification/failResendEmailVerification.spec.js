import expect from 'expect';
import {  RESEND_EMAIL_VERIFICATION_FAILED } from './../../../../constants/actionTypes';
import { failResendEmailVerification } from './failResendEmailVerification';

describe('Clear resend email verification state', () => {

    it('should create an action to reset the resend email state', () => {
        const expectedAction = {
            type: RESEND_EMAIL_VERIFICATION_FAILED
        };
        expect(failResendEmailVerification()).toEqual(expectedAction)
    });

});
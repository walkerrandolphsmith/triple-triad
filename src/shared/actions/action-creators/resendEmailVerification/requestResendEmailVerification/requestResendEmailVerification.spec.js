import expect from 'expect';
import { RESEND_EMAIL_VERIFICATION } from './../../../../constants/actionTypes';
import { requestResendEmailVerification } from './requestResendEmailVerification';

describe('Clear resend email verification state', () => {

    it('should create an action to reset the resend email state', () => {
        const expectedAction = {
            type: RESEND_EMAIL_VERIFICATION
        };
        expect(requestResendEmailVerification()).toEqual(expectedAction)
    });

});
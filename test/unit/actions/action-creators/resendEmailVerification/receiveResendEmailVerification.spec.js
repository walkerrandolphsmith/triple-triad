import expect from 'expect';
import {  RESEND_EMAIL_VERIFICATION_SUCCESS } from './../../../../../src/shared/constants/actionTypes';
import { receiveResendEmailVerification } from './../../../../../src/shared/actions/action-creators/';

describe('Clear resend email verification state', () => {

    it('should create an action to reset the resend email state', () => {
        const expectedAction = {
            type: RESEND_EMAIL_VERIFICATION_SUCCESS
        };
        expect(receiveResendEmailVerification()).toEqual(expectedAction)
    });

});
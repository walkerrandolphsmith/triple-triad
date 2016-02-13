import expect from 'expect';
import {  RESEND_EMAIL_VERIFICATION_CLEAR } from './../../../../constants/actionTypes';
import { clearEmailVerificationState } from './clearEmailVerificationState';

describe('Clear resend email verification state', () => {

    it('should create an action to reset the resend email state', () => {
        const expectedAction = {
            type: RESEND_EMAIL_VERIFICATION_CLEAR
        };
        expect(clearEmailVerificationState()).toEqual(expectedAction)
    });

});
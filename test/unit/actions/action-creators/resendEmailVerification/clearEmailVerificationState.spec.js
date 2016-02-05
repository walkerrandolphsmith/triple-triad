import expect from 'expect';
import {  RESEND_EMAIL_VERIFICATION_CLEAR } from './../../../../../src/shared/constants/actionTypes';
import { clearEmailVerificationState } from './../../../../../src/shared/actions/action-creators/';

describe('Clear resend email verification state', () => {

    it('should create an action to reset the resend email state', () => {
        const expectedAction = {
            type: RESEND_EMAIL_VERIFICATION_CLEAR
        };
        expect(clearEmailVerificationState()).toEqual(expectedAction)
    });

});
import expect from 'expect';
import { RESEND_EMAIL_VERIFICATION_CLEAR } from './../../../../constants/actionTypes';
import { resendEmailVerificationClear } from './resendEmailVerificationClear';

describe('src/shared/actions/action-creators/resendEmailVerification/clear', () => {
    describe('Given RESEND_EMAIL_VERIFICATION_CLEAR action type', () => {
        describe('When invoking the resendEmailVerificationClear action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: RESEND_EMAIL_VERIFICATION_CLEAR
                };
                expect(resendEmailVerificationClear()).toEqual(expectedAction);
            });
        });
    });
});
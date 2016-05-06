import expect from 'expect';
import { RESEND_EMAIL_VERIFICATION_CLEAR, resendEmailVerificationClear } from './../index';

describe('src/shared/reducers/resendEmailVerification/actions/clear', () => {
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
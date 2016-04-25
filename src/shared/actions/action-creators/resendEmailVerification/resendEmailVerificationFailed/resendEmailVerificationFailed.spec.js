import expect from 'expect';
import { RESEND_EMAIL_VERIFICATION_FAILED } from './../../../../constants/actionTypes';
import { resendEmailVerificationFailed } from './resendEmailVerificationFailed';

describe('src/shared/actions/action-creators/resendEmailVerification/failed', () => {
    describe('Given RESEND_EMAIL_VERIFICATION_FAILED action type', () => {
        describe('When invoking the resendEmailVerificationFailed action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: RESEND_EMAIL_VERIFICATION_FAILED
                };
                expect(resendEmailVerificationFailed()).toEqual(expectedAction);
            });
        });
    });
});
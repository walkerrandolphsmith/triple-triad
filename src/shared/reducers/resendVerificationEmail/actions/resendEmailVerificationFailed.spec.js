import expect from 'expect';
import { RESEND_EMAIL_VERIFICATION_FAILED, resendEmailVerificationFailed } from './../index';

describe('src/shared/reducers/resendEmailVerification/actions/failed', () => {
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
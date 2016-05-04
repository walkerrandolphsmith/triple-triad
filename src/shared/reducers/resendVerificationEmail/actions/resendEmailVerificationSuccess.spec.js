import expect from 'expect';
import { RESEND_EMAIL_VERIFICATION_SUCCESS, resendEmailVerificationSuccess } from './../index';

describe('src/shared/reducers/resendEmailVerification/actions/success', () => {
    describe('Given RESEND_EMAIL_VERIFICATION_SUCCESS action type', () => {
        describe('When invoking the resendEmailVerificationSuccess action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: RESEND_EMAIL_VERIFICATION_SUCCESS
                };
                expect(resendEmailVerificationSuccess()).toEqual(expectedAction);
            });
        });
    });
});
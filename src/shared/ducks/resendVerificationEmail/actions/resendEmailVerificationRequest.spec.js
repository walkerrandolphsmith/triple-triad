import expect from 'expect';
import { RESEND_EMAIL_VERIFICATION_REQUEST, resendEmailVerificationRequest } from './../index';

describe('src/shared/reducers/resendEmailVerification/actions/request', () => {
    describe('Given RESEND_EMAIL_VERIFICATION action type', () => {
        describe('When invoking the resendEmailVerificationRequest action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: RESEND_EMAIL_VERIFICATION_REQUEST
                };
                expect(resendEmailVerificationRequest()).toEqual(expectedAction);
            });
        });
    });
});
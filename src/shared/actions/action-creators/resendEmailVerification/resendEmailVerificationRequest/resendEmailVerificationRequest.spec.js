import expect from 'expect';
import { RESEND_EMAIL_VERIFICATION } from './../../../../constants/actionTypes';
import { resendEmailVerificationRequest } from './resendEmailVerificationRequest';

describe('src/shared/actions/action-creators/resendEmailVerification/request', () => {
    describe('Given RESEND_EMAIL_VERIFICATION action type', () => {
        describe('When invoking the resendEmailVerificationRequest action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: RESEND_EMAIL_VERIFICATION
                };
                expect(resendEmailVerificationRequest()).toEqual(expectedAction);
            });
        });
    });
});
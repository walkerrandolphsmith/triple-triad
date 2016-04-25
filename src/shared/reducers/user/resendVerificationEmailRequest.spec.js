import expect from 'expect';
import { Map } from 'immutable';
import resendVerificationEmailRequest from './resendVerificationEmailRequest';

describe('src/shared/reducers/user/resendVerificationEmailRequest', () => {
    describe('Given user state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                resending: true,
                resendingSuccess: true,
                resendingFailure: false
            });
        });

        describe('When attempting to resend verification email', () => {
            let actual;
            beforeEach(() => {
                actual = resendVerificationEmailRequest(state);
            });

            it('should set resending to true', () => {
                expect(actual.get('resending')).toEqual(true);
            });

            it('should set resendingSuccess to false', () => {
                expect(actual.get('resendingSuccess')).toEqual(false);
            });

            it('should set resendingFailure to false', () => {
                expect(actual.get('resendingFailure')).toEqual(false);
            });
        });
    });
});
import expect from 'expect';
import { Map } from 'immutable';
import resendVerificationEmailFailure from './resendVerificationEmailFailure';

describe('src/shared/reducers/user/resendVerificationEmailFailure', () => {
    describe('Given user state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                resending: true,
                resendingSuccess: true,
                resendingFailure: false
            });
        });

        describe('When resending verification email fails', () => {
            let actual;
            beforeEach(() => {
                actual = resendVerificationEmailFailure(state);
            });

            it('should set resending to false', () => {
                expect(actual.get('resending')).toEqual(false);
            });

            it('should set resendingSuccess to false', () => {
                expect(actual.get('resendingSuccess')).toEqual(false);
            });

            it('should set resendingFailure to true', () => {
                expect(actual.get('resendingFailure')).toEqual(true);
            });
        });
    });
});
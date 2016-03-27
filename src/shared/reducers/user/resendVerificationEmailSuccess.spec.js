import expect from 'expect';
import { Map } from 'immutable';

import resendVerificationEmailSuccess from './resendVerificationEmailSuccess';

describe('Given user state', () => {
    let state;
    beforeEach(() => {
        state = new Map({
            resending: true,
            resendingSuccess: true,
            resendingFailure: false
        });
    });

    describe('When resending verification email is successful', () => {
        let actual;
        beforeEach(() => {
            actual = resendVerificationEmailSuccess(state)
        });

        it('should set resending to false', () => {
            expect(actual.get('resending')).toEqual(false);
        });

        it('should set resendingSuccess to true', () => {
            expect(actual.get('resendingSuccess')).toEqual(true);
        });

        it('should set resendingFailure to false', () => {
            expect(actual.get('resendingFailure')).toEqual(false);
        });
    });
});
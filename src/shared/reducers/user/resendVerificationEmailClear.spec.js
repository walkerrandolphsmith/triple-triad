import expect from 'expect';
import { Map } from 'immutable';

import resendVerificationEmailClear from './resendVerificationEmailClear';

describe('Given user state', () => {
    let state;
    beforeEach(() => {
        state = new Map({
            resending: true,
            resendingSuccess: true,
            resendingFailure: true
        });
    });

    describe('When clearing the resend verification email state', () => {
        let actual;
        beforeEach(() => {
            actual = resendVerificationEmailClear(state)
        });

        it('should set resending to false', () => {
            expect(actual.get('resending')).toEqual(false);
        });

        it('should set resendingSuccess to false', () => {
            expect(actual.get('resendingSuccess')).toEqual(false);
        });

        it('should set resendingFailure to false', () => {
            expect(actual.get('resendingFailure')).toEqual(false);
        });
    });
});
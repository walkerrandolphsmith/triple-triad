import expect from 'expect';
import { Map } from 'immutable';
import { resendVerificationEmailCleared } from './resendVerificationEmailCleared';

describe('src/shared/reducers/resendVerificationEmail/cleared', () => {
    describe('Given user state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                loading: true,
                loaded: true,
                failed: true
            });
        });

        describe('When clearing the resend verification email state', () => {
            let actual;
            beforeEach(() => {
                actual = resendVerificationEmailCleared(state);
            });

            it('should set loading to false', () => {
                expect(actual.get('loading')).toEqual(false);
            });

            it('should set loaded to false', () => {
                expect(actual.get('loaded')).toEqual(false);
            });

            it('should set failed to false', () => {
                expect(actual.get('failed')).toEqual(false);
            });
        });
    });
});
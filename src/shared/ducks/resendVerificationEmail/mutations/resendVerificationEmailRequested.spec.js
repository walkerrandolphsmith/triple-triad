import expect from 'expect';
import { Map } from 'immutable';
import { resendVerificationEmailRequested } from './resendVerificationEmailRequested';

describe('src/shared/reducers/resendVerificationEmail/mutations/resendVerificationEmailRequested', () => {
    describe('Given user state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                loading: false,
                loaded: false,
                failed: false
            });
        });

        describe('When verification email is requested', () => {
            let actual;
            beforeEach(() => {
                actual = resendVerificationEmailRequested(state);
            });

            it('should set loading to true', () => {
                expect(actual.get('loading')).toEqual(true);
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
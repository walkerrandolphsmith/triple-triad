import expect from 'expect';
import { Map } from 'immutable';
import { resendVerificationEmailSucceeded } from './resendVerificationEmailSucceeded';

describe('src/shared/reducers/user/resendVerificationEmail/Succeeded', () => {
    describe('Given user state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                loading: true,
                loaded: true,
                failed: false
            });
        });

        describe('When loading verification email is successful', () => {
            let actual;
            beforeEach(() => {
                actual = resendVerificationEmailSucceeded(state);
            });

            it('should set loading to false', () => {
                expect(actual.get('loading')).toEqual(false);
            });

            it('should set loaded to true', () => {
                expect(actual.get('loaded')).toEqual(true);
            });

            it('should set failed to false', () => {
                expect(actual.get('failed')).toEqual(false);
            });
        });
    });
});
import expect from 'expect';
import { Map } from 'immutable';
import { resendVerificationEmailFailed } from './../index';

describe('src/shared/reducers/resendVerificationEmail/mutations/failed', () => {
    describe('Given user state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                loading: true,
                loaded: true,
                failed: false
            });
        });

        describe('When loading verification email fails', () => {
            let actual;
            beforeEach(() => {
                actual = resendVerificationEmailFailed(state);
            });

            it('should set loading to false', () => {
                expect(actual.get('loading')).toEqual(false);
            });

            it('should set loaded to false', () => {
                expect(actual.get('loaded')).toEqual(false);
            });

            it('should set failed to true', () => {
                expect(actual.get('failed')).toEqual(true);
            });
        });
    });
});
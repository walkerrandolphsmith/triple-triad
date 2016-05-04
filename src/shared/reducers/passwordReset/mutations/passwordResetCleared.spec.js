import expect from 'expect';
import { Map } from 'immutable';
import { passwordResetCleared } from './../index';

describe('src/shared/reducers/passwordReset/mutations/passwordResetCleared', () => {
    describe('Given user state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                loading: true,
                loaded: true,
                failed: true
            });
        });

        describe('When clearing the password reset state', () => {
            let actual;
            beforeEach(() => {
                actual = passwordResetCleared(state);
            });

            it('should set passwordReset.loading to false', () => {
                expect(actual.get('loading')).toEqual(false);
            });

            it('should set passwordReset.loaded to false', () => {
                expect(actual.get('loaded')).toEqual(false);
            });

            it('should set passwordReset.failed to false', () => {
                expect(actual.get('failed')).toEqual(false);
            });
        });
    });
});
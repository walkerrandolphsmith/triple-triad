import expect from 'expect';
import { Map } from 'immutable';
import { passwordResetRequested } from './../index';

describe('src/shared/reducers/passwordReset/passwordResetRequested', () => {
    describe('Given user state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                loading: false,
                loaded: true,
                failed: true
            });
        });

        describe('When attempting to reset password', () => {
            let actual;
            beforeEach(() => {
                actual = passwordResetRequested(state);
            });

            it('should set passwordReset.loading to true', () => {
                expect(actual.get('loading')).toEqual(true);
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
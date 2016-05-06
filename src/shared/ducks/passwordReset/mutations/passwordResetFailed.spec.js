import expect from 'expect';
import { Map } from 'immutable';
import { passwordResetFailed } from './passwordResetFailed';

describe('src/shared/reducers/passwordReset/mutations/passwordResetFailed', () => {
    describe('Given user state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                loading: true,
                loaded: true,
                failed: false
            });
        });

        describe('When resetting password fails', () => {
            let actual;
            beforeEach(() => {
                actual = passwordResetFailed(state);
            });

            it('should set passwordReset.loading to false', () => {
                expect(actual.get('loading')).toEqual(false);
            });

            it('should set passwordReset.loaded to false', () => {
                expect(actual.get('loaded')).toEqual(false);
            });

            it('should set passwordReset.failed to true', () => {
                expect(actual.get('failed')).toEqual(true);
            });
        });
    });
});
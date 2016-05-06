import expect from 'expect';
import { Map } from 'immutable';
import { passwordResetSucceeded } from './passwordResetSucceeded';

describe('src/shared/reducers/user/passwordResetSucceeded', () => {
    describe('Given user state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                loading: true,
                loaded: false,
                failed: true
            });
        });

        describe('When resetting password is successful', () => {
            let actual;
            beforeEach(() => {
                actual = passwordResetSucceeded(state);
            });

            it('should set passwordReset.loading to false', () => {
                expect(actual.get('loading')).toEqual(false);
            });

            it('should set passwordReset.loaded to true', () => {
                expect(actual.get('loaded')).toEqual(true);
            });

            it('should set passwordReset.failed to false', () => {
                expect(actual.get('failed')).toEqual(false);
            });
        });
    });
});
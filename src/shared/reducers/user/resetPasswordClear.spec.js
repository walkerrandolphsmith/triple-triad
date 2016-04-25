import expect from 'expect';
import { Map } from 'immutable';
import resetPasswordClear from './resetPasswordClear';

describe('src/shared/reducers/user/resetPasswordClear', () => {
    describe('Given user state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                passwordReset: new Map({
                    loading: true,
                    loaded: true,
                    failed: true
                })
            });
        });

        describe('When clearing the password reset state', () => {
            let actual;
            beforeEach(() => {
                actual = resetPasswordClear(state);
            });

            it('should set passwordReset.loading to false', () => {
                expect(actual.get('passwordReset').get('loading')).toEqual(false);
            });

            it('should set passwordReset.loaded to false', () => {
                expect(actual.get('passwordReset').get('loaded')).toEqual(false);
            });

            it('should set passwordReset.failed to false', () => {
                expect(actual.get('passwordReset').get('failed')).toEqual(false);
            });
        });
    });
});
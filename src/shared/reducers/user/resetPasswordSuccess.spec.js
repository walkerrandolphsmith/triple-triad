import expect from 'expect';
import { Map } from 'immutable';

import resetPasswordSuccess from './resetPasswordSuccess';

describe('Given user state', () => {
    let state;
    beforeEach(() => {
        state = new Map({
            passwordReset: new Map({
                loading: true,
                loaded: false,
                failed: true
            })
        });
    });

    describe('When resetting password is successful', () => {
        let actual;
        beforeEach(() => {
            actual = resetPasswordSuccess(state)
        });

        it('should set passwordReset.loading to false', () => {
            expect(actual.get('passwordReset').get('loading')).toEqual(false);
        });

        it('should set passwordReset.loaded to true', () => {
            expect(actual.get('passwordReset').get('loaded')).toEqual(true);
        });

        it('should set passwordReset.failed to false', () => {
            expect(actual.get('passwordReset').get('failed')).toEqual(false);
        });
    });
});
import expect from 'expect';
import { Map } from 'immutable';

import resetPasswordFailure from './resetPasswordFailure';

describe('Given user state', () => {
    let state;
    beforeEach(() => {
        state = new Map({
            passwordReset: new Map({
                loading: true,
                loaded: true,
                failed: false
            })
        });
    });

    describe('When resetting password fails', () => {
        let actual;
        beforeEach(() => {
            actual = resetPasswordFailure(state);
        });

        it('should set passwordReset.loading to false', () => {
            expect(actual.get('passwordReset').get('loading')).toEqual(false);
        });

        it('should set passwordReset.loaded to false', () => {
            expect(actual.get('passwordReset').get('loaded')).toEqual(false);
        });

        it('should set passwordReset.failed to true', () => {
            expect(actual.get('passwordReset').get('failed')).toEqual(true);
        });
    });
});
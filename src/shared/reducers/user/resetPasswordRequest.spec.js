import expect from 'expect';
import { Map } from 'immutable';

import resetPasswordRequest from './resetPasswordRequest';

describe('Given user state', () => {
    let state;
    beforeEach(() => {
        state = new Map({
            passwordReset: new Map({
                loading: false,
                loaded: true,
                failed: true
            })
        });
    });

    describe('When attempting to reset password', () => {
        let actual;
        beforeEach(() => {
            actual = resetPasswordRequest(state);
        });

        it('should set passwordReset.loading to true', () => {
            expect(actual.get('passwordReset').get('loading')).toEqual(true);
        });

        it('should set passwordReset.loaded to false', () => {
            expect(actual.get('passwordReset').get('loaded')).toEqual(false);
        });

        it('should set passwordReset.failed to false', () => {
            expect(actual.get('passwordReset').get('failed')).toEqual(false);
        });
    });
});
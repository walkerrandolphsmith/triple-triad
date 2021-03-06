import expect from 'expect';
import { Map } from 'immutable';
import { signOutFailed } from './signOutFailed';

describe('src/shared/reducers/auth/mutations/signOutFailed', () => {
    describe('Given authentication state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                signingOut: false
            });
        });

        describe('When signing out fails', () => {
            let actual;
            let error;
            beforeEach(() => {
                error = 'a';
                actual = signOutFailed(state, {error: error});
            });

            it('should set the signingOut state to false', () => {
                expect(actual.get('signingOut')).toEqual(false);
            });

            it('should set the signOutError to the payload error', () => {
                expect(actual.get('signOutError')).toEqual(error);
            });
        });
    });
});
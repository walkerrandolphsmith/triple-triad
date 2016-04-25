import expect from 'expect';
import { Map } from 'immutable';
import signinFailure from './signinFailure';

describe('src/shared/reducers/auth/signinFailure', () => {
    describe('Given authentication state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                signingIn: false
            });
        });

        describe('When signing in fails', () => {
            let actual;
            let error;
            beforeEach(() => {
                error = 'a';
                actual = signinFailure(state, {error: error});
            });

            it('should set the signingIn state to false', () => {
                expect(actual.get('signingIn')).toEqual(false);
            });

            it('should set the username to null', () => {
                expect(actual.get('user').get('username')).toEqual(null);
            });

            it('should set the user id to true', () => {
                expect(actual.get('user').get('id')).toEqual(null);
            });

            it('should set the signInError to the payload error', () => {
                expect(actual.get('signInError')).toEqual(error);
            });
        });
    });
});
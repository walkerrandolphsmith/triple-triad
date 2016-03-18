import expect from 'expect';
import { Map } from 'immutable';

import signinFailure from './signinFailure';

describe('Given authentication state', () => {
    let state;
    beforeEach(() => {
        state = new Map({
            loading: false,
            loaded: false,
            signingIn: false,
            signingOut: false,
            signingUp: false,
            user: new Map({
                username: null,
                id: null
            })
        });
    });


    describe('When signing in fails', () => {
        let actual;
        let error;
        beforeEach(() => {
            error = 'a';
            actual = signinFailure(state, {error: error})
        });


        it('should set the signingIn state to false', () => {
            expect(actual.get('signingIn')).toEqual(true);
        });

        it('should set the username to null', () => {
            expect(actual.get('user').get('username')).toEqual(null)
        });

        it('should set the user id to true', () => {
            expect(actual.get('user').get('id')).toEqual(null);
        });

        it('should set the signingInError to the payload error', () => {
            expect(actual.get('signingInError')).toEqual(error);
        });
    });
});
import expect from 'expect';
import { Map } from 'immutable';

import signoutSuccess from './signoutSuccess';

describe('Given authentication state', () => {
    let state;
    beforeEach(() => {
        state = new Map({
            signingOut: false,
            user: new Map({
                username: null,
                id: null
            })
        });
    });


    describe('When signining out is successful', () => {
        let actual;
        beforeEach(() => {
            actual = signoutSuccess(state)
        });

        it('should set the signingOut state to false', () => {
            expect(actual.get('signingOut')).toEqual(false);
        });

        it('should set the username to null', () => {
            expect(actual.get('user').get('username')).toEqual(null);
        });

        it('should set the user id to null', () => {
            expect(actual.get('user').get('id')).toEqual(null);
        });
    });
});
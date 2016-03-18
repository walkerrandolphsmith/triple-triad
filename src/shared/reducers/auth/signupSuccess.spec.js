import expect from 'expect';
import { Map } from 'immutable';

import signupSuccess from './signupSuccess';

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


    describe('When signing up is successful', () => {
        let actual;
        let name, id;
        beforeEach(() => {
            name = 'a'; id = 'b';
            actual = signupSuccess(state, {
                user: {
                    id: id,
                    name: name
                }
            })
        });

        it('should set the signingUp state to true', () => {
            expect(actual.get('signingUp')).toEqual(false);
        });

        it('should set the username to null', () => {
            expect(actual.get('user').get('username')).toEqual(name)
        });

        it('should set the user id to true', () => {
            expect(actual.get('user').get('id')).toEqual(id);
        });
    });
});
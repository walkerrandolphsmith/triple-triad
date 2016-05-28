import expect from 'expect';
import { Map } from 'immutable';
import { signInSucceeded } from './signInSucceeded';
import { UserRecord } from './../records';

describe('src/shared/reducers/auth/mutations/signInSucceeded', () => {
    describe('Given authentication state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                signingIn: false,
                user: new UserRecord()
            });
        });

        describe('When signing in is successful', () => {
            let actual;
            let name;
            let id;
            beforeEach(() => {
                name = 'a';
                id = 'b';
                actual = signInSucceeded(state, {
                    user: {
                        id: id,
                        name: name
                    }
                });
            });

            it('should set the signingIn state to true', () => {
                expect(actual.get('signingIn')).toEqual(true);
            });

            it('should set the username to the payload name', () => {
                expect(actual.get('user').username).toEqual(name);
            });

            it('should set the user id to the payload id', () => {
                expect(actual.get('user').id).toEqual(id);
            });
        });
    });
});
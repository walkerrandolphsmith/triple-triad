import expect from 'expect';
import { Map } from 'immutable';
import { signUpSucceeded } from './signUpSucceeded';
import { UserRecord } from './../records';

describe('src/shared/reducers/auth/mutations/signUpSucceeded', () => {
    describe('Given authentication state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                signingUp: false,
                user: new UserRecord()
            });
        });

        describe('When signing up is successful', () => {
            let actual;
            let name;
            let id;
            beforeEach(() => {
                name = 'a';
                id = 'b';
                actual = signUpSucceeded(state, {
                    user: {
                        id: id,
                        name: name
                    }
                });
            });

            it('should set the signingUp state to true', () => {
                expect(actual.get('signingUp')).toEqual(false);
            });

            it('should set the username to null', () => {
                expect(actual.get('user').username).toEqual(name);
            });

            it('should set the user id to true', () => {
                expect(actual.get('user').id).toEqual(id);
            });
        });
    });
});
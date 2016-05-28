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
            let payload;
            beforeEach(() => {
                payload = {
                    user: {
                        id: '1',
                        username: 'user'
                    }
                };
                actual = signInSucceeded(state, payload);
            });

            it('should set the signingIn state to true', () => {
                expect(actual.get('signingIn')).toEqual(true);
            });

            it('should set the username to the payload name', () => {
                expect(actual.get('user').username).toEqual(payload.user.username);
            });

            it('should set the user id to the payload id', () => {
                expect(actual.get('user').id).toEqual(payload.user.id);
            });
        });
    });
});
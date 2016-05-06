import expect from 'expect';
import { Map } from 'immutable';
import { signUpFailed } from './signUpFailed';

describe('src/shared/reducers/auth/mutations/signUpFailed', () => {
    describe('Given authentication state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                signingUp: false,
                user: new Map({
                    username: null,
                    id: null
                })
            });
        });

        describe('When signing up fails', () => {
            let actual;
            let error;
            beforeEach(() => {
                error = 'a';
                actual = signUpFailed(state, {error: error});
            });

            it('should set the signingUp state to false', () => {
                expect(actual.get('signingUp')).toEqual(false);
            });

            it('should set the username to null', () => {
                expect(actual.get('user').get('username')).toEqual(null);
            });

            it('should set the user id to true', () => {
                expect(actual.get('user').get('id')).toEqual(null);
            });
        });
    });
});
import expect from 'expect';
import { AUTH_SIGNIN, signInRequest } from './../index';

describe('src/shared/reducers/auth/actions/signInRequest', () => {
    describe('Given AUTH_SIGNIN action type', () => {
        describe('When invoking the requestSignIn action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: AUTH_SIGNIN
                };
                expect(signInRequest()).toEqual(expectedAction);
            });
        });
    });
});
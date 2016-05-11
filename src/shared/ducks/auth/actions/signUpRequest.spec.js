import expect from 'expect';
import { AUTH_SIGNUP, signUpRequest } from './../index';

describe('src/shared/reducers/auth/actions/signUpRequest', () => {
    describe('Given AUTH_SIGNUP action type', () => {
        describe('When invoking the requestSignUp action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: AUTH_SIGNUP
                };
                expect(signUpRequest()).toEqual(expectedAction);
            });
        });
    });
});
import expect from 'expect';
import { AUTH_SIGNUP, requestSignUp } from './../auth';

describe('src/shared/reducers/auth/actions/requestSignUp', () => {
    describe('Given AUTH_SIGNUP action type', () => {
        describe('When invoking the requestSignUp action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: AUTH_SIGNUP
                };
                expect(requestSignUp()).toEqual(expectedAction);
            });
        });
    });
});
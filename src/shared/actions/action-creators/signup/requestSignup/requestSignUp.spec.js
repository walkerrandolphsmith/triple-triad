import expect from 'expect';
import { AUTH_SIGNUP } from './../../../../constants/actionTypes';
import { requestSignUp } from './requestSignUp';

describe('src/shared/actions/action-creators/signup/requestSignUp', () => {
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
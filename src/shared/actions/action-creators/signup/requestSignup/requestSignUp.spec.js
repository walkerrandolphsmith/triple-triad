import expect from 'expect';
import { AUTH_SIGNUP } from './../../../../constants/actionTypes';
import { requestSignUp } from './requestSignUp';

describe('REQUEST_SIGN_UP', () => {
    it('should be a function', () => {
        expect(requestSignUp).toBeA('function');
    });

    it('should create an action', () => {
        const expectedAction = {
            type: AUTH_SIGNUP
        };
        expect(requestSignUp()).toEqual(expectedAction);
    });
});
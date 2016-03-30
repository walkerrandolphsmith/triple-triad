import expect from 'expect';
import { AUTH_SIGNIN } from './../../../../constants/actionTypes';
import { requestSignIn } from './requestSignIn';

describe('REQUEST_SIGN_IN', () => {
    it('should be a function', () => {
        expect(requestSignIn).toBeA('function');
    });

    it('should create an action', () => {
        const expectedAction = {
            type: AUTH_SIGNIN
        };
        expect(requestSignIn()).toEqual(expectedAction);
    });
});
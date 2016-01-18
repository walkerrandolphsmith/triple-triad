import expect from 'expect';
import { AUTH_SIGNUP } from './../../../../src/shared/constants/action-types';
import { requestSignUp } from './../../../../src/shared/actions/action-creators/requestSignUp';

describe('REQUEST_SIGN_UP', () => {

    it('should be a function', () => {
        expect(requestSignUp).toBeA('function');
    });

    it('should create an action', () => {

        const expectedAction = {
            type: AUTH_SIGNUP
        };
        expect(requestSignUp()).toEqual(expectedAction)
    });

});
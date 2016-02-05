import expect from 'expect';
import { AUTH_SIGNOUT } from './../../../../../src/shared/constants/actionTypes';
import { requestSignOut } from './../../../../../src/shared/actions/action-creators';

describe('REQUEST_SIGN_OUT', () => {

    it('should be a function', () => {
        expect(requestSignOut).toBeA('function');
    });

    it('should create an action', () => {

        const expectedAction = {
            type: AUTH_SIGNOUT
        };
        expect(requestSignOut()).toEqual(expectedAction)
    });

});
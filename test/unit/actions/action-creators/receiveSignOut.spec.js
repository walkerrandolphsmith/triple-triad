import expect from 'expect';
import { AUTH_SIGNOUT_SUCCESS } from './../../../../src/shared/constants/actionTypes';
import { receiveSignOut } from './../../../../src/shared/actions/action-creators/receiveSignOut';

describe('ReceiveSignOut', () => {

    it('should be a function', () => {
        expect(receiveSignOut).toBeA('function');
    });

    it('should create an action to initiate signing out', () => {

        const expectedAction = {
            type: AUTH_SIGNOUT_SUCCESS
        };
        expect(receiveSignOut()).toEqual(expectedAction)
    });

});
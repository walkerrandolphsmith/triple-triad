import expect from 'expect';
import { AUTH_SIGNOUT_SUCCESS } from './../../../../constants/actionTypes';
import { receiveSignOut } from './receiveSignOut';

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
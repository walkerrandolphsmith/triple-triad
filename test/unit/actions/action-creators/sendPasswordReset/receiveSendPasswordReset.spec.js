import expect from 'expect';
import {  SEND_PASSWORD_RESET_SUCCESS } from './../../../../../src/shared/constants/actionTypes';
import { receiveSendPasswordReset } from './../../../../../src/shared/actions/action-creators/';

describe('Password reset was successful', () => {

    it('should create an action', () => {
        const expectedAction = {
            type: SEND_PASSWORD_RESET_SUCCESS
        };
        expect(receiveSendPasswordReset()).toEqual(expectedAction)
    });

});
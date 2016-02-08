import expect from 'expect';
import {  SEND_PASSWORD_RESET_CLEAR } from './../../../../../src/shared/constants/actionTypes';
import { clearSendPasswordReset } from './../../../../../src/shared/actions/action-creators/';

describe('Clear send password reset state', () => {

    it('should create an action', () => {
        const expectedAction = {
            type: SEND_PASSWORD_RESET_CLEAR
        };
        expect(clearSendPasswordReset()).toEqual(expectedAction)
    });

});
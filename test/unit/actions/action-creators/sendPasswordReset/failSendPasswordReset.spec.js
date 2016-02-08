import expect from 'expect';
import {  SEND_PASSWORD_RESET_FAILED } from './../../../../../src/shared/constants/actionTypes';
import { failSendPasswordReset } from './../../../../../src/shared/actions/action-creators/';

describe('Password reset failed', () => {

    it('should create an action', () => {
        const expectedAction = {
            type: SEND_PASSWORD_RESET_FAILED
        };
        expect(failSendPasswordReset()).toEqual(expectedAction)
    });

});
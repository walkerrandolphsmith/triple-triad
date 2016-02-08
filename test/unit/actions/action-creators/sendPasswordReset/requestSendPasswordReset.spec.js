import expect from 'expect';
import {  SEND_PASSWORD_RESET } from './../../../../../src/shared/constants/actionTypes';
import { requestSendPasswordReset } from './../../../../../src/shared/actions/action-creators/';

describe('Initiate send password reset', () => {

    it('should create an action', () => {
        const expectedAction = {
            type: SEND_PASSWORD_RESET
        };
        expect(requestSendPasswordReset()).toEqual(expectedAction)
    });

});
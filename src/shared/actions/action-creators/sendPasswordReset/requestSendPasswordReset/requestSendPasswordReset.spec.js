import expect from 'expect';
import {  SEND_PASSWORD_RESET } from './../../../../constants/actionTypes';
import { requestSendPasswordReset } from './requestSendPasswordReset';

describe('Initiate send password reset', () => {

    it('should create an action', () => {
        const expectedAction = {
            type: SEND_PASSWORD_RESET
        };
        expect(requestSendPasswordReset()).toEqual(expectedAction)
    });

});
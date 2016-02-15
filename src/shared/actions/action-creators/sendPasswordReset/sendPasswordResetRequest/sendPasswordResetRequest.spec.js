import expect from 'expect';
import {  SEND_PASSWORD_RESET } from './../../../../constants/actionTypes';
import { sendPasswordResetRequest } from './sendPasswordResetRequest';

describe('Initiate send password reset', () => {

    it('should create an action', () => {
        const expectedAction = {
            type: SEND_PASSWORD_RESET
        };
        expect(sendPasswordResetRequest()).toEqual(expectedAction)
    });

});
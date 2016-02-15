import expect from 'expect';
import {  SEND_PASSWORD_RESET_CLEAR } from './../../../../constants/actionTypes';
import { sendPasswordResetClear } from './sendPasswordResetClear';

describe('Clear send password reset state', () => {

    it('should create an action', () => {
        const expectedAction = {
            type: SEND_PASSWORD_RESET_CLEAR
        };
        expect(sendPasswordResetClear()).toEqual(expectedAction)
    });

});
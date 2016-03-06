import expect from 'expect';
import {  SEND_INVITE_REQUEST } from './../../../../constants/actionTypes';
import { sendInviteRequest } from './sendPasswordResetRequest';

describe('Initiate send invite', () => {

    it('should create an action', () => {
        const expectedAction = {
            type: SEND_INVITE_REQUEST
        };
        expect(sendInviteRequest()).toEqual(expectedAction)
    });

});
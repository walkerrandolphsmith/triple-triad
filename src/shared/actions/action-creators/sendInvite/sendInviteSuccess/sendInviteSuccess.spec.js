import expect from 'expect';
import { SEND_INVITE_SUCCESS } from './../../../../constants/actionTypes';
import { sendInviteSuccess } from './sendInviteSuccess';

describe('Invitation was successfully sent', () => {
    it('should create an action', () => {
        const expectedAction = {
            type: SEND_INVITE_SUCCESS
        };
        expect(sendInviteSuccess()).toEqual(expectedAction);
    });
});
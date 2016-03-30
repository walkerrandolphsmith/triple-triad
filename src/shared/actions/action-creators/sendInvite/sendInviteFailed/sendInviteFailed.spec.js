import expect from 'expect';
import { SEND_INVITE_FAILED } from './../../../../constants/actionTypes';
import { sendInviteFailed } from './sendInviteFailed';

describe('Invitation failed', () => {
    it('should create an action', () => {
        const expectedAction = {
            type: SEND_INVITE_FAILED
        };
        expect(sendInviteFailed()).toEqual(expectedAction);
    });
});
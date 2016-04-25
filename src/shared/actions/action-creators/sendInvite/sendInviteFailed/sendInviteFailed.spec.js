import expect from 'expect';
import { SEND_INVITE_FAILED } from './../../../../constants/actionTypes';
import { sendInviteFailed } from './sendInviteFailed';

describe('src/shared/actions/action-creators/sendInvite/sendInviteFailed', () => {
    describe('Given SEND_INVITE_FAILED action type', () => {
        describe('When invoking the sendInviteFailed action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SEND_INVITE_FAILED
                };
                expect(sendInviteFailed()).toEqual(expectedAction);
            });
        });
    });
});
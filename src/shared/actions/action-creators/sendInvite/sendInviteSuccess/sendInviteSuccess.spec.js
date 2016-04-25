import expect from 'expect';
import { SEND_INVITE_SUCCESS } from './../../../../constants/actionTypes';
import { sendInviteSuccess } from './sendInviteSuccess';

describe('src/shared/actions/action-creators/sendInvite/sendInviteSuccess', () => {
    describe('Given SEND_INVITE_SUCCESS action type', () => {
        describe('When invoking the sendInviteSuccess action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SEND_INVITE_SUCCESS
                };
                expect(sendInviteSuccess()).toEqual(expectedAction);
            });
        });
    });
});
import expect from 'expect';
import { SEND_INVITE_REQUEST } from './../../../../constants/actionTypes';
import { sendInviteRequest } from './sendInviteRequest';

describe('src/shared/actions/action-creators/sendInvite/sendInviteRequest', () => {
    describe('Given SEND_INVITE_REQUEST action type', () => {
        describe('When invoking the sendInviteRequest action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SEND_INVITE_REQUEST
                };
                expect(sendInviteRequest()).toEqual(expectedAction);
            });
        });
    });
});
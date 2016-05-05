import expect from 'expect';
import { SEND_INVITE_FAILED, sendInviteFailure } from './../index';

describe('src/shared/reducers/game/actions/sendInviteFailure', () => {
    describe('Given SEND_INVITE_FAILED action type', () => {
        describe('When invoking the sendInviteFailed action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SEND_INVITE_FAILED
                };
                expect(sendInviteFailure()).toEqual(expectedAction);
            });
        });
    });
});
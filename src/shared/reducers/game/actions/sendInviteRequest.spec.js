import expect from 'expect';
import { SEND_INVITE_REQUEST, sendInviteRequest } from './../index';

describe('src/shared/reducers/game/actions/sendInviteRequest', () => {
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
import expect from 'expect';
import { SHOW_CURRENT_PLAYER_MESSAGE, showCurrentPlayerMessage } from './../index';

describe('src/shared/reducers/game/actions/showCurrentPlayerMessage', () => {
    describe('Given SHOW_CURRENT_PLAYER_MESSAGE action type and payload', () => {
        let payload;
        beforeEach(() => {
            payload = {
                currentPlayer: 'currentPlayerId'
            }
        });
        describe('When invoking the showCurrentPlayerMessage action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SHOW_CURRENT_PLAYER_MESSAGE,
                    payload: payload
                };
                expect(showCurrentPlayerMessage(payload.currentPlayer)).toEqual(expectedAction);
            });
        });
    });
});
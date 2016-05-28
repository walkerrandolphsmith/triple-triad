import expect from 'expect';
import { SET_CURRENT_PLAYER, setCurrentPlayer } from './../index';

describe('src/shared/reducers/game/actions/setCurrentPlayer', () => {
    describe('Given SET_CURRENT_PLAYER action type and payload', () => {
        let payload;
        beforeEach(() => {
            payload = {
                currentPlayer: 'id'
            }
        });
        describe('When invoking the setCurrentPlayer action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SET_CURRENT_PLAYER,
                    payload: payload
                };
                expect(setCurrentPlayer(payload.currentPlayer)).toEqual(expectedAction);
            });
        });
    });
});
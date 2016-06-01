import expect from 'expect';
import { SET_OPPONENT, setOpponent } from './../index';

describe('src/shared/reducers/game/actions/setOpponent', () => {
    describe('Given SET_OPPONENT action type and payload', () => {
        let payload;
        beforeEach(() => {
            payload = {
                playerId: 'id'
            }
        });
        describe('When invoking the setOpponent action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SET_OPPONENT,
                    payload: payload
                };
                expect(setOpponent(payload.playerId)).toEqual(expectedAction);
            });
        });
    });
});
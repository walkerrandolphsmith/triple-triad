import expect from 'expect';
import { SET_CURRENT_GAME, setCurrentGame } from './../index';

describe('src/shared/reducers/game/actions/setCurrentGame', () => {
    describe('Given SET_CURRENT_GAME action type and payload', () => {
        let payload;
        beforeEach(() => {
            payload = {
                id: 'id'
            }
        });
        describe('When invoking the setCurrentGame action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SET_CURRENT_GAME,
                    payload: payload
                };
                expect(setCurrentGame(payload.id)).toEqual(expectedAction);
            });
        });
    });
});
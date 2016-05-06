import expect from 'expect';
import { GET_GAME_REQUEST, getGameRequest } from './../index';

describe('src/shared/reducers/game/actions/getGameRequest', () => {
    describe('Given GET_GAME_REQUEST action type', () => {
        describe('When invoking the getGameRequest action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: GET_GAME_REQUEST
                };
                expect(getGameRequest()).toEqual(expectedAction);
            });
        });
    });
});
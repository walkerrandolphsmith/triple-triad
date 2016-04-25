import expect from 'expect';
import { GET_GAME_REQUEST } from './../../../../constants/actionTypes';
import { getGameRequest } from './getGameRequest';

describe('src/shared/actions/action-creators/getGame/getGameRequest', () => {
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
import expect from 'expect';
import { GET_GAME_REQUEST } from './../../../../constants/actionTypes';
import { getGameRequest } from './getGameRequest';

describe('src/shared/actions/action-creators/getGame/getGameRequest', () => {
    describe('When initiating retrieval of a game', () => {
        it('should return an action with type GET_GAME_REQUEST', () => {
            const expectedAction = {
                type: GET_GAME_REQUEST,
                payload: {}
            };
            expect(getGameRequest()).toEqual(expectedAction);
        });
    });
});
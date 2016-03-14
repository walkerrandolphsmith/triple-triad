import expect from 'expect';
import { GET_GAME_FAILED } from './../../../../constants/actionTypes';
import { getGameFailed } from './getGameFailed';

describe('When retrieving a game is unsuccessful', () => {

    it('should return an action with type GET_GAME_FAILED', () => {
        const expectedAction = {
            type: GET_GAME_FAILED,
            payload: {

            }
        };
        expect(getGameFailed()).toEqual(expectedAction);
    });
});
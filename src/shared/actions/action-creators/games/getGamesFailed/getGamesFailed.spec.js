import expect from 'expect';
import { GET_GAMES_FAILED } from './../../../../constants/actionTypes';
import { getGamesFailed } from './getGamesFailed';

describe('src/shared/actions/action-creators/games/getGamesFailed', () => {
    it('should create an action indicate fetching games failed', () => {
        const expectedAction = {
            type: GET_GAMES_FAILED
        };
        expect(getGamesFailed()).toEqual(expectedAction);
    });
});
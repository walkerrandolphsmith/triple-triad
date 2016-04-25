import expect from 'expect';
import { GET_GAMES_SUCCESS } from './../../../../constants/actionTypes';
import { getGamesSuccess } from './getGamesSuccess';

describe('src/shared/actions/action-creators/games/getGamesSuccess', () => {
    it('should create an action to indicate games were successfully fetched', () => {
        let games = [0, 1, 2];
        const expectedAction = {
            type: GET_GAMES_SUCCESS,
            payload: {
                games: games
            }
        };
        expect(getGamesSuccess(games)).toEqual(expectedAction);
    });
});
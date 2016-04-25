import expect from 'expect';
import { GET_GAMES_REQUEST } from './../../../../constants/actionTypes';
import { getGamesRequest } from './getGamesRequest';

describe('src/shared/actions/action-creators/games/getGamesRequest', () => {
    it('should create an action to initiate fetching of games', () => {
        const expectedAction = {
            type: GET_GAMES_REQUEST
        };
        expect(getGamesRequest()).toEqual(expectedAction);
    });
});
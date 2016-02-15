import expect from 'expect';
import { REQUEST_GAMES } from './../../../../constants/actionTypes';
import { getGamesRequest } from './getGamesRequest';

describe('REQUEST_GAMES action creator', () => {

    it('should create an action to initiate fetching of games', () => {
        const expectedAction = {
            type: REQUEST_GAMES
        };
        expect(getGamesRequest()).toEqual(expectedAction)
    });

});
import expect from 'expect';
import { REQUEST_GAMES } from './../../../../constants/actionTypes';
import { requestGames } from './requestGames';

describe('REQUEST_GAMES action creator', () => {

    it('should create an action to initiate fetching of games', () => {
        const expectedAction = {
            type: REQUEST_GAMES
        };
        expect(requestGames()).toEqual(expectedAction)
    });

});
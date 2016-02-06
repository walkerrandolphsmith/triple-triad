import expect from 'expect';
import { REQUEST_GAMES } from './../../../../../src/shared/constants/actionTypes';
import { requestGames } from './../../../../../src/shared/actions/action-creators/';

describe('REQUEST_GAMES action creator', () => {

    it('should create an action to initiate fetching of games', () => {
        const expectedAction = {
            type: REQUEST_GAMES
        };
        expect(requestGames()).toEqual(expectedAction)
    });

});
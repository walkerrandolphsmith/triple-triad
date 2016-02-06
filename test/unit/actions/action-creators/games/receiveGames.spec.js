import expect from 'expect';
import { RECEIVE_GAMES } from './../../../../../src/shared/constants/actionTypes';
import { receiveGames } from './../../../../../src/shared/actions/action-creators/';

describe('RECEIVE_GAMES action creator', () => {

    it('should create an action to indicate games were successfully fetched', () => {
        let games = [0,1,2];

        const expectedAction = {
            type: RECEIVE_GAMES,
            payload: {
                games: games
            }
        };
        expect(receiveGames(games)).toEqual(expectedAction)
    });

});
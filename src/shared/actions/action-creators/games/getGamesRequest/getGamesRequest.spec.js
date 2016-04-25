import expect from 'expect';
import { GET_GAMES_REQUEST } from './../../../../constants/actionTypes';
import { getGamesRequest } from './getGamesRequest';

describe('src/shared/actions/action-creators/games/getGamesRequest', () => {
    describe('Given GET_GAMES_REQUEST action type', () => {
        describe('When invoking the getGamesRequest action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: GET_GAMES_REQUEST
                };
                expect(getGamesRequest()).toEqual(expectedAction);
            });
        });
    });
});
import expect from 'expect';
import { GET_GAMES_REQUEST, getGamesRequest } from './../index';

describe('src/shared/reducers/game/actions/getGamesRequest', () => {
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
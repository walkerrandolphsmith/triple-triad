import expect from 'expect';
import { GET_GAMES_SUCCESS, getGamesSuccess } from './../index';

describe('src/shared/reducers/game/actions/getGamesSuccess', () => {
    describe('Given GET_GAMES_SUCCESS action type', () => {
        let games;
        let expectedAction;
        beforeEach(() => {
            games = [0, 1, 2];
            expectedAction = {
                type: GET_GAMES_SUCCESS,
                payload: {
                    games: games
                }
            };
        });

        describe('When invoking the getGamesSuccess action creator', () => {
            it('should create an action', () => {
                expect(getGamesSuccess(games)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload games field', () => {
                expect(getGamesSuccess(games).payload.games).toEqual(games);
            });
        });
    });
});
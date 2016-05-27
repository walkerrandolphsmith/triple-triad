import expect from 'expect';
import { Map, List } from 'immutable';
import { getGamesSucceeded } from './getGamesSucceeded';
import { GameRecord, CardRecord } from './../../../constants/records';

describe('src/shared/reducers/game/mutations/getGamesSucceeded', () => {
    describe('Given games state and a payload containing a game', () => {
        let state;
        let payload;
        let games;
        beforeEach(() => {
            let game = new GameRecord({ id: 20 });
            games = [
                game.toJS()
            ];
            state = new Map({
                getGames: new Map({
                    loading: false,
                    loaded: false,
                    failed: false
                }),
                games: new List([])
            });
            payload = { games: games };
        });

        describe('When getting all games is successful', () => {
            let actual;
            beforeEach(() => {
                actual = getGamesSucceeded(state, payload);
            });

            it('should set the getGames loading state to false', () => {
                expect(actual.get('getGames').get('loading')).toEqual(false);
            });

            it('should set the getGames loaded state to true', () => {
                expect(actual.get('getGames').get('loaded')).toEqual(true);
            });

            it('should set the getGames failed state to false', () => {
                expect(actual.get('getGames').get('failed')).toEqual(false);
            });

            it('should set the games to the result of getGamesFromPayload', () => {
                expect(actual.get('games').first().id).toEqual(games[0].id);
            });
        });
    });
});
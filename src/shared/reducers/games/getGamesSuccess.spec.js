import expect from 'expect';
import { Map, List } from 'immutable';

import getGamesSuccess from './getGamesSuccess';

describe('Given games state and a payload containing a game', () => {
    let state, payload;
    beforeEach(() => {
        state = new Map({
            getGames: new Map({
                loading: false,
                loaded: false,
                failed: false
            }),
            games: new List([])
        });
        payload = {
            games: ['game1', 'game2', 'etc']
        }
    });

    describe('When getting all games is successful', () => {
        let actual;
        beforeEach(() => {
            actual = getGamesSuccess(state, payload)
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

        it('should set the games in payload to the games list', () => {
            expect(actual.get('games').toJS()).toEqual(payload.games);
        });
    });
});
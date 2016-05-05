import expect from 'expect';
import { Map, List } from 'immutable';
import { createGameSucceeded } from './../index';

describe('src/shared/reducers/game/mutations/createGameSucceeded', () => {
    describe('Given games state and a payload containing a game', () => {
        let state;
        let payload;
        beforeEach(() => {
            state = new Map({
                newGame: new Map({
                    loading: false,
                    loaded: false,
                    failed: false
                }),
                games: new List([])
            });
            payload = {
                game: 'i am a game'
            };
        });

        describe('When creating a new game is successful', () => {
            let actual;
            beforeEach(() => {
                actual = createGameSucceeded(state, payload);
            });

            it('should set the newGame loading state to false', () => {
                expect(actual.get('newGame').get('loading')).toEqual(false);
            });

            it('should set the newGame loaded state to true', () => {
                expect(actual.get('newGame').get('loaded')).toEqual(true);
            });

            it('should set the newGame failed state to false', () => {
                expect(actual.get('newGame').get('failed')).toEqual(false);
            });

            it('should add the game in payload to the games list', () => {
                expect(actual.get('games').first()).toEqual(payload.game);
            });
        });
    });
});
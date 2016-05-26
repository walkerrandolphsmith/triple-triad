import expect from 'expect';
import { List, Map } from 'immutable';
import { getGameSucceeded } from './getGameSucceeded';

describe('src/shared/reducers/game/mutations/getGameSucceeded', () => {
    describe('Given game state and a payload containing a game id that is in the games list', () => {
        let state;
        let payload;
        let gameId;
        let game;
        beforeEach(() => {
            gameId = 20;
            game = {
                id: gameId,
                deck: [{ id: 0, rank: { top: 0, bottom: 0, left: 0, right: 0 } }],
                owner: 0,
                opponent: 1,
                phase: 'phase',
                accepted: false,
                currentPlayer: 2,
                selectedCard: 2,
                selectedPiece: 2
            };
            state = new Map({
                games: new List([
                    new Map({
                        id: gameId
                    })
                ])
            });
            payload = {
                game: game
            };
        });

        describe('When getting a game was successful', () => {
            let actual;
            beforeEach(() => {
                actual = getGameSucceeded(state, payload);
            });

            it('should overwrite the existing game with the payload data', () => {
               expect(actual.get('games').first().toJS()).toEqual(game); 
            });
        });
    });

    describe('Given game state and a payload containing a game id that is not in the games list', () => {
        let state;
        let payload;
        let gameId;
        let game;
        beforeEach(() => {
            gameId = 20;
            game = {
                id: gameId,
                deck: [{ id: 0, rank: { top: 0, bottom: 0, left: 0, right: 0 } }],
                owner: 0,
                opponent: 1,
                phase: 'phase',
                accepted: false,
                currentPlayer: 2,
                selectedCard: 2,
                selectedPiece: 2
            };
            state = new Map({
                games: new List([])
            });
            payload = {
                game: game
            };
        });

        describe('When getting a game was successful', () => {
            let actual;
            beforeEach(() => {
                actual = getGameSucceeded(state, payload);
            });

            it('should append a game in the games list from payload data', () => {
                expect(actual.get('games').first().toJS()).toEqual(game);
            });
        });
    });
});
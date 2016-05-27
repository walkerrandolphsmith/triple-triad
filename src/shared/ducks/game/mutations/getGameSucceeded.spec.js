import expect from 'expect';
import { List, Map } from 'immutable';
import { getGameSucceeded } from './getGameSucceeded';
import { GameRecord } from './../../../constants/records';

describe('src/shared/reducers/game/mutations/getGameSucceeded', () => {
    describe('Given game state and a payload containing a game id that is in the games list', () => {
        let state;
        let payload;
        let gameId;
        let game;
        beforeEach(() => {
            gameId = 20;
            game = new GameRecord({ id: gameId });
            state = new Map({
                games: new List([
                    new GameRecord({ id: gameId })
                ])
            });
            payload = {
                game: game.toJS()
            };
        });

        describe('When getting a game was successful', () => {
            let actual;
            beforeEach(() => {
                actual = getGameSucceeded(state, payload);
            });

            it('should overwrite the existing game with the payload data', () => {
               expect(actual.get('games').first().id).toEqual(game.id); 
            });
        });
    });

    describe('Given game state and a payload containing a game id that is not in the games list', () => {
        let state;
        let payload;
        let game;
        beforeEach(() => {
            game = new GameRecord({ id: 20 });
            state = new Map({
                games: new List([
                    new GameRecord({ id: 21 })
                ])
            });
            payload = {
                game: game.toJS()
            };
        });

        describe('When getting a game was successful', () => {
            let actual;
            beforeEach(() => {
                actual = getGameSucceeded(state, payload);
            });

            it('should append a game in the games list from payload data', () => {
                expect(actual.get('games').get(1).id).toEqual(game.id);
            });
        });
    });
});
import expect from 'expect';
import { Map, List } from 'immutable';
import { GameRecord } from './../../game/records';
import { currentPlayerSet } from './currentPlayerSet';

describe('src/shared/reducers/game/mutations/currentPlayerSet', () => {
    describe('Given game state and a payload containing the current player', () => {
        let state;
        let payload;
        beforeEach(() => {
            const currentGameId = 20;
            state = new Map({
                gameRoute: currentGameId,
                games: new List([
                    new GameRecord({ id: currentGameId })
                ])
            });
            payload = {
                currentPlayer: 20
            };
        });

        describe('When currentPlayerSet is invoked', () => {
            let actual;
            beforeEach(() => {
                actual = currentPlayerSet(state, payload);
            });

            it('should set the current games current player to the payloads current player', () => {
                expect(actual.get('games').first().currentPlayer).toEqual(payload.currentPlayer);
            });
        });
    });
});
import expect from 'expect';
import { Map, List } from 'immutable';
import { GameRecord } from './../../game/records';
import { opponentSet } from './opponentSet';

describe('src/shared/reducers/game/mutations/opponentSet', () => {
    describe('Given game state and a payload containing a player id', () => {
        let state;
        let payload;
        beforeEach(() => {
            const currentGameId = 20;
            state = new Map({
                gameRoute: currentGameId,
                games: new List([
                    new GameRecord({ id: currentGameId, opponent: 21 })
                ])
            });
            payload = {
                playerId: 20
            };
        });

        describe('When opponentSet is invoked', () => {
            let actual;
            beforeEach(() => {
                actual = opponentSet(state, payload);
            });

            it('should set the current games opponent to the payloads playerId', () => {
                expect(actual.get('games').first().opponent).toEqual(payload.playerId);
            });
        });
    });
});
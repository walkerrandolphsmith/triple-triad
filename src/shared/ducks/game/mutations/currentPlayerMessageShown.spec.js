import expect from 'expect';
import { Map, List } from 'immutable';
import { GameRecord } from './../../game/records';
import { currentPlayerMessageShown } from './currentPlayerMessageShown';

describe('src/shared/reducers/game/mutations/currentPlayerMessageShown', () => {
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

        describe('When currentPlayerMessageShown is invoked', () => {
            let actual;
            beforeEach(() => {
                actual = currentPlayerMessageShown(state, payload);
            });

            it('should set the current games currentPlayerMessageShow to the payloads current player', () => {
                expect(actual.get('games').first().currentPlayerMessage).toEqual(payload.currentPlayer);
            });
        });
    });
});
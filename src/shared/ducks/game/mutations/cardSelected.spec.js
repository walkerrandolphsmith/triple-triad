import expect from 'expect';
import { Map, List } from 'immutable';
import { cardSelected } from './cardSelected';
import { GameRecord } from './../../../ducks/game/records';

describe('src/shared/reducers/game/mutations/cardSelected', () => {
    describe('Given game state and a payload containing the id of a card', () => {
        let state;
        let payload;
        beforeEach(() => {
            let gameId = 20;
            let game = new GameRecord({
                id: gameId,
                selectedCard: -1
            });
            state = new Map({
                gameRoute: gameId,
                games: new List([game])
            });
            payload = {
                id: 20
            };
        });

        describe('When selecting a card', () => {
            let actual;
            beforeEach(() => {
                actual = cardSelected(state, payload);
            });

            it('should set the selectedCard to the id in the payload', () => {
                expect(actual.get('games').first().selectedCard).toEqual(payload.id);
            });
        });
    });
});
import expect from 'expect';
import { Map, List } from 'immutable';
import selectCard from './selectCard';

describe('src/shared/reducers/game/selectCard', () => {
    describe('Given game state and a payload containing the id of a card', () => {
        let state;
        let payload;
        beforeEach(() => {
            let gameId = 20;
            let game = new Map({
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
                actual = selectCard(state, payload);
            });

            it('should set the selectedCard to the id in the payload', () => {
                expect(actual.get('games').first().get('selectedCard')).toEqual(payload.id);
            });
        });
    });
});
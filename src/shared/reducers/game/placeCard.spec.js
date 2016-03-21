import expect from 'expect';
import { Map, List } from 'immutable';

import endAiTurn from './endAiTurn';

describe('Given game state and a payload containing the id and owner of a card', () => {
    let state, payload;
    beforeEach(() => {
        let selectedCard = 20;
        state = new Map({
            deck: new List([
                new Map({
                    id: 20, owner: 2, boardIndex: -1
                })
            ]),
            selectedCard: selectedCard,
            selectedPiece: -1
        });
        payload = {
            id: selectedCard,
            owner: 1
        }
    });

    describe('When placing a card', () => {
        let actual;
        beforeEach(() => {
            actual = endAiTurn(state, payload)
        });

        it('should get the card in the deck with an index equal to the selected card and set its boardIndex to the selectedPiece', () => {
            expect(actual.get('deck').first().get('boardIndex')).toEqual(state.get('selectedPiece'));
        });
    });
});
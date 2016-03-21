import expect from 'expect';
import { Map, List } from 'immutable';

import updateBoard from './updateBoard';

describe('Given game state and a payload containing the index and owner of a card', () => {
    let state, payload;
    beforeEach(() => {
        let index = 20;
        state = new Map({
            deck: new List([
                new Map({
                    id: 20, owner: 2, boardIndex: index
                })
            ]),
            selectedCard: -1,
            selectedPiece: -1
        });
        payload = {
            index: index,
            owner: 1
        }
    });

    describe('When updating the board', () => {
        let actual;
        beforeEach(() => {
            actual = updateBoard(state, payload)
        });

        it('should set the owner of the card whose boardIndex is equal to the payload owner', () => {
            expect(actual.get('deck').first().get('owner')).toEqual(payload.owner);
        });
    });
});
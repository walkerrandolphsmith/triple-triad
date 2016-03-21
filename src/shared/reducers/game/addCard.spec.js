import expect from 'expect';
import { Map, List } from 'immutable';

import addCard from './addCard';

describe('Given game state and payload containing id and owner of a card', () => {
    let state, payload;
    beforeEach(() => {
        state = new Map({
            deck: new List([
                new Map({
                    id: 20, owner: 2
                })
            ])
        });
        payload = {
            id: 20,
            owner: 1
        }
    });

    describe('When adding a card to player ownership', () => {
        let actual;
        beforeEach(() => {
            actual = addCard(state, payload)
        });

        it('should set a card, in the deck with id equal to payload id, owner to the payload owner ', () => {
            expect(actual.get('deck').first().get('owner')).toEqual(payload.owner);
        });
    });
});
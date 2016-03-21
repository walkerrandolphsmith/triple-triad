import expect from 'expect';
import { Map } from 'immutable';

import selectCard from './selectCard';

describe('Given game state and a payload containing the id of a card', () => {
    let state, payload;
    beforeEach(() => {
        state = new Map({
            selectedCard: -1
        });
        payload = {
            id: 20
        }
    });

    describe('When selecting a card', () => {
        let actual;
        beforeEach(() => {
            actual = selectCard(state, payload)
        });

        it('should set the selectedCard to the id in the payload', () => {
            expect(actual.get('selectedCard')).toEqual(payload.id);
        });
    });
});
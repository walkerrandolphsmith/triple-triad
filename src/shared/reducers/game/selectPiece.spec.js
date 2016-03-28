import expect from 'expect';
import { Map } from 'immutable';

import selectPiece from './selectPiece';

describe('Given game state and a payload containing the index of a piece', () => {
    let state;
    let payload;
    beforeEach(() => {
        state = new Map({
            selectedPiece: -1
        });
        payload = {
            index: 20
        };
    });

    describe('When selecting a piece', () => {
        let actual;
        beforeEach(() => {
            actual = selectPiece(state, payload);
        });

        it('should set the selectedPiece to the index in the payload', () => {
            expect(actual.get('selectedPiece')).toEqual(payload.index);
        });
    });
});
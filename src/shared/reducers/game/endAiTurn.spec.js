import expect from 'expect';
import { Map } from 'immutable';

import endAiTurn from './endAiTurn';

describe('Given game state', () => {
    let state;
    beforeEach(() => {
        state = new Map({ });
    });

    describe('When ending Ai turn', () => {
        let actual;
        beforeEach(() => {
            actual = endAiTurn(state);
        });

        it('should return the given state', () => {
            expect(actual).toEqual(state);
        });
    });
});
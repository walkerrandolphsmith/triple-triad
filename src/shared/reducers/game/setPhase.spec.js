import expect from 'expect';
import { Map } from 'immutable';

import setPhase from './setPhase';

describe('Given game state and a payload containing the phase of the game', () => {
    let state, payload;
    beforeEach(() => {
        state = new Map({
            phase: 'phase1'
        });
        payload = {
            phase: 'phase2'
        }
    });

    describe('When setting the game phase', () => {
        let actual;
        beforeEach(() => {
            actual = setPhase(state, payload)
        });

        it('should set the phase to the phase in the payload', () => {
            expect(actual.get('phase')).toEqual(payload.phase);
        });
    });
});
import expect from 'expect';
import { Map } from 'immutable';
import { filteredPhase } from './filteredPhase';

describe('src/shared/reducers/filters/mutations/filteredPhase', () => {
    describe('Given filters state', () => {
        let state;
        let payload;
        let phase = 'winner';
        beforeEach(() => {
            state = new Map({
                phase: 'all'
            });
            payload = {
                phase: phase
            }
        });

        describe('When changing phase filter', () => {
            let actual;
            beforeEach(() => {
                actual = filteredPhase(state, payload);
            });

            it('should set the phase filter', () => {
                expect(actual.get('phase')).toEqual(phase);
            });
        });
    });
});
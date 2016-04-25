import expect from 'expect';
import { SERVER, SET_PHASE } from './../../../constants/actionTypes';
import { setPhase } from './setPhase';

describe('src/shared/actions/action-creators/setPhase', () => {
    describe('Given SET_PHASE action type', () => {
        let phase;
        let expectedAction;
        beforeEach(() => {
            phase = 'phase1';
            expectedAction = {
                type: SERVER + SET_PHASE,
                payload: {
                    phase: phase
                }
            };
        });

        describe('When invoking the setPhase action creator', () => {
            it('should create an action', () => {
                expect(setPhase(phase)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload phase field', () => {
                expect(setPhase(phase).payload.phase).toEqual(phase);
            });
        });
    });
});
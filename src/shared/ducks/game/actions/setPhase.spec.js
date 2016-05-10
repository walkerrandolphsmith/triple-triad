import expect from 'expect';
import { SET_PHASE, setPhase } from './../index';

describe('src/shared/reducers/game/actions/setPhase', () => {
    describe('Given SET_PHASE action type', () => {
        let phase;
        let expectedAction;
        beforeEach(() => {
            phase = 'phase1';
            expectedAction = {
                type: SET_PHASE,
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
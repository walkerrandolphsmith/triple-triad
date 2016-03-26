import expect from 'expect';
import { SERVER, SET_PHASE } from './../../../constants/actionTypes';
import { setPhase } from './setPhase';

describe('SET_PHASE', () => {

    it('should create an action to set the phase of a round', () => {
        const expectedAction = {
            type: SERVER + SET_PHASE,
            payload: {
                phase: 'phaseLabel'
            }
        };
        expect(setPhase('phaseLabel')).toEqual(expectedAction);
    });

});
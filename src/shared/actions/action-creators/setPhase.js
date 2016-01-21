import { SET_PHASE } from './../../constants/actionTypes';

export function setPhase(phase) {
    return {
        type: SET_PHASE,
        payload: {
            phase: phase
        }
    }
}

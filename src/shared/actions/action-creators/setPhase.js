import { SET_PHASE } from './../../constants/action-types';

export function setPhase(phase) {
    return {
        type: SET_PHASE,
        payload: {
            phase: phase
        }
    }
}

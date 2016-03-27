import { SERVER, SET_PHASE } from './../../../constants/actionTypes';

export function setPhase(phase) {
    return {
        type: SERVER + SET_PHASE,
        payload: {
            phase: phase
        }
    };
}

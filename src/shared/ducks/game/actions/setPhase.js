import { SET_PHASE } from './../index';

export const setPhase = phase => ({
    type: SET_PHASE,
    payload: {
        phase: phase
    }
});
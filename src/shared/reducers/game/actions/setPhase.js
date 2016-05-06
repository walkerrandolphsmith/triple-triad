import SERVER from './../../../constants/socketActionPrefix';
import { SET_PHASE } from './../index';
export const setPhase = phase => ({
    type: SERVER + SET_PHASE,
    payload: {
        phase: phase
    }
});
import { FILTER_PHASE } from './../index';

export const filterPhase = phase => ({
   type: FILTER_PHASE,
   payload: {
      phase: phase
   }
});
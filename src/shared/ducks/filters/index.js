import { Map } from 'immutable';

import { filteredWinnerType } from './mutations/filteredWinnerType';
import { filteredPhase } from './mutations/filteredPhase';
import { closedShown } from './mutations/closedShown';

export const FILTER_WINNER_TYPE = 'FILTER_WINNER_TYPE';
export const FILTER_PHASE = 'FILTER_PHASE';
export const SHOW_CLOSED = 'SHOW_CLOSED';

export { filterWinnerType } from './actions/filterWinnerType';
export { filterPhase } from './actions/filterPhase';
export { showClosed } from './actions/showClosed';

const INITIAL_STATE = new Map({
    showClosed: true,
    winnerType: 'all',
    phase: 'all'
});

export default function filters(state = INITIAL_STATE, action = {}) {
    const { type, payload } = action;

    switch(type) {
        case FILTER_WINNER_TYPE: return filteredWinnerType(state, payload);
        case FILTER_PHASE: return filteredPhase(state, payload);
        case SHOW_CLOSED: return closedShown(state, payload);
        default: return state;
    }
};
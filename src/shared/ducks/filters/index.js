import { Map } from 'immutable';

import { filteredWinnerType } from './mutations/filteredWinnerType';
import { closedShown } from './mutations/closedShown';

export const FILTER_WINNER_TYPE = 'FILTER_WINNER_TYPE';
export const SHOW_CLOSED = 'SHOW_CLOSED';

export { filterWinnerType } from './actions/filterWinnerType';
export { showClosed } from './actions/showClosed';

const INITIAL_STATE = new Map({
    showClosed: false,
    winnerType: 'all'
});

export default function filters(state = INITIAL_STATE, action = {}) {
    const { type, payload } = action;

    switch(type) {
        case FILTER_WINNER_TYPE: return filteredWinnerType(state, payload);
        case SHOW_CLOSED: return closedShown(state, payload);
        default: return state;
    }
};
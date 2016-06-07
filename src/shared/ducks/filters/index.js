import { Map } from 'immutable';

import { closedShown } from './mutations/closedShown';

export const SHOW_CLOSED = 'SHOW_CLOSED';

export { showClosed } from './actions/showClosed';

const INITIAL_STATE = new Map({
    showClosed: false
});

export default function filters(state = INITIAL_STATE, action = {}) {
    const { type, payload } = action;

    switch(type) {
        case SHOW_CLOSED: return closedShown(state, payload);
        default: return state;
    }
};
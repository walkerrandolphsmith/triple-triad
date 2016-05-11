import { Map } from 'immutable';

import { refSet } from './mutations/refSet';

export const SET_FIREBASE_REF = 'SET_FIREBASE_REF';
export { setRef } from './actions/setRef';
export { listenToGames } from './thunks/listenToGames';
export { listenToAuth } from './thunks/listenToAuth';


const INITIAL_STATE = new Map({
    ref: ''
});

export default function(state=INITIAL_STATE, action={ }) {
    let { type, payload } = action;
    switch (type) {
        case SET_FIREBASE_REF: return refSet(state,payload);
        default: return state;
    }
}
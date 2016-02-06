import { Map, List } from 'immutable';
import {
    GET_GAMES_FAILED,
    RECEIVE_GAMES,
    REQUEST_GAMES
} from './../constants/actionTypes';

const INITIAL_STATE = new Map({
    loading: false,
    loaded: false,
    failed: false,
    games: new List([])
});

export default function user(state = INITIAL_STATE, action = {}) {

    const { type, payload } = action;

    switch (type) {
        case GET_GAMES_FAILED: return getGamesFailed(state, payload);
        case RECEIVE_GAMES: return receiveGames(state, payload);
        case REQUEST_GAMES: return requestGames(state, payload);

        default: return state;
    }
}

function getGamesFailed(state, payload) {
    state = state.set('failed', true);
    state = state.set('loaded', false);
    return state.set('loading', false);
}

function receiveGames(state, payload) {
    state = state.set('failed', false);
    state = state.set('loading', false);
    state = state.set('loaded', true);
    return state.set('games', new List(payload.games));
}

function requestGames(state, payload) {
    state = state.set('failed', false);
    state = state.set('loading', true);
    return state.set('loaded', false);
}
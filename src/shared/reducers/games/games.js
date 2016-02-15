import { Map, List } from 'immutable';
import {
    GET_GAMES_FAILED,
    GET_GAMES_REQUEST,
    GET_GAMES_SUCCESS,
    REQUEST_NEW_GAME,
    RECEIVE_NEW_GAME,
    CREATE_FAILED
} from './../../constants/actionTypes';

const INITIAL_STATE = new Map({
    getGames: new Map({
        loading: false,
        loaded: false,
        failed: false
    }),
    newGame: new Map({
       loading: false,
       loaded: false,
       failed: false
    }),
    games: new List([])
});

export default function user(state = INITIAL_STATE, action = {}) {

    const { type, payload } = action;

    switch (type) {
        case GET_GAMES_FAILED: return getGamesFailed(state, payload);
        case GET_GAMES_SUCCESS: return receiveGames(state, payload);
        case GET_GAMES_REQUEST: return requestGames(state, payload);
        case REQUEST_NEW_GAME: return requestNewGame(state, payload);
        case RECEIVE_NEW_GAME: return receiveNewGame(state, payload);
        case CREATE_FAILED: return createFailed(state, payload);
        default: return state;
    }
}

function getGamesFailed(state, payload) {
    state = state.setIn('getGames.failed'.split('.'), true);
    state = state.setIn('getGames.loaded'.split('.'), false);
    return state.setIn('getGames.loading'.split('.'), false);
}

function receiveGames(state, payload) {
    state = state.setIn('getGames.failed'.split('.'), false);
    state = state.setIn('getGames.loading'.split('.'), false);
    state = state.setIn('getGames.loaded'.split('.'), true);
    return state.set('games', new List(payload.games));
}

function requestGames(state, payload) {
    state = state.setIn('getGames.failed'.split('.'), false);
    state = state.setIn('getGames.loading'.split('.'), true);
    return state.setIn('getGames.loaded'.split('.'), false);
}

function requestNewGame(state, payload) {
    state = state.setIn('newGame.failed'.split('.'), false);
    state = state.setIn('newGame.loading'.split('.'), true);
    return state.setIn('newGame.loaded'.split('.'), false);
}

function receiveNewGame(state, payload) {
    state = state.setIn('newGame.failed'.split('.'), false);
    state = state.setIn('newGame.loading'.split('.'), false);
    state = state.setIn('newGame.loaded'.split('.'), true);
    return state.set('games', state.get('games').push(payload.game));
}

function createFailed(state, payload) {
    state = state.setIn('newGame.failed'.split('.'), true);
    state = state.setIn('newGame.loading'.split('.'), false);
    return state.setIn('newGame.loaded'.split('.'), false);
}
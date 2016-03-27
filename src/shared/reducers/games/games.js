import { Map, List } from 'immutable';
import {
    GET_GAMES_FAILED,
    GET_GAMES_REQUEST,
    GET_GAMES_SUCCESS,
    CREATE_GAME_FAILED,
    CREATE_GAME_REQUEST,
    CREATE_GAME_SUCCESS
} from './../../constants/actionTypes';

import createGameFailed from './createGameFailed';
import createGameRequest from './createGameRequest';
import createGameSuccess from './createGameSuccess';
import getGamesFailed from './getGamesFailed';
import getGamesRequest from './getGamesRequest';
import getGamesSuccess from './getGamesSuccess';

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
        case GET_GAMES_REQUEST: return getGamesRequest(state, payload);
        case GET_GAMES_SUCCESS: return getGamesSuccess(state, payload);
        case CREATE_GAME_FAILED: return createGameFailed(state, payload);
        case CREATE_GAME_REQUEST: return createGameRequest(state, payload);
        case CREATE_GAME_SUCCESS: return createGameSuccess(state, payload);
        default: return state;
    }
}
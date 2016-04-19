import { Map, List } from 'immutable';

import {
    GET_GAMES_FAILED,
    GET_GAMES_REQUEST,
    GET_GAMES_SUCCESS,
    CREATE_GAME_FAILED,
    CREATE_GAME_REQUEST,
    CREATE_GAME_SUCCESS,
    GET_GAME_SUCCESS,
    SET_PHASE,
    ADD_CARD,
    SELECT_CARD,
    SELECT_PIECE,
    PLACE_CARD,
    UPDATE_BOARD,
    START_AI_TURN,
    END_AI_TURN,
    RESET_GAME
} from './../../constants/actionTypes';

import createGameFailed from './createGameFailed';
import createGameRequest from './createGameRequest';
import createGameSuccess from './createGameSuccess';
import getGamesFailed from './getGamesFailed';
import getGamesRequest from './getGamesRequest';
import getGamesSuccess from './getGamesSuccess';
import addCard from './addCard';
import endAiTurn from './endAiTurn';
import placeCard from './placeCard';
import resetGame from './resetGame';
import seedGame from './seedGame';
import selectCard from './selectCard';
import selectPiece from './selectPiece';
import setPhase from './setPhase';
import startAiTurn from './startAiTurn';
import updateBoard from './updateBoard';

const INITIAL_STATE = new Map({
    gameRoute: -1,
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

export default function reducer(state = INITIAL_STATE, action = {}) {
    let { type, payload } = action;

    switch(type) {
        case GET_GAMES_FAILED: return getGamesFailed(state, payload);
        case GET_GAMES_REQUEST: return getGamesRequest(state, payload);
        case GET_GAMES_SUCCESS: return getGamesSuccess(state, payload);
        case CREATE_GAME_FAILED: return createGameFailed(state, payload);
        case CREATE_GAME_REQUEST: return createGameRequest(state, payload);
        case CREATE_GAME_SUCCESS: return createGameSuccess(state, payload);
        
        case GET_GAME_SUCCESS: return seedGame(state, payload);
        case SET_PHASE: return setPhase(state, payload);
        case ADD_CARD: return addCard(state, payload);
        case SELECT_CARD: return selectCard(state, payload);
        case SELECT_PIECE: return selectPiece(state, payload);
        case PLACE_CARD: return placeCard(state, payload);
        case UPDATE_BOARD: return updateBoard(state, payload);
        case START_AI_TURN: return startAiTurn(state);
        case END_AI_TURN: return endAiTurn(state);
        case RESET_GAME: return resetGame(state);
        default: return state;
    }
}
import { List, Map } from 'immutable';

import { aiTurnEnded } from './mutations/aiTurnEnded';
import { aiTurnStarted } from './mutations/aiTurnStarted';
import { boardUpdated } from './mutations/boardUpdated';
import { cardAdded } from './mutations/cardAdded';
import { cardPlaced } from './mutations/cardPlaced';
import { cardSelected } from './mutations/cardSelected';
import { createGameFailed } from './mutations/createGameFailed';
import { createGameRequested } from './mutations/createGameRequested';
import { createGameSucceeded } from './mutations/createGameSucceeded';
import { currentPlayerMessageShown } from './mutations/currentPlayerMessageShown';
import { currentPlayerSet } from './mutations/currentPlayerSet';
import { gameDeletionFailed } from './mutations/gameDeletionFailed';
import { gameDeletionRequested } from './mutations/gameDeletionRequested';
import { gameDeletionSucceeded } from './mutations/gameDeletionSucceeded';
import { getGamesFailed } from './mutations/getGamesFailed';
import { getGamesRequested } from './mutations/getGamesRequested';
import { getGamesSucceeded } from './mutations/getGamesSucceeded';
import { getGameRequested } from './mutations/getGamesRequested';
import { getGameSucceeded } from './mutations/getGameSucceeded';
import { phaseSet } from './mutations/phaseSet';
import { pieceSelected } from './mutations/pieceSelected';

export const ADD_CARD = 'ADD_CARD';
export const CREATE_GAME_FAILED = 'CREATE_GAME_FAILED';
export const CREATE_GAME_REQUEST = 'CREATE_GAME_REQUEST';
export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS';
export const DELETE_GAME_FAILURE = 'DELETE_GAME_FAILURE';
export const DELETE_GAME_REQUEST = 'DELETE_GAME_REQUEST';
export const DELETE_GAME_SUCCESS = 'DELETE_GAME_SUCCESS';
export const END_AI_TURN = 'END_AI_TURN';
export const GET_GAME_FAILED = 'GET_GAME_FAILED';
export const GET_GAME_REQUEST = 'GET_GAME_REQUEST';
export const GET_GAME_SUCCESS = 'GET_GAME_SUCCESS';
export const GET_GAMES_FAILED = 'GET_GAMES_FAILED';
export const GET_GAMES_REQUEST = 'GET_GAMES_REQUEST';
export const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS';
export const PLACE_CARD = 'PLACE_CARD';
export const START_AI_TURN = 'START_AI_TURN';
export const SELECT_CARD = 'SELECT_CARD';
export const SELECT_PIECE = 'SELECT_PIECE';
export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const SHOW_CURRENT_PLAYER_MESSAGE = 'SHOW_CURRENT_PLAYER_MESSAGE';
export const SEND_INVITE_REQUEST = 'SEND_INVITE_REQUEST';
export const SEND_INVITE_SUCCESS = 'SEND_INVITE_SUCCESS';
export const SEND_INVITE_FAILED = 'SEND_INVITE_FAILED';
export const SET_PHASE = 'SET_PHASE';
export const UPDATE_BOARD = 'UPDATE_BOARD';

export { addCard } from './actions/addCard';
export { deleteGameFailure } from './actions/deleteGameFailure';
export { deleteGameRequest } from './actions/deleteGameRequest';
export { deleteGameSuccess } from './actions/deleteGameSuccess';
export { endAiTurn } from './actions/endAiTurn';
export { createGameFailure } from './actions/createGameFailure';
export { createGameRequest } from './actions/createGameRequest';
export { createGameSuccess } from './actions/createGameSuccess';
export { getGameFailure } from './actions/getGameFailure';
export { getGameRequest } from './actions/getGameRequest';
export { getGameSuccess } from './actions/getGameSuccess';
export { getGamesFailure } from './actions/getGamesFailure';
export { getGamesRequest } from './actions/getGamesRequest';
export { getGamesSuccess } from './actions/getGamesSuccess';
export { placeCard } from './actions/placeCard';
export { startAiTurn } from './actions/startAiTurn';
export { selectCard } from './actions/selectCard';
export { selectPiece } from './actions/selectPiece';
export { sendInviteFailure } from './actions/sendInviteFailure';
export { sendInviteRequest } from './actions/sendInviteRequest';
export { sendInviteSuccess } from './actions/sendInviteSuccess';
export { setCurrentPlayer } from './actions/setCurrentPlayer';
export { setPhase } from './actions/setPhase';
export { showCurrentPlayerMessage } from './actions/showCurrentPlayerMessage';
export { updateBoard } from './actions/updateBoard';

export { aiTurn } from './thunks/aiTurn';
export { completeTurn } from './thunks/completeTurn';
export { createGame } from './thunks/createGame';
export { deleteGame } from './thunks/deleteGame';
export { endPhase } from './thunks/endPhase';
export { getGame } from './thunks/getGame';
export { getGames } from './thunks/getGames';
export { selectNextCard } from './thunks/selectNextCard';
export { selectNextPiece } from './thunks/selectNextPiece';
export { handleDown } from './thunks/handleDown';
export { handleEnter } from './thunks/handleEnter';
export { handleEscape } from './thunks/handleEscape';
export { handleLeft } from './thunks/handleLeft';
export { handleRight } from './thunks/handleRight';
export { handleUp } from './thunks/handleUp';
export { sendInvite } from './thunks/sendInvite';
export { setHand } from './thunks/setHand';
export { setHands } from './thunks/setHands';

export { availableDeckSelector } from './selectors';
export { boardSelector } from './selectors';
export { currentGameSelector } from './selectors';
export { deckSelector } from './selectors';
export { handSelector } from './selectors';
export { isFullHandSelector } from './selectors';
export { opponentHandSelector } from './selectors';
export { scoreSelector } from './selectors';
export { validPiecesSelector } from './selectors';
export { winnerSelector } from './selectors';

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
    gameRoute: -1,
    games: new List([]),
    shiftFactor: 0
});

export default function(state = INITIAL_STATE, action = {}) {
    let { type, payload } = action;

    switch(type) {
        case ADD_CARD: return cardAdded(state, payload);
        case CREATE_GAME_FAILED: return createGameFailed(state, payload);
        case CREATE_GAME_REQUEST: return createGameRequested(state, payload);
        case CREATE_GAME_SUCCESS: return createGameSucceeded(state, payload);
        case DELETE_GAME_FAILURE: return gameDeletionFailed(state, payload);
        case DELETE_GAME_REQUEST: return gameDeletionRequested(state, payload);
        case DELETE_GAME_SUCCESS: return gameDeletionSucceeded(state, payload);
        case END_AI_TURN: return aiTurnEnded(state);
        case GET_GAME_SUCCESS: return getGameSucceeded(state, payload);
        case GET_GAMES_FAILED: return getGamesFailed(state, payload);
        case GET_GAMES_REQUEST: return getGamesRequested(state, payload);
        case GET_GAMES_SUCCESS: return getGamesSucceeded(state, payload);
        case PLACE_CARD: return cardPlaced(state, payload);
        case SELECT_CARD: return cardSelected(state, payload);
        case SELECT_PIECE: return pieceSelected(state, payload);
        case SET_CURRENT_PLAYER: return currentPlayerSet(state, payload);
        case SET_PHASE: return phaseSet(state, payload);
        case SHOW_CURRENT_PLAYER_MESSAGE: return currentPlayerMessageShown(state, payload);
        case START_AI_TURN: return aiTurnStarted(state);
        case UPDATE_BOARD: return boardUpdated(state, payload);
        default: return state;
    }
}
import { fromJS, Map, List } from 'immutable';
import { createSelector } from 'reselect';
import SERVER from './../../constants/socketActionPrefix';
import WINNER from './../../constants/winner';

import { aiTurnEnded } from './mutations/aiTurnEnded';
import { aiTurnStarted } from './mutations/aiTurnStarted';
import { boardUpdated } from './mutations/boardUpdated';
import { cardAdded } from './mutations/cardAdded';
import { cardPlaced } from './mutations/cardPlaced';
import { cardSelected } from './mutations/cardSelected';
import { createGameFailed } from './mutations/createGameFailed';
import { createGameRequested } from './mutations/createGameRequested';
import { createGameSucceeded } from './mutations/createGameSucceeded';
import { gameDeletionFailed } from './mutations/gameDeletionFailed';
import { gameDeletionRequested } from './mutations/gameDeletionRequested';
import { gameDeletionSucceeded } from './mutations/gameDeletionSucceeded';
import { gameReset } from './mutations/gameReset';
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
export const RESET_GAME = 'RESET_GAME';
export const START_AI_TURN = 'START_AI_TURN';
export const SELECT_CARD = 'SELECT_CARD';
export const SELECT_PIECE = 'SELECT_PIECE';
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
export { resetGame } from './actions/resetGame';
export { startAiTurn } from './actions/startAiTurn';
export { selectCard } from './actions/selectCard';
export { selectPiece } from './actions/selectPiece';
export { sendInviteFailure } from './actions/sendInviteFailure';
export { sendInviteRequest } from './actions/sendInviteRequest';
export { sendInviteSuccess } from './actions/sendInviteSuccess';
export { setPhase } from './actions/setPhase';
export { updateBoard } from './actions/updateBoard';

export { aiTurn } from './thunks/aiTurn';
export { applyFlips } from './thunks/applyFlips';
export { createGame } from './thunks/createGame';
export { deleteGame } from './thunks/deleteGame';
export { endPhase } from './thunks/endPhase';
export { getGame } from './thunks/getGame';
export { getGames } from './thunks/getGames';
export { getNextCardForHand } from './thunks/getNextCardForHand';
export { getNextSelectedCard } from './thunks/getNextSelectedCard';
export { getNextSelectedPiece } from './thunks/getNextSelectedPiece';
export { handleDown } from './thunks/handleDown';
export { handleEnter } from './thunks/handleEnter';
export { handleEscape } from './thunks/handleEscape';
export { handleLeft } from './thunks/handleLeft';
export { handleRight } from './thunks/handleRight';
export { handleUp } from './thunks/handleUp';
export { playerTakesTurn } from './thunks/playerTakesTurn';
export { selectedPieceByClick } from './thunks/selectedPieceByClick';
export { sendInvite } from './thunks/sendInvite';
export { setHand } from './thunks/setHand';
export { setHands } from './thunks/setHands';

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
        case RESET_GAME: return gameReset(state);
        case SELECT_CARD: return cardSelected(state, payload);
        case SELECT_PIECE: return pieceSelected(state, payload);
        case SET_PHASE: return phaseSet(state, payload);
        case START_AI_TURN: return aiTurnStarted(state);
        case UPDATE_BOARD: return boardUpdated(state, payload);
        default: return state;
    }
}

/**
 *
 * SELECTORS
 * 
 */

export const getAvailableDeck = (deck, owner) => {
    let unique = {};
    let distinct = [];
    let i;
    for(i = 0; i < deck.size; i++) {
        if(!unique[deck.get(i).get('name')] && deck.get(i).get('owner') !== owner) {
            distinct.push(deck.get(i));
            unique[deck.get(i).get('name')] = true;
        }
    }
    return new List(distinct);
};

export const getBoard = (deck) => deck.filter(card => card.get('boardIndex') >= 0);

export const currentGameSelector = state => state.game.get('games').find(game => game.get('id') === state.game.get('gameRoute'));

export const getHand = (deck, owner) => deck.filter(card => card.get('owner') === owner && card.get('boardIndex') < 0);

export const getIsFullHand = hand => hand.size >= 5;

export const getScore = (blue, red) => ({ blue: blue, red: red });

export const getScoreForOwner = (deck, owner) => {
    return deck.filter(card => card.get('owner') === owner).size;
};

export const getValidPieces = board => {
    let boardIndexes = board.map(card => card.get('boardIndex'));
    return new List([0, 1, 2, 3, 4, 5, 6, 7, 8]).filter(index => boardIndexes.indexOf(index) < 0);
};

export const getWinner = (score, validPieces) => {
    let winner = WINNER.NONE;
    if(validPieces.size <= 0) {
        if(score.blue === score.red) {
            winner = WINNER.TIE;
        } else {
            winner = score.blue > score.red ? WINNER.BLUE : WINNER.RED;
        }
    }
    return winner;
};

const playerSelector = () => 1;
const opponentSelector = () => 2;
const shiftFactorSelector = state => state.game.get('shiftFactor');

export const deckSelector = createSelector(
    [currentGameSelector],
    game => game.get('deck')
);

export const availableDeckSelector = createSelector(
    [deckSelector, opponentSelector],
    getAvailableDeck
);

export const boardSelector = createSelector(
    [deckSelector],
    getBoard
);

export const handSelector = createSelector(
    [deckSelector, playerSelector],
    getHand
);

export const opponentHandSelector = createSelector(
    [deckSelector, opponentSelector],
    getHand
);

const blueScoreSelector = createSelector(
    [deckSelector, playerSelector],
    getScoreForOwner
);

const redScoreSelector = createSelector(
    [deckSelector, opponentSelector],
    getScoreForOwner
);

export const scoreSelector = createSelector(
    [blueScoreSelector, redScoreSelector],
    getScore
);

export const validPiecesSelector = createSelector(
    [boardSelector],
    getValidPieces
);

export const winnerSelector = createSelector(
    [scoreSelector, validPiecesSelector],
    getWinner
);

export const isFullHandSelector = createSelector(
    [handSelector],
    getIsFullHand
);
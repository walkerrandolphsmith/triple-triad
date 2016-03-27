import { Map } from 'immutable';
import deck from './../../constants/deck';
import {
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
    gameId: -1,
    owner: -1,
    opponent: -1,
    accepted: false,
    currentPlayer: -1,
    deck: deck,
    selectedCard: -1,
    selectedPiece: -1,
    phase: 'settingsSelection'
});

export default function reducer(state = INITIAL_STATE, action = {}) {
    let { type, payload } = action;

    switch(type) {
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
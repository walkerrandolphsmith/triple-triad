import { Map, List } from 'immutable';
import deck from './../constants/deck';
import {
    SET_PHASE,
    ADD_CARD,
    SELECT_CARD,
    SELECT_PIECE,
    PLACE_CARD,
    UPDATE_BOARD,
    START_AI_TURN,
    END_AI_TURN,
    RESET_GAME
} from './../constants/actionTypes';

const INITIAL_STATE = new Map({
  deck: deck,
  selectedCard: -1,
  selectedPiece: -1,
  phase: 'settingsSelection'
});

export default function reducer(state = INITIAL_STATE, action = {}) {

  let {type, payload} = action;

  switch(type){
    case SET_PHASE: return setPhase(state, payload);
    case ADD_CARD: return addCard(state, payload);
    case SELECT_CARD: return selectCard(state, payload);
    case SELECT_PIECE: return selectPiece(state, payload);
    case PLACE_CARD: return placeCard(state, payload);
    case UPDATE_BOARD: return updateBoard(state, payload);
    case START_AI_TURN: return startAITurn(state);
    case END_AI_TURN: return endAiTurn(state);
    case RESET_GAME: return resetGame(state);
  }

  return state;
}

function setPhase(state, payload) {
    return state.set('phase', payload.phase);
}

function addCard(state, payload){
    let deck = state.get('deck');

    deck = deck.update(
      deck.findIndex(
          card => card.get('id') === payload.id
      ),
      card => card.set("owner", payload.owner)
    );
    return state.set('deck', deck);
}

function selectCard(state, payload){
    return state.set('selectedCard', payload.id);
}

function selectPiece(state, payload){
    return state.set('selectedPiece', payload.index);
}

function placeCard(state, payload) {
    let deck = state.get('deck');

    deck = deck.update(
        deck.findIndex(
            card => card.get('id') === state.get('selectedCard')
        ),
        card => card.set('boardIndex', state.get('selectedPiece'))
    );

    return state.set('deck', deck);

}

function updateBoard(state, payload) {
    let deck =  state.get('deck');

    deck = deck.update(
        deck.findIndex(
            card => card.get('boardIndex') === payload.index
        ),
        card => card.set('owner', payload.owner)
    );

    return state.set('deck', deck);
}

function startAITurn(state){
    return state;
}

function endAiTurn(state) {
    return state;
}

function resetGame(state) {
    return INITIAL_STATE;
}
import { fromJS } from 'immutable';
import _ from 'lodash';
import deck from './../constants/deck';
import * as types from './../constants/action-types';

const INITIAL_STATE = new fromJS({
  deck: deck,
  selectedCard: -1,
});

export default function reducer(state = INITIAL_STATE, action) {

  let {type, payload} = action;

  switch(type){
    case types.ADD_CARD: return addCard(state, payload);
    case types.SELECT_CARD: return selectCard(state, payload);
    case types.SELECT_PIECE: return selectPiece(state, payload);
    case types.UPDATE_BOARD: return updateBoard(state, payload);
    case types.START_AI_TURN: return startAITurn(state);
    case types.END_AI_TURN: return endAiTurn(state);
    case types.RESET_GAME: return resetGame(state);
  }

  return state;
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

}

function selectPiece(state, payload) {
    let deck = state.get('deck');

    deck = deck.update(
        deck.findIndex(
            card => card.get('id') === state.get('selectedCard')
        ),
        card => card.set('boardIndex', payload.index)
    );

    state = state.set('deck', deck);
    return state.set('selectedCard', -1);
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
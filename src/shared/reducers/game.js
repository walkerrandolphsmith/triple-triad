import { fromJS } from 'immutable';
import _ from 'lodash';
import deck from './../constants/deck';
import * as types from './../constants/action-types';

const INITIAL_STATE = new fromJS({
  deck: deck,
  ownerType: {
    none: 0,
    player: 1,
    opponent: 2
  },
  selectedCard: -1,
  board: [null, null, null, null, null, null, null, null, null]
});

export default function reducer(state = INITIAL_STATE, action) {

  let {type, payload} = action;

  switch(type){
    case types.ADD_CARD: return addCard(state, payload);
    case types.REMOVE_CARD: return removeCard(state, payload);
    case types.SELECT_CARD: return state.set('selectedCard', payload.id);
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
  let owner =  payload.owner || state.get('ownerType').get('none');

  deck = deck.update(
      deck.findIndex(
          card => card.get('id') === payload.id
      ),
      card => card.set("owner", owner)
  );

  return state.set('deck', deck);
}

function removeCard(state, payload){

  let deck = state.get('deck');
  let none = state.get('ownerType').get('none');

  deck = deck.update(
      deck.findIndex(
          card => card.get('id') === payload.id
      ),
      card => card.set('owner', none)
  );

  return state.set('deck', deck);
}

function selectPiece(state, payload) {

  let card = state.get('deck').find(
      card => card.get('id') === state.get('selectedCard')
  );

  let board = state.get('board').setIn([payload.index], card);

  state = state.set('board', board);

  return state.set('selectedCard', -1);

}

function updateBoard(state, payload) {

  let board =  state.get('board');

  board = board.update(
      payload.index,
      card => card.set('owner', payload.owner)
  );

  return state.set('board', board);
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
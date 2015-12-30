import Immutable from 'immutable';
import _ from 'lodash';
import deck from './../constants/deck';
import * as types from './../constants/action-types';

const INITIAL_STATE = new Immutable.Map({
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

  var newState = _.cloneDeep(state);

  let cardToAdd = _.find(newState.deck, {id: payload.id});

  cardToAdd.owner = payload.owner;

  return newState;
}

function removeCard(state, payload){

  var newState = _.cloneDeep(state);

  let cardToAdd = _.find(newState.deck, {id: payload.id});

  cardToAdd.owner = newState.ownerType.none;

  return newState;
}

function selectCard(state, payload) {

  var newState = _.cloneDeep(state);

  newState.selectedCard = payload.id;

  return newState;
}

function selectPiece(state, payload) {

  let newState = _.cloneDeep(state);

  let card = _.find(newState.deck, {id: newState.selectedCard});

  newState.board[payload.index] = card;

  newState.selectedCard = -1;

  return newState;
}

function updateBoard(state, payload) {
  let newState = _.cloneDeep(state);

  let {index, owner} = payload;

  newState.board[index].owner = owner;

  return newState;
}

function startAITurn(state){
  return state;
}

function endAiTurn(state) {
  return state;
}

function resetGame(state) {
  return INITIAL_STATE.toJS();
}
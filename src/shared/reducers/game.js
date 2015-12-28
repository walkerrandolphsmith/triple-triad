import Immutable from 'immutable';
import _ from 'lodash';
import deck from './../constants/deck';
import * as types from './../constants/action-types';

const INITIAL_STATE = new Immutable.Map({
  step: 0,
  deck: deck,
  hand: [],
  opponentHand: [],
  selectedCard: -1, //index of hand
  board: [null, null, null, null, null, null, null, null, null]
});

export default function reducer(state = INITIAL_STATE, action) {

  let {type, payload} = action;

  switch(type){
    case types.NEXT_STEP: return nextStep(state);
    case types.SET_HAND: return setHands(state, payload);
    case types.ADD_CARD: return addCard(state, payload);
    case types.REMOVE_CARD: return removeCard(state, payload);
    case types.SELECT_CARD: return selectCard(state, payload);
    case types.SELECT_PIECE: return selectPiece(state, payload);
    case types.UPDATE_BOARD: return updateBoard(state, payload);
    case types.START_AI_TURN: return startAITurn(state);
    case types.END_AI_TURN: return endAiTurn(state);
  }

  return state;
}

function nextStep(state) {

  var newState = _.cloneDeep(state);

  newState.step++;

  return newState;
}

function setHands(state, payload){
  var newState = _.cloneDeep(state);

  let cards = _.cloneDeep(_.sample(newState.deck, 5));
  cards.forEach(card => {
    card.owner = payload.owner
  });
  newState[payload.hand] = cards;

  return newState;
}

function addCard(state, payload){

  var newState = _.cloneDeep(state);


  let cardToAdd = newState.deck[payload.index];

  newState.deck = newState.deck.filter(card => {
    return card !== cardToAdd;
  });

  newState.hand = _.union(newState.hand, [cardToAdd]);

  return newState;
}

function removeCard(state, payload){

  var newState = _.cloneDeep(state);

  let cardToRemove = newState.hand[payload.index];

  newState.hand = newState.hand.filter(card => {
    return card !== cardToRemove;
  });

  newState.deck = _.union(newState.deck, [cardToRemove]);

  return newState;
}

function selectCard(state, payload) {

  var newState = _.cloneDeep(state);

  newState.selectedCard = payload.index;

  return newState;
}

function selectPiece(state, payload) {

  let newState = _.cloneDeep(state);

  let theHand = payload.isPlayer ? 'hand' : 'opponentHand';
  var cardToPlaceOnBoard = newState[theHand].splice(newState.selectedCard, 1);
  newState.selectedCard = -1;

  newState.board[payload.index] = cardToPlaceOnBoard[0];

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

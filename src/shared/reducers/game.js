import Immutable from 'immutable';
import _ from 'lodash';
import deck from './../constants/deck';
import * as types from './../constants/action-types';

const INITIAL_STATE = new Immutable.Map({
  step: 0,
  deck: deck,
  settings: {
    randomHand: false,
    multiplayer: false,
    visibleHand: false
  },
  availableDeck: deck,
  hand: [],
  opponentHand: selectRandomHand(deck),
  handSelected: false,
  turn: {
    currentPlayer: 0,
    selectedCard: -1, //index of hand
    canSelectPiece: false,
    validPieces: [0,1,2,3,4,5,6,7,8]
  },
  board: [null, null, null, null, null, null, null, null, null]
});

export default function reducer(state = INITIAL_STATE, action) {

  let {type, payload} = action;

  switch(type){
    case types.NEXTSTEP: return nextStep(state);
    case types.UPDATESETTINGS: return updateSettings(state, payload);
    case types.ADDCARD: return addCard(state, payload);
    case types.REMOVECARD: return removeCard(state, payload);
    case types.SELECTCARD: return selectCard(state, payload);
    case types.SELECTPIECE: return selectPiece(state, payload);
  }

  return state;
}

function nextStep(state) {

  var newState = _.cloneDeep(state);

  if(newState.step === 0 && newState.settings.randomHand){
    let hand = selectRandomHand(newState.availableDeck);
    newState.availableDeck = _.difference(newState.availableDeck, hand);
    newState.hand = hand;
    newState.step++;
  }

  newState.step++;

  return newState;
}

function selectRandomHand(deck){
  return _.sample(deck, 5)
}

function updateSettings(state, payload){

  var newState = _.cloneDeep(state);

  newState.settings[payload.setting] = payload.isChecked;

  return newState;
}

function addCard(state, payload){

  var newState = _.cloneDeep(state);

  let hand = _.union(newState.hand, newState.availableDeck.splice(payload.index,1));
  newState.hand = hand;
  newState.handSelected = hand.length >= 5;

  return newState;
}

function removeCard(state, payload){

  var newState = _.cloneDeep(state);

  let availableDeck = _.union(newState.availableDeck, newState.hand.splice(payload.index,1));
  newState.availableDeck = availableDeck;
  newState.handSelected = newState.hand.length >= 5;

  return newState;
}

function selectCard(state, payload) {

  var newState = _.cloneDeep(state);

  newState.turn.selectedCard = payload.index;
  newState.turn.canSelectPiece = true;

  return newState;
}

function selectPiece(state, payload) {

  let newState = _.cloneDeep(state);

  newState.turn.validPieces = _.difference(newState.turn.validPieces, [payload.index]);
  newState.turn.canSelectPiece = false;

  var cardToPlaceOnBoard = newState.hand.splice(newState.turn.selectedCard, 1);
  newState.selectedCard = -1;

  newState.board[payload.index] = _.assign(cardToPlaceOnBoard[0], {owner: newState.turn.currentPlayer});

  return newState;
}
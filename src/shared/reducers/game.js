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
  board: [null, null, null, null, null, null, null, null, null],
  score: {
    blue: 5,
    red: 5,
    winner: false
  }
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

  let theHand = newState.turn.currentPlayer === 1 ? 'opponentHand' : 'hand';
  var cardToPlaceOnBoard = newState[theHand].splice(newState.turn.selectedCard, 1);
  newState.selectedCard = -1;

  newState.board[payload.index] = _.assign(cardToPlaceOnBoard[0], {owner: newState.turn.currentPlayer});

  newState.board = applyRules(newState.board, payload.index);

  if(newState.turn.currentPlayer === 0 && newState.turn.validPieces.length > 0)
    newState = AI(newState);

  newState = calculateScore(newState);

  return newState;
}

function applyRules(board, i) {

  const row = i / 3;
  const column = i % 3;

  let card = board[i];

  if(row > 0)
    flipCard(card, board[i-3], 'top', 'bottom');
  if(row < 2)
    flipCard(card, board[i+3], 'bottom', 'top');
  if(column > 0)
    flipCard(card, board[i-1], 'left', 'right');
  if(column < 2)
    flipCard(card, board[i+1], 'right', 'left');

  return board;
}

function flipCard(card, otherCard, attackDirection, defenseDirection){
  if(otherCard && card.owner !== otherCard.owner){
    if(card.rank[attackDirection] > otherCard.rank[defenseDirection]){
      otherCard.owner = card.owner;
    }else if(card.rank[attackDirection] < otherCard.rank[defenseDirection]){
      card.owner = otherCard.owner;
    }else{
      //no-op
    }
  }
}

function AI(state){
  //selected card and selected piece should be determined more inteligently
  state.turn.currentPlayer = 1;

  let selectedCard = 0;
  state = selectCard(state, {index: selectedCard});

  let selectedPiece = _.sample(state.turn.validPieces);
  state.turn.validPieces = _.difference(state.turn.validPieces, [selectedPiece]);

  state = selectPiece(state, {index: selectedPiece});

  state.turn.currentPlayer = 0;
  return state;
}

function calculateScore(state){


  let blueScore = 0;
  let redScore = 0;

  for(var i = 0; i < state.board.length; i ++){
    if(state.board[i] === null) continue;
    state.board[i].owner === 0 ? blueScore++ : redScore++;
  }

  blueScore += state.hand.length;
  redScore += state.opponentHand.length;

  state.score.blue = blueScore;
  state.score.red = redScore;

  return state;
}

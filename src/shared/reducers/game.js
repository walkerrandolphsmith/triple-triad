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
  opponentHand: [],
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
    case types.NEXT_STEP: return nextStep(state);
    case types.UPDATE_SETTINGS: return updateSettings(state, payload);
    case types.ADD_CARD: return addCard(state, payload);
    case types.REMOVE_CARD: return removeCard(state, payload);
    case types.SELECT_CARD: return selectCard(state, payload);
    case types.SELECT_PIECE: return selectPiece(state, payload);
    case types.APPLY_RULES: return applyRules(state, payload);
    case types.AI_TURN: return aiTurn(state, payload);
    case types.CALCULATE_SCORE: return calculateScore(state);
  }

  return state;
}

function nextStep(state) {

  var newState = _.cloneDeep(state);

  if(newState.step === 0 && newState.settings.randomHand){
    newState.hand = selectRandomHand(newState.availableDeck);
    newState.step++;
  }

  if(newState.step === 1){
    newState.opponentHand = selectRandomHand(newState.availableDeck);
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
  newState.turn.selectedCard = -1;

  newState.board[payload.index] = _.assign(cardToPlaceOnBoard[0], {owner: newState.turn.currentPlayer});

  return newState;
}

function applyRules(state, payload){

  let newState = _.cloneDeep(state);

  newState.board = applyBasicRule(newState.board, payload.index);

  return newState;
}

function applyBasicRule(board, i) {

  const row = i / 3;
  const column = i % 3;

  let card = board[i];

  let cardAbove = board[i-3];
  let cardBelow = board[i+3];
  let cardAtLeft = board[i-1];
  let cardAtRight = board[i+1];

  let isNotFirstRow = row > 0;
  let isNotLastRow = row < 2;
  let isNotFirstColumn = column > 0;
  let isNotLastColumn = column < 2;

  if(isNotFirstRow && basicRule(card, cardAbove, 'top', 'bottom'))
    cardAbove.owner = card.owner;

  if(isNotLastRow && basicRule(card, cardBelow, 'bottom', 'top'))
    cardBelow.owner = card.owner;

  if(isNotFirstColumn && basicRule(card, cardAtLeft, 'left', 'right'))
    cardAtLeft.owner = card.owner;

  if(isNotLastColumn && basicRule(card, cardAtRight, 'right', 'left'))
    cardAtRight.owner = card.owner;

  if(isNotFirstRow && basicRule(cardAbove, card, 'bottom', 'top'))
    card.owner = cardAbove.owner;

  if(isNotLastRow && basicRule(cardBelow, card, 'top', 'bottom'))
    card.owner = cardBelow.owner

  if(isNotFirstColumn && basicRule(cardAtLeft, card, 'right', 'left'))
    card.owner = cardAtLeft.owner;

  if(isNotLastColumn && basicRule(cardAtRight, card, 'left', 'right'))
    card.owner = cardAtRight.owner;

  return board;
}

function basicRule(card, otherCard, attackDirection, defenseDirection){
  if(card && otherCard
      && card.owner !== otherCard.owner
      && card.rank[attackDirection] > otherCard.rank[defenseDirection]) {
      return true;//otherCard.owner = card.owner;
  }
  return false;
}

function aiTurn(state, payload) {

  let newState = _.cloneDeep(state);

  if(newState.turn.currentPlayer === 0 && newState.turn.validPieces.length > 0){
    newState.turn.currentPlayer = 1;

    let selectedCard = 0;
    newState = selectCard(newState, {index: selectedCard});

    let selectedPiece = _.sample(newState.turn.validPieces);
    newState.turn.validPieces = _.difference(newState.turn.validPieces, [selectedPiece]);

    newState = selectPiece(newState, {index: selectedPiece});

    newState.turn.currentPlayer = 0;
  }

  newState = calculateScore(newState);

  return newState;
}

function calculateScore(state){

  let newState = _.cloneDeep(state);

  let blueScore = 0;
  let redScore = 0;

  for(var i = 0; i < newState.board.length; i ++){
    if(newState.board[i] === null) continue;
    newState.board[i].owner === 0 ? blueScore++ : redScore++;
  }

  blueScore += newState.hand.length;
  redScore += newState.opponentHand.length;

  newState.score.blue = blueScore;
  newState.score.red = redScore;

  return newState;
}

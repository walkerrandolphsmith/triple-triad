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
  hand: [],
  opponentHand: [],
  turn: {
    isOpponentTurn: false,
    selectedCard: -1, //index of hand
    canSelectPiece: false,
  },
  board: [null, null, null, null, null, null, null, null, null]
});

export default function reducer(state = INITIAL_STATE, action) {

  let {type, payload} = action;

  switch(type){
    case types.NEXT_STEP: return nextStep(state);
    case types.SET_HANDS: return setHands(state);
    case types.UPDATE_SETTINGS: return updateSettings(state, payload);
    case types.ADD_CARD: return addCard(state, payload);
    case types.REMOVE_CARD: return removeCard(state, payload);
    case types.SELECT_CARD: return selectCard(state, payload);
    case types.SELECT_PIECE: return selectPiece(state, payload);
    case types.APPLY_RULES: return applyRules(state, payload);
    case types.START_AI_TURN: return startAITurn(state);
    case types.AI_TURN: return aiTurn(state);
    case types.END_AI_TURN: return endAiTurn(state);
  }

  return state;
}

function nextStep(state) {

  var newState = _.cloneDeep(state);

  newState.step++;

  return newState;
}

function setHands(state){
  var newState = _.cloneDeep(state);

  if(newState.settings.randomHand){
    newState.hand = _.cloneDeep(_.sample(newState.deck, 5));
    newState.step++;
  }

  newState.opponentHand = _.cloneDeep(_.sample(newState.deck, 5));
  newState.opponentHand.forEach(card => {
    card.owner = 1;
  });

  return newState;
}

function updateSettings(state, payload){

  var newState = _.cloneDeep(state);

  newState.settings[payload.setting] = payload.isChecked;

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

  newState.turn.selectedCard = payload.index;
  newState.turn.canSelectPiece = true;

  return newState;
}

function selectPiece(state, payload) {

  let newState = _.cloneDeep(state);

  newState.turn.canSelectPiece = false;

  let theHand = newState.turn.isOpponentTurn ? 'opponentHand' : 'hand';
  var cardToPlaceOnBoard = newState[theHand].splice(newState.turn.selectedCard, 1);
  newState.turn.selectedCard = -1;

  newState.board[payload.index] = cardToPlaceOnBoard[0];

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

function startAITurn(state){
  let newState = _.cloneDeep(state);

  newState.turn.isOpponentTurn = true;

  return newState;
}

function aiTurn(state) {

  let validPieces = state.board.reduce((validPieces, piece, index) => { if(!piece) validPieces.push(index); return validPieces }, []);

  if(validPieces.length <= 0) {
    return state;
  }

  let newState = _.cloneDeep(state);

  let selectedCard = 0;
  newState = selectCard(newState, {index: selectedCard});

  let selectedPiece = _.sample(validPieces);

  newState = selectPiece(newState, {index: selectedPiece});

  return newState;
}

function endAiTurn(state) {
  let newState = _.cloneDeep(state);

  newState.turn.isOpponentTurn = false;

  return newState;
}

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
  opponentHand: selectRandomHand({availableDeck: deck, hand: []})[1],
  handSelected: false
});

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case types.NEXTSTEP: return nextStep(state);
    case types.UPDATESETTINGS: return updateSettings(state, action.payload);
    case types.ADDCARD: return addCard(state, action.payload);
    case types.REMOVECARD: return removeCard(state, action.payload);
  }
  return state;
}

function nextStep(state) {

  if(state.step === 0 && state.settings.randomHand){
    let decks = selectRandomHand(state);
    state.availableDeck = decks[0];
    state.hand = decks[1];
    state.step++;
  }

  return {
    step: state.step + 1,
    deck : state.deck,
    settings: state.settings,
    availableDeck: state.availableDeck,
    hand: state.hand,
    opponentHand: state.opponentHand,
    handSelected: state.handSelected
  };
}

function selectRandomHand(state){
  let {availableDeck, hand} = state;
  let sample = _.sample(availableDeck, 5);
  availableDeck = _.difference(availableDeck, sample);
  return [availableDeck, sample];
}

function updateSettings(state, payload){
  let {setting, isChecked} = payload;

  state.settings[setting] = isChecked;

  return {
    step: state.step,
    deck: state.deck,
    settings: state.settings,
    availableDeck: state.availableDeck,
    hand: state.hand,
    opponentHand: state.opponentHand,
    handSelected: state.handSelected
  }
}

function addCard(state, payload){
  let hand = _.union(state.hand, state.availableDeck.splice(payload.index,1));

  return {
    step: state.step,
    deck: state.deck,
    settings: state.settings,
    availableDeck: state.availableDeck,
    hand: hand,
    opponentHand: state.opponentHand,
    handSelected: hand.length >=5
  }
}

function removeCard(state, payload){
  let availableDeck = _.union(state.availableDeck, state.hand.splice(payload.index,1));

  return {
    step: state.step,
    deck: state.deck,
    settings: state.settings,
    availableDeck: availableDeck,
    hand: state.hand,
    opponentHand: state.opponentHand,
    handSelected: false
  }
}
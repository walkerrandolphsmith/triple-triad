import Immutable from 'immutable';
import _ from 'lodash';
import deck from './../constants/deck';
import * as types from './../constants/action-types';


const INITIAL_STATE = new Immutable.Map({
  step: 0,
  deck: deck,
  availableDeck: deck,
  hand: []
});

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case types.NEXTSTEP: return nextStep(state);
    case types.ADDCARD: return addCard(state);
    case types.REMOVECARD: return removeCard(state);
  }
  return state;
}

function nextStep(state) {
  return {
    step: state.step + 1,
    deck : state.deck,
    availableDeck: state.availableDeck,
    hand: state.hand
  };
}

function addCard(state){

  let hand = _.union(state.hand, state.availableDeck.splice(0,1));

  return {
    step: state.step,
    deck: state.deck,
    availableDeck: state.availableDeck,
    hand: hand
  }
}

function removeCard(state){

  let availableDeck = _.union(state.availableDeck, state.hand.splice(0,1));

  return {
    step: state.step,
    deck: state.deck,
    availableDeck: availableDeck,
    hand: state.hand
  }
}
import Immutable from 'immutable';
import _ from 'lodash';
import deck from './../constants/deck';
import * as types from './../constants/action-types';


const INITIAL_STATE = new Immutable.Map({
  step: 0,
  deck: deck
});

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case types.NEXTSTEP: return nextStep(state);
  }
  return state;
}

function nextStep(state) {
  return {
    step: state.step + 1,
    deck : state.deck
  };
}
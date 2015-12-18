import Immutable from 'immutable';
import _ from 'lodash';
import deck from './../constants/deck';

const INITIAL_STATE = new Immutable.Map({
  deck: deck
});

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type){
    default: return state;
  }
  return state;
}

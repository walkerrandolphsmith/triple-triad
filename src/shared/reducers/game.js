import Immutable from 'immutable';
import _ from 'lodash';
const INITIAL_STATE = new Immutable.List();

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type){
    default: return state;
  }
}

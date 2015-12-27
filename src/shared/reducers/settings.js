import Immutable from 'immutable';
import _ from 'lodash';
import * as types from './../constants/action-types';

const INITIAL_STATE = new Immutable.Map({
  settings: {
    randomHand: false,
    multiplayer: false,
    visibleHand: false
  }
});

export default function reducer(state = INITIAL_STATE, action) {

  let {type, payload} = action;

  switch(type){
    case types.UPDATE_SETTINGS: return updateSettings(state, payload);
  }

  return state;
}

function updateSettings(state, payload){

  var newState = _.cloneDeep(state);

  newState.settings[payload.setting] = payload.isChecked;

  return newState;
}

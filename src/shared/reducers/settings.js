import Immutable from 'immutable';
import _ from 'lodash';
import * as types from './../constants/action-types';

const INITIAL_STATE = new Immutable.Map({
  randomHand: false,
  multiplayer: false,
  visibleHand: false
});

export default function reducer(state = INITIAL_STATE, action) {

  let {type, payload} = action;

  switch(type){
    case types.UPDATE_SETTINGS: return updateSettings(state, payload);
    case types.RESET_SETTINGS: return resetSettings(state);
  }

  return state;
}

function updateSettings(state, payload){

  var newState = _.cloneDeep(state);

  newState[payload.setting] = payload.isChecked;

  return newState;
}

function resetSettings(state){
  return INITIAL_STATE.toJS();
}
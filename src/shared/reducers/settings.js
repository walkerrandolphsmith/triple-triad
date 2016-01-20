import Immutable from 'immutable';
import * as types from './../constants/action-types';

const INITIAL_STATE = new Immutable.Map({
  randomHand: false,
  multiplayer: false,
  visibleHand: false,
  focused: -1
});

export default function reducer(state = INITIAL_STATE, action) {

  let {type, payload} = action;

  switch(type){
    case types.UPDATE_SETTINGS: return state.set(payload.setting, !state.get(payload.setting));
    case types.UPDATE_FOCUS_SETTING: return state.set('focused', payload.setting);
  }

  return state;
}
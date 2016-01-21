import { Map } from 'immutable';
import {
  UPDATE_SETTINGS,
  UPDATE_FOCUS_SETTING
} from './../constants/action-types';

const INITIAL_STATE = new Map({
  randomHand: false,
  multiplayer: false,
  visibleHand: false,
  focused: -1
});

export default function reducer(state = INITIAL_STATE, action = {}) {

  let {type, payload} = action;

  switch(type){
    case UPDATE_SETTINGS: return state.set(payload.setting, !state.get(payload.setting));
    case UPDATE_FOCUS_SETTING: return state.set('focused', payload.setting);
  }

  return state;
}
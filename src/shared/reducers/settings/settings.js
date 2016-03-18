import { Map } from 'immutable';
import {
  UPDATE_SETTINGS,
  UPDATE_FOCUS_SETTING
} from './../../constants/actionTypes';
import updateFocusSetting from './updateFocusSetting';
import updateSettings from './updateSettings';

const INITIAL_STATE = new Map({
  randomHand: false,
  multiplayer: false,
  visibleHand: false,
  focused: -1
});

export default function reducer(state = INITIAL_STATE, action = {}) {

  let {type, payload} = action;

  switch(type){
    case UPDATE_SETTINGS: return updateSettings(state, payload);
    case UPDATE_FOCUS_SETTING: return updateFocusSetting(state, payload);
  }

  return state;
}
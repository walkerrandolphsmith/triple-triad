import { Map } from 'immutable';

import { focusSettingUpdated } from './mutations/focusSettingUpdated';
import { settingUpdated } from './mutations/settingUpdated';

export const UPDATE_FOCUS_SETTING = 'UPDATE_FOCUS_SETTING';
export const UPDATE_SETTING = 'UPDATE_SETTING';

export { updateFocusSetting } from './actions/updateFocusSetting';
export { updateSetting } from './actions/updateSetting';

const INITIAL_STATE = new Map({
    randomHand: false,
    multiplayer: false,
    visibleHand: false,
    focused: -1
});

export default function reducer(state = INITIAL_STATE, action = {}) {
    let { type, payload } = action;

    switch(type) {
        case UPDATE_FOCUS_SETTING: return focusSettingUpdated(state, payload);
        case UPDATE_SETTING: return settingUpdated(state, payload);
        default: return state;
    }
}
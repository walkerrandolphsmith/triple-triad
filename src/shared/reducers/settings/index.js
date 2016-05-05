import { Map } from 'immutable';

export const UPDATE_FOCUS_SETTING = 'UPDATE_FOCUS_SETTING';
export const UPDATE_SETTING = 'UPDATE_SETTING';

export const updateFocusSetting = setting => ({
    type: UPDATE_FOCUS_SETTING,
    payload: {
        setting: setting
    }
});

export const updateSetting = setting => ({
    type: UPDATE_SETTING,
    payload: {
        setting: setting
    }
});

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

export const focusSettingUpdated = (state, payload) => state.set('focused', payload.setting);
export const settingUpdated = (state, payload) => state.set(payload.setting, !state.get(payload.setting));
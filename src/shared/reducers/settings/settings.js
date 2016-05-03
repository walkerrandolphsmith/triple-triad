import { Map } from 'immutable';

export const UPDATE_FOCUS_SETTING = 'UpdateFocusSetting';
export const UPDATE_SETTINGS = 'UpdateSettings';

export const updateFocusSetting = setting => ({
    type: UPDATE_FOCUS_SETTING,
    payload: {
        setting: setting
    }
});

export const updateSetting = setting => ({
    type: UPDATE_SETTINGS,
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
        case UPDATE_FOCUS_SETTING: return setFocusSetting(state, payload);
        case UPDATE_SETTINGS: return setSetting(state, payload);
        default: return state;
    }
}

export const setFocusSetting = (state, payload) => state.set('focused', payload.setting);
export const setSetting = (state, payload) => state.set(payload.setting, !state.get(payload.setting));
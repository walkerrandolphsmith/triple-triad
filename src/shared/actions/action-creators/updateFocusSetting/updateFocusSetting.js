import { UPDATE_FOCUS_SETTING } from './../../../constants/actionTypes';

export function updateFocusSetting(setting) {
    return {
        type: UPDATE_FOCUS_SETTING,
        payload: {
            setting: setting
        }
    }
}
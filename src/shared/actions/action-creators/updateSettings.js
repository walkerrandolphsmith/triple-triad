import { UPDATE_SETTINGS } from './../../constants/actionTypes';

export function updateSettings(setting, isChecked) {
    return {
        type: UPDATE_SETTINGS,
        payload: {
            setting: setting
        }
    }
}
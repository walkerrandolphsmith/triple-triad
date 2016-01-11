import { UPDATE_SETTINGS } from './../../constants/action-types';

export function updateSettings(setting, isChecked) {
    return {
        type: UPDATE_SETTINGS,
        payload: {
            setting: setting,
            isChecked: isChecked
        }
    }
}
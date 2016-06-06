import { UPDATE_FOCUS_SETTING } from './../index';
export const updateFocusSetting = setting => ({
    type: UPDATE_FOCUS_SETTING,
    payload: {
        setting: setting
    }
});
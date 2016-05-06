import { UPDATE_SETTING } from './../index';
export const updateSetting = setting => ({
    type: UPDATE_SETTING,
    payload: {
        setting: setting
    }
});
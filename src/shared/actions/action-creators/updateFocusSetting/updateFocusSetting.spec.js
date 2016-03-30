import expect from 'expect';
import { UPDATE_FOCUS_SETTING } from './../../../constants/actionTypes';
import { updateFocusSetting } from './updateFocusSetting';

describe('UPDATE_FOCUS_SETTING', () => {
    let setting;
    let expectedAction;
    beforeEach(() => {
        setting = 'mulitplayer';
        expectedAction = {
            type: UPDATE_FOCUS_SETTING,
            payload: {
                setting: setting
            }
        };
    });
    it('should create an action to set the focused setting', () => {
        expect(updateFocusSetting(setting)).toEqual(expectedAction);
    });
});
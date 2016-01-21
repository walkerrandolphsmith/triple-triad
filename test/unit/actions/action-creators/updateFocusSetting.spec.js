import expect from 'expect';
import { UPDATE_FOCUS_SETTING } from './../../../../src/shared/constants/actionTypes';
import { updateFocusSetting } from './../../../../src/shared/actions/action-creators/';

describe('UPDATE_FOCUS_SETTING', () => {

    it('should create an action to set the focused setting', () => {
        const expectedAction = {
            type: UPDATE_FOCUS_SETTING,
            payload: {
                setting: "multiplayer"
            }
        };
        expect(updateFocusSetting("multiplayer")).toEqual(expectedAction)
    });

});
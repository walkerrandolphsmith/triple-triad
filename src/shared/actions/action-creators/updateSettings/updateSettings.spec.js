import expect from 'expect';
import { UPDATE_SETTINGS } from './../../../constants/actionTypes';
import { updateSettings } from './updateSettings';

describe('UPDATE_SETTINGS', () => {
    let setting;
    let expectedAction;
    beforeEach(() => {
        setting = 'multiplayer';
        expectedAction = {
            type: UPDATE_SETTINGS,
            payload: {
                setting: setting
            }
        };
    });
    it('should create an action to update a game setting', () => {
        expect(updateSettings(setting)).toEqual(expectedAction);
    });
});
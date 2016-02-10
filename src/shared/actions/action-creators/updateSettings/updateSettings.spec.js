import expect from 'expect';
import { UPDATE_SETTINGS } from './../../../constants/actionTypes';
import { updateSettings } from './updateSettings';

describe('UPDATE_SETTINGS', () => {

    it('should create an action to update a game setting', () => {
        const expectedAction = {
            type: UPDATE_SETTINGS,
            payload: {
                setting: "multiplayer"
            }
        };
        expect(updateSettings("multiplayer")).toEqual(expectedAction)
    });

});
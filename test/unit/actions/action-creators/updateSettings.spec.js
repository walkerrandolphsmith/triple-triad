import expect from 'expect';
import { UPDATE_SETTINGS } from './../../../../src/shared/constants/action-types';
import { updateSettings } from './../../../../src/shared/actions/action-creators/';

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
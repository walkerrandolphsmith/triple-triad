import expect from 'expect';
import { RESET_SETTINGS } from './../../../../src/shared/constants/action-types';
import { resetSettings } from './../../../../src/shared/actions/action-creators/';

describe('RESET_SETTINGS', () => {

    it('should create an action to trigger a rest of the settings', () => {
        const expectedAction = {
            type: RESET_SETTINGS
        };
        expect(resetSettings()).toEqual(expectedAction)
    });

});
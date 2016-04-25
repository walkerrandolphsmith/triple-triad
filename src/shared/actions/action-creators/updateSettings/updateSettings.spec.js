import expect from 'expect';
import { UPDATE_SETTINGS } from './../../../constants/actionTypes';
import { updateSettings } from './updateSettings';

describe('src/shared/actions/action-creators/updateSettings', () => {
    describe('Given UPDATE_SETTINGS action type', () => {
        let setting;
        let expectedAction;
        beforeEach(() => {
            setting = 'visibleHand';
            expectedAction = {
                type: UPDATE_SETTINGS,
                payload: {
                    setting: setting
                }
            };
        });

        describe('When invoking the updateSettings action creator', () => {
            it('should create an action', () => {
                expect(updateSettings(setting)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload setting field', () => {
                expect(updateSettings(setting).payload.setting).toEqual(setting);
            });
        });
    });
});
import expect from 'expect';
import { UPDATE_SETTINGS, updateSetting } from './../settings';

describe('src/shared/reducers/settings/updateSetting', () => {
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
                expect(updateSetting(setting)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload setting field', () => {
                expect(updateSetting(setting).payload.setting).toEqual(setting);
            });
        });
    });
});
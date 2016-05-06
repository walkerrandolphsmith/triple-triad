import expect from 'expect';
import { UPDATE_SETTING, updateSetting } from './../index';

describe('src/shared/reducers/settings/actions/updateSetting', () => {
    describe('Given UPDATE_SETTINGS action type', () => {
        let setting;
        let expectedAction;
        beforeEach(() => {
            setting = 'visibleHand';
            expectedAction = {
                type: UPDATE_SETTING,
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
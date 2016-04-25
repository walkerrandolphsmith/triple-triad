import expect from 'expect';
import { UPDATE_FOCUS_SETTING } from './../../../constants/actionTypes';
import { updateFocusSetting } from './updateFocusSetting';

describe('src/shared/actions/action-creators/updateFocusSettings', () => {
    describe('Given UPDATE_FOCUS_SETTING action type', () => {
        let setting;
        let expectedAction;
        beforeEach(() => {
            setting = 'visibleHand';
            expectedAction = {
                type: UPDATE_FOCUS_SETTING,
                payload: {
                    setting: setting
                }
            };
        });

        describe('When invoking the updateFocusSetting action creator', () => {
            it('should create an action', () => {
                expect(updateFocusSetting(setting)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload setting field', () => {
                expect(updateFocusSetting(setting).payload.setting).toEqual(setting);
            });
        });
    });
});
import expect from 'expect';
import { Map } from 'immutable';
import reducer from './index';
import { UPDATE_SETTING, UPDATE_FOCUS_SETTING, __RewireAPI__ } from './index';

describe('src/shared/reducers/settings', () => {
    describe('Given settings state', () => {
        let initialState;
        beforeEach(() => {
            initialState = new Map({
                randomHand: false,
                multiplayer: false,
                visibleHand: false,
                focused: -1
            });
        });

        describe('When given no state', () => {
            it('should return the initial state', () => {
                expect(reducer(undefined, {})).toEqual(initialState);
            });
        });

        describe('When handling UPDATE_SETTINGS', () => {
            let settingUpdated = expect.createSpy();
            __RewireAPI__.__Rewire__('settingUpdated', settingUpdated);

            reducer(initialState, {
                type: UPDATE_SETTING,
                payload: {
                    setting: 'randomHand'
                }
            });

            it('should call settingUpdated', () => {
                expect(settingUpdated).toHaveBeenCalled();
            });
        });

        describe('When handling UPDATE_FOCUS_SETTING', () => {
            let focusSettingUpdated = expect.createSpy();
            __RewireAPI__.__Rewire__('focusSettingUpdated', focusSettingUpdated);

            reducer(initialState, {
                type: UPDATE_FOCUS_SETTING,
                payload: {
                    setting: 'randomHand'
                }
            });

            it('should call focusSettingUpdated', () => {
                expect(focusSettingUpdated).toHaveBeenCalled();
            });
        });
    });
});
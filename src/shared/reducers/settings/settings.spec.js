import expect from 'expect';
import { Map } from 'immutable';
import reducer from './settings';
import { __RewireAPI__ } from './settings';
import { UPDATE_SETTINGS, UPDATE_FOCUS_SETTING } from './../../constants/actionTypes';

describe("Given settings state", () => {

    let initialState;
    beforeEach(() => {
        initialState = new Map({
            randomHand: false,
            multiplayer: false,
            visibleHand: false,
            focused: -1
        });
    });

    describe("When given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe("When handling UPDATE_SETTINGS", () => {

        let updateSettings = expect.createSpy();
        __RewireAPI__.__Rewire__('updateSettings', updateSettings);

        reducer(initialState, {
            type: UPDATE_SETTINGS,
            payload: {
                setting: "randomHand"
            }
        });

        it('should call updateSettings', () => {
            expect(updateSettings).toHaveBeenCalled();
        });
    });

    describe("When handling UPDATE_FOCUS_SETTING", () => {

        let updateFocusSetting = expect.createSpy();
        __RewireAPI__.__Rewire__('updateFocusSetting', updateFocusSetting);

        reducer(initialState, {
            type: UPDATE_FOCUS_SETTING,
            payload: {
                setting: "randomHand"
            }
        });

        it('should call updateFocusSetting', () => {
            expect(updateFocusSetting).toHaveBeenCalled();
        });
    });
});
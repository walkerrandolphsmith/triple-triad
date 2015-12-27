import expect from 'expect';
import reducer from './../../src/shared/reducers/settings';
import * as types from './../../src/shared/constants/action-types';
import deck from './../../src/shared/constants/deck';

describe("When updating the random hand setting", () => {

    let newState;
    beforeEach(() => {
        let initialState = {
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            }
        };

        newState = reducer(initialState, {
            type: types.UPDATE_SETTINGS,
            payload: {
                setting: "randomHand",
                isChecked: true
            }
        });

    });

    it('should handle UPDATE_SETTINGS random hand', () => {
        expect(newState.settings.randomHand).toEqual(true)
    });
});

describe("when updating the multiplayer settings", () => {

    let newState;
    beforeEach(() => {
        let initialState = {
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            }
        };

        newState = reducer(initialState, {
            type: types.UPDATE_SETTINGS,
            payload: {
                setting: "multiplayer",
                isChecked: true
            }
        });
    });

    it('should handle UPDATE_SETTINGS multiplayer', () => {
        expect(newState.settings.multiplayer).toEqual(true)
    });
});

describe("when updating the visible hand settings", () => {

    let newState;
    beforeEach(() => {
        let initialState = {
            settings: {
                randomHand: false,
                multiplayer: false,
                visibleHand: false
            }
        };

        newState = reducer(initialState, {
            type: types.UPDATE_SETTINGS,
            payload: {
                setting: "visibleHand",
                isChecked: true
            }
        });
    });

    it('should handle UPDATE_SETTINGS visible hand', () => {
        expect(newState.settings.visibleHand).toEqual(true)
    });
});
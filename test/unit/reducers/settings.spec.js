import expect from 'expect';
import { Map } from 'immutable';
import reducer from './../../../src/shared/reducers/settings';
import * as types from './../../../src/shared/constants/actionTypes';

describe("Settings reducer", () => {

    let initialState;
    beforeEach(() => {
        initialState = new Map({
            randomHand: false,
            multiplayer: false,
            visibleHand: false,
            focused: -1
        });
    });


    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });


    describe("When updating the random hand setting", () => {

        let newState;
        beforeEach(() => {
            newState = reducer(initialState, {
                type: types.UPDATE_SETTINGS,
                payload: {
                    setting: "randomHand"
                }
            });
        });

        it('should handle UPDATE_SETTINGS random hand', () => {
            expect(newState.get('randomHand')).toEqual(true)
        });
    });

    describe("when updating the multiplayer settings", () => {

        let newState;
        beforeEach(() => {
            newState = reducer(initialState, {
                type: types.UPDATE_SETTINGS,
                payload: {
                    setting: "multiplayer"
                }
            });
        });

        it('should handle UPDATE_SETTINGS multiplayer', () => {
            expect(newState.get('multiplayer')).toEqual(true)
        });
    });

    describe("when updating the visible hand settings", () => {

        let newState;
        beforeEach(() => {
            newState = reducer(initialState, {
                type: types.UPDATE_SETTINGS,
                payload: {
                    setting: "visibleHand"
                }
            });
        });

        it('should handle UPDATE_SETTINGS visible hand', () => {
            expect(newState.get('visibleHand')).toEqual(true)
        });
    });

});
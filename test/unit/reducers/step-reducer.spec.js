import expect from 'expect';
import { toJS, fromJS } from 'immutable';
import reducer from './../../../src/shared/reducers/step';
import * as types from './../../../src/shared/constants/action-types';

describe("Step reducer", () => {

    let initialState;
    beforeEach(() => {
        initialState = fromJS({
            current: 0
        });
    });


    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });


    describe("When proceeding to the next step", () => {

        let newState;
        beforeEach(() => {
            newState = reducer(initialState, {
                type: types.NEXT_STEP
            });
        });

        it('should handle NEXT_STEP by incrementing current step', () => {
            expect(newState.get('current')).toEqual(initialState.get('current') + 1)
        });
    });

    describe("When resetting the current step to 0", () => {

        let newState;
        beforeEach(() => {
            newState = reducer(initialState, {
                type: types.RESET_STEP
            });
        });

        it('should handle RESET_STEP', () => {
            expect(newState).toEqual(initialState)
        });
    });

});
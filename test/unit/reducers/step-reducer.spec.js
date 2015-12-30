import expect from 'expect';
import reducer from './../../../src/shared/reducers/step';
import * as types from './../../../src/shared/constants/action-types';

describe("Step reducer", () => {

    let initialState;
    beforeEach(() => {
        initialState = {
            current: 0
        };
    });


    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {}).toJS()).toEqual(initialState)
        });
    });


    describe("When proceeding to the next step", () => {

        let newState;
        beforeEach(() => {
            newState = reducer(initialState, {
                type: 'NextStep'
            });
        });

        it('should handle NEXT_STEP by incrementing current step', () => {
            expect(newState.current).toEqual(initialState.current + 1)
        });
    });

});
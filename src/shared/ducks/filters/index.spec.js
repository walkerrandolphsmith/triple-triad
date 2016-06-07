import expect from 'expect';
import { Map } from 'immutable';
import reducer from './index';
import {
    SHOW_CLOSED,
    __RewireAPI__
} from './index';

describe('src/shared/reducers/filters', () => {
    describe('Given an filters state', () => {
        let initialState;
        beforeEach(() => {
            initialState = new Map({
                showClosed: false
            });
        });

        describe('When given no state', () => {
            it('should return the initial state', () => {
                expect(reducer(undefined, {})).toEqual(initialState);
            });
        });

        describe('When handling SHOW_CLOSED', () => {
            let closedShown = expect.createSpy();
            __RewireAPI__.__Rewire__('closedShown', closedShown);

            reducer(initialState, {
                type: SHOW_CLOSED
            });

            it('should call closedShown', () => {
                expect(closedShown).toHaveBeenCalled();
            });
        });
    });
});
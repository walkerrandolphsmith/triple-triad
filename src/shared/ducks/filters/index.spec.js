import expect from 'expect';
import { Map } from 'immutable';
import reducer from './index';
import {
    SHOW_CLOSED,
    FILTER_WINNER_TYPE,
    FILTER_PHASE,
    __RewireAPI__
} from './index';

describe('src/shared/reducers/filters', () => {
    describe('Given an filters state', () => {
        let initialState;
        beforeEach(() => {
            initialState = new Map({
                showClosed: true,
                winnerType: 'all',
                phase: 'all'
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

        describe('When handling FILTER_WINNER_TYPE', () => {
            let filteredWinnerType = expect.createSpy();
            __RewireAPI__.__Rewire__('filteredWinnerType', filteredWinnerType);

            reducer(initialState, {
                type: FILTER_WINNER_TYPE,
                payload: {
                    winnerType: 'winner'
                }
            });

            it('should call filteredWinnerType', () => {
                expect(filteredWinnerType).toHaveBeenCalled();
            });
        });

        describe('When handling FILTER_PHASE', () => {
            let filteredPhase = expect.createSpy();
            __RewireAPI__.__Rewire__('filteredPhase', filteredPhase);

            reducer(initialState, {
                type: FILTER_PHASE,
                payload: {
                    winnerType: 'winner'
                }
            });

            it('should call filteredPhase', () => {
                expect(filteredPhase).toHaveBeenCalled();
            });
        });
    });
});
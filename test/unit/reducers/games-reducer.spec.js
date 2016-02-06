import expect from 'expect';
import { Map, List } from 'immutable';
import reducer from './../../../src/shared/reducers/games';
import {
    GET_GAMES_FAILED,
    RECEIVE_GAMES,
    REQUEST_GAMES
} from './../../../src/shared/constants/actionTypes';

describe("Game reducer", () => {

    let initialState;
    beforeEach(() => {
        initialState = new Map({
            loading: false,
            loaded: false,
            failed: false,
            games: new List([])
        });
    });

    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe('requesting games', () => {

        it('should handle REQUEST_GAMES by settings the loading state to true', () => {
            let newState = reducer(initialState, {
                type: REQUEST_GAMES
            });
            expect(newState.get('loading')).toEqual(true);
            expect(newState.get('loaded')).toEqual(false);
            expect(newState.get('failed')).toEqual(false);
        });
    });

    describe('receiving games', () => {

        it('should handle RECEIVE_GAMES by settings the loading state to true', () => {
            let newState = reducer(initialState, {
                type: RECEIVE_GAMES,
                payload: {
                    games: [{id: 0}]
                }
            });
            expect(newState.get('loading')).toEqual(false);
            expect(newState.get('loaded')).toEqual(true);
            expect(newState.get('failed')).toEqual(false);
            expect(newState.get('games').size).toEqual(1);
        });
    });

    describe('get games failed', () => {

        it('should handle GET_GAMES_FAILED by settings the failed state to true', () => {
            let newState = reducer(initialState, {
                type: GET_GAMES_FAILED
            });
            expect(newState.get('loading')).toEqual(false);
            expect(newState.get('loaded')).toEqual(false);
            expect(newState.get('failed')).toEqual(true);
        });
    });


});
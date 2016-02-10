import expect from 'expect';
import { Map, List } from 'immutable';
import reducer from './games';
import {
    GET_GAMES_FAILED,
    RECEIVE_GAMES,
    REQUEST_GAMES,
    REQUEST_NEW_GAME,
    RECEIVE_NEW_GAME,
    CREATE_FAILED
} from './../../constants/actionTypes';

describe("Games reducer", () => {

    let initialState;
    beforeEach(() => {
        initialState = new Map({
            getGames: new Map({
                loading: false,
                loaded: false,
                failed: false
            }),
            newGame: new Map({
                loading: false,
                loaded: false,
                failed: false
            }),
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
            expect(newState.get('getGames').get('loading')).toEqual(true);
            expect(newState.get('getGames').get('loaded')).toEqual(false);
            expect(newState.get('getGames').get('failed')).toEqual(false);
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
            expect(newState.get('getGames').get('loading')).toEqual(false);
            expect(newState.get('getGames').get('loaded')).toEqual(true);
            expect(newState.get('getGames').get('failed')).toEqual(false);
            expect(newState.get('games').size).toEqual(1);
        });
    });

    describe('get games failed', () => {

        it('should handle GET_GAMES_FAILED by settings the failed state to true', () => {
            let newState = reducer(initialState, {
                type: GET_GAMES_FAILED
            });
            expect(newState.get('getGames').get('loading')).toEqual(false);
            expect(newState.get('getGames').get('loaded')).toEqual(false);
            expect(newState.get('getGames').get('failed')).toEqual(true);
        });
    });

    describe('requesting to create new game', () => {

        it('should handle REQUEST_NEW_GAME by settings the loading state to true', () => {
            let newState = reducer(initialState, {
                type: REQUEST_NEW_GAME
            });
            expect(newState.get('newGame').get('loading')).toEqual(true);
            expect(newState.get('newGame').get('loaded')).toEqual(false);
            expect(newState.get('newGame').get('failed')).toEqual(false);
        });
    });

    describe('receiving a new game', () => {

        it('should handle RECEIVE_NEW_GAME by settings the loading state to true', () => {
            let newState = reducer(initialState, {
                type: RECEIVE_NEW_GAME,
                payload: {
                    game: {id: 0}
                }
            });
            expect(newState.get('newGame').get('loading')).toEqual(false);
            expect(newState.get('newGame').get('loaded')).toEqual(true);
            expect(newState.get('newGame').get('failed')).toEqual(false);
            expect(newState.get('games').size).toEqual(1);
        });
    });

    describe('create game failed', () => {

        it('should handle CREATE_FAILED by settings the failed state to true', () => {
            let newState = reducer(initialState, {
                type: CREATE_FAILED
            });
            expect(newState.get('newGame').get('loading')).toEqual(false);
            expect(newState.get('newGame').get('loaded')).toEqual(false);
            expect(newState.get('newGame').get('failed')).toEqual(true);
        });
    });


});